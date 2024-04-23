import { PropsWithChildren, createContext, useReducer } from 'react'

import { FormContextValue, FormState } from './types'
import { formReducer } from './utils'

export const FormContext = createContext<FormContextValue>({} as FormContextValue)

const FormProvider = ({ children }: PropsWithChildren) => {
  const [formState, dispatch] = useReducer(formReducer, {} as FormState)

  return <FormContext.Provider value={{}}>{children}</FormContext.Provider>
}

export default FormProvider
