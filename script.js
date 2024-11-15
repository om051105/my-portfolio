// script.js
document.addEventListener('DOMContentLoaded', function () {
  const progressBars = document.querySelectorAll('.progress');
  progressBars.forEach((bar) => {
      // Add a slight delay for animation
      setTimeout(() => {
          bar.style.width = bar.style.width; // Trigger CSS animation
      }, 100);
  });
});

// Filtering Projects
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
      const category = button.dataset.category;
      const projects = document.querySelectorAll('.project-item');

      projects.forEach(project => {
          if (category === 'all' || project.dataset.category === category) {
              project.style.display = 'block';
          } else {
              project.style.display = 'none';
          }
      });
  });
});