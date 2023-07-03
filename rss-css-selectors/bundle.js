/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/blockStyles.css":
/*!****************************************!*\
  !*** ./src/components/blockStyles.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/Elements.ts":
/*!************************************!*\
  !*** ./src/components/Elements.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Elements = void 0;
class Elements {
    /* public element: HTMLElement;
  
    constructor(name: string, className: string) {
      this.element = document.createElement(name);
      this.element.classList.add(className);
    } */
    static createElemen(name) {
        const el = document.createElement(name);
        el.classList.add(name);
        return el;
    }
}
exports.Elements = Elements;


/***/ }),

/***/ "./src/components/Level.ts":
/*!*********************************!*\
  !*** ./src/components/Level.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Level = void 0;
const data_1 = __webpack_require__(/*! ./data */ "./src/components/data.ts");
class Level {
    constructor() {
        this.level = document.createElement('div');
        this.level.classList.add('table-div');
    }
    getLevelUn(num) {
        const objLevel = data_1.arrTabEl[Number(num) - 1];
        this.level.append('<div class="table">');
        objLevel.elem.forEach((item) => {
            const el = document.createElement('div');
            el.classList.add('language-html');
            el.setAttribute('data-hovered', `${item.name}${item.col}`);
            if (!item.child && !item.nesting) {
                if (item.class) {
                    el.textContent = item.obj.nameClass;
                }
                else if (item.id && item.obj.id) {
                    el.textContent = item.obj.id;
                }
                else {
                    el.textContent = item.obj.tag;
                }
            }
            else if (item.child && !item.nesting) {
                if (item.class) {
                    el.prepend(item.obj.nameClass);
                }
                else if (item.id && item.obj.id) {
                    el.prepend(item.obj.id);
                }
                else {
                    el.prepend(item.obj.tagOpened);
                }
                if (item.child instanceof Array) {
                    item.child.forEach((element) => {
                        const elChild = document.createElement('div');
                        objLevel.elem.forEach((value) => {
                            if (value.obj === element && value.nesting.toString().includes(item.col)) {
                                elChild.setAttribute('data-hovered', `${element.name}${value.col}`);
                                elChild.classList.add('language-html');
                                if (value.class) {
                                    elChild.textContent = value.obj.nameClass;
                                }
                                else if (value.id && value.obj.id) {
                                    elChild.textContent = value.obj.id;
                                }
                                else {
                                    elChild.textContent = value.obj.tag;
                                }
                            }
                        });
                        el.append(elChild);
                    });
                }
                el.append(item.obj.tagClosed);
            }
            this.level.append(el);
        });
        this.level.append('</div>');
        return this.level;
    }
}
exports.Level = Level;


/***/ }),

/***/ "./src/components/TableGenerator.ts":
/*!******************************************!*\
  !*** ./src/components/TableGenerator.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableGenerator = void 0;
const Elements_1 = __webpack_require__(/*! ./Elements */ "./src/components/Elements.ts");
const data_1 = __webpack_require__(/*! ./data */ "./src/components/data.ts");
class TableGenerator {
    constructor() {
        this.table = document.createElement('div');
        this.table.classList.add('table-gen');
    }
    createTableUn(num) {
        const objLevel = data_1.arrTabEl[Number(num) - 1];
        objLevel.elem.forEach((item) => {
            const el = Elements_1.Elements.createElemen(item.name);
            el.setAttribute('data-hovered', `${item.name}${item.col}`);
            if (item.class) {
                el.classList.add(`${item.class}`);
            }
            if (item.checked) {
                el.classList.add('checked');
            }
            if (item.id) {
                el.setAttribute('id', `${item.id}`);
            }
            if (!item.nesting) {
                this.table.append(el);
            }
            else {
                const parentEl = this.table.querySelector(`[data-hovered=${item.nesting}]`);
                parentEl === null || parentEl === void 0 ? void 0 : parentEl.append(el);
            }
        });
        return this.table;
    }
    clearTable() {
        this.table.textContent = '';
        return this.table;
    }
}
exports.TableGenerator = TableGenerator;


/***/ }),

/***/ "./src/components/blockEditor.ts":
/*!***************************************!*\
  !*** ./src/components/blockEditor.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlockEditor = void 0;
class BlockEditor {
    static createEditor() {
        const editor = document.createElement('div');
        editor.classList.add('editor');
        return editor;
    }
    static createBlockEditor() {
        const blockEditor = document.createElement('div');
        blockEditor.classList.add('editor-block');
        return blockEditor;
    }
    static createHeaderEditor() {
        const headerEditor = document.createElement('div');
        headerEditor.classList.add('header-editor');
        const headerName = document.createElement('div');
        headerName.classList.add('header-name');
        headerEditor.append(headerName);
        const editorName = document.createElement('div');
        editorName.classList.add('editor-name');
        headerEditor.append(editorName);
        return headerEditor;
    }
    static createLineBlock() {
        const lineBlock = document.createElement('div');
        lineBlock.classList.add('line-block');
        lineBlock.innerHTML = '1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>';
        return lineBlock;
    }
    static createWindowBlock() {
        const window = document.createElement('div');
        window.classList.add('window-block');
        return window;
    }
    static createMainWindow() {
        const window = document.createElement('div');
        window.classList.add('window-main');
        return window;
    }
    static createInput() {
        const input = document.createElement('input');
        input.classList.add('input');
        input.setAttribute('placeholder', 'Type in a css selector');
        input.setAttribute('type', 'text');
        input.setAttribute('value', '');
        return input;
    }
    static createButton() {
        const button = document.createElement('div');
        button.classList.add('button-css');
        button.innerHTML = 'enter';
        return button;
    }
}
exports.BlockEditor = BlockEditor;


/***/ }),

/***/ "./src/components/blockLevel.ts":
/*!**************************************!*\
  !*** ./src/components/blockLevel.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LevelBlock = void 0;
class LevelBlock {
    static createLevelBlock() {
        const blockLevel = document.createElement('div');
        blockLevel.classList.add('block-level');
        return blockLevel;
    }
    static createLevelHeader() {
        const titleLevel = document.createElement('h2');
        titleLevel.classList.add('title-level');
        const spanTitle = document.createElement('span');
        spanTitle.innerHTML = 'Level';
        const spanLevel = document.createElement('span');
        spanLevel.innerHTML = '';
        titleLevel.append(spanTitle);
        titleLevel.append(spanLevel);
        return titleLevel;
    }
    static createMark() {
        const div = document.createElement('div');
        div.classList.add('mark');
        div.innerHTML = '>';
        return div;
    }
    static createLevel() {
        const level = document.createElement('div');
        level.classList.add('level');
        return level;
    }
    static createButton() {
        const button = document.createElement('div');
        button.classList.add('level-btn');
        button.innerHTML = 'RESET PROGRESS';
        return button;
    }
}
exports.LevelBlock = LevelBlock;


/***/ }),

/***/ "./src/components/blockOne.ts":
/*!************************************!*\
  !*** ./src/components/blockOne.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlockOne = void 0;
__webpack_require__(/*! ./blockStyles.css */ "./src/components/blockStyles.css");
class BlockOne {
    static createHeader() {
        const header = document.createElement('header');
        header.classList.add('header');
        const logo = document.createElement('div');
        logo.classList.add('logo');
        const logoName = document.createElement('div');
        logoName.innerHTML = 'CSS Diner';
        const plate = document.createElement('plate');
        plate.classList.add('plate');
        const apple = document.createElement('apple');
        logo.append(plate);
        plate.append(apple);
        header.append(logo);
        header.append(logoName);
        return header;
    }
    static createTitle() {
        const title = document.createElement('h2');
        title.innerHTML = 'Select the plates';
        title.classList.add('title');
        return title;
    }
    static createHelp() {
        const help = document.createElement('div');
        const helpLink = document.createElement('a');
        help.classList.add('help-btn');
        helpLink.setAttribute('href', '#');
        helpLink.innerHTML = 'Help!';
        help.append(helpLink);
        return help;
    }
    static createTable() {
        const tableWrapper = document.createElement('div');
        const table = document.createElement('div');
        const tableBottom = document.createElement('div');
        const tableLegOne = document.createElement('div');
        const tableLegTwo = document.createElement('div');
        tableLegOne.classList.add('table-leg');
        tableLegTwo.classList.add('table-leg');
        tableBottom.classList.add('tableBottom');
        tableBottom.append(tableLegOne);
        tableBottom.append(tableLegTwo);
        tableWrapper.classList.add('tableWrapper');
        table.classList.add('table');
        tableWrapper.append(table);
        tableWrapper.append(tableBottom);
        return tableWrapper;
    }
    static createTableTab() {
        const table = document.createElement('div');
        table.classList.add('table-tab');
        return table;
    }
    static createTableGame() {
        const tablecloth = document.createElement('div');
        tablecloth.classList.add('tablecloth');
        return tablecloth;
    }
    static createFooter() {
        const header = document.createElement('footer');
        header.classList.add('footer');
        const container = document.createElement('div');
        container.classList.add('footer-cont');
        const logo = document.createElement('div');
        logo.classList.add('logo-footer');
        const logoLine = document.createElement('a');
        logoLine.classList.add('logo-link');
        logoLine.setAttribute('href', 'https://rs.school/js/');
        const span = document.createElement('span');
        span.innerHTML = '2023';
        const logoGit = document.createElement('div');
        logoGit.classList.add('logo-git');
        const gitLink = document.createElement('a');
        gitLink.classList.add('git-link');
        gitLink.setAttribute('href', 'https://github.com/Jjjulietta');
        logoGit.append(gitLink);
        header.append(container);
        container.append(logo);
        container.append(span);
        container.append(logoGit);
        logo.append(logoLine);
        return header;
    }
    static createPopap() {
        const popap = document.createElement('div');
        popap.classList.add('popap');
        const popapBody = document.createElement('div');
        popapBody.classList.add('popap-body');
        const popapContent = document.createElement('div');
        popapContent.classList.add('popap-content');
        popap.append(popapBody);
        popapBody.append(popapContent);
        popapContent.innerHTML = 'Сongratulations! you have successfully completed all levels!';
        return popap;
    }
}
exports.BlockOne = BlockOne;


/***/ }),

/***/ "./src/components/data.ts":
/*!********************************!*\
  !*** ./src/components/data.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.arrTabEl = exports.carrot = exports.doily = exports.apple = exports.orange = exports.plate = void 0;
exports.plate = {
    name: 'plate', tag: '<plate></plate>', tagOpened: '<plate>', tagClosed: '</plate>', className: 'plate', nameClass: '<plate class="small">', id: '<plate id="colored">',
};
exports.orange = {
    name: 'orange', tag: '<orange></orange>', tagOpened: '<orange>', tagClosed: '</orange>', className: 'orange', nameClass: '<orange class="small">',
};
exports.apple = {
    name: 'apple', tag: '<apple></apple>', tagOpened: '<apple>', tagClosed: '</apple>', className: 'apple', nameClass: '<apple class="small">', id: '<apple id= "green">',
};
exports.doily = {
    name: 'doily', tag: '<doily></doily>', tagOpened: '<doily>', tagClosed: '</doily>', className: 'doily', nameClass: '<doily class="small">',
};
exports.carrot = {
    name: 'carrot', tag: '<carrot></carrot>', tagOpened: '<carrot>', tagClosed: '</carrot>', className: 'carrot', nameClass: '<carrot class="small">',
};
exports.arrTabEl = [{
        level: '1',
        title: 'Select the oranges',
        help: 'orange',
        elem: [{
                name: exports.orange.name, col: 'One', checked: true, nesting: 0, child: 0, class: 0, id: 0, obj: exports.orange,
            },
            {
                name: exports.orange.name, col: 'Two', checked: true, nesting: 0, child: 0, class: 0, id: 0, obj: exports.orange,
            }],
    },
    {
        level: '2',
        title: 'Select the orange',
        help: 'apple',
        elem: [{
                name: exports.plate.name, col: 'One', checked: false, nesting: 0, class: 0, child: [exports.apple], id: 0, obj: exports.plate,
            },
            {
                name: exports.apple.name, col: 'One', checked: true, nesting: `${exports.plate.name}One`, child: 0, class: 0, id: 0, obj: exports.apple,
            }],
    },
    {
        level: '3',
        title: 'Select the carrot',
        help: 'plate carrot',
        elem: [{
                name: exports.plate.name, col: 'One', checked: false, nesting: 0, child: [exports.carrot], class: 0, id: 0, obj: exports.plate,
            },
            {
                name: exports.carrot.name, col: 'One', checked: true, nesting: `${exports.plate.name}One`, child: 0, class: 0, id: 0, obj: exports.carrot,
            },
            {
                name: exports.carrot.name, col: 'Two', checked: false, nesting: 0, child: 0, class: 0, id: 0, obj: exports.carrot,
            }],
    },
    {
        level: '4',
        title: 'Select the small orange',
        help: '.small',
        elem: [{
                name: exports.doily.name, col: 'One', checked: false, nesting: 0, child: [exports.orange], class: 0, id: 0, obj: exports.doily,
            },
            {
                name: exports.orange.name, col: 'One', checked: true, nesting: `${exports.doily.name}One`, child: 0, class: 'small', id: 0, obj: exports.orange,
            },
            {
                name: exports.orange.name, col: 'Two', checked: false, nesting: 0, child: 0, class: 0, id: 0, obj: exports.orange,
            }],
    },
    {
        level: '5',
        title: 'Select all the things on the plates',
        help: 'plate *',
        elem: [{
                name: exports.plate.name, col: 'One', checked: false, nesting: 0, child: [exports.apple], class: 0, id: 0, obj: exports.plate,
            },
            {
                name: exports.apple.name, col: 'One', checked: true, nesting: `${exports.plate.name}One`, child: 0, class: 0, id: 'green', obj: exports.apple,
            },
            {
                name: exports.plate.name, col: 'Two', checked: false, nesting: 0, child: [exports.carrot], class: 0, id: 0, obj: exports.plate,
            },
            {
                name: exports.carrot.name, col: 'Two', checked: true, nesting: `${exports.plate.name}Two`, child: 0, class: 0, id: 0, obj: exports.carrot,
            }],
    },
    {
        level: '6',
        title: 'Select the orange on the colored plate',
        help: '#colored orange',
        elem: [{
                name: exports.plate.name, col: 'One', checked: false, nesting: 0, child: [exports.orange], class: 0, id: 0, obj: exports.plate,
            },
            {
                name: exports.orange.name, col: 'One', checked: false, nesting: `${exports.plate.name}One`, child: 0, class: 0, id: 0, obj: exports.orange,
            },
            {
                name: exports.plate.name, col: 'Two', checked: false, nesting: 0, child: [exports.orange], class: 0, id: 'colored', obj: exports.plate,
            },
            {
                name: exports.orange.name, col: 'Two', checked: true, nesting: `${exports.plate.name}Two`, child: 0, class: 0, id: 0, obj: exports.orange,
            }],
    },
    {
        level: '7',
        title: 'Select all the small oranges',
        help: 'orange',
        elem: [{
                name: exports.doily.name, col: 'One', checked: false, nesting: 0, child: [exports.orange], class: 0, id: 0, obj: exports.doily,
            },
            {
                name: exports.orange.name, col: 'One', checked: true, nesting: `${exports.doily.name}One`, child: 0, class: 'small', id: 0, obj: exports.orange,
            },
            {
                name: exports.plate.name, col: 'One', checked: false, nesting: 0, child: [exports.apple], class: 0, id: 0, obj: exports.plate,
            },
            {
                name: exports.apple.name, col: 'One', checked: false, nesting: `${exports.plate.name}One`, child: 0, class: 'small', id: 0, obj: exports.apple,
            },
            {
                name: exports.orange.name, col: 'Two', checked: true, nesting: 0, child: 0, class: 'small', id: 0, obj: exports.orange,
            }],
    },
    {
        level: '8',
        title: 'Select the carrot at the orange',
        help: 'carrot, orange',
        elem: [{
                name: exports.doily.name, col: 'One', checked: false, nesting: 0, child: [exports.carrot], class: 0, id: 0, obj: exports.doily,
            },
            {
                name: exports.carrot.name, col: 'One', checked: true, nesting: `${exports.doily.name}One`, child: 0, class: 0, id: 0, obj: exports.carrot,
            },
            {
                name: exports.plate.name, col: 'One', checked: false, nesting: 0, child: [exports.orange], class: 0, id: 0, obj: exports.plate,
            },
            {
                name: exports.orange.name, col: 'One', checked: true, nesting: `${exports.plate.name}One`, child: 0, class: 0, id: 0, obj: exports.orange,
            }],
    },
    {
        level: '9',
        title: 'Select all the carrots',
        help: 'plate carrot',
        elem: [{
                name: exports.doily.name, col: 'One', checked: false, nesting: 0, child: 0, class: 0, id: 0, obj: exports.doily,
            },
            {
                name: exports.plate.name, col: 'One', checked: false, nesting: 0, child: [exports.carrot, exports.orange], class: 0, id: 0, obj: exports.plate,
            },
            {
                name: exports.carrot.name, col: 'One', checked: true, nesting: `${exports.plate.name}One`, child: 0, class: 0, id: 0, obj: exports.carrot,
            },
            {
                name: exports.orange.name, col: 'One', checked: false, nesting: `${exports.plate.name}One`, child: 0, class: 0, id: 0, obj: exports.orange,
            },
            {
                name: exports.doily.name, col: 'Two', checked: false, nesting: 0, child: [exports.carrot], class: 0, id: 0, obj: exports.doily,
            },
            {
                name: exports.carrot.name, col: 'Two', checked: false, nesting: `${exports.doily.name}Two`, child: 0, class: 0, id: 0, obj: exports.carrot,
            }],
    },
    {
        level: '10',
        title: 'Select all the elements after doily',
        help: 'doily ~ *',
        elem: [{
                name: exports.doily.name, col: 'One', checked: false, nesting: 0, child: 0, class: 0, id: 0, obj: exports.doily,
            },
            {
                name: exports.plate.name, col: 'One', checked: true, nesting: 0, child: [exports.apple], class: 0, id: 0, obj: exports.plate,
            },
            {
                name: exports.carrot.name, col: 'One', checked: true, nesting: 0, child: 0, class: 0, id: 0, obj: exports.carrot,
            },
            {
                name: exports.apple.name, col: 'One', checked: false, nesting: `${exports.plate.name}One`, child: 0, class: 0, id: 0, obj: exports.apple,
            }],
    }];


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkLevel = void 0;
__webpack_require__(/*! ./style.css */ "./src/style.css");
const blockOne_1 = __webpack_require__(/*! ./components/blockOne */ "./src/components/blockOne.ts");
const blockEditor_1 = __webpack_require__(/*! ./components/blockEditor */ "./src/components/blockEditor.ts");
const blockLevel_1 = __webpack_require__(/*! ./components/blockLevel */ "./src/components/blockLevel.ts");
const Level_1 = __webpack_require__(/*! ./components/Level */ "./src/components/Level.ts");
const TableGenerator_1 = __webpack_require__(/*! ./components/TableGenerator */ "./src/components/TableGenerator.ts");
const data_1 = __webpack_require__(/*! ./components/data */ "./src/components/data.ts");
const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');
if (body)
    body.append(container);
const mainBlock = document.createElement('section');
mainBlock.classList.add('mainblock');
container.append(mainBlock);
const levelBlock = document.createElement('section');
levelBlock.classList.add('level-block');
container.append(levelBlock);
const header = blockOne_1.BlockOne.createHeader();
mainBlock.append(header);
const title = blockOne_1.BlockOne.createTitle();
mainBlock.append(title);
const help = blockOne_1.BlockOne.createHelp();
const tableWrapper = blockOne_1.BlockOne.createTable();
mainBlock.append(tableWrapper);
const tablecloth = blockOne_1.BlockOne.createTableGame();
const tableTab = blockOne_1.BlockOne.createTableTab();
// tableWrapper.append(tableTab);
if (tableWrapper.firstChild && tableWrapper.firstChild instanceof HTMLElement) {
    tableWrapper.firstChild.append(tableTab);
    tableWrapper.firstChild.append(tablecloth);
}
const editor = blockEditor_1.BlockEditor.createEditor();
mainBlock.append(editor);
const editorBlockCSS = blockEditor_1.BlockEditor.createBlockEditor();
const editorBlockHTML = blockEditor_1.BlockEditor.createBlockEditor();
editor.append(editorBlockCSS);
editor.append(editorBlockHTML);
const headerBlockCSS = blockEditor_1.BlockEditor.createHeaderEditor();
if (headerBlockCSS.firstChild && headerBlockCSS.firstChild instanceof HTMLElement) {
    headerBlockCSS.firstChild.innerHTML = 'CSS Editor';
}
if (headerBlockCSS.lastChild && headerBlockCSS.lastChild instanceof HTMLElement) {
    headerBlockCSS.lastChild.innerHTML = 'style.css';
}
const headerBlockHTML = blockEditor_1.BlockEditor.createHeaderEditor();
if (headerBlockHTML.firstChild && headerBlockHTML.firstChild instanceof HTMLElement) {
    headerBlockHTML.firstChild.innerHTML = 'HTML Viewer';
}
if (headerBlockHTML.lastChild && headerBlockHTML.lastChild instanceof HTMLElement) {
    headerBlockHTML.lastChild.innerHTML = 'table.html';
}
editorBlockCSS.append(headerBlockCSS);
editorBlockHTML.append(headerBlockHTML);
const winowCss = blockEditor_1.BlockEditor.createWindowBlock();
const lineBlockCss = blockEditor_1.BlockEditor.createLineBlock();
winowCss.append(lineBlockCss);
editorBlockCSS.append(winowCss);
const windowMainCss = blockEditor_1.BlockEditor.createMainWindow();
winowCss.append(windowMainCss);
const inputBlock = document.createElement('div');
inputBlock.classList.add('input-block');
const input = blockEditor_1.BlockEditor.createInput();
const button = blockEditor_1.BlockEditor.createButton();
inputBlock.append(input);
windowMainCss.append(inputBlock);
inputBlock.append(button);
windowMainCss.append(help);
const windowHtML = blockEditor_1.BlockEditor.createWindowBlock();
windowHtML.classList.add('window-html');
const lineBlockHTML = blockEditor_1.BlockEditor.createLineBlock();
windowHtML.append(lineBlockHTML);
const windowMainHTML = blockEditor_1.BlockEditor.createMainWindow();
windowHtML.append(windowMainHTML);
editorBlockHTML.append(windowHtML);
const footer = blockOne_1.BlockOne.createFooter();
mainBlock.append(footer);
const blockLevel = blockLevel_1.LevelBlock.createLevelBlock();
levelBlock.append(blockLevel);
const headerLevel = blockLevel_1.LevelBlock.createLevelHeader();
blockLevel.append(headerLevel);
let i = 10;
while (i > 0) {
    const levelContainer = document.createElement('div');
    levelContainer.classList.add('level-container');
    const levelMark = blockLevel_1.LevelBlock.createMark();
    levelContainer.append(levelMark);
    const levelNumber = blockLevel_1.LevelBlock.createLevel();
    levelNumber.innerHTML = `${i}`;
    levelContainer.append(levelNumber);
    headerLevel.after(levelContainer);
    i -= 1;
}
const buttonReset = blockLevel_1.LevelBlock.createButton();
levelBlock.append(buttonReset);
const popap = blockOne_1.BlockOne.createPopap();
body === null || body === void 0 ? void 0 : body.append(popap);
const level = new Level_1.Level();
const table = new TableGenerator_1.TableGenerator();
// eslint-disable-next-line consistent-return, max-lines-per-function
levelBlock.addEventListener('click', (e) => {
    var _a;
    if (e.target && e.target instanceof HTMLDivElement) {
        if (e.target.closest('.level-container')) {
            input.value = '';
            const actives = document.querySelectorAll('.active');
            if (actives) {
                actives.forEach((item) => item.classList.remove('active'));
            }
            e.target.classList.add('active');
            (_a = e.target.previousElementSibling) === null || _a === void 0 ? void 0 : _a.classList.add('active');
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
        elHover === null || elHover === void 0 ? void 0 : elHover.classList.add('active');
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
        elHover === null || elHover === void 0 ? void 0 : elHover.classList.remove('active');
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
        elHover === null || elHover === void 0 ? void 0 : elHover.classList.add('hovered');
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        if (elHover && elHover instanceof HTMLElement)
            createTooltip(elHover);
    }
});
windowMainHTML.addEventListener('mouseout', (e) => {
    if (e.target instanceof HTMLElement) {
        e.target.classList.remove('active');
        const dataName = e.target.getAttribute('data-hovered');
        const elHover = document.querySelector(`[data-hovered=${dataName}]`);
        elHover === null || elHover === void 0 ? void 0 : elHover.classList.remove('hovered');
        if ((elHover === null || elHover === void 0 ? void 0 : elHover.firstElementChild) && elHover.firstElementChild.classList.contains('tooltip')) {
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
function reset() {
    var _a, _b, _c, _d;
    const activesLevel = levelBlock.querySelectorAll('.passed');
    const activeEl = document.querySelectorAll('.active');
    const helps = levelBlock.querySelectorAll('.help');
    // eslint-disable-next-line no-return-assign, no-param-reassign
    helps === null || helps === void 0 ? void 0 : helps.forEach((item) => item.outerHTML = '');
    activeEl === null || activeEl === void 0 ? void 0 : activeEl.forEach((item) => item.classList.remove('active'));
    activesLevel.forEach((item) => {
        item.classList.remove('passed');
    });
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    checkLevel('1');
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    setLocaleStorage('1');
    (_b = (_a = headerLevel.nextElementSibling) === null || _a === void 0 ? void 0 : _a.firstElementChild) === null || _b === void 0 ? void 0 : _b.classList.add('active');
    (_d = (_c = headerLevel.nextElementSibling) === null || _c === void 0 ? void 0 : _c.lastElementChild) === null || _d === void 0 ? void 0 : _d.classList.add('active');
}
function createTooltip(element) {
    const idName = element.getAttribute('id');
    const tagName = element.tagName.toLocaleLowerCase();
    const tooltip = document.createElement('span');
    tooltip.classList.add('tooltip');
    element.prepend(tooltip);
    if (tagName === data_1.plate.name) {
        if (element.classList.contains('small')) {
            tooltip.textContent = `${data_1.plate.nameClass}${data_1.plate.tagClosed}`;
        }
        else if (idName) {
            tooltip.textContent = `${data_1.plate.id}${data_1.plate.tagClosed}`;
        }
        else {
            tooltip.textContent = `${data_1.plate.tag}`;
        }
    }
    if (tagName === data_1.orange.name) {
        if (element.classList.contains('small')) {
            tooltip.textContent = `${data_1.orange.nameClass}${data_1.orange.tagClosed}`;
        }
        else if (idName) {
            tooltip.textContent = `${data_1.orange.id}${data_1.orange.tagClosed}`;
        }
        else {
            tooltip.textContent = `${data_1.orange.tag}`;
        }
    }
    if (tagName === data_1.apple.name) {
        if (element.classList.contains('small')) {
            tooltip.textContent = `${data_1.apple.nameClass}${data_1.apple.tagClosed}`;
        }
        else if (idName) {
            tooltip.textContent = `${data_1.apple.id}${data_1.apple.tagClosed}`;
        }
        else {
            tooltip.textContent = `${data_1.apple.tag}`;
        }
    }
    if (tagName === data_1.doily.name) {
        if (element.classList.contains('small')) {
            tooltip.textContent = `${data_1.doily.nameClass}${data_1.doily.tagClosed}`;
        }
        else if (idName) {
            tooltip.textContent = `${data_1.doily.id}${data_1.doily.tagClosed}`;
        }
        else {
            tooltip.textContent = `${data_1.doily.tag}`;
        }
    }
    if (tagName === data_1.carrot.name) {
        if (element.classList.contains('small')) {
            tooltip.textContent = `${data_1.carrot.nameClass}${data_1.carrot.tagClosed}`;
        }
        else if (idName) {
            tooltip.textContent = `${data_1.carrot.id}${data_1.carrot.tagClosed}`;
        }
        else {
            tooltip.textContent = `${data_1.carrot.tag}`;
        }
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
function checkInput() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const val = input.value;
    const elements = tablecloth.querySelectorAll(val);
    const checked = tablecloth.querySelectorAll('.checked');
    if (elements && elements.length === checked.length && Array.from(elements).every((item) => item.classList.contains('checked'))) {
        elements.forEach((item) => item.classList.remove('checked'));
        elements.forEach((item) => item.classList.add('true'));
        const actives = levelBlock.querySelectorAll('.active');
        actives.forEach((item) => { item.classList.remove('active'); item.classList.add('passed'); });
        (_c = (_b = (_a = actives[0].parentElement) === null || _a === void 0 ? void 0 : _a.nextElementSibling) === null || _b === void 0 ? void 0 : _b.firstElementChild) === null || _c === void 0 ? void 0 : _c.classList.add('active');
        (_f = (_e = (_d = actives[0].parentElement) === null || _d === void 0 ? void 0 : _d.nextElementSibling) === null || _e === void 0 ? void 0 : _e.lastElementChild) === null || _f === void 0 ? void 0 : _f.classList.add('active');
        const num = (_j = (_h = (_g = actives[0].parentElement) === null || _g === void 0 ? void 0 : _g.nextElementSibling) === null || _h === void 0 ? void 0 : _h.lastElementChild) === null || _j === void 0 ? void 0 : _j.innerHTML;
        tablecloth.addEventListener('animationend', () => {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            if (num) {
                setLocaleStorage(num);
                checkLevel(num);
            }
            else {
                popap.classList.add('open');
                reset();
            }
        });
    }
    else {
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
    var _a;
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const num = getLocaleStorage();
    let text = '';
    if (num) {
        const objLevel = data_1.arrTabEl[Number(num) - 1];
        text = objLevel.help;
        const levels = levelBlock.querySelectorAll('.level-container');
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        if (levels[Number(num) - 1].lastElementChild) {
            // console.log(levels[Number(num) - 1].lastElementChild);
            const span = document.createElement('span');
            span.classList.add('help');
            span.textContent = 'help';
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            (_a = levels[Number(num) - 1].lastElementChild) === null || _a === void 0 ? void 0 : _a.append(span);
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
        if (n === m) {
            clearInterval(timer);
            checkInput();
        }
    }, speed);
});
window.addEventListener('load', () => {
    var _a, _b;
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const num = getLocaleStorage();
    if (num) {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        checkLevel(num);
        const levels = levelBlock.querySelectorAll('.level-container');
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        (_a = levels[Number(num) - 1].firstElementChild) === null || _a === void 0 ? void 0 : _a.classList.add('active');
        (_b = levels[Number(num) - 1].lastElementChild) === null || _b === void 0 ? void 0 : _b.classList.add('active');
    }
});
function checkLevel(num) {
    if (windowMainHTML.firstElementChild) {
        windowMainHTML.firstElementChild.innerHTML = '';
    }
    if (tablecloth.firstElementChild) {
        tablecloth.firstElementChild.innerHTML = '';
    }
    title.innerHTML = '';
    const objLevel = data_1.arrTabEl[Number(num) - 1];
    const titleName = objLevel.title;
    title.innerHTML = titleName;
    windowMainHTML.append(level.getLevelUn(num));
    tablecloth.append(table.createTableUn(num));
}
exports.checkLevel = checkLevel;
function setLocaleStorage(num) {
    localStorage.setItem('num', num);
}
function getLocaleStorage() {
    let num;
    if (localStorage.getItem('num')) {
        num = localStorage.getItem('num');
    }
    else {
        num = '1';
    }
    return num;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yc3MtY3NzLXNlbGVjdG9ycy8uL3NyYy9jb21wb25lbnRzL2Jsb2NrU3R5bGVzLmNzcz80MTAzIiwid2VicGFjazovL3Jzcy1jc3Mtc2VsZWN0b3JzLy4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL3Jzcy1jc3Mtc2VsZWN0b3JzLy4vc3JjL2NvbXBvbmVudHMvRWxlbWVudHMudHMiLCJ3ZWJwYWNrOi8vcnNzLWNzcy1zZWxlY3RvcnMvLi9zcmMvY29tcG9uZW50cy9MZXZlbC50cyIsIndlYnBhY2s6Ly9yc3MtY3NzLXNlbGVjdG9ycy8uL3NyYy9jb21wb25lbnRzL1RhYmxlR2VuZXJhdG9yLnRzIiwid2VicGFjazovL3Jzcy1jc3Mtc2VsZWN0b3JzLy4vc3JjL2NvbXBvbmVudHMvYmxvY2tFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vcnNzLWNzcy1zZWxlY3RvcnMvLi9zcmMvY29tcG9uZW50cy9ibG9ja0xldmVsLnRzIiwid2VicGFjazovL3Jzcy1jc3Mtc2VsZWN0b3JzLy4vc3JjL2NvbXBvbmVudHMvYmxvY2tPbmUudHMiLCJ3ZWJwYWNrOi8vcnNzLWNzcy1zZWxlY3RvcnMvLi9zcmMvY29tcG9uZW50cy9kYXRhLnRzIiwid2VicGFjazovL3Jzcy1jc3Mtc2VsZWN0b3JzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jzcy1jc3Mtc2VsZWN0b3JzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnNzLWNzcy1zZWxlY3RvcnMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkVsZW1lbnRzID0gdm9pZCAwO1xuY2xhc3MgRWxlbWVudHMge1xuICAgIC8qIHB1YmxpYyBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZykge1xuICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChuYW1lKTtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSAqL1xuICAgIHN0YXRpYyBjcmVhdGVFbGVtZW4obmFtZSkge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQobmFtZSk7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9XG59XG5leHBvcnRzLkVsZW1lbnRzID0gRWxlbWVudHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTGV2ZWwgPSB2b2lkIDA7XG5jb25zdCBkYXRhXzEgPSByZXF1aXJlKFwiLi9kYXRhXCIpO1xuY2xhc3MgTGV2ZWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxldmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMubGV2ZWwuY2xhc3NMaXN0LmFkZCgndGFibGUtZGl2Jyk7XG4gICAgfVxuICAgIGdldExldmVsVW4obnVtKSB7XG4gICAgICAgIGNvbnN0IG9iakxldmVsID0gZGF0YV8xLmFyclRhYkVsW051bWJlcihudW0pIC0gMV07XG4gICAgICAgIHRoaXMubGV2ZWwuYXBwZW5kKCc8ZGl2IGNsYXNzPVwidGFibGVcIj4nKTtcbiAgICAgICAgb2JqTGV2ZWwuZWxlbS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnbGFuZ3VhZ2UtaHRtbCcpO1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLWhvdmVyZWQnLCBgJHtpdGVtLm5hbWV9JHtpdGVtLmNvbH1gKTtcbiAgICAgICAgICAgIGlmICghaXRlbS5jaGlsZCAmJiAhaXRlbS5uZXN0aW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSBpdGVtLm9iai5uYW1lQ2xhc3M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0uaWQgJiYgaXRlbS5vYmouaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSBpdGVtLm9iai5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnRleHRDb250ZW50ID0gaXRlbS5vYmoudGFnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGl0ZW0uY2hpbGQgJiYgIWl0ZW0ubmVzdGluZykge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnByZXBlbmQoaXRlbS5vYmoubmFtZUNsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXRlbS5pZCAmJiBpdGVtLm9iai5pZCkge1xuICAgICAgICAgICAgICAgICAgICBlbC5wcmVwZW5kKGl0ZW0ub2JqLmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLnByZXBlbmQoaXRlbS5vYmoudGFnT3BlbmVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY2hpbGQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLmNoaWxkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iakxldmVsLmVsZW0uZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUub2JqID09PSBlbGVtZW50ICYmIHZhbHVlLm5lc3RpbmcudG9TdHJpbmcoKS5pbmNsdWRlcyhpdGVtLmNvbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxDaGlsZC5zZXRBdHRyaWJ1dGUoJ2RhdGEtaG92ZXJlZCcsIGAke2VsZW1lbnQubmFtZX0ke3ZhbHVlLmNvbH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxDaGlsZC5jbGFzc0xpc3QuYWRkKCdsYW5ndWFnZS1odG1sJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5jbGFzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxDaGlsZC50ZXh0Q29udGVudCA9IHZhbHVlLm9iai5uYW1lQ2xhc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodmFsdWUuaWQgJiYgdmFsdWUub2JqLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbENoaWxkLnRleHRDb250ZW50ID0gdmFsdWUub2JqLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxDaGlsZC50ZXh0Q29udGVudCA9IHZhbHVlLm9iai50YWc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmFwcGVuZChlbENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsLmFwcGVuZChpdGVtLm9iai50YWdDbG9zZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sZXZlbC5hcHBlbmQoZWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5sZXZlbC5hcHBlbmQoJzwvZGl2PicpO1xuICAgICAgICByZXR1cm4gdGhpcy5sZXZlbDtcbiAgICB9XG59XG5leHBvcnRzLkxldmVsID0gTGV2ZWw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGFibGVHZW5lcmF0b3IgPSB2b2lkIDA7XG5jb25zdCBFbGVtZW50c18xID0gcmVxdWlyZShcIi4vRWxlbWVudHNcIik7XG5jb25zdCBkYXRhXzEgPSByZXF1aXJlKFwiLi9kYXRhXCIpO1xuY2xhc3MgVGFibGVHZW5lcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMudGFibGUuY2xhc3NMaXN0LmFkZCgndGFibGUtZ2VuJyk7XG4gICAgfVxuICAgIGNyZWF0ZVRhYmxlVW4obnVtKSB7XG4gICAgICAgIGNvbnN0IG9iakxldmVsID0gZGF0YV8xLmFyclRhYkVsW051bWJlcihudW0pIC0gMV07XG4gICAgICAgIG9iakxldmVsLmVsZW0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWwgPSBFbGVtZW50c18xLkVsZW1lbnRzLmNyZWF0ZUVsZW1lbihpdGVtLm5hbWUpO1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLWhvdmVyZWQnLCBgJHtpdGVtLm5hbWV9JHtpdGVtLmNvbH1gKTtcbiAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzKSB7XG4gICAgICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChgJHtpdGVtLmNsYXNzfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpdGVtLmlkKSB7XG4gICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdpZCcsIGAke2l0ZW0uaWR9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWl0ZW0ubmVzdGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMudGFibGUuYXBwZW5kKGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudEVsID0gdGhpcy50YWJsZS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1ob3ZlcmVkPSR7aXRlbS5uZXN0aW5nfV1gKTtcbiAgICAgICAgICAgICAgICBwYXJlbnRFbCA9PT0gbnVsbCB8fCBwYXJlbnRFbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcGFyZW50RWwuYXBwZW5kKGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlO1xuICAgIH1cbiAgICBjbGVhclRhYmxlKCkge1xuICAgICAgICB0aGlzLnRhYmxlLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIHJldHVybiB0aGlzLnRhYmxlO1xuICAgIH1cbn1cbmV4cG9ydHMuVGFibGVHZW5lcmF0b3IgPSBUYWJsZUdlbmVyYXRvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5CbG9ja0VkaXRvciA9IHZvaWQgMDtcbmNsYXNzIEJsb2NrRWRpdG9yIHtcbiAgICBzdGF0aWMgY3JlYXRlRWRpdG9yKCkge1xuICAgICAgICBjb25zdCBlZGl0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWRpdG9yLmNsYXNzTGlzdC5hZGQoJ2VkaXRvcicpO1xuICAgICAgICByZXR1cm4gZWRpdG9yO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlQmxvY2tFZGl0b3IoKSB7XG4gICAgICAgIGNvbnN0IGJsb2NrRWRpdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJsb2NrRWRpdG9yLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1ibG9jaycpO1xuICAgICAgICByZXR1cm4gYmxvY2tFZGl0b3I7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVIZWFkZXJFZGl0b3IoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlckVkaXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBoZWFkZXJFZGl0b3IuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLWVkaXRvcicpO1xuICAgICAgICBjb25zdCBoZWFkZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlck5hbWUuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLW5hbWUnKTtcbiAgICAgICAgaGVhZGVyRWRpdG9yLmFwcGVuZChoZWFkZXJOYW1lKTtcbiAgICAgICAgY29uc3QgZWRpdG9yTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlZGl0b3JOYW1lLmNsYXNzTGlzdC5hZGQoJ2VkaXRvci1uYW1lJyk7XG4gICAgICAgIGhlYWRlckVkaXRvci5hcHBlbmQoZWRpdG9yTmFtZSk7XG4gICAgICAgIHJldHVybiBoZWFkZXJFZGl0b3I7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVMaW5lQmxvY2soKSB7XG4gICAgICAgIGNvbnN0IGxpbmVCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsaW5lQmxvY2suY2xhc3NMaXN0LmFkZCgnbGluZS1ibG9jaycpO1xuICAgICAgICBsaW5lQmxvY2suaW5uZXJIVE1MID0gJzE8YnI+Mjxicj4zPGJyPjQ8YnI+NTxicj42PGJyPjc8YnI+ODxicj45PGJyPjEwPGJyPic7XG4gICAgICAgIHJldHVybiBsaW5lQmxvY2s7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVXaW5kb3dCbG9jaygpIHtcbiAgICAgICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHdpbmRvdy5jbGFzc0xpc3QuYWRkKCd3aW5kb3ctYmxvY2snKTtcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZU1haW5XaW5kb3coKSB7XG4gICAgICAgIGNvbnN0IHdpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB3aW5kb3cuY2xhc3NMaXN0LmFkZCgnd2luZG93LW1haW4nKTtcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZUlucHV0KCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVHlwZSBpbiBhIGNzcyBzZWxlY3RvcicpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJycpO1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNzcycpO1xuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ2VudGVyJztcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG59XG5leHBvcnRzLkJsb2NrRWRpdG9yID0gQmxvY2tFZGl0b3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTGV2ZWxCbG9jayA9IHZvaWQgMDtcbmNsYXNzIExldmVsQmxvY2sge1xuICAgIHN0YXRpYyBjcmVhdGVMZXZlbEJsb2NrKCkge1xuICAgICAgICBjb25zdCBibG9ja0xldmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGJsb2NrTGV2ZWwuY2xhc3NMaXN0LmFkZCgnYmxvY2stbGV2ZWwnKTtcbiAgICAgICAgcmV0dXJuIGJsb2NrTGV2ZWw7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVMZXZlbEhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgdGl0bGVMZXZlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHRpdGxlTGV2ZWwuY2xhc3NMaXN0LmFkZCgndGl0bGUtbGV2ZWwnKTtcbiAgICAgICAgY29uc3Qgc3BhblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuVGl0bGUuaW5uZXJIVE1MID0gJ0xldmVsJztcbiAgICAgICAgY29uc3Qgc3BhbkxldmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuTGV2ZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRpdGxlTGV2ZWwuYXBwZW5kKHNwYW5UaXRsZSk7XG4gICAgICAgIHRpdGxlTGV2ZWwuYXBwZW5kKHNwYW5MZXZlbCk7XG4gICAgICAgIHJldHVybiB0aXRsZUxldmVsO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlTWFyaygpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdtYXJrJyk7XG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSAnPic7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVMZXZlbCgpIHtcbiAgICAgICAgY29uc3QgbGV2ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV2ZWwuY2xhc3NMaXN0LmFkZCgnbGV2ZWwnKTtcbiAgICAgICAgcmV0dXJuIGxldmVsO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2xldmVsLWJ0bicpO1xuICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ1JFU0VUIFBST0dSRVNTJztcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG59XG5leHBvcnRzLkxldmVsQmxvY2sgPSBMZXZlbEJsb2NrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJsb2NrT25lID0gdm9pZCAwO1xucmVxdWlyZShcIi4vYmxvY2tTdHlsZXMuY3NzXCIpO1xuY2xhc3MgQmxvY2tPbmUge1xuICAgIHN0YXRpYyBjcmVhdGVIZWFkZXIoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbG9nby5jbGFzc0xpc3QuYWRkKCdsb2dvJyk7XG4gICAgICAgIGNvbnN0IGxvZ29OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxvZ29OYW1lLmlubmVySFRNTCA9ICdDU1MgRGluZXInO1xuICAgICAgICBjb25zdCBwbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3BsYXRlJyk7XG4gICAgICAgIHBsYXRlLmNsYXNzTGlzdC5hZGQoJ3BsYXRlJyk7XG4gICAgICAgIGNvbnN0IGFwcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXBwbGUnKTtcbiAgICAgICAgbG9nby5hcHBlbmQocGxhdGUpO1xuICAgICAgICBwbGF0ZS5hcHBlbmQoYXBwbGUpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kKGxvZ28pO1xuICAgICAgICBoZWFkZXIuYXBwZW5kKGxvZ29OYW1lKTtcbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVRpdGxlKCkge1xuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9ICdTZWxlY3QgdGhlIHBsYXRlcyc7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZUhlbHAoKSB7XG4gICAgICAgIGNvbnN0IGhlbHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgaGVscExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGhlbHAuY2xhc3NMaXN0LmFkZCgnaGVscC1idG4nKTtcbiAgICAgICAgaGVscExpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJyMnKTtcbiAgICAgICAgaGVscExpbmsuaW5uZXJIVE1MID0gJ0hlbHAhJztcbiAgICAgICAgaGVscC5hcHBlbmQoaGVscExpbmspO1xuICAgICAgICByZXR1cm4gaGVscDtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVRhYmxlKCkge1xuICAgICAgICBjb25zdCB0YWJsZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFibGVCb3R0b20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFibGVMZWdPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgdGFibGVMZWdUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFibGVMZWdPbmUuY2xhc3NMaXN0LmFkZCgndGFibGUtbGVnJyk7XG4gICAgICAgIHRhYmxlTGVnVHdvLmNsYXNzTGlzdC5hZGQoJ3RhYmxlLWxlZycpO1xuICAgICAgICB0YWJsZUJvdHRvbS5jbGFzc0xpc3QuYWRkKCd0YWJsZUJvdHRvbScpO1xuICAgICAgICB0YWJsZUJvdHRvbS5hcHBlbmQodGFibGVMZWdPbmUpO1xuICAgICAgICB0YWJsZUJvdHRvbS5hcHBlbmQodGFibGVMZWdUd28pO1xuICAgICAgICB0YWJsZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGFibGVXcmFwcGVyJyk7XG4gICAgICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQoJ3RhYmxlJyk7XG4gICAgICAgIHRhYmxlV3JhcHBlci5hcHBlbmQodGFibGUpO1xuICAgICAgICB0YWJsZVdyYXBwZXIuYXBwZW5kKHRhYmxlQm90dG9tKTtcbiAgICAgICAgcmV0dXJuIHRhYmxlV3JhcHBlcjtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVRhYmxlVGFiKCkge1xuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YWJsZS5jbGFzc0xpc3QuYWRkKCd0YWJsZS10YWInKTtcbiAgICAgICAgcmV0dXJuIHRhYmxlO1xuICAgIH1cbiAgICBzdGF0aWMgY3JlYXRlVGFibGVHYW1lKCkge1xuICAgICAgICBjb25zdCB0YWJsZWNsb3RoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhYmxlY2xvdGguY2xhc3NMaXN0LmFkZCgndGFibGVjbG90aCcpO1xuICAgICAgICByZXR1cm4gdGFibGVjbG90aDtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZUZvb3RlcigpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb290ZXItY29udCcpO1xuICAgICAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nby1mb290ZXInKTtcbiAgICAgICAgY29uc3QgbG9nb0xpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGxvZ29MaW5lLmNsYXNzTGlzdC5hZGQoJ2xvZ28tbGluaycpO1xuICAgICAgICBsb2dvTGluZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9ycy5zY2hvb2wvanMvJyk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHNwYW4uaW5uZXJIVE1MID0gJzIwMjMnO1xuICAgICAgICBjb25zdCBsb2dvR2l0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxvZ29HaXQuY2xhc3NMaXN0LmFkZCgnbG9nby1naXQnKTtcbiAgICAgICAgY29uc3QgZ2l0TGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgZ2l0TGluay5jbGFzc0xpc3QuYWRkKCdnaXQtbGluaycpO1xuICAgICAgICBnaXRMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vSmpqdWxpZXR0YScpO1xuICAgICAgICBsb2dvR2l0LmFwcGVuZChnaXRMaW5rKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZChjb250YWluZXIpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKGxvZ28pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHNwYW4pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKGxvZ29HaXQpO1xuICAgICAgICBsb2dvLmFwcGVuZChsb2dvTGluZSk7XG4gICAgICAgIHJldHVybiBoZWFkZXI7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVQb3BhcCgpIHtcbiAgICAgICAgY29uc3QgcG9wYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcG9wYXAuY2xhc3NMaXN0LmFkZCgncG9wYXAnKTtcbiAgICAgICAgY29uc3QgcG9wYXBCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBvcGFwQm9keS5jbGFzc0xpc3QuYWRkKCdwb3BhcC1ib2R5Jyk7XG4gICAgICAgIGNvbnN0IHBvcGFwQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwb3BhcENvbnRlbnQuY2xhc3NMaXN0LmFkZCgncG9wYXAtY29udGVudCcpO1xuICAgICAgICBwb3BhcC5hcHBlbmQocG9wYXBCb2R5KTtcbiAgICAgICAgcG9wYXBCb2R5LmFwcGVuZChwb3BhcENvbnRlbnQpO1xuICAgICAgICBwb3BhcENvbnRlbnQuaW5uZXJIVE1MID0gJ9Chb25ncmF0dWxhdGlvbnMhIHlvdSBoYXZlIHN1Y2Nlc3NmdWxseSBjb21wbGV0ZWQgYWxsIGxldmVscyEnO1xuICAgICAgICByZXR1cm4gcG9wYXA7XG4gICAgfVxufVxuZXhwb3J0cy5CbG9ja09uZSA9IEJsb2NrT25lO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFyclRhYkVsID0gZXhwb3J0cy5jYXJyb3QgPSBleHBvcnRzLmRvaWx5ID0gZXhwb3J0cy5hcHBsZSA9IGV4cG9ydHMub3JhbmdlID0gZXhwb3J0cy5wbGF0ZSA9IHZvaWQgMDtcbmV4cG9ydHMucGxhdGUgPSB7XG4gICAgbmFtZTogJ3BsYXRlJywgdGFnOiAnPHBsYXRlPjwvcGxhdGU+JywgdGFnT3BlbmVkOiAnPHBsYXRlPicsIHRhZ0Nsb3NlZDogJzwvcGxhdGU+JywgY2xhc3NOYW1lOiAncGxhdGUnLCBuYW1lQ2xhc3M6ICc8cGxhdGUgY2xhc3M9XCJzbWFsbFwiPicsIGlkOiAnPHBsYXRlIGlkPVwiY29sb3JlZFwiPicsXG59O1xuZXhwb3J0cy5vcmFuZ2UgPSB7XG4gICAgbmFtZTogJ29yYW5nZScsIHRhZzogJzxvcmFuZ2U+PC9vcmFuZ2U+JywgdGFnT3BlbmVkOiAnPG9yYW5nZT4nLCB0YWdDbG9zZWQ6ICc8L29yYW5nZT4nLCBjbGFzc05hbWU6ICdvcmFuZ2UnLCBuYW1lQ2xhc3M6ICc8b3JhbmdlIGNsYXNzPVwic21hbGxcIj4nLFxufTtcbmV4cG9ydHMuYXBwbGUgPSB7XG4gICAgbmFtZTogJ2FwcGxlJywgdGFnOiAnPGFwcGxlPjwvYXBwbGU+JywgdGFnT3BlbmVkOiAnPGFwcGxlPicsIHRhZ0Nsb3NlZDogJzwvYXBwbGU+JywgY2xhc3NOYW1lOiAnYXBwbGUnLCBuYW1lQ2xhc3M6ICc8YXBwbGUgY2xhc3M9XCJzbWFsbFwiPicsIGlkOiAnPGFwcGxlIGlkPSBcImdyZWVuXCI+Jyxcbn07XG5leHBvcnRzLmRvaWx5ID0ge1xuICAgIG5hbWU6ICdkb2lseScsIHRhZzogJzxkb2lseT48L2RvaWx5PicsIHRhZ09wZW5lZDogJzxkb2lseT4nLCB0YWdDbG9zZWQ6ICc8L2RvaWx5PicsIGNsYXNzTmFtZTogJ2RvaWx5JywgbmFtZUNsYXNzOiAnPGRvaWx5IGNsYXNzPVwic21hbGxcIj4nLFxufTtcbmV4cG9ydHMuY2Fycm90ID0ge1xuICAgIG5hbWU6ICdjYXJyb3QnLCB0YWc6ICc8Y2Fycm90PjwvY2Fycm90PicsIHRhZ09wZW5lZDogJzxjYXJyb3Q+JywgdGFnQ2xvc2VkOiAnPC9jYXJyb3Q+JywgY2xhc3NOYW1lOiAnY2Fycm90JywgbmFtZUNsYXNzOiAnPGNhcnJvdCBjbGFzcz1cInNtYWxsXCI+Jyxcbn07XG5leHBvcnRzLmFyclRhYkVsID0gW3tcbiAgICAgICAgbGV2ZWw6ICcxJyxcbiAgICAgICAgdGl0bGU6ICdTZWxlY3QgdGhlIG9yYW5nZXMnLFxuICAgICAgICBoZWxwOiAnb3JhbmdlJyxcbiAgICAgICAgZWxlbTogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiBleHBvcnRzLm9yYW5nZS5uYW1lLCBjb2w6ICdPbmUnLCBjaGVja2VkOiB0cnVlLCBuZXN0aW5nOiAwLCBjaGlsZDogMCwgY2xhc3M6IDAsIGlkOiAwLCBvYmo6IGV4cG9ydHMub3JhbmdlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBleHBvcnRzLm9yYW5nZS5uYW1lLCBjb2w6ICdUd28nLCBjaGVja2VkOiB0cnVlLCBuZXN0aW5nOiAwLCBjaGlsZDogMCwgY2xhc3M6IDAsIGlkOiAwLCBvYmo6IGV4cG9ydHMub3JhbmdlLFxuICAgICAgICAgICAgfV0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxldmVsOiAnMicsXG4gICAgICAgIHRpdGxlOiAnU2VsZWN0IHRoZSBvcmFuZ2UnLFxuICAgICAgICBoZWxwOiAnYXBwbGUnLFxuICAgICAgICBlbGVtOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6IGV4cG9ydHMucGxhdGUubmFtZSwgY29sOiAnT25lJywgY2hlY2tlZDogZmFsc2UsIG5lc3Rpbmc6IDAsIGNsYXNzOiAwLCBjaGlsZDogW2V4cG9ydHMuYXBwbGVdLCBpZDogMCwgb2JqOiBleHBvcnRzLnBsYXRlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBleHBvcnRzLmFwcGxlLm5hbWUsIGNvbDogJ09uZScsIGNoZWNrZWQ6IHRydWUsIG5lc3Rpbmc6IGAke2V4cG9ydHMucGxhdGUubmFtZX1PbmVgLCBjaGlsZDogMCwgY2xhc3M6IDAsIGlkOiAwLCBvYmo6IGV4cG9ydHMuYXBwbGUsXG4gICAgICAgICAgICB9XSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGV2ZWw6ICczJyxcbiAgICAgICAgdGl0bGU6ICdTZWxlY3QgdGhlIGNhcnJvdCcsXG4gICAgICAgIGhlbHA6ICdwbGF0ZSBjYXJyb3QnLFxuICAgICAgICBlbGVtOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6IGV4cG9ydHMucGxhdGUubmFtZSwgY29sOiAnT25lJywgY2hlY2tlZDogZmFsc2UsIG5lc3Rpbmc6IDAsIGNoaWxkOiBbZXhwb3J0cy5jYXJyb3RdLCBjbGFzczogMCwgaWQ6IDAsIG9iajogZXhwb3J0cy5wbGF0ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogZXhwb3J0cy5jYXJyb3QubmFtZSwgY29sOiAnT25lJywgY2hlY2tlZDogdHJ1ZSwgbmVzdGluZzogYCR7ZXhwb3J0cy5wbGF0ZS5uYW1lfU9uZWAsIGNoaWxkOiAwLCBjbGFzczogMCwgaWQ6IDAsIG9iajogZXhwb3J0cy5jYXJyb3QsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IGV4cG9ydHMuY2Fycm90Lm5hbWUsIGNvbDogJ1R3bycsIGNoZWNrZWQ6IGZhbHNlLCBuZXN0aW5nOiAwLCBjaGlsZDogMCwgY2xhc3M6IDAsIGlkOiAwLCBvYmo6IGV4cG9ydHMuY2Fycm90LFxuICAgICAgICAgICAgfV0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxldmVsOiAnNCcsXG4gICAgICAgIHRpdGxlOiAnU2VsZWN0IHRoZSBzbWFsbCBvcmFuZ2UnLFxuICAgICAgICBoZWxwOiAnLnNtYWxsJyxcbiAgICAgICAgZWxlbTogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiBleHBvcnRzLmRvaWx5Lm5hbWUsIGNvbDogJ09uZScsIGNoZWNrZWQ6IGZhbHNlLCBuZXN0aW5nOiAwLCBjaGlsZDogW2V4cG9ydHMub3JhbmdlXSwgY2xhc3M6IDAsIGlkOiAwLCBvYmo6IGV4cG9ydHMuZG9pbHksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IGV4cG9ydHMub3JhbmdlLm5hbWUsIGNvbDogJ09uZScsIGNoZWNrZWQ6IHRydWUsIG5lc3Rpbmc6IGAke2V4cG9ydHMuZG9pbHkubmFtZX1PbmVgLCBjaGlsZDogMCwgY2xhc3M6ICdzbWFsbCcsIGlkOiAwLCBvYmo6IGV4cG9ydHMub3JhbmdlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBleHBvcnRzLm9yYW5nZS5uYW1lLCBjb2w6ICdUd28nLCBjaGVja2VkOiBmYWxzZSwgbmVzdGluZzogMCwgY2hpbGQ6IDAsIGNsYXNzOiAwLCBpZDogMCwgb2JqOiBleHBvcnRzLm9yYW5nZSxcbiAgICAgICAgICAgIH1dLFxuICAgIH0sXG4gICAge1xuICAgICAgICBsZXZlbDogJzUnLFxuICAgICAgICB0aXRsZTogJ1NlbGVjdCBhbGwgdGhlIHRoaW5ncyBvbiB0aGUgcGxhdGVzJyxcbiAgICAgICAgaGVscDogJ3BsYXRlIConLFxuICAgICAgICBlbGVtOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6IGV4cG9ydHMucGxhdGUubmFtZSwgY29sOiAnT25lJywgY2hlY2tlZDogZmFsc2UsIG5lc3Rpbmc6IDAsIGNoaWxkOiBbZXhwb3J0cy5hcHBsZV0sIGNsYXNzOiAwLCBpZDogMCwgb2JqOiBleHBvcnRzLnBsYXRlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBleHBvcnRzLmFwcGxlLm5hbWUsIGNvbDogJ09uZScsIGNoZWNrZWQ6IHRydWUsIG5lc3Rpbmc6IGAke2V4cG9ydHMucGxhdGUubmFtZX1PbmVgLCBjaGlsZDogMCwgY2xhc3M6IDAsIGlkOiAnZ3JlZW4nLCBvYmo6IGV4cG9ydHMuYXBwbGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IGV4cG9ydHMucGxhdGUubmFtZSwgY29sOiAnVHdvJywgY2hlY2tlZDogZmFsc2UsIG5lc3Rpbmc6IDAsIGNoaWxkOiBbZXhwb3J0cy5jYXJyb3RdLCBjbGFzczogMCwgaWQ6IDAsIG9iajogZXhwb3J0cy5wbGF0ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogZXhwb3J0cy5jYXJyb3QubmFtZSwgY29sOiAnVHdvJywgY2hlY2tlZDogdHJ1ZSwgbmVzdGluZzogYCR7ZXhwb3J0cy5wbGF0ZS5uYW1lfVR3b2AsIGNoaWxkOiAwLCBjbGFzczogMCwgaWQ6IDAsIG9iajogZXhwb3J0cy5jYXJyb3QsXG4gICAgICAgICAgICB9XSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGV2ZWw6ICc2JyxcbiAgICAgICAgdGl0bGU6ICdTZWxlY3QgdGhlIG9yYW5nZSBvbiB0aGUgY29sb3JlZCBwbGF0ZScsXG4gICAgICAgIGhlbHA6ICcjY29sb3JlZCBvcmFuZ2UnLFxuICAgICAgICBlbGVtOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6IGV4cG9ydHMucGxhdGUubmFtZSwgY29sOiAnT25lJywgY2hlY2tlZDogZmFsc2UsIG5lc3Rpbmc6IDAsIGNoaWxkOiBbZXhwb3J0cy5vcmFuZ2VdLCBjbGFzczogMCwgaWQ6IDAsIG9iajogZXhwb3J0cy5wbGF0ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogZXhwb3J0cy5vcmFuZ2UubmFtZSwgY29sOiAnT25lJywgY2hlY2tlZDogZmFsc2UsIG5lc3Rpbmc6IGAke2V4cG9ydHMucGxhdGUubmFtZX1PbmVgLCBjaGlsZDogMCwgY2xhc3M6IDAsIGlkOiAwLCBvYmo6IGV4cG9ydHMub3JhbmdlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBleHBvcnRzLnBsYXRlLm5hbWUsIGNvbDogJ1R3bycsIGNoZWNrZWQ6IGZhbHNlLCBuZXN0aW5nOiAwLCBjaGlsZDogW2V4cG9ydHMub3JhbmdlXSwgY2xhc3M6IDAsIGlkOiAnY29sb3JlZCcsIG9iajogZXhwb3J0cy5wbGF0ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogZXhwb3J0cy5vcmFuZ2UubmFtZSwgY29sOiAnVHdvJywgY2hlY2tlZDogdHJ1ZSwgbmVzdGluZzogYCR7ZXhwb3J0cy5wbGF0ZS5uYW1lfVR3b2AsIGNoaWxkOiAwLCBjbGFzczogMCwgaWQ6IDAsIG9iajogZXhwb3J0cy5vcmFuZ2UsXG4gICAgICAgICAgICB9XSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGV2ZWw6ICc3JyxcbiAgICAgICAgdGl0bGU6ICdTZWxlY3QgYWxsIHRoZSBzbWFsbCBvcmFuZ2VzJyxcbiAgICAgICAgaGVscDogJ29yYW5nZScsXG4gICAgICAgIGVsZW06IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogZXhwb3J0cy5kb2lseS5uYW1lLCBjb2w6ICdPbmUnLCBjaGVja2VkOiBmYWxzZSwgbmVzdGluZzogMCwgY2hpbGQ6IFtleHBvcnRzLm9yYW5nZV0sIGNsYXNzOiAwLCBpZDogMCwgb2JqOiBleHBvcnRzLmRvaWx5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBleHBvcnRzLm9yYW5nZS5uYW1lLCBjb2w6ICdPbmUnLCBjaGVja2VkOiB0cnVlLCBuZXN0aW5nOiBgJHtleHBvcnRzLmRvaWx5Lm5hbWV9T25lYCwgY2hpbGQ6IDAsIGNsYXNzOiAnc21hbGwnLCBpZDogMCwgb2JqOiBleHBvcnRzLm9yYW5nZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogZXhwb3J0cy5wbGF0ZS5uYW1lLCBjb2w6ICdPbmUnLCBjaGVja2VkOiBmYWxzZSwgbmVzdGluZzogMCwgY2hpbGQ6IFtleHBvcnRzLmFwcGxlXSwgY2xhc3M6IDAsIGlkOiAwLCBvYmo6IGV4cG9ydHMucGxhdGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IGV4cG9ydHMuYXBwbGUubmFtZSwgY29sOiAnT25lJywgY2hlY2tlZDogZmFsc2UsIG5lc3Rpbmc6IGAke2V4cG9ydHMucGxhdGUubmFtZX1PbmVgLCBjaGlsZDogMCwgY2xhc3M6ICdzbWFsbCcsIGlkOiAwLCBvYmo6IGV4cG9ydHMuYXBwbGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IGV4cG9ydHMub3JhbmdlLm5hbWUsIGNvbDogJ1R3bycsIGNoZWNrZWQ6IHRydWUsIG5lc3Rpbmc6IDAsIGNoaWxkOiAwLCBjbGFzczogJ3NtYWxsJywgaWQ6IDAsIG9iajogZXhwb3J0cy5vcmFuZ2UsXG4gICAgICAgICAgICB9XSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGV2ZWw6ICc4JyxcbiAgICAgICAgdGl0bGU6ICdTZWxlY3QgdGhlIGNhcnJvdCBhdCB0aGUgb3JhbmdlJyxcbiAgICAgICAgaGVscDogJ2NhcnJvdCwgb3JhbmdlJyxcbiAgICAgICAgZWxlbTogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiBleHBvcnRzLmRvaWx5Lm5hbWUsIGNvbDogJ09uZScsIGNoZWNrZWQ6IGZhbHNlLCBuZXN0aW5nOiAwLCBjaGlsZDogW2V4cG9ydHMuY2Fycm90XSwgY2xhc3M6IDAsIGlkOiAwLCBvYmo6IGV4cG9ydHMuZG9pbHksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IGV4cG9ydHMuY2Fycm90Lm5hbWUsIGNvbDogJ09uZScsIGNoZWNrZWQ6IHRydWUsIG5lc3Rpbmc6IGAke2V4cG9ydHMuZG9pbHkubmFtZX1PbmVgLCBjaGlsZDogMCwgY2xhc3M6IDAsIGlkOiAwLCBvYmo6IGV4cG9ydHMuY2Fycm90LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBleHBvcnRzLnBsYXRlLm5hbWUsIGNvbDogJ09uZScsIGNoZWNrZWQ6IGZhbHNlLCBuZXN0aW5nOiAwLCBjaGlsZDogW2V4cG9ydHMub3JhbmdlXSwgY2xhc3M6IDAsIGlkOiAwLCBvYmo6IGV4cG9ydHMucGxhdGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IGV4cG9ydHMub3JhbmdlLm5hbWUsIGNvbDogJ09uZScsIGNoZWNrZWQ6IHRydWUsIG5lc3Rpbmc6IGAke2V4cG9ydHMucGxhdGUubmFtZX1PbmVgLCBjaGlsZDogMCwgY2xhc3M6IDAsIGlkOiAwLCBvYmo6IGV4cG9ydHMub3JhbmdlLFxuICAgICAgICAgICAgfV0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGxldmVsOiAnOScsXG4gICAgICAgIHRpdGxlOiAnU2VsZWN0IGFsbCB0aGUgY2Fycm90cycsXG4gICAgICAgIGhlbHA6ICdwbGF0ZSBjYXJyb3QnLFxuICAgICAgICBlbGVtOiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6IGV4cG9ydHMuZG9pbHkubmFtZSwgY29sOiAnT25lJywgY2hlY2tlZDogZmFsc2UsIG5lc3Rpbmc6IDAsIGNoaWxkOiAwLCBjbGFzczogMCwgaWQ6IDAsIG9iajogZXhwb3J0cy5kb2lseSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogZXhwb3J0cy5wbGF0ZS5uYW1lLCBjb2w6ICdPbmUnLCBjaGVja2VkOiBmYWxzZSwgbmVzdGluZzogMCwgY2hpbGQ6IFtleHBvcnRzLmNhcnJvdCwgZXhwb3J0cy5vcmFuZ2VdLCBjbGFzczogMCwgaWQ6IDAsIG9iajogZXhwb3J0cy5wbGF0ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogZXhwb3J0cy5jYXJyb3QubmFtZSwgY29sOiAnT25lJywgY2hlY2tlZDogdHJ1ZSwgbmVzdGluZzogYCR7ZXhwb3J0cy5wbGF0ZS5uYW1lfU9uZWAsIGNoaWxkOiAwLCBjbGFzczogMCwgaWQ6IDAsIG9iajogZXhwb3J0cy5jYXJyb3QsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IGV4cG9ydHMub3JhbmdlLm5hbWUsIGNvbDogJ09uZScsIGNoZWNrZWQ6IGZhbHNlLCBuZXN0aW5nOiBgJHtleHBvcnRzLnBsYXRlLm5hbWV9T25lYCwgY2hpbGQ6IDAsIGNsYXNzOiAwLCBpZDogMCwgb2JqOiBleHBvcnRzLm9yYW5nZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogZXhwb3J0cy5kb2lseS5uYW1lLCBjb2w6ICdUd28nLCBjaGVja2VkOiBmYWxzZSwgbmVzdGluZzogMCwgY2hpbGQ6IFtleHBvcnRzLmNhcnJvdF0sIGNsYXNzOiAwLCBpZDogMCwgb2JqOiBleHBvcnRzLmRvaWx5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBleHBvcnRzLmNhcnJvdC5uYW1lLCBjb2w6ICdUd28nLCBjaGVja2VkOiBmYWxzZSwgbmVzdGluZzogYCR7ZXhwb3J0cy5kb2lseS5uYW1lfVR3b2AsIGNoaWxkOiAwLCBjbGFzczogMCwgaWQ6IDAsIG9iajogZXhwb3J0cy5jYXJyb3QsXG4gICAgICAgICAgICB9XSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbGV2ZWw6ICcxMCcsXG4gICAgICAgIHRpdGxlOiAnU2VsZWN0IGFsbCB0aGUgZWxlbWVudHMgYWZ0ZXIgZG9pbHknLFxuICAgICAgICBoZWxwOiAnZG9pbHkgfiAqJyxcbiAgICAgICAgZWxlbTogW3tcbiAgICAgICAgICAgICAgICBuYW1lOiBleHBvcnRzLmRvaWx5Lm5hbWUsIGNvbDogJ09uZScsIGNoZWNrZWQ6IGZhbHNlLCBuZXN0aW5nOiAwLCBjaGlsZDogMCwgY2xhc3M6IDAsIGlkOiAwLCBvYmo6IGV4cG9ydHMuZG9pbHksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IGV4cG9ydHMucGxhdGUubmFtZSwgY29sOiAnT25lJywgY2hlY2tlZDogdHJ1ZSwgbmVzdGluZzogMCwgY2hpbGQ6IFtleHBvcnRzLmFwcGxlXSwgY2xhc3M6IDAsIGlkOiAwLCBvYmo6IGV4cG9ydHMucGxhdGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IGV4cG9ydHMuY2Fycm90Lm5hbWUsIGNvbDogJ09uZScsIGNoZWNrZWQ6IHRydWUsIG5lc3Rpbmc6IDAsIGNoaWxkOiAwLCBjbGFzczogMCwgaWQ6IDAsIG9iajogZXhwb3J0cy5jYXJyb3QsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IGV4cG9ydHMuYXBwbGUubmFtZSwgY29sOiAnT25lJywgY2hlY2tlZDogZmFsc2UsIG5lc3Rpbmc6IGAke2V4cG9ydHMucGxhdGUubmFtZX1PbmVgLCBjaGlsZDogMCwgY2xhc3M6IDAsIGlkOiAwLCBvYmo6IGV4cG9ydHMuYXBwbGUsXG4gICAgICAgICAgICB9XSxcbiAgICB9XTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY2hlY2tMZXZlbCA9IHZvaWQgMDtcbnJlcXVpcmUoXCIuL3N0eWxlLmNzc1wiKTtcbmNvbnN0IGJsb2NrT25lXzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2Jsb2NrT25lXCIpO1xuY29uc3QgYmxvY2tFZGl0b3JfMSA9IHJlcXVpcmUoXCIuL2NvbXBvbmVudHMvYmxvY2tFZGl0b3JcIik7XG5jb25zdCBibG9ja0xldmVsXzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2Jsb2NrTGV2ZWxcIik7XG5jb25zdCBMZXZlbF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9MZXZlbFwiKTtcbmNvbnN0IFRhYmxlR2VuZXJhdG9yXzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL1RhYmxlR2VuZXJhdG9yXCIpO1xuY29uc3QgZGF0YV8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9kYXRhXCIpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpO1xuaWYgKGJvZHkpXG4gICAgYm9keS5hcHBlbmQoY29udGFpbmVyKTtcbmNvbnN0IG1haW5CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbm1haW5CbG9jay5jbGFzc0xpc3QuYWRkKCdtYWluYmxvY2snKTtcbmNvbnRhaW5lci5hcHBlbmQobWFpbkJsb2NrKTtcbmNvbnN0IGxldmVsQmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5sZXZlbEJsb2NrLmNsYXNzTGlzdC5hZGQoJ2xldmVsLWJsb2NrJyk7XG5jb250YWluZXIuYXBwZW5kKGxldmVsQmxvY2spO1xuY29uc3QgaGVhZGVyID0gYmxvY2tPbmVfMS5CbG9ja09uZS5jcmVhdGVIZWFkZXIoKTtcbm1haW5CbG9jay5hcHBlbmQoaGVhZGVyKTtcbmNvbnN0IHRpdGxlID0gYmxvY2tPbmVfMS5CbG9ja09uZS5jcmVhdGVUaXRsZSgpO1xubWFpbkJsb2NrLmFwcGVuZCh0aXRsZSk7XG5jb25zdCBoZWxwID0gYmxvY2tPbmVfMS5CbG9ja09uZS5jcmVhdGVIZWxwKCk7XG5jb25zdCB0YWJsZVdyYXBwZXIgPSBibG9ja09uZV8xLkJsb2NrT25lLmNyZWF0ZVRhYmxlKCk7XG5tYWluQmxvY2suYXBwZW5kKHRhYmxlV3JhcHBlcik7XG5jb25zdCB0YWJsZWNsb3RoID0gYmxvY2tPbmVfMS5CbG9ja09uZS5jcmVhdGVUYWJsZUdhbWUoKTtcbmNvbnN0IHRhYmxlVGFiID0gYmxvY2tPbmVfMS5CbG9ja09uZS5jcmVhdGVUYWJsZVRhYigpO1xuLy8gdGFibGVXcmFwcGVyLmFwcGVuZCh0YWJsZVRhYik7XG5pZiAodGFibGVXcmFwcGVyLmZpcnN0Q2hpbGQgJiYgdGFibGVXcmFwcGVyLmZpcnN0Q2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgIHRhYmxlV3JhcHBlci5maXJzdENoaWxkLmFwcGVuZCh0YWJsZVRhYik7XG4gICAgdGFibGVXcmFwcGVyLmZpcnN0Q2hpbGQuYXBwZW5kKHRhYmxlY2xvdGgpO1xufVxuY29uc3QgZWRpdG9yID0gYmxvY2tFZGl0b3JfMS5CbG9ja0VkaXRvci5jcmVhdGVFZGl0b3IoKTtcbm1haW5CbG9jay5hcHBlbmQoZWRpdG9yKTtcbmNvbnN0IGVkaXRvckJsb2NrQ1NTID0gYmxvY2tFZGl0b3JfMS5CbG9ja0VkaXRvci5jcmVhdGVCbG9ja0VkaXRvcigpO1xuY29uc3QgZWRpdG9yQmxvY2tIVE1MID0gYmxvY2tFZGl0b3JfMS5CbG9ja0VkaXRvci5jcmVhdGVCbG9ja0VkaXRvcigpO1xuZWRpdG9yLmFwcGVuZChlZGl0b3JCbG9ja0NTUyk7XG5lZGl0b3IuYXBwZW5kKGVkaXRvckJsb2NrSFRNTCk7XG5jb25zdCBoZWFkZXJCbG9ja0NTUyA9IGJsb2NrRWRpdG9yXzEuQmxvY2tFZGl0b3IuY3JlYXRlSGVhZGVyRWRpdG9yKCk7XG5pZiAoaGVhZGVyQmxvY2tDU1MuZmlyc3RDaGlsZCAmJiBoZWFkZXJCbG9ja0NTUy5maXJzdENoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICBoZWFkZXJCbG9ja0NTUy5maXJzdENoaWxkLmlubmVySFRNTCA9ICdDU1MgRWRpdG9yJztcbn1cbmlmIChoZWFkZXJCbG9ja0NTUy5sYXN0Q2hpbGQgJiYgaGVhZGVyQmxvY2tDU1MubGFzdENoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICBoZWFkZXJCbG9ja0NTUy5sYXN0Q2hpbGQuaW5uZXJIVE1MID0gJ3N0eWxlLmNzcyc7XG59XG5jb25zdCBoZWFkZXJCbG9ja0hUTUwgPSBibG9ja0VkaXRvcl8xLkJsb2NrRWRpdG9yLmNyZWF0ZUhlYWRlckVkaXRvcigpO1xuaWYgKGhlYWRlckJsb2NrSFRNTC5maXJzdENoaWxkICYmIGhlYWRlckJsb2NrSFRNTC5maXJzdENoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICBoZWFkZXJCbG9ja0hUTUwuZmlyc3RDaGlsZC5pbm5lckhUTUwgPSAnSFRNTCBWaWV3ZXInO1xufVxuaWYgKGhlYWRlckJsb2NrSFRNTC5sYXN0Q2hpbGQgJiYgaGVhZGVyQmxvY2tIVE1MLmxhc3RDaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgaGVhZGVyQmxvY2tIVE1MLmxhc3RDaGlsZC5pbm5lckhUTUwgPSAndGFibGUuaHRtbCc7XG59XG5lZGl0b3JCbG9ja0NTUy5hcHBlbmQoaGVhZGVyQmxvY2tDU1MpO1xuZWRpdG9yQmxvY2tIVE1MLmFwcGVuZChoZWFkZXJCbG9ja0hUTUwpO1xuY29uc3Qgd2lub3dDc3MgPSBibG9ja0VkaXRvcl8xLkJsb2NrRWRpdG9yLmNyZWF0ZVdpbmRvd0Jsb2NrKCk7XG5jb25zdCBsaW5lQmxvY2tDc3MgPSBibG9ja0VkaXRvcl8xLkJsb2NrRWRpdG9yLmNyZWF0ZUxpbmVCbG9jaygpO1xud2lub3dDc3MuYXBwZW5kKGxpbmVCbG9ja0Nzcyk7XG5lZGl0b3JCbG9ja0NTUy5hcHBlbmQod2lub3dDc3MpO1xuY29uc3Qgd2luZG93TWFpbkNzcyA9IGJsb2NrRWRpdG9yXzEuQmxvY2tFZGl0b3IuY3JlYXRlTWFpbldpbmRvdygpO1xud2lub3dDc3MuYXBwZW5kKHdpbmRvd01haW5Dc3MpO1xuY29uc3QgaW5wdXRCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuaW5wdXRCbG9jay5jbGFzc0xpc3QuYWRkKCdpbnB1dC1ibG9jaycpO1xuY29uc3QgaW5wdXQgPSBibG9ja0VkaXRvcl8xLkJsb2NrRWRpdG9yLmNyZWF0ZUlucHV0KCk7XG5jb25zdCBidXR0b24gPSBibG9ja0VkaXRvcl8xLkJsb2NrRWRpdG9yLmNyZWF0ZUJ1dHRvbigpO1xuaW5wdXRCbG9jay5hcHBlbmQoaW5wdXQpO1xud2luZG93TWFpbkNzcy5hcHBlbmQoaW5wdXRCbG9jayk7XG5pbnB1dEJsb2NrLmFwcGVuZChidXR0b24pO1xud2luZG93TWFpbkNzcy5hcHBlbmQoaGVscCk7XG5jb25zdCB3aW5kb3dIdE1MID0gYmxvY2tFZGl0b3JfMS5CbG9ja0VkaXRvci5jcmVhdGVXaW5kb3dCbG9jaygpO1xud2luZG93SHRNTC5jbGFzc0xpc3QuYWRkKCd3aW5kb3ctaHRtbCcpO1xuY29uc3QgbGluZUJsb2NrSFRNTCA9IGJsb2NrRWRpdG9yXzEuQmxvY2tFZGl0b3IuY3JlYXRlTGluZUJsb2NrKCk7XG53aW5kb3dIdE1MLmFwcGVuZChsaW5lQmxvY2tIVE1MKTtcbmNvbnN0IHdpbmRvd01haW5IVE1MID0gYmxvY2tFZGl0b3JfMS5CbG9ja0VkaXRvci5jcmVhdGVNYWluV2luZG93KCk7XG53aW5kb3dIdE1MLmFwcGVuZCh3aW5kb3dNYWluSFRNTCk7XG5lZGl0b3JCbG9ja0hUTUwuYXBwZW5kKHdpbmRvd0h0TUwpO1xuY29uc3QgZm9vdGVyID0gYmxvY2tPbmVfMS5CbG9ja09uZS5jcmVhdGVGb290ZXIoKTtcbm1haW5CbG9jay5hcHBlbmQoZm9vdGVyKTtcbmNvbnN0IGJsb2NrTGV2ZWwgPSBibG9ja0xldmVsXzEuTGV2ZWxCbG9jay5jcmVhdGVMZXZlbEJsb2NrKCk7XG5sZXZlbEJsb2NrLmFwcGVuZChibG9ja0xldmVsKTtcbmNvbnN0IGhlYWRlckxldmVsID0gYmxvY2tMZXZlbF8xLkxldmVsQmxvY2suY3JlYXRlTGV2ZWxIZWFkZXIoKTtcbmJsb2NrTGV2ZWwuYXBwZW5kKGhlYWRlckxldmVsKTtcbmxldCBpID0gMTA7XG53aGlsZSAoaSA+IDApIHtcbiAgICBjb25zdCBsZXZlbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldmVsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xldmVsLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGxldmVsTWFyayA9IGJsb2NrTGV2ZWxfMS5MZXZlbEJsb2NrLmNyZWF0ZU1hcmsoKTtcbiAgICBsZXZlbENvbnRhaW5lci5hcHBlbmQobGV2ZWxNYXJrKTtcbiAgICBjb25zdCBsZXZlbE51bWJlciA9IGJsb2NrTGV2ZWxfMS5MZXZlbEJsb2NrLmNyZWF0ZUxldmVsKCk7XG4gICAgbGV2ZWxOdW1iZXIuaW5uZXJIVE1MID0gYCR7aX1gO1xuICAgIGxldmVsQ29udGFpbmVyLmFwcGVuZChsZXZlbE51bWJlcik7XG4gICAgaGVhZGVyTGV2ZWwuYWZ0ZXIobGV2ZWxDb250YWluZXIpO1xuICAgIGkgLT0gMTtcbn1cbmNvbnN0IGJ1dHRvblJlc2V0ID0gYmxvY2tMZXZlbF8xLkxldmVsQmxvY2suY3JlYXRlQnV0dG9uKCk7XG5sZXZlbEJsb2NrLmFwcGVuZChidXR0b25SZXNldCk7XG5jb25zdCBwb3BhcCA9IGJsb2NrT25lXzEuQmxvY2tPbmUuY3JlYXRlUG9wYXAoKTtcbmJvZHkgPT09IG51bGwgfHwgYm9keSA9PT0gdm9pZCAwID8gdm9pZCAwIDogYm9keS5hcHBlbmQocG9wYXApO1xuY29uc3QgbGV2ZWwgPSBuZXcgTGV2ZWxfMS5MZXZlbCgpO1xuY29uc3QgdGFibGUgPSBuZXcgVGFibGVHZW5lcmF0b3JfMS5UYWJsZUdlbmVyYXRvcigpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuLCBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5sZXZlbEJsb2NrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKGUudGFyZ2V0ICYmIGUudGFyZ2V0IGluc3RhbmNlb2YgSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5sZXZlbC1jb250YWluZXInKSkge1xuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWN0aXZlJyk7XG4gICAgICAgICAgICBpZiAoYWN0aXZlcykge1xuICAgICAgICAgICAgICAgIGFjdGl2ZXMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIChfYSA9IGUudGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGNvbnN0IG51bSA9IGUudGFyZ2V0LmlubmVySFRNTDtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgICAgICAgIHNldExvY2FsZVN0b3JhZ2UobnVtKTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgICAgICAgIGNoZWNrTGV2ZWwobnVtKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xudGFibGUudGFibGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0YWJsZS1nZW4nKSkge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdob3ZlcmVkJyk7XG4gICAgICAgIGNvbnN0IGRhdGFOYW1lID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWhvdmVyZWQnKTtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRlbXBsYXRlLWN1cmx5LWluLXN0cmluZ1xuICAgICAgICBjb25zdCBlbEhvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgZGl2W2RhdGEtaG92ZXJlZD0ke2RhdGFOYW1lfV1gKTtcbiAgICAgICAgZWxIb3ZlciA9PT0gbnVsbCB8fCBlbEhvdmVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbEhvdmVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICAgIGNyZWF0ZVRvb2x0aXAoZS50YXJnZXQpO1xuICAgIH1cbn0pO1xudGFibGUudGFibGUuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQnKTtcbiAgICAgICAgY29uc3QgZGF0YU5hbWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaG92ZXJlZCcpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGVtcGxhdGUtY3VybHktaW4tc3RyaW5nXG4gICAgICAgIGNvbnN0IGVsSG92ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBkaXZbZGF0YS1ob3ZlcmVkPSR7ZGF0YU5hbWV9XWApO1xuICAgICAgICBlbEhvdmVyID09PSBudWxsIHx8IGVsSG92ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsSG92ZXIuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGUudGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkICYmIGUudGFyZ2V0LmZpcnN0RWxlbWVudENoaWxkLmNsYXNzTGlzdC5jb250YWlucygndG9vbHRpcCcpKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5maXJzdEVsZW1lbnRDaGlsZC5vdXRlckhUTUwgPSAnJztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xud2luZG93TWFpbkhUTUwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCd3aW5kb3ctbWFpbicpXG4gICAgICAgICYmICFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYmxlLWRpdicpKSB7XG4gICAgICAgIGNvbnN0IGRhdGFOYW1lID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWhvdmVyZWQnKTtcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIGNvbnN0IGVsSG92ZXIgPSB0YWJsZWNsb3RoLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWhvdmVyZWQ9JHtkYXRhTmFtZX1dYCk7XG4gICAgICAgIGVsSG92ZXIgPT09IG51bGwgfHwgZWxIb3ZlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWxIb3Zlci5jbGFzc0xpc3QuYWRkKCdob3ZlcmVkJyk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgICAgaWYgKGVsSG92ZXIgJiYgZWxIb3ZlciBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KVxuICAgICAgICAgICAgY3JlYXRlVG9vbHRpcChlbEhvdmVyKTtcbiAgICB9XG59KTtcbndpbmRvd01haW5IVE1MLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgY29uc3QgZGF0YU5hbWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaG92ZXJlZCcpO1xuICAgICAgICBjb25zdCBlbEhvdmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaG92ZXJlZD0ke2RhdGFOYW1lfV1gKTtcbiAgICAgICAgZWxIb3ZlciA9PT0gbnVsbCB8fCBlbEhvdmVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbEhvdmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hvdmVyZWQnKTtcbiAgICAgICAgaWYgKChlbEhvdmVyID09PSBudWxsIHx8IGVsSG92ZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsSG92ZXIuZmlyc3RFbGVtZW50Q2hpbGQpICYmIGVsSG92ZXIuZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b29sdGlwJykpIHtcbiAgICAgICAgICAgIGVsSG92ZXIuZmlyc3RFbGVtZW50Q2hpbGQub3V0ZXJIVE1MID0gJyc7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmVcbmJ1dHRvblJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXQpO1xuYnV0dG9uUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4ge1xuICAgIGJ1dHRvblJlc2V0LmNsYXNzTGlzdC5hZGQoJ2NsaWNrJyk7XG59KTtcbmJ1dHRvblJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgYnV0dG9uUmVzZXQuY2xhc3NMaXN0LnJlbW92ZSgnY2xpY2snKTtcbn0pO1xuZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgIGNvbnN0IGFjdGl2ZXNMZXZlbCA9IGxldmVsQmxvY2sucXVlcnlTZWxlY3RvckFsbCgnLnBhc3NlZCcpO1xuICAgIGNvbnN0IGFjdGl2ZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2ZScpO1xuICAgIGNvbnN0IGhlbHBzID0gbGV2ZWxCbG9jay5xdWVyeVNlbGVjdG9yQWxsKCcuaGVscCcpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXR1cm4tYXNzaWduLCBuby1wYXJhbS1yZWFzc2lnblxuICAgIGhlbHBzID09PSBudWxsIHx8IGhlbHBzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBoZWxwcy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLm91dGVySFRNTCA9ICcnKTtcbiAgICBhY3RpdmVFbCA9PT0gbnVsbCB8fCBhY3RpdmVFbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWN0aXZlRWwuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XG4gICAgYWN0aXZlc0xldmVsLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdwYXNzZWQnKTtcbiAgICB9KTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgY2hlY2tMZXZlbCgnMScpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICBzZXRMb2NhbGVTdG9yYWdlKCcxJyk7XG4gICAgKF9iID0gKF9hID0gaGVhZGVyTGV2ZWwubmV4dEVsZW1lbnRTaWJsaW5nKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZmlyc3RFbGVtZW50Q2hpbGQpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAoX2QgPSAoX2MgPSBoZWFkZXJMZXZlbC5uZXh0RWxlbWVudFNpYmxpbmcpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5sYXN0RWxlbWVudENoaWxkKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5mdW5jdGlvbiBjcmVhdGVUb29sdGlwKGVsZW1lbnQpIHtcbiAgICBjb25zdCBpZE5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICBjb25zdCB0YWdOYW1lID0gZWxlbWVudC50YWdOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgdG9vbHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0b29sdGlwLmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXAnKTtcbiAgICBlbGVtZW50LnByZXBlbmQodG9vbHRpcCk7XG4gICAgaWYgKHRhZ05hbWUgPT09IGRhdGFfMS5wbGF0ZS5uYW1lKSB7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc21hbGwnKSkge1xuICAgICAgICAgICAgdG9vbHRpcC50ZXh0Q29udGVudCA9IGAke2RhdGFfMS5wbGF0ZS5uYW1lQ2xhc3N9JHtkYXRhXzEucGxhdGUudGFnQ2xvc2VkfWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaWROYW1lKSB7XG4gICAgICAgICAgICB0b29sdGlwLnRleHRDb250ZW50ID0gYCR7ZGF0YV8xLnBsYXRlLmlkfSR7ZGF0YV8xLnBsYXRlLnRhZ0Nsb3NlZH1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9vbHRpcC50ZXh0Q29udGVudCA9IGAke2RhdGFfMS5wbGF0ZS50YWd9YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGFnTmFtZSA9PT0gZGF0YV8xLm9yYW5nZS5uYW1lKSB7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc21hbGwnKSkge1xuICAgICAgICAgICAgdG9vbHRpcC50ZXh0Q29udGVudCA9IGAke2RhdGFfMS5vcmFuZ2UubmFtZUNsYXNzfSR7ZGF0YV8xLm9yYW5nZS50YWdDbG9zZWR9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpZE5hbWUpIHtcbiAgICAgICAgICAgIHRvb2x0aXAudGV4dENvbnRlbnQgPSBgJHtkYXRhXzEub3JhbmdlLmlkfSR7ZGF0YV8xLm9yYW5nZS50YWdDbG9zZWR9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvb2x0aXAudGV4dENvbnRlbnQgPSBgJHtkYXRhXzEub3JhbmdlLnRhZ31gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0YWdOYW1lID09PSBkYXRhXzEuYXBwbGUubmFtZSkge1xuICAgICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3NtYWxsJykpIHtcbiAgICAgICAgICAgIHRvb2x0aXAudGV4dENvbnRlbnQgPSBgJHtkYXRhXzEuYXBwbGUubmFtZUNsYXNzfSR7ZGF0YV8xLmFwcGxlLnRhZ0Nsb3NlZH1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlkTmFtZSkge1xuICAgICAgICAgICAgdG9vbHRpcC50ZXh0Q29udGVudCA9IGAke2RhdGFfMS5hcHBsZS5pZH0ke2RhdGFfMS5hcHBsZS50YWdDbG9zZWR9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvb2x0aXAudGV4dENvbnRlbnQgPSBgJHtkYXRhXzEuYXBwbGUudGFnfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRhZ05hbWUgPT09IGRhdGFfMS5kb2lseS5uYW1lKSB7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc21hbGwnKSkge1xuICAgICAgICAgICAgdG9vbHRpcC50ZXh0Q29udGVudCA9IGAke2RhdGFfMS5kb2lseS5uYW1lQ2xhc3N9JHtkYXRhXzEuZG9pbHkudGFnQ2xvc2VkfWA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaWROYW1lKSB7XG4gICAgICAgICAgICB0b29sdGlwLnRleHRDb250ZW50ID0gYCR7ZGF0YV8xLmRvaWx5LmlkfSR7ZGF0YV8xLmRvaWx5LnRhZ0Nsb3NlZH1gO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdG9vbHRpcC50ZXh0Q29udGVudCA9IGAke2RhdGFfMS5kb2lseS50YWd9YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGFnTmFtZSA9PT0gZGF0YV8xLmNhcnJvdC5uYW1lKSB7XG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc21hbGwnKSkge1xuICAgICAgICAgICAgdG9vbHRpcC50ZXh0Q29udGVudCA9IGAke2RhdGFfMS5jYXJyb3QubmFtZUNsYXNzfSR7ZGF0YV8xLmNhcnJvdC50YWdDbG9zZWR9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpZE5hbWUpIHtcbiAgICAgICAgICAgIHRvb2x0aXAudGV4dENvbnRlbnQgPSBgJHtkYXRhXzEuY2Fycm90LmlkfSR7ZGF0YV8xLmNhcnJvdC50YWdDbG9zZWR9YDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRvb2x0aXAudGV4dENvbnRlbnQgPSBgJHtkYXRhXzEuY2Fycm90LnRhZ31gO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZVxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tJbnB1dCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlKSA9PiB7XG4gICAgaWYgKGUuY29kZSA9PT0gJ0VudGVyJyAmJiBpbnB1dC52YWx1ZSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICAgIGNoZWNrSW5wdXQoKTtcbiAgICB9XG59KTtcbmZ1bmN0aW9uIGNoZWNrSW5wdXQoKSB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nLCBfaCwgX2o7XG4gICAgY29uc3QgdmFsID0gaW5wdXQudmFsdWU7XG4gICAgY29uc3QgZWxlbWVudHMgPSB0YWJsZWNsb3RoLnF1ZXJ5U2VsZWN0b3JBbGwodmFsKTtcbiAgICBjb25zdCBjaGVja2VkID0gdGFibGVjbG90aC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tlZCcpO1xuICAgIGlmIChlbGVtZW50cyAmJiBlbGVtZW50cy5sZW5ndGggPT09IGNoZWNrZWQubGVuZ3RoICYmIEFycmF5LmZyb20oZWxlbWVudHMpLmV2ZXJ5KChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5jb250YWlucygnY2hlY2tlZCcpKSkge1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKSk7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LmFkZCgndHJ1ZScpKTtcbiAgICAgICAgY29uc3QgYWN0aXZlcyA9IGxldmVsQmxvY2sucXVlcnlTZWxlY3RvckFsbCgnLmFjdGl2ZScpO1xuICAgICAgICBhY3RpdmVzLmZvckVhY2goKGl0ZW0pID0+IHsgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTsgaXRlbS5jbGFzc0xpc3QuYWRkKCdwYXNzZWQnKTsgfSk7XG4gICAgICAgIChfYyA9IChfYiA9IChfYSA9IGFjdGl2ZXNbMF0ucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5leHRFbGVtZW50U2libGluZykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmZpcnN0RWxlbWVudENoaWxkKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIChfZiA9IChfZSA9IChfZCA9IGFjdGl2ZXNbMF0ucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLm5leHRFbGVtZW50U2libGluZykgPT09IG51bGwgfHwgX2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9lLmxhc3RFbGVtZW50Q2hpbGQpID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgY29uc3QgbnVtID0gKF9qID0gKF9oID0gKF9nID0gYWN0aXZlc1swXS5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfZyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2cubmV4dEVsZW1lbnRTaWJsaW5nKSA9PT0gbnVsbCB8fCBfaCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2gubGFzdEVsZW1lbnRDaGlsZCkgPT09IG51bGwgfHwgX2ogPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9qLmlubmVySFRNTDtcbiAgICAgICAgdGFibGVjbG90aC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICAgICAgICBpZiAobnVtKSB7XG4gICAgICAgICAgICAgICAgc2V0TG9jYWxlU3RvcmFnZShudW0pO1xuICAgICAgICAgICAgICAgIGNoZWNrTGV2ZWwobnVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcGFwLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRhYmxlY2xvdGguY2xhc3NMaXN0LmFkZCgnZmFsc2UnKTtcbiAgICAgICAgdGFibGVjbG90aC5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGFibGVjbG90aC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZhbHNlJykpIHtcbiAgICAgICAgICAgICAgICB0YWJsZWNsb3RoLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhbHNlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xufVxuaGVscC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB2YXIgX2E7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZVxuICAgIGNvbnN0IG51bSA9IGdldExvY2FsZVN0b3JhZ2UoKTtcbiAgICBsZXQgdGV4dCA9ICcnO1xuICAgIGlmIChudW0pIHtcbiAgICAgICAgY29uc3Qgb2JqTGV2ZWwgPSBkYXRhXzEuYXJyVGFiRWxbTnVtYmVyKG51bSkgLSAxXTtcbiAgICAgICAgdGV4dCA9IG9iakxldmVsLmhlbHA7XG4gICAgICAgIGNvbnN0IGxldmVscyA9IGxldmVsQmxvY2sucXVlcnlTZWxlY3RvckFsbCgnLmxldmVsLWNvbnRhaW5lcicpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICBpZiAobGV2ZWxzW051bWJlcihudW0pIC0gMV0ubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobGV2ZWxzW051bWJlcihudW0pIC0gMV0ubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdoZWxwJyk7XG4gICAgICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gJ2hlbHAnO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgICAgIChfYSA9IGxldmVsc1tOdW1iZXIobnVtKSAtIDFdLmxhc3RFbGVtZW50Q2hpbGQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmQoc3Bhbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IG4gPSAwO1xuICAgIGNvbnN0IHNwZWVkID0gNTAwO1xuICAgIGNvbnN0IG0gPSB0ZXh0Lmxlbmd0aDtcbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgaWYgKG4gPCBtKSB7XG4gICAgICAgICAgICBpbnB1dC52YWx1ZSArPSB0ZXh0LmNoYXJBdChuKTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgbiArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuID09PSBtKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICAgIGNoZWNrSW5wdXQoKTtcbiAgICAgICAgfVxuICAgIH0sIHNwZWVkKTtcbn0pO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgdmFyIF9hLCBfYjtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgY29uc3QgbnVtID0gZ2V0TG9jYWxlU3RvcmFnZSgpO1xuICAgIGlmIChudW0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11c2UtYmVmb3JlLWRlZmluZVxuICAgICAgICBjaGVja0xldmVsKG51bSk7XG4gICAgICAgIGNvbnN0IGxldmVscyA9IGxldmVsQmxvY2sucXVlcnlTZWxlY3RvckFsbCgnLmxldmVsLWNvbnRhaW5lcicpO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICAoX2EgPSBsZXZlbHNbTnVtYmVyKG51bSkgLSAxXS5maXJzdEVsZW1lbnRDaGlsZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAoX2IgPSBsZXZlbHNbTnVtYmVyKG51bSkgLSAxXS5sYXN0RWxlbWVudENoaWxkKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfVxufSk7XG5mdW5jdGlvbiBjaGVja0xldmVsKG51bSkge1xuICAgIGlmICh3aW5kb3dNYWluSFRNTC5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICB3aW5kb3dNYWluSFRNTC5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG4gICAgaWYgKHRhYmxlY2xvdGguZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgdGFibGVjbG90aC5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgPSAnJztcbiAgICB9XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3Qgb2JqTGV2ZWwgPSBkYXRhXzEuYXJyVGFiRWxbTnVtYmVyKG51bSkgLSAxXTtcbiAgICBjb25zdCB0aXRsZU5hbWUgPSBvYmpMZXZlbC50aXRsZTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSB0aXRsZU5hbWU7XG4gICAgd2luZG93TWFpbkhUTUwuYXBwZW5kKGxldmVsLmdldExldmVsVW4obnVtKSk7XG4gICAgdGFibGVjbG90aC5hcHBlbmQodGFibGUuY3JlYXRlVGFibGVVbihudW0pKTtcbn1cbmV4cG9ydHMuY2hlY2tMZXZlbCA9IGNoZWNrTGV2ZWw7XG5mdW5jdGlvbiBzZXRMb2NhbGVTdG9yYWdlKG51bSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdudW0nLCBudW0pO1xufVxuZnVuY3Rpb24gZ2V0TG9jYWxlU3RvcmFnZSgpIHtcbiAgICBsZXQgbnVtO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbnVtJykpIHtcbiAgICAgICAgbnVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ251bScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbnVtID0gJzEnO1xuICAgIH1cbiAgICByZXR1cm4gbnVtO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9