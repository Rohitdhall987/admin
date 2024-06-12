import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
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
        path:"/login",
        element:<Login/>
      },
      {
        path:"home",
        element:<Home/>
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