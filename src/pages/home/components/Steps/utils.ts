export const getPriceLabel = (planPrice: number, apendix: 'mo' | 'yr') => {
  return `$${planPrice}/${apendix}`
}
