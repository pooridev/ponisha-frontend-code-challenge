import { Children, PropsWithChildren, ReactElement } from 'react'
import PreviousButton from './PreviousButton'
import NextButton from './NextButton'
import { getComponentDisplayName } from '@utils'

import styles from './styles.module.css'

const Footer = ({ children }: PropsWithChildren) => {
  const childrenArray = Children.toArray(children)

  const previousButton = childrenArray.find(child => getComponentDisplayName(child as ReactElement) == 'PreviousButton')
  const nextButton = childrenArray.find(child => getComponentDisplayName(child as ReactElement) == 'NextButton')

  return (
    <footer className={styles.footer}>
      {/** FIXME: use css grid to place button */}
      {previousButton ? previousButton : <span />}
      {nextButton}
    </footer>
  )
}

Footer.PreviousButton = PreviousButton
Footer.NextButton = NextButton

export default Footer
