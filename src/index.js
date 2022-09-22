import { findPath } from "./findPath.js";
import { Node } from "./node.js";
window.findPath = findPath;
console.log(
  `running findPath(0, 0, 5, 5, 8) to find shortest path from (0,0) to (5,5)`
);
const result = findPath(0, 0, 5, 5, 8);
result.show();
const p1 = document.createElement(`p`);
const p2 = document.createElement(`p`);
const p3 = document.createElement(`p`);
const p4 = document.createElement(`p`);
p1.innerHTML = `A function that when given 2 position A and B, 
returns the shortest path a knight would have to take to get to B from A.`;
p2.innerHTML = `To check the function you can clone the project or open from
 github's page-enviroment and use the function as such:`;
p3.innerHTML = `-if A = (xA,xB) and B = (xB,yB) and N - the length of the chessBoard, (NxN)`;
p4.innerHTML = `
-findPath(xA,xB,xB,yB,N).show() will console.log the path :)`;

document.body.appendChild(p1);
document.body.appendChild(p2);
document.body.appendChild(p3);
document.body.appendChild(p4);
