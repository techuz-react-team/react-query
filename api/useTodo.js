import { apiGet } from './api_config';
import { useQuery } from 'react-query';

export function useTodo(index) {
  const result = useQuery(['Todos', index], () => {
    return apiGet(`https://jsonplaceholder.typicode.com/todos/${index}/`).then(
      (res) => res.data
    );
  });
  return { data: result.data, isLoading: result.isLoading };
}
