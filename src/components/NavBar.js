import { NavLink } from "react-router-dom";
import "./NavBar.css";


function NavBar() {
  return (
    <>
    <nav>
      <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>
    </nav>
    <nav>
    <NavLink
      to="/NewCar"
      className="nav-link"
    >
      Customize Your Own Car
    </NavLink>
    </nav>
  </>
  );
};

export default NavBar;