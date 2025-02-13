// Typed.js animation for the home section
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('.text', {
        strings: ['Explore the World', 'Unforgettable Adventures', 'Custom Travel Packages'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Modal functionality for sign-in and sign-up
const signinModal = document.getElementById('signin-modal');
const signupModal = document.getElementById('signup-modal');
const signinLink = document.getElementById('signin-link');
const signupLink = document.getElementById('signup-link');
const closeBtns = document.getElementsByClassName('close');

if (signinLink && signinModal) {
    signinLink.onclick = function() {
        signinModal.style.display = 'block';
    }
}

if (signupLink && signupModal) {
    signupLink.onclick = function() {
        signupModal.style.display = 'block';
    }
}

if (closeBtns.length) {
    for (let closeBtn of closeBtns) {
        closeBtn.onclick = function() {
            if (signinModal) signinModal.style.display = 'none';
            if (signupModal) signupModal.style.display = 'none';
        }
    }
}

window.onclick = function(event) {
    if (event.target == signinModal) signinModal.style.display = 'none';
    if (event.target == signupModal) signupModal.style.display = 'none';
}

// Form submission handling
const signinForm = document.getElementById('signin-form');
const signupForm = document.getElementById('signup-form');

if (signinForm) {
    signinForm.onsubmit = function(e) {
        e.preventDefault();
        alert('Sign-in functionality to be implemented');
    }
}

if (signupForm) {
    signupForm.onsubmit = function(e) {
        e.preventDefault();
        alert('Sign-up functionality to be implemented');
    }
}

// Scroll animation for sections
const sections = document.querySelectorAll('section');

const fadeInOptions = {
    threshold: 0.5
};

const fadeInObserver = new IntersectionObserver(function(entries, fadeInObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('fade-in');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, fadeInOptions);

sections.forEach(section => {
    fadeInObserver.observe(section);
});
