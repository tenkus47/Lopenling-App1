(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[110],{

/***/ "./app/components/MediaComponent/Audio.js":
/*!************************************************!*\
  !*** ./app/components/MediaComponent/Audio.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_howler_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-howler-player */ "./node_modules/react-howler-player/build/index.es.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");





function Audio(props) {
  var theme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  var url = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  var playerRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);

  var handleSeek = function handleSeek(e) {
    console.log(e);
  };

  var onPlayerReady = function onPlayerReady(data) {
    console.log(data);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__["Collapse"], {
    "in": props.open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_howler_player__WEBPACK_IMPORTED_MODULE_2__["default"], {
    profile: "top_progress",
    src: [url],
    isDark: theme.palette.mode === "dark" ? true : false,
    onLoad: onPlayerReady,
    speedPanel: "bottom",
    ref: playerRef,
    onPlay: handleSeek
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Audio);

/***/ })

}]);
//# sourceMappingURL=110.parkhang-dev.js.map