import React from "react";

import "../style.css";

import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div>
      <div className="header">
        <div className="menu-bar">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">
                <img
                  src={require("/Users/subbu/weforyou/src/images/logo.jpg")}
                  width="30%"
                />
              </Link>

              <div className="logo">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link
                      className="navlink1 "
                      to="/Work"
                      style={{ fontSize: "30px" }}
                    >
                      Our Work
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="navlink1"
                      to="/Campaign"
                      style={{ fontSize: "30px" }}
                    >
                      Our Campaigns
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="navlink1"
                      to="/Donate"
                      style={{ fontSize: "30px" }}
                    >
                      To Donate
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="navlink1"
                      to="/"
                      style={{ fontSize: "30px" }}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="navlink1"
                      to="/Donardetails"
                      style={{ fontSize: "30px" }}
                    >
                      Donar_details
                    </Link>
                  </li>
                </ul>
                
              </div>
            </div>
        
          
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
