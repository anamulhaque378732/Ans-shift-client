import { Navigate } from "react-router";
import useAuth from "../Hooks/UseAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="text-center text-2xl my-auto mx-auto">
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="login"></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
