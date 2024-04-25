import { InputHTMLAttributes } from 'react'

import styles from './styles.module.css'
import classNames from 'classnames'

const Checkbox = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div
      className={classNames(styles.checkboxWrapper, {
        [styles.checked]: props.checked,
      })}
    >
      <span className={classNames({ [styles.checkMark]: props.checked })} />
      <input type='checkbox' className='visually-hidden' {...props} />
    </div>
  )
}

export default Checkbox
