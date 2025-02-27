import { NavLink } from "react-router-dom";
import "./NavBar.css";


function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>
    </nav>
  );
};

export default NavBar;