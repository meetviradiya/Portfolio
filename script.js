document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const masthead = document.querySelector('.masthead');
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
  
    function adjustMastheadHeight() {
      if (masthead && navbar) {
        masthead.style.height = `calc(100vh - ${navbar.offsetHeight}px)`;
      }
    }
  
    // Initial adjustment and update on window resize
    adjustMastheadHeight();
    window.addEventListener('resize', adjustMastheadHeight);
  
    // Mobile menu toggle
    if (menuIcon && navLinks) {
      menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        adjustMastheadHeight();
      });
    }
  });
  