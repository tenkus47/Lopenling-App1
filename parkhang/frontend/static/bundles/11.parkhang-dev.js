(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[11],{

/***/ "./app/components/UI/Accessory.css":
/*!*****************************************!*\
  !*** ./app/components/UI/Accessory.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","accessory":"Accessory---accessory"};

/***/ }),

/***/ "./app/components/UI/Accessory.js":
/*!****************************************!*\
  !*** ./app/components/UI/Accessory.js ***!
  \****************************************/
/*! exports provided: accessoryTypes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accessoryTypes", function() { return accessoryTypes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Accessory_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accessory.css */ "./app/components/UI/Accessory.css");
/* harmony import */ var _Accessory_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Accessory_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css/colour.css */ "./app/css/colour.css");
/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(css_colour_css__WEBPACK_IMPORTED_MODULE_2__);



var accessoryTypes = {
  ADD: "+",
  DELETE: "\xD7"
};

var Accessory = function Accessory(props) {
  var style = {};
  style.backgroundColor = props.backgroundColor || "";
  style.color = props.color || "#fff";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Accessory_css__WEBPACK_IMPORTED_MODULE_1___default.a.accessory,
    title: props.title,
    onClick: props.onClick,
    style: style
  }, accessoryTypes[props.type]);
};

/* harmony default export */ __webpack_exports__["default"] = (Accessory);

/***/ }),

/***/ "./app/components/UI/ApplyTooltip.js":
/*!*******************************************!*\
  !*** ./app/components/UI/ApplyTooltip.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");




function ApplyTooltip(_ref) {
  var children = _ref.children,
      tooltipName = _ref.tooltipName,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? null : _ref$format,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$shortcut = _ref.shortcut,
      shortcut = _ref$shortcut === void 0 ? "" : _ref$shortcut,
      _ref$on = _ref.on,
      on = _ref$on === void 0 ? false : _ref$on;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-tip": true,
    "data-for": tooltipName,
    className: className,
    style: {
      width: "100%"
    }
  }, !on ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "top",
    followCursor: true,
    title: format ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: format
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, tooltipName, " [".concat(shortcut, "]"))
  }, children) : children));
}

/* harmony default export */ __webpack_exports__["default"] = (ApplyTooltip);

/***/ }),

/***/ "./app/components/UI/Button.css":
/*!**************************************!*\
  !*** ./app/components/UI/Button.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"button":"Button---button","buttonNoBezel":"Button---buttonNoBezel","active":"Button---active","leftAlign":"Button---leftAlign","title":"Button---title","icon":"Button---icon"};

/***/ }),

/***/ "./app/components/UI/Button.js":
/*!*************************************!*\
  !*** ./app/components/UI/Button.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css/colour.css */ "./app/css/colour.css");
/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(css_colour_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button.css */ "./app/components/UI/Button.css");
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Accessory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Accessory */ "./app/components/UI/Accessory.js");
/* harmony import */ var _ApplyTooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplyTooltip */ "./app/components/UI/ApplyTooltip.js");
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








var Button = /*#__PURE__*/function (_React$Component) {
  _inherits(Button, _React$Component);

  var _super = _createSuper(Button);

  function Button() {
    _classCallCheck(this, Button);

    return _super.apply(this, arguments);
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      var color = this.props.color || "#ffffff";
      var bgColour = this.props.backgroundColor || css_colour_css__WEBPACK_IMPORTED_MODULE_2___default.a.mainTint;
      var fontSize = this.props.fontSize || "14px";
      var classNames = this.props.noBezel ? [_Button_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonNoBezel] : [_Button_css__WEBPACK_IMPORTED_MODULE_3___default.a.button];
      var tooltipTitle = this.props.tooltipTitle || "";
      if (this.props.isActive) classNames.push(_Button_css__WEBPACK_IMPORTED_MODULE_3___default.a.active);
      var className = classnames__WEBPACK_IMPORTED_MODULE_1___default.a.apply(void 0, classNames);
      var shortcut = this.props.shortcut || "";
      var style = {
        fontSize: fontSize,
        color: color,
        backgroundColor: bgColour
      };
      if (this.props.align) style.textAlign = this.props.align;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ApplyTooltip__WEBPACK_IMPORTED_MODULE_5__["default"], {
        tooltipName: tooltipTitle,
        shortcut: shortcut,
        on: this.props.disabled
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        style: style,
        className: className,
        onClick: this.props.onClick,
        disabled: this.props.disabled
      }, this.props.icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Button_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon
      }, this.props.icon), this.props.title && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _Button_css__WEBPACK_IMPORTED_MODULE_3___default.a.title
      }, this.props.title)));
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./app/css/colour.css":
/*!****************************!*\
  !*** ./app/css/colour.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b"};

/***/ })

}]);
//# sourceMappingURL=11.parkhang-dev.js.map