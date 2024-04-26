import { PropsWithChildren, createContext, useMemo, useReducer } from 'react'

import type { FormContextValue, FormErrors } from './types'
import { formReducer } from './utils'
import { initialFormState } from './constants'
import { AddOne, Plan } from '../types'

export const FormContext = createContext<FormContextValue>({
  state: initialFormState,
} as FormContextValue)

const FormProvider = ({ children }: PropsWithChildren) => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState)

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

  const handleSelectedAddOnChange = (addOne: AddOne) => {
    dispatch({
      type: 'UPDATE_ADD_ONES',
      payload: addOne,
    })
  }

  const handleSelectedPlanChange = (plan: Plan | null) => {
    dispatch({
      type: 'UPDATE_PLAN',
      payload: plan,
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
        handleSelectedAddOnChange,
        handleSelectedPlanChange,
      },
    }),
    [userName, email, phoneNumber, selectedAddOnes, selectedPlan, emailError, userNameError, phoneNumberError]
  )

  return <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
}

export default FormProvider
