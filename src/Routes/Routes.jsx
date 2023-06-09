import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import SignUp from "../pages/Signup/SignUp";
import Login from "../pages/Login/Login";
import InstructorPage from "../pages/InstructorPage/InstructorPage";
import Dashboard from "../layout/Dashboard";
import Classes from "../components/Classes/Classes";
import AdminHome from "../pages/Dashboard/Admin/AdminHome";
import Selected from "../pages/Dashboard/Student/Selected";
import EnroledClass from "../pages/Dashboard/Student/EnroledClass";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory";
import AddClass from "../pages/Dashboard/Instructor/AddClass";
import MyClass from "../pages/Dashboard/Instructor/MyClass";




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
        },
        {
          path:'instructor',
          element: <InstructorPage/>
        },
        {
          path: 'classes',
          element: <Classes/>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard/>,
      children: [
        // {
        //   path: '/dashboard',
        //   element: <Selected/>
        // },
        {
          path: '/dashboard/enrolled',
          element: <EnroledClass/>
        }, 
        {
          path: '/dashboard/history',
          element: <PaymentHistory/>
        },
        {
          path: '/dashboard',
          element: <MyClass/>
        },
        {
          path: '/dashboard/addclass',
          element: <AddClass/>
        }
      ]
    }
  ])