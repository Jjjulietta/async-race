
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
    if(width < 1280 && width >= 660) {num = 6}
    if(width < 660 && width >= 320) {num = 3}
    return num;
}


function generateCardsObj(){
    let cards = [];
    console.log(data);
    data.forEach(item =>{cards.push(new Object(item))})
    console.log(cards);
return cards;
}

function generateCards(){
    let cards = generateCardsObj();
    let arr = [];
    for(let i = 0; i < cards.length; i +=3){
        let m = [];
        for(let n = i; n <= i+2; n ++){
         if(n > cards.length-1) {break}  
          m.push(cards[n])
        } 
        console.log(m)
        arr.push(m)
    }
         console.log(arr);
         return arr;
}
    
    
    

let cards = generateCards()

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    } return array;
  }

function generateCardRandom() {
    cards = generateCards();
    let array = [];
    let m =[]
    for(let item of cards) {
       m = shuffle(item)
      /* let m =[];
        
        for(let l = 0; l <= item.length; l++){
           let min = 0; let max = item.length-1; l = 0;
            let n = getRandom(min, max); 
            console.log(n);
            m.push(item[n])
            item.splice(n, 1)
        }
        console.log(m)*/
        array.push(m)
    }
     console.log(array)
         return array;
}

function generateObj() {
    let cards;
    let arr = [];
for(let j = 0; j <= 5 ; j++){
    cards = generateCardRandom();
    for(let item of cards){
       
        arr.push(item)
    }
}

console.log(arr)
return arr;
}


function cardsObj() {
    let num = checkNum();
    console.log(num);
    let cardsObj = generateObj()
    console.log(cardsObj)
    let a = []
   for(let item of cardsObj){
       a.push(...item)
   }
   console.log(a)
    let array = []
for(let i = 0; i < a.length; i+= num){
    let arr = []
    for(let j = i; j < i + num; j++) {
        arr.push(a[j])}
        array.push(arr)
  
} console.log(array); return array;
}

let cardObj = cardsObj();

function createList(){
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
    cardObj = cardsObj();
    console.log(cardObj)
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
   let num = checkNum();
   console.log(cardObj.length)
   console.log(48/num)
   if(cardObj.length < 48/num || cardObj.length > 48/num) {
    listNum.innerHTML = 1
    let a = []
   for(let item of cardObj){
       a.push(...item)
   }
   console.log(a)
    let array = []
for(let i = 0; i < a.length; i+= num){
    let arr = []
    for(let j = i; j < i + num; j++) {
        arr.push(a[j])}
        array.push(arr)
  
} 
console.log(array);
cardObj = array.slice(0);
cleanFriends()
let n = listNum.innerHTML - 1;
for(let item of cardObj[n]){
    friends.append(item.getObject())
}
if(!arrowLeftFirst.hasAttribute('disabled')){
    console.log(arrowLeftFirst.hasAttribute('disabled'))
    arrowLeftFirst.setAttribute('disabled', 'disabled')
}
if(!arrowLeft.hasAttribute('disabled')){
    console.log(arrowLeft.hasAttribute('disabled'))
    arrowLeft.setAttribute('disabled', 'disabled')
}
if(arrowRight.hasAttribute('disabled')){arrowRight.removeAttribute('disabled')}
    if(arrowRightFirst.hasAttribute('disabled')) {arrowRightFirst.removeAttribute('disabled')}
}

   
  
   else {return}
   })

arrowLeftFirst.addEventListener('click', ()=> {
    console.log(arrowLeftFirst)
    
    cleanFriends()
    listNum.innerHTML = 1;
    createList();
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
    console.log()
    cleanFriends()
    listNum.innerHTML = 48/num;
    createList(cardObj);
    arrowRight.setAttribute('disabled', 'disabled');
    arrowRightFirst.setAttribute('disabled', 'disabled');
    if(arrowLeft.hasAttribute('disabled')){arrowLeft.removeAttribute('disabled')}
    if(arrowLeftFirst.hasAttribute('disabled')) {arrowLeftFirst.removeAttribute('disabled')}
   
})

arrowRight.addEventListener('click', ()=>{
    let num = checkNum();
    
    console.log(listNum.innerHTML)
    if(listNum.innerHTML < 48/num) {
        listNum.innerHTML = + listNum.innerHTML + 1;
        console.log(listNum)
        cleanFriends();
        createList();

       
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
        createList();
        if(listNum.innerHTML == 1){
            arrowLeft.setAttribute('disabled', 'disabled');
            arrowLeftFirst.setAttribute('disabled', 'disabled');
        }
    }
    
    if(arrowRight.hasAttribute('disabled')){arrowRight.removeAttribute('disabled')}
    if(arrowRightFirst.hasAttribute('disabled')) {arrowRightFirst.removeAttribute('disabled')}
})

