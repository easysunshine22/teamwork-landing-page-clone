
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.header-nav nav');
const menuLinks = document.querySelectorAll('.header-nav nav ul li a');


hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle('showNav');
})

menuLinks.forEach(link => {
    link.addEventListener('click', () =>{
        mobileNav.classList.remove('showNav');
    })
})
