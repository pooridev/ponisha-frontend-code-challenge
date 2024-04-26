import { Children, PropsWithChildren, ReactElement } from 'react'

import Footer from './Footer'
import Header from './Header'
import StepIndicators from '../StepIndicators'
import Body from './‌Body'
import { getComponentDisplayName } from '@utils'
import { FormStep } from '../../hooks'

import styles from './styles.module.css'

interface Props {
  activeStep: FormStep
  handleChangeStep: (step: FormStep) => void
}

const Form = ({ activeStep, children }: PropsWithChildren<Props>) => {
  const childrenArray = Children.toArray(children)

  const headerEl = childrenArray.find(child => getComponentDisplayName(child as ReactElement) == 'Header')
  const bodyEl = childrenArray.find(child => getComponentDisplayName(child as ReactElement) == 'Body')
  const footerEl = childrenArray.find(child => getComponentDisplayName(child as ReactElement) == 'Footer')

  return (
    <div className={styles.formWrapper}>
      {headerEl}

      <StepIndicators activeStep={activeStep} />

      <form className={styles.form} onSubmit={e => e.preventDefault()}>
        {bodyEl}
      </form>

      {footerEl}
    </div>
  )
}

Form.Footer = Footer
Form.Body = Body
Form.Header = Header

export default Form
