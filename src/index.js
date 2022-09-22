import { findPath } from "./findPath.js";
import { Node } from "./node.js";
window.findPath = findPath;
console.log(
  `running findPath(0, 0, 5, 5, 8) to find shortest path from (0,0) to (5,5)`
);
const result = findPath(0, 0, 5, 5, 8);
result.show();
