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
exports.getLocaleStorage = exports.setLocaleStorage = exports.sort = exports.sortWinners = exports.removeDisabled = exports.setDisabled = exports.updateeWin = exports.createWin = exports.checkWin = exports.stopCars = exports.countWinners = exports.findId = exports.countCars = exports.generateCarsTwo = exports.shuffle = exports.generateCars = exports.getId = exports.animateThree = exports.raseThree = exports.animateCar = exports.createPopap = exports.removeCar = exports.sendForm = exports.submitForm = exports.deleteCar = exports.sendReq = void 0;
const Loader_1 = __webpack_require__(/*! ./loader/Loader */ "./src/components/loader/Loader.ts");
// eslint-disable-next-line import/no-cycle
const generateCarsBlock_1 = __webpack_require__(/*! ./view/viewGarage/generateCarsBlock */ "./src/components/view/viewGarage/generateCarsBlock.ts");
const types_1 = __webpack_require__(/*! ./types */ "./src/components/types.ts");
// import { ElementCreatorInput } from './elemCreateInput'
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
    // const button = arg.form?.querySelector('button')
    (_a = arg.form) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', (e) => {
        e.preventDefault();
        sendForm(arg);
        // if (e.target instanceof HTMLFormElement) { e.target.reset() }
    }, { once: true });
}
exports.submitForm = submitForm;
function sendForm(arg) {
    /* const inputName: HTMLInputElement | null | undefined = arg.form?.querySelector('.input-update')
    const inputColor: HTMLInputElement | null | undefined = arg.form?.querySelector('.input-color')
    console.log(inputName)
    console.log(inputColor) */
    const obj = {};
    /* if (inputName instanceof HTMLInputElement && inputColor instanceof HTMLInputElement) {
      // const name = inputName.value
      // const color = inputColor.value
      obj[inputName.name] = inputName.value
      obj[inputColor.name] = inputColor.value
      console.log(obj)
    }
    console.log(obj) */
    const formData = new FormData(arg.form);
    formData.forEach((value, key) => { obj[key] = value; });
    const dataJson = JSON.stringify(obj);
    const loader = new Loader_1.Loader(`${arg.url}`, {
        method: `${arg.method}`,
        headers: arg.headers,
        body: dataJson
    });
    // eslint-disable-next-line no-restricted-syntax
    /* for (const key of formData.keys()) {
      formData.delete(`${key}`)
    } */
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
                        duration
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
function findId(id) {
    const urlTwo = `${url}${types_1.Path.garage}/${id}`;
    const loader = new Loader_1.Loader(urlTwo, { method: 'GET' });
    loader.getResp((data) => {
        console.log(data);
        if ((data === null || data === void 0 ? void 0 : data.id) === undefined && (data === null || data === void 0 ? void 0 : data.id) == null) {
            findId(id + 1);
        }
        else if (data != null) {
            console.log(data);
            // if (data.id === undefined) { findId(+data.id + 1) }
            // eslint-disable-next-line no-restricted-syntax, guard-for-in
            // const values = Object.values(dataTwo)
            // console.log(values)
            const blockCar = new generateCarsBlock_1.AutoBlockGenerator(data).getAutoBlock();
            blockCar.setAttribute('data-id', `num${data.id}`);
            console.log(blockCar);
            const garage = document.querySelector('.garage-block');
            console.log(garage);
            garage === null || garage === void 0 ? void 0 : garage.append(blockCar);
        }
    });
}
exports.findId = findId;
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
            const ids = (0, callbacks_1.getId)();
            const attr = this.block.getAttribute('data-id');
            let id;
            if (attr != null) {
                id = attr.slice(3);
            }
            else {
                id = data.id;
            }
            const urls = `${url}${types_1.Path.garage}/${id}`;
            const idTwo = +ids[ids.length - 1] + 1;
            console.log(id);
            console.log(idTwo);
            const args = { url: urls, method: 'DELETE' };
            (0, callbacks_1.removeCar)(args, id);
            this.block.remove();
            (0, callbacks_1.countCars)();
            (0, callbacks_1.findId)(idTwo);
            /* const urlTwo = `${url}${Path.garage}/${idTwo}`
            const loader = new Loader(urlTwo, { method: 'GET' })
            loader.getResp((dataTwo?: Data) => {
              if (dataTwo != null) {
                console.log(dataTwo)
                // eslint-disable-next-line no-restricted-syntax, guard-for-in
                // const values = Object.values(dataTwo)
                // console.log(values)
                const blockCar = new AutoBlockGenerator(dataTwo).getAutoBlock()
                blockCar.setAttribute('data-id', `num${dataTwo.id}`)
                console.log(blockCar)
                const garage = document.querySelector('.garage-block')
                console.log(garage)
                garage?.append(blockCar)
              }
            }) */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7Ozs7Ozs7Ozs7O0FDbEpOO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFtQjtBQUNuQix3QkFBd0IsbUJBQU8sQ0FBQywyRUFBaUI7QUFDakQscUJBQXFCLG1CQUFPLENBQUMsd0RBQWtCO0FBQy9DLG9CQUFvQixtQkFBTyxDQUFDLHNEQUFpQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7Ozs7Ozs7VUMxQm5CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7QUNOYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RDtBQUNBLGtDQUFrQyxJQUFJO0FBQ3RDO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsbUJBQU8sQ0FBQyxvQ0FBYTtBQUNyQixjQUFjLG1CQUFPLENBQUMsaURBQWtCO0FBQ3hDO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy92aWV3L3ZpZXdHYXJhZ2Uvdmlld0dhcmFnZS5jc3M/NWNjOSIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvdmlldy92aWV3V2lubmVycy93aW5uZXJzLmNzcz9iNzZhIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL2FwcC50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvY2FsbGJhY2tzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy9lbGVtQ3JlYXRlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy9lbGVtQ3JlYXRlQnV0dG9uLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy9lbGVtQ3JlYXRlSW5wdXQudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL2xvYWRlci9Mb2FkZXIudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL3R5cGVzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy92aWV3L3ZpZXdHYXJhZ2UvZ2VuZXJhdGVDYXJzQmxvY2sudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvdmlld0dhcmFnZS9oZWFkZXJHYXJhZ2UudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS8uL3NyYy9jb21wb25lbnRzL3ZpZXcvdmlld0dhcmFnZS9tYWluR2FyYWdlLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy92aWV3L3ZpZXdHYXJhZ2Uvdmlldy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLy4vc3JjL2NvbXBvbmVudHMvdmlldy92aWV3V2lubmVycy9oZWFkZXJXaW5uZXJzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvY29tcG9uZW50cy92aWV3L3ZpZXdXaW5uZXJzL3ZpZXdXaW5uZXJzLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FzeW5jLXJhY2UvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkFwcCA9IHZvaWQgMDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tY3ljbGVcbmNvbnN0IGhlYWRlckdhcmFnZV8xID0gcmVxdWlyZShcIi4vdmlldy92aWV3R2FyYWdlL2hlYWRlckdhcmFnZVwiKTtcbmNvbnN0IGVsZW1DcmVhdGVCdXR0b25fMSA9IHJlcXVpcmUoXCIuL2VsZW1DcmVhdGVCdXR0b25cIik7XG5jb25zdCBlbGVtQ3JlYXRlXzEgPSByZXF1aXJlKFwiLi9lbGVtQ3JlYXRlXCIpO1xuY29uc3Qgdmlld18xID0gcmVxdWlyZShcIi4vdmlldy92aWV3R2FyYWdlL3ZpZXdcIik7XG5jb25zdCB2aWV3V2lubmVyc18xID0gcmVxdWlyZShcIi4vdmlldy92aWV3V2lubmVycy92aWV3V2lubmVyc1wiKTtcbmNsYXNzIEFwcCBleHRlbmRzIHZpZXdfMS5WaWV3R2FyYWdlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgY29uc3QgcGFyYW1zSGVhZGVyQXBwID0ge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2hlYWRlci1hcHAnXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHZpZXcgPSB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAndmlldydcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5idXR0b25Ub0dhcmFnZSA9IG5ldyBlbGVtQ3JlYXRlQnV0dG9uXzEuRWxlbWVudENyZWF0b3JCdXR0b24oJ3RvR0FSQUdFJykuZ2V0QnV0dG9uKCd0b0dhcmFnZScpO1xuICAgICAgICB0aGlzLmJ1dHRvblRvV2lubmVycyA9IG5ldyBlbGVtQ3JlYXRlQnV0dG9uXzEuRWxlbWVudENyZWF0b3JCdXR0b24oJ3RvV0lOTkVSUycpLmdldEJ1dHRvbigndG9XaW5uZXJzJyk7XG4gICAgICAgIHRoaXMuaGVhZGVyQXBwID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQocGFyYW1zSGVhZGVyQXBwKTtcbiAgICAgICAgdGhpcy5oZWFkZXJBcHAuYXBwZW5kKHRoaXMuYnV0dG9uVG9HYXJhZ2UsIHRoaXMuYnV0dG9uVG9XaW5uZXJzKTtcbiAgICAgICAgdGhpcy52aWV3R2FyYWdlID0gbmV3IHZpZXdfMS5WaWV3R2FyYWdlKCkuY3JlYXRldFZpZXcoKTtcbiAgICAgICAgdGhpcy52aWV3V2lubmVycyA9IG5ldyB2aWV3V2lubmVyc18xLlZpZXdXaW5uZXJzKCk7XG4gICAgICAgIHRoaXMudmlldyA9IGVsZW1DcmVhdGVfMS5FbGVtZW50Q3JlYXRvci5jcmVhdGVFbGVtZW50KHZpZXcpO1xuICAgICAgICB0aGlzLnZpZXcuYXBwZW5kKHRoaXMudmlld0dhcmFnZSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuaGVhZGVyQXBwLCB0aGlzLnZpZXcpO1xuICAgICAgICB0aGlzLmJ1dHRvblRvR2FyYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgdGhpcy52aWV3LmFwcGVuZCh0aGlzLnZpZXdHYXJhZ2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idXR0b25Ub1dpbm5lcnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICB0aGlzLnZpZXcuYXBwZW5kKHRoaXMudmlld1dpbm5lcnMuY3JlYXRlVmlld1dpbm5lcnMoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyR2FyYWdlID0gbmV3IGhlYWRlckdhcmFnZV8xLkhlYWRlckdhcmFnZSgpO1xuICAgIH1cbn1cbmV4cG9ydHMuQXBwID0gQXBwO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdldExvY2FsZVN0b3JhZ2UgPSBleHBvcnRzLnNldExvY2FsZVN0b3JhZ2UgPSBleHBvcnRzLnNvcnQgPSBleHBvcnRzLnNvcnRXaW5uZXJzID0gZXhwb3J0cy5yZW1vdmVEaXNhYmxlZCA9IGV4cG9ydHMuc2V0RGlzYWJsZWQgPSBleHBvcnRzLnVwZGF0ZWVXaW4gPSBleHBvcnRzLmNyZWF0ZVdpbiA9IGV4cG9ydHMuY2hlY2tXaW4gPSBleHBvcnRzLnN0b3BDYXJzID0gZXhwb3J0cy5jb3VudFdpbm5lcnMgPSBleHBvcnRzLmZpbmRJZCA9IGV4cG9ydHMuY291bnRDYXJzID0gZXhwb3J0cy5nZW5lcmF0ZUNhcnNUd28gPSBleHBvcnRzLnNodWZmbGUgPSBleHBvcnRzLmdlbmVyYXRlQ2FycyA9IGV4cG9ydHMuZ2V0SWQgPSBleHBvcnRzLmFuaW1hdGVUaHJlZSA9IGV4cG9ydHMucmFzZVRocmVlID0gZXhwb3J0cy5hbmltYXRlQ2FyID0gZXhwb3J0cy5jcmVhdGVQb3BhcCA9IGV4cG9ydHMucmVtb3ZlQ2FyID0gZXhwb3J0cy5zZW5kRm9ybSA9IGV4cG9ydHMuc3VibWl0Rm9ybSA9IGV4cG9ydHMuZGVsZXRlQ2FyID0gZXhwb3J0cy5zZW5kUmVxID0gdm9pZCAwO1xuY29uc3QgTG9hZGVyXzEgPSByZXF1aXJlKFwiLi9sb2FkZXIvTG9hZGVyXCIpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuY29uc3QgZ2VuZXJhdGVDYXJzQmxvY2tfMSA9IHJlcXVpcmUoXCIuL3ZpZXcvdmlld0dhcmFnZS9nZW5lcmF0ZUNhcnNCbG9ja1wiKTtcbmNvbnN0IHR5cGVzXzEgPSByZXF1aXJlKFwiLi90eXBlc1wiKTtcbi8vIGltcG9ydCB7IEVsZW1lbnRDcmVhdG9ySW5wdXQgfSBmcm9tICcuL2VsZW1DcmVhdGVJbnB1dCdcbmNvbnN0IHVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAnO1xuZnVuY3Rpb24gc2VuZFJlcShhcmcpIHtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyXzEuTG9hZGVyKGAke2FyZy51cmx9YCwgeyBtZXRob2Q6IGAke2FyZy5tZXRob2R9YCB9KTtcbiAgICBsb2FkZXIuZ2V0UmVzcCgoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5zZW5kUmVxID0gc2VuZFJlcTtcbmZ1bmN0aW9uIGRlbGV0ZUNhcihhcmcsIGlkKSB7XG4gICAgY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcl8xLkxvYWRlcihgJHthcmcudXJsfWAsIHsgbWV0aG9kOiBgJHthcmcubWV0aG9kfWAgfSk7XG4gICAgbG9hZGVyLmdldFJlc3BScigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlID09PSAyMDApIHtcbiAgICAgICAgICAgIGNvbnN0IHVybHNUaHJlZSA9IGAke3VybH0ke3R5cGVzXzEuUGF0aC53aW5uZXJzfS8ke2lkfWA7XG4gICAgICAgICAgICBjb25zdCBuZXdMb2FkZXIgPSBuZXcgTG9hZGVyXzEuTG9hZGVyKHVybHNUaHJlZSwgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgICAgICAgbmV3TG9hZGVyLmdldFJlc3AoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5pZCkgPT09ICtgJHtpZH1gKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRlclR3byA9IG5ldyBMb2FkZXJfMS5Mb2FkZXIodXJsc1RocmVlLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XG4gICAgICAgICAgICAgICAgICAgIGxvYWRlclR3by5nZXRSZXNwUnIoKHJlc3ApID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwID09PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmRlbGV0ZUNhciA9IGRlbGV0ZUNhcjtcbmZ1bmN0aW9uIHN1Ym1pdEZvcm0oYXJnKSB7XG4gICAgdmFyIF9hO1xuICAgIC8vIGNvbnN0IGJ1dHRvbiA9IGFyZy5mb3JtPy5xdWVyeVNlbGVjdG9yKCdidXR0b24nKVxuICAgIChfYSA9IGFyZy5mb3JtKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZW5kRm9ybShhcmcpO1xuICAgICAgICAvLyBpZiAoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHsgZS50YXJnZXQucmVzZXQoKSB9XG4gICAgfSwgeyBvbmNlOiB0cnVlIH0pO1xufVxuZXhwb3J0cy5zdWJtaXRGb3JtID0gc3VibWl0Rm9ybTtcbmZ1bmN0aW9uIHNlbmRGb3JtKGFyZykge1xuICAgIC8qIGNvbnN0IGlucHV0TmFtZTogSFRNTElucHV0RWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQgPSBhcmcuZm9ybT8ucXVlcnlTZWxlY3RvcignLmlucHV0LXVwZGF0ZScpXG4gICAgY29uc3QgaW5wdXRDb2xvcjogSFRNTElucHV0RWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQgPSBhcmcuZm9ybT8ucXVlcnlTZWxlY3RvcignLmlucHV0LWNvbG9yJylcbiAgICBjb25zb2xlLmxvZyhpbnB1dE5hbWUpXG4gICAgY29uc29sZS5sb2coaW5wdXRDb2xvcikgKi9cbiAgICBjb25zdCBvYmogPSB7fTtcbiAgICAvKiBpZiAoaW5wdXROYW1lIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJiBpbnB1dENvbG9yIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgLy8gY29uc3QgbmFtZSA9IGlucHV0TmFtZS52YWx1ZVxuICAgICAgLy8gY29uc3QgY29sb3IgPSBpbnB1dENvbG9yLnZhbHVlXG4gICAgICBvYmpbaW5wdXROYW1lLm5hbWVdID0gaW5wdXROYW1lLnZhbHVlXG4gICAgICBvYmpbaW5wdXRDb2xvci5uYW1lXSA9IGlucHV0Q29sb3IudmFsdWVcbiAgICAgIGNvbnNvbGUubG9nKG9iailcbiAgICB9XG4gICAgY29uc29sZS5sb2cob2JqKSAqL1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGFyZy5mb3JtKTtcbiAgICBmb3JtRGF0YS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7IG9ialtrZXldID0gdmFsdWU7IH0pO1xuICAgIGNvbnN0IGRhdGFKc29uID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyXzEuTG9hZGVyKGAke2FyZy51cmx9YCwge1xuICAgICAgICBtZXRob2Q6IGAke2FyZy5tZXRob2R9YCxcbiAgICAgICAgaGVhZGVyczogYXJnLmhlYWRlcnMsXG4gICAgICAgIGJvZHk6IGRhdGFKc29uXG4gICAgfSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgLyogZm9yIChjb25zdCBrZXkgb2YgZm9ybURhdGEua2V5cygpKSB7XG4gICAgICBmb3JtRGF0YS5kZWxldGUoYCR7a2V5fWApXG4gICAgfSAqL1xuICAgIGxvYWRlci5nZXRSZXNwKChkYXRhKSA9PiB7XG4gICAgICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChhcmcubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBibG9ja0NhciA9IG5ldyBnZW5lcmF0ZUNhcnNCbG9ja18xLkF1dG9CbG9ja0dlbmVyYXRvcihkYXRhKS5nZXRBdXRvQmxvY2soKTtcbiAgICAgICAgICAgICAgICBibG9ja0Nhci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBgbnVtJHtkYXRhLmlkfWApO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdhcmFnZUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZS1ibG9jaycpO1xuICAgICAgICAgICAgICAgIGlmIChnYXJhZ2VCbG9jayAhPSBudWxsICYmIGdhcmFnZUJsb2NrLmNoaWxkcmVuLmxlbmd0aCA8IDcpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FyYWdlQmxvY2suYXBwZW5kKGJsb2NrQ2FyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY291bnRDYXJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXJnLm1ldGhvZCA9PT0gJ1BVVCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZFN0ciA9IGBudW0ke2RhdGEuaWR9YDtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkID0gJHtpZFN0cn1dYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZUNhciA9IGNhckJsb2NrID09PSBudWxsIHx8IGNhckJsb2NrID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJCbG9jay5xdWVyeVNlbGVjdG9yKCcuY2FyLW5hbWUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWdDYXIgPSBjYXJCbG9jayA9PT0gbnVsbCB8fCBjYXJCbG9jayA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FyQmxvY2sucXVlcnlTZWxlY3RvcignLmltZy1hdXRvJyk7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWVDYXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lQ2FyLmlubmVySFRNTCA9IGAke2RhdGEubmFtZX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW1nQ2FyICE9IG51bGwgJiYgaW1nQ2FyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nQ2FyLnN0eWxlLmNvbG9yID0gYCR7ZGF0YS5jb2xvcn1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5zZW5kRm9ybSA9IHNlbmRGb3JtO1xuZnVuY3Rpb24gcmVtb3ZlQ2FyKGFyZywgaWQpIHtcbiAgICBkZWxldGVDYXIoYXJnLCBpZCk7XG4gICAgY291bnRDYXJzKCk7XG59XG5leHBvcnRzLnJlbW92ZUNhciA9IHJlbW92ZUNhcjtcbmZ1bmN0aW9uIGNyZWF0ZVBvcGFwKG1vZGVsLCB0aW1lKSB7XG4gICAgY29uc3QgcG9wYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3BhcC5jbGFzc0xpc3QuYWRkKCdwb3BhcCcpO1xuICAgIGNvbnN0IHBvcGFwQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcGFwQm9keS5jbGFzc0xpc3QuYWRkKCdwb3BhcC1ib2R5Jyk7XG4gICAgY29uc3QgcG9wYXBDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wYXBDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3BvcGFwLWNvbnRlbnQnKTtcbiAgICBwb3BhcEJvZHkuYXBwZW5kKHBvcGFwQ29udGVudCk7XG4gICAgcG9wYXBDb250ZW50LmlubmVySFRNTCA9IGAke21vZGVsfSB3aW5zIGZvciAke3RpbWV9c2VjIWA7XG4gICAgcG9wYXAuYXBwZW5kKHBvcGFwQm9keSk7XG4gICAgcmV0dXJuIHBvcGFwO1xufVxuZXhwb3J0cy5jcmVhdGVQb3BhcCA9IGNyZWF0ZVBvcGFwO1xubGV0IGFuaW1JZDtcbmxldCB3aW5uZXIgPSBmYWxzZTtcbi8vIGxldCBhcnJheU9iajogT2JqSWRcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgIHdpbm5lciA9IGZhbHNlO1xufSk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgKCkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvblJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1SRVNFVCcpO1xuICAgIGJ1dHRvblJlc2V0ID09PSBudWxsIHx8IGJ1dHRvblJlc2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b25SZXNldC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG59KTtcbmZ1bmN0aW9uIGFuaW1hdGVDYXIoZWwsIGlkKSB7XG4gICAgY29uc3QgaW1nID0gZWwgPT09IG51bGwgfHwgZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pbWctYXV0bycpO1xuICAgIGNvbnN0IGZsYWcgPSBlbCA9PT0gbnVsbCB8fCBlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWwucXVlcnlTZWxlY3RvcignLmZsYWcnKTtcbiAgICBjb25zdCBjYXJOYW1lID0gZWwgPT09IG51bGwgfHwgZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsLnF1ZXJ5U2VsZWN0b3IoJy5jYXItbmFtZScpO1xuICAgIGlmIChmbGFnIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgY29vcmRGbGFnID0gZmxhZy5vZmZzZXRMZWZ0IC0gNDA7XG4gICAgICAgIGNvbnN0IHVybHMgPSBgJHt1cmx9JHt0eXBlc18xLlBhdGguZW5naW5lfT9pZD0ke2lkfSZzdGF0dXM9c3RhcnRlZGA7XG4gICAgICAgIGNvbnN0IGxvYWRlciA9IG5ldyBMb2FkZXJfMS5Mb2FkZXIoYCR7dXJsc31gLCB7IG1ldGhvZDogJ1BBVENIJyB9KTtcbiAgICAgICAgbG9hZGVyLmdldFJlc3AoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW1nIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSBpbWcgPT09IG51bGwgfHwgaW1nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgZGlzdGFuY2UgPSBjb29yZEZsYWcgLSBzdGFydFBvc2l0aW9uc1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IE1hdGguZmxvb3IoZGF0YS5kaXN0YW5jZSAvIGRhdGEudmVsb2NpdHkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGVtcGxhdGUtY3VybHktaW4tc3RyaW5nXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1JbWcgPSBpbWcuYW5pbWF0ZShbeyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7c3RhcnRQb3NpdGlvbnN9cHhgIH0sIHsgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke2Nvb3JkRmxhZ31weGAgfV0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtjb29yZEZsYWd9cHgpYDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsVHdvID0gYCR7dXJscy5zbGljZSgwLCB1cmxzLmxhc3RJbmRleE9mKCc9JykpfT1kcml2ZWA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRlck9uZSA9IG5ldyBMb2FkZXJfMS5Mb2FkZXIodXJsVHdvLCB7IG1ldGhvZDogJ1BBVENIJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyT25lLmdldFJlc3BScigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSA9PT0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29vcmQgPSBpbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltSW1nLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7Y29vcmR9cHgpYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlID09PSAyMDAgJiYgIXdpbm5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGQgPSArKGR1cmF0aW9uIC8gMTAwMCkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FyTmFtZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcGFwV2luID0gY3JlYXRlUG9wYXAoY2FyTmFtZS5pbm5lckhUTUwsIGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChwb3BhcFdpbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcGFwV2luLmNsYXNzTGlzdC5hZGQoJ29wZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWF0aC5yb3VuZChkdXJhdGlvbiAvIDEwMDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lubmVyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja1dpbihpZCwgZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltSW1nLmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuYW5pbWF0ZUNhciA9IGFuaW1hdGVDYXI7XG5mdW5jdGlvbiByYXNlVGhyZWUoZWwsIGlkKSB7XG4gICAgY29uc3QgaW1nID0gZWwgPT09IG51bGwgfHwgZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pbWctYXV0bycpO1xuICAgIGNvbnN0IGZsYWcgPSBlbCA9PT0gbnVsbCB8fCBlbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZWwucXVlcnlTZWxlY3RvcignLmZsYWcnKTtcbiAgICAvLyBjb25zdCBjYXJOYW1lID0gZWw/LnF1ZXJ5U2VsZWN0b3IoJy5jYXItbmFtZScpXG4gICAgaWYgKGZsYWcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBjb25zdCBjb29yZEZsYWcgPSBmbGFnLm9mZnNldExlZnQgLSA0MDtcbiAgICAgICAgY29uc3QgdXJscyA9IGAke3VybH0ke3R5cGVzXzEuUGF0aC5lbmdpbmV9P2lkPSR7aWR9JnN0YXR1cz1zdGFydGVkYDtcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcl8xLkxvYWRlcihgJHt1cmxzfWAsIHsgbWV0aG9kOiAnUEFUQ0gnIH0pO1xuICAgICAgICBsb2FkZXIuZ2V0UmVzcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChpbWcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydFBvc2l0aW9ucyA9IGltZyA9PT0gbnVsbCB8fCBpbWcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGltZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXN0YW5jZSA9IGNvb3JkRmxhZyAtIHN0YXJ0UG9zaXRpb25zO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IE1hdGguZmxvb3IoZGF0YS5kaXN0YW5jZSAvIGRhdGEudmVsb2NpdHkpO1xuICAgICAgICAgICAgICAgICAgICBhbmltSWQgPSBhbmltYXRlVGhyZWUoZHVyYXRpb24sIGltZywgZGlzdGFuY2UsIHN0YXJ0UG9zaXRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gb2JqSWRbYCR7aWR9YF0gPSBhbmltYXRlVGhyZWUoZHVyYXRpb24sIGltZywgZGlzdGFuY2UsIHN0YXJ0UG9zaXRpb25zKVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmpJZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsVHdvID0gYCR7dXJscy5zbGljZSgwLCB1cmxzLmxhc3RJbmRleE9mKCc9JykpfT1kcml2ZWA7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvYWRlck9uZSA9IG5ldyBMb2FkZXJfMS5Mb2FkZXIodXJsVHdvLCB7IG1ldGhvZDogJ1BBVENIJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyT25lLmdldFJlc3BScigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSA9PT0gNTAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqSWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3Qga2V5ID0gYG51bSR7aWR9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iaklkW2Ake2lkfWBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShhbmltSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMucmFzZVRocmVlID0gcmFzZVRocmVlO1xuZnVuY3Rpb24gYW5pbWF0ZVRocmVlKGR1cmF0aW9uLCBlbGVtZW50LCBkaXN0YW5jZSwgc3RhcnRQb3NpdGlvbnMpIHtcbiAgICBsZXQgY3VycmVudFBvc2l0aW9ucyA9IHN0YXJ0UG9zaXRpb25zO1xuICAgIGNvbnN0IGZpbiA9IGRpc3RhbmNlICsgc3RhcnRQb3NpdGlvbnM7XG4gICAgY29uc3QgZnJhbWUgPSBkdXJhdGlvbiAvIDEwMDAgKiA2MDtcbiAgICBjb25zdCBkeCA9IGRpc3RhbmNlIC8gZnJhbWU7XG4gICAgY29uc3QgdGljayA9ICgpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgY3VycmVudFBvc2l0aW9ucyArPSBkeDtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke2N1cnJlbnRQb3NpdGlvbnN9cHgpYDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UG9zaXRpb25zIDwgZmluKSB7XG4gICAgICAgICAgICAgICAgYW5pbUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBhbmltSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGljayk7XG4gICAgcmV0dXJuIGFuaW1JZDtcbn1cbmV4cG9ydHMuYW5pbWF0ZVRocmVlID0gYW5pbWF0ZVRocmVlO1xuZnVuY3Rpb24gZ2V0SWQoKSB7XG4gICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyLWJsb2NrJyk7XG4gICAgY29uc3QgYXJyID0gW107XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpZiAoaXRlbS5oYXNBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpXG4gICAgICAgICAgICAgICAgYXJyLnB1c2godmFsdWUuc2xpY2UoMykpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coYXJyLm1hcCgoaXRlbSkgPT4gTnVtYmVyKGl0ZW0pKSk7XG4gICAgcmV0dXJuIGFycjtcbn1cbmV4cG9ydHMuZ2V0SWQgPSBnZXRJZDtcbmZ1bmN0aW9uIGdlbmVyYXRlQ2FycygpIHtcbiAgICBjb25zdCBuYW1lcyA9IFsnT3BlbCcsICdNZXJzZWRlcycsICdCTVcnLCAnVGVzbGEnLCAnVG95b3RhJywgJ0ZvcmQnXTtcbiAgICBjb25zdCBtb2RlbHMgPSBbJ1ZlY3RyYScsICdTWDUnLCAnZ2xhJywgJ21vZGVsIHgnLCAnY2FtcnknLCAnRmllc3RhJ107XG4gICAgY29uc3QgY29sb3JzID0gWycjZTZlNmZhJywgJyNmZWRlMDAnLCAnIzZjNzc5ZicsICcjZWYzYzQwJywgJ2dyZWVuJywgJ3llbGxvdyddO1xuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpO1xuICAgIGNvbnNvbGUubG9nKHJhbmRvbSk7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBsZXQgbiA9IDA7XG4gICAgd2hpbGUgKG4gPCAxMDApIHtcbiAgICAgICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUpO1xuICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSk7XG4gICAgICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1KTtcbiAgICAgICAgY29uc3Qgb2JqID0geyBuYW1lOiBgJHtuYW1lc1tpXX0gJHttb2RlbHNbal19YCwgY29sb3I6IGAke2NvbG9yc1t4XX1gIH07XG4gICAgICAgIGFycmF5LnB1c2gob2JqKTtcbiAgICAgICAgbiArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG59XG5leHBvcnRzLmdlbmVyYXRlQ2FycyA9IGdlbmVyYXRlQ2FycztcbmZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcbiAgICBmb3IgKGxldCBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGkgLT0gMSkge1xuICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICBbYXJyYXlbaV0sIGFycmF5W2pdXSA9IFthcnJheVtqXSwgYXJyYXlbaV1dO1xuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG59XG5leHBvcnRzLnNodWZmbGUgPSBzaHVmZmxlO1xuZnVuY3Rpb24gZ2VuZXJhdGVDYXJzVHdvKGNvbGxiYWNrKSB7XG4gICAgY29uc3QgbmFtZXMgPSBbJ09wZWwnLCAnTWVyc2VkZXMnLCAnQk1XJywgJ1Rlc2xhJywgJ1RveW90YSddO1xuICAgIGNvbnN0IG1vZGVscyA9IFsnVmVjdHJhJywgJ1NYNScsICdnbGEnLCAnbW9kZWwgeCcsICdjYW1yeSddO1xuICAgIGNvbnN0IGNvbG9ycyA9IFsnI2U2ZTZmYScsICcjZmVkZTAwJywgJyM2Yzc3OWYnLCAnI2VmM2M0MCcsICdncmVlbiddO1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgbGV0IG4gPSAwO1xuICAgIHdoaWxlIChuIDwgMjApIHtcbiAgICAgICAgY29uc3QgYXJyTmFtZSA9IHNodWZmbGUobmFtZXMpO1xuICAgICAgICBjb25zdCBhcnJNb2RlbHMgPSBzaHVmZmxlKG1vZGVscyk7XG4gICAgICAgIGNvbnN0IGFyckNvbG9ycyA9IHNodWZmbGUoY29sb3JzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgY29uc3Qgb2JqID0geyBuYW1lOiBgJHthcnJOYW1lW2ldfSAke2Fyck1vZGVsc1tpXX1gLCBjb2xvcjogYCR7YXJyQ29sb3JzW2ldfWAgfTtcbiAgICAgICAgICAgIGFycmF5LnB1c2gob2JqKTtcbiAgICAgICAgfVxuICAgICAgICBuICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBhcnJheTtcbn1cbmV4cG9ydHMuZ2VuZXJhdGVDYXJzVHdvID0gZ2VuZXJhdGVDYXJzVHdvO1xuZnVuY3Rpb24gY291bnRDYXJzKCkge1xuICAgIGNvbnN0IHVybFR3byA9IGAke3VybH0ke3R5cGVzXzEuUGF0aC5nYXJhZ2V9P19saW1pdD03YDtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyXzEuTG9hZGVyKHVybFR3bywgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgIGxvYWRlci5nZXRSZXNwUmVzcCgoZGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBudW0gPSBkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEuZ2V0KCdYLVRvdGFsLUNvdW50Jyk7XG4gICAgICAgIGlmIChudW0gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgdGl0bGVHYXJhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fycy1udW0nKTtcbiAgICAgICAgICAgIGlmICh0aXRsZUdhcmFnZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGl0bGVHYXJhZ2UuaW5uZXJIVE1MID0gYCgke251bX0pYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5jb3VudENhcnMgPSBjb3VudENhcnM7XG5mdW5jdGlvbiBmaW5kSWQoaWQpIHtcbiAgICBjb25zdCB1cmxUd28gPSBgJHt1cmx9JHt0eXBlc18xLlBhdGguZ2FyYWdlfS8ke2lkfWA7XG4gICAgY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcl8xLkxvYWRlcih1cmxUd28sIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICBsb2FkZXIuZ2V0UmVzcCgoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgaWYgKChkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEuaWQpID09PSB1bmRlZmluZWQgJiYgKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGF0YS5pZCkgPT0gbnVsbCkge1xuICAgICAgICAgICAgZmluZElkKGlkICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICAgIC8vIGlmIChkYXRhLmlkID09PSB1bmRlZmluZWQpIHsgZmluZElkKCtkYXRhLmlkICsgMSkgfVxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBndWFyZC1mb3ItaW5cbiAgICAgICAgICAgIC8vIGNvbnN0IHZhbHVlcyA9IE9iamVjdC52YWx1ZXMoZGF0YVR3bylcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlcylcbiAgICAgICAgICAgIGNvbnN0IGJsb2NrQ2FyID0gbmV3IGdlbmVyYXRlQ2Fyc0Jsb2NrXzEuQXV0b0Jsb2NrR2VuZXJhdG9yKGRhdGEpLmdldEF1dG9CbG9jaygpO1xuICAgICAgICAgICAgYmxvY2tDYXIuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgYG51bSR7ZGF0YS5pZH1gKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJsb2NrQ2FyKTtcbiAgICAgICAgICAgIGNvbnN0IGdhcmFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYXJhZ2UtYmxvY2snKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGdhcmFnZSk7XG4gICAgICAgICAgICBnYXJhZ2UgPT09IG51bGwgfHwgZ2FyYWdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBnYXJhZ2UuYXBwZW5kKGJsb2NrQ2FyKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5maW5kSWQgPSBmaW5kSWQ7XG5mdW5jdGlvbiBjb3VudFdpbm5lcnMoKSB7XG4gICAgY29uc3QgdXJsVHdvID0gYCR7dXJsfSR7dHlwZXNfMS5QYXRoLndpbm5lcnN9P19saW1pdD0xMGA7XG4gICAgY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcl8xLkxvYWRlcih1cmxUd28sIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICBsb2FkZXIuZ2V0UmVzcFJlc3AoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgbnVtID0gZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhLmdldCgnWC1Ub3RhbC1Db3VudCcpO1xuICAgICAgICBpZiAobnVtICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpbm5lcnNOdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVycy1udW0nKTtcbiAgICAgICAgICAgIGlmICh3aW5uZXJzTnVtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB3aW5uZXJzTnVtLmlubmVySFRNTCA9IGAoJHtudW19KWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuY291bnRXaW5uZXJzID0gY291bnRXaW5uZXJzO1xuZnVuY3Rpb24gc3RvcENhcnMoaWQpIHtcbiAgICBjb25zdCB1cmxzID0gYCR7dXJsfSR7dHlwZXNfMS5QYXRoLmVuZ2luZX0/aWQ9JHtpZH0mc3RhdHVzPXN0b3BwZWRgO1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaWQ9bnVtJHtpZH1dYCk7XG4gICAgY29uc3QgaW1nID0gZWwgPT09IG51bGwgfHwgZWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVsLnF1ZXJ5U2VsZWN0b3IoJy5pbWctYXV0bycpO1xuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBMb2FkZXJfMS5Mb2FkZXIodXJscywgeyBtZXRob2Q6ICdQQVRDSCcgfSk7XG4gICAgbG9hZGVyLmdldFJlc3AoKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSBpbWcgPT09IG51bGwgfHwgaW1nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbWcuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgaWYgKGltZyAhPSBudWxsICYmIGltZyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoZGF0YSAhPSBudWxsICYmIGRhdGEudmVsb2NpdHkgPT09IDAgJiYgc3RhcnRQb3NpdGlvbnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShhbmltSWQpO1xuICAgICAgICAgICAgICAgIGltZy5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkezB9cHgpYDtcbiAgICAgICAgICAgICAgICBpZiAod2lubmVyKVxuICAgICAgICAgICAgICAgICAgICB3aW5uZXIgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZXhwb3J0cy5zdG9wQ2FycyA9IHN0b3BDYXJzO1xuZnVuY3Rpb24gY2hlY2tXaW4oaWQsIGR1cmF0aW9uKSB7XG4gICAgY29uc3QgdXJscyA9IGAke3VybH0ke3R5cGVzXzEuUGF0aC53aW5uZXJzfS8ke2lkfWA7XG4gICAgY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcl8xLkxvYWRlcih1cmxzLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgbG9hZGVyLmdldFJlc3BScigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlID09PSA0MDQpIHtcbiAgICAgICAgICAgIGNvbnN0IHVybFR3byA9IGAke3VybH0ke3R5cGVzXzEuUGF0aC53aW5uZXJzfWA7XG4gICAgICAgICAgICBjb25zdCBhcmdzID0geyB1cmw6IHVybFR3bywgbWV0aG9kOiAnUE9TVCcsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH07XG4gICAgICAgICAgICBjcmVhdGVXaW4oaWQsIGR1cmF0aW9uLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxvYWRlci5nZXRSZXNwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHdpbiA9IGRhdGEud2lucyArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcmcgPSB7IHVybDogdXJscywgbWV0aG9kOiAnUFVUJywgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnRpbWUgPCBkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gZGF0YS50aW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZVdpbihpZCwgZHVyYXRpb24sIHdpbiwgYXJnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmNoZWNrV2luID0gY2hlY2tXaW47XG5mdW5jdGlvbiBjcmVhdGVXaW4oaWRDYXIsIGR1cmF0aW9uLCBhcmcpIHtcbiAgICBjb25zdCBvYmogPSB7XG4gICAgICAgIGlkOiBpZENhcixcbiAgICAgICAgd2luczogMSxcbiAgICAgICAgdGltZTogZHVyYXRpb25cbiAgICB9O1xuICAgIGNvbnN0IGRhdGFKc29uID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICBjb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyXzEuTG9hZGVyKGAke2FyZy51cmx9YCwge1xuICAgICAgICBtZXRob2Q6IGAke2FyZy5tZXRob2R9YCxcbiAgICAgICAgaGVhZGVyczogYXJnLmhlYWRlcnMsXG4gICAgICAgIGJvZHk6IGRhdGFKc29uXG4gICAgfSk7XG4gICAgbG9hZGVyLmdldFJlc3AoKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnRzLmNyZWF0ZVdpbiA9IGNyZWF0ZVdpbjtcbmZ1bmN0aW9uIHVwZGF0ZWVXaW4oaWQsIGR1cmF0aW9uLCB3aW4sIGFyZykge1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgICAgd2luczogd2luLFxuICAgICAgICB0aW1lOiBkdXJhdGlvblxuICAgIH07XG4gICAgY29uc3QgZGF0YUpzb24gPSBKU09OLnN0cmluZ2lmeShvYmopO1xuICAgIGNvbnN0IGxvYWRlciA9IG5ldyBMb2FkZXJfMS5Mb2FkZXIoYCR7YXJnLnVybH1gLCB7XG4gICAgICAgIG1ldGhvZDogYCR7YXJnLm1ldGhvZH1gLFxuICAgICAgICBoZWFkZXJzOiBhcmcuaGVhZGVycyxcbiAgICAgICAgYm9keTogZGF0YUpzb25cbiAgICB9KTtcbiAgICBsb2FkZXIuZ2V0UmVzcCgoZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMudXBkYXRlZVdpbiA9IHVwZGF0ZWVXaW47XG5mdW5jdGlvbiBzZXREaXNhYmxlZCgpIHtcbiAgICBjb25zdCBidXR0b25VcGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLVVQREFURScpO1xuICAgIGNvbnN0IGJ1dHRvbkNyZWF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tQ1JFQVRFJyk7XG4gICAgY29uc3QgYnV0dG9uUmFzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tUkFTRScpO1xuICAgIGNvbnN0IGJ1dHRvbnNSZW1vdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLVJFTU9WRScpO1xuICAgIGNvbnN0IGJ1dHRvbnNTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnV0dG9uLVNFTEVDVCcpO1xuICAgIGNvbnN0IGJ1dHRvbnNTdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tQScpO1xuICAgIGNvbnN0IGJ1dHRvbkdlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tR0VORVJBVEUnKTtcbiAgICBidXR0b25VcGRhdGUgPT09IG51bGwgfHwgYnV0dG9uVXBkYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b25VcGRhdGUuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgIGJ1dHRvbkNyZWF0ZSA9PT0gbnVsbCB8fCBidXR0b25DcmVhdGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbkNyZWF0ZS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgYnV0dG9uR2VuID09PSBudWxsIHx8IGJ1dHRvbkdlbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uR2VuLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICBidXR0b25SYXNlID09PSBudWxsIHx8IGJ1dHRvblJhc2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvblJhc2Uuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgIGJ1dHRvbnNSZW1vdmUgPT09IG51bGwgfHwgYnV0dG9uc1JlbW92ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uc1JlbW92ZS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgIH0pO1xuICAgIGJ1dHRvbnNTZWxlY3QgPT09IG51bGwgfHwgYnV0dG9uc1NlbGVjdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uc1NlbGVjdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgIH0pO1xuICAgIGJ1dHRvbnNTdGFydCA9PT0gbnVsbCB8fCBidXR0b25zU3RhcnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbnNTdGFydC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgIH0pO1xufVxuZXhwb3J0cy5zZXREaXNhYmxlZCA9IHNldERpc2FibGVkO1xuZnVuY3Rpb24gcmVtb3ZlRGlzYWJsZWQoKSB7XG4gICAgY29uc3QgYnV0dG9uVXBkYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1VUERBVEUnKTtcbiAgICBjb25zdCBidXR0b25DcmVhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLUNSRUFURScpO1xuICAgIGNvbnN0IGJ1dHRvbkdlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tR0VORVJBVEUnKTtcbiAgICBjb25zdCBidXR0b25zUmVtb3ZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi1SRU1PVkUnKTtcbiAgICBjb25zdCBidXR0b25SYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1SQVNFJyk7XG4gICAgY29uc3QgYnV0dG9uc1NlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXR0b24tU0VMRUNUJyk7XG4gICAgY29uc3QgYnV0dG9uc1N0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi1BJyk7XG4gICAgYnV0dG9uVXBkYXRlID09PSBudWxsIHx8IGJ1dHRvblVwZGF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogYnV0dG9uVXBkYXRlLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICBidXR0b25DcmVhdGUgPT09IG51bGwgfHwgYnV0dG9uQ3JlYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b25DcmVhdGUucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIGJ1dHRvbkdlbiA9PT0gbnVsbCB8fCBidXR0b25HZW4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbkdlbi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgYnV0dG9uUmFzZSA9PT0gbnVsbCB8fCBidXR0b25SYXNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b25SYXNlLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICBidXR0b25zUmVtb3ZlID09PSBudWxsIHx8IGJ1dHRvbnNSZW1vdmUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbnNSZW1vdmUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9KTtcbiAgICBidXR0b25zU2VsZWN0ID09PSBudWxsIHx8IGJ1dHRvbnNTZWxlY3QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGJ1dHRvbnNTZWxlY3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9KTtcbiAgICBidXR0b25zU3RhcnQgPT09IG51bGwgfHwgYnV0dG9uc1N0YXJ0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBidXR0b25zU3RhcnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBpdGVtLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB9KTtcbn1cbmV4cG9ydHMucmVtb3ZlRGlzYWJsZWQgPSByZW1vdmVEaXNhYmxlZDtcbmxldCBzb3J0V2luID0gJ2Rlc2MnO1xuZnVuY3Rpb24gc29ydFdpbm5lcnMoZSkge1xuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKTtcbiAgICBjb25zdCB3aW5DZWxsID0gdGFibGUgPT09IG51bGwgfHwgdGFibGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhYmxlLnJvd3NbMF0uY2VsbHNbM107XG4gICAgY29uc3QgdGltZUNlbGwgPSB0YWJsZSA9PT0gbnVsbCB8fCB0YWJsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFibGUucm93c1swXS5jZWxsc1s0XTtcbiAgICBpZiAoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAoZS50YXJnZXQuaW5uZXJIVE1MLmluY2x1ZGVzKCdXaW5zJykgfHwgZS50YXJnZXQuaW5uZXJIVE1MLmluY2x1ZGVzKCdCZXN0IHRpbWUgKHNlY29uZHMpJykpIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gd2luQ2VsbCAmJiAodGltZUNlbGwgPT09IG51bGwgfHwgdGltZUNlbGwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRpbWVDZWxsLmlubmVySFRNTFt0aW1lQ2VsbC5pbm5lckhUTUwubGVuZ3RoIC0gMV0pICE9PSAnKScpIHtcbiAgICAgICAgICAgICAgICBpZiAodGltZUNlbGwgIT0gbnVsbClcbiAgICAgICAgICAgICAgICAgICAgdGltZUNlbGwuaW5uZXJIVE1MID0gdGltZUNlbGwgPT09IG51bGwgfHwgdGltZUNlbGwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRpbWVDZWxsLmlubmVySFRNTC5zbGljZSgwLCB0aW1lQ2VsbC5pbm5lckhUTUwubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChlLnRhcmdldCA9PT0gdGltZUNlbGwgJiYgKHdpbkNlbGwgPT09IG51bGwgfHwgd2luQ2VsbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luQ2VsbC5pbm5lckhUTUxbd2luQ2VsbC5pbm5lckhUTUwubGVuZ3RoIC0gMV0pICE9PSAncycpIHtcbiAgICAgICAgICAgICAgICBpZiAod2luQ2VsbCAhPSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB3aW5DZWxsLmlubmVySFRNTCA9ICdXaW5zJzsgLyogd2luQ2VsbD8uaW5uZXJIVE1MLnNsaWNlKDAsIHdpbkNlbGwuaW5uZXJIVE1MLmxlbmd0aCAtIDEpICovXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbmFtZSA9IGUudGFyZ2V0LmlubmVySFRNTDtcbiAgICAgICAgICAgIGNvbnN0IHNvcnRPcmRlciA9IHNvcnRXaW47XG4gICAgICAgICAgICBpZiAobmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAncycgfHwgbmFtZVtuYW1lLmxlbmd0aCAtIDFdID09PSAnKScpIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gZS50YXJnZXQuaW5uZXJIVE1MO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IGUudGFyZ2V0LmlubmVySFRNTC5zbGljZSgwLCBlLnRhcmdldC5pbm5lckhUTUwubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc29ydE9yZGVyID09PSAnZGVzYycpIHtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5pbm5lckhUTUwgPSBgJHtuYW1lfSYjODU5MztgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuaW5uZXJIVE1MID0gYCR7bmFtZX0mIzg1OTU7YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuYW1lU29ydDtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5pbm5lckhUTUwuaW5jbHVkZXMoJ1dpbnMnKSkge1xuICAgICAgICAgICAgICAgIG5hbWVTb3J0ID0gJ3dpbnMnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmFtZVNvcnQgPSAndGltZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzb3J0KG5hbWVTb3J0LCBzb3J0T3JkZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5zb3J0V2lubmVycyA9IHNvcnRXaW5uZXJzO1xuZnVuY3Rpb24gc29ydChuYW1lLCBzb3J0T3JkZXIpIHtcbiAgICBpZiAoc29ydE9yZGVyID09PSAnZGVzYycpIHtcbiAgICAgICAgc29ydFdpbiA9ICdhc2MnO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgc29ydFdpbiA9ICdkZXNjJztcbiAgICB9XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd0YWJsZScpO1xuICAgIGlmICh0YWJsZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHVybHMgPSBgJHt1cmx9JHt0eXBlc18xLlBhdGgud2lubmVyc30/X3NvcnQ9JHtuYW1lfSZfb3JkZXI9JHtzb3J0T3JkZXJ9YDtcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcl8xLkxvYWRlcih1cmxzLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICAgIGxvYWRlci5nZXRSZXNwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gT2JqZWN0LnZhbHVlcyhkYXRhKTtcbiAgICAgICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRhYmxlLnJvd3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YWJsZS5yb3dzW2ldLmNlbGxzWzNdLmlubmVySFRNTCA9PT0gU3RyaW5nKGl0ZW0ud2lucykgJiYgdGFibGUucm93c1tpXS5jZWxsc1s0XS5pbm5lckhUTUwgPT09IFN0cmluZyhpdGVtLnRpbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuYXBwZW5kKHRhYmxlLnJvd3NbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuc29ydCA9IHNvcnQ7XG5mdW5jdGlvbiBzZXRMb2NhbGVTdG9yYWdlKG51bSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdudW0nLCBudW0pO1xufVxuZXhwb3J0cy5zZXRMb2NhbGVTdG9yYWdlID0gc2V0TG9jYWxlU3RvcmFnZTtcbmZ1bmN0aW9uIGdldExvY2FsZVN0b3JhZ2UoKSB7XG4gICAgbGV0IG51bTtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ251bScpICE9IG51bGwpIHtcbiAgICAgICAgbnVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ251bScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgbnVtID0gJzEnO1xuICAgIH1cbiAgICByZXR1cm4gbnVtO1xufVxuZXhwb3J0cy5nZXRMb2NhbGVTdG9yYWdlID0gZ2V0TG9jYWxlU3RvcmFnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FbGVtZW50Q3JlYXRvciA9IHZvaWQgMDtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXh0cmFuZW91cy1jbGFzc1xuY2xhc3MgRWxlbWVudENyZWF0b3Ige1xuICAgIHN0YXRpYyBjcmVhdGVFbGVtZW50KHBhcmFtcykge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocGFyYW1zLnRhZyk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQocGFyYW1zLmNsYXNzTmFtZSk7XG4gICAgICAgIGlmIChwYXJhbXMudGV4dCAhPSBudWxsKSB7XG4gICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IHBhcmFtcy50ZXh0O1xuICAgICAgICB9XG4gICAgICAgIC8qIGlmICgocGFyYW1zLmF0dHJpYnV0ZU5hbWUgIT0gbnVsbCkgJiYgKHBhcmFtcy5hdHRyaWJ1dGVWYWx1ZSAhPSBudWxsKSkge1xuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShwYXJhbXMuYXR0cmlidXRlTmFtZSwgcGFyYW1zLmF0dHJpYnV0ZVZhbHVlKVxuICAgICAgICB9ICovXG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVRhYmxlKHBhcmFtcykge1xuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocGFyYW1zLnRhZyk7XG4gICAgICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQocGFyYW1zLmNsYXNzTmFtZSk7XG4gICAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChwYXJhbXMudGFnVFIpO1xuICAgICAgICB0YWJsZS5hcHBlbmQodHIpO1xuICAgICAgICBjb25zdCBhcnIgPSBbJ051bWJlcicsICdDYXInLCAnTmFtZScsICdXaW5zJywgJ0Jlc3QgdGltZSAoc2Vjb25kcyknXTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IHBhcmFtcy5udW1Db2wpIHtcbiAgICAgICAgICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChwYXJhbXMudGFnVEgpO1xuICAgICAgICAgICAgdGguaW5uZXJIVE1MID0gYCR7YXJyW2ldfWA7XG4gICAgICAgICAgICB0ci5hcHBlbmQodGgpO1xuICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YWJsZTtcbiAgICB9XG4gICAgc3RhdGljIGNyZWF0ZVJvdyhwYXJhbXMsIGFycikge1xuICAgICAgICAvLyBjb25zdCB0YWJsZTogZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocGFyYW1zLnRhZylcbiAgICAgICAgLy8gdGFibGUuY2xhc3NMaXN0LmFkZChwYXJhbXMuY2xhc3NOYW1lKVxuICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQocGFyYW1zLnRhZ1RSKTtcbiAgICAgICAgLy8gdGFibGUuYXBwZW5kKHRyKVxuICAgICAgICAvLyBjb25zdCBhcnIgPSBbJ051bWJlcicsICdDYXInLCAnTmFtZScsICdXaW5zJywgJ0Jlc3QgdGltZSAoc2Vjb25kcyknXVxuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgcGFyYW1zLm51bUNvbCkge1xuICAgICAgICAgICAgY29uc3QgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHBhcmFtcy50YWdURCk7XG4gICAgICAgICAgICB0aC5pbm5lckhUTUwgPSBgJHthcnJbaV19YDtcbiAgICAgICAgICAgIHRyLmFwcGVuZCh0aCk7XG4gICAgICAgICAgICBpICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRyO1xuICAgIH1cbn1cbmV4cG9ydHMuRWxlbWVudENyZWF0b3IgPSBFbGVtZW50Q3JlYXRvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FbGVtZW50Q3JlYXRvckJ1dHRvbiA9IGV4cG9ydHMuYnV0dG9uc05hbWUgPSB2b2lkIDA7XG5jb25zdCBlbGVtQ3JlYXRlXzEgPSByZXF1aXJlKFwiLi9lbGVtQ3JlYXRlXCIpO1xudmFyIGJ1dHRvbnNOYW1lO1xuKGZ1bmN0aW9uIChidXR0b25zTmFtZSkge1xuICAgIGJ1dHRvbnNOYW1lW1wiaW5wdXRDcmVhdGVcIl0gPSBcImNyZWF0ZVwiO1xuICAgIGJ1dHRvbnNOYW1lW1wiYnV0dG9uQ3JlYXRlXCJdID0gXCJDUkVBVEVcIjtcbiAgICBidXR0b25zTmFtZVtcImlucHV0VXBkYXRlXCJdID0gXCJ1cGRhdGVcIjtcbiAgICBidXR0b25zTmFtZVtcImJ1dHRvblVwZGF0ZVwiXSA9IFwiVVBEQVRFXCI7XG4gICAgYnV0dG9uc05hbWVbXCJpbnB1dENvbG9yXCJdID0gXCJjb2xvclwiO1xuICAgIGJ1dHRvbnNOYW1lW1wiYnV0dG9uU2VsZWN0XCJdID0gXCJTRUxFQ1RcIjtcbiAgICBidXR0b25zTmFtZVtcImJ1dHRvblJlc2V0XCJdID0gXCJSRVNFVFwiO1xuICAgIGJ1dHRvbnNOYW1lW1wiYnV0dG9uUmVtb3ZlXCJdID0gXCJSRU1PVkVcIjtcbn0pKGJ1dHRvbnNOYW1lIHx8IChleHBvcnRzLmJ1dHRvbnNOYW1lID0gYnV0dG9uc05hbWUgPSB7fSkpO1xuY2xhc3MgRWxlbWVudENyZWF0b3JCdXR0b24ge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgY29uc3QgcGFyYW1idXR0b24gPSB7XG4gICAgICAgICAgICB0YWc6ICdidXR0b24nLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBgYnV0dG9uLSR7bmFtZX1gLFxuICAgICAgICAgICAgdGV4dDogYCR7bmFtZX1gXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYnV0dG9uID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQocGFyYW1idXR0b24pO1xuICAgIH1cbiAgICAvKiBhZGRMaW5jKCkge1xuICAgICAgY29uc3QgbGluayA9IEVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICBcbiAgICB9ICovXG4gICAgZ2V0QnV0dG9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uO1xuICAgIH1cbn1cbmV4cG9ydHMuRWxlbWVudENyZWF0b3JCdXR0b24gPSBFbGVtZW50Q3JlYXRvckJ1dHRvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FbGVtZW50Q3JlYXRvcklucHV0ID0gdm9pZCAwO1xuY29uc3QgZWxlbUNyZWF0ZV8xID0gcmVxdWlyZShcIi4vZWxlbUNyZWF0ZVwiKTtcbmNsYXNzIEVsZW1lbnRDcmVhdG9ySW5wdXQge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgY29uc3QgcGFyYW1JbnB1dCA9IHtcbiAgICAgICAgICAgIHRhZzogJ2lucHV0JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogYGlucHV0LSR7bmFtZX1gXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaW5wdXQgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChwYXJhbUlucHV0KTtcbiAgICB9XG4gICAgc2V0QXR0cmlidXRlKHBhcmFtc0lkKSB7XG4gICAgICAgIHBhcmFtc0lkLmZvckVhY2goKGl0ZW0pID0+IHsgdGhpcy5pbnB1dC5zZXRBdHRyaWJ1dGUoaXRlbS52YWx1ZSwgaXRlbS52YWx1ZU5hbWUpOyB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQ7XG4gICAgfVxuICAgIGdldElucHV0KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXQ7XG4gICAgfVxufVxuZXhwb3J0cy5FbGVtZW50Q3JlYXRvcklucHV0ID0gRWxlbWVudENyZWF0b3JJbnB1dDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Mb2FkZXIgPSB2b2lkIDA7XG4vLyBjb25zdCB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTozMDAwJ1xuY2xhc3MgTG9hZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihiYXNlbGluYywgYm9keSkge1xuICAgICAgICB0aGlzLmJhc2VMaW5rID0gYmFzZWxpbmM7XG4gICAgICAgIHRoaXMuYm9keSA9IGJvZHk7XG4gICAgfVxuICAgIGdldFJlc3AoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5sb2FkKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0UmVzcFJyKGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMubG9hZEVyKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgZ2V0UmVzcFJlc3AoY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5sb2FkUmVzcChjYWxsYmFjayk7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgZXJyb3JIdW5kbGVyKHJlcykge1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMSB8fCByZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgU29ycnksIGJ1dCB0aGVyZSBpcyAke3Jlcy5zdGF0dXN9IGVycm9yOiAke3Jlcy5zdGF0dXNUZXh0fWApO1xuICAgICAgICAgICAgICAgIC8vIHRocm93IEVycm9yKHJlcy5zdGF0dXNUZXh0KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDUwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBTb3JyeSwgYnV0IHRoZXJlIGlzICR7cmVzLnN0YXR1c30gZXJyb3I6ICR7cmVzLnN0YXR1c1RleHR9YCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLnVybCk7XG4gICAgICAgICAgICAgICAgLyogY29uc3QgdXJscyA9IGAke3Jlcy51cmwuc2xpY2UoMCwgcmVzLnVybC5sYXN0SW5kZXhPZignPScpKX09c3RvcHBlZGBcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IHJlcy51cmwuaW5kZXhPZignPScpXG4gICAgICAgICAgICAgICAgY29uc3QgZW5kID0gcmVzLnVybC5pbmRleE9mKCcmJylcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHJlcy51cmwuc2xpY2Uoc3RhcnQgKyAxLCBlbmQpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWQpXG4gICAgICAgICAgICAgICAgY29uc3QgaWRTdHIgPSBgbnVtJHtpZH1gXG4gICAgICAgICAgICAgICAgY29uc3QgY2FyQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZCA9ICR7aWRTdHJ9XWApXG4gICAgICAgICAgICAgICAgY29uc3QgaW1nQ2FyOiBIVE1MRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQgPSBjYXJCbG9jaz8ucXVlcnlTZWxlY3RvcignLmltZy1hdXRvJylcbiAgICAgICAgICAgICAgICBjb25zdCBmbGFnOiBIVE1MRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWQgPSBjYXJCbG9jaz8ucXVlcnlTZWxlY3RvcignLmZsYWcnKVxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGN1cnJQb3MgPSBpbWdDYXI/Lm9mZnNldExlZnRcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyUG9zID0gaW1nQ2FyPy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3VyclBvcylcbiAgICAgICAgICAgICAgICBjb25zdCBjb29yZCA9IGZsYWc/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnRcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb29yZClcbiAgICAgICAgICAgICAgICBjb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyKHVybHMsIHsgbWV0aG9kOiAnUEFUQ0gnIH0pXG4gICAgICAgICAgICAgICAgbG9hZGVyLmdldFJlc3AoKGRhdGE/OiBWZWxvY2l0eSkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICAgIGlmIChkYXRhICE9IG51bGwgJiYgaW1nQ2FyIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS52ZWxvY2l0eSlcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZShkYXRhPy52ZWxvY2l0eSwgZGF0YT8uZGlzdGFuY2UsIGltZ0NhciwgY3VyclBvcywgY29vcmQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkgKi9cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBsb2FkKGNhbGxiYWNrKSB7XG4gICAgICAgIHZvaWQgZmV0Y2godGhpcy5iYXNlTGluaywgdGhpcy5ib2R5KVxuICAgICAgICAgICAgLnRoZW4odGhpcy5lcnJvckh1bmRsZXIpXG4gICAgICAgICAgICAudGhlbihhc3luYyAocmVzKSA9PiBhd2FpdCByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHsgY2FsbGJhY2soZGF0YSk7IH0pXG4gICAgICAgICAgICAudGhlbigoZXJyKSA9PiB7IGNvbnNvbGUubG9nKGVycik7IH0pO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgIGxvYWRFcihjYWxsYmFjaykge1xuICAgICAgICB2b2lkIGZldGNoKHRoaXMuYmFzZUxpbmssIHRoaXMuYm9keSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4geyBjYWxsYmFjayhyZXNwb25zZS5zdGF0dXMpOyB9KTtcbiAgICB9XG4gICAgLyogcHJpdmF0ZSBsb2FkUmFzZSAoY2FsbGJhY2s6IENhbGxiYWNrPEpTT04+KTogdm9pZCB7XG4gICAgICB2b2lkIGZldGNoKHRoaXMuYmFzZUxpbmssIHRoaXMuYm9keSlcbiAgICAgICAgLnRoZW4odGhpcy5lcnJvckh1bmRsZXIpXG4gICAgICAgIC50aGVuKGFzeW5jIChyZXM6IFJlc3BvbnNlKTogUHJvbWlzZTxKU09OPiA9PiBhd2FpdCByZXMuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4geyBjYWxsYmFjayhkYXRhKSB9KVxuICAgICAgICAudGhlbigoZXJyKSA9PiB7IGNvbnNvbGUubG9nKGVycikgfSlcbiAgICB9ICovXG4gICAgbG9hZFJlc3AoY2FsbGJhY2spIHtcbiAgICAgICAgdm9pZCBmZXRjaCh0aGlzLmJhc2VMaW5rLCB0aGlzLmJvZHkpXG4gICAgICAgICAgICAudGhlbigocmVzcG9wc2UpID0+IHsgY2FsbGJhY2socmVzcG9wc2UuaGVhZGVycyk7IH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuTG9hZGVyID0gTG9hZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkVycm9ycyA9IGV4cG9ydHMuUGF0aCA9IHZvaWQgMDtcbnZhciBQYXRoO1xuKGZ1bmN0aW9uIChQYXRoKSB7XG4gICAgUGF0aFtcImdhcmFnZVwiXSA9IFwiL2dhcmFnZVwiO1xuICAgIFBhdGhbXCJlbmdpbmVcIl0gPSBcIi9lbmdpbmVcIjtcbiAgICBQYXRoW1wid2lubmVyc1wiXSA9IFwiL3dpbm5lcnNcIjtcbn0pKFBhdGggfHwgKGV4cG9ydHMuUGF0aCA9IFBhdGggPSB7fSkpO1xudmFyIEVycm9ycztcbihmdW5jdGlvbiAoRXJyb3JzKSB7XG59KShFcnJvcnMgfHwgKGV4cG9ydHMuRXJyb3JzID0gRXJyb3JzID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5BdXRvQmxvY2tHZW5lcmF0b3IgPSB2b2lkIDA7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWN5Y2xlXG5jb25zdCBjYWxsYmFja3NfMSA9IHJlcXVpcmUoXCIuLi8uLi9jYWxsYmFja3NcIik7XG5jb25zdCBlbGVtQ3JlYXRlXzEgPSByZXF1aXJlKFwiLi4vLi4vZWxlbUNyZWF0ZVwiKTtcbmNvbnN0IGVsZW1DcmVhdGVCdXR0b25fMSA9IHJlcXVpcmUoXCIuLi8uLi9lbGVtQ3JlYXRlQnV0dG9uXCIpO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi8uLi90eXBlc1wiKTtcbnJlcXVpcmUoXCIuL3ZpZXdHYXJhZ2UuY3NzXCIpO1xuY29uc3QgdXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMCc7XG5jbGFzcyBBdXRvQmxvY2tHZW5lcmF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2Nhci1ibG9jaydcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmFzZVBhcmFtcyA9IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdyYXNlLWJ1dHRvbnMnXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJhc2VCbG9jayA9IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdyYXNlLWJsb2NrJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjYXJOYW1lID0ge1xuICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdjYXItbmFtZScsXG4gICAgICAgICAgICB0ZXh0OiBgJHtkYXRhLm5hbWV9YFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBpbWdQYXJhbXMgPSB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnaW1nLWF1dG8nLFxuICAgICAgICAgICAgLy8gZGF0YTogJy9hc3NldHMvY2FyNi5zdmcnLFxuICAgICAgICAgICAgY29sb3I6IGAke2RhdGEuY29sb3J9YFxuICAgICAgICAgICAgLy8gc3JjOiAnJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBmbGFnUGFyYW1zID0ge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2ZsYWcnXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYmxvY2sgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChwYXJhbXMpO1xuICAgICAgICB0aGlzLmJ1dHRvblNlbGVjdCA9IG5ldyBlbGVtQ3JlYXRlQnV0dG9uXzEuRWxlbWVudENyZWF0b3JCdXR0b24oJ1NFTEVDVCcpLmdldEJ1dHRvbignc2VsZWN0Jyk7XG4gICAgICAgIHRoaXMuYnV0dG9uUmVtb3ZlID0gbmV3IGVsZW1DcmVhdGVCdXR0b25fMS5FbGVtZW50Q3JlYXRvckJ1dHRvbignUkVNT1ZFJykuZ2V0QnV0dG9uKCdyZW1vdmUnKTtcbiAgICAgICAgdGhpcy5ibG9ja1Jhc2UgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChyYXNlUGFyYW1zKTtcbiAgICAgICAgdGhpcy5idXR0b25TdGFydCA9IG5ldyBlbGVtQ3JlYXRlQnV0dG9uXzEuRWxlbWVudENyZWF0b3JCdXR0b24oJ0EnKS5nZXRCdXR0b24oJ3N0YXJ0Jyk7XG4gICAgICAgIHRoaXMuYnV0dG9uU3RvcCA9IG5ldyBlbGVtQ3JlYXRlQnV0dG9uXzEuRWxlbWVudENyZWF0b3JCdXR0b24oJ0InKS5nZXRCdXR0b24oJ3N0b3AnKTtcbiAgICAgICAgdGhpcy5idXR0b25TdG9wLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgdGhpcy5yYXNlQmxvY2sgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChyYXNlQmxvY2spO1xuICAgICAgICB0aGlzLmZsYWcgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChmbGFnUGFyYW1zKTtcbiAgICAgICAgdGhpcy5jYXJOYW1lID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQoY2FyTmFtZSk7XG4gICAgICAgIHRoaXMuaW1nID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQoaW1nUGFyYW1zKTtcbiAgICAgICAgdGhpcy5ibG9ja1Jhc2UuYXBwZW5kKHRoaXMuYnV0dG9uU3RhcnQsIHRoaXMuYnV0dG9uU3RvcCwgdGhpcy5pbWcsIHRoaXMuZmxhZyk7XG4gICAgICAgIHRoaXMucmFzZUJsb2NrLmFwcGVuZCh0aGlzLmJsb2NrUmFzZSwgdGhpcy5mbGFnKTtcbiAgICAgICAgdGhpcy5pbWcuaW5uZXJIVE1MID0gYDxzdmcgY2xhc3M9XCJjYXJcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgd2lkdGg9XCI1MHB4XCIgaGVpZ2h0PVwiNTBweFwiIHZpZXdCb3g9XCIwIC00My45MiAxMjIuODggMTIyLjg4XCIgdmVyc2lvbj1cIjEuMVwiIGlkPVwiTGF5ZXJfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiAgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyMi44OCAzNS4wM1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG5cbiAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+LnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDt9PC9zdHlsZT5cbiAgICBcbiAgICA8Zz5cbiAgICBcbiAgICA8cGF0aCBjbGFzcz1cInN0MFwiIGQ9XCJNOTkuNDIsMTMuNTdjNS45MywwLDEwLjczLDQuOCwxMC43MywxMC43M2MwLDUuOTMtNC44LDEwLjczLTEwLjczLDEwLjczcy0xMC43My00LjgtMTAuNzMtMTAuNzMgQzg4LjY5LDE4LjM3LDkzLjQ5LDEzLjU3LDk5LjQyLDEzLjU3TDk5LjQyLDEzLjU3eiBNNzkuMDUsNWMtMC41OSwxLjI3LTEuMDYsMi42OS0xLjQyLDQuMjNjLTAuODIsMi41NywwLjM5LDMuMTEsMy4xOSwyLjA2IGMyLjA2LTEuMjMsNC4xMi0yLjQ3LDYuMTgtMy43YzEuMDUtMC43NCwxLjU1LTEuNDcsMS4zOC0yLjE5Yy0wLjM0LTEuNDItMy4wOC0yLjE2LTUuMzMtMi42QzgwLjE5LDIuMjMsODAuMzksMi4xMSw3OS4wNSw1IEw3OS4wNSw1eiBNMjMuODYsMTkuMzFjMi43NSwwLDQuOTksMi4yMyw0Ljk5LDQuOTljMCwyLjc1LTIuMjMsNC45OS00Ljk5LDQuOTljLTIuNzUsMC00Ljk5LTIuMjMtNC45OS00Ljk5IEMxOC44NywyMS41NCwyMS4xLDE5LjMxLDIzLjg2LDE5LjMxTDIzLjg2LDE5LjMxeiBNOTkuNDIsMTkuMzFjMi43NSwwLDQuOTksMi4yMyw0Ljk5LDQuOTljMCwyLjc1LTIuMjMsNC45OS00Ljk5LDQuOTkgYy0yLjc1LDAtNC45OS0yLjIzLTQuOTktNC45OUM5NC40MywyMS41NCw5Ni42NiwxOS4zMSw5OS40MiwxOS4zMUw5OS40MiwxOS4zMXogTTQ2LjE0LDEyLjVjMi43Ny0yLjk3LDUuOTctNC45LDkuNjctNi43NiBjOC4xLTQuMDgsMTMuMDYtMy41OCwyMS42Ni0zLjU4bC0yLjg5LDcuNWMtMS4yMSwxLjYtMi41OCwyLjczLTQuNjYsMi44NEg0Ni4xNEw0Ni4xNCwxMi41eiBNMjMuODYsMTMuNTcgYzUuOTMsMCwxMC43Myw0LjgsMTAuNzMsMTAuNzNjMCw1LjkzLTQuOCwxMC43My0xMC43MywxMC43M3MtMTAuNzMtNC44LTEwLjczLTEwLjczQzEzLjEzLDE4LjM3LDE3LjkzLDEzLjU3LDIzLjg2LDEzLjU3IEwyMy44NiwxMy41N3ogTTQwLjgyLDEwLjNjMy41Mi0yLjE5LDcuMzUtNC4xNSwxMS41OS01LjgyYzEyLjkxLTUuMDksMjIuNzgtNiwzNi4zMi0xLjljNC4wOCwxLjU1LDguMTYsMy4xLDEyLjI0LDQuMDYgYzQuMDMsMC45NiwyMS40OCwxLjg4LDIxLjkxLDQuODFsLTQuMzEsNS4xNWMxLjU3LDEuMzYsMi44NSwzLjAzLDMuMzIsNS42NGMtMC4xMywxLjYxLTAuNTcsMi45Ni0xLjMzLDQuMDQgYy0xLjI5LDEuODUtNS4wNywzLjc2LTcuMTEsMi42N2MtMC42NS0wLjM1LTEuMDItMS4wNS0xLjAxLTIuMjRjMC4wNi0yMy45LTI4Ljc5LTIxLjE4LTI2LjYyLDIuODJIMzUuNDggQzQ0LjgsNS40OSw1LjA0LDUuNCwxMi4xLDI4LjdDOS42MiwzMS4zOCwzLjc3LDI3LjM0LDAsMTguNzVjMS4wMy0xLjAyLDIuMTYtMS45OSwzLjQyLTIuODljLTAuMDYtMC4wNSwwLjA2LDAuMTktMC4xNS0wLjE3IGMtMC4yMS0wLjM2LDAuNTEtMS44NywxLjk5LTIuNzRDMTMuMDIsOC40LDMxLjczLDguNTIsNDAuODIsMTAuM0w0MC44MiwxMC4zelwiLz5cbiAgICBcbiAgICA8L2c+XG4gICAgXG4gICAgPC9zdmc+YDtcbiAgICAgICAgLyogaWYgKHRoaXMuaW1nLmZpcnN0RWxlbWVudENoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpICovIHRoaXMuaW1nLnN0eWxlLmNvbG9yID0gYCR7ZGF0YS5jb2xvcn1gO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmltZy5zdHlsZS5jb2xvcilcbiAgICAgICAgY29uc3Qgc3RhcnRQb3NpdGlvbnMgPSB0aGlzLmltZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICB0aGlzLmJsb2NrLmFwcGVuZCh0aGlzLmJ1dHRvblNlbGVjdCwgdGhpcy5idXR0b25SZW1vdmUsIHRoaXMuY2FyTmFtZSwgdGhpcy5yYXNlQmxvY2spO1xuICAgICAgICB0aGlzLmJ1dHRvblJlbW92ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkcyA9ICgwLCBjYWxsYmFja3NfMS5nZXRJZCkoKTtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmJsb2NrLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgICAgbGV0IGlkO1xuICAgICAgICAgICAgaWYgKGF0dHIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlkID0gYXR0ci5zbGljZSgzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlkID0gZGF0YS5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVybHMgPSBgJHt1cmx9JHt0eXBlc18xLlBhdGguZ2FyYWdlfS8ke2lkfWA7XG4gICAgICAgICAgICBjb25zdCBpZFR3byA9ICtpZHNbaWRzLmxlbmd0aCAtIDFdICsgMTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkVHdvKTtcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB7IHVybDogdXJscywgbWV0aG9kOiAnREVMRVRFJyB9O1xuICAgICAgICAgICAgKDAsIGNhbGxiYWNrc18xLnJlbW92ZUNhcikoYXJncywgaWQpO1xuICAgICAgICAgICAgdGhpcy5ibG9jay5yZW1vdmUoKTtcbiAgICAgICAgICAgICgwLCBjYWxsYmFja3NfMS5jb3VudENhcnMpKCk7XG4gICAgICAgICAgICAoMCwgY2FsbGJhY2tzXzEuZmluZElkKShpZFR3byk7XG4gICAgICAgICAgICAvKiBjb25zdCB1cmxUd28gPSBgJHt1cmx9JHtQYXRoLmdhcmFnZX0vJHtpZFR3b31gXG4gICAgICAgICAgICBjb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyKHVybFR3bywgeyBtZXRob2Q6ICdHRVQnIH0pXG4gICAgICAgICAgICBsb2FkZXIuZ2V0UmVzcCgoZGF0YVR3bz86IERhdGEpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGRhdGFUd28gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFUd28pXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBndWFyZC1mb3ItaW5cbiAgICAgICAgICAgICAgICAvLyBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGFUd28pXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsdWVzKVxuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrQ2FyID0gbmV3IEF1dG9CbG9ja0dlbmVyYXRvcihkYXRhVHdvKS5nZXRBdXRvQmxvY2soKVxuICAgICAgICAgICAgICAgIGJsb2NrQ2FyLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGBudW0ke2RhdGFUd28uaWR9YClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhibG9ja0NhcilcbiAgICAgICAgICAgICAgICBjb25zdCBnYXJhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FyYWdlLWJsb2NrJylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhnYXJhZ2UpXG4gICAgICAgICAgICAgICAgZ2FyYWdlPy5hcHBlbmQoYmxvY2tDYXIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pICovXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJ1dHRvblNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmJsb2NrLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgICAgbGV0IGlkO1xuICAgICAgICAgICAgaWYgKGF0dHIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlkID0gYXR0ci5zbGljZSgzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlkID0gZGF0YS5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHVybHMgPSBgJHt1cmx9JHt0eXBlc18xLlBhdGguZ2FyYWdlfS8ke2lkfWA7XG4gICAgICAgICAgICBjb25zdCBpbnB1dFVwZGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dC11cGRhdGUnKTtcbiAgICAgICAgICAgIGlucHV0VXBkYXRlID09PSBudWxsIHx8IGlucHV0VXBkYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnB1dFVwZGF0ZS5mb2N1cygpO1xuICAgICAgICAgICAgaWYgKGlucHV0VXBkYXRlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpbnB1dFVwZGF0ZSA9PT0gbnVsbCB8fCBpbnB1dFVwZGF0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5wdXRVcGRhdGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGAke2RhdGEubmFtZX1gKTtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRVcGRhdGUuZm9ybSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3VtID0geyBmb3JtOiBpbnB1dFVwZGF0ZS5mb3JtLCB1cmw6IHVybHMsIG1ldGhvZDogJ1BVVCcsIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9IH07XG4gICAgICAgICAgICAgICAgICAgICgwLCBjYWxsYmFja3NfMS5zdWJtaXRGb3JtKShhcmd1bSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idXR0b25TdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmJsb2NrLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgICAgKDAsIGNhbGxiYWNrc18xLnNldERpc2FibGVkKSgpO1xuICAgICAgICAgICAgbGV0IGlkO1xuICAgICAgICAgICAgaWYgKGF0dHIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlkID0gTnVtYmVyKGF0dHIuc2xpY2UoMykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWQgPSBkYXRhLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKDAsIGNhbGxiYWNrc18xLnJhc2VUaHJlZSkodGhpcy5ibG9jaywgaWQpO1xuICAgICAgICAgICAgdGhpcy5idXR0b25TdGFydC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibHJlZCcpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYnV0dG9uU3RvcC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblN0b3AucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idXR0b25TdG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgKDAsIGNhbGxiYWNrc18xLnJlbW92ZURpc2FibGVkKSgpO1xuICAgICAgICAgICAgY29uc3QgZmxhZyA9IHRoaXMuZmxhZy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9ucyA9IHRoaXMuaW1nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgICAgICAgICBjb25zdCBudW0gPSBzdGFydFBvc2l0aW9ucyAtIGN1cnJlbnRQb3NpdGlvbnMgKyA0MDtcbiAgICAgICAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmJsb2NrLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgICAgICAgICAgbGV0IGlkO1xuICAgICAgICAgICAgaWYgKGF0dHIgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlkID0gTnVtYmVyKGF0dHIuc2xpY2UoMykpO1xuICAgICAgICAgICAgICAgICgwLCBjYWxsYmFja3NfMS5zdG9wQ2FycykoTnVtYmVyKGlkKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbWcuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHswfXB4KWA7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25TdGFydC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25TdG9wLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEF1dG9CbG9jaygpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuaW1nLmZpcnN0RWxlbWVudENoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHRoaXMuaW1nLmZpcnN0RWxlbWVudENoaWxkLnN0eWxlLmZpbGwgPSBgJHt9YFxuICAgICAgICByZXR1cm4gdGhpcy5ibG9jaztcbiAgICB9XG59XG5leHBvcnRzLkF1dG9CbG9ja0dlbmVyYXRvciA9IEF1dG9CbG9ja0dlbmVyYXRvcjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5IZWFkZXJHYXJhZ2UgPSB2b2lkIDA7XG5jb25zdCBlbGVtQ3JlYXRlXzEgPSByZXF1aXJlKFwiLi4vLi4vZWxlbUNyZWF0ZVwiKTtcbmNvbnN0IGVsZW1DcmVhdGVJbnB1dF8xID0gcmVxdWlyZShcIi4uLy4uL2VsZW1DcmVhdGVJbnB1dFwiKTtcbmNvbnN0IGVsZW1DcmVhdGVCdXR0b25fMSA9IHJlcXVpcmUoXCIuLi8uLi9lbGVtQ3JlYXRlQnV0dG9uXCIpO1xuY29uc3QgZ2VuZXJhdGVDYXJzQmxvY2tfMSA9IHJlcXVpcmUoXCIuL2dlbmVyYXRlQ2Fyc0Jsb2NrXCIpO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi8uLi90eXBlc1wiKTtcbmNvbnN0IGNhbGxiYWNrc18xID0gcmVxdWlyZShcIi4uLy4uL2NhbGxiYWNrc1wiKTtcbmNvbnN0IExvYWRlcl8xID0gcmVxdWlyZShcIi4uLy4uL2xvYWRlci9Mb2FkZXJcIik7XG5jb25zdCB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTozMDAwJztcbmNvbnN0IHBhdGggPSB7XG4gICAgZ2FyYWdlOiAnL2dhcmFnZScsXG4gICAgd2lubmVyczogJy93aW5uZXJzJ1xufTtcbmNsYXNzIEhlYWRlckdhcmFnZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHN1cGVyKClcbiAgICAgICAgY29uc3QgaGVhZGVyID0ge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2hlYWRlci1nYXJhZ2UnXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGZvcm1DcmVhdGUgPSB7XG4gICAgICAgICAgICB0YWc6ICdmb3JtJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2Zvcm0tY3JlYXRlJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBmb3JtQ2hhbmdlID0ge1xuICAgICAgICAgICAgdGFnOiAnZm9ybScsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdmb3JtLWNoYW5nZSdcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zQnV0dG9ucyA9IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdidXR0b25zLWJsb2NrJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVJbnB1dENyZWF0ZSA9IFt7IHZhbHVlOiAndHlwZScsIHZhbHVlTmFtZTogJ3RleHQnIH0sIHsgdmFsdWU6ICduYW1lJywgdmFsdWVOYW1lOiAnbmFtZScgfSwgeyB2YWx1ZTogJ3ZhbHVlJywgdmFsdWVOYW1lOiAnJyB9XTtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlSW5wdXRVcGRhdGUgPSBbeyB2YWx1ZTogJ3R5cGUnLCB2YWx1ZU5hbWU6ICd0ZXh0JyB9LCB7IHZhbHVlOiAnbmFtZScsIHZhbHVlTmFtZTogJ25hbWUnIH0sIHsgdmFsdWU6ICd2YWx1ZScsIHZhbHVlTmFtZTogJycgfV07XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZUlucHV0Q29sb3IgPSBbeyB2YWx1ZTogJ3R5cGUnLCB2YWx1ZU5hbWU6ICdjb2xvcicgfSwgeyB2YWx1ZTogJ25hbWUnLCB2YWx1ZU5hbWU6ICdjb2xvcicgfSwgeyB2YWx1ZTogJ3ZhbHVlJywgdmFsdWVOYW1lOiAnJyB9XTtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChoZWFkZXIpO1xuICAgICAgICB0aGlzLmZvcm1DcmVhdGUgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChmb3JtQ3JlYXRlKTtcbiAgICAgICAgdGhpcy5pbnB1dENyZWF0ZSA9IG5ldyBlbGVtQ3JlYXRlSW5wdXRfMS5FbGVtZW50Q3JlYXRvcklucHV0KCdjcmVhdGUnKS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlSW5wdXRDcmVhdGUpO1xuICAgICAgICB0aGlzLmlucHV0U2V0Q29sb3IgPSBuZXcgZWxlbUNyZWF0ZUlucHV0XzEuRWxlbWVudENyZWF0b3JJbnB1dCgnY29sb3InKS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlSW5wdXRDb2xvcik7XG4gICAgICAgIHRoaXMuYnV0dG9uQ3JlYXRlID0gbmV3IGVsZW1DcmVhdGVCdXR0b25fMS5FbGVtZW50Q3JlYXRvckJ1dHRvbignQ1JFQVRFJykuZ2V0QnV0dG9uKCdjcmVhdGUnKTtcbiAgICAgICAgdGhpcy5mb3JtQ3JlYXRlLmFwcGVuZCh0aGlzLmlucHV0Q3JlYXRlLCB0aGlzLmlucHV0U2V0Q29sb3IsIHRoaXMuYnV0dG9uQ3JlYXRlKTtcbiAgICAgICAgdGhpcy5mb3JtQ2hhbmdlID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQoZm9ybUNoYW5nZSk7XG4gICAgICAgIHRoaXMuaW5wdXRVcGRhdGUgPSBuZXcgZWxlbUNyZWF0ZUlucHV0XzEuRWxlbWVudENyZWF0b3JJbnB1dCgndXBkYXRlJykuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZUlucHV0VXBkYXRlKTtcbiAgICAgICAgdGhpcy5pbnB1dENoYW5nZUNvbG9yID0gbmV3IGVsZW1DcmVhdGVJbnB1dF8xLkVsZW1lbnRDcmVhdG9ySW5wdXQoJ2NvbG9yJykuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZUlucHV0Q29sb3IpO1xuICAgICAgICB0aGlzLmJ1dHRvblVwZGF0ZSA9IG5ldyBlbGVtQ3JlYXRlQnV0dG9uXzEuRWxlbWVudENyZWF0b3JCdXR0b24oJ1VQREFURScpLmdldEJ1dHRvbigndXBkYXRlJyk7XG4gICAgICAgIHRoaXMuZm9ybUNoYW5nZS5hcHBlbmQodGhpcy5pbnB1dFVwZGF0ZSwgdGhpcy5pbnB1dENoYW5nZUNvbG9yLCB0aGlzLmJ1dHRvblVwZGF0ZSk7XG4gICAgICAgIHRoaXMuYnV0dG9uc0hlYWRlciA9IGVsZW1DcmVhdGVfMS5FbGVtZW50Q3JlYXRvci5jcmVhdGVFbGVtZW50KHBhcmFtc0J1dHRvbnMpO1xuICAgICAgICB0aGlzLmJ1dHRvblJhc2UgPSBuZXcgZWxlbUNyZWF0ZUJ1dHRvbl8xLkVsZW1lbnRDcmVhdG9yQnV0dG9uKCdSQVNFJykuZ2V0QnV0dG9uKCdyYXNlJyk7XG4gICAgICAgIHRoaXMuYnV0dG9uUmVzZXQgPSBuZXcgZWxlbUNyZWF0ZUJ1dHRvbl8xLkVsZW1lbnRDcmVhdG9yQnV0dG9uKCdSRVNFVCcpLmdldEJ1dHRvbigncmVzZXQnKTtcbiAgICAgICAgdGhpcy5idXR0b25SZXNldC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgIHRoaXMuYnV0dG9uR2VuZXJhdGUgPSBuZXcgZWxlbUNyZWF0ZUJ1dHRvbl8xLkVsZW1lbnRDcmVhdG9yQnV0dG9uKCdHRU5FUkFURScpLmdldEJ1dHRvbignZ2VuZXJhdGVDYXJzJyk7XG4gICAgICAgIHRoaXMuYnV0dG9uc0hlYWRlci5hcHBlbmQodGhpcy5idXR0b25SYXNlLCB0aGlzLmJ1dHRvblJlc2V0LCB0aGlzLmJ1dHRvbkdlbmVyYXRlKTtcbiAgICAgICAgdGhpcy5oZWFkZXIuYXBwZW5kKHRoaXMuZm9ybUNyZWF0ZSwgdGhpcy5mb3JtQ2hhbmdlLCB0aGlzLmJ1dHRvbnNIZWFkZXIpO1xuICAgICAgICB0aGlzLmJ1dHRvblJhc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAoMCwgY2FsbGJhY2tzXzEuc2V0RGlzYWJsZWQpKCk7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblJlc2V0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IGlkcyA9ICgwLCBjYWxsYmFja3NfMS5nZXRJZCkoKTtcbiAgICAgICAgICAgIGlkcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pZD1udW0ke2l0ZW19XWApO1xuICAgICAgICAgICAgICAgIGlmIChlbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KVxuICAgICAgICAgICAgICAgICAgICAoMCwgY2FsbGJhY2tzXzEuYW5pbWF0ZUNhcikoZWwsIE51bWJlcihpdGVtKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnV0dG9uUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblJhc2UucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgdGhpcy5idXR0b25SZXNldC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAoMCwgY2FsbGJhY2tzXzEucmVtb3ZlRGlzYWJsZWQpKCk7XG4gICAgICAgICAgICBjb25zdCBpZHMgPSAoMCwgY2FsbGJhY2tzXzEuZ2V0SWQpKCk7XG4gICAgICAgICAgICBpZHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKGl0ZW0pO1xuICAgICAgICAgICAgICAgICgwLCBjYWxsYmFja3NfMS5zdG9wQ2FycykoaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJ1dHRvbkdlbmVyYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXJyID0gKDAsIGNhbGxiYWNrc18xLmdlbmVyYXRlQ2Fyc1R3bykoY2FsbGJhY2tzXzEuc2h1ZmZsZSk7XG4gICAgICAgICAgICBjb25zdCB1cmxzID0gYCR7dXJsfSR7dHlwZXNfMS5QYXRoLmdhcmFnZX1gO1xuICAgICAgICAgICAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBvYmpKc29uID0gSlNPTi5zdHJpbmdpZnkoaXRlbSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcl8xLkxvYWRlcih1cmxzLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogb2JqSnNvblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxvYWRlci5nZXRSZXNwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrQ2FyID0gbmV3IGdlbmVyYXRlQ2Fyc0Jsb2NrXzEuQXV0b0Jsb2NrR2VuZXJhdG9yKGRhdGEpLmdldEF1dG9CbG9jaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tDYXIuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgYG51bSR7ZGF0YS5pZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGdhcmFnZUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhcmFnZS1ibG9jaycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhcmFnZUJsb2NrICE9IG51bGwgJiYgZ2FyYWdlQmxvY2suY2hpbGRyZW4ubGVuZ3RoIDwgNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcmFnZUJsb2NrLmFwcGVuZChibG9ja0Nhcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgKDAsIGNhbGxiYWNrc18xLmNvdW50Q2FycykoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2xpY2tGb3JtQ3JlYXRlKCk7XG4gICAgICAgIC8vIHRoaXMuY2xpY2tGb3JtVXBkYXRlKClcbiAgICB9XG4gICAgZ2V0SGVhZGVyR2FyYWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXI7XG4gICAgfVxuICAgIGdldElucHV0Q3JlYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dENyZWF0ZTtcbiAgICB9XG4gICAgZ2V0QnV0dG9uQ3JlYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idXR0b25DcmVhdGU7XG4gICAgfVxuICAgIGdldEZvcm1DcmVhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm1DcmVhdGU7XG4gICAgfVxuICAgIGdldElucHV0Q2hhbmdlQ29sb3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0Q2hhbmdlQ29sb3I7XG4gICAgfVxuICAgIGNsaWNrRm9ybUNyZWF0ZSgpIHtcbiAgICAgICAgY29uc3QgdXJscyA9IGAke3VybH0ke3R5cGVzXzEuUGF0aC5nYXJhZ2V9YDtcbiAgICAgICAgaWYgKHRoaXMuZm9ybUNyZWF0ZSBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgYXJndW0gPSB7IGZvcm06IHRoaXMuZm9ybUNyZWF0ZSwgdXJsOiB1cmxzLCBtZXRob2Q6ICdQT1NUJywgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0gfTtcbiAgICAgICAgICAgICgwLCBjYWxsYmFja3NfMS5zdWJtaXRGb3JtKShhcmd1bSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnRzLkhlYWRlckdhcmFnZSA9IEhlYWRlckdhcmFnZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HYXJhZ2VCbG9jayA9IHZvaWQgMDtcbmNvbnN0IGdlbmVyYXRlQ2Fyc0Jsb2NrXzEgPSByZXF1aXJlKFwiLi9nZW5lcmF0ZUNhcnNCbG9ja1wiKTtcbmNvbnN0IGVsZW1DcmVhdGVfMSA9IHJlcXVpcmUoXCIuLi8uLi9lbGVtQ3JlYXRlXCIpO1xuY29uc3QgZWxlbUNyZWF0ZUJ1dHRvbl8xID0gcmVxdWlyZShcIi4uLy4uL2VsZW1DcmVhdGVCdXR0b25cIik7XG5jb25zdCBMb2FkZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9sb2FkZXIvTG9hZGVyXCIpO1xuY29uc3QgY2FsbGJhY2tzXzEgPSByZXF1aXJlKFwiLi4vLi4vY2FsbGJhY2tzXCIpO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi8uLi90eXBlc1wiKTtcbnJlcXVpcmUoXCIuL3ZpZXdHYXJhZ2UuY3NzXCIpO1xuY29uc3QgdXJsID0gJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMCc7XG5jbGFzcyBHYXJhZ2VCbG9jayB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGNhcnNOdW0gPSA0O1xuICAgICAgICBsZXQgbnVtUGFnZXMgPSAxO1xuICAgICAgICBjb25zdCBnYXJhZ2VQYWdlID0ge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2dhcmFnZS1wYWdlJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBnYXJhZ2VCbG9jayA9IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdnYXJhZ2UtYmxvY2snXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtVGl0bGUgPSB7XG4gICAgICAgICAgICB0YWc6ICdoMicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdnYXJhZ2UtdGl0bGUnLFxuICAgICAgICAgICAgdGV4dDogJ0dBUkFHRSdcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbnVtQ2FycyA9IHtcbiAgICAgICAgICAgIHRhZzogJ3NwYW4nLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnY2Fycy1udW0nLFxuICAgICAgICAgICAgdGV4dDogYCR7Y2Fyc051bX1gXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtVGl0bGVUd28gPSB7XG4gICAgICAgICAgICB0YWc6ICdoMycsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdnYXJhZ2UtdGl0bGVQYWdlJyxcbiAgICAgICAgICAgIHRleHQ6ICdQYWdlJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBudW1wYWdlID0ge1xuICAgICAgICAgICAgdGFnOiAnc3BhbicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdjYXJzLW51bScsXG4gICAgICAgICAgICB0ZXh0OiBgIyR7bnVtUGFnZXN9YFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbWJsb2NrQ2hhbmdlVmlldyA9IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdidXR0b25zLWNoYW5nZSdcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgYmxvY1RpdGxlID0ge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3RpdGxlLWJsb2NrJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnRpdGxlR2FyYWdlID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQocGFyYW1UaXRsZSk7XG4gICAgICAgIHRoaXMubnVtQ2FycyA9IGVsZW1DcmVhdGVfMS5FbGVtZW50Q3JlYXRvci5jcmVhdGVFbGVtZW50KG51bUNhcnMpO1xuICAgICAgICB0aGlzLnRpdGxlR2FyYWdlLmFwcGVuZCh0aGlzLm51bUNhcnMpO1xuICAgICAgICB0aGlzLm51bVBhZ2UgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChudW1wYWdlKTtcbiAgICAgICAgdGhpcy50aXRsZVBhZ2UgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChwYXJhbVRpdGxlVHdvKTtcbiAgICAgICAgdGhpcy50aXRsZVBhZ2UuYXBwZW5kKHRoaXMubnVtUGFnZSk7XG4gICAgICAgIHRoaXMuYmxvY2tUaXRsZSA9IGVsZW1DcmVhdGVfMS5FbGVtZW50Q3JlYXRvci5jcmVhdGVFbGVtZW50KGJsb2NUaXRsZSk7XG4gICAgICAgIHRoaXMuYmxvY2tDaGFuZ2VQYWdlcyA9IGVsZW1DcmVhdGVfMS5FbGVtZW50Q3JlYXRvci5jcmVhdGVFbGVtZW50KHBhcmFtYmxvY2tDaGFuZ2VWaWV3KTtcbiAgICAgICAgdGhpcy5idXR0b25OZXh0ID0gbmV3IGVsZW1DcmVhdGVCdXR0b25fMS5FbGVtZW50Q3JlYXRvckJ1dHRvbignTkVYVCcpLmdldEJ1dHRvbignbmV4dCcpO1xuICAgICAgICB0aGlzLmJ1dHRvblByZXYgPSBuZXcgZWxlbUNyZWF0ZUJ1dHRvbl8xLkVsZW1lbnRDcmVhdG9yQnV0dG9uKCdQUkVWJykuZ2V0QnV0dG9uKCdwcmV2Jyk7XG4gICAgICAgIHRoaXMuYnV0dG9uUHJldi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgIHRoaXMuYmxvY2tDaGFuZ2VQYWdlcy5hcHBlbmQodGhpcy5idXR0b25QcmV2LCB0aGlzLmJ1dHRvbk5leHQpO1xuICAgICAgICB0aGlzLmJsb2NrVGl0bGUuYXBwZW5kKHRoaXMudGl0bGVHYXJhZ2UpO1xuICAgICAgICB0aGlzLmdhcmFnZSA9IGVsZW1DcmVhdGVfMS5FbGVtZW50Q3JlYXRvci5jcmVhdGVFbGVtZW50KGdhcmFnZVBhZ2UpO1xuICAgICAgICB0aGlzLmdhcmFnZUJsb2NrID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQoZ2FyYWdlQmxvY2spO1xuICAgICAgICB0aGlzLmdhcmFnZS5hcHBlbmQodGhpcy5ibG9ja1RpdGxlLCB0aGlzLnRpdGxlUGFnZSwgdGhpcy5nYXJhZ2VCbG9jaywgdGhpcy5ibG9ja0NoYW5nZVBhZ2VzKTtcbiAgICAgICAgdGhpcy5idXR0b25OZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5nYXJhZ2VCbG9jay5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1dHRvblByZXYuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKVxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uUHJldi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICBudW1QYWdlcyArPSAxO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVHYXJhZ2UobnVtUGFnZXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idXR0b25QcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKG51bVBhZ2VzID4gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FyYWdlQmxvY2suaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgbnVtUGFnZXMgLT0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUdhcmFnZShudW1QYWdlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChudW1QYWdlcyA9PT0gMikge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FyYWdlQmxvY2suaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgbnVtUGFnZXMgLT0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUdhcmFnZShudW1QYWdlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25QcmV2LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgY3JlYXRlR2FyYWdlKG51bVBhZ2VzKSB7XG4gICAgICAgIHRoaXMubnVtUGFnZS5pbm5lckhUTUwgPSBgIyR7bnVtUGFnZXN9YDtcbiAgICAgICAgY29uc3QgdXJscyA9IGAke3VybH0ke3R5cGVzXzEuUGF0aC5nYXJhZ2V9P19wYWdlPSR7bnVtUGFnZXN9Jl9saW1pdD03YDtcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcl8xLkxvYWRlcih1cmxzLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICAgIGxvYWRlci5nZXRSZXNwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBndWFyZC1mb3ItaW5cbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGEpO1xuICAgICAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrQ2FyID0gbmV3IGdlbmVyYXRlQ2Fyc0Jsb2NrXzEuQXV0b0Jsb2NrR2VuZXJhdG9yKGl0ZW0pLmdldEF1dG9CbG9jaygpO1xuICAgICAgICAgICAgICAgICAgICBibG9ja0Nhci5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBgbnVtJHtpdGVtLmlkfWApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhcmFnZUJsb2NrLmFwcGVuZChibG9ja0Nhcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAoMCwgY2FsbGJhY2tzXzEuY291bnRDYXJzKSgpO1xuICAgIH1cbiAgICBnZXRHYXJhZ2UobnVtUGFnZXMpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVHYXJhZ2UobnVtUGFnZXMpO1xuICAgICAgICByZXR1cm4gdGhpcy5nYXJhZ2U7XG4gICAgfVxuICAgIGdldEdhcmFnZUJsb2NrKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nYXJhZ2VCbG9jaztcbiAgICB9XG59XG5leHBvcnRzLkdhcmFnZUJsb2NrID0gR2FyYWdlQmxvY2s7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVmlld0dhcmFnZSA9IHZvaWQgMDtcbmNvbnN0IGVsZW1DcmVhdGVfMSA9IHJlcXVpcmUoXCIuLi8uLi9lbGVtQ3JlYXRlXCIpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuY29uc3QgaGVhZGVyR2FyYWdlXzEgPSByZXF1aXJlKFwiLi9oZWFkZXJHYXJhZ2VcIik7XG5jb25zdCBMb2FkZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9sb2FkZXIvTG9hZGVyXCIpO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi8uLi90eXBlc1wiKTtcbmNvbnN0IG1haW5HYXJhZ2VfMSA9IHJlcXVpcmUoXCIuL21haW5HYXJhZ2VcIik7XG5jb25zdCB1cmwgPSAnaHR0cDovLzEyNy4wLjAuMTozMDAwJztcbmNsYXNzIFZpZXdHYXJhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhlYWRlciA9IG5ldyBoZWFkZXJHYXJhZ2VfMS5IZWFkZXJHYXJhZ2UoKS5nZXRIZWFkZXJHYXJhZ2UoKTtcbiAgICAgICAgdGhpcy5tYWluID0gbmV3IG1haW5HYXJhZ2VfMS5HYXJhZ2VCbG9jaygpLmdldEdhcmFnZSgxKTtcbiAgICAgICAgY29uc3QgdmlldyA9IHtcbiAgICAgICAgICAgIHRhZzogJ2RpdicsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICd2aWV3LW9uZSdcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy52aWV3R2FyYWdlID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQodmlldyk7XG4gICAgfVxuICAgIGNyZWF0ZXRWaWV3KCkge1xuICAgICAgICBjb25zdCB1cmxzID0gYCR7dXJsfSR7dHlwZXNfMS5QYXRoLmdhcmFnZX0/X3BhZ2U9MCZfbGltaXQ9N2A7XG4gICAgICAgIGNvbnN0IGxvYWRlciA9IG5ldyBMb2FkZXJfMS5Mb2FkZXIodXJscywgeyBtZXRob2Q6ICdHRVQnIH0pO1xuICAgICAgICBsb2FkZXIuZ2V0UmVzcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZpZXdHYXJhZ2UuYXBwZW5kKHRoaXMuaGVhZGVyLCB0aGlzLm1haW4pO1xuICAgICAgICByZXR1cm4gdGhpcy52aWV3R2FyYWdlO1xuICAgIH1cbn1cbmV4cG9ydHMuVmlld0dhcmFnZSA9IFZpZXdHYXJhZ2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuV2lubmVyc1ZpZXcgPSB2b2lkIDA7XG5jb25zdCBMb2FkZXJfMSA9IHJlcXVpcmUoXCIuLi8uLi9sb2FkZXIvTG9hZGVyXCIpO1xuY29uc3QgdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi8uLi90eXBlc1wiKTtcbmNvbnN0IGVsZW1DcmVhdGVfMSA9IHJlcXVpcmUoXCIuLi8uLi9lbGVtQ3JlYXRlXCIpO1xuY29uc3QgZWxlbUNyZWF0ZUJ1dHRvbl8xID0gcmVxdWlyZShcIi4uLy4uL2VsZW1DcmVhdGVCdXR0b25cIik7XG5yZXF1aXJlKFwiLi93aW5uZXJzLmNzc1wiKTtcbmNvbnN0IGNhbGxiYWNrc18xID0gcmVxdWlyZShcIi4uLy4uL2NhbGxiYWNrc1wiKTtcbmNvbnN0IHVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAnO1xuY2xhc3MgV2lubmVyc1ZpZXcge1xuICAgIC8vIHB1YmxpYyByb3c6IEhUTUxFbGVtZW50XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGxldCBudW1QYWdlcyA9IDE7XG4gICAgICAgIGNvbnN0IHBhcmFtc1ZpZXcgPSB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAndmlldy13aW5uZXJzJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwYXJhbXNXaW5uZXJzID0ge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3dpbm5lcnMtYmxvY2snXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtc1RpdGxlID0ge1xuICAgICAgICAgICAgdGFnOiAnaDInLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAnd2lubmVycy10aXRsZScsXG4gICAgICAgICAgICB0ZXh0OiAnV2lubmVycydcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGFyYW1zTnVtVGl0bGUgPSB7XG4gICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3dpbm5lcnMtbnVtJyxcbiAgICAgICAgICAgIHRleHQ6ICcnXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtc1BhZ2UgPSB7XG4gICAgICAgICAgICB0YWc6ICdoMycsXG4gICAgICAgICAgICBjbGFzc05hbWU6ICdwYWdlLXdpbm5lcnMnLFxuICAgICAgICAgICAgdGV4dDogJ1BhZ2UnXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtc051bVBhZ2UgPSB7XG4gICAgICAgICAgICB0YWc6ICdzcGFuJyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BhZ2UtbnVtd2luJyxcbiAgICAgICAgICAgIHRleHQ6IGAjJHtudW1QYWdlc31gXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHBhcmFtYmxvY2tDaGFuZ2VWaWV3ID0ge1xuICAgICAgICAgICAgdGFnOiAnZGl2JyxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2J1dHRvbnMtY2hhbmdlJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLm51bWJlclBhZ2VzID0gbnVtUGFnZXM7XG4gICAgICAgIHRoaXMudmlld1dpbm5lcnMgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChwYXJhbXNWaWV3KTtcbiAgICAgICAgdGhpcy53aW5uZXJzQmxvY2sgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChwYXJhbXNXaW5uZXJzKTtcbiAgICAgICAgdGhpcy50aXRsZVdpbm5lcnMgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlRWxlbWVudChwYXJhbXNUaXRsZSk7XG4gICAgICAgIHRoaXMubnVtYmVyV2lubmVycyA9IGVsZW1DcmVhdGVfMS5FbGVtZW50Q3JlYXRvci5jcmVhdGVFbGVtZW50KHBhcmFtc051bVRpdGxlKTtcbiAgICAgICAgdGhpcy5wYWdlID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQocGFyYW1zUGFnZSk7XG4gICAgICAgIHRoaXMubnVtYmVyUGFnZSA9IGVsZW1DcmVhdGVfMS5FbGVtZW50Q3JlYXRvci5jcmVhdGVFbGVtZW50KHBhcmFtc051bVBhZ2UpO1xuICAgICAgICB0aGlzLnRpdGxlV2lubmVycy5hcHBlbmQodGhpcy5udW1iZXJXaW5uZXJzKTtcbiAgICAgICAgdGhpcy5ibG9ja0NoYW5nZVBhZ2VzID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQocGFyYW1ibG9ja0NoYW5nZVZpZXcpO1xuICAgICAgICB0aGlzLmJ1dHRvbk5leHQgPSBuZXcgZWxlbUNyZWF0ZUJ1dHRvbl8xLkVsZW1lbnRDcmVhdG9yQnV0dG9uKCdORVhUJykuZ2V0QnV0dG9uKCduZXh0Jyk7XG4gICAgICAgIHRoaXMuYnV0dG9uUHJldiA9IG5ldyBlbGVtQ3JlYXRlQnV0dG9uXzEuRWxlbWVudENyZWF0b3JCdXR0b24oJ1BSRVYnKS5nZXRCdXR0b24oJ3ByZXYnKTtcbiAgICAgICAgdGhpcy5idXR0b25QcmV2LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgdGhpcy5ibG9ja0NoYW5nZVBhZ2VzLmFwcGVuZCh0aGlzLmJ1dHRvblByZXYsIHRoaXMuYnV0dG9uTmV4dCk7XG4gICAgICAgIHRoaXMuYnV0dG9uUHJldi5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XG4gICAgICAgIHRoaXMucGFnZS5hcHBlbmQodGhpcy5udW1iZXJQYWdlKTtcbiAgICAgICAgdGhpcy5idXR0b25OZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy53aW5uZXJzQmxvY2suaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBpZiAodGhpcy5idXR0b25QcmV2Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSlcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblByZXYucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgbnVtUGFnZXMgKz0gMTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlV2lubmVycyhudW1QYWdlcyk7XG4gICAgICAgICAgICAoMCwgY2FsbGJhY2tzXzEuc2V0TG9jYWxlU3RvcmFnZSkoU3RyaW5nKG51bVBhZ2VzKSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJ1dHRvblByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAobnVtUGFnZXMgPiAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53aW5uZXJzQmxvY2suaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICAgICAgbnVtUGFnZXMgLT0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVdpbm5lcnMobnVtUGFnZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAobnVtUGFnZXMgPT09IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndpbm5lcnNCbG9jay5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgICAgICBudW1QYWdlcyAtPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlV2lubmVycyhudW1QYWdlcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25QcmV2LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICgwLCBjYWxsYmFja3NfMS5zZXRMb2NhbGVTdG9yYWdlKShTdHJpbmcobnVtUGFnZXMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNyZWF0ZVdpbm5lcnMobnVtUGFnZXMpIHtcbiAgICAgICAgdGhpcy53aW5uZXJzQmxvY2suaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IHBhcmFtc1RhYmxlID0ge1xuICAgICAgICAgICAgdGFnOiAndGFibGUnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAndGFibGUtd2lubmVycycsXG4gICAgICAgICAgICB0YWdUUjogJ3RyJyxcbiAgICAgICAgICAgIHRhZ1REOiAndGQnLFxuICAgICAgICAgICAgdGFnVEg6ICd0aCcsXG4gICAgICAgICAgICBudW1Db2w6IDVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdGFibGUgPSBlbGVtQ3JlYXRlXzEuRWxlbWVudENyZWF0b3IuY3JlYXRlVGFibGUocGFyYW1zVGFibGUpO1xuICAgICAgICB0aGlzLm51bWJlclBhZ2UuaW5uZXJIVE1MID0gYCMke251bVBhZ2VzfWA7XG4gICAgICAgIGNvbnN0IHVybHMgPSBgJHt1cmx9JHt0eXBlc18xLlBhdGgud2lubmVyc30/X3BhZ2U9JHtudW1QYWdlc30mX2xpbWl0PTEwYDtcbiAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcl8xLkxvYWRlcih1cmxzLCB7IG1ldGhvZDogJ0dFVCcgfSk7XG4gICAgICAgIGxvYWRlci5nZXRSZXNwKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBndWFyZC1mb3ItaW5cbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBPYmplY3QudmFsdWVzKGRhdGEpO1xuICAgICAgICAgICAgICAgIHZhbHVlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bSA9IHZhbHVlcy5pbmRleE9mKGl0ZW0pICsgMTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgZHVyYXRpb24gPSBpdGVtLnRpbWUgLyA2MFxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmxUd28gPSBgJHt1cmx9JHt0eXBlc18xLlBhdGguZ2FyYWdlfS8ke2l0ZW0uaWR9YDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9hZGVyR2FyYWdlID0gbmV3IExvYWRlcl8xLkxvYWRlcih1cmxUd28sIHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyR2FyYWdlLmdldFJlc3AoKGRhdGFHYXJhZ2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhR2FyYWdlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHIgPSBgPHN2ZyBjbGFzcz1cImNhclwiIGZpbGw9JHtkYXRhR2FyYWdlLmNvbG9yfSB3aWR0aD1cIjI1cHhcIiBoZWlnaHQ9XCIyNXB4XCIgdmlld0JveD1cIjAgLTQzLjkyIDEyMi44OCAxMjIuODhcIiB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJMYXllcl8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiICBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTIyLjg4IDM1LjAzXCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cblxuICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+LnN0MHtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDt9PC9zdHlsZT5cbiAgICAgICAgICAgICAgPGc+XG4gICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwic3QwXCIgZD1cIk05OS40MiwxMy41N2M1LjkzLDAsMTAuNzMsNC44LDEwLjczLDEwLjczYzAsNS45My00LjgsMTAuNzMtMTAuNzMsMTAuNzNzLTEwLjczLTQuOC0xMC43My0xMC43MyBDODguNjksMTguMzcsOTMuNDksMTMuNTcsOTkuNDIsMTMuNTdMOTkuNDIsMTMuNTd6IE03OS4wNSw1Yy0wLjU5LDEuMjctMS4wNiwyLjY5LTEuNDIsNC4yM2MtMC44MiwyLjU3LDAuMzksMy4xMSwzLjE5LDIuMDYgYzIuMDYtMS4yMyw0LjEyLTIuNDcsNi4xOC0zLjdjMS4wNS0wLjc0LDEuNTUtMS40NywxLjM4LTIuMTljLTAuMzQtMS40Mi0zLjA4LTIuMTYtNS4zMy0yLjZDODAuMTksMi4yMyw4MC4zOSwyLjExLDc5LjA1LDUgTDc5LjA1LDV6IE0yMy44NiwxOS4zMWMyLjc1LDAsNC45OSwyLjIzLDQuOTksNC45OWMwLDIuNzUtMi4yMyw0Ljk5LTQuOTksNC45OWMtMi43NSwwLTQuOTktMi4yMy00Ljk5LTQuOTkgQzE4Ljg3LDIxLjU0LDIxLjEsMTkuMzEsMjMuODYsMTkuMzFMMjMuODYsMTkuMzF6IE05OS40MiwxOS4zMWMyLjc1LDAsNC45OSwyLjIzLDQuOTksNC45OWMwLDIuNzUtMi4yMyw0Ljk5LTQuOTksNC45OSBjLTIuNzUsMC00Ljk5LTIuMjMtNC45OS00Ljk5Qzk0LjQzLDIxLjU0LDk2LjY2LDE5LjMxLDk5LjQyLDE5LjMxTDk5LjQyLDE5LjMxeiBNNDYuMTQsMTIuNWMyLjc3LTIuOTcsNS45Ny00LjksOS42Ny02Ljc2IGM4LjEtNC4wOCwxMy4wNi0zLjU4LDIxLjY2LTMuNThsLTIuODksNy41Yy0xLjIxLDEuNi0yLjU4LDIuNzMtNC42NiwyLjg0SDQ2LjE0TDQ2LjE0LDEyLjV6IE0yMy44NiwxMy41NyBjNS45MywwLDEwLjczLDQuOCwxMC43MywxMC43M2MwLDUuOTMtNC44LDEwLjczLTEwLjczLDEwLjczcy0xMC43My00LjgtMTAuNzMtMTAuNzNDMTMuMTMsMTguMzcsMTcuOTMsMTMuNTcsMjMuODYsMTMuNTcgTDIzLjg2LDEzLjU3eiBNNDAuODIsMTAuM2MzLjUyLTIuMTksNy4zNS00LjE1LDExLjU5LTUuODJjMTIuOTEtNS4wOSwyMi43OC02LDM2LjMyLTEuOWM0LjA4LDEuNTUsOC4xNiwzLjEsMTIuMjQsNC4wNiBjNC4wMywwLjk2LDIxLjQ4LDEuODgsMjEuOTEsNC44MWwtNC4zMSw1LjE1YzEuNTcsMS4zNiwyLjg1LDMuMDMsMy4zMiw1LjY0Yy0wLjEzLDEuNjEtMC41NywyLjk2LTEuMzMsNC4wNCBjLTEuMjksMS44NS01LjA3LDMuNzYtNy4xMSwyLjY3Yy0wLjY1LTAuMzUtMS4wMi0xLjA1LTEuMDEtMi4yNGMwLjA2LTIzLjktMjguNzktMjEuMTgtMjYuNjIsMi44MkgzNS40OCBDNDQuOCw1LjQ5LDUuMDQsNS40LDEyLjEsMjguN0M5LjYyLDMxLjM4LDMuNzcsMjcuMzQsMCwxOC43NWMxLjAzLTEuMDIsMi4xNi0xLjk5LDMuNDItMi44OWMtMC4wNi0wLjA1LDAuMDYsMC4xOS0wLjE1LTAuMTcgYy0wLjIxLTAuMzYsMC41MS0xLjg3LDEuOTktMi43NEMxMy4wMiw4LjQsMzEuNzMsOC41Miw0MC44MiwxMC4zTDQwLjgyLDEwLjN6XCIvPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDwvc3ZnPmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJnID0gW251bSwgYCR7c3RyfWAsIGAke2RhdGFHYXJhZ2UubmFtZX1gLCBpdGVtLndpbnMsIGl0ZW0udGltZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyYW1zUm93ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdUUjogJ3RyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnVEQ6ICd0ZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bUNvbDogNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93ID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZVJvdyhwYXJhbXNSb3csIGFyZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGUuYXBwZW5kKHJvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53aW5uZXJzQmxvY2sucHJlcGVuZCh0YWJsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGFibGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgKDAsIGNhbGxiYWNrc18xLnNvcnRXaW5uZXJzKShlKTtcbiAgICAgICAgfSk7XG4gICAgICAgICgwLCBjYWxsYmFja3NfMS5jb3VudFdpbm5lcnMpKCk7XG4gICAgfVxuICAgIGdldFdpbm5lcnMobnVtUGFnZXMpIHtcbiAgICAgICAgdGhpcy5jcmVhdGVXaW5uZXJzKG51bVBhZ2VzKTtcbiAgICAgICAgdGhpcy52aWV3V2lubmVycy5hcHBlbmQodGhpcy50aXRsZVdpbm5lcnMsIHRoaXMucGFnZSwgdGhpcy53aW5uZXJzQmxvY2ssIHRoaXMuYmxvY2tDaGFuZ2VQYWdlcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnZpZXdXaW5uZXJzO1xuICAgIH1cbiAgICBjcmVhdGVWaWV3V2lubmVyKCkge1xuICAgICAgICB0aGlzLmNyZWF0ZVdpbm5lcnModGhpcy5udW1iZXJQYWdlcyk7XG4gICAgICAgIHRoaXMudmlld1dpbm5lcnMuYXBwZW5kKHRoaXMudGl0bGVXaW5uZXJzLCB0aGlzLnBhZ2UsIHRoaXMud2lubmVyc0Jsb2NrLCB0aGlzLmJsb2NrQ2hhbmdlUGFnZXMpO1xuICAgICAgICByZXR1cm4gdGhpcy52aWV3V2lubmVycztcbiAgICB9XG59XG5leHBvcnRzLldpbm5lcnNWaWV3ID0gV2lubmVyc1ZpZXc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVmlld1dpbm5lcnMgPSB2b2lkIDA7XG5jb25zdCBoZWFkZXJXaW5uZXJzXzEgPSByZXF1aXJlKFwiLi9oZWFkZXJXaW5uZXJzXCIpO1xuY29uc3QgZWxlbUNyZWF0ZV8xID0gcmVxdWlyZShcIi4uLy4uL2VsZW1DcmVhdGVcIik7XG5jb25zdCBjYWxsYmFja3NfMSA9IHJlcXVpcmUoXCIuLi8uLi9jYWxsYmFja3NcIik7XG5jbGFzcyBWaWV3V2lubmVycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IHZpZXdQYXJhbXMgPSB7XG4gICAgICAgICAgICB0YWc6ICdkaXYnLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAndmlldy10d28nXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubWFpbiA9IG5ldyBoZWFkZXJXaW5uZXJzXzEuV2lubmVyc1ZpZXcoKTtcbiAgICAgICAgdGhpcy52aWV3ID0gZWxlbUNyZWF0ZV8xLkVsZW1lbnRDcmVhdG9yLmNyZWF0ZUVsZW1lbnQodmlld1BhcmFtcyk7XG4gICAgfVxuICAgIGNyZWF0ZVZpZXdXaW5uZXJzKCkge1xuICAgICAgICBsZXQgbnVtID0gKDAsIGNhbGxiYWNrc18xLmdldExvY2FsZVN0b3JhZ2UpKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgbnVtID0gJzEnO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG51bSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnZpZXcuYXBwZW5kKHRoaXMubWFpbi5nZXRXaW5uZXJzKCtudW0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy52aWV3O1xuICAgIH1cbn1cbmV4cG9ydHMuVmlld1dpbm5lcnMgPSBWaWV3V2lubmVycztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qIGNvbnN0IGdldEF1dG8gPSBhc3luYyAodXJsOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9YClcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICBjb25zb2xlLmxvZyhkYXRhKVxufSAqL1xucmVxdWlyZShcIi4vc3R5bGUuY3NzXCIpO1xuY29uc3QgYXBwXzEgPSByZXF1aXJlKFwiLi9jb21wb25lbnRzL2FwcFwiKTtcbi8vIGNvbnN0IHVybCA9ICdodHRwOi8vMTI3LjAuMC4xOjMwMDAvZGIvZ2FyYWdlJ1xuY29uc3QgYXBwID0gbmV3IGFwcF8xLkFwcCgpO1xuYXBwLnN0YXJ0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=