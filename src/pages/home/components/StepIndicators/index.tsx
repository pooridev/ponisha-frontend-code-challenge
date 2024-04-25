import { StepsListItem, formStepsList } from '../../constants'
import { FormStep } from '../../hooks/useFormStep/types'
import styles from './styles.module.css'
import classnames from 'classnames'

interface Props {
  activeStep: FormStep
}

const StepIndicators = ({ activeStep }: Props) => {
  const isStepActive = (step: StepsListItem) => step.id == activeStep

  return (
    <nav className={styles.stepIndicators}>
      <ul>
        {formStepsList.map((step, index) => (
          <li key={step.id} className={styles.indicator}>
            <span
              className={classnames(styles.stepNumber, {
                [styles.activeStepNumber]: isStepActive(step),
              })}
            >
              {index + 1}
            </span>
            <div className={styles.stepInfo}>
              <p>step {index + 1}</p>
              <p>{step.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default StepIndicators
