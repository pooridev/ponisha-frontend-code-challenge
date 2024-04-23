import styles from './styles.module.css'

interface Props {
  title: string
  subTitle: string
}

const Header = ({ subTitle, title }: Props) => {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <h4 className={styles.subTitle}>{subTitle}</h4>
    </header>
  )
}

export default Header
