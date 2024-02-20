import { TaskType } from "../types/types"

export const getAllTasks = async (): Promise<TaskType[]> => {
    const response = await fetch('http://localhost:4000/tasks')
    const data = await response.json()
  
    return data
  }