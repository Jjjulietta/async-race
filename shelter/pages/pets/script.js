
import { Object } from "../main/Object.js";
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
/*---------------------PAGINATION---------------------------------*/
import data from '../main/data.js'

let friends = document.querySelector('.friends__pagination');
let arrowLeftFirst = document.querySelector('#arrow__left-first');
console.log(arrowLeftFirst);
console.log(arrowLeftFirst.hasAttribute('disabled'))
let arrowLeft = document.querySelector('#arrow__left')
let arrowRightFirst = document.querySelector('#arrow__right-first');
let arrowRight = document.querySelector('#arrow__right');
let listNum = document.querySelector('.friends__num');
let numRandom ;

function cleanFriends(){
    friends.innerHTML = '';
    return friends;
}

function getRandom(min, max) {
    return Math.floor(Math.random()*(max - min +1)) + min
}
numRandom = getRandom();
function checkNum(){
    let width =  document.documentElement.clientWidth;
    console.log(width);
    let num;
    if(width >= 1280) {num = 8}
    if(width < 1280 && width >= 768) {num = 6}
    if(width <768 && width >= 320) {num = 3}
    return num;
}


function generateCards(){
    let cards = [];
    console.log(data);
    data.forEach(item =>{cards.push(new Object(item))})
    console.log(cards);
    return cards;

}
let cards = generateCards();

let cardsObj = ()=> {
    let num = checkNum();
    let array = []
for(let i = 0; i < 48/num; i++){
    let cards = generateCards();
    let arr = [];
    array.push(arr);
      for(let j = 0; j <= cards.length; j++) {
        let min = 0; let max = cards.length-1; j = 0;
        let n = getRandom(min, max);
        arr.push(cards[n])
        cards.splice(n, 1)
    }
} return array;
}
let cardObj = cardsObj();

let createList =(cardObj)=>{
    console.log(cardObj)
       if(cardObj){
        let i = listNum.innerHTML -1;
        console.log(i)
        for(let item of cardObj[i]){
            friends.append(item.getObject())
        }
        return friends;
    } 
    
}

window.addEventListener('load', ()=> {
    cleanFriends();
    
    listNum.innerHTML = 1;
    createList(cardObj);
    if(!arrowLeftFirst.hasAttribute('disabled')){
        console.log(arrowLeftFirst.hasAttribute('disabled'))
        arrowLeftFirst.getAttribute('disabled')
    }
    if(!arrowLeft.hasAttribute('disabled')){
        console.log(arrowLeft.hasAttribute('disabled'))
        arrowLeft.getAttribute('disabled')
    }

})

window.addEventListener('resize', ()=>{
    cleanFriends();
    listNum.innerHTML = 1;
    createList(cardObj);
    if(!arrowLeftFirst.hasAttribute('disabled')){
        console.log(arrowLeftFirst.hasAttribute('disabled'))
        arrowLeftFirst.getAttribute('disabled')
    }
    if(!arrowLeft.hasAttribute('disabled')){
        console.log(arrowLeft.hasAttribute('disabled'))
        arrowLeft.getAttribute('disabled')
    }
})

arrowLeftFirst.addEventListener('click', ()=> {
    console.log(arrowLeftFirst)
    
    cleanFriends()
    listNum.innerHTML = 1;
    createList(cardObj);
    arrowLeft.setAttribute('disabled', 'disabled');
    arrowLeftFirst.setAttribute('disabled', 'disabled');
    console.log(arrowLeft.hasAttribute('disabled'));
    console.log(createList);
    if(arrowRight.hasAttribute('disabled')){arrowRight.removeAttribute('disabled')}
    if(arrowRightFirst.hasAttribute('disabled')) {arrowRightFirst.removeAttribute('disabled')}
})

arrowRightFirst.addEventListener('click', ()=> {
    console.log(arrowRightFirst)
    let num = checkNum();
    console.log(cardObj)
    cleanFriends()
    listNum.innerHTML = 48/num;
    createList(cardObj);
    arrowRight.setAttribute('disabled', 'disabled');
    arrowRightFirst.setAttribute('disabled', 'disabled');
    if(arrowLeft.hasAttribute('disabled')){arrowLeft.removeAttribute('disabled')}
    if(arrowLeftFirst.hasAttribute('disabled')) {arrowLeftFirst.removeAttribute('disabled')}
    console.log(createList)
})

arrowRight.addEventListener('click', ()=>{
    let num = checkNum();
    
    console.log(listNum.innerHTML)
    if(listNum.innerHTML < 48/num) {
        listNum.innerHTML = + listNum.innerHTML + 1;
        console.log(listNum)
        cleanFriends();
        createList(cardObj);

        console.log(createList);
        if(listNum.innerHTML == 48/num){
            console.log(listNum.innerHTML)
            arrowRight.setAttribute('disabled', 'disabled');
            arrowRightFirst.setAttribute('disabled', 'disabled');
        }
    }
    
    if(arrowLeft.hasAttribute('disabled')){arrowLeft.removeAttribute('disabled')}
    if(arrowLeftFirst.hasAttribute('disabled')) {arrowLeftFirst.removeAttribute('disabled')}
})

arrowLeft.addEventListener('click', ()=>{
    let num = checkNum();
    console.log(listNum.innerHTML)
    if(listNum.innerHTML <= 48/num) {
        listNum.innerHTML = + listNum.innerHTML - 1;
        console.log(listNum)
        cleanFriends();
        createList(cardObj);

        console.log(createList);
        if(listNum.innerHTML == 1){
            arrowLeft.setAttribute('disabled', 'disabled');
            arrowLeftFirst.setAttribute('disabled', 'disabled');
        }
    }
    
    if(arrowRight.hasAttribute('disabled')){arrowRight.removeAttribute('disabled')}
    if(arrowRightFirst.hasAttribute('disabled')) {arrowRightFirst.removeAttribute('disabled')}
})