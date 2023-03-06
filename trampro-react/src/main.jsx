import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { UpdateModal } from '../src/assets/hooks/useModal'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './components/patterns/error404';
import Home from './components/pages/home/home';
import Profile from './components/pages/profile/profile';
import ProfilePublic from './components/pages/profilePublic/profilePublic';
import HirerProfile from './components/pages/hirerProfile/hirerProfile';
import Services from './components/pages/services/services';
import Payment from './components/pages/payment/payment';
import NewService from './components/pages/profile/newService/newService'
import FinalForm from './components/pages/profile/newService/finalFormService'
import ResultSearch from './components/constants/result'


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
        path: "/profile/newService",
        element: <NewService />
      },
      {
        path: "/profile/newService/final",
        element: <FinalForm />
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
        path: "/result",
        element: <ResultSearch />
      },
      {
        path: "/services",
        element: <Services />
      },
          {
        path: "/payment",
        element: <Payment />
      }
    ]
  },

])



ReactDOM.createRoot(document.getElementById('root')).render(

  <UpdateModal>

    <React.StrictMode>

      <RouterProvider router={router} />

    </React.StrictMode>
    
 </UpdateModal>
 
)
