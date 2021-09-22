import Layout from '../../Components/Layout';
import { usePost } from '../../api/usePost';
import { useRouter } from 'next/router';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const postData = usePost(id, { isLoading: true, data: null });
  if (!postData.data || postData.isLoading) {
    return (
      <>
        <Layout />
        <p>Loading....</p>
      </>
    );
  }

  const { title, body } = postData.data;
  return (
    <>
      <Layout />
      <h1>Normal API</h1>
      <hr />
      <h2>{title}</h2>
      <br />
      <p>{body}</p>
    </>
  );
};

export default Post;
