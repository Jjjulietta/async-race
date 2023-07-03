import { arrTabEl } from './data';

export class Level {
  public level: HTMLElement;

  constructor() {
    this.level = document.createElement('div');
    this.level.classList.add('table-div');
  }

  public getLevelUn(num:string): HTMLElement {
    const objLevel = arrTabEl[Number(num) - 1];
    this.level.append('<div class="table">');
    objLevel.elem.forEach((item) => {
      const el = document.createElement('div');
      el.classList.add('language-html');
      el.setAttribute('data-hovered', `${item.name}${item.col}`);
      if (!item.child && !item.nesting) {
        if (item.class) { el.textContent = item.obj.nameClass; } else
        if (item.id && item.obj.id) { el.textContent = item.obj.id; } else {
          el.textContent = item.obj.tag;
        }
      } else if (item.child && !item.nesting) {
        if (item.class) { el.prepend(item.obj.nameClass); } else
        if (item.id && item.obj.id) { el.prepend(item.obj.id); } else {
          el.prepend(item.obj.tagOpened);
        }
        if (item.child instanceof Array) {
          item.child.forEach((element) => {
            const elChild = document.createElement('div');
            objLevel.elem.forEach((value) => {
              if (value.obj === element && value.nesting.toString().includes(item.col)) {
                elChild.setAttribute('data-hovered', `${element.name}${value.col}`);
                elChild.classList.add('language-html');
                if (value.class) { elChild.textContent = value.obj.nameClass; } else
                if (value.id && value.obj.id) { elChild.textContent = value.obj.id; } else {
                  elChild.textContent = value.obj.tag;
                }
              }
            }); el.append(elChild);
          });
        } el.append(item.obj.tagClosed);
      } this.level.append(el);
    }); this.level.append('</div>');
    return this.level;
  }
}
