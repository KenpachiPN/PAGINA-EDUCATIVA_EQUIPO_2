
/*============================= CHANGE BACKGRAUND HEADER=============*/
function scrollHeader(){
    const header=document.getElementById('header')
    //when  the scroll is greater than 50 vieport height,add scroll-header class to the header tag
    if(this.scrolly>=50)header.classList.add('scroll-header');else header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)