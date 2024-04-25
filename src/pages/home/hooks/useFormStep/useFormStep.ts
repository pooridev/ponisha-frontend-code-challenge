import { useState } from 'react'
import { FORM_STEPS } from './constants'
import { FormStep } from './types'

export const useFormStep = () => {
  const [activeStep, setActiveStep] = useState<FormStep>(FORM_STEPS.SELECT_ADD_ONES)

  const handleChangeStep = (step: FormStep) => {
    setActiveStep(step)
  }

  return {
    handleChangeStep,
    activeStep,
  }
}
