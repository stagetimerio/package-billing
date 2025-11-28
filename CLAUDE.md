# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```sh
npm run build          # Build both CJS and ESM outputs via tsdown
npm run typecheck      # Run TypeScript type checking
```

There are no test or lint scripts configured.

## Architecture

This is a shared TypeScript library (`@stagetimerio/billing`) for Paddle payment platform integration, published to GitHub Packages. It provides dual CJS/ESM exports.

### Package Exports

- `@stagetimerio/billing/types` - TypeScript types for Paddle entities
- `@stagetimerio/billing/utils` - Utility functions for billing calculations

### Code Structure

- `types/` - Paddle API type definitions (Product, Price, Transaction, Subscription, Event)
- `utils/` - Billing utilities, primarily `getLimits()` for calculating plan limits

### Key Concepts

**Product Types** (`ProductType` enum):
- `BASE` - Base subscription plan with configurable limits (rooms, seats, licenses, devices, timers, messages)
- `SEAT` - Additional seats add-on
- `LICENSE` - Desktop app lifetime license
- `DEVICES` - Device pack add-on with configurable `amount` (step size)

**`getLimits()` function**: Calculates aggregate plan limits from subscription/transaction items by:
1. Setting defaults (3 for rooms/devices/timers/messages)
2. Iterating items and applying product-type-specific logic
3. BASE products set limits from custom_data; SEAT/LICENSE/DEVICES add to existing counts

### Style Conventions

- Single quotes, no semicolons
- 2-space indentation
- Space before function parens: `function foo ()` not `function foo()`
- Always trailing commas in multiline
