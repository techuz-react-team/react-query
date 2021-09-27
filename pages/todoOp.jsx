import Layout from '../Components/Layout';
import AddTodo from './addTodo';
import DeleteTodo from './deleteTodo';
import EditTodo from './editTodo';

export default function TodoOp() {
  return (
    <>
      <Layout />
      <h1>Todo Operations (Add,Edit,Delete)</h1>
      <AddTodo />
      <br />
      <hr />
      <br />
      <EditTodo />
      <br />
      <hr />
      <br />
      <DeleteTodo />
    </>
  );
}
