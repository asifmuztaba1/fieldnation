/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/canvas.js":
/*!***********************!*\
  !*** ./src/canvas.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n\nlet canvas = document.getElementById(\"canvas\");\nlet ctx = canvas.getContext(\"2d\");\ncanvas.width = _data__WEBPACK_IMPORTED_MODULE_0__.default.width;\ncanvas.height = _data__WEBPACK_IMPORTED_MODULE_0__.default.height;\n\nfunction draw(cell, color) {\n  let width = _data__WEBPACK_IMPORTED_MODULE_0__.default.width / _data__WEBPACK_IMPORTED_MODULE_0__.default.cols,\n      height = _data__WEBPACK_IMPORTED_MODULE_0__.default.height / _data__WEBPACK_IMPORTED_MODULE_0__.default.rows;\n  let [x, y, w, h] = [cell[0] * width, cell[1] * height, width, height].map(Math.round);\n\n  if (color) {\n    ctx.fillStyle = color;\n    ctx.fillRect(x, y, w, h);\n  } else {\n    ctx.clearRect(x, y, w, h);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  drawSegment(cell) {\n    draw(cell, _data__WEBPACK_IMPORTED_MODULE_0__.default.lineColor);\n  },\n\n  eraseCell(cell) {\n    draw(cell);\n  },\n\n  reset() {\n    ctx.clearRect(0, 0, _data__WEBPACK_IMPORTED_MODULE_0__.default.width, _data__WEBPACK_IMPORTED_MODULE_0__.default.height);\n  }\n\n});\n\n//# sourceURL=webpack://ques-3/./src/canvas.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  width: 100,\n  // pixels\n  height: 100,\n  // pixels\n  rows: 20,\n  cols: 20,\n  timeStep: 1000,\n  // milliseconds\n  startX: 0,\n  startY: 0,\n  startDirection: \"turnRight\",\n  lineColor: \"blue\"\n});\n\n//# sourceURL=webpack://ques-3/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n\n_main__WEBPACK_IMPORTED_MODULE_0__.default.init();\n\n//# sourceURL=webpack://ques-3/./src/index.js?");

/***/ }),

/***/ "./src/line.js":
/*!*********************!*\
  !*** ./src/line.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ \"./src/canvas.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ \"./src/main.js\");\n\n\n\n\nfunction die() {\n  _canvas__WEBPACK_IMPORTED_MODULE_1__.default.reset();\n}\n\nfunction contains(cells, cell) {\n  for (let i = 0; i < cells.length; i++) {\n    if (cells[i][0] === cell[0] && cells[i][1] === cell[1]) {\n      return true;\n    }\n  }\n\n  return false;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {\n  constructor(x, y) {\n    [this.x, this.y] = [x, y];\n    [this.dx, this.dy] = [0, 0];\n    this.segments = [[x, y]];\n    this.newSegmentCount = 0;\n  }\n\n  turnRight() {\n    [this.dx, this.dy] = [1, 1];\n  }\n\n  turnLeft() {\n    [this.dx, this.dy] = [-1, 0];\n  }\n\n  turnDown() {\n    [this.dx, this.dy] = [0, 1];\n  }\n\n  turnUp() {\n    [this.dx, this.dy] = [-1, -1];\n  }\n\n  move() {\n    this.x += this.dx;\n    this.y += this.dy;\n\n    if (this.x < 0 || this.x >= _data__WEBPACK_IMPORTED_MODULE_0__.default.cols || this.y < 0 || this.y >= _data__WEBPACK_IMPORTED_MODULE_0__.default.rows) {\n      this.dx += 1;\n      this.dy += -1;\n      _main__WEBPACK_IMPORTED_MODULE_2__.default.nextFrame();\n      this.turnUp();\n    }\n\n    let cell = [this.x, this.y];\n    console.log(cell);\n\n    if (contains(this.segments, cell)) {\n      die();\n      return;\n    }\n\n    this.segments.push(cell);\n    _canvas__WEBPACK_IMPORTED_MODULE_1__.default.drawSegment(cell);\n\n    if (this.newSegmentCount === 0) {\n      let last = this.segments.shift();\n      _canvas__WEBPACK_IMPORTED_MODULE_1__.default.eraseCell(last);\n    } else {\n      this.newSegmentCount--;\n    }\n  }\n\n});\n\n//# sourceURL=webpack://ques-3/./src/line.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ \"./src/canvas.js\");\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line */ \"./src/line.js\");\n\n\n\nlet timeout;\n\nfunction init() {\n  _canvas__WEBPACK_IMPORTED_MODULE_0__.default.reset();\n  let line = new _line__WEBPACK_IMPORTED_MODULE_2__.default(_data__WEBPACK_IMPORTED_MODULE_1__.default.startX, _data__WEBPACK_IMPORTED_MODULE_1__.default.startY);\n  line[_data__WEBPACK_IMPORTED_MODULE_1__.default.startDirection]();\n\n  function nextFrame() {\n    clearTimeout(timeout);\n    timeout = setTimeout(nextFrame, _data__WEBPACK_IMPORTED_MODULE_1__.default.timeStep);\n    line.move();\n  }\n\n  nextFrame();\n}\n\nfunction nextFrame() {\n  clearTimeout(timeout);\n  timeout = setTimeout(this.nextFrame, _data__WEBPACK_IMPORTED_MODULE_1__.default.timeStep);\n}\n\nfunction reset() {\n  clearTimeout(timeout);\n  init();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  init,\n  nextFrame\n});\n\n//# sourceURL=webpack://ques-3/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;