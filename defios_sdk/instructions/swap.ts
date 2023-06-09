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
 * @category Swap
 * @category generated
 */
export type SwapInstructionArgs = {
  tokenAmount1: beet.bignum;
  tokenAmount2: beet.bignum;
};
/**
 * @category Instructions
 * @category Swap
 * @category generated
 */
export const swapStruct = new beet.BeetArgsStruct<
  SwapInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ["instructionDiscriminator", beet.uniformFixedSizeArray(beet.u8, 8)],
    ["tokenAmount1", beet.u64],
    ["tokenAmount2", beet.u64],
  ],
  "SwapInstructionArgs"
);
/**
 * Accounts required by the _swap_ instruction
 *
 * @property [_writable_, **signer**] buyer
 * @property [_writable_] communalDeposit1
 * @property [_writable_] communalTokenAccount
 * @property [_writable_] buyerTokenAccount1
 * @property [_writable_] buyerTokenAccount2
 * @property [_writable_] repositoryAccount1
 * @property [_writable_] rewardsMint1
 * @property [_writable_] repositoryAccount2
 * @property [_writable_] rewardsMint2
 * @property [_writable_] communalDeposit2
 * @property [_writable_] communalTokenAccount2
 * @property [] associatedTokenProgram
 * @category Instructions
 * @category Swap
 * @category generated
 */
export type SwapInstructionAccounts = {
  buyer: web3.PublicKey;
  communalDeposit1: web3.PublicKey;
  communalTokenAccount: web3.PublicKey;
  buyerTokenAccount1: web3.PublicKey;
  buyerTokenAccount2: web3.PublicKey;
  repositoryAccount1: web3.PublicKey;
  rewardsMint1: web3.PublicKey;
  repositoryAccount2: web3.PublicKey;
  rewardsMint2: web3.PublicKey;
  communalDeposit2: web3.PublicKey;
  communalTokenAccount2: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  associatedTokenProgram: web3.PublicKey;
  tokenProgram?: web3.PublicKey;
  anchorRemainingAccounts?: web3.AccountMeta[];
};

export const swapInstructionDiscriminator = [
  248, 198, 158, 145, 225, 117, 135, 200,
];

/**
 * Creates a _Swap_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Swap
 * @category generated
 */
export function createSwapInstruction(
  accounts: SwapInstructionAccounts,
  args: SwapInstructionArgs,
  programId = new web3.PublicKey("7aDYtX4L9sRykPoo5mGAoKfDgjVMcWoo3D6B5AiUa99F")
) {
  const [data] = swapStruct.serialize({
    instructionDiscriminator: swapInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.buyer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.communalDeposit1,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.communalTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.buyerTokenAccount1,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.buyerTokenAccount2,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.repositoryAccount1,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.rewardsMint1,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.repositoryAccount2,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.rewardsMint2,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.communalDeposit2,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.communalTokenAccount2,
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
