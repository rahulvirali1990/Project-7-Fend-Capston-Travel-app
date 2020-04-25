var Client =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/client/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! exports provided: formHandler, buttonHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_formHandler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/formHandler */ "./src/client/js/formHandler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formHandler", function() { return _js_formHandler__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _js_buttonHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/buttonHandler */ "./src/client/js/buttonHandler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buttonHandler", function() { return _js_buttonHandler__WEBPACK_IMPORTED_MODULE_1__["default"]; });

!(function webpackMissingModule() { var e = new Error("Cannot find module './styles/resets.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './styles/base.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './styles/footer.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './styles/form.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './styles/header.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());











/***/ }),

/***/ "./src/client/js/buttonHandler.js":
/*!****************************************!*\
  !*** ./src/client/js/buttonHandler.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function buttonHandler(event) {
  document.getElementById('country').textContent = '';
  document.getElementById('placeName').textContent = '';
  document.getElementById('LoT').textContent = '';
  document.getElementById('countdown').textContent = '';

  const weatherDiv = document.getElementById('weather');
  while (weatherDiv.firstChild) {
    weatherDiv.removeChild(weatherDiv.firstChild);
  }

  const imageDiv = document.getElementById('image');
  if (imageDiv.firstChild) {
    imageDiv.removeChild(imageDiv.firstChild);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (buttonHandler);

/***/ }),

/***/ "./src/client/js/formHandler.js":
/*!**************************************!*\
  !*** ./src/client/js/formHandler.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _fetchGeoNames = async (zip = '11230') => {
  const url = `http://localhost:8081/geoNames?zip=${zip}`;
  return await fetch(url).then(response => response.json());
};

const handleGeonames = async () => {
  const prospectiveLocation = document.getElementById('input1');

  return await _fetchGeoNames(prospectiveLocation.value).then(response => {
    document.getElementById('latitude').textContent = response.lat;
    document.getElementById('longitude').textContent = response.lng;
    document.getElementById('country').textContent = response.countryCode;
    document.getElementById('placeName').textContent = response.placeName;
  });
};

const handleCountdown = () => {
  const startDate = new Date(document.getElementById('input2').value);
  const endDate = new Date(document.getElementById('input3').value);

  const time = new Date();
  const countdown = Math.ceil(startDate - time);

  const LoT = endDate.getTime() - startDate.getTime();
  const deadline = (document.getElementById('countdown').textContent =
    Math.ceil(countdown / 8.64e7) + ' Days to go!');
  const tripDuration = (document.getElementById('LoT').textContent =
    LoT / 8.64e7 + ' Day trip.');
};

const dateDifference = (startDate, endDate) => {
  return endDate.getTime() - startDate.getTime();
};

const _fetchDarkSky = async (lat, long, time) => {
  const url2 = `http://localhost:8081/darkSky?latitude=${lat}&longitude=${long}&time=${time}`;
  return await fetch(url2).then(response => {
    return response.json();
  });
};

const handleDarkSky = (time, daySinceStart) => {
  const lat = document.getElementById('latitude').textContent;
  const lng = document.getElementById('longitude').textContent;

  _fetchDarkSky(lat, lng, time).then(response => {
    const temperatureHighAndLowText = `Day ${daySinceStart + 1}: Highs of ${
      response.temperatureHigh
    }\u00B0\F Lows of ${response.temperatureLow}\u00B0\F & likely ${
      response.icon
    }. `;
    // const childText = document.createTextNode(`Day ${daySinceStart +1 }: ${response.temperatureHigh}\u00B0 ↑ ${response.temperatureLow}\u00B0 ↓ ${response.icon}. `);
    const child = document.createElement('li');

    child.innerHTML = temperatureHighAndLowText;
    document.getElementById('weather').appendChild(child);
  });
};

//Pixabay API fetch request
const _fetchPixabay = async image => {
  const url3 = `http://localhost:8081/pixabay?image=${image}`;
  return await fetch(url3).then(response => {
    return response.json();
  });
};

const formHandler = event => {
  const weatherDiv = document.getElementById('weather');
  while (weatherDiv.firstChild) {
    weatherDiv.removeChild(weatherDiv.firstChild);
  }

  const imageDiv = document.getElementById('image');
  if (imageDiv.firstChild) {
    imageDiv.removeChild(imageDiv.firstChild);
  }

  handleCountdown();

  handleGeonames().then(response => {
    const startDate = new Date(document.getElementById('input2').value);
    const endDate = new Date(document.getElementById('input3').value);
    const countdownInDays = dateDifference(startDate, endDate) / 8.64e7;

    let currentDate = new Date(startDate);
    for (let i = 0; i < countdownInDays; i++) {
      const time = currentDate.getTime() / 1000;
      handleDarkSky(time, i);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    const placeName = document.getElementById('placeName').textContent;

    _fetchPixabay(placeName).then(response => {
      const image = document.createElement('img');
      image.src = response;

      document.getElementById('image').appendChild(image);
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (formHandler);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map