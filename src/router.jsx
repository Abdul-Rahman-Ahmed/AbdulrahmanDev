import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/home/home'
import React from 'react'

const Routers = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
  ],
  {
    basename: 'AbdulrahmanDev',
  }
)

const Router = () => {
  return <RouterProvider router={Routers} />
}

export default Router
