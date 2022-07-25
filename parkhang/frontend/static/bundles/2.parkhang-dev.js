(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[2],{

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "small",
    variant: "text",
    onClick: handleWindowSearch,
    style: {
      padding: 0,
      color: "black"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1___default.a, null));
}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./app/components/TextDetail2/HeaderMenu/Settings.js":
/*!***********************************************************!*\
  !*** ./app/components/TextDetail2/HeaderMenu/Settings.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/Settings */ "./node_modules/@mui/icons-material/Settings.js");
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/Slider */ "./app/components/UI/Slider.js");
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Check */ "./node_modules/@mui/icons-material/Check.js");
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
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

  var handleClick = function handleClick() {
    setShowOption(function (prev) {
      return !prev;
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["ClickAwayListener"], {
    onClickAway: function onClickAway() {
      return setShowOption(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: handleClick,
    size: "small",
    variant: "text",
    style: {
      padding: 0,
      color: "black"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_1___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Grow"], {
    "in": showOption
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["MenuList"], {
    dense: true,
    style: {
      position: "absolute",
      right: 0,
      zIndex: 2,
      top: 30,
      backgroundColor: "#eee"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    max: 20,
    min: 14,
    initialvalue: props.textFontSize,
    changeSize: props.onChangedFontSize
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
    onClick: function onClick() {
      return props.onExport();
    }
  }, "Export Document", props.exportingWitness && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
    onClick: function onClick() {
      return props.onChangePanelLink(!props.isPanelLinked);
    }
  }, props.isPanelLinked && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3___default.a, null), "link panels")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Settings);

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




function TableOfContent(props) {
  var handleClick = function handleClick() {
    props.changeShowTableContent(!props.showTableContent);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default.a, null)));
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
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","selectVersion":"SelectVersion---selectVersion","selected":"SelectVersion---selected","styled-select":"SelectVersion---styled-select"};

/***/ }),

/***/ "./app/components/TextDetail2/SelectVersion.js":
/*!*****************************************************!*\
  !*** ./app/components/TextDetail2/SelectVersion.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _SelectVersion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectVersion.css */ "./app/components/TextDetail2/SelectVersion.css");
/* harmony import */ var _SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SelectVersion_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/utility/useLocalStorage */ "./app/components/utility/useLocalStorage.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var style = function style(theme) {
  return {
    root: {
      minWidth: 60,
      padding: 0,
      textAlign: "center",
      fontWeight: "bold"
    },
    selectEmpty: {
      paddingLeft: "6px",
      backgroundColor: "transparent"
    },
    select: {
      color: "black",
      "&:not([multiple]) option": {
        backgroundColor: "#eee"
      }
    }
  };
};

var SelectVersion = function SelectVersion(props) {
  var witnesses;
  var tabName = "";
  var classtype = props.classes;
  var r = props.witnesses.findIndex(function (l) {
    var _props$activeWitness;

    return l.id === ((_props$activeWitness = props.activeWitness) === null || _props$activeWitness === void 0 ? void 0 : _props$activeWitness.id);
  });

  var _useLocaleStorage = Object(components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__["default"])("selectedWitness2", 0),
      _useLocaleStorage2 = _slicedToArray(_useLocaleStorage, 2),
      temp = _useLocaleStorage2[0],
      setTemp = _useLocaleStorage2[1];

  var classes = [_SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectOptions];

  if (props.witnesses) {
    witnesses = props.witnesses.map(function (witness) {
      return witness;
    });
    classes = [_SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.tab];
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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (props.witnesses.length > 0) {
      props.onSelectedWitness(witnesses[temp]);
    }
  }, [temp]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["NativeSelect"], {
    onChange: function onChange(e) {
      return setTemp(e.target.value);
    },
    className: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectVersion,
    defaultValue: temp,
    label: "Version2",
    classes: {
      root: classtype.selectEmpty,
      select: classtype.select
    }
  }, witnesses.map(function (witness, key) {
    var _props$activeWitness2;

    if (witness.id === ((_props$activeWitness2 = props.activeWitness) === null || _props$activeWitness2 === void 0 ? void 0 : _props$activeWitness2.id)) classes.push(_SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.selected);
    tabName = witness.source.name;

    if (witness.isWorking) {
      tabName = props.intl.locale === "en" ? props.user.name === "User" ? "Working" : "My Edition" : "མཉམ་འབྲེལ་པར་མ།";
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: "versionSelect2-".concat(key),
      value: key,
      className: classes
    }, tabName);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(Object(_mui_styles__WEBPACK_IMPORTED_MODULE_7__["withStyles"])(style)(SelectVersion))));

/***/ }),

/***/ "./app/components/TextDetail2/SplitText.css":
/*!**************************************************!*\
  !*** ./app/components/TextDetail2/SplitText.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","inlineWidth":"280px","annotationControls":"SplitText---annotationControls","annotationContent":"SplitText---annotationContent","subTitle":"SplitText---subTitle","title":"SplitText---title","sectionHeading":"SplitText---sectionHeading","text":"SplitText---text","padding":"SplitText---padding","arrowTop":"SplitText---arrowTop","arrowLeft":"SplitText---arrowLeft","arrowRight":"SplitText---arrowRight","inline":"SplitText---inline","arrow":"SplitText---arrow","arrowDs":"SplitText---arrowDs","nothingSelected":"SplitText---nothingSelected","anonymousMessage":"SplitText---anonymousMessage","noNotes":"SplitText---noNotes","breakButtons":"SplitText---breakButtons","splitText2":"SplitText---splitText2","splitTextRowContent":"SplitText---splitTextRowContent","splitTextRow":"SplitText---splitTextRow","pechaImage":"SplitText---pechaImage","controlsPlaceholder":"SplitText---controlsPlaceholder","pageNumber":"SplitText---pageNumber","hightlighter":"SplitText---hightlighter","pulse":"SplitText---pulse"};

/***/ }),

/***/ "./app/components/TextDetail2/SplitText.js":
/*!*************************************************!*\
  !*** ./app/components/TextDetail2/SplitText.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SplitTextComponent; });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-virtualized/dist/es/AutoSizer */ "./node_modules/react-virtualized/dist/es/AutoSizer/index.js");
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-virtualized/dist/es/CellMeasurer */ "./node_modules/react-virtualized/dist/es/CellMeasurer/index.js");
/* harmony import */ var react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-virtualized/styles.css */ "./node_modules/react-virtualized/styles.css");
/* harmony import */ var react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Text2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Text2 */ "./app/components/TextDetail2/Text2.js");
/* harmony import */ var lib_SplitText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/SplitText */ "./app/lib/SplitText.js");
/* harmony import */ var _SplitText_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SplitText.css */ "./app/components/TextDetail2/SplitText.css");
/* harmony import */ var _SplitText_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_SplitText_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lib_TextSegment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lib/TextSegment */ "./app/lib/TextSegment.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! grapheme-splitter */ "./node_modules/grapheme-splitter/index.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(grapheme_splitter__WEBPACK_IMPORTED_MODULE_13__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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













var _searchResultsCache = {};

var SplitTextComponent = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(SplitTextComponent, _React$PureComponent);

  var _super = _createSuper(SplitTextComponent);

  // Whether the mouse button is down
  function SplitTextComponent(props) {
    var _this;

    _classCallCheck(this, SplitTextComponent);

    _this = _super.call(this, props);
    _this.textAlignmentById = [];
    _this.changeScrollToId2 = props.changeScrollToId2;
    _this.list = null;
    _this.splitText = null;
    _this.cache = new react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_6__["CellMeasurerCache"]({
      fixedWidth: true,
      defaultHeight: 300
    });
    _this.rowRenderer = _this.rowRenderer.bind(_assertThisInitialized(_this));
    _this.isPanelLinked = _this.props.isPanelLinked;
    _this.activeSelection = null;
    _this.selectedNodes = null;
    _this._mouseDown = false;
    _this._activeWitness = null;
    _this._didSetInitialScrollPosition = false;
    _this._modifyingSelection = false;
    _this.imageHeight = null;
    _this.imageWidth = null;
    _this.calculatedImageHeight = null;
    _this.selectedWindow = _this.props.selectedWindow;
    _this.scrollEvent = _this.scrollEvent.bind(_assertThisInitialized(_this)); // this.processProps(props);

    _this.scrollTop = 0;
    return _this;
  }

  _createClass(SplitTextComponent, [{
    key: "scrollEvent",
    value: function scrollEvent(e) {
      if (this.selectedWindow === 1) return null;

      if (this.selectedWindow === 2 && this.isPanelLinked) {
        var list = [];
        this.textAlignmentById.map(function (l) {
          var number = document.getElementById("s2_" + l.start);

          if (number) {
            var _position = number.getBoundingClientRect();

            if (_position.top > 102) {
              list.push({
                id: l.id,
                start: l.start,
                target: l.TStart
              });
            }
          }
        });

        if (list.length > 0) {
          this.changeScrollToId2(list[0].target);
        }
      }
    }
  }, {
    key: "selectedListRow",
    value: function selectedListRow(props) {
      var row = null;

      if (props.activeAnnotation) {
        row = props.splitText.getTextIndexOfPosition(props.activeAnnotation.start);
      }

      return row;
    }
  }, {
    key: "handleSelection",
    value: function handleSelection(e) {
      if (!this._modifyingSelection) {
        var _this$activeSelection, _this$activeSelection2, _this$activeSelection3;

        this.activeSelection = document.getSelection();
        var selectedId = (_this$activeSelection = this.activeSelection) === null || _this$activeSelection === void 0 ? void 0 : (_this$activeSelection2 = _this$activeSelection.anchorNode) === null || _this$activeSelection2 === void 0 ? void 0 : (_this$activeSelection3 = _this$activeSelection2.parentElement) === null || _this$activeSelection3 === void 0 ? void 0 : _this$activeSelection3.id;
        this.updateId(selectedId);

        if (!this._mouseDown) {
          // sometimes, this gets called after the mouseDown event handler
          this.mouseUp();
        }
      } else {
        e.stopPropagation(); // Need to set this here. If set at callsite, the event will not
        // have time to propagate.

        this._modifyingSelection = false;
      }
    }
  }, {
    key: "mouseDown",
    value: function mouseDown() {
      this._mouseDown = true;
    }
  }, {
    key: "mouseUp",
    value: function mouseUp() {
      this._mouseDown = false;

      if (this.activeSelection) {
        // let segmentIds = this.processSelection(this.activeSelection);
        // if (!segmentIds) {
        //     segmentIds = [];
        // }
        // this.props.didSelectSegmentIds(segmentIds);
        this.activeSelection = null;
      }
    } // processSelection(selection: Selection): string[] | null {
    //     if (
    //         selection.rangeCount === 0 ||
    //         selection.isCollapsed ||
    //         selection.type === "Caret"
    //     ) {
    //         this.selectedNodes = null;
    //         return null;
    //     }
    //     const range = selection.getRangeAt(0);
    //     const start = range.startContainer;
    //     const startSpan = this.getNodeSegmentSpan(start);
    //     if (!(startSpan && startSpan.parentNode)) {
    //         If the selection is not a text segment, ignore.
    //         Assuming if the first node is a non-segment, they
    //         all are.
    //         return null;
    //     }
    //     let nodes = this.getRangeNodes(range, startSpan.parentNode);
    //     Check if the selection starts after the end of a node, and
    //     if so remove that node.
    //     if (nodes.length > 0) {
    //         let firstNode = nodes[0];
    //         if (range.startOffset === firstNode.textContent.length) {
    //             nodes.shift();
    //         }
    //     }
    //     const end = range.endContainer;
    //     const endSpan = this.getNodeSegmentSpan(end);
    //     if (!(endSpan && endSpan.parentNode)) {
    //         return null;
    //     }
    //     if (endSpan && startSpan.parentNode !== endSpan.parentNode) {
    //         Selection is spanning Texts.
    //         We assume a selection can only run across a maximum
    //         of two Texts.
    //         nodes = nodes.concat(this.getRangeNodes(range, endSpan.parentNode));
    //     } else {
    //         Check if the selection ends before the start of a node, and
    //         if so remove that node.
    //         if (range.endOffset === 0) {
    //             nodes.pop();
    //         }
    //     }
    //     this.selectedNodes = nodes;
    //     let nodeIds = [];
    //     nodes.reduce((accumulator: string[], current: Node) => {
    //         if (current instanceof Element) {
    //             accumulator.push(current.id);
    //         }
    //         return accumulator;
    //     }, nodeIds);
    //     return nodeIds;
    // }
    // getRangeNodes(range: Range, parentNode: Node): Node[] {
    //     let rangeSpans = [];
    //     for (let i = 0, len = parentNode.childNodes.length; i < len; i++) {
    //         const node = parentNode.childNodes[i];
    //         // TODO: add polyfill for i.e.?
    //         // e.g. https://gist.github.com/jonathansampson/6d09bd6d2e8c22c53868aec42e66b0f9
    //         if (range.intersectsNode(node)) {
    //             rangeSpans.push(node);
    //         }
    //     }
    //     return rangeSpans;
    // }

  }, {
    key: "getNodeSegmentSpan",
    value: function getNodeSegmentSpan(node) {
      var currentNode = node;
      var span = null;
      var test = /^(i|s|ds)_/;

      while (!span && currentNode.parentNode) {
        if (currentNode instanceof Element && test.test(currentNode.id)) {
          span = currentNode;
        }

        currentNode = currentNode.parentNode;
      }

      return span;
    }
  }, {
    key: "updateId",
    value: function updateId(id) {// if (id && id.includes("s2")) {
      //     let newId = id.replace("s2", "s");
      //     document
      //         ?.getElementById(newId)
      //         ?.scrollIntoView({ block: "center" });
      //     let positionHighlight = document
      //         .getElementById(newId)
      //         .getBoundingClientRect();
      //     let hightlighter = document.createElement("div");
      //     hightlighter.classList.add(styles.hightlighter);
      //     hightlighter.style.border = "2px solid blue";
      //     document.getElementById(newId).append(hightlighter);
      //     document.getElementById(newId).style.color = "blue";
      //     setTimeout(() => {
      //         document.getElementById(newId).style.color = "black";
      //         hightlighter.remove();
      //     }, 500);
      // }
    }
  }, {
    key: "updateList",
    value: function updateList() {
      var resetCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var resetRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (this.props.showImages && !this.calculatedImageHeight && this.imageHeight && this.imageWidth) {
        this.calculatedImageHeight = this.calculateImageHeight();
      }

      if (this.list) {
        var list = this.list;

        if (resetCache) {
          if (resetRows !== null) {
            if (!Array.isArray(resetRows)) {
              this.cache.clear(resetRows);
            } else if (Array.isArray(resetRows)) {
              for (var i = 0; i < resetRows.length; i++) {
                var resetRow = resetRows[i];
                this.cache.clear(resetRow);
              }
            }
          } else {
            this.cache.clearAll();
            list.measureAllRows();
            list.recomputeRowHeights(0);
          }
        }

        list.forceUpdateGrid();
      }
    }
  }, {
    key: "processProps",
    value: function processProps(props) {
      var _this2 = this;

      var changedWitness = false;

      if (!this.props.selectedWitness || props.selectedWitness && props.selectedWitness.id !== this.props.selectedWitness.id) {
        changedWitness = true;
        this._didSetInitialScrollPosition = false;
      }

      if (props.selectedSearchResult && (!this.props.selectedSearchResult || props.selectedSearchResult.start !== this.props.selectedSearchResult.start || props.selectedSearchResult.textId !== this.props.selectedSearchResult.textId)) {
        console.log("resetting scroll position from search result");
        this._didSetInitialScrollPosition = false;
      } // TODO: check if new selectedSearchResult and if so
      // set this._didSetInitialScrollPosition = false
      // make sure there's no numbers in selectedAnnotatedSegments
      // as we want to pass it to Text which only expects TextSegments
      // this._filteredSelectedAnnotatedSegments = props.selectedAnnotatedSegments.reduce(
      //     (acc, current: TextSegment | number) => {
      //         if (current instanceof TextSegment) acc.push(current);
      //         return acc;
      //     },
      //     []
      // );


      var controlsMeasurements = this.getControlsMeasurements(props);

      if (controlsMeasurements) {
        this.selectedTextIndex = controlsMeasurements.selectedTextIndex;
        this.firstSelectedSegment = controlsMeasurements.firstSelectedSegment;
        this.splitTextRect = controlsMeasurements.splitTextRect;
        this.selectedElementId = controlsMeasurements.selectedElementId;
        this.selectedElementIds = controlsMeasurements.selectedElementIds;
      }

      if (props.textListVisible !== this.textListVisible || props.editMenuVisible !== this.editMenuVisible) {
        setTimeout(function () {
          _this2.textListVisible = props.textListVisible;
          _this2.editMenuVisible = props.editMenuVisible;

          _this2.updateList(true);
        }, 500);
      } else {
        if (changedWitness) {
          this.updateList(true);
        } else if (this.pageBreaksChanged(this.props, props)) {
          var selectedRows = null;
          var currentSelectedRow = this.selectedListRow(this.props);
          var newSelectedRow = this.selectedListRow(props);

          if (currentSelectedRow && newSelectedRow) {
            var firstChangedRow = currentSelectedRow > newSelectedRow ? newSelectedRow : currentSelectedRow;
            var splitRowTexts = this.props.splitText.texts;
            selectedRows = [];

            for (var i = firstChangedRow, len = splitRowTexts.length; i < len; i++) {
              selectedRows.push(i);
            }
          }

          this.updateList(true, selectedRows);
        } else if (this.lineBreaksChanges(this.props, props)) {
          var selectedRow = this.selectedListRow(props);
          if (!selectedRow) selectedRow = this.selectedListRow(this.props);
          var _splitRowTexts = this.props.splitText.texts;
          var _selectedRows = [];

          if (selectedRow !== null) {
            for (var _i = selectedRow, _len = _splitRowTexts.length; _i < _len; _i++) {
              _selectedRows.push(_i);
            }

            this.updateList(true, _selectedRows);
          }
        } else if (this.props.fontSize !== props.fontSize) {
          this.updateList(true);
        } else if (this.props.activeAnnotation && props.activeAnnotation && this.annotationsInSameLocation(this.props.activeAnnotation, props.activeAnnotation)) {
          this.updateList(true, this.selectedListRow(props));
        } else {
          this.updateList(this.shouldResetListCache(this.props, props));
        }
      }
    }
  }, {
    key: "pageBreaksChanged",
    value: function pageBreaksChanged(oldProps, newProps) {
      var oldTextBreaks = oldProps.splitText.getTextsFinalPositions();
      var newTextBreaks = newProps.splitText.getTextsFinalPositions();
      if (oldTextBreaks.length !== newTextBreaks.length) return true;
      return JSON.stringify(oldTextBreaks) !== JSON.stringify(newTextBreaks);
    }
  }, {
    key: "lineBreaksChanges",
    value: function lineBreaksChanges(oldProps, newProps) {
      var oldActiveAnnotation = oldProps.activeAnnotation;
      var newActiveAnnotation = newProps.activeAnnotation;
      var hasChanged = false;

      if (oldActiveAnnotation && oldActiveAnnotation.isType(ANNOTATION_TYPES.lineBreak) && newProps.activeAnnotations && !newProps.activeAnnotations.hasOwnProperty(oldActiveAnnotation.uniqueId)) {
        hasChanged = true;
      }

      if (newActiveAnnotation && newActiveAnnotation.isType(ANNOTATION_TYPES.lineBreak) && oldProps.activeAnnotations && !oldProps.activeAnnotations.hasOwnProperty(newActiveAnnotation.uniqueId)) {
        hasChanged = true;
      }

      return hasChanged;
    }
  }, {
    key: "shouldResetListCache",
    value: function shouldResetListCache(oldProps, newProps) {
      var shouldReset = false;

      if (oldProps.showImages !== newProps.showImages || this.pageBreaksChanged(oldProps, newProps)) {
        shouldReset = true;
      }

      return shouldReset;
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(props) {
      this.processProps(props);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.resizeHandler = lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(function () {
        _this3.calculatedImageHeight = null;

        _this3.updateList();
      }, 500).bind(this);
      window.addEventListener("resize", this.resizeHandler);
      this.selectionHandler = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (e) {
        _this3.handleSelection(e);
      }, 200).bind(this);
      document.addEventListener("selectionchange", this.selectionHandler);
      document.addEventListener("mousedown", this.mouseDown.bind(this), true);
      document.addEventListener("mouseup", this.mouseUp.bind(this), true);
      this.processProps(this.props);
      this.componentDidUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props, _this$props2;

      var sourceId = this.props.scrollToId;
      var targetId2 = this.props.syncIdOnClick;
      this.selectedWindow = this.props.selectedWindow;
      var SearchSyncId = this.props.syncIdOnSearch || null;
      var list = this.list;
      var result = this.props.searchResults;
      var Alignment = this.props.textAlignment;
      var condition = Alignment.target === this.props.selectedWitness.id;
      var con = (prevProps === null || prevProps === void 0 ? void 0 : prevProps.searchResults) !== ((_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.searchResults) || (prevProps === null || prevProps === void 0 ? void 0 : prevProps.syncIdOnSearch) !== ((_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.syncIdOnSearch);

      if (con && result) {
        if (SearchSyncId) {
          var selectedTextIndex = this.props.splitText.getTextIndexOfPosition(SearchSyncId);
          setTimeout(function () {
            list.scrollToRow(selectedTextIndex);
            setTimeout(function () {
              list.scrollToPosition(list.props.scrollTop - 300);
            }, 0);
          }, 100);
        }
      }

      if (this.selectedWindow === 1 && this.isPanelLinked && condition && sourceId !== null) {
        this.isPanelLinked = this.props.isPanelLinked;
        var _list = this.list;
        this.textAlignmentById = this.props.textAlignmentById || [];
        this.splitText.style.scrollBehavior = "smooth";

        if (Alignment && this.isPanelLinked) {
          var req = this.textAlignmentById.find(function (l) {
            return l.start === sourceId;
          });
          var TStart = req === null || req === void 0 ? void 0 : req.TStart;

          if (TStart !== null) {
            var _selectedTextIndex = this.props.splitText.getTextIndexOfPosition(TStart);

            setTimeout(function () {
              _list.scrollToRow(_selectedTextIndex);

              setTimeout(function () {
                _list.scrollToPosition(_list.props.scrollTop - 300);
              }, 0);
            }, 100);
          }
        }
      }

      if (targetId2 && sourceId === null) {
        var _clickIdObj$target_se;

        var clickIdObj = Alignment.alignment.find(function (l) {
          return targetId2 >= l.source_segment.start && targetId2 < l.source_segment.end;
        });
        var syncClickTargetId = clickIdObj === null || clickIdObj === void 0 ? void 0 : (_clickIdObj$target_se = clickIdObj.target_segment) === null || _clickIdObj$target_se === void 0 ? void 0 : _clickIdObj$target_se.start;

        var _selectedTextIndex2 = this.props.splitText.getTextIndexOfPosition(syncClickTargetId);

        setTimeout(function () {
          list.scrollToRow(_selectedTextIndex2);
          setTimeout(function () {
            list.scrollToPosition(list.props.scrollTop - 300);
          }, 0);
        }, 100);
      } // if (this.selectedNodes && this.selectedNodes.length > 0) {
      //     const selectedNodes = this.selectedNodes;
      //     const selectedSegments = this.props.selectedAnnotatedSegments;
      //     setTimeout(() => {
      //         let selRange = document.createRange();
      //         let startNode = selectedNodes[0];
      //         let endNode = selectedNodes[selectedNodes.length - 1];
      //         // let lastSegment = selectedSegments[selectedSegments.length - 1];
      //         if (lastSegment instanceof TextSegment) {
      //             let lastElement = document.getElementById(
      //                 idForSegment(lastSegment)
      //             );
      //             if (lastElement) endNode = lastElement;
      //         }
      //         if (
      //             startNode instanceof Element &&
      //             endNode instanceof Element
      //         ) {
      //             startNode = document.getElementById(startNode.id);
      //             endNode = document.getElementById(endNode.id);
      //             if (startNode && endNode) {
      //                 selRange.setStart(startNode, 0);
      //                 selRange.setEnd(endNode, endNode.childNodes.length);
      //                 let sel = document.getSelection();
      //                 if (sel) {
      //                     this._modifyingSelection = true;
      //                     sel.removeAllRanges();
      //                     sel.addRange(selRange);
      //                     this.selectedNodes = null;
      //                 }
      //             }
      //         }
      //     }, 0);
      // }

    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("mousedown", this);
      document.removeEventListener("mouseup", this);
      window.removeEventListener("resize", this.resizeHandler);
      document.removeEventListener("selectionchange", this.selectionHandler);
    }
  }, {
    key: "getSelectedTextIndex",
    value: function getSelectedTextIndex() {
      var selectedTextIndex = 0;
      var startPos = null;

      if (this.props.activeAnnotation) {
        var _this$props$splitText = this.props.splitText.annotatedText.getPositionOfAnnotation(this.props.activeAnnotation);

        var _this$props$splitText2 = _slicedToArray(_this$props$splitText, 1);

        startPos = _this$props$splitText2[0];
      } else if (this.props.selectedSearchResult) {
        var _segment = this.props.splitText.annotatedText.segmentAtOriginalPosition(this.props.selectedSearchResult.start);

        if (_segment instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_11__["default"]) {
          startPos = _segment.start;
        } else if (typeof _segment === "number") {
          startPos = _segment;
        }
      }

      if (startPos) {
        selectedTextIndex = this.props.splitText.getTextIndexOfPosition(startPos);
      }

      return selectedTextIndex;
    }
  }, {
    key: "getControlsMeasurements",
    value: function getControlsMeasurements(props) {
      if (!this.splitText) {
        return null;
      }

      var splitTextComponent = this.splitText;
      var selectedTextIndex = null;
      var firstSelectedSegment = null;
      var selectedElementId = null;
      var splitTextRect = null;
      var segmentIdFunction = null;
      var selectedElementIds = [];
      var startPos = 0;

      if (props.activeAnnotation) {
        var activeAnnotation = props.activeAnnotation;

        var _props$splitText$anno = props.splitText.annotatedText.getPositionOfAnnotation(activeAnnotation);

        var _props$splitText$anno2 = _slicedToArray(_props$splitText$anno, 1);

        startPos = _props$splitText$anno2[0];

        if (startPos === null) {
          console.warn("No startPos in getControlsMeasurements");
          return null;
        }

        if (activeAnnotation.type === ANNOTATION_TYPES.pageBreak) {
          startPos -= 1;
        }

        if (activeAnnotation.type === ANNOTATION_TYPES.lineBreak) {
          startPos -= 1;
        } // Index of text containing end of annotation


        var positionEnd = startPos + activeAnnotation.length;
        if (activeAnnotation.length > 0) positionEnd -= 1;
        selectedTextIndex = props.splitText.getTextIndexOfPosition(positionEnd);
        splitTextRect = splitTextComponent.getBoundingClientRect();
      }

      var selectedAnnotatedSegments = [];

      if (props.selectedAnnotatedSegments && props.selectedAnnotatedSegments.length > 0) {
        selectedAnnotatedSegments = props.selectedAnnotatedSegments;

        for (var i = 0; i < selectedAnnotatedSegments.length; i++) {
          var _segment2 = selectedAnnotatedSegments[i];

          if (firstSelectedSegment === null && _segment2 instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_11__["default"]) {
            firstSelectedSegment = _segment2;
            break;
          }
        }

        if (firstSelectedSegment) {
          if (firstSelectedSegment.length === 0 && props.activeAnnotation && props.activeAnnotation.isInsertion) {
            selectedElementId = idForInsertion(firstSelectedSegment);
            segmentIdFunction = idForInsertion;
          } else {
            selectedElementId = idForSegment(firstSelectedSegment);
            segmentIdFunction = idForSegment;
          }
        }
      } else if (props.activeAnnotation) {
        if (props.activeAnnotation.isDeletion) {
          var _segment3 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_11__["default"](startPos, "");

          selectedElementId = idForDeletedSegment(_segment3);
          segmentIdFunction = idForDeletedSegment;
          firstSelectedSegment = _segment3;
          selectedAnnotatedSegments = [firstSelectedSegment];
        } else if (props.activeAnnotation.isInsertion) {
          var _props$splitText$anno3 = props.splitText.annotatedText.getPositionOfAnnotation(props.activeAnnotation),
              _props$splitText$anno4 = _slicedToArray(_props$splitText$anno3, 1),
              start = _props$splitText$anno4[0];

          if (start) {
            var _segment4 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_11__["default"](start, "");

            selectedElementId = idForInsertion(_segment4);
            segmentIdFunction = idForInsertion;
            firstSelectedSegment = _segment4;
            selectedAnnotatedSegments = [firstSelectedSegment];
          }
        } else if (props.activeAnnotation.type === ANNOTATION_TYPES.pageBreak) {
          var _segment5 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_11__["default"](startPos + 1, "");

          var prevSegment = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_11__["default"](startPos, "");
          selectedElementId = idForPageBreak(prevSegment);
          firstSelectedSegment = _segment5;
          selectedAnnotatedSegments = [_segment5];
          selectedElementIds = [selectedElementId];
        } else if (props.activeAnnotation.type === ANNOTATION_TYPES.lineBreak) {
          var _segment6 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_11__["default"](startPos + 1, "");

          var _prevSegment = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_11__["default"](startPos, "");

          selectedElementId = idForLineBreak(_prevSegment);
          firstSelectedSegment = _segment6;
          selectedAnnotatedSegments = [_segment6];
          selectedElementIds = [selectedElementId];
        }
      }

      if (segmentIdFunction) {
        for (var _i2 = 0; _i2 < selectedAnnotatedSegments.length; _i2++) {
          var _segment7 = selectedAnnotatedSegments[_i2];

          if (_segment7 instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_11__["default"]) {
            var _segmentId = segmentIdFunction(_segment7);

            selectedElementIds.push(_segmentId);
          }
        }
      }

      if (selectedTextIndex != null && firstSelectedSegment && selectedElementId && splitTextRect) {
        return {
          selectedTextIndex: selectedTextIndex,
          firstSelectedSegment: firstSelectedSegment,
          selectedElementId: selectedElementId,
          splitTextRect: splitTextRect,
          selectedElementIds: selectedElementIds
        };
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var props = this.props;
      var rowRenderer = this.rowRenderer;
      var cache = this.cache;
      var key = props.selectedWitness ? props.selectedWitness.id : 0;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        className: _SplitText_css__WEBPACK_IMPORTED_MODULE_10___default.a.splitText2,
        ref: function ref(div) {
          return _this4.splitText = div;
        },
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("button", {
        id: "updateList2",
        style: {
          display: "none"
        },
        onClick: function onClick() {
          return _this4.updateList(true);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_4__["AutoSizer"], null, function (_ref) {
        var height = _ref.height,
            width = _ref.width;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_virtualized__WEBPACK_IMPORTED_MODULE_5__["List"], {
          ref: function ref(list) {
            return _this4.list = list;
          },
          height: height,
          rowCount: props.splitText.texts.length,
          rowHeight: cache.rowHeight,
          rowRenderer: rowRenderer,
          width: width,
          overscanRowCount: 1,
          deferredMeasurementCache: cache,
          onScroll: _this4.scrollEvent,
          scrollToAlignment: "start"
        });
      }));
    }
  }, {
    key: "getStringPositions",
    value: function getStringPositions(text, string, index) {
      var uniqueId = this.props.splitText.annotatedText.getUniqueId();

      if (!_searchResultsCache.hasOwnProperty(uniqueId)) {
        _searchResultsCache = _defineProperty({}, uniqueId, {});
      }

      if (!_searchResultsCache[uniqueId].hasOwnProperty(string)) {
        _searchResultsCache[uniqueId] = _defineProperty({}, string, {});
      }

      if (_searchResultsCache[uniqueId][string].hasOwnProperty(index)) {
        return _searchResultsCache[uniqueId][string][index];
      }

      var splitter = new grapheme_splitter__WEBPACK_IMPORTED_MODULE_13___default.a();
      var content = text.getText();
      var firstSegment = text.segments[0];
      var startingPosition = firstSegment.start;
      var positions = [];
      var position = content.indexOf(string);

      while (position !== -1) {
        positions.push(position);
        position = content.indexOf(string, position + 1);
      } // Position needs to be position in complete text


      var verifiedPositions = {};

      if (positions.length > 0) {
        var graphemes = splitter.splitGraphemes(content);
        var _position2 = 0;
        var activePosition = null;

        for (var i = 0; i < graphemes.length; i++) {
          var grapheme = graphemes[i];
          var graphemeEnd = _position2 + (grapheme.length - 1);

          if (activePosition !== null) {
            var expectedEnd = activePosition + (string.length - 1);

            if (graphemeEnd >= expectedEnd) {
              verifiedPositions[activePosition + startingPosition] = [activePosition + startingPosition, graphemeEnd + startingPosition];
              activePosition = null;
            }
          } else if (positions.indexOf(_position2) !== -1) {
            if (string.length === grapheme.length) {
              verifiedPositions[_position2 + startingPosition] = [_position2 + startingPosition, graphemeEnd + startingPosition];
            } else if (string.length > grapheme.length) {
              activePosition = _position2;
            }
          } else {
            activePosition = null;
          }

          _position2 += grapheme.length;
        }
      }

      _searchResultsCache[uniqueId][string][index] = verifiedPositions;
      return verifiedPositions;
    }
  }, {
    key: "rowRenderer",
    value: function rowRenderer(_ref2) {
      var key = _ref2.key,
          index = _ref2.index,
          parent = _ref2.parent,
          style = _ref2.style;
      var props = this.props;
      var cache = this.cache;
      var searchStringPositions = {};
      var searchValue = this.props.searchValue;

      if (searchValue && searchValue.length > 0 && props.splitText) {
        searchStringPositions = this.getStringPositions(props.splitText.texts[index], searchValue, index);
      }

      var newStyle = _objectSpread(_objectSpread({}, style), {}, {
        height: style.height + 10
      });

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_6__["CellMeasurer"], {
        columnIndex: 0,
        key: key,
        parent: parent,
        rowIndex: index,
        cache: cache
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        key: key,
        style: newStyle,
        ref: this.splitTextRef,
        id: "index2_".concat(index),
        className: _SplitText_css__WEBPACK_IMPORTED_MODULE_10___default.a.splitTextRow
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
        className: _SplitText_css__WEBPACK_IMPORTED_MODULE_10___default.a.splitTextRowContent
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Text2__WEBPACK_IMPORTED_MODULE_8__["default"], {
        segmentedText: props.splitText.texts[index],
        row: index,
        selectedSegmentId: props.selectedSegmentId // searchValue={searchValue}
        // selectedSearchResult={
        //     this.props.selectedSearchResult
        // }
        ,
        searchStringPositions: searchStringPositions,
        textAlignmentById: props.textAlignmentById,
        fontSize: props.fontSize,
        selectedSourceRange: props.selectedSourceRange,
        selectedTargetRange: props.selectedTargetRange,
        changeSelectedRange: props.changeSelectedRange
      }))));
    }
  }]);

  return SplitTextComponent;
}(react__WEBPACK_IMPORTED_MODULE_2__["PureComponent"]);



/***/ }),

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



function TableOfContent() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    textTransform: "uppercase"
  }, "Table Of Content"));
}

/* harmony default export */ __webpack_exports__["default"] = (TableOfContent);

/***/ }),

/***/ "./app/components/TextDetail2/Text2.css":
/*!**********************************************!*\
  !*** ./app/components/TextDetail2/Text2.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","paddingSide":"20px","maxWidth":"600px","text":"Text2---text","textFirstRow":"Text2---textFirstRow","textLine":"Text2---textLine","limitWidth":"Text2---limitWidth","textContainer":"Text2---textContainer","annotation":"Text2---annotation","selectedAnnotation":"Text2---selectedAnnotation","removedByAnnotation":"Text2---removedByAnnotation","insertion":"Text2---insertion","highlight":"Text2---highlight","activeHighlight":"Text2---activeHighlight","lineBreak":"Text2---lineBreak","pageBreak":"Text2---pageBreak","syncIdClass":"Text2---syncIdClass","selectedRange":"Text2---selectedRange"};

/***/ }),

/***/ "./app/components/TextDetail2/Text2.js":
/*!*********************************************!*\
  !*** ./app/components/TextDetail2/Text2.js ***!
  \*********************************************/
/*! exports provided: idForSegment, idForDeletedSegment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idForSegment", function() { return idForSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idForDeletedSegment", function() { return idForDeletedSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Text2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Text2_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Text2.css */ "./app/components/TextDetail2/Text2.css");
/* harmony import */ var _Text2_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Text2_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_TextSegment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/TextSegment */ "./app/lib/TextSegment.js");
/* harmony import */ var lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/AnnotatedText */ "./app/lib/AnnotatedText.js");
/* harmony import */ var lib_SegmentedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/SegmentedText */ "./app/lib/SegmentedText.js");
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! grapheme-splitter */ "./node_modules/grapheme-splitter/index.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(grapheme_splitter__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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











function idForSegment(segment) {
  return "s2_" + segment.start;
}
function idForDeletedSegment(segment) {
  return "ds_" + segment.start;
} // export function idForInsertion(segment: TextSegment): string {
//     return "i_" + segment.start;
// }
// export function idForPageBreak(segment: TextSegment): string {
//     return "p_" + (segment.end + 1);
// }
// export function idForLineBreak(segment: TextSegment): string {
//     return "l_" + (segment.end + 1);
// }

// import ReactDOMServer from "react-dom/server";
// import PageBreakIcon from "images/page_break_icon.svg";
// const PARA_SYMBOL = String.fromCharCode(182);
// const pageBreakIconString = ReactDOMServer.renderToStaticMarkup(
//     <PageBreakIcon />
// );
var Text2 = /*#__PURE__*/function (_React$Component) {
  _inherits(Text2, _React$Component);

  var _super = _createSuper(Text2);

  function Text2(props) {
    var _this;

    _classCallCheck(this, Text2);

    _this = _super.call(this, props);
    _this.state = {
      segmentedText: props.segmentedText
    };
    _this.textAlignmentById = [];
    _this._renderedSegments = null;
    _this._renderedHtml = null;
    return _this;
  }

  _createClass(Text2, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState(function (prevState, props) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          segmentedText: nextProps.segmentedText
        });
      });
    } // annotationsForSegment(segment: TextSegment): Annotation[] {
    //     let annotations: Annotation[] = [];
    //     const foundAnnotations = this.props.annotationPositions[
    //         String(segment.start)
    //     ];
    //     if (foundAnnotations) {
    //         annotations = foundAnnotations;
    //     }
    //     const insertions =
    //         this.props.annotationPositions[INSERTION_KEY + segment.start] || [];
    //     const deletions =
    //         this.props.annotationPositions[DELETION_KEY + segment.start] || [];
    //     const pageBreaks =
    //         this.props.annotationPositions[
    //             PAGE_BREAK_KEY + (segment.end + 1)
    //         ] || [];
    //     const lineBreaks =
    //         this.props.annotationPositions[
    //             LINE_BREAK_KEY + (segment.end + 1)
    //         ] || [];
    //     return annotations.concat(
    //         insertions,
    //         deletions,
    //         pageBreaks,
    //         lineBreaks
    //     );
    // }
    // segmentsContainSegment(segments: TextSegment[], segment: TextSegment) {
    //     for (let i = 0; i < segments.length; i++) {
    //         let listSegment = segments[i];
    //         if (
    //             listSegment.start === segment.start &&
    //             listSegment.text === segment.text
    //         ) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

  }, {
    key: "selectedElement",
    value: function selectedElement(element) {
      var selection = document.getSelection(); // console.log(selection)

      if (selection && selection.type === "Range") {
        return;
      }

      this.props.selectedSegmentId(element.id);
    }
  }, {
    key: "generateHtml",
    value: function generateHtml(renderProps, renderState) {
      var _this2 = this;

      var segments = renderState.segmentedText.segments;
      var textLineClass = _Text2_css__WEBPACK_IMPORTED_MODULE_2___default.a.textLine;
      var segmentHTML = '<p class="' + textLineClass + '">';
      if (segments.length === 0) return {
        __html: segmentHTML
      };
      var endPosition = segments[segments.length - 1].end + 1;
      var highlightClass = _Text2_css__WEBPACK_IMPORTED_MODULE_2___default.a.highlight;
      var activeHighlightClass = _Text2_css__WEBPACK_IMPORTED_MODULE_2___default.a.activeHighlight;
      var activeSearchResultEnd = null;

      var _loop = function _loop(i) {
        var _renderProps$selected;

        var segment = segments[i];
        var classAttribute = "";
        var classes = [];
        var selectedCurrentDeletion = false;
        var selectedCurrentPageBreak = false;
        var selectedCurrentLineBreak = false;
        var lineBreakAnnotation = false;
        var pageBreakAnnotation = null; // It's an insertion at the end of the text, which should have just been added to the html.
        // So break as we don't want anymore segment html adding.

        if (segment.start === endPosition) {
          return "break";
        }

        var id = null;

        if (segment.length === 0) {// id = idForDeletedSegment(segment);
          // classes.push(styles.removedByAnnotation);
          // if (deletionText) {
          //     segment = new TextSegment(segment.start, deletionText);
          // }
        } else {
          id = idForSegment(segment);
        } // if (
        //     this.segmentsContainSegment(
        //         renderProps.selectedAnnotatedSegments,
        //         segment
        //     ) ||
        //     selectedCurrentDeletion
        // ) {
        //     classes.push(styles.selectedAnnotation);
        // }


        if ((_renderProps$selected = renderProps.selectedTargetRange) !== null && _renderProps$selected !== void 0 && _renderProps$selected.includes(segment.start)) {
          classes.push(_Text2_css__WEBPACK_IMPORTED_MODULE_2___default.a.selectedRange);
        }

        if (classes.length > 0) {
          var className = classnames__WEBPACK_IMPORTED_MODULE_1___default.a.apply(void 0, classes);
          classAttribute = 'class="' + className + '"';
        }

        var segmentContent = segment.text; // Add search result highlight if required.

        if (renderProps.searchStringPositions) {
          var segmentStart = segment.start;
          var _position = segmentStart;
          segmentContent = "";
          var highlight = highlightClass;

          if (renderProps.selectedSearchResult && renderProps.selectedSearchResult.start <= _position && renderProps.selectedSearchResult.start + renderProps.selectedSearchResult.length > _position) {
            highlight = activeHighlightClass;
          }

          for (var j = 0; j < segment.text.length; j++) {
            var _char = segment.text.charAt(j);

            _position = segmentStart + j;

            if (activeSearchResultEnd) {
              var _activeSearchResultEn = activeSearchResultEnd,
                  _activeSearchResultEn2 = _slicedToArray(_activeSearchResultEn, 2),
                  start = _activeSearchResultEn2[0],
                  end = _activeSearchResultEn2[1];

              if (j === 0) {
                segmentContent += '<span class="' + highlight + '">';
              }

              if (_position === end) {
                segmentContent += _char + "</span>";
                activeSearchResultEnd = null;
              } else if (j === segment.text.length - 1) {
                segmentContent += _char + "</span>";
              } else {
                segmentContent += _char;
              }
            } else if (_position in renderProps.searchStringPositions) {
              var _renderProps$searchSt = _slicedToArray(renderProps.searchStringPositions[_position], 2),
                  _start = _renderProps$searchSt[0],
                  _end = _renderProps$searchSt[1];

              segmentContent += '<span class="' + highlight + '">' + _char;

              if (j === segment.text.length - 1 || _position === _end) {
                segmentContent += "</span>";
              }

              if (_position < _end) {
                activeSearchResultEnd = [_start, _end];
              }
            } else {
              segmentContent += _char;
            }
          }
        }

        if (_this2.props.textAlignmentById !== null // && selectedTextId === TargetId
        ) {
          var r = _this2.props.textAlignmentById.find(function (d) {
            return d.TStart === segment.start;
          });

          if (r) {
            segmentHTML += "<span id='alignment2_" + segment.start + "'>" + "<sup class=" + _Text2_css__WEBPACK_IMPORTED_MODULE_2___default.a.syncIdClass + ">".concat(r.id, "</sup>") + "</span>";
          }
        }

        segmentHTML += "<span id=" + id + " key=" + id + " " + classAttribute + ">" + segmentContent + "</span>";
      };

      for (var i = 0; i < segments.length; i++) {
        var _ret = _loop(i);

        if (_ret === "break") break;
      }

      this._renderedSegments = segments;
      segmentHTML += "</p>";
      var html = {
        __html: segmentHTML
      };
      return html;
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var renderedHtml = this.generateHtml(nextProps, nextState);

      if (this.props.fontSize !== nextProps.fontSize) {
        return true;
      } else if (this._renderedHtml && renderedHtml.__html === this._renderedHtml.__html) {
        return false;
      } else {
        this._renderedHtml = renderedHtml;
        return true;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var classes = [_Text2_css__WEBPACK_IMPORTED_MODULE_2___default.a.text];

      if (this.props.row === 0) {
        classes.push(_Text2_css__WEBPACK_IMPORTED_MODULE_2___default.a.textFirstRow);
      } // Generate HTML manually as it is much faster when
      // creating large numbers of elements, such as these spans.


      var html = this._renderedHtml ? this._renderedHtml : this.generateHtml(this.props, this.state);

      if (!this._renderedHtml) {
        this._renderedHtml = html;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Text2_css__WEBPACK_IMPORTED_MODULE_2___default.a.textContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default.a.apply(void 0, classes),
        dangerouslySetInnerHTML: html,
        onClick: function onClick(e) {
          return _this3.selectedElement(e.target);
        },
        style: {
          fontSize: this.props.fontSize
        }
      }));
    }
  }]);

  return Text2;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./app/components/TextDetail2/TextDetail.css":
/*!***************************************************!*\
  !*** ./app/components/TextDetail2/TextDetail.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","textDetail2":"TextDetail---textDetail2","textContainer":"TextDetail---textContainer"};

/***/ }),

/***/ "./app/components/TextDetail2/TextDetail.js":
/*!**************************************************!*\
  !*** ./app/components/TextDetail2/TextDetail.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextDetailHeadingContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextDetailHeadingContainer */ "./app/components/TextDetail2/TextDetailHeadingContainer.js");
/* harmony import */ var _SplitText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SplitText */ "./app/components/TextDetail2/SplitText.js");
/* harmony import */ var lib_SplitText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/SplitText */ "./app/lib/SplitText.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader */ "./node_modules/react-loader/lib/react-loader.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lib_text_splitters_lengthSplitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/text_splitters/lengthSplitter */ "./app/lib/text_splitters/lengthSplitter.js");
/* harmony import */ var _TextDetail_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextDetail.css */ "./app/components/TextDetail2/TextDetail.css");
/* harmony import */ var _TextDetail_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TextDetail_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _TableOfContent_TableOfContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TableOfContent/TableOfContent */ "./app/components/TextDetail2/TableOfContent/TableOfContent.js");
/* harmony import */ var css_util_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! css/util.css */ "./app/css/util.css");
/* harmony import */ var css_util_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(css_util_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Editors_MediaComponent_Image_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Editors/MediaComponent/Image.css */ "./app/components/Editors/MediaComponent/Image.css");
/* harmony import */ var _Editors_MediaComponent_Image_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Editors_MediaComponent_Image_css__WEBPACK_IMPORTED_MODULE_11__);













function TextDetail(props) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var text = {
    name: ""
  };

  if (props.text) {
    text = props.text;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var element = ref.current;
    element.addEventListener("mouseenter", mouseEnter);
    return function () {
      element.removeEventListener("mouseenter", mouseEnter);
    };
  }, []);

  function mouseEnter() {
    props.changeSelectedWindow(2);
  }

  var inlineControls = false;
  var textComponent = null;
  var splitText = null;

  if (!props.annotatedText || !props.text || props.loading) {
    textComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: "key-".concat(Math.random())
    });
  } else {
    var limitWidth = false;
    var splitter;

    if (props.paginated) {
      splitter = positionSplitter(props.pageBreaks);
    } else {
      splitter = Object(lib_text_splitters_lengthSplitter__WEBPACK_IMPORTED_MODULE_5__["default"])(800, /^།[\s]+(?!།[\s]+)/, 2, 5);
    }

    var key = 12;
    splitText = new lib_SplitText__WEBPACK_IMPORTED_MODULE_3__["default"](props.annotatedText, splitter);
    inlineControls = true;
    textComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SplitText__WEBPACK_IMPORTED_MODULE_2__["default"], {
      splitText: splitText // annotations={this.props.annotations}
      // activeAnnotations={this.props.activeAnnotations}
      // activeAnnotation={this.props.activeAnnotation}
      ,
      limitWidth: limitWidth // didSelectSegmentIds={props.didSelectSegmentIds}
      ,
      selectedSegmentId: props.selectedSegmentId,
      annotationPositions: props.annotationPositions,
      selectedAnnotatedSegments: props === null || props === void 0 ? void 0 : props.selectedAnnotatedSegments // textListVisible={this.props.textListVisible}
      // showImages={this.props.pageImagesVisible}
      // imagesBaseUrl={this.props.imagesBaseUrl}
      ,
      selectedWitness: props.selectedWitness,
      key: key // selectedSearchResult={this.props.selectedSearchResult}
      // searchValue={this.props.searchValue}
      ,
      fontSize: props.textFontSize,
      scrollToId: props.scrollToId,
      syncIdOnClick: props.syncIdOnClick,
      textAlignment: props.textAlignment,
      textAlignmentById: props.textAlignmentById,
      isPanelLinked: props.isPanelLinked,
      changeScrollToId2: props.changeScrollToId2,
      selectedWindow: props.selectedWindow,
      selectedSourceRange: props.selectedSourceRange,
      selectedTargetRange: props.selectedTargetRange,
      changeSelectedRange: props.changeSelectedRange,
      searchResults: props.searchResults,
      searchValue: props.searchValue,
      selectedText: props.text,
      syncIdOnSearch: props.syncIdOnSearch
    });
  }

  var textComponents = [textComponent];
  var thirdWindowHeight = _Editors_MediaComponent_Image_css__WEBPACK_IMPORTED_MODULE_11___default.a.ThirdWindowHeight;
  var bodyHeight = "calc(100% - " + thirdWindowHeight + ")"; // let condition = props.isPanelVisible;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    ref: ref,
    className: _TextDetail_css__WEBPACK_IMPORTED_MODULE_6___default.a.textDetail2,
    style: {
      height: "100%",
      flex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextDetailHeadingContainer__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader__WEBPACK_IMPORTED_MODULE_4___default.a, {
    loaded: !props.loading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    style: {
      display: "flex",
      height: "100%",
      width: "100%",
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    style: {
      flex: 1
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_TextDetail_css__WEBPACK_IMPORTED_MODULE_6___default.a.textContainer2, css_util_css__WEBPACK_IMPORTED_MODULE_9___default.a.flex)
  }, !props.loading ? textComponents : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["Slide"], {
    direction: "left",
    "in": props.showTableContent,
    container: ref.current
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    sx: {
      position: "absolute",
      height: "100%",
      minWidth: "50%",
      right: 0,
      background: "#eee",
      borderLeft: "1px solid gray",
      padding: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableOfContent_TableOfContent__WEBPACK_IMPORTED_MODULE_8__["default"], null)))));
}

/* harmony default export */ __webpack_exports__["default"] = (TextDetail);

/***/ }),

/***/ "./app/components/TextDetail2/TextDetailContainer.js":
/*!***********************************************************!*\
  !*** ./app/components/TextDetail2/TextDetailContainer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_uniqWith__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/uniqWith */ "./node_modules/lodash/uniqWith.js");
/* harmony import */ var lodash_uniqWith__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqWith__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_intersectionWith__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/intersectionWith */ "./node_modules/lodash/intersectionWith.js");
/* harmony import */ var lodash_intersectionWith__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_intersectionWith__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TextDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TextDetail */ "./app/components/TextDetail2/TextDetail.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/AnnotatedText */ "./app/lib/AnnotatedText.js");
/* harmony import */ var state_helpers_TextStore2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! state_helpers/TextStore2 */ "./app/state_helpers/TextStore2.js");



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var DISMISS_CONTROLS_ON_CLICK = true;

function getInsertionKey(annotation) {
  return [annotation.start, annotation.length].join("-");
}

var _posAnnotatedText;

var _posAnnotations;

var _positions;

var _posVersion;

var getAnnotationPositions = function getAnnotationPositions(annotatedText, annotations) {
  if (annotatedText === _posAnnotatedText && annotations === _posAnnotations && annotatedText.version === _posVersion) {
    return _positions;
  }

  var positions = {};
  var activeInsertions = {};

  var _loop = function _loop(i) {
    var annotation = annotations[i];

    var _annotatedText$getPos = annotatedText.getPositionOfAnnotation(annotation),
        _annotatedText$getPos2 = _slicedToArray(_annotatedText$getPos, 2),
        startPos = _annotatedText$getPos2[0],
        length = _annotatedText$getPos2[1];

    if (startPos == null) {
      return "continue";
    }

    if (length === 0) {
      if (annotation.isInsertion) {
        // group with any active insertions at the same position
        var activeKey = getInsertionKey(annotation);
        var activeInsertionPositions = activeInsertions[activeKey];

        if (activeInsertionPositions) {
          activeInsertionPositions.map(function (pos) {
            return positions[pos].push(annotation);
          });
          return "continue";
        }

        startPos = INSERTION_KEY + startPos;
      }

      if (annotation.isDeletion && annotation.length > 0) {
        // active deletion
        startPos = DELETION_KEY + startPos;
      }

      if (annotation.type === ANNOTATION_TYPES.pageBreak) {
        startPos = PAGE_BREAK_KEY + startPos;
      }

      if (annotation.type === ANNOTATION_TYPES.lineBreak) {
        startPos = LINE_BREAK_KEY + startPos;
      }

      if (positions[startPos] === undefined) {
        positions[startPos] = [];
      }

      if (positions[startPos].indexOf(annotation) === -1) {
        positions[startPos].push(annotation);
      }
    } else {
      var annotationPositions = [];

      for (var j = startPos; j < startPos + length; j++) {
        if (positions[j] === undefined) {
          positions[j] = [];
        }

        if (positions[j].indexOf(annotation) === -1) {
          positions[j].push(annotation);
        }

        annotationPositions.push(j);
      } // Store the positions this annotation is displayed at.
      // This can then be used later to group with inactive insertions


      if (annotation.isInsertion) {
        var key = getInsertionKey(annotation);
        activeInsertions[key] = annotationPositions;
      }
    }
  };

  for (var i = 0; i < annotations.length; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  }

  _posAnnotatedText = annotatedText;
  _posAnnotations = annotations;
  _positions = positions;
  _posVersion = annotatedText.version;
  return positions;
};

var mapStateToProps = function mapStateToProps(state) {
  var selectedWitness = {};
  var annotatedText = null;
  var workingWitness;
  var textFontSize = reducers__WEBPACK_IMPORTED_MODULE_6__["getTextFontSize2"](state);
  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_6__["getSelectedText2"](state);
  var annotationPositions = {};
  var annotations = [];

  if (selectedText) {
    workingWitness = reducers__WEBPACK_IMPORTED_MODULE_6__["getWorkingWitness2"](state, selectedText.id);
    var selectedWitnessId = reducers__WEBPACK_IMPORTED_MODULE_6__["getSelectedTextWitnessId2"](state, selectedText.id);

    if (selectedWitnessId) {
      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_6__["getWitness2"](state, selectedWitnessId);
    }

    if (!selectedWitness) {
      selectedWitness = workingWitness;
    }
  }

  annotatedText = state_helpers_TextStore2__WEBPACK_IMPORTED_MODULE_8__["getWitnessText"](state, selectedWitness.id);
  var loading = state.data2.loadingWitnesses;

  if (annotatedText) {
    annotationPositions = getAnnotationPositions(annotatedText, Object.values(annotations));
  }

  var isPanelLinked = reducers__WEBPACK_IMPORTED_MODULE_6__["isPanelLinked"](state);
  var scrollToId = reducers__WEBPACK_IMPORTED_MODULE_6__["getScrollToId"](state);
  var syncIdOnClick = reducers__WEBPACK_IMPORTED_MODULE_6__["getSyncIdOnClick"](state);
  var textAlignment = reducers__WEBPACK_IMPORTED_MODULE_6__["getTextAlignment"](state);
  var selectedWindow = reducers__WEBPACK_IMPORTED_MODULE_6__["getSelectedWindow"](state);
  var searchValue = reducers__WEBPACK_IMPORTED_MODULE_6__["getSearchValue2"](state);
  return {
    text: selectedText,
    textFontSize: textFontSize,
    annotatedText: annotatedText,
    selectedWitness: selectedWitness,
    loading: loading,
    annotationPositions: annotationPositions,
    isSecondWindowOpen: Object(reducers__WEBPACK_IMPORTED_MODULE_6__["isSecondWindowOpen"])(state),
    imageData: Object(reducers__WEBPACK_IMPORTED_MODULE_6__["getImageData"])(state),
    isPanelLinked: isPanelLinked,
    selectedImage: Object(reducers__WEBPACK_IMPORTED_MODULE_6__["getSelectedImage"])(state),
    isImagePortrait: Object(reducers__WEBPACK_IMPORTED_MODULE_6__["isImagePortrait"])(state),
    isPanelVisible: Object(reducers__WEBPACK_IMPORTED_MODULE_6__["isPanelVisible"])(state),
    scrollToId: scrollToId,
    syncIdOnClick: syncIdOnClick,
    textAlignment: textAlignment,
    textAlignmentById: reducers__WEBPACK_IMPORTED_MODULE_6__["getTextAlignmentById"](state),
    selectedWindow: selectedWindow,
    selectedSourceRange: Object(reducers__WEBPACK_IMPORTED_MODULE_6__["getSelectedSourceRange"])(state),
    selectedTargetRange: Object(reducers__WEBPACK_IMPORTED_MODULE_6__["getSelectedTargetRange"])(state),
    showTableContent: reducers__WEBPACK_IMPORTED_MODULE_6__["getShowTableContent2"](state),
    searchResults: Object(reducers__WEBPACK_IMPORTED_MODULE_6__["getSearchResults2"])(state, searchValue),
    searchValue: searchValue,
    syncIdOnSearch: reducers__WEBPACK_IMPORTED_MODULE_6__["getSyncIdOnSearch2"](state)
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  var annotatedText = stateProps.annotatedText,
      annotationPositions = stateProps.annotationPositions;
  var dispatch = dispatchProps.dispatch;

  var isDeletion = function isDeletion(id) {
    return id.indexOf("ds2_") !== -1;
  };

  var isInsertion = function isInsertion(id) {
    return id.indexOf("i2_") !== -1;
  };

  var isPageBreak = function isPageBreak(id) {
    return id.indexOf("p2_") !== -1;
  };

  var isLineBreak = function isLineBreak(id) {
    return id.indexOf("l2_") !== -1;
  };

  var idFromSegmentId = function idFromSegmentId(id) {
    var start = 0;

    if (isInsertion(id)) {
      start = id.substr(2);
    } else if (isDeletion(id)) {
      start = id.substr(3);
    } else {
      start = id.substr(2);
    }

    return start;
  };

  var didSelectSegmentPosition = function didSelectSegmentPosition(segmentPosition, start, length) {
    var segmentAnnotations = annotationPositions[segmentPosition];
    var segmentVariants = [];
    var segmentPageBreaks = [];
    var segmentLineBreaks = [];

    if (segmentAnnotations) {
      segmentVariants = segmentAnnotations.filter(function (annotation) {
        return annotation.type === ANNOTATION_TYPES.variant;
      });
      segmentPageBreaks = segmentAnnotations.filter(function (annotation) {
        return annotation.type === ANNOTATION_TYPES.pageBreak;
      });
      segmentLineBreaks = segmentAnnotations.filter(function (annotation) {
        return annotation.type === ANNOTATION_TYPES.lineBreak;
      });
    }

    var activeAnnotations = lodash_intersectionWith__WEBPACK_IMPORTED_MODULE_1___default()(segmentVariants.concat(segmentPageBreaks, segmentLineBreaks), annotatedText.annotations, function (a, b) {
      return a.toString() == b.toString();
    });

    var activeAnnotation = null;

    if (activeAnnotations.length > 0) {
      // get any active annotations
      activeAnnotation = activeAnnotations[0];
    } else if (segmentVariants && segmentVariants.length > 0) {
      // get base text annotation for longest annotation highlighted in text
      var longestAvailable = getLongestAnnotation(segmentVariants);

      var _annotatedText$getPos3 = annotatedText.getPositionOfAnnotation(longestAvailable),
          _annotatedText$getPos4 = _slicedToArray(_annotatedText$getPos3, 2),
          _start = _annotatedText$getPos4[0],
          textLength = _annotatedText$getPos4[1];

      if (longestAvailable && longestAvailable.isInsertion) {
        textLength = 0;
      }

      activeAnnotation = annotatedText.getBaseAnnotation(_start, textLength);
    } else {
      // get base annotation of just the segment
      activeAnnotation = annotatedText.getBaseAnnotation(start, length);
    } // dispatch(actions.changedActiveTextAnnotation(activeAnnotation));

  };

  return _objectSpread(_objectSpread(_objectSpread({}, ownProps), stateProps), {}, {
    onChangedFontSize: function onChangedFontSize(fontSize) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_5__["changedTextFontSize"](fontSize));
    },
    didSelectSegmentIds: function didSelectSegmentIds(segmentIds) {
      if (segmentIds.length === 0) {
        return;
      }

      var segmentAnnotations = [];
      var segments = [];

      var _iterator = _createForOfIteratorHelper(segmentIds),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var segmentId = _step.value;

          if (isDeletion(segmentId) || isInsertion(segmentId)) {
            continue;
          }

          var segmentPosition = idFromSegmentId(segmentId);
          var textSegment = annotatedText.segmentedText.segmentAtPosition(segmentPosition);
          segments.push(textSegment);
          var annotations = annotationPositions[textSegment.start];

          if (annotations) {
            segmentAnnotations = segmentAnnotations.concat(annotations);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      segmentAnnotations = lodash_uniqWith__WEBPACK_IMPORTED_MODULE_0___default()(segmentAnnotations, function (a, b) {
        return a.toString() == b.toString();
      });

      var activeAnnotations = lodash_intersectionWith__WEBPACK_IMPORTED_MODULE_1___default()(segmentAnnotations, annotatedText.annotations, function (a, b) {
        return a.toString() == b.toString();
      });

      var range = getSegmentsRange(segments, activeAnnotations, segmentAnnotations, stateProps.annotatedText);

      if (!range) {
        console.warn("No range for selected segment ids: %o", segmentIds);
        return;
      }

      var baseAnnotation = annotatedText.getBaseAnnotation(range.start, range.length);
      var activeAnnotation = null;

      if (range.annotation) {
        activeAnnotation = range.annotation;
      } else if (activeAnnotations.length > 0) {
        var content = annotatedText.segmentedText.segmentsInRange(range.start, range.length).reduce(function (content, segment) {
          return content + segment.text;
        }, ""); // TODO: test this when editing non-working edition.
        // Check if getTextWorkingWitness works as required

        if (!stateProps.selectedWitness) {
          console.log("no stateProps.selectedWitness: %o", stateProps.selectedWitness);
        }

        activeAnnotation = new Annotation(WORKING_VERSION_ANNOTATION_ID, getTextWorkingWitness(stateProps.text), baseAnnotation.start, baseAnnotation.length, content, ANNOTATION_TYPES.variant, stateProps.selectedWitness, stateProps.user);
      } else {
        activeAnnotation = baseAnnotation;
      } // dispatch(changedActiveTextAnnotation(activeAnnotation));

    },
    changeScrollToId2: function changeScrollToId2(payload) {
      return dispatch(actions__WEBPACK_IMPORTED_MODULE_5__["changeScrollToId2"](payload));
    },
    changeSelectedWindow: function changeSelectedWindow(payload) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_5__["changeSelectedWindow"](payload));
    },
    changeSelectedRange: function changeSelectedRange(payload) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_5__["changeSelectedRange"](payload));
    },
    changeShowTableContent: function changeShowTableContent(payload) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_5__["showTableContent2"](payload));
    },
    selectedSegmentId: function selectedSegmentId(segmentId) {
      var start = idFromSegmentId(segmentId);
      var positionKey = start;

      if (isInsertion(segmentId)) {
        positionKey = INSERTION_KEY + start;
      } else if (isDeletion(segmentId)) {
        positionKey = DELETION_KEY + start;
      } else if (isPageBreak(segmentId)) {
        positionKey = PAGE_BREAK_KEY + start;
      } else if (isLineBreak(segmentId)) {
        positionKey = LINE_BREAK_KEY + start;
      }

      var segmentAnnotations = annotationPositions[positionKey];

      if (DISMISS_CONTROLS_ON_CLICK && stateProps.activeAnnotation) {
        var activeAnnotation = stateProps.activeAnnotation;

        if (activeAnnotation) {
          var dismissTextAnnotation = actions__WEBPACK_IMPORTED_MODULE_5__["changedActiveTextAnnotation"](null);
          dispatch(dismissTextAnnotation);
        }
      } //  else {
      //     if (
      //         isInsertion(segmentId) ||
      //         isDeletion(segmentId) ||
      //         isPageBreak(segmentId) ||
      //         isLineBreak(segmentId)
      //     ) {
      //         const length = 0;
      //         didSelectSegmentPosition(positionKey, start, length);
      //     } else {
      //         let segmentPosition = Number(idFromSegmentId(segmentId));
      //         let textSegment = annotatedText.segmentedText.segmentAtPosition(
      //             segmentPosition
      //         );
      //         if (textSegment) {
      //             didSelectSegmentPosition(
      //                 textSegment.start,
      //                 textSegment.start,
      //                 textSegment.length
      //             );
      //         }
      //     }
      // }

    }
  });
};

var TextDetailContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, null, mergeProps)(_TextDetail__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (TextDetailContainer);

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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function TextDetailHeading(props) {
  var _props$searchResults$;

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
    setVisible(false);
  };

  var debouncedSearch = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function (s) {
    props.searchChanged(s);
  }, 1000)).current;
  var handleSearch = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    e.preventDefault();
    setfindvalue("");
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["Stack"], {
    direction: "column",
    ref: headingRef,
    spacing: 1,
    px: 2,
    py: 1,
    style: {
      background: "#f7f7f7"
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["Stack"], {
    direction: "row",
    spacing: 1,
    justifyContent: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["Box"], {
    sx: {
      display: "flex",
      gap: 2
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_Search__WEBPACK_IMPORTED_MODULE_9__["default"], {
    handleWindowSearch: handleWindowSearch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_Settings__WEBPACK_IMPORTED_MODULE_8__["default"], props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_TableOfContent__WEBPACK_IMPORTED_MODULE_10__["default"], props))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["Collapse"], {
    "in": showFind
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
  }, "Search"), props.searchResults && visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["List"], {
    sx: {
      position: "absolute",
      top: 84,
      zIndex: 10,
      background: "#eee",
      boxShadow: 3
    }
  }, lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(props.searchResults) && props.searchResults.hasOwnProperty(props.selectedText.id) && props.searchResults[props.selectedText.id].results && ((_props$searchResults$ = props.searchResults[props.selectedText.id]) === null || _props$searchResults$ === void 0 ? void 0 : _props$searchResults$.results.map(function (l, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["ListItem"], {
      onClick: function onClick() {
        return handleListItemClick(l[0]);
      },
      sx: {
        cursor: "pointer",
        "&:hover": {
          background: "#fff"
        }
      },
      key: l[0] + "listsearch"
    }, l[1]);
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (TextDetailHeading);

/***/ }),

/***/ "./app/components/TextDetail2/TextDetailHeadingContainer.js":
/*!******************************************************************!*\
  !*** ./app/components/TextDetail2/TextDetailHeadingContainer.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TextDetailHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextDetailHeading */ "./app/components/TextDetail2/TextDetailHeading.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var mapStateToProps = function mapStateToProps(state) {
  var user = reducers__WEBPACK_IMPORTED_MODULE_4__["getUser"](state);
  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_4__["getSelectedText2"](state);
  var witnesses = [];
  var exportingWitness = false;
  var selectedWitness;

  if (selectedText) {
    witnesses = reducers__WEBPACK_IMPORTED_MODULE_4__["getTextWitnesses2"](state, selectedText.id);
    var selectedWitnessId = reducers__WEBPACK_IMPORTED_MODULE_4__["getSelectedTextWitnessId2"](state, selectedText.id);

    if (selectedWitnessId) {
      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_4__["getWitness2"](state, selectedWitnessId); // exportingWitness = reducers.getExportingWitness(
      //     state,
      //     selectedWitnessId
      // );
    } else {
      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_4__["getWorkingWitness2"](state, selectedText.id);
    }
  }

  var textFontSize = reducers__WEBPACK_IMPORTED_MODULE_4__["getTextFontSize2"](state);
  var showTableContent = Object(reducers__WEBPACK_IMPORTED_MODULE_4__["getShowTableContent2"])(state);
  var searchValue = reducers__WEBPACK_IMPORTED_MODULE_4__["getSearchValue2"](state);
  return {
    witnesses: witnesses,
    selectedText: selectedText,
    selectedWitness: selectedWitness,
    textListIsVisible: Object(reducers__WEBPACK_IMPORTED_MODULE_4__["getTextListVisible"])(state),
    accountOverlayVisible: Object(reducers__WEBPACK_IMPORTED_MODULE_4__["getAccountOverlayVisible"])(state),
    textFontSize: textFontSize,
    user: user,
    searchValue: searchValue,
    showTableContent: showTableContent,
    searchResults: reducers__WEBPACK_IMPORTED_MODULE_4__["getSearchResults2"](state, searchValue)
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  var navigationButtonClicked = function navigationButtonClicked() {
    dispatchProps.dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changedTextListVisible"](!stateProps.textListIsVisible));
  };

  var dispatch = dispatchProps.dispatch;
  var selectedText = stateProps.selectedText;
  return _objectSpread(_objectSpread(_objectSpread({}, ownProps), stateProps), {}, {
    navigationButtonClicked: navigationButtonClicked,
    onSelectedWitness: function onSelectedWitness(witness) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["selectedTextWitness2"](selectedText.id, witness.id));
    },
    onChangedFontSize: function onChangedFontSize(fontSize) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changedTextFontSize2"](fontSize));
    },
    changeShowTableContent: function changeShowTableContent(payload) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["showTableContent2"](payload));
    },
    searchChanged: function searchChanged(searchTerm) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changedSearchValue2"](searchTerm));
    },
    changeSelectSyncId: function changeSelectSyncId(payload) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changeSyncIdOnSearch2"](payload));
    }
  });
};

var TextDetailHeadingContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null, mergeProps)(_TextDetailHeading__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (TextDetailHeadingContainer);

/***/ }),

/***/ "./app/components/TextDetail2/TextList.css":
/*!*************************************************!*\
  !*** ./app/components/TextDetail2/TextList.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"textlist":"TextList---textlist","open":"TextList---open","listToggelBtn":"TextList---listToggelBtn"};

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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
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

  var onSelectedText = props.onSelectedText;
  var selectedText = props.selectedText;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

  var selected = selectedText ? selectedText.name : textslist[0].name;
  var cache = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new react_virtualized__WEBPACK_IMPORTED_MODULE_1__["CellMeasurerCache"]({
    fixedHeight: true,
    defaultHeight: 30
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
    setTextList(temptext.current);

    if (value === "" || value === null) {
      return;
    }

    var newtextslist = textslist.filter(function (l) {
      return l.name.includes(value);
    });
    setTextList(newtextslist);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["ClickAwayListener"], {
    onClickAway: function onClickAway() {
      return setIsOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    onClick: handleClick,
    className: _TextList_css__WEBPACK_IMPORTED_MODULE_3___default.a.listToggelBtn,
    component: "div",
    sx: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: "10rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    noWrap: true
  }, selected)), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes),
    style: {
      position: "absolute"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    onChange: handleChange,
    id: "standard-basic",
    label: "filter",
    variant: "standard",
    style: {
      width: "100%"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["AutoSizer"], null, function (_ref) {
    var width = _ref.width,
        height = _ref.height;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["List"], {
      width: width,
      height: height,
      rowHeight: cache.current.rowHeight,
      deferredMeasurementCache: cache.current,
      rowCount: textslist.length,
      rowRenderer: function rowRenderer(_ref2) {
        var key = _ref2.key,
            index = _ref2.index,
            style = _ref2.style,
            parent = _ref2.parent;
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
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          style: {
            paddingLeft: "10px"
          }
        }, data.name)));
      }
    });
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (TextList);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Slider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider.css */ "./app/components/UI/Slider.css");
/* harmony import */ var _Slider_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Slider_css__WEBPACK_IMPORTED_MODULE_1__);



function Slider(_ref) {
  var max = _ref.max,
      min = _ref.min,
      initialvalue = _ref.initialvalue,
      _ref$changeSize = _ref.changeSize,
      changeSize = _ref$changeSize === void 0 ? function (r) {
    return console.log(r);
  } : _ref$changeSize;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Slider_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputRanges
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      fontSize: 13,
      top: "-5px"
    }
  }, "\u0F40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "range",
    style: {
      width: "70%"
    },
    className: _Slider_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputRange,
    min: min,
    max: max,
    step: 1,
    smooth: "yes",
    value: initialvalue,
    onChange: function onChange(e) {
      return changeSize(parseInt(e.target.value));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      fontSize: 18,
      top: "-10px"
    }
  }, "\u0F40"));
}

/* harmony default export */ __webpack_exports__["default"] = (Slider);

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

/***/ }),

/***/ "./app/lib/SplitText.js":
/*!******************************!*\
  !*** ./app/lib/SplitText.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SplitText; });
/* harmony import */ var _SegmentedText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SegmentedText */ "./app/lib/SegmentedText.js");
/* harmony import */ var _AnnotatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnnotatedText */ "./app/lib/AnnotatedText.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var SplitText = /*#__PURE__*/function () {
  function SplitText(annotatedText, splitter) {
    _classCallCheck(this, SplitText);

    this.annotatedText = annotatedText;
    this.splitter = splitter;
    this._texts = null;
    this._textsId = null;
    this._textsFinalPositions = [];
  }

  _createClass(SplitText, [{
    key: "texts",
    get: function get() {
      if (!this.annotatedText) {
        return [];
      }

      if (!this._texts || this._textsId !== this.annotatedText.getUniqueId()) {
        this._textsFinalPositions = [];
        var segmentedText = this.annotatedText.segmentedText;
        var textString = segmentedText.getText();
        var splitPositions = this.splitter(textString).filter(function (l) {
          return l !== 0;
        });

        if (splitPositions.length === 0) {
          this._textsFinalPositions.push(textString.length);

          return [segmentedText];
        }

        var lastPosition = splitPositions[splitPositions.length - 1];

        if (lastPosition + 1 < textString.length) {
          splitPositions.push(textString.length - 1);
        }

        var segments = segmentedText.segments;
        var startIndex = 0;
        var texts = [];

        for (var i = 0; i < splitPositions.length; i++) {
          var position = splitPositions[i];
          var endIndex = segmentedText.indexOfSegmentAtPosition(position - 1);
          var textSegments = void 0;

          if (i == splitPositions.length - 1) {
            // final position
            textSegments = segments.slice(startIndex);
          } else {
            textSegments = segments.slice(startIndex, endIndex + 1);
          }

          var text = new _SegmentedText__WEBPACK_IMPORTED_MODULE_0__["default"](textSegments);
          texts.push(text);
          startIndex = endIndex + 1;

          if (endIndex >= 0) {
            var finalSegment = segments[endIndex];

            this._textsFinalPositions.push(finalSegment.end);
          }
        }

        this._texts = texts.filter(function (l) {
          return l.segments.length > 0;
        });
        this._textsId = this.annotatedText.getUniqueId();
      }

      return this._texts || [];
    }
  }, {
    key: "getTextsFinalPositions",
    value: function getTextsFinalPositions() {
      this.texts;
      return this._textsFinalPositions;
    }
    /**
     * Return the index of the text portion that contains the given position.
     *
     * @param position
     * @returns number
     */

  }, {
    key: "getTextIndexOfPosition",
    value: function getTextIndexOfPosition(position) {
      var textsFinalPositions = this.getTextsFinalPositions();
      var lastPosition = 0;
      var textIndex = null;

      for (var i = 0; i < textsFinalPositions.length; i++) {
        var endPosition = textsFinalPositions[i];

        if (position >= lastPosition && position <= endPosition) {
          textIndex = i;
          break;
        }

        lastPosition = endPosition;
      }

      if (textIndex === null) {
        // Likely an insertion at the end of a text
        console.warn("no index for position %d", position);
        textIndex = textsFinalPositions.length - 1;
      }

      return textIndex;
    }
  }]);

  return SplitText;
}();



/***/ }),

/***/ "./app/state_helpers/TextStore2.js":
/*!*****************************************!*\
  !*** ./app/state_helpers/TextStore2.js ***!
  \*****************************************/
/*! exports provided: getWitnessText, addTextAnnotation, removeTextAnnotation, deleteTextAnnotation, getWitnessAnnotations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWitnessText", function() { return getWitnessText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTextAnnotation", function() { return addTextAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTextAnnotation", function() { return removeTextAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTextAnnotation", function() { return deleteTextAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWitnessAnnotations", function() { return getWitnessAnnotations; });
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/pickBy */ "./node_modules/lodash/pickBy.js");
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pickBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/AnnotatedText */ "./app/lib/AnnotatedText.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var lib_segmentTibetanText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/segmentTibetanText */ "./app/lib/segmentTibetanText.js");
/* harmony import */ var lib_SegmentedText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/SegmentedText */ "./app/lib/SegmentedText.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var store = {};
var getWitnessText = function getWitnessText(state, witnessId) {
  var text = null;

  if (witnessId) {
    text = generateAnnotatedText(state, witnessId);

    if (text) {
      store[witnessId] = text;
    }
  }

  return text;
};
var addTextAnnotation = function addTextAnnotation(state, witnessId, annotation) {
  var text = getWitnessText(state, witnessId);

  if (text) {
    text.addAnnotation(annotation);
  } // If witnessId is present, assume that getWitnessAnnotations
  // has already been called.


  if (annotationStore.hasOwnProperty(witnessId)) {
    if (!annotationStore[witnessId].appliedAnnotations.hasOwnProperty(annotation.uniqueId)) {
      annotationStore[witnessId].appliedAnnotations[annotation.uniqueId] = annotation;
    }

    if (!annotationStore[witnessId].allAnnotations.hasOwnProperty(annotation.uniqueId)) {
      annotationStore[witnessId].allAnnotations[annotation.uniqueId] = annotation;
    }
  }
};
var removeTextAnnotation = function removeTextAnnotation(state, witnessId, annotationId) {
  var text = getWitnessText(state, witnessId);

  if (text) {
    text.removeAnnotation(annotationId);
  }

  if (annotationStore.hasOwnProperty(witnessId)) {
    if (annotationStore[witnessId].appliedAnnotations.hasOwnProperty(annotationId)) {
      delete annotationStore[witnessId].appliedAnnotations[annotationId];
    }
  }
};
var deleteTextAnnotation = function deleteTextAnnotation(state, witnessId, annotationId) {
  var text = getWitnessText(state, witnessId);

  if (text) {
    text.removeAnnotation(annotationId);
  }

  if (annotationStore.hasOwnProperty(witnessId)) {
    if (annotationStore[witnessId].allAnnotations.hasOwnProperty(annotationId)) {
      delete annotationStore[witnessId].allAnnotations[annotationId];
    }

    if (annotationStore[witnessId].appliedAnnotations.hasOwnProperty(annotationId)) {
      delete annotationStore[witnessId].appliedAnnotations[annotationId];
    }
  }
};
var annotationStore = {};
var getWitnessAnnotations = function getWitnessAnnotations(state, witness, workingWitness) {
  if (annotationStore.hasOwnProperty(witness.id)) {
    return [annotationStore[witness.id].appliedAnnotations, annotationStore[witness.id].allAnnotations];
  }

  var text = witness.text;
  var workingAnnotationList = reducers__WEBPACK_IMPORTED_MODULE_1__["getAnnotationsForWitnessId"](state, workingWitness.id);
  var appliedAnnotations = getActiveAnnotations(state, witness.id, workingWitness.id);
  var removedDefaultAnnotations = null; // Default annotations removed by the user.
  // Usually these are available when viewing
  // a non-working edition.

  var nonActiveAnnotations = {};

  if (witness.id !== workingWitness.id) {
    // If we are not viewing the working version,
    // get all the annotations created by the selected witness
    // BUT NOT BY A USER to apply to the base text.
    // User-created annotations need to be in appliedAnnotations.
    removedDefaultAnnotations = reducers__WEBPACK_IMPORTED_MODULE_1__["getRemovedDefaultAnnotationsForWitnessId"](state, witness.id);
    var selectedWitnessAnnotations = {};

    for (var key in workingAnnotationList) {
      if (workingAnnotationList.hasOwnProperty(key)) {
        var annotationData = workingAnnotationList[key];

        if (annotationData.creator_witness === witness.id && !removedDefaultAnnotations.hasOwnProperty(annotationData.unique_id)) {
          selectedWitnessAnnotations[annotationData.unique_id] = annotationData;
        } else if (annotationData.creator_witness === witness.id) {
          nonActiveAnnotations[annotationData.unique_id] = annotationData;
        }
      }
    }

    var selectedWitnessAnnotationsList = annotationsMapFromData(state, selectedWitnessAnnotations);
    appliedAnnotations = _objectSpread(_objectSpread({}, selectedWitnessAnnotationsList), appliedAnnotations);
    workingAnnotationList = selectedWitnessAnnotations;
  }

  var annotations = annotationsMapFromData(state, workingAnnotationList);
  nonActiveAnnotations = annotationsMapFromData(state, nonActiveAnnotations);

  if (Object.keys(nonActiveAnnotations).length > 0) {
    annotations = _objectSpread(_objectSpread({}, annotations), nonActiveAnnotations);
  }

  annotations = _objectSpread(_objectSpread({}, appliedAnnotations), annotations);
  annotations = lodash_pickBy__WEBPACK_IMPORTED_MODULE_0___default()(annotations, function (annotation, key) {
    return !(witness && annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_4__["ANNOTATION_TYPES"].lineBreak && annotation.creatorWitness.id !== witness.id);
  }); // Only cache if annotations have been loaded

  if (reducers__WEBPACK_IMPORTED_MODULE_1__["hasLoadedWitnessAnnotations"](state, witness.id) && reducers__WEBPACK_IMPORTED_MODULE_1__["hasLoadedWitnessAppliedAnnotations"](state, witness.id)) {
    annotationStore[witness.id] = {
      appliedAnnotations: appliedAnnotations,
      allAnnotations: annotations
    };
  }

  return [appliedAnnotations, annotations];
};

var generateAnnotatedText = function generateAnnotatedText(state, witnessId) {
  var witness = reducers__WEBPACK_IMPORTED_MODULE_1__["getWitness2"](state, witnessId);

  if (!witness) {
    console.warn("no witness");
    return null;
  }

  var text = witness.text;
  var workingWitness = reducers__WEBPACK_IMPORTED_MODULE_1__["getWorkingWitness2"](state, text.id);
  var baseWitness = reducers__WEBPACK_IMPORTED_MODULE_1__["getBaseWitness2"](state, text.id);

  if (!workingWitness || !baseWitness) {
    return null;
  }

  var _getWitnessAnnotation = getWitnessAnnotations(state, witness, workingWitness),
      _getWitnessAnnotation2 = _slicedToArray(_getWitnessAnnotation, 2),
      appliedAnnotations = _getWitnessAnnotation2[0],
      availableAnnotations = _getWitnessAnnotation2[1];

  var segmentedWorkingWitness = getSegmentedWitness(workingWitness);
  var annotatedText = new lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_2__["default"](segmentedWorkingWitness, Object.values(appliedAnnotations), function (text) {
    return Object(lib_segmentTibetanText__WEBPACK_IMPORTED_MODULE_5__["default"])(text).segments;
  }, workingWitness, witness);
  return annotatedText;
};

var getActiveAnnotations = function getActiveAnnotations(state, witnessId, baseWitnessId) {
  var loadedAppliedAnnotations = reducers__WEBPACK_IMPORTED_MODULE_1__["hasLoadedWitnessAppliedAnnotations"](state, witnessId);

  if (!loadedAppliedAnnotations) {
    return {};
  }

  var activeAnnotationList = reducers__WEBPACK_IMPORTED_MODULE_1__["getActiveAnnotationsForWitnessId"](state, witnessId);

  if (!activeAnnotationList) {
    return {};
  }

  var activeAnnotationDataList = {};

  for (var activeAnnotationId in activeAnnotationList) {
    if (activeAnnotationList.hasOwnProperty(activeAnnotationId)) {
      var activeAnnotationData = reducers__WEBPACK_IMPORTED_MODULE_1__["getAnnotationData"](state, baseWitnessId, activeAnnotationId);

      if (activeAnnotationData) {
        activeAnnotationDataList[activeAnnotationData.unique_id] = activeAnnotationData;
      }
    }
  }

  return annotationsMapFromData(state, activeAnnotationDataList);
};

var annotationsMapFromData = function annotationsMapFromData(state, annotationList) {
  var annotations = {};

  for (var key in annotationList) {
    if (annotationList.hasOwnProperty(key)) {
      var annotationData = annotationList[key];
      var annotation = reducers__WEBPACK_IMPORTED_MODULE_1__["annotationFromData"](state, annotationData);

      if (annotation) {
        annotations[key] = annotation;
      }
    }
  }

  return annotations;
}; // TODO: clear cache when changing texts


var _segmentedWitnesses = {};

function getSegmentedWitness(witness) {
  if (!_segmentedWitnesses[witness.id]) {
    _segmentedWitnesses[witness.id] = Object(lib_segmentTibetanText__WEBPACK_IMPORTED_MODULE_5__["default"])(witness.content || "");
  }

  return _segmentedWitnesses[witness.id];
}

/***/ })

}]);
//# sourceMappingURL=2.parkhang-dev.js.map