/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from "@solana/spl-token";
import * as beet from "@metaplex-foundation/beet";
import * as web3 from "@solana/web3.js";

/**
 * @category Instructions
 * @category ClaimReward
 * @category generated
 */
export const claimRewardStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */;
}>(
  [["instructionDiscriminator", beet.uniformFixedSizeArray(beet.u8, 8)]],
  "ClaimRewardInstructionArgs"
);
/**
 * Accounts required by the _claimReward_ instruction
 *
 * @property [] pullRequest
 * @property [_writable_, **signer**] pullRequestCreator
 * @property [_writable_] pullRequestCreatorRewardAccount
 * @property [_writable_] rewardsMint
 * @property [] repositoryCreator
 * @property [] issueCreator
 * @property [] repositoryAccount
 * @property [_writable_] issueAccount
 * @property [_writable_] issueTokenPoolAccount
 * @property [_writable_] pullRequestTokenAccount
 * @property [] associatedTokenProgram
 * @category Instructions
 * @category ClaimReward
 * @category generated
 */
export type ClaimRewardInstructionAccounts = {
  pullRequest: web3.PublicKey;
  pullRequestCreator: web3.PublicKey;
  pullRequestCreatorRewardAccount: web3.PublicKey;
  rewardsMint: web3.PublicKey;
  repositoryCreator: web3.PublicKey;
  issueCreator: web3.PublicKey;
  repositoryAccount: web3.PublicKey;
  issueAccount: web3.PublicKey;
  issueTokenPoolAccount: web3.PublicKey;
  pullRequestTokenAccount: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  associatedTokenProgram: web3.PublicKey;
  tokenProgram?: web3.PublicKey;
  anchorRemainingAccounts?: web3.AccountMeta[];
};

export const claimRewardInstructionDiscriminator = [
  149, 95, 181, 242, 94, 90, 158, 162,
];

/**
 * Creates a _ClaimReward_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category ClaimReward
 * @category generated
 */
export function createClaimRewardInstruction(
  accounts: ClaimRewardInstructionAccounts,
  programId = new web3.PublicKey("7aDYtX4L9sRykPoo5mGAoKfDgjVMcWoo3D6B5AiUa99F")
) {
  const [data] = claimRewardStruct.serialize({
    instructionDiscriminator: claimRewardInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.pullRequest,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.pullRequestCreator,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.pullRequestCreatorRewardAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.rewardsMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.repositoryCreator,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.issueCreator,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.repositoryAccount,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.issueAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.issueTokenPoolAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.pullRequestTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.associatedTokenProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
  ];

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc);
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
