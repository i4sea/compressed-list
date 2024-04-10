import { FormEvent, useEffect, useRef } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Card } from "../../components/Card";
import Header from "../../components/Header";
import { useAppStore } from "../../store";
import { encrypt } from "../../util/encrypt";
import styles from "./styles.module.scss";
import { fetchListItems } from "../../endpoints/items";

/*
  Alfabeto: abcdefghijklmnopqrstuvwxyz
  Alfabeto após a cifra de César (chave = 3): defghijklmnopqrstuvwxyzabc
*/

function Home() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { items, setItems } = useAppStore();

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    const dragItem = items && items[dragIndex];

    const itemsList = [...items];
    const prevItem = itemsList.splice(hoverIndex, 1, dragItem);
    itemsList.splice(dragIndex, 1, prevItem[0]);

    setItems(itemsList);
  };

  const renderCard = () => {
    return items.map((item, index) => (
      <div key={item.id}>
        <Card index={index} item={item} moveItem={moveItem} />
      </div>
    ));
  };

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!inputRef.current || !inputRef.current.value) return;

    setItems([
      ...items,
      {
        id: items[items.length - 1].id + 1 || 1,
        title: encrypt(inputRef.current.value),
      },
    ]);
  }

  useEffect(() => {
    (async () => {
      const allItems = await fetchListItems();

      setItems(allItems);
    })();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <form className={styles.insert} onSubmit={handleSubmit}>
          <input type="text" name="add" ref={inputRef} />
          <button type="submit">Adicionar</button>
        </form>
        <div className={styles["content__items"]}>
          <DndProvider backend={HTML5Backend}>{renderCard()}</DndProvider>
        </div>
      </div>
    </div>
  );
}

export default Home;
