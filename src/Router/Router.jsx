import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Home";
import Blogs from "../Components/Blogs/Blogs";
import Contact from "../Components/Contact/Contact";
import SignIn from "../Components/Auth/Login/SignIn";
import Register from "../Components/Auth/Register/Register";
import ErrorPage from "./ErrorPage";
import Profile from "../Components/Auth/UserProfile/Profile";

import Details from "../Components/Events/Details";
import PrivateRoute from "./PrivateRoute";
import About from "../Components/About/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/about",
        element: <PrivateRoute><About /></PrivateRoute>,
      },
      {
        path: "/blog",
        element: <PrivateRoute><Blogs /></PrivateRoute>,
      },
      {
        path: "/contacts",
        element: <PrivateRoute><Contact /></PrivateRoute>,
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
      {
        path: "/events/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);
