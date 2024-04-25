import { PropsWithChildren } from 'react'
import classNames from 'classnames'

import { AddOne } from '../../../../types'
import Checkbox from '../../../../../../components/Checkbox'
import { getPriceLabel } from './utils'

import styles from './styles.module.css'

interface Props {
  value: AddOne
  checked: boolean
  onChange: (addOne: AddOne) => void
}

const AddOnCheckBox = ({ checked, value, onChange }: PropsWithChildren<Props>) => {
  return (
    <div
      onClick={() => onChange(value)}
      className={classNames(styles.addOnCheckbox, {
        [styles.checked]: checked,
      })}
    >
      <Checkbox checked={checked} />

      <div className={styles.addOnInfo}>
        <p className={styles.title}>{value.title}</p>
        <p className={styles.description}>{value.description}</p>
      </div>

      <p className={styles.price}>{getPriceLabel(value.price)}</p>
    </div>
  )
}

export default AddOnCheckBox
