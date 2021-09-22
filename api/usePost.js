import { useEffect, useState } from 'react';
import { apiGet } from './api_config';

export function usePost(index, defaultResponse) {
  const [post, setPost] = useState(defaultResponse);

  async function getPeople(index) {
    try {
      const result = await apiGet(
        `https://jsonplaceholder.typicode.com/posts/${index}`
      );
      if (result.data) {
        setPost({
          isLoading: false,
          data: result.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPeople(index);
  }, [index]);

  return post;
}
