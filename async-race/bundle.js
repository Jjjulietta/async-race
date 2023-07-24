/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/view/viewGarage/viewGarage.css":
/*!*******************************************************!*\
  !*** ./src/components/view/viewGarage/viewGarage.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/view/viewWinners/winners.css":
/*!*****************************************************!*\
  !*** ./src/components/view/viewWinners/winners.css ***!
  \*****************************************************/
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

/***/ "./src/components/app.ts":
/*!*******************************!*\
  !*** ./src/components/app.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* eslint-disable class-methods-use-this */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
// eslint-disable-next-line import/no-cycle
const headerGarage_1 = __webpack_require__(/*! ./view/viewGarage/headerGarage */ "./src/components/view/viewGarage/headerGarage.ts");
const elemCreateButton_1 = __webpack_require__(/*! ./elemCreateButton */ "./src/components/elemCreateButton.ts");
const elemCreate_1 = __webpack_require__(/*! ./elemCreate */ "./src/components/elemCreate.ts");
const view_1 = __webpack_require__(/*! ./view/viewGarage/view */ "./src/components/view/viewGarage/view.ts");
const viewWinners_1 = __webpack_require__(/*! ./view/viewWinners/viewWinners */ "./src/components/view/viewWinners/viewWinners.ts");
class App extends view_1.ViewGarage {
    constructor() {
        super();
        const paramsHeaderApp = {
            tag: 'div',
            className: 'header-app'
        };
        const view = {
            tag: 'div',
            className: 'view'
        };
        this.buttonToGarage = new elemCreateButton_1.ElementCreatorButton('toGARAGE').getButton('toGarage');
        this.buttonToWinners = new elemCreateButton_1.ElementCreatorButton('toWINNERS').getButton('toWinners');
        this.headerApp = elemCreate_1.ElementCreator.createElement(paramsHeaderApp);
        this.headerApp.append(this.buttonToGarage, this.buttonToWinners);
        this.viewGarage = new view_1.ViewGarage().createtView();
        this.viewWinners = new viewWinners_1.ViewWinners();
        this.view = elemCreate_1.ElementCreator.createElement(view);
        this.view.append(this.viewGarage);
        document.body.append(this.headerApp, this.view);
        this.buttonToGarage.addEventListener('click', () => {
            this.view.innerHTML = '';
            this.view.append(this.viewGarage);
        });
        this.buttonToWinners.addEventListener('click', () => {
            this.view.innerHTML = '';
            this.view.append(this.viewWinners.createViewWinners());
        });
    }
    start() {
        const headerGarage = new headerGarage_1.HeaderGarage();
    }
}
exports.App = App;


/***/ }),

/***/ "./src/components/callbacks.ts":
/*!*************************************!*\
  !*** ./src/components/callbacks.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getLocaleStorage = exports.setLocaleStorage = exports.sort = exports.sortWinners = exports.removeDisabled = exports.setDisabled = exports.updateeWin = exports.createWin = exports.checkWin = exports.stopCars = exports.countWinners = exports.countCars = exports.generateCarsTwo = exports.shuffle = exports.generateCars = exports.getId = exports.animateThree = exports.raseThree = exports.animateCar = exports.createPopap = exports.removeCar = exports.sendForm = exports.submitForm = exports.deleteCar = exports.sendReq = void 0;
const Loader_1 = __webpack_require__(/*! ./loader/Loader */ "./src/components/loader/Loader.ts");
// eslint-disable-next-line import/no-cycle
const generateCarsBlock_1 = __webpack_require__(/*! ./view/viewGarage/generateCarsBlock */ "./src/components/view/viewGarage/generateCarsBlock.ts");
const types_1 = __webpack_require__(/*! ./types */ "./src/components/types.ts");
const url = 'http://127.0.0.1:3000';
function sendReq(arg) {
    const loader = new Loader_1.Loader(`${arg.url}`, { method: `${arg.method}` });
    loader.getResp((data) => {
        if (data != null) {
            console.log(data);
        }
    });
}
exports.sendReq = sendReq;
function deleteCar(arg, id) {
    const loader = new Loader_1.Loader(`${arg.url}`, { method: `${arg.method}` });
    loader.getRespRr((response) => {
        if (response === 200) {
            const urlsThree = `${url}${types_1.Path.winners}/${id}`;
            const newLoader = new Loader_1.Loader(urlsThree, { method: 'GET' });
            newLoader.getResp((data) => {
                if ((data === null || data === void 0 ? void 0 : data.id) === +`${id}`) {
                    const loaderTwo = new Loader_1.Loader(urlsThree, { method: 'DELETE' });
                    loaderTwo.getRespRr((resp) => {
                        if (resp === 200) {
                            const table = document.querySelector('table');
                        }
                    });
                }
            });
        }
    });
}
exports.deleteCar = deleteCar;
function submitForm(arg) {
    var _a;
    (_a = arg.form) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (e) => {
        e.preventDefault();
        sendForm(arg);
        if (e.target instanceof HTMLFormElement) {
            e.target.reset();
        }
    });
}
exports.submitForm = submitForm;
function sendForm(arg) {
    const formData = new FormData(arg.form);
    const obj = {};
    formData.forEach((value, key) => { obj[key] = value; });
    const dataJson = JSON.stringify(obj);
    const loader = new Loader_1.Loader(`${arg.url}`, {
        method: `${arg.method}`,
        headers: arg.headers,
        body: dataJson
    });
    loader.getResp((data) => {
        if (data != null) {
            if (arg.method === 'POST') {
                const blockCar = new generateCarsBlock_1.AutoBlockGenerator(data).getAutoBlock();
                blockCar.setAttribute('data-id', `num${data.id}`);
                const garageBlock = document.querySelector('.garage-block');
                if (garageBlock != null && garageBlock.children.length < 7) {
                    garageBlock.append(blockCar);
                }
                countCars();
            }
            if (arg.method === 'PUT') {
                const idStr = `num${data.id}`;
                const carBlock = document.querySelector(`[data-id = ${idStr}]`);
                const nameCar = carBlock === null || carBlock === void 0 ? void 0 : carBlock.querySelector('.car-name');
                const imgCar = carBlock === null || carBlock === void 0 ? void 0 : carBlock.querySelector('.img-auto');
                if (nameCar != null) {
                    nameCar.innerHTML = `${data.name}`;
                }
                if (imgCar != null && imgCar instanceof HTMLElement) {
                    imgCar.style.color = `${data.color}`;
                }
            }
        }
    });
}
exports.sendForm = sendForm;
function removeCar(arg, id) {
    deleteCar(arg, id);
    countCars();
}
exports.removeCar = removeCar;
function createPopap(model, time) {
    const popap = document.createElement('div');
    popap.classList.add('popap');
    const popapBody = document.createElement('div');
    popapBody.classList.add('popap-body');
    const popapContent = document.createElement('div');
    popapContent.classList.add('popap-content');
    popapBody.append(popapContent);
    popapContent.innerHTML = `${model} wins for ${time}sec!`;
    popap.append(popapBody);
    return popap;
}
exports.createPopap = createPopap;
let animId;
let winner = false;
// let arrayObj: ObjId
window.addEventListener('load', () => {
    winner = false;
});
window.addEventListener('animationend', () => {
    const buttonReset = document.querySelector('.button-RESET');
    buttonReset === null || buttonReset === void 0 ? void 0 : buttonReset.removeAttribute('disabled');
});
function animateCar(el, id) {
    const img = el === null || el === void 0 ? void 0 : el.querySelector('.img-auto');
    const flag = el === null || el === void 0 ? void 0 : el.querySelector('.flag');
    const carName = el === null || el === void 0 ? void 0 : el.querySelector('.car-name');
    if (flag instanceof HTMLElement) {
        const coordFlag = flag.offsetLeft - 40;
        const urls = `${url}${types_1.Path.engine}?id=${id}&status=started`;
        const loader = new Loader_1.Loader(`${urls}`, { method: 'PATCH' });
        loader.getResp((data) => {
            if (data != null) {
                if (img instanceof HTMLElement) {
                    const startPositions = img === null || img === void 0 ? void 0 : img.getBoundingClientRect().left;
                    // const distance = coordFlag - startPositions
                    const duration = Math.floor(data.distance / data.velocity);
                    // eslint-disable-next-line no-template-curly-in-string
                    const animImg = img.animate([{ transform: `translateX(${startPositions}px` }, { transform: `translateX(${coordFlag}px` }], {
                        duration: duration
                    });
                    img.style.transform = `translateX(${coordFlag}px)`;
                    const urlTwo = `${urls.slice(0, urls.lastIndexOf('='))}=drive`;
                    const loaderOne = new Loader_1.Loader(urlTwo, { method: 'PATCH' });
                    loaderOne.getRespRr((response) => {
                        if (response === 500) {
                            const coord = img.getBoundingClientRect().left;
                            animImg.pause();
                            img.style.transform = `translateX(${coord}px)`;
                        }
                        else if (response === 200 && !winner) {
                            const d = +(duration / 1000).toFixed(2);
                            if (carName != null) {
                                const popapWin = createPopap(carName.innerHTML, d);
                                document.body.append(popapWin);
                                popapWin.classList.add('open');
                            }
                            // Math.round(duration / 1000)
                            winner = true;
                            checkWin(id, d);
                        }
                        animImg.cancel();
                    });
                }
            }
        });
    }
}
exports.animateCar = animateCar;
function raseThree(el, id) {
    const img = el === null || el === void 0 ? void 0 : el.querySelector('.img-auto');
    const flag = el === null || el === void 0 ? void 0 : el.querySelector('.flag');
    // const carName = el?.querySelector('.car-name')
    if (flag instanceof HTMLElement) {
        const coordFlag = flag.offsetLeft - 40;
        const urls = `${url}${types_1.Path.engine}?id=${id}&status=started`;
        const loader = new Loader_1.Loader(`${urls}`, { method: 'PATCH' });
        loader.getResp((data) => {
            if (data != null) {
                if (img instanceof HTMLElement) {
                    const startPositions = img === null || img === void 0 ? void 0 : img.getBoundingClientRect().left;
                    const distance = coordFlag - startPositions;
                    const duration = Math.floor(data.distance / data.velocity);
                    animId = animateThree(duration, img, distance, startPositions);
                    // objId[`${id}`] = animateThree(duration, img, distance, startPositions)
                    // console.log(objId)
                    const urlTwo = `${urls.slice(0, urls.lastIndexOf('='))}=drive`;
                    const loaderOne = new Loader_1.Loader(urlTwo, { method: 'PATCH' });
                    loaderOne.getRespRr((response) => {
                        if (response === 500) {
                            // console.log(objId)
                            // const key = `num${id}`
                            // console.log(objId[`${id}`])
                            window.cancelAnimationFrame(animId);
                        }
                    });
                }
            }
        });
    }
}
exports.raseThree = raseThree;
function animateThree(duration, element, distance, startPositions) {
    let currentPositions = startPositions;
    const fin = distance + startPositions;
    const frame = duration / 1000 * 60;
    const dx = distance / frame;
    const tick = () => {
        if (currentPositions != null) {
            currentPositions += dx;
            // eslint-disable-next-line no-param-reassign
            element.style.transform = `translateX(${currentPositions}px)`;
            if (currentPositions < fin) {
                animId = requestAnimationFrame(tick);
            }
        }
    };
    animId = requestAnimationFrame(tick);
    return animId;
}
exports.animateThree = animateThree;
function getId() {
    const items = document.querySelectorAll('.car-block');
    const arr = [];
    items.forEach((item) => {
        if (item.hasAttribute('data-id')) {
            const value = item.getAttribute('data-id');
            if (value != null)
                arr.push(value.slice(3));
        }
    });
    console.log(arr.map((item) => Number(item)));
    return arr;
}
exports.getId = getId;
function generateCars() {
    const names = ['Opel', 'Mersedes', 'BMW', 'Tesla', 'Toyota', 'Ford'];
    const models = ['Vectra', 'SX5', 'gla', 'model x', 'camry', 'Fiesta'];
    const colors = ['#e6e6fa', '#fede00', '#6c779f', '#ef3c40', 'green', 'yellow'];
    const random = Math.floor(Math.random() * 5);
    console.log(random);
    const array = [];
    let n = 0;
    while (n < 100) {
        const i = Math.floor(Math.random() * 5);
        const j = Math.floor(Math.random() * 5);
        const x = Math.floor(Math.random() * 5);
        const obj = { name: `${names[i]} ${models[j]}`, color: `${colors[x]}` };
        array.push(obj);
        n += 1;
    }
    return array;
}
exports.generateCars = generateCars;
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        // eslint-disable-next-line no-param-reassign
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
exports.shuffle = shuffle;
function generateCarsTwo(collback) {
    const names = ['Opel', 'Mersedes', 'BMW', 'Tesla', 'Toyota'];
    const models = ['Vectra', 'SX5', 'gla', 'model x', 'camry'];
    const colors = ['#e6e6fa', '#fede00', '#6c779f', '#ef3c40', 'green'];
    const array = [];
    let n = 0;
    while (n < 20) {
        const arrName = shuffle(names);
        const arrModels = shuffle(models);
        const arrColors = shuffle(colors);
        for (let i = 0; i < names.length; i += 1) {
            const obj = { name: `${arrName[i]} ${arrModels[i]}`, color: `${arrColors[i]}` };
            array.push(obj);
        }
        n += 1;
    }
    return array;
}
exports.generateCarsTwo = generateCarsTwo;
function countCars() {
    const urlTwo = `${url}${types_1.Path.garage}?_limit=7`;
    const loader = new Loader_1.Loader(urlTwo, { method: 'GET' });
    loader.getRespResp((data) => {
        const num = data === null || data === void 0 ? void 0 : data.get('X-Total-Count');
        if (num != null) {
            const titleGarage = document.querySelector('.cars-num');
            if (titleGarage != null) {
                titleGarage.innerHTML = `(${num})`;
            }
        }
    });
}
exports.countCars = countCars;
function countWinners() {
    const urlTwo = `${url}${types_1.Path.winners}?_limit=10`;
    const loader = new Loader_1.Loader(urlTwo, { method: 'GET' });
    loader.getRespResp((data) => {
        const num = data === null || data === void 0 ? void 0 : data.get('X-Total-Count');
        if (num != null) {
            const winnersNum = document.querySelector('.winners-num');
            if (winnersNum != null) {
                winnersNum.innerHTML = `(${num})`;
            }
        }
    });
}
exports.countWinners = countWinners;
function stopCars(id) {
    const urls = `${url}${types_1.Path.engine}?id=${id}&status=stopped`;
    const el = document.querySelector(`[data-id=num${id}]`);
    const img = el === null || el === void 0 ? void 0 : el.querySelector('.img-auto');
    const loader = new Loader_1.Loader(urls, { method: 'PATCH' });
    loader.getResp((data) => {
        const startPositions = img === null || img === void 0 ? void 0 : img.getBoundingClientRect().left;
        if (img != null && img instanceof HTMLElement) {
            if (data != null && data.velocity === 0 && startPositions != null) {
                window.cancelAnimationFrame(animId);
                img.style.transform = `translateX(${0}px)`;
                if (winner)
                    winner = false;
            }
        }
    });
}
exports.stopCars = stopCars;
function checkWin(id, duration) {
    const urls = `${url}${types_1.Path.winners}/${id}`;
    const loader = new Loader_1.Loader(urls, { method: 'GET' });
    loader.getRespRr((response) => {
        if (response === 404) {
            const urlTwo = `${url}${types_1.Path.winners}`;
            const args = { url: urlTwo, method: 'POST', headers: { 'Content-Type': 'application/json' } };
            createWin(id, duration, args);
        }
        else {
            loader.getResp((data) => {
                if (data != null) {
                    if (data.id === id) {
                        const win = data.wins + 1;
                        const arg = { url: urls, method: 'PUT', headers: { 'Content-Type': 'application/json' } };
                        if (data.time < duration) {
                            // eslint-disable-next-line no-param-reassign
                            duration = data.time;
                        }
                        updateeWin(id, duration, win, arg);
                    }
                }
            });
        }
    });
}
exports.checkWin = checkWin;
function createWin(idCar, duration, arg) {
    const obj = {
        id: idCar,
        wins: 1,
        time: duration
    };
    const dataJson = JSON.stringify(obj);
    const loader = new Loader_1.Loader(`${arg.url}`, {
        method: `${arg.method}`,
        headers: arg.headers,
        body: dataJson
    });
    loader.getResp((data) => {
        if (data != null) {
            console.log('success');
            console.log(data);
        }
    });
}
exports.createWin = createWin;
function updateeWin(id, duration, win, arg) {
    const obj = {
        wins: win,
        time: duration
    };
    const dataJson = JSON.stringify(obj);
    const loader = new Loader_1.Loader(`${arg.url}`, {
        method: `${arg.method}`,
        headers: arg.headers,
        body: dataJson
    });
    loader.getResp((data) => {
        if (data != null) {
            console.log('success');
            console.log(data);
        }
    });
}
exports.updateeWin = updateeWin;
function setDisabled() {
    const buttonUpdate = document.querySelector('.button-UPDATE');
    const buttonCreate = document.querySelector('.button-CREATE');
    const buttonRase = document.querySelector('.button-RASE');
    const buttonsRemove = document.querySelectorAll('.button-REMOVE');
    const buttonsSelect = document.querySelectorAll('.button-SELECT');
    const buttonsStart = document.querySelectorAll('.button-A');
    const buttonGen = document.querySelector('.button-GENERATE');
    buttonUpdate === null || buttonUpdate === void 0 ? void 0 : buttonUpdate.setAttribute('disabled', 'disabled');
    buttonCreate === null || buttonCreate === void 0 ? void 0 : buttonCreate.setAttribute('disabled', 'disabled');
    buttonGen === null || buttonGen === void 0 ? void 0 : buttonGen.setAttribute('disabled', 'disabled');
    buttonRase === null || buttonRase === void 0 ? void 0 : buttonRase.setAttribute('disabled', 'disabled');
    buttonsRemove === null || buttonsRemove === void 0 ? void 0 : buttonsRemove.forEach((item) => {
        item.setAttribute('disabled', 'disabled');
    });
    buttonsSelect === null || buttonsSelect === void 0 ? void 0 : buttonsSelect.forEach((item) => {
        item.setAttribute('disabled', 'disabled');
    });
    buttonsStart === null || buttonsStart === void 0 ? void 0 : buttonsStart.forEach((item) => {
        item.setAttribute('disabled', 'disabled');
    });
}
exports.setDisabled = setDisabled;
function removeDisabled() {
    const buttonUpdate = document.querySelector('.button-UPDATE');
    const buttonCreate = document.querySelector('.button-CREATE');
    const buttonGen = document.querySelector('.button-GENERATE');
    const buttonsRemove = document.querySelectorAll('.button-REMOVE');
    const buttonRase = document.querySelector('.button-RASE');
    const buttonsSelect = document.querySelectorAll('.button-SELECT');
    const buttonsStart = document.querySelectorAll('.button-A');
    buttonUpdate === null || buttonUpdate === void 0 ? void 0 : buttonUpdate.removeAttribute('disabled');
    buttonCreate === null || buttonCreate === void 0 ? void 0 : buttonCreate.removeAttribute('disabled');
    buttonGen === null || buttonGen === void 0 ? void 0 : buttonGen.removeAttribute('disabled');
    buttonRase === null || buttonRase === void 0 ? void 0 : buttonRase.removeAttribute('disabled');
    buttonsRemove === null || buttonsRemove === void 0 ? void 0 : buttonsRemove.forEach((item) => {
        item.removeAttribute('disabled');
    });
    buttonsSelect === null || buttonsSelect === void 0 ? void 0 : buttonsSelect.forEach((item) => {
        item.removeAttribute('disabled');
    });
    buttonsStart === null || buttonsStart === void 0 ? void 0 : buttonsStart.forEach((item) => {
        item.removeAttribute('disabled');
    });
}
exports.removeDisabled = removeDisabled;
let sortWin = 'desc';
function sortWinners(e) {
    const table = document.querySelector('table');
    const winCell = table === null || table === void 0 ? void 0 : table.rows[0].cells[3];
    const timeCell = table === null || table === void 0 ? void 0 : table.rows[0].cells[4];
    if (e.target instanceof HTMLElement) {
        if (e.target.innerHTML.includes('Wins') || e.target.innerHTML.includes('Best time (seconds)')) {
            if (e.target === winCell && (timeCell === null || timeCell === void 0 ? void 0 : timeCell.innerHTML[timeCell.innerHTML.length - 1]) !== ')') {
                if (timeCell != null)
                    timeCell.innerHTML = timeCell === null || timeCell === void 0 ? void 0 : timeCell.innerHTML.slice(0, timeCell.innerHTML.length - 1);
            }
            else if (e.target === timeCell && (winCell === null || winCell === void 0 ? void 0 : winCell.innerHTML[winCell.innerHTML.length - 1]) !== 's') {
                if (winCell != null)
                    winCell.innerHTML = 'Wins'; /* winCell?.innerHTML.slice(0, winCell.innerHTML.length - 1) */
            }
            let name = e.target.innerHTML;
            const sortOrder = sortWin;
            if (name[name.length - 1] === 's' || name[name.length - 1] === ')') {
                name = e.target.innerHTML;
            }
            else {
                name = e.target.innerHTML.slice(0, e.target.innerHTML.length - 1);
            }
            if (sortOrder === 'desc') {
                e.target.innerHTML = `${name}&#8593;`;
            }
            else {
                e.target.innerHTML = `${name}&#8595;`;
            }
            let nameSort;
            if (e.target.innerHTML.includes('Wins')) {
                nameSort = 'wins';
            }
            else {
                nameSort = 'time';
            }
            sort(nameSort, sortOrder);
        }
    }
}
exports.sortWinners = sortWinners;
function sort(name, sortOrder) {
    if (sortOrder === 'desc') {
        sortWin = 'asc';
    }
    else {
        sortWin = 'desc';
    }
    const table = document.querySelector('table');
    if (table instanceof HTMLElement) {
        const urls = `${url}${types_1.Path.winners}?_sort=${name}&_order=${sortOrder}`;
        const loader = new Loader_1.Loader(urls, { method: 'GET' });
        loader.getResp((data) => {
            if (data != null) {
                const values = Object.values(data);
                values.forEach((item) => {
                    for (let i = 1; i < table.rows.length; i += 1) {
                        if (table.rows[i].cells[3].innerHTML === String(item.wins) && table.rows[i].cells[4].innerHTML === String(item.time)) {
                            table.append(table.rows[i]);
                        }
                    }
                });
            }
        });
    }
}
exports.sort = sort;
function setLocaleStorage(num) {
    localStorage.setItem('num', num);
}
exports.setLocaleStorage = setLocaleStorage;
function getLocaleStorage() {
    let num;
    if (localStorage.getItem('num') != null) {
        num = localStorage.getItem('num');
    }
    else {
        num = '1';
    }
    return num;
}
exports.getLocaleStorage = getLocaleStorage;


/***/ }),

/***/ "./src/components/elemCreate.ts":
/*!**************************************!*\
  !*** ./src/components/elemCreate.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementCreator = void 0;
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class ElementCreator {
    static createElement(params) {
        const el = document.createElement(params.tag);
        el.classList.add(params.className);
        if (params.text != null) {
            el.textContent = params.text;
        }
        /* if ((params.attributeName != null) && (params.attributeValue != null)) {
          el.setAttribute(params.attributeName, params.attributeValue)
        } */
        return el;
    }
    static createTable(params) {
        const table = document.createElement(params.tag);
        table.classList.add(params.className);
        const tr = document.createElement(params.tagTR);
        table.append(tr);
        const arr = ['Number', 'Car', 'Name', 'Wins', 'Best time (seconds)'];
        let i = 0;
        while (i < params.numCol) {
            const th = document.createElement(params.tagTH);
            th.innerHTML = `${arr[i]}`;
            tr.append(th);
            i += 1;
        }
        return table;
    }
    static createRow(params, arr) {
        // const table: element = document.createElement(params.tag)
        // table.classList.add(params.className)
        const tr = document.createElement(params.tagTR);
        // table.append(tr)
        // const arr = ['Number', 'Car', 'Name', 'Wins', 'Best time (seconds)']
        let i = 0;
        while (i < params.numCol) {
            const th = document.createElement(params.tagTD);
            th.innerHTML = `${arr[i]}`;
            tr.append(th);
            i += 1;
        }
        return tr;
    }
}
exports.ElementCreator = ElementCreator;


/***/ }),

/***/ "./src/components/elemCreateButton.ts":
/*!********************************************!*\
  !*** ./src/components/elemCreateButton.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementCreatorButton = exports.buttonsName = void 0;
const elemCreate_1 = __webpack_require__(/*! ./elemCreate */ "./src/components/elemCreate.ts");
var buttonsName;
(function (buttonsName) {
    buttonsName["inputCreate"] = "create";
    buttonsName["buttonCreate"] = "CREATE";
    buttonsName["inputUpdate"] = "update";
    buttonsName["buttonUpdate"] = "UPDATE";
    buttonsName["inputColor"] = "color";
    buttonsName["buttonSelect"] = "SELECT";
    buttonsName["buttonReset"] = "RESET";
    buttonsName["buttonRemove"] = "REMOVE";
})(buttonsName || (exports.buttonsName = buttonsName = {}));
class ElementCreatorButton {
    constructor(name) {
        const parambutton = {
            tag: 'button',
            className: `button-${name}`,
            text: `${name}`
        };
        this.button = elemCreate_1.ElementCreator.createElement(parambutton);
    }
    /* addLinc() {
      const link = ElementCreator.createElement('a')
  
    } */
    getButton(name) {
        return this.button;
    }
}
exports.ElementCreatorButton = ElementCreatorButton;


/***/ }),

/***/ "./src/components/elemCreateInput.ts":
/*!*******************************************!*\
  !*** ./src/components/elemCreateInput.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ElementCreatorInput = void 0;
const elemCreate_1 = __webpack_require__(/*! ./elemCreate */ "./src/components/elemCreate.ts");
class ElementCreatorInput {
    constructor(name) {
        const paramInput = {
            tag: 'input',
            className: `input-${name}`
        };
        this.input = elemCreate_1.ElementCreator.createElement(paramInput);
    }
    setAttribute(paramsId) {
        paramsId.forEach((item) => { this.input.setAttribute(item.value, item.valueName); });
        return this.input;
    }
    getInput(name) {
        return this.input;
    }
}
exports.ElementCreatorInput = ElementCreatorInput;


/***/ }),

/***/ "./src/components/loader/Loader.ts":
/*!*****************************************!*\
  !*** ./src/components/loader/Loader.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Loader = void 0;
// const url = 'http://127.0.0.1:3000'
class Loader {
    constructor(baselinc, body) {
        this.baseLink = baselinc;
        this.body = body;
    }
    getResp(callback) {
        this.load(callback);
    }
    getRespRr(callback) {
        this.loadEr(callback);
    }
    getRespResp(callback) {
        this.loadResp(callback);
    }
    // eslint-disable-next-line class-methods-use-this
    errorHundler(res) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404) {
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
                // throw Error(res.statusText)
            }
            if (res.status === 500) {
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
                console.log(res.url);
                /* const urls = `${res.url.slice(0, res.url.lastIndexOf('='))}=stopped`
                const start = res.url.indexOf('=')
                const end = res.url.indexOf('&')
                const id = res.url.slice(start + 1, end)
                console.log(id)
                const idStr = `num${id}`
                const carBlock = document.querySelector(`[data-id = ${idStr}]`)
                const imgCar: HTMLElement | null | undefined = carBlock?.querySelector('.img-auto')
                const flag: HTMLElement | null | undefined = carBlock?.querySelector('.flag')
                // const currPos = imgCar?.offsetLeft
                const currPos = imgCar?.getBoundingClientRect().left
                console.log(currPos)
                const coord = flag?.getBoundingClientRect().left
                console.log(coord)
                const loader = new Loader(urls, { method: 'PATCH' })
                loader.getResp((data?: Velocity) => {
                  console.log(data)
                  if (data != null && imgCar instanceof HTMLElement) {
                    console.log(data.velocity)
                    animate(data?.velocity, data?.distance, imgCar, currPos, coord)
                  }
                }) */
            }
        }
        return res;
    }
    load(callback) {
        void fetch(this.baseLink, this.body)
            .then(this.errorHundler)
            .then(async (res) => await res.json())
            .then((data) => { callback(data); })
            .then((err) => { console.log(err); });
    }
    // eslint-disable-next-line class-methods-use-this
    loadEr(callback) {
        void fetch(this.baseLink, this.body)
            .then((response) => { callback(response.status); });
    }
    /* private loadRase (callback: Callback<JSON>): void {
      void fetch(this.baseLink, this.body)
        .then(this.errorHundler)
        .then(async (res: Response): Promise<JSON> => await res.json())
        .then((data) => { callback(data) })
        .then((err) => { console.log(err) })
    } */
    loadResp(callback) {
        void fetch(this.baseLink, this.body)
            .then((respopse) => { callback(respopse.headers); });
    }
}
exports.Loader = Loader;


/***/ }),

/***/ "./src/components/types.ts":
/*!*********************************!*\
  !*** ./src/components/types.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Errors = exports.Path = void 0;
var Path;
(function (Path) {
    Path["garage"] = "/garage";
    Path["engine"] = "/engine";
    Path["winners"] = "/winners";
})(Path || (exports.Path = Path = {}));
var Errors;
(function (Errors) {
})(Errors || (exports.Errors = Errors = {}));


/***/ }),

/***/ "./src/components/view/viewGarage/generateCarsBlock.ts":
/*!*************************************************************!*\
  !*** ./src/components/view/viewGarage/generateCarsBlock.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AutoBlockGenerator = void 0;
// eslint-disable-next-line import/no-cycle
const callbacks_1 = __webpack_require__(/*! ../../callbacks */ "./src/components/callbacks.ts");
const elemCreate_1 = __webpack_require__(/*! ../../elemCreate */ "./src/components/elemCreate.ts");
const elemCreateButton_1 = __webpack_require__(/*! ../../elemCreateButton */ "./src/components/elemCreateButton.ts");
const types_1 = __webpack_require__(/*! ../../types */ "./src/components/types.ts");
__webpack_require__(/*! ./viewGarage.css */ "./src/components/view/viewGarage/viewGarage.css");
const url = 'http://127.0.0.1:3000';
class AutoBlockGenerator {
    constructor(data) {
        const params = {
            tag: 'div',
            className: 'car-block'
        };
        const raseParams = {
            tag: 'div',
            className: 'rase-buttons'
        };
        const raseBlock = {
            tag: 'div',
            className: 'rase-block'
        };
        const carName = {
            tag: 'span',
            className: 'car-name',
            text: `${data.name}`
        };
        const imgParams = {
            tag: 'div',
            className: 'img-auto',
            // data: '/assets/car6.svg',
            color: `${data.color}`
            // src: ''
        };
        const flagParams = {
            tag: 'div',
            className: 'flag'
        };
        this.block = elemCreate_1.ElementCreator.createElement(params);
        this.buttonSelect = new elemCreateButton_1.ElementCreatorButton('SELECT').getButton('select');
        this.buttonRemove = new elemCreateButton_1.ElementCreatorButton('REMOVE').getButton('remove');
        this.blockRase = elemCreate_1.ElementCreator.createElement(raseParams);
        this.buttonStart = new elemCreateButton_1.ElementCreatorButton('A').getButton('start');
        this.buttonStop = new elemCreateButton_1.ElementCreatorButton('B').getButton('stop');
        this.buttonStop.setAttribute('disabled', 'disabled');
        this.raseBlock = elemCreate_1.ElementCreator.createElement(raseBlock);
        this.flag = elemCreate_1.ElementCreator.createElement(flagParams);
        this.carName = elemCreate_1.ElementCreator.createElement(carName);
        this.img = elemCreate_1.ElementCreator.createElement(imgParams);
        this.blockRase.append(this.buttonStart, this.buttonStop, this.img, this.flag);
        this.raseBlock.append(this.blockRase, this.flag);
        this.img.innerHTML = `<svg class="car" fill="currentColor" width="50px" height="50px" viewBox="0 -43.92 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  style="enable-background:new 0 0 122.88 35.03" xml:space="preserve">

    <style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style>
    
    <g>
    
    <path class="st0" d="M99.42,13.57c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73 C88.69,18.37,93.49,13.57,99.42,13.57L99.42,13.57z M79.05,5c-0.59,1.27-1.06,2.69-1.42,4.23c-0.82,2.57,0.39,3.11,3.19,2.06 c2.06-1.23,4.12-2.47,6.18-3.7c1.05-0.74,1.55-1.47,1.38-2.19c-0.34-1.42-3.08-2.16-5.33-2.6C80.19,2.23,80.39,2.11,79.05,5 L79.05,5z M23.86,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99c-2.75,0-4.99-2.23-4.99-4.99 C18.87,21.54,21.1,19.31,23.86,19.31L23.86,19.31z M99.42,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99 c-2.75,0-4.99-2.23-4.99-4.99C94.43,21.54,96.66,19.31,99.42,19.31L99.42,19.31z M46.14,12.5c2.77-2.97,5.97-4.9,9.67-6.76 c8.1-4.08,13.06-3.58,21.66-3.58l-2.89,7.5c-1.21,1.6-2.58,2.73-4.66,2.84H46.14L46.14,12.5z M23.86,13.57 c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73C13.13,18.37,17.93,13.57,23.86,13.57 L23.86,13.57z M40.82,10.3c3.52-2.19,7.35-4.15,11.59-5.82c12.91-5.09,22.78-6,36.32-1.9c4.08,1.55,8.16,3.1,12.24,4.06 c4.03,0.96,21.48,1.88,21.91,4.81l-4.31,5.15c1.57,1.36,2.85,3.03,3.32,5.64c-0.13,1.61-0.57,2.96-1.33,4.04 c-1.29,1.85-5.07,3.76-7.11,2.67c-0.65-0.35-1.02-1.05-1.01-2.24c0.06-23.9-28.79-21.18-26.62,2.82H35.48 C44.8,5.49,5.04,5.4,12.1,28.7C9.62,31.38,3.77,27.34,0,18.75c1.03-1.02,2.16-1.99,3.42-2.89c-0.06-0.05,0.06,0.19-0.15-0.17 c-0.21-0.36,0.51-1.87,1.99-2.74C13.02,8.4,31.73,8.52,40.82,10.3L40.82,10.3z"/>
    
    </g>
    
    </svg>`;
        /* if (this.img.firstElementChild instanceof HTMLElement) */ this.img.style.color = `${data.color}`;
        // console.log(this.img.style.color)
        const startPositions = this.img.getBoundingClientRect().left;
        this.block.append(this.buttonSelect, this.buttonRemove, this.carName, this.raseBlock);
        this.buttonRemove.addEventListener('click', () => {
            const attr = this.block.getAttribute('data-id');
            let id;
            if (attr != null) {
                id = attr.slice(3);
            }
            else {
                id = data.id;
            }
            const urls = `${url}${types_1.Path.garage}/${id}`;
            const args = { url: urls, method: 'DELETE' };
            (0, callbacks_1.removeCar)(args, id);
            this.block.remove();
            (0, callbacks_1.countCars)();
        });
        this.buttonSelect.addEventListener('click', () => {
            const attr = this.block.getAttribute('data-id');
            let id;
            if (attr != null) {
                id = attr.slice(3);
            }
            else {
                id = data.id;
            }
            const urls = `${url}${types_1.Path.garage}/${id}`;
            const inputUpdate = document.querySelector('.input-update');
            inputUpdate === null || inputUpdate === void 0 ? void 0 : inputUpdate.focus();
            if (inputUpdate != null) {
                inputUpdate === null || inputUpdate === void 0 ? void 0 : inputUpdate.setAttribute('value', `${data.name}`);
                if (inputUpdate.form != null) {
                    const argum = { form: inputUpdate.form, url: urls, method: 'PUT', headers: { 'Content-Type': 'application/json' } };
                    (0, callbacks_1.submitForm)(argum);
                }
            }
        });
        this.buttonStart.addEventListener('click', () => {
            const attr = this.block.getAttribute('data-id');
            (0, callbacks_1.setDisabled)();
            let id;
            if (attr != null) {
                id = Number(attr.slice(3));
            }
            else {
                id = data.id;
            }
            (0, callbacks_1.raseThree)(this.block, id);
            this.buttonStart.setAttribute('disabled', 'disablred');
            if (this.buttonStop.hasAttribute('disabled')) {
                this.buttonStop.removeAttribute('disabled');
            }
        });
        this.buttonStop.addEventListener('click', () => {
            (0, callbacks_1.removeDisabled)();
            const flag = this.flag.getBoundingClientRect().left;
            const currentPositions = this.img.getBoundingClientRect().left;
            const num = startPositions - currentPositions + 40;
            const attr = this.block.getAttribute('data-id');
            let id;
            if (attr != null) {
                id = Number(attr.slice(3));
                (0, callbacks_1.stopCars)(Number(id));
                this.img.style.transform = `translateX(${0}px)`;
                this.buttonStart.removeAttribute('disabled');
                this.buttonStop.setAttribute('disabled', 'disabled');
            }
        });
    }
    getAutoBlock() {
        // if (this.img.firstElementChild instanceof HTMLElement) this.img.firstElementChild.style.fill = `${}`
        return this.block;
    }
}
exports.AutoBlockGenerator = AutoBlockGenerator;


/***/ }),

/***/ "./src/components/view/viewGarage/headerGarage.ts":
/*!********************************************************!*\
  !*** ./src/components/view/viewGarage/headerGarage.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeaderGarage = void 0;
const elemCreate_1 = __webpack_require__(/*! ../../elemCreate */ "./src/components/elemCreate.ts");
const elemCreateInput_1 = __webpack_require__(/*! ../../elemCreateInput */ "./src/components/elemCreateInput.ts");
const elemCreateButton_1 = __webpack_require__(/*! ../../elemCreateButton */ "./src/components/elemCreateButton.ts");
const generateCarsBlock_1 = __webpack_require__(/*! ./generateCarsBlock */ "./src/components/view/viewGarage/generateCarsBlock.ts");
const types_1 = __webpack_require__(/*! ../../types */ "./src/components/types.ts");
const callbacks_1 = __webpack_require__(/*! ../../callbacks */ "./src/components/callbacks.ts");
const Loader_1 = __webpack_require__(/*! ../../loader/Loader */ "./src/components/loader/Loader.ts");
const url = 'http://127.0.0.1:3000';
const path = {
    garage: '/garage',
    winners: '/winners'
};
class HeaderGarage {
    constructor() {
        // super()
        const header = {
            tag: 'div',
            className: 'header-garage'
        };
        const formCreate = {
            tag: 'form',
            className: 'form-create'
        };
        const formChange = {
            tag: 'form',
            className: 'form-change'
        };
        const paramsButtons = {
            tag: 'div',
            className: 'buttons-block'
        };
        const attributeInputCreate = [{ value: 'type', valueName: 'text' }, { value: 'name', valueName: 'name' }, { value: 'value', valueName: '' }];
        const attributeInputUpdate = [{ value: 'type', valueName: 'text' }, { value: 'name', valueName: 'name' }, { value: 'value', valueName: '' }];
        const attributeInputColor = [{ value: 'type', valueName: 'color' }, { value: 'name', valueName: 'color' }, { value: 'value', valueName: '' }];
        this.header = elemCreate_1.ElementCreator.createElement(header);
        this.formCreate = elemCreate_1.ElementCreator.createElement(formCreate);
        this.inputCreate = new elemCreateInput_1.ElementCreatorInput('create').setAttribute(attributeInputCreate);
        this.inputSetColor = new elemCreateInput_1.ElementCreatorInput('color').setAttribute(attributeInputColor);
        this.buttonCreate = new elemCreateButton_1.ElementCreatorButton('CREATE').getButton('create');
        this.formCreate.append(this.inputCreate, this.inputSetColor, this.buttonCreate);
        this.formChange = elemCreate_1.ElementCreator.createElement(formChange);
        this.inputUpdate = new elemCreateInput_1.ElementCreatorInput('update').setAttribute(attributeInputUpdate);
        this.inputChangeColor = new elemCreateInput_1.ElementCreatorInput('color').setAttribute(attributeInputColor);
        this.buttonUpdate = new elemCreateButton_1.ElementCreatorButton('UPDATE').getButton('update');
        this.formChange.append(this.inputUpdate, this.inputChangeColor, this.buttonUpdate);
        this.buttonsHeader = elemCreate_1.ElementCreator.createElement(paramsButtons);
        this.buttonRase = new elemCreateButton_1.ElementCreatorButton('RASE').getButton('rase');
        this.buttonReset = new elemCreateButton_1.ElementCreatorButton('RESET').getButton('reset');
        this.buttonReset.setAttribute('disabled', 'disabled');
        this.buttonGenerate = new elemCreateButton_1.ElementCreatorButton('GENERATE').getButton('generateCars');
        this.buttonsHeader.append(this.buttonRase, this.buttonReset, this.buttonGenerate);
        this.header.append(this.formCreate, this.formChange, this.buttonsHeader);
        this.buttonRase.addEventListener('click', () => {
            (0, callbacks_1.setDisabled)();
            this.buttonReset.setAttribute('disabled', 'disabled');
            const ids = (0, callbacks_1.getId)();
            ids.forEach((item) => {
                const el = document.querySelector(`[data-id=num${item}]`);
                if (el instanceof HTMLElement)
                    (0, callbacks_1.animateCar)(el, Number(item));
            });
        });
        this.buttonReset.addEventListener('click', () => {
            this.buttonRase.removeAttribute('disabled');
            this.buttonReset.setAttribute('disabled', 'disabled');
            (0, callbacks_1.removeDisabled)();
            const ids = (0, callbacks_1.getId)();
            ids.forEach((item) => {
                const id = Number(item);
                (0, callbacks_1.stopCars)(id);
            });
        });
        this.buttonGenerate.addEventListener('click', () => {
            const arr = (0, callbacks_1.generateCarsTwo)(callbacks_1.shuffle);
            const urls = `${url}${types_1.Path.garage}`;
            arr.forEach((item) => {
                const objJson = JSON.stringify(item);
                const loader = new Loader_1.Loader(urls, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: objJson
                });
                loader.getResp((data) => {
                    if (data != null) {
                        const blockCar = new generateCarsBlock_1.AutoBlockGenerator(data).getAutoBlock();
                        blockCar.setAttribute('data-id', `num${data.id}`);
                        const garageBlock = document.querySelector('.garage-block');
                        if (garageBlock != null && garageBlock.children.length < 7) {
                            garageBlock.append(blockCar);
                        }
                    }
                });
            });
            (0, callbacks_1.countCars)();
        });
        this.clickFormCreate();
        // this.clickFormUpdate()
    }
    getHeaderGarage() {
        return this.header;
    }
    getInputCreate() {
        return this.inputCreate;
    }
    getButtonCreate() {
        return this.buttonCreate;
    }
    getFormCreate() {
        return this.formCreate;
    }
    getInputChangeColor() {
        return this.inputChangeColor;
    }
    clickFormCreate() {
        const urls = `${url}${types_1.Path.garage}`;
        if (this.formCreate instanceof HTMLFormElement) {
            const argum = { form: this.formCreate, url: urls, method: 'POST', headers: { 'Content-Type': 'application/json' } };
            (0, callbacks_1.submitForm)(argum);
        }
    }
}
exports.HeaderGarage = HeaderGarage;


/***/ }),

/***/ "./src/components/view/viewGarage/mainGarage.ts":
/*!******************************************************!*\
  !*** ./src/components/view/viewGarage/mainGarage.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GarageBlock = void 0;
const generateCarsBlock_1 = __webpack_require__(/*! ./generateCarsBlock */ "./src/components/view/viewGarage/generateCarsBlock.ts");
const elemCreate_1 = __webpack_require__(/*! ../../elemCreate */ "./src/components/elemCreate.ts");
const elemCreateButton_1 = __webpack_require__(/*! ../../elemCreateButton */ "./src/components/elemCreateButton.ts");
const Loader_1 = __webpack_require__(/*! ../../loader/Loader */ "./src/components/loader/Loader.ts");
const callbacks_1 = __webpack_require__(/*! ../../callbacks */ "./src/components/callbacks.ts");
const types_1 = __webpack_require__(/*! ../../types */ "./src/components/types.ts");
__webpack_require__(/*! ./viewGarage.css */ "./src/components/view/viewGarage/viewGarage.css");
const url = 'http://127.0.0.1:3000';
class GarageBlock {
    constructor() {
        const carsNum = 4;
        let numPages = 1;
        const garagePage = {
            tag: 'div',
            className: 'garage-page'
        };
        const garageBlock = {
            tag: 'div',
            className: 'garage-block'
        };
        const paramTitle = {
            tag: 'h2',
            className: 'garage-title',
            text: 'GARAGE'
        };
        const numCars = {
            tag: 'span',
            className: 'cars-num',
            text: `${carsNum}`
        };
        const paramTitleTwo = {
            tag: 'h3',
            className: 'garage-titlePage',
            text: 'Page'
        };
        const numpage = {
            tag: 'span',
            className: 'cars-num',
            text: `#${numPages}`
        };
        const paramblockChangeView = {
            tag: 'div',
            className: 'buttons-change'
        };
        const blocTitle = {
            tag: 'div',
            className: 'title-block'
        };
        this.titleGarage = elemCreate_1.ElementCreator.createElement(paramTitle);
        this.numCars = elemCreate_1.ElementCreator.createElement(numCars);
        this.titleGarage.append(this.numCars);
        this.numPage = elemCreate_1.ElementCreator.createElement(numpage);
        this.titlePage = elemCreate_1.ElementCreator.createElement(paramTitleTwo);
        this.titlePage.append(this.numPage);
        this.blockTitle = elemCreate_1.ElementCreator.createElement(blocTitle);
        this.blockChangePages = elemCreate_1.ElementCreator.createElement(paramblockChangeView);
        this.buttonNext = new elemCreateButton_1.ElementCreatorButton('NEXT').getButton('next');
        this.buttonPrev = new elemCreateButton_1.ElementCreatorButton('PREV').getButton('prev');
        this.buttonPrev.setAttribute('disabled', 'disabled');
        this.blockChangePages.append(this.buttonPrev, this.buttonNext);
        this.blockTitle.append(this.titleGarage);
        this.garage = elemCreate_1.ElementCreator.createElement(garagePage);
        this.garageBlock = elemCreate_1.ElementCreator.createElement(garageBlock);
        this.garage.append(this.blockTitle, this.titlePage, this.garageBlock, this.blockChangePages);
        this.buttonNext.addEventListener('click', () => {
            this.garageBlock.innerHTML = '';
            if (this.buttonPrev.hasAttribute('disabled'))
                this.buttonPrev.removeAttribute('disabled');
            numPages += 1;
            this.createGarage(numPages);
        });
        this.buttonPrev.addEventListener('click', () => {
            if (numPages > 2) {
                this.garageBlock.innerHTML = '';
                numPages -= 1;
                this.createGarage(numPages);
            }
            else if (numPages === 2) {
                this.garageBlock.innerHTML = '';
                numPages -= 1;
                this.createGarage(numPages);
                this.buttonPrev.setAttribute('disabled', 'disabled');
            }
        });
    }
    // eslint-disable-next-line class-methods-use-this
    createGarage(numPages) {
        this.numPage.innerHTML = `#${numPages}`;
        const urls = `${url}${types_1.Path.garage}?_page=${numPages}&_limit=7`;
        const loader = new Loader_1.Loader(urls, { method: 'GET' });
        loader.getResp((data) => {
            if (data != null) {
                // eslint-disable-next-line no-restricted-syntax, guard-for-in
                const values = Object.values(data);
                values.forEach((item) => {
                    const blockCar = new generateCarsBlock_1.AutoBlockGenerator(item).getAutoBlock();
                    blockCar.setAttribute('data-id', `num${item.id}`);
                    this.garageBlock.append(blockCar);
                });
            }
        });
        (0, callbacks_1.countCars)();
    }
    getGarage(numPages) {
        this.createGarage(numPages);
        return this.garage;
    }
    getGarageBlock() {
        return this.garageBlock;
    }
}
exports.GarageBlock = GarageBlock;


/***/ }),

/***/ "./src/components/view/viewGarage/view.ts":
/*!************************************************!*\
  !*** ./src/components/view/viewGarage/view.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ViewGarage = void 0;
const elemCreate_1 = __webpack_require__(/*! ../../elemCreate */ "./src/components/elemCreate.ts");
// eslint-disable-next-line import/no-cycle
const headerGarage_1 = __webpack_require__(/*! ./headerGarage */ "./src/components/view/viewGarage/headerGarage.ts");
const Loader_1 = __webpack_require__(/*! ../../loader/Loader */ "./src/components/loader/Loader.ts");
const types_1 = __webpack_require__(/*! ../../types */ "./src/components/types.ts");
const mainGarage_1 = __webpack_require__(/*! ./mainGarage */ "./src/components/view/viewGarage/mainGarage.ts");
const url = 'http://127.0.0.1:3000';
class ViewGarage {
    constructor() {
        this.header = new headerGarage_1.HeaderGarage().getHeaderGarage();
        this.main = new mainGarage_1.GarageBlock().getGarage(1);
        const view = {
            tag: 'div',
            className: 'view-one'
        };
        this.viewGarage = elemCreate_1.ElementCreator.createElement(view);
    }
    createtView() {
        const urls = `${url}${types_1.Path.garage}?_page=0&_limit=7`;
        const loader = new Loader_1.Loader(urls, { method: 'GET' });
        loader.getResp((data) => {
            console.log(data);
        });
        this.viewGarage.append(this.header, this.main);
        return this.viewGarage;
    }
}
exports.ViewGarage = ViewGarage;


/***/ }),

/***/ "./src/components/view/viewWinners/headerWinners.ts":
/*!**********************************************************!*\
  !*** ./src/components/view/viewWinners/headerWinners.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WinnersView = void 0;
const Loader_1 = __webpack_require__(/*! ../../loader/Loader */ "./src/components/loader/Loader.ts");
const types_1 = __webpack_require__(/*! ../../types */ "./src/components/types.ts");
const elemCreate_1 = __webpack_require__(/*! ../../elemCreate */ "./src/components/elemCreate.ts");
const elemCreateButton_1 = __webpack_require__(/*! ../../elemCreateButton */ "./src/components/elemCreateButton.ts");
__webpack_require__(/*! ./winners.css */ "./src/components/view/viewWinners/winners.css");
const callbacks_1 = __webpack_require__(/*! ../../callbacks */ "./src/components/callbacks.ts");
const url = 'http://127.0.0.1:3000';
class WinnersView {
    // public row: HTMLElement
    constructor() {
        let numPages = 1;
        const paramsView = {
            tag: 'div',
            className: 'view-winners'
        };
        const paramsWinners = {
            tag: 'div',
            className: 'winners-block'
        };
        const paramsTitle = {
            tag: 'h2',
            className: 'winners-title',
            text: 'Winners'
        };
        const paramsNumTitle = {
            tag: 'span',
            className: 'winners-num',
            text: ''
        };
        const paramsPage = {
            tag: 'h3',
            className: 'page-winners',
            text: 'Page'
        };
        const paramsNumPage = {
            tag: 'span',
            className: 'page-numwin',
            text: `#${numPages}`
        };
        const paramblockChangeView = {
            tag: 'div',
            className: 'buttons-change'
        };
        this.numberPages = numPages;
        this.viewWinners = elemCreate_1.ElementCreator.createElement(paramsView);
        this.winnersBlock = elemCreate_1.ElementCreator.createElement(paramsWinners);
        this.titleWinners = elemCreate_1.ElementCreator.createElement(paramsTitle);
        this.numberWinners = elemCreate_1.ElementCreator.createElement(paramsNumTitle);
        this.page = elemCreate_1.ElementCreator.createElement(paramsPage);
        this.numberPage = elemCreate_1.ElementCreator.createElement(paramsNumPage);
        this.titleWinners.append(this.numberWinners);
        this.blockChangePages = elemCreate_1.ElementCreator.createElement(paramblockChangeView);
        this.buttonNext = new elemCreateButton_1.ElementCreatorButton('NEXT').getButton('next');
        this.buttonPrev = new elemCreateButton_1.ElementCreatorButton('PREV').getButton('prev');
        this.buttonPrev.setAttribute('disabled', 'disabled');
        this.blockChangePages.append(this.buttonPrev, this.buttonNext);
        this.buttonPrev.setAttribute('disabled', 'disabled');
        this.page.append(this.numberPage);
        this.buttonNext.addEventListener('click', () => {
            this.winnersBlock.innerHTML = '';
            if (this.buttonPrev.hasAttribute('disabled'))
                this.buttonPrev.removeAttribute('disabled');
            numPages += 1;
            this.createWinners(numPages);
            (0, callbacks_1.setLocaleStorage)(String(numPages));
        });
        this.buttonPrev.addEventListener('click', () => {
            if (numPages > 2) {
                this.winnersBlock.innerHTML = '';
                numPages -= 1;
                this.createWinners(numPages);
            }
            else if (numPages === 2) {
                this.winnersBlock.innerHTML = '';
                numPages -= 1;
                this.createWinners(numPages);
                this.buttonPrev.setAttribute('disabled', 'disabled');
            }
            (0, callbacks_1.setLocaleStorage)(String(numPages));
        });
    }
    createWinners(numPages) {
        this.winnersBlock.innerHTML = '';
        const paramsTable = {
            tag: 'table',
            className: 'table-winners',
            tagTR: 'tr',
            tagTD: 'td',
            tagTH: 'th',
            numCol: 5
        };
        const table = elemCreate_1.ElementCreator.createTable(paramsTable);
        this.numberPage.innerHTML = `#${numPages}`;
        const urls = `${url}${types_1.Path.winners}?_page=${numPages}&_limit=10`;
        const loader = new Loader_1.Loader(urls, { method: 'GET' });
        loader.getResp((data) => {
            if (data != null) {
                // eslint-disable-next-line no-restricted-syntax, guard-for-in
                const values = Object.values(data);
                values.forEach((item) => {
                    const num = values.indexOf(item) + 1;
                    // const duration = item.time / 60
                    const urlTwo = `${url}${types_1.Path.garage}/${item.id}`;
                    const loaderGarage = new Loader_1.Loader(urlTwo, { method: 'GET' });
                    loaderGarage.getResp((dataGarage) => {
                        if (dataGarage != null) {
                            const str = `<svg class="car" fill=${dataGarage.color} width="25px" height="25px" viewBox="0 -43.92 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  style="enable-background:new 0 0 122.88 35.03" xml:space="preserve">

              <style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style>
              <g>
              <path class="st0" d="M99.42,13.57c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73 C88.69,18.37,93.49,13.57,99.42,13.57L99.42,13.57z M79.05,5c-0.59,1.27-1.06,2.69-1.42,4.23c-0.82,2.57,0.39,3.11,3.19,2.06 c2.06-1.23,4.12-2.47,6.18-3.7c1.05-0.74,1.55-1.47,1.38-2.19c-0.34-1.42-3.08-2.16-5.33-2.6C80.19,2.23,80.39,2.11,79.05,5 L79.05,5z M23.86,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99c-2.75,0-4.99-2.23-4.99-4.99 C18.87,21.54,21.1,19.31,23.86,19.31L23.86,19.31z M99.42,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99 c-2.75,0-4.99-2.23-4.99-4.99C94.43,21.54,96.66,19.31,99.42,19.31L99.42,19.31z M46.14,12.5c2.77-2.97,5.97-4.9,9.67-6.76 c8.1-4.08,13.06-3.58,21.66-3.58l-2.89,7.5c-1.21,1.6-2.58,2.73-4.66,2.84H46.14L46.14,12.5z M23.86,13.57 c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73C13.13,18.37,17.93,13.57,23.86,13.57 L23.86,13.57z M40.82,10.3c3.52-2.19,7.35-4.15,11.59-5.82c12.91-5.09,22.78-6,36.32-1.9c4.08,1.55,8.16,3.1,12.24,4.06 c4.03,0.96,21.48,1.88,21.91,4.81l-4.31,5.15c1.57,1.36,2.85,3.03,3.32,5.64c-0.13,1.61-0.57,2.96-1.33,4.04 c-1.29,1.85-5.07,3.76-7.11,2.67c-0.65-0.35-1.02-1.05-1.01-2.24c0.06-23.9-28.79-21.18-26.62,2.82H35.48 C44.8,5.49,5.04,5.4,12.1,28.7C9.62,31.38,3.77,27.34,0,18.75c1.03-1.02,2.16-1.99,3.42-2.89c-0.06-0.05,0.06,0.19-0.15-0.17 c-0.21-0.36,0.51-1.87,1.99-2.74C13.02,8.4,31.73,8.52,40.82,10.3L40.82,10.3z"/>
              </g>
              </svg>`;
                            const arg = [num, `${str}`, `${dataGarage.name}`, item.wins, item.time];
                            const paramsRow = {
                                tagTR: 'tr',
                                tagTD: 'td',
                                numCol: 5
                            };
                            const row = elemCreate_1.ElementCreator.createRow(paramsRow, arg);
                            table.append(row);
                            this.winnersBlock.prepend(table);
                        }
                    });
                });
            }
        });
        table.addEventListener('click', (e) => {
            (0, callbacks_1.sortWinners)(e);
        });
        (0, callbacks_1.countWinners)();
    }
    getWinners(numPages) {
        this.createWinners(numPages);
        this.viewWinners.append(this.titleWinners, this.page, this.winnersBlock, this.blockChangePages);
        return this.viewWinners;
    }
    createViewWinner() {
        this.createWinners(this.numberPages);
        this.viewWinners.append(this.titleWinners, this.page, this.winnersBlock, this.blockChangePages);
        return this.viewWinners;
    }
}
exports.WinnersView = WinnersView;


/***/ }),

/***/ "./src/components/view/viewWinners/viewWinners.ts":
/*!********************************************************!*\
  !*** ./src/components/view/viewWinners/viewWinners.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ViewWinners = void 0;
const headerWinners_1 = __webpack_require__(/*! ./headerWinners */ "./src/components/view/viewWinners/headerWinners.ts");
const elemCreate_1 = __webpack_require__(/*! ../../elemCreate */ "./src/components/elemCreate.ts");
const callbacks_1 = __webpack_require__(/*! ../../callbacks */ "./src/components/callbacks.ts");
class ViewWinners {
    constructor() {
        const viewParams = {
            tag: 'div',
            className: 'view-two'
        };
        this.main = new headerWinners_1.WinnersView();
        this.view = elemCreate_1.ElementCreator.createElement(viewParams);
    }
    createViewWinners() {
        let num = (0, callbacks_1.getLocaleStorage)();
        window.addEventListener('load', () => {
            num = '1';
        });
        if (num != null) {
            this.view.append(this.main.getWinners(+num));
        }
        return this.view;
    }
}
exports.ViewWinners = ViewWinners;


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
/* const getAuto = async (url: string): Promise<void> => {
  const response = await fetch(`${url}`)
  const data = await response.json()
  console.log(data)
} */
__webpack_require__(/*! ./style.css */ "./src/style.css");
const app_1 = __webpack_require__(/*! ./components/app */ "./src/components/app.ts");
// const url = 'http://127.0.0.1:3000/db/garage'
const app = new app_1.App();
app.start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxhQUFhLEVBQUM7QUFDN0Q7QUFDQSxrQ0FBa0MsSUFBSTtBQUN0QztBQUNBO0FBQ0EsRUFBRTtBQUNGLG1CQUFPLENBQUMsb0NBQWE7QUFDckIsY0FBYyxtQkFBTyxDQUFDLGlEQUFrQjtBQUN4QztBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvdmlldy92aWV3R2FyYWdlL3ZpZXdHYXJhZ2UuY3NzPzVjYzkiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvdmlld1dpbm5lcnMvd2lubmVycy5jc3M/Yjc2YSIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy9hcHAudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL2NhbGxiYWNrcy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvZWxlbUNyZWF0ZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvZWxlbUNyZWF0ZUJ1dHRvbi50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvZWxlbUNyZWF0ZUlucHV0LnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy9sb2FkZXIvTG9hZGVyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy90eXBlcy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvdmlldy92aWV3R2FyYWdlL2dlbmVyYXRlQ2Fyc0Jsb2NrLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy92aWV3L3ZpZXdHYXJhZ2UvaGVhZGVyR2FyYWdlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy92aWV3L3ZpZXdHYXJhZ2UvbWFpbkdhcmFnZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvdmlldy92aWV3R2FyYWdlL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvdmlld1dpbm5lcnMvaGVhZGVyV2lubmVycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvdmlldy92aWV3V2lubmVycy92aWV3V2lubmVycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BcHAgPSB2b2lkIDA7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5jb25zdCBoZWFkZXJHYXJhZ2VfMSA9IHJlcXVpcmUoXCIuL3ZpZXcvdmlld0dhcmFnZS9oZWFkZXJHYXJhZ2VcIik7XG5jb25zdCBlbGVtQ3JlYXRlQnV0dG9uXzEgPSByZXF1aXJlKFwiLi9lbGVtQ3JlYXRlQnV0dG9uXCIpO1xuY29uc3QgZWxlbUNyZWF0ZV8xID0gcmVxdWlyZShcIi4vZWxlbUNyZWF0ZVwiKTtcbmNvbnN0IHZpZXdfMSA9IHJlcXVpcmUoXCIuL3ZpZXcvdmlld0dhcmFnZS92aWV3XCIpO1xuY29uc3Qgdmlld1dpbm5lcnNfMSA9IHJlcXVpcmUoXCIuL3ZpZXcvdmlld1dpbm5lcnMvdmlld1dpbm5lcnNcIik7XG5jbGFzcyBBcHAgZXh0ZW5kcyB2aWV3XzEuVmlld0dhcmFnZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IHBhcmFtc0hlYWRlckFwcCA9IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdoZWFkZXItYXBwJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCB2aWV3ID0ge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3ZpZXcnXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYnV0dG9uVG9HYXJhZ2UgPSBuZXcgZWxlbUNyZWF0ZUJ1dHRvbl8xLkVsZW1lbnRDcmVhdG9yQnV0dG9uKCd0b0dBUkFHRScpLmdldEJ1dHRvbigndG9HYXJhZ2UnKTtcbiAgICAgICAgdGhpcy5idXR0b25Ub1dpbm5lcnMgPSBuZXcgZWxlbUNyZWF0ZUJ1dHRvbl8xLkVsZW1lbnRDcmVhdG9yQnV0dG9uKCd0b1dJTk5FUlMnKS5nZXRCdXR0b24oJ3RvV2lubmVycycpO1xuICAgICAgICB0aGlzLmhlYWRlckFwcCA9IGVsZW1DcmVhdGVfMS5FbGVtZW50Q3JlYXRvci5jcmVhdGVFbGVtZW50KHBhcmFtc0hlYWRlckFwcCk7XG4gICAgICAgIHRoaXMuaGVhZGVyQXBwLmFwcGVuZCh0aGlzLmJ1dHRvblRvR2FyYWdlLCB0aGlzLmJ1dHRvblRvV2lubmVycyk7XG4gICAgICAgIHRoaXMudmlld0dhcmFnZSA9IG5ldyB2aWV3XzEuVmlld0dhcmFnZSgpLmNyZWF0ZXRWaWV3KCk7XG4gICAgICAgIHRoaXMudmlld1dpbm5lcnMgPSBuZXcgdmlld1dpbm5lcnNfMS5WaWV3V2lubmVycygpO1xuICAgICAgICB0aGlzLnZpZXcgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudCh2aWV3KTtcbiAgICAgICAgdGhpcy52aWV3LmFwcGVuZCh0aGlzLnZpZXdHYXJhZ2UpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmhlYWRlckFwcCwgdGhpcy52aWV3KTtcbiAgICAgICAgdGhpcy5idXR0b25Ub0dhcmFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudmlldy5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIHRoaXMudmlldy5hcHBlbmQodGhpcy52aWV3R2FyYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnV0dG9uVG9XaW5uZXJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgdGhpcy52aWV3LmFwcGVuZCh0aGlzLnZpZXdXaW5uZXJzLmNyZWF0ZVZpZXdXaW5uZXJzKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlckdhcmFnZSA9IG5ldyBoZWFkZXJHYXJhZ2VfMS5IZWFkZXJHYXJhZ2UoKTtcbiAgICB9XG59XG5leHBvcnRzLkFwcCA9IEFwcDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRMb2NhbGVTdG9yYWdlID0gZXhwb3J0cy5zZXRMb2NhbGVTdG9yYWdlID0gZXhwb3J0cy5zb3J0ID0gZXhwb3J0cy5zb3J0V2lubmVycyA9IGV4cG9ydHMucmVtb3ZlRGlzYWJsZWQgPSBleHBvcnRzLnNldERpc2FibGVkID0gZXhwb3J0cy51cGRhdGVlV2luID0gZXhwb3J0cy5jcmVhdGVXaW4gPSBleHBvcnRzLmNoZWNrV2luID0gZXhwb3J0cy5zdG9wQ2FycyA9IGV4cG9ydHMuY291bnRXaW5uZXJzID0gZXhwb3J0cy5jb3VudENhcnMgPSBleHBvcnRzLmdlbmVyYXRlQ2Fyc1R3byA9IGV4cG9ydHMuc2h1ZmZsZSA9IGV4cG9ydHMuZ2VuZXJhdGVDYXJzID0gZXhwb3J0cy5nZXRJZCA9IGV4cG9ydHMuYW5pbWF0ZVRocmVlID0gZXhwb3J0cy5yYXNlVGhyZWUgPSBleHBvcnRzLmFuaW1hdGVDYXIgPSBleHBvcnRzLmNyZWF0ZVBvcGFwID0gZXhwb3J0cy5yZW1vdmVDYXIgPSBleHBvcnRzLnNlbmRGb3JtID0gZXhwb3J0cy5zdWJtaXRGb3JtID0gZXhwb3J0cy5kZWxldGVDYXIgPSBleHBvcnRzLnNlbmRSZXEgPSB2b2lkIDA7XG5jb25zdCBMb2FkZXJfMSA9IHJlcXVpcmUoXCIuL2xvYWRlci9Mb2FkZXJcIik7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5jb25zdCBnZW5lcmF0ZUNhcnNCbG9ja18xID0gcmVxdWlyZShcIi4vdmlldy92aWV3R2FyYWdlL2dlbmVyYXRlQ2Fyc0Jsb2NrXCIpO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuL3R5cGVzXCIpO1xuY29uc3QgdXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMCc7XG5mdW5jdGlvbiBzZW5kUmVxKGFyZykge1xuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBMb2FkZXJfMS5Mb2FkZXIoYCR7YXJnLnVybH1gLCB7IG1ldGhvZDogYCR7YXJnLm1ldGhvZH1gIH0pO1xuICAgIGxvYWRlci5nZXRSZXNwKChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnNlbmRSZXEgPSBzZW5kUmVxO1xuZnVuY3Rpb24gZGVsZXRlQ2FyKGFyZywgaWQpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyXzEuTG9hZGVyKGAke2FyZy51cmx9YCwgeyBtZXRob2Q6IGAke2FyZy5tZXRob2R9YCB9KTtcbiAgICBsb2FkZXIuZ2V0UmVzcFJyKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UgPT09IDIwMCkge1xuICAgICAgICAgICAgY29uc3QgdXJsc1RocmVlID0gYCR7dXJsfSR7dHlwZXNfMS5QYXRoLndpbm5lcnN9LyR7aWR9YDtcbiAgICAgICAgICAgIGNvbnN0IG5ld0xvYWRlciA9IG5ldyBMb2FkZXJfMS5Mb2FkZXIodXJsc1RocmVlLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICAgICAgICBuZXdMb2FkZXIuZ2V0UmVzcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhLmlkKSA9PT0gK2Ake2lkfWApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9hZGVyVHdvID0gbmV3IExvYWRlcl8xLkxvYWRlcih1cmxzVGhyZWUsIHsgbWV0aG9kOiAnREVMRVRFJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyVHdvLmdldFJlc3BScigocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3AgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuZGVsZXRlQ2FyID0gZGVsZXRlQ2FyO1xuZnVuY3Rpb24gc3VibWl0Rm9ybShhcmcpIHtcbiAgICB2YXIgX2E7XG4gICAgKF9hID0gYXJnLmZvcm0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNlbmRGb3JtKGFyZyk7XG4gICAgICAgIGlmIChlLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgZS50YXJnZXQucmVzZXQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5zdWJtaXRGb3JtID0gc3VibWl0Rm9ybTtcbmZ1bmN0aW9uIHNlbmRGb3JtKGFyZykge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGFyZy5mb3JtKTtcbiAgICBjb25zdCBvYmogPSB7fTtcbiAgICBmb3JtRGF0YS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7IG9ialtrZXldID0gdmFsdWU7IH0pO1xuICAgIGNvbnN0IGRhdGFKc29uID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyXzEuTG9hZGVyKGAke2FyZy51cmx9YCwge1xuICAgICAgICBtZXRob2Q6IGAke2FyZy5tZXRob2R9YCxcbiAgICAgICAgaGVhZGVyczogYXJnLmhlYWRlcnMsXG4gICAgICAgIGJvZHk6IGRhdGFKc29uXG4gICAgfSk7XG4gICAgbG9hZGVyLmdldFJlc3AoKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGFyZy5tZXRob2QgPT09ICdQT1NUJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrQ2FyID0gbmV3IGdlbmVyYXRlQ2Fyc0Jsb2NrXzEuQXV0b0Jsb2NrR2VuZXJhdG9yKGRhdGEpLmdldEF1dG9CbG9jaygpO1xuICAgICAgICAgICAgICAgIGJsb2NrQ2FyLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGBudW0ke2RhdGEuaWR9YCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ2FyYWdlQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlLWJsb2NrJyk7XG4gICAgICAgICAgICAgICAgaWYgKGdhcmFnZUJsb2NrICE9IG51bGwgJiYgZ2FyYWdlQmxvY2suY2hpbGRyZW4ubGVuZ3RoIDwgNykge1xuICAgICAgICAgICAgICAgICAgICBnYXJhZ2VCbG9jay5hcHBlbmQoYmxvY2tDYXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb3VudENhcnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcmcubWV0aG9kID09PSAnUFVUJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkU3RyID0gYG51bSR7ZGF0YS5pZH1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhckJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQgPSAke2lkU3RyfV1gKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lQ2FyID0gY2FyQmxvY2sgPT09IG51bGwgfHwgY2FyQmxvY2sgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhckJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5jYXItbmFtZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGltZ0NhciA9IGNhckJsb2NrID09PSBudWxsIHx8IGNhckJsb2NrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJCbG9jay5xdWVyeVNlbGVjdG9yKCcuaW1nLWF1dG8nKTtcbiAgICAgICAgICAgICAgICBpZiAobmFtZUNhciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWVDYXIuaW5uZXJIVE1MID0gYCR7ZGF0YS5uYW1lfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpbWdDYXIgIT0gbnVsbCAmJiBpbWdDYXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBpbWdDYXIuc3R5bGUuY29sb3IgPSBgJHtkYXRhLmNvbG9yfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLnNlbmRGb3JtID0gc2VuZEZvcm07XG5mdW5jdGlvbiByZW1vdmVDYXIoYXJnLCBpZCkge1xuICAgIGRlbGV0ZUNhcihhcmcsIGlkKTtcbiAgICBjb3VudENhcnMoKTtcbn1cbmV4cG9ydHMucmVtb3ZlQ2FyID0gcmVtb3ZlQ2FyO1xuZnVuY3Rpb24gY3JlYXRlUG9wYXAobW9kZWwsIHRpbWUpIHtcbiAgICBjb25zdCBwb3BhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcGFwLmNsYXNzTGlzdC5hZGQoJ3BvcGFwJyk7XG4gICAgY29uc3QgcG9wYXBCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wYXBCb2R5LmNsYXNzTGlzdC5hZGQoJ3BvcGFwLWJvZHknKTtcbiAgICBjb25zdCBwb3BhcENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3BhcENvbnRlbnQuY2xhc3NMaXN0LmFkZCgncG9wYXAtY29udGVudCcpO1xuICAgIHBvcGFwQm9keS5hcHBlbmQocG9wYXBDb250ZW50KTtcbiAgICBwb3BhcENvbnRlbnQuaW5uZXJIVE1MID0gYCR7bW9kZWx9IHdpbnMgZm9yICR7dGltZX1zZWMhYDtcbiAgICBwb3BhcC5hcHBlbmQocG9wYXBCb2R5KTtcbiAgICByZXR1cm4gcG9wYXA7XG59XG5leHBvcnRzLmNyZWF0ZVBvcGFwID0gY3JlYXRlUG9wYXA7XG5sZXQgYW5pbUlkO1xubGV0IHdpbm5lciA9IGZhbHNlO1xuLy8gbGV0IGFycmF5T2JqOiBPYmpJZFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgd2lubmVyID0gZmFsc2U7XG59KTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCAoKSA9PiB7XG4gICAgY29uc3QgYnV0dG9uUmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLVJFU0VUJyk7XG4gICAgYnV0dG9uUmVzZXQgPT09IG51bGwgfHwgYnV0dG9uUmVzZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvblJlc2V0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbn0pO1xuZnVuY3Rpb24gYW5pbWF0ZUNhcihlbCwgaWQpIHtcbiAgICBjb25zdCBpbWcgPSBlbCA9PT0gbnVsbCB8fCBlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWwucXVlcnlTZWxlY3RvcignLmltZy1hdXRvJyk7XG4gICAgY29uc3QgZmxhZyA9IGVsID09PSBudWxsIHx8IGVsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlbC5xdWVyeVNlbGVjdG9yKCcuZmxhZycpO1xuICAgIGNvbnN0IGNhck5hbWUgPSBlbCA9PT0gbnVsbCB8fCBlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWwucXVlcnlTZWxlY3RvcignLmNhci1uYW1lJyk7XG4gICAgaWYgKGZsYWcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBjb25zdCBjb29yZEZsYWcgPSBmbGFnLm9mZnNldExlZnQgLSA0MDtcbiAgICAgICAgY29uc3QgdXJscyA9IGAke3VybH0ke3R5cGVzXzEuUGF0aC5lbmdpbmV9P2lkPSR7aWR9JnN0YXR1cz1zdGFydGVkYDtcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcl8xLkxvYWRlcihgJHt1cmxzfWAsIHsgbWV0aG9kOiAnUEFUQ0gnIH0pO1xuICAgICAgICBsb2FkZXIuZ2V0UmVzcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChpbWcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IGltZyA9PT0gbnVsbCB8fCBpbWcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGltZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBkaXN0YW5jZSA9IGNvb3JkRmxhZyAtIHN0YXJ0UG9zaXRpb25zXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gTWF0aC5mbG9vcihkYXRhLmRpc3RhbmNlIC8gZGF0YS52ZWxvY2l0eSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10ZW1wbGF0ZS1jdXJseS1pbi1zdHJpbmdcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbUltZyA9IGltZy5hbmltYXRlKFt7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHtzdGFydFBvc2l0aW9uc31weGAgfSwgeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7Y29vcmRGbGFnfXB4YCB9XSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtjb29yZEZsYWd9cHgpYDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsVHdvID0gYCR7dXJscy5zbGljZSgwLCB1cmxzLmxhc3RJbmRleE9mKCc9JykpfT1kcml2ZWA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRlck9uZSA9IG5ldyBMb2FkZXJfMS5Mb2FkZXIodXJsVHdvLCB7IG1ldGhvZDogJ1BBVENIJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyT25lLmdldFJlc3BScigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSA9PT0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29vcmQgPSBpbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltSW1nLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7Y29vcmR9cHgpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlID09PSAyMDAgJiYgIXdpbm5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGQgPSArKGR1cmF0aW9uIC8gMTAwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FyTmFtZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcGFwV2luID0gY3JlYXRlUG9wYXAoY2FyTmFtZS5pbm5lckhUTUwsIGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChwb3BhcFdpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcGFwV2luLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWF0aC5yb3VuZChkdXJhdGlvbiAvIDEwMDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lubmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja1dpbihpZCwgZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltSW1nLmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuYW5pbWF0ZUNhciA9IGFuaW1hdGVDYXI7XG5mdW5jdGlvbiByYXNlVGhyZWUoZWwsIGlkKSB7XG4gICAgY29uc3QgaW1nID0gZWwgPT09IG51bGwgfHwgZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pbWctYXV0bycpO1xuICAgIGNvbnN0IGZsYWcgPSBlbCA9PT0gbnVsbCB8fCBlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWwucXVlcnlTZWxlY3RvcignLmZsYWcnKTtcbiAgICAvLyBjb25zdCBjYXJOYW1lID0gZWw/LnF1ZXJ5U2VsZWN0b3IoJy5jYXItbmFtZScpXG4gICAgaWYgKGZsYWcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBjb25zdCBjb29yZEZsYWcgPSBmbGFnLm9mZnNldExlZnQgLSA0MDtcbiAgICAgICAgY29uc3QgdXJscyA9IGAke3VybH0ke3R5cGVzXzEuUGF0aC5lbmdpbmV9P2lkPSR7aWR9JnN0YXR1cz1zdGFydGVkYDtcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcl8xLkxvYWRlcihgJHt1cmxzfWAsIHsgbWV0aG9kOiAnUEFUQ0gnIH0pO1xuICAgICAgICBsb2FkZXIuZ2V0UmVzcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChpbWcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IGltZyA9PT0gbnVsbCB8fCBpbWcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGltZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGNvb3JkRmxhZyAtIHN0YXJ0UG9zaXRpb25zO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IE1hdGguZmxvb3IoZGF0YS5kaXN0YW5jZSAvIGRhdGEudmVsb2NpdHkpO1xuICAgICAgICAgICAgICAgICAgICBhbmltSWQgPSBhbmltYXRlVGhyZWUoZHVyYXRpb24sIGltZywgZGlzdGFuY2UsIHN0YXJ0UG9zaXRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gb2JqSWRbYCR7aWR9YF0gPSBhbmltYXRlVGhyZWUoZHVyYXRpb24sIGltZywgZGlzdGFuY2UsIHN0YXJ0UG9zaXRpb25zKVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmpJZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsVHdvID0gYCR7dXJscy5zbGljZSgwLCB1cmxzLmxhc3RJbmRleE9mKCc9JykpfT1kcml2ZWA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRlck9uZSA9IG5ldyBMb2FkZXJfMS5Mb2FkZXIodXJsVHdvLCB7IG1ldGhvZDogJ1BBVENIJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyT25lLmdldFJlc3BScigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSA9PT0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3Qga2V5ID0gYG51bSR7aWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iaklkW2Ake2lkfWBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShhbmltSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMucmFzZVRocmVlID0gcmFzZVRocmVlO1xuZnVuY3Rpb24gYW5pbWF0ZVRocmVlKGR1cmF0aW9uLCBlbGVtZW50LCBkaXN0YW5jZSwgc3RhcnRQb3NpdGlvbnMpIHtcbiAgICBsZXQgY3VycmVudFBvc2l0aW9ucyA9IHN0YXJ0UG9zaXRpb25zO1xuICAgIGNvbnN0IGZpbiA9IGRpc3RhbmNlICsgc3RhcnRQb3NpdGlvbnM7XG4gICAgY29uc3QgZnJhbWUgPSBkdXJhdGlvbiAvIDEwMDAgKiA2MDtcbiAgICBjb25zdCBkeCA9IGRpc3RhbmNlIC8gZnJhbWU7XG4gICAgY29uc3QgdGljayA9ICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgY3VycmVudFBvc2l0aW9ucyArPSBkeDtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2N1cnJlbnRQb3NpdGlvbnN9cHgpYDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UG9zaXRpb25zIDwgZmluKSB7XG4gICAgICAgICAgICAgICAgYW5pbUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBhbmltSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG4gICAgcmV0dXJuIGFuaW1JZDtcbn1cbmV4cG9ydHMuYW5pbWF0ZVRocmVlID0gYW5pbWF0ZVRocmVlO1xuZnVuY3Rpb24gZ2V0SWQoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyLWJsb2NrJyk7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5oYXNBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpXG4gICAgICAgICAgICAgICAgYXJyLnB1c2godmFsdWUuc2xpY2UoMykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coYXJyLm1hcCgoaXRlbSkgPT4gTnVtYmVyKGl0ZW0pKSk7XG4gICAgcmV0dXJuIGFycjtcbn1cbmV4cG9ydHMuZ2V0SWQgPSBnZXRJZDtcbmZ1bmN0aW9uIGdlbmVyYXRlQ2FycygpIHtcbiAgICBjb25zdCBuYW1lcyA9IFsnT3BlbCcsICdNZXJzZWRlcycsICdCTVcnLCAnVGVzbGEnLCAnVG95b3RhJywgJ0ZvcmQnXTtcbiAgICBjb25zdCBtb2RlbHMgPSBbJ1ZlY3RyYScsICdTWDUnLCAnZ2xhJywgJ21vZGVsIHgnLCAnY2FtcnknLCAnRmllc3RhJ107XG4gICAgY29uc3QgY29sb3JzID0gWycjZTZlNmZhJywgJyNmZWRlMDAnLCAnIzZjNzc5ZicsICcjZWYzYzQwJywgJ2dyZWVuJywgJ3llbGxvdyddO1xuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpO1xuICAgIGNvbnNvbGUubG9nKHJhbmRvbSk7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBsZXQgbiA9IDA7XG4gICAgd2hpbGUgKG4gPCAxMDApIHtcbiAgICAgICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpO1xuICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSk7XG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KTtcbiAgICAgICAgY29uc3Qgb2JqID0geyBuYW1lOiBgJHtuYW1lc1tpXX0gJHttb2RlbHNbal19YCwgY29sb3I6IGAke2NvbG9yc1t4XX1gIH07XG4gICAgICAgIGFycmF5LnB1c2gob2JqKTtcbiAgICAgICAgbiArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG59XG5leHBvcnRzLmdlbmVyYXRlQ2FycyA9IGdlbmVyYXRlQ2FycztcbmZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcbiAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGkgLT0gMSkge1xuICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBbYXJyYXlbaV0sIGFycmF5W2pdXSA9IFthcnJheVtqXSwgYXJyYXlbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG59XG5leHBvcnRzLnNodWZmbGUgPSBzaHVmZmxlO1xuZnVuY3Rpb24gZ2VuZXJhdGVDYXJzVHdvKGNvbGxiYWNrKSB7XG4gICAgY29uc3QgbmFtZXMgPSBbJ09wZWwnLCAnTWVyc2VkZXMnLCAnQk1XJywgJ1Rlc2xhJywgJ1RveW90YSddO1xuICAgIGNvbnN0IG1vZGVscyA9IFsnVmVjdHJhJywgJ1NYNScsICdnbGEnLCAnbW9kZWwgeCcsICdjYW1yeSddO1xuICAgIGNvbnN0IGNvbG9ycyA9IFsnI2U2ZTZmYScsICcjZmVkZTAwJywgJyM2Yzc3OWYnLCAnI2VmM2M0MCcsICdncmVlbiddO1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgbGV0IG4gPSAwO1xuICAgIHdoaWxlIChuIDwgMjApIHtcbiAgICAgICAgY29uc3QgYXJyTmFtZSA9IHNodWZmbGUobmFtZXMpO1xuICAgICAgICBjb25zdCBhcnJNb2RlbHMgPSBzaHVmZmxlKG1vZGVscyk7XG4gICAgICAgIGNvbnN0IGFyckNvbG9ycyA9IHNodWZmbGUoY29sb3JzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0geyBuYW1lOiBgJHthcnJOYW1lW2ldfSAke2Fyck1vZGVsc1tpXX1gLCBjb2xvcjogYCR7YXJyQ29sb3JzW2ldfWAgfTtcbiAgICAgICAgICAgIGFycmF5LnB1c2gob2JqKTtcbiAgICAgICAgfVxuICAgICAgICBuICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cbmV4cG9ydHMuZ2VuZXJhdGVDYXJzVHdvID0gZ2VuZXJhdGVDYXJzVHdvO1xuZnVuY3Rpb24gY291bnRDYXJzKCkge1xuICAgIGNvbnN0IHVybFR3byA9IGAke3VybH0ke3R5cGVzXzEuUGF0aC5nYXJhZ2V9P19saW1pdD03YDtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyXzEuTG9hZGVyKHVybFR3bywgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgIGxvYWRlci5nZXRSZXNwUmVzcCgoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBudW0gPSBkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEuZ2V0KCdYLVRvdGFsLUNvdW50Jyk7XG4gICAgICAgIGlmIChudW0gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgdGl0bGVHYXJhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fycy1udW0nKTtcbiAgICAgICAgICAgIGlmICh0aXRsZUdhcmFnZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGl0bGVHYXJhZ2UuaW5uZXJIVE1MID0gYCgke251bX0pYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5jb3VudENhcnMgPSBjb3VudENhcnM7XG5mdW5jdGlvbiBjb3VudFdpbm5lcnMoKSB7XG4gICAgY29uc3QgdXJsVHdvID0gYCR7dXJsfSR7dHlwZXNfMS5QYXRoLndpbm5lcnN9P19saW1pdD0xMGA7XG4gICAgY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcl8xLkxvYWRlcih1cmxUd28sIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICBsb2FkZXIuZ2V0UmVzcFJlc3AoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgbnVtID0gZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhLmdldCgnWC1Ub3RhbC1Db3VudCcpO1xuICAgICAgICBpZiAobnVtICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpbm5lcnNOdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVycy1udW0nKTtcbiAgICAgICAgICAgIGlmICh3aW5uZXJzTnVtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB3aW5uZXJzTnVtLmlubmVySFRNTCA9IGAoJHtudW19KWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuY291bnRXaW5uZXJzID0gY291bnRXaW5uZXJzO1xuZnVuY3Rpb24gc3RvcENhcnMoaWQpIHtcbiAgICBjb25zdCB1cmxzID0gYCR7dXJsfSR7dHlwZXNfMS5QYXRoLmVuZ2luZX0/aWQ9JHtpZH0mc3RhdHVzPXN0b3BwZWRgO1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9bnVtJHtpZH1dYCk7XG4gICAgY29uc3QgaW1nID0gZWwgPT09IG51bGwgfHwgZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pbWctYXV0bycpO1xuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBMb2FkZXJfMS5Mb2FkZXIodXJscywgeyBtZXRob2Q6ICdQQVRDSCcgfSk7XG4gICAgbG9hZGVyLmdldFJlc3AoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSBpbWcgPT09IG51bGwgfHwgaW1nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgaWYgKGltZyAhPSBudWxsICYmIGltZyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoZGF0YSAhPSBudWxsICYmIGRhdGEudmVsb2NpdHkgPT09IDAgJiYgc3RhcnRQb3NpdGlvbnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShhbmltSWQpO1xuICAgICAgICAgICAgICAgIGltZy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkezB9cHgpYDtcbiAgICAgICAgICAgICAgICBpZiAod2lubmVyKVxuICAgICAgICAgICAgICAgICAgICB3aW5uZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5zdG9wQ2FycyA9IHN0b3BDYXJzO1xuZnVuY3Rpb24gY2hlY2tXaW4oaWQsIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgdXJscyA9IGAke3VybH0ke3R5cGVzXzEuUGF0aC53aW5uZXJzfS8ke2lkfWA7XG4gICAgY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcl8xLkxvYWRlcih1cmxzLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgbG9hZGVyLmdldFJlc3BScigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlID09PSA0MDQpIHtcbiAgICAgICAgICAgIGNvbnN0IHVybFR3byA9IGAke3VybH0ke3R5cGVzXzEuUGF0aC53aW5uZXJzfWA7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0geyB1cmw6IHVybFR3bywgbWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH07XG4gICAgICAgICAgICBjcmVhdGVXaW4oaWQsIGR1cmF0aW9uLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxvYWRlci5nZXRSZXNwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpbiA9IGRhdGEud2lucyArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcmcgPSB7IHVybDogdXJscywgbWV0aG9kOiAnUFVUJywgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnRpbWUgPCBkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gZGF0YS50aW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZVdpbihpZCwgZHVyYXRpb24sIHdpbiwgYXJnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmNoZWNrV2luID0gY2hlY2tXaW47XG5mdW5jdGlvbiBjcmVhdGVXaW4oaWRDYXIsIGR1cmF0aW9uLCBhcmcpIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIGlkOiBpZENhcixcbiAgICAgICAgd2luczogMSxcbiAgICAgICAgdGltZTogZHVyYXRpb25cbiAgICB9O1xuICAgIGNvbnN0IGRhdGFKc29uID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyXzEuTG9hZGVyKGAke2FyZy51cmx9YCwge1xuICAgICAgICBtZXRob2Q6IGAke2FyZy5tZXRob2R9YCxcbiAgICAgICAgaGVhZGVyczogYXJnLmhlYWRlcnMsXG4gICAgICAgIGJvZHk6IGRhdGFKc29uXG4gICAgfSk7XG4gICAgbG9hZGVyLmdldFJlc3AoKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmNyZWF0ZVdpbiA9IGNyZWF0ZVdpbjtcbmZ1bmN0aW9uIHVwZGF0ZWVXaW4oaWQsIGR1cmF0aW9uLCB3aW4sIGFyZykge1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgd2luczogd2luLFxuICAgICAgICB0aW1lOiBkdXJhdGlvblxuICAgIH07XG4gICAgY29uc3QgZGF0YUpzb24gPSBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBMb2FkZXJfMS5Mb2FkZXIoYCR7YXJnLnVybH1gLCB7XG4gICAgICAgIG1ldGhvZDogYCR7YXJnLm1ldGhvZH1gLFxuICAgICAgICBoZWFkZXJzOiBhcmcuaGVhZGVycyxcbiAgICAgICAgYm9keTogZGF0YUpzb25cbiAgICB9KTtcbiAgICBsb2FkZXIuZ2V0UmVzcCgoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMudXBkYXRlZVdpbiA9IHVwZGF0ZWVXaW47XG5mdW5jdGlvbiBzZXREaXNhYmxlZCgpIHtcbiAgICBjb25zdCBidXR0b25VcGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLVVQREFURScpO1xuICAgIGNvbnN0IGJ1dHRvbkNyZWF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tQ1JFQVRFJyk7XG4gICAgY29uc3QgYnV0dG9uUmFzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tUkFTRScpO1xuICAgIGNvbnN0IGJ1dHRvbnNSZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLVJFTU9WRScpO1xuICAgIGNvbnN0IGJ1dHRvbnNTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLVNFTEVDVCcpO1xuICAgIGNvbnN0IGJ1dHRvbnNTdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tQScpO1xuICAgIGNvbnN0IGJ1dHRvbkdlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tR0VORVJBVEUnKTtcbiAgICBidXR0b25VcGRhdGUgPT09IG51bGwgfHwgYnV0dG9uVXBkYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b25VcGRhdGUuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgIGJ1dHRvbkNyZWF0ZSA9PT0gbnVsbCB8fCBidXR0b25DcmVhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbkNyZWF0ZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgYnV0dG9uR2VuID09PSBudWxsIHx8IGJ1dHRvbkdlbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uR2VuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICBidXR0b25SYXNlID09PSBudWxsIHx8IGJ1dHRvblJhc2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvblJhc2Uuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgIGJ1dHRvbnNSZW1vdmUgPT09IG51bGwgfHwgYnV0dG9uc1JlbW92ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uc1JlbW92ZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgIH0pO1xuICAgIGJ1dHRvbnNTZWxlY3QgPT09IG51bGwgfHwgYnV0dG9uc1NlbGVjdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uc1NlbGVjdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgIH0pO1xuICAgIGJ1dHRvbnNTdGFydCA9PT0gbnVsbCB8fCBidXR0b25zU3RhcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbnNTdGFydC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5zZXREaXNhYmxlZCA9IHNldERpc2FibGVkO1xuZnVuY3Rpb24gcmVtb3ZlRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgYnV0dG9uVXBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1VUERBVEUnKTtcbiAgICBjb25zdCBidXR0b25DcmVhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLUNSRUFURScpO1xuICAgIGNvbnN0IGJ1dHRvbkdlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tR0VORVJBVEUnKTtcbiAgICBjb25zdCBidXR0b25zUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi1SRU1PVkUnKTtcbiAgICBjb25zdCBidXR0b25SYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1SQVNFJyk7XG4gICAgY29uc3QgYnV0dG9uc1NlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tU0VMRUNUJyk7XG4gICAgY29uc3QgYnV0dG9uc1N0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi1BJyk7XG4gICAgYnV0dG9uVXBkYXRlID09PSBudWxsIHx8IGJ1dHRvblVwZGF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uVXBkYXRlLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICBidXR0b25DcmVhdGUgPT09IG51bGwgfHwgYnV0dG9uQ3JlYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b25DcmVhdGUucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIGJ1dHRvbkdlbiA9PT0gbnVsbCB8fCBidXR0b25HZW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbkdlbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgYnV0dG9uUmFzZSA9PT0gbnVsbCB8fCBidXR0b25SYXNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b25SYXNlLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICBidXR0b25zUmVtb3ZlID09PSBudWxsIHx8IGJ1dHRvbnNSZW1vdmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbnNSZW1vdmUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9KTtcbiAgICBidXR0b25zU2VsZWN0ID09PSBudWxsIHx8IGJ1dHRvbnNTZWxlY3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbnNTZWxlY3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9KTtcbiAgICBidXR0b25zU3RhcnQgPT09IG51bGwgfHwgYnV0dG9uc1N0YXJ0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b25zU3RhcnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMucmVtb3ZlRGlzYWJsZWQgPSByZW1vdmVEaXNhYmxlZDtcbmxldCBzb3J0V2luID0gJ2Rlc2MnO1xuZnVuY3Rpb24gc29ydFdpbm5lcnMoZSkge1xuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKTtcbiAgICBjb25zdCB3aW5DZWxsID0gdGFibGUgPT09IG51bGwgfHwgdGFibGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhYmxlLnJvd3NbMF0uY2VsbHNbM107XG4gICAgY29uc3QgdGltZUNlbGwgPSB0YWJsZSA9PT0gbnVsbCB8fCB0YWJsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFibGUucm93c1swXS5jZWxsc1s0XTtcbiAgICBpZiAoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAoZS50YXJnZXQuaW5uZXJIVE1MLmluY2x1ZGVzKCdXaW5zJykgfHwgZS50YXJnZXQuaW5uZXJIVE1MLmluY2x1ZGVzKCdCZXN0IHRpbWUgKHNlY29uZHMpJykpIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gd2luQ2VsbCAmJiAodGltZUNlbGwgPT09IG51bGwgfHwgdGltZUNlbGwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRpbWVDZWxsLmlubmVySFRNTFt0aW1lQ2VsbC5pbm5lckhUTUwubGVuZ3RoIC0gMV0pICE9PSAnKScpIHtcbiAgICAgICAgICAgICAgICBpZiAodGltZUNlbGwgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgdGltZUNlbGwuaW5uZXJIVE1MID0gdGltZUNlbGwgPT09IG51bGwgfHwgdGltZUNlbGwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRpbWVDZWxsLmlubmVySFRNTC5zbGljZSgwLCB0aW1lQ2VsbC5pbm5lckhUTUwubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlLnRhcmdldCA9PT0gdGltZUNlbGwgJiYgKHdpbkNlbGwgPT09IG51bGwgfHwgd2luQ2VsbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luQ2VsbC5pbm5lckhUTUxbd2luQ2VsbC5pbm5lckhUTUwubGVuZ3RoIC0gMV0pICE9PSAncycpIHtcbiAgICAgICAgICAgICAgICBpZiAod2luQ2VsbCAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB3aW5DZWxsLmlubmVySFRNTCA9ICdXaW5zJzsgLyogd2luQ2VsbD8uaW5uZXJIVE1MLnNsaWNlKDAsIHdpbkNlbGwuaW5uZXJIVE1MLmxlbmd0aCAtIDEpICovXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbmFtZSA9IGUudGFyZ2V0LmlubmVySFRNTDtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRPcmRlciA9IHNvcnRXaW47XG4gICAgICAgICAgICBpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAncycgfHwgbmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKScpIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gZS50YXJnZXQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IGUudGFyZ2V0LmlubmVySFRNTC5zbGljZSgwLCBlLnRhcmdldC5pbm5lckhUTUwubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc29ydE9yZGVyID09PSAnZGVzYycpIHtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBgJHtuYW1lfSYjODU5MztgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gYCR7bmFtZX0mIzg1OTU7YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuYW1lU29ydDtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5pbm5lckhUTUwuaW5jbHVkZXMoJ1dpbnMnKSkge1xuICAgICAgICAgICAgICAgIG5hbWVTb3J0ID0gJ3dpbnMnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmFtZVNvcnQgPSAndGltZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzb3J0KG5hbWVTb3J0LCBzb3J0T3JkZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5zb3J0V2lubmVycyA9IHNvcnRXaW5uZXJzO1xuZnVuY3Rpb24gc29ydChuYW1lLCBzb3J0T3JkZXIpIHtcbiAgICBpZiAoc29ydE9yZGVyID09PSAnZGVzYycpIHtcbiAgICAgICAgc29ydFdpbiA9ICdhc2MnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc29ydFdpbiA9ICdkZXNjJztcbiAgICB9XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xuICAgIGlmICh0YWJsZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHVybHMgPSBgJHt1cmx9JHt0eXBlc18xLlBhdGgud2lubmVyc30/X3NvcnQ9JHtuYW1lfSZfb3JkZXI9JHtzb3J0T3JkZXJ9YDtcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcl8xLkxvYWRlcih1cmxzLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICAgIGxvYWRlci5nZXRSZXNwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhKTtcbiAgICAgICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRhYmxlLnJvd3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWJsZS5yb3dzW2ldLmNlbGxzWzNdLmlubmVySFRNTCA9PT0gU3RyaW5nKGl0ZW0ud2lucykgJiYgdGFibGUucm93c1tpXS5jZWxsc1s0XS5pbm5lckhUTUwgPT09IFN0cmluZyhpdGVtLnRpbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuYXBwZW5kKHRhYmxlLnJvd3NbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuc29ydCA9IHNvcnQ7XG5mdW5jdGlvbiBzZXRMb2NhbGVTdG9yYWdlKG51bSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdudW0nLCBudW0pO1xufVxuZXhwb3J0cy5zZXRMb2NhbGVTdG9yYWdlID0gc2V0TG9jYWxlU3RvcmFnZTtcbmZ1bmN0aW9uIGdldExvY2FsZVN0b3JhZ2UoKSB7XG4gICAgbGV0IG51bTtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ251bScpICE9IG51bGwpIHtcbiAgICAgICAgbnVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ251bScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbnVtID0gJzEnO1xuICAgIH1cbiAgICByZXR1cm4gbnVtO1xufVxuZXhwb3J0cy5nZXRMb2NhbGVTdG9yYWdlID0gZ2V0TG9jYWxlU3RvcmFnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FbGVtZW50Q3JlYXRvciA9IHZvaWQgMDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXh0cmFuZW91cy1jbGFzc1xuY2xhc3MgRWxlbWVudENyZWF0b3Ige1xuICAgIHN0YXRpYyBjcmVhdGVFbGVtZW50KHBhcmFtcykge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocGFyYW1zLnRhZyk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQocGFyYW1zLmNsYXNzTmFtZSk7XG4gICAgICAgIGlmIChwYXJhbXMudGV4dCAhPSBudWxsKSB7XG4gICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IHBhcmFtcy50ZXh0O1xuICAgICAgICB9XG4gICAgICAgIC8qIGlmICgocGFyYW1zLmF0dHJpYnV0ZU5hbWUgIT0gbnVsbCkgJiYgKHBhcmFtcy5hdHRyaWJ1dGVWYWx1ZSAhPSBudWxsKSkge1xuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShwYXJhbXMuYXR0cmlidXRlTmFtZSwgcGFyYW1zLmF0dHJpYnV0ZVZhbHVlKVxuICAgICAgICB9ICovXG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVRhYmxlKHBhcmFtcykge1xuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocGFyYW1zLnRhZyk7XG4gICAgICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQocGFyYW1zLmNsYXNzTmFtZSk7XG4gICAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChwYXJhbXMudGFnVFIpO1xuICAgICAgICB0YWJsZS5hcHBlbmQodHIpO1xuICAgICAgICBjb25zdCBhcnIgPSBbJ051bWJlcicsICdDYXInLCAnTmFtZScsICdXaW5zJywgJ0Jlc3QgdGltZSAoc2Vjb25kcyknXTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IHBhcmFtcy5udW1Db2wpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChwYXJhbXMudGFnVEgpO1xuICAgICAgICAgICAgdGguaW5uZXJIVE1MID0gYCR7YXJyW2ldfWA7XG4gICAgICAgICAgICB0ci5hcHBlbmQodGgpO1xuICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YWJsZTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVJvdyhwYXJhbXMsIGFycikge1xuICAgICAgICAvLyBjb25zdCB0YWJsZTogZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocGFyYW1zLnRhZylcbiAgICAgICAgLy8gdGFibGUuY2xhc3NMaXN0LmFkZChwYXJhbXMuY2xhc3NOYW1lKVxuICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocGFyYW1zLnRhZ1RSKTtcbiAgICAgICAgLy8gdGFibGUuYXBwZW5kKHRyKVxuICAgICAgICAvLyBjb25zdCBhcnIgPSBbJ051bWJlcicsICdDYXInLCAnTmFtZScsICdXaW5zJywgJ0Jlc3QgdGltZSAoc2Vjb25kcyknXVxuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgcGFyYW1zLm51bUNvbCkge1xuICAgICAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHBhcmFtcy50YWdURCk7XG4gICAgICAgICAgICB0aC5pbm5lckhUTUwgPSBgJHthcnJbaV19YDtcbiAgICAgICAgICAgIHRyLmFwcGVuZCh0aCk7XG4gICAgICAgICAgICBpICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRyO1xuICAgIH1cbn1cbmV4cG9ydHMuRWxlbWVudENyZWF0b3IgPSBFbGVtZW50Q3JlYXRvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FbGVtZW50Q3JlYXRvckJ1dHRvbiA9IGV4cG9ydHMuYnV0dG9uc05hbWUgPSB2b2lkIDA7XG5jb25zdCBlbGVtQ3JlYXRlXzEgPSByZXF1aXJlKFwiLi9lbGVtQ3JlYXRlXCIpO1xudmFyIGJ1dHRvbnNOYW1lO1xuKGZ1bmN0aW9uIChidXR0b25zTmFtZSkge1xuICAgIGJ1dHRvbnNOYW1lW1wiaW5wdXRDcmVhdGVcIl0gPSBcImNyZWF0ZVwiO1xuICAgIGJ1dHRvbnNOYW1lW1wiYnV0dG9uQ3JlYXRlXCJdID0gXCJDUkVBVEVcIjtcbiAgICBidXR0b25zTmFtZVtcImlucHV0VXBkYXRlXCJdID0gXCJ1cGRhdGVcIjtcbiAgICBidXR0b25zTmFtZVtcImJ1dHRvblVwZGF0ZVwiXSA9IFwiVVBEQVRFXCI7XG4gICAgYnV0dG9uc05hbWVbXCJpbnB1dENvbG9yXCJdID0gXCJjb2xvclwiO1xuICAgIGJ1dHRvbnNOYW1lW1wiYnV0dG9uU2VsZWN0XCJdID0gXCJTRUxFQ1RcIjtcbiAgICBidXR0b25zTmFtZVtcImJ1dHRvblJlc2V0XCJdID0gXCJSRVNFVFwiO1xuICAgIGJ1dHRvbnNOYW1lW1wiYnV0dG9uUmVtb3ZlXCJdID0gXCJSRU1PVkVcIjtcbn0pKGJ1dHRvbnNOYW1lIHx8IChleHBvcnRzLmJ1dHRvbnNOYW1lID0gYnV0dG9uc05hbWUgPSB7fSkpO1xuY2xhc3MgRWxlbWVudENyZWF0b3JCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgY29uc3QgcGFyYW1idXR0b24gPSB7XG4gICAgICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBgYnV0dG9uLSR7bmFtZX1gLFxuICAgICAgICAgICAgdGV4dDogYCR7bmFtZX1gXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYnV0dG9uID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQocGFyYW1idXR0b24pO1xuICAgIH1cbiAgICAvKiBhZGRMaW5jKCkge1xuICAgICAgY29uc3QgbGluayA9IEVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICBcbiAgICB9ICovXG4gICAgZ2V0QnV0dG9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uO1xuICAgIH1cbn1cbmV4cG9ydHMuRWxlbWVudENyZWF0b3JCdXR0b24gPSBFbGVtZW50Q3JlYXRvckJ1dHRvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FbGVtZW50Q3JlYXRvcklucHV0ID0gdm9pZCAwO1xuY29uc3QgZWxlbUNyZWF0ZV8xID0gcmVxdWlyZShcIi4vZWxlbUNyZWF0ZVwiKTtcbmNsYXNzIEVsZW1lbnRDcmVhdG9ySW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgY29uc3QgcGFyYW1JbnB1dCA9IHtcbiAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogYGlucHV0LSR7bmFtZX1gXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW5wdXQgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChwYXJhbUlucHV0KTtcbiAgICB9XG4gICAgc2V0QXR0cmlidXRlKHBhcmFtc0lkKSB7XG4gICAgICAgIHBhcmFtc0lkLmZvckVhY2goKGl0ZW0pID0+IHsgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoaXRlbS52YWx1ZSwgaXRlbS52YWx1ZU5hbWUpOyB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQ7XG4gICAgfVxuICAgIGdldElucHV0KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQ7XG4gICAgfVxufVxuZXhwb3J0cy5FbGVtZW50Q3JlYXRvcklucHV0ID0gRWxlbWVudENyZWF0b3JJbnB1dDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Mb2FkZXIgPSB2b2lkIDA7XG4vLyBjb25zdCB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTozMDAwJ1xuY2xhc3MgTG9hZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihiYXNlbGluYywgYm9keSkge1xuICAgICAgICB0aGlzLmJhc2VMaW5rID0gYmFzZWxpbmM7XG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgfVxuICAgIGdldFJlc3AoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5sb2FkKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0UmVzcFJyKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMubG9hZEVyKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0UmVzcFJlc3AoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5sb2FkUmVzcChjYWxsYmFjayk7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgZXJyb3JIdW5kbGVyKHJlcykge1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMSB8fCByZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU29ycnksIGJ1dCB0aGVyZSBpcyAke3Jlcy5zdGF0dXN9IGVycm9yOiAke3Jlcy5zdGF0dXNUZXh0fWApO1xuICAgICAgICAgICAgICAgIC8vIHRocm93IEVycm9yKHJlcy5zdGF0dXNUZXh0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDUwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTb3JyeSwgYnV0IHRoZXJlIGlzICR7cmVzLnN0YXR1c30gZXJyb3I6ICR7cmVzLnN0YXR1c1RleHR9YCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLnVybCk7XG4gICAgICAgICAgICAgICAgLyogY29uc3QgdXJscyA9IGAke3Jlcy51cmwuc2xpY2UoMCwgcmVzLnVybC5sYXN0SW5kZXhPZignPScpKX09c3RvcHBlZGBcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IHJlcy51cmwuaW5kZXhPZignPScpXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kID0gcmVzLnVybC5pbmRleE9mKCcmJylcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHJlcy51cmwuc2xpY2Uoc3RhcnQgKyAxLCBlbmQpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQpXG4gICAgICAgICAgICAgICAgY29uc3QgaWRTdHIgPSBgbnVtJHtpZH1gXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZCA9ICR7aWRTdHJ9XWApXG4gICAgICAgICAgICAgICAgY29uc3QgaW1nQ2FyOiBIVE1MRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQgPSBjYXJCbG9jaz8ucXVlcnlTZWxlY3RvcignLmltZy1hdXRvJylcbiAgICAgICAgICAgICAgICBjb25zdCBmbGFnOiBIVE1MRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQgPSBjYXJCbG9jaz8ucXVlcnlTZWxlY3RvcignLmZsYWcnKVxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGN1cnJQb3MgPSBpbWdDYXI/Lm9mZnNldExlZnRcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyUG9zID0gaW1nQ2FyPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VyclBvcylcbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZCA9IGZsYWc/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZClcbiAgICAgICAgICAgICAgICBjb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyKHVybHMsIHsgbWV0aG9kOiAnUEFUQ0gnIH0pXG4gICAgICAgICAgICAgICAgbG9hZGVyLmdldFJlc3AoKGRhdGE/OiBWZWxvY2l0eSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICAgIGlmIChkYXRhICE9IG51bGwgJiYgaW1nQ2FyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS52ZWxvY2l0eSlcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZShkYXRhPy52ZWxvY2l0eSwgZGF0YT8uZGlzdGFuY2UsIGltZ0NhciwgY3VyclBvcywgY29vcmQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBsb2FkKGNhbGxiYWNrKSB7XG4gICAgICAgIHZvaWQgZmV0Y2godGhpcy5iYXNlTGluaywgdGhpcy5ib2R5KVxuICAgICAgICAgICAgLnRoZW4odGhpcy5lcnJvckh1bmRsZXIpXG4gICAgICAgICAgICAudGhlbihhc3luYyAocmVzKSA9PiBhd2FpdCByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHsgY2FsbGJhY2soZGF0YSk7IH0pXG4gICAgICAgICAgICAudGhlbigoZXJyKSA9PiB7IGNvbnNvbGUubG9nKGVycik7IH0pO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgIGxvYWRFcihjYWxsYmFjaykge1xuICAgICAgICB2b2lkIGZldGNoKHRoaXMuYmFzZUxpbmssIHRoaXMuYm9keSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4geyBjYWxsYmFjayhyZXNwb25zZS5zdGF0dXMpOyB9KTtcbiAgICB9XG4gICAgLyogcHJpdmF0ZSBsb2FkUmFzZSAoY2FsbGJhY2s6IENhbGxiYWNrPEpTT04+KTogdm9pZCB7XG4gICAgICB2b2lkIGZldGNoKHRoaXMuYmFzZUxpbmssIHRoaXMuYm9keSlcbiAgICAgICAgLnRoZW4odGhpcy5lcnJvckh1bmRsZXIpXG4gICAgICAgIC50aGVuKGFzeW5jIChyZXM6IFJlc3BvbnNlKTogUHJvbWlzZTxKU09OPiA9PiBhd2FpdCByZXMuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4geyBjYWxsYmFjayhkYXRhKSB9KVxuICAgICAgICAudGhlbigoZXJyKSA9PiB7IGNvbnNvbGUubG9nKGVycikgfSlcbiAgICB9ICovXG4gICAgbG9hZFJlc3AoY2FsbGJhY2spIHtcbiAgICAgICAgdm9pZCBmZXRjaCh0aGlzLmJhc2VMaW5rLCB0aGlzLmJvZHkpXG4gICAgICAgICAgICAudGhlbigocmVzcG9wc2UpID0+IHsgY2FsbGJhY2socmVzcG9wc2UuaGVhZGVycyk7IH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuTG9hZGVyID0gTG9hZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkVycm9ycyA9IGV4cG9ydHMuUGF0aCA9IHZvaWQgMDtcbnZhciBQYXRoO1xuKGZ1bmN0aW9uIChQYXRoKSB7XG4gICAgUGF0aFtcImdhcmFnZVwiXSA9IFwiL2dhcmFnZVwiO1xuICAgIFBhdGhbXCJlbmdpbmVcIl0gPSBcIi9lbmdpbmVcIjtcbiAgICBQYXRoW1wid2lubmVyc1wiXSA9IFwiL3dpbm5lcnNcIjtcbn0pKFBhdGggfHwgKGV4cG9ydHMuUGF0aCA9IFBhdGggPSB7fSkpO1xudmFyIEVycm9ycztcbihmdW5jdGlvbiAoRXJyb3JzKSB7XG59KShFcnJvcnMgfHwgKGV4cG9ydHMuRXJyb3JzID0gRXJyb3JzID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BdXRvQmxvY2tHZW5lcmF0b3IgPSB2b2lkIDA7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5jb25zdCBjYWxsYmFja3NfMSA9IHJlcXVpcmUoXCIuLi8uLi9jYWxsYmFja3NcIik7XG5jb25zdCBlbGVtQ3JlYXRlXzEgPSByZXF1aXJlKFwiLi4vLi4vZWxlbUNyZWF0ZVwiKTtcbmNvbnN0IGVsZW1DcmVhdGVCdXR0b25fMSA9IHJlcXVpcmUoXCIuLi8uLi9lbGVtQ3JlYXRlQnV0dG9uXCIpO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi8uLi90eXBlc1wiKTtcbnJlcXVpcmUoXCIuL3ZpZXdHYXJhZ2UuY3NzXCIpO1xuY29uc3QgdXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMCc7XG5jbGFzcyBBdXRvQmxvY2tHZW5lcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2Nhci1ibG9jaydcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmFzZVBhcmFtcyA9IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdyYXNlLWJ1dHRvbnMnXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJhc2VCbG9jayA9IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdyYXNlLWJsb2NrJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjYXJOYW1lID0ge1xuICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdjYXItbmFtZScsXG4gICAgICAgICAgICB0ZXh0OiBgJHtkYXRhLm5hbWV9YFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBpbWdQYXJhbXMgPSB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnaW1nLWF1dG8nLFxuICAgICAgICAgICAgLy8gZGF0YTogJy9hc3NldHMvY2FyNi5zdmcnLFxuICAgICAgICAgICAgY29sb3I6IGAke2RhdGEuY29sb3J9YFxuICAgICAgICAgICAgLy8gc3JjOiAnJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBmbGFnUGFyYW1zID0ge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2ZsYWcnXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYmxvY2sgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChwYXJhbXMpO1xuICAgICAgICB0aGlzLmJ1dHRvblNlbGVjdCA9IG5ldyBlbGVtQ3JlYXRlQnV0dG9uXzEuRWxlbWVudENyZWF0b3JCdXR0b24oJ1NFTEVDVCcpLmdldEJ1dHRvbignc2VsZWN0Jyk7XG4gICAgICAgIHRoaXMuYnV0dG9uUmVtb3ZlID0gbmV3IGVsZW1DcmVhdGVCdXR0b25fMS5FbGVtZW50Q3JlYXRvckJ1dHRvbignUkVNT1ZFJykuZ2V0QnV0dG9uKCdyZW1vdmUnKTtcbiAgICAgICAgdGhpcy5ibG9ja1Jhc2UgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChyYXNlUGFyYW1zKTtcbiAgICAgICAgdGhpcy5idXR0b25TdGFydCA9IG5ldyBlbGVtQ3JlYXRlQnV0dG9uXzEuRWxlbWVudENyZWF0b3JCdXR0b24oJ0EnKS5nZXRCdXR0b24oJ3N0YXJ0Jyk7XG4gICAgICAgIHRoaXMuYnV0dG9uU3RvcCA9IG5ldyBlbGVtQ3JlYXRlQnV0dG9uXzEuRWxlbWVudENyZWF0b3JCdXR0b24oJ0InKS5nZXRCdXR0b24oJ3N0b3AnKTtcbiAgICAgICAgdGhpcy5idXR0b25TdG9wLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgdGhpcy5yYXNlQmxvY2sgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChyYXNlQmxvY2spO1xuICAgICAgICB0aGlzLmZsYWcgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChmbGFnUGFyYW1zKTtcbiAgICAgICAgdGhpcy5jYXJOYW1lID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQoY2FyTmFtZSk7XG4gICAgICAgIHRoaXMuaW1nID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQoaW1nUGFyYW1zKTtcbiAgICAgICAgdGhpcy5ibG9ja1Jhc2UuYXBwZW5kKHRoaXMuYnV0dG9uU3RhcnQsIHRoaXMuYnV0dG9uU3RvcCwgdGhpcy5pbWcsIHRoaXMuZmxhZyk7XG4gICAgICAgIHRoaXMucmFzZUJsb2NrLmFwcGVuZCh0aGlzLmJsb2NrUmFzZSwgdGhpcy5mbGFnKTtcbiAgICAgICAgdGhpcy5pbWcuaW5uZXJIVE1MID0gYDxzdmcgY2xhc3M9XCJjYXJcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgd2lkdGg9XCI1MHB4XCIgaGVpZ2h0PVwiNTBweFwiIHZpZXdCb3g9XCIwIC00My45MiAxMjIuODggMTIyLjg4XCIgdmVyc2lvbj1cIjEuMVwiIGlkPVwiTGF5ZXJfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiAgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyMi44OCAzNS4wM1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG5cbiAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+LnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDt9PC9zdHlsZT5cbiAgICBcbiAgICA8Zz5cbiAgICBcbiAgICA8cGF0aCBjbGFzcz1cInN0MFwiIGQ9XCJNOTkuNDIsMTMuNTdjNS45MywwLDEwLjczLDQuOCwxMC43MywxMC43M2MwLDUuOTMtNC44LDEwLjczLTEwLjczLDEwLjczcy0xMC43My00LjgtMTAuNzMtMTAuNzMgQzg4LjY5LDE4LjM3LDkzLjQ5LDEzLjU3LDk5LjQyLDEzLjU3TDk5LjQyLDEzLjU3eiBNNzkuMDUsNWMtMC41OSwxLjI3LTEuMDYsMi42OS0xLjQyLDQuMjNjLTAuODIsMi41NywwLjM5LDMuMTEsMy4xOSwyLjA2IGMyLjA2LTEuMjMsNC4xMi0yLjQ3LDYuMTgtMy43YzEuMDUtMC43NCwxLjU1LTEuNDcsMS4zOC0yLjE5Yy0wLjM0LTEuNDItMy4wOC0yLjE2LTUuMzMtMi42QzgwLjE5LDIuMjMsODAuMzksMi4xMSw3OS4wNSw1IEw3OS4wNSw1eiBNMjMuODYsMTkuMzFjMi43NSwwLDQuOTksMi4yMyw0Ljk5LDQuOTljMCwyLjc1LTIuMjMsNC45OS00Ljk5LDQuOTljLTIuNzUsMC00Ljk5LTIuMjMtNC45OS00Ljk5IEMxOC44NywyMS41NCwyMS4xLDE5LjMxLDIzLjg2LDE5LjMxTDIzLjg2LDE5LjMxeiBNOTkuNDIsMTkuMzFjMi43NSwwLDQuOTksMi4yMyw0Ljk5LDQuOTljMCwyLjc1LTIuMjMsNC45OS00Ljk5LDQuOTkgYy0yLjc1LDAtNC45OS0yLjIzLTQuOTktNC45OUM5NC40MywyMS41NCw5Ni42NiwxOS4zMSw5OS40MiwxOS4zMUw5OS40MiwxOS4zMXogTTQ2LjE0LDEyLjVjMi43Ny0yLjk3LDUuOTctNC45LDkuNjctNi43NiBjOC4xLTQuMDgsMTMuMDYtMy41OCwyMS42Ni0zLjU4bC0yLjg5LDcuNWMtMS4yMSwxLjYtMi41OCwyLjczLTQuNjYsMi44NEg0Ni4xNEw0Ni4xNCwxMi41eiBNMjMuODYsMTMuNTcgYzUuOTMsMCwxMC43Myw0LjgsMTAuNzMsMTAuNzNjMCw1LjkzLTQuOCwxMC43My0xMC43MywxMC43M3MtMTAuNzMtNC44LTEwLjczLTEwLjczQzEzLjEzLDE4LjM3LDE3LjkzLDEzLjU3LDIzLjg2LDEzLjU3IEwyMy44NiwxMy41N3ogTTQwLjgyLDEwLjNjMy41Mi0yLjE5LDcuMzUtNC4xNSwxMS41OS01LjgyYzEyLjkxLTUuMDksMjIuNzgtNiwzNi4zMi0xLjljNC4wOCwxLjU1LDguMTYsMy4xLDEyLjI0LDQuMDYgYzQuMDMsMC45NiwyMS40OCwxLjg4LDIxLjkxLDQuODFsLTQuMzEsNS4xNWMxLjU3LDEuMzYsMi44NSwzLjAzLDMuMzIsNS42NGMtMC4xMywxLjYxLTAuNTcsMi45Ni0xLjMzLDQuMDQgYy0xLjI5LDEuODUtNS4wNywzLjc2LTcuMTEsMi42N2MtMC42NS0wLjM1LTEuMDItMS4wNS0xLjAxLTIuMjRjMC4wNi0yMy45LTI4Ljc5LTIxLjE4LTI2LjYyLDIuODJIMzUuNDggQzQ0LjgsNS40OSw1LjA0LDUuNCwxMi4xLDI4LjdDOS42MiwzMS4zOCwzLjc3LDI3LjM0LDAsMTguNzVjMS4wMy0xLjAyLDIuMTYtMS45OSwzLjQyLTIuODljLTAuMDYtMC4wNSwwLjA2LDAuMTktMC4xNS0wLjE3IGMtMC4yMS0wLjM2LDAuNTEtMS44NywxLjk5LTIuNzRDMTMuMDIsOC40LDMxLjczLDguNTIsNDAuODIsMTAuM0w0MC44MiwxMC4zelwiLz5cbiAgICBcbiAgICA8L2c+XG4gICAgXG4gICAgPC9zdmc+YDtcbiAgICAgICAgLyogaWYgKHRoaXMuaW1nLmZpcnN0RWxlbWVudENoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpICovIHRoaXMuaW1nLnN0eWxlLmNvbG9yID0gYCR7ZGF0YS5jb2xvcn1gO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmltZy5zdHlsZS5jb2xvcilcbiAgICAgICAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmltZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICB0aGlzLmJsb2NrLmFwcGVuZCh0aGlzLmJ1dHRvblNlbGVjdCwgdGhpcy5idXR0b25SZW1vdmUsIHRoaXMuY2FyTmFtZSwgdGhpcy5yYXNlQmxvY2spO1xuICAgICAgICB0aGlzLmJ1dHRvblJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmJsb2NrLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgICAgbGV0IGlkO1xuICAgICAgICAgICAgaWYgKGF0dHIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlkID0gYXR0ci5zbGljZSgzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlkID0gZGF0YS5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVybHMgPSBgJHt1cmx9JHt0eXBlc18xLlBhdGguZ2FyYWdlfS8ke2lkfWA7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0geyB1cmw6IHVybHMsIG1ldGhvZDogJ0RFTEVURScgfTtcbiAgICAgICAgICAgICgwLCBjYWxsYmFja3NfMS5yZW1vdmVDYXIpKGFyZ3MsIGlkKTtcbiAgICAgICAgICAgIHRoaXMuYmxvY2sucmVtb3ZlKCk7XG4gICAgICAgICAgICAoMCwgY2FsbGJhY2tzXzEuY291bnRDYXJzKSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idXR0b25TZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5ibG9jay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgIGxldCBpZDtcbiAgICAgICAgICAgIGlmIChhdHRyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZCA9IGF0dHIuc2xpY2UoMyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZCA9IGRhdGEuaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB1cmxzID0gYCR7dXJsfSR7dHlwZXNfMS5QYXRoLmdhcmFnZX0vJHtpZH1gO1xuICAgICAgICAgICAgY29uc3QgaW5wdXRVcGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtdXBkYXRlJyk7XG4gICAgICAgICAgICBpbnB1dFVwZGF0ZSA9PT0gbnVsbCB8fCBpbnB1dFVwZGF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXRVcGRhdGUuZm9jdXMoKTtcbiAgICAgICAgICAgIGlmIChpbnB1dFVwZGF0ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaW5wdXRVcGRhdGUgPT09IG51bGwgfHwgaW5wdXRVcGRhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlucHV0VXBkYXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBgJHtkYXRhLm5hbWV9YCk7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0VXBkYXRlLmZvcm0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcmd1bSA9IHsgZm9ybTogaW5wdXRVcGRhdGUuZm9ybSwgdXJsOiB1cmxzLCBtZXRob2Q6ICdQVVQnLCBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSB9O1xuICAgICAgICAgICAgICAgICAgICAoMCwgY2FsbGJhY2tzXzEuc3VibWl0Rm9ybSkoYXJndW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnV0dG9uU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5ibG9jay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgICgwLCBjYWxsYmFja3NfMS5zZXREaXNhYmxlZCkoKTtcbiAgICAgICAgICAgIGxldCBpZDtcbiAgICAgICAgICAgIGlmIChhdHRyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZCA9IE51bWJlcihhdHRyLnNsaWNlKDMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlkID0gZGF0YS5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICgwLCBjYWxsYmFja3NfMS5yYXNlVGhyZWUpKHRoaXMuYmxvY2ssIGlkKTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uU3RhcnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxyZWQnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1dHRvblN0b3AuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25TdG9wLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnV0dG9uU3RvcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICgwLCBjYWxsYmFja3NfMS5yZW1vdmVEaXNhYmxlZCkoKTtcbiAgICAgICAgICAgIGNvbnN0IGZsYWcgPSB0aGlzLmZsYWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRQb3NpdGlvbnMgPSB0aGlzLmltZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgbnVtID0gc3RhcnRQb3NpdGlvbnMgLSBjdXJyZW50UG9zaXRpb25zICsgNDA7XG4gICAgICAgICAgICBjb25zdCBhdHRyID0gdGhpcy5ibG9jay5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcbiAgICAgICAgICAgIGxldCBpZDtcbiAgICAgICAgICAgIGlmIChhdHRyICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZCA9IE51bWJlcihhdHRyLnNsaWNlKDMpKTtcbiAgICAgICAgICAgICAgICAoMCwgY2FsbGJhY2tzXzEuc3RvcENhcnMpKE51bWJlcihpZCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7MH1weClgO1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uU3RhcnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uU3RvcC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRBdXRvQmxvY2soKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLmltZy5maXJzdEVsZW1lbnRDaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB0aGlzLmltZy5maXJzdEVsZW1lbnRDaGlsZC5zdHlsZS5maWxsID0gYCR7fWBcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvY2s7XG4gICAgfVxufVxuZXhwb3J0cy5BdXRvQmxvY2tHZW5lcmF0b3IgPSBBdXRvQmxvY2tHZW5lcmF0b3I7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSGVhZGVyR2FyYWdlID0gdm9pZCAwO1xuY29uc3QgZWxlbUNyZWF0ZV8xID0gcmVxdWlyZShcIi4uLy4uL2VsZW1DcmVhdGVcIik7XG5jb25zdCBlbGVtQ3JlYXRlSW5wdXRfMSA9IHJlcXVpcmUoXCIuLi8uLi9lbGVtQ3JlYXRlSW5wdXRcIik7XG5jb25zdCBlbGVtQ3JlYXRlQnV0dG9uXzEgPSByZXF1aXJlKFwiLi4vLi4vZWxlbUNyZWF0ZUJ1dHRvblwiKTtcbmNvbnN0IGdlbmVyYXRlQ2Fyc0Jsb2NrXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0ZUNhcnNCbG9ja1wiKTtcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG5jb25zdCBjYWxsYmFja3NfMSA9IHJlcXVpcmUoXCIuLi8uLi9jYWxsYmFja3NcIik7XG5jb25zdCBMb2FkZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9sb2FkZXIvTG9hZGVyXCIpO1xuY29uc3QgdXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMCc7XG5jb25zdCBwYXRoID0ge1xuICAgIGdhcmFnZTogJy9nYXJhZ2UnLFxuICAgIHdpbm5lcnM6ICcvd2lubmVycydcbn07XG5jbGFzcyBIZWFkZXJHYXJhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBzdXBlcigpXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdoZWFkZXItZ2FyYWdlJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBmb3JtQ3JlYXRlID0ge1xuICAgICAgICAgICAgdGFnOiAnZm9ybScsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdmb3JtLWNyZWF0ZSdcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZm9ybUNoYW5nZSA9IHtcbiAgICAgICAgICAgIHRhZzogJ2Zvcm0nLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZm9ybS1jaGFuZ2UnXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtc0J1dHRvbnMgPSB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYnV0dG9ucy1ibG9jaydcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlSW5wdXRDcmVhdGUgPSBbeyB2YWx1ZTogJ3R5cGUnLCB2YWx1ZU5hbWU6ICd0ZXh0JyB9LCB7IHZhbHVlOiAnbmFtZScsIHZhbHVlTmFtZTogJ25hbWUnIH0sIHsgdmFsdWU6ICd2YWx1ZScsIHZhbHVlTmFtZTogJycgfV07XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZUlucHV0VXBkYXRlID0gW3sgdmFsdWU6ICd0eXBlJywgdmFsdWVOYW1lOiAndGV4dCcgfSwgeyB2YWx1ZTogJ25hbWUnLCB2YWx1ZU5hbWU6ICduYW1lJyB9LCB7IHZhbHVlOiAndmFsdWUnLCB2YWx1ZU5hbWU6ICcnIH1dO1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVJbnB1dENvbG9yID0gW3sgdmFsdWU6ICd0eXBlJywgdmFsdWVOYW1lOiAnY29sb3InIH0sIHsgdmFsdWU6ICduYW1lJywgdmFsdWVOYW1lOiAnY29sb3InIH0sIHsgdmFsdWU6ICd2YWx1ZScsIHZhbHVlTmFtZTogJycgfV07XG4gICAgICAgIHRoaXMuaGVhZGVyID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQoaGVhZGVyKTtcbiAgICAgICAgdGhpcy5mb3JtQ3JlYXRlID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQoZm9ybUNyZWF0ZSk7XG4gICAgICAgIHRoaXMuaW5wdXRDcmVhdGUgPSBuZXcgZWxlbUNyZWF0ZUlucHV0XzEuRWxlbWVudENyZWF0b3JJbnB1dCgnY3JlYXRlJykuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZUlucHV0Q3JlYXRlKTtcbiAgICAgICAgdGhpcy5pbnB1dFNldENvbG9yID0gbmV3IGVsZW1DcmVhdGVJbnB1dF8xLkVsZW1lbnRDcmVhdG9ySW5wdXQoJ2NvbG9yJykuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZUlucHV0Q29sb3IpO1xuICAgICAgICB0aGlzLmJ1dHRvbkNyZWF0ZSA9IG5ldyBlbGVtQ3JlYXRlQnV0dG9uXzEuRWxlbWVudENyZWF0b3JCdXR0b24oJ0NSRUFURScpLmdldEJ1dHRvbignY3JlYXRlJyk7XG4gICAgICAgIHRoaXMuZm9ybUNyZWF0ZS5hcHBlbmQodGhpcy5pbnB1dENyZWF0ZSwgdGhpcy5pbnB1dFNldENvbG9yLCB0aGlzLmJ1dHRvbkNyZWF0ZSk7XG4gICAgICAgIHRoaXMuZm9ybUNoYW5nZSA9IGVsZW1DcmVhdGVfMS5FbGVtZW50Q3JlYXRvci5jcmVhdGVFbGVtZW50KGZvcm1DaGFuZ2UpO1xuICAgICAgICB0aGlzLmlucHV0VXBkYXRlID0gbmV3IGVsZW1DcmVhdGVJbnB1dF8xLkVsZW1lbnRDcmVhdG9ySW5wdXQoJ3VwZGF0ZScpLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVJbnB1dFVwZGF0ZSk7XG4gICAgICAgIHRoaXMuaW5wdXRDaGFuZ2VDb2xvciA9IG5ldyBlbGVtQ3JlYXRlSW5wdXRfMS5FbGVtZW50Q3JlYXRvcklucHV0KCdjb2xvcicpLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVJbnB1dENvbG9yKTtcbiAgICAgICAgdGhpcy5idXR0b25VcGRhdGUgPSBuZXcgZWxlbUNyZWF0ZUJ1dHRvbl8xLkVsZW1lbnRDcmVhdG9yQnV0dG9uKCdVUERBVEUnKS5nZXRCdXR0b24oJ3VwZGF0ZScpO1xuICAgICAgICB0aGlzLmZvcm1DaGFuZ2UuYXBwZW5kKHRoaXMuaW5wdXRVcGRhdGUsIHRoaXMuaW5wdXRDaGFuZ2VDb2xvciwgdGhpcy5idXR0b25VcGRhdGUpO1xuICAgICAgICB0aGlzLmJ1dHRvbnNIZWFkZXIgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChwYXJhbXNCdXR0b25zKTtcbiAgICAgICAgdGhpcy5idXR0b25SYXNlID0gbmV3IGVsZW1DcmVhdGVCdXR0b25fMS5FbGVtZW50Q3JlYXRvckJ1dHRvbignUkFTRScpLmdldEJ1dHRvbigncmFzZScpO1xuICAgICAgICB0aGlzLmJ1dHRvblJlc2V0ID0gbmV3IGVsZW1DcmVhdGVCdXR0b25fMS5FbGVtZW50Q3JlYXRvckJ1dHRvbignUkVTRVQnKS5nZXRCdXR0b24oJ3Jlc2V0Jyk7XG4gICAgICAgIHRoaXMuYnV0dG9uUmVzZXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICB0aGlzLmJ1dHRvbkdlbmVyYXRlID0gbmV3IGVsZW1DcmVhdGVCdXR0b25fMS5FbGVtZW50Q3JlYXRvckJ1dHRvbignR0VORVJBVEUnKS5nZXRCdXR0b24oJ2dlbmVyYXRlQ2FycycpO1xuICAgICAgICB0aGlzLmJ1dHRvbnNIZWFkZXIuYXBwZW5kKHRoaXMuYnV0dG9uUmFzZSwgdGhpcy5idXR0b25SZXNldCwgdGhpcy5idXR0b25HZW5lcmF0ZSk7XG4gICAgICAgIHRoaXMuaGVhZGVyLmFwcGVuZCh0aGlzLmZvcm1DcmVhdGUsIHRoaXMuZm9ybUNoYW5nZSwgdGhpcy5idXR0b25zSGVhZGVyKTtcbiAgICAgICAgdGhpcy5idXR0b25SYXNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgKDAsIGNhbGxiYWNrc18xLnNldERpc2FibGVkKSgpO1xuICAgICAgICAgICAgdGhpcy5idXR0b25SZXNldC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICBjb25zdCBpZHMgPSAoMCwgY2FsbGJhY2tzXzEuZ2V0SWQpKCk7XG4gICAgICAgICAgICBpZHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9bnVtJHtpdGVtfV1gKTtcbiAgICAgICAgICAgICAgICBpZiAoZWwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgKDAsIGNhbGxiYWNrc18xLmFuaW1hdGVDYXIpKGVsLCBOdW1iZXIoaXRlbSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJ1dHRvblJlc2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5idXR0b25SYXNlLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uUmVzZXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgKDAsIGNhbGxiYWNrc18xLnJlbW92ZURpc2FibGVkKSgpO1xuICAgICAgICAgICAgY29uc3QgaWRzID0gKDAsIGNhbGxiYWNrc18xLmdldElkKSgpO1xuICAgICAgICAgICAgaWRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IE51bWJlcihpdGVtKTtcbiAgICAgICAgICAgICAgICAoMCwgY2FsbGJhY2tzXzEuc3RvcENhcnMpKGlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idXR0b25HZW5lcmF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFyciA9ICgwLCBjYWxsYmFja3NfMS5nZW5lcmF0ZUNhcnNUd28pKGNhbGxiYWNrc18xLnNodWZmbGUpO1xuICAgICAgICAgICAgY29uc3QgdXJscyA9IGAke3VybH0ke3R5cGVzXzEuUGF0aC5nYXJhZ2V9YDtcbiAgICAgICAgICAgIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqSnNvbiA9IEpTT04uc3RyaW5naWZ5KGl0ZW0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRlciA9IG5ldyBMb2FkZXJfMS5Mb2FkZXIodXJscywge1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IG9iakpzb25cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBsb2FkZXIuZ2V0UmVzcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9ja0NhciA9IG5ldyBnZW5lcmF0ZUNhcnNCbG9ja18xLkF1dG9CbG9ja0dlbmVyYXRvcihkYXRhKS5nZXRBdXRvQmxvY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrQ2FyLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGBudW0ke2RhdGEuaWR9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnYXJhZ2VCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UtYmxvY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYXJhZ2VCbG9jayAhPSBudWxsICYmIGdhcmFnZUJsb2NrLmNoaWxkcmVuLmxlbmd0aCA8IDcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYXJhZ2VCbG9jay5hcHBlbmQoYmxvY2tDYXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICgwLCBjYWxsYmFja3NfMS5jb3VudENhcnMpKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNsaWNrRm9ybUNyZWF0ZSgpO1xuICAgICAgICAvLyB0aGlzLmNsaWNrRm9ybVVwZGF0ZSgpXG4gICAgfVxuICAgIGdldEhlYWRlckdhcmFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyO1xuICAgIH1cbiAgICBnZXRJbnB1dENyZWF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRDcmVhdGU7XG4gICAgfVxuICAgIGdldEJ1dHRvbkNyZWF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uQ3JlYXRlO1xuICAgIH1cbiAgICBnZXRGb3JtQ3JlYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtQ3JlYXRlO1xuICAgIH1cbiAgICBnZXRJbnB1dENoYW5nZUNvbG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dENoYW5nZUNvbG9yO1xuICAgIH1cbiAgICBjbGlja0Zvcm1DcmVhdGUoKSB7XG4gICAgICAgIGNvbnN0IHVybHMgPSBgJHt1cmx9JHt0eXBlc18xLlBhdGguZ2FyYWdlfWA7XG4gICAgICAgIGlmICh0aGlzLmZvcm1DcmVhdGUgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZ3VtID0geyBmb3JtOiB0aGlzLmZvcm1DcmVhdGUsIHVybDogdXJscywgbWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH07XG4gICAgICAgICAgICAoMCwgY2FsbGJhY2tzXzEuc3VibWl0Rm9ybSkoYXJndW0pO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5IZWFkZXJHYXJhZ2UgPSBIZWFkZXJHYXJhZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FyYWdlQmxvY2sgPSB2b2lkIDA7XG5jb25zdCBnZW5lcmF0ZUNhcnNCbG9ja18xID0gcmVxdWlyZShcIi4vZ2VuZXJhdGVDYXJzQmxvY2tcIik7XG5jb25zdCBlbGVtQ3JlYXRlXzEgPSByZXF1aXJlKFwiLi4vLi4vZWxlbUNyZWF0ZVwiKTtcbmNvbnN0IGVsZW1DcmVhdGVCdXR0b25fMSA9IHJlcXVpcmUoXCIuLi8uLi9lbGVtQ3JlYXRlQnV0dG9uXCIpO1xuY29uc3QgTG9hZGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vbG9hZGVyL0xvYWRlclwiKTtcbmNvbnN0IGNhbGxiYWNrc18xID0gcmVxdWlyZShcIi4uLy4uL2NhbGxiYWNrc1wiKTtcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG5yZXF1aXJlKFwiLi92aWV3R2FyYWdlLmNzc1wiKTtcbmNvbnN0IHVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAnO1xuY2xhc3MgR2FyYWdlQmxvY2sge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCBjYXJzTnVtID0gNDtcbiAgICAgICAgbGV0IG51bVBhZ2VzID0gMTtcbiAgICAgICAgY29uc3QgZ2FyYWdlUGFnZSA9IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdnYXJhZ2UtcGFnZSdcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZ2FyYWdlQmxvY2sgPSB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZ2FyYWdlLWJsb2NrJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbVRpdGxlID0ge1xuICAgICAgICAgICAgdGFnOiAnaDInLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZ2FyYWdlLXRpdGxlJyxcbiAgICAgICAgICAgIHRleHQ6ICdHQVJBR0UnXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG51bUNhcnMgPSB7XG4gICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2NhcnMtbnVtJyxcbiAgICAgICAgICAgIHRleHQ6IGAke2NhcnNOdW19YFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbVRpdGxlVHdvID0ge1xuICAgICAgICAgICAgdGFnOiAnaDMnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnZ2FyYWdlLXRpdGxlUGFnZScsXG4gICAgICAgICAgICB0ZXh0OiAnUGFnZSdcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbnVtcGFnZSA9IHtcbiAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnY2Fycy1udW0nLFxuICAgICAgICAgICAgdGV4dDogYCMke251bVBhZ2VzfWBcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1ibG9ja0NoYW5nZVZpZXcgPSB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYnV0dG9ucy1jaGFuZ2UnXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGJsb2NUaXRsZSA9IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd0aXRsZS1ibG9jaydcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50aXRsZUdhcmFnZSA9IGVsZW1DcmVhdGVfMS5FbGVtZW50Q3JlYXRvci5jcmVhdGVFbGVtZW50KHBhcmFtVGl0bGUpO1xuICAgICAgICB0aGlzLm51bUNhcnMgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChudW1DYXJzKTtcbiAgICAgICAgdGhpcy50aXRsZUdhcmFnZS5hcHBlbmQodGhpcy5udW1DYXJzKTtcbiAgICAgICAgdGhpcy5udW1QYWdlID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQobnVtcGFnZSk7XG4gICAgICAgIHRoaXMudGl0bGVQYWdlID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQocGFyYW1UaXRsZVR3byk7XG4gICAgICAgIHRoaXMudGl0bGVQYWdlLmFwcGVuZCh0aGlzLm51bVBhZ2UpO1xuICAgICAgICB0aGlzLmJsb2NrVGl0bGUgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChibG9jVGl0bGUpO1xuICAgICAgICB0aGlzLmJsb2NrQ2hhbmdlUGFnZXMgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChwYXJhbWJsb2NrQ2hhbmdlVmlldyk7XG4gICAgICAgIHRoaXMuYnV0dG9uTmV4dCA9IG5ldyBlbGVtQ3JlYXRlQnV0dG9uXzEuRWxlbWVudENyZWF0b3JCdXR0b24oJ05FWFQnKS5nZXRCdXR0b24oJ25leHQnKTtcbiAgICAgICAgdGhpcy5idXR0b25QcmV2ID0gbmV3IGVsZW1DcmVhdGVCdXR0b25fMS5FbGVtZW50Q3JlYXRvckJ1dHRvbignUFJFVicpLmdldEJ1dHRvbigncHJldicpO1xuICAgICAgICB0aGlzLmJ1dHRvblByZXYuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICB0aGlzLmJsb2NrQ2hhbmdlUGFnZXMuYXBwZW5kKHRoaXMuYnV0dG9uUHJldiwgdGhpcy5idXR0b25OZXh0KTtcbiAgICAgICAgdGhpcy5ibG9ja1RpdGxlLmFwcGVuZCh0aGlzLnRpdGxlR2FyYWdlKTtcbiAgICAgICAgdGhpcy5nYXJhZ2UgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChnYXJhZ2VQYWdlKTtcbiAgICAgICAgdGhpcy5nYXJhZ2VCbG9jayA9IGVsZW1DcmVhdGVfMS5FbGVtZW50Q3JlYXRvci5jcmVhdGVFbGVtZW50KGdhcmFnZUJsb2NrKTtcbiAgICAgICAgdGhpcy5nYXJhZ2UuYXBwZW5kKHRoaXMuYmxvY2tUaXRsZSwgdGhpcy50aXRsZVBhZ2UsIHRoaXMuZ2FyYWdlQmxvY2ssIHRoaXMuYmxvY2tDaGFuZ2VQYWdlcyk7XG4gICAgICAgIHRoaXMuYnV0dG9uTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2FyYWdlQmxvY2suaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBpZiAodGhpcy5idXR0b25QcmV2Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSlcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblByZXYucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgbnVtUGFnZXMgKz0gMTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlR2FyYWdlKG51bVBhZ2VzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnV0dG9uUHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChudW1QYWdlcyA+IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhcmFnZUJsb2NrLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIG51bVBhZ2VzIC09IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVHYXJhZ2UobnVtUGFnZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobnVtUGFnZXMgPT09IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhcmFnZUJsb2NrLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIG51bVBhZ2VzIC09IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVHYXJhZ2UobnVtUGFnZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uUHJldi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgIGNyZWF0ZUdhcmFnZShudW1QYWdlcykge1xuICAgICAgICB0aGlzLm51bVBhZ2UuaW5uZXJIVE1MID0gYCMke251bVBhZ2VzfWA7XG4gICAgICAgIGNvbnN0IHVybHMgPSBgJHt1cmx9JHt0eXBlc18xLlBhdGguZ2FyYWdlfT9fcGFnZT0ke251bVBhZ2VzfSZfbGltaXQ9N2A7XG4gICAgICAgIGNvbnN0IGxvYWRlciA9IG5ldyBMb2FkZXJfMS5Mb2FkZXIodXJscywgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgICBsb2FkZXIuZ2V0UmVzcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheCwgZ3VhcmQtZm9yLWluXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhKTtcbiAgICAgICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9ja0NhciA9IG5ldyBnZW5lcmF0ZUNhcnNCbG9ja18xLkF1dG9CbG9ja0dlbmVyYXRvcihpdGVtKS5nZXRBdXRvQmxvY2soKTtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tDYXIuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgYG51bSR7aXRlbS5pZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYXJhZ2VCbG9jay5hcHBlbmQoYmxvY2tDYXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgKDAsIGNhbGxiYWNrc18xLmNvdW50Q2FycykoKTtcbiAgICB9XG4gICAgZ2V0R2FyYWdlKG51bVBhZ2VzKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlR2FyYWdlKG51bVBhZ2VzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FyYWdlO1xuICAgIH1cbiAgICBnZXRHYXJhZ2VCbG9jaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FyYWdlQmxvY2s7XG4gICAgfVxufVxuZXhwb3J0cy5HYXJhZ2VCbG9jayA9IEdhcmFnZUJsb2NrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlZpZXdHYXJhZ2UgPSB2b2lkIDA7XG5jb25zdCBlbGVtQ3JlYXRlXzEgPSByZXF1aXJlKFwiLi4vLi4vZWxlbUNyZWF0ZVwiKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmNvbnN0IGhlYWRlckdhcmFnZV8xID0gcmVxdWlyZShcIi4vaGVhZGVyR2FyYWdlXCIpO1xuY29uc3QgTG9hZGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vbG9hZGVyL0xvYWRlclwiKTtcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG5jb25zdCBtYWluR2FyYWdlXzEgPSByZXF1aXJlKFwiLi9tYWluR2FyYWdlXCIpO1xuY29uc3QgdXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMCc7XG5jbGFzcyBWaWV3R2FyYWdlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBuZXcgaGVhZGVyR2FyYWdlXzEuSGVhZGVyR2FyYWdlKCkuZ2V0SGVhZGVyR2FyYWdlKCk7XG4gICAgICAgIHRoaXMubWFpbiA9IG5ldyBtYWluR2FyYWdlXzEuR2FyYWdlQmxvY2soKS5nZXRHYXJhZ2UoMSk7XG4gICAgICAgIGNvbnN0IHZpZXcgPSB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAndmlldy1vbmUnXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudmlld0dhcmFnZSA9IGVsZW1DcmVhdGVfMS5FbGVtZW50Q3JlYXRvci5jcmVhdGVFbGVtZW50KHZpZXcpO1xuICAgIH1cbiAgICBjcmVhdGV0VmlldygpIHtcbiAgICAgICAgY29uc3QgdXJscyA9IGAke3VybH0ke3R5cGVzXzEuUGF0aC5nYXJhZ2V9P19wYWdlPTAmX2xpbWl0PTdgO1xuICAgICAgICBjb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyXzEuTG9hZGVyKHVybHMsIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgICAgbG9hZGVyLmdldFJlc3AoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52aWV3R2FyYWdlLmFwcGVuZCh0aGlzLmhlYWRlciwgdGhpcy5tYWluKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlld0dhcmFnZTtcbiAgICB9XG59XG5leHBvcnRzLlZpZXdHYXJhZ2UgPSBWaWV3R2FyYWdlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLldpbm5lcnNWaWV3ID0gdm9pZCAwO1xuY29uc3QgTG9hZGVyXzEgPSByZXF1aXJlKFwiLi4vLi4vbG9hZGVyL0xvYWRlclwiKTtcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi4vLi4vdHlwZXNcIik7XG5jb25zdCBlbGVtQ3JlYXRlXzEgPSByZXF1aXJlKFwiLi4vLi4vZWxlbUNyZWF0ZVwiKTtcbmNvbnN0IGVsZW1DcmVhdGVCdXR0b25fMSA9IHJlcXVpcmUoXCIuLi8uLi9lbGVtQ3JlYXRlQnV0dG9uXCIpO1xucmVxdWlyZShcIi4vd2lubmVycy5jc3NcIik7XG5jb25zdCBjYWxsYmFja3NfMSA9IHJlcXVpcmUoXCIuLi8uLi9jYWxsYmFja3NcIik7XG5jb25zdCB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTozMDAwJztcbmNsYXNzIFdpbm5lcnNWaWV3IHtcbiAgICAvLyBwdWJsaWMgcm93OiBIVE1MRWxlbWVudFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBsZXQgbnVtUGFnZXMgPSAxO1xuICAgICAgICBjb25zdCBwYXJhbXNWaWV3ID0ge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3ZpZXctd2lubmVycydcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zV2lubmVycyA9IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd3aW5uZXJzLWJsb2NrJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXNUaXRsZSA9IHtcbiAgICAgICAgICAgIHRhZzogJ2gyJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3dpbm5lcnMtdGl0bGUnLFxuICAgICAgICAgICAgdGV4dDogJ1dpbm5lcnMnXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtc051bVRpdGxlID0ge1xuICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd3aW5uZXJzLW51bScsXG4gICAgICAgICAgICB0ZXh0OiAnJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXNQYWdlID0ge1xuICAgICAgICAgICAgdGFnOiAnaDMnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFnZS13aW5uZXJzJyxcbiAgICAgICAgICAgIHRleHQ6ICdQYWdlJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXNOdW1QYWdlID0ge1xuICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdwYWdlLW51bXdpbicsXG4gICAgICAgICAgICB0ZXh0OiBgIyR7bnVtUGFnZXN9YFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbWJsb2NrQ2hhbmdlVmlldyA9IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdidXR0b25zLWNoYW5nZSdcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5udW1iZXJQYWdlcyA9IG51bVBhZ2VzO1xuICAgICAgICB0aGlzLnZpZXdXaW5uZXJzID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQocGFyYW1zVmlldyk7XG4gICAgICAgIHRoaXMud2lubmVyc0Jsb2NrID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQocGFyYW1zV2lubmVycyk7XG4gICAgICAgIHRoaXMudGl0bGVXaW5uZXJzID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQocGFyYW1zVGl0bGUpO1xuICAgICAgICB0aGlzLm51bWJlcldpbm5lcnMgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChwYXJhbXNOdW1UaXRsZSk7XG4gICAgICAgIHRoaXMucGFnZSA9IGVsZW1DcmVhdGVfMS5FbGVtZW50Q3JlYXRvci5jcmVhdGVFbGVtZW50KHBhcmFtc1BhZ2UpO1xuICAgICAgICB0aGlzLm51bWJlclBhZ2UgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChwYXJhbXNOdW1QYWdlKTtcbiAgICAgICAgdGhpcy50aXRsZVdpbm5lcnMuYXBwZW5kKHRoaXMubnVtYmVyV2lubmVycyk7XG4gICAgICAgIHRoaXMuYmxvY2tDaGFuZ2VQYWdlcyA9IGVsZW1DcmVhdGVfMS5FbGVtZW50Q3JlYXRvci5jcmVhdGVFbGVtZW50KHBhcmFtYmxvY2tDaGFuZ2VWaWV3KTtcbiAgICAgICAgdGhpcy5idXR0b25OZXh0ID0gbmV3IGVsZW1DcmVhdGVCdXR0b25fMS5FbGVtZW50Q3JlYXRvckJ1dHRvbignTkVYVCcpLmdldEJ1dHRvbignbmV4dCcpO1xuICAgICAgICB0aGlzLmJ1dHRvblByZXYgPSBuZXcgZWxlbUNyZWF0ZUJ1dHRvbl8xLkVsZW1lbnRDcmVhdG9yQnV0dG9uKCdQUkVWJykuZ2V0QnV0dG9uKCdwcmV2Jyk7XG4gICAgICAgIHRoaXMuYnV0dG9uUHJldi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgIHRoaXMuYmxvY2tDaGFuZ2VQYWdlcy5hcHBlbmQodGhpcy5idXR0b25QcmV2LCB0aGlzLmJ1dHRvbk5leHQpO1xuICAgICAgICB0aGlzLmJ1dHRvblByZXYuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICB0aGlzLnBhZ2UuYXBwZW5kKHRoaXMubnVtYmVyUGFnZSk7XG4gICAgICAgIHRoaXMuYnV0dG9uTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMud2lubmVyc0Jsb2NrLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgaWYgKHRoaXMuYnV0dG9uUHJldi5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25QcmV2LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIG51bVBhZ2VzICs9IDE7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVdpbm5lcnMobnVtUGFnZXMpO1xuICAgICAgICAgICAgKDAsIGNhbGxiYWNrc18xLnNldExvY2FsZVN0b3JhZ2UpKFN0cmluZyhudW1QYWdlcykpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idXR0b25QcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG51bVBhZ2VzID4gMikge1xuICAgICAgICAgICAgICAgIHRoaXMud2lubmVyc0Jsb2NrLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIG51bVBhZ2VzIC09IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVXaW5uZXJzKG51bVBhZ2VzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKG51bVBhZ2VzID09PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aW5uZXJzQmxvY2suaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgbnVtUGFnZXMgLT0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVdpbm5lcnMobnVtUGFnZXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uUHJldi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoMCwgY2FsbGJhY2tzXzEuc2V0TG9jYWxlU3RvcmFnZSkoU3RyaW5nKG51bVBhZ2VzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjcmVhdGVXaW5uZXJzKG51bVBhZ2VzKSB7XG4gICAgICAgIHRoaXMud2lubmVyc0Jsb2NrLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjb25zdCBwYXJhbXNUYWJsZSA9IHtcbiAgICAgICAgICAgIHRhZzogJ3RhYmxlJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RhYmxlLXdpbm5lcnMnLFxuICAgICAgICAgICAgdGFnVFI6ICd0cicsXG4gICAgICAgICAgICB0YWdURDogJ3RkJyxcbiAgICAgICAgICAgIHRhZ1RIOiAndGgnLFxuICAgICAgICAgICAgbnVtQ29sOiA1XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHRhYmxlID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZVRhYmxlKHBhcmFtc1RhYmxlKTtcbiAgICAgICAgdGhpcy5udW1iZXJQYWdlLmlubmVySFRNTCA9IGAjJHtudW1QYWdlc31gO1xuICAgICAgICBjb25zdCB1cmxzID0gYCR7dXJsfSR7dHlwZXNfMS5QYXRoLndpbm5lcnN9P19wYWdlPSR7bnVtUGFnZXN9Jl9saW1pdD0xMGA7XG4gICAgICAgIGNvbnN0IGxvYWRlciA9IG5ldyBMb2FkZXJfMS5Mb2FkZXIodXJscywgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgICBsb2FkZXIuZ2V0UmVzcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheCwgZ3VhcmQtZm9yLWluXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhKTtcbiAgICAgICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBudW0gPSB2YWx1ZXMuaW5kZXhPZihpdGVtKSArIDE7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGR1cmF0aW9uID0gaXRlbS50aW1lIC8gNjBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsVHdvID0gYCR7dXJsfSR7dHlwZXNfMS5QYXRoLmdhcmFnZX0vJHtpdGVtLmlkfWA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRlckdhcmFnZSA9IG5ldyBMb2FkZXJfMS5Mb2FkZXIodXJsVHdvLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRlckdhcmFnZS5nZXRSZXNwKChkYXRhR2FyYWdlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YUdhcmFnZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyID0gYDxzdmcgY2xhc3M9XCJjYXJcIiBmaWxsPSR7ZGF0YUdhcmFnZS5jb2xvcn0gd2lkdGg9XCIyNXB4XCIgaGVpZ2h0PVwiMjVweFwiIHZpZXdCb3g9XCIwIC00My45MiAxMjIuODggMTIyLjg4XCIgdmVyc2lvbj1cIjEuMVwiIGlkPVwiTGF5ZXJfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiAgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyMi44OCAzNS4wM1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG5cbiAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPi5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7fTwvc3R5bGU+XG4gICAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cInN0MFwiIGQ9XCJNOTkuNDIsMTMuNTdjNS45MywwLDEwLjczLDQuOCwxMC43MywxMC43M2MwLDUuOTMtNC44LDEwLjczLTEwLjczLDEwLjczcy0xMC43My00LjgtMTAuNzMtMTAuNzMgQzg4LjY5LDE4LjM3LDkzLjQ5LDEzLjU3LDk5LjQyLDEzLjU3TDk5LjQyLDEzLjU3eiBNNzkuMDUsNWMtMC41OSwxLjI3LTEuMDYsMi42OS0xLjQyLDQuMjNjLTAuODIsMi41NywwLjM5LDMuMTEsMy4xOSwyLjA2IGMyLjA2LTEuMjMsNC4xMi0yLjQ3LDYuMTgtMy43YzEuMDUtMC43NCwxLjU1LTEuNDcsMS4zOC0yLjE5Yy0wLjM0LTEuNDItMy4wOC0yLjE2LTUuMzMtMi42QzgwLjE5LDIuMjMsODAuMzksMi4xMSw3OS4wNSw1IEw3OS4wNSw1eiBNMjMuODYsMTkuMzFjMi43NSwwLDQuOTksMi4yMyw0Ljk5LDQuOTljMCwyLjc1LTIuMjMsNC45OS00Ljk5LDQuOTljLTIuNzUsMC00Ljk5LTIuMjMtNC45OS00Ljk5IEMxOC44NywyMS41NCwyMS4xLDE5LjMxLDIzLjg2LDE5LjMxTDIzLjg2LDE5LjMxeiBNOTkuNDIsMTkuMzFjMi43NSwwLDQuOTksMi4yMyw0Ljk5LDQuOTljMCwyLjc1LTIuMjMsNC45OS00Ljk5LDQuOTkgYy0yLjc1LDAtNC45OS0yLjIzLTQuOTktNC45OUM5NC40MywyMS41NCw5Ni42NiwxOS4zMSw5OS40MiwxOS4zMUw5OS40MiwxOS4zMXogTTQ2LjE0LDEyLjVjMi43Ny0yLjk3LDUuOTctNC45LDkuNjctNi43NiBjOC4xLTQuMDgsMTMuMDYtMy41OCwyMS42Ni0zLjU4bC0yLjg5LDcuNWMtMS4yMSwxLjYtMi41OCwyLjczLTQuNjYsMi44NEg0Ni4xNEw0Ni4xNCwxMi41eiBNMjMuODYsMTMuNTcgYzUuOTMsMCwxMC43Myw0LjgsMTAuNzMsMTAuNzNjMCw1LjkzLTQuOCwxMC43My0xMC43MywxMC43M3MtMTAuNzMtNC44LTEwLjczLTEwLjczQzEzLjEzLDE4LjM3LDE3LjkzLDEzLjU3LDIzLjg2LDEzLjU3IEwyMy44NiwxMy41N3ogTTQwLjgyLDEwLjNjMy41Mi0yLjE5LDcuMzUtNC4xNSwxMS41OS01LjgyYzEyLjkxLTUuMDksMjIuNzgtNiwzNi4zMi0xLjljNC4wOCwxLjU1LDguMTYsMy4xLDEyLjI0LDQuMDYgYzQuMDMsMC45NiwyMS40OCwxLjg4LDIxLjkxLDQuODFsLTQuMzEsNS4xNWMxLjU3LDEuMzYsMi44NSwzLjAzLDMuMzIsNS42NGMtMC4xMywxLjYxLTAuNTcsMi45Ni0xLjMzLDQuMDQgYy0xLjI5LDEuODUtNS4wNywzLjc2LTcuMTEsMi42N2MtMC42NS0wLjM1LTEuMDItMS4wNS0xLjAxLTIuMjRjMC4wNi0yMy45LTI4Ljc5LTIxLjE4LTI2LjYyLDIuODJIMzUuNDggQzQ0LjgsNS40OSw1LjA0LDUuNCwxMi4xLDI4LjdDOS42MiwzMS4zOCwzLjc3LDI3LjM0LDAsMTguNzVjMS4wMy0xLjAyLDIuMTYtMS45OSwzLjQyLTIuODljLTAuMDYtMC4wNSwwLjA2LDAuMTktMC4xNS0wLjE3IGMtMC4yMS0wLjM2LDAuNTEtMS44NywxLjk5LTIuNzRDMTMuMDIsOC40LDMxLjczLDguNTIsNDAuODIsMTAuM0w0MC44MiwxMC4zelwiLz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L3N2Zz5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyZyA9IFtudW0sIGAke3N0cn1gLCBgJHtkYXRhR2FyYWdlLm5hbWV9YCwgaXRlbS53aW5zLCBpdGVtLnRpbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtc1JvdyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnVFI6ICd0cicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZ1REOiAndGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1Db2w6IDVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IGVsZW1DcmVhdGVfMS5FbGVtZW50Q3JlYXRvci5jcmVhdGVSb3cocGFyYW1zUm93LCBhcmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlLmFwcGVuZChyb3cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2lubmVyc0Jsb2NrLnByZXBlbmQodGFibGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICgwLCBjYWxsYmFja3NfMS5zb3J0V2lubmVycykoZSk7XG4gICAgICAgIH0pO1xuICAgICAgICAoMCwgY2FsbGJhY2tzXzEuY291bnRXaW5uZXJzKSgpO1xuICAgIH1cbiAgICBnZXRXaW5uZXJzKG51bVBhZ2VzKSB7XG4gICAgICAgIHRoaXMuY3JlYXRlV2lubmVycyhudW1QYWdlcyk7XG4gICAgICAgIHRoaXMudmlld1dpbm5lcnMuYXBwZW5kKHRoaXMudGl0bGVXaW5uZXJzLCB0aGlzLnBhZ2UsIHRoaXMud2lubmVyc0Jsb2NrLCB0aGlzLmJsb2NrQ2hhbmdlUGFnZXMpO1xuICAgICAgICByZXR1cm4gdGhpcy52aWV3V2lubmVycztcbiAgICB9XG4gICAgY3JlYXRlVmlld1dpbm5lcigpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVXaW5uZXJzKHRoaXMubnVtYmVyUGFnZXMpO1xuICAgICAgICB0aGlzLnZpZXdXaW5uZXJzLmFwcGVuZCh0aGlzLnRpdGxlV2lubmVycywgdGhpcy5wYWdlLCB0aGlzLndpbm5lcnNCbG9jaywgdGhpcy5ibG9ja0NoYW5nZVBhZ2VzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlld1dpbm5lcnM7XG4gICAgfVxufVxuZXhwb3J0cy5XaW5uZXJzVmlldyA9IFdpbm5lcnNWaWV3O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlZpZXdXaW5uZXJzID0gdm9pZCAwO1xuY29uc3QgaGVhZGVyV2lubmVyc18xID0gcmVxdWlyZShcIi4vaGVhZGVyV2lubmVyc1wiKTtcbmNvbnN0IGVsZW1DcmVhdGVfMSA9IHJlcXVpcmUoXCIuLi8uLi9lbGVtQ3JlYXRlXCIpO1xuY29uc3QgY2FsbGJhY2tzXzEgPSByZXF1aXJlKFwiLi4vLi4vY2FsbGJhY2tzXCIpO1xuY2xhc3MgVmlld1dpbm5lcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb25zdCB2aWV3UGFyYW1zID0ge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3ZpZXctdHdvJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1haW4gPSBuZXcgaGVhZGVyV2lubmVyc18xLldpbm5lcnNWaWV3KCk7XG4gICAgICAgIHRoaXMudmlldyA9IGVsZW1DcmVhdGVfMS5FbGVtZW50Q3JlYXRvci5jcmVhdGVFbGVtZW50KHZpZXdQYXJhbXMpO1xuICAgIH1cbiAgICBjcmVhdGVWaWV3V2lubmVycygpIHtcbiAgICAgICAgbGV0IG51bSA9ICgwLCBjYWxsYmFja3NfMS5nZXRMb2NhbGVTdG9yYWdlKSgpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIG51bSA9ICcxJztcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChudW0gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy52aWV3LmFwcGVuZCh0aGlzLm1haW4uZ2V0V2lubmVycygrbnVtKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmlldztcbiAgICB9XG59XG5leHBvcnRzLlZpZXdXaW5uZXJzID0gVmlld1dpbm5lcnM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKiBjb25zdCBnZXRBdXRvID0gYXN5bmMgKHVybDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXJsfWApXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgY29uc29sZS5sb2coZGF0YSlcbn0gKi9cbnJlcXVpcmUoXCIuL3N0eWxlLmNzc1wiKTtcbmNvbnN0IGFwcF8xID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9hcHBcIik7XG4vLyBjb25zdCB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTozMDAwL2RiL2dhcmFnZSdcbmNvbnN0IGFwcCA9IG5ldyBhcHBfMS5BcHAoKTtcbmFwcC5zdGFydCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9