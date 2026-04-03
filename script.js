document.addEventListener('DOMContentLoaded', () => {

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

    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.project-slide');

    window.moveSlide = (direction) => {
        if (slides.length === 0) return;

        slides[currentSlideIndex].classList.remove('active');

        currentSlideIndex += direction;

        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        } else if (currentSlideIndex < 0) {
            currentSlideIndex = slides.length - 1;
        }

        slides[currentSlideIndex].classList.add('active');
    };
});