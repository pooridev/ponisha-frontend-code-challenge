import { FC } from 'react'
import { FORM_STEPS, FormStep } from './hooks'
import PersonalInfoStep from './components/Form/Steps/PersonalInfo'
import SelectAddOnesStep from './components/Form/Steps/SelectAddOnes'
import SelectPlanStep from './components/Form/Steps/SelectPlan'
import PreviewStep from './components/Form/Steps/Preview'
import SuccessStep from './components/Form/Steps/Success'
import { StepComponentProps } from './types'

export const FORM_STEPS_MAP: Record<FormStep, { title?: string; component: FC<StepComponentProps> }> = {
  [FORM_STEPS.PERSONAL_INFO]: {
    title: 'Your info',
    component: PersonalInfoStep,
  },
  [FORM_STEPS.SELECT_PLAN]: {
    title: 'Select plan',
    component: SelectPlanStep,
  },
  [FORM_STEPS.SELECT_ADD_ONES]: {
    title: 'Add-ones',
    component: SelectAddOnesStep,
  },
  [FORM_STEPS.PREVIEW]: {
    title: 'Summary',
    component: PreviewStep,
  },
  [FORM_STEPS.SUCCESS]: {
    component: SuccessStep,
  },
}

export type StepsListItem = {
  id: FormStep
  title: string
}

export const formStepsList = Object.entries(FORM_STEPS_MAP).reduce((list, [formStepKey, value]) => {
  list.push({
    id: Number(formStepKey) as FormStep,
    title: value.title!,
  })
  return list
}, [] as StepsListItem[])
