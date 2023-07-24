
// eslint-disable-next-line import/no-cycle
import { countCars, raseThree, removeCar, removeDisabled, setDisabled, stopCars, submitForm } from '../../callbacks'
import { ElementCreator } from '../../elemCreate'
import { ElementCreatorButton } from '../../elemCreateButton'
import { Path } from '../../types'
import type { Params, Data, ParamsImg } from '../../types'
import './viewGarage.css'

const url = 'http://127.0.0.1:3000'

type DataIMG = Pick<Data, 'color'>

export class AutoBlockGenerator {
  public block: HTMLElement
  public buttonSelect: HTMLElement
  public buttonRemove: HTMLElement
  public blockRase: HTMLElement
  public buttonStart: HTMLElement
  public buttonStop: HTMLElement
  public carName: HTMLElement
  public raseBlock: HTMLElement
  public flag: HTMLElement
  public img: HTMLElement

  constructor (data: Data) {
    const params: Params = {
      tag: 'div',
      className: 'car-block'
    }
    const raseParams: Params = {
      tag: 'div',
      className: 'rase-buttons'
    }
    const raseBlock: Params = {
      tag: 'div',
      className: 'rase-block'
    }
    const carName: Params = {
      tag: 'span',
      className: 'car-name',
      text: `${data.name}`
    }
    const imgParams: ParamsImg = {
      tag: 'div',
      className: 'img-auto',
      // data: '/assets/car6.svg',
      color: `${data.color}`
      // src: ''
    }
    const flagParams: Params = {
      tag: 'div',
      className: 'flag'
    }

    this.block = ElementCreator.createElement(params)
    this.buttonSelect = new ElementCreatorButton('SELECT').getButton('select')
    this.buttonRemove = new ElementCreatorButton('REMOVE').getButton('remove')
    this.blockRase = ElementCreator.createElement(raseParams)
    this.buttonStart = new ElementCreatorButton('A').getButton('start')
    this.buttonStop = new ElementCreatorButton('B').getButton('stop')
    this.buttonStop.setAttribute('disabled', 'disabled')
    this.raseBlock = ElementCreator.createElement(raseBlock)
    this.flag = ElementCreator.createElement(flagParams)
    this.carName = ElementCreator.createElement(carName)
    this.img = ElementCreator.createElement(imgParams)
    this.blockRase.append(this.buttonStart, this.buttonStop, this.img, this.flag)
    this.raseBlock.append(this.blockRase, this.flag)
    this.img.innerHTML = `<svg class="car" fill="currentColor" width="50px" height="50px" viewBox="0 -43.92 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  style="enable-background:new 0 0 122.88 35.03" xml:space="preserve">

    <style type="text/css">.st0{fill-rule:evenodd;clip-rule:evenodd;}</style>
    
    <g>
    
    <path class="st0" d="M99.42,13.57c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73 C88.69,18.37,93.49,13.57,99.42,13.57L99.42,13.57z M79.05,5c-0.59,1.27-1.06,2.69-1.42,4.23c-0.82,2.57,0.39,3.11,3.19,2.06 c2.06-1.23,4.12-2.47,6.18-3.7c1.05-0.74,1.55-1.47,1.38-2.19c-0.34-1.42-3.08-2.16-5.33-2.6C80.19,2.23,80.39,2.11,79.05,5 L79.05,5z M23.86,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99c-2.75,0-4.99-2.23-4.99-4.99 C18.87,21.54,21.1,19.31,23.86,19.31L23.86,19.31z M99.42,19.31c2.75,0,4.99,2.23,4.99,4.99c0,2.75-2.23,4.99-4.99,4.99 c-2.75,0-4.99-2.23-4.99-4.99C94.43,21.54,96.66,19.31,99.42,19.31L99.42,19.31z M46.14,12.5c2.77-2.97,5.97-4.9,9.67-6.76 c8.1-4.08,13.06-3.58,21.66-3.58l-2.89,7.5c-1.21,1.6-2.58,2.73-4.66,2.84H46.14L46.14,12.5z M23.86,13.57 c5.93,0,10.73,4.8,10.73,10.73c0,5.93-4.8,10.73-10.73,10.73s-10.73-4.8-10.73-10.73C13.13,18.37,17.93,13.57,23.86,13.57 L23.86,13.57z M40.82,10.3c3.52-2.19,7.35-4.15,11.59-5.82c12.91-5.09,22.78-6,36.32-1.9c4.08,1.55,8.16,3.1,12.24,4.06 c4.03,0.96,21.48,1.88,21.91,4.81l-4.31,5.15c1.57,1.36,2.85,3.03,3.32,5.64c-0.13,1.61-0.57,2.96-1.33,4.04 c-1.29,1.85-5.07,3.76-7.11,2.67c-0.65-0.35-1.02-1.05-1.01-2.24c0.06-23.9-28.79-21.18-26.62,2.82H35.48 C44.8,5.49,5.04,5.4,12.1,28.7C9.62,31.38,3.77,27.34,0,18.75c1.03-1.02,2.16-1.99,3.42-2.89c-0.06-0.05,0.06,0.19-0.15-0.17 c-0.21-0.36,0.51-1.87,1.99-2.74C13.02,8.4,31.73,8.52,40.82,10.3L40.82,10.3z"/>
    
    </g>
    
    </svg>`
    /* if (this.img.firstElementChild instanceof HTMLElement) */ this.img.style.color = `${data.color}`
    // console.log(this.img.style.color)
    const startPositions = this.img.getBoundingClientRect().left
    this.block.append(this.buttonSelect, this.buttonRemove, this.carName, this.raseBlock)
    this.buttonRemove.addEventListener('click', () => {
      const attr = this.block.getAttribute('data-id')
      let id
      if (attr != null) {
        id = attr.slice(3)
      } else { id = data.id }
      const urls = `${url}${Path.garage}/${id}`
      const args = { url: urls, method: 'DELETE' }
      removeCar(args, id)
      this.block.remove()
      countCars()
    })

    this.buttonSelect.addEventListener('click', () => {
      const attr = this.block.getAttribute('data-id')
      let id
      if (attr != null) {
        id = attr.slice(3)
      } else { id = data.id }
      const urls = `${url}${Path.garage}/${id}`
      const inputUpdate: HTMLInputElement | null = document.querySelector('.input-update')
      inputUpdate?.focus()
      if (inputUpdate != null) {
        inputUpdate?.setAttribute('value', `${data.name}`)
        if (inputUpdate.form != null) {
          const argum = { form: inputUpdate.form, url: urls, method: 'PUT', headers: { 'Content-Type': 'application/json' } }
          submitForm(argum)
        }
      }
    })

    this.buttonStart.addEventListener('click', () => {
      const attr = this.block.getAttribute('data-id')
      setDisabled()
      let id
      if (attr != null) {
        id = Number(attr.slice(3))
      } else { id = data.id }
      raseThree(this.block, id)
      this.buttonStart.setAttribute('disabled', 'disablred')
      if (this.buttonStop.hasAttribute('disabled')) { this.buttonStop.removeAttribute('disabled') }
    })

    this.buttonStop.addEventListener('click', () => {
      removeDisabled()
      const flag = this.flag.getBoundingClientRect().left
      const currentPositions = this.img.getBoundingClientRect().left
      const num = startPositions - currentPositions + 40
      const attr = this.block.getAttribute('data-id')
      let id
      if (attr != null) {
        id = Number(attr.slice(3))
        stopCars(Number(id))
        this.img.style.transform = `translateX(${0}px)`
        this.buttonStart.removeAttribute('disabled')
        this.buttonStop.setAttribute('disabled', 'disabled')
      }
    })
  }

  public getAutoBlock (): HTMLElement {
    // if (this.img.firstElementChild instanceof HTMLElement) this.img.firstElementChild.style.fill = `${}`
    return this.block
  }
}
