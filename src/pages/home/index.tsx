import { Suspense, useRef } from 'react'
import Layout from '../../components/Layout'
import Form from './components/Form'

import { FORM_STEPS_MAP } from './constants'
import FormProvider from './context/FormProvider'
import { FormStep, useFormStep } from './hooks'
import { ValidateStepRef } from './types'

const Home = () => {
  const { activeStep, handleChangeStep } = useFormStep()

  const validateCurrentStepRef = useRef<ValidateStepRef>(null)

  const FormStepComponent = FORM_STEPS_MAP[activeStep].component

  const formStepSubTitle = FORM_STEPS_MAP[activeStep].subtitle
  const formStepDescription = FORM_STEPS_MAP[activeStep].description

  const nextStepButtonLabel = FORM_STEPS_MAP[activeStep].nextButtonLabel
  const prevStepButtonLabel = FORM_STEPS_MAP[activeStep].prevButtonLabel

  const handleNextStep = () => {
    const isStepValid = validateCurrentStepRef.current?.()

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
              <Form.Header.Title>{formStepSubTitle}</Form.Header.Title>
              <Form.Header.Description>{formStepDescription}</Form.Header.Description>
            </Form.Header>

            <Suspense>
              <FormStepComponent ref={validateCurrentStepRef} />
            </Suspense>
          </Form.Body>

          <Form.Footer>
            {prevStepButtonLabel && (
              <Form.Footer.PreviousButton onClick={handlePreviousStep}>
                {prevStepButtonLabel}
              </Form.Footer.PreviousButton>
            )}

            {nextStepButtonLabel && (
              <Form.Footer.NextButton onClick={handleNextStep}>{nextStepButtonLabel}</Form.Footer.NextButton>
            )}
          </Form.Footer>
        </Form>
      </Layout>
    </FormProvider>
  )
}

export default Home
