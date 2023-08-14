import { Navigate, createBrowserRouter, useRouteError } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';
import { postListRoutes } from './pages/PostList';
import { usersListRoutes } from './pages/UserList';
import { todoListRoute } from './pages/TodoList';
import { postRoute } from './pages/post';
import { userRoute } from './pages/user';
import { newPostRoute } from './pages/NewPost';
import { editPostRoute } from './pages/EditPost';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Navigate to="/posts" /> },
          {
            path: 'posts',
            children: [
              {
                index: true,
                ...postListRoutes,
              },
              {
                path: ':postId',
                children: [
                  { index: true, ...postRoute },
                  { path: 'edit', ...editPostRoute },
                ],
              },
              { path: 'new', ...newPostRoute },
            ],
          },
          {
            path: 'users',

            children: [
              {
                index: true,
                ...usersListRoutes,
              },
              { path: ':userId', ...userRoute },
            ],
          },

          { path: 'todos', ...todoListRoute },
          { path: '*', element: <h1> 404 page not found</h1> },
        ],
      },
    ],
  },
]);

// import { createBrowserRouter } from 'react-router-dom';

// import Home from './components/Router/Home';
// import About from './components/Router/About';
// import Store from './components/Router/Store';
// import Nav from './components/Router/Nav';
// import Layout from './components/Router/Layout';
// import Team from './components/Router/Team.jsx';
// import TeamMember from './components/Router/TeamMember.jsx';
// import TeamNav from './components/Router/TeamNav';
// import New from './components/Router/New';

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { path: '*', element: <h1>HELLO</h1> },
//       { path: 'home', element: <Home /> },
//       { path: 'about', element: <About /> },
//       { path: 'store', element: <Store /> },
//       {
//         path: 'team',
//         element: <TeamNav />,
//         loader: ({ request: { signal } }) => {
//           return fetch('https://jsonplaceholder.typicode.com/users', {
//             signal,
//           });
//         },
//         children: [
//           { index: true, element: <Team /> },
//           { path: ':memberID', element: <TeamMember /> },
//           { path: 'new', element: <New /> },
//         ],
//       },
//     ],
//   },
// ]);

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <h1>Error - somthing went wrong</h1>
      <pre>{error.message}</pre>
      <pre>{error.stack}</pre>
    </>
  );
}
