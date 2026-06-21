import { Outlet } from "react-router";
import Logo from "../Components/Logo/Logo";

import authImage from "../assets/authImage.png";
const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <Logo></Logo>
      <div className="flex items-center w-4/5   h-full gap-2 flex-col lg:flex-row-reverse   mx-auto md:gap-4">
        <div className="flex-1 mt-4    ">
          <img src={authImage} className="" alt="Auth image" />
        </div>
        <div className="flex-1 ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
