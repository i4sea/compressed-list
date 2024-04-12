import { create } from 'zustand'

// const items = [
//   {
//     id: 1,
//     title: 'khoor'
//   },
//   {
//     id: 2,
//     title: 'hakors'
//   },
//   {
//     id: 3,
//     title: 'vhlguir'
//   }
// ]

export type ItemProps = {
  id: number
  title: string
}

type ItemStore = {
  items: ItemProps[]
  addItem: (item: ItemProps) => void
  setItems: (dragIndex: number, hoverIndex: number) => void
}

export const useItemStore = create<ItemStore>(set => ({
  items: [],
  addItem: item => set(state => ({ items: [...state.items, item] })),
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
