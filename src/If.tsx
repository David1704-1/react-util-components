import type { IfProps } from './types'

export const If = ({ condition, then, otherwise }: IfProps) => {
  return <>{condition ? then : otherwise}</>
}
