// ── Dark / Light toggle
const toggle = document.getElementById('themeToggle');
const sunIcon  = document.getElementById('icon-sun');
const moonIcon = document.getElementById('icon-moon');

toggle.addEventListener('click', () => {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  sunIcon.style.display  = isDark ? 'none'  : 'block';
  moonIcon.style.display = isDark ? 'block' : 'none';
});

// ── Hamburger
const ham = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

ham.addEventListener('click', () => {
  const open = ham.classList.toggle('open');
  mobileNav.classList.toggle('open', open);
});

// Close mobile nav on link click
document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    ham.classList.remove('open');
    mobileNav.classList.remove('open');
  });
});
