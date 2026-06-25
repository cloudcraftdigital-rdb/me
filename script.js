// Scroll Animation Observer
const observerOptions = {
  threshold: 0.3,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.origin-content, .brand-content, .fade-in').forEach(el => {
  observer.observe(el);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Loading screen
window.addEventListener('load', () => {
  setTimeout(() => {
    document.querySelector('.loading-screen').classList.add('hidden');
  }, 1500);
});

// Parallax effect for backgrounds
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.origin-section::before');
  
  document.querySelectorAll('.origin-section').forEach(section => {
    const speed = 0.5;
    const yPos = -(scrolled - section.offsetTop) * speed;
    section.style.setProperty('--parallax-y', `${yPos}px`);
  });
});