/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import styles from "./styles.module.scss";
import { ItemType } from "../../types/ItemType";

interface ICardProps {
  item: ItemType;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
}

export function Card({ item, index, moveItem }: ICardProps) {
  const { id, title } = item;

  const ref = useRef<HTMLInputElement>(null);

  const [collectedProps, drop] = useDrop({
    accept: "dnd-items",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(currentItem: any, monitor: any) {
      if (!ref.current) {
        return;
      }

      const dragIndex = currentItem.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveItem(dragIndex, hoverIndex);
      currentItem.index = hoverIndex;
    },
  });

  const [collectedDragProps, drag] = useDrag({
    type: "dnd-items",
    item: () => {
      return { id, index: index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const bgColor = collectedDragProps.isDragging ? "gray" : "";

  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={styles.container}
      ref={ref}
      data-handler-id={collectedProps.handlerId}
    >
      <h1>{title}</h1>
    </div>
  );
}
