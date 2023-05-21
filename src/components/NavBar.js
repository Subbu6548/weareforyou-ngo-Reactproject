import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            We Are For YOU
            <i className="fas fa-code"></i>
           
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/Work"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
              Works
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Campaign"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
               Campaigns
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Donarpost"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Donor
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Donorget"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Donor details
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Volunteerpost"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Volunteer
              </NavLink>
              </li>
              <li className="nav-item">
              <NavLink
                exact
                to="/Volunteerget"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Volunteer details
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Projectpost"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/Projectget"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Project Details
              </NavLink>
            </li>



          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
