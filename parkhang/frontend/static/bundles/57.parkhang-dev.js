(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[57],{

/***/ "./app/components/TextDetail/AnnotationControls.css":
/*!**********************************************************!*\
  !*** ./app/components/TextDetail/AnnotationControls.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","inlineWidth":"280px","annotationControls":"AnnotationControls---annotationControls","annotationContent":"AnnotationControls---annotationContent","subTitle":"AnnotationControls---subTitle","title":"AnnotationControls---title","sectionHeading":"AnnotationControls---sectionHeading","text":"AnnotationControls---text","padding":"AnnotationControls---padding","arrowTop":"AnnotationControls---arrowTop","arrowLeft":"AnnotationControls---arrowLeft","arrowRight":"AnnotationControls---arrowRight","inline":"AnnotationControls---inline","arrow":"AnnotationControls---arrow","arrowDs":"AnnotationControls---arrowDs","nothingSelected":"AnnotationControls---nothingSelected","anonymousMessage":"AnnotationControls---anonymousMessage","noNotes":"AnnotationControls---noNotes","breakButtons":"AnnotationControls---breakButtons"};

/***/ }),

/***/ "./app/components/TextDetail/Button.css":
/*!**********************************************!*\
  !*** ./app/components/TextDetail/Button.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","save":"Button---save","cancel":"Button---cancel","buttonContainer":"Button---buttonContainer"};

/***/ }),

/***/ "./app/components/TextDetail/QuestionsLoading.css":
/*!********************************************************!*\
  !*** ./app/components/TextDetail/QuestionsLoading.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"loading":"QuestionsLoading---loading"};

/***/ }),

/***/ "./app/components/TextDetail/QuestionsLoading.js":
/*!*******************************************************!*\
  !*** ./app/components/TextDetail/QuestionsLoading.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuestionsLoading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _QuestionsLoading_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./QuestionsLoading.css */ "./app/components/TextDetail/QuestionsLoading.css");
/* harmony import */ var _QuestionsLoading_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_QuestionsLoading_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnnotationControls.css */ "./app/components/TextDetail/AnnotationControls.css");
/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Button.css */ "./app/components/TextDetail/Button.css");
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-loader */ "./node_modules/react-loader/lib/react-loader.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_6__);
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









var QuestionsLoading = /*#__PURE__*/function (_React$Component) {
  _inherits(QuestionsLoading, _React$Component);

  var _super = _createSuper(QuestionsLoading);

  function QuestionsLoading() {
    _classCallCheck(this, QuestionsLoading);

    return _super.apply(this, arguments);
  }

  _createClass(QuestionsLoading, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_QuestionsLoading_css__WEBPACK_IMPORTED_MODULE_2___default.a.loading, _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_3___default.a.text)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader__WEBPACK_IMPORTED_MODULE_6___default.a, {
        loaded: false,
        scale: 0.25,
        position: "relative",
        top: "50%",
        left: "50%",
        lines: 9,
        width: 8,
        length: 8,
        radius: 14
      }), "Loading questions...");
    }
  }]);

  return QuestionsLoading;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ })

}]);
//# sourceMappingURL=57.parkhang-dev.js.map