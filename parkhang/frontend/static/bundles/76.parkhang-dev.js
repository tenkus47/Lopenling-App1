(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[76],{

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

/***/ }),

/***/ "./app/components/TextList/TextListTabContainer.js":
/*!*********************************************************!*\
  !*** ./app/components/TextList/TextListTabContainer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-batched-actions */ "./node_modules/redux-batched-actions/lib/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_batched_actions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var components_TextList_TextListTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/TextList/TextListTab */ "./app/components/TextList/TextListTab.js");







var mapStateToProps = function mapStateToProps(state) {
  return {
    textListIsVisible: Object(reducers__WEBPACK_IMPORTED_MODULE_3__["getTextListVisible"])(state)
  };
};

var mapStateToDispatch = function mapStateToDispatch(dispatch) {
  return {
    tabClicked: function tabClicked() {
      var textListIsVisible = true;
      dispatch(Object(actions__WEBPACK_IMPORTED_MODULE_4__["changedTextListVisible"])(textListIsVisible));
    }
  };
};

var TextListTabContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapStateToDispatch)(components_TextList_TextListTab__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (TextListTabContainer);

/***/ })

}]);
//# sourceMappingURL=76.parkhang-dev.js.map