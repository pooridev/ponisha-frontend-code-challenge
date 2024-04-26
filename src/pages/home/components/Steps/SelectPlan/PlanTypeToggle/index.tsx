import classNames from 'classnames'
import Toggle from '../../../../../../components/Toggle'
import { PlanType } from '../../../../types'
import styles from './styles.module.css'

interface Props {
  planType: PlanType
  handleChangePlanType: (planType: PlanType) => void
}

const PlanTypeToggle = ({ planType, handleChangePlanType }: Props) => {
  const handleTogglePlanType = () => handleChangePlanType(planType == 'monthly' ? 'yearly' : 'monthly')

  return (
    <div className={styles.planTypeToggle}>
      <button
        className={classNames(styles.togglebutton, {
          [styles.active]: planType === 'monthly',
        })}
        onClick={() => handleChangePlanType('monthly')}
      >
        Monthly
      </button>
      <Toggle checked={planType == 'yearly'} onChange={handleTogglePlanType} />
      <button
        className={classNames(styles.togglebutton, {
          [styles.active]: planType === 'yearly',
        })}
        onClick={() => handleChangePlanType('yearly')}
      >
        Yearly
      </button>
    </div>
  )
}

export default PlanTypeToggle
