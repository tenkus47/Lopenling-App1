(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[82],{

/***/ "./app/components/TextDetail/AnnotationDetail.css":
/*!********************************************************!*\
  !*** ./app/components/TextDetail/AnnotationDetail.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","annotationDetail":"AnnotationDetail---annotationDetail","active":"AnnotationDetail---active","annotationHeader":"AnnotationDetail---annotationHeader","activeIcon":"AnnotationDetail---activeIcon","editing":"AnnotationDetail---editing","actionButtons":"AnnotationDetail---actionButtons","edit":"AnnotationDetail---edit","editImage":"AnnotationDetail---editImage","save":"AnnotationDetail---save","cancel":"AnnotationDetail---cancel"};

/***/ }),

/***/ "./app/components/TextDetail/AnnotationDetailEdit.js":
/*!***********************************************************!*\
  !*** ./app/components/TextDetail/AnnotationDetailEdit.js ***!
  \***********************************************************/
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





var AnnotationDetailEdit = function AnnotationDetailEdit(props) {
  var content = props.annotationData.content;
  var classes = [_AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.annotationDetail];
  var textarea = null;

  if (props.isActive) {
    classes.push(_AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.active);
  }

  var auto_grow = function auto_grow(element) {
    textarea.style.height = "5px";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  var className = classnames__WEBPACK_IMPORTED_MODULE_1___default.a.apply(void 0, classes);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, props.annotationData.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.editing
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    defaultValue: content,
    autoFocus: true,
    onInput: auto_grow,
    ref: function ref(ta) {
      return textarea = ta;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.actionButtons
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.save,
    onClick: function onClick() {
      if (textarea) {
        props.saveAnnotationHandler(textarea.value);
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "annotation.save"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.cancel,
    onClick: props.cancelAnnotationHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "annotation.cancel"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (AnnotationDetailEdit);

/***/ })

}]);
//# sourceMappingURL=82.parkhang-dev.js.map