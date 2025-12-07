const typewriterElement = document.querySelector('.typewriter');
const text = "Welcome to Brighter's Website";
const colors = ['Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'Black', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'green', 'White', 'White', 'White', 'White', 'White', 'White', 'White', 'White'];

let charIndex = 0;

function typeWriter() {
    if (charIndex < text.length) {
        const span = document.createElement('span');
        span.textContent = text.charAt(charIndex);
        span.style.color = colors[charIndex % colors.length];
        typewriterElement.appendChild(span);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
}

setTimeout(typeWriter, 1500);

const bgContainer = document.querySelector('.background-images');
const images = ['1.png.jpg', '2.png.jpg', '3.png.jpg', '4.png.jpg'];
let currentIndex = 0;

function changeBackground() {
    const currentBg = document.querySelector('.bg-img.active');
    currentBg.classList.remove('active');
    currentBg.classList.add('exit');
    
    currentIndex = (currentIndex + 1) % images.length;
    
    const newBg = document.createElement('div');
    newBg.className = 'bg-img';
    newBg.style.backgroundImage = `url('${images[currentIndex]}')`;
    bgContainer.appendChild(newBg);
    
    setTimeout(() => newBg.classList.add('active'), 50);
    setTimeout(() => currentBg.remove(), 1100);
}

setInterval(changeBackground, 2000);

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});
