import { forwardRef, useImperativeHandle } from 'react'

import { useFormValues, useSetFormValues } from '../../../context/hooks'
import AddOnCheckBox from './AddOnCheckBox'
import { ADD_ONS } from './constants'
import { AddOne, ValidateStepRef } from '../../../types'
import { useValidateStep } from './hooks/useValidateStep'

import styles from './styles.module.css'

const SelectAddOnesStep = forwardRef<ValidateStepRef>((_, parentRef) => {
  const { selectedAddOnes } = useFormValues()
  const { handleSelectedAddOnChange } = useSetFormValues()

  const isSelected = (addOn: AddOne) => selectedAddOnes.some(_addOn => _addOn.id == addOn.id)

  const validateStep = useValidateStep()

  useImperativeHandle(parentRef, () => validateStep)

  return (
    <div className={styles.addOns}>
      {ADD_ONS.map(addOn => (
        <AddOnCheckBox onChange={handleSelectedAddOnChange} value={addOn} checked={isSelected(addOn)} />
      ))}
    </div>
  )
})

export default SelectAddOnesStep
