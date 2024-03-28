/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Card } from "./Card";

/*
  Alfabeto: abcdefghijklmnopqrstuvwxyz
  Alfabeto após a cifra de César (chave = 3): defghijklmnopqrstuvwxyzabc
*/

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "khoor",
    },
    {
      id: 2,
      title: "hakors",
    },
    {
      id: 3,
      title: "vhlguir",
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
      <Card index={index} item={task} moveRow={moveItem} />
    ));
  };

  return (
    <>
      {/* Adicione aqui o campo para inserir um novo item seguindo a cifra de César */}
      <DndProvider backend={HTML5Backend}>{renderCard()}</DndProvider>
    </>
  );
}

export default App;
