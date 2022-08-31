(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[13],{

/***/ "./app/components/TextDetail/AnnotationControlsHeader.css":
/*!****************************************************************!*\
  !*** ./app/components/TextDetail/AnnotationControlsHeader.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","header":"AnnotationControlsHeader---header","Anotation_closeBtn":"AnnotationControlsHeader---Anotation_closeBtn","edit":"AnnotationControlsHeader---edit"};

/***/ }),

/***/ "./app/components/TextDetail/AnnotationControlsHeader.js":
/*!***************************************************************!*\
  !*** ./app/components/TextDetail/AnnotationControlsHeader.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_UI_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/UI/Button */ "./app/components/UI/Button.js");
/* harmony import */ var _AnnotationControlsHeader_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnnotationControlsHeader.css */ "./app/components/TextDetail/AnnotationControlsHeader.css");
/* harmony import */ var _AnnotationControlsHeader_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AnnotationControlsHeader_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var images_page_break_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! images/page_break_icon.svg */ "./app/images/page_break_icon.svg");
/* harmony import */ var images_note_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! images/note.svg */ "./app/images/note.svg");
/* harmony import */ var images_question_answer_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! images/question_answer.svg */ "./app/images/question_answer.svg");
/* harmony import */ var images_PencilAltIcon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! images/PencilAltIcon.svg */ "./app/images/PencilAltIcon.svg");
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








var ICON_SIZE = 15;

var AnnotationControlsHeader = /*#__PURE__*/function (_React$Component) {
  _inherits(AnnotationControlsHeader, _React$Component);

  var _super = _createSuper(AnnotationControlsHeader);

  // keyHandler;
  function AnnotationControlsHeader() {
    _classCallCheck(this, AnnotationControlsHeader);

    return _super.call(this);
  } // componentDidMount() {
  //     this.keyHandler = (e) => {
  //         if (e.key === "e" || e.key === "E") {
  //             this.props.editAnnotationHandler();
  //         }
  //         if (e.key === "q" || e.key === "Q") {
  //             this.props.addQuestion();
  //         }
  //         if (e.key === "l" || e.key === "L") {
  //             this.props.addLineBreak();
  //         }
  //         if (e.key === "n" || e.key === "N") {
  //             this.props.addNote();
  //         }
  //         if (e.key === "p" || e.key === "P") {
  //             this.props.addPageBreak();
  //         }
  //     };
  //     document.addEventListener("keyup", this.keyHandler, { once: true });
  // }
  // componentWillUnmount() {
  //     document.removeEventListener("keyup", this.keyHandler);
  // }


  _createClass(AnnotationControlsHeader, [{
    key: "render",
    value: function render() {
      var allowPageBreak = this.props.addPageBreak != null;
      var allowLineBreak = this.props.addLineBreak != null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _AnnotationControlsHeader_css__WEBPACK_IMPORTED_MODULE_2___default.a.header
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        noBezel: true,
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_note_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
          width: ICON_SIZE,
          height: ICON_SIZE,
          style: {
            fill: "#fff"
          }
        }),
        backgroundColor: "transparent" // accessoryType={this.props.addNote ? "ADD" : null}
        ,
        onClick: this.props.addNote,
        disabled: this.props.addNote ? false : true,
        align: "center",
        tooltipTitle: "Note",
        shortcut: "n"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        noBezel: true,
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_question_answer_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
          width: ICON_SIZE,
          height: ICON_SIZE,
          style: {
            fill: "#fff"
          }
        }) // accessoryType={this.props.addQuestion ? "ADD" : null}
        ,
        onClick: this.props.addQuestion,
        disabled: this.props.addQuestion ? false : true,
        align: "left",
        backgroundColor: "transparent",
        tooltipTitle: "Question",
        shortcut: "q"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        noBezel: true,
        color: "#fff",
        fontSize: "".concat(ICON_SIZE, "px"),
        icon: "\xB6" // accessoryType={allowLineBreak ? "ADD" : null}
        ,
        onClick: this.props.addLineBreak,
        disabled: !allowLineBreak,
        align: "left",
        backgroundColor: "transparent",
        tooltipTitle: "LineBreak",
        shortcut: "l"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        noBezel: true,
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_page_break_icon_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
          width: ICON_SIZE,
          height: ICON_SIZE,
          style: {
            fill: "#fff"
          }
        }) // accessoryType={allowPageBreak ? "ADD" : null}
        ,
        onClick: this.props.addPageBreak,
        disabled: !allowPageBreak,
        align: "left",
        backgroundColor: "transparent",
        tooltipTitle: "PageBreak",
        shortcut: "p"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onClick: this.props.editAnnotationHandler // className={styles.edit}
        ,
        backgroundColor: "transparent",
        noBezel: true,
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_PencilAltIcon_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
          width: ICON_SIZE,
          height: ICON_SIZE,
          style: {
            fill: "#fff"
          }
        }),
        tooltipTitle: "Edit",
        shortcut: "e"
      })));
    }
  }]);

  return AnnotationControlsHeader;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AnnotationControlsHeader);

/***/ }),

/***/ "./app/images/PencilAltIcon.svg":
/*!**************************************!*\
  !*** ./app/images/PencilAltIcon.svg ***!
  \**************************************/
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
  d: "M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
});

var SvgPencilAltIcon = function SvgPencilAltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 512 512"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgPencilAltIcon);

/***/ }),

/***/ "./app/images/note.svg":
/*!*****************************!*\
  !*** ./app/images/note.svg ***!
  \*****************************/
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
  d: "M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"
});

var _ref2 =
/*#__PURE__*/

/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0V0z"
});

var SvgNote = function SvgNote(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _ref, _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgNote);

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

/***/ }),

/***/ "./app/images/question_answer.svg":
/*!****************************************!*\
  !*** ./app/images/question_answer.svg ***!
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
  d: "M0 0h24v24H0z",
  fill: "none"
});

var _ref2 =
/*#__PURE__*/

/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"
});

var SvgQuestionAnswer = function SvgQuestionAnswer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, props), _ref, _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgQuestionAnswer);

/***/ })

}]);
//# sourceMappingURL=13.parkhang-dev.js.map