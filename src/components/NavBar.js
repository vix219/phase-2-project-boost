import { NavLink } from "react-router-dom";



function NavBar() {
  return (
    <>
    <div className="nav-container" >
        <nav className="nav-container">
          <NavLink
            to="/Home"
            className="nav-text">
            Home
          </NavLink>
        </nav>
        <nav className="nav-container">
        <NavLink
          to="/NewCar"
          className="nav-text"
        >
          Request A Car
        </NavLink>
        </nav>
        <nav className="nav-container">
        <NavLink
          to="/CarFilters"
          className="nav-text"
        >
          Car Filter
        </NavLink>
        </nav>
    </div>
  </>
  );
};

export default NavBar;