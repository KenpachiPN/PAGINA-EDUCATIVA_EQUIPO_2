/*================SHOW MENU#####################*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*########### menu show################*/
/*validste if const exist*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}
/*============================= CHANGE BACKGRAUND HEADER=============*/
function scrollHeader() {
    const header = document.getElementById('header')
    //when  the scroll is greater than 50 vieport height,add scroll-header class to the header tag
    if (this.scrolly >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)