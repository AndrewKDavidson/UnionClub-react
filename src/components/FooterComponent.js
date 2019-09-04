import React from "react";
import { Link } from "react-router-dom";

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
          <ul className="d-flex d-inline justify-content-center flex-wrap justify-content-sm-between  align-items-center list-unstyled">
            <li className="nav-item">
              <a href="#">Home</a>
            </li>
            <li className="nav-item">
              <a href="about.html">About</a>
            </li>
            <li className="nav-item right-space">
              <a href="pricing.html">Pricing</a>
            </li>
            <li className="nav-item left-space">
              <a href="rentals.html">Rentals</a>
            </li>
            <li className="nav-item">
              <a href="media.html">Gallery</a>
            </li>
            <li className="nav-item">
              <a href="blog.html">Blog</a>
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
