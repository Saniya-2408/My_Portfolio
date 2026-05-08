const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// TYPEWRITER
const roles = [
  'Frontend Developer',
  'React Developer',
  'UI Enthusiast',
  'Problem Solver'
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typewriter = document.getElementById('typewriter');

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    typewriter.textContent = currentRole.substring(0, charIndex++);

    if (charIndex > currentRole.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typewriter.textContent = currentRole.substring(0, charIndex--);

    if (charIndex < 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();

// REVEAL ANIMATION
const reveals = document.querySelectorAll('.reveal');

function revealSections() {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);
revealSections();

// SKILL BARS
const bars = document.querySelectorAll('.bar-fill');

function animateBars() {
  bars.forEach(bar => {
    const width = bar.dataset.width;
    bar.style.width = width + '%';
  });
}

window.addEventListener('load', animateBars);

// COUNTER ANIMATION
const counters = document.querySelectorAll('.stat-num');

counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;

    const increment = target / 50;

    if (current < target) {
      counter.innerText = (current + increment).toFixed(1);
      setTimeout(update, 40);
    } else {
      counter.innerText = target;
    }
  };

  update();
});

// ACTIVE NAVBAR LINKS
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');

    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// SCROLL PROGRESS
const progressBar = document.getElementById('progress-bar');

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / height) * 100;

  progressBar.style.width = progress + '%';
});

// TILT EFFECT
const tiltCards = document.querySelectorAll('.tilt-card');

 tiltCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -10;
    const rotateY = ((x / rect.width) - 0.5) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  });
});

// CUSTOM CURSOR
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

window.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

  ring.style.left = e.clientX + 'px';
  ring.style.top = e.clientY + 'px';
});
