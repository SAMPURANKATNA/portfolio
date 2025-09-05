// more style.js
const limeLight = document.createElement('div');
limeLight.style.position = 'fixed';
limeLight.style.pointerEvents = 'none';
limeLight.style.width = '100px';
limeLight.style.height = '100px';
limeLight.style.borderRadius = '20%';
limeLight.style.background = 'radial-gradient(circle, lime 30%, transparent 100%)';
limeLight.style.opacity = '0.2';
limeLight.style.zIndex = '9999';
limeLight.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(limeLight);

document.addEventListener('mousemove', (e) => {
    limeLight.style.left = `${e.clientX}px`;
    limeLight.style.top = `${e.clientY}px`;
});
// Responsive navigation toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add shadow to navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('shadow');
        }
    }
});

// Reveal elements on scroll
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();