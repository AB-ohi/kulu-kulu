import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const NavBer = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const NavList = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>

      <li>
        {user ? (
          <>
            <Link onClick={handelLogout}>Log out</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
          </>
        )}
      </li>
    </>
  );
  return (
    <div>
      <div>
        <div className="navbar fixed z-10 text-black  max-w-screen-xl">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu sm:text-black menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {NavList}
              </ul>
            </div>
            <Link to="/" className="normal-case text-xl flex flex-col">
              <img
                className="w-[100px]"
                src="https://i.ibb.co/0X4M8TP/Mesa-de-trabajo-1-copia-2x.png"
                alt=""
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{NavList}</ul>
          </div>
          <div className="navbar-end">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-3">
                {user ? (
                  <>
                    <p>{user?.displayName}</p>
                  </>
                ) : (
                  <></>
                )}
                <div className="w-10 rounded-full">
                  {user?.photoURL ? (
                    <img className="rounded-full" src={user?.photoURL}></img>
                  ) : (
                    <img
                      className="rounded-full"
                      src="https://static.vecteezy.com/system/resources/previews/002/412/377/original/coffee-cup-logo-coffee-shop-icon-design-free-vector.jpg"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBer;
