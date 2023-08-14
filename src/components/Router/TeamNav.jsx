import { Link, Outlet, useLoaderData } from 'react-router-dom';
// import { member } from './TeamMember';

const TeamNav = () => {
  const member = useLoaderData();
  return (
    <>
      <nav>
        <ul>
          {member.map((e) => {
            return (
              <li key={e.id}>
                <Link to={`${e.id}`}>team-{e.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default TeamNav;
