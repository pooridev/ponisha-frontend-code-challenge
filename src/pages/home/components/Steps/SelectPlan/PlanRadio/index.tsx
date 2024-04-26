import { Plan, isYearlyPlan } from '../../../../types'
import styles from './styles.module.css'
import classNames from 'classnames'
import { getBonusServiceLabel, getPriceLabel } from './utils'

interface Props {
  plan: Plan
  checked: boolean
  onChange: (plan: Plan) => void
}

const PlanRadio = ({ plan, checked, onChange }: Props) => {
  return (
    <div
      className={classNames(styles.planRadio, {
        [styles.checked]: checked,
      })}
      onClick={() => onChange(plan)}
    >
      <img src={plan.iconUrl} />
      <div className={styles.planInfo}>
        <p>{plan.title}</p>
        <p className={styles.price}>{getPriceLabel(plan.price, plan.type)}</p>
        {isYearlyPlan(plan) && <p className={styles.bonusService}>{getBonusServiceLabel(plan.bonusService)}</p>}
      </div>
      <input type='radio' className='visually-hidden' checked={checked} />
    </div>
  )
}

export default PlanRadio
