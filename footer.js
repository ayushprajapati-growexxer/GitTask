// Simple hover effect for social media links
const socialLinks = document.querySelectorAll('.social-icon');

socialLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.1)';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});
