import { useEffect } from 'react'
import { useSiwtchValue } from './store/switchValue'
import { equals } from 'remeda'
import type { CaseProps, SwitchProps } from './types'

export const Switch = <T extends unknown>({
  mainValue,
  children,
}: SwitchProps<T>) => {
  const setValue = useSiwtchValue((state) => state.setValue)
  useEffect(() => setValue(mainValue), [])
  return <>{children}</>
}
export const Case = <T extends unknown>({ value, children }: CaseProps<T>) => {
  const mainValue = useSiwtchValue((state) => state.value)
  return <>{equals(value, mainValue) && children}</>
}
