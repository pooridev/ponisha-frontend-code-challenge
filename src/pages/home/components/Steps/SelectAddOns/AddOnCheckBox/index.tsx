import { PropsWithChildren } from 'react'
import classNames from 'classnames'

import { AddOne, PlanType } from '@pages/home/types'
import Checkbox from '@components/Checkbox'

import styles from './styles.module.css'
import { getPriceLabel } from '../../utils'

interface Props {
  addOn: AddOne
  checked: boolean
  planType: PlanType
  onChange: (addOne: AddOne) => void
}

const AddOnCheckBox = ({ checked, addOn, onChange, planType }: PropsWithChildren<Props>) => {
  return (
    <div
      onClick={() => onChange(addOn)}
      className={classNames(styles.addOnCheckbox, {
        [styles.checked]: checked,
      })}
    >
      <Checkbox checked={checked} />

      <div className={styles.addOnInfo}>
        <p className={styles.title}>{addOn.title}</p>
        <p className={styles.description}>{addOn.description}</p>
      </div>

      <p className={styles.price}>+{getPriceLabel(addOn.price, planType == 'monthly' ? 'mo' : 'yr')}</p>
    </div>
  )
}

export default AddOnCheckBox
