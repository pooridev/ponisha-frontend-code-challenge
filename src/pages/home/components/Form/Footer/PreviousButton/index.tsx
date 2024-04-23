import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

const PreviousButton = ({ children, ...buttonProps }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button className='previousButton' {...buttonProps}>
      {children}
    </button>
  )
}

export default PreviousButton
