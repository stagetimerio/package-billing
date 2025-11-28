export enum PlanLabel {
  STARTER = 'STARTER',
  PRO = 'PRO',
  PREMIUM = 'PREMIUM',
  ADMIN = 'ADMIN',
  TRIAL = 'TRIAL',
}

export const PlanLabelOrder = [
  PlanLabel.ADMIN,
  PlanLabel.PREMIUM,
  PlanLabel.TRIAL,
  PlanLabel.PRO,
  PlanLabel.STARTER,
] as const
