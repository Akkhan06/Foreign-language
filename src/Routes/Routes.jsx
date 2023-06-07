import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";

  export const route = createBrowserRouter ([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [{
          path: "/",
          element: <Home></Home>
        }]
    }
  ])