import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

const NextButton = ({ children, ...buttonProps }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button className='nextButton' {...buttonProps} type='submit'>
      {children}
    </button>
  )
}

export default NextButton
