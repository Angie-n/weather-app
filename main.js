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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/MerriweatherSans-Regular.ttf */ \"./src/assets/fonts/MerriweatherSans-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: merriweather-sans;\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n* {\\n    padding: 0;\\n    margin: 0;\\n}\\n\\n:root {\\n    --blue-gradient: linear-gradient(45deg, rgb(102, 196, 236), rgb(80, 178, 205), rgb(21, 145, 187), rgb(6, 80, 117));\\n}\\n\\nbody {\\n    color: white;\\n    font-family: merriweather-sans, Arial, Helvetica, sans-serif;\\n    font-size: 10px;\\n    background-color: rgb(36, 32, 32);\\n}\\n\\nul {\\n    list-style: none;\\n}\\n\\nh1 {\\n    z-index: 1;\\n    font-size: 5em;\\n}\\n\\nh2 {\\n    display: none;\\n    font-size: 2em;\\n}\\n\\nh3 {\\n    font-size: 1.6em;\\n}\\n\\nbutton {\\n    border: none;\\n    background-color: transparent;\\n    color: white;\\n    z-index: 1;\\n}\\n\\nbutton:hover {\\n    color:rgb(208, 207, 207);\\n}\\n\\n#current-info > button i {\\n    font-size: 1.8em;\\n    margin: 5px;\\n}\\n\\n#search-btn {\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n}\\n\\n#unit-btn {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n}\\n\\n#bookmark-btn {\\n    display: flex;\\n    align-items: center;\\n}\\n\\n#bookmark-btn:hover {\\n    color: rgb(102, 196, 236);\\n}\\n\\n#bookmark-btn i {\\n    margin-right: 10px;\\n    font-size: 1.5em;\\n}\\n\\n#other-cities {\\n    display: none;\\n    position: fixed;\\n    top: 0;\\n    right: 0;\\n    z-index: 2;\\n    background-color: inherit;\\n    height: 100%;\\n    width: max(400px, 20%);\\n    border-left: 1px solid rgb(47, 47, 47);\\n}\\n\\n#other-cities > * {\\n    margin-left: 15px;\\n}\\n\\n#other-cities h2 {\\n    display: block;\\n}\\n\\n#exit-btn {\\n    position: absolute;\\n    top: 0;\\n    right: 0;\\n    margin: 10px;\\n}\\n\\n#searchbar {\\n    display: flex;\\n    margin-top: 50px;\\n}\\n\\n#searchbar input {\\n    width: 80%;\\n}\\n\\n#searchbar button {\\n    margin-left: 15px;\\n    background-color: white;\\n    border: 1px solid gray;\\n    color: black;\\n    padding: 5px 10px 5px 10px;\\n}\\n\\n#searchbar button:hover {\\n    background-color: rgb(208, 208, 208);\\n}\\n\\n#search-error-msg {\\n    font-size: 1.2em;\\n    color: rgb(208, 207, 207);\\n    font-style: italic;\\n    height: 0;\\n    overflow: visible;\\n}\\n\\n#saved-cities-header {\\n    display: flex;\\n    margin: 30px 15px 10px;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n\\n#saved-cities-header i {\\n    font-size: 1.4em;\\n}\\n\\n#saved-cities div {\\n    position: relative;\\n    border: 1px solid rgb(63, 65, 64);\\n    height: 50px;\\n    width: 80%;\\n    border-radius: 10px;\\n    background: white;\\n    color: black;\\n    font-size: 1.6em;\\n    margin-top: 20px;\\n}\\n\\n#saved-cities li {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    border: inherit;\\n    width: 100%;\\n    height: inherit;\\n    border-radius: inherit;\\n}\\n\\n.delete-city-btn {\\n    display: none;\\n    color: rgb(205, 2, 2);\\n    position: absolute;\\n    top: 3px;\\n    right: -50px;\\n    font-size: 2.5em;\\n}\\n\\n.delete-city-btn i:hover {\\n    color: red;\\n}\\n\\n#saved-cities li:hover {\\n    background: var(--blue-gradient);\\n    color: white;\\n}\\n\\n#black-screen {\\n    top: 0;\\n    left: 0;\\n    position: absolute;\\n    background: rgba(0, 0, 0, 0.2);\\n    width: 100%;\\n    height: 100%;\\n}\\n\\n#location-info {\\n    display: flex;\\n    align-items: center;\\n}\\n\\n#location-info p {\\n    margin-left: 5px;\\n    font-size: 1.6em;\\n}\\n\\n#current-info {\\n    position: relative;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    background-position: center;\\n    min-height: 350px;\\n    width: 100vw;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: space-around;\\n}\\n\\n#current-temp {\\n    font-size: 6em;\\n}\\n\\n#current-temp-info {\\n    z-index: 1;\\n    display: flex;\\n    align-items: center;\\n}\\n\\n#high-low {\\n    font-size: 2em;\\n    margin-left: 10px;\\n}\\n\\n#current-nontemp-info {\\n    z-index: 1;\\n    display: flex;\\n    width: 100%;\\n    justify-content: space-evenly;\\n}\\n\\n#current-nontemp-info div {\\n    display: flex;\\n    font-size: 1.2em;\\n}\\n\\n#current-nontemp-info div div {\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\n#current-nontemp-info i {\\n    font-size: 2.7em;\\n    margin-right: 5px;\\n}\\n\\n#weather-forecasts {\\n    margin-top: 10px;\\n}\\n\\n#forecast-today {\\n    display: flex;\\n    overflow: scroll;\\n    width: 100vw;\\n}\\n\\n#forecast-today::before, #forecast-today::after {\\n    content: \\\"\\\";\\n    margin: auto;\\n}\\n\\n.today-divs {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-around;\\n    align-items: center;\\n    min-width: clamp(100px, 20%, 200px);\\n    border-radius: 5%;\\n    min-height: 300px;\\n    border: 1px solid white;\\n} \\n\\n.today-divs p:nth-of-type(1) {\\n    font-size: 2em;\\n}\\n\\n.today-divs p:nth-of-type(2) {\\n    font-size: 1.5em;\\n}\\n\\n#forecast-today div img {\\n    width: 80%;\\n}\\n\\n#current-time {\\n    background: var(--blue-gradient);\\n}\\n\\n#forecast-week {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    width: 100%;\\n    font-size: 1.5em;\\n    margin: 20px 0 20px 0;\\n}\\n\\n#forecast-week h3 {\\n    width: 120px;\\n}\\n\\n#forecast-week > div {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    width: 80%;\\n    border-top: 1px solid white;\\n    max-width: 1800px;\\n}\\n\\n#forecast-week div:nth-child(1) {\\n    border-top: 0px;\\n}\\n\\n#forecast-week img {\\n    height: 50px;\\n}\\n\\n#forecast-week div div {\\n    display: flex;\\n    align-items: center;\\n}\\n\\n.week-weather-forecast {\\n    width: 100px;\\n}\\n\\n.week-high-low {\\n    justify-content: flex-end;\\n    min-width: 5%;\\n}\\n\\n.week-high-low p:nth-child(2) {\\n    margin-left: 15px;\\n    color: rgb(208, 207, 207);\\n}\\n\\n@media only screen and (max-width: 700px) {\\n    #other-cities {\\n        width: 100%;\\n    }\\n}\\n\\n@media only screen and (max-width: 480px) {\\n    h1 {\\n        font-size: 14vw;\\n    }\\n\\n    h3 {\\n        font-size: 5vw;\\n    }\\n\\n    .week-weather-forecast {\\n        width: auto;\\n    }\\n\\n    .week-weather-forecast p {\\n        display: none;\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather_app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather_app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://weather_app/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather_app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather_app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather_app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather_app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather_app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather_app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather_app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather_app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_API_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/API.js */ \"./src/modules/API.js\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/localStorage.js */ \"./src/modules/localStorage.js\");\n\n\n\n\n\nlet defaultCity;\nif(document.getElementsByClassName(\"delete-city-btn\").length !== 0) defaultCity = document.getElementById(\"saved-cities\").getElementsByTagName(\"li\")[0].textContent;\nelse defaultCity = \"New York\";\n\nasync function getAndDisplay(city) {\n    try {\n        let data = await _modules_API_js__WEBPACK_IMPORTED_MODULE_1__.fetchData(city);\n        await _modules_display_js__WEBPACK_IMPORTED_MODULE_2__.showCity(data).changeAll();\n    }\n    catch(err) {\n        document.getElementById(\"search-error-msg\").textContent = \"Search unsuccessful for \" + city;\n    }\n};\n\ngetAndDisplay(defaultCity);\n\ndocument.getElementById(\"exit-btn\").addEventListener(\"click\", () => document.getElementById(\"other-cities\").style.display = \"none\");\ndocument.getElementById(\"search-btn\").addEventListener(\"click\", () => document.getElementById(\"other-cities\").style.display = \"block\");\n\nconst editSavedCities = () => {\n    let toggleDeleteBtn = () => {\n        let deleteBtns = document.getElementsByClassName(\"delete-city-btn\");\n        for(let i = 0; i < deleteBtns.length; i++) {\n            if(deleteBtns[i].style.display !== \"block\") deleteBtns[i].style.display = \"block\";\n            else deleteBtns[i].style.display = \"none\";\n        }\n    }\n    return {toggleDeleteBtn};\n};\ndocument.getElementById(\"edit-saved-cities-btn\").onclick = () => editSavedCities().toggleDeleteBtn();\n\nlet search = (() => {\n    let searchDiv = document.getElementById(\"searchbar\");\n    let searchInput = searchDiv.getElementsByTagName(\"input\")[0];\n    let searchSubmit = searchDiv.getElementsByTagName(\"i\")[0];\n    searchInput.addEventListener(\"keypress\", e => {\n        if(e.key === \"Enter\" && searchInput.value.trim() !== \"\") {\n            getAndDisplay(searchInput.value);\n            searchInput.value = \"\";\n            if(document.getElementsByClassName(\"delete-city-btn\").length !== 0 && document.getElementsByClassName(\"delete-city-btn\")[0].style.display === \"block\") editSavedCities().toggleDeleteBtn();\n        }\n    });\n    searchSubmit.addEventListener(\"click\", () => {\n        if(searchInput.value.trim() !== \"\") {\n            getAndDisplay(searchInput.value);\n            searchInput.value = \"\";\n            if(document.getElementsByClassName(\"delete-city-btn\").length !== 0 && document.getElementsByClassName(\"delete-city-btn\")[0].style.display === \"block\") editSavedCities().toggleDeleteBtn();\n        }\n    });\n})();\n\nlet bookmark = (() => {\n    let bookmarkBtn = document.getElementById(\"bookmark-btn\");\n    let bookmarkIcon = bookmarkBtn.getElementsByTagName(\"i\")[0];\n    let bookmarkMessage = bookmarkBtn.getElementsByTagName(\"p\")[0];\n    let toggleBookmark = () => {\n        let cityNodeList = document.getElementById(\"saved-cities\").getElementsByTagName(\"li\");\n        let cityArr = [...cityNodeList].map(c => c.textContent);\n\n        let currentCityName = document.getElementsByTagName(\"h1\")[0].textContent;\n        let index = cityArr.indexOf(currentCityName);\n\n        //Previously bookmarked, clicked to unbookmark\n        if(index !== -1) {\n            bookmarkIcon.classList.remove(\"fa-solid\");\n            bookmarkIcon.classList.add(\"fa-regular\");\n            bookmarkMessage.textContent = \"Bookmark the current city\";\n            document.getElementById(\"saved-cities\").getElementsByTagName(\"div\")[index].remove();\n        }\n        //Not bookmarked yet, click to bookmark\n        else {\n            if(document.getElementsByClassName(\"delete-city-btn\").length !== 0 && document.getElementsByClassName(\"delete-city-btn\")[0].style.display === \"block\") editSavedCities().toggleDeleteBtn();\n            bookmarkIcon.classList.add(\"fa-solid\");\n            bookmarkIcon.classList.remove(\"fa-regular\");\n            bookmarkMessage.textContent = \"Current city has been bookmarked\";\n            let savedDiv = document.createElement(\"div\");\n\n            let savedCity = document.createElement(\"li\");\n            savedCity.textContent = currentCityName;\n            savedCity.onclick = () => {\n                if(savedCity.textContent !== document.getElementsByTagName(\"h1\")[0].textContent) getAndDisplay(currentCityName);\n            }\n\n            let deleteBtn = document.createElement(\"button\");\n            deleteBtn.classList.add(\"delete-city-btn\");\n            let icon = document.createElement(\"i\");\n            icon.classList.add(\"fa-solid\");\n            icon.classList.add(\"fa-circle-minus\");\n            deleteBtn.append(icon);\n            deleteBtn.onclick = () => {\n                savedDiv.remove();\n                if(savedCity.textContent === document.getElementsByTagName(\"h1\")[0].textContent) {\n                    bookmarkIcon.classList.remove(\"fa-solid\");\n                    bookmarkIcon.classList.add(\"fa-regular\");\n                    bookmarkMessage.textContent = \"Bookmark the current city\";\n                }\n                _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.storage().populateStorage();\n            }\n\n            savedDiv.append(savedCity, deleteBtn)\n            document.getElementById(\"saved-cities\").append(savedDiv);\n        }\n        _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.storage().populateStorage();\n    }\n    bookmarkBtn.addEventListener(\"click\", () => toggleBookmark());\n})();\n\n//readd events from saved cities in storage\nif(document.getElementsByClassName(\"delete-city-btn\").length !== 0) {\n    if(document.getElementsByClassName(\"delete-city-btn\")[0].style.display === \"block\") editSavedCities().toggleDeleteBtn();\n    let savedCities = [...document.getElementById(\"saved-cities\").getElementsByTagName(\"div\")];\n    savedCities.forEach(c => {\n        c.getElementsByTagName(\"li\")[0].onclick = () => {\n            if(c.textContent !== document.getElementsByTagName(\"h1\")[0].textContent) getAndDisplay(c.textContent);\n        }\n        let deleteBtn = c.getElementsByTagName(\"button\")[0];\n        deleteBtn.onclick = () => {\n            c.remove();\n            if(c.textContent === document.getElementsByTagName(\"h1\")[0].textContent) {\n                document.getElementById(\"bookmark-btn\").getElementsByTagName(\"i\")[0].classList.remove(\"fa-solid\");\n                document.getElementById(\"bookmark-btn\").getElementsByTagName(\"i\")[0].classList.add(\"fa-regular\");\n                document.getElementById(\"bookmark-btn\").getElementsByTagName(\"p\")[0].textContent = \"Bookmark the current city\";\n            }\n            _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_3__.storage().populateStorage();\n        }\n    });\n}\n\n\n\n//# sourceURL=webpack://weather_app/./src/index.js?");

/***/ }),

/***/ "./src/modules/API.js":
/*!****************************!*\
  !*** ./src/modules/API.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"extractRelevantData\": () => (/* binding */ extractRelevantData),\n/* harmony export */   \"fetchData\": () => (/* binding */ fetchData)\n/* harmony export */ });\n/* harmony import */ var _city_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city.js */ \"./src/modules/city.js\");\n/* harmony import */ var _forecast_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecast.js */ \"./src/modules/forecast.js\");\n\n\n\nconst extractRelevantData = jsonData => {\n    let cityInfo = jsonData.city;\n    let forecasts = [];\n    jsonData.list.forEach(forecast => {\n        let main = {};\n        for(const prop in forecast.main) if(prop === \"feels_like\" || prop === \"humidity\" || prop === \"temp\" || prop === \"temp_max\" || prop === \"temp_min\") main[prop] = forecast.main[prop];\n        let newForecast = new _forecast_js__WEBPACK_IMPORTED_MODULE_1__.Forecast(forecast.dt_txt, forecast.dt, main, forecast.weather[0], forecast.wind.speed);\n        forecasts.push(newForecast);\n    });\n    let newestCity = new _city_js__WEBPACK_IMPORTED_MODULE_0__.City(cityInfo.name, cityInfo.country, cityInfo.timezone, forecasts);\n    return newestCity;\n}\n\n\nconst fetchData = async (city) => {\n    try {\n        const data = await fetch(\"https://api.openweathermap.org/data/2.5/forecast?q=\" + city + \"&appid=e8952667fc2af0fa9af21038fce9b156\");\n        const jsonData = await data.json();\n        const relevantData = extractRelevantData(jsonData);\n        return relevantData;\n    } catch(err) {\n        console.log(err);\n    }\n}\n\n\n\n\n//# sourceURL=webpack://weather_app/./src/modules/API.js?");

/***/ }),

/***/ "./src/modules/city.js":
/*!*****************************!*\
  !*** ./src/modules/city.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"City\": () => (/* binding */ City),\n/* harmony export */   \"list\": () => (/* binding */ list)\n/* harmony export */ });\nlet list = [];\n\nclass City {\n    constructor(name, country, timezone, forecasts) {\n        this.name = name;\n        this.country = country;\n        this.timezone = timezone;\n        this.forecasts = forecasts;\n        list.push(this);\n    }\n}\n\n\n\n//# sourceURL=webpack://weather_app/./src/modules/city.js?");

/***/ }),

/***/ "./src/modules/converter.js":
/*!**********************************!*\
  !*** ./src/modules/converter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DateConverter\": () => (/* binding */ DateConverter),\n/* harmony export */   \"SpeedConverter\": () => (/* binding */ SpeedConverter),\n/* harmony export */   \"TemperatureConverter\": () => (/* binding */ TemperatureConverter),\n/* harmony export */   \"getIsMetric\": () => (/* binding */ getIsMetric),\n/* harmony export */   \"setIsMetric\": () => (/* binding */ setIsMetric)\n/* harmony export */ });\nlet isMetric = true;\nfunction getIsMetric() {return isMetric;}\nfunction setIsMetric(m) {isMetric = m;}\n\nclass TemperatureConverter {\n    static kelvinToCelsius(k) {\n        let c = k - 273.15;\n        return Math.round(c);\n    }\n    static kelvinToFahrenheit(k) {\n        let f = (k - 273.15) * (9/5) + 32;\n        return Math.round(f);\n    }\n}\n\nclass SpeedConverter {\n    static mpsToMiph(mps) {\n        let miph = mps * 0.000621371 * 3600;\n        return miph.toFixed(2);\n    }\n}\n\n//Pass Date objects\nclass DateConverter {\n\n    static getShiftedHour(date, timezone) {\n        let num = date.getUTCHours();\n\n        let hourShift = timezone / 60 / 60;\n        num = num + hourShift;\n        if(num < 0) num = 24 + num;\n\n        let abb;\n        if (num > 11 && num < 24) abb = \"PM\";\n        else abb = \"AM\";\n\n        num = num % 12;\n        if (num == 0) num = 12;\n\n        return num + \" \" + abb;\n    }\n\n    static getShiftedDayOfWeek(date, timezone) {\n        let dayOfWeek = date.getUTCDay();\n        let currentHour = date.getUTCHours() + (timezone / 60 / 60);\n        let dayShift = 0;\n        if (currentHour < 0) dayShift = -1;\n        else if (currentHour > 23) dayShift = 1;\n        let shiftedDayOfWeek = dayOfWeek + dayShift;\n        if(shiftedDayOfWeek < 0) shiftedDayOfWeek = 7 + shiftedDayOfWeek;\n        else if (shiftedDayOfWeek > 6) shiftedDayOfWeek -= 7;\n        return shiftedDayOfWeek;\n    }\n\n    static dayOfWeekToStr(dayOfWeek) {\n        let daysOfWeek = [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"]\n        return daysOfWeek[dayOfWeek];\n    }\n    \n    static getShiftedDayOfMonth(date, timezone) {\n        let dayOfMonth = date.getUTCDate();\n        let currentHour = date.getUTCHours() + (timezone / 60 / 60);\n        let dayShift = 0;\n        if (currentHour < 0) dayShift = -1;\n        else if (currentHour > 23) dayShift = 1;\n        return dayOfMonth + dayShift;\n    }\n    \n}\n\n\n\n\n\n//# sourceURL=webpack://weather_app/./src/modules/converter.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showCity\": () => (/* binding */ showCity)\n/* harmony export */ });\n/* harmony import */ var _converter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./converter.js */ \"./src/modules/converter.js\");\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage.js */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _assets_images_clear_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/clear.jpg */ \"./src/assets/images/clear.jpg\");\n/* harmony import */ var _assets_images_clear_n_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/clear-n.jpg */ \"./src/assets/images/clear-n.jpg\");\n/* harmony import */ var _assets_images_few_clouds_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/few-clouds.jpg */ \"./src/assets/images/few-clouds.jpg\");\n/* harmony import */ var _assets_images_scattered_clouds_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/scattered-clouds.jpg */ \"./src/assets/images/scattered-clouds.jpg\");\n/* harmony import */ var _assets_images_broken_clouds_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/broken-clouds.jpg */ \"./src/assets/images/broken-clouds.jpg\");\n/* harmony import */ var _assets_images_cloudy_n_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/cloudy-n.jpg */ \"./src/assets/images/cloudy-n.jpg\");\n/* harmony import */ var _assets_images_shower_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/shower.jpg */ \"./src/assets/images/shower.jpg\");\n/* harmony import */ var _assets_images_shower_n_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/shower-n.jpg */ \"./src/assets/images/shower-n.jpg\");\n/* harmony import */ var _assets_images_rain_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/images/rain.jpg */ \"./src/assets/images/rain.jpg\");\n/* harmony import */ var _assets_images_rain_n_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/images/rain-n.jpg */ \"./src/assets/images/rain-n.jpg\");\n/* harmony import */ var _assets_images_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/images/thunderstorm.jpg */ \"./src/assets/images/thunderstorm.jpg\");\n/* harmony import */ var _assets_images_snow_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/images/snow.jpg */ \"./src/assets/images/snow.jpg\");\n/* harmony import */ var _assets_images_snow_n_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/images/snow-n.jpg */ \"./src/assets/images/snow-n.jpg\");\n/* harmony import */ var _assets_images_mist_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/images/mist.jpg */ \"./src/assets/images/mist.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//Helper functions\nfunction findMostReoccuringElement(arr) {\n    let sortedArr = [...arr].sort();\n    let maxCount = 1;\n    let mostOccuringElement = sortedArr[0];\n\n    let currentCount = 1;\n    let currentElement = sortedArr[0];\n    for(let i = 1; i < sortedArr.length; i++) {\n        if(sortedArr[i] === currentElement) currentCount++;\n        if(sortedArr[i] !== currentElement || i === sortedArr.length - 1) {\n            if(maxCount < currentCount) {\n                maxCount = currentCount;\n                mostOccuringElement = currentElement;\n            }\n            currentCount = 1;\n            currentElement = sortedArr[i];\n        }\n    }\n    return mostOccuringElement;\n}\n\nfunction convertDegrees(temp) {\n    if(_converter_js__WEBPACK_IMPORTED_MODULE_0__.getIsMetric()) return _converter_js__WEBPACK_IMPORTED_MODULE_0__.TemperatureConverter.kelvinToCelsius(temp) + \"˚C\";\n    return _converter_js__WEBPACK_IMPORTED_MODULE_0__.TemperatureConverter.kelvinToFahrenheit(temp) + \"˚F\";\n}\n\nfunction convertSpeed(spd) {\n    if(_converter_js__WEBPACK_IMPORTED_MODULE_0__.getIsMetric()) return spd + \" m/s\";\n    return _converter_js__WEBPACK_IMPORTED_MODULE_0__.SpeedConverter.mpsToMiph(spd) + \" mi/hr\";\n}\n\nfunction checkIfToday(date, timezone) {\n    let today = new Date();\n    if(_converter_js__WEBPACK_IMPORTED_MODULE_0__.DateConverter.getShiftedDayOfMonth(today, timezone) === _converter_js__WEBPACK_IMPORTED_MODULE_0__.DateConverter.getShiftedDayOfMonth(date, timezone)) return true;\n    return false;\n}\n\n//Value on left corresponds to icon value from API, value on right corresponds to imported image\nconst iconToBackground = {\n    \"01d\": _assets_images_clear_jpg__WEBPACK_IMPORTED_MODULE_2__,\n    \"01n\": _assets_images_clear_n_jpg__WEBPACK_IMPORTED_MODULE_3__,\n    \"02d\": _assets_images_few_clouds_jpg__WEBPACK_IMPORTED_MODULE_4__,\n    \"02n\": _assets_images_cloudy_n_jpg__WEBPACK_IMPORTED_MODULE_7__,\n    \"03d\": _assets_images_scattered_clouds_jpg__WEBPACK_IMPORTED_MODULE_5__,\n    \"03n\": _assets_images_cloudy_n_jpg__WEBPACK_IMPORTED_MODULE_7__,\n    \"04d\": _assets_images_broken_clouds_jpg__WEBPACK_IMPORTED_MODULE_6__,\n    \"04n\": _assets_images_cloudy_n_jpg__WEBPACK_IMPORTED_MODULE_7__,\n    \"09d\": _assets_images_shower_jpg__WEBPACK_IMPORTED_MODULE_8__,\n    \"09n\": _assets_images_shower_n_jpg__WEBPACK_IMPORTED_MODULE_9__,\n    \"10d\": _assets_images_rain_jpg__WEBPACK_IMPORTED_MODULE_10__,\n    \"10n\": _assets_images_rain_n_jpg__WEBPACK_IMPORTED_MODULE_11__,\n    \"11d\": _assets_images_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_12__,\n    \"11n\": _assets_images_thunderstorm_jpg__WEBPACK_IMPORTED_MODULE_12__,\n    \"13d\": _assets_images_snow_jpg__WEBPACK_IMPORTED_MODULE_13__,\n    \"13n\": _assets_images_snow_n_jpg__WEBPACK_IMPORTED_MODULE_14__,\n    \"50d\": _assets_images_mist_jpg__WEBPACK_IMPORTED_MODULE_15__,\n    \"50n\": _assets_images_mist_jpg__WEBPACK_IMPORTED_MODULE_15__,\n}\n\nconst showCity = city => {\n    function findCurrentForecast() {\n        let currentTime = new Date();\n        let currentForecast = city.forecasts[0];\n        for(let i = 1; i < city.forecasts.length; i++) {\n            let forecastTime = new Date(city.forecasts[i].dt * 1000);\n            if(currentTime > forecastTime) currentForecast = city.forecasts[i];\n            else {\n                indexOfCurrent = i - 1;\n                break;\n            }\n        }\n        return currentForecast;\n    }\n\n    let indexOfCurrent;\n    let currentForecast = findCurrentForecast();\n\n    let highestTemps = [];\n    let lowestTemps = [];\n\n    let checkBookmark = () => {\n        let bookmarkBtn = document.getElementById(\"bookmark-btn\");\n        let bookmarkIcon = bookmarkBtn.getElementsByTagName(\"i\")[0];\n        let bookmarkMessage = bookmarkBtn.getElementsByTagName(\"p\")[0];\n        let cityNodeList = document.getElementById(\"saved-cities\").getElementsByTagName(\"li\");\n        let cityArr = [...cityNodeList].map((c) => c.textContent);\n        let index = cityArr.indexOf(city.name);\n\n        if(index !== -1) {\n            bookmarkIcon.classList.add(\"fa-solid\");\n            bookmarkIcon.classList.remove(\"fa-regular\");\n            bookmarkMessage.textContent = \"Current city has been bookmarked\";\n        }\n        else {\n            bookmarkIcon.classList.remove(\"fa-solid\");\n            bookmarkIcon.classList.add(\"fa-regular\");\n            bookmarkMessage.textContent = \"Bookmark the current city\";\n        }\n    }\n\n    let clearInfo = () => {\n        document.getElementById(\"other-cities\").style.display = \"none\";\n        document.getElementById(\"search-error-msg\").textContent = \"\";\n        document.getElementById(\"forecast-today\").innerHTML = \"\";\n        document.getElementById(\"forecast-week\").innerHTML = \"\";\n        checkBookmark();\n    }\n\n    let changeCurrentInfo = () => {\n        let temp = convertDegrees(currentForecast.main.temp);\n        let highTemp = \"H: \" + convertDegrees(currentForecast.main.temp_max);\n        let lowTemp = \"L: \" + convertDegrees(currentForecast.main.temp_min);\n        let feelsLike = convertDegrees(currentForecast.main.feels_like);\n        let windSpeed = convertSpeed(currentForecast.windSpeed);\n\n        let weatherImg = iconToBackground[currentForecast.weather.icon];\n        document.getElementById(\"current-info\").style.backgroundImage = \"url(\" + weatherImg + \")\";\n\n        let locationInfo = document.getElementById(\"location-info\");\n        locationInfo.getElementsByTagName(\"h1\")[0].textContent = city.name;\n        locationInfo.getElementsByTagName(\"p\")[0].textContent = \"(\" + city.country + \")\";\n\n        document.getElementById(\"current-temp\").textContent = temp;\n        document.getElementById(\"high-temp\").textContent = highTemp;\n        document.getElementById(\"low-temp\").textContent = lowTemp;\n\n        let feelsLikeDiv = document.getElementById(\"feels-like\");\n        feelsLikeDiv.getElementsByTagName(\"p\")[1].textContent = feelsLike;\n        let windSpeedDiv = document.getElementById(\"wind-speed\");\n        windSpeedDiv.getElementsByTagName(\"p\")[1].textContent = windSpeed;\n        let humidityDiv = document.getElementById(\"humidity\");\n        humidityDiv.getElementsByTagName(\"p\")[1].textContent = currentForecast.main.humidity + \"%\";\n    }\n\n    let changeTodayForecast = () => {\n        let todayDiv = document.getElementById(\"forecast-today\");\n\n        //Assumes data is given in chronological order. Adds more from tomorrow's forecast to fill 7 slots if there are not enough for today's.\n        for(let i = indexOfCurrent; i < city.forecasts.length; i++) {\n            let forecastDate = new Date(city.forecasts[i].dt * 1000);\n            if(!checkIfToday(forecastDate, city.timezone) && i - indexOfCurrent >= 8) break;\n            else {\n                let timeHeader = document.createElement(\"h3\");\n                timeHeader.textContent = _converter_js__WEBPACK_IMPORTED_MODULE_0__.DateConverter.getShiftedHour(forecastDate, city.timezone);\n\n                let icon = new Image();\n                icon.src = \"http://openweathermap.org/img/wn/\" + city.forecasts[i].weather.icon + \"@2x.png\";\n\n                let tempDisplay = document.createElement(\"p\");\n                tempDisplay.textContent = convertDegrees(city.forecasts[i].main.temp);\n                tempDisplay.classList.add(\"today-temps\");\n\n                let mainWeather = document.createElement(\"p\");\n                mainWeather.textContent = city.forecasts[i].weather.main;\n\n                let container = document.createElement(\"div\");\n                container.append(timeHeader, icon, tempDisplay, mainWeather);\n                if(city.forecasts[i] === currentForecast) container.id = \"current-time\";\n                container.classList.add(\"today-divs\");\n                todayDiv.append(container);\n            }\n        }\n\n    }\n\n    let changeWeekForecast = () => {\n        let weekDiv = document.getElementById(\"forecast-week\");\n\n        let priority1 = [];\n        let priority2 = [];\n        let priority3 = [];\n        let priority4 = [];\n\n        function determinePriority(forecast) {\n            let weather = forecast.weather.main;\n            if (weather === \"Thunderstorm\" || weather === \"Tornado\") priority1.push(forecast);\n            else if (weather === \"Squall\" || weather === \"Sand\" || weather === \"Dust\" || weather === \"Ash\" || weather === \"Smoke\" || weather === \"Haze\") priority2.push(forecast);\n            else if (weather === \"Drizzle\" || weather === \"Rain\" || weather === \"Snow\") priority3.push(forecast);\n            else if (weather === \"Mist\" || weather === \"Fog\" || weather === \"Clear\" || weather === \"Clouds\") priority4.push(forecast);\n            else console.log(\"Unknown weather: \" + weather);\n        }\n\n        function clearPriorities() {\n            priority1 = [];\n            priority2 = [];\n            priority3 = [];\n            priority4 = [];\n        }\n\n        function determineMainWeather(priorityArr) {\n            for(let i = 0; i < priorityArr.length; i++) {\n                if(priorityArr[i].length !== 0) {\n                    let weathers = priorityArr[i].map(f => f.weather.main);\n                    let mainStr = findMostReoccuringElement(weathers);\n                    let mainIcon = priorityArr[i][weathers.indexOf(mainStr)].weather.icon;\n                    if(mainIcon.substring(2) === \"n\") mainIcon = mainIcon.substring(0, 2) + \"d\";\n                    return [mainStr, mainIcon];\n                }\n            }\n            console.log(\"Unable to determine main weather\");\n            return -1;\n        }\n\n        let earliestDate = new Date(currentForecast.dt * 1000);\n        let currentDayOfWeek = _converter_js__WEBPACK_IMPORTED_MODULE_0__.DateConverter.getShiftedDayOfWeek(earliestDate, city.timezone);\n        for(let i = indexOfCurrent; i < city.forecasts.length; i++) {\n            let forecastDate = new Date(city.forecasts[i].dt * 1000);\n            if (currentDayOfWeek === _converter_js__WEBPACK_IMPORTED_MODULE_0__.DateConverter.getShiftedDayOfWeek(forecastDate, city.timezone) && i != city.forecasts.length - 1) determinePriority(city.forecasts[i]);\n            else {\n                if(i === city.forecasts.length - 1) determinePriority(city.forecasts[i]);\n\n                let dayForecasts = [priority1, priority2, priority3, priority4];\n                let timeHeader = document.createElement(\"h3\");\n                if(checkIfToday(new Date(city.forecasts[i-1].dt * 1000), city.timezone)) timeHeader.textContent = \"Today\";\n                else timeHeader.textContent = _converter_js__WEBPACK_IMPORTED_MODULE_0__.DateConverter.dayOfWeekToStr(currentDayOfWeek);\n\n                let mainWeather = determineMainWeather(dayForecasts);\n                let mostOccuringWeatherIcon = mainWeather[1];\n                let icon = new Image(); \n                icon.src = \"http://openweathermap.org/img/wn/\" + mostOccuringWeatherIcon + \"@2x.png\";\n                let iconText = document.createElement(\"p\");\n                iconText.textContent = mainWeather[0];\n                let weatherDiv = document.createElement(\"div\");\n                weatherDiv.classList.add(\"week-weather-forecast\");\n                weatherDiv.append(icon, iconText);\n\n                let lowTemp = document.createElement(\"p\");\n                let lowestTemp = Math.min(...dayForecasts.map(p => {\n                    return Math.min(...p.map(f => f.main.temp_min));\n                })); \n                lowestTemps.push(lowestTemp);\n                lowTemp.textContent = convertDegrees(lowestTemp);\n                let highTemp = document.createElement(\"p\");\n                let highestTemp = Math.max(...dayForecasts.map(p => {\n                    return Math.max(...p.map(f => f.main.temp_max));\n                })); \n                highestTemps.push(highestTemp);\n                highTemp.textContent = convertDegrees(highestTemp);\n                let highLowDiv = document.createElement(\"div\");\n                highLowDiv.classList.add(\"week-high-low\");\n                highLowDiv.append(highTemp, lowTemp);\n\n                let container = document.createElement(\"div\");\n                container.append(timeHeader, weatherDiv, highLowDiv);\n                weekDiv.append(container);\n\n                currentDayOfWeek = (currentDayOfWeek + 1) % 7;\n                clearPriorities();\n                determinePriority(city.forecasts[i]);\n            }\n        }\n    }\n\n    let addEvents = () => {\n        document.getElementById(\"unit-btn\").onclick = () => {\n            if(_converter_js__WEBPACK_IMPORTED_MODULE_0__.getIsMetric()) _converter_js__WEBPACK_IMPORTED_MODULE_0__.setIsMetric(false);\n            else _converter_js__WEBPACK_IMPORTED_MODULE_0__.setIsMetric(true);\n\n            document.getElementById(\"current-temp\").textContent = convertDegrees(currentForecast.main.temp);\n            document.getElementById(\"high-temp\").textContent = \"H: \" + convertDegrees(currentForecast.main.temp_max);\n            document.getElementById(\"low-temp\").textContent = \"L: \" + convertDegrees(currentForecast.main.temp_min);\n\n            document.getElementById(\"feels-like\").getElementsByTagName(\"p\")[1].textContent = convertDegrees(currentForecast.main.feels_like);\n            document.getElementById(\"wind-speed\").getElementsByTagName(\"p\")[1].textContent = convertSpeed(currentForecast.windSpeed);\n\n            let todayTemps = document.getElementsByClassName(\"today-temps\");\n            let forecastIndex = city.forecasts.indexOf(currentForecast)\n            for(let i = 0; i < todayTemps.length; i++) {\n                todayTemps[i].textContent = convertDegrees(city.forecasts[forecastIndex].main.temp);\n                forecastIndex++;\n            }\n\n            let weekTemps = document.getElementsByClassName(\"week-high-low\");\n            for(let i = 0; i < weekTemps.length; i++) {\n                weekTemps[i].getElementsByTagName(\"p\")[0].textContent = convertDegrees(highestTemps[i]);\n                weekTemps[i].getElementsByTagName(\"p\")[1].textContent = convertDegrees(lowestTemps[i]);\n            }\n            _localStorage_js__WEBPACK_IMPORTED_MODULE_1__.storage().populateStorage();\n        };\n    }\n\n    let changeAll = () => {\n        clearInfo();\n        changeCurrentInfo();\n        changeTodayForecast();\n        changeWeekForecast();\n        addEvents();\n    }\n\n    return {changeAll};\n}\n\n\n\n//# sourceURL=webpack://weather_app/./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/forecast.js":
/*!*********************************!*\
  !*** ./src/modules/forecast.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Forecast\": () => (/* binding */ Forecast)\n/* harmony export */ });\nclass Forecast {\n    constructor(time, dt, main, weather, windSpeed) {\n        this.time = time;\n        this.dt = dt;\n        this.main = main;\n        this.weather = weather;\n        this.windSpeed = windSpeed;\n    }\n}\n\n\n\n//# sourceURL=webpack://weather_app/./src/modules/forecast.js?");

/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var _converter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./converter.js */ \"./src/modules/converter.js\");\n\n\n//localStorage.clear();\n\nfunction storageAvailable(type) {\n    var storage;\n    try {\n        storage = window[type];\n        var x = '__storage_test__';\n        storage.setItem(x, x);\n        storage.removeItem(x);\n        return true;\n    }\n    catch(e) {\n        return e instanceof DOMException && (\n            e.code === 22 ||\n            e.code === 1014 ||\n            e.name === 'QuotaExceededError' ||\n            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&\n            (storage && storage.length !== 0);\n    }\n}\n\nconst storage = () => {\n    let populateStorage = () => {\n        localStorage.setItem(\"savedCities\", document.getElementById(\"saved-cities\").innerHTML);\n        localStorage.setItem(\"isMetric\", (0,_converter_js__WEBPACK_IMPORTED_MODULE_0__.getIsMetric)());\n    }\n\n    let extractStorage = () => {\n        document.getElementById(\"saved-cities\").innerHTML = localStorage.getItem(\"savedCities\");\n        (0,_converter_js__WEBPACK_IMPORTED_MODULE_0__.setIsMetric)(localStorage.getItem(\"isMetric\") === \"true\");\n    }\n    return {populateStorage, extractStorage};\n}\n\nif(storageAvailable(\"localStorage\")) {\n    if(!localStorage.getItem('isMetric')) storage().populateStorage();\n    else storage().extractStorage();\n}\nelse {\n    console.log(\"Local storage not supported.\");\n}\n\n\n\n//# sourceURL=webpack://weather_app/./src/modules/localStorage.js?");

/***/ }),

/***/ "./src/assets/fonts/MerriweatherSans-Regular.ttf":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/MerriweatherSans-Regular.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"28aaf32bce0c73495eb5.ttf\";\n\n//# sourceURL=webpack://weather_app/./src/assets/fonts/MerriweatherSans-Regular.ttf?");

/***/ }),

/***/ "./src/assets/images/broken-clouds.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/broken-clouds.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"56ace049694d0f511c5d.jpg\";\n\n//# sourceURL=webpack://weather_app/./src/assets/images/broken-clouds.jpg?");

/***/ }),

/***/ "./src/assets/images/clear-n.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/clear-n.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2c65563f075f212f385f.jpg\";\n\n//# sourceURL=webpack://weather_app/./src/assets/images/clear-n.jpg?");

/***/ }),

/***/ "./src/assets/images/clear.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/clear.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5b9f38079025d586499e.jpg\";\n\n//# sourceURL=webpack://weather_app/./src/assets/images/clear.jpg?");

/***/ }),

/***/ "./src/assets/images/cloudy-n.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/cloudy-n.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5e4051f8c7f69c82cb2a.jpg\";\n\n//# sourceURL=webpack://weather_app/./src/assets/images/cloudy-n.jpg?");

/***/ }),

/***/ "./src/assets/images/few-clouds.jpg":
/*!******************************************!*\
  !*** ./src/assets/images/few-clouds.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"92039ad13447b52168c1.jpg\";\n\n//# sourceURL=webpack://weather_app/./src/assets/images/few-clouds.jpg?");

/***/ }),

/***/ "./src/assets/images/mist.jpg":
/*!************************************!*\
  !*** ./src/assets/images/mist.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a4e8dbd1692dc1801db2.jpg\";\n\n//# sourceURL=webpack://weather_app/./src/assets/images/mist.jpg?");

/***/ }),

/***/ "./src/assets/images/rain-n.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/rain-n.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ed40da1be7eb3712b8f8.jpg\";\n\n//# sourceURL=webpack://weather_app/./src/assets/images/rain-n.jpg?");

/***/ }),

/***/ "./src/assets/images/rain.jpg":
/*!************************************!*\
  !*** ./src/assets/images/rain.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"483bbc789eb6d8b49e4d.jpg\";\n\n//# sourceURL=webpack://weather_app/./src/assets/images/rain.jpg?");

/***/ }),

/***/ "./src/assets/images/scattered-clouds.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/scattered-clouds.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4ea577cac9f629528f81.jpg\";\n\n//# sourceURL=webpack://weather_app/./src/assets/images/scattered-clouds.jpg?");

/***/ }),

/***/ "./src/assets/images/shower-n.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/shower-n.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"da14925a283f61170a6f.jpg\";\n\n//# sourceURL=webpack://weather_app/./src/assets/images/shower-n.jpg?");

/***/ }),

/***/ "./src/assets/images/shower.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/shower.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2e07444925c2639c086a.jpg\";\n\n//# sourceURL=webpack://weather_app/./src/assets/images/shower.jpg?");

/***/ }),

/***/ "./src/assets/images/snow-n.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/snow-n.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5c7d28a1cfbef5ef942f.jpg\";\n\n//# sourceURL=webpack://weather_app/./src/assets/images/snow-n.jpg?");

/***/ }),

/***/ "./src/assets/images/snow.jpg":
/*!************************************!*\
  !*** ./src/assets/images/snow.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b5e57bcb6285a841a5c3.jpg\";\n\n//# sourceURL=webpack://weather_app/./src/assets/images/snow.jpg?");

/***/ }),

/***/ "./src/assets/images/thunderstorm.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/thunderstorm.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"de2af01ccb678bf29477.jpg\";\n\n//# sourceURL=webpack://weather_app/./src/assets/images/thunderstorm.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;