/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

type ErrorWithCode = Error & { code: number }
type MaybeErrorWithCode = ErrorWithCode | null | undefined

const createErrorFromCodeLookup: Map<number, () => ErrorWithCode> = new Map()
const createErrorFromNameLookup: Map<string, () => ErrorWithCode> = new Map()

/**
 * SignatureVerificationFailed: 'Invalid Signature'
 *
 * @category Errors
 * @category generated
 */
export class SignatureVerificationFailedError extends Error {
  readonly code: number = 0x1770
  readonly name: string = 'SignatureVerificationFailed'
  constructor() {
    super('Invalid Signature')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, SignatureVerificationFailedError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x1770,
  () => new SignatureVerificationFailedError()
)
createErrorFromNameLookup.set(
  'SignatureVerificationFailed',
  () => new SignatureVerificationFailedError()
)

/**
 * UnauthorizedUser: 'User not verified'
 *
 * @category Errors
 * @category generated
 */
export class UnauthorizedUserError extends Error {
  readonly code: number = 0x1771
  readonly name: string = 'UnauthorizedUser'
  constructor() {
    super('User not verified')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnauthorizedUserError)
    }
  }
}

createErrorFromCodeLookup.set(0x1771, () => new UnauthorizedUserError())
createErrorFromNameLookup.set(
  'UnauthorizedUser',
  () => new UnauthorizedUserError()
)

/**
 * InvalidNameRouter: 'Invalid Name Router'
 *
 * @category Errors
 * @category generated
 */
export class InvalidNameRouterError extends Error {
  readonly code: number = 0x1772
  readonly name: string = 'InvalidNameRouter'
  constructor() {
    super('Invalid Name Router')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InvalidNameRouterError)
    }
  }
}

createErrorFromCodeLookup.set(0x1772, () => new InvalidNameRouterError())
createErrorFromNameLookup.set(
  'InvalidNameRouter',
  () => new InvalidNameRouterError()
)

/**
 * TokenAccountMismatch: 'Token account mismatch'
 *
 * @category Errors
 * @category generated
 */
export class TokenAccountMismatchError extends Error {
  readonly code: number = 0x1773
  readonly name: string = 'TokenAccountMismatch'
  constructor() {
    super('Token account mismatch')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, TokenAccountMismatchError)
    }
  }
}

createErrorFromCodeLookup.set(0x1773, () => new TokenAccountMismatchError())
createErrorFromNameLookup.set(
  'TokenAccountMismatch',
  () => new TokenAccountMismatchError()
)

/**
 * InsufficientStakingFunds: 'Insufficient funds for staking'
 *
 * @category Errors
 * @category generated
 */
export class InsufficientStakingFundsError extends Error {
  readonly code: number = 0x1774
  readonly name: string = 'InsufficientStakingFunds'
  constructor() {
    super('Insufficient funds for staking')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InsufficientStakingFundsError)
    }
  }
}

createErrorFromCodeLookup.set(0x1774, () => new InsufficientStakingFundsError())
createErrorFromNameLookup.set(
  'InsufficientStakingFunds',
  () => new InsufficientStakingFundsError()
)

/**
 * IssueClosedAlready: 'Cannot stake/unstake for a closed issue'
 *
 * @category Errors
 * @category generated
 */
export class IssueClosedAlreadyError extends Error {
  readonly code: number = 0x1775
  readonly name: string = 'IssueClosedAlready'
  constructor() {
    super('Cannot stake/unstake for a closed issue')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, IssueClosedAlreadyError)
    }
  }
}

createErrorFromCodeLookup.set(0x1775, () => new IssueClosedAlreadyError())
createErrorFromNameLookup.set(
  'IssueClosedAlready',
  () => new IssueClosedAlreadyError()
)

/**
 * HashesMismatch: 'Commit hashes do not match for reward eligibility'
 *
 * @category Errors
 * @category generated
 */
export class HashesMismatchError extends Error {
  readonly code: number = 0x1776
  readonly name: string = 'HashesMismatch'
  constructor() {
    super('Commit hashes do not match for reward eligibility')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, HashesMismatchError)
    }
  }
}

createErrorFromCodeLookup.set(0x1776, () => new HashesMismatchError())
createErrorFromNameLookup.set('HashesMismatch', () => new HashesMismatchError())

/**
 * AlreadyClaimed: 'Tokens Already Claimed'
 *
 * @category Errors
 * @category generated
 */
export class AlreadyClaimedError extends Error {
  readonly code: number = 0x1777
  readonly name: string = 'AlreadyClaimed'
  constructor() {
    super('Tokens Already Claimed')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, AlreadyClaimedError)
    }
  }
}

createErrorFromCodeLookup.set(0x1777, () => new AlreadyClaimedError())
createErrorFromNameLookup.set('AlreadyClaimed', () => new AlreadyClaimedError())

/**
 * ObjectiveClosedAlready: 'Cannot stake/unstake on a closed objective'
 *
 * @category Errors
 * @category generated
 */
export class ObjectiveClosedAlreadyError extends Error {
  readonly code: number = 0x1778
  readonly name: string = 'ObjectiveClosedAlready'
  constructor() {
    super('Cannot stake/unstake on a closed objective')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, ObjectiveClosedAlreadyError)
    }
  }
}

createErrorFromCodeLookup.set(0x1778, () => new ObjectiveClosedAlreadyError())
createErrorFromNameLookup.set(
  'ObjectiveClosedAlready',
  () => new ObjectiveClosedAlreadyError()
)

/**
 * NoParentEntered: 'Parent was not mentioned to which objective is to be added'
 *
 * @category Errors
 * @category generated
 */
export class NoParentEnteredError extends Error {
  readonly code: number = 0x1779
  readonly name: string = 'NoParentEntered'
  constructor() {
    super('Parent was not mentioned to which objective is to be added')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NoParentEnteredError)
    }
  }
}

createErrorFromCodeLookup.set(0x1779, () => new NoParentEnteredError())
createErrorFromNameLookup.set(
  'NoParentEntered',
  () => new NoParentEnteredError()
)

/**
 * RoadmapInvalidEndTime: 'Roadmap end time before roadmap creation time'
 *
 * @category Errors
 * @category generated
 */
export class RoadmapInvalidEndTimeError extends Error {
  readonly code: number = 0x177a
  readonly name: string = 'RoadmapInvalidEndTime'
  constructor() {
    super('Roadmap end time before roadmap creation time')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, RoadmapInvalidEndTimeError)
    }
  }
}

createErrorFromCodeLookup.set(0x177a, () => new RoadmapInvalidEndTimeError())
createErrorFromNameLookup.set(
  'RoadmapInvalidEndTime',
  () => new RoadmapInvalidEndTimeError()
)

/**
 * UnauthorizedPR: 'Can not add PR of somebody else's commits'
 *
 * @category Errors
 * @category generated
 */
export class UnauthorizedPRError extends Error {
  readonly code: number = 0x177b
  readonly name: string = 'UnauthorizedPR'
  constructor() {
    super("Can not add PR of somebody else's commits")
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnauthorizedPRError)
    }
  }
}

createErrorFromCodeLookup.set(0x177b, () => new UnauthorizedPRError())
createErrorFromNameLookup.set('UnauthorizedPR', () => new UnauthorizedPRError())

/**
 * MathOverflow: 'Math overflow'
 *
 * @category Errors
 * @category generated
 */
export class MathOverflowError extends Error {
  readonly code: number = 0x177c
  readonly name: string = 'MathOverflow'
  constructor() {
    super('Math overflow')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MathOverflowError)
    }
  }
}

createErrorFromCodeLookup.set(0x177c, () => new MathOverflowError())
createErrorFromNameLookup.set('MathOverflow', () => new MathOverflowError())

/**
 * MintMismatch: 'Token Mint mismatch'
 *
 * @category Errors
 * @category generated
 */
export class MintMismatchError extends Error {
  readonly code: number = 0x177d
  readonly name: string = 'MintMismatch'
  constructor() {
    super('Token Mint mismatch')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, MintMismatchError)
    }
  }
}

createErrorFromCodeLookup.set(0x177d, () => new MintMismatchError())
createErrorFromNameLookup.set('MintMismatch', () => new MintMismatchError())

/**
 * VestingNotReachedRelease: 'Vesting contract has not reached release time'
 *
 * @category Errors
 * @category generated
 */
export class VestingNotReachedReleaseError extends Error {
  readonly code: number = 0x177e
  readonly name: string = 'VestingNotReachedRelease'
  constructor() {
    super('Vesting contract has not reached release time')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, VestingNotReachedReleaseError)
    }
  }
}

createErrorFromCodeLookup.set(0x177e, () => new VestingNotReachedReleaseError())
createErrorFromNameLookup.set(
  'VestingNotReachedRelease',
  () => new VestingNotReachedReleaseError()
)

/**
 * PullRequestNotYetAccepted: 'Pull request not yet accepted'
 *
 * @category Errors
 * @category generated
 */
export class PullRequestNotYetAcceptedError extends Error {
  readonly code: number = 0x177f
  readonly name: string = 'PullRequestNotYetAccepted'
  constructor() {
    super('Pull request not yet accepted')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, PullRequestNotYetAcceptedError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x177f,
  () => new PullRequestNotYetAcceptedError()
)
createErrorFromNameLookup.set(
  'PullRequestNotYetAccepted',
  () => new PullRequestNotYetAcceptedError()
)

/**
 * CanNotMergePullRequest: 'You are not authorized to merge this pull request'
 *
 * @category Errors
 * @category generated
 */
export class CanNotMergePullRequestError extends Error {
  readonly code: number = 0x1780
  readonly name: string = 'CanNotMergePullRequest'
  constructor() {
    super('You are not authorized to merge this pull request')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, CanNotMergePullRequestError)
    }
  }
}

createErrorFromCodeLookup.set(0x1780, () => new CanNotMergePullRequestError())
createErrorFromNameLookup.set(
  'CanNotMergePullRequest',
  () => new CanNotMergePullRequestError()
)

/**
 * UnauthorizedActionAttempted: 'Unauthorized smart contract Action'
 *
 * @category Errors
 * @category generated
 */
export class UnauthorizedActionAttemptedError extends Error {
  readonly code: number = 0x1781
  readonly name: string = 'UnauthorizedActionAttempted'
  constructor() {
    super('Unauthorized smart contract Action')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UnauthorizedActionAttemptedError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x1781,
  () => new UnauthorizedActionAttemptedError()
)
createErrorFromNameLookup.set(
  'UnauthorizedActionAttempted',
  () => new UnauthorizedActionAttemptedError()
)

/**
 * NoMoneyStakedOnIssue: 'No money was staked on this issue, Still thanks for the support to the community'
 *
 * @category Errors
 * @category generated
 */
export class NoMoneyStakedOnIssueError extends Error {
  readonly code: number = 0x1782
  readonly name: string = 'NoMoneyStakedOnIssue'
  constructor() {
    super(
      'No money was staked on this issue, Still thanks for the support to the community'
    )
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NoMoneyStakedOnIssueError)
    }
  }
}

createErrorFromCodeLookup.set(0x1782, () => new NoMoneyStakedOnIssueError())
createErrorFromNameLookup.set(
  'NoMoneyStakedOnIssue',
  () => new NoMoneyStakedOnIssueError()
)

/**
 * InsufficientFunds: 'Insufficient funds'
 *
 * @category Errors
 * @category generated
 */
export class InsufficientFundsError extends Error {
  readonly code: number = 0x1783
  readonly name: string = 'InsufficientFunds'
  constructor() {
    super('Insufficient funds')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, InsufficientFundsError)
    }
  }
}

createErrorFromCodeLookup.set(0x1783, () => new InsufficientFundsError())
createErrorFromNameLookup.set(
  'InsufficientFunds',
  () => new InsufficientFundsError()
)

/**
 * IncorrectMaths: 'Incorrect Inputs for buy/sell given'
 *
 * @category Errors
 * @category generated
 */
export class IncorrectMathsError extends Error {
  readonly code: number = 0x1784
  readonly name: string = 'IncorrectMaths'
  constructor() {
    super('Incorrect Inputs for buy/sell given')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, IncorrectMathsError)
    }
  }
}

createErrorFromCodeLookup.set(0x1784, () => new IncorrectMathsError())
createErrorFromNameLookup.set('IncorrectMaths', () => new IncorrectMathsError())

/**
 * IncorrectMetadataAccount: 'Incorrect Metadata account provided'
 *
 * @category Errors
 * @category generated
 */
export class IncorrectMetadataAccountError extends Error {
  readonly code: number = 0x1785
  readonly name: string = 'IncorrectMetadataAccount'
  constructor() {
    super('Incorrect Metadata account provided')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, IncorrectMetadataAccountError)
    }
  }
}

createErrorFromCodeLookup.set(0x1785, () => new IncorrectMetadataAccountError())
createErrorFromNameLookup.set(
  'IncorrectMetadataAccount',
  () => new IncorrectMetadataAccountError()
)

/**
 * PullRequestClosedAlready: 'Cannot unstake for a closed pull request'
 *
 * @category Errors
 * @category generated
 */
export class PullRequestClosedAlreadyError extends Error {
  readonly code: number = 0x1786
  readonly name: string = 'PullRequestClosedAlready'
  constructor() {
    super('Cannot unstake for a closed pull request')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, PullRequestClosedAlreadyError)
    }
  }
}

createErrorFromCodeLookup.set(0x1786, () => new PullRequestClosedAlreadyError())
createErrorFromNameLookup.set(
  'PullRequestClosedAlready',
  () => new PullRequestClosedAlreadyError()
)

/**
 * CantAddObjectiveToSomebodiesRoadmap: 'Unauthorized objective addition'
 *
 * @category Errors
 * @category generated
 */
export class CantAddObjectiveToSomebodiesRoadmapError extends Error {
  readonly code: number = 0x1787
  readonly name: string = 'CantAddObjectiveToSomebodiesRoadmap'
  constructor() {
    super('Unauthorized objective addition')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, CantAddObjectiveToSomebodiesRoadmapError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x1787,
  () => new CantAddObjectiveToSomebodiesRoadmapError()
)
createErrorFromNameLookup.set(
  'CantAddObjectiveToSomebodiesRoadmap',
  () => new CantAddObjectiveToSomebodiesRoadmapError()
)

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code: number): MaybeErrorWithCode {
  const createError = createErrorFromCodeLookup.get(code)
  return createError != null ? createError() : null
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name: string): MaybeErrorWithCode {
  const createError = createErrorFromNameLookup.get(name)
  return createError != null ? createError() : null
}
