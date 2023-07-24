import { ElementCreator } from '../../elemCreate'
import { ElementCreatorInput } from '../../elemCreateInput'
import { ElementCreatorButton } from '../../elemCreateButton'
import { AutoBlockGenerator } from './generateCarsBlock'
import { Path } from '../../types'
import type { Params, element, Attribute, Data } from '../../types'
import { generateCarsTwo, getId, submitForm, shuffle, countCars, stopCars, setDisabled, removeDisabled, animateCar } from '../../callbacks'
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
      setDisabled()
      this.buttonReset.setAttribute('disabled', 'disabled')
      const ids = getId()
      ids.forEach((item) => {
        const el = document.querySelector(`[data-id=num${item}]`)
        if (el instanceof HTMLElement) animateCar(el, Number(item))
      })
    })

    this.buttonReset.addEventListener('click', () => {
      this.buttonRase.removeAttribute('disabled')
      this.buttonReset.setAttribute('disabled', 'disabled')
      removeDisabled()
      const ids = getId()
      ids.forEach((item) => {
        const id = Number(item)
        stopCars(id)
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
            blockCar.setAttribute('data-id', `num${data.id}`)
            const garageBlock = document.querySelector('.garage-block')
            if (garageBlock != null && garageBlock.children.length < 7) { garageBlock.append(blockCar) }
          }
        })
      })
      countCars()
    })

    this.clickFormCreate()
    // this.clickFormUpdate()
  }

  public getHeaderGarage (): element {
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

  private clickFormCreate (): void {
    const urls = `${url}${Path.garage}`
    if (this.formCreate instanceof HTMLFormElement) {
      const argum = { form: this.formCreate, url: urls, method: 'POST', headers: { 'Content-Type': 'application/json' } }
      submitForm(argum)
    }
  }
}
