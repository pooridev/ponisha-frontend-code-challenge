import { InputHTMLAttributes } from 'react'
import { motion } from 'framer-motion'

import styles from './styles.module.css'

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onChange: () => void
}

const Toggle = (props: Props) => {
  return (
    <div onClick={() => props.onChange()} className={styles.toggle} data-active={props.checked}>
      <motion.div className={styles.handle} layout transition={spring} />
      <input type='checkbox' className='visually-hidden' {...props} />
    </div>
  )
}

export default Toggle
