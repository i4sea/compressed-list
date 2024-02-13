import { DndProvider } from "react-dnd";
import AddItem from "../../components/AddItem";
import { HTML5Backend } from "react-dnd-html5-backend";
import useDragAndDrop from "./useDragAndDrop";
import Loading from "../../components/Loading";

export default function DragAndDrop() {
  const { isLoading, renderCard } = useDragAndDrop();

  if (isLoading) return <Loading />;

  return (
    <div className="max-w-[1280px] mx-auto p-3">
      <div className="flex flex-col gap-2">
        <div className="self-end">
          <AddItem />
        </div>
        <DndProvider backend={HTML5Backend}>{renderCard()}</DndProvider>
      </div>
    </div>
  );
}
