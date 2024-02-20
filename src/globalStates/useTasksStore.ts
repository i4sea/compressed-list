import { create } from "zustand";
import { TaskType } from "../types/types";

export interface TaskStoreTypes {
  tasks: TaskType[];
  replaceList: (newList: TaskType[]) => void;
  addNewTask: (item: TaskType) => void;
}

export const useTasksStore = create<TaskStoreTypes>((set) => {
    const handleAddNewTask = (newTask: TaskType, tasks: TaskType[]) => {
        const newTaskId = tasks.length +1
        return  [...tasks, {id: newTaskId, title: newTask.title, }]
    }

    return {
        tasks: [],
        replaceList: (newList: TaskType[]) =>
        set(() => ({
            tasks: newList,
        })),
        addNewTask: (newTask: TaskType) =>
        set((oldState: TaskStoreTypes) => ({
            tasks: handleAddNewTask (newTask, oldState.tasks),
        })),
    }
});
