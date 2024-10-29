import React from 'react'
import { Routes, Route, Link, NavLink, createBrowserRouter, RouterProvider, createRoutesFromElements} from 'react-router-dom';
import {HomeLayout, Landing, Register, Login, DashboardLayout, Error, AddJob, Stats, AllJobs, Profile, Admin} from './pages';


export const checkDefaultTheme= ()=>{
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
}

checkDefaultTheme();

import { action } from "./pages/Register";

const router= createBrowserRouter ([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error/>,
    children:[
      {
        index:true,
        element: <Landing/>
      },
      {
        path: 'register',
        element: <Register />,
        action: {action},
      },
      {
        path: 'login',
        element: <Login />,
        action: {action},
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />, 
        children:[
          {
            index: true,
            element:<AddJob />
          },
          {
            path:'stats',
            element:<Stats />
          },
          {
            path:'all-jobs',
            element:<AllJobs />
          },
          {
            path:'profile',
            element:<Profile />
          },
          {
            path:'admin',
            element:<Admin />
          },
          
        ]
      }
    ]
  }
  
]); 

const newRouter= createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<HomeLayout />}
      errorElement={<Error />}
      >
          <Route index={true} element={<Landing />} />
          <Route path='register' element={<Register/ >} action={action}/>
          <Route path='login' element={<Login/ >} />
          
        </Route>
  )
);

const App = () => {
  return (
  //  <RouterProvider router={router}/> // OG <--
  <RouterProvider router={newRouter} />
  )
}

export default App