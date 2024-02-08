import { create } from "zustand";
import { DragAndDropItem } from "../App";

type Store = {
  items: DragAndDropItem[];
  addItem: (item: DragAndDropItem) => void;
  changeOrder: (items: DragAndDropItem[]) => void;
};

export const useItemsStore = create<Store>((set) => ({
  items: [
    {
      id: 1,
      title: "aaaabbccc",
    },
    {
      id: 2,
      title: "abbbc",
    },
    {
      id: 3,
      title: "aaccdd",
    },
  ],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  changeOrder: (items) => set(() => ({ items })),
}));
