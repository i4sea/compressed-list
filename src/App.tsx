/* eslint-disable @typescript-eslint/no-explicit-any */

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "./components/Card";
import { compressItem } from "./utils/compressItem";
import AddItem from "./components/AddItem";
import { useItemsStore } from "./store";

export type DragAndDropItem = {
  id: number;
  title: string;
};

/* Regra de compressão
  'aaaabbccc' -> 'a4b2c3' 
  'abbbc' -> 'a1b3c1'
*/

function App() {
  const { items, changeOrder } = useItemsStore();

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const dragItem = items && items[dragIndex];
    const copy = [...items];

    const prevItem = copy.splice(hoverIndex, 1, dragItem);
    copy.splice(dragIndex, 1, prevItem[0]);

    changeOrder(copy);
  };

  const renderCard = () => {
    return items.map((task: DragAndDropItem, index: number) => {
      const formattedItem = {
        id: task.id,
        title: compressItem(task.title),
      };
      return (
        <Card
          key={task.id}
          index={index}
          item={formattedItem}
          moveRow={moveItem}
        />
      );
    });
  };

  return (
    <div className="max-w-[1280px] mx-auto p-3">
      <div className="flex flex-col gap-2">
        <div className="self-end">
          <AddItem />
        </div>
        <DndProvider backend={HTML5Backend}>
          {/* Adicione aqui o campo para inserir um novo item seguindo a regra de compressão */}
          {renderCard()}
        </DndProvider>
      </div>
    </div>
  );
}

export default App;
