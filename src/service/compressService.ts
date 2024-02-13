import HttpClient from "./utils/httpClient";

import CompressMapper from "./mappers/compressMapper";

import { compressListData } from "../mocks/compressListData";

import { CompressList, ReturnCompressList } from "./types/compressList";

class CompressService {
  httpClient: HttpClient;
  constructor() {
    this.httpClient = new HttpClient(import.meta.env.BASE_URL);
  }

  async getList(): Promise<ReturnCompressList[]> {
    let compressList: CompressList = await this.httpClient.get(
      "/compress-list",
      {}
    );

    compressList = compressListData;

    return compressList.items.map((item) => CompressMapper.toDomain(item));
  }
}

export default new CompressService();
