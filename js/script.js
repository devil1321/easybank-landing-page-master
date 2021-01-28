const btnHamburger = document.querySelector('#hamburger');
const body = document.querySelector('body')
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade')
btnHamburger.addEventListener('click', function() {
    if (header.classList.contains('open')) {
        header.classList.remove('open');
        body.classList.remove('noscroll')
        fadeElems.forEach(el => {
            el.classList.remove('fade-in');
            el.classList.add('fade-out');

        })
    } else {
        body.classList.add('noscroll')
        header.classList.add('open')
        fadeElems.forEach(el => {
            el.classList.remove('fade-out');
            el.classList.add('fade-in');
        })
    }
});