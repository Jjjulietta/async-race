import { ElementCreator } from '../../elemCreate'
// eslint-disable-next-line import/no-cycle
import { HeaderGarage } from './headerGarage'
import { Loader } from '../../loader/Loader'
// import { GarageBlock } from './mainGarage'
import { ElementCreatorButton } from '../../elemCreateButton'
import type { element, Params, Data } from '../../types'
import { Path } from '../../types'
import { GarageBlock } from './mainGarage'

const url = 'http://127.0.0.1:3000'

export class ViewGarage {
  public header: element
  public main: element
  public viewGarage: element

  constructor () {
    this.header = new HeaderGarage().getHeaderGarage()
    this.main = new GarageBlock().getGarage(1)
    const view: Params = {
      tag: 'div',
      className: 'view-one'
    }
    this.viewGarage = ElementCreator.createElement(view)
  }

  public createtView (): HTMLElement {
    const urls = `${url}${Path.garage}?_page=0&_limit=7`
    const loader = new Loader(urls, { method: 'GET' })
    loader.getResp((data?: Data) => {
      console.log(data)
    })
    this.viewGarage.append(this.header, this.main)
    return this.viewGarage
  }
}
