import { Loader } from './loader/Loader'
// eslint-disable-next-line import/no-cycle
import { AutoBlockGenerator } from './view/viewGarage/generateCarsBlock'
import type { element, Data, Velocity, Cars, Winners } from './types'
import type { Obj } from './view/viewGarage/headerGarage'
import { Path } from './types'

const url = 'http://127.0.0.1:3000'

type Callback<T> = (arg0: T) => T
// type ObjId = Record<string, number>

// type ObjectId = Record<string, ObjId>

export interface Arguments {
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  url: string, method: string, headers?: HeadersInit, form?: HTMLFormElement,
}

export function sendReq (arg: Arguments): void {
  const loader = new Loader(`${arg.url}`, { method: `${arg.method}` })
  loader.getResp((data?: Data) => {
    if (data != null) {
      console.log(data)
    }
  })
}

export function deleteCar (arg: Arguments, id: string | number): void {
  const loader = new Loader(`${arg.url}`, { method: `${arg.method}` })
  loader.getRespRr((response) => {
    if (response === 200) {
      const urlsThree = `${url}${Path.winners}/${id}`
      const newLoader = new Loader(urlsThree, { method: 'GET' })
      newLoader.getResp((data?: Winners) => {
        if (data?.id === +`${id}`) {
          const loaderTwo = new Loader(urlsThree, { method: 'DELETE' })
          loaderTwo.getRespRr((resp) => {
            if (resp === 200) {
              const table = document.querySelector('table')
            }
          })
        }
      })
    }
  })
}

export function submitForm (arg: Arguments): void {
  arg.form?.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    sendForm(arg)
    if (e.target instanceof HTMLFormElement) { e.target.reset() }
  })
}

export function sendForm (arg: Arguments): void {
  const formData = new FormData(arg.form)
  const obj: Obj = { }
  formData.forEach((value, key) => { obj[key] = value })
  const dataJson = JSON.stringify(obj)
  const loader = new Loader(`${arg.url}`, {
    method: `${arg.method}`,
    headers: arg.headers,
    body: dataJson
  })

  loader.getResp((data?: Data) => {
    if (data != null) {
      if (arg.method === 'POST') {
        const blockCar = new AutoBlockGenerator(data).getAutoBlock()
        blockCar.setAttribute('data-id', `num${data.id}`)
        const garageBlock = document.querySelector('.garage-block')
        if (garageBlock != null && garageBlock.children.length < 7) { garageBlock.append(blockCar) }
        countCars()
      }
      if (arg.method === 'PUT') {
        const idStr = `num${data.id}`
        const carBlock = document.querySelector(`[data-id = ${idStr}]`)
        const nameCar = carBlock?.querySelector('.car-name')
        const imgCar = carBlock?.querySelector('.img-auto')
        if (nameCar != null) { nameCar.innerHTML = `${data.name}` }
        if (imgCar != null && imgCar instanceof HTMLElement) { imgCar.style.color = `${data.color}` }
      }
    }
  })
}

export function removeCar (arg: Arguments, id: string | number): void {
  deleteCar(arg, id)
  countCars()
}

export function createPopap (model: string, time: number): HTMLElement {
  const popap = document.createElement('div')
  popap.classList.add('popap')
  const popapBody = document.createElement('div')
  popapBody.classList.add('popap-body')
  const popapContent = document.createElement('div')
  popapContent.classList.add('popap-content')
  popapBody.append(popapContent)
  popapContent.innerHTML = `${model} wins for ${time}sec!`
  popap.append(popapBody)
  return popap
}

let animId: number
let winner = false
// let arrayObj: ObjId
window.addEventListener('load', () => {
  winner = false
})

window.addEventListener('animationend', () => {
  const buttonReset = document.querySelector('.button-RESET')
  buttonReset?.removeAttribute('disabled')
})

export function animateCar (el: element, id: number): void {
  const img = el?.querySelector('.img-auto')
  const flag = el?.querySelector('.flag')
  const carName = el?.querySelector('.car-name')
  if (flag instanceof HTMLElement) {
    const coordFlag = flag.offsetLeft - 40
    const urls = `${url}${Path.engine}?id=${id}&status=started`
    const loader = new Loader(`${urls}`, { method: 'PATCH' })
    loader.getResp((data?: Velocity) => {
      if (data != null) {
        if (img instanceof HTMLElement) {
          const startPositions = img?.getBoundingClientRect().left
          // const distance = coordFlag - startPositions
          const duration = Math.floor(data.distance / data.velocity)
          // eslint-disable-next-line no-template-curly-in-string
          const animImg = img.animate([{ transform: `translateX(${startPositions}px` }, { transform: `translateX(${coordFlag}px` }], {
            duration: duration
          })
          img.style.transform = `translateX(${coordFlag}px)`
          const urlTwo = `${urls.slice(0, urls.lastIndexOf('='))}=drive`
          const loaderOne = new Loader(urlTwo, { method: 'PATCH' })
          loaderOne.getRespRr((response) => {
            if (response === 500) {
              const coord = img.getBoundingClientRect().left
              animImg.pause()
              img.style.transform = `translateX(${coord}px)`
            } else if (response === 200 && !winner) {
              const d = +(duration / 1000).toFixed(2)
              if (carName != null) {
                const popapWin = createPopap(carName.innerHTML, d)
                document.body.append(popapWin)
                popapWin.classList.add('open')
              }
              // Math.round(duration / 1000)
              winner = true
              checkWin(id, d)
            } animImg.cancel()
          })
        }
      }
    })
  }
}

export function raseThree (el: element, id: number): void {
  const img = el?.querySelector('.img-auto')
  const flag = el?.querySelector('.flag')
  // const carName = el?.querySelector('.car-name')
  if (flag instanceof HTMLElement) {
    const coordFlag = flag.offsetLeft - 40
    const urls = `${url}${Path.engine}?id=${id}&status=started`
    const loader = new Loader(`${urls}`, { method: 'PATCH' })
    loader.getResp((data?: Velocity) => {
      if (data != null) {
        if (img instanceof HTMLElement) {
          const startPositions = img?.getBoundingClientRect().left
          const distance = coordFlag - startPositions
          const duration = Math.floor(data.distance / data.velocity)
          animId = animateThree(duration, img, distance, startPositions)
          // objId[`${id}`] = animateThree(duration, img, distance, startPositions)
          // console.log(objId)
          const urlTwo = `${urls.slice(0, urls.lastIndexOf('='))}=drive`
          const loaderOne = new Loader(urlTwo, { method: 'PATCH' })
          loaderOne.getRespRr((response) => {
            if (response === 500) {
              // console.log(objId)
              // const key = `num${id}`
              // console.log(objId[`${id}`])
              window.cancelAnimationFrame(animId)
            }
          })
        }
      }
    })
  }
}

export function animateThree (duration: number, element: HTMLElement, distance: number, startPositions: number): number {
  let currentPositions = startPositions
  const fin = distance + startPositions
  const frame = duration / 1000 * 60
  const dx = distance / frame
  const tick = (): void => {
    if (currentPositions != null) {
      currentPositions += dx
      // eslint-disable-next-line no-param-reassign
      element.style.transform = `translateX(${currentPositions}px)`
      if (currentPositions < fin) {
        animId = requestAnimationFrame(tick)
      }
    }
  }

  animId = requestAnimationFrame(tick)
  return animId
}

export function getId (): string[] {
  const items = document.querySelectorAll('.car-block')
  const arr: string[] = []
  items.forEach((item) => {
    if (item.hasAttribute('data-id')) {
      const value = item.getAttribute('data-id')
      if (value != null) arr.push(value.slice(3))
    }
  })
  console.log(arr.map((item) => Number(item)))
  return arr
}

export function generateCars (): Cars[] {
  const names = ['Opel', 'Mersedes', 'BMW', 'Tesla', 'Toyota', 'Ford']
  const models = ['Vectra', 'SX5', 'gla', 'model x', 'camry', 'Fiesta']
  const colors = ['#e6e6fa', '#fede00', '#6c779f', '#ef3c40', 'green', 'yellow']
  const random = Math.floor(Math.random() * 5)
  console.log(random)
  const array: Cars[] = []
  let n = 0
  while (n < 100) {
    const i = Math.floor(Math.random() * 5)
    const j = Math.floor(Math.random() * 5)
    const x = Math.floor(Math.random() * 5)
    const obj = { name: `${names[i]} ${models[j]}`, color: `${colors[x]}` }
    array.push(obj)
    n += 1
  }
  return array
}

export function shuffle (array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-param-reassign
    [array[i], array[j]] = [array[j], array[i]]
  } return array
}

export function generateCarsTwo (collback: Callback<string[]>): Cars[] {
  const names = ['Opel', 'Mersedes', 'BMW', 'Tesla', 'Toyota']
  const models = ['Vectra', 'SX5', 'gla', 'model x', 'camry']
  const colors = ['#e6e6fa', '#fede00', '#6c779f', '#ef3c40', 'green']
  const array: Cars[] = []
  let n = 0
  while (n < 20) {
    const arrName = shuffle(names)
    const arrModels = shuffle(models)
    const arrColors = shuffle(colors)
    for (let i = 0; i < names.length; i += 1) {
      const obj = { name: `${arrName[i]} ${arrModels[i]}`, color: `${arrColors[i]}` }
      array.push(obj)
    }
    n += 1
  }
  return array
}

export function countCars (): void {
  const urlTwo = `${url}${Path.garage}?_limit=7`
  const loader = new Loader(urlTwo, { method: 'GET' })
  loader.getRespResp((data?: Headers) => {
    const num = data?.get('X-Total-Count')
    if (num != null) {
      const titleGarage = document.querySelector('.cars-num'); if (titleGarage != null) {
        titleGarage.innerHTML = `(${num})`
      }
    }
  })
}

export function countWinners (): void {
  const urlTwo = `${url}${Path.winners}?_limit=10`
  const loader = new Loader(urlTwo, { method: 'GET' })
  loader.getRespResp((data?: Headers) => {
    const num = data?.get('X-Total-Count')
    if (num != null) {
      const winnersNum = document.querySelector('.winners-num')
      if (winnersNum != null) {
        winnersNum.innerHTML = `(${num})`
      }
    }
  })
}

export function stopCars (id: number): void {
  const urls = `${url}${Path.engine}?id=${id}&status=stopped`
  const el = document.querySelector(`[data-id=num${id}]`)
  const img = el?.querySelector('.img-auto')
  const loader = new Loader(urls, { method: 'PATCH' })
  loader.getResp((data?: Velocity) => {
    const startPositions = img?.getBoundingClientRect().left
    if (img != null && img instanceof HTMLElement) {
      if (data != null && data.velocity === 0 && startPositions != null) {
        window.cancelAnimationFrame(animId)
        img.style.transform = `translateX(${0}px)`
        if (winner) winner = false
      }
    }
  })
}

export function checkWin (id: number, duration: number): void {
  const urls = `${url}${Path.winners}/${id}`
  const loader = new Loader(urls, { method: 'GET' })
  loader.getRespRr((response) => {
    if (response === 404) {
      const urlTwo = `${url}${Path.winners}`
      const args = { url: urlTwo, method: 'POST', headers: { 'Content-Type': 'application/json' } }
      createWin(id, duration, args)
    } else {
      loader.getResp((data?: Winners) => {
        if (data != null) {
          if (data.id === id) {
            const win = data.wins + 1
            const arg = { url: urls, method: 'PUT', headers: { 'Content-Type': 'application/json' } }
            if (data.time < duration) {
              // eslint-disable-next-line no-param-reassign
              duration = data.time
            } updateeWin(id, duration, win, arg)
          }
        }
      })
    }
  })
}

export function createWin (idCar: number, duration: number, arg: Arguments): void {
  const obj = {
    id: idCar,
    wins: 1,
    time: duration
  }
  const dataJson = JSON.stringify(obj)
  const loader = new Loader(`${arg.url}`, {
    method: `${arg.method}`,
    headers: arg.headers,
    body: dataJson
  })
  loader.getResp((data?: Winners[]) => {
    if (data != null) {
      console.log('success')
      console.log(data)
    }
  })
}

export function updateeWin (id: number, duration: number, win: number, arg: Arguments): void {
  const obj = {
    wins: win,
    time: duration
  }
  const dataJson = JSON.stringify(obj)
  const loader = new Loader(`${arg.url}`, {
    method: `${arg.method}`,
    headers: arg.headers,
    body: dataJson
  })

  loader.getResp((data?: Winners[]) => {
    if (data != null) {
      console.log('success')
      console.log(data)
    }
  })
}

export function setDisabled (): void {
  const buttonUpdate = document.querySelector('.button-UPDATE')
  const buttonCreate = document.querySelector('.button-CREATE')
  const buttonRase = document.querySelector('.button-RASE')
  const buttonsRemove = document.querySelectorAll('.button-REMOVE')
  const buttonsSelect = document.querySelectorAll('.button-SELECT')
  const buttonsStart = document.querySelectorAll('.button-A')
  const buttonGen = document.querySelector('.button-GENERATE')
  buttonUpdate?.setAttribute('disabled', 'disabled')
  buttonCreate?.setAttribute('disabled', 'disabled')
  buttonGen?.setAttribute('disabled', 'disabled')
  buttonRase?.setAttribute('disabled', 'disabled')
  buttonsRemove?.forEach((item) => {
    item.setAttribute('disabled', 'disabled')
  })
  buttonsSelect?.forEach((item) => {
    item.setAttribute('disabled', 'disabled')
  })
  buttonsStart?.forEach((item) => {
    item.setAttribute('disabled', 'disabled')
  })
}

export function removeDisabled (): void {
  const buttonUpdate = document.querySelector('.button-UPDATE')
  const buttonCreate = document.querySelector('.button-CREATE')
  const buttonGen = document.querySelector('.button-GENERATE')
  const buttonsRemove = document.querySelectorAll('.button-REMOVE')
  const buttonRase = document.querySelector('.button-RASE')
  const buttonsSelect = document.querySelectorAll('.button-SELECT')
  const buttonsStart = document.querySelectorAll('.button-A')
  buttonUpdate?.removeAttribute('disabled')
  buttonCreate?.removeAttribute('disabled')
  buttonGen?.removeAttribute('disabled')
  buttonRase?.removeAttribute('disabled')
  buttonsRemove?.forEach((item) => {
    item.removeAttribute('disabled')
  })
  buttonsSelect?.forEach((item) => {
    item.removeAttribute('disabled')
  })
  buttonsStart?.forEach((item) => {
    item.removeAttribute('disabled')
  })
}

let sortWin = 'desc'
export function sortWinners (e: Event): void {
  const table = document.querySelector('table')
  const winCell = table?.rows[0].cells[3]
  const timeCell = table?.rows[0].cells[4]
  if (e.target instanceof HTMLElement) {
    if (e.target.innerHTML.includes('Wins') || e.target.innerHTML.includes('Best time (seconds)')) {
      if (e.target === winCell && timeCell?.innerHTML[timeCell.innerHTML.length - 1] !== ')') { if (timeCell != null) timeCell.innerHTML = timeCell?.innerHTML.slice(0, timeCell.innerHTML.length - 1) } else if (e.target === timeCell && winCell?.innerHTML[winCell.innerHTML.length - 1] !== 's') { if (winCell != null) winCell.innerHTML = 'Wins' /* winCell?.innerHTML.slice(0, winCell.innerHTML.length - 1) */ }
      let name = e.target.innerHTML
      const sortOrder = sortWin
      if (name[name.length - 1] === 's' || name[name.length - 1] === ')') {
        name = e.target.innerHTML
      } else { name = e.target.innerHTML.slice(0, e.target.innerHTML.length - 1) }
      if (sortOrder === 'desc') {
        e.target.innerHTML = `${name}&#8593;`
      } else { e.target.innerHTML = `${name}&#8595;` }
      let nameSort: string
      if (e.target.innerHTML.includes('Wins')) { nameSort = 'wins' } else { nameSort = 'time' }
      sort(nameSort, sortOrder)
    }
  }
}

export function sort (name: string, sortOrder: string): void {
  if (sortOrder === 'desc') { sortWin = 'asc' } else { sortWin = 'desc' }
  const table = document.querySelector('table')
  if (table instanceof HTMLElement) {
    const urls = `${url}${Path.winners}?_sort=${name}&_order=${sortOrder}`
    const loader = new Loader(urls, { method: 'GET' })
    loader.getResp((data?: Winners[]) => {
      if (data != null) {
        const values = Object.values(data)
        values.forEach((item: Winners) => {
          for (let i = 1; i < table.rows.length; i += 1) {
            if (table.rows[i].cells[3].innerHTML === String(item.wins) && table.rows[i].cells[4].innerHTML === String(item.time)) {
              table.append(table.rows[i])
            }
          }
        })
      }
    })
  }
}

export function setLocaleStorage (num: string): void {
  localStorage.setItem('num', num)
}

export function getLocaleStorage (): string | null {
  let num
  if (localStorage.getItem('num') != null) {
    num = localStorage.getItem('num')
  } else { num = '1' }
  return num
}
