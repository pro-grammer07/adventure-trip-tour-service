async function getTestimonials() {
    try {
      const response = await fetch("http://localhost:8800/getTestimonials");
      const testimonialRes = await response.json();
  
      const testimonials = testimonialRes.data;

      console.log(testimonials);
      const testimonialCarouselInner = document.querySelector("#testimonialCarousel .carousel-inner");
      testimonialCarouselInner.innerHTML = ""; // Clear any existing content
  
      testimonials.forEach((testimonial, index) => {
        const testimonialItem = document.createElement("div");
        testimonialItem.classList.add("carousel-item");
        if (index === 0) testimonialItem.classList.add("active"); // Set the first item as active
  
        testimonialItem.innerHTML = `
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="testimonial-box">
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  "${testimonial.review}"
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="${testimonial.image}" class="testimonial-img" alt="${testimonial.name}">
                <h3>${testimonial.name}</h3>
                <h4>${testimonial.profession}</h4>
              </div>
            </div>
          </div>
        `;
  
        testimonialCarouselInner.appendChild(testimonialItem);
      });
    } catch (error) {
      console.error(error);
    }
  }
  
  document.addEventListener("DOMContentLoaded", getTestimonials);
  