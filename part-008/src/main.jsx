import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LogIn from './components/pages/Login.jsx'
import Register from './components/pages/Register.jsx'
import Incorrect from './components/pages/IncorrectPath.jsx'
import Nest from './components/pages/Pages.jsx'
import NestPage from './components/pages/DetailProduct.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import DarkModeContextProvider from './context/DarkMode.jsx';
import { TotalPriceProvider } from './context/TotalPrice.jsx';
import store from './redux/store.js'

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
    path: "/nested",
    element: <Nest/>
  },
  {
    path: "/nest/:id",
    element: <NestPage/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router}/>
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
)
