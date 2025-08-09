// Theme toggle (dark by default)
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const stored = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  function setTheme(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
      btn.textContent = '☀️';
      btn.setAttribute('aria-pressed', 'false');
    } else {
      root.setAttribute('data-theme', 'dark');
      btn.textContent = '🌙';
      btn.setAttribute('aria-pressed', 'true');
    }
    localStorage.setItem('theme', theme);
  }

  // Initial theme
  if (stored === 'light' || stored === 'dark') {
    setTheme(stored);
  } else {
    setTheme(prefersLight ? 'light' : 'dark');
  }

  btn?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    setTheme(current);
  });

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Set year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
