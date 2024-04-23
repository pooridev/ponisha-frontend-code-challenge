import { ChangeEvent, InputHTMLAttributes, PropsWithChildren, useCallback, useId, useRef, useState } from 'react'

import styles from './styles.module.css'
import classNames from 'classnames'
import { debounce } from '../../utils'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label: string
}

const Textfield = ({ error, label, ...inputProps }: PropsWithChildren<Props>) => {
  const fieldId = useId()

  const [inputValue, setInputValue] = useState(inputProps.value)

  const debouncedOnChange = useCallback(debounce(inputProps?.onChange!, 300), [])

  const handleValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
    debouncedOnChange(event)
  }

  return (
    <div className={styles.inputWrapper}>
      <header>
        <label htmlFor={fieldId}>{label}</label>
        {error && <span className={styles.error}>{error}</span>}
      </header>
      <input
        {...inputProps}
        className={classNames({
          [styles.hasError]: Boolean(error),
        })}
        id={fieldId}
        onChange={handleValueChange}
        value={inputValue}
      />
    </div>
  )
}

export default Textfield
