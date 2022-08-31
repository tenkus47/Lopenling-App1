(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[84],{

/***/ "./app/components/TextDetail/ImageToggle.css":
/*!***************************************************!*\
  !*** ./app/components/TextDetail/ImageToggle.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"imageToggle":"ImageToggle---imageToggle"};

/***/ }),

/***/ "./app/components/TextDetail/ImageToggle.js":
/*!**************************************************!*\
  !*** ./app/components/TextDetail/ImageToggle.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageToggle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageToggle.css */ "./app/components/TextDetail/ImageToggle.css");
/* harmony import */ var _ImageToggle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ImageToggle_css__WEBPACK_IMPORTED_MODULE_1__);



var ImageToggle = function ImageToggle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _ImageToggle_css__WEBPACK_IMPORTED_MODULE_1___default.a.imageToggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "showPageImages"
  }, "Show Images"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "showPageImages",
    type: "checkbox",
    checked: props.showImages,
    onChange: function onChange(e) {
      var target = event.target;
      var checked = target.checked;
      props.onChange(checked);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggle);

/***/ })

}]);
//# sourceMappingURL=84.parkhang-dev.js.map