import { TransactionItem, SubscriptionItem, ProductId, PaddleProduct, ProductType } from '../types'

export interface PlanLimits {
  seats: number
  licenses: number
  rooms: number
  devices: number
  timers: number
  messages: number
}

/**
 * Calculates the limits of a plan based on the provided items and the corresponding product details.
 *
 * This function iterates through each item in the provided list (either TransactionItem[] or SubscriptionItem[]),
 * using the `productMap` to fetch additional product details. It then aggregates values to compute the total
 * limits for seats, licenses, rooms, devices, timers, and messages.
 *
 * @param {TransactionItem[] | SubscriptionItem[]} items - An array of transaction or subscription items.
 * @param {Record<ProductId, PaddleProduct>} productMap - A mapping from product IDs to their corresponding product details.
 * @returns {PlanLimits} An object containing the computed limits for the plan, including seats, licenses, rooms, devices, timers, and messages.
 */
export function getLimits (
  items: TransactionItem[] | SubscriptionItem[],
  productMap: Record<ProductId, PaddleProduct>,
): PlanLimits {
  const limits = {
    seats: 0,
    licenses: 0,
    rooms: 3, // Default value for rooms
    devices: 3, // Default value for devices
    timers: 3, // Default value for timers
    messages: 3, // Default value for messages
  }

  for (const item of items) {
    const product = productMap[item.price.product_id]
    switch (product.typ) {
      case ProductType.BASE:
        limits.rooms = parseInt(product.rooms || '3')
        limits.seats += parseInt(product.seats || '1')
        limits.licenses += parseInt(product.licenses || '1')
        limits.devices = parseInt(product.devices || '3')
        limits.timers = parseInt(product.timers || '3')
        limits.messages = parseInt(product.messages || '3')
        break
      case ProductType.SEAT:
        limits.seats += item.quantity
        break
      case ProductType.LICENSE:
        // LICENSE is a desktop app lifetime license - only affects license count, not web app limits
        limits.licenses += item.quantity
        break
      case ProductType.DEVICES:
        limits.devices += item.quantity * parseInt(product.amount || '5')
        break
    }
  }

  return limits as PlanLimits
}
