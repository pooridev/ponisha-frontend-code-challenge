import classNames from 'classnames'

import { Plan, isYearlyPlan } from '@pages/home/types'
import { getBonusServiceLabel } from './utils'

import styles from './styles.module.css'
import { getPriceLabel } from '../../utils'

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
      <img height={50} width={50} src={plan.iconUrl} />
      <div className={styles.planInfo}>
        <p>{plan.title}</p>
        <p className={styles.price}>{getPriceLabel(plan.price, plan.type == 'monthly' ? 'mo' : 'yr')}</p>
        {isYearlyPlan(plan) && <p className={styles.bonusService}>{getBonusServiceLabel(plan.bonusService)}</p>}
      </div>
      <input type='radio' className='visually-hidden' checked={checked} />
    </div>
  )
}

export default PlanRadio
