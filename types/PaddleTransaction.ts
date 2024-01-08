import { TransactionId, SubscriptionId, CustomerId, AddressId, BusinessId, InvoiceId, DiscountId, PriceId, TransactionItemId, BillingDetails, TimePeriod, CustomData } from './Paddle'
import { PaddlePrice } from './PaddlePrice'
import { PaddleProduct } from './PaddleProduct'

export interface PaddleTransaction {
  id: TransactionId
  status: 'draft' | 'ready' | 'billed' | 'completed' | 'canceled' | 'past_due'
  customer_id: CustomerId | null
  address_id: AddressId | null
  business_id: BusinessId | null
  custom_data: CustomData
  currency_code: string
  origin: 'api' | 'subscription_charge' | 'subscription_payment_method_change' | 'subscription_recurring' | 'subscription_update' | 'web'
  subscription_id: SubscriptionId | null
  invoice_id: InvoiceId | null
  invoice_number: string | null
  collection_mode: 'automatic' | 'manual'
  discount_id: DiscountId | null
  billing_details: BillingDetails | null
  billing_period: TimePeriod | null
  items: TransactionItem[]
  details: TransactionDetails
  checkout: Checkout | null
  payments: Payment[]
  created_at: string
  updated_at: string
  billed_at: string | null
}

export interface TransactionItem {
  price: PaddlePrice
  quantity: number
  proration: Proration | null
}

export interface TransactionDetails {
  tax_rates_used: {
    tax_rate: string
    totals: SimpleTotals
  }[]
  totals: Totals
  adjusted_totals: AdjustedTotals | null
  payout_totals: PayoutTotals | null
  adjusted_payout_totals: AdjustedPayoutTotals | null
  line_items: LineItem[]
}

export interface SimpleTotals {
  subtotal: string
  discount: string
  tax: string
  total: string
}

export interface TotalsBase {
  subtotal: string
  tax: string
  total: string
  grand_total: string
  fee: string | null
  earnings: string | null
  currency_code: string
}

export interface Totals extends TotalsBase {
  discount: string
  credit: string
  credit_to_balance: string
  balance: string
}

export interface AdjustedTotals extends TotalsBase {
}

export interface PayoutTotals extends TotalsBase {
  discount: string
  credit: string
  credit_to_balance: string
  balance: string
}

export interface AdjustedPayoutTotals extends TotalsBase {
  chargeback_fee: {
    amount: string
    original: {
      amount: number
      currency_code: string
    } | null
  }
}

export interface LineItem {
  id: TransactionItemId
  price_id: PriceId
  quantity: number
  proration: Proration | null
  tax_rate: string
  unit_totals: SimpleTotals
  totals: SimpleTotals
  product: PaddleProduct
}

export interface Proration {
  rate: string
  billing_period: TimePeriod
}

export interface Checkout {
  url: string
}

export interface Payment {
  payment_attempt_id: string
  stored_payment_method_id: string
  amount: string
  status: string
  error_code: string | null
  method_details: {
    type: string
    card?: {
      type: string
      last4: string
      expiry_month: number
      expiry_year: number
    }
  }
  created_at: string
  captured_at: string | null
}
