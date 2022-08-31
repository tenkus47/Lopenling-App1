(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[90],{

/***/ "./app/components/TextList/TextListTab.css":
/*!*************************************************!*\
  !*** ./app/components/TextList/TextListTab.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"tab":"TextListTab---tab","showTab":"TextListTab---showTab","hideTab":"TextListTab---hideTab"};

/***/ }),

/***/ "./app/components/TextList/TextListTab.js":
/*!************************************************!*\
  !*** ./app/components/TextList/TextListTab.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/TextList/TextListTab.css */ "./app/components/TextList/TextListTab.css");
/* harmony import */ var components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2__);




var TextListTab = function TextListTab(props) {
  var tabClassnames = [components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2___default.a.tab];

  if (props.textListIsVisible) {
    tabClassnames.push(components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2___default.a.hideTab);
  } else {
    tabClassnames.push(components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2___default.a.showTab);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default.a.apply(void 0, tabClassnames),
    onClick: props.tabClicked
  }, "Text List");
};

/* harmony default export */ __webpack_exports__["default"] = (TextListTab);

/***/ })

}]);
//# sourceMappingURL=90.parkhang-dev.js.map