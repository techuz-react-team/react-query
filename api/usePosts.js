import { useEffect, useState } from 'react';
import { apiGet } from './api_config';

export function usePosts(defaultResponse) {
  const [posts, setPosts] = useState(defaultResponse);

  async function getPosts() {
    try {
      const result = await apiGet(
        'https://jsonplaceholder.typicode.com/posts/'
      );
      if (result.data) {
        setPosts({
          isLoading: false,
          data: result.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);

  return posts;
}
