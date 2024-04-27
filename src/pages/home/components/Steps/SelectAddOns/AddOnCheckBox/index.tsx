import { PropsWithChildren } from 'react'
import classNames from 'classnames'
import { motion } from 'framer-motion'

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

const motionVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.01 },
  pressed: { scale: 0.99 },
}

const AddOnCheckBox = ({ checked, addOn, onChange, planType }: PropsWithChildren<Props>) => {
  return (
    <motion.div
      variants={motionVariants}
      initial='rest'
      whileHover='hover'
      whileTap='pressed'
      transition={{
        duration: 0.001,
      }}
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
    </motion.div>
  )
}

export default AddOnCheckBox
