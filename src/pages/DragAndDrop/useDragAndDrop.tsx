import { useQuery } from "@tanstack/react-query";
import { CompressItemsData } from "../../service/types/compressList";
import { useItemsStore } from "../../store";
import Card from "../../components/Card";
import CompressService from "../../service/compressService";

export default function useDragAndDrop() {
  const { items, setItems, changeOrder } = useItemsStore();

  const moveItem = (dragIndex: number, hoverIndex: number) => {
    changeOrder(dragIndex, hoverIndex);
  };

  const renderCard = () => {
    return items.map((task: CompressItemsData, index: number) => {
      return (
        <Card key={task.id} index={index} item={task} moveRow={moveItem} />
      );
    });
  };

  const { isPending } = useQuery({
    queryKey: ["compressList"],
    queryFn: async () => {
      const list = await CompressService.getList();
      setItems(list);
      return list;
    },
  });

  return {
    isLoading: isPending,
    renderCard,
  };
}
