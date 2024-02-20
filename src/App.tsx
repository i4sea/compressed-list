/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Card } from "./components/Card";
import { NewCardForm } from "./components/NewCardForm";
import { useTasksStore } from "./globalStates/useTasksStore";
import { useEffect } from "react";
import { TaskType } from "./types/types";
import { getAllTasks } from "./resquests/tasks";

function App() {
  const { tasks, replaceList } = useTasksStore();

  const getTasks = async () => {
    replaceList(await getAllTasks());
  };

  useEffect(() => {
    getTasks();
  }, []);

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const dragItem = tasks && tasks[dragIndex];

    const reorderList = (prevState: any) => {
      const itemsList = [...prevState];
      const prevItem = itemsList.splice(hoverIndex, 1, dragItem);
      itemsList.splice(dragIndex, 1, prevItem[0]);

      return itemsList;
    };

    replaceList(reorderList(tasks));
  };

  const renderCard = (tasks: TaskType[]) => {
    return tasks.map((task: any, index: any) => (
      <Card key={task.id} index={index} item={task} moveRow={moveItem} />
    ));
  };

  return (
    <div className="bg-gray-800 p-6 flex flex-col items-center min-h-screen">
      <h1 className="text-4xl mb-10 text-white">Compressed List - i4sea</h1>
      <DndProvider backend={HTML5Backend}>
        <div className="flex flex-col gap-14 w-full sm:w-1/2">
          <NewCardForm />
          <hr />
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-white text-xl font-semibold">Tarefas</h2>
            <ul className="flex flex-col gap-4 ">
              {tasks && renderCard(tasks)}
            </ul>
          </div>
        </div>
      </DndProvider>
    </div>
  );
}

export default App;
