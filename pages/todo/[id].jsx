import Layout from '../../Components/Layout';
import { useTodo } from '../../api/useTodo';
import { useRouter } from 'next/router';

const Todo = () => {
  const router = useRouter();
  const { id } = router.query;
  const todoData = useTodo(id);

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
      <p>Completed: {completed}</p>
    </>
  );
};

export default Todo;
