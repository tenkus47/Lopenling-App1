(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[24],{

/***/ "./app/components/TextDetail2/HeaderMenu/HighlightedString.js":
/*!********************************************************************!*\
  !*** ./app/components/TextDetail2/HeaderMenu/HighlightedString.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HighlightedString; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grapheme-splitter */ "./node_modules/grapheme-splitter/index.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grapheme_splitter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-string-replace */ "./node_modules/react-string-replace/index.js");
/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_string_replace__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var HighlightedString = /*#__PURE__*/function (_React$Component) {
  _inherits(HighlightedString, _React$Component);

  var _super = _createSuper(HighlightedString);

  function HighlightedString(props) {
    _classCallCheck(this, HighlightedString);

    return _super.call(this, props);
  }

  _createClass(HighlightedString, [{
    key: "render",
    value: function render() {
      var _this = this;

      var string = this.props.string;
      var nameHtml = string;
      var stringClass = this.props.stringClass || "";

      if (this.props.searchTerm) {
        var searchTerm = this.props.searchTerm;
        var splitter = new grapheme_splitter__WEBPACK_IMPORTED_MODULE_1___default.a();
        var graphemes = splitter.splitGraphemes(string);
        var start = string.indexOf(searchTerm);
        var end = start + searchTerm.length;
        var position = 0;
        var foundGraphemes = "";

        if (start > -1) {
          for (var i = 0; i < graphemes.length; i++) {
            var grapheme = graphemes[i];

            if (position >= start && position < end) {
              foundGraphemes += grapheme;
            }

            position += grapheme.length;
          }
        }

        if (foundGraphemes.length > 0) {
          nameHtml = react_string_replace__WEBPACK_IMPORTED_MODULE_2___default()(string, foundGraphemes, function (match, i) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
              className: _this.props.highlightClass,
              key: "highlight-".concat(i)
            }, match);
          });
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: stringClass
      }, nameHtml);
    }
  }]);

  return HighlightedString;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./app/components/TextDetail2/HeaderMenu/Refresh.js":
/*!**********************************************************!*\
  !*** ./app/components/TextDetail2/HeaderMenu/Refresh.js ***!
  \**********************************************************/
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
    var updatelistBtn2 = document.getElementById("updateList2");
    if (updatelistBtn2) updatelistBtn2.click();
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
    onClick: handleRefresh
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Refresh__WEBPACK_IMPORTED_MODULE_1___default.a, null));
}

/* harmony default export */ __webpack_exports__["default"] = (Refresh);

/***/ }),

/***/ "./app/components/TextDetail2/HeaderMenu/Search.js":
/*!*********************************************************!*\
  !*** ./app/components/TextDetail2/HeaderMenu/Search.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");




function Search(_ref) {
  var handleWindowSearch = _ref.handleWindowSearch;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    size: "small",
    variant: "text",
    onClick: handleWindowSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1___default.a, null));
}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./app/components/TextDetail2/HeaderMenu/SearchList.js":
/*!*************************************************************!*\
  !*** ./app/components/TextDetail2/HeaderMenu/SearchList.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var _HighlightedString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HighlightedString */ "./app/components/TextDetail2/HeaderMenu/HighlightedString.js");
/* harmony import */ var _SearchStyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchStyle.css */ "./app/components/TextDetail2/HeaderMenu/SearchStyle.css");
/* harmony import */ var _SearchStyle_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SearchStyle_css__WEBPACK_IMPORTED_MODULE_3__);





function SearchList(props) {
  var handleListItemClick = props.handleListItemClick,
      searchValue = props.searchValue,
      results = props.results,
      selectedText = props.selectedText;
  var listRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var cache = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new react_virtualized__WEBPACK_IMPORTED_MODULE_1__["CellMeasurerCache"]({
    fixedWidth: true,
    defaultHeight: 100
  }));

  var rowRenderer = function rowRenderer(_ref) {
    var key = _ref.key,
        index = _ref.index,
        parent = _ref.parent,
        style = _ref.style;
    var result = results[index];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["CellMeasurer"], {
      key: "listkeys2-".concat(key),
      cache: cache.current,
      parent: parent,
      columnIndex: 0,
      rowIndex: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: style
    }, results.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _SearchStyle_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchListItem,
      onClick: function onClick() {
        return handleListItemClick(result[0]);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HighlightedString__WEBPACK_IMPORTED_MODULE_2__["default"], {
      string: result[1],
      highlightClass: _SearchStyle_css__WEBPACK_IMPORTED_MODULE_3___default.a.highlight,
      searchTerm: searchValue
    }))));
  };

  if (!results) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["AutoSizer"], null, function (_ref2) {
    var height = _ref2.height,
        width = _ref2.width;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["List"], {
      ref: listRef,
      height: height,
      rowCount: results === null || results === void 0 ? void 0 : results.length,
      rowHeight: cache.current.rowHeight,
      deferredMeasurementCache: cache.current,
      rowRenderer: rowRenderer,
      width: width,
      overscanRowCount: 1
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchList);

/***/ }),

/***/ "./app/components/TextDetail2/HeaderMenu/SearchStyle.css":
/*!***************************************************************!*\
  !*** ./app/components/TextDetail2/HeaderMenu/SearchStyle.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"highlight":"SearchStyle---highlight","searchListItem":"SearchStyle---searchListItem"};

/***/ }),

/***/ "./app/components/TextDetail2/HeaderMenu/TableOfContent.js":
/*!*****************************************************************!*\
  !*** ./app/components/TextDetail2/HeaderMenu/TableOfContent.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Clear */ "./node_modules/@mui/icons-material/Clear.js");
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_3__);





function TableOfContent(props) {
  var handleClick = function handleClick() {
    props.changeShowTableContent(!props.showTableContent);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: handleClick
  }, props.showTableContent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_3___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default.a, null)));
}

/* harmony default export */ __webpack_exports__["default"] = (TableOfContent);

/***/ }),

/***/ "./app/components/TextDetail2/SelectVersion.css":
/*!******************************************************!*\
  !*** ./app/components/TextDetail2/SelectVersion.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","selectVersion":"SelectVersion---selectVersion","selectEmpty":"SelectVersion---selectEmpty","selectOptions":"SelectVersion---selectOptions","styled-select":"SelectVersion---styled-select"};

/***/ }),

/***/ "./app/components/TextDetail2/SelectVersion.js":
/*!*****************************************************!*\
  !*** ./app/components/TextDetail2/SelectVersion.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _SelectVersion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectVersion.css */ "./app/components/TextDetail2/SelectVersion.css");
/* harmony import */ var _SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SelectVersion_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");







var SelectVersion = function SelectVersion(props) {
  var witnesses = [];
  var tabName = "";
  var r = "";
  var classes = [];

  if (props.witnesses) {
    witnesses = props.witnesses.map(function (witness) {
      return witness;
    });
    if (props.activeWitness) r = props.witnesses.findIndex(function (l) {
      return l.id === props.activeWitness.id;
    });
    witnesses.sort(function (a, b) {
      if (a.isWorking) {
        return -1;
      }

      if (b.isWorking) {
        return 1;
      }

      if (a.isBase) {
        return -1;
      }

      if (b.isBase) {
        return 1;
      }

      return 0;
    });
    witnesses = witnesses.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  var handleChangeWitness = function handleChangeWitness(e) {
    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(witnesses)) {
      props.onSelectedWitness(witnesses[e.target.value]);
    }
  };

  if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(witnesses) && !props.activeWitness) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["NativeSelect"], {
    onChange: handleChangeWitness,
    className: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectVersion,
    value: r,
    label: "Version2",
    classes: {
      root: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectEmpty,
      select: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectOptions
    }
  }, witnesses.map(function (witness, key) {
    var _props$activeWitness;

    if (witness.id === ((_props$activeWitness = props.activeWitness) === null || _props$activeWitness === void 0 ? void 0 : _props$activeWitness.id)) classes.push(_SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.selected);
    tabName = witness.source.name;

    if (witness.isWorking) {
      tabName = props.intl.locale === "en" ? props.user.name === "User" ? "Working" : "My Edition" : "མཉམ་འབྲེལ་པར་མ།";
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      key: "versionSelect2-".concat(key),
      value: key,
      className: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectOptions
    }, tabName);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(SelectVersion)));

/***/ }),

/***/ "./app/components/TextDetail2/TextDetailHeading.js":
/*!*********************************************************!*\
  !*** ./app/components/TextDetail2/TextDetailHeading.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _textDetailHeading_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textDetailHeading.css */ "./app/components/TextDetail2/textDetailHeading.css");
/* harmony import */ var _textDetailHeading_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_textDetailHeading_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SelectVersion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectVersion */ "./app/components/TextDetail2/SelectVersion.js");
/* harmony import */ var _UI_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/Slider */ "./app/components/UI/Slider.js");
/* harmony import */ var _TextListContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextListContainer */ "./app/components/TextDetail2/TextListContainer.js");
/* harmony import */ var images_options_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! images/options.svg */ "./app/images/options.svg");
/* harmony import */ var _HeaderMenu_Settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HeaderMenu/Settings */ "./app/components/TextDetail2/HeaderMenu/Settings.js");
/* harmony import */ var _HeaderMenu_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HeaderMenu/Search */ "./app/components/TextDetail2/HeaderMenu/Search.js");
/* harmony import */ var _HeaderMenu_TableOfContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HeaderMenu/TableOfContent */ "./app/components/TextDetail2/HeaderMenu/TableOfContent.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _HeaderMenu_Refresh__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./HeaderMenu/Refresh */ "./app/components/TextDetail2/HeaderMenu/Refresh.js");
/* harmony import */ var _HeaderMenu_SearchList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./HeaderMenu/SearchList */ "./app/components/TextDetail2/HeaderMenu/SearchList.js");



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















function TextDetailHeading(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      findvalue = _useState2[0],
      setfindvalue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showFind = _useState4[0],
      setShowFind = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      visible = _useState6[0],
      setVisible = _useState6[1];

  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var headingRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var handleListItemClick = function handleListItemClick(id) {
    props.changeSelectSyncId(id);
  };

  var debouncedSearch = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function (s) {
    props.searchChanged(s);
  }, 1000)).current;
  var handleSearch = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    e.preventDefault();
    debouncedSearch(findvalue);
    setVisible(true);
  }, [findvalue]);
  var handleWindowSearch = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setShowFind(!showFind);
  }, [showFind]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (showFind === true) {
      inputRef.current.focus();
    }

    if (showFind === false) debouncedSearch(null);
  }, [showFind]);

  var closeSearchItemBox = function closeSearchItemBox() {
    setVisible(false);
    debouncedSearch(null);
    setfindvalue("");
  };

  var condition = lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(props.searchResults) && props.searchResults.hasOwnProperty(props.selectedText.id);
  var results = condition ? props.searchResults[props.selectedText.id].results : [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["Stack"], {
    direction: "column",
    ref: headingRef,
    spacing: 1,
    sx: {
      paddingInline: {
        md: 2,
        xs: 0
      },
      paddingBlock: {
        md: 1,
        xs: 0
      },
      borderTop: {
        md: 0,
        xs: "1px solid gray"
      },
      bgcolor: "heading.main",
      color: "text.primary"
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["Stack"], {
    direction: "row",
    spacing: 1,
    justifyContent: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["Box"], {
    sx: {
      display: "flex",
      gap: {
        md: 2,
        sx: 0
      },
      flexDirection: {
        md: "row",
        xs: "column"
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TextListContainer__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SelectVersion__WEBPACK_IMPORTED_MODULE_4__["default"], {
    witnesses: props.witnesses,
    activeWitness: props.selectedWitness,
    onSelectedWitness: props.onSelectedWitness,
    user: props.user
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["ButtonGroup"], {
    size: "small",
    "aria-label": "small button group",
    sx: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "fit-content",
      width: "fit-content",
      border: function border(theme) {
        return "1px solid ".concat(theme.palette.divider);
      },
      borderRadius: 1,
      bgcolor: "background.paper",
      color: "text.secondary",
      "& svg": {
        m: 1.5
      },
      "& hr": {
        mx: 0.5
      }
    },
    className: _textDetailHeading_css__WEBPACK_IMPORTED_MODULE_3___default.a.button_group_menu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_Refresh__WEBPACK_IMPORTED_MODULE_13__["default"], {
    isSecondWindowOpen: props.isSecondWindowOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_Search__WEBPACK_IMPORTED_MODULE_9__["default"], {
    handleWindowSearch: handleWindowSearch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_Settings__WEBPACK_IMPORTED_MODULE_8__["default"], {
    textFontSize: props.textFontSize,
    onChangedFontSize: props.onChangedFontSize,
    onExport: props.onExport,
    isPanelLinked: props.isPanelLinked
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_TableOfContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
    changeShowTableContent: props.changeShowTableContent,
    showTableContent: props.showTableContent
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["Collapse"], {
    "in": showFind,
    mountOnEnter: true,
    unmountOnExit: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    onSubmit: handleSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["Stack"], {
    direction: "row",
    spacing: 2,
    position: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
    hiddenLabel: true,
    id: "filled-hidden-label-small",
    inputProps: {
      style: {
        height: 25,
        padding: "0 14px"
      }
    },
    style: {
      height: 25,
      flex: 1
    },
    fullWidth: true,
    inputRef: inputRef,
    value: findvalue,
    onChange: function onChange(e) {
      return setfindvalue(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    variant: "outlined",
    size: "small",
    onClick: handleSearch,
    style: {
      height: 25
    }
  }, "Search"), props.searchResults && visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["Box"], {
    sx: _defineProperty({
      position: "absolute",
      top: 35,
      right: 0,
      zIndex: 1,
      bgcolor: "heading.main",
      width: 350,
      height: 350,
      boxShadow: 3,
      overflowX: "hidden"
    }, "boxShadow", 3)
  }, results.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "no such word present"), condition && results.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_SearchList__WEBPACK_IMPORTED_MODULE_14__["default"], {
    handleListItemClick: handleListItemClick,
    searchValue: props.searchValue,
    results: results,
    selectedText: props.selectedText
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["IconButton"], {
    "aria-label": "closeButton",
    onClick: closeSearchItemBox,
    size: "small",
    sx: {
      right: 15,
      top: 0,
      position: "absolute"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11___default.a, {
    fontSize: "inherit"
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (TextDetailHeading);

/***/ }),

/***/ "./app/components/TextDetail2/TextList.css":
/*!*************************************************!*\
  !*** ./app/components/TextDetail2/TextList.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"textlist":"TextList---textlist","open":"TextList---open"};

/***/ }),

/***/ "./app/components/TextDetail2/TextList.js":
/*!************************************************!*\
  !*** ./app/components/TextDetail2/TextList.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextList.css */ "./app/components/TextDetail2/TextList.css");
/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TextList_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/addTibetanShay */ "./app/lib/addTibetanShay.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function TextList(props) {
  var temptext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(props.texts);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(temptext.current),
      _useState2 = _slicedToArray(_useState, 2),
      textslist = _useState2[0],
      setTextList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      filterValue = _useState4[0],
      setFilterValue = _useState4[1];

  var onSelectedText = props.onSelectedText;
  var selectedText = props.selectedText;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isOpen = _useState6[0],
      setIsOpen = _useState6[1];

  var selected = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return selectedText ? selectedText.name : textslist[0].name;
  }, [selectedText, textslist]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var temp = [];

    if (filterValue === "") {
      setTextList(_toConsumableArray(temptext.current));
    }

    if (filterValue !== null && filterValue !== "") {
      temp = temptext.current.filter(function (val) {
        return val.name.includes(filterValue);
      });
      setTextList(_toConsumableArray(temp));
    }
  }, [filterValue]);
  var cache = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new react_virtualized__WEBPACK_IMPORTED_MODULE_1__["CellMeasurerCache"]({
    fixedHeight: true,
    defaultHeight: 40
  }));
  var classes = [_TextList_css__WEBPACK_IMPORTED_MODULE_3___default.a.textlist];

  var handleClick = function handleClick() {
    setIsOpen(function (prev) {
      return !prev;
    });
    if (isOpen === false) classes.push(_TextList_css__WEBPACK_IMPORTED_MODULE_3___default.a.open);
  };

  var handleChange = function handleChange(e) {
    var value = e.target.value;
    setFilterValue(value);
  };

  var rowRenderer = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function (_ref) {
    var key = _ref.key,
        index = _ref.index,
        style = _ref.style,
        parent = _ref.parent;
    var data = textslist[index];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["CellMeasurer"], {
      key: "optionvalues-".concat(key),
      cache: cache.current,
      parent: parent,
      columnIndex: 0,
      rowIndex: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: style,
      onClick: function onClick() {
        setIsOpen(false);
        onSelectedText(data);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      sx: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: "13rem",
        paddingLeft: 2,
        fontSize: {
          lg: 12,
          md: 11,
          sm: 10,
          xs: 10
        },
        color: "text.primary"
      },
      component: "div"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
      noWrap: true
    }, Object(lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_4__["default"])(data.name)))));
  }, [textslist]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["ClickAwayListener"], {
    onClickAway: function onClickAway() {
      return setIsOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "relative",
      marginLeft: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: handleClick,
    component: "div",
    variant: "outlined",
    sx: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: "10rem",
      height: "100%",
      color: "text.primary"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    noWrap: true
  }, selected)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Grow"], {
    "in": isOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes),
    sx: {
      position: "absolute",
      bgcolor: "heading.main",
      zIndex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
    onChange: handleChange,
    id: "standard-basic",
    label: "filter",
    variant: "standard",
    style: {
      width: "100%"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["AutoSizer"], null, function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["List"], {
      width: width,
      height: height,
      rowHeight: 40,
      deferredMeasurementCache: cache.current,
      rowCount: textslist.length,
      rowRenderer: rowRenderer
    });
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(TextList));

/***/ }),

/***/ "./app/components/TextDetail2/TextListContainer.js":
/*!*********************************************************!*\
  !*** ./app/components/TextDetail2/TextListContainer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TextList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextList */ "./app/components/TextDetail2/TextList.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! api */ "./app/api/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-batched-actions */ "./node_modules/redux-batched-actions/lib/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_batched_actions__WEBPACK_IMPORTED_MODULE_6__);









var mapStateToProps = function mapStateToProps(state) {
  var searchValue = reducers__WEBPACK_IMPORTED_MODULE_4__["getSearchValue"](state);
  var searchResults = reducers__WEBPACK_IMPORTED_MODULE_4__["getSearchResults"](state, searchValue);
  var selectedSearchResult = reducers__WEBPACK_IMPORTED_MODULE_4__["getSelectedSearchResult"](state); // TODO: display search results or spinner depending on when anything
  // returned

  var searching = false;
  var texts = state.data.texts;

  if (searchValue.length > 0) {
    if (searchResults === null) {
      searching = true;
      texts = [];
    } else {
      texts = texts.filter(function (text) {
        return searchResults.hasOwnProperty(text.id);
      });
    }
  }

  return {
    texts: texts,
    selectedText: Object(reducers__WEBPACK_IMPORTED_MODULE_4__["getSelectedText2"])(state),
    searchTerm: searchValue,
    searchResults: searchResults,
    selectedSearchResult: selectedSearchResult,
    searching: searching
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSelectedText: function onSelectedText(text) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["selectedText2"](text));
    }
  };
};

var TextListContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_TextList__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (TextListContainer);

/***/ }),

/***/ "./app/components/TextDetail2/textDetailHeading.css":
/*!**********************************************************!*\
  !*** ./app/components/TextDetail2/textDetailHeading.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"button_group_menu":"textDetailHeading---button_group_menu"};

/***/ }),

/***/ "./app/images/options.svg":
/*!********************************!*\
  !*** ./app/images/options.svg ***!
  \********************************/
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
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  fill: "#010002"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 26.465,
  cy: 25.59,
  r: 4.462
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M52.791 32.256c-.187-1.034-1.345-2.119-2.327-2.492l-2.645-1.004c-.982-.373-1.699-1.237-1.651-1.935.029-.417.046-.838.046-1.263 0-.284-.008-.566-.021-.846-.023-.467.719-1.193 1.677-1.624l2.39-1.074c.958-.432 2.121-1.565 2.194-2.613.064-.929-.047-2.196-.648-3.765a8.336 8.336 0 00-2.779-3.718c-.839-.633-2.423-.595-3.381-.163l-2.08.936c-.958.431-2.274.119-3.025-.616a17.282 17.282 0 00-.54-.509c-.778-.705-1.17-2-.796-2.983l.819-2.162c.373-.982.368-2.594-.322-3.385-.635-.728-1.643-1.579-3.215-2.281-1.764-.788-3.346-.811-4.483-.639-1.039.158-2.121 1.331-2.494 2.312l-.946 2.491c-.373.982-.798 1.775-.949 1.771a6.289 6.289 0 00-.274-.005c-.622 0-1.238.03-1.846.09-1.016.1-2.176-.507-2.607-1.465l-1.124-2.5c-.431-.959-1.538-2.21-2.589-2.227-.916-.016-2.207.209-3.936 1.028-1.874.889-2.971 1.742-3.611 2.437-.712.771-.554 2.416-.122 3.374l1.481 3.296c.431.958.256 2.266-.324 2.979-.579.714-1.786 1.033-2.768.661l-3.598-1.365c-.982-.373-2.65-.476-3.406.256-.658.637-1.412 1.709-2.056 3.51-.696 1.954-.867 3.332-.83 4.276.042 1.05 1.317 2.101 2.3 2.474l4.392 1.667c.982.373 1.782 1.244 1.839 1.941.055.699-.635 1.61-1.593 2.042l-4.382 1.97c-.958.431-2.211 1.539-2.227 2.589-.015.916.21 2.208 1.028 3.935.89 1.874 1.742 2.971 2.437 3.611.773.713 2.417.554 3.375.123l4.698-2.112c.958-.432 2.076-.412 2.525.013s.535 1.541.162 2.524L12.743 46.6c-.373.982-.476 2.65.256 3.404.638.659 1.709 1.414 3.51 2.057 1.954.697 3.333.868 4.277.831 1.05-.042 2.1-1.318 2.473-2.3l1.693-4.46c.373-.982 1.058-1.742 1.531-1.719a17.414 17.414 0 001.255.016c.219-.007.747.762 1.178 1.721l1.963 4.364c.431.958 1.605 1.986 2.653 2.038 1.121.056 2.669-.062 4.43-.734 1.685-.645 2.659-1.604 3.219-2.442.584-.873.388-2.517-.044-3.475l-1.606-3.573c-.431-.958-.169-2.191.527-2.824.693-.633 2-.9 2.981-.526l3.432 1.303c.982.373 2.64.489 3.478-.145.738-.56 1.591-1.49 2.281-3.034.827-1.854.785-3.605.561-4.846zM26.465 39.79c-7.844 0-14.201-6.357-14.201-14.2s6.357-14.2 14.201-14.2c7.842 0 14.2 6.357 14.2 14.2.001 7.843-6.358 14.2-14.2 14.2z"
}));

var SvgOptions = function SvgOptions(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 52.93 52.93"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgOptions);

/***/ })

}]);
//# sourceMappingURL=24.parkhang-dev.js.map