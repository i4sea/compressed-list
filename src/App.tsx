/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Card } from "./components/Card";
import { NewCardInput } from "./components/NewCardInput";
import { useCartStore } from "./globalStates/useTasksStore";
import { useEffect, useState } from "react";
import { TaskType } from "./types/types";

/* Regra de compressão
  'aaaabbccc' -> 'a4b2c3' 
  'abbbc' -> 'a1b3c1'
*/

function App() {

  const [myTasks, setMyTasks] = useState()

  const {tasks} = useCartStore()

  const getTasks = async () => {
    setMyTasks(await tasks)
  }

  useEffect(() => {
    getTasks()
  }, [tasks]);

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const dragItem = items && items[dragIndex];

    setItems((prevState: any) => {
      const itemsList = [...prevState];
      const prevItem = itemsList.splice(hoverIndex, 1, dragItem);
      itemsList.splice(dragIndex, 1, prevItem[0]);

      return itemsList;
    });
  };

  const renderCard = (tasks: TaskType[]) => {
    return tasks.map((task: any, index: any) => (
      <Card key={task.id} index={index} item={task} moveRow={moveItem} />
    ));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      {/* Adicione aqui o campo para inserir um novo item seguindo a regra de compressão */}
      <NewCardInput />
      {myTasks && renderCard(myTasks)}
    </DndProvider>
  );
}

export default App;
