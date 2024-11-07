// Fade-in animation on page load
document.addEventListener('DOMContentLoaded', function () {
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transition = `opacity 0.9s ease ${index * 0.2}s`;
        item.style.opacity = 1;
    });
});
