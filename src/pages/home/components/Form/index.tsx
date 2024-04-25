import { FORM_STEPS_MAP } from '../../constants'
import { useFormStep } from '../../hooks/useFormStep/useFormStep'
import StepIndicators from './StepIndicators'

import styles from './styles.module.css'

const Form = () => {
  const { activeStep, handleChangeStep } = useFormStep()

  const FormStepComponent = FORM_STEPS_MAP[activeStep].component

  return (
    <div className={styles.formWrapper}>
      <StepIndicators activeStep={activeStep} />
      <form className={styles.form} onSubmit={e => e.preventDefault()}>
        <FormStepComponent activeStep={activeStep} handleStepChange={handleChangeStep} />
      </form>
    </div>
  )
}

export default Form
