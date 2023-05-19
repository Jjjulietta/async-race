export default class Field {
  constructor(width, heigth) {
    this.field = null;

    this.width = width;
    this.heigth = heigth;
  }

  openBasic() {
    const number = this.width * this.heigth;
    const field = document.createElement('div');
    field.classList.add('field');
    // field.innerHTML = '<button class="button"></button>'.repeat(number);
    for (let i = 0; i < +number; i += 1) {
      const button = document.createElement('button');
      button.classList.add('button');
      field.append(button);
    }

    return field;
  }

  getMines(minesNumber) {
    const number = this.width * this.heigth;
    const arr = [];
    for (let i = 0; i < number; i += 1) {
      arr.push(i);
    }

    arr.sort(() => Math.random() - 0.5);
    const minesArr = arr.splice(0, minesNumber);
    return minesArr;
  }

  getNumber(numberButton, minesArr) {
    let count = 0;

    if (minesArr.includes(numberButton)) { return; }

    const numCol = numberButton % this.width;
    const numRow = Math.floor(numberButton / this.width);
    for (let i = numCol - 1; i <= numCol + 1; i += 1) {
      for (let j = numRow - 1; j <= numRow + 1; j += 1) {
        if (i < 0 || j < 0 || i >= this.width || j >= this.width) { continue; }
        const n = j * this.width + i;

        if (minesArr.includes(n)) {
          count += 1;
        }
      }
    } return count;
  }

  noValid(numberButton) {
    const { width } = this;
    const numCol = numberButton % width;
    const numRow = Math.floor(numberButton / width);

    if (numCol < 0 || numRow < 0 || numCol >= width || numRow >= width) return true;
  }

  openNeighbour(numberButton, minesArr) {
    const { width } = this;
    const numCol = numberButton % width;
    const numRow = Math.floor(numberButton / width);
    const numbers = [];
    for (let i = numCol - 1; i <= numCol + 1; i += 1) {
      if (i < 0 || i >= width) { continue; }
      for (let j = numRow - 1; j <= numRow + 1; j += 1) {
        if (j < 0 || j >= width || (i === numCol && j === numRow)) { continue; }
        const n = j * width + i;
        if (minesArr.includes(n)) { return; }

        numbers.push(n);
      }
    } return numbers;
  }
}
