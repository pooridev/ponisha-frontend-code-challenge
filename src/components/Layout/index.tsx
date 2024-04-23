import { PropsWithChildren } from 'react'

import styles from './styles.module.css'

const Layout = ({ children }: PropsWithChildren) => {
  return <main className={styles.layout}>{children}</main>
}

export default Layout
