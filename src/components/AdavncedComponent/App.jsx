import { createContext, useEffect, useReducer, useState } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoFilterForm from './TodoFilterForm';
import TodoList from './TodoList';
import './styles.css';

const LOCAL_STORAGE_KEY = 'todos';

const ACTION = {
  add: 'add',
  update: 'update',
  toggle: 'toggle',
  delete: 'delete',
};
const reducer = (todos, { type, payload }) => {
  if (type === ACTION.add) {
    return [
      ...todos,
      { name: payload.name, completed: true, id: crypto.randomUUID() },
    ];
  }
  if (type === ACTION.toggle) {
    return todos.map((todo) => {
      if (todo.id === payload.id)
        return { ...todo, completed: payload.completed };
      return todo;
    });
  }
  if (type === ACTION.delete) {
    return todos.filter((todo) => todo.id !== payload.id);
  }
  if (type === ACTION.update) {
    return todos.map((todo) => {
      if (todo.id === payload.id) {
        return { ...todo, name: payload.name };
      }
      return todo;
    });
  }

  return todos;
};

export const TodoContext = createContext({});

const App = () => {
  const [filterName, setFilterName] = useState('');
  const [hideCompletedFilter, setHideCompletedFilter] = useState(false);
  const [todos, dispatch] = useReducer(reducer, [], () => {
    const value = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (value === null) return [];
    return JSON.parse(value);
  });

  const filterTodos = todos.filter((todo) => {
    if (hideCompletedFilter & todo.completed) return false;
    return todo.name.includes(filterName);
  });
  console.log(filterTodos);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  });

  function addNewTodo(name) {
    dispatch({ type: ACTION.add, payload: { name } });
  }
  function toggleTodo(id, completed) {
    dispatch({ type: ACTION.toggle, payload: { id, completed } });
  }
  function deleteTodo(todoId) {
    dispatch({ type: ACTION.delete, payload: { id: todoId } });
  }
  function updateTodoName(id, name) {
    dispatch({ type: ACTION.update, payload: { id, name } });
  }

  return (
    <TodoContext.Provider
      value={{
        todos: filterTodos,
        addNewTodo,
        deleteTodo,
        toggleTodo,
        updateTodoName,
      }}
    >
      <TodoFilterForm
        name={filterName}
        setName={setFilterName}
        setHideCompletedFilter={setHideCompletedFilter}
        hideCompletedFilter={hideCompletedFilter}
      />
      <TodoList />
      <NewTodoForm />
    </TodoContext.Provider>
  );
};

export default App;
