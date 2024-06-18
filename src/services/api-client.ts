import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "fe93bb1ce48b4e56958320adc76d1381",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((response) => response.data)
  };

  get = (id: number | string) => {
    return axiosInstance
      .get<T>(this.endpoint + '/' + id)
      .then((response) => response.data)
  }
}

export default APIClient;