import { Loader } from './loader/Loader'
import { ElementCreator } from './elemCreate'
// eslint-disable-next-line import/no-cycle
import { AutoBlockGenerator } from './view/viewGarage/generateCarsBlock'
import type { element, Row, Data, Velocity, Cars, Winners, Table } from './types'
import type { Obj } from './view/viewGarage/headerGarage'
import { Path } from './types'

const url = 'http://127.0.0.1:3000'
// import { ViewGarage } from './view/viewGarage/view'

/* export const req = async (url: string, data: Obj): Promise<string> => {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application-json' },
    body: JSON.stringify(data)
  })
  if (!res.ok) {
    throw new Error('Error')
  }
  return await res.json()
} */

/* export const getAuto = async (url: string): Promise<string> => {
  const response = await fetch(`${url}`)
  return await response.json()
} */

/* export function getResp (url: string): void {
  void fetch(url).then(async (resp: Response) => await resp.json()).then((data) => JSON.parse(data))
} */
type Callback<T> = (arg0: T) => T
type ObjId = Record<string, number>

export interface Arguments {
  // eslint-disable-next-line @typescript-eslint/member-delimiter-style
  url: string, method: string, headers?: HeadersInit, form?: HTMLFormElement,
}

export function sendReq (arg: Arguments): void {
  const loader = new Loader(`${arg.url}`, { method: `${arg.method}` })
  loader.getResp((data?: Data) => {
    if (data != null) {
      console.log(data)
      /* const idStr = `Num${data.id}`
        const carBlock = document.querySelector(`[data-id = ${idStr}]`)
        carBlock?.remove()
      } */
      /*  if (arg.method === 'GET' && data instanceof Array) {
        data.forEach((item) => {

        })
        const blockCar = new AutoBlockGenerator(data).getAutoBlock()
        const garage = document.querySelector('.garage-page')
        if (garage != null) { garage.append(blockCar) }
      } */
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
  console.log(dataJson)
  const loader = new Loader(`${arg.url}`, {
    method: `${arg.method}`,
    headers: arg.headers,
    body: dataJson
  })

  loader.getResp((data?: Data) => {
    if (data != null) {
      console.log(data)
      if (arg.method === 'POST') {
        const blockCar = new AutoBlockGenerator(data).getAutoBlock()
        blockCar.setAttribute('data-id', `num${data.id}`)
        const garageBlock = document.querySelector('.garage-block')
        console.log(garageBlock)
        if (garageBlock != null && garageBlock.children.length < 7) { garageBlock.append(blockCar) }
        countCars()
      }
      if (arg.method === 'PUT') {
        console.log(data.id)
        const idStr = `num${data.id}`
        const carBlock = document.querySelector(`[data-id = ${idStr}]`)
        const nameCar = carBlock?.querySelector('.car-name')
        const imgCar = carBlock?.querySelector('.img-auto')
        console.log(nameCar)
        if (nameCar != null) { nameCar.innerHTML = `${data.name}` }
        if (imgCar != null && imgCar instanceof HTMLElement) { imgCar.style.color = `${data.color}` }
      }
    }
  })
}

export function removeCar (arg: Arguments): void {
  sendReq(arg)
  countCars()
}

/* export function rase (arg: Arguments, id: number, element: HTMLElement, coord: number): void {
  // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
  const loader = new Loader(`${arg.url}`, { method: `${arg.method}` })
  let resp: number
  loader.getResp((data?: Velocity) => {
    if (data != null) {
      console.log(data)
      if (arg.method === 'PATCH') {
        const startPositions = element.getBoundingClientRect().left
        console.log(data)
        animate(data.velocity, data.distance, element, startPositions, coord)
        const urls = `${arg.url.slice(0, arg.url.lastIndexOf('='))}=drive`
        const loaderOne = new Loader(urls, { method: `${arg.method}` })
        console.log(urls)
        // eslint-disable-next-line consistent-return
        loaderOne.getRespRr((response) => {
          console.log(response)
          if (response === 500) {
            /* const urlsTwo = `${arg.url.slice(0, arg.url.lastIndexOf('='))}=stopped`
            const loaderTwo = new Loader(urls, { method: `${arg.method}` })
            loaderTwo.getResp((dataT?: Velocity) => {
              console.log(dataT?.velocity)
            }) */
/* const velocity = 0
            const currentPositions = element.getBoundingClientRect().left
            animate(velocity, data.distance, element, currentPositions, coord)
          } else if (response === 200) {
            /* const time = new Date()
            console.log(element)
            console.log(id)
            console.log(time.getTime())
            resp = response
            return resp
          }
        })
      }
    }
  })
} */
let animId: number
let winner = false
let arrayObj: ObjId
/* export function raseTwo (el: element, id: number): void {
  console.log(el)
  const img = el?.querySelector('.img-auto')
  const flag = el?.querySelector('.flag')
  if (flag instanceof HTMLElement) {
    const coordFlag = flag.offsetLeft - 40
    const urls = `${url}${Path.engine}?id=${id}&status=started`
    // const args = { url: urls, method: 'PATCH' }
    const loader = new Loader(`${urls}`, { method: 'PATCH' })
    let resp: number
    loader.getResp((data?: Velocity) => {
      if (data != null) {
        const startPositions = img?.getBoundingClientRect().left
        if (img instanceof HTMLElement) {
          animate(data.velocity, data.distance, img, startPositions, coordFlag)
          const urlTwo = `${urls.slice(0, urls.lastIndexOf('='))}=drive`
          const loaderOne = new Loader(urlTwo, { method: 'PATCH' })
          loaderOne.getRespRr((response) => {
            if (response === 500) {
              const velocity = 0
              const currentPositions = img.getBoundingClientRect().left
              animate(velocity, data.distance, img, currentPositions, coordFlag)
            } else if (response === 200) {
              /* const time = new Date()
            console.log(element)
            console.log(id)
            console.log(time.getTime())
            }

          })
        }
      }
    })
  }
} */

export function raseThree (el: element, id: number): void {
  console.log(el)
  const img = el?.querySelector('.img-auto')
  const flag = el?.querySelector('.flag')
  if (flag instanceof HTMLElement) {
    const coordFlag = flag.offsetLeft - 40
    const urls = `${url}${Path.engine}?id=${id}&status=started`
    // const args = { url: urls, method: 'PATCH' }
    const loader = new Loader(`${urls}`, { method: 'PATCH' })
    loader.getResp((data?: Velocity) => {
      if (data != null) {
        if (img instanceof HTMLElement) {
          const startPositions = img?.getBoundingClientRect().left
          const distance = coordFlag - startPositions
          const duration = Math.floor(data.distance / data.velocity)
          animId = animateThree(duration, img, distance, startPositions)
          // const obj: ObjId = {}
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          // obj[`num${id}`] = animId
          // console.log(obj)
          const urlTwo = `${urls.slice(0, urls.lastIndexOf('='))}=drive`
          console.log(urlTwo)
          console.log(img)
          const loaderOne = new Loader(urlTwo, { method: 'PATCH' })
          loaderOne.getRespRr((response) => {
            console.log(winner)
            if (response === 500) {
              console.log(response)
              console.log(id)
              // const key = `num${id}`
              // console.log(obj[`num${id}`])
              window.cancelAnimationFrame(animId)
            } else if (response === 200 && !winner) {
              console.log(id)
              const pos = img.getBoundingClientRect().left
              console.log(pos)
              const d = Math.round(duration / 60)
              console.log(d)
              winner = true
              checkWin(id, d)
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
  console.log(dx)
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

/* export function animate (velocity: number, distance: number, element: HTMLElement, startPositions: number | undefined, coord: number | undefined): void {
  let currentPositions = startPositions
  console.log(currentPositions)
  if (coord != null && currentPositions !== undefined) {
    const length = coord - currentPositions
    console.log(length)
    console.log(velocity)
    const duration = distance / velocity
    console.log(duration)
    const frame = duration / 1000 * 60
    const dx = length / frame
    console.log(dx)
    let animationId: number
    const tick = (): void => {
      if (currentPositions != null) {
        currentPositions += dx
        // eslint-disable-next-line no-param-reassign
        element.style.transform = `translateX(${currentPositions}px)`
        if (currentPositions < coord && distance !== 0) {
          animationId = requestAnimationFrame(tick)
        } else if (currentPositions === coord || velocity === 0) {
          console.log('stop')
          cancelAnimationFrame(animationId)
        }
      }
    }

    tick()
  }
} */

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
  console.log(array)
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
  console.log(array)
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
  const urlTwo = `${url}${Path.winners}?_limit=7`
  const loader = new Loader(urlTwo, { method: 'GET' })
  loader.getRespResp((data?: Headers) => {
    const num = data?.get('X-Total-Count')
    if (num != null) {
      const winnersNum = document.querySelector('.winners-num'); if (winnersNum != null) {
        winnersNum.innerHTML = `(${num})`
      }
    }
  })
}

export function stopCars (id: number): void {
  const urls = `${url}${Path.engine}?id=${id}&status=stopped`
  // const args = { url: urls, method: 'PATCH' }
  const el = document.querySelector(`[data-id=num${id}]`)
  const img = el?.querySelector('.img-auto')
  // const flag = el?.querySelector('.flag')
  const loader = new Loader(urls, { method: 'PATCH' })
  loader.getResp((data?: Velocity) => {
    console.log(data)
    // const startPositions = img?.getBoundingClientRect().left
    if (img != null && img instanceof HTMLElement) // img.style.transform = `translateX(${0}px)`
    // eslint-disable-next-line @typescript-eslint/brace-style
    {
      // img.style.transform = `translateX(${0}px)`
      if (data != null && data.velocity === 0) {
        window.cancelAnimationFrame(animId)
        img.style.transform = `translateX(${0}px)`
        console.log(winner)
        if (winner) winner = false
        /* const coordFlag = 0
        const currentPositions = img.getBoundingClientRect().left
        animate(data?.velocity, data.distance, img, currentPositions, coordFlag) */
      }
    }
  })
}

export function checkWin (id: number, duration: number): void {
  const urls = `${url}${Path.winners}/${id}`
  const loader = new Loader(urls, { method: 'GET' })
  loader.getRespRr((response) => {
    if (response === 404) {
      console.log(404)
      const urlTwo = `${url}${Path.winners}`
      console.log(id)
      console.log(duration)
      const args = { url: urlTwo, method: 'POST', headers: { 'Content-Type': 'application/json' } }
      createWin(id, duration, args)
    } else {
      loader.getResp((data?: Winners) => {
        if (data != null) {
          console.log(data)
          if (data.id === id) {
            const win = data.wins + 1
            console.log(win)
            const arg = { url: urls, method: 'PUT', headers: { 'Content-Type': 'application/json' } }
            if (data.time < duration) {
              console.log(data.time)
              console.log(duration)
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
  // const table = document.querySelector('.view-winners')
  // console.log(table)
  // const urls = `${url}${Path.winners}/${id}`
  console.log(arg)
  const obj = {
    id: idCar,
    wins: 1,
    time: duration
  }
  const dataJson = JSON.stringify(obj)
  console.log(dataJson)
  const loader = new Loader(`${arg.url}`, {
    method: `${arg.method}`,
    headers: arg.headers,
    body: dataJson
  })
  loader.getResp((data?: Winners[]) => {
    if (data != null) {
      console.log('success')
      console.log(data)
      /* const values = Object.values(data)
      console.log(values)
      values.forEach((item: Winners) => {
        console.log(item)
        const urlTwo = `${url}${Path.garage}/${item.id}`
        const loaderGarage = new Loader(urlTwo, { method: 'GET' })
        loaderGarage.getResp((dataGarage?: Data) => {
          console.log(dataGarage)
          if (dataGarage != null) {
            const args: [number, string, string, number, number] = [item.id, `${dataGarage.name}`, `${dataGarage.color}`, item.wins, item.time]
            const paramsRow: Row = {
              tagTR: 'tr',
              tagTD: 'td',
              numCol: 5
            }
            const row = ElementCreator.createRow(paramsRow, args)
            row.setAttribute('data-row-id', `num${item.id}`)
            table?.append(row)
          }
        })
      }) */
    }
  })
}

export function updateeWin (id: number, duration: number, win: number, arg: Arguments): void {
  // const urls = `${url}${Path.winners}/${id}`
  // const row = document.querySelector(`[data-row-id = num${id}]`)
  console.log(win)
  console.log(arg)
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
      /* const values = Object.values(data)
      console.log(values)
      values.forEach((item: Winners) => {
        console.log(item)
        if (row != null) {
          console.log(row.children)
        }
      }) */
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

export function sortWinners (e: Event): void {
  /* const table = document.querySelector('table')
  table?.addEventListener('click', (e) => { */
  console.log(e.target)
  if (e.target instanceof HTMLElement) {
    if (e.target.innerHTML === 'Wins') {
      const name = e.target.innerHTML
      sort(name)
    }
  }
}

export function sort (name: string): void {
  const block = document.querySelector('.winners-block')
  const table = document.querySelector('table')
  const tr = table?.querySelectorAll('tr')
  tr?.forEach((item) => {
    if (item instanceof HTMLElement && item.firstElementChild?.tagName === 'TD') {
      console.log(item)
      item.remove()
    }
  })
  console.log(table)
  const urls = `${url}${Path.winners}?_sort=${name.toLowerCase()}&_order=desc,asc`
  /* const paramsTable: Table = {
    tag: 'table',
    className: 'table-winners',
    tagTR: 'tr',
    tagTD: 'td',
    tagTH: 'th',
    numCol: 5
  }
  const table = ElementCreator.createTable(paramsTable) */
  const loader = new Loader(urls, { method: 'GET' })
  loader.getResp((data?: Winners[]) => {
    console.log(data)
    if (data != null) {
      const values = Object.values(data)
      // console.log(values)
      values.forEach((item: Winners) => {
        console.log(item)
        const num = values.indexOf(item) + 1
        console.log(num)
        const urlTwo = `${url}${Path.garage}/${item.id}`
        const loaderGarage = new Loader(urlTwo, { method: 'GET' })
        loaderGarage.getResp((dataGarage?: Data) => {
          console.log(dataGarage)
          if (dataGarage != null) {
            const str = `<svg class="car" fill=${dataGarage.color} width="25px" height="25px" viewBox="0 -43.92 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  style="enable-background:new 0 0 122.88 35.03" xml:space="preserve">

            <style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style>
            <g>
            <path class="st0" d="M99.42,13.57c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73 C88.69,18.37,93.49,13.57,99.42,13.57L99.42,13.57z M79.05,5c-0.59,1.27-1.06,2.69-1.42,4.23c-0.82,2.57,0.39,3.11,3.19,2.06 c2.06-1.23,4.12-2.47,6.18-3.7c1.05-0.74,1.55-1.47,1.38-2.19c-0.34-1.42-3.08-2.16-5.33-2.6C80.19,2.23,80.39,2.11,79.05,5 L79.05,5z M23.86,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99c-2.75,0-4.99-2.23-4.99-4.99 C18.87,21.54,21.1,19.31,23.86,19.31L23.86,19.31z M99.42,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99 c-2.75,0-4.99-2.23-4.99-4.99C94.43,21.54,96.66,19.31,99.42,19.31L99.42,19.31z M46.14,12.5c2.77-2.97,5.97-4.9,9.67-6.76 c8.1-4.08,13.06-3.58,21.66-3.58l-2.89,7.5c-1.21,1.6-2.58,2.73-4.66,2.84H46.14L46.14,12.5z M23.86,13.57 c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73C13.13,18.37,17.93,13.57,23.86,13.57 L23.86,13.57z M40.82,10.3c3.52-2.19,7.35-4.15,11.59-5.82c12.91-5.09,22.78-6,36.32-1.9c4.08,1.55,8.16,3.1,12.24,4.06 c4.03,0.96,21.48,1.88,21.91,4.81l-4.31,5.15c1.57,1.36,2.85,3.03,3.32,5.64c-0.13,1.61-0.57,2.96-1.33,4.04 c-1.29,1.85-5.07,3.76-7.11,2.67c-0.65-0.35-1.02-1.05-1.01-2.24c0.06-23.9-28.79-21.18-26.62,2.82H35.48 C44.8,5.49,5.04,5.4,12.1,28.7C9.62,31.38,3.77,27.34,0,18.75c1.03-1.02,2.16-1.99,3.42-2.89c-0.06-0.05,0.06,0.19-0.15-0.17 c-0.21-0.36,0.51-1.87,1.99-2.74C13.02,8.4,31.73,8.52,40.82,10.3L40.82,10.3z"/>
            </g>
            </svg>`
            const arg: [number, string, string, number, number] = [num, `${str}`, `${dataGarage.name}`, item.wins, item.time]
            const paramsRow: Row = {
              tagTR: 'tr',
              tagTD: 'td',
              numCol: 5
            }
            const row = ElementCreator.createRow(paramsRow, arg)
            if (table != null) table.append(row)
          }
        })
      })
    }
  })
}
