export class Elements {
  /* public element: HTMLElement;

  constructor(name: string, className: string) {
    this.element = document.createElement(name);
    this.element.classList.add(className);
  } */
  public static createElemen(name:string): HTMLElement {
    const el = document.createElement(name);
    el.classList.add(name);
    return el;
  }
}
