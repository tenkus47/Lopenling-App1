(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[14],{

/***/ "./app/components/TextDetail/AnnotationDetail.css":
/*!********************************************************!*\
  !*** ./app/components/TextDetail/AnnotationDetail.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","annotationDetail":"AnnotationDetail---annotationDetail","active":"AnnotationDetail---active","annotationHeader":"AnnotationDetail---annotationHeader","activeIcon":"AnnotationDetail---activeIcon","editing":"AnnotationDetail---editing","actionButtons":"AnnotationDetail---actionButtons","edit":"AnnotationDetail---edit","editImage":"AnnotationDetail---editImage","save":"AnnotationDetail---save","cancel":"AnnotationDetail---cancel"};

/***/ }),

/***/ "./app/components/TextDetail/AnnotationDetail.js":
/*!*******************************************************!*\
  !*** ./app/components/TextDetail/AnnotationDetail.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnnotationDetail.css */ "./app/components/TextDetail/AnnotationDetail.css");
/* harmony import */ var _AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var images_check_circle_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! images/check_circle.svg */ "./app/images/check_circle.svg");
/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! css/colour.css */ "./app/css/colour.css");
/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(css_colour_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UI_ApplyTooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/ApplyTooltip */ "./app/components/UI/ApplyTooltip.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var MAXIMUM_TEXT_LENGTH = 250;

var AnnotationDetail = function AnnotationDetail(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      imageUrl = _useState2[0],
      setImageUrl = _useState2[1];

  function longest_str_in_array(arra) {
    var max_str = arra[0].length;
    var ans = arra[0].length;

    for (var i = 0; i < arra.length; i++) {
      var maxi = arra[i].length;

      if (maxi > max_str) {
        ans = arra[i].length;
        max_str = maxi;
      }
    }

    return ans;
  }

  function mergeArray(arr) {
    var textCount = arr.length;
    var maxPerLine = 55;

    for (var i = 0; i < Math.ceil(arr.join().length / maxPerLine) + 1; i++) {
      if (arr[i] && arr[i + 1] && arr[i].length < maxPerLine) {
        arr[i] = arr[i] + " " + arr[i + 1];
        arr.splice(i + 1, 1);
        mergeArray(arr);
      } else if (arr[i] && arr[i + 1] && arr[i].length > maxPerLine) {// code to cut selected text should be here
      }
    }

    return arr;
  }

  var desc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "<", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "annotation.delete"
  }), ">");
  var content = props.annotationData.content;

  if (content.trim() !== "") {
    if (content.length > MAXIMUM_TEXT_LENGTH) {
      content = content.substr(0, MAXIMUM_TEXT_LENGTH) + "…";
    } // content variable is the selected trimmed context


    desc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, content);
  }

  var classes = [_AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.annotationDetail];

  if (props.isActive) {
    classes.push(_AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.active);
  }

  var className = classnames__WEBPACK_IMPORTED_MODULE_1___default.a.apply(void 0, classes);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    onClick: props.selectAnnotationHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.annotationHeader
  }, props.isActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.activeIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_check_circle_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      fill: css_colour_css__WEBPACK_IMPORTED_MODULE_5___default.a.activeButton
    },
    width: 15,
    height: 15
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, props.annotationData.name), props.isLoggedIn && props.isActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    style: {
      display: "none"
    },
    className: _AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.edit,
    onClick: props.editAnnotationHandler,
    id: "editBtn"
  })), !props.isWorkingSection && desc);
};

/* harmony default export */ __webpack_exports__["default"] = (AnnotationDetail);

/***/ }),

/***/ "./app/images/check_circle.svg":
/*!*************************************!*\
  !*** ./app/images/check_circle.svg ***!
  \*************************************/
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
});

var SvgCheckCircle = function SvgCheckCircle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _ref, _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgCheckCircle);

/***/ })

}]);
//# sourceMappingURL=14.parkhang-dev.js.map