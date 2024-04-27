import { forwardRef, useImperativeHandle } from 'react'

import { useFormValues, useSetFormValues } from '@pages/home/context/hooks'
import { Plan, ValidateStepRef } from '@pages/home/types'
import PlanRadio from './PlanRadio'
import PlanTypeToggle from './PlanTypeToggle'
import { PLANS } from './constants'
import { usePlanType } from './hooks/usePlanType'
import { useValidateStep } from './hooks/useValidateStep'

import styles from './styles.module.css'

const SelectPlanStep = forwardRef<ValidateStepRef>((_, parentRef) => {
  const handleValidateStep = useValidateStep()

  const { planType, handleChangePlanType } = usePlanType()

  const { selectedPlan } = useFormValues()
  const { handleSelectedPlanChange } = useSetFormValues()

  const isSelected = (plan: Plan) => selectedPlan?.id == plan.id

  useImperativeHandle(parentRef, () => handleValidateStep)

  return (
    <div className={styles.plansWrapper}>
      <div className={styles.plans}>
        {PLANS[planType].map(plan => {
          return <PlanRadio key={plan.id} plan={plan} onChange={handleSelectedPlanChange} checked={isSelected(plan)} />
        })}
      </div>
      <PlanTypeToggle planType={planType} handleChangePlanType={handleChangePlanType} />
    </div>
  )
})

export default SelectPlanStep
