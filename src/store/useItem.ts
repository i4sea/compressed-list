import { create } from 'zustand'

export type ItemProps = {
  id: number
  title: string
}

type ItemStore = {
  items: ItemProps[]
  addAllItems: (items: ItemProps[]) => void
  addItem: (item: ItemProps) => void
  setItems: (dragIndex: number, hoverIndex: number) => void
}

export const useItemStore = create<ItemStore>(set => ({
  items: [],
  addItem: item => set(state => ({ items: [...state.items, item] })),
  addAllItems: items => set({ items }),
  setItems: (dragIndex, hoverIndex) =>
    set(state => {
      const itemsList = [...state.items]
      const prevItem = itemsList.splice(hoverIndex, 1, state.items[dragIndex])
      itemsList.splice(dragIndex, 1, prevItem[0])
      return {
        items: itemsList
      }
    })
}))
