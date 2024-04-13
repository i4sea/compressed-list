import { FormEvent, useRef } from 'react'
import { useItemStore } from '../store/useItem'

export default function FormFilter() {
  const inputRef = useRef<HTMLInputElement>(null)

  const [items, addAllItems] = useItemStore(state => [
    state.items,
    state.addAllItems
  ])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!inputRef.current || !inputRef.current.value) {
      return
    }

    addAllItems(items.filter(item => item.title === inputRef.current?.value))
    event.currentTarget.reset()
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
        className="h-14 px-4 bg-emerald-600 hover:bg-emerald-400 text-gray-100 rounded-md ml-2"
      >
        Buscar
      </button>
    </form>
  )
}
