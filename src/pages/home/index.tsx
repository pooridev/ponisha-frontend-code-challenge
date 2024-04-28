import { Suspense, useRef } from 'react'
import Layout from '@components/Layout'
import Form from './components/Form'

import { FORM_STEPS_MAP } from './constants'
import FormProvider from './context/FormProvider'
import { FormStep, useFormStep } from './hooks'
import { ValidateStepRef } from './types'
import { useBlockRefresh } from '@hooks/useBlockRefresh'

const Home = () => {
  const { activeStep, handleChangeStep } = useFormStep()

  const validateCurrentStepRef = useRef<ValidateStepRef>(null)

  useBlockRefresh()

  const {
    component: FormStepComponent,
    subtitle,
    description,
    nextButtonColor,
    nextButtonLabel,
    prevButtonLabel,
  } = FORM_STEPS_MAP[activeStep]

  const handleNextStep = () => {
    // For steps that have no validation, we dont pass any validation function as ref.
    const isStepValid = validateCurrentStepRef.current == null || validateCurrentStepRef.current()

    if (isStepValid) {
      const newStep = (activeStep + 1) as FormStep
      handleChangeStep(newStep)
    }
  }

  const handlePreviousStep = () => {
    const newStep = (activeStep - 1) as FormStep
    handleChangeStep(newStep)
  }

  return (
    <FormProvider>
      <Layout>
        <Form activeStep={activeStep} handleChangeStep={handleChangeStep}>
          <Form.Body>
            <Form.Header>
              <Form.Header.Title>{subtitle}</Form.Header.Title>
              <Form.Header.Description>{description}</Form.Header.Description>
            </Form.Header>

            <Suspense>
              <FormStepComponent ref={validateCurrentStepRef} handleChangeStep={handleChangeStep} />
            </Suspense>
          </Form.Body>

          <Form.Footer>
            {prevButtonLabel && (
              <Form.Footer.PreviousButton onClick={handlePreviousStep}>{prevButtonLabel}</Form.Footer.PreviousButton>
            )}

            {nextButtonLabel && (
              <Form.Footer.NextButton color={nextButtonColor} onClick={handleNextStep}>
                {nextButtonLabel}
              </Form.Footer.NextButton>
            )}
          </Form.Footer>
        </Form>
      </Layout>
    </FormProvider>
  )
}

export default Home
