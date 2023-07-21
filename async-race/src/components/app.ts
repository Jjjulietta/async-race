/* eslint-disable class-methods-use-this */

// eslint-disable-next-line import/no-cycle
import { HeaderGarage } from './view/viewGarage/headerGarage'
import { ElementCreatorButton } from './elemCreateButton'
// import { AutoBlockGenerator } from './view/viewGarage/generateCarsBlock'
// import { GarageBlock } from './view/viewGarage/mainGarage'
import { ElementCreator } from './elemCreate'
// import { Loader } from './loader/Loader'
import { ViewGarage } from './view/viewGarage/view'
import { WinnersView } from './view/viewWinners/headerWinners'
import type { element, Params } from './types'

const url = 'http://127.0.0.1:3000/garage'

export class App extends ViewGarage {
  public headerApp: HTMLElement
  public viewWinners: WinnersView
  public buttonToGarage: element
  public buttonToWinners: element
  public view: element
  constructor () {
    super()
    const paramsHeaderApp: Params = {
      tag: 'div',
      className: 'header-app'
    }
    const view: Params = {
      tag: 'div',
      className: 'view'
    }
    this.buttonToGarage = new ElementCreatorButton('toGARAGE').getButton('toGarage')
    this.buttonToWinners = new ElementCreatorButton('toWINNERS').getButton('toWinners')
    this.headerApp = ElementCreator.createElement(paramsHeaderApp)
    this.headerApp.append(this.buttonToGarage, this.buttonToWinners)
    this.viewGarage = new ViewGarage().createtView()
    this.viewWinners = new WinnersView()
    this.view = ElementCreator.createElement(view)
    this.view.append(this.viewGarage)
    document.body.append(this.headerApp, this.view)
    this.buttonToGarage.addEventListener('click', () => {
      this.view.innerHTML = ''
      this.view.append(this.viewGarage)
    })

    this.buttonToWinners.addEventListener('click', () => {
      this.view.innerHTML = ''
      this.view.append(this.viewWinners.createViewWinners())
    })
  }

  public start (): void {
    const headerGarage = new HeaderGarage()
    const formCreate = headerGarage.getFormCreate()
    const buttons = document.querySelectorAll('button')
    console.log(buttons)
  }
}
