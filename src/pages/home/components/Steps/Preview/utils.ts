import { AddOne, Plan } from '@pages/home/types'

export const getTotalPrice = (addOns: AddOne[], plan: Plan | null) => {
  const planPrice = plan?.price || 0
  return addOns.reduce((sum, addOn) => sum + addOn.price, planPrice)
}
