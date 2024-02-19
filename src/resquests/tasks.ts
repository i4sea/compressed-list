
export const getAllTasks = async () => {
    const response = await fetch('http://localhost:4000/tasks')
    const data = await response.json()
  
    return data
  }