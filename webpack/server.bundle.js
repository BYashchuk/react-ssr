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
/******/ 	__webpack_require__.p = "../";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./src/shared/redux/components/FilmDescription/filmDescription.css":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/shared/redux/components/FilmDescription/filmDescription.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".btn-back{\\r\\n    width: 150px;\\r\\n    height: 40px;\\r\\n    background: transparent;\\r\\n    border-radius: 10px;\\r\\n    border: 1px solid black;\\r\\n}\\r\\n\\r\\n.descript-img{\\r\\n    height: 400px;\\r\\n}\\r\\n\\r\\n.margi-size-20{\\r\\n    margin-right: 20px;\\r\\n    margin-left: 20px;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/shared/redux/components/FilmDescription/filmDescription.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/shared/redux/components/Films/ItemFilm/itemFilm.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/shared/redux/components/Films/ItemFilm/itemFilm.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".item-film{\\r\\n    display: inline-block;\\r\\n    margin: 20px;\\r\\n    width: 100%;\\r\\n    min-width: 150px;\\r\\n    max-width:230px;\\r\\n    text-align: center;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    max-height: 400px;\\r\\n    vertical-align: middle;\\r\\n}\\r\\n\\r\\n.item-img{\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    max-height: 400px;\\r\\n}\\r\\n\\r\\n.genre{\\r\\n    height: 40px;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/shared/redux/components/Films/ItemFilm/itemFilm.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/shared/redux/components/Films/films.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/shared/redux/components/Films/films.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".error{\\r\\n    margin: 25px 0 25px 0;\\r\\n}\\r\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/shared/redux/components/Films/films.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/shared/redux/components/Search/search.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/shared/redux/components/Search/search.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".bg-silver{\\r\\n    background: #f2f2f2;\\r\\n    width: 100%;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n.form-on-center{\\r\\n    text-align: center;\\r\\n    padding-top: 30vh;\\r\\n    height: 50vh;\\r\\n}\\r\\n\\r\\n.search-input{\\r\\n    width: 25vw;\\r\\n    height: 40px;\\r\\n    font-size: 24px;\\r\\n}\\r\\n\\r\\n.h1{\\r\\n    display: block;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/shared/redux/components/Search/search.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/shared/redux/containers/root/root.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader!./src/shared/redux/containers/root/root.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"body, html{\\r\\n    background: #f2f2f2;    \\r\\n}\\r\\n\\r\\nul{\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.t-c{\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  -webkit-box-sizing: inherit;\\r\\n          box-sizing: inherit;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 100%;\\r\\n  padding-right: 15px;\\r\\n  padding-left: 15px;\\r\\n  margin-right: auto;\\r\\n  margin-left: auto;\\r\\n}\\r\\n@media (min-width: 576px) {\\r\\n  .container {\\r\\n    max-width: 540px;\\r\\n  }\\r\\n}\\r\\n@media (min-width: 768px) {\\r\\n  .container {\\r\\n    max-width: 720px;\\r\\n  }\\r\\n}\\r\\n@media (min-width: 992px) {\\r\\n  .container {\\r\\n    max-width: 960px;\\r\\n  }\\r\\n}\\r\\n@media (min-width: 1200px) {\\r\\n  .container {\\r\\n    max-width: 1140px;\\r\\n  }\\r\\n}\\r\\n\\r\\n.container-fluid {\\r\\n  width: 100%;\\r\\n  padding-right: 15px;\\r\\n  padding-left: 15px;\\r\\n  margin-right: auto;\\r\\n  margin-left: auto;\\r\\n}\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/shared/redux/containers/root/root.css?./node_modules/css-loader");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _root = __webpack_require__(/*! ../shared/redux/containers/root */ \"./src/shared/redux/containers/root/index.js\");\n\nvar _root2 = _interopRequireDefault(_root);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar app = (0, _express2.default)();\napp.use(_express2.default.static(\"public\"));\n\napp.get(\"*\", function (req, res, next) {\n    var context = {};\n    var markup = _server2.default.renderToString(_react2.default.createElement(\n        _reactRouterDom.StaticRouter,\n        { location: req.url, context: context },\n        _react2.default.createElement(_root2.default, null)\n    ));\n\n    fs.readFile(\"./public/renderHtml.html\", \"utf8\", function (err, htmlstr) {\n        if (err) {\n            console.error('Something went wrong:', err);\n            return res.status(500).send('Oops, better luck next time!');\n        } else {\n            var htmlstring = htmlstr.replace(\"<!--markupdata-placeholder-->\", markup);\n            res.send(htmlstring);\n        }\n    });\n});\n\nvar PORT = process.env.port || 3000;\n\napp.listen(PORT, function () {\n    console.log(\"Server is listening on port: 3000\");\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/shared/redux/components/FilmDescription/FilmDescription.js":
/*!************************************************************************!*\
  !*** ./src/shared/redux/components/FilmDescription/FilmDescription.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\n__webpack_require__(/*! ./filmDescription.css */ \"./src/shared/redux/components/FilmDescription/filmDescription.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar FilmDescription = function FilmDescription(_ref) {\n    var filmDescription = _ref.filmDescription,\n        browserHistory = _ref.browserHistory;\n\n    var onShowAllFilms = function onShowAllFilms() {\n        browserHistory.push('/films');\n    };\n\n    return _react2.default.createElement(\n        'div',\n        { className: 'margi-size-20' },\n        _react2.default.createElement(\n            'button',\n            { className: 'btn-back', onClick: onShowAllFilms },\n            'Back'\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 't-c' },\n            ' ',\n            _react2.default.createElement('img', { className: 'descript-img', src: filmDescription.show.image.original })\n        ),\n        _react2.default.createElement(\n            'div',\n            null,\n            ' ',\n            _react2.default.createElement(\n                'h4',\n                null,\n                filmDescription.show.name\n            )\n        ),\n        _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: filmDescription.show.summary } })\n    );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        filmDescription: state.rootState.film,\n        browserHistory: state.rootState.browserHistory\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, null)(FilmDescription);\n\n//# sourceURL=webpack:///./src/shared/redux/components/FilmDescription/FilmDescription.js?");

/***/ }),

/***/ "./src/shared/redux/components/FilmDescription/filmDescription.css":
/*!*************************************************************************!*\
  !*** ./src/shared/redux/components/FilmDescription/filmDescription.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./filmDescription.css */ \"./node_modules/css-loader/index.js!./src/shared/redux/components/FilmDescription/filmDescription.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/shared/redux/components/FilmDescription/filmDescription.css?");

/***/ }),

/***/ "./src/shared/redux/components/Films/Films.js":
/*!****************************************************!*\
  !*** ./src/shared/redux/components/Films/Films.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _itemFilm = __webpack_require__(/*! ./ItemFilm/itemFilm */ \"./src/shared/redux/components/Films/ItemFilm/itemFilm.js\");\n\nvar _itemFilm2 = _interopRequireDefault(_itemFilm);\n\nvar _actions = __webpack_require__(/*! ../../containers/root/actions */ \"./src/shared/redux/containers/root/actions.js\");\n\n__webpack_require__(/*! ./films.css */ \"./src/shared/redux/components/Films/films.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Films = function Films(_ref) {\n    var films = _ref.films,\n        onShowDescription = _ref.onShowDescription,\n        browserHistory = _ref.browserHistory;\n\n    return _react2.default.createElement(\n        'div',\n        { className: 'container' },\n        films.length !== 0 ? films.map(function (film, key) {\n            var filmProps = {\n                film: film,\n                onShowDescription: onShowDescription,\n                browserHistory: browserHistory\n            };\n            return _react2.default.createElement(_itemFilm2.default, _extends({ key: key }, filmProps));\n        }) : _react2.default.createElement(\n            'div',\n            { className: 't-c' },\n            _react2.default.createElement(\n                'h2',\n                { className: 't-c error' },\n                'Error Film'\n            ),\n            _react2.default.createElement(\n                'button',\n                { className: 'btn-back', onClick: function onClick() {\n                        browserHistory.push('/');\n                    } },\n                'Back'\n            )\n        )\n    );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        films: state.rootState.films,\n        browserHistory: state.rootState.browserHistory\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        onShowDescription: function onShowDescription(film) {\n            return dispatch((0, _actions.showDescription)(film));\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Films);\n\n//# sourceURL=webpack:///./src/shared/redux/components/Films/Films.js?");

/***/ }),

/***/ "./src/shared/redux/components/Films/ItemFilm/itemFilm.css":
/*!*****************************************************************!*\
  !*** ./src/shared/redux/components/Films/ItemFilm/itemFilm.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!./itemFilm.css */ \"./node_modules/css-loader/index.js!./src/shared/redux/components/Films/ItemFilm/itemFilm.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/shared/redux/components/Films/ItemFilm/itemFilm.css?");

/***/ }),

/***/ "./src/shared/redux/components/Films/ItemFilm/itemFilm.js":
/*!****************************************************************!*\
  !*** ./src/shared/redux/components/Films/ItemFilm/itemFilm.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./itemFilm.css */ \"./src/shared/redux/components/Films/ItemFilm/itemFilm.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ItemFilm = function ItemFilm(_ref) {\n    var film = _ref.film,\n        onShowDescription = _ref.onShowDescription,\n        browserHistory = _ref.browserHistory;\n\n\n    var redirectToDescription = function redirectToDescription() {\n        browserHistory.push('/film-description');\n    };\n\n    return _react2.default.createElement(\n        'div',\n        { className: 'item-film', onClick: function onClick() {\n                onShowDescription(film);redirectToDescription();\n            } },\n        _react2.default.createElement(\n            'div',\n            null,\n            ' ',\n            _react2.default.createElement('img', { className: 'item-img', src: film.show.image.original })\n        ),\n        _react2.default.createElement(\n            'div',\n            null,\n            _react2.default.createElement(\n                'h4',\n                null,\n                film.show.name\n            )\n        ),\n        _react2.default.createElement(\n            'div',\n            { className: 'genre' },\n            '  ',\n            film.show.genres.map(function (genre, key) {\n                return _react2.default.createElement(\n                    'span',\n                    { key: key },\n                    genre,\n                    ' '\n                );\n            })\n        )\n    );\n};\n\nexports.default = ItemFilm;\n\n//# sourceURL=webpack:///./src/shared/redux/components/Films/ItemFilm/itemFilm.js?");

/***/ }),

/***/ "./src/shared/redux/components/Films/films.css":
/*!*****************************************************!*\
  !*** ./src/shared/redux/components/Films/films.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./films.css */ \"./node_modules/css-loader/index.js!./src/shared/redux/components/Films/films.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/shared/redux/components/Films/films.css?");

/***/ }),

/***/ "./src/shared/redux/components/NotFound.js":
/*!*************************************************!*\
  !*** ./src/shared/redux/components/NotFound.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (_ref) {\n    var _ref$staticContext = _ref.staticContext,\n        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;\n\n    staticContext.status = 404;\n    return _react2.default.createElement(\n        'h1',\n        null,\n        'Oops, nothing here!'\n    );\n};\n\n//# sourceURL=webpack:///./src/shared/redux/components/NotFound.js?");

/***/ }),

/***/ "./src/shared/redux/components/Search/Search.js":
/*!******************************************************!*\
  !*** ./src/shared/redux/components/Search/Search.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n\n__webpack_require__(/*! ./search.css */ \"./src/shared/redux/components/Search/search.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Search = function (_React$Component) {\n    _inherits(Search, _React$Component);\n\n    function Search(props) {\n        _classCallCheck(this, Search);\n\n        var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));\n\n        _this.state = {\n            valueRef: ''\n        };\n\n        _this.handleSubmit = _this.handleSubmit.bind(_this);\n        return _this;\n    }\n\n    _createClass(Search, [{\n        key: 'handleSubmit',\n        value: function handleSubmit(e) {\n            var _this2 = this;\n\n            e.preventDefault();\n            fetch('http://api.tvmaze.com/search/shows?q=' + this.refs.searchInput.value).then(function (response) {\n                return response.json();\n            }).then(function (data) {\n                _this2.props.onSearchFilms(data);\n                _this2.props.browserHistory.push('/films');\n                console.log(data);\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                null,\n                _react2.default.createElement(\n                    'div',\n                    { className: 'bg-silver' },\n                    _react2.default.createElement(\n                        'form',\n                        { className: 'form-on-center', onSubmit: this.handleSubmit },\n                        _react2.default.createElement(\n                            'h1',\n                            { className: 'h1' },\n                            'What do you want to see?'\n                        ),\n                        _react2.default.createElement('input', { className: 'search-input', ref: 'searchInput', type: 'text', placeholder: 'What are you looking for...' })\n                    )\n                )\n            );\n        }\n    }]);\n\n    return Search;\n}(_react2.default.Component);\n\nexports.default = Search;\n\n//# sourceURL=webpack:///./src/shared/redux/components/Search/Search.js?");

/***/ }),

/***/ "./src/shared/redux/components/Search/search.css":
/*!*******************************************************!*\
  !*** ./src/shared/redux/components/Search/search.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./search.css */ \"./node_modules/css-loader/index.js!./src/shared/redux/components/Search/search.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/shared/redux/components/Search/search.css?");

/***/ }),

/***/ "./src/shared/redux/containers/root/actions.js":
/*!*****************************************************!*\
  !*** ./src/shared/redux/containers/root/actions.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.showAllFilms = exports.showDescription = exports.searchFilms = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/shared/redux/containers/root/constants.js\");\n\nvar searchFilms = exports.searchFilms = function searchFilms(films) {\n\treturn {\n\t\ttype: _constants.SEARCH_FILMS,\n\t\tfilms: films\n\t};\n};\n\nvar showDescription = exports.showDescription = function showDescription(film) {\n\treturn {\n\t\ttype: _constants.SHOW_DESCRIPTION,\n\t\tfilm: film\n\t};\n};\n\nvar showAllFilms = exports.showAllFilms = function showAllFilms() {\n\treturn {\n\t\ttype: _constants.SHOW_ALL_FILMS\n\t};\n};\n\n//# sourceURL=webpack:///./src/shared/redux/containers/root/actions.js?");

/***/ }),

/***/ "./src/shared/redux/containers/root/constants.js":
/*!*******************************************************!*\
  !*** ./src/shared/redux/containers/root/constants.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar SEARCH_FILMS = exports.SEARCH_FILMS = '[SEARCH_FILMS]';\nvar SHOW_DESCRIPTION = exports.SHOW_DESCRIPTION = '[SHOW_DESCRIPTION]';\nvar SHOW_ALL_FILMS = exports.SHOW_ALL_FILMS = '[SHOW_ALL_FILMS]';\n\n//# sourceURL=webpack:///./src/shared/redux/containers/root/constants.js?");

/***/ }),

/***/ "./src/shared/redux/containers/root/index.js":
/*!***************************************************!*\
  !*** ./src/shared/redux/containers/root/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Search = __webpack_require__(/*! ../../components/Search/Search */ \"./src/shared/redux/components/Search/Search.js\");\n\nvar _Search2 = _interopRequireDefault(_Search);\n\nvar _Films = __webpack_require__(/*! ../../components/Films/Films */ \"./src/shared/redux/components/Films/Films.js\");\n\nvar _Films2 = _interopRequireDefault(_Films);\n\nvar _FilmDescription = __webpack_require__(/*! ../../components/FilmDescription/FilmDescription */ \"./src/shared/redux/components/FilmDescription/FilmDescription.js\");\n\nvar _FilmDescription2 = _interopRequireDefault(_FilmDescription);\n\nvar _NotFound = __webpack_require__(/*! ../../components/NotFound */ \"./src/shared/redux/components/NotFound.js\");\n\nvar _NotFound2 = _interopRequireDefault(_NotFound);\n\n__webpack_require__(/*! ./root.css */ \"./src/shared/redux/containers/root/root.css\");\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/shared/redux/containers/root/actions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Root = function Root(_ref) {\n    var props = _ref.props,\n        onSearchFilms = _ref.onSearchFilms,\n        browserHistory = _ref.browserHistory;\n\n\n    var searchProps = {\n        props: props,\n        onSearchFilms: onSearchFilms,\n        browserHistory: browserHistory\n    };\n\n    return _react2.default.createElement(\n        'div',\n        { className: 'container-fluid' },\n        _react2.default.createElement(\n            _reactRouterDom.Router,\n            { history: browserHistory },\n            _react2.default.createElement(\n                'ul',\n                null,\n                _react2.default.createElement(\n                    'li',\n                    null,\n                    _react2.default.createElement(\n                        _reactRouterDom.NavLink,\n                        { to: '/' },\n                        'Search'\n                    )\n                ),\n                _react2.default.createElement(\n                    'li',\n                    null,\n                    _react2.default.createElement(\n                        _reactRouterDom.NavLink,\n                        { to: '/films' },\n                        'Films'\n                    )\n                ),\n                _react2.default.createElement(\n                    'li',\n                    null,\n                    _react2.default.createElement(\n                        _reactRouterDom.NavLink,\n                        { to: '/film-description' },\n                        'FilmDescription'\n                    )\n                )\n            ),\n            _react2.default.createElement(\n                _reactRouterDom.Switch,\n                null,\n                _react2.default.createElement(_reactRouterDom.Route, {\n                    exact: true,\n                    path: '/',\n                    render: function render(props) {\n                        return _react2.default.createElement(_Search2.default, searchProps);\n                    }\n                }),\n                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/films', component: _Films2.default }),\n                _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/film-description', component: _FilmDescription2.default }),\n                _react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default })\n            )\n        )\n    );\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n    return {\n        browserHistory: state.rootState.browserHistory\n    };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n    return {\n        onSearchFilms: function onSearchFilms(nameFilm) {\n            return dispatch((0, _actions.searchFilms)(nameFilm));\n        },\n        onSayBuy: function onSayBuy() {\n            return dispatch((0, _actions.sayBye)());\n        }\n    };\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Root);\n\n//# sourceURL=webpack:///./src/shared/redux/containers/root/index.js?");

/***/ }),

/***/ "./src/shared/redux/containers/root/root.css":
/*!***************************************************!*\
  !*** ./src/shared/redux/containers/root/root.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../node_modules/css-loader!./root.css */ \"./node_modules/css-loader/index.js!./src/shared/redux/containers/root/root.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/shared/redux/containers/root/root.css?");

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

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

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

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

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