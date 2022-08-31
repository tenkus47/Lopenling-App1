(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[37],{

/***/ "./app/components/TextsSearch/TextsSearch.css":
/*!****************************************************!*\
  !*** ./app/components/TextsSearch/TextsSearch.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"textsSearchContainer":"TextsSearch---textsSearchContainer","textsSearch":"TextsSearch---textsSearch","minify":"TextsSearch---minify"};

/***/ }),

/***/ "./app/components/TextsSearch/TextsSearch.js":
/*!***************************************************!*\
  !*** ./app/components/TextsSearch/TextsSearch.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextsSearch_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextsSearch.css */ "./app/components/TextsSearch/TextsSearch.css");
/* harmony import */ var _TextsSearch_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TextsSearch_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app_constants */ "./app/app_constants/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_UI_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/Button */ "./app/components/UI/Button.js");
/* harmony import */ var images_search_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! images/search.svg */ "./app/images/search.svg");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var TextsSearch = function TextsSearch(props) {
  var textInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

  var _useTransition = Object(react__WEBPACK_IMPORTED_MODULE_0__["useTransition"])(),
      _useTransition2 = _slicedToArray(_useTransition, 2),
      ispending = _useTransition2[0],
      startTransition = _useTransition2[1];

  var initiateSearch = function initiateSearch(e) {
    e.preventDefault();

    if (textInput.current instanceof HTMLInputElement) {
      var _searchTerm = textInput.current.value;
      startTransition(function () {
        props.searchChanged(_searchTerm);
      });
    }
  };

  var handleChange = function handleChange(e) {
    startTransition(function () {
      if (e.target.value === "") {
        props.searchChanged(null);
        return;
      }

      props.searchChanged(e.target.value);
    });
  };

  console.log(props.textListWidth);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _TextsSearch_css__WEBPACK_IMPORTED_MODULE_1___default.a.textsSearchContainer,
    style: {
      maxWidth: props.textListWidth
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _TextsSearch_css__WEBPACK_IMPORTED_MODULE_1___default.a.textsSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: initiateSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: handleChange,
    style: {
      outline: "none",
      width: 150
    },
    type: "text",
    id: "textSearchInput",
    placeholder: props.intl.formatMessage({
      id: "leftbar.search"
    }),
    ref: textInput
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    backgroundColor: "#35BF5C",
    onClick: initiateSearch // title={props.intl.formatMessage({
    //     id: "leftbar.search",
    // })}
    ,
    noBezel: true,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_search_svg__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(TextsSearch));

/***/ }),

/***/ "./app/components/TextsSearch/TextsSearchContainer.js":
/*!************************************************************!*\
  !*** ./app/components/TextsSearch/TextsSearchContainer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TextsSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextsSearch */ "./app/components/TextsSearch/TextsSearch.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");






var mapStateToProps = function mapStateToProps(state) {
  return {
    searchTerm: reducers__WEBPACK_IMPORTED_MODULE_4__["getSearchValue"](state),
    searchValue: state.ui.searchValue,
    textListWidth: reducers__WEBPACK_IMPORTED_MODULE_4__["getTextListWidth"](state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  // const { dispatch } = dispatchProps;
  // const { selectedText } = stateProps;
  return {
    searchChanged: function searchChanged(searchTerm) {
      dispatch(Object(actions__WEBPACK_IMPORTED_MODULE_3__["changedSearchValue"])(searchTerm));
    }
  };
};

var TextsSearchContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_TextsSearch__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (TextsSearchContainer);

/***/ }),

/***/ "./app/components/TextsSearch/index.js":
/*!*********************************************!*\
  !*** ./app/components/TextsSearch/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextsSearchContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextsSearchContainer */ "./app/components/TextsSearch/TextsSearchContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TextsSearchContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./app/images/search.svg":
/*!*******************************!*\
  !*** ./app/images/search.svg ***!
  \*******************************/
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
  d: "M9 2C5.146 2 2 5.146 2 9s3.146 7 7 7a6.959 6.959 0 004.574-1.719l.426.426V16l6 6 2-2-6-6h-1.293l-.426-.426A6.959 6.959 0 0016 9c0-3.854-3.146-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5z"
});

var SvgSearch = function SvgSearch(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgSearch);

/***/ })

}]);
//# sourceMappingURL=37.parkhang-dev.js.map