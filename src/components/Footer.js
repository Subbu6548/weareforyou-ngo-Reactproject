import React from "react";

import "../style.css";
const Footer = () => {
  return (
    <div>
      <div className="footers">
        <ul className="lii">
          <li>about</li>

          <li>about</li>
          <li>about</li>
        </ul>
      </div>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>About Us</h4>
              <ul className="list-unstyled">
                <li>About We Are For You</li>
                <li>Impact</li>
                <li>Reach&Presence</li>
              </ul>
            </div>
            <div className="col">
              <h4>Our Work</h4>
              <ul className="list-unstyled">
                <li>Disastar Response</li>
                <li>Health</li>
                <li>Education</li>
              </ul>
            </div>
            <div className="col">
              <h4>Our Campaingns</h4>
              <ul className="list-unstyled">
                <li>Padhayi Pe dyan</li>
                <li>Sarv shiksha Abhiyan</li>
                <li>She Can Fly</li>
              </ul>
            </div>
            <div className="col">
              <h4>Get Involved</h4>
              <ul className="list-unstyled">
                <li>Individual Support</li>
                <li>Voulunteer</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
        </div>
        <hr></hr>
        <center>
          <div className="row">
            <p className="col-sm">
              We Are For You Foundation 161 B/4, 3rd Floor, Gulmohar House,Sarai
              Community Centre Puducherry - 605014 Puducherry, India
            </p>
            <div>
              Contact Us: Tel: +91-9398488280 | E-mail:
              info@WeAreForYoufoundationindia.org
            </div>
            <div>
              &copy;|We Are For You|All Rights Reserved|Terms of Service|Privacy
              Policy
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default Footer;
