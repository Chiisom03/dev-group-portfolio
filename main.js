const toggler = document.getElementById('toggler');
const navMenu = document.getElementById('menu');
const navLink = document.querySelectorAll('nav__item')
const videoSize = document.getElementById('video-size')
const body = document.body;


// SHOW & REMOVE MENU
toggler.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

navLink.forEach(i => i.addEventListener('click', () => {
    navMenu.classList.remove('show')
}));


// BACKGROUND COLOUR CHANGE
const changeBackgroundColour = () => {
    if (window.scrollY > window.innerHeight / 2.5) {
        body.classList.add('bgcolor')
    } else {
        body.classList.remove('bgcolor')
    }
}
window.addEventListener('scroll', changeBackgroundColour);

const changevideoSize = () => {
    if (window.scrollY > window.innerHeight / 2) {
        videoSize.classList.add('expand')
    } else {
        videoSize.classList.remove('expand')
    }
}
window.addEventListener('scroll', changevideoSize);

