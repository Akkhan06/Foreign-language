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
import ManageUser from "../pages/Dashboard/Admin/ManageUser";
import ManageClass from "../pages/Dashboard/Admin/ManageClass";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Payment from "../pages/Payment/Payment";
// import Payment from "../pages/Payment/Payment";




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
      element: <PrivateRoute><Dashboard/></PrivateRoute>,
      children: [
        {
          path: '/dashboard',
          element: <AdminHome/>
        },
        {
          path: "/dashboard/manageclass",
          element: <AdminRoute><ManageClass/></AdminRoute>
        },
        {
          path: '/dashboard/manageuser',
          element: <AdminRoute><ManageUser/></AdminRoute>
        },
        {
          path: '/dashboard/addclass',
          element: <InstructorRoute><AddClass/></InstructorRoute>
        },
        {
          path: '/dashboard/myclass',
          element: <InstructorRoute><MyClass/></InstructorRoute>
        },
        {
          path: '/dashboard/selected',
          element: <PrivateRoute><Selected/></PrivateRoute>
        },
        {
          path: '/dashboard/enrolled',
          element: <PrivateRoute><EnroledClass/></PrivateRoute>
        }, 
        {
          path: '/dashboard/history',
          element: <PrivateRoute><PaymentHistory/></PrivateRoute>
        },
        {
          path: '/dashboard/selectedonde/:id', 
          element: <Payment></Payment>
        },
      ]
    }
  ])