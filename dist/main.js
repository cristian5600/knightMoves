/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/findPath.js":
/*!*************************!*\
  !*** ./src/findPath.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findPath": () => (/* binding */ findPath)
/* harmony export */ });
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ "./src/node.js");
const row = [2, 2, -2, -2, 1, 1, -1, -1];
const col = [-1, 1, 1, -1, 2, -2, 2, -2];


// N is the length of the board (NxN)
// (xA,yA) start position
// (xB,yB) end position
function findPath(xA, yA, xB, yB, N) {
  let iterations = 0;
  let nodeA = new _node_js__WEBPACK_IMPORTED_MODULE_0__.Node(xA, yA);
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

        if ((0,_node_js__WEBPACK_IMPORTED_MODULE_0__.isValid)(x1, y1, N)) {
          array.push(new _node_js__WEBPACK_IMPORTED_MODULE_0__.Node(x1, y1, node, dist + 1));
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


/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Node": () => (/* binding */ Node),
/* harmony export */   "isValid": () => (/* binding */ isValid)
/* harmony export */ });
class Node {
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
function isValid(x, y, N = Infinity) {
  return x >= 0 && x < N && y >= 0 && y < N;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _findPath_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findPath.js */ "./src/findPath.js");
/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node.js */ "./src/node.js");


window.findPath = _findPath_js__WEBPACK_IMPORTED_MODULE_0__.findPath;
console.log(
  `running findPath(0, 0, 5, 5, 8) to find shortest path from (0,0) to (5,5)`
);
const result = (0,_findPath_js__WEBPACK_IMPORTED_MODULE_0__.findPath)(0, 0, 5, 5, 8);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ2lDO0FBQ0c7QUFDcEM7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGtCQUFrQiwwQ0FBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLFlBQVk7QUFDakM7QUFDQTtBQUNBLHdCQUF3QixFQUFFLEdBQUcsRUFBRTtBQUMvQixzQkFBc0IsRUFBRSxHQUFHLEVBQUU7QUFDN0Isc0JBQXNCLE9BQU87QUFDN0I7QUFDQTs7QUFFQSxZQUFZLGlEQUFPO0FBQ25CLHlCQUF5QiwwQ0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxHQUFHLFlBQVk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE1BQU0sR0FBRyxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeERPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDUjtBQUNqQyxrQkFBa0Isa0RBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzREFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rbmlnaHRtb3Zlcy8uL3NyYy9maW5kUGF0aC5qcyIsIndlYnBhY2s6Ly9rbmlnaHRtb3Zlcy8uL3NyYy9ub2RlLmpzIiwid2VicGFjazovL2tuaWdodG1vdmVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2tuaWdodG1vdmVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9rbmlnaHRtb3Zlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2tuaWdodG1vdmVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8va25pZ2h0bW92ZXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgcm93ID0gWzIsIDIsIC0yLCAtMiwgMSwgMSwgLTEsIC0xXTtcbmNvbnN0IGNvbCA9IFstMSwgMSwgMSwgLTEsIDIsIC0yLCAyLCAtMl07XG5pbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZS5qc1wiO1xuaW1wb3J0IHsgaXNWYWxpZCB9IGZyb20gXCIuL25vZGUuanNcIjtcbi8vIE4gaXMgdGhlIGxlbmd0aCBvZiB0aGUgYm9hcmQgKE54Tilcbi8vICh4QSx5QSkgc3RhcnQgcG9zaXRpb25cbi8vICh4Qix5QikgZW5kIHBvc2l0aW9uXG5leHBvcnQgZnVuY3Rpb24gZmluZFBhdGgoeEEsIHlBLCB4QiwgeUIsIE4pIHtcbiAgbGV0IGl0ZXJhdGlvbnMgPSAwO1xuICBsZXQgbm9kZUEgPSBuZXcgTm9kZSh4QSwgeUEpO1xuICBsZXQgdmlzaXRlZCA9IG5ldyBNYXAoKTtcbiAgbGV0IGFycmF5ID0gW107XG4gIGFycmF5LnB1c2gobm9kZUEpO1xuICBsZXQgZGVidWcgPSAwO1xuICB3aGlsZSAoYXJyYXkubGVuZ3RoID4gMCkge1xuICAgIGRlYnVnKys7XG4gICAgaXRlcmF0aW9ucysrO1xuICAgIGxldCBub2RlID0gYXJyYXkuc2hpZnQoKTtcbiAgICBsZXQgeCA9IG5vZGUueDtcbiAgICBsZXQgeSA9IG5vZGUueTtcbiAgICBsZXQgZGlzdCA9IG5vZGUuZGlzdDtcblxuICAgIGlmICh4ID09PSB4QiAmJiB5ID09PSB5Qikge1xuICAgICAgY29uc29sZS5sb2coYCR7aXRlcmF0aW9uc30gaXRlcmF0aW9uc2ApO1xuICAgICAgcmV0dXJuIG5ldyByZXN1bHQoZGlzdCwgbm9kZSk7XG4gICAgfVxuICAgIGlmICh2aXNpdGVkLmdldChgKCR7eH0sJHt5fWApICE9IHRydWUpIHtcbiAgICAgIHZpc2l0ZWQuc2V0KGAoJHt4fSwke3l9YCwgdHJ1ZSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICBsZXQgeDEgPSB4ICsgcm93W2ldO1xuICAgICAgICBsZXQgeTEgPSB5ICsgY29sW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkKHgxLCB5MSwgTikpIHtcbiAgICAgICAgICBhcnJheS5wdXNoKG5ldyBOb2RlKHgxLCB5MSwgbm9kZSwgZGlzdCArIDEpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zb2xlLmxvZyhgZmFpbGApO1xuICByZXR1cm4gSW5maW5pdHk7XG59XG5cbmNsYXNzIHJlc3VsdCB7XG4gIGNvbnN0cnVjdG9yKGRpc3QsIHBhdGgpIHtcbiAgICB0aGlzLmRpc3QgPSBkaXN0O1xuICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gIH1cbiAgc2hvdygpIHtcbiAgICBsZXQgc3RyaW5nID0gYCgke3RoaXMucGF0aC54fSwke3RoaXMucGF0aC55fSk+LS1gO1xuICAgIGxldCBhdXggPSB0aGlzLnBhdGg7XG4gICAgd2hpbGUgKGF1eC5wYXJlbnQgIT0gbnVsbCkge1xuICAgICAgYXV4ID0gYXV4LnBhcmVudDtcbiAgICAgIHN0cmluZyA9IHN0cmluZyArIGAoJHthdXgueH0sJHthdXgueX0pPi0tYDtcbiAgICB9XG4gICAgY29uc29sZS5sb2coc3RyaW5nLnNwbGl0KFwiPi0tXCIpLnJldmVyc2UoKS5qb2luKFwiLS0+XCIpKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBwYXJlbnQgPSBudWxsLCBkaXN0YW5jZSA9IDApIHtcbiAgICB0cnkge1xuICAgICAgaWYgKGlzVmFsaWQoeCwgeSkpIHtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuZGlzdCA9IGRpc3RhbmNlO1xuICAgICAgfSBlbHNlIHRocm93IFJhbmdlRXJyb3IoXCJpbnZhbGlkIG5vZGVcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZCh4LCB5LCBOID0gSW5maW5pdHkpIHtcbiAgcmV0dXJuIHggPj0gMCAmJiB4IDwgTiAmJiB5ID49IDAgJiYgeSA8IE47XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGZpbmRQYXRoIH0gZnJvbSBcIi4vZmluZFBhdGguanNcIjtcbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlLmpzXCI7XG53aW5kb3cuZmluZFBhdGggPSBmaW5kUGF0aDtcbmNvbnNvbGUubG9nKFxuICBgcnVubmluZyBmaW5kUGF0aCgwLCAwLCA1LCA1LCA4KSB0byBmaW5kIHNob3J0ZXN0IHBhdGggZnJvbSAoMCwwKSB0byAoNSw1KWBcbik7XG5jb25zdCByZXN1bHQgPSBmaW5kUGF0aCgwLCAwLCA1LCA1LCA4KTtcbnJlc3VsdC5zaG93KCk7XG5jb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYHBgKTtcbmNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgcGApO1xuY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBwYCk7XG5jb25zdCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYHBgKTtcbnAxLmlubmVySFRNTCA9IGBBIGZ1bmN0aW9uIHRoYXQgd2hlbiBnaXZlbiAyIHBvc2l0aW9uIEEgYW5kIEIsIFxucmV0dXJucyB0aGUgc2hvcnRlc3QgcGF0aCBhIGtuaWdodCB3b3VsZCBoYXZlIHRvIHRha2UgdG8gZ2V0IHRvIEIgZnJvbSBBLmA7XG5wMi5pbm5lckhUTUwgPSBgVG8gY2hlY2sgdGhlIGZ1bmN0aW9uIHlvdSBjYW4gY2xvbmUgdGhlIHByb2plY3Qgb3Igb3BlbiBmcm9tXG4gZ2l0aHViJ3MgcGFnZS1lbnZpcm9tZW50IGFuZCB1c2UgdGhlIGZ1bmN0aW9uIGFzIHN1Y2g6YDtcbnAzLmlubmVySFRNTCA9IGAtaWYgQSA9ICh4QSx4QikgYW5kIEIgPSAoeEIseUIpIGFuZCBOIC0gdGhlIGxlbmd0aCBvZiB0aGUgY2hlc3NCb2FyZCwgKE54TilgO1xucDQuaW5uZXJIVE1MID0gYFxuLWZpbmRQYXRoKHhBLHhCLHhCLHlCLE4pLnNob3coKSB3aWxsIGNvbnNvbGUubG9nIHRoZSBwYXRoIDopYDtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwMSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHAyKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocDMpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwNCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=