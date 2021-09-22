import Layout from '../Components/Layout';
import Link from '../Components/Link';
import { useTodos } from '../api/useTodos';

const Todos = () => {
  const todosData = useTodos();

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
