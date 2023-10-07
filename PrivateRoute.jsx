import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./src/Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { users, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div>
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }
  if (users) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
