import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const {googleSingIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const HandelGoogleSingIn = () =>{
        googleSingIn()
        .then(res => {
            const loggedUser = res.user;
            console.log(loggedUser);
            Swal.fire({
                icon: 'success',
                title: 'Login Success!!',
                showConfirmButton: false,
                timer: 1500
              })
            navigate(from, { replace: true });  
        })
    }
    return (
        <div>
            <button onClick={HandelGoogleSingIn} className="btn btn-outline btn-primary w-full md:my-[60px]"><img className="w-[20px]" src="https://i.ibb.co/hYh0gXW/google-logo-9808.png" alt="" /> Log in with Google</button>
        </div>
    );
};

export default SocialLogin;