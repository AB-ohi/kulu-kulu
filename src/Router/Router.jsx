import { createBrowserRouter } from "react-router-dom";
import Main from "../Outlet/Main";
import Home from "../Page/Home/Home/Home";
import Instructors from "../Page/Instructors/Instructors";
import Login from "../Page/Login/Login";
import SignUp from "../Page/SignUp/SignUp";
import Classes from "../Page/Classes/Classes";
import PrivetRoute from "./PrivetRoute";
import DashBoard from "../LayOut/DashBoard/DashBoard";
import AdminHome from "../Page/DashBord/AdminHome/AdminHome";
import MySelectedClasses from "../Page/DashBord/MySelectedClasses/MySelectedClasses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/instructors",
          element:<Instructors></Instructors>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signUp",
          element:<SignUp></SignUp>
        },
        {
          path:"/classes",
          element:<Classes></Classes>
        }
    ]
  },
  {
    path:'dashboard',
    element:<PrivetRoute><DashBoard></DashBoard></PrivetRoute>,
    children:[
      {
        path:'mySelectedClass',
        element:<MySelectedClasses></MySelectedClasses>
      }
    ]
  }
]);

export default router;
