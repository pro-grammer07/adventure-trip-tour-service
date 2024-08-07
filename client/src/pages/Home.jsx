import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <div className="container-fluid about pb-5">
          <div className="container pb-5">
            <div className="row g-5">
              <div
                className="col-xl-5 d-flex align-items-center wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <div>
                  <h4 className="text-primary">About Our Company</h4>
                  <h1 className="display-5 mb-4">
                    Adventure Trip &amp; Tour Services
                  </h1>
                  <p className="mb-4" style={{ textAlign: "justify" }}>
                    Adventure Trip &amp; Tour Services showcases the
                    breathtaking beauty, vibrant culture, and rich heritage of
                    Pakistan. Welcoming both national and international
                    tourists, we pride ourselves on offering exceptional
                    services and unforgettable experiences. Our engaging and
                    lively activities are designed to captivate and inspire. We
                    organize domestic and international tours for educational
                    institutions, corporate teams, teachers, students,
                    university groups, and individual travelers, ensuring each
                    journey is filled with fun, discovery, and adventure.
                  </p>
                </div>
              </div>
              <div
                className="col-xl-7 d-flex align-items-center wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="image-grid">
                  <div className="column">
                    <a href="../About/about.html">
                      <img
                        src="img/pexels-shaheer-amaid-377139222-14822617.jpg"
                        alt="Adventure Tour"
                        className="large"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="img/pexels-syed-hasan-mehdi-270838-815880.jpg"
                        alt="Team Building"
                        className="small"
                      />
                    </a>
                  </div>
                  <div className="column">
                    <a href="#">
                      <img
                        src="img/pexels-ashiq-ali-11436188-6182219.jpg"
                        alt="Adventure Tour"
                        className="small"
                      />
                    </a>
                    <a href="#" style={{ marginTop: 10 }}>
                      <img
                        src="img/pexels-marina-zvada-844583049-25358203.jpg"
                        alt="Cultural Tours"
                        className="large"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Blog Start */}
        <div
          className="text-center mx-auto wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: 800, maxHeight: 130 }}
        >
          <h4 className="text-primary mt-5">Our Destinations</h4>
          <h1 className="display-5 mb-4">Latest Destinations</h1>
          <p className="mb-0">
            Explore the diverse landscapes and unique experiences offered by
            Adventure Trip &amp; Tour Services. From the majestic peaks of the
            Karakoram to the serene beauty of the northern valleys, our tours
            encompass Pakistan's most captivating destinations.{" "}
          </p>
        </div>
        <div style={{ padding: "0px 70px" }}>
          <section className="git">
            <div className="carousel">
              <div className="carousel__track" id="carousel-track">
                <div className="carousel__item carousel__item--left">
                  <img
                    src="https://images.pexels.com/photos/11416097/pexels-photo-11416097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="lahore"
                  />
                  <span>
                    <i className="far fa-heart favorite-btn" />
                  </span>
                  <div className="carousel__text">
                    <h3 style={{ color: "#fff" }}>Lahore</h3>
                    <p>3 Days and 2 Nights</p>
                  </div>
                </div>
              </div>
              <div className="carousel__track">
                <div className="carousel__item carousel__item--main">
                  <img
                    src="https://thumbs.dreamstime.com/b/scenic-view-blue-water-kalam-valley-place-situated-swat-kpk-pak-known-its-natural-beauty-232786172.jpg"
                    alt="Hunza"
                  />
                  <span>
                    <i className="far fa-heart favorite-btn" />
                  </span>
                  <div className="carousel__text">
                    <h3 style={{ color: "#fff" }}>Hunza</h3>
                    <p>5 Days and 4 Nights</p>
                  </div>
                </div>
              </div>
              <div className="carousel__track">
                <div className="carousel__item ">
                  <img
                    src="https://images.pexels.com/photos/8729100/pexels-photo-8729100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Thatta"
                  />
                  <span>
                    <i className="far fa-heart favorite-btn" />
                  </span>
                  <div className="carousel__text">
                    <h3 style={{ color: "#fff" }}>Thatta</h3>
                    <p>3 Days and 2 Nights</p>
                  </div>
                </div>
              </div>
              <div className="carousel__track" id="carousel-track">
                <div className="carousel__item carousel__item--most-righ">
                  <img
                    src="https://i.pinimg.com/736x/4a/00/5c/4a005cd7ecad64fafcbc9b18a2b39575.jpg"
                    alt="skardu"
                  />
                  <span>
                    <i className="far fa-heart favorite-btn" />
                  </span>
                  <div className="carousel__text">
                    <h3 style={{ color: "#fff" }}>Skardu</h3>
                    <p>6 Days and 5 Nights</p>
                  </div>
                </div>
              </div>
              <div className="carousel__track">
                <div className="carousel__item ">
                  <img
                    src="https://i.pinimg.com/736x/1b/4d/b3/1b4db3ace2a77aa8c9a53ecab9db1c48.jpg"
                    alt="murree"
                  />
                  <span>
                    <i className="far fa-heart favorite-btn" />
                  </span>
                  <div className="carousel__text">
                    <h3 style={{ color: "#fff" }}>Murree</h3>
                    <p>3 Days and 2 Nights</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/*Why Choose Us*/}
        <div className="container-fluid about pb-5">
          <div className="container pb-5">
            <div className="row g-5 overall">
              {/* About Section */}
              <div
                className="col-xl-6 d-flex align-items-center wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div>
                  <h4 className="text-primary">Why Book With Us</h4>
                  <h1 className="display-5 mb-4">
                    The Ultimate Travel Experience Awaits
                  </h1>
                  <p
                    className="mb-5 text-justify"
                    style={{ textAlign: "justify", marginRight: 25 }}
                  >
                    Booking with us means choosing an exceptional travel
                    experience tailored to your interests. We offer expert
                    guides, and premium accommodations, ensuring seamless travel
                    and memorable adventures. Our commitment to quality
                    guarantees that every aspect of your journey will exceed
                    expectations. Discover why we’re the top choice for
                    travelers seeking both excitement and excellence. From
                    breathtaking landscapes to immersive cultural encounters, we
                    curate each itinerary with precision and care. Embark on a
                    journey with us and create memories that will last a
                    lifetime.
                  </p>
                </div>
              </div>
              {/* Gallery Section */}
              <div
                className="col-xl-6 d-flex align-items-center wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <div className="gallery" style={{ marginLeft: 20 }}>
                  <div className="image-container">
                    <img src="img/5.png" alt="first-img" className="flip" />
                    <span className="icon">
                      <i className="fas fa-users fa-3x mb-4 initial" />
                    </span>
                    <span className="hover-text">
                      <i className="fas fa-users fa-3x mb-4" />
                      <h2 className="text-white mb-3">4k+ Customers</h2>
                      <p>
                        Join a growing community of satisfied travelers who have
                        experienced our top-notch service and unforgettable
                        tours.
                      </p>
                    </span>
                  </div>
                  <div className="image-container">
                    <img src="img/6.png" alt="first-img" className="flip" />
                    <span className="icon">
                      <i className="fas fa-hand-holding-usd fa-3x mb-4 initial" />
                    </span>
                    <span className="hover-text">
                      <i className="fas fa-hand-holding-usd fa-3x mb-4" />
                      <h2 className="text-white mb-3">Secure Payment</h2>
                      <p>
                        Enjoy peace of mind with our secure payment system, and
                        protect your financial information with smooth
                        transactions.
                      </p>
                    </span>
                  </div>
                  <div className="image-container">
                    <img src="img/8.png" alt="first-img" className="flip" />
                    <span className="icon">
                      <i className="fas fa-glass-cheers fa-3x mb-4 initial" />
                    </span>
                    <span className="hover-text">
                      <i className="fas fa-glass-cheers fa-3x mb-4" />
                      <h2 className="text-white mb-3">Hospitality</h2>
                      <p>
                        Experience exceptional hospitality that makes you feel
                        welcomed and valued throughout your journey with us.
                      </p>
                    </span>
                  </div>
                  <div className="image-container">
                    <img src="img/7.png" alt="first-img" className="flip" />
                    <span className="icon">
                      <i className="fas fa-home fa-3x mb-4 initial" />
                    </span>
                    <span className="hover-text">
                      <i className="fas fa-home fa-3x mb-4" />
                      <h2 className="text-white mb-3">Homely Atmosphere</h2>
                      <p>
                        Relax in an atmosphere where comfort and care are
                        prioritized, making you feel right at home.
                      </p>
                    </span>
                  </div>
                </div>
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        {/* WHY CHOOSE US end */}
        {/* ======= Testimonials Section ======= */}
        <section id="testimonials" className="testimonials">
          <div className="container">
            <div className="section-title mb-5">
              <div
                className="text-center mx-auto wow fadeInUp"
                data-wow-delay="0.2s"
                style={{ maxWidth: 800, maxHeight: 130 }}
              >
                <h4 className="text-primary mt-5">Testimonial</h4>
                <h1 className="display-5 mb-4">What Our Customers Say!</h1>
                <p className="mb-4">
                  Explore the diverse landscapes and unique experiences offered
                  by Adventure Trip &amp; Tour Services. From the majestic peaks
                  of the Karakoram to the serene beauty of the northern valleys,
                  our tours encompass Pakistan's most captivating destinations.{" "}
                </p>
              </div>
            </div>
            <div
              className="testimonials-boxes wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="testimonial-box">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  "Our trip to Hunza Valley was beyond amazing. The breathtaking
                  landscapes, serene atmosphere, and friendly locals made it an
                  unforgettable experience. The tour was well-organized and our
                  guide was incredibly knowledgeable."
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
                <img
                  src="img/team-1.jpg"
                  className="testimonial-img"
                  alt="Hunza"
                />
                <h3>James Smith</h3>
                <h4>Photographer</h4>
              </div>
              <div className="testimonial-box">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  "Visiting Skardu was a dream come true. The majestic
                  mountains, clear lakes, and warm hospitality were beyond our
                  expectations. The itinerary was perfectly balanced between
                  adventure and relaxation. Highly recommended!"
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
                <img
                  src="img/team-2.jpg"
                  className="testimonial-img"
                  alt="Skardu"
                />
                <h3>Emily Johnson</h3>
                <h4>Travel Blogger</h4>
              </div>
              <div className="testimonial-box">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left" />
                  "The tour to Naran Kaghan was incredible. The lush greenery,
                  sparkling rivers, and the cool, fresh air were rejuvenating.
                  Our guide made sure we explored the best spots and shared
                  fascinating stories about the area."
                  <i className="bx bxs-quote-alt-right quote-icon-right" />
                </p>
                <img
                  src="img/team-3.jpg"
                  className="testimonial-img"
                  alt="Naran Kaghan"
                />
                <h3>Michael Brown</h3>
                <h4>Adventurer</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
