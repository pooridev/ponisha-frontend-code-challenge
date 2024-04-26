import thank_you_icon from '@assets/images/icon-thank-you.svg'

import styles from './styles.module.css'

const SuccessStep = () => {
  return (
    <div className={styles.successStep}>
      <img width={50} height={50} src={thank_you_icon} alt='' />
      <h3>Thank you</h3>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
        please feel free to email us at support@loregaming.com
      </p>
    </div>
  )
}

export default SuccessStep
