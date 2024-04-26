import { AddOne, Plan } from '../types'

export interface FormValues {
  userName: string
  email: string
  phoneNumber: number | string
  selectedAddOnes: AddOne[]
  selectedPlan: Plan | null
}

export type FormErrors = Partial<Record<keyof FormValues, string>>

export interface FormState {
  values: FormValues
  errors: FormErrors
}

export interface FormContextValue {
  state: FormState
  actions: {
    handleUserNameChange: (username: string) => void
    handleEmailChange: (email: string) => void
    handlePhoneNumberChange: (phoneNumber: number) => void
    handleSetErrors: (errors: FormErrors) => void
    handleSelectedAddOnChange: (addOn: AddOne) => void
    handleSelectedPlanChange: (plan: Plan | null) => void
  }
}

export type FormAction =
  | {
      type: 'UPDATE_USERNAME'
      payload: string
    }
  | {
      type: 'UPDATE_EMAIL'
      payload: string
    }
  | {
      type: 'UPDATE_PHONE_NUMBER'
      payload: number
    }
  | {
      type: 'UPDATE_ADD_ONES'
      payload: AddOne
    }
  | {
      type: 'UPDATE_PLAN'
      payload: Plan | null
    }
  | {
      type: 'SET_ERROR'
      paylad: FormErrors
    }
