import Layout from '../../Components/Layout';
import { getTodo, getTodos } from '../../api/todo_api';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient, useQuery } from 'react-query';

const Todo = () => {
  const router = useRouter();
  const { id } = router.query;
  const todoData = useQuery(['todo', id], () => getTodo(id));
  if (!todoData.data || todoData.isLoading) {
    return (
      <>
        <Layout />
        <p>Loading....</p>
      </>
    );
  }

  const { title, completed } = todoData.data;
  return (
    <>
      <Layout />
      <h1>react-query</h1>
      <hr />
      <h2>Task: {title}</h2>
      <br />
      <p>Completed: {completed ? 'true' : 'false'}</p>
    </>
  );
};

export default Todo;

export async function getStaticProps({ params }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['todo', params.id], () =>
    getTodo(params.id)
  );
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export async function getStaticPaths() {
  const todoList = await getTodos();
  const paths = todoList.map((todo) => ({ params: { id: `${todo.id}` } }));
  return { paths, fallback: false };
}
