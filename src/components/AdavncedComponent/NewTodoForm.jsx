import { useContext, useRef } from 'react';
import { TodoContext } from './App';

const NewTodoForm = () => {
  const nameRef = useRef();
  const { addNewTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameRef.current.value === '') return;

    addNewTodo(nameRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit} id="new-todo-form">
      <label htmlFor="todo-input">New Todo</label>
      <input ref={nameRef} type="text" id="todo-input" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
