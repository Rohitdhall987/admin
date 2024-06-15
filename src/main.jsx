import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './dashboard.jsx'
import AddSong from './AddSong.jsx'
import Login from './login.jsx'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children:[
      {
        path:"/",
        element:<Login/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path: "dashboard/*",
        element:<Dashboard/>
      },
      {
        path:"addSong",
        element:<AddSong/>
      },
    ]
    
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);