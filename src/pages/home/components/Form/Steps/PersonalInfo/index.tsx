import Textfield from '../../../../../../components/Textfield/ index'
import { useFormErrors, useFormValues, useSetFormValues } from '../../../../context/hooks'
import { FORM_STEPS } from '../../../../hooks'
import { StepComponentProps } from '../../../../types'
import Footer from '../../Footer'
import Header from '../../Header'

import { useValidateStep } from './hooks/useValidateStep'

import styles from './styles.module.css'

const PersonalInfoStep = ({ handleStepChange }: StepComponentProps) => {
  const { handleUserNameChange, handleEmailChange, handlePhoneNumberChange } = useSetFormValues()
  const { email, userName, phoneNumber } = useFormValues()
  const { email: emailError, userName: userNameError, phoneNumber: phoneNumberError } = useFormErrors()

  const handleValidateStep = useValidateStep()

  const handleNextStep = () => {
    const isValid = handleValidateStep()
    if (isValid) handleStepChange(FORM_STEPS.SELECT_ADD_ONES)
  }

  return (
    <>
      <div className={styles.personalInfoStep}>
        <Header title='Personal info' subTitle='Please provide your name, email address, and phone number' />
        <div className={styles.fields}>
          <Textfield
            onChange={e => handleUserNameChange(e.target.value)}
            error={userNameError}
            label='Name'
            placeholder='e.g. Pooria'
            value={userName}
          />
          <Textfield
            onChange={e => handleEmailChange(e.target.value)}
            error={emailError}
            label='Email'
            type='email'
            placeholder='e.g. PooriaFaramarzian@gmail.com'
            value={email}
          />
          <Textfield
            onChange={e => handlePhoneNumberChange(Number(e.target.value))}
            error={phoneNumberError}
            label='Phone number'
            placeholder='e.g. 9100350064'
            value={phoneNumber}
          />
        </div>
      </div>
      <Footer>
        <Footer.NextButton onClick={handleNextStep}>Next Step</Footer.NextButton>
      </Footer>
    </>
  )
}

export default PersonalInfoStep
