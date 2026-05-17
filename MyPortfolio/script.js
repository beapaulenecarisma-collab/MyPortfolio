// Scroll animation observer
const observerOptions = { threshold: 0.15 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('show'); }
    });
}, observerOptions);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Mouse movement listener for cursor
const glow = document.getElementById('cursor-glow');

window.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
});

const interactables = document.querySelectorAll('a, .btn, .skills span, .project-card, .contact-box');
interactables.forEach(item => {
    item.addEventListener('mouseenter', () => document.body.classList.add('hovered'));
    item.addEventListener('mouseleave', () => document.body.classList.remove('hovered'));
});

// Dynamic navbar updates on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= (sectionTop - 220)) { current = section.getAttribute('id'); }
    });

    navLinks.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').includes(current)) { a.classList.add('active'); }
    });

    const navbar = document.getElementById("navbar");
    if (window.scrollY > 40) {
        navbar.style.background = "rgba(12, 9, 16, 0.95)";
        navbar.style.padding = "16px 8%";
    } else {
        navbar.style.background = "rgba(31, 26, 38, 0.75)";
        navbar.style.padding = "22px 8%";
    }
});

// Text typing animation for hero
const words = ["Creative Web Designer", "Future IT Professional"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('typewriter').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000);
            return false;
        }
        timer = setTimeout(loopTyping, 90);
    };
    loopTyping();
}

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('typewriter').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) { i++; } else { i = 0; }
            setTimeout(typingEffect, 500);
            return false;
        }
        timer = setTimeout(loopDeleting, 50);
    };
    loopDeleting();
}

document.addEventListener('DOMContentLoaded', () => { typingEffect(); });