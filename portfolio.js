document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
      });
    }
  
    const lightbox = document.getElementById('lightbox');
    const content = document.getElementById('lightbox-content');
  
    document.querySelectorAll('.gallery-item img, .gallery-item video').forEach(el => {
      el.addEventListener('click', () => {
        const clone = el.cloneNode(true);
        clone.removeAttribute('width');
        clone.removeAttribute('height');
        clone.controls = el.tagName.toLowerCase() === 'video';
        content.innerHTML = '';
        content.appendChild(clone);
        lightbox.style.display = 'flex';
      });
    });
  
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
        content.innerHTML = '';
      }
    });
  });
  