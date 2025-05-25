let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active'); 
}

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};
// Scroll Reveal Animations
ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading, .edu h2, .achi h2,.cer h2', { origin: 'top' });
ScrollReveal().reveal('.about-img,.btn-box1,#box2, .ski-box,#cer2', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1,.about-text h4,.btn-box, #box1,#cer1, .ski-container1 h3,.ski-container2 h3,.ski-container3 h3, .ski-container4 h3', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-img ,.about-text p,.home-sci,#box3,#cer3 ', { origin: 'right' });

// Typed.js Animation
var typed = new Typed('.txt', {
    strings: ['Full Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});