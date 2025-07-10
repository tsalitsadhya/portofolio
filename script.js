// ScrollReveal animations
ScrollReveal({
  reset: false,
  distance: '50px',
  duration: 1200,
  delay: 200
});

ScrollReveal().reveal('.hero-text', { origin: 'left' });
ScrollReveal().reveal('.hero-image', { origin: 'right' });
ScrollReveal().reveal('#about', { origin: 'bottom' });
ScrollReveal().reveal('.skills-grid div', { interval: 200, origin: 'bottom' });
ScrollReveal().reveal('.projects-grid div', { interval: 200, origin: 'bottom' });
ScrollReveal().reveal('form', { origin: 'left' });
ScrollReveal().reveal('.social', { origin: 'right' });

// Highlight nav-link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active-link');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active-link');
    }
  });
});
