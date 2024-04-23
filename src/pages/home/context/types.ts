import { AddOne, Plan } from '../types'

export interface FormValues {
  userName: string
  email: string
  phoneNumber: number
  selectedAddOnes: AddOne[]
  selectedPlan: Plan
}

export interface FormState {
  values: FormValues
  errors: Record<keyof FormValues, string>
}

export interface FormContextValue {
  state: FormState
  actions: {
    handleChangeFormValue: (field: keyof FormValues, value: FormValues[keyof FormValues]) => void
    handleSubmit: (onSubmit: (formValues: FormValues) => void) => void
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
      payload: Plan
    }