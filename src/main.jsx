import React from 'react'
import ReactDOM from 'react-dom/client'
import Dashboard from './Home.jsx'
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
        path:"dashboard/*",
        element:<Dashboard/>
      },
      {
        path:"login",
        element:<Login/>
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