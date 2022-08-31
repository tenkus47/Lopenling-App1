(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[91],{

/***/ "./app/components/UI/ApplyTooltip.js":
/*!*******************************************!*\
  !*** ./app/components/UI/ApplyTooltip.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");




function ApplyTooltip(_ref) {
  var children = _ref.children,
      tooltipName = _ref.tooltipName,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? null : _ref$format,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$shortcut = _ref.shortcut,
      shortcut = _ref$shortcut === void 0 ? "" : _ref$shortcut,
      _ref$on = _ref.on,
      on = _ref$on === void 0 ? false : _ref$on;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-tip": true,
    "data-for": tooltipName,
    className: className,
    style: {
      width: "100%"
    }
  }, !on ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "top",
    followCursor: true,
    title: format ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: format
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, tooltipName, " [".concat(shortcut, "]"))
  }, children) : children));
}

/* harmony default export */ __webpack_exports__["default"] = (ApplyTooltip);

/***/ }),

/***/ "./app/css/colour.css":
/*!****************************!*\
  !*** ./app/css/colour.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b"};

/***/ })

}]);
//# sourceMappingURL=91.parkhang-dev.js.map