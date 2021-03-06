const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

function toggleNav() {
    // Toggle: Menu Bars Open / Closed
    menuBars.classList.toggle('change');

    // Toggle: Menu Active
    overlay.classList.toggle('overlay-active');

    if(overlay.classList.contains('overlay-active')) {
        // Animate In - overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');

        // Animation
        nav1.classList.remove('slide-out-1');
        nav1.classList.add('slide-out-1');
    } else {
        // Animate Out - overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
    }
}


// Event Listeners
menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);


