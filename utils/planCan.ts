import { Permission } from '../types/Permission'
import type { Plan } from '../types/Plan'

/**
 * Check if a plan has a specific permission.
 *
 * @param plan - The plan object containing permissions array
 * @param permission - The permission to check for (from Permission enum)
 * @returns true if plan has the permission or FULL_ACCESS, false otherwise
 *
 * @example
 * ```ts
 * import { planCan, Permission } from '@stagetimerio/billing'
 *
 * if (planCan(team.plan, Permission.CUSTOM_LOGO)) {
 *   // User can use custom logos
 * }
 * ```
 */
export function planCan (plan: Pick<Plan, 'permissions'> | null | undefined, permission?: string): boolean {
  if (!permission) return true
  return Boolean(plan?.permissions.includes(permission) || plan?.permissions.includes(Permission.FULL_ACCESS))
}
