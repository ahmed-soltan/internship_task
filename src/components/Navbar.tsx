import { NavLink } from "react-router-dom";
import Logo from "../assets/task-management-high-resolution-logo.png";
import NavLinks from "./NavLinks";
import Sidebar from "./Sidebar";
const Navbar = () => {
  return (
    <div className="py-3 px-5 w-full shadow-md flex items-center justify-between">
      <NavLink to={"/"} className="w-[150px] h-[50px]">
        <img src={Logo} alt="logo" loading="lazy" className="w-full h-full" />
      </NavLink>
      <div className="hidden md:block">
        <NavLinks />
      </div>
      <div className="md:hidden block">
        <Sidebar/>
      </div>
    </div>
  );
};

export default Navbar;
