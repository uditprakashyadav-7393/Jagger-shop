// Mobile navbar toggle (hamburger menu)
const menuToggle = document.querySelector('.sidebar');
const navMenu = document.querySelector('.new-nav');
const navLinks = document.querySelectorAll('.nav-links a');

// Open/close the menu on hamburger click
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuToggle.classList.toggle('active');
});

// Auto-close the menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        menuToggle.classList.remove('active');
    });
});
