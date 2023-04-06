console.log(`Ваша оценка - 100 баллов\nОтзыв по пунктам ТЗ:\nВыполненные пункты:\n1) блок 'header'\n2) блок 'Not only'\n3) блок 'About'\n4) блок 'Our Friends'\n5) блок 'Help'\n6) блок 'In addition'\n7) блок 'footer'\n8) блок 'header'\n9) блок 'Not only'\n10) блок 'About'\n11) блок 'Our Friends'
12) блок 'Help'\n13) блок 'In addition'\n14) блок 'footer'\n15) блок 'header'\n16) блок 'Not only'\n17) блок 'About'\n18) блок 'Our Friends'\n19) блок 'Help'\n20) блок 'In addition'\n21) блок 'footer'\n22) блок 'header'\n23) блок 'Our Friends'\n24) блок 'footer'\n25) блок 'header'\n26) блок 'Our Friends'
27) блок 'footer'\n28) блок 'header'\n29) блок 'Our Friends'\n30) блок 'footer'\n31) нет полосы прокрутки при ширине страницы 'Main' от 1280рх до 768рх\n32) нет полосы прокрутки при ширине страницы 'Main' от 768рх до 320рх\n33) нет полосы прокрутки при ширине страницы 'Pets' от 1280рх до 768рх
34) нет полосы прокрутки при ширине страницы 'Pets' от 768рх до 320рх\n35) на странице 'Main', при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции
36) на странице 'Pets', при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции\n37) При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню. Открытие меню при клике на иконку бургер-меню на текущем этапе не проверяется
38) Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ `);

import { Object } from  './Object.js'
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

/*------------------------SLIDER-----------------*/
import data from './data.js'
console.log(data)
let numRandom ;
function getRandom(n) {
    return Math.floor(Math.random()*(n +1))
}
numRandom = getRandom();
let arrowBtnL = document.querySelector('.arrow__button-left');
let arrowBtnLTwo = document.querySelector('.arrow__button-left2')
let arrowBtnR = document.querySelector('.arrow__button-right');
let carusel = document.querySelector('.friends__carusel');
let caruselWrapper = document.querySelector('.carusel__wrapper')

function cleanCarusel(){
carusel.innerHTML = '';

return carusel;
}
function checkNum(){
    let width =  document.documentElement.clientWidth;
    console.log(width);
    let num;
    if(width >= 1280) {num = 3}
    if(width < 1280 && width >= 768) {num = 2}
    if(width <768 && width >= 320) {num = 1}
    return num;
}
let num = checkNum();
console.log(num);

function generateCards(){
    let cards = [];
    console.log(data);
    data.forEach(item =>{cards.push(new Object(item))})
    console.log(cards);
    return cards;

}
let cards = generateCards();
console.log(cards)

function generateCardOpen(cards){
    let num = checkNum();
    if(cards.length < num) {
    cards = generateCards(data);
    console.log(cards)
    console.log(cardPre)
    outer: for(let i = 0; i < cards.length; i++){
        for(let j = 0; j < cardPre.length; j++){
            if(cards[i].name == cardPre[j].name){
                cards.splice(i, 1); i = 0; continue outer;
            }
        }
    }
    }
    console.log(cards);
    let cardItems = document.querySelectorAll('.friends__card');
    console.log(cardItems.length)
   /* if(cardItems.length < num) { num = num - cardItems.length} else {num = checkNum()}*/
    console.log(num)
    let cardOpen = [];
    for(let j = 0; j < num; j++){
     let i = getRandom(cards.length-1); cardOpen.push(cards[i]);console.log(cards[i]);
    cards.splice(i, 1)
    console.log(cards.length)
     console.log(i)
    
    }
    
    return cardOpen;
    
}
let cardOpen;
let createElement =(cardOpen)=>{
    let cardBlock = document.createElement('div');
    cardBlock.classList.add('friends__item');
    if(cardOpen){
        for(let item of cardOpen)
{  console.log(item); cardBlock.append(item.getObject())}
    }
    console.log(cardBlock);
   return cardBlock;
}

let cardPre;
let cardPrepend;
let counterRight;
let counterLeft;

function moveLeft(){
    let cardBlocks = document.querySelectorAll('.friends__item');
            console.log(cardBlocks);
            console.log(cardPrepend);
            console.log(counterLeft);
            console.log(counterRight)
            if(counterLeft == 0 && counterRight == 1) {carusel.append(createElement(cardPrepend))
                } else{
                carusel.append(createElement(cardOpen))
               
            }
    console.log(cardOpen);
   
    carusel.classList.add('transition-left');
  
    }
     
    
function moveRight(){
    let cardBlocks = document.querySelectorAll('.friends__item');
    console.log(cardBlocks);
    console.log(cardPrepend);
            console.log(counterLeft);
            console.log(counterRight)
    if(counterLeft == 1 && counterRight == 0) {carusel.prepend(createElement(cardPrepend))
        } else{
        carusel.prepend(createElement(cardOpen))
        }

    console.log(cardOpen);
    console.log(cards)
    carusel.classList.add('transition-right')
}




window.addEventListener('load', ()=> {
    cleanCarusel();
    let num = checkNum()
    cardOpen = generateCardOpen(cards);
    carusel.append(createElement(cardOpen));
    cardPre = cardOpen.splice(0)
    console.log(cardPre)
cardOpen = generateCardOpen(cards);
console.log(cardOpen)

})

window.addEventListener('resize', () => {
    console.log(cardPre);
    let width =  caruselWrapper.offsetWidth;
    if(width == 990) {
        let num = checkNum();
        let cardItems = document.querySelectorAll('.friends__card');
        console.log(num)
        console.log(cardItems.length)
        if(cardItems.length < num) {
            let cardBlock = document.querySelector('.friends__item');
            console.log(cardPre)
            console.log(cardOpen)
            for(let i = 0; i < num - cardItems.length; i++)
        {  console.log(cardOpen[i]); cardBlock.append(cardOpen[i].getObject())
           cardPre.push(cardOpen[i]);}
           counterLeft = 0;
           counterRight = 0;
           cardOpen = [];
           cardOpen = generateCardOpen(cards);
            }
           else {return;}
         
    }
    else if(width == 580) {
        let num = checkNum();
        let cardItems = document.querySelectorAll('.friends__card');
        console.log(num)
        console.log(cardItems.length)
        if(cardItems.length < num) {
            let cardBlock = document.querySelector('.friends__item');
            console.log(cardPre)
          
                for(let i = 0; i < num - cardItems.length; i++)
        {  console.log(cardOpen[i]); cardBlock.append(cardOpen[i].getObject())
           cardPre.push(cardOpen[i]);  
           
            }  cardOpen = [];
            counterLeft = 0;
           counterRight = 0;
            cardOpen = generateCardOpen(cards);
           return cardOpen;
        }
        else if(cardItems.length > num) {
        
            console.log(cardPre)
           cardPre = cardPre.slice(0, num);
           cardItems[cardItems.length-1].outerHTML = '';
           counterLeft = 0;
           counterRight = 0;
           cardOpen = [];
        cardOpen = generateCardOpen(cards);
        return cardOpen;
        } else {return}
         }
    
        else if(width == 270 ) {
            let num = checkNum();
            let cardItems = document.querySelectorAll('.friends__card');
            console.log(num)
        console.log(cardItems.length)
            if (cardItems.length > num) {
            
                console.log(cardPre)
               cardPre = cardPre.slice(0, num);
               cardItems[cardItems.length-1].outerHTML = '';
               counterLeft = 0;
           counterRight = 0;
               cardOpen = [];
               cardOpen = generateCardOpen(cards);
               return cardOpen;
              
            } else {return}
             }
     else {return}
    
} 
)

arrowBtnR.addEventListener('click', ()=>{
    console.log(arrowBtnR)
    moveLeft();
    
})

arrowBtnL.addEventListener('click', ()=>{
    console.log(arrowBtnL)
moveRight();


})
arrowBtnLTwo.addEventListener('click', ()=>{
    console.log(arrowBtnLTwo)
moveRight();


})
carusel.addEventListener('animationend', ()=>{
    let cardBlocks = document.querySelectorAll('.friends__item');
        if(carusel.classList.contains('transition-left')){
        carusel.classList.remove('transition-left');
         
        cardBlocks[0].innerHTML = cardBlocks[1].innerHTML;
        cardBlocks[1].outerHTML = ''
             counterLeft = 1; 
            counterRight = 0;  }
       
if(carusel.classList.contains('transition-right')){
    carusel.classList.remove('transition-right');
   
         cardBlocks[0].innerHTML;
        cardBlocks[1].outerHTML = ''
        counterLeft = 0; 
            counterRight = 1;
}
cardPrepend = cardPre.splice(0);
cardPre = cardOpen.splice(0);
cardOpen = generateCardOpen(cards);
console.log(cardPrepend)
console.log(cardPre);
console.log(cardOpen)
})


