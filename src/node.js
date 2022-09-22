export class Node {
  constructor(x, y, parent = null, distance = 0) {
    try {
      if (isValid(x, y)) {
        this.parent = parent;
        this.x = x;
        this.y = y;
        this.dist = distance;
      } else throw RangeError("invalid node");
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
export function isValid(x, y, N = Infinity) {
  return x >= 0 && x < N && y >= 0 && y < N;
}
