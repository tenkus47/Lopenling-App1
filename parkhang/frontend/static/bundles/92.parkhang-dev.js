(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[92],{

/***/ "./app/components/UI/ShareButton.js":
/*!******************************************!*\
  !*** ./app/components/UI/ShareButton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_share__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-share */ "./node_modules/react-share/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _Sharebutton_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sharebutton.css */ "./app/components/UI/Sharebutton.css");
/* harmony import */ var _Sharebutton_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Sharebutton_css__WEBPACK_IMPORTED_MODULE_3__);





var ShareButton = function ShareButton(_ref) {
  var _props$annotationData;

  var props = _ref.props;
  var content = props === null || props === void 0 ? void 0 : (_props$annotationData = props.annotationData) === null || _props$annotationData === void 0 ? void 0 : _props$annotationData.content;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Sharebutton_css__WEBPACK_IMPORTED_MODULE_3___default.a.shareContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Sharebutton_css__WEBPACK_IMPORTED_MODULE_3___default.a.shareButton
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "annotation.share"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_1__["FacebookShareButton"], {
    className: _Sharebutton_css__WEBPACK_IMPORTED_MODULE_3___default.a.facebookButton,
    id: "sharebutton",
    url: "https://parkhang.lopenling.org".concat(window.location.pathname),
    quote: content,
    hashtag: "#openPecha"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_1__["FacebookIcon"], {
    size: 16,
    round: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_1__["WhatsappShareButton"], {
    className: _Sharebutton_css__WEBPACK_IMPORTED_MODULE_3___default.a.whatsappButton,
    onClick: function onClick() {
      return console.log("https://parkhang.lopenling.org".concat(window.location.pathname));
    },
    title: "Parkhang",
    url: "https://parkhang.lopenling.org".concat(window.location.pathname)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_share__WEBPACK_IMPORTED_MODULE_1__["WhatsappIcon"], {
    size: 16,
    round: true
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ShareButton);

/***/ }),

/***/ "./app/components/UI/Sharebutton.css":
/*!*******************************************!*\
  !*** ./app/components/UI/Sharebutton.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"shareContainer":"Sharebutton---shareContainer","shareButton":"Sharebutton---shareButton","facebookButton":"Sharebutton---facebookButton","whatsappButton":"Sharebutton---whatsappButton"};

/***/ })

}]);
//# sourceMappingURL=92.parkhang-dev.js.map