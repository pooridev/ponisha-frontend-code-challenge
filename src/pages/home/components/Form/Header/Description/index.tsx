import { PropsWithChildren } from 'react'

import styles from './styles.module.css'

const Description = ({ children }: PropsWithChildren) => <h4 className={styles.description}>{children}</h4>

export default Description
