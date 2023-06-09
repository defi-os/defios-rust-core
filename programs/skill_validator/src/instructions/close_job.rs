use crate::error::ApplicationError;
use crate::events::job::JobClosed;
use crate::state::job::Job;
use anchor_lang::prelude::*;
use anchor_spl::{
    associated_token::AssociatedToken,
    mint::USDC,
    token::{close_account, transfer, CloseAccount, Mint, Token, TokenAccount, Transfer},
};

#[derive(Accounts)]
pub struct CloseJob<'info> {
    #[account(mut,address=job.job_creator@ApplicationError::UnauthorizedStakeAttempt)]
    pub job_addr: Signer<'info>,
    #[account(mut)]
    pub job_addr_usdc_account: Option<Account<'info, TokenAccount>>,
    #[account(
    mut,
    seeds = [
        b"boringlif",
        job_addr.key().as_ref(),
        job.job_name.as_bytes()
    ],
    bump=job.bump,
close = job_addr)
    ]
    pub job: Account<'info, Job>,
    #[account(mut)]
    pub job_usdc_account: Option<Account<'info, TokenAccount>>,
    // #[account(address=USDC@ApplicationError::NonUSDCStakingNotSupported)]
    pub usdc_mint: Account<'info, Mint>,
    pub token_program: Program<'info, Token>,
    pub associated_token_program: Program<'info, AssociatedToken>,
    pub system_program: Program<'info, System>,
}

pub fn handler(ctx: Context<CloseJob>) -> Result<()> {
    let job = &mut ctx.accounts.job;
    let token_program = &ctx.accounts.token_program;
    let job_usdc_account = &mut ctx.accounts.job_usdc_account;
    let job_addr_usdc_account = &mut ctx.accounts.job_addr_usdc_account;
    let job_addr = &mut ctx.accounts.job_addr;
    let usdc_mint = &ctx.accounts.usdc_mint;

    require!(!job.job_completed, ApplicationError::CantCloseJob);

    match job_usdc_account {
        Some(job_usdc_account) => match job_addr_usdc_account {
            Some(job_addr_usdc_account) => {
                require!(
                    job_usdc_account.mint == usdc_mint.key(),
                    ApplicationError::NonUSDCStakingNotSupported
                );
                require!(
                    job_usdc_account.owner == job.key(),
                    ApplicationError::IncorrectTokenAccount
                );
                require!(
                    job_addr_usdc_account.mint == usdc_mint.key(),
                    ApplicationError::NonUSDCStakingNotSupported
                );
                require!(
                    job_addr_usdc_account.owner == job_addr.key(),
                    ApplicationError::IncorrectTokenAccount
                );
                let job_key = job_addr.key();
                let signer_seeds: &[&[&[u8]]] = &[&[
                    b"boringlif",
                    job_key.as_ref(),
                    job.job_name.as_bytes(),
                    &[job.bump],
                ]];

                transfer(
                    CpiContext::new_with_signer(
                        token_program.to_account_info(),
                        Transfer {
                            from: job_usdc_account.to_account_info(),
                            to: job_addr_usdc_account.to_account_info(),
                            authority: job.to_account_info(),
                        },
                        signer_seeds,
                    ),
                    job_usdc_account.amount,
                )?;

                close_account(CpiContext::new_with_signer(
                    token_program.to_account_info(),
                    CloseAccount {
                        account: job_usdc_account.to_account_info(),
                        authority: job.to_account_info(),
                        destination: job_addr.to_account_info(),
                    },
                    signer_seeds,
                ))?;
            }
            None => {
                require!(job.job_stake == 0, ApplicationError::USDCAccountNotSent)
            }
        },
        None => {}
    };

    emit!(JobClosed {
        job: ctx.accounts.job.key()
    });
    Ok(())
}
