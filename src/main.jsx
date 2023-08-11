import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// import App from './components/AdavanceStatefulComponents/App';
import App from './components/AdavncedComponent/App';
// import App from './App.jsx';
import './index.css';
console.log('main');
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
