
/**
 * Chikyu-matope Caravan 2026
 * Pure Vanilla JS Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 2. Intersection Observer for Scroll Reveal Animations
    const setupRevealAnimations = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            revealObserver.observe(el);
        });
    };

    // 3. Navigation Scroll Effect
    const setupNavScroll = () => {
        const nav = document.getElementById('main-nav');
        if (!nav) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                nav.classList.add('bg-white/95', 'py-3', 'shadow-2xl', 'shadow-forest/5');
                nav.classList.remove('bg-white/70', 'py-4');
            } else {
                nav.classList.add('bg-white/70', 'py-4');
                nav.classList.remove('bg-white/95', 'py-3', 'shadow-2xl', 'shadow-forest/5');
            }
        });
    };

    // 4. Smooth Scroll for Anchor Links
    const setupSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    };

    // 5. Hero Parallax Effect
    const setupHeroParallax = () => {
        const heroVideo = document.querySelector('header video');
        if (!heroVideo) return;

        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            if (scrollPos < window.innerHeight) {
                heroVideo.style.transform = `scale(1.05) translateY(${scrollPos * 0.3}px)`;
            }
        });
    };

    // Run Initializers
    setupRevealAnimations();
    setupNavScroll();
    setupSmoothScroll();
    setupHeroParallax();

    console.log('Chikyu-matope Caravan 2026 Engine Running (Vanilla JS Mode)');
});
