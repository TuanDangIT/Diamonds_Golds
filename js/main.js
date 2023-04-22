const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const footerYear = document.querySelector('.footer__year')
const allNavItems = document.querySelectorAll('.nav__link')
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger')
const handleNav = () => {
    navBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav-mobile--active');
    hamburger.style.position = "fixed";
    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav-mobile--active')
        })
    })
}

navBtn.addEventListener('click', handleNav);
const handleCurrentYear = () =>{
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleCurrentYear();