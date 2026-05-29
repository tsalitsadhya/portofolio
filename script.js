// Typing animation
const typingTexts = ['Data Analyst', 'Aspiring Data Scientist', 'Information Systems Student'];
let tIdx = 0, cIdx = 0, isDeleting = false;
const typedEl = document.getElementById('typed-text');

function typeLoop() {
  const current = typingTexts[tIdx];
  typedEl.textContent = isDeleting
    ? current.substring(0, --cIdx)
    : current.substring(0, ++cIdx);

  if (!isDeleting && cIdx === current.length) {
    isDeleting = true;
    setTimeout(typeLoop, 1800);
    return;
  }
  if (isDeleting && cIdx === 0) {
    isDeleting = false;
    tIdx = (tIdx + 1) % typingTexts.length;
  }
  setTimeout(typeLoop, isDeleting ? 55 : 85);
}
typeLoop();

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('navList');
const menuOverlay = document.getElementById('menuOverlay');

function openMenu() {
  hamburger.classList.add('open');
  navList.classList.add('open');
  menuOverlay.classList.add('show');
}
function closeMenu() {
  hamburger.classList.remove('open');
  navList.classList.remove('open');
  menuOverlay.classList.remove('show');
}

hamburger.addEventListener('click', () => {
  navList.classList.contains('open') ? closeMenu() : openMenu();
});
menuOverlay.addEventListener('click', closeMenu);
navList.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', closeMenu));

// Scroll events (combined)
const scrollTopBtn = document.getElementById('scrollTop');
const headerEl = document.getElementById('header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  const y = window.scrollY;

  scrollTopBtn.classList.toggle('show', y > 300);
  headerEl.classList.toggle('scrolled', y > 50);

  let current = '';
  sections.forEach(section => {
    if (y >= section.offsetTop - 130) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.toggle('active-link', link.getAttribute('href') === `#${current}`);
  });
});

// Skill bar animation on scroll
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target.querySelector('.skill-fill');
      fill.style.width = entry.target.getAttribute('data-level') + '%';
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.skill-card').forEach(card => skillObserver.observe(card));

// Modal
function openModal(id) {
  document.getElementById(`modal${id}`).style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(`modal${id}`).style.display = 'none';
  document.body.style.overflow = '';
}
function handleModalClick(e, id) {
  if (e.target === e.currentTarget) closeModal(id);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    for (let i = 1; i <= 7; i++) {
      const m = document.getElementById(`modal${i}`);
      if (m && m.style.display === 'flex') closeModal(i);
    }
  }
});

// ScrollReveal
ScrollReveal({ reset: false, distance: '40px', duration: 900, delay: 120 });
ScrollReveal().reveal('.hero-text', { origin: 'left' });
ScrollReveal().reveal('.hero-image', { origin: 'right' });
ScrollReveal().reveal('.about-content', { origin: 'bottom' });
ScrollReveal().reveal('.skill-card', { interval: 80, origin: 'bottom' });
ScrollReveal().reveal('.project-card', { interval: 120, origin: 'bottom' });
ScrollReveal().reveal('.contact-wrapper', { origin: 'bottom' });
