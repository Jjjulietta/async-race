/*------------------BURGER------------------------------*/
let menu = document.querySelector('.menu__list');
let body = document.querySelector('BODY')
console.log(menu);
let icon = document.querySelector('.menu__icon');
let popap = document.querySelector('.popap');
let menuItems = document.querySelectorAll('.menu__item');
let logo = document.querySelector('.header__logo');


icon.addEventListener('click', ()=> {
body.classList.toggle('popap-body');
popap.classList.toggle('popap-opened')
menu.classList.toggle('open');
icon.classList.toggle('opened');
logo.classList.toggle('logo-close')
})
popap.addEventListener('click', ()=> {
    if(popap.classList.contains('popap-opened')){
    menu.classList.remove('open');
    popap.classList.remove('popap-opened');
    icon.classList.remove('opened');
    body.classList.remove('popap-body')
    logo.classList.remove('logo-close')
    }
})

menuItems.forEach(item => {
    item.addEventListener('click', ()=>{
        menu.classList.remove('open');
        popap.classList.remove('popap-opened');
        icon.classList.remove('opened');
        body.classList.remove('popap-body')
        logo.classList.remove('logo-close')
        }
    )
})
