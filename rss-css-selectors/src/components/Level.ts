/* import { Elements } from "./Elements"; */
import {
  plate, orange, apple, doily, carrot, arrTabEl,
} from './data';
import { Elements } from './Elements';

export class Level {
  public level: HTMLElement;

  constructor() {
    this.level = document.createElement('div');
    this.level.classList.add('table-div');
  }

  public getLevelOne(): HTMLElement {
    const div = document.createElement('div');
    const divTwo = document.createElement('div');
    div.textContent = orange.tag;
    div.setAttribute('data-hovered', `${orange.name}One`);
    this.level.append('<div class="table">', div);
    divTwo.textContent = orange.tag;
    divTwo.setAttribute('data-hovered', `${orange.name}Two`);
    this.level.append(divTwo, '</div>');
    console.log(this.level);
    return this.level;
  }

  public getLevelTwo(): HTMLElement {
    const div = document.createElement('div');
    const divTwo = document.createElement('div');
    div.append(plate.tagOpened, divTwo, plate.tagClosed);
    // div.setAttribute('data-hovered', `${plate.name}`);
    this.level.append('<div class="table">', div, '</div>');
    div.setAttribute('data-hovered', plate.name);
    divTwo.setAttribute('data-hovered', `${apple.name}`);
    divTwo.textContent = `${apple.tag}`;
    console.log(this.level);
    return this.level;
  }

  public getLevelThree(): HTMLElement {
    const div = document.createElement('div');
    const divTwo = document.createElement('div');
    const divThree = document.createElement('div');
    // const divFour = document.createElement('div');
    div.append(plate.tagOpened, divTwo, plate.tagClosed);
    div.setAttribute('data-hovered', plate.name);
    this.level.append('<div class="table">', div);
    divTwo.textContent = carrot.tag;
    divTwo.setAttribute('data-hovered', `${carrot.name}One`);
    divThree.textContent = carrot.tag;
    divThree.setAttribute('data-hovered', `${carrot.name}Two`);
    this.level.append(divThree, '</div>');
    return this.level;
  }

  public getLevelFour(): HTMLElement {
    const div = document.createElement('div');
    const divTwo = document.createElement('div');
    const divThree = document.createElement('div');
    div.append(doily.tagOpened, divTwo, doily.tagClosed);
    div.setAttribute('data-hovered', doily.name);
    this.level.append('<div class="table">', div);
    divTwo.textContent = `${orange.nameClass}`;
    divTwo.setAttribute('data-hovered', `${orange.name}One`);
    divThree.textContent = `${orange.tag}`;
    divThree.setAttribute('data-hovered', `${orange.name}Two`);
    this.level.append(divThree, '</div>');
    return this.level;
  }

  public getLevelFive(): HTMLElement {
    const div = document.createElement('div');
    const divTwo = document.createElement('div');
    const divThree = document.createElement('div');
    const divFive = document.createElement('div');
    // const divSix = document.createElement('div');
    div.append(plate.tagOpened, divTwo, plate.tagClosed);
    div.setAttribute('data-hovered', `${plate.name}One`);
    this.level.append('<div class="table">', div);
    divTwo.textContent = `${apple.id}`;
    divTwo.setAttribute('data-hovered', apple.name);
    divFive.textContent = `${carrot.tag}`;
    divFive.setAttribute('data-hovered', carrot.name);
    divThree.append(plate.tagOpened, divFive, plate.tagClosed);
    divThree.setAttribute('data-hovered', `${plate.name}Two`);
    this.level.append(divThree, '</div>');
    return this.level;
  }

  public getLevelSix(): HTMLElement {
    const div = document.createElement('div');
    const divTwo = document.createElement('div');
    const divThree = document.createElement('div');
    const divFour = document.createElement('div');
    div.append(plate.tagOpened, divTwo, plate.tagClosed);
    div.setAttribute('data-hovered', `${plate.name}One`);
    this.level.append('<div class="table">', div);
    divTwo.textContent = `${orange.tag}`;
    divTwo.setAttribute('data-hovered', `${orange.name}One`);
    divThree.append(`${plate.id}`, divFour, plate.tagClosed);
    divThree.setAttribute('data-hovered', `${plate.name}Two`);
    divFour.textContent = `${orange.tag}`;
    divFour.setAttribute('data-hovered', `${orange.name}Two`);
    this.level.append(divThree, '</div>');
    return this.level;
  }

  public getLevelSeven(): HTMLElement {
    const div = document.createElement('div');
    const divTwo = document.createElement('div');
    const divThree = document.createElement('div');
    const divFour = document.createElement('div');
    // const divFive = document.createElement('div');
    const divSix = document.createElement('div');
    div.append(doily.tagOpened, divFour, doily.tagClosed);
    div.setAttribute('data-hovered', `${doily.name}`);
    this.level.append('<div class="table">', div);
    this.level.append(divTwo);
    divTwo.append(plate.tagOpened, divThree, plate.tagClosed);
    divTwo.setAttribute('data-hovered', plate.name);
    divThree.textContent = apple.nameClass;
    divThree.setAttribute('data-hovered', apple.name);
    divFour.textContent = orange.nameClass;
    divFour.setAttribute('data-hovered', `${orange.name}One`);
    this.level.append(divSix, '</div>');
    divSix.textContent = orange.nameClass;
    divSix.setAttribute('data-hovered', `${orange.name}Two`);
    return this.level;
  }

  public getLevelEight(): HTMLElement {
    const div = document.createElement('div');
    const divTwo = document.createElement('div');
    const divThree = document.createElement('div');
    const divFour = document.createElement('div');
    // const divFive = document.createElement('div');
    // const divSix = document.createElement('div');
    div.append(doily.tagOpened, divFour, doily.tagClosed);
    div.setAttribute('data-hovered', `${doily.name}`);
    divFour.textContent = carrot.tag;
    divFour.setAttribute('data-hovered', carrot.name);
    this.level.append('<div class="table">', div);
    divTwo.append(plate.tagOpened, divThree, plate.tagClosed);
    divTwo.setAttribute('data-hovered', plate.name);
    this.level.append(divTwo, '</div>');
    divThree.textContent = orange.tag;
    divThree.setAttribute('data-hovered', `${orange.name}`);
    return this.level;
  }

  public getLevelNine(): HTMLElement {
    const div = document.createElement('div');
    const divTwo = document.createElement('div');
    const divThree = document.createElement('div');
    const divFour = document.createElement('div');
    const divFive = document.createElement('div');
    const divSix = document.createElement('div');
    div.append(doily.tag);
    div.setAttribute('data-hovered', `${doily.name}One`);
    divFour.textContent = carrot.tag;
    divFour.setAttribute('data-hovered', `${carrot.name}Two`);
    this.level.append('<div class="table">', div);
    divFive.textContent = carrot.tag;
    divFive.setAttribute('data-hovered', `${carrot.name}One`);
    divThree.textContent = orange.tag;
    divThree.setAttribute('data-hovered', orange.name);
    divTwo.append(plate.tagOpened, divFive, divThree, plate.tagClosed);
    divTwo.setAttribute('data-hovered', plate.name);
    this.level.append(divTwo, divSix, '</div>');
    divSix.append(doily.tagOpened, divFour, doily.tagClosed);
    divSix.setAttribute('data-hovered', `${doily.name}Two`);
    return this.level;
  }

  public getLevelTen(): HTMLElement {
    const div = document.createElement('div');
    // const divTwo = document.createElement('div');
    const divThree = document.createElement('div');
    const divFour = document.createElement('div');
    const divFive = document.createElement('div');
    // const divSix = document.createElement('div');
    div.append(doily.tag);
    this.level.append('<div class="table">', div);
    div.setAttribute('data-hovered', `${doily.name}`);
    divThree.textContent = apple.tag;
    divThree.setAttribute('data-hovered', apple.name);
    divFour.append(plate.tagOpened, divThree, plate.tagClosed);
    divFour.setAttribute('data-hovered', plate.name);
    divFive.textContent = carrot.tag;
    divFive.setAttribute('data-hovered', carrot.name);
    this.level.append(divFour, divFive, '</div>');
    return this.level;
  }

  public getLevelUn(num:string): HTMLElement {
    const objLevel = arrTabEl[Number(num) - 1];
    this.level.append('<div class="table">');
    objLevel.elem.forEach((item) => {
      const el = document.createElement('div');
      el.setAttribute('data-hovered', `${item.name}${item.col}`);
      if (!item.child && !item.nesting) {
        if (item.class) { el.textContent = item.obj.nameClass; } else
        if (item.id && item.obj.id) { el.textContent = item.obj.id; } else {
          el.textContent = item.obj.tag;
        }
      } else if (item.child && !item.nesting) {
        if (item.class) { el.prepend(item.obj.nameClass); } else
        if (item.id && item.obj.id) { console.log(item.obj.id); el.prepend(item.obj.id); } else {
          console.log(item.obj.tagOpened);
          el.prepend(item.obj.tagOpened);
        }
        if (item.child instanceof Array) {
          console.log(el);
          item.child.forEach((element) => {
            const elChild = document.createElement('div');
            objLevel.elem.forEach((value) => {
              if (value.obj === element && value.nesting.toString().includes(item.col)) {
                elChild.setAttribute('data-hovered', `${element.name}${value.col}`);
                if (value.class) { elChild.textContent = value.obj.nameClass; } else
                if (value.id && value.obj.id) { elChild.textContent = value.obj.id; } else {
                  elChild.textContent = value.obj.tag;
                }
              }
            }); console.log(el); el.append(elChild);
          });
        } el.append(item.obj.tagClosed);
      } this.level.append(el);
    }); this.level.append('</div>');
    return this.level;
  }
}
