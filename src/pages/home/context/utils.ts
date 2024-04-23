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
      const selectedAddOnes = formState.values.selectedAddOnes
      const recievedAddOne = action.payload

      const shouldRemove = selectedAddOnes.some(addOne => addOne.id == recievedAddOne.id)

      const updatedAddOnes = shouldRemove
        ? selectedAddOnes.filter(addOne => addOne.id !== recievedAddOne.id)
        : [{ ...recievedAddOne }, ...selectedAddOnes]

      return {
        ...formState,
        values: {
          ...formState.values,
          selectedAddOnes: updatedAddOnes,
        },
      }
    }

    default: {
      console.error(`Unsupported action type passed!! \n Passed action: ${JSON.stringify(action, null, 2)} `)
      return formState
    }
  }
}
