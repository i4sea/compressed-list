import { FormEvent, useRef } from 'react'
import { useItemStore } from '../store/useItem'
import { crypto } from '../utils/crypto'
import { createItem } from '../api/data'

export default function Form() {
  const inputRef = useRef<HTMLInputElement>(null)

  const [items, addItem] = useItemStore(state => [state.items, state.addItem])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!inputRef.current || !inputRef.current.value) {
      return
    }

    const newItem = {
      id: items.length + 1,
      title: crypto(inputRef.current.value)
    }

    await createItem(newItem)

    addItem(newItem)
  }

  return (
    <form className="w-full p-4 flex" onSubmit={handleSubmit}>
      <input
        type="text"
        name="item"
        ref={inputRef}
        className="w-full h-14 rounded-md border-2 px-4"
      />
      <button
        type="submit"
        className="h-14 px-4 bg-violet-600 hover:bg-violet-400 text-gray-100 rounded-md ml-2"
      >
        Adicionar
      </button>
    </form>
  )
}
