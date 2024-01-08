import { PriceId } from './Paddle'
import { ProductId } from './PaddleProduct'

export interface PaddlePrice {
  id: PriceId
  product_id: ProductId
  description: string
  tax_mode: string
  unit_price: UnitPrice
  unit_price_overrides: UnitPriceOverride[]
  quantity: {
    minimum: number
    maximum: number
  }
  status: 'active' | 'archived'
  custom_data: null
  billing_cycle: TimeInterval | null
  trial_period: TimeInterval | null
}

export interface UnitPrice {
  amount: string
  currency_code: string
}

export interface UnitPriceOverride {
  country_codes: string[]
  unit_price: UnitPrice
}

export interface TimeInterval {
  interval: 'day' | 'week' | 'month' | 'year'
  frequency: number
}
