import Layout from '../Components/Layout';
import Link from '../Components/Link';
import { usePosts } from '../api/usePosts';

const Posts = () => {
  const postData = usePosts({ isLoading: true, data: null });

  if (!postData.data || postData.isLoading) {
    return (
      <>
        <Layout />
        <p>Loading....</p>
      </>
    );
  }

  return (
    <>
      <Layout />
      <h1>Normal API</h1>
      <ul>
        {postData?.data?.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`post/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Posts;
