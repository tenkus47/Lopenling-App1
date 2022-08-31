(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[26],{

/***/ "./app/components/TextDetail/HeaderMenu/HighlightedString.js":
/*!*******************************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/HighlightedString.js ***!
  \*******************************************************************/
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

/***/ "./app/components/TextDetail/HeaderMenu/Search.js":
/*!********************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/Search.js ***!
  \********************************************************/
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

/***/ "./app/components/TextDetail/HeaderMenu/SearchList.js":
/*!************************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/SearchList.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var _HighlightedString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HighlightedString */ "./app/components/TextDetail/HeaderMenu/HighlightedString.js");
/* harmony import */ var _SearchStyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchStyle.css */ "./app/components/TextDetail/HeaderMenu/SearchStyle.css");
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

/***/ "./app/components/TextDetail/HeaderMenu/SearchStyle.css":
/*!**************************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/SearchStyle.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"highlight":"SearchStyle---highlight","searchListItem":"SearchStyle---searchListItem"};

/***/ }),

/***/ "./app/components/TextDetail/HeaderMenu/Settings.js":
/*!**********************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/Settings.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var images_wrench_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! images/wrench.svg */ "./app/images/wrench.svg");
/* harmony import */ var _UI_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/Slider */ "./app/components/UI/Slider.js");
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Check */ "./node_modules/@mui/icons-material/Check.js");
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/utility/useLocalStorage */ "./app/components/utility/useLocalStorage.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app_constants */ "./app/app_constants/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function Settings(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showOption = _useState2[0],
      setShowOption = _useState2[1];

  var _useLocalStorage = Object(components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__["default"])("WindowOneFont", "Tibetan"),
      _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
      fontSelect = _useLocalStorage2[0],
      setFontSelect = _useLocalStorage2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.body.style.setProperty("--tibetan-fonts", fontSelect);
  }, []);

  var handleClick = function handleClick() {
    setShowOption(function (prev) {
      return !prev;
    });
  };

  var handlefont = function handlefont(value) {
    setFontSelect(value);
    document.body.style.setProperty("--tibetan-fonts", "".concat(value));
    var update = document.getElementById("updateList");
    setTimeout(function () {
      update.click();
    }, 800);
    setShowOption(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["ClickAwayListener"], {
    onClickAway: function onClickAway() {
      return setShowOption(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    position: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    onClick: handleClick,
    size: "small",
    variant: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_wrench_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    height: 20,
    width: 20,
    fill: "currentColor"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Grow"], {
    "in": showOption
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["MenuList"], {
    dense: true,
    sx: {
      position: "absolute",
      right: 0,
      zIndex: 2,
      top: 40,
      bgcolor: "heading.main"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    max: 20,
    min: 7,
    initialvalue: props.textFontSize,
    changeSize: props.onChangedFontSize
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FontSelection, {
    selectFont: handlefont,
    selectedfont: fontSelect
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
    onClick: function onClick() {
      return props.onExport();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "subtitle2"
  }, "Export Document"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Settings);

var FontSelection = function FontSelection(_ref) {
  var selectFont = _ref.selectFont,
      selectedfont = _ref.selectedfont;
  var fontAvailable = app_constants__WEBPACK_IMPORTED_MODULE_6__["FONT_LIST"] || [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    textAlign: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Font:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    onChange: function onChange(e) {
      return selectFont(e.target.value);
    },
    value: selectedfont
  }, fontAvailable.map(function (font, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: index + "-fontselect",
      value: font
    }, font);
  })));
};

/***/ }),

/***/ "./app/components/TextDetail/HeaderMenu/TableOfContent.js":
/*!****************************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/TableOfContent.js ***!
  \****************************************************************/
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





function TableOfContent(_ref) {
  var changeShowTableContent = _ref.changeShowTableContent,
      showTableContent = _ref.showTableContent;

  function handleClick() {
    changeShowTableContent(!showTableContent);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: handleClick
  }, showTableContent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_3___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default.a, null)));
}

/* harmony default export */ __webpack_exports__["default"] = (TableOfContent);

/***/ }),

/***/ "./app/components/TextDetail/SelectVersion.css":
/*!*****************************************************!*\
  !*** ./app/components/TextDetail/SelectVersion.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","selectVersion":"SelectVersion---selectVersion","selectEmpty":"SelectVersion---selectEmpty","selectOptions":"SelectVersion---selectOptions","styled-select":"SelectVersion---styled-select"};

/***/ }),

/***/ "./app/components/TextDetail/SelectVersion.js":
/*!****************************************************!*\
  !*** ./app/components/TextDetail/SelectVersion.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _SelectVersion_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectVersion.css */ "./app/components/TextDetail/SelectVersion.css");
/* harmony import */ var _SelectVersion_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SelectVersion_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");








var SelectVersion = function SelectVersion(props) {
  var witnesses = [];
  var tabName = "";
  var r = "";
  var classes = [];

  if (props.witnesses && props.activeWitness) {
    r = props.witnesses.findIndex(function (l) {
      return l.id === props.activeWitness.id;
    });
    witnesses = props.witnesses.map(function (witness) {
      return witness;
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

  if (witnesses.length === 0) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["NativeSelect"], {
    onChange: handleChangeWitness,
    className: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_4___default.a.selectVersion,
    value: r,
    label: "Version",
    classes: {
      root: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_4___default.a.selectEmpty,
      select: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_4___default.a.selectOptions
    }
  }, witnesses.map(function (witness, key) {
    if (witness.id === props.activeWitness.id) classes.push(_SelectVersion_css__WEBPACK_IMPORTED_MODULE_4___default.a.selected);
    tabName = witness.source.name;

    if (witness.isWorking) {
      var _props$user;

      tabName = props.intl.locale === "en" ? ((_props$user = props.user) === null || _props$user === void 0 ? void 0 : _props$user.name) === "User" ? "Working" : "My Edition" : "མཉམ་འབྲེལ་པར་མ།";
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      key: "versionSelect-".concat(key),
      value: key,
      className: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_4___default.a.selectOptions
    }, tabName);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(SelectVersion)));

/***/ }),

/***/ "./app/components/TextDetail/TextDetailHeading.js":
/*!********************************************************!*\
  !*** ./app/components/TextDetail/TextDetailHeading.js ***!
  \********************************************************/
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
/* harmony import */ var _textDetailHeading_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textDetailHeading.css */ "./app/components/TextDetail/textDetailHeading.css");
/* harmony import */ var _textDetailHeading_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_textDetailHeading_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SelectVersion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectVersion */ "./app/components/TextDetail/SelectVersion.js");
/* harmony import */ var _TextListContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextListContainer */ "./app/components/TextDetail/TextListContainer.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _HeaderMenu_Refresh__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HeaderMenu/Refresh */ "./app/components/TextDetail/HeaderMenu/Refresh.js");
/* harmony import */ var _HeaderMenu_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HeaderMenu/Search */ "./app/components/TextDetail/HeaderMenu/Search.js");
/* harmony import */ var _HeaderMenu_Settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HeaderMenu/Settings */ "./app/components/TextDetail/HeaderMenu/Settings.js");
/* harmony import */ var _HeaderMenu_TableOfContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HeaderMenu/TableOfContent */ "./app/components/TextDetail/HeaderMenu/TableOfContent.js");
/* harmony import */ var _HeaderMenu_SearchList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HeaderMenu/SearchList */ "./app/components/TextDetail/HeaderMenu/SearchList.js");



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

  var headingRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

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
    if (showFind === false) debouncedSearch(null);
    setShowFind(!showFind);
  }, [showFind]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (showFind === true) {
      inputRef.current.focus();
    }

    if (showFind === false) debouncedSearch(null);
  }, [showFind]);
  var closeSearchItemBox = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setVisible(false);
    debouncedSearch(null);
    setfindvalue("");
  }, []);
  var condition = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(props.searchResults) && props.searchResults.hasOwnProperty(props.selectedText.id);
  }, [props.searchResults, props.selectedText]);
  var results = condition ? props.searchResults[props.selectedText.id].results : [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
    ref: headingRef,
    direction: "column",
    spacing: 1,
    sx: {
      paddingInline: {
        md: 1,
        xs: 0
      },
      paddingBlock: {
        md: 1,
        xs: 0
      },
      bgcolor: "heading.main",
      color: "text.primary"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
    direction: "row",
    spacing: 1,
    justifyContent: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["Box"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TextListContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SelectVersion__WEBPACK_IMPORTED_MODULE_4__["default"], {
    witnesses: props.witnesses,
    activeWitness: props.selectedWitness,
    onSelectedWitness: props.onSelectedWitness,
    user: props.user
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], {
    size: "small",
    sx: {
      position: "relative",
      display: "flex",
      height: "fit-content",
      alignItems: "center",
      justifyContent: "center",
      width: "fit-content",
      border: function border(theme) {
        return "1px solid ".concat(theme.palette.divider);
      },
      borderRadius: 1,
      bgcolor: "background.paper",
      color: "text.secondary",
      "& svg": {
        m: 1
      },
      "& hr": {
        mx: 0.5
      }
    },
    className: _textDetailHeading_css__WEBPACK_IMPORTED_MODULE_3___default.a.button_group_menu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_Refresh__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isSecondWindowOpen: props.isSecondWindowOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
    orientation: "vertical",
    variant: "middle",
    flexItem: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_Search__WEBPACK_IMPORTED_MODULE_9__["default"], {
    handleWindowSearch: handleWindowSearch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_Settings__WEBPACK_IMPORTED_MODULE_10__["default"], {
    textFontSize: props.textFontSize,
    onChangedFontSize: props.onChangedFontSize,
    onExport: props.onExport,
    isPanelLinked: props.isPanelLinked
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_TableOfContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    changeShowTableContent: props.changeShowTableContent,
    showTableContent: props.showTableContent
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
    "in": showFind
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    onSubmit: handleSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
    direction: "row",
    spacing: 2,
    position: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    variant: "outlined",
    size: "small",
    onClick: handleSearch,
    style: {
      height: 25
    }
  }, "Search"), props.searchResults && visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    sx: _defineProperty({
      position: "absolute",
      top: 35,
      right: 0,
      zIndex: 1,
      bgcolor: "heading.main",
      height: 350,
      width: 350,
      boxShadow: 3,
      overflowX: "hidden"
    }, "boxShadow", 3)
  }, results.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "no such word present"), condition && results.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_SearchList__WEBPACK_IMPORTED_MODULE_12__["default"], {
    handleListItemClick: handleListItemClick,
    searchValue: props.searchValue,
    results: results,
    selectedText: props.selectedText
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    "aria-label": "closeButton",
    onClick: closeSearchItemBox,
    size: "small",
    sx: {
      right: 15,
      top: 0,
      position: "absolute"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "inherit"
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(TextDetailHeading));

/***/ }),

/***/ "./app/components/TextDetail/TextList.css":
/*!************************************************!*\
  !*** ./app/components/TextDetail/TextList.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"textlist":"TextList---textlist","open":"TextList---open"};

/***/ }),

/***/ "./app/components/TextDetail/TextList.js":
/*!***********************************************!*\
  !*** ./app/components/TextDetail/TextList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextList.css */ "./app/components/TextDetail/TextList.css");
/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TextList_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/addTibetanShay */ "./app/lib/addTibetanShay.js");
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

  var selected = selectedText === null || selectedText === void 0 ? void 0 : selectedText.name;
  var cache = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new react_virtualized__WEBPACK_IMPORTED_MODULE_1__["CellMeasurerCache"]({
    fixedHeight: true,
    defaultHeight: 40
  }));
  var classes = [_TextList_css__WEBPACK_IMPORTED_MODULE_3___default.a.textlist];
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Box"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      noWrap: true
    }, Object(lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_5__["default"])(data.name)))));
  }, [textslist]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["ClickAwayListener"], {
    onClickAway: function onClickAway() {
      return setIsOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "relative",
      marginLeft: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Button"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    noWrap: true
  }, selected)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Grow"], {
    "in": isOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes),
    sx: {
      position: "absolute",
      bgcolor: "heading.main",
      zIndex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
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

/***/ "./app/components/TextDetail/TextListContainer.js":
/*!********************************************************!*\
  !*** ./app/components/TextDetail/TextListContainer.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TextList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextList */ "./app/components/TextDetail/TextList.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! api */ "./app/api/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-batched-actions */ "./node_modules/redux-batched-actions/lib/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_batched_actions__WEBPACK_IMPORTED_MODULE_6__);









var mapStateToProps = function mapStateToProps(state) {
  // TODO: display search results or spinner depending on when anything
  // returned
  var texts = reducers__WEBPACK_IMPORTED_MODULE_4__["getTexts"](state);
  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_4__["getSelectedText"](state);
  return {
    texts: texts,
    selectedText: selectedText
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSelectedText: function onSelectedText(text) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["selectedText"](text));
    }
  };
};

var TextListContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_TextList__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(TextListContainer));

/***/ }),

/***/ "./app/components/TextDetail/textDetailHeading.css":
/*!*********************************************************!*\
  !*** ./app/components/TextDetail/textDetailHeading.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","button_group_menu":"textDetailHeading---button_group_menu"};

/***/ }),

/***/ "./app/components/UI/Slider.css":
/*!**************************************!*\
  !*** ./app/components/UI/Slider.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"inputRanges":"Slider---inputRanges","inputRange":"Slider---inputRange"};

/***/ }),

/***/ "./app/components/UI/Slider.js":
/*!*************************************!*\
  !*** ./app/components/UI/Slider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Slider_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider.css */ "./app/components/UI/Slider.css");
/* harmony import */ var _Slider_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Slider_css__WEBPACK_IMPORTED_MODULE_2__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Slider(_ref) {
  var max = _ref.max,
      min = _ref.min,
      initialvalue = _ref.initialvalue,
      _ref$changeSize = _ref.changeSize,
      changeSize = _ref$changeSize === void 0 ? function (r) {
    return console.log(r);
  } : _ref$changeSize;
  var initialPercent = initialvalue / max * 100;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialPercent),
      _useState2 = _slicedToArray(_useState, 2),
      tempValue = _useState2[0],
      setTempValue = _useState2[1];

  var submitValue = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (e) {
    var currentPercent = tempValue / 100 * max;
    changeSize(Math.floor(parseInt(currentPercent)));
  }, 500);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _Slider_css__WEBPACK_IMPORTED_MODULE_2___default.a.inputRanges
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      fontSize: 13,
      top: "-5px"
    },
    onClick: function onClick() {
      return changeSize(initialvalue - 2);
    }
  }, "\u0F40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "range",
    style: {
      width: "70%"
    },
    className: _Slider_css__WEBPACK_IMPORTED_MODULE_2___default.a.inputRange,
    min: 40,
    max: 100,
    smooth: "yes",
    step: 1,
    value: tempValue,
    onChange: function onChange(e) {
      return setTempValue(e.target.value);
    },
    onMouseUp: submitValue,
    onTouchEnd: submitValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      fontSize: 18,
      top: "-10px"
    },
    onClick: function onClick() {
      return changeSize(initialvalue + 2);
    }
  }, "\u0F40"));
}

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./app/images/wrench.svg":
/*!*******************************!*\
  !*** ./app/images/wrench.svg ***!
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
  d: "M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
});

var SvgWrench = function SvgWrench(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 512 512"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgWrench);

/***/ })

}]);
//# sourceMappingURL=26.parkhang-dev.js.map