import toast from 'react-hot-toast'
import { useFormValues } from '../../../../../context/hooks'
import { REQUIRED_ERROR } from '../../../../../context/constants'

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
