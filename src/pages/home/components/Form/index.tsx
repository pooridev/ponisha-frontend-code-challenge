import { FORM_STEPS_MAP } from '../../constants'
import { useFormStep } from '../../hooks/useFormStep/useFormStep'
import StepIndicators from './StepIndicators'

import styles from './styles.module.css'

const Form = () => {
  const { activeStep, handleChangeStep } = useFormStep()

  const FormStepComponent = FORM_STEPS_MAP[activeStep]

  return (
    <div className={styles.formWrapper}>
      <StepIndicators activeStep={activeStep} />
      <form className={styles.form}>
        <FormStepComponent />
      </form>
    </div>
  )
}

export default Form