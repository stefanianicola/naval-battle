export class Ship {
  constructor(root, position) {
    this.position = position; // 0 = horizontal ... 1 = vertical
    this.root = root;
  }

  // Getter
  get size() {
    return this.calcSize();
  }

  // Método
  calcSize() {
    return new Array(this.root).fill(0);
  }
}

// barcos
// longitud 5,4,3,2
// cantidad 1,1,1,2
// posicion vertical/horizontal
