import { NavLink } from "react-router-dom";
import img1 from "../../../assets/logo.png";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import "./Header.css";

const Header = () => {
  const navData = (
    <>
      <div id="sidebar" className="flex items-center gap-4">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/services"}>Services</NavLink>
        </li>
        <li>
          <NavLink to={"/blogs"}>Blogs</NavLink>
        </li>
        <li>
          <NavLink to={"/contacts"}>Contact</NavLink>
        </li>
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
          <a className="normal-case text-xl">
            <img className="h-12" src={img1} alt="" />
          </a>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex pe-10">
            <ul className="text-white text-lg px-1">
              {navData}
            </ul>
          </div>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </label>
          <a className="btn btn-outline border-none text-xl capitalize ms-2 text-white hover:bg-basicColor">
            Sign In
          </a>
          <button className=" text-3xl text-white me-3">
            <FcGoogle />
          </button>
          <button className=" text-3xl text-black">
            <BsGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
