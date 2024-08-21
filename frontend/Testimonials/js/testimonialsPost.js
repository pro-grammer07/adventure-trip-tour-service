async function getTestimonials() {
    try {
        const response = await fetch("http://localhost:8800/getTestimonials");
        const testimonialRes = await response.json();
  
        const testimonials = testimonialRes.data;

        console.log(testimonials);
        const testimonialsContainer = document.querySelector(".testimonials-boxes");
        testimonialsContainer.innerHTML = ""; // Clear any existing content
  
        testimonials.forEach((testimonial) => {
            const testimonialBox = document.createElement("div");
            testimonialBox.classList.add("testimonial-box", "wow", "fadeInUp", "w-full");

            testimonialBox.innerHTML = `
                <p>
                    <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                    "${testimonial.review}"
                    <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="${testimonial.image}" class="testimonial-img" alt="${testimonial.name}">
                <h3>${testimonial.name}</h3>
                <h4>${testimonial.profession}</h4>
            `;

            testimonialsContainer.appendChild(testimonialBox);
        });

        // Initialize WOW.js after content load
        new WOW().init();

    } catch (error) {
        console.error("Error fetching testimonials:", error);
    }
}

document.addEventListener("DOMContentLoaded", getTestimonials);
