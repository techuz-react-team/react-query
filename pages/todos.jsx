import Layout from '../Components/Layout';
import Link from '../Components/Link';
import { getTodos } from '../api/todo_api';
import { dehydrate, QueryClient, useQuery } from 'react-query';

const Todos = () => {
  const todosData = useQuery('Todos', getTodos);

  if (!todosData.data || todosData.isLoading) {
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
      <h1>react-query</h1>
      <ul>
        {todosData?.data?.map((todo) => {
          return (
            <li key={todo.id}>
              <Link href={`todo/${todo.id}`}>{todo.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todos;

export async function getStaticProps(context) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('Todos', getTodos);
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
