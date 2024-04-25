import { forwardRef, useImperativeHandle } from 'react'
import Textfield from '../../../../../components/Textfield/ index'
import { useFormErrors, useFormValues, useSetFormValues } from '../../../context/hooks'

import { useValidateStep } from './hooks/useValidateStep'

import styles from './styles.module.css'
import { ValidateStepRef } from '../../../types'

const PersonalInfoStep = forwardRef<ValidateStepRef>((_, parentRef) => {
  const { handleUserNameChange, handleEmailChange, handlePhoneNumberChange } = useSetFormValues()
  const { email, userName, phoneNumber } = useFormValues()
  const { email: emailError, userName: userNameError, phoneNumber: phoneNumberError } = useFormErrors()

  const handleValidateStep = useValidateStep()

  useImperativeHandle(parentRef, () => handleValidateStep)

  return (
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
  )
})

export default PersonalInfoStep
