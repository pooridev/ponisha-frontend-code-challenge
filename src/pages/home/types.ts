export interface AddOne {
  title: string
  description: string
  price: number
  id: number
}

export type PlanType = 'monthly' | 'yearly'

interface BasePlan {
  id: number
  title: string
  description: string
  price: number
}

export interface YearlyPlan extends BasePlan {
  bonusService: number
}

export type MonthlyPlan = BasePlan

export type Plan<TPlanType extends PlanType = 'monthly'> = TPlanType extends 'yearly' ? YearlyPlan : MonthlyPlan

export const isYearlyPlan = (plan: Plan): plan is YearlyPlan => {
  return 'bonusService' in plan
}

export type ValidateStepRef = () => boolean
