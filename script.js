// Form interactivity
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const status = document.getElementById('form-status');
  status.textContent = 'Sending...';

  // Simulate sending message
  setTimeout(() => {
    status.textContent = 'Thanks! Your message has been sent.';
    this.reset();
  }, 1500);
});
