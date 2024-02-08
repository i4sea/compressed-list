import { ChangeEvent, FormEvent, useState } from "react";
import { useItemsStore } from "../../store";

export default function AddItem() {
  const [value, setValue] = useState("");

  const { items, addItem } = useItemsStore();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addItem({ title: value, id: items.length });
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        placeholder="Novo item"
        className="border border-stone-800 rounded-md py-1 px-2"
        value={value}
        onChange={handleChangeInput}
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
