(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[68],{

/***/ "./app/components/UI/Accessory.css":
/*!*****************************************!*\
  !*** ./app/components/UI/Accessory.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","accessory":"Accessory---accessory"};

/***/ }),

/***/ "./app/components/UI/Accessory.js":
/*!****************************************!*\
  !*** ./app/components/UI/Accessory.js ***!
  \****************************************/
/*! exports provided: accessoryTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accessoryTypes", function() { return accessoryTypes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Accessory_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accessory.css */ "./app/components/UI/Accessory.css");
/* harmony import */ var _Accessory_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Accessory_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css/colour.css */ "./app/css/colour.css");
/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(css_colour_css__WEBPACK_IMPORTED_MODULE_2__);



var accessoryTypes = {
  ADD: "+",
  DELETE: "\xD7"
};

var Accessory = function Accessory(props) {
  var style = {};
  style.backgroundColor = props.backgroundColor || "";
  style.color = props.color || "#fff";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Accessory_css__WEBPACK_IMPORTED_MODULE_1___default.a.accessory,
    title: props.title,
    onClick: props.onClick,
    style: style
  }, accessoryTypes[props.type]);
};

/* harmony default export */ __webpack_exports__["default"] = (Accessory);

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
//# sourceMappingURL=68.parkhang-dev.js.map