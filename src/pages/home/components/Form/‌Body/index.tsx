import { PropsWithChildren } from 'react'

import styles from './styles.module.css'

const Body = ({ children }: PropsWithChildren) => <div className={styles.body}>{children}</div>

export default Body
