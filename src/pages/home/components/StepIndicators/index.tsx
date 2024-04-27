import classnames from 'classnames'

import { StepsListItem, formStepsList } from '../../constants'
import { FormStep } from '../../hooks/useFormStep/types'

import styles from './styles.module.css'
import { FORM_STEPS } from '@pages/home/hooks'

interface Props {
  activeStep: FormStep
}

const StepIndicators = ({ activeStep }: Props) => {
  const isStepActive = (step: StepsListItem) => {
    return (activeStep == FORM_STEPS.SUCCESS && step.id == FORM_STEPS.PREVIEW) || step.id == activeStep
  }

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
              <p className={styles.label}>step {index + 1}</p>
              <p className={styles.title}>{step.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default StepIndicators
