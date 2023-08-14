import { useLoaderData } from 'react-router-dom';
import { getTodos } from '../api/todo';

export function TodoItem({ completed, title }) {
  return <li className={completed ? 'strike-through' : undefined}>{title}</li>;
}

function TodoList() {
  const todos = useLoaderData();

  return (
    <>
      <h1 className="page-title">Todos</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}

function loader({ request: { signal } }) {
  return getTodos({ signal });
}

export const todoListRoute = {
  loader,
  element: <TodoList />,
};
