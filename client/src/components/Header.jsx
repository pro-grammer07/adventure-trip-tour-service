import React, { useEffect } from "react";
import $ from "jquery";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import "../App.css";


const Header = () => {
  useEffect(() => {
    // Ensure DOM is ready
    $(document).ready(function () {
      // Initialize Owl Carousel
      $(".header-carousel").owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        loop: true,
      });

      $(".attractions-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
          '<i class="fa fa-angle-right"></i>',
          '<i class="fa fa-angle-left"></i>',
        ],
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
          576: {
            items: 2,
          },
          768: {
            items: 2,
          },
          992: {
            items: 3,
          },
          1200: {
            items: 4,
          },
          1400: {
            items: 4,
          },
        },
      });

      $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav: true,
        navText: [
          '<i class="fa fa-angle-right"></i>',
          '<i class="fa fa-angle-left"></i>',
        ],
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
          576: {
            items: 1,
          },
          768: {
            items: 1,
          },
          992: {
            items: 1,
          },
          1200: {
            items: 1,
          },
        },
      });
    });
  }, []);


  return (
    <div>
      <div className="container-fluid nav-bar sticky-top px-4 py-2 py-lg-0">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a href="#" className="navbar-brand p-0">
            <img
              src="img/Adventure-tour-and-travels-Logo-white-1024x212.png"
              alt="Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars" />
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
              className="btn btn-primary rounded-pill py-2 px-4 flex-shrink-0 top"
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>

      {/* HERO SECTION  */}
   
    </div>
  );
};

export default Header;
