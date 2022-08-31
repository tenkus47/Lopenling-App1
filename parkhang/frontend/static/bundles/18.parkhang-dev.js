(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[18],{

/***/ "./app/components/TextDetail2/HeaderMenu/Settings.js":
/*!***********************************************************!*\
  !*** ./app/components/TextDetail2/HeaderMenu/Settings.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var images_wrench_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! images/wrench.svg */ "./app/images/wrench.svg");
/* harmony import */ var _UI_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/Slider */ "./app/components/UI/Slider.js");
/* harmony import */ var components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/utility/useLocalStorage */ "./app/components/utility/useLocalStorage.js");
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Check */ "./node_modules/@mui/icons-material/Check.js");
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app_constants */ "./app/app_constants/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function Settings(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showOption = _useState2[0],
      setShowOption = _useState2[1];

  var _useLocalStorage = Object(components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__["default"])("WindowTwoFont", "Tibetan"),
      _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
      fontSelect = _useLocalStorage2[0],
      setFontSelect = _useLocalStorage2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.body.style.setProperty("--tibetan-fonts2", fontSelect);
  }, []);

  var handleClick = function handleClick() {
    setShowOption(function (prev) {
      return !prev;
    });
  };

  var handlefont = function handlefont(value) {
    setFontSelect(value);
    document.body.style.setProperty("--tibetan-fonts2", "".concat(value));
    var update = document.getElementById("updateList2");
    var times = 1;
    var timer = setInterval(function () {
      update.click();
      times++;
      console.log("ran");

      if (times > 4) {
        clearInterval(timer);
      }
    }, 800);
    setShowOption(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["ClickAwayListener"], {
    onClickAway: function onClickAway() {
      return setShowOption(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    position: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    onClick: handleClick,
    size: "small",
    variant: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_wrench_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    height: 20,
    width: 20,
    fill: "currentColor"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Grow"], {
    "in": showOption
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["MenuList"], {
    dense: true,
    sx: {
      position: "absolute",
      right: 0,
      zIndex: 2,
      top: 40,
      bgcolor: "heading.main"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    max: 20,
    min: 7,
    initialvalue: props.textFontSize,
    changeSize: props.onChangedFontSize
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FontSelection, {
    selectFont: handlefont,
    selectedfont: fontSelect
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
    onClick: function onClick() {
      return props.onExport();
    }
  }, "Export Document", props.exportingWitness && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_4___default.a, null))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Settings);

var FontSelection = function FontSelection(_ref) {
  var selectFont = _ref.selectFont,
      selectedfont = _ref.selectedfont;
  var fontAvailable = app_constants__WEBPACK_IMPORTED_MODULE_6__["FONT_LIST"] || [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    textAlign: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Font:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    onChange: function onChange(e) {
      return selectFont(e.target.value);
    },
    value: selectedfont
  }, fontAvailable.map(function (font, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: index + "-fontselect",
      value: font
    }, font);
  })));
};

/***/ }),

/***/ "./app/components/UI/Slider.css":
/*!**************************************!*\
  !*** ./app/components/UI/Slider.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"inputRanges":"Slider---inputRanges","inputRange":"Slider---inputRange"};

/***/ }),

/***/ "./app/components/UI/Slider.js":
/*!*************************************!*\
  !*** ./app/components/UI/Slider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Slider_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider.css */ "./app/components/UI/Slider.css");
/* harmony import */ var _Slider_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Slider_css__WEBPACK_IMPORTED_MODULE_2__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Slider(_ref) {
  var max = _ref.max,
      min = _ref.min,
      initialvalue = _ref.initialvalue,
      _ref$changeSize = _ref.changeSize,
      changeSize = _ref$changeSize === void 0 ? function (r) {
    return console.log(r);
  } : _ref$changeSize;
  var initialPercent = initialvalue / max * 100;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialPercent),
      _useState2 = _slicedToArray(_useState, 2),
      tempValue = _useState2[0],
      setTempValue = _useState2[1];

  var submitValue = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (e) {
    var currentPercent = tempValue / 100 * max;
    changeSize(Math.floor(parseInt(currentPercent)));
  }, 500);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _Slider_css__WEBPACK_IMPORTED_MODULE_2___default.a.inputRanges
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      fontSize: 13,
      top: "-5px"
    },
    onClick: function onClick() {
      return changeSize(initialvalue - 2);
    }
  }, "\u0F40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "range",
    style: {
      width: "70%"
    },
    className: _Slider_css__WEBPACK_IMPORTED_MODULE_2___default.a.inputRange,
    min: 40,
    max: 100,
    smooth: "yes",
    step: 1,
    value: tempValue,
    onChange: function onChange(e) {
      return setTempValue(e.target.value);
    },
    onMouseUp: submitValue,
    onTouchEnd: submitValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      fontSize: 18,
      top: "-10px"
    },
    onClick: function onClick() {
      return changeSize(initialvalue + 2);
    }
  }, "\u0F40"));
}

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./app/images/wrench.svg":
/*!*******************************!*\
  !*** ./app/images/wrench.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/

/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
});

var SvgWrench = function SvgWrench(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 512 512"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgWrench);

/***/ })

}]);
//# sourceMappingURL=18.parkhang-dev.js.map