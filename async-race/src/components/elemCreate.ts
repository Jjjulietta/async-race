
import type { element, Params, Row, Table } from './types'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class ElementCreator {
  public static createElement (params: Params): element {
    const el: element = document.createElement(params.tag)
    el.classList.add(params.className)
    if (params.text != null) { el.textContent = params.text }
    /* if ((params.attributeName != null) && (params.attributeValue != null)) {
      el.setAttribute(params.attributeName, params.attributeValue)
    } */
    return el
  }

  public static createTable (params: Table): element {
    const table: element = document.createElement(params.tag)
    table.classList.add(params.className)
    const tr: element = document.createElement(params.tagTR)
    table.append(tr)
    const arr = ['Number', 'Car', 'Name', 'Wins', 'Best time (seconds)']
    let i = 0
    while (i < params.numCol) {
      const th: element = document.createElement(params.tagTH)
      th.innerHTML = `${arr[i]}`
      tr.append(th)
      i += 1
    }
    return table
  }

  public static createRow (params: Row, arr: [number, string, string, number, number]): element {
    // const table: element = document.createElement(params.tag)
    // table.classList.add(params.className)
    const tr: element = document.createElement(params.tagTR)
    // table.append(tr)
    // const arr = ['Number', 'Car', 'Name', 'Wins', 'Best time (seconds)']
    let i = 0
    while (i < params.numCol) {
      const th: element = document.createElement(params.tagTD)
      th.innerHTML = `${arr[i]}`
      tr.append(th)
      i += 1
    }
    return tr
  }
}
