const themeToggle = document.getElementById('themeToggle');
const navbar = document.getElementById('navbar');

const sunIcon = `<svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
</svg>`;

const moonIcon = `<svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
</svg>`;

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
}

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    setTheme(savedTheme);
} else if (prefersDark) {
    setTheme('dark');
}

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const sectionId = btn.dataset.section;
        const target = document.getElementById(sectionId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

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

// Active nav button on scroll
(function() {
    const navBtns = document.querySelectorAll('.nav-btn');
    const sections = [];
    navBtns.forEach(btn => {
        const section = document.getElementById(btn.dataset.section);
        if (section) sections.push({ btn, section });
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const match = sections.find(s => s.section === entry.target);
            if (!match) return;
            if (entry.isIntersecting) {
                match.btn.classList.add('active');
            } else {
                match.btn.classList.remove('active');
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(s => observer.observe(s.section));
})();

// GIF play-on-hover: preload GIFs, swap on mouseenter/mouseleave
(function() {
    const gifImages = document.querySelectorAll('.work-image img[data-gif]');
    if (!gifImages.length) return;

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
        const card = img.closest('.work-card');
        if (!card) return;

        card.addEventListener('mouseenter', () => {
            if (gifSrc) img.src = gifSrc;
        });

        card.addEventListener('mouseleave', () => {
            img.src = pngSrc;
        });
    });
})();
