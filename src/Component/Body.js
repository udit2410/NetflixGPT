import React from 'react'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'

const Body = () => {
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login></Login>
        },
        {
            path:"/browse",
            element:<Browse></Browse>
        }
    ])
    
  return (
    <div>
      
          <RouterProvider router={appRouter}></RouterProvider>


    </div>
  )
}

export default Body