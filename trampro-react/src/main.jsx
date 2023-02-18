import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './components/patterns/error404';
import Home from './components/pages/home/home';
import Profile from './components/pages/profile/profile';
import ProfilePublic from './components/pages/profilePublic/profilePublic';
import HirerProfile from './components/pages/hirerProfile/hirerProfile';
import Services from './components/pages/services/services';
import Login from './components/pages/login/login';
import Payment from './components/pages/payment/payment';




/* const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/profile",
    element: <Profile />
  }
]) */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/publicProfile",
        element: <ProfilePublic />
      },
      {
        path: "/hirerProfile",
        element: <HirerProfile />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/payment",
        element: <Payment />
      }
    ]
  },

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
