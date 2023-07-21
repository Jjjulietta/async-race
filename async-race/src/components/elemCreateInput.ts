import { ElementCreator } from './elemCreate'
import type { Params, element, Attribute } from './types'

export class ElementCreatorInput {
  public input: element
  constructor (name: string) {
    const paramInput: Params = {
      tag: 'input',
      className: `input-${name}`
    }
    this.input = ElementCreator.createElement(paramInput)
  }

  public setAttribute (paramsId: Attribute[]): HTMLElement {
    paramsId.forEach((item) => { this.input.setAttribute(item.value, item.valueName) })
    return this.input
  }

  public getInput (name: string): HTMLElement {
    return this.input
  }
}
