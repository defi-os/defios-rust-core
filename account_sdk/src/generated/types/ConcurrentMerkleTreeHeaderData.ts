/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from "@metaplex-foundation/beet";

import {
  ConcurrentMerkleTreeHeaderDataV1,
  concurrentMerkleTreeHeaderDataV1Beet,
} from "./ConcurrentMerkleTreeHeaderDataV1";
/**
 * This type is used to derive the {@link ConcurrentMerkleTreeHeaderData} type as well as the de/serializer.
 * However don't refer to it in your code but use the {@link ConcurrentMerkleTreeHeaderData} type instead.
 *
 * @category userTypes
 * @category enums
 * @category generated
 * @private
 */
export type ConcurrentMerkleTreeHeaderDataRecord = {
  V1: { fields: [ConcurrentMerkleTreeHeaderDataV1] };
};

/**
 * Union type respresenting the ConcurrentMerkleTreeHeaderData data enum defined in Rust.
 *
 * NOTE: that it includes a `__kind` property which allows to narrow types in
 * switch/if statements.
 * Additionally `isConcurrentMerkleTreeHeaderData*` type guards are exposed below to narrow to a specific variant.
 *
 * @category userTypes
 * @category enums
 * @category generated
 */
export type ConcurrentMerkleTreeHeaderData =
  beet.DataEnumKeyAsKind<ConcurrentMerkleTreeHeaderDataRecord>;

export const isConcurrentMerkleTreeHeaderDataV1 = (
  x: ConcurrentMerkleTreeHeaderData
): x is ConcurrentMerkleTreeHeaderData & { __kind: "V1" } => x.__kind === "V1";

/**
 * @category userTypes
 * @category generated
 */
export const concurrentMerkleTreeHeaderDataBeet =
  beet.dataEnum<ConcurrentMerkleTreeHeaderDataRecord>([
    [
      "V1",
      new beet.BeetArgsStruct<ConcurrentMerkleTreeHeaderDataRecord["V1"]>(
        [
          [
            "fields",
            beet.fixedSizeTuple([concurrentMerkleTreeHeaderDataV1Beet]),
          ],
        ],
        'ConcurrentMerkleTreeHeaderDataRecord["V1"]'
      ),
    ],
  ]) as beet.FixableBeet<ConcurrentMerkleTreeHeaderData>;
