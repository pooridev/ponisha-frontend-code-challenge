const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
const PERSIAN_NUMBER_REGEX = /^((98|\+98|0098|0)*(9)[0-9]{9})+$/

export const isValidEmail = (email: string) => EMAIL_REGEX.test(email)
export const isValidPhoneNumber = (phoneNumber: string) => PERSIAN_NUMBER_REGEX.test(phoneNumber.toString())
