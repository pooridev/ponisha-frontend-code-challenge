import toast from 'react-hot-toast'

import { REQUIRED_ERROR } from '@pages/home/context/constants'
import { useFormValues } from '@pages/home/context/hooks'

export const useValidateStep = () => {
  const { selectedAddOnes } = useFormValues()

  const handleValidateStep = () => {
    if (selectedAddOnes.length == 0) {
      toast.error(REQUIRED_ERROR, {
        icon: '🤚🏼',
      })
      return false
    }

    return true
  }

  return handleValidateStep
}
