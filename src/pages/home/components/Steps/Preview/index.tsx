import { useFormValues } from '@pages/home/context/hooks'
import styles from './styles.module.css'
import { getPriceLabel } from '../utils'

import { StepComponentProps } from '@pages/home/types'
import { FORM_STEPS } from '@pages/home/hooks'
import { getTotalPrice } from './utils'

const PreviewStep = ({ handleChangeStep }: StepComponentProps) => {
  const { selectedAddOnes, selectedPlan } = useFormValues()

  const goToSelectPlanStep = () => {
    handleChangeStep(FORM_STEPS.SELECT_PLAN)
  }

  return (
    <div className={styles.previewStep}>
      <div className={styles.purchases}>
        <div className={styles.plan}>
          <div>
            <p className={styles.planTitle}>
              {selectedPlan?.title} ({selectedPlan?.type})
            </p>
            <button onClick={goToSelectPlanStep} className={styles.changeStepButton}>
              Change
            </button>
          </div>
          <p className={styles.planPrice}>
            {getPriceLabel(selectedPlan?.price || 0, selectedPlan?.type == 'monthly' ? 'mo' : 'yr')}
          </p>
        </div>
        <div className={styles.divider} />
        {selectedAddOnes.map(addOn => {
          return (
            <div className={styles.addOn}>
              <p className={styles.addOnTitle}>{addOn.title}</p>
              <p className={styles.addOnPrice}>
                +{getPriceLabel(addOn.price, selectedPlan?.type == 'monthly' ? 'mo' : 'yr')}
              </p>
            </div>
          )
        })}
      </div>

      <footer className={styles.invoice}>
        <p className={styles.totalPriceLabel}>Total (per {selectedPlan?.type == 'yearly' ? 'year' : 'month'})</p>
        <p className={styles.totalPrice}>
          {getPriceLabel(getTotalPrice(selectedAddOnes, selectedPlan), selectedPlan?.type == 'monthly' ? 'mo' : 'yr')}
        </p>
      </footer>
    </div>
  )
}

export default PreviewStep
