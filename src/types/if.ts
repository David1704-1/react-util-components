import type { ReactNode } from 'react'

export type IfProps = {
  condition: boolean
  then: ReactNode
  otherwise?: ReactNode
}
