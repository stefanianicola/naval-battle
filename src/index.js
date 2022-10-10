const isAsunken = (boat) => (boat === 1 ? 1 : 0);

const createGrid = (root) => new Array(root * root).fill(0);

window.index = {
  createGrid,
  isAsunken,
};
