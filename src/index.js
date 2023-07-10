import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './templates/Layout';
import Forside from './Pages/Forside';
import OmSkole from './Pages/OmSkole';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
      index: true,
      element: <Forside/>
      },
      {
      path: "/om-skolen",
      element: <OmSkole/>
      }
    ]
    
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
);

