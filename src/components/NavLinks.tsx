import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <div className="flex items-start md:items-center gap-5 flex-col md:flex-row">
      <NavLink to={"/tasks"} className="text-slate-800 font-medium">
        Tasks
      </NavLink>
      <NavLink to={"/about"} className="text-slate-800 font-medium">
        About
      </NavLink>
      <NavLink to={"/contact"} className="text-slate-800 font-medium">
        Contact
      </NavLink>
    </div>
  );
};

export default NavLinks;
