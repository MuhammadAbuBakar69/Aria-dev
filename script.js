const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});
    // Spline interaction
    const splineViewer = document.querySelector('.hero-section spline-viewer');

    splineViewer.addEventListener('load', () => {
        window.addEventListener('mousemove', (event) => {
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            const y = (event.clientY / window.innerHeight) * 2 - 1;

            splineViewer.emitEvent('setRotation', {
                rotationY: x * 0.5,
                rotationX: -y * 0.5
            });
        });
    });

    // Scroll reveal animation
    const aboutSection = document.querySelector('.about-section');
    
    const revealAbout = () => {
        const windowHeight = window.innerHeight;
        const elementTop = aboutSection.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            aboutSection.classList.add('visible');
        }
    };

    window.addEventListener('scroll', revealAbout);

    // Animate statistics
    const stats = document.querySelectorAll('.stat-number');
    let animated = false;
    
    const animateStats = () => {
        if (animated) return;
        
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const current = parseInt(stat.innerText);
            const increment = target / 50;

            if (current < target) {
                stat.innerText = Math.ceil(current + increment);
                setTimeout(animateStats, 40);
            } else {
                stat.innerText = target;
            }
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                animateStats();
            }
        });
    });

    stats.forEach(stat => observer.observe(stat));
    // Feature data
    const features = [
        {
            title: 'Accounts',
            description: 'Manage an unlimited number of accounts in 30 currencies.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z"/>
                <path d="M2 10H22"/>
            </svg>`
        },
        {
            title: 'Roles & Permissions',
            description: 'Full control with flexible user permissions for views and actions.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
                <path d="M12 16V12"/>
                <path d="M12 8H12.01"/>
            </svg>`
        },
        {
            title: 'Company cards',
            description: 'Fee-free global spending with built in expense management.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 4H20C21.1046 4 22 4.89543 22 6V18C22 19.1046 21.1046 20 20 20H4C2.89543 20 2 19.1046 2 18V6C2 4.89543 2.89543 4 4 4Z"/>
                <path d="M12 12H12.01"/>
                <path d="M16 12H16.01"/>
                <path d="M8 12H8.01"/>
            </svg>`
        },
        {
            title: 'Security',
            description: 'Your funds are safeguarded and data is encrypted and secure.',
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
                <path d="M12 16L12 8"/>
                <path d="M8 12L16 12"/>
            </svg>`
        }
    ];

    // Create and render feature cards
    function renderFeatureCards() {
        const featuresContainer = document.getElementById('features-cards');
        
        features.forEach(feature => {
            const card = document.createElement('div');
            card.className = 'feature-card';
            
            card.innerHTML = `
                <div class="feature-icon">${feature.icon}</div>
                <h3 class="feature-title">${feature.title}</h3>
                <p class="feature-description">${feature.description}</p>
            `;
            
            featuresContainer.appendChild(card);
        });
    }

    // Initialize the page
    document.addEventListener('DOMContentLoaded', () => {
        renderFeatureCards();
    });
      // GSAP Animations
  gsap.from(".footer-title", { duration: 1, opacity: 0, y: 50, ease: "power2.out" });
  gsap.from(".footer-links a", { duration: 0.8, opacity: 0, y: 20, stagger: 0.2, delay: 0.5, ease: "power2.out" });
  gsap.from(".footer-button", { duration: 1, opacity: 0, y: 30, delay: 1, ease: "power2.out" });
  gsap.from(".footer-contact", { duration: 1, opacity: 0, y: 30, delay: 1.2, ease: "power2.out" });
  
