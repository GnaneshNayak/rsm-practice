import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      {' '}
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">about</a>
          </li>
          <li>
            <a href="/store">store</a>
          </li>
          <Link to={'/team'}>team</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
