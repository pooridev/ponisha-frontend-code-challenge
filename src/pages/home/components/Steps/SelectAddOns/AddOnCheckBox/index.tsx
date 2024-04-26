import { PropsWithChildren } from 'react'
import classNames from 'classnames'

import { AddOne } from '@pages/home/types'
import Checkbox from '@components/Checkbox'

import styles from './styles.module.css'
import { getPriceLabel } from '../../utils'

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
      {/** TODO: apendix should be dynamic based on the plan type (mo or yr?) */}
      <p className={styles.price}>+{getPriceLabel(value.price, 'mo')}</p>
    </div>
  )
}

export default AddOnCheckBox
