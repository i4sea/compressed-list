import { create } from "zustand";

import { CompressItemsData } from "../service/types/compressList";

type Store = {
  items: CompressItemsData[];
  setItems: (items: CompressItemsData[]) => void;
  addItem: (item: CompressItemsData) => void;
  changeOrder: (dragIndex: number, hoverIndex: number) => void;
};

export const useItemsStore = create<Store>((set, get) => ({
  items: [],
  setItems: (items) => set(() => ({ items })),
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  changeOrder: (dragIndex, hoverIndex) =>
    set(() => {
      const copy = [...get().items];
      const dragItem = copy[dragIndex];

      copy.splice(dragIndex, 1);
      copy.splice(hoverIndex, 0, dragItem);

      return { items: copy };
    }),
}));
