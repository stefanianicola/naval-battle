/* eslint-disable no-undef */
require('../index');
const { createGrid, isAsunken } = window.index;

describe('game naval battle', () => {
  describe('isAsunken algorithm', () => {
    // algoritmo de juego cuando el user hace click hunde el barco o encuentra agua
    it('is not sunken if there arent any boats there, should return 0', () => {
      expect(isAsunken(0)).toEqual(0);
    });
    it('is  sunken if there is a boat there, should return 1', () => {
      expect(isAsunken(1)).toEqual(1);
    });
  });
  // crear una matriz reutilizable que sirva para el usuario y para la PC
  describe('create grid', () => {
    it('should create a array of X * X', () => {
      expect(createGrid(1)).toEqual([0]);
      expect(createGrid(2)).toEqual([0, 0, 0, 0]);
    });
  });
  // crear los barcos
  // crear la grilla con los barcos aleatoreamente para la pc
  // crear la grilla vacia del usuario
  // crear interaccion del usuario para posicionar los barcos
  // crear interaccion del usuario para hundir barcos
  // crear interaccion aleatoria de la pc para hundir barcos del user
  // chequear si quedan barcos en flote para ver si existe algun ganador
});
