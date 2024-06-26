import { AddOne, PlanType } from '@pages/home/types'

export const ADD_ONS: Record<PlanType, AddOne[]> = {
  monthly: [
    {
      id: 1,
      title: 'Online service',
      description: 'Access to multiplayer games',
      price: 1,
    },
    {
      id: 2,
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: 2,
    },
    {
      id: 3,
      title: 'Customizable profile',
      description: 'Custom theme on you profile',
      price: 2,
    },
  ],
  yearly: [
    {
      id: 1,
      title: 'Online service',
      description: 'Access to multiplayer games',
      price: 10,
    },
    {
      id: 2,
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: 20,
    },
    {
      id: 3,
      title: 'Customizable profile',
      description: 'Custom theme on you profile',
      price: 20,
    },
  ],
}
