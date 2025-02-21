import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './MainComponents/Main/Main';
import AddTasks from './Pages/AddTasks/AddTasks';
import Login from './Pages/Auth/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Auth/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/addtasks',
        element: <PrivateRoute><AddTasks></AddTasks></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
