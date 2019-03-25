/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _App = __webpack_require__(/*! ../shared/App */ \"./src/shared/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar app = (0, _express2.default)();\napp.use(_express2.default.static(\"public\"));\n\napp.get(\"*\", function (req, res, next) {\n    var context = {};\n    var markup = _server2.default.renderToString(_react2.default.createElement(\n        _reactRouterDom.StaticRouter,\n        { location: req.url, context: context },\n        _react2.default.createElement(_App2.default, null)\n    ));\n\n    fs.readFile(\"./public/renderHtml.html\", \"utf8\", function (err, htmlstr) {\n        if (err) {\n            console.error('Something went wrong:', err);\n            return res.status(500).send('Oops, better luck next time!');\n        } else {\n            var htmlstring = htmlstr.replace(\"<!--markupdata-placeholder-->\", markup);\n            res.send(htmlstring);\n        }\n    });\n});\n\nvar PORT = process.env.port || 3000;\n\napp.listen(PORT, function () {\n    console.log(\"Server is listening on port: 3000\");\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/shared/App.js":
/*!***************************!*\
  !*** ./src/shared/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Search = __webpack_require__(/*! ./Search */ \"./src/shared/Search.js\");\n\nvar _Search2 = _interopRequireDefault(_Search);\n\nvar _Films = __webpack_require__(/*! ./Films */ \"./src/shared/Films.js\");\n\nvar _Films2 = _interopRequireDefault(_Films);\n\nvar _FilmDescription = __webpack_require__(/*! ./FilmDescription */ \"./src/shared/FilmDescription.js\");\n\nvar _FilmDescription2 = _interopRequireDefault(_FilmDescription);\n\nvar _NotFound = __webpack_require__(/*! ./NotFound */ \"./src/shared/NotFound.js\");\n\nvar _NotFound2 = _interopRequireDefault(_NotFound);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (props) {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            'ul',\n            null,\n            _react2.default.createElement(\n                'li',\n                null,\n                _react2.default.createElement(\n                    _reactRouterDom.NavLink,\n                    { to: '/' },\n                    'Search'\n                )\n            ),\n            _react2.default.createElement(\n                'li',\n                null,\n                _react2.default.createElement(\n                    _reactRouterDom.NavLink,\n                    { to: '/films' },\n                    'Films'\n                )\n            ),\n            _react2.default.createElement(\n                'li',\n                null,\n                _react2.default.createElement(\n                    _reactRouterDom.NavLink,\n                    { to: '/film-description' },\n                    'FilmDescription'\n                )\n            )\n        ),\n        _react2.default.createElement(\n            _reactRouterDom.Switch,\n            null,\n            _react2.default.createElement(_reactRouterDom.Route, {\n                exact: true,\n                path: '/',\n                render: function render(props) {\n                    return _react2.default.createElement(_Search2.default, props);\n                }\n            }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/films', component: _Films2.default }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/film-description', component: _FilmDescription2.default }),\n            _react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default })\n        )\n    );\n};\n\n//# sourceURL=webpack:///./src/shared/App.js?");

/***/ }),

/***/ "./src/shared/FilmDescription.js":
/*!***************************************!*\
  !*** ./src/shared/FilmDescription.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar FilmDescription = function FilmDescription() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    'FilmDescription'\n  );\n};\n\nexports.default = FilmDescription;\n\n//# sourceURL=webpack:///./src/shared/FilmDescription.js?");

/***/ }),

/***/ "./src/shared/Films.js":
/*!*****************************!*\
  !*** ./src/shared/Films.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Films = function Films() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    'Films'\n  );\n};\n\nexports.default = Films;\n\n//# sourceURL=webpack:///./src/shared/Films.js?");

/***/ }),

/***/ "./src/shared/NotFound.js":
/*!********************************!*\
  !*** ./src/shared/NotFound.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (_ref) {\n    var _ref$staticContext = _ref.staticContext,\n        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;\n\n    staticContext.status = 404;\n    return _react2.default.createElement(\n        'h1',\n        null,\n        'Oops, nothing here!'\n    );\n};\n\n//# sourceURL=webpack:///./src/shared/NotFound.js?");

/***/ }),

/***/ "./src/shared/Search.js":
/*!******************************!*\
  !*** ./src/shared/Search.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Search = function Search() {\n  return _react2.default.createElement(\n    'div',\n    null,\n    'Search'\n  );\n};\n\nexports.default = Search;\n\n//# sourceURL=webpack:///./src/shared/Search.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });