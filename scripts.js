// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        } else {
            header.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        }
    });

    sections.forEach((section) => {
        section.addEventListener('mouseenter', () => {
            section.style.transform = "scale(1.02)";
            section.style.transition = "transform 0.3s ease";
        });
        section.addEventListener('mouseleave', () => {
            section.style.transform = "scale(1)";
        });
    });
});
