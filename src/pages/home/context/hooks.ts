import { useContext } from 'react'
import { FormContext } from './FormProvider'

export const useFormValues = () => {
  const context = useContext(FormContext)

  if (!context) {
    throw new Error('useFormValues must be used within a FormProvider')
  }

  return context.state.values
}

export const useFormErrors = () => {
  const context = useContext(FormContext)

  if (!context) {
    throw new Error('useFormErrors must be used within a FormProvider')
  }

  return context.state.errors
}

export const useSetFormErrors = () => {
  const context = useContext(FormContext)

  if (!context) {
    throw new Error('useSetFormErrors must be used within a FormProvider')
  }

  return context.actions.handleSetErrors
}

export const useSetFormValues = () => {
  const context = useContext(FormContext)

  if (!context) {
    throw new Error('useSetFormValues must be used within a FormProvider')
  }

  // eslint-disable-next-line
  const { handleSetErrors, ...formValuesActions } = context.actions

  return formValuesActions
}
