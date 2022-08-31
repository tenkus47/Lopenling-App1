(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[103],{

/***/ "./app/components/TextDetail/HeaderMenu/WindowSplitter.js":
/*!****************************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/WindowSplitter.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_VerticalSplit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/VerticalSplit */ "./node_modules/@mui/icons-material/VerticalSplit.js");
/* harmony import */ var _mui_icons_material_VerticalSplit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_VerticalSplit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ToggleButton */ "./node_modules/@mui/material/ToggleButton/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");





var ToggleButton = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["styled"])(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_3__["default"])(function (_ref) {
  var selectedcolor = _ref.selectedcolor;
  return {
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: selectedcolor
    }
  };
});
var theme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["createTheme"])({
  palette: {
    text: {
      primary: "#00398e"
    }
  }
});

function WindowSplitter(props) {
  var isSecondWindowOpen = props.isSecondWindowOpen,
      onChangeWindowOpen = props.onChangeWindowOpen;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ToggleButton, {
    value: "secondWindow",
    selected: isSecondWindowOpen,
    onClick: function onClick() {
      onChangeWindowOpen(!isSecondWindowOpen, 139);
    },
    style: {
      padding: 0
    },
    selectedcolor: "#053982"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    title: "split panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_VerticalSplit__WEBPACK_IMPORTED_MODULE_1___default.a, null))));
}

/* harmony default export */ __webpack_exports__["default"] = (WindowSplitter);

/***/ }),

/***/ "./node_modules/@mui/icons-material/VerticalSplit.js":
/*!***********************************************************!*\
  !*** ./node_modules/@mui/icons-material/VerticalSplit.js ***!
  \***********************************************************/
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
  d: "M3 15h8v-2H3v2zm0 4h8v-2H3v2zm0-8h8V9H3v2zm0-6v2h8V5H3zm10 0h8v14h-8V5z"
}), 'VerticalSplit');

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=103.parkhang-dev.js.map