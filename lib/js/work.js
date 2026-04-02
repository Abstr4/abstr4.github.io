// Work Page JS - Project cards interactions

// Carousel functionality (if carousel exists)
const carousel = document.querySelector('.work-grid');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

if (carousel && prevBtn && nextBtn) {
    const cardWidth = () => {
        const firstCard = carousel.querySelector('.work-card');
        if (firstCard) {
            const style = getComputedStyle(carousel);
            const gap = parseInt(style.gap) || 0;
            return firstCard.offsetWidth + gap;
        }
        return 300;
    };

    const updateButtons = () => {
        prevBtn.disabled = carousel.scrollLeft <= 0;
        nextBtn.disabled = carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 1;
    };

    const getScrollAmount = () => {
        const isMobile = window.innerWidth < 768;
        const multiplier = isMobile ? 1 : 2;
        return cardWidth() * multiplier;
    };

    prevBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
        carousel.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });

    carousel.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', updateButtons);
    updateButtons();

    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
        carousel.style.cursor = 'grabbing';
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 1.5;
        carousel.scrollLeft = scrollLeft - walk;
    });

    carousel.style.cursor = 'grab';
}

// GIF play-on-hover: preload GIFs, swap on mouseenter/mouseleave
(function() {
    const gifImages = document.querySelectorAll('.project-image img[data-gif], .work-image img[data-gif]');
    if (!gifImages.length) return;

    // Preload all GIFs
    gifImages.forEach(img => {
        const gifSrc = img.getAttribute('data-gif');
        if (gifSrc) {
            const preload = new Image();
            preload.src = gifSrc;
        }
    });

    gifImages.forEach(img => {
        const pngSrc = img.src;
        const gifSrc = img.getAttribute('data-gif');
        const card = img.closest('.project-card') || img.closest('.work-card');
        if (!card) return;

        card.addEventListener('mouseenter', () => {
            if (gifSrc) img.src = gifSrc;
        });

        card.addEventListener('mouseleave', () => {
            img.src = pngSrc;
        });
    });
})();
