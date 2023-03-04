import type { ForeachProps } from './types'
import { map } from 'remeda'

export const Foreach = <T extends unknown>({
  list,
  mapTo,
}: ForeachProps<T>) => {
  return <span data-testid="foreach_Container">{map.indexed(list, mapTo)}</span>
}
