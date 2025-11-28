# Stagetimer Billing

**Modern TypeScript package for Paddle billing integration** - This package is actively developed and replaces the legacy `@stagetimerio/planutils` package.

## Install

```sh
echo "@stagetimerio:registry=https://npm.pkg.github.com" >> .npmrc

npm i @stagetimerio/billing
```

## Usage

### Types

```ts
import {
  // Paddle types
  PaddleEvent,
  PaddleProduct,
  PaddlePrice,
  PaddleTransaction,
  PaddleSubscription,
  ProductType,

  // Plan types
  Plan,
  PlanLimits,
  PlanBilling,
  PlanType,

  // Enums
  Permission,
  BillingInterval,
  PlanLabel,
  PlanLabelOrder,
} from '@stagetimerio/billing'
```

### Permission Checking

```ts
import { planCan, Permission } from '@stagetimerio/billing'

// Check if plan has a specific permission
if (planCan(team.plan, Permission.CUSTOM_LOGO)) {
  // User can use custom logos
}

// FULL_ACCESS permission grants all permissions
if (planCan(team.plan, Permission.API_ACCESS)) {
  // Works for plans with API_ACCESS or FULL_ACCESS
}
```

### Plan Limits Calculation

```ts
import { getLimits } from '@stagetimerio/billing'

// Calculate limits from Paddle subscription/transaction items
const limits = getLimits(subscription.items, productMap)
// { seats: 3, licenses: 0, rooms: 10, devices: 15, timers: 50, messages: 50 }
```

## Enums

### Permission

| Value | Description |
|-------|-------------|
| `LICENSED` | Has a valid license (Pro+) |
| `API_ACCESS` | Can use the API |
| `CUSTOM_LOGO` | Can use custom logos |
| `CUSTOM_THEMING` | Can customize themes (Premium+) |
| `FULL_ACCESS` | Admin access, grants all permissions |

### BillingInterval

| Value | Description |
|-------|-------------|
| `YEARLY` | Annual billing |
| `MONTHLY` | Monthly billing |
| `ONE_TIME` | One-time purchase |
| `NONE` | No billing (free/custom) |

### PlanLabel

| Value | Description |
|-------|-------------|
| `STARTER` | Free plan |
| `PRO` | Pro plan |
| `PREMIUM` | Premium plan |
| `ADMIN` | Admin plan |
| `TRIAL` | Trial plan |

## Migration from planutils

```ts
// Before (planutils)
import { permissions, planCan, billingIntervals, planLabels } from '@stagetimerio/planutils'
if (planCan(plan, permissions.CUSTOM_LOGO)) { ... }

// After (billing)
import { Permission, planCan, BillingInterval, PlanLabel } from '@stagetimerio/billing'
if (planCan(plan, Permission.CUSTOM_LOGO)) { ... }
```
