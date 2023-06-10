/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category UnstakeIssue
 * @category generated
 */
export const unstakeIssueStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'UnstakeIssueInstructionArgs'
)
/**
 * Accounts required by the _unstakeIssue_ instruction
 *
 * @property [_writable_, **signer**] issueStaker
 * @property [_writable_] issueStakerTokenAccount
 * @property [_writable_] repositoryAccount
 * @property [] issueAccount
 * @property [_writable_] issueTokenPoolAccount
 * @property [_writable_] issueStakerAccount
 * @property [] rewardsMint
 * @category Instructions
 * @category UnstakeIssue
 * @category generated
 */
export type UnstakeIssueInstructionAccounts = {
  issueStaker: web3.PublicKey
  issueStakerTokenAccount: web3.PublicKey
  repositoryAccount: web3.PublicKey
  issueAccount: web3.PublicKey
  issueTokenPoolAccount: web3.PublicKey
  issueStakerAccount: web3.PublicKey
  rewardsMint: web3.PublicKey
  systemProgram?: web3.PublicKey
  tokenProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const unstakeIssueInstructionDiscriminator = [
  192, 164, 223, 77, 91, 185, 67, 76,
]

/**
 * Creates a _UnstakeIssue_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category UnstakeIssue
 * @category generated
 */
export function createUnstakeIssueInstruction(
  accounts: UnstakeIssueInstructionAccounts,
  programId = new web3.PublicKey('7aDYtX4L9sRykPoo5mGAoKfDgjVMcWoo3D6B5AiUa99F')
) {
  const [data] = unstakeIssueStruct.serialize({
    instructionDiscriminator: unstakeIssueInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.issueStaker,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.issueStakerTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.repositoryAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.issueAccount,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.issueTokenPoolAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.issueStakerAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.rewardsMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
