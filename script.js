// Select the menu icon and nav links
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('nav ul'); // Updated to match the real structure

// Toggle the 'show' class on the nav-links when the menu icon is clicked
menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
