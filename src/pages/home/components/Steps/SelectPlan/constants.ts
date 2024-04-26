import { Plan } from '../../../types'

import arcade_icon from '../../../../../assets/images/icon-arcade.svg'
import advanced_icon from '../../../../../assets/images/icon-advanced.svg'
import pro_icon from '../../../../../assets/images/icon-pro.svg'

export const PLANS = {
  monthly: [
    {
      id: 1,
      title: 'Arcade',
      price: 9,
      icon: '',
      type: 'monthly',
      iconUrl: arcade_icon,
    },
    {
      id: 2,
      title: 'Advanced',
      price: 12,
      type: 'monthly',
      iconUrl: advanced_icon,
    },
    {
      id: 3,
      title: 'Pro',
      price: 15,
      type: 'monthly',
      iconUrl: pro_icon,
    },
  ] as Plan<'monthly'>[],
  yearly: [
    {
      id: 1,
      title: 'Arcade',
      price: 90,
      bonusService: 2,
      type: 'yearly',
      iconUrl: arcade_icon,
    },
    {
      id: 2,
      title: 'Advanced',
      price: 120,
      bonusService: 2,
      type: 'yearly',
      iconUrl: advanced_icon,
    },
    {
      id: 3,
      title: 'Pro',
      price: 150,
      bonusService: 2,
      type: 'yearly',
      iconUrl: pro_icon,
    },
  ] as Plan<'yearly'>[],
}
