/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import { ItemProps } from './store/useItem'

type CardProps = {
  item: ItemProps
  index: number
  moveRow: (dragIndex: number, hoverIndex: number) => void
}

export function Card({ item, index, moveRow }: CardProps) {
  const ref = useRef<HTMLInputElement>(null)

  const [collectedProps, drop] = useDrop({
    accept: 'dnd-items',
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      }
    },
    hover(item: any, monitor: any) {
      if (!ref.current) {
        return
      }

      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect()

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

      const clientOffset = monitor.getClientOffset()

      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveRow(dragIndex, hoverIndex)
      item.index = hoverIndex
    }
  })

  const [collectedDragProps, drag] = useDrag({
    type: 'dnd-items',
    item: () => {
      return { id: item.id, index }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  drag(drop(ref))

  const bgColor = collectedDragProps.isDragging ? 'gray' : ''

  return (
    <div
      className="p-4 bg-slate-500 rounded-md"
      style={{ backgroundColor: bgColor }}
      ref={ref}
      data-handler-id={collectedProps.handlerId}
    >
      <h1 className="text-gray-200 font-bold text-center">{item.title}</h1>
    </div>
  )
}
