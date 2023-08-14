import { Link, useLoaderData } from 'react-router-dom';
import { getUser } from '../api/user';
import { TodoItem } from './TodoList';
import { getTodos } from '../api/todo';
import { getPosts } from '../api/post';
import { PostCard } from '../components/PostCard';

function User() {
  const { user, post, todos } = useLoaderData();
  console.log(user);

  return (
    <>
      <h1 className="page-title">{user.name}</h1>
      <div className="page-subtitle">{user.email}</div>
      <div>
        <b>Company:</b> {user.company.name}
      </div>
      <div>
        <b>Website:</b> {user.website}
      </div>
      <div>
        <b>Address:</b> {user.address.street} {user.address.suite}{' '}
        {user.address.city} {user.address.zipcode}
      </div>

      <h3 className="mt-4 mb-2">Posts</h3>
      <div className="card-grid">
        {post.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
      <h3 className="mt-4 mb-2">Todos</h3>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}

async function loader({ request: { signal }, params: { userId } }) {
  console.log(userId);
  const user = getUser(userId, { signal });
  const post = getPosts({ signal, params: { userId } });
  const todos = getTodos({ signal, params: { userId } });

  return { post: await post, todos: await todos, user: await user };
}

export const userRoute = {
  loader,
  element: <User />,
};
