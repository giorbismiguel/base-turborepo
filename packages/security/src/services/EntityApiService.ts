import ApiClientService from "./ApiClientService";
import { RequestConfig } from "../types/axios";
import { AxiosResponse } from "axios";

export type SearchResponseType<T> = {
  data: T[];
  total: number;
  hasMore: boolean;
};

class EntityApiService<T> {
  private readonly path: string;

  constructor(path: string) {
    this.path = path;
  }

  /**
   *Get the request path
   * @param {string| null} concat custom path to the entity path
   * @return {string}
   **/
  getPath(concat: string | null) {
    return this.path + (concat || "");
  }

  search = (
    params?: any,
    config?: RequestConfig
  ): Promise<SearchResponseType<T>> => {
    const size = params?.size || 20;
    return this.handleSearchResponse(
      ApiClientService.post(this.getPath("/search"), params, config),
      size
    );
  };

  getOne = (id: string, config?: RequestConfig): Promise<T> => {
    return this.handleResponse(
      ApiClientService.get(this.getPath(`/${id}`), config)
    );
  };

  save = (params: any, config?: RequestConfig): Promise<T> => {
    return this.handleResponse(
      ApiClientService.post(this.getPath(null), params, config)
    );
  };

  saveOrUpdate = (params: any, config?: RequestConfig): Promise<T> => {
    if (params?._id) return this.update(params, config);
    return this.save(params, config);
  };

  update = (id: any, params?: any, config?: RequestConfig): Promise<T> => {
    if (typeof id === "object") {
      params = id;
      id = id._id;
    } else {
      if (params) params._id = id;
    }
    return this.handleResponse(
      ApiClientService.patch(this.getPath(`/${id}`), params, config)
    );
  };

  delete = (id: string, config?: RequestConfig) => {
    return this.handleResponse(
      ApiClientService.delete(this.getPath(`/${id}`), config)
    );
  };

  deleteMany = (data: string[], config?: RequestConfig) => {
    return this.handleResponse(
      ApiClientService.delete(this.getPath(null), {
        ...config,
        data,
      })
    );
  };

  recover = (id: string, params: any, config?: RequestConfig) => {
    return this.handleResponse(
      ApiClientService.patch(this.getPath(`/${id}/recover`), params, config)
    );
  };

  handleResponse = (promise: Promise<AxiosResponse>): Promise<any> => {
    return promise.then(({ data }) => data);
  };

  handleSearchResponse = (
    promise: Promise<AxiosResponse>,
    size: number
  ): Promise<SearchResponseType<T>> => {
    return promise.then(({ data, headers }) => {
      const total = Number(headers["x-total-count"]) || 0;
      const hasMore = data.length === size;
      return { data, total, hasMore };
    });
  };
}

export default EntityApiService;
