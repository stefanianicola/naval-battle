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

export const drawShip = (ships) => {
  const ship = document.getElementById('ships');
  const container = createElement('containerShip');
  let row, cellEl;
  if (ships.position === 'horizontal') {
    row = createElement('row');
    container.appendChild(row);

    ships.size.forEach(() => {
      cellEl = createElement('ship');
      return row.appendChild(cellEl);
    });
  } else {
    // eslint-disable-next-line array-callback-return
    ships.size.forEach(() => {
      row = createElement('row');
      container.appendChild(row);
      const cellEl = createElement('ship');
      return row.appendChild(cellEl);
    });
  }

  if (ship !== null) {
    ship.appendChild(container);
  }
};

export const drawAllShips = () => {
  const allShips = [
    new Ship(5, 'horizontal'),
    new Ship(5, 'vertical'),
    new Ship(4, 'horizontal'),
    new Ship(4, 'vertical'),
    new Ship(3, 'horizontal'),
    new Ship(3, 'vertical'),
    new Ship(2, 'horizontal'),
    new Ship(2, 'vertical'),
  ];
  allShips.map((n) => drawShip(n));
};

export const isAsunken = (boat) => (boat === 1 ? 1 : 0);

export const createGrid = (x) => {
  const grid = new Grid(x);
  return grid.area;
};

drawGrid(createGrid(10));
drawAllShips();
