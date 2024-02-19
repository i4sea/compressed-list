/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { compressTitle } from "../formatters/formatters";

export function Card(props: any) {
  const { id, title } = props.item;

  const ref = useRef<HTMLInputElement>(null);

  const [collectedProps, drop] = useDrop({
    accept: "dnd-items",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: any, monitor: any) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = props.index;

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

      props.moveRow(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [collectedDragProps, drag] = useDrag({
    type: "dnd-items",
    item: () => {
      return { id, index: props.index };
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
      ref={ref}
      data-handler-id={collectedProps.handlerId}
    >
      <h1 className="underline">{compressTitle(title)}</h1>
    </div>
  );
}
