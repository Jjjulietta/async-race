export class BlockEditor {
  public static createEditor(): HTMLElement {
    const editor = document.createElement('div');
    editor.classList.add('editor');
    return editor;
  }

  public static createBlockEditor(): HTMLElement {
    const blockEditor = document.createElement('div');
    blockEditor.classList.add('editor-block');
    return blockEditor;
  }

  public static createHeaderEditor():HTMLElement {
    const headerEditor = document.createElement('div');
    headerEditor.classList.add('header-editor');
    const headerName = document.createElement('div');
    headerName.classList.add('header-name');
    headerEditor.append(headerName);
    const editorName = document.createElement('div');
    editorName.classList.add('editor-name');
    headerEditor.append(editorName);
    return headerEditor;
  }

  public static createLineBlock():HTMLElement {
    const lineBlock = document.createElement('div');
    lineBlock.classList.add('line-block');
    lineBlock.innerHTML = '1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9<br>10<br>';
    return lineBlock;
  }

  public static createWindowBlock():HTMLElement {
    const window = document.createElement('div');
    window.classList.add('window-block');
    return window;
  }

  public static createMainWindow():HTMLElement {
    const window = document.createElement('div');
    window.classList.add('window-main');
    return window;
  }

  public static createInput():HTMLInputElement {
    const input = document.createElement('input');
    input.classList.add('input');
    input.setAttribute('placeholder', 'Type in a css selector');
    input.setAttribute('type', 'text');
    input.setAttribute('value', '');
    return input;
  }

  public static createButton():HTMLDivElement {
    const button = document.createElement('div');
    button.classList.add('button-css');
    button.innerHTML = 'enter';
    return button;
  }
}
