import { Grid } from './components/classes/grid.js';
import { Ship } from './components/classes/ship.js';

export const createElement = (className) => {
  const element = document.createElement('div');
  element.className = className;
  return element;
};

export const drawGrid = (cells) => {
  const width = Math.sqrt(cells.length);
  const grid = document.getElementById('grid');
  const container = createElement('container');
  let row;
  cells.forEach((cell, index) => {
    if (index % width === 0) {
      row = createElement('row');
      container.appendChild(row);
    }
    const cellEl = createElement('cell');
    row.appendChild(cellEl);
  });
  if (grid !== null) {
    grid.innerHTML = '';
    grid.appendChild(container);
  }
};

export const createShip = (root, position) => {
  if (root && position) {
    const ship = new Ship(root, position);
    return ship;
  } else {
    // eslint-disable-next-line no-throw-literal
    throw 'empty params';
  }
};

export const isAsunken = (boat) => (boat === 1 ? 1 : 0);

export const createGrid = (x) => {
  const grid = new Grid(x);
  return grid.area;
};

drawGrid(createGrid(10));
