export type EventId = `evt_${string}`
export type NotificationId = `ntf_${string}`
export type TransactionItemId = `txnitm_${string}`
export type TransactionId = `txn_${string}`
export type SubscriptionId = `sub_${string}`
export type ProductId = `pro_${string}`
export type PriceId = `pri_${string}`
export type InvoiceId = `inv_${string}`
export type CustomerId = `ctm_${string}`
export type AddressId = `add_${string}`
export type BusinessId = `biz_${string}`
export type DiscountId = `dsc_${string}`

export type TimeInterval = {
  interval: 'day' | 'week' | 'month' | 'year'
  frequency: number
}

export interface TimePeriod {
  starts_at: string // RFC 3339 datetime string
  ends_at: string // RFC 3339 datetime string
}

export type CustomData = {
  uid?: string
  teamId?: string
}

export interface BillingDetails {
  enable_checkout: boolean
  purchase_order_number: string
  additional_information: string
  payment_terms: TimeInterval
}
