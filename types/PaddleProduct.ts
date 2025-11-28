export type ProductId = `pro_${string}`

export interface PaddleProduct extends ProductCustomData {
  id: ProductId
  name: string
  description: string | null
  type: 'custom' | 'standard'
  tax_category: string
  image_url: string | null
  custom_data: ProductCustomData
  status: 'active' | 'archived'
  created_at: string
  import_meta: object | null
}

export interface ProductCustomData {
  typ: ProductType
  permissions?: string
  seats?: string
  licenses?: string
  devices?: string
  messages?: string
  rooms?: string
  timers?: string
  amount?: string // Device pack step size (e.g., '5' for 5 devices per pack)
}

export enum ProductType {
  BASE = 'BASE',
  SEAT = 'SEAT',
  LICENSE = 'LICENSE',
  DEVICES = 'DEVICES',
}
