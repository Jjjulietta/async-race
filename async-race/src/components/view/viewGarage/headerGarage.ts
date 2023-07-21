import { ElementCreator } from '../../elemCreate'
import { ElementCreatorInput } from '../../elemCreateInput'
import { ElementCreatorButton } from '../../elemCreateButton'
import { AutoBlockGenerator } from './generateCarsBlock'
import { Path } from '../../types'
import type { Params, element, Attribute, Data } from '../../types'
import { generateCarsTwo, getId, submitForm, shuffle, countCars, stopCars, raseThree, setDisabled, removeDisabled } from '../../callbacks'
import { Loader } from '../../loader/Loader'

const url = 'http://127.0.0.1:3000'

export type Obj = Record<string, FormDataEntryValue>

const path = {
  garage: '/garage',
  winners: '/winners'
}

export class HeaderGarage {
  public header: element
  public inputCreate: element
  public buttonCreate: element
  public inputSetColor: element
  public inputUpdate: element
  public formCreate: element
  public formChange: element
  public inputChangeColor: element
  public buttonUpdate: element
  public buttonRase: element
  public buttonReset: element
  public buttonGenerate: element
  public buttonsHeader: element

  constructor () {
    // super()
    const header: Params = {
      tag: 'div',
      className: 'header-garage'
    }

    const formCreate: Params = {
      tag: 'form',
      className: 'form-create'
    }

    const formChange: Params = {
      tag: 'form',
      className: 'form-change'
    }

    const paramsButtons: Params = {
      tag: 'div',
      className: 'buttons-block'
    }

    const attributeInputCreate: Attribute[] = [{ value: 'type', valueName: 'text' }, { value: 'name', valueName: 'name' }, { value: 'value', valueName: '' }]
    const attributeInputUpdate: Attribute[] = [{ value: 'type', valueName: 'text' }, { value: 'name', valueName: 'name' }, { value: 'value', valueName: '' }]
    const attributeInputColor: Attribute[] = [{ value: 'type', valueName: 'color' }, { value: 'name', valueName: 'color' }, { value: 'value', valueName: '' }]

    this.header = ElementCreator.createElement(header)
    this.formCreate = ElementCreator.createElement(formCreate)
    this.inputCreate = new ElementCreatorInput('create').setAttribute(attributeInputCreate)
    this.inputSetColor = new ElementCreatorInput('color').setAttribute(attributeInputColor)
    this.buttonCreate = new ElementCreatorButton('CREATE').getButton('create')
    this.formCreate.append(this.inputCreate, this.inputSetColor, this.buttonCreate)
    this.formChange = ElementCreator.createElement(formChange)
    this.inputUpdate = new ElementCreatorInput('update').setAttribute(attributeInputUpdate)
    this.inputChangeColor = new ElementCreatorInput('color').setAttribute(attributeInputColor)
    this.buttonUpdate = new ElementCreatorButton('UPDATE').getButton('update')
    this.formChange.append(this.inputUpdate, this.inputChangeColor, this.buttonUpdate)
    this.buttonsHeader = ElementCreator.createElement(paramsButtons)
    this.buttonRase = new ElementCreatorButton('RASE').getButton('rase')
    this.buttonReset = new ElementCreatorButton('RESET').getButton('reset')
    this.buttonReset.setAttribute('disabled', 'disabled')
    this.buttonGenerate = new ElementCreatorButton('GENERATE').getButton('generateCars')
    this.buttonsHeader.append(this.buttonRase, this.buttonReset, this.buttonGenerate)
    this.header.append(this.formCreate, this.formChange, this.buttonsHeader)

    this.buttonRase.addEventListener('click', () => {
      // this.buttonRase.setAttribute('disabled', 'disabled')
      setDisabled()
      if (this.buttonReset.hasAttribute('disabled')) this.buttonReset.removeAttribute('disabled')
      const ids = getId()
      ids.forEach((item) => {
        const el = document.querySelector(`[data-id=num${item}]`)
        if (el instanceof HTMLElement) raseThree(el, Number(item)); console.log(item)
      }); ids.forEach((item) => { console.log(item) })
    })

    this.buttonReset.addEventListener('click', () => {
      this.buttonRase.removeAttribute('disabled')
      this.buttonReset.setAttribute('disabled', 'disabled')
      removeDisabled()
      const ids = getId()
      ids.forEach((item) => {
        const id = Number(item)
        stopCars(id)
        /* const urls = `${url}${Path.engine}?id=${item}&status=stopped`
        const args = { url: urls, method: 'PATCH' }
        const loader = new Loader(urls, { method: 'PATCH' })
        loader.getResp((data?: Data) => {
          console.log(data)
        })
        const el = document.querySelector(`[data-id=num${item}]`)
        const img = el?.querySelector('.img-auto')
        if (img != null && img instanceof HTMLElement) img.style.transform = `translateX(${0}px)` */
      })
    })

    this.buttonGenerate.addEventListener('click', () => {
      const arr = generateCarsTwo(shuffle)
      const urls = `${url}${Path.garage}`
      arr.forEach((item) => {
        const objJson = JSON.stringify(item)
        const loader = new Loader(urls, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: objJson
        })
        loader.getResp((data?: Data) => {
          if (data != null) {
            const blockCar = new AutoBlockGenerator(data).getAutoBlock()
            const garageBlock = document.querySelector('.garage-block')
            if (garageBlock != null && garageBlock.children.length < 7) { garageBlock.append(blockCar) }
          }
        })
      })
      countCars()
      /* const urlTwo = `${url}${Path.garage}?_limit=7`
      const loader = new Loader(urlTwo, { method: 'GET' })
      loader.getRespResp((data?: Headers) => {
        const num = data?.get('X-Total-Count')
        if (num != null) {
          const titleGarage = document.querySelector('.cars-num'); if (titleGarage != null) {
            titleGarage.innerHTML = `${num}`
          }
        }
      }) */
    })

    /* this.formCreate.addEventListener('submit', (e) => {
      e.preventDefault()
      const urls = `${url}${Path.garage}`
      if (this.formCreate instanceof HTMLFormElement) {
        const argum = { form: this.formCreate, url: urls, method: 'POST', headers: { 'Content-Type': 'application/json' } }
        const formData = new FormData(this.formCreate)
        const obj: Obj = { }
        formData.forEach((value, key) => { obj[key] = value })
        const dataJson = JSON.stringify(obj)
        console.log(dataJson)
        const loader = new Loader(`${argum.url}`, {
          method: `${argum.method}`,
          headers: argum.headers,
          body: dataJson
        })
        loader.getResp((data?: Data) => {
          if (data != null) {
            console.log(data)
            if (argum.method === 'POST') {
              super.createCars(data)
            }
          }
        })
      } if (e.target instanceof HTMLFormElement) { e.target.reset() }
    }) */
    /* this.formChange.addEventListener('submit', (e) => {
      e.preventDefault()
      const urls = `${url}${Path.garage}`
      const argum = { form: this.formChange, url: urls, method: 'PUT', headers: { 'Content-Type': 'application/json' } }
      if (this.formChange instanceof HTMLFormElement) {
        const formData = new FormData(this.formChange)
        const obj: Obj = { }
        formData.forEach((value, key) => { obj[key] = value })
        const dataJson = JSON.stringify(obj)
        console.log(dataJson)
        const loader = new Loader(`${argum.url}`, {
          method: `${argum.method}`,
          headers: argum.headers,
          body: dataJson
        })
        loader.getResp((data?: Data) => {
          if (data != null) {
            const idStr = `num${data.id}`
            const carBlock = document.querySelector(`[data-id = ${idStr}]`)
            const nameCar = carBlock?.querySelector('.car-name')
            const imgCar = carBlock?.querySelector('.img-auto')
            console.log(nameCar)
            if (nameCar != null) { nameCar.innerHTML = `${data.name}` }
            if (imgCar != null && imgCar instanceof HTMLElement) { imgCar.style.color = `${data.color}` }
          }
        })
      } if (e.target instanceof HTMLFormElement) { e.target.reset() }
    }) */
    this.clickFormCreate()
    // this.clickFormUpdate()
  }

  public getHeaderGarage (): element {
    // this.clickFormCreate()
    // this.clickFormUpdate()
    return this.header
  }

  public getInputCreate (): element {
    return this.inputCreate
  }

  public getButtonCreate (): element {
    return this.buttonCreate
  }

  public getFormCreate (): element {
    return this.formCreate
  }

  public getInputChangeColor (): element {
    return this.inputChangeColor
  }

  /* public getGarage (numPages: number): HTMLElement {
    return super.getGarage(numPages)
  } */

  private clickFormCreate (): void {
    console.log(this.formCreate)
    const urls = `${url}${Path.garage}`
    if (this.formCreate instanceof HTMLFormElement) {
      const argum = { form: this.formCreate, url: urls, method: 'POST', headers: { 'Content-Type': 'application/json' } }
      submitForm(argum)
    }
  }

  /* private clickFormUpdate (): void {
    const urls = `${url}:id`
    const buttons = this.garage.querySelectorAll('button')
    console.log(buttons)
    this.garage.addEventListener('click', (e) => {
      console.log(e)
      if (e.target instanceof HTMLButtonElement && e.target.classList.contains('button-select')) {
        console.log(e.target)
        const arg = { url: urls, method: 'GET' }
      }
    })
    this.formChange.addEventListener('submit', (e) => {
      e.preventDefault()
      if (this.formChange instanceof HTMLFormElement) {
        const argum = { form: this.formChange, url: urls, method: 'PUT', headers: { 'Content-Type': 'application/json' } }
        sendReq(argum)
      }
    })
  } */
}
