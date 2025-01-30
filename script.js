document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out',
  mirror: false
});

const backToTop = document.createElement('div');
backToTop.className = 'back-to-top';
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 500 ? 'flex' : 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

const darkModeToggle = document.createElement('button');
darkModeToggle.className = 'dark-mode-toggle';
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
  darkModeToggle.innerHTML = document.body.classList.contains('dark-mode') ? 
    '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

if (localStorage.getItem('darkMode') === 'true') {
  document.body.classList.add('dark-mode');
  darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

const skillIcons = document.querySelectorAll('.skill-icons i');
skillIcons.forEach(icon => {
  const tooltip = document.createElement('div');
  tooltip.className = 'skill-tooltip';
  tooltip.textContent = icon.getAttribute('title');
  icon.parentNode.appendChild(tooltip);
  
  icon.addEventListener('mouseenter', () => {
    tooltip.style.opacity = '1';
    tooltip.style.visibility = 'visible';
  });
  
  icon.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
    tooltip.style.visibility = 'hidden';
  });
});

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });
});

const forms = document.querySelectorAll('form');
forms.forEach(form => {
  form.addEventListener('submit', e => {
    const inputs = form.querySelectorAll('input, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
      if (!input.checkValidity()) {
        isValid = false;
        input.classList.add('invalid');
      }
    });
    
    if (!isValid) {
      e.preventDefault();
      inputs.forEach(input => {
        input.addEventListener('input', () => {
          if (input.checkValidity()) {
            input.classList.remove('invalid');
          }
        });
      });
    }
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.timeline-item, .project-card').forEach(el => {
  observer.observe(el);
});

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});