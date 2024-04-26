import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

interface Props extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  color?: string
}

const NextButton = ({ children, color, ...buttonProps }: Props) => {
  return (
    <button
      className='nextButton'
      style={{
        background: color,
      }}
      {...buttonProps}
      type='submit'
    >
      {children}
    </button>
  )
}

export default NextButton
