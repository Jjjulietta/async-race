import { Field } from "./Field.js";

const body = document.querySelector('body');

const level = {Easy: { width: '10', heigth: '10'}, Medium: { width: '15', heigth: '15'}, Hard: { width: '25', heigth: '25'}};

/* ------------BUILD HTML HEADER--------------------*/

const header = document.createElement('header');
header.classList.add('header');
body.prepend(header);

const headerContainer = document.createElement('div');
headerContainer.classList.add('container');
header.prepend(headerContainer);

const headerBody = document.createElement('div');
headerBody.classList.add('header__body');
headerContainer.prepend(headerBody);

/* ---------------SELECT LEVEL------------- */

const selectBlock = document.createElement('div');
selectBlock.classList.add('header__game')
headerBody.append(selectBlock)
const select = document.createElement('select');
select.classList.add('header__select')
const type = ['Easy', 'Medium', 'Hard'];
for (let i = 0; i < type.length; i++) {
  let playType = document.createElement('option');
  playType.classList.add('header__option')
  playType.innerHTML = `${type[i]}`;
  playType.setAttribute('value', `${type[i]}`)
  select.append(playType);
}
selectBlock.append(select);

let playLevel = select.value;

/* ----------------SELECT BOMBS QUANTITY------- */

const form = document.createElement('form');
form.classList.add('header__form')
const label = document.createElement('label');
label.setAttribute('for', 'quantity');
label.innerHTML = 'enter num &#128163;';

form.append(label);
const inputBombsCount = document.createElement('input');
inputBombsCount.setAttribute('type', 'number');
inputBombsCount.setAttribute('value', '10');
inputBombsCount.setAttribute('min', '10');
inputBombsCount.setAttribute('max', '99');

inputBombsCount.classList.add('header__input');
form.append(inputBombsCount)
selectBlock.append(form);

/* -----------COUNT MINES------------------- */

const minesCount = document.createElement('div');
minesCount.classList.add('header__block')
const flag = document.createElement('span');
flag.classList.add('header__icon')
flag.innerHTML = '&#128681;';
minesCount.append(flag);

const bombCount = document.createElement('span');
bombCount.classList.add('mines__count')
bombCount.innerHTML = `${inputBombsCount.value}`;
let minesNumber = inputBombsCount.value;
minesCount.append(bombCount)

/* ------------TIMER--------------- */

const timeBlock = document.createElement('div');
timeBlock.classList.add('header__block');
const timeIcon = document.createElement('span');
timeIcon.innerHTML = '&#9201;'
timeIcon.classList.add('header__icon')
timeBlock.append(timeIcon)
const time = document.createElement('span');
time.classList.add('header__time');
timeBlock.append(time)
headerBody.append(timeBlock);

time.innerHTML = '0'.padStart(3, 0);
let counter = 0;
let timer;

/* ------------------COUNT CLICK--------------------- */

const countBlock = document.createElement('div');
countBlock.classList.add('header__block');
const countIcon = document.createElement('span');
countIcon.innerHTML = '&#128070;';
countBlock.append(countIcon);
countIcon.classList.add('header__icon')
const count = document.createElement('span');

count.classList.add('header__count');
countBlock.append(count);
headerBody.append(countBlock)

let countClick = 0;

count.innerHTML = `${countClick}`;

function clickCount() {
 let countClick = 0;
 return function(){
   return countClick +=1;
 }
}
 function showTime() {

 counter += 1;
 time.innerHTML = `${String(counter).padStart(3, 0)}`;

 }  
  
/* ---------------------SOUND--------------- */

const sound = document.createElement('div');
sound.innerHTML = '&#128265;'
sound.classList.add('header__sound');

/* --------------------THEME----------------------*/

const theme = document.createElement('form');
theme.classList.add('header__theme')
const labelTheme = document.createElement('label');
labelTheme.setAttribute('for', 'theme');
labelTheme.innerHTML = 'DARK theme';

theme.append(labelTheme);
const checkbox = document.createElement('input');
checkbox.classList.add('theme__check');
checkbox.setAttribute('type', 'checkbox');
theme.append(checkbox);

checkbox.addEventListener('click', ()=> {
  if (checkbox.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
})
/* ------------------BLOCK TIME COUNT MINES --------------- */

const counterBlock = document.createElement('div');
counterBlock.classList.add('header__counter');
selectBlock.after(counterBlock);
counterBlock.append(minesCount);
counterBlock.append(timeBlock);
counterBlock.append(countBlock);

/* ----------------------RESULTS----------------- */

const resultsBlock = document.createElement('div');
resultsBlock.classList.add('header__game');

const results = document.createElement('div');
results.classList.add('header__btn');
results.classList.add('results');
const buttonGame = document.createElement('div');

buttonGame.innerHTML = 'New game';
buttonGame.classList.add('header__btn');
buttonGame.classList.add('new__game');
resultsBlock.append(buttonGame);

resultsBlock.append(results);
counterBlock.after(resultsBlock);
results.innerHTML = 'RESULTS';

/* ----------------BUTTON NEW GAME---------------------*/

const manageGame = document.createElement('div');
manageGame.classList.add('header__game');

const saveGame = document.createElement('div');
saveGame.classList.add('header__btn');
saveGame.classList.add('save');
saveGame.innerHTML = 'Save game';
const continueGame = document.createElement('div');
continueGame.classList.add('header__btn');
continueGame.classList.add('continue');
continueGame.innerHTML = 'Continue game';
manageGame.append(saveGame);
manageGame.append(continueGame);

headerBody.append(manageGame);

const main = document.createElement('main');
const mainContainer = document.createElement('div');
header.after(main)
main.append(mainContainer);

/* ----------------------MENU---------------------- */

const menuBTN = document.createElement('div');
menuBTN.classList.add('header__btn');
menuBTN.classList.add('menu')
counterBlock.after(menuBTN);
menuBTN.innerHTML = 'menu';

const menu = document.createElement('div');
menu.classList.add('header__menu');
menu.append(resultsBlock);
menu.append(manageGame);
menu.append(theme);
menu.append(sound);
headerBody.append(menu);

menuBTN.addEventListener('click', ()=>{
 menu.classList.toggle('menu__open');
});

