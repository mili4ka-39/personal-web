//maus trail butterfly

const butterfly = document.getElementById('butterfly');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let butterflyX = mouseX;
let butterflyY = mouseY;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateButterfly() {
  const speed = 0.1; // kolku da e poblisku
  butterflyX += (mouseX - butterflyX) * speed;
  butterflyY += (mouseY - butterflyY) * speed;

  butterfly.style.left = butterflyX + 'px';
  butterfly.style.top = butterflyY + 'px';

  requestAnimationFrame(animateButterfly);
}

animateButterfly();



// Preloader
window.addEventListener('load', function () {
  const preloader = document.querySelector('.mkdf-st-loader1');

  setTimeout(() => {
    preloader.style.transition = 'opacity 1s ease';
    preloader.style.opacity = 0;

  setTimeout(() => {
    preloader.style.display = 'none';
    document.body.classList.remove('loading');
    }, 1000); 
  }, 1500); 
});