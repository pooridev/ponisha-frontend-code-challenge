import { PropsWithChildren, createContext, useMemo, useReducer } from 'react'

import { FormContextValue, FormErrors, FormState } from './types'
import { formReducer } from './utils'

export const FormContext = createContext<FormContextValue>({
  state: {
    values: {
      userName: '',
      email: '',
      phoneNumber: 0,
    },
    errors: {
      userName: '',
      email: '',
      phoneNumber: '',
    },
  },
} as FormContextValue)

const FormProvider = ({ children }: PropsWithChildren) => {
  const [formState, dispatch] = useReducer(formReducer, {
    values: {
      userName: '',
      email: '',
      phoneNumber: '',
    },
    errors: {
      userName: '',
      email: '',
      phoneNumber: '',
    },
  } as FormState)

  const { values, errors } = formState
  const { userName, email, phoneNumber, selectedAddOnes, selectedPlan } = values
  const { email: emailError, userName: userNameError, phoneNumber: phoneNumberError } = errors

  const handleUserNameChange = (username: string) => {
    dispatch({
      type: 'UPDATE_USERNAME',
      payload: username,
    })
  }

  const handleEmailChange = (email: string) => {
    dispatch({
      type: 'UPDATE_EMAIL',
      payload: email,
    })
  }

  const handlePhoneNumberChange = (phoneNumber: number) => {
    dispatch({
      type: 'UPDATE_PHONE_NUMBER',
      payload: phoneNumber,
    })
  }

  const handleSetErrors = (errors: FormErrors) => {
    dispatch({
      type: 'SET_ERROR',
      paylad: errors,
    })
  }

  const contextValue = useMemo<FormContextValue>(
    () => ({
      state: formState,
      actions: {
        handleUserNameChange,
        handleEmailChange,
        handlePhoneNumberChange,
        handleSetErrors,
      },
    }),
    [userName, email, phoneNumber, selectedAddOnes, selectedPlan, emailError, userNameError, phoneNumberError]
  )

  return <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
}

export default FormProvider
