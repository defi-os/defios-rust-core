use crate::error::ApplicationError;
use crate::events::review::{JobReviewed, ReviewerType};
use crate::state::job::Job;
use anchor_lang::prelude::*;

#[derive(Accounts)]
pub struct AddReview<'info> {
    pub reviewer: Signer<'info>,
    #[account(
    seeds = [
        b"boringlif",
        job.job_creator.as_ref(),
        job.job_name.as_bytes()
    ],
    bump=job.bump)
    ]
    pub job: Account<'info, Job>,
    pub system_program: Program<'info, System>,
}

pub fn handler(
    ctx: Context<AddReview>,
    reviewer_type: ReviewerType,
    review: String,
    review_no: u16,
) -> Result<()> {
    let job = &ctx.accounts.job;
    let reviewer = &ctx.accounts.reviewer;

    require!(
        review_no > 0 && review_no < 100,
        ApplicationError::InvalidReview
    );
    require!(job.job_completed, ApplicationError::JobNotYetCompleted);

    match reviewer_type {
        ReviewerType::Freelancer => match job.assigned_freelancer {
            Some(assigned_freelancer) => {
                require!(
                    reviewer.key().eq(&assigned_freelancer),
                    ApplicationError::UnauthorizedToReview
                );
            }
            None => {
                require!(true.eq(&false), ApplicationError::NoFreelancerSelected)
            }
        },
        ReviewerType::JobCreator => {
            require!(
                reviewer.key().eq(&job.job_creator),
                ApplicationError::UnauthorizedToReview
            );
        }
    };

    emit!(JobReviewed {
        reviewer: reviewer.key(),
        reviewer_type: reviewer_type,
        review: review,
        review_no: review_no
    });

    Ok(())
}
