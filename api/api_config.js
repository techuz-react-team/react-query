import Axios from 'axios';

const api = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8',
  },
});

export async function apiGet(url, parameters = {}, headers = {}) {
  return api.get(url, { headers, params: parameters });
}

export async function apiPost(
  url,
  payload = {},
  headers = {},
  parameters = {}
) {
  const resp = await api.post(url, payload, { headers, params: parameters });
  if (resp?.data) {
    return resp.data;
  }
  return false;
}

export async function apiPut(url, payload = {}, headers = {}, parameters = {}) {
  const resp = await api.put(url, payload, { headers, params: parameters });
  if (resp?.data) {
    return resp.data;
  }
  return false;
}

export async function apiDelete(url, parameters = {}, headers = {}) {
  return api.delete(url, { headers, params: parameters });
}

export default api;
