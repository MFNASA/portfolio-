// Smooth Scrolling Effect for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Animation Effect on Scroll (optional)
  const projects = document.querySelectorAll('.project');
  window.addEventListener('scroll', () => {
    projects.forEach(project => {
      const rect = project.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        project.style.opacity = 1;
        project.style.transform = 'translateY(0)';
      }
    });
  });
  