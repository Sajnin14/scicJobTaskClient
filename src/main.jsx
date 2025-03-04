import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './MainComponents/Main/Main';
import AddTasks from './Pages/AddTasks/AddTasks';
import Home from '../src/Pages/Home/home';
import Login from './Pages/Auth/Login';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Auth/PrivateRoute';
import AllTasks from './Pages/AllTasks/AllTasks';
import EditTasks from './Pages/EditTasks/EditTasks';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import Category from './Pages/Category/Category';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addtasks',
        element: <PrivateRoute><AddTasks></AddTasks></PrivateRoute>
      },
      {
        path: '/alltasks',
        element: <PrivateRoute><AllTasks></AllTasks></PrivateRoute>
      },
      {
        path: '/editTasks/:id',
        element: <PrivateRoute><EditTasks></EditTasks> </PrivateRoute>,
        loader: ({ params }) => fetch(`https://job-task-server-beige.vercel.app/GET/tasks/${params.id}`),
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/category',
        element: <Category></Category>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>,
)
