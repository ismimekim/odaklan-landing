/* ========================================
   odaklan.co — JavaScript
   Micro-animations and Interactivity
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all components
    initFAQ();
    initScrollAnimations();
    initSmoothScroll();
    initNavbarScroll();
    initMagneticButtons();
    initScrollGlow();
});

/* ===== FAQ Accordion ===== */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

/* ===== Scroll Animations ===== */
function initScrollAnimations() {
    // Elements to animate
    const animateElements = [
        '.problem-card',
        '.step',
        '.feature-card',
        '.proof-card',
        '.proof-stat',
        '.pricing-card',
        '.faq-item'
    ];

    // Add animation class to elements
    animateElements.forEach(selector => {
        document.querySelectorAll(selector).forEach((el, index) => {
            el.classList.add('animate-on-scroll');
            el.style.transitionDelay = `${index * 0.1}s`;
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

/* ===== Smooth Scroll ===== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ===== Navbar Scroll Effect ===== */
function initNavbarScroll() {
    const nav = document.querySelector('.nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            nav.style.background = 'rgba(10, 15, 26, 0.9)';
            nav.style.backdropFilter = 'blur(20px)';
            nav.style.padding = '12px 0';
        } else {
            nav.style.background = 'transparent';
            nav.style.backdropFilter = 'none';
            nav.style.padding = '20px 0';
        }

        lastScroll = currentScroll;
    });
}

/* ===== Counter Animation ===== */
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.ceil(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

/* ===== Parallax Effect for Hero ===== */
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.querySelector('.hero-bg');

    if (heroBg && scrolled < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

/* ===== Mobile Menu (if needed later) ===== */
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
}

/* ===== Button Ripple Effect ===== */
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size / 2 + 'px';
        ripple.style.top = e.clientY - rect.top - size / 2 + 'px';

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

/* ===== Typing Effect (for hero title if needed) ===== */
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

/* ===== Magnetic Button Effect ===== */
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-primary');

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', e => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            // Subtle magnetic pull (10% of cursor offset)
            btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.02)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });

        // Squishy press effect
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.95)';
            btn.style.transition = 'transform 0.1s cubic-bezier(0.34, 1.56, 0.64, 1)';
        });

        btn.addEventListener('mouseup', () => {
            btn.style.transform = 'scale(1.02)';
            btn.style.transition = 'transform 0.3s ease';
        });
    });
}

/* ===== Scroll-Triggered Glow for Bento Tiles ===== */
function initScrollGlow() {
    const stepCards = document.querySelectorAll('.step-card');

    const glowObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.boxShadow = `
                    inset 0 1px 0 rgba(255, 255, 255, 0.15),
                    0 0 30px rgba(30, 140, 255, 0.15),
                    0 8px 32px rgba(0, 0, 0, 0.25)
                `;
            } else {
                entry.target.style.boxShadow = '';
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: '-10% 0px'
    });

    stepCards.forEach(card => glowObserver.observe(card));
}
