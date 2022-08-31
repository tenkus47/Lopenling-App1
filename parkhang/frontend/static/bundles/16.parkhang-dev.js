(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[16],{

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

/***/ }),

/***/ "./app/components/MediaComponent/DraggableMedia.js":
/*!*********************************************************!*\
  !*** ./app/components/MediaComponent/DraggableMedia.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/build/cjs/cjs.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/Paper/index.js");
/* harmony import */ var react_resizable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-resizable */ "./node_modules/react-resizable/index.js");
/* harmony import */ var react_resizable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_resizable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Video */ "./app/components/MediaComponent/Video.js");
/* harmony import */ var _Audio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Audio */ "./app/components/MediaComponent/Audio.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function PaperComponent(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_draggable__WEBPACK_IMPORTED_MODULE_1___default.a, {
    handle: "#draggable-dialog-title",
    bounds: "parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], props));
}

function DraggableMedia(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      hide = _React$useState2[0],
      setHide = _React$useState2[1];

  var handleClose = function handleClose() {
    props.changeMediaSelection(null);
  };

  var toggleHide = function toggleHide() {
    setHide(function (prev) {
      return !prev;
    });
  };

  if (props.selectedMedia.isImageVisible) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaperComponent, {
    sx: {
      position: "absolute",
      zIndex: 1,
      right: 0
    } // onClose={handleClose}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Resizable-media-div"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      cursor: "move",
      paddingInline: 20,
      paddingTop: 10,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    id: "draggable-dialog-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, props.selectedMedia.isVideoVisible && "VIDEO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, props.selectedMedia.isAudioVisible && "AUDIO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "buttons-hide-close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
    onClick: toggleHide,
    disableRipple: true
  }, hide ? "-" : "+"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_8__["IconButton"], {
    onClick: handleClose,
    disableRipple: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_2___default.a, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.selectedMedia.isVideoVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Video__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, props, {
    open: hide,
    setOpen: setHide
  })), props.selectedMedia.isAudioVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Audio__WEBPACK_IMPORTED_MODULE_6__["default"], {
    open: hide,
    setOpen: setHide
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (DraggableMedia);

/***/ }),

/***/ "./app/components/MediaComponent/Video.js":
/*!************************************************!*\
  !*** ./app/components/MediaComponent/Video.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/index.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function toHMS(seconds) {
  var date = new Date(null);
  date.setSeconds(seconds);
  return date.toISOString().substr(11, 8);
}

function toSec() {
  var hms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var a = hms.split(":"); // split it at the colons
  // minutes are worth 60 seconds. Hours are worth 60 minutes.

  var seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
  return seconds;
}

function calTimeToSeek(maxValue, currentTime) {
  var i = toSec(currentTime) / maxValue;
  return parseFloat(i);
}

function getClosestNumber(arr, d) {
  return arr.reduce(function (a, b) {
    return b <= d && a < b ? b : a;
  }, 0);
}

function Video(props) {
  var _props$videoData, _props$videoData$sour, _props$videoData2;

  var textIdfromAlignment = props.alignmentData.text;
  var sourceId = props === null || props === void 0 ? void 0 : (_props$videoData = props.videoData) === null || _props$videoData === void 0 ? void 0 : (_props$videoData$sour = _props$videoData.source) === null || _props$videoData$sour === void 0 ? void 0 : _props$videoData$sour.text;
  var VideoData = (props === null || props === void 0 ? void 0 : (_props$videoData2 = props.videoData) === null || _props$videoData2 === void 0 ? void 0 : _props$videoData2.alignment) || [];
  var url = "https://www.youtube.com/watch?v=2MMM_ggekfE";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      interval = _useState2[0],
      setInterval = _useState2[1];

  var VideoIdList = []; // const syncIdOnScroll = props.syncIdOnScroll;

  var syncIdOnClick = props.syncIdOnClick;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    played: 0,
    duration: 0,
    playing: true
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      state = _useState4[0],
      setState = _useState4[1];

  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(VideoData)) {
    VideoIdList = VideoData.map(function (l) {
      return parseInt(l.source_segment.start);
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (textIdfromAlignment === props.selectedText.id) {
      //     let intersection = syncIdOnScroll.filter(element => VideoIdList.includes(element));
      //     newList= VideoData.filter(d=>d.source_segment===intersection[0]);
      //     jumpToTime(newList[0]?.target_segment.start)
      var ClickId = syncIdOnClick;
      var closestID = getClosestNumber(VideoIdList, ClickId);
      var data = VideoData.find(function (l) {
        return l.source_segment.start === closestID.toString();
      });

      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(data)) {
        jumpToTime(data.target_segment.start);
      }
    }
  }, [syncIdOnClick]);
  var changeTextBackground = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var current = interval;

    if (textIdfromAlignment === props.selectedText.id) {
      for (var i = current.start; i < current.end; i++) {
        var currentIds = document.getElementById("s_".concat(i));

        if (currentIds) {
          currentIds.style.fontWeight = "bold";
        }
      }
    }
  }, [interval.start]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var timer = setTimeout(function () {
      return changeTextBackground();
    }, 800);
    var current = interval;

    if (interval.start) {
      props.changeScrollToId({
        id: current.start || null,
        from: "video"
      });
    }

    return function () {
      clearTimeout(timer);

      for (var i = current.start; i < current.end; i++) {
        var currentIds = document.getElementById("s_".concat(i));

        if (currentIds) {
          currentIds.style.fontWeight = "normal";
        }
      }
    };
  }, [interval.start]);
  var videoRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var jumpToTime = function jumpToTime(time) {
    var newData = calTimeToSeek(state.duration, time);
    videoRef.current.seekTo(parseFloat(newData));
  };

  var handleProgress = function handleProgress(e) {
    var played = e.playedSeconds;
    var Interval = VideoData.find(function (time) {
      return toSec(time.target_segment.start) < played && toSec(time.target_segment.end) > played;
    });

    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(Interval)) {
      var source_segment = Interval.source_segment;
      changeTextBackground();
      setInterval(_objectSpread({}, source_segment));
    }
  };

  if (VideoData.length === 0) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
  if (sourceId !== props.selectedText.id) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
    "in": props.open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_2___default.a, {
    url: url,
    style: {
      maxWidth: "100%"
    },
    ref: videoRef,
    controls: true,
    onDuration: function onDuration(duration) {
      return setState(_objectSpread(_objectSpread({}, state), {}, {
        duration: duration
      }));
    },
    light: true,
    playing: true,
    onPlay: function onPlay() {
      return setState(_objectSpread(_objectSpread({}, state), {}, {
        playing: true
      }));
    },
    onPause: function onPause() {
      return setState(_objectSpread(_objectSpread({}, state), {}, {
        playing: false
      }));
    },
    onProgress: handleProgress,
    onError: function onError() {
      return console.log("error in media sec");
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ })

}]);
//# sourceMappingURL=16.parkhang-dev.js.map