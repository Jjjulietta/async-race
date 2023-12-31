import './style.css';
import { BlockOne } from './components/blockOne';
import { BlockEditor } from './components/blockEditor';
import { LevelBlock } from './components/blockLevel';
import { Level } from './components/Level';
import { TableGenerator } from './components/TableGenerator';
import {
  plate, orange, apple, doily, carrot, arrTabEl,
} from './components/data';

const body: HTMLBodyElement | null = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
if (body) body.append(container);
const mainBlock = document.createElement('section');
mainBlock.classList.add('mainblock');
container.append(mainBlock);
const levelBlock = document.createElement('section');
levelBlock.classList.add('level-block');
container.append(levelBlock);
const header = BlockOne.createHeader();
mainBlock.append(header);
const title = BlockOne.createTitle();
mainBlock.append(title);
const help = BlockOne.createHelp();
const tableWrapper = BlockOne.createTable();
mainBlock.append(tableWrapper);
const tablecloth = BlockOne.createTableGame();
const tableTab = BlockOne.createTableTab();
// tableWrapper.append(tableTab);
if (tableWrapper.firstChild && tableWrapper.firstChild instanceof HTMLElement) {
  tableWrapper.firstChild.append(tableTab);
  tableWrapper.firstChild.append(tablecloth);
}

const editor = BlockEditor.createEditor();
mainBlock.append(editor);
const editorBlockCSS = BlockEditor.createBlockEditor();
const editorBlockHTML = BlockEditor.createBlockEditor();
editor.append(editorBlockCSS);
editor.append(editorBlockHTML);
const headerBlockCSS = BlockEditor.createHeaderEditor();
if (headerBlockCSS.firstChild && headerBlockCSS.firstChild instanceof HTMLElement) {
  headerBlockCSS.firstChild.innerHTML = 'CSS Editor';
}
if (headerBlockCSS.lastChild && headerBlockCSS.lastChild instanceof HTMLElement) {
  headerBlockCSS.lastChild.innerHTML = 'style.css';
}

const headerBlockHTML = BlockEditor.createHeaderEditor();
if (headerBlockHTML.firstChild && headerBlockHTML.firstChild instanceof HTMLElement) {
  headerBlockHTML.firstChild.innerHTML = 'HTML Viewer';
}
if (headerBlockHTML.lastChild && headerBlockHTML.lastChild instanceof HTMLElement) {
  headerBlockHTML.lastChild.innerHTML = 'table.html';
}

editorBlockCSS.append(headerBlockCSS);
editorBlockHTML.append(headerBlockHTML);
const winowCss = BlockEditor.createWindowBlock();
const lineBlockCss = BlockEditor.createLineBlock();
winowCss.append(lineBlockCss);
editorBlockCSS.append(winowCss);
const windowMainCss = BlockEditor.createMainWindow();
winowCss.append(windowMainCss);
const inputBlock = document.createElement('div');
inputBlock.classList.add('input-block');
const input = BlockEditor.createInput();
const button = BlockEditor.createButton();
inputBlock.append(input);
windowMainCss.append(inputBlock);
inputBlock.append(button);
windowMainCss.append(help);

const windowHtML = BlockEditor.createWindowBlock();
windowHtML.classList.add('window-html');
const lineBlockHTML = BlockEditor.createLineBlock();
windowHtML.append(lineBlockHTML);
const windowMainHTML = BlockEditor.createMainWindow();
windowHtML.append(windowMainHTML);
editorBlockHTML.append(windowHtML);
const footer = BlockOne.createFooter();
mainBlock.append(footer);

const blockLevel = LevelBlock.createLevelBlock();
levelBlock.append(blockLevel);
const headerLevel = LevelBlock.createLevelHeader();
blockLevel.append(headerLevel);
let i = 10;
while (i > 0) {
  const levelContainer = document.createElement('div');
  levelContainer.classList.add('level-container');
  const levelMark = LevelBlock.createMark();
  levelContainer.append(levelMark);
  const levelNumber = LevelBlock.createLevel();
  levelNumber.innerHTML = `${i}`;
  levelContainer.append(levelNumber);
  headerLevel.after(levelContainer);
  i -= 1;
}
const buttonReset = LevelBlock.createButton();
levelBlock.append(buttonReset);

const popap = BlockOne.createPopap();
body?.append(popap);

const level = new Level();
const table = new TableGenerator();

// eslint-disable-next-line consistent-return, max-lines-per-function
levelBlock.addEventListener('click', (e) => {
  if (e.target && e.target instanceof HTMLDivElement) {
    if (e.target.closest('.level-container')) {
      input.value = '';
      const actives = document.querySelectorAll('.active');
      if (actives) { actives.forEach((item) => item.classList.remove('active')); }
      e.target.classList.add('active');
      e.target.previousElementSibling?.classList.add('active');
      const num = e.target.innerHTML;
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      setLocaleStorage(num);
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      checkLevel(num);
    }
  }
});

table.table.addEventListener('mouseover', (e) => {
  if (e.target instanceof HTMLElement && !e.target.classList.contains('table-gen')) {
    e.target.classList.add('hovered');
    const dataName = e.target.getAttribute('data-hovered');
    // eslint-disable-next-line no-template-curly-in-string
    const elHover = document.querySelector(`div[data-hovered=${dataName}]`);
    elHover?.classList.add('active');
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    createTooltip(e.target);
  }
});

table.table.addEventListener('mouseout', (e) => {
  if (e.target instanceof HTMLElement) {
    e.target.classList.remove('hovered');
    const dataName = e.target.getAttribute('data-hovered');
    // eslint-disable-next-line no-template-curly-in-string
    const elHover = document.querySelector(`div[data-hovered=${dataName}]`);
    elHover?.classList.remove('active');
    // console.log(e.target.firstElementChild);
    if (e.target.firstElementChild && e.target.firstElementChild.classList.contains('tooltip')) {
      e.target.firstElementChild.outerHTML = '';
    }
  }
});

windowMainHTML.addEventListener('mouseover', (e) => {
  if (e.target instanceof HTMLElement && !e.target.classList.contains('window-main')
   && !e.target.classList.contains('table-div')) {
    const dataName = e.target.getAttribute('data-hovered');
    e.target.classList.add('active');
    const elHover = tablecloth.querySelector(`[data-hovered=${dataName}]`);
    elHover?.classList.add('hovered');
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    if (elHover && elHover instanceof HTMLElement) createTooltip(elHover);
  }
});

windowMainHTML.addEventListener('mouseout', (e) => {
  if (e.target instanceof HTMLElement) {
    e.target.classList.remove('active');
    const dataName = e.target.getAttribute('data-hovered');
    const elHover = document.querySelector(`[data-hovered=${dataName}]`);
    elHover?.classList.remove('hovered');
    if (elHover?.firstElementChild && elHover.firstElementChild.classList.contains('tooltip')) {
      elHover.firstElementChild.outerHTML = '';
    }
  }
});

// eslint-disable-next-line @typescript-eslint/no-use-before-define
buttonReset.addEventListener('click', reset);

buttonReset.addEventListener('mousedown', () => {
  buttonReset.classList.add('click');
});

buttonReset.addEventListener('mouseup', () => {
  buttonReset.classList.remove('click');
});

function reset():void {
  const activesLevel = levelBlock.querySelectorAll('.passed');
  const activeEl = document.querySelectorAll('.active');
  const helps = levelBlock.querySelectorAll('.help');
  // eslint-disable-next-line no-return-assign, no-param-reassign
  helps?.forEach((item) => item.outerHTML = '');
  activeEl?.forEach((item) => item.classList.remove('active'));
  activesLevel.forEach((item) => {
    item.classList.remove('passed');
  });
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  checkLevel('1');
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  setLocaleStorage('1');
  headerLevel.nextElementSibling?.firstElementChild?.classList.add('active');
  headerLevel.nextElementSibling?.lastElementChild?.classList.add('active');
}

function createTooltip(element: HTMLElement): void {
  const idName = element.getAttribute('id');
  const tagName = element.tagName.toLocaleLowerCase();
  const tooltip = document.createElement('span');
  tooltip.classList.add('tooltip');
  element.prepend(tooltip);
  if (tagName === plate.name) {
    if (element.classList.contains('small')) { tooltip.textContent = `${plate.nameClass}${plate.tagClosed}`; } else
    if (idName) { tooltip.textContent = `${plate.id}${plate.tagClosed}`; } else { tooltip.textContent = `${plate.tag}`; }
  }
  if (tagName === orange.name) {
    if (element.classList.contains('small')) { tooltip.textContent = `${orange.nameClass}${orange.tagClosed}`; } else
    if (idName) { tooltip.textContent = `${orange.id}${orange.tagClosed}`; } else { tooltip.textContent = `${orange.tag}`; }
  }
  if (tagName === apple.name) {
    if (element.classList.contains('small')) { tooltip.textContent = `${apple.nameClass}${apple.tagClosed}`; } else
    if (idName) { tooltip.textContent = `${apple.id}${apple.tagClosed}`; } else { tooltip.textContent = `${apple.tag}`; }
  }
  if (tagName === doily.name) {
    if (element.classList.contains('small')) { tooltip.textContent = `${doily.nameClass}${doily.tagClosed}`; } else
    if (idName) { tooltip.textContent = `${doily.id}${doily.tagClosed}`; } else { tooltip.textContent = `${doily.tag}`; }
  }
  if (tagName === carrot.name) {
    if (element.classList.contains('small')) { tooltip.textContent = `${carrot.nameClass}${carrot.tagClosed}`; } else
    if (idName) { tooltip.textContent = `${carrot.id}${carrot.tagClosed}`; } else { tooltip.textContent = `${carrot.tag}`; }
  }
}

// eslint-disable-next-line @typescript-eslint/no-use-before-define
button.addEventListener('click', checkInput);

document.addEventListener('keypress', (e) => {
  if (e.code === 'Enter' && input.value) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    checkInput();
  }
});

function checkInput(): void {
  const val = input.value;
  const elements = tablecloth.querySelectorAll(val);
  const checked = tablecloth.querySelectorAll('.checked');
  if (elements && elements.length === checked.length && Array.from(elements).every((item) => item.classList.contains('checked'))) {
    elements.forEach((item) => item.classList.remove('checked'));
    elements.forEach((item) => item.classList.add('true'));
    const actives = levelBlock.querySelectorAll('.active');
    actives.forEach((item) => { item.classList.remove('active'); item.classList.add('passed'); });
    actives[0].parentElement?.nextElementSibling?.firstElementChild?.classList.add('active');
    actives[0].parentElement?.nextElementSibling?.lastElementChild?.classList.add('active');
    const num = actives[0].parentElement?.nextElementSibling?.lastElementChild?.innerHTML;
    tablecloth.addEventListener('animationend', () => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      if (num) { setLocaleStorage(num); checkLevel(num); } else { popap.classList.add('open'); reset(); }
    });
  } else {
    tablecloth.classList.add('false');
    tablecloth.addEventListener('animationend', () => {
      if (tablecloth.classList.contains('false')) {
        tablecloth.classList.remove('false');
      }
    });
  }
  input.value = '';
}

help.addEventListener('click', () => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const num = getLocaleStorage();
  let text = '';
  if (num) {
    const objLevel = arrTabEl[Number(num) - 1];
    text = objLevel.help;
    const levels = levelBlock.querySelectorAll('.level-container');
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    if (levels[Number(num) - 1].lastElementChild) {
      // console.log(levels[Number(num) - 1].lastElementChild);
      const span = document.createElement('span');
      span.classList.add('help');
      span.textContent = 'help';
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      levels[Number(num) - 1].lastElementChild?.append(span);
    }
  }
  let n = 0;
  const speed = 500;
  const m = text.length;
  const timer = setInterval(() => {
    if (n < m) {
      input.value += text.charAt(n);
      // eslint-disable-next-line no-param-reassign
      n += 1;
    }
    if (n === m) { clearInterval(timer); checkInput(); }
  }, speed);
});

window.addEventListener('load', () => {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  const num = getLocaleStorage();
  if (num) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    checkLevel(num);
    const levels = levelBlock.querySelectorAll('.level-container');
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    levels[Number(num) - 1].firstElementChild?.classList.add('active');
    levels[Number(num) - 1].lastElementChild?.classList.add('active');
  }
});

export function checkLevel(num: string): void {
  if (windowMainHTML.firstElementChild) {
    windowMainHTML.firstElementChild.innerHTML = '';
  }
  if (tablecloth.firstElementChild) {
    tablecloth.firstElementChild.innerHTML = '';
  }
  title.innerHTML = '';
  const objLevel = arrTabEl[Number(num) - 1];
  const titleName = objLevel.title;
  title.innerHTML = titleName;
  windowMainHTML.append(level.getLevelUn(num));
  tablecloth.append(table.createTableUn(num));
}

function setLocaleStorage(num: string):void {
  localStorage.setItem('num', num);
}

function getLocaleStorage(): string | null {
  let num;
  if (localStorage.getItem('num')) {
    num = localStorage.getItem('num');
  } else { num = '1'; }
  return num;
}
