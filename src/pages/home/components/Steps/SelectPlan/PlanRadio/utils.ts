import { PlanType } from '../../../../types'

export const getPriceLabel = (planPrice: number, planType: PlanType) => {
  const apendix = planType == 'monthly' ? 'mo' : 'yr'
  return `$${planPrice}/${apendix}`
}

export const getBonusServiceLabel = (bonusService: number) => `${bonusService} months free`
