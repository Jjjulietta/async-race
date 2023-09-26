import Field from './Field.js';

const body = document.querySelector('body');

const level = { Easy: { width: '10', heigth: '10' }, Medium: { width: '15', heigth: '15' }, Hard: { width: '25', heigth: '25' } };

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
selectBlock.classList.add('header__game');
headerBody.append(selectBlock);
const select = document.createElement('select');
select.classList.add('header__select');
const type = ['Easy', 'Medium', 'Hard'];
for (let i = 0; i < type.length; i += 1) {
  const playType = document.createElement('option');
  playType.classList.add('header__option');
  playType.innerHTML = `${type[i]}`;
  playType.setAttribute('value', `${type[i]}`);
  select.append(playType);
}
selectBlock.append(select);

let playLevel = select.value;

/* ----------------SELECT BOMBS QUANTITY------- */

const form = document.createElement('form');
form.classList.add('header__form');
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
form.append(inputBombsCount);
selectBlock.append(form);

/* -----------COUNT MINES------------------- */

const minesCount = document.createElement('div');
minesCount.classList.add('header__block');
const flag = document.createElement('span');
flag.classList.add('header__icon');
flag.innerHTML = '&#128681;';
minesCount.append(flag);
const flagCount = document.createElement('span');
flagCount.classList.add('mines__count');
flagCount.innerHTML = `${inputBombsCount.value}`;
let flagNumber = inputBombsCount.value;
minesCount.append(flagCount);
const mine = document.createElement('span');
mine.classList.add('header__icon');
mine.innerHTML = '&#128163;';
minesCount.append(mine);
const bombCount = document.createElement('span');
bombCount.classList.add('mines__count');
bombCount.innerHTML = `${inputBombsCount.value}`;
let minesNumber = inputBombsCount.value;
minesCount.append(bombCount);

/* ------------TIMER--------------- */

const timeBlock = document.createElement('div');
timeBlock.classList.add('header__block');
const timeIcon = document.createElement('span');
timeIcon.innerHTML = '&#9201;';
timeIcon.classList.add('header__icon');
timeBlock.append(timeIcon);
const time = document.createElement('span');
time.classList.add('header__time');
timeBlock.append(time);
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
countIcon.classList.add('header__icon');
const count = document.createElement('span');

count.classList.add('header__count');
countBlock.append(count);
headerBody.append(countBlock);

let countClick = 0;

count.innerHTML = `${countClick}`;

function clickCount() {
  let countClick = 0;
  return function () {
    return countClick += 1;
  };
}
function showTime() {
  counter += 1;
  time.innerHTML = `${String(counter).padStart(3, 0)}`;
}

/* ---------------------SOUND--------------- */

const themeBlock = document.createElement('div');
themeBlock.classList.add('header__game');

const sound = document.createElement('div');
sound.innerHTML = '&#128265;';
sound.classList.add('header__sound');

/* --------------------THEME----------------------*/

const theme = document.createElement('form');
theme.classList.add('header__theme');
const labelTheme = document.createElement('label');
labelTheme.setAttribute('for', 'theme');
labelTheme.innerHTML = 'DARK theme';

theme.append(labelTheme);
const checkbox = document.createElement('input');
checkbox.classList.add('theme__check');
checkbox.setAttribute('type', 'checkbox');
theme.append(checkbox);

checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});

themeBlock.append(theme);
themeBlock.append(sound);
/* ---------------AUDIO------------------------------- */

let music = new Audio();

function playMusic(src) {
  music.pause();
  music = new Audio(src);
  music.volume = 0.5;
  music.play();
}

sound.addEventListener('click', () => {
  music.muted = !music.muted;
  if (music.muted) {
    sound.innerHTML = '&#128263;';
    sound.classList.add('close');
  } else {
    sound.innerHTML = '&#128265;';
    sound.classList.remove('close');
  }
});

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
header.after(main);
main.append(mainContainer);

/* ----------------------MENU---------------------- */

const menuBTN = document.createElement('div');
menuBTN.classList.add('header__btn');
menuBTN.classList.add('menu');
counterBlock.after(menuBTN);
menuBTN.innerHTML = 'menu';

const menu = document.createElement('div');
menu.classList.add('header__menu');
menu.append(resultsBlock);
menu.append(manageGame);
menu.append(themeBlock);

headerBody.append(menu);

menuBTN.addEventListener('click', () => {
  menu.classList.toggle('menu__open');
});

/* ---------------------POPAP-------------------- */

const popap = document.createElement('div');
popap.classList.add('popap');
const popapBody = document.createElement('div');
popapBody.classList.add('popap__body');
const popapWin = document.createElement('div');
popapWin.classList.add('popap__win');
popapWin.innerHTML = `Hooray! You found all mines in ${counter} seconds and ${count.innerHTML} moves!`;
const popapFall = document.createElement('div');
popapFall.classList.add('popap__fall');
popapFall.innerHTML = 'Game over. Try again';
const popapResults = document.createElement('div');
const popapTitle = document.createElement('h3');
popapResults.prepend(popapTitle);
popapTitle.innerHTML = 'RESULTS';
const table = document.createElement('table');
table.classList.add('popap__table');
let numCol = 2;
let numRow = 11;
for (let i = 0; i < numRow; i += 1) {
  let tr = document.createElement('tr');
  table.append(tr);
  for (let j = 0; j < numCol; j += 1) {
    if (i === 0) {
      let th = document.createElement('th');
      tr.append(th);
    } else {
      let td = document.createElement('td');
      tr.append(td);
    }
  }
}

popapResults.append(table);

popapResults.classList.add('popap__results');
popap.append(popapBody);
popapBody.append(popapWin);
popapBody.append(popapFall);
popapBody.append(popapResults);
body.append(popap);

const th = document.querySelectorAll('th');
th[0].innerHTML = 'level';
th[1].innerHTML = 'time game';

const popapGreeting = document.createElement('div');
popapGreeting.classList.add('popap__greeting');
popapGreeting.innerHTML = 'Play Minesweeper!';
popapBody.prepend(popapGreeting);

function greeting() {
  popap.classList.add('popap__open');
  popapGreeting.classList.add('popap__open');
}
popapGreeting.addEventListener('click', (event) => {
  let target = event.target;
  if (!target.classList.contains('popap__greeting')) return;
  let src = './sounds/lose_flowergarden_short.wav';
  playMusic(src);
  if (sound.classList.contains('close')) {
    music.muted = true;
  }
  popap.classList.remove('popap__open');
  popapGreeting.classList.remove('popap__open');
});

/* ------------------------SAVE WIN------------------------ */

let resultsArr = [];

function setLocalStorageRes() {
  localStorage.setItem('resultsArr', JSON.stringify(resultsArr));
}

function getLocalStorageRes() {
  if (localStorage.getItem('resultsArr')) {
    resultsArr = JSON.parse(localStorage.getItem('resultsArr'));
  }
}

results.addEventListener('click', () => {
  getLocalStorageRes();
  let tr = document.querySelectorAll('tr');
  [...tr].forEach((item, index) => {
    if (item.firstChild.tagName === 'TD') {
      if (!resultsArr[index - 1]) { item.firstChild.innerHTML = '-'; } else {
        item.firstChild.innerHTML = resultsArr[index - 1][0];
      }
    }
    if (item.lastChild.tagName === 'TD') {
      if (!resultsArr[index - 1]) { item.lastChild.innerHTML = '-'; } else {
        item.lastChild.innerHTML = resultsArr[index - 1][1];
      }
    }
  });
  popap.classList.add('popap__open');
  popapResults.classList.add('popap__open');
});

popap.addEventListener('click', () => {
  popap.classList.remove('popap__open');
  popapResults.classList.remove('popap__open');
});

/* ---------------------END-------------------------- */

/* ---------------------DEFAULT FIELD---------------------------------- */

let widthField = level[`${playLevel}`].width;
let heigthField = level[`${playLevel}`].heigth;
let field = new Field(widthField, heigthField);
let fieldLevel = field.openBasic();
fieldLevel.classList.add('basic-field');
mainContainer.append(fieldLevel);
let buttons = document.querySelectorAll('button');
buttons.forEach((item) => item.classList.add('button__basic'));

let mines = field.getMines(minesNumber);

inputBombsCount.addEventListener('change', () => {
// console.log(inputBombsCount.value)
  bombCount.innerHTML = `${inputBombsCount.value}`;
  minesNumber = bombCount.innerHTML;
  flagCount.innerHTML = `${inputBombsCount.value}`;
  flagNumber = flagCount.innerHTML;
  mines = field.getMines(minesNumber);
});

/* ---------default----- func OPEN EL, CHECK FIELD, CHECK MINES-------------------- */

function openElement(indexButton) {
  // console.log(indexButton);
  // console.log(mines);
  // console.log(field);
  buttons = document.querySelectorAll('button');
  // let indexButton = [...buttons].indexOf(target);
  if (field.noValid(indexButton)) { return; }
  let value = buttons[indexButton];

  if (mines.includes(indexButton)) {
    fallGame(buttons, value);
    return;
  }
  if (value.disabled === true) return;
  value.disabled = true;

  if (field.getNumber(indexButton, mines) !== 0) {
    checkNumber(field.getNumber(indexButton, mines), value);
    value.innerHTML = `${field.getNumber(indexButton, mines)}`;
    value.disabled = true;

    return;
  }

  let numbers = field.openNeighbour(indexButton, mines);
  // console.log(numbers);
  for (let i = 0; i < numbers.length; i += 1) {
    openElement(numbers[i], mines, field);
  }
}

function checkMines(indexButton) {
  mines = field.getMines(minesNumber);
  if (mines.includes(indexButton)) {
    // console.log(mines);
    checkMines(indexButton);
  }
  return mines;
}

function checkNumber(number, value) {
  if (number === 1) {
    value.classList.add('one');
  }
  if (number === 2) {
    value.classList.add('two');
  }
  if (number === 3) {
    value.classList.add('three');
  }
  if (number === 4) {
    value.classList.add('four');
  }
  if (number === 5) {
    value.classList.add('five');
  }
  if (number === 6) {
    value.classList.add('six');
  }
  if (number === 7) {
    value.classList.add('seven');
  }
  if (number === 8) {
    value.classList.add('eigth');
  }
}

function checkEmpty(buttons, mines) {
// console.log(buttons);
  let emptyButtons = [...buttons].filter((item, index) => {
    if (!mines.includes(index)) { return item; } });
  // console.log(emptyButtons);
  if (emptyButtons.every((item) => item.disabled === true)) {
    return true;
  }
}

function clickField(event) {
  let { target } = event;
  if (target.tagName !== 'BUTTON') { return; }
  let src = './sounds/click.wav';
  playMusic(src);
  if (sound.classList.contains('close')) {
    music.muted = true;
  }
  buttons = document.querySelectorAll('button');

  let indexButton = [...buttons].indexOf(target);
  if (countClick !== 0) {
    count.innerHTML = `${countClick()}`; openElement(indexButton);
  } else {
    popap.classList.remove('popap__move');
    popapFall.classList.remove('popap__move');
    popapWin.classList.remove('popap__move');
    countClick = clickCount();
    window.timer = window.setInterval(showTime, 1000);
    count.innerHTML = `${countClick()}`;
    if (mines.includes(indexButton)) {
      // console.log(mines.includes(indexButton));
      mines = checkMines(indexButton);
      // console.log(mines);
    } mines = mines;

    openElement(indexButton);
  }
  if (checkEmpty(buttons, mines)) {
    winGame();
  }
}

function winGame() {
  getLocalStorageRes();
  let winArr = [];
  winArr.push(select.value);
  winArr.push(time.innerHTML);
  resultsArr.push(winArr);
  if (resultsArr.length > 10) { resultsArr.splice(0, 1); }
  // resultObj[time.innerHTML] = select.value;
  setLocalStorageRes();
  popapWin.innerHTML = `Hooray! You found all mines in ${counter} seconds and ${count.innerHTML} moves!`;
  let src = './sounds/win.wav';
  playMusic(src);
  if (sound.classList.contains('close')) {
    music.muted = true;
  }
  popap.classList.add('popap__move');
  popapWin.classList.add('popap__move');
  window.clearInterval(window.timer);
  time.innerHTML = '0'.padStart(3, 0);
  count.innerHTML = '0';

  return resultsArr;
}

function fallGame(buttons, value) {
  window.clearInterval(window.timer); value.innerHTML = '&#128165;';
  mines.forEach((item) => { buttons[item].innerHTML = '&#128165;'; });
  /* [...buttons].forEach((item) => { item.disabled = true; }); */ time.innerHTML = '0'.padStart(3, 0);
  let src = './sounds/lose_minesweeper.wav';
  playMusic(src);
  if (sound.classList.contains('close')) {
    music.muted = true;
  }
  popap.classList.add('popap__move');
  popapFall.classList.add('popap__move');
}

function changeLevel(fieldLevel, buttons) {
  popap.classList.remove('popap__move');
  popapFall.classList.remove('popap__move');
  popapWin.classList.remove('popap__move');
  fieldLevel.classList.remove('basic-field');
  fieldLevel.classList.remove('medium-field');
  fieldLevel.classList.remove('hard-field');
  buttons.forEach((item) => item.classList.remove('button__basic'));
  buttons.forEach((item) => item.classList.remove('button__medium'));
  buttons.forEach((item) => item.classList.remove('button__hard'));

  if (playLevel === 'Easy') {
    fieldLevel.classList.add('basic-field');
    buttons.forEach((item) => item.classList.add('button__basic'));
  }
  if (playLevel === 'Medium') {
    fieldLevel.classList.add('medium-field');
    buttons.forEach((item) => item.classList.add('button__medium'));
  }
  if (playLevel === 'Hard') {
    fieldLevel.classList.add('hard-field');
    buttons.forEach((item) => item.classList.add('button__hard'));
  }
}

function markMine(event) {
  // console.log(flagNumber);
  let { target } = event;
  if (target.tagName !== 'BUTTON') { return; }
  event.preventDefault();
  if (target.disabled === true) { return; }
  let indexButton = [...buttons].indexOf(target);
  if (flagNumber === 0) { return; }
  if (mines.includes(indexButton)) {
    // console.log(minesNumber);
    minesNumber -= 1;
    bombCount.innerHTML = minesNumber;
  }
  let src = './sounds/start.wav';
  playMusic(src);
  if (sound.classList.contains('close')) {
    music.muted = true;
  }
  flagNumber -= 1;
  flagCount.innerHTML = flagNumber;
  target.disabled = true;
  target.innerHTML = '&#128681;';
}

/* -------------- default EVENTS  ------------------- */

fieldLevel.addEventListener('click', (event) => {
  // console.log(fieldLevel);

  clickField(event);
});

fieldLevel.addEventListener('contextmenu', (event) => {
  markMine(event);
});

/* --------------------SELECT LEVEL ---------------------- */

select.addEventListener('change', () => {
  playLevel = '';
  playLevel = select.value;
  // console.log(playLevel);
  widthField = level[`${playLevel}`].width;
  heigthField = level[`${playLevel}`].heigth;
  field = new Field(widthField, heigthField);

  fieldLevel = field.openBasic();
  // console.log(fieldLevel)
  mainContainer.textContent = '';
  mainContainer.append(fieldLevel);
  buttons = document.querySelectorAll('button');
  // console.log(buttons);
  changeLevel(fieldLevel, buttons);

  mainContainer.append(fieldLevel);
  bombCount.innerHTML = `${inputBombsCount.value}`;
  minesNumber = bombCount.innerHTML;
  flagCount.innerHTML = `${inputBombsCount.value}`;
  flagNumber = flagCount.innerHTML;
  mines = field.getMines(minesNumber);
  window.clearInterval(window.timer);
  time.innerHTML = '0'.padStart(3, 0);
  counter = 0;
  countClick = 0;

  count.innerHTML = `${countClick}`;

  fieldLevel.addEventListener('click', (event) => {
    clickFieldSelect(event);
  });

  fieldLevel.addEventListener('contextmenu', (event) => {
    markMine(event);
  });
});

function elemenField(indexButton, mines, field) {
  buttons = document.querySelectorAll('button');
  // let indexButton = [...buttons].indexOf(target);
  if (field.noValid(indexButton)) { return; }
  let value = buttons[indexButton];

  if (mines.includes(indexButton)) {
    fallGame(buttons, value); return;
  }
  if (value.disabled === true) return;
  value.disabled = true;

  if (field.getNumber(indexButton, mines) !== 0) {
    checkNumber(field.getNumber(indexButton, mines), value);
    value.innerHTML = `${field.getNumber(indexButton, mines)}`;

    value.disabled = true;

    return;
  }
  let numbers = field.openNeighbour(indexButton, mines);
  // console.log(numbers);
  for (let i = 0; i < numbers.length; i += 1) {
    elemenField(numbers[i], mines, field);
  }
}

function checkMinesLevel(indexButton, field) {
  mines = field.getMines(minesNumber);
  if (mines.includes(indexButton)) {
    //  console.log(mines);
    checkMinesLevel(indexButton, field);
  }
  return mines;
}

function clickFieldSelect(event) {
  let { target } = event;
  if (target.tagName !== 'BUTTON') { return; }
  let src = './sounds/click.wav';
  playMusic(src);
  if (sound.classList.contains('close')) {
    music.muted = true;
  }
  buttons = document.querySelectorAll('button');
  // console.log(buttons);

  let indexButton = [...buttons].indexOf(target);
  if (countClick !== 0) {
    count.innerHTML = `${countClick()}`;
    elemenField(indexButton, mines, field);
  } else {
    countClick = clickCount();
    window.timer = window.setInterval(showTime, 1000);
    count.innerHTML = `${countClick()}`;
    if (mines.includes(indexButton)) {
      mines = checkMinesLevel(indexButton, field);
    } mines = mines;
    elemenField(indexButton, mines, field);
  } if (checkEmpty(buttons, mines)) {
    winGame();
  }
}

/* ----------------------SAVE GAME------------------------- */

let savedGame = {};

function setLocalStorageObj() {
  localStorage.setItem('savedGame', JSON.stringify(savedGame));
}

function getLocalStorageObj() {
  if (localStorage.getItem('savedGame')) {
    savedGame = JSON.parse(localStorage.getItem('savedGame'));
  }
}

function save() {
  buttons = document.querySelectorAll('button');
  let obj = {};
  obj.playType = select.value;
  obj.flagNumber = flagCount.innerHTML;
  obj.minesCount = bombCount.innerHTML;
  obj.minesNumber = inputBombsCount.value;
  obj.timeGame = time.innerHTML;
  obj.countGame = count.innerHTML;
  obj.minesIndex = mines.slice(0);
  [...buttons].forEach((item, index) => { if (item.hasAttribute('disabled')) { obj[index] = item.innerHTML; } });
  // console.log(obj);
  return obj;
}

saveGame.addEventListener('click', () => {
  savedGame = save();
  setLocalStorageObj(savedGame);
});

continueGame.addEventListener('click', () => {
  getLocalStorageObj();
  playLevel = savedGame.playType;
  select.value = savedGame.playType;
  inputBombsCount.value = savedGame.minesNumber;
  flagCount.innerHTML = savedGame.flagNumber;
  bombCount.innerHTML = savedGame.minesCount;
  minesNumber = bombCount.innerHTML;
  flagNumber = flagCount.innerHTML;
  // count.innerHTML = savedGame.countGame;

  time.innerHTML = savedGame.timeGame;
  counter = +time.innerHTML;
  mines = savedGame.minesIndex.slice(0);
  widthField = level[`${playLevel}`].width;
  heigthField = level[`${playLevel}`].heigth;
  field = new Field(widthField, heigthField);
  // fieldLevel.textContent = '';
  fieldLevel = field.openBasic();
  // console.log(fieldLevel);
  mainContainer.textContent = '';
  mainContainer.append(fieldLevel);
  buttons = document.querySelectorAll('button');
  changeLevel(fieldLevel, buttons);
  let keys = Object.keys(savedGame);
  // console.log(keys);
  [...buttons].forEach((item, index) => {
    for (let key of keys) {
      if (index == key) { item.innerHTML = `${savedGame[key]}`; item.disabled = true; }
    }
  });

  fieldLevel.addEventListener('click', (event) => {
    clickFieldSelect(event);
  });
  fieldLevel.addEventListener('contextmenu', (event) => {
    markMine(event);
  });
});

/* --------------------------NEW GAME------------------- */

buttonGame.addEventListener('click', () => {
  let src = './sounds/lose_flowergarden_short.wav';
  playMusic(src);
  if (sound.classList.contains('close')) {
    music.muted = true;
  }
  playLevel = select.value;
  //  console.log(playLevel)
  widthField = level[`${playLevel}`].width;
  heigthField = level[`${playLevel}`].heigth;
  field = new Field(widthField, heigthField);
  // fieldLevel.textContent = '';
  let fieldLevel = field.openBasic();
  // console.log(fieldLevel)
  mainContainer.textContent = '';
  mainContainer.append(fieldLevel);
  let buttons = document.querySelectorAll('button');
  changeLevel(fieldLevel, buttons);
  bombCount.innerHTML = `${inputBombsCount.value}`;
  minesNumber = bombCount.innerHTML;
  flagCount.innerHTML = `${inputBombsCount.value}`;
  flagNumber = flagCount.innerHTML;
  mines = field.getMines(minesNumber);
  // console.log(mines)
  window.clearInterval(window.timer);
  time.innerHTML = '0'.padStart(3, 0);
  counter = 0;
  countClick = 0;

  count.innerHTML = `${countClick}`;

  fieldLevel.addEventListener('click', (event) => {
    clickFieldSelect(event);
  });

  fieldLevel.addEventListener('contextmenu', (event) => {
    markMine(event);
  });
});

/* --------------------------------------------- */



window.addEventListener('beforeunload', () => {
  setLocalStorageObj();
  setLocalStorageRes();
});

window.addEventListener('load', () => {
  greeting();
  getLocalStorageObj();
  getLocalStorageRes();
});
