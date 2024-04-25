import { Children, PropsWithChildren, ReactElement } from 'react'

import styles from './styles.module.css'
import Title from './Title'
import Description from './Description'
import { getComponentDisplayName } from '../../../../../utils'

const Header = ({ children }: PropsWithChildren) => {
  const childrenArray = Children.toArray(children)

  const titleEl = childrenArray.find(child => getComponentDisplayName(child as ReactElement) == 'Title')
  const descriptionEl = childrenArray.find(child => getComponentDisplayName(child as ReactElement) == 'Description')

  return (
    <header className={styles.header}>
      {titleEl}
      {descriptionEl}
    </header>
  )
}

Header.Title = Title
Header.Description = Description

export default Header
