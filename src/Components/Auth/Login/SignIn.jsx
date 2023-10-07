import { Link, useNavigate } from "react-router-dom";
import "./Signin.css";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const SignIn = () => {
  const { signInWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleLogInUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    signInWithEmail(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        if (user) {
          navigate("/");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  return (
    <div className="card shadow-2xl bg-base-100 my-10 w-4/12 mx-auto px-10 py-10">
      <h1 className="font-bold text-3xl text-center">Log In</h1>
      <form onSubmit={handleLogInUser} className=" space-y-3">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <p>
              <input type="checkbox" name="remember me" id="" />
              <span className="ms-3">Remember Me</span>
            </p>
          </label>
        </div>
        <div className="form-control mt-2">
          {error ? (
            <>
              <p className=" text-red-600 text-sm text-center">{error}</p>
            </>
          ) : (
            ""
          )}
          <button className="btn capitalize bg-basicColor hover:bg-green-900 text-xl text-white">
            Login
          </button>
          <a
            href="#"
            className="label-text-alt link link-hover mt-2 pe-3 text-end underline-offset-4"
          >
            Forgot password?
          </a>
        </div>
      </form>
      <div className=" flex items-center gap-4 mb-2 px-10">
        <hr className="w-6/12" />
        <span className=" font-bold text-basicColor">Or</span>
        <hr className="w-6/12" />
      </div>
      <div className="px-10  items-center mb-5">
        <p className="font-bold text-basicColor text-center">Continue with</p>
        <div className="flex gap-5 justify-center">
          <button className="btn btn-sm capitalize text-base text-white bg-basicColor hover:bg-green-900">
            {" "}
            <span>
              <BsGoogle />
            </span>{" "}
            Google
          </button>
          <button className="btn btn-sm capitalize text-base text-white bg-basicColor hover:bg-green-900">
            {" "}
            <span>
              <BsGithub />
            </span>{" "}
            GitHub
          </button>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to={"/register"}>
          Don't have an Account?
          <span className="font-bold text-basicColor ms-2">Register</span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
