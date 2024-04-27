import { FORM_STEPS_MAP } from '@pages/home/constants'
import { FORM_STEPS, FormStep } from '@pages/home/hooks'

export type StepsListItem = {
  id: FormStep
  title: string
}

export const formStepsList = Object.entries(FORM_STEPS_MAP).reduce((list, [formStepKey, value]) => {
  if (Number(formStepKey) != FORM_STEPS.SUCCESS) {
    list.push({
      id: Number(formStepKey) as FormStep,
      title: value.title!,
    })
  }
  return list
}, [] as StepsListItem[])
