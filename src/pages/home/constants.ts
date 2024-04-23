import { FC } from 'react'
import { FormStep } from './hooks'
import PersonalInfoStep from './components/Form/Steps/PersonalInfo'
import SelectAddOnesStep from './components/Form/Steps/SelectAddOnes'
import SelectPlanStep from './components/Form/Steps/SelectPlan'
import PreviewStep from './components/Form/Steps/Preview'
import SuccessStep from './components/Form/Steps/Success'

export const FORM_STEPS_MAP: Record<FormStep, { title?: string; component: FC }> = {
  PERSONAL_INFO: {
    title: 'Your info',
    component: PersonalInfoStep,
  },
  SELECT_PLAN: {
    title: 'Select plan',
    component: SelectPlanStep,
  },
  SELECT_ADD_ONES: {
    title: 'Add-ones',
    component: SelectAddOnesStep,
  },
  PREVIEW: {
    title: 'Summary',
    component: PreviewStep,
  },
  SUCCESS: {
    component: SuccessStep,
  },
}

export type StepsListItem = {
  id: FormStep
  title: string
}

export const formStepsList = Object.entries(FORM_STEPS_MAP).reduce((list, [formStepKey, value]) => {
  list.push({
    id: formStepKey as FormStep,
    title: value.title!,
  })
  return list
}, [] as StepsListItem[])
