(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[88],{

/***/ "./app/components/TextList/LoadMore.css":
/*!**********************************************!*\
  !*** ./app/components/TextList/LoadMore.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"LoadMore---container"};

/***/ }),

/***/ "./app/components/TextList/LoadMore.js":
/*!*********************************************!*\
  !*** ./app/components/TextList/LoadMore.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadMore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _LoadMore_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadMore.css */ "./app/components/TextList/LoadMore.css");
/* harmony import */ var _LoadMore_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LoadMore_css__WEBPACK_IMPORTED_MODULE_2__);



function LoadMore(props) {
  var content;

  if (props.loading) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "leftbar.loading"
    }));
  } else {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "leftbar.loadMore"
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _LoadMore_css__WEBPACK_IMPORTED_MODULE_2___default.a.container
  }, content);
}

/***/ })

}]);
//# sourceMappingURL=88.parkhang-dev.js.map