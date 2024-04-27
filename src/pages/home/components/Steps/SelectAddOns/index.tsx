import { forwardRef, useImperativeHandle } from 'react'

import { useFormValues, useSetFormValues } from '@pages/home/context/hooks'
import AddOnCheckBox from './AddOnCheckBox'
import { ADD_ONS } from './constants'
import { AddOne, ValidateStepRef } from '@pages/home/types'
import { useValidateStep } from './hooks/useValidateStep'

import styles from './styles.module.css'

const SelectAddOnesStep = forwardRef<ValidateStepRef>((_, parentRef) => {
  const { selectedAddOnes, selectedPlan } = useFormValues()

  const planType = selectedPlan?.type || 'monthly'

  const { handleSelectedAddOnChange } = useSetFormValues()

  const isSelected = (addOn: AddOne) => selectedAddOnes.some(_addOn => _addOn.id == addOn.id)

  const validateStep = useValidateStep()

  useImperativeHandle(parentRef, () => validateStep)

  return (
    <div className={styles.addOns}>
      {ADD_ONS[planType].map(addOn => (
        <AddOnCheckBox
          key={addOn.id}
          planType={planType}
          onChange={handleSelectedAddOnChange}
          addOn={addOn}
          checked={isSelected(addOn)}
        />
      ))}
    </div>
  )
})

export default SelectAddOnesStep
