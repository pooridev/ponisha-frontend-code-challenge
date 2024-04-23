import { ComponentType, FC, ReactElement } from 'react'

export function getComponentDisplayName(element: ReactElement) {
  const node = element as ReactElement<ComponentType>
  const type = (node as unknown as ReactElement<FC>)?.type
  return typeof type === 'function' || typeof type === 'object'
    ? (type as FC).displayName || (type as FC).name || 'Unknown'
    : type
}

export const debounce = (func: (...param: any[]) => void, timeout = 300) => {
  let timer: number | null = null

  return (...args: any) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}
