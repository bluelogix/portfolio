const navs= document.querySelector('nav svg');
const list = document.querySelectorAll('.menu-item');

navs.addEventListener('click', () => {
    const burger = document.querySelector('nav svg');
    const nav = document.querySelector('.main-nav');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
})

