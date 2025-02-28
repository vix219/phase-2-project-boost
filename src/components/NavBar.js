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
      Customize Your Own Car
    </NavLink>
    </nav>
    </div>
  </>
  );
};

export default NavBar;