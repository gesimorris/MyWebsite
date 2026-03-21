document.addEventListener('DOMContentLoaded', () => {

    // ==================== EMAIL COPY TO CLIPBOARD ====================
    const emailLink = document.getElementById('email-link');
    if (emailLink) {
        emailLink.addEventListener('click', (e) => {
            e.preventDefault();
            navigator.clipboard.writeText('gesiray@gmail.com').then(() => {
                const originalTitle = emailLink.getAttribute('title');
                emailLink.setAttribute('title', 'Copied!');
                setTimeout(() => emailLink.setAttribute('title', originalTitle || ''), 2000);
            });
        });
    }

    // ==================== PROJECT SLIDER LOGIC ====================
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.project-slide');

    window.moveSlide = (direction) => {
        if (slides.length === 0) return;

        // 1. Remove "active" class from current slide
        slides[currentSlideIndex].classList.remove('active');

        // 2. Calculate new index (with wrap-around logic)
        currentSlideIndex += direction;

        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0; // Go back to first
        } else if (currentSlideIndex < 0) {
            currentSlideIndex = slides.length - 1; // Go to last
        }

        // 3. Add "active" class to new slide
        slides[currentSlideIndex].classList.add('active');
    };
});