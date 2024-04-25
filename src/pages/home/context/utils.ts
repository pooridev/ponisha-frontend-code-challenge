import { FormAction, FormState } from './types'

export const formReducer = (formState: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'UPDATE_USERNAME':
      return {
        ...formState,
        values: {
          ...formState.values,
          userName: action.payload,
        },
      }

    case 'UPDATE_EMAIL':
      return {
        ...formState,
        values: {
          ...formState.values,
          email: action.payload,
        },
      }

    case 'UPDATE_PHONE_NUMBER':
      return {
        ...formState,
        values: {
          ...formState.values,
          phoneNumber: action.payload,
        },
      }

    case 'UPDATE_PLAN':
      return {
        ...formState,
        values: {
          ...formState.values,
          selectedPlan: action.payload,
        },
      }

    case 'UPDATE_ADD_ONES': {
      const selectedAddOns = formState.values.selectedAddOnes
      const recievedAddOn = action.payload

      const shouldRemove = selectedAddOns.some(addOn => addOn.id == recievedAddOn.id)

      const updatedAddOns = shouldRemove
        ? selectedAddOns.filter(addOn => addOn.id !== recievedAddOn.id)
        : [{ ...recievedAddOn }, ...selectedAddOns]

      return {
        ...formState,
        values: {
          ...formState.values,
          selectedAddOnes: updatedAddOns,
        },
      }
    }

    case 'SET_ERROR': {
      return {
        ...formState,
        errors: action.paylad,
      }
    }

    default: {
      console.error(`Unsupported action type passed!! \n Passed action: ${JSON.stringify(action, null, 2)} `)
      return formState
    }
  }
}
