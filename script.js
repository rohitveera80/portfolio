document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide Icons
    lucide.createIcons();
    gsap.registerPlugin(ScrollTrigger);

    // Smooth scrolling for nav links & active state update
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('header .nav-link');
    
    const activateNavLink = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', activateNavLink);
    activateNavLink();

    // Hero Background Text Scroll Effect
    gsap.to(".hero-background-text", {
        y: -200,
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
        }
    });

    // Service Card Interactivity
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            serviceCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });

    // Portfolio Section Animation
    gsap.utils.toArray('.portfolio-category').forEach(category => {
        const items = category.querySelectorAll('.portfolio-subtitle, .portfolio-item');
        gsap.from(items, {
            opacity: 0,
            y: 50,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: category,
                start: 'top 85%',
                toggleActions: 'play none none none',
            }
        });
    });

    // Contact Section Animation
    gsap.from(".contact-grid", {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: ".contact-section",
            start: 'top 85%',
            toggleActions: 'play none none none',
        }
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // In a real application, you would send data to a server here.
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
});
