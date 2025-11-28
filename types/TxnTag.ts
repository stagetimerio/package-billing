/**
 * Transaction tags used to categorize Paddle transactions.
 *
 * - `SUBSCRIPTION` - Recurring subscription payment
 * - `LICENSE` - One-time lifetime license purchase
 * - `EVENT` - One-time event pass (30-day access)
 */
export enum TxnTag {
  SUBSCRIPTION = 'subscription',
  LICENSE = 'license',
  EVENT = 'event',
}
