import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Home";
import Services from "../Components/Services/Services";
import Blogs from "../Components/Blogs/Blogs";
import Contact from "../Components/Contact/Contact";
import SignIn from "../Components/Auth/Login/SignIn";
import Register from "../Components/Auth/Register/Register";
import ErrorPage from "./ErrorPage";
import Profile from "../Components/Auth/UserProfile/Profile";
import PrivateRoute from "../../PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader:()=>fetch('/data.json')
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
