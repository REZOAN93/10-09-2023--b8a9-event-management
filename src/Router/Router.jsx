import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import App from "../App";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <App />,

        },
      ],
    },
  ]);