import { compressItem } from "../../utils/compressItem";
import { CompressItemsData, ReturnCompressList } from "../types/compressList";

class CompressMapper {
  toDomain(persistence: CompressItemsData): ReturnCompressList {
    return {
      id: persistence.id,
      title: compressItem(persistence.title),
    };
  }
}

export default new CompressMapper();
