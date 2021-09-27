import { useMutation, useQuery, refetch } from 'react-query';
import { apiPut } from '../api/api_config';
import { useEffect, useState } from 'react';
import { getTodo } from '../api/todo_api';

const EditTodo = () => {
  const [completed, setCompleted] = useState('');
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [editId, setEditId] = useState(null);
  const editMutation = useMutation(({ editId, ...editedTodo }) => {
    apiPut(`https://jsonplaceholder.typicode.com/todos/${editId}`, editedTodo);
  });

  const fetchedData = useQuery(['edit', editId], () => getTodo(editId), {
    enabled: Boolean(editId),
  });

  useEffect(() => {
    setCompleted('');
    setUserId('');
    setTitle('');
  }, [editMutation.isSuccess]);

  useEffect(() => {
    if (fetchedData?.data) {
      const { title, completed, userId } = fetchedData?.data;
      setCompleted(completed);
      setUserId(userId);
      setTitle(title);
    }
  }, [fetchedData.isSuccess, fetchedData.data]);

  return (
    <>
      <div>
        <label>
          Task id to fetch :
          <input
            value={editId}
            onChange={(e) => {
              setEditId(e.target.value);
            }}
          />
        </label>
        <br />
        {fetchedData.isSuccess ? (
          <div>
            {editMutation.isLoading ? (
              'Editing todo...'
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
                      checked={completed === true}
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
                      checked={completed === false}
                    />
                  </label>
                </label>
                <br />
                <button
                  onClick={() => {
                    editMutation.mutate({ editId, title, userId, completed });
                  }}
                >
                  Edit Todo
                </button>
                {editMutation.isSuccess ? <div>Todo added!</div> : null}
                {editMutation.isError ? (
                  <div>An error occurred: {editMutation.error.message}</div>
                ) : null}
              </>
            )}
          </div>
        ) : null}
        {fetchedData.isError ? (
          <div>An error occurred: {fetchedData.error.message}</div>
        ) : null}
      </div>
    </>
  );
};

export default EditTodo;
