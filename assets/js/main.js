// Main site JS: nav toggle and year insertion
document.addEventListener('DOMContentLoaded', function () {
  // Toggle any nav controlled by buttons with .nav-toggle
  document.querySelectorAll('.nav-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var targetId = btn.getAttribute('aria-controls');
      if (!targetId) return;
      var nav = document.getElementById(targetId);
      if (!nav) return;
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      // toggle visibility class
      if (nav.style.display === 'block') {
        nav.style.display = '';
      } else {
        nav.style.display = 'block';
      }
    });
  });

  // Fill year placeholders if present
  var year = new Date().getFullYear();
  ['year', 'year-about', 'year-services', 'year-contact'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.textContent = year;
  });

  // Enhance in-page links to close mobile nav on click
  document.querySelectorAll('.main-nav a').forEach(function (link) {
    link.addEventListener('click', function () {
      // find any visible nav and hide it
      document.querySelectorAll('.main-nav').forEach(function (nav) {
        if (getComputedStyle(nav).display === 'block') nav.style.display = '';
      });
      document.querySelectorAll('.nav-toggle').forEach(function (btn) {
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  });

  // Close mobile nav with Escape key for accessibility
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' || e.key === 'Esc') {
      document.querySelectorAll('.main-nav').forEach(function (nav) {
        if (getComputedStyle(nav).display === 'block') nav.style.display = '';
      });
      document.querySelectorAll('.nav-toggle').forEach(function (btn) {
        btn.setAttribute('aria-expanded', 'false');
      });
    }
  });
});
