import { REQUIRED_ERROR } from '../../../../../context/constants'
import { useFormValues, useSetFormErrors } from '../../../../../context/hooks'
import { FormErrors } from '../../../../../context/types'
import { INVALID_EMAIL_ERROR, INVALID_NUMBER_ERROR } from './constants'
import { isValidEmail, isValidPhoneNumber } from './utils'

export const useValidateStep = () => {
  const { email, userName, phoneNumber } = useFormValues()

  const handleSetFormErrors = useSetFormErrors()

  const handleValidateStep = () => {
    let errors = {} as FormErrors

    if (email.trim().length == 0) {
      errors = {
        email: REQUIRED_ERROR,
      }
    } else if (!isValidEmail(email)) {
      errors = {
        email: INVALID_EMAIL_ERROR,
      }
    }

    if (userName.trim().length == 0) {
      errors = {
        ...errors,
        userName: REQUIRED_ERROR,
      }
    }

    if (phoneNumber.toString().trim().length == 0) {
      errors = {
        ...errors,
        phoneNumber: REQUIRED_ERROR,
      }
    } else if (!isValidPhoneNumber(String(phoneNumber))) {
      errors = {
        ...errors,
        phoneNumber: INVALID_NUMBER_ERROR,
      }
    }

    handleSetFormErrors(errors)

    const isValid = Object.values(errors).every((fieldValue: string) => Boolean(!fieldValue))

    return isValid
  }

  return handleValidateStep
}
