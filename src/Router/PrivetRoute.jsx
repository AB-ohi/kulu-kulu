import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation } from "react-router-dom";

const PrivetRoute = () => {
    const { user,loading } = useContext(AuthContext);
    const location = useLocation()
    if(loading){
      return <progress className="progress w-56 m-auto"></progress>
    }
    if (user) {
      return children;
    }
    return<Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivetRoute;