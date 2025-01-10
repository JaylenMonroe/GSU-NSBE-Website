// Get the current year
const currentYear = new Date().getFullYear();

// Update the content of the span with id "currentYear"
document.getElementById("currentYear").textContent = currentYear;

// Get the donate button element
const donateButton = document.getElementById('donate-button');

// Get the become a sponsor button element
const becomeASponsorButton = document.querySelector('.btn-join-our-sponsors');

// Get the donate modal element
const donateModal = document.getElementById('donate-modal');

// Get the close button element
const closeButton = document.querySelector('.close-button');

// Get the modal content element
const modalContent = document.querySelector('.modal-content');

// Add event listener to the donate button
donateButton.addEventListener('click', () => {
  // Show the donate modal with a fade-in effect
  donateModal.style.opacity = 0;
  donateModal.style.display = 'block';
  setTimeout(() => {
    donateModal.style.opacity = 1;
  }, 10);
});

// Add event listener to the become a sponsor button
becomeASponsorButton.addEventListener('click', () => {
  // Show the donate modal with a fade-in effect
  donateModal.style.opacity = 0;
  donateModal.style.display = 'block';
  setTimeout(() => {
    donateModal.style.opacity = 1;
  }, 10);
});

// Add event listener to the close button
closeButton.addEventListener('click', () => {
  // Hide the modal with a fade-out effect
  donateModal.style.opacity = 0;
  setTimeout(() => {
    donateModal.style.display = 'none';
  }, 500);
});

// Add event listener to the window to close the modal on page click
window.addEventListener('click', (e) => {
  if (e.target !== modalContent && e.target !== closeButton && e.target !== donateButton && e.target !== becomeASponsorButton && e.target !== donateModal) {
    donateModal.style.display = 'none';
  }
});

// Add event listener to the navbar links
document.querySelectorAll('.navbar-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Add event listener to the window to adjust the modal size on resize
window.addEventListener('resize', () => {
  const modalWidth = window.innerWidth * 0.8;
  const modalHeight = window.innerHeight * 0.8;
  donateModal.style.width = `${modalWidth}px`;
  donateModal.style.height = `${modalHeight}px`;
});

// Create a loading animation to the page
const loadingAnimation = document.createElement('div');
loadingAnimation.classList.add('loading-animation');
document.body.appendChild(loadingAnimation);

// Add animation to the loading animation
loadingAnimation.style.animation = 'loading 2s infinite';

// Remove the loading animation after 2 seconds
setTimeout(() => {
  loadingAnimation.remove();
}, 2000);

// Implement form validation
document.getElementById('donation-form').addEventListener('submit', (e) => {
  const amount = document.getElementById('donation-amount').value;
  if (!amount || isNaN(amount) || amount <= 0) {
    e.preventDefault();
    alert('Please enter a valid donation amount.');
  }
});

// Add keyboard accessibility
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && donateModal.style.display === 'block') {
    donateModal.style.display = 'none';
  }
});

// Store user preferences
if (!localStorage.getItem('modalClosed')) {
  donateModal.style.display = 'block';
}

closeButton.addEventListener('click', () => {
  donateModal.style.display = 'none';
  localStorage.setItem('modalClosed', 'true');
});

// Add dynamic content to the modal
donateButton.addEventListener('click', () => {
  modalContent.innerHTML = '<h2>Thank you for your support!</h2><p>Your donation helps us achieve our goals.</p>';
  donateModal.style.display = 'block';
});

// Implement a countdown timer
const countdownDate = new Date('2025-01-15T00:00:00').getTime();

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${ minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = 'EXPIRED';
  }
}, 1000);

// Add tooltips for better user guidance
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip);

document.querySelectorAll('.tooltip-target').forEach(target => {
  target.addEventListener('mouseenter', (e) => {
    tooltip.textContent = target.getAttribute('data-tooltip');
    tooltip.style.display = 'block';
    tooltip.style.left = `${e.pageX + 5}px`;
    tooltip.style.top = `${e.pageY + 5}px`;
  });

  target.addEventListener('mouseleave', () => {
    tooltip.style.display = 'none';
  });
});

// Implement a back-to-top button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = 'Back to Top';
backToTopButton.className = 'back-to-top';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add a dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Toggle Dark Mode';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Create a notification system
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Example usage
showNotification('Thank you for your donation!');

// Implement a carousel for featured content
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = (i === index) ? 'block' : 'none';
  });
}

showSlide(currentIndex);

document.getElementById('next-button').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

document.getElementById('prev-button').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

// Add search functionality
document.getElementById('search-input').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const items = document.querySelectorAll('.search-item');

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(query) ? 'block' : 'none';
  });
});

// Create a FAQ section with expandable answers
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});