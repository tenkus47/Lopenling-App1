(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[101],{

/***/ "./app/components/TextDetail2/TableOfContent/TableOfContent.js":
/*!*********************************************************************!*\
  !*** ./app/components/TextDetail2/TableOfContent/TableOfContent.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loader */ "./node_modules/react-loader/lib/react-loader.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/InputBase */ "./node_modules/@mui/material/InputBase/index.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Search = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["styled"])("div")(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["alpha"])(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["alpha"])(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%"
  }, theme.breakpoints.up("sm"), {
    marginLeft: theme.spacing(1),
    width: "auto"
  });
});
var SearchIconWrapper = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["styled"])("div")(function (_ref3) {
  var theme = _ref3.theme;
  return {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
});
var StyledInputBase = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["styled"])(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_5__["default"])(function (_ref4) {
  var theme = _ref4.theme;
  return {
    color: "inherit",
    "& .MuiInputBase-input": _defineProperty({
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "calc(1em + ".concat(theme.spacing(4), ")"),
      transition: theme.transitions.create("width"),
      width: "100%"
    }, theme.breakpoints.up("sm"), {
      width: "0",
      cursor: "pointer",
      "&:focus": {
        width: "20ch"
      }
    })
  };
});

function TableOfContent() {
  var data = [{
    Id: 1,
    Title: "chapter 1",
    segment_id: 0
  }, {
    Id: 2,
    Title: "chapter 2",
    segment_id: 400
  }];
  var loaded = data.length > 0 ? true : false;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      bgcolor: "heading.main",
      color: "text.primary",
      width: "100%",
      height: "100%",
      paddingInline: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      justifyContent: "space-between",
      paddingLeft: "0 !important",
      margin: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    textTransform: "uppercase",
    component: "h6"
  }, "Table Of Content"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Search, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchIconWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInputBase, {
    placeholder: "Search\u2026",
    inputProps: {
      "aria-label": "search"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], null, data.map(function (list, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      key: "TableContent-" + index,
      sx: {
        cursor: "pointer",
        width: "fit-content",
        "&:hover": {
          fontWeight: "bold"
        }
      }
    }, list.Title);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (TableOfContent);

/***/ }),

/***/ "./node_modules/@mui/icons-material/Search.js":
/*!****************************************************!*\
  !*** ./node_modules/@mui/icons-material/Search.js ***!
  \****************************************************/
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
  d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
}), 'Search');

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=101.parkhang-dev.js.map