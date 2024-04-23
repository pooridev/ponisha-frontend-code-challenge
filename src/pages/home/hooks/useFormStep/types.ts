import { FORM_STEPS } from './constants'

export type FormStep = (typeof FORM_STEPS)[keyof typeof FORM_STEPS]
