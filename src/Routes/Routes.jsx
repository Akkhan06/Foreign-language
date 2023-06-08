import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import SignUp from "../pages/Signup/SignUp";
import Login from "../pages/Login/Login";

  export const route = createBrowserRouter ([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [{
          path: "/",
          element: <Home></Home>
        },
        {
          path:'signup',
          element: <SignUp/>
        },
        {
          path:'login',
          element: <Login/>
        }
      ]
    }
  ])