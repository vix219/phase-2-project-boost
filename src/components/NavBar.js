import { NavLink } from "react-router-dom";




function NavBar() {
  return (
    <>
      <div className="nav-container">
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
      Request Car
    </NavLink>
    </nav>
    <nav>
        <NavLink to="/carfilters" className="nav-link"> 
          Car Filters
        </NavLink>
    </nav>
    </div>
  </>
  );
};

export default NavBar;