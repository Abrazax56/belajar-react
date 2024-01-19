import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LogIn from './components/pages/Login.jsx'
import Register from './components/pages/Register.jsx'
import Incorrect from './components/pages/IncorrectPath.jsx'
import Product from './components/pages/Product.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello World</h1>,
    errorElement: <Incorrect/>
  },
  {
    path: "/login",
    element: <LogIn/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/products",
    element: <Product/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
