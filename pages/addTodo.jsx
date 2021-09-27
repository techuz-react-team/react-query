import { useMutation } from 'react-query';
import { apiPost } from '../api/api_config';
import { useEffect, useState } from 'react';

const AddTodo = () => {
  const [completed, setCompleted] = useState('');
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const addMutation = useMutation((newTodo) => {
    apiPost(`https://jsonplaceholder.typicode.com/todos/`, newTodo);
  });

  useEffect(() => {
    setCompleted('');
    setUserId('');
    setTitle('');
  }, [addMutation.isSuccess]);
  return (
    <>
      <div>
        {addMutation.isLoading ? (
          'Adding todo...'
        ) : (
          <>
            <label>
              Task title :
              <input
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </label>
            <br />
            <label>
              Task assigned to userId :
              <input
                value={userId}
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
              />
            </label>
            <br />
            <label>
              Task status:
              <label>
                YES
                <input
                  type='radio'
                  value={true}
                  name='taskStatus'
                  onClick={() => {
                    setCompleted(true);
                  }}
                />
              </label>
              <label>
                NO
                <input
                  type='radio'
                  value={false}
                  name='taskStatus'
                  onClick={() => {
                    setCompleted(false);
                  }}
                />
              </label>
            </label>
            <br />
            <button
              onClick={() => {
                addMutation.mutate({ title, userId, completed });
              }}
            >
              Create Todo
            </button>
            {addMutation.isSuccess ? <div>Todo added!</div> : null}
            {addMutation.isError ? (
              <div>An error occurred: {addMutation.error.message}</div>
            ) : null}
          </>
        )}
      </div>
    </>
  );
};

export default AddTodo;
