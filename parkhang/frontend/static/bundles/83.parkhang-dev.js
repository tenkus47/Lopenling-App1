(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[83],{

/***/ "./app/components/TextDetail/FontSize.css":
/*!************************************************!*\
  !*** ./app/components/TextDetail/FontSize.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"fontSize":"FontSize---fontSize"};

/***/ }),

/***/ "./app/components/TextDetail/FontSize.js":
/*!***********************************************!*\
  !*** ./app/components/TextDetail/FontSize.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FontSize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FontSize.css */ "./app/components/TextDetail/FontSize.css");
/* harmony import */ var _FontSize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FontSize_css__WEBPACK_IMPORTED_MODULE_1__);



var FontSize = function FontSize(props) {
  var minimumSize = 14;
  var maximumSize = 48;
  var options = new Array(maximumSize - minimumSize).fill().map(function (value, index) {
    var size = minimumSize + index;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: size,
      key: size
    }, size);
  });

  var onChange = function onChange(e) {
    var target = event.target;
    var fontSize = Number(target.value);
    props.onChange(fontSize);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _FontSize_css__WEBPACK_IMPORTED_MODULE_1___default.a.fontSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "fontSize"
  }, "Font Size"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    value: props.fontSize,
    onChange: onChange
  }, options));
};

/* harmony default export */ __webpack_exports__["default"] = (FontSize);

/***/ })

}]);
//# sourceMappingURL=83.parkhang-dev.js.map