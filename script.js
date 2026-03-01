document.addEventListener('DOMContentLoaded', () => {
    // Enable JS-powered animations (elements are visible by default without this)
    document.documentElement.classList.add('js-loaded');

    // 1. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            const isExpanded = navLinks.style.display === 'flex';
            navLinks.style.display = isExpanded ? 'none' : 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'var(--bg-primary)';
            navLinks.style.padding = '20px 0';
            navLinks.style.borderBottom = '1px solid rgba(17,17,17,0.1)';
        });
    }

    // 2. Scroll Animations (Intersection Observer for Fade Up)
    const observerOptions = {
        threshold: 0,
        rootMargin: "0px 0px 0px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-up-element');
    animatedElements.forEach(el => observer.observe(el));

    // Immediately show any elements already in the viewport on load
    setTimeout(() => {
        animatedElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('visible');
            }
        });
    }, 50);

    // 3. Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 4. Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                if (navLinks && window.innerWidth <= 768) {
                    navLinks.style.display = 'none';
                }
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Custom Cursor Logic
    const initCursor = () => {
        // Only initialize on non-touch devices
        if (window.matchMedia("(pointer: coarse)").matches) {
            document.body.style.cursor = 'auto'; // Revert to normal if touch
            const interactives = document.querySelectorAll('a, button, .capability-item, .work-card');
            interactives.forEach(el => el.style.cursor = 'pointer');
            return;
        }

        const cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        document.body.appendChild(cursor);

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let cursorX = mouseX;
        let cursorY = mouseY;

        // Easing factor
        const easing = 0.15;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const animateCursor = () => {
            let distX = mouseX - cursorX;
            let distY = mouseY - cursorY;

            cursorX += distX * easing;
            cursorY += distY * easing;

            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
            requestAnimationFrame(animateCursor);
        };

        requestAnimationFrame(animateCursor);

        // Hover effects
        const interactiveElements = document.querySelectorAll('a, button, .capability-item, .work-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    };

    initCursor();
});
