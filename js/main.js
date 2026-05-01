/* ============================================
   ALLERGEN AIR FILTER GUIDE — main.js
   ============================================ */

// --- MOBILE MENU ---
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('menuBtn');
  var nav = document.getElementById('mainNav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Close mobile menu when clicking a nav link
  var navLinks = document.querySelectorAll('.site-nav a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav) nav.classList.remove('open');
    });
  });

  // --- IN-PAGE ANCHOR SMOOTH SCROLL for nav pills ---
  var pills = document.querySelectorAll('.page-nav-pills a[href^="#"]');
  pills.forEach(function (pill) {
    pill.addEventListener('click', function (e) {
      var targetId = pill.getAttribute('href').substring(1);
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update active pill state
        pills.forEach(function (p) { p.classList.remove('active'); });
        pill.classList.add('active');
      }
    });
  });

  // --- SCROLL-SPY for page-nav-pills ---
  var sections = document.querySelectorAll('.article-body h2[id]');
  if (sections.length > 0) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          pills.forEach(function (p) {
            p.classList.toggle('active', p.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    sections.forEach(function (sec) { observer.observe(sec); });
  }
});
