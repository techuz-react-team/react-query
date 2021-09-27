import { apiGet } from './api_config';

export async function getTodos() {
  const result = await apiGet('https://jsonplaceholder.typicode.com/todos/');
  if (result.data) {
    return result.data;
  }
  return false;
}

export async function getTodo(index) {
  const result = await apiGet(
    `https://jsonplaceholder.typicode.com/todos/${index}`
  );
  if (result.data) {
    return result.data;
  }
  return false;
}
