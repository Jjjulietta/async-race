import { type Params } from '../../types'
import { WinnersView } from './headerWinners'
import { ElementCreator } from '../../elemCreate'
import { getLocaleStorage } from '../../callbacks'

export class ViewWinners {
  public view: HTMLElement
  public main: WinnersView
  constructor () {
    const viewParams: Params = {
      tag: 'div',
      className: 'view-two'
    }
    this.main = new WinnersView()
    this.view = ElementCreator.createElement(viewParams)
  }

  public createViewWinners (): HTMLElement {
    let num = getLocaleStorage()
    window.addEventListener('load', () => {
      num = '1'
    })
    if (num != null) {
      this.view.append(this.main.getWinners(+num))
    }
    return this.view
  }
}
