(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[99],{

/***/ "./app/components/TextDetail/HeaderMenu/Refresh.js":
/*!*********************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/Refresh.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Refresh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/Refresh */ "./node_modules/@mui/icons-material/Refresh.js");
/* harmony import */ var _mui_icons_material_Refresh__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Refresh__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");




function Refresh(_ref) {
  var isSecondWindowOpen = _ref.isSecondWindowOpen;
  var handleRefresh = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var updatelistBtn = document.getElementById("updateList");
    if (updatelistBtn) updatelistBtn.click();
  }, [isSecondWindowOpen]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var timer = setTimeout(function () {
      handleRefresh();
    }, 500);
    return function () {
      return clearTimeout(timer);
    };
  }, [isSecondWindowOpen]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    variant: "text",
    size: "small",
    disableRipple: true,
    onClick: handleRefresh
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Refresh__WEBPACK_IMPORTED_MODULE_1___default.a, null));
}

/* harmony default export */ __webpack_exports__["default"] = (Refresh);

/***/ }),

/***/ "./node_modules/@mui/icons-material/Refresh.js":
/*!*****************************************************!*\
  !*** ./node_modules/@mui/icons-material/Refresh.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
}), 'Refresh');

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=99.parkhang-dev.js.map