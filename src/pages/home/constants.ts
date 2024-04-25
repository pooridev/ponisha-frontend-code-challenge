import { FC, ForwardRefExoticComponent, RefAttributes } from 'react'
import { FORM_STEPS, FormStep } from './hooks'
import PersonalInfoStep from './components/Steps/PersonalInfo'
import SelectAddOnesStep from './components/Steps/SelectAddOnes'
import SelectPlanStep from './components/Steps/SelectPlan'
import PreviewStep from './components/Steps/Preview'
import SuccessStep from './components/Steps/Success'
import { ValidateStepRef } from './types'

export const FORM_STEPS_MAP: Record<
  FormStep,
  {
    title?: string
    subtitle: string
    description: string
    prevButtonLabel?: string
    nextButtonLabel?: string
    component: ForwardRefExoticComponent<RefAttributes<ValidateStepRef>> | FC
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
    component: SelectAddOnesStep,
  },
  [FORM_STEPS.PREVIEW]: {
    title: 'Summary',
    subtitle: 'Finishing up',
    nextButtonLabel: 'Confirm',
    prevButtonLabel: 'Go back',
    description: 'Double-check everything looks OK before confirming.',
    component: PreviewStep,
  },
  [FORM_STEPS.SUCCESS]: {
    subtitle: 'Thank you',
    description:
      'Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loregaming.com',
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
