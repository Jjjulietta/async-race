import { AutoBlockGenerator } from './generateCarsBlock'
import { ElementCreator } from '../../elemCreate'
import { ElementCreatorButton } from '../../elemCreateButton'
import { Loader } from '../../loader/Loader'
import { countCars, sendReq, submitForm } from '../../callbacks'
import type { Data, Params, element } from '../../types'
import { Path } from '../../types'
import './viewGarage.css'
import '../../svg.css'

const url = 'http://127.0.0.1:3000'

export class GarageBlock {
  public garage: HTMLElement
  // public loader: Loader
  public titleGarage: element
  public numCars: element
  public numPage: element
  public titlePage: element
  public blockTitle: element
  public garageBlock: element
  public blockChangePages: element
  public buttonPrev: element
  public buttonNext: element
  constructor () {
    const carsNum = 4
    let numPages = 1
    const garagePage: Params = {
      tag: 'div',
      className: 'garage-page'
    }
    const garageBlock: Params = {
      tag: 'div',
      className: 'garage-block'
    }
    const paramTitle: Params = {
      tag: 'h2',
      className: 'garage-title',
      text: 'GARAGE'
    }
    const numCars: Params = {
      tag: 'span',
      className: 'cars-num',
      text: `${carsNum}`
    }
    const paramTitleTwo: Params = {
      tag: 'h3',
      className: 'garage-titlePage',
      text: 'Page'
    }
    const numpage: Params = {
      tag: 'span',
      className: 'cars-num',
      text: `#${numPages}`
    }
    const paramblockChangeView: Params = {
      tag: 'div',
      className: 'buttons-change'
    }
    const blocTitle: Params = {
      tag: 'div',
      className: 'title-block'
    }
    this.titleGarage = ElementCreator.createElement(paramTitle)
    this.numCars = ElementCreator.createElement(numCars)
    this.titleGarage.append(this.numCars)
    this.numPage = ElementCreator.createElement(numpage)
    this.titlePage = ElementCreator.createElement(paramTitleTwo)
    this.titlePage.append(this.numPage)
    this.blockTitle = ElementCreator.createElement(blocTitle)
    this.blockChangePages = ElementCreator.createElement(paramblockChangeView)
    this.buttonNext = new ElementCreatorButton('NEXT').getButton('next')
    this.buttonPrev = new ElementCreatorButton('PREV').getButton('prev')
    this.buttonPrev.setAttribute('disabled', 'disabled')
    this.blockChangePages.append(this.buttonPrev, this.buttonNext)
    this.blockTitle.append(this.titleGarage)
    // this.loader = new Loader(url, { method: 'GET' })
    this.garage = ElementCreator.createElement(garagePage)
    this.garageBlock = ElementCreator.createElement(garageBlock)
    this.garage.append(this.blockTitle, this.titlePage, this.garageBlock, this.blockChangePages)
    this.buttonNext.addEventListener('click', () => {
      this.garageBlock.innerHTML = ''
      if (this.buttonPrev.hasAttribute('disabled')) this.buttonPrev.removeAttribute('disabled')
      numPages += 1
      console.log(numPages)
      this.createGarage(numPages)
    })
    this.buttonPrev.addEventListener('click', () => {
      console.log(numPages)
      if (numPages > 2) {
        this.garageBlock.innerHTML = ''
        numPages -= 1
        this.createGarage(numPages)
      } else if (numPages === 2) {
        this.garageBlock.innerHTML = ''
        numPages -= 1
        this.createGarage(numPages)
        this.buttonPrev.setAttribute('disabled', 'disabled')
      }
    })
  }

  // eslint-disable-next-line class-methods-use-this
  private createGarage (numPages: number): void {
    this.numPage.innerHTML = `#${numPages}`
    const urls = `${url}${Path.garage}?_page=${numPages}&_limit=7`
    const loader = new Loader(urls, { method: 'GET' })
    loader.getResp((data?: Data) => {
      if (data != null) {
        console.log(data)
        // eslint-disable-next-line no-restricted-syntax, guard-for-in
        const values = Object.values(data)
        // console.log(values)
        values.forEach((item: Data) => {
          console.log(item)
          const blockCar = new AutoBlockGenerator(item).getAutoBlock()
          // const blockCar = block.getAutoBlock()
          blockCar.setAttribute('data-id', `num${item.id}`)
          // const img = block.getImg()
          // img.style.color = `${item.color}`
          this.garageBlock.append(blockCar)
        })
      }
    })
    countCars()
  }

  public getGarage (numPages: number): HTMLElement {
    this.createGarage(numPages)
    return this.garage
  }

  public getGarageBlock (): HTMLElement {
    return this.garageBlock
  }

  /* public createCars (data: Data): void {
    const values = Object.values(data)
    // console.log(values)
    values.forEach((item: Data) => {
      console.log(item)
      const blockCar = new AutoBlockGenerator(item).getAutoBlock()
      // const blockCar = block.getAutoBlock()
      blockCar.setAttribute('data-id', `num${item.id}`)
      // const img = block.getImg()
      // img.style.color = `${item.color}`
      this.garageBlock.append(blockCar)
    })
  } */
}
