import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ItemsSlices, createItemsSlices } from "./slices/ItemSlice";

type StoreState = ItemsSlices;

export const useAppStore = create<StoreState>()(
  persist(
    (...a) => ({
      ...createItemsSlices(...a),
    }),
    {
      name: "stateStorage",
    }
  )
);
