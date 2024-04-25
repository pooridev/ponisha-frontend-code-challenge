import { PropsWithChildren } from 'react'

import styles from './styles.module.css'

const Title = ({ children }: PropsWithChildren) => <h2 className={styles.title}>{children}</h2>

export default Title
