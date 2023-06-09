import { Link,useLocation, useNavigate } from "react-router-dom";
import "../Login/Login.css";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../Login/SocialLogin";
import Swal from "sweetalert2";
const SignUp = () => {
  const {
    register,handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser,updateUserProfile } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/'


  const onSubmit = (data) =>{
    console.log(data)
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
      Swal.fire({
        icon: 'success',
        title: 'Login Success!!',
        showConfirmButton: false,
        timer: 1500
      })
      updateUserProfile(data.name, data.photoURL)
      navigate(from, {replace: true})
    })
  };

  return (
    <div className="md:grid items-end gap-6 grid-cols-2 login-bg w-full mb-4">
      <div className="md:w-full bottom-0  pt-20">
        <img
          className="rounded-2xl"
          src="https://i.ibb.co/VmvhF9R/9-2x.png"
          alt=""
        />
      </div>
      <div className="md:w-full m-auto pt-20">
        <div className="flex items-center">
          <img
            className="w-8"
            src="https://i.ibb.co/pb7sgpd/Artboard-1-2x.png"
            alt=""
          />
          <h1 className="form-heder">Melody Music Academy</h1>
        </div>
        <p className="text-[#898D93] mt-2">
          Welcome, Please create to your account.
        </p>
        <SocialLogin></SocialLogin>
        <div className="divider text-blue-600 w-2/3 m-auto">
          
          Create Your Account
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              {...register("name")}
              />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              {...register("email")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              {...register("photoURL")}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p>
          already have an account
          <Link to="/login">
            <span className="text-blue-600">Login Now!!</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
