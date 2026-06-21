import { Link } from "react-router";
import logo from "../../assets/logo.png";

const Logo = () => {
  return (
    <Link className="flex items-end">
      <img src={logo} alt="" />
      <h3 className="text-3xl font-bold -ms-2 ">Ans.Shift</h3>
    </Link>
  );
};

export default Logo;
