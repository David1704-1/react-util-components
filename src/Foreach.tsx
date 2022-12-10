import type { ForeachProps } from './types'
import { map } from 'remeda'

export const Foreach = <T extends unknown>({
  list,
  mapTo,
}: ForeachProps<T>) => {
  return <>{map.indexed(list, mapTo)}</>
}
