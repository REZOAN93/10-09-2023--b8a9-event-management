import { Link, NavLink, useNavigate } from "react-router-dom";
import img1 from "../../../assets/footer.png";
import "./Header.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { FcBusinessman } from "react-icons/fc";
import { split } from "postcss/lib/list";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  const navData = (
    <>
      <div id="sidebar" className="flex items-center gap-8">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/blog"}>Blogs</NavLink>
        </li>
        {user ? (
          <>
            <li>
              <NavLink to={"/profile"}>Profile</NavLink>
            </li>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
  return (
    <div className="bg-basicColor">
      <div className="navbar max-w-7xl mx-auto">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black rounded-box"
            >
              {navData}
            </ul>
          </div>
          <div className="flex items-center gap-3">
            <a className="normal-case text-xl">
              <img className="h-12" src={img1} alt="" />
            </a>
            <p className="font-bold text-4xl text-white">REZOAN</p>
          </div>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex pe-10">
            <ul className="text-white text-lg px-4">{navData}</ul>
          </div>
          <div className="px-2 text-center">
            {
              user?<p className="truncate text-base font-bold text-white">{user?.displayName}</p>:''
            }
          </div>
          <label
            tabIndex={0}
            className="btn w-12 text-4xl btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user ? (
                <>
                  <img src={user?.photoURL} />
                </>
              ) : (
                <FcBusinessman />
              )}
            </div>
          </label>
          {user ? (
            <button
              onClick={handleLogOut}
              className="btn btn-outline border-none text-xl capitalize ms-2 text-white hover:bg-basicColor"
            >
              SignOut
            </button>
          ) : (
            <>
              <Link
                to={"/login"}
                className="btn btn-outline border-none text-lg capitalize ms-1 text-white hover:bg-basicColor"
              >
                Log In
              </Link>
              <Link
                to={"/register"}
                className="btn btn-outline border-none text-lg capitalize text-white hover:bg-basicColor"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
