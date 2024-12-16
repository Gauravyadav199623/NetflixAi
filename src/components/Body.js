import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        },
    ])
    // because Header is always present so i move the "onAuthStateChanged" in the header component

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body