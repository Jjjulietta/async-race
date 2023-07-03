// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom/extend-expect';

import { LevelBlock } from './blockLevel';
import { TableGenerator } from './TableGenerator';
import { Level } from './Level';
import { BlockEditor } from './blockEditor';
import { checkLevel } from '../index';

describe('createLevelHeader', () => {
  const levelBody = LevelBlock.createLevelBlock();
  const title = LevelBlock.createLevelHeader();
  it('should create levelblock', () => {
    expect(levelBody).toBeDefined();
  });
  it('should create title', () => {
    expect(title).toHaveTextContent('Level');
  });
});

describe('createTableOne', () => {
  const generator = new TableGenerator();
  let tableOne: HTMLElement;
  beforeEach(() => {
    tableOne = generator.createTableUn('1');
  });
  afterEach(() => {
    generator.clearTable();
  });

  it('should create table level 1', () => {
    expect(tableOne).toBeDefined();
  });
  it('should consists elem orange', () => {
    expect(tableOne.firstElementChild).toContainHTML('<orange class="orange checked" data-hovered="orangeOne" />');
  });
});

describe('createTableFive', () => {
  const generator = new TableGenerator();
  const tableFive: HTMLElement = generator.createTableUn('5');
  it('should create table level 5', () => {
    expect(tableFive).toBeDefined();
  });
  it('should consists elem orange', () => {
    expect(tableFive).toContainHTML('<apple class="apple checked" data-hovered="appleOne" id="green" />');
  });
});

describe('createEditorLevel', () => {
  const levelEditor = new Level();
  const levelTwo = levelEditor.getLevelUn('2');
  it('should create editor level 2', () => {
    expect(levelTwo).toBeDefined();
  });
  it('should consists elem orange', () => {
    expect(levelTwo).toContainHTML('<div class="language-html" data-hovered="appleOne" />');
  });
});

describe('createBlockEditor', () => {
  const input: HTMLElement = BlockEditor.createInput();
  it('should create input', () => {
    expect(input).toBeDefined();
  });
  it('should consists plaseholder', () => {
    expect(input).toHaveAttribute('placeholder');
  });
  it('should plaseholder consist text', () => {
    expect(input).toBeValid();
  });
});

describe('checklevel', () => {
  checkLevel('2');
  const table = document.querySelector('.tablecloth');
  const editor = document.querySelector('.table-div');
  it('should create table level 2', () => {
    expect(table).toContainHTML('<div class="tablecloth"><div class="table-gen"><plate class="plate" data-hovered="plateOne"><apple class="apple checked" data-hovered="appleOne" /></plate></div></div>');
  });
  it('should create editorHtml level 2', () => {
    expect(editor).toHaveTextContent('<div class="table"><plate><apple></apple></plate></div>');
  });
});
