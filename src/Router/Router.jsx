import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import App from "../Home";
import Home from "../Home";
import Services from "../Components/Services/Services";
import Blogs from "../Components/Blogs/Blogs";
import Contact from "../Components/Contact/Contact";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,

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
      ],
    },
  ]);