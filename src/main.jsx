import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// import App from './components/AdavanceStatefulComponents/App';
// import App from './components/AdavncedComponent/App';
import App from './App.jsx';
import './components/RouterProject/styles.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/RouterProject/router.jsx';
// import { router } from './router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
