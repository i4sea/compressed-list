import { create } from "zustand";
import { getAllTasks } from "../resquests/tasks";
import { TaskType } from "../types/types";

export interface TaskStoreTypes {
  tasks: any;
  addNewTask: (item: TaskType) => void;
}

export const useCartStore = create<TaskStoreTypes>((set) => ({
  tasks: getAllTasks(),
  addNewTask: (newTask: TaskType) =>
    set((oldState: TaskStoreTypes) => ({
      tasks: [...oldState.tasks, newTask],
    })),
}));
