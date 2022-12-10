import create from 'zustand'

type SwitchValueStore = {
  value: unknown
  setValue: (value: unknown) => void
}
export const useSiwtchValue = create<SwitchValueStore>((set) => ({
  value: undefined,
  setValue: (value) => set({ value }),
}))
