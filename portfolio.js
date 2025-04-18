document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');
  const lightbox = document.getElementById('lightbox');
  const content = document.getElementById('lightbox-content');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      toggle.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode☀️' : 'Dark Mode🌙';
    });
  }

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  document.querySelectorAll('.gallery-item img, .gallery-item video').forEach(el => {
    el.addEventListener('click', () => {
      const clone = el.cloneNode(true);
      clone.removeAttribute('width');
      clone.removeAttribute('height');
      if (clone.tagName.toLowerCase() === 'video') {
        clone.controls = true;
      }
      content.innerHTML = '';
      content.appendChild(clone);
      lightbox.style.display = 'flex';
    });
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target === content.firstChild) {
      closeLightbox();
    }
  });
});

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  const content = document.getElementById('lightbox-content');
  lightbox.style.display = 'none';
  content.innerHTML = '';
}
