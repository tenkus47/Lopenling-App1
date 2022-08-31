(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[71],{

/***/ "./app/components/TextDetail/PechaText.css":
/*!*************************************************!*\
  !*** ./app/components/TextDetail/PechaText.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"pechaText":"PechaText---pechaText","textPagesRow":"PechaText---textPagesRow","text":"PechaText---text","pechaImage":"PechaText---pechaImage","pechaContent":"PechaText---pechaContent"};

/***/ }),

/***/ "./app/components/TextDetail/PechaText.js":
/*!************************************************!*\
  !*** ./app/components/TextDetail/PechaText.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-virtualized/dist/es/AutoSizer */ "./node_modules/react-virtualized/dist/es/AutoSizer/index.js");
/* harmony import */ var react_virtualized_dist_es_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-virtualized/dist/es/List */ "./node_modules/react-virtualized/dist/es/List/index.js");
/* harmony import */ var react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-virtualized/dist/es/CellMeasurer */ "./node_modules/react-virtualized/dist/es/CellMeasurer/index.js");
/* harmony import */ var react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-virtualized/styles.css */ "./node_modules/react-virtualized/styles.css");
/* harmony import */ var react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Text */ "./app/components/TextDetail/Text.js");
/* harmony import */ var _PechaText_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PechaText.css */ "./app/components/TextDetail/PechaText.css");
/* harmony import */ var _PechaText_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_PechaText_css__WEBPACK_IMPORTED_MODULE_6__);




 // only needs to be imported once



var cache = new react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_3__["CellMeasurerCache"]({
  fixedWidth: true
});

var PechaText = function PechaText(props) {
  var paginatedText = props.paginatedText;
  var pages = paginatedText.getPages();

  function rowRenderer(_ref) {
    var key = _ref.key,
        index = _ref.index,
        parent = _ref.parent,
        style = _ref.style;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_3__["CellMeasurer"], {
      columnIndex: 0,
      key: key,
      parent: parent,
      rowIndex: index,
      cache: cache
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: key,
      style: style,
      className: _PechaText_css__WEBPACK_IMPORTED_MODULE_6___default.a.textPagesRow
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _PechaText_css__WEBPACK_IMPORTED_MODULE_6___default.a.pechaImage
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _PechaText_css__WEBPACK_IMPORTED_MODULE_6___default.a.pechaContent
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Page ", index + 1, " image"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_5__["default"], {
      segmentedText: pages[index],
      annotations: props.annotations,
      activeAnnotations: props.activeAnnotations,
      annotationPositions: props.annotationPositions,
      selectedAnnotatedSegments: props.selectedAnnotatedSegments
    })));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _PechaText_css__WEBPACK_IMPORTED_MODULE_6___default.a.pechaText
  }, pages.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_1__["AutoSizer"], null, function (_ref2) {
    var height = _ref2.height,
        width = _ref2.width;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized_dist_es_List__WEBPACK_IMPORTED_MODULE_2__["List"], {
      height: height,
      rowCount: pages.length,
      rowHeight: cache.rowHeight,
      rowRenderer: rowRenderer,
      width: width,
      deferredMeasurementCache: cache
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "(no pages)")));
};

/* harmony default export */ __webpack_exports__["default"] = (PechaText);

/***/ }),

/***/ "./app/images/page_break_icon.svg":
/*!****************************************!*\
  !*** ./app/images/page_break_icon.svg ***!
  \****************************************/
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
  d: "M3 0h24v15H3z"
});

var _ref2 =
/*#__PURE__*/

/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  stroke: "currentColor",
  strokeWidth: 3,
  d: "M0 20h8M11 20h8M22 20h8"
});

var _ref3 =
/*#__PURE__*/

/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M3 25h24v15H3z"
});

var SvgPageBreakIcon = function SvgPageBreakIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 30 40",
    fill: "currentColor"
  }, props), _ref, _ref2, _ref3);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgPageBreakIcon);

/***/ })

}]);
//# sourceMappingURL=71.parkhang-dev.js.map