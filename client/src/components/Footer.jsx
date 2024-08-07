import React from "react";

const Footer = () => {
  return (
    <div
      className="container-fluid footer py-4 wow fadeIn"
      data-wow-delay="0.2s"
    >
      <div className="container py-4">
        <div className="row g-5">
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="footer-item">
              <a href="home.html" className="p-0">
                <img
                  src="img/Adventure-tour-and-travels-Logo-white-1024x212.png"
                  className="pb-3"
                  width="70%"
                  alt="Logo"
                />
              </a>
              <div className="d-flex align-items-center">
                <i className="fas fa-map-marker-alt text-primary me-3 mb-3" />
                <p className="text-white mb-2 mt-4">
                  Gulistan Colony near SE college, <br />
                  Bahawalpur, Pakistan
                </p>
              </div>
              <div className="d-flex align-items-center">
                <i className="fas fa-envelope text-primary me-3 mb-2" />
                <p className="text-white mb-2">shaziakhan0100@gmail.com</p>
              </div>
              <div className="d-flex align-items-center">
                <i className="fa fa-phone-alt text-primary me-3 mb-2" />
                <p className="text-white mb-2">(+92) 302-7809400</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="footer-item">
              <br />
              <h4 className="text-white mb-3">Quick Links</h4>
              <a href="#">
                <i className="fas fa-angle-right me-2" />
                Home
              </a>
              <a href="#">
                <i className="fas fa-angle-right me-2" />
                Destination
              </a>
              <a href="#">
                <i className="fas fa-angle-right me-2" />
                Blog
              </a>
              <a href="#">
                <i className="fas fa-angle-right me-2" />
                Testimonial
              </a>
              <a href="#">
                <i className="fas fa-angle-right me-2" />
                About
              </a>
              <a href="#">
                <i className="fas fa-angle-right me-2" />
                Contact
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-4">
            <div className="footer-item">
              <br />
              <h4 className="text-white mb-4">Connect with Us</h4>
              <div className="social-media mb-2 pb-2">
                <a href="#" target="_blank">
                  <i
                    className="fab fa-facebook-f text-primary me-3"
                    style={{ fontSize: 24 }}
                  />
                </a>
                <a href="#" target="_blank">
                  <i
                    className="fab fa-instagram text-primary mx-3"
                    style={{ fontSize: 24 }}
                  />
                </a>
                <a href="#" target="_blank">
                  <i
                    className="fab fa-linkedin-in text-primary mx-3"
                    style={{ fontSize: 24 }}
                  />
                </a>
                <a href="#" target="_blank">
                  <i
                    className="fab fa-youtube text-primary mx-3"
                    style={{ fontSize: 24 }}
                  />
                </a>
              </div>
              <br />
              <div>
                <p className="text-white mb-3">Payment Accepted</p>
                <img src="img/payment.png" className="img-fluid" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
