import { PropsWithChildren, createContext, useMemo, useReducer } from 'react'

import { FormContextValue, FormState } from './types'
import { formReducer } from './utils'

export const FormContext = createContext<FormContextValue>({
  state: {
    values: {
      userName: '',
      email: '',
      phoneNumber: 0,
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
  } as FormState)

  const handleUserNameChange = (username: string) => {
    console.log(username)

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

  const handleSubmit = (onSubmit: (formValues: FormValues) => void) => {}

  const contextValue = useMemo<FormContextValue>(
    () => ({
      state: formState,
      actions: {
        handleUserNameChange,
        handleEmailChange,
        handlePhoneNumberChange,
        handleSubmit,
      },
    }),
    [
      formState?.values?.email,
      formState?.values?.phoneNumber,
      formState?.values?.userName,
      formState?.values?.selectedAddOnes,
      formState?.values?.selectedPlan,
    ]
  )

  return <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
}

export default FormProvider
