import React from "react";

const Hero = (props) => {
  return (
    <>
       <div className="mb-5">
        <div className="">

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
    </>
  );
};

export default Hero;
