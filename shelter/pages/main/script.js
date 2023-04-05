console.log(`Ваша оценка - 100 баллов\nОтзыв по пунктам ТЗ:\nВыполненные пункты:\n1) блок 'header'\n2) блок 'Not only'\n3) блок 'About'\n4) блок 'Our Friends'\n5) блок 'Help'\n6) блок 'In addition'\n7) блок 'footer'\n8) блок 'header'\n9) блок 'Not only'\n10) блок 'About'\n11) блок 'Our Friends'
12) блок 'Help'\n13) блок 'In addition'\n14) блок 'footer'\n15) блок 'header'\n16) блок 'Not only'\n17) блок 'About'\n18) блок 'Our Friends'\n19) блок 'Help'\n20) блок 'In addition'\n21) блок 'footer'\n22) блок 'header'\n23) блок 'Our Friends'\n24) блок 'footer'\n25) блок 'header'\n26) блок 'Our Friends'
27) блок 'footer'\n28) блок 'header'\n29) блок 'Our Friends'\n30) блок 'footer'\n31) нет полосы прокрутки при ширине страницы 'Main' от 1280рх до 768рх\n32) нет полосы прокрутки при ширине страницы 'Main' от 768рх до 320рх\n33) нет полосы прокрутки при ширине страницы 'Pets' от 1280рх до 768рх
34) нет полосы прокрутки при ширине страницы 'Pets' от 768рх до 320рх\n35) на странице 'Main', при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции
36) на странице 'Pets', при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции\n37) При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню. Открытие меню при клике на иконку бургер-меню на текущем этапе не проверяется
38) Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ `);
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


