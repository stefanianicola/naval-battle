export class Grid {
  constructor(root) {
    this.root = root;
  }

  // Getter
  get area() {
    return this.calcArea();
  }

  // Método
  calcArea() {
    return new Array(this.root * this.root).fill(0);
  }
}
