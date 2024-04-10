import { StateCreator } from "zustand";
import { ItemType } from "../../types/ItemType";

export interface ItemsSlices {
  items: ItemType[];
  setItems: (items: ItemType[]) => void;
}

export const createItemsSlices: StateCreator<
  ItemsSlices,
  [],
  [["zustand/persist", ItemsSlices]]
> = (set) => ({
  items: [],
  setItems: (items: ItemType[]) => {
    set({ items: items });
  },
});
