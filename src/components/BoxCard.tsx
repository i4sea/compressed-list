/* eslint-disable @typescript-eslint/no-explicit-any */

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Card } from './Card'
import { useItemStore } from '../store/useItem'
import { useEffect } from 'react'
import { getItems } from '../api/data'

export default function BoxCard() {
  const [items, setItems, addAllItems] = useItemStore(state => [
    state.items,
    state.setItems,
    state.addAllItems
  ])

  const renderCard = () => {
    return items.map((task: any, index: any) => (
      <Card key={task.id} index={index} item={task} moveRow={setItems} />
    ))
  }

  useEffect(() => {
    ;(async () => {
      const getDbItems = await getItems()
      addAllItems(getDbItems)
    })()
  }, [])

  return (
    <div className="flex flex-col p-4 gap-2">
      <DndProvider backend={HTML5Backend}>{renderCard()}</DndProvider>
    </div>
  )
}
