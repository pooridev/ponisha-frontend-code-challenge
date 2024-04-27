import { FC, ForwardRefExoticComponent, RefAttributes, lazy } from 'react'
import { FORM_STEPS, FormStep } from './hooks'

const PersonalInfoStep = lazy(() => import('./components/Steps/PersonalInfo'))
const SelectAddOnsStep = lazy(() => import('./components/Steps/SelectAddOns'))
const SelectPlanStep = lazy(() => import('./components/Steps/SelectPlan'))
const PreviewStep = lazy(() => import('./components/Steps/Preview'))
const SuccessStep = lazy(() => import('./components/Steps/Success'))

import { StepComponentProps, ValidateStepRef } from './types'

export const FORM_STEPS_MAP: Record<
  FormStep,
  {
    title?: string
    subtitle?: string
    description?: string
    prevButtonLabel?: string
    nextButtonLabel?: string
    nextButtonColor?: string
    component: ForwardRefExoticComponent<RefAttributes<ValidateStepRef>> | FC<StepComponentProps> | FC
  }
> = {
  [FORM_STEPS.PERSONAL_INFO]: {
    title: 'Your info',
    subtitle: 'Personal info',
    description: 'Please provide your name, email address, and phone number.',
    nextButtonLabel: 'Next step',
    component: PersonalInfoStep,
  },
  [FORM_STEPS.SELECT_PLAN]: {
    title: 'Select plan',
    nextButtonLabel: 'Next step',
    prevButtonLabel: 'Go back',
    subtitle: 'Select your plan',
    description: 'You have the option of monthly or yearly billing.',
    component: SelectPlanStep,
  },
  [FORM_STEPS.SELECT_ADD_ONES]: {
    title: 'Add-ones',
    nextButtonLabel: 'Next step',
    prevButtonLabel: 'Go back',
    subtitle: 'Pick add-ons',
    description: 'Add-ons help enhance your gaming exprience.',
    component: SelectAddOnsStep,
  },
  [FORM_STEPS.PREVIEW]: {
    title: 'Summary',
    subtitle: 'Finishing up',
    nextButtonLabel: 'Confirm',
    nextButtonColor: 'var(--indigo-600)',
    prevButtonLabel: 'Go back',
    description: 'Double-check everything looks OK before confirming.',
    component: PreviewStep,
  },
  [FORM_STEPS.SUCCESS]: {
    component: SuccessStep,
  },
} as const
