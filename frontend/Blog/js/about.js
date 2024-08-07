document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.custom-slide-up, .custom-slide-up-text');

    function checkPosition() {
        const windowHeight = window.innerHeight;
        elements.forEach(el => {
            const positionFromTop = el.getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= 0) {
                el.classList.add('active');
            }
        });
    }

    checkPosition(); // Initial check
    window.addEventListener('scroll', checkPosition); // Check on scroll
});
