// SwiftKit Storefront — Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navLinks = document.querySelector('.nav__links');
  // For mobile, we can add a hamburger toggle later if needed

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Product card tracking (for future analytics)
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', function(e) {
      // Don't intercept if clicking a link
      if (e.target.closest('a')) return;
      const link = this.querySelector('a.btn');
      if (link) {
        window.location.href = link.getAttribute('href');
      }
    });
  });
});