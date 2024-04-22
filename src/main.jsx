import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import './index.css';
import Page from './pages/page';
import ArchivePage from './pages/archive-page';
import LoginPage from './pages/login';

const router = createBrowserRouter([
  {
    path: "/",
    element:<LoginPage/>,
  },
  {
    path: "/page",
    element:<Page/>,
  },
  {
    path: "/archive-page",
    element:<ArchivePage/>,
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
