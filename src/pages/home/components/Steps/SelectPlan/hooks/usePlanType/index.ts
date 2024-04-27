import { useState } from 'react'

import { PlanType } from '@pages/home/types'
import { useFormValues, useSetFormValues } from '@pages/home/context/hooks'

export const usePlanType = () => {
  const { selectedPlan } = useFormValues()
  const [planType, setPlanType] = useState<PlanType>(() => selectedPlan?.type || 'monthly')

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
