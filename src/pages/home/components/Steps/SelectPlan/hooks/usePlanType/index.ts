import { useState } from 'react'

import { PlanType } from '@pages/home/types'
import { useSetFormValues } from '@pages/home/context/hooks'

export const usePlanType = () => {
  const [planType, setPlanType] = useState<PlanType>('monthly')

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
