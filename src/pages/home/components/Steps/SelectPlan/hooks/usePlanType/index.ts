import { useState } from 'react'
import { PlanType } from '../../../../../types'
import { useSetFormValues } from '../../../../../context/hooks'

export const usePlanType = () => {
  const [planType, setPlanType] = useState<PlanType>('yearly')

  const { handleSelectedPlanChange } = useSetFormValues()

  const handleChangePlanType = (newPlanType: PlanType) => {
    if (newPlanType !== planType) {
      handleSelectedPlanChange(null)
      setPlanType(newPlanType)
    }
  }

  return {
    planType,
    handleChangePlanType,
  }
}
