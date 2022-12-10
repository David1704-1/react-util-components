import type { ReactNode } from 'react'

export type ForeachProps<T> = {
  list: T[]
  mapTo: (item: T, index: number) => ReactNode
}
