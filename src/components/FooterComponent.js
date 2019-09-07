import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="col-12 footer-social">
        <div className="text-center d-flex justify-content-center">
          <div className="social-item mr-5">
            <a
              className="btn text-center"
              href="http://www.facebook.com/profile.php?id="
            >
              <i className="fa fa-facebook-square"></i>
              <span className="d-none d-lg-inline">Facebook</span>
            </a>
          </div>
          <div className="social-item">
            <a className="btn text-center" href="http://twitter.com/">
              <i className="fa fa-twitter"></i>
              <span className="d-none d-lg-inline">Twitter</span>
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 footer-links d-flex justify-content-center position-absolute">
          <ul className="d-flex d-inline justify-content-center flex-wrap justify-content-sm-between align-items-center list-unstyled">
            <li className="nav-item">
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="nav-item right-space">
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li className="nav-item left-space">
              <NavLink to="/Rentals">Rentals</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Gallery">Gallery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Blog">Blog</NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-logo mx-auto">
          <a href="index.html">
            <img
              className="mx-auto"
              src="/images/Union-Club-White-Cropped-for-Footer.png"
              alt="Union Club Tacoma Logo"
            />
          </a>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-auto copyright">
          <p>© Copyright 2019 Union Club tacoma</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
