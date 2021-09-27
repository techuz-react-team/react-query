import { useMutation } from 'react-query';
import { apiDelete } from '../api/api_config';
import { useState } from 'react';

const DeleteTodo = () => {
  const [id, setId] = useState(-1);
  const deleteMutation = useMutation((id) => {
    apiDelete(`https://jsonplaceholder.typicode.com/todos/${id}`);
  });

  return (
    <>
      <div>
        {deleteMutation.isLoading ? (
          'Deleting todo...'
        ) : (
          <>
            <label>
              Task id to delete :
              <input
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
            </label>
            <br />
            <button
              onClick={() => {
                deleteMutation.mutate(id);
              }}
            >
              Delete Todo
            </button>
            {deleteMutation.isSuccess ? <div>Todo deleted!</div> : null}
            {deleteMutation.isError ? (
              <div>An error occurred: {deleteMutation.error.message}</div>
            ) : null}
          </>
        )}
      </div>
    </>
  );
};

export default DeleteTodo;
