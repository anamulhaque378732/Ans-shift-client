 
import useAuth from "../Hooks/useAuth";
import Loading from "../Components/Loading/Loading";
import UseRole from "../Hooks/UseRole";
import Forbidden from "../Components/Forbidden/Forbidden";

const AdminRoute = ({children}) => {
  const {loading } = useAuth();
  const { role, roleLoading } = UseRole();

  if (loading || roleLoading) {
    return <Loading></Loading>;
  }

  if (role !== "admin") {
    return <Forbidden></Forbidden>;
  }

  return  children;
};

export default AdminRoute;
