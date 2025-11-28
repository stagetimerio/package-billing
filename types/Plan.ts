export interface PlanLimits {
  seats: number
  licenses: number
  rooms: number
  devices: number
  timers: number
  messages: number
}

export interface PlanBilling {
  interval: 'month' | 'year' | 'once' | 'custom'
  frequency: number | null
  endsAt: Date | null
}

export interface PlanScheduledChange {
  action: 'cancel' | 'pause' | 'resume'
  effectiveAt: Date | null
  resumeAt: Date | null
}

export interface PlanItem {
  priceId: string
  quantity: number
}

export type PlanType = 'sub' | 'txn' | 'spl' | 'lcy' | null

export interface Plan {
  name: string
  status: string | null
  imageUrl: string
  limits: PlanLimits
  permissions: string[]
  billing: PlanBilling | null
  activeUntil: Date | null
  updatesUntil: Date | string | null
  scheduledChange: PlanScheduledChange | null
  type: PlanType
  entityId: string | null
  teamId: string | null
  legacyPlanId: number
  items: PlanItem[] | null
}
