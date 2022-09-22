const row = [2, 2, -2, -2, 1, 1, -1, -1];
const col = [-1, 1, 1, -1, 2, -2, 2, -2];
import { Node } from "./node.js";
import { isValid } from "./node.js";
// N is the length of the board (NxN)
// (xA,yA) start position
// (xB,yB) end position
export function findPath(xA, yA, xB, yB, N) {
  let iterations = 0;
  let nodeA = new Node(xA, yA);
  let visited = new Map();
  let array = [];
  array.push(nodeA);
  let debug = 0;
  while (array.length > 0) {
    debug++;
    iterations++;
    let node = array.shift();
    let x = node.x;
    let y = node.y;
    let dist = node.dist;

    if (x === xB && y === yB) {
      console.log(`${iterations} iterations`);
      return new result(dist, node);
    }
    if (visited.get(`(${x},${y}`) != true) {
      visited.set(`(${x},${y}`, true);
      for (let i = 0; i < 8; i++) {
        let x1 = x + row[i];
        let y1 = y + col[i];

        if (isValid(x1, y1, N)) {
          array.push(new Node(x1, y1, node, dist + 1));
        }
      }
    }
  }
  console.log(`fail`);
  return Infinity;
}

class result {
  constructor(dist, path) {
    this.dist = dist;
    this.path = path;
  }
  show() {
    let string = `(${this.path.x},${this.path.y})>--`;
    let aux = this.path;
    while (aux.parent != null) {
      aux = aux.parent;
      string = string + `(${aux.x},${aux.y})>--`;
    }
    console.log(string.split(">--").reverse().join("-->"));
  }
}
