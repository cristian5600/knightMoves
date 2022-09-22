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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ2lDO0FBQ0c7QUFDcEM7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBLGtCQUFrQiwwQ0FBSTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLFlBQVk7QUFDakM7QUFDQTtBQUNBLHdCQUF3QixFQUFFLEdBQUcsRUFBRTtBQUMvQixzQkFBc0IsRUFBRSxHQUFHLEVBQUU7QUFDN0Isc0JBQXNCLE9BQU87QUFDN0I7QUFDQTs7QUFFQSxZQUFZLGlEQUFPO0FBQ25CLHlCQUF5QiwwQ0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWSxHQUFHLFlBQVk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLE1BQU0sR0FBRyxNQUFNO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeERPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1IsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDUjtBQUNqQyxrQkFBa0Isa0RBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzREFBUTtBQUN2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2tuaWdodG1vdmVzLy4vc3JjL2ZpbmRQYXRoLmpzIiwid2VicGFjazovL2tuaWdodG1vdmVzLy4vc3JjL25vZGUuanMiLCJ3ZWJwYWNrOi8va25pZ2h0bW92ZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va25pZ2h0bW92ZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tuaWdodG1vdmVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va25pZ2h0bW92ZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rbmlnaHRtb3Zlcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByb3cgPSBbMiwgMiwgLTIsIC0yLCAxLCAxLCAtMSwgLTFdO1xuY29uc3QgY29sID0gWy0xLCAxLCAxLCAtMSwgMiwgLTIsIDIsIC0yXTtcbmltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlLmpzXCI7XG5pbXBvcnQgeyBpc1ZhbGlkIH0gZnJvbSBcIi4vbm9kZS5qc1wiO1xuLy8gTiBpcyB0aGUgbGVuZ3RoIG9mIHRoZSBib2FyZCAoTnhOKVxuLy8gKHhBLHlBKSBzdGFydCBwb3NpdGlvblxuLy8gKHhCLHlCKSBlbmQgcG9zaXRpb25cbmV4cG9ydCBmdW5jdGlvbiBmaW5kUGF0aCh4QSwgeUEsIHhCLCB5QiwgTikge1xuICBsZXQgaXRlcmF0aW9ucyA9IDA7XG4gIGxldCBub2RlQSA9IG5ldyBOb2RlKHhBLCB5QSk7XG4gIGxldCB2aXNpdGVkID0gbmV3IE1hcCgpO1xuICBsZXQgYXJyYXkgPSBbXTtcbiAgYXJyYXkucHVzaChub2RlQSk7XG4gIGxldCBkZWJ1ZyA9IDA7XG4gIHdoaWxlIChhcnJheS5sZW5ndGggPiAwKSB7XG4gICAgZGVidWcrKztcbiAgICBpdGVyYXRpb25zKys7XG4gICAgbGV0IG5vZGUgPSBhcnJheS5zaGlmdCgpO1xuICAgIGxldCB4ID0gbm9kZS54O1xuICAgIGxldCB5ID0gbm9kZS55O1xuICAgIGxldCBkaXN0ID0gbm9kZS5kaXN0O1xuXG4gICAgaWYgKHggPT09IHhCICYmIHkgPT09IHlCKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHtpdGVyYXRpb25zfSBpdGVyYXRpb25zYCk7XG4gICAgICByZXR1cm4gbmV3IHJlc3VsdChkaXN0LCBub2RlKTtcbiAgICB9XG4gICAgaWYgKHZpc2l0ZWQuZ2V0KGAoJHt4fSwke3l9YCkgIT0gdHJ1ZSkge1xuICAgICAgdmlzaXRlZC5zZXQoYCgke3h9LCR7eX1gLCB0cnVlKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgIGxldCB4MSA9IHggKyByb3dbaV07XG4gICAgICAgIGxldCB5MSA9IHkgKyBjb2xbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWQoeDEsIHkxLCBOKSkge1xuICAgICAgICAgIGFycmF5LnB1c2gobmV3IE5vZGUoeDEsIHkxLCBub2RlLCBkaXN0ICsgMSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnNvbGUubG9nKGBmYWlsYCk7XG4gIHJldHVybiBJbmZpbml0eTtcbn1cblxuY2xhc3MgcmVzdWx0IHtcbiAgY29uc3RydWN0b3IoZGlzdCwgcGF0aCkge1xuICAgIHRoaXMuZGlzdCA9IGRpc3Q7XG4gICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgfVxuICBzaG93KCkge1xuICAgIGxldCBzdHJpbmcgPSBgKCR7dGhpcy5wYXRoLnh9LCR7dGhpcy5wYXRoLnl9KT4tLWA7XG4gICAgbGV0IGF1eCA9IHRoaXMucGF0aDtcbiAgICB3aGlsZSAoYXV4LnBhcmVudCAhPSBudWxsKSB7XG4gICAgICBhdXggPSBhdXgucGFyZW50O1xuICAgICAgc3RyaW5nID0gc3RyaW5nICsgYCgke2F1eC54fSwke2F1eC55fSk+LS1gO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhzdHJpbmcuc3BsaXQoXCI+LS1cIikucmV2ZXJzZSgpLmpvaW4oXCItLT5cIikpO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHgsIHksIHBhcmVudCA9IG51bGwsIGRpc3RhbmNlID0gMCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoaXNWYWxpZCh4LCB5KSkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy5kaXN0ID0gZGlzdGFuY2U7XG4gICAgICB9IGVsc2UgdGhyb3cgUmFuZ2VFcnJvcihcImludmFsaWQgbm9kZVwiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkKHgsIHksIE4gPSBJbmZpbml0eSkge1xuICByZXR1cm4geCA+PSAwICYmIHggPCBOICYmIHkgPj0gMCAmJiB5IDwgTjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZmluZFBhdGggfSBmcm9tIFwiLi9maW5kUGF0aC5qc1wiO1xuaW1wb3J0IHsgTm9kZSB9IGZyb20gXCIuL25vZGUuanNcIjtcbndpbmRvdy5maW5kUGF0aCA9IGZpbmRQYXRoO1xuY29uc29sZS5sb2coXG4gIGBydW5uaW5nIGZpbmRQYXRoKDAsIDAsIDUsIDUsIDgpIHRvIGZpbmQgc2hvcnRlc3QgcGF0aCBmcm9tICgwLDApIHRvICg1LDUpYFxuKTtcbmNvbnN0IHJlc3VsdCA9IGZpbmRQYXRoKDAsIDAsIDUsIDUsIDgpO1xucmVzdWx0LnNob3coKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==