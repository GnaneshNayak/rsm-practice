import { Link, Outlet, ScrollRestoration, useNavigate } from 'react-router-dom';

const RootLayout = () => {
  const { state } = useNavigate();
  const isLoading = state === 'loading';

  return (
    <>
      <nav className="top-nav">
        <div className="nav-text-large">My App</div>
        <ul className="nav-list">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        </ul>
      </nav>
      <ScrollRestoration />
      {isLoading && <div className="loading-spinner" />}
      <div className={`container ${isLoading ? 'loading' : ''}`}>
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
