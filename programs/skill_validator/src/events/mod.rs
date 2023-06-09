//! Anchor events are used to emit information necessary to
//! index changes made to a SPL ConcurrentMerkleTree

use anchor_lang::prelude::*;

mod application_data;
mod changelog_event;
pub mod fit;
pub mod freelancer;
pub mod indexed_data;
pub mod job;
pub mod leaf_stake;
pub mod name_router;
pub mod review;
pub mod skill;

pub use application_data::{ApplicationDataEvent, ApplicationDataEventV1};
pub use changelog_event::{ChangeLogEvent, ChangeLogEventV1};
pub use fit::*;
pub use freelancer::*;
pub use indexed_data::*;
pub use job::*;
pub use leaf_stake::*;
pub use name_router::*;
pub use review::*;
pub use skill::*;

#[derive(AnchorDeserialize, AnchorSerialize)]
#[repr(C)]
pub enum AccountCompressionEvent {
    ChangeLog(ChangeLogEvent),
    ApplicationData(ApplicationDataEvent),
}
