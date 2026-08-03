import Loading from "../../../Components/Loading/Loading";
import UseRole from "../../../Hooks/UseRole";
import AdminDashboard from "./AdminDashboard";
import RaiderDashboard from "./RaiderDashboard";
import UserDashboard from "./UserDashboard";

const DashboardHome = () => {
  const { role, roleLoading } = UseRole();
  if (roleLoading) {
    return <Loading></Loading>;
  }

  if (role === "admin") {
    return <AdminDashboard></AdminDashboard>;
  } else if (role === "raider") {
    return <RaiderDashboard />;
  } else {
    return <UserDashboard />;
  }
};

export default DashboardHome;
