import { useAxios } from "./use-axios";

export function useHttp(baseURL, headers) {
  const instanceAxios = useAxios(baseURL, headers);

  async function get(url) {
    const response = await instanceAxios.get(url);
    return response.data;
  }

  async function post(url, body) {
    const response = await instanceAxios.post(url, body);
    return response.data;
  }

  async function _delete(url) {
    const response = await instanceAxios.delete(url);
    return response.data;
  }

  return {
    get,
    post,
    _delete,
  };
}
