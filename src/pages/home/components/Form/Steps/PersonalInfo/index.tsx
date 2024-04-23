import Textfield from '../../../../../../components/Textfield/ index'
import { useFormValues, useSetFormValues } from '../../../../context/hooks'
import Footer from '../../Footer'
import Header from '../../Header'

import styles from './styles.module.css'

const PersonalInfoStep = () => {
  const { handleUserNameChange, handleEmailChange, handlePhoneNumberChange } = useSetFormValues()
  const { email, userName, phoneNumber } = useFormValues()

  return (
    <>
      <div className={styles.personalInfoStep}>
        <Header title='Personal info' subTitle='Please provide your name, email address, and phone number' />
        <div className={styles.fields}>
          <Textfield
            onChange={e => handleUserNameChange(e.target.value)}
            label='Name'
            placeholder='e.g. Pooria'
            value={userName}
          />
          <Textfield
            onChange={e => handleEmailChange(e.target.value)}
            label='Email'
            type='email'
            placeholder='e.g. PooriaFaramarzian@gmail.com'
            value={email}
          />
          <Textfield
            onChange={e => handlePhoneNumberChange(e.target.valueAsNumber)}
            label='Phone number'
            placeholder='e.g. 9100350064'
            value={phoneNumber}
          />
        </div>
      </div>
      <Footer>
        <Footer.NextButton>Next Step</Footer.NextButton>
      </Footer>
    </>
  )
}

export default PersonalInfoStep
