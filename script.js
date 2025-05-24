document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Form submission handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Basic validation
      if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
      }
      
      // Here you would typically send the data to a server
      console.log('Form submitted:', { name, email, message });
      
      // Show success message
      alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
      
      // Reset form
      contactForm.reset();
    });
  }

  // Animation for project cards on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.project-card, .cert-card, .category');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Set initial state for animation
  const projectCards = document.querySelectorAll('.project-card');
  const certCards = document.querySelectorAll('.cert-card');
  const categories = document.querySelectorAll('.category');
  
  projectCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
  });
  
  certCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease 0.2s';
  });
  
  categories.forEach(category => {
    category.style.opacity = '0';
    category.style.transform = 'translateY(20px)';
    category.style.transition = 'all 0.6s ease 0.4s';
  });

  // Trigger animations when scrolled into view
  window.addEventListener('scroll', animateOnScroll);
  
  // Run once on page load in case elements are already visible
  animateOnScroll();
});