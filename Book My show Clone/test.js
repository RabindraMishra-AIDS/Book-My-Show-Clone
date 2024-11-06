let currentSlide = 0; // Index of the currently visible image
const slides = document.querySelectorAll('.ad .slide'); // Select all images

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first image
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Loop to the last image
    showSlide(currentSlide);
}

// Initially show the first slide
showSlide(currentSlide);