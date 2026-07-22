import React from "react";
import useAuth from "../Hooks/UseAuth";
import UseRole from "../Hooks/UseRole";
import Loading from "../Components/Loading/Loading";
import Forbidden from "../Components/Forbidden/Forbidden";

const RaidersRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const { role, roleLoading } = UseRole();

  if (loading || !user || roleLoading) {
    return <Loading></Loading>;
  }

  if (role !== "raider") {
    return <Forbidden></Forbidden>;
  }

  return children;
};

export default RaidersRoute;
