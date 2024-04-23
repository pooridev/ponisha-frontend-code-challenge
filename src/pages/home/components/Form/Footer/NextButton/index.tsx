import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

const NextButton = ({ children, ...buttonProps }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button className='nextButton' {...buttonProps}>
      {children}
    </button>
  )
}

export default NextButton
