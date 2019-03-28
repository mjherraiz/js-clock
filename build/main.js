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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/day.scss":
/*!**********************!*\
  !*** ./src/day.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/day.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _day_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./day.scss */ \"./src/day.scss\");\n/* harmony import */ var _day_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_day_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _night_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./night.scss */ \"./src/night.scss\");\n/* harmony import */ var _night_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_night_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sun_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sun.js */ \"./src/sun.js\");\n/* harmony import */ var _sun_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sun_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\ndocument.getElementById(\"night\").hidden = true;\ndocument.getElementById(\"day\").hidden = true;\nvar myVar = setInterval(function () {\n    myTimer();\n}, 1000);\n\nfunction myTimer() {\n    var clock = document.getElementById(\"clock\");\n    var now = new Date();\n    var className = \"sky-gradient-\" + now.getHours();\n    clock.classList.add(className);\n    navigator.geolocation.getCurrentPosition(function (position) {\n        var sunset = new Date().sunset(position.coords.latitude, position.coords.longitude);\n        var sunrise = new Date().sunrise(position.coords.latitude, position.coords.longitude);\n        if (sunrise < now && now < sunset) {\n            document.getElementById(\"night\").hidden = true;\n            document.getElementById(\"day\").hidden = false;\n        } else {\n            document.getElementById(\"night\").hidden = false;\n            document.getElementById(\"day\").hidden = true;\n        }\n    });\n    document.getElementById(\"digits\").innerHTML = now.toLocaleTimeString();\n}\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/main.css?");

/***/ }),

/***/ "./src/night.scss":
/*!************************!*\
  !*** ./src/night.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/night.scss?");

/***/ }),

/***/ "./src/sun.js":
/*!********************!*\
  !*** ./src/sun.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("Date.prototype.sunrise = function(latitude, longitude, zenith) {\n\treturn this.sunriseSet(latitude, longitude, true, zenith);\n}\n\nDate.prototype.sunset = function(latitude, longitude, zenith) {\n\treturn this.sunriseSet(latitude, longitude, false, zenith);\n}\n\nDate.prototype.sunriseSet = function(latitude, longitude, sunrise, zenith) {\n\tif(!zenith) {\n\t\tzenith = 90.8333;\n\t}\n\n\tvar hoursFromMeridian = longitude / Date.DEGREES_PER_HOUR,\n\t\tdayOfYear = this.getDayOfYear(),\n\t\tapproxTimeOfEventInDays,\n\t\tsunMeanAnomaly,\n\t\tsunTrueLongitude,\n\t\tascension,\n\t\trightAscension,\n\t\tlQuadrant,\n\t\traQuadrant,\n\t\tsinDec,\n\t\tcosDec,\n\t\tlocalHourAngle,\n\t\tlocalHour,\n\t\tlocalMeanTime,\n\t\ttime;\n\n\tif (sunrise) {\n        approxTimeOfEventInDays = dayOfYear + ((6 - hoursFromMeridian) / 24);\n    } else {\n        approxTimeOfEventInDays = dayOfYear + ((18.0 - hoursFromMeridian) / 24);\n    }\n\n\tsunMeanAnomaly = (0.9856 * approxTimeOfEventInDays) - 3.289;\n\n\tsunTrueLongitude = sunMeanAnomaly + (1.916 * Math.sinDeg(sunMeanAnomaly)) + (0.020 * Math.sinDeg(2 * sunMeanAnomaly)) + 282.634;\n\tsunTrueLongitude =  Math.mod(sunTrueLongitude, 360);\n\n\tascension = 0.91764 * Math.tanDeg(sunTrueLongitude);\n    rightAscension = 360 / (2 * Math.PI) * Math.atan(ascension);\n    rightAscension = Math.mod(rightAscension, 360);\n    \n    lQuadrant = Math.floor(sunTrueLongitude / 90) * 90;\n    raQuadrant = Math.floor(rightAscension / 90) * 90;\n    rightAscension = rightAscension + (lQuadrant - raQuadrant);\n    rightAscension /= Date.DEGREES_PER_HOUR;\n\n    sinDec = 0.39782 * Math.sinDeg(sunTrueLongitude);\n\tcosDec = Math.cosDeg(Math.asinDeg(sinDec));\n\tcosLocalHourAngle = ((Math.cosDeg(zenith)) - (sinDec * (Math.sinDeg(latitude)))) / (cosDec * (Math.cosDeg(latitude)));\n\n\tlocalHourAngle = Math.acosDeg(cosLocalHourAngle)\n\n\tif (sunrise) {\n\t\tlocalHourAngle = 360 - localHourAngle;\n\t} \n\n\tlocalHour = localHourAngle / Date.DEGREES_PER_HOUR;\n\n\tlocalMeanTime = localHour + rightAscension - (0.06571 * approxTimeOfEventInDays) - 6.622;\n\n\ttime = localMeanTime - (longitude / Date.DEGREES_PER_HOUR);\n\ttime = Math.mod(time, 24);\n\n\tvar midnight = new Date(0);\n\t\tmidnight.setUTCFullYear(this.getUTCFullYear());\n\t\tmidnight.setUTCMonth(this.getUTCMonth());\n\t\tmidnight.setUTCDate(this.getUTCDate());\n\t\n\n\n\tvar milli = midnight.getTime() + (time * 60 *60 * 1000);\n\n\n\treturn new Date(milli);\n}\n\nDate.DEGREES_PER_HOUR = 360 / 24;\n\n\n// Utility functions\n\nDate.prototype.getDayOfYear = function() {\n\tvar onejan = new Date(this.getFullYear(),0,1);\n\treturn Math.ceil((this - onejan) / 86400000);\n}\n\nMath.degToRad = function(num) {\n\treturn num * Math.PI / 180;\n}\n\nMath.radToDeg = function(radians){\n    return radians * 180.0 / Math.PI;\n}\n\nMath.sinDeg = function(deg) {\n    return Math.sin(deg * 2.0 * Math.PI / 360.0);\n}\n\n\nMath.acosDeg = function(x) {\n    return Math.acos(x) * 360.0 / (2 * Math.PI);\n}\n\nMath.asinDeg = function(x) {\n    return Math.asin(x) * 360.0 / (2 * Math.PI);\n}\n\n\nMath.tanDeg = function(deg) {\n    return Math.tan(deg * 2.0 * Math.PI / 360.0);\n}\n\nMath.cosDeg = function(deg) {\n    return Math.cos(deg * 2.0 * Math.PI / 360.0);\n}\n\nMath.mod = function(a, b) {\n\tvar result = a % b;\n\tif(result < 0) {\n\t\tresult += b;\n\t}\n\treturn result;\n}\n\n\n//# sourceURL=webpack:///./src/sun.js?");

/***/ })

/******/ });