import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './app.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: '/about',
    element: <div>I am from about page</div>
  },
  {
    path: 'contact',
    element: <div>Call me right now</div>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
