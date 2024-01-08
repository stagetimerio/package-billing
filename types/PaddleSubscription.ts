import { SubscriptionId, TransactionId, CustomerId, AddressId, BusinessId, InvoiceId, DiscountId, PriceId, TransactionItemId, BillingDetails, TimePeriod, TimeInterval, CustomData } from './Paddle'
import { PaddlePrice } from './PaddlePrice'

export interface PaddleSubscription extends CustomData {
  id: SubscriptionId
  status: 'active' | 'canceled' | 'past_due' | 'paused' | 'trialing'
  customer_id: CustomerId
  address_id: AddressId
  business_id: BusinessId | null
  currency_code: string
  created_at: string
  updated_at: string
  started_at: string | null
  first_billed_at: string | null
  next_billed_at: string | null
  paused_at: string | null
  canceled_at: string | null
  discount: {
    id: DiscountId
    starts_at: string
    ends_at: string
  } | null
  collection_mode: 'automatic' | 'manual'
  billing_details: {
    enable_checkout: boolean
    purchase_order_number: string
    additional_information: string
    payment_terms: TimeInterval
  } | null
  current_billing_period: TimePeriod | null
  billing_cycle: TimeInterval
  scheduled_change: {
    action: 'cancel' | 'pause' | 'resume'
    effective_at: string
    resume_at: string | null
  } | null
  items: SubscriptionItem[]
  custom_data: CustomData
  import_meta: {
    external_id: string | null
    imported_from: string
  }
}

export interface SubscriptionItem {
  status: 'active' | 'inactive' | 'trialing'
  quantity: number
  recurring: boolean
  created_at: string
  updated_at: string
  previously_billed_at: string | null
  next_billed_at: string | null
  trial_dates: TimePeriod | null
  price: PaddlePrice
}
