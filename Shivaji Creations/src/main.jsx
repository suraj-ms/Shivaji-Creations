import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Employee from './components/Employee/Employee.jsx'

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element: <App />,
//     children: [{
//       path: "",
//       element: <Home />
//     }, {
//       path: "employee",
//       element: <Employee />
//     }]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<App/>}>
      <Route path = '' element={<Home/>} />
      <Route path = 'employee' element={<Employee/>} />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
