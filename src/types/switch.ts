import { ReactElement, PropsWithChildren } from 'react'

export type SwitchProps<T> = {
  mainValue: T
  children: ReactElement<CaseProps<T>>[]
}

export type CaseProps<T> = PropsWithChildren<{
  value: T
  parentValue?: T
}>
