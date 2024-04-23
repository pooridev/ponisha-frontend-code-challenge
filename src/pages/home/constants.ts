import { FC } from 'react'
import { FormStep } from './hooks'
import PersonalInfoStep from './components/Form/Steps/PersonalInfo'
import SelectAddOnesStep from './components/Form/Steps/SelectAddOnes'
import SelectPlanStep from './components/Form/Steps/SelectPlan'
import PreviewStep from './components/Form/Steps/Preview'
import SuccessStep from './components/Form/Steps/Success'

export const FORM_STEPS_MAP: Record<FormStep, FC> = {
  PERSONAL_INFO: PersonalInfoStep,
  SELECT_ADD_ONES: SelectAddOnesStep,
  SELECT_PLAN: SelectPlanStep,
  PREVIEW: PreviewStep,
  SUCCESS: SuccessStep,
}
