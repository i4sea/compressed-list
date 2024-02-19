/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Card } from "./components/Card";
import { NewCardInput } from "./components/NewCardInput";

/* Regra de compressão
  'aaaabbccc' -> 'a4b2c3' 
  'abbbc' -> 'a1b3c1'
*/

function App() {
  const [items, setItems] = useState([
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
  ]);

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const dragItem = items && items[dragIndex];

    setItems((prevState: any) => {
      const itemsList = [...prevState];
      const prevItem = itemsList.splice(hoverIndex, 1, dragItem);
      itemsList.splice(dragIndex, 1, prevItem[0]);

      return itemsList;
    });
  };

  const renderCard = () => {
    return items.map((task: any, index: any) => (
      <Card key={task.id} index={index} item={task} moveRow={moveItem} />
    ));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      {/* Adicione aqui o campo para inserir um novo item seguindo a regra de compressão */}
      <NewCardInput />
      {renderCard()}
    </DndProvider>
  );
}

export default App;
