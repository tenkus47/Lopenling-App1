(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[36],{

/***/ "./app/components/TextDetail/ExportControl.js":
/*!****************************************************!*\
  !*** ./app/components/TextDetail/ExportControl.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_UI_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/Button */ "./app/components/UI/Button.js");
/* harmony import */ var images_export_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! images/export.svg */ "./app/images/export.svg");
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






var ExportControl = /*#__PURE__*/function (_React$Component) {
  _inherits(ExportControl, _React$Component);

  var _super = _createSuper(ExportControl);

  function ExportControl() {
    _classCallCheck(this, ExportControl);

    return _super.apply(this, arguments);
  }

  _createClass(ExportControl, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_export_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
          style: {
            fill: "#fff"
          },
          width: 15,
          height: 15
        }),
        title: this.props.intl.formatMessage({
          id: "header.export"
        }),
        onClick: this.props.onClick
      }));
    }
  }]);

  return ExportControl;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(ExportControl));

/***/ }),

/***/ "./app/components/TextDetail/FontSize.css":
/*!************************************************!*\
  !*** ./app/components/TextDetail/FontSize.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"fontSize":"FontSize---fontSize"};

/***/ }),

/***/ "./app/components/TextDetail/FontSize.js":
/*!***********************************************!*\
  !*** ./app/components/TextDetail/FontSize.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FontSize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FontSize.css */ "./app/components/TextDetail/FontSize.css");
/* harmony import */ var _FontSize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FontSize_css__WEBPACK_IMPORTED_MODULE_1__);



var FontSize = function FontSize(props) {
  var minimumSize = 14;
  var maximumSize = 48;
  var options = new Array(maximumSize - minimumSize).fill().map(function (value, index) {
    var size = minimumSize + index;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: size,
      key: size
    }, size);
  });

  var onChange = function onChange(e) {
    var target = event.target;
    var fontSize = Number(target.value);
    props.onChange(fontSize);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _FontSize_css__WEBPACK_IMPORTED_MODULE_1___default.a.fontSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "fontSize"
  }, "Font Size"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    value: props.fontSize,
    onChange: onChange
  }, options));
};

/* harmony default export */ __webpack_exports__["default"] = (FontSize);

/***/ }),

/***/ "./app/components/TextDetail/ImageToggle.css":
/*!***************************************************!*\
  !*** ./app/components/TextDetail/ImageToggle.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"imageToggle":"ImageToggle---imageToggle"};

/***/ }),

/***/ "./app/components/TextDetail/ImageToggle.js":
/*!**************************************************!*\
  !*** ./app/components/TextDetail/ImageToggle.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageToggle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageToggle.css */ "./app/components/TextDetail/ImageToggle.css");
/* harmony import */ var _ImageToggle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ImageToggle_css__WEBPACK_IMPORTED_MODULE_1__);



var ImageToggle = function ImageToggle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _ImageToggle_css__WEBPACK_IMPORTED_MODULE_1___default.a.imageToggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "showPageImages"
  }, "Show Images"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: "showPageImages",
    type: "checkbox",
    checked: props.showImages,
    onChange: function onChange(e) {
      var target = event.target;
      var checked = target.checked;
      props.onChange(checked);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageToggle);

/***/ }),

/***/ "./app/components/TextDetail/TabBar.css":
/*!**********************************************!*\
  !*** ./app/components/TextDetail/TabBar.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","tabBar":"TabBar---tabBar","tab":"TabBar---tab","selected":"TabBar---selected"};

/***/ }),

/***/ "./app/components/TextDetail/TabBar.js":
/*!*********************************************!*\
  !*** ./app/components/TextDetail/TabBar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TabBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _TabBar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabBar.css */ "./app/components/TextDetail/TabBar.css");
/* harmony import */ var _TabBar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TabBar_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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







var TabBar = /*#__PURE__*/function (_React$Component) {
  _inherits(TabBar, _React$Component);

  var _super = _createSuper(TabBar);

  function TabBar(props) {
    _classCallCheck(this, TabBar);

    return _super.call(this, props);
  }

  _createClass(TabBar, [{
    key: "render",
    value: function render() {
      var _this = this;

      var tabs = [];

      if (this.props.witnesses) {
        var witnesses = this.props.witnesses.map(function (witness) {
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

        var _iterator = _createForOfIteratorHelper(witnesses),
            _step;

        try {
          var _loop = function _loop() {
            var witness = _step.value;
            var classes = [_TabBar_css__WEBPACK_IMPORTED_MODULE_3___default.a.tab];

            if (witness === _this.props.activeWitness) {
              classes.push(_TabBar_css__WEBPACK_IMPORTED_MODULE_3___default.a.selected);
            }

            var tabName = witness.source.name;

            if (witness.isWorking) {
              tabName = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
                id: "annotation.workingEdition"
              });
            }

            tabs.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_1___default.a.apply(void 0, classes),
              onClick: function onClick() {
                _this.props.onSelectedWitness(witness);
              },
              key: witness.id
            }, tabName));
          };

          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _TabBar_css__WEBPACK_IMPORTED_MODULE_3___default.a.tabBar
      }, tabs);
    }
  }]);

  return TabBar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./app/components/TextDetail/TextHeading.css":
/*!***************************************************!*\
  !*** ./app/components/TextDetail/TextHeading.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","headingContainer":"TextHeading---headingContainer","textHeading":"TextHeading---textHeading","topRow":"TextHeading---topRow","textHeadingloader":"TextHeading---textHeadingloader","controls":"TextHeading---controls"};

/***/ }),

/***/ "./app/components/TextDetail/TextHeading.js":
/*!**************************************************!*\
  !*** ./app/components/TextDetail/TextHeading.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/addTibetanShay */ "./app/lib/addTibetanShay.js");
/* harmony import */ var _TextHeading_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextHeading.css */ "./app/components/TextDetail/TextHeading.css");
/* harmony import */ var _TextHeading_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TextHeading_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TabBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TabBar */ "./app/components/TextDetail/TabBar.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var _ExportControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ExportControl */ "./app/components/TextDetail/ExportControl.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loader */ "./node_modules/react-loader/lib/react-loader.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ImageToggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ImageToggle */ "./app/components/TextDetail/ImageToggle.js");
/* harmony import */ var _FontSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FontSize */ "./app/components/TextDetail/FontSize.js");










var TextHeading = function TextHeading(props) {
  var name = "";

  if (props.selectedText && props.selectedText.name) {
    name = Object(lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_1__["default"])(props.selectedText.name);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _TextHeading_css__WEBPACK_IMPORTED_MODULE_2___default.a.headingContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _TextHeading_css__WEBPACK_IMPORTED_MODULE_2___default.a.topRow
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TabBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    witnesses: props.witnesses,
    activeWitness: props.selectedWitness,
    onSelectedWitness: props.onSelectedWitness
  }), props.selectedWitness && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _TextHeading_css__WEBPACK_IMPORTED_MODULE_2___default.a.controls
  }, !props.selectedWitness.isWorking && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ImageToggle__WEBPACK_IMPORTED_MODULE_7__["default"], {
    showImages: props.showPageImages,
    onChange: props.onToggledPageImages
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FontSize__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fontSize: props.textFontSize,
    onChange: props.onChangedFontSize
  }), !props.exportingWitness && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ExportControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: props.onExport
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (TextHeading);

/***/ }),

/***/ "./app/images/export.svg":
/*!*******************************!*\
  !*** ./app/images/export.svg ***!
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
  d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"
});

var _ref2 =
/*#__PURE__*/

/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
});

var SvgExport = function SvgExport(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _ref, _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgExport);

/***/ })

}]);
//# sourceMappingURL=36.parkhang-dev.js.map