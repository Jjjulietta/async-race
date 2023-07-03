import { Elements } from './Elements';
import { arrTabEl } from './data';

export class TableGenerator {
  public table: HTMLElement;

  constructor() {
    this.table = document.createElement('div');
    this.table.classList.add('table-gen');
  }

  public createTableUn(num: string): HTMLElement {
    const objLevel = arrTabEl[Number(num) - 1];
    objLevel.elem.forEach((item) => {
      const el = Elements.createElemen(item.name);
      el.setAttribute('data-hovered', `${item.name}${item.col}`);
      if (item.class) { el.classList.add(`${item.class}`); }
      if (item.checked) { el.classList.add('checked'); }
      if (item.id) { el.setAttribute('id', `${item.id}`); }
      if (!item.nesting) { this.table.append(el); } else {
        const parentEl = this.table.querySelector(`[data-hovered=${item.nesting}]`);
        parentEl?.append(el);
      }
    }); return this.table;
  }

  public clearTable(): HTMLElement {
    this.table.textContent = '';
    return this.table;
  }
}
