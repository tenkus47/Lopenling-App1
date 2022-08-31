(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[21],{

/***/ "./app/components/TextList/HighlightedString.js":
/*!******************************************************!*\
  !*** ./app/components/TextList/HighlightedString.js ***!
  \******************************************************/
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

/***/ }),

/***/ "./app/components/TextList/ResultCount.js":
/*!************************************************!*\
  !*** ./app/components/TextList/ResultCount.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResultCount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextList.css */ "./app/components/TextList/TextList.css");
/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TextList_css__WEBPACK_IMPORTED_MODULE_1__);
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




var ResultCount = /*#__PURE__*/function (_React$Component) {
  _inherits(ResultCount, _React$Component);

  var _super = _createSuper(ResultCount);

  function ResultCount(props) {
    _classCallCheck(this, ResultCount);

    return _super.call(this, props);
  }

  _createClass(ResultCount, [{
    key: "render",
    value: function render() {
      var countDisplay = this.props.count;
      if (this.props.extra) countDisplay += "+";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_1___default.a.searchTotal
      }, countDisplay);
    }
  }]);

  return ResultCount;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./app/components/TextList/TextList.css":
/*!**********************************************!*\
  !*** ./app/components/TextList/TextList.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","textList":"TextList---textList","textListRow":"TextList---textListRow","selectedRow":"TextList---selectedRow","textNameRow":"TextList---textNameRow","textName":"TextList---textName","highlight":"TextList---highlight","searchResults":"TextList---searchResults","searchResult":"TextList---searchResult","selectedSearchResult":"TextList---selectedSearchResult","searchTotal":"TextList---searchTotal","textListLoader":"TextList---textListLoader","searching":"TextList---searching","loadMore":"TextList---loadMore"};

/***/ }),

/***/ "./app/components/TextList/TextList.js":
/*!*********************************************!*\
  !*** ./app/components/TextList/TextList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-virtualized/dist/es/AutoSizer */ "./node_modules/react-virtualized/dist/es/AutoSizer/index.js");
/* harmony import */ var react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-virtualized/dist/es/CellMeasurer */ "./node_modules/react-virtualized/dist/es/CellMeasurer/index.js");
/* harmony import */ var react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-virtualized/styles.css */ "./node_modules/react-virtualized/styles.css");
/* harmony import */ var react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_virtualized_dist_es_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-virtualized/dist/es/List */ "./node_modules/react-virtualized/dist/es/List/index.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! api */ "./app/api/index.js");
/* harmony import */ var lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/addTibetanShay */ "./app/lib/addTibetanShay.js");
/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TextList.css */ "./app/components/TextList/TextList.css");
/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_TextList_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loader */ "./node_modules/react-loader/lib/react-loader.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _HighlightedString__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HighlightedString */ "./app/components/TextList/HighlightedString.js");
/* harmony import */ var _ResultCount__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ResultCount */ "./app/components/TextList/ResultCount.js");
/* harmony import */ var _LoadMore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LoadMore */ "./app/components/TextList/LoadMore.js");
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





 // only needs to be imported once









var DEFAULT_ROW_HEIGHT = 60;

var TextList = /*#__PURE__*/function (_React$Component) {
  _inherits(TextList, _React$Component);

  var _super = _createSuper(TextList);

  function TextList(props) {
    var _this;

    _classCallCheck(this, TextList);

    _this = _super.call(this, props);
    _this.cache = new react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_3__["CellMeasurerCache"]({
      fixedWidth: true,
      defaultHeight: DEFAULT_ROW_HEIGHT,
      minHeight: DEFAULT_ROW_HEIGHT
    });
    _this.rowRenderer = _this.rowRenderer.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TextList, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.cache.clearAll();
      if (this.list) this.list.forceUpdateGrid();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "rowRenderer",
    value: function rowRenderer(_ref) {
      var _this2 = this;

      var key = _ref.key,
          index = _ref.index,
          parent = _ref.parent,
          style = _ref.style;
      var selectedText = this.props.selectedText;
      var selectedTextId = selectedText ? selectedText.id : -1;
      var selectedSearchResult = this.props.selectedSearchResult;
      var texts = this.props.texts;
      var onSelectedText = this.props.onSelectedText;
      var onSelectedSearchResult = this.props.onSelectedSearchResult;
      var searchTerm = this.props.searchTerm;
      var searchResults = this.props.searchResults;
      var className = _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.textListRow;
      var text = texts[index];

      if (text.id === selectedTextId) {
        className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.selectedRow);
      }

      var name = Object(lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_7__["default"])(text.name);
      var nameHtml = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.textName
      }, name);
      var textSearchResults = [];
      var resultsCount = null;
      var extraRemaining = false;
      var loadingResults = false;

      if (searchTerm.length > 0) {
        nameHtml = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HighlightedString__WEBPACK_IMPORTED_MODULE_10__["default"], {
          string: name,
          stringClass: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.textName,
          highlightClass: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.highlight,
          searchTerm: searchTerm
        });

        if (searchResults.hasOwnProperty(text.id)) {
          textSearchResults = searchResults[text.id].results;
          extraRemaining = searchResults[text.id].extra;
          loadingResults = searchResults[text.id].loading;
          resultsCount = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResultCount__WEBPACK_IMPORTED_MODULE_11__["default"], {
            count: searchResults[text.id].total,
            extra: extraRemaining
          });
        }
      }

      var cache = this.cache;
      var textSearchResultRows = [];

      if (textSearchResults.length > 0) {
        textSearchResultRows = textSearchResults.map(function (result) {
          var isSelected = selectedSearchResult && selectedSearchResult.textId === text.id && selectedSearchResult.start === result[0];
          var className = isSelected ? _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.selectedSearchResult : _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.searchResult;

          if (isSelected) {// TODO: keeps getting rendered when selecting a syllable
            // console.log("got selected result: %o", result);
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: text.id + "_" + result[0],
            onClick: function onClick() {
              onSelectedSearchResult(text, result[0], searchTerm.length, selectedText);
            },
            className: className
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HighlightedString__WEBPACK_IMPORTED_MODULE_10__["default"], {
            string: result[1],
            highlightClass: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.highlight,
            searchTerm: searchTerm
          }));
        });
      }

      var searchText = function searchText() {
        _this2.props.onSearchText(text, searchTerm);
      };

      if (searchResults !== null) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_3__["CellMeasurer"], {
        columnIndex: 0,
        key: key,
        parent: parent,
        rowIndex: index,
        cache: cache
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "listkeys-".concat(key),
        style: style,
        className: className
      }, searchTerm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.textNameRow,
        onClick: function onClick() {
          onSelectedText(texts[index]);
        }
      }, nameHtml, " ", resultsCount), textSearchResults.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.searchResults
      }, textSearchResultRows), extraRemaining && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.loadMore,
        onClick: searchText
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadMore__WEBPACK_IMPORTED_MODULE_12__["default"], {
        loading: loadingResults
      }))));else return null;
    }
  }, {
    key: "findRowHeight",
    value: function findRowHeight(_ref2) {
      var searchTerm = _ref2.searchTerm;
      return searchTerm ? null : 40;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var texts = this.props.texts;
      var rowCount = texts.length;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.textList
      }, this.props.texts && this.props.texts.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_2__["AutoSizer"], null, function (_ref3) {
        var height = _ref3.height,
            width = _ref3.width;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized_dist_es_List__WEBPACK_IMPORTED_MODULE_5__["List"], {
          ref: function ref(list) {
            return _this3.list = list;
          },
          height: height,
          rowCount: rowCount,
          rowHeight: _this3.findRowHeight(_this3.props) || _this3.cache.rowHeight,
          rowRenderer: _this3.rowRenderer,
          width: width,
          overscanRowCount: 1,
          deferredMeasurementCache: _this3.cache
        });
      }) : this.props.searching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.textListLoader
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader__WEBPACK_IMPORTED_MODULE_9___default.a, {
        loaded: !this.props.searching,
        scale: 0.5
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.searching
      }, "Searching\u2026")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "textList"
      }));
    }
  }]);

  return TextList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TextList);

/***/ })

}]);
//# sourceMappingURL=21.parkhang-dev.js.map