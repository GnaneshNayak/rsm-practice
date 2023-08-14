import axios from 'axios';
import { Link, useLoaderData } from 'react-router-dom';
import { getPosts } from '../api/post';
import { getUsers } from '../api/user';
import { useEffect, useRef } from 'react';

const PostList = () => {
  const {
    users,
    posts,
    searchParams: { query, userId },
  } = useLoaderData();

  const queryRef = useRef();
  const userRef = useRef();

  useEffect(() => {
    queryRef.current.value = query || '';
  }, [query]);
  useEffect(() => {
    userRef.current.value = userId || '';
  }, [userId]);

  return (
    <>
      <h1 className="page-title">
        Posts
        <div className="title-btns">
          <Link className="btn btn-outline" to="/posts/new">
            New
          </Link>
        </div>
      </h1>
      <form className="form mb-4">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="query">Query</label>
            <input type="search" name="query" id="query" ref={queryRef} />
          </div>
          <div className="form-group">
            <label htmlFor="userId">Author</label>
            <select type="search" name="userId" id="userId" ref={userRef}>
              <option value="">Any</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <button className="btn">Filter</button>
        </div>
      </form>

      <div className="card-grid">
        {posts.map((post) => (
          <div key={post.id}>
            <div className="card">
              <div className="card-header">{post.title}</div>
              <div className="card-body">
                <div className="card-preview-text">{post.body}</div>
              </div>
              <div className="card-footer">
                <Link className="btn" to={`/posts/${post.id}`}>
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

async function loader({ request: { signal, url } }) {
  const searchParams = new URL(url).searchParams;
  const query = searchParams.get('query');
  const userId = searchParams.get('query');
  const filterParams = { q: query };
  if (userId !== '') filterParams.userId = userId;
  const posts = getPosts({ signal, params: filterParams });
  const users = getUsers({ signal });
  return {
    posts: await posts,
    searchParams: { query, userId },
    users: await users,
  };
}

export const postListRoutes = {
  loader,
  element: <PostList />,
};
