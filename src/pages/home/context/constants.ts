import { type FormState } from './types'

export const initialFormState: FormState = {
  values: {
    userName: '',
    email: '',
    phoneNumber: '',
    selectedAddOnes: [],
    selectedPlan: null,
  },
  errors: {
    userName: '',
    email: '',
    phoneNumber: '',
    selectedAddOnes: '',
    selectedPlan: '',
  },
}

export const REQUIRED_ERROR = 'This field is required'
