import './blockStyles.css';

export class BlockOne {
  public static createHeader(): HTMLElement {
    const header = document.createElement('header');
    header.classList.add('header');
    const logo = document.createElement('div');
    logo.classList.add('logo');
    const logoName = document.createElement('div');
    logoName.innerHTML = 'CSS Diner';
    const plate = document.createElement('plate');
    plate.classList.add('plate');
    const apple = document.createElement('apple');
    logo.append(plate);
    plate.append(apple);
    header.append(logo);
    header.append(logoName);
    return header;
  }

  public static createTitle(): HTMLElement {
    const title = document.createElement('h2');
    title.innerHTML = 'Select the plates';
    title.classList.add('title');
    return title;
  }

  public static createHelp(): HTMLDivElement {
    const help = document.createElement('div');
    const helpLink = document.createElement('a');
    help.classList.add('help-btn');
    helpLink.setAttribute('href', '#');
    helpLink.innerHTML = 'Help!';
    help.append(helpLink);
    return help;
  }

  public static createTable(): HTMLElement {
    const tableWrapper = document.createElement('div');
    const table = document.createElement('div');
    const tableBottom = document.createElement('div');
    const tableLegOne = document.createElement('div');
    const tableLegTwo = document.createElement('div');
    tableLegOne.classList.add('table-leg');
    tableLegTwo.classList.add('table-leg');
    tableBottom.classList.add('tableBottom');
    tableBottom.append(tableLegOne);
    tableBottom.append(tableLegTwo);
    tableWrapper.classList.add('tableWrapper');
    table.classList.add('table');
    tableWrapper.append(table);
    tableWrapper.append(tableBottom);
    return tableWrapper;
  }

  public static createTableTab(): HTMLElement {
    const table = document.createElement('div');
    table.classList.add('table-tab');
    return table;
  }

  public static createTableGame(): HTMLElement {
    const tablecloth = document.createElement('div');
    tablecloth.classList.add('tablecloth');
    return tablecloth;
  }

  public static createFooter(): HTMLElement {
    const header = document.createElement('footer');
    header.classList.add('footer');
    const container = document.createElement('div');
    container.classList.add('footer-cont');
    const logo = document.createElement('div');
    logo.classList.add('logo-footer');
    const logoLine = document.createElement('a');
    logoLine.classList.add('logo-link');
    logoLine.setAttribute('href', 'https://rs.school/js/');
    const span = document.createElement('span');
    span.innerHTML = '2023';
    const logoGit = document.createElement('div');
    logoGit.classList.add('logo-git');
    const gitLink = document.createElement('a');
    gitLink.classList.add('git-link');
    gitLink.setAttribute('href', 'https://github.com/Jjjulietta');
    logoGit.append(gitLink);
    header.append(container);
    container.append(logo);
    container.append(span);
    container.append(logoGit);
    logo.append(logoLine);
    return header;
  }

  public static createPopap(): HTMLElement {
    const popap = document.createElement('div');
    popap.classList.add('popap');
    const popapBody = document.createElement('div');
    popapBody.classList.add('popap-body');
    const popapContent = document.createElement('div');
    popapContent.classList.add('popap-content');
    popap.append(popapBody);
    popapBody.append(popapContent);
    popapContent.innerHTML = 'Сongratulations! you have successfully completed all levels!';
    return popap;
  }
}
