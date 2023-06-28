import { Elements } from './Elements';
import {
  plate, orange, apple, doily, carrot, arrTabEl,
} from './data';

export class TableGenerator {
  public table: HTMLElement;

  constructor() {
    this.table = document.createElement('div');
    this.table.classList.add('table-gen');
  }

  public createTableOne(): HTMLElement {
    const element = Elements.createElemen(orange.name);
    const elTwo = Elements.createElemen(orange.name);
    element.classList.add('checked');
    element.setAttribute('data-hovered', `${orange.name}One`);
    elTwo.classList.add('checked');
    elTwo.setAttribute('data-hovered', `${orange.name}Two`);
    this.table.append(element);
    this.table.append(elTwo);
    return this.table;
  }

  public createTableTwo(): HTMLElement {
    const element = Elements.createElemen(plate.name);
    element.setAttribute('data-hovered', `${plate.name}`);
    const elTwo = Elements.createElemen(apple.name);
    elTwo.classList.add('checked');
    elTwo.setAttribute('data-hovered', apple.name);
    this.table.append(element);
    element.append(elTwo);
    return this.table;
  }

  public createTableThree(): HTMLElement {
    const element = Elements.createElemen(plate.name);
    element.setAttribute('data-hovered', `${plate.name}`);
    const elTwo = Elements.createElemen(carrot.name);
    const elThree = Elements.createElemen(carrot.name);
    elTwo.classList.add('checked');
    elTwo.setAttribute('data-hovered', `${carrot.name}One`);
    elThree.setAttribute('data-hovered', `${carrot.name}Two`);
    this.table.append(element);
    element.append(elTwo);
    this.table.append(elThree);
    return this.table;
  }

  public createTableFour(): HTMLElement {
    const element = Elements.createElemen(doily.name);
    element.setAttribute('data-hovered', doily.name);
    const elTwo = Elements.createElemen(orange.name);
    elTwo.classList.add('small');
    elTwo.classList.add('checked');
    elTwo.setAttribute('data-hovered', `${orange.name}One`);
    const elThree = Elements.createElemen(orange.name);
    elThree.setAttribute('data-hovered', `${orange.name}Two`);
    element.append(elTwo);
    this.table.append(element);
    this.table.append(elThree);
    return this.table;
  }

  public createTableFive(): HTMLElement {
    const element = Elements.createElemen(plate.name);
    element.setAttribute('data-hovered', `${plate.name}One`);
    const elTwo = Elements.createElemen(apple.name);
    elTwo.setAttribute('id', 'green');
    elTwo.classList.add('checked');
    elTwo.setAttribute('data-hovered', apple.name);
    // const elThree = Elements.createElemen(apple.name);
    const elFour = Elements.createElemen(carrot.name);
    elFour.classList.add('checked');
    elFour.setAttribute('data-hovered', carrot.name);
    const elFive = Elements.createElemen(plate.name);
    elFive.setAttribute('data-hovered', `${plate.name}Two`);
    this.table.append(element);
    element.append(elTwo);
    elFive.append(elFour);
    // this.table.append(elThree);
    this.table.append(elFive);
    return this.table;
  }

  public createTableSix(): HTMLElement {
    const element = Elements.createElemen(plate.name);
    element.setAttribute('data-hovered', `${plate.name}Two`);
    element.setAttribute('id', 'colored');
    const elTwo = Elements.createElemen(orange.name);
    elTwo.classList.add('checked');
    elTwo.setAttribute('data-hovered', `${orange.name}Two`);
    const elThree = Elements.createElemen(plate.name);
    elThree.setAttribute('data-hovered', `${plate.name}One`);
    const elFour = Elements.createElemen(orange.name);
    elFour.setAttribute('data-hovered', `${orange.name}One`);
    elThree.append(elFour);
    element.append(elTwo);
    this.table.append(elThree, element);
    return this.table;
  }

  public createTableSeven(): HTMLElement {
    const element = Elements.createElemen(plate.name);
    element.setAttribute('data-hovered', `${plate.name}`);
    const elTwo = Elements.createElemen(apple.name);
    elTwo.classList.add('small');
    elTwo.setAttribute('data-hovered', `${apple.name}`);
    const elThree = Elements.createElemen(doily.name);
    elThree.setAttribute('data-hovered', doily.name);
    const elFour = Elements.createElemen(orange.name);
    elFour.setAttribute('data-hovered', `${orange.name}One`);
    const elFive = Elements.createElemen(orange.name);
    elFive.setAttribute('data-hovered', `${orange.name}Two`);
    elFive.classList.add('small');
    elFour.classList.add('checked');
    elFour.classList.add('small');
    elFive.classList.add('checked');
    elThree.append(elFour);
    element.append(elTwo);
    this.table.append(elThree, element, elFive);
    return this.table;
  }

  public createTableEight(): HTMLElement {
    const element = Elements.createElemen(doily.name);
    element.setAttribute('data-hovered', doily.name);
    const elTwo = Elements.createElemen(carrot.name);
    elTwo.classList.add('checked');
    elTwo.setAttribute('data-hovered', `${carrot.name}`);
    const elThree = Elements.createElemen(plate.name);
    elThree.setAttribute('data-hovered', `${plate.name}`);
    const elFour = Elements.createElemen(orange.name);
    elFour.setAttribute('data-hovered', `${orange.name}`);
    elFour.classList.add('checked');
    this.table.append(element);
    element.append(elTwo);
    elThree.append(elFour);
    this.table.append(elThree);
    return this.table;
  }

  public createTableNine(): HTMLElement {
    const element = Elements.createElemen(doily.name);
    element.setAttribute('data-hovered', `${doily.name}One`);
    const elTwo = Elements.createElemen(carrot.name);
    elTwo.setAttribute('data-hovered', `${carrot.name}One`);
    const elThree = Elements.createElemen(doily.name);
    elThree.setAttribute('data-hovered', `${doily.name}Two`);
    const elFour = Elements.createElemen(orange.name);
    elFour.setAttribute('data-hovered', `${orange.name}`);
    const elFive = Elements.createElemen(plate.name);
    elFive.setAttribute('data-hovered', `${plate.name}`);
    const elSix = Elements.createElemen(carrot.name);
    elSix.setAttribute('data-hovered', `${carrot.name}Two`);
    elTwo.classList.add('checked');
    elSix.classList.add('checked');
    this.table.append(element);
    elFive.append(elTwo);
    this.table.append(elFive);
    elFive.append(elFour);
    this.table.append(elThree);
    elThree.append(elSix);
    return this.table;
  }

  public createTableTen(): HTMLElement {
    const element = Elements.createElemen(doily.name);
    element.setAttribute('data-hovered', `${doily.name}`);
    const elTwo = Elements.createElemen(carrot.name);
    elTwo.setAttribute('data-hovered', `${carrot.name}`);
    // const elThree = Elements.createElemen(doily.name);
    const elFour = Elements.createElemen(apple.name);
    elFour.setAttribute('data-hovered', apple.name);
    const elFive = Elements.createElemen(plate.name);
    elFive.setAttribute('data-hovered', `${plate.name}`);
    // const elSix = Elements.createElemen(carrot.name);
    element.classList.add('checked');
    elFive.classList.add('checked');
    elTwo.classList.add('checked');
    this.table.append(element);
    this.table.append(elFive);
    elFive.append(elFour);
    // this.table.append(elThree);
    this.table.append(elTwo);
    return this.table;
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
        const parentEl = this.table.querySelector(`[data-hovered=${item.nesting}]`);// this.table.querySelector(`.${item.nesting}`);
        console.log(parentEl);
        parentEl?.append(el);
      }
    }); return this.table;
  }
}
