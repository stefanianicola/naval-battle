/* eslint-disable no-undef */
import * as indexFile from '../index';

// crear una matriz reutilizable que sirva para el usuario y para la PC.
describe('create grid', () => {
  it('should create a array of X * X', () => {
    expect(indexFile.createGrid(1)).toEqual([0]);
    expect(indexFile.createGrid(2)).toEqual([0, 0, 0, 0]);
  });
});

// Pintar la grilla en la pantalla
describe('grid in the browser', () => {
  it('should display the grid', () => {
    document.body.innerHTML = '<div id="grid"></div>';
    indexFile.drawGrid([0, 0, 1, 1]);
    expect(document.querySelectorAll('.row').length).toEqual(2);
  });
});

// crear los barcos
describe('create ship', () => {
  it('should create an object with nodes', () => {
    expect(indexFile.createShip(1, 'horizontal')).toEqual({
      position: 'horizontal',
      root: 1,
    });
  });
  it('should create an object with nodes11', () => {
    const shipSize = indexFile.createShip(2, 'horizontal');

    expect(shipSize.size.length).toEqual(2);
  });
  it('should yield undefined if not position', () => {
    const createShips = () => {
      indexFile.createShip(2);
    };
    expect(createShips).toThrow(/empty params/);
  });
  it('should yield error', () => {
    const createShips = () => {
      indexFile.createShip();
    };
    expect(createShips).toThrow(/empty params/);
  });
});

// Pintar la barcos en la pantalla
describe('ship in the browser', () => {
  it('should display horizontal ship', () => {
    document.body.innerHTML = '<div id="ships"></div>';
    const ship = { position: 'horizontal', root: 3 };
    indexFile.drawShip(ship);
    if (ship.position === 'horizontal') {
      expect(document.querySelectorAll('.row').length).toEqual(1);
    } else {
      expect(document.querySelectorAll('.row').length).toEqual(ship.size);
    }
  });
  it('should display all ships', () => {
    const drawShip = jest.fn();
    const allShips = [];
    indexFile.drawAllShips();
    expect(drawShip).toHaveBeenCalledTimes(allShips.length);
    // expect(document.querySelectorAll('.ship').length).toEqual(3);
  });
});

describe('isAsunken algorithm', () => {
  // algoritmo de juego cuando el user hace click hunde el barco o encuentra agua
  it('is not sunken if there arent any boats there, should return 0', () => {
    expect(indexFile.isAsunken(0)).toEqual(0);
  });
  it('is  sunken if there is a boat there, should return 1', () => {
    expect(indexFile.isAsunken(1)).toEqual(1);
  });
});

// crear la grilla con los barcos aleatoreamente para la pc
// crear la grilla vacia del usuario
// crear interaccion del usuario para posicionar los barcos
// crear interaccion del usuario para hundir barcos
// crear interaccion aleatoria de la pc para hundir barcos del user
// chequear si quedan barcos en flote para ver si existe algun ganador
