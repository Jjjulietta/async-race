export class LevelBlock {
  public static createLevelBlock():HTMLElement {
    const blockLevel = document.createElement('div');
    blockLevel.classList.add('block-level');
    return blockLevel;
  }

  public static createLevelHeader():HTMLElement {
    const titleLevel = document.createElement('h2');
    titleLevel.classList.add('title-level');
    const spanTitle = document.createElement('span');
    spanTitle.innerHTML = 'Level';
    const spanLevel = document.createElement('span');
    spanLevel.innerHTML = '';
    titleLevel.append(spanTitle);
    titleLevel.append(spanLevel);
    return titleLevel;
  }

  public static createMark():HTMLElement {
    const div = document.createElement('div');
    div.classList.add('mark');
    div.innerHTML = '>';
    return div;
  }

  public static createLevel():HTMLElement {
    const level = document.createElement('div');
    level.classList.add('level');
    return level;
  }

  public static createButton():HTMLElement {
    const button = document.createElement('div');
    button.classList.add('level-btn');
    button.innerHTML = 'RESET PROGRESS';
    return button;
  }
}
