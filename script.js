// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Optional: Add animations using AOS library
  // Include AOS library in your HTML: <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  // Initialize AOS: AOS.init();