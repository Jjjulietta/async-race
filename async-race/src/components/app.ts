/* eslint-disable class-methods-use-this */

// eslint-disable-next-line import/no-cycle
import { HeaderGarage } from './view/viewGarage/headerGarage'
import { ElementCreatorButton } from './elemCreateButton'
import { ElementCreator } from './elemCreate'
import { ViewGarage } from './view/viewGarage/view'
import { ViewWinners } from './view/viewWinners/viewWinners'
import type { element, Params } from './types'

export class App extends ViewGarage {
  public headerApp: HTMLElement
  public viewWinners: ViewWinners
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
    this.viewWinners = new ViewWinners()
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
  }
}
