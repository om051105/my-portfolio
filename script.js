document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Here you would typically send the form data to a server
      console.log('Form submitted:', { name, email, message });
      
      // Show a success message
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
  }

  // Animate skill bars on scroll
  const skills = document.querySelectorAll('.skill-bar > div');
  const animateSkillBars = () => {
    skills.forEach(skill => {
      const skillWidth = skill.style.width;
      skill.style.width = '0';
      setTimeout(() => {
        skill.style.width = skillWidth;
      }, 100);
    });
  };

  // Intersection Observer for skill bars
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateSkillBars();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    observer.observe(skillsSection);
  }
});