import { ElementCreator } from './elemCreate'
import type { Params, element } from './types'

export enum buttonsName {
  inputCreate = 'create',
  buttonCreate = 'CREATE',
  inputUpdate = 'update',
  buttonUpdate = 'UPDATE',
  inputColor = 'color',
  buttonSelect = 'SELECT',
  buttonReset = 'RESET',
  buttonRemove = 'REMOVE'
}

export class ElementCreatorButton {
  public button: element
  constructor (name: string) {
    const parambutton: Params = {
      tag: 'button',
      className: `button-${name}`,
      text: `${name}`
    }
    this.button = ElementCreator.createElement(parambutton)
  }

  /* addLinc() {
    const link = ElementCreator.createElement('a')

  } */

  public getButton (name: string): HTMLElement {
    return this.button
  }
}
