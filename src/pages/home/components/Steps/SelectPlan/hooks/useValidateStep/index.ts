import toast from 'react-hot-toast'

import { useFormValues } from '@pages/home/context/hooks'
import { REQUIRED_ERROR } from '@pages/home/context/constants'

export const useValidateStep = () => {
  const { selectedPlan } = useFormValues()

  const handleValidateStep = () => {
    if (!selectedPlan) {
      toast.error(REQUIRED_ERROR, {
        icon: '🤚🏼',
      })
      return false
    }

    return true
  }

  return handleValidateStep
}
