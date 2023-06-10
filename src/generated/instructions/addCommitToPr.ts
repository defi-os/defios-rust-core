/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category AddCommitToPr
 * @category generated
 */
export const addCommitToPrStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'AddCommitToPrInstructionArgs'
)
/**
 * Accounts required by the _addCommitToPr_ instruction
 *
 * @property [_writable_, **signer**] commitAddr
 * @property [_writable_] pullRequestMetadataAccount
 * @category Instructions
 * @category AddCommitToPr
 * @category generated
 */
export type AddCommitToPrInstructionAccounts = {
  commitAddr: web3.PublicKey
  pullRequestMetadataAccount: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const addCommitToPrInstructionDiscriminator = [
  162, 115, 134, 40, 25, 88, 114, 155,
]

/**
 * Creates a _AddCommitToPr_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category AddCommitToPr
 * @category generated
 */
export function createAddCommitToPrInstruction(
  accounts: AddCommitToPrInstructionAccounts,
  programId = new web3.PublicKey('7aDYtX4L9sRykPoo5mGAoKfDgjVMcWoo3D6B5AiUa99F')
) {
  const [data] = addCommitToPrStruct.serialize({
    instructionDiscriminator: addCommitToPrInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.commitAddr,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.pullRequestMetadataAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
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
