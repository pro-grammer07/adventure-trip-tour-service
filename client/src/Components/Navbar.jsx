import React from "react";
import "../App.css";
import "../assets/tour.png";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav-bar sticky-top px-4 py-2 py-lg-0">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a href="" className="navbar-brand p-0">
            <img src="./assets/tour.png" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
              <a href="../Home/home.html" className="nav-item nav-link active">
                Home
              </a>
              <a
                href="../Destination/destination.html"
                className="nav-item nav-link"
              >
                Destination
              </a>
              <a href="../Blog/blog.html" className="nav-item nav-link">
                Blog
              </a>
              <a
                href="../Testimonials/testimonial.html"
                className="nav-item nav-link"
              >
                Testimonial
              </a>
              <a href="../About/about.html" className="nav-item nav-link">
                About
              </a>
              <a href="../Contact/contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>
            <a
              href="../Contact/contact.html"
              className="btn btn-primary rounded-pill py-2 px-4 flex-shrink-0"
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
