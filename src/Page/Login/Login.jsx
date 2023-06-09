import { Link,useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "./SocialLogin";
import Swal from "sweetalert2";
const Login = () => {
  const {login} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/'

  const handelToLogin = event =>{
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {email, password};
    console.log(user)

    login(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user)
      Swal.fire({
        icon: 'success',
        title: 'Login Success!!',
        showConfirmButton: false,
        timer: 1500
      })
      navigate(from, {replace: true})
    })
    .catch(error =>console.log(error));
  }
  return (
    <div className="md:flex items-end login-bg w-full mb-4">
      <div className="md:w-1/2  pt-20">
        <img src="https://i.ibb.co/VmvhF9R/9-2x.png" alt="" />
      </div>
      <div className="md:w-1/2 m-auto pt-20">
        <div className="flex items-center">
          <img
            className="w-8"
            src="https://i.ibb.co/pb7sgpd/Artboard-1-2x.png"
            alt=""
          />
          <h1 className="form-heder">Melody Music Academy</h1>
        </div>
        <p className="text-[#898D93] mt-2">Welcome, Please login to your account.</p>
        <SocialLogin></SocialLogin>
        <div className="divider text-blue-600 w-2/3 m-auto"> login For External User</div>
        <form onSubmit={handelToLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            name="email"
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
            name="password"
              type="text"
              placeholder="password"
              className="input input-bordered"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p>create new account <Link to='/signUp'><span className="text-blue-600">Registration Now!!</span></Link></p>
      </div>
    </div>
  );
};

export default Login;
