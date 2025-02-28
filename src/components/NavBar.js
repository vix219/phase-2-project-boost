import { NavLink } from "react-router-dom";



function NavBar() {
  return (
    <>
    <nav className="nav-container">
      <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>
    </nav>
    <nav className="nav-container">
    <NavLink
      to="/NewCar"
      className="nav-link"
    >
      Customize Your Own Car
    </NavLink>
    </nav>
    <nav className="nav-container">
    <NavLink
      to="/CarFilters"
      className="nav-link"
    >
      Car Filter
    </NavLink>
    </nav>
  </>
  );
};

export default NavBar;