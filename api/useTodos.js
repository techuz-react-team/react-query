import { apiGet } from './api_config';
import { useQuery } from 'react-query';

export function useTodos() {
  const result = useQuery('Todos', () => {
    return apiGet('https://jsonplaceholder.typicode.com/todos/').then(
      (res) => res.data
    );
  });
  return { data: result.data, isLoading: result.isLoading };
}
