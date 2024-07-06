const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener("click",() => {

    const body = document.body;

    body.classList.toggle('is-menu');
 
 });

 const mainheader = document.querySelector('.main-header');


window.addEventListener("scroll",() => {


    if (window.scrollY > 100) {

        mainheader.classList.add('is-sticky');
    }

    else {

        mainheader.classList.remove('is-sticky');
    }
 
 });