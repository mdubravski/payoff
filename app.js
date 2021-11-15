// load particles.js
particlesJS.load('particles-js', 'particles.json', ()=>{
    console.log('particles.js loaded');
});

// nav functionality
const menu = document.querySelector('.menu');
const content = document.querySelector('.wrapper');
const hamburger = document.querySelector('.hamburger');
const bars = hamburger.querySelectorAll('span');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('open');
    content.classList.toggle('shift');
    
    for(let b of bars){
        b.classList.toggle('change');
    }
});

document.body.addEventListener('touchmove', function(e){ e.preventDefault(); });


