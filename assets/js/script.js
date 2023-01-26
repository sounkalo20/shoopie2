'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");

const navElemArr = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}



/**
 * add active class on header when scrolled 200px from top
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 200 ? header.classList.add("active")
    : header.classList.remove("active");
})


const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

sr.reveal('.hero-content',{origin:'top', delay: 400});
sr.reveal('.service-item',{distance: '30px', delay: 50, interval: 100});
sr.reveal('.item1',{origin:'left',delay:500})
sr.reveal('.item2',{origin:'right',delay:500})
sr.reveal('.item3',{origin:'bottom',delay:500})
sr.reveal('.item4',{origin:'top',delay:500})
sr.reveal('.products',{distance: '30px', delay: 50, interval: 100})
sr.reveal('.newsletter',{origin:'right',delay:500})