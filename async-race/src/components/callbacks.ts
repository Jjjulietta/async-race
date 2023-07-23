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

export function deleteCar (arg: Arguments, id: string | number): void {
  const loader = new Loader(`${arg.url}`, { method: `${arg.method}` })
  loader.getRespRr((response) => {
    console.log(response)
    if (response === 200) {
      const urlsThree = `${url}${Path.winners}/${id}`
      const newLoader = new Loader(urlsThree, { method: 'GET' })
      newLoader.getResp((data?: Winners) => {
        if (data?.id === +`${id}`) {
          console.log(data?.id === +`${id}`)
          const loaderTwo = new Loader(urlsThree, { method: 'DELETE' })
          loaderTwo.getRespRr((resp) => {
            if (resp === 200) {
              const table = document.querySelector('table')
              console.log(table)
            }
          })
        }
      })
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

export function removeCar (arg: Arguments, id: string | number): void {
  deleteCar(arg, id)
  countCars()
}

export function createPopap (model: string): HTMLElement {
  const popap = document.createElement('div')
  popap.classList.add('popap')
  const popapBody = document.createElement('div')
  popapBody.classList.add('popap-body')
  const popapContent = document.createElement('div')
  popapContent.classList.add('popap-content')
  popapBody.append(popapContent)
  popapContent.innerHTML = `${model} wins!`
  popap.append(popapBody)
  return popap
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
  const carName = el?.querySelector('.car-name')
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
          console.log(duration)
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
              if (carName != null) {
                const popapWin = createPopap(carName.innerHTML)
                document.body.append(popapWin)
                popapWin.classList.add('open')
              }
              const pos = img.getBoundingClientRect().left
              console.log(pos)
              const d = Math.round(duration / 1000)
              console.log(d)
              console.log(winner)
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
        winner = true
        // if (winner) winner = false
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
  if (winner) winner = false
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
    console.log(urls)
    const loader = new Loader(urls, { method: 'GET' })
    loader.getResp((data?: Winners[]) => {
      console.log(data)
      if (data != null) {
        const values = Object.values(data)
        values.forEach((item: Winners) => {
          console.log(item)
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
