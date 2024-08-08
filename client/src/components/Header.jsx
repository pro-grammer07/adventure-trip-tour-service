import React from "react";

const Header = () => {
  return (
    <div>
      <div className="container-fluid nav-bar sticky-top px-4 py-2 py-lg-0">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a href className="navbar-brand p-0">
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
      <div className="header-carousel owl-carousel mb-5">
        <div className="header-carousel-item">
          <img
            src="img/pexels-aakashraf-1619792.jpg"
            class="img-fluid w-100"
            alt="Image"
          />
          <video
            className="img-fluid w-100 video-zoom"
            width="100%"
            height="100%"
            autoPlay
            muted
            loop
          >
            <source src="img/9974249-hd_1920_1080_30fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <div className="container align-items-center py-4">
              <div className="row g-5 align-items-center">
                <div
                  className="col-xl-12 fadeInLeft animated"
                  data-animation="fadeInLeft"
                  data-delay="1s"
                  data-wow-delay="0.9s"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="text-center">
                    <h4
                      className="text-uppercase fw-bold mb-4"
                      style={{
                        color: "#0cf098",
                        textShadow: "1px 1px 3px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      Welcome To Adventure
                    </h4>
                    <h1 className="display-4 text-uppercase text-white mb-4">
                      Trip &amp; Tour Services
                    </h1>
                    <p className="mb-4 fs-5">
                      Promoting Lovely Nature: Culture Ethics and Colors of Life
                      in Pakistan.
                    </p>
                    <div className="d-flex justify-content-center">
                      <a
                        className="btn btn-primary rounded-pill text-white py-3 px-3"
                        href="#"
                      >
                        Unleash the Adventure
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
