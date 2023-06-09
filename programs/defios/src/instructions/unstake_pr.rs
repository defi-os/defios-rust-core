use crate::error::DefiOSError;
use crate::event::PullRequestUnstaked;
use crate::state::{Issue, PRStaker, PullRequest};
use anchor_lang::prelude::*;
use anchor_spl::{
    associated_token::AssociatedToken,
    token::{close_account, transfer, CloseAccount, Mint, Token, TokenAccount, Transfer},
};

#[derive(Accounts)]
pub struct UnStakePR<'info> {
    ///CHECK: Check done using other constraints
    #[account(mut, address = pull_request_metadata_account.sent_by)]
    pub pull_request_addr: AccountInfo<'info>,
    #[account(mut)]
    pub issue: Box<Account<'info, Issue>>,
    #[account(
        seeds = [
            b"pullrequestadded",
            issue.key().as_ref(),
            pull_request_addr.key().as_ref()
        ],
        bump
    )]
    pub pull_request_metadata_account: Account<'info, PullRequest>,
    #[account(mut)]
    pub pull_request_token_account: Account<'info, TokenAccount>,
    #[account(mut)]
    pub pull_request_staker: Signer<'info>,
    #[account(
        mut,
        constraint = pull_request_staker_token_account.mint.eq(&pull_request_token_account.mint),
        constraint = pull_request_staker_token_account.owner.eq(&pull_request_staker.key())
    )]
    pub pull_request_staker_token_account: Account<'info, TokenAccount>,
    #[account(
        seeds = [b"pullrestaker", pull_request_metadata_account.key().as_ref(), pull_request_staker.key().as_ref()],
        bump
    )]
    pub pull_request_staker_account: Account<'info, PRStaker>,
    #[account(mut)]
    pub rewards_mint: Account<'info, Mint>,
    pub system_program: Program<'info, System>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub token_program: Program<'info, Token>,
}

pub fn handler(ctx: Context<UnStakePR>) -> Result<()> {
    let pull_request_staker = &ctx.accounts.pull_request_staker;
    let issue = &ctx.accounts.issue;
    let pull_request_staker_account = &mut ctx.accounts.pull_request_staker_account;
    let pull_request_staker_token_account = &ctx.accounts.pull_request_staker_token_account;
    let pull_request_token_account = &ctx.accounts.pull_request_token_account;
    let rewards_mint = &ctx.accounts.rewards_mint;
    let pull_request_addr = &ctx.accounts.pull_request_addr;
    let pull_request_metadata_account = &ctx.accounts.pull_request_metadata_account;

    require!(
        !pull_request_metadata_account.accepted,
        DefiOSError::PullRequestClosedAlready
    );

    let issue_key = issue.key().clone();
    let pull_request_addr_key = pull_request_addr.key().clone();

    let signer_seeds: &[&[&[u8]]] = &[&[
        b"pullrequestadded",
        issue_key.as_ref(),
        pull_request_addr_key.as_ref(),
        &[pull_request_metadata_account.bump],
    ]];

    transfer(
        CpiContext::new_with_signer(
            ctx.accounts.token_program.to_account_info(),
            Transfer {
                from: pull_request_token_account.to_account_info(),
                to: pull_request_staker_token_account.to_account_info(),
                authority: pull_request_metadata_account.to_account_info(),
            },
            signer_seeds,
        ),
        pull_request_staker_account.staked_amount,
    )?;

    close_account(CpiContext::new_with_signer(
        ctx.accounts.token_program.to_account_info(),
        CloseAccount {
            account: pull_request_token_account.to_account_info(),
            authority: pull_request_metadata_account.to_account_info(),
            destination: pull_request_staker.to_account_info(),
        },
        signer_seeds,
    ))?;

    emit!(PullRequestUnstaked {
        pr_staker: pull_request_staker.key(),
        pr_staker_token_account: pull_request_staker_token_account.key(),
        pr_account: pull_request_metadata_account.key(),
        staked_amount: pull_request_staker_account.staked_amount,
        rewards_mint: rewards_mint.key(),
        pr_contribution_link: pull_request_metadata_account.metadata_uri.clone()
    });

    Ok(())
}
