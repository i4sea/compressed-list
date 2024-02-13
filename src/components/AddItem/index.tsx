import { FormEvent, useRef } from "react";
import { useItemsStore } from "../../store";
import { compressItem } from "../../utils/compressItem";

export default function AddItem() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { items, addItem } = useItemsStore();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current) return;

    addItem({
      id: items.length + 1,
      title: compressItem(inputRef.current.value),
    });
    inputRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        ref={inputRef}
        placeholder="Novo item"
        className="border border-stone-800 rounded-md py-1 px-2"
      />
      <button
        className="flex items-center justify-center min-w-[50px] bg-orange-500 border-none rounded-md font-bold text-stone-950 px-4 py-2"
        type="submit"
      >
        Criar item
      </button>
    </form>
  );
}
