(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[29],{

/***/ "./app/components/Editors/TextSheet.js":
/*!*********************************************!*\
  !*** ./app/components/Editors/TextSheet.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var components_MediaComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/MediaComponent */ "./app/components/MediaComponent/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-batched-actions */ "./node_modules/redux-batched-actions/lib/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_batched_actions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loader */ "./node_modules/react-loader/lib/react-loader.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/ErrorBoundary/ErrorBoundary */ "./app/components/ErrorBoundary/ErrorBoundary.js");
/* harmony import */ var react_split_pane__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-split-pane */ "./node_modules/react-split-pane/dist/index.esm.js");
/* harmony import */ var _resizerStyle_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resizerStyle.css */ "./app/components/Editors/resizerStyle.css");
/* harmony import */ var _resizerStyle_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_resizerStyle_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _MediaComponent_DraggableMedia__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../MediaComponent/DraggableMedia */ "./app/components/MediaComponent/DraggableMedia.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var TextDetailContainer2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(28), __webpack_require__.e(18), __webpack_require__.e(24), __webpack_require__.e(25), __webpack_require__.e(27), __webpack_require__.e(32), __webpack_require__.e(34)]).then(__webpack_require__.bind(null, /*! components/TextDetail2/TextDetailContainer */ "./app/components/TextDetail2/TextDetailContainer.js"));
});
var TextDetailContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(3), __webpack_require__.e(5), __webpack_require__.e(7), __webpack_require__.e(12), __webpack_require__.e(28), __webpack_require__.e(4), __webpack_require__.e(9), __webpack_require__.e(13), __webpack_require__.e(14), __webpack_require__.e(17), __webpack_require__.e(20), __webpack_require__.e(19), __webpack_require__.e(23), __webpack_require__.e(26), __webpack_require__.e(31), __webpack_require__.e(44)]).then(__webpack_require__.bind(null, /*! components/TextDetail/TextDetailContainer */ "./app/components/TextDetail/TextDetailContainer.js"));
});

function TextSheet(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      landScape = _useState2[0],
      setLandScape = _useState2[1];

  var editorRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var handleResize = function handleResize(e) {
    var width = editorRef.current.clientWidth;
    var height = editorRef.current.clientHeight;

    if (width > height) {
      setLandScape(true);
    } else {
      setLandScape(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    handleResize();
    window.addEventListener("resize", handleResize);
    return function () {
      return window.removeEventListener("resize", handleResize);
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: editorRef,
    style: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_split_pane__WEBPACK_IMPORTED_MODULE_9__["default"], {
    split: landScape ? "vertical" : "horizontal",
    size: props.isSecondWindowOpen ? "50%" : "100%",
    resizerClassName: classnames__WEBPACK_IMPORTED_MODULE_11___default()(_resizerStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.Resizer, _defineProperty({}, _resizerStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.vertical, landScape), _defineProperty({}, _resizerStyle_css__WEBPACK_IMPORTED_MODULE_10___default.a.horizontal, !landScape)),
    onDragFinished: function onDragFinished(width) {
      if (width > 0) window.dispatchEvent(new Event("resize"));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextDetailContainer, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_8__["default"], null, props.isSecondWindowOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextDetailContainer2, null))), props.Media.isPanelVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_MediaComponent__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
}

var mapStateToProps = function mapStateToProps(state) {
  var isSecondWindowOpen = reducers__WEBPACK_IMPORTED_MODULE_2__["isSecondWindowOpen"](state);
  var Media = reducers__WEBPACK_IMPORTED_MODULE_2__["getMediaData"](state);
  return {
    isSecondWindowOpen: isSecondWindowOpen,
    Media: Media
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  var dispatch = dispatchProps.dispatch;
  return _objectSpread(_objectSpread({}, ownProps), stateProps);
};

var TextSheetContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null, mergeProps)(TextSheet);
/* harmony default export */ __webpack_exports__["default"] = (TextSheetContainer);

/***/ }),

/***/ "./app/components/Editors/resizerStyle.css":
/*!*************************************************!*\
  !*** ./app/components/Editors/resizerStyle.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Resizer":"resizerStyle---Resizer","horizontal":"resizerStyle---horizontal","vertical":"resizerStyle---vertical","disabled":"resizerStyle---disabled"};

/***/ }),

/***/ "./app/components/ErrorBoundary/ErrorBoundary.js":
/*!*******************************************************!*\
  !*** ./app/components/ErrorBoundary/ErrorBoundary.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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



var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    _this = _super.call(this, props);
    _this.state = {
      hasError: false
    };
    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
      console.log(error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Something went wrong.");
      }

      return this.props.children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ErrorBoundary);

/***/ }),

/***/ "./app/components/MediaComponent/MediaContainer.js":
/*!*********************************************************!*\
  !*** ./app/components/MediaComponent/MediaContainer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var _MediaOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MediaOptions */ "./app/components/MediaComponent/MediaOptions.js");
/* harmony import */ var _DraggableMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DraggableMedia */ "./app/components/MediaComponent/DraggableMedia.js");







var mapStateToProps = function mapStateToProps(state) {
  var scrollToId = reducers__WEBPACK_IMPORTED_MODULE_2__["getScrollToId"](state);
  var syncIdOnClick = reducers__WEBPACK_IMPORTED_MODULE_2__["getSyncIdOnClick"](state);
  var imageData = reducers__WEBPACK_IMPORTED_MODULE_2__["getImageData"](state);
  var videoData = reducers__WEBPACK_IMPORTED_MODULE_2__["getVideoData"](state);
  var Media = reducers__WEBPACK_IMPORTED_MODULE_2__["getMediaData"](state);
  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_2__["getSelectedText"](state);
  var isImagePortrait = reducers__WEBPACK_IMPORTED_MODULE_2__["isImagePortrait"](state);
  var alignmentData = reducers__WEBPACK_IMPORTED_MODULE_2__["getAlignment"](state);
  var witness = reducers__WEBPACK_IMPORTED_MODULE_2__["getSelectedTextWitnessId"](state, selectedText.id);
  var witnesses = reducers__WEBPACK_IMPORTED_MODULE_2__["getTextWitnesses"](state, selectedText.id);
  var ImageVersion = reducers__WEBPACK_IMPORTED_MODULE_2__["getSelectedImageVersion"](state);
  var selectedImage = reducers__WEBPACK_IMPORTED_MODULE_2__["getSelectedImage"](state);
  var imageScrollId = reducers__WEBPACK_IMPORTED_MODULE_2__["getImageScrollId"](state);
  var imageAlignmentById = reducers__WEBPACK_IMPORTED_MODULE_2__["getImageAlignmentById"](state); //  const selectedSegmentId=reducers.getSelectedSegmentId(state);

  return {
    scrollToId: scrollToId,
    syncIdOnClick: syncIdOnClick,
    imageData: imageData,
    videoData: videoData,
    selectedMedia: Media,
    selectedText: selectedText,
    isImagePortrait: isImagePortrait,
    // selectedSegmentId,
    alignmentData: alignmentData,
    witness: witness,
    witnesses: witnesses,
    ImageVersion: ImageVersion,
    selectedImage: selectedImage,
    imageScrollId: imageScrollId,
    imageAlignmentById: imageAlignmentById
  };
};

var matchDispatchToProps = function matchDispatchToProps(dispatch) {
  var toggleImage = function toggleImage(data) {
    return dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changedShowPageImages"](data));
  };

  var changeMediaSelection = function changeMediaSelection(data) {
    return dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["mediaSelection"](data));
  };

  var changeIsImagePortrait = function changeIsImagePortrait(payload) {
    return dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["setIsImagePortrait"](payload));
  };

  var changeImageVersion = function changeImageVersion(imageVersionId) {
    return dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["selectImageVersion"](imageVersionId));
  };

  var changeSelectedImage = function changeSelectedImage(payload) {
    return dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["selectImage"](payload));
  };

  var onSelectedSearchResult = function onSelectedSearchResult(text, start, length, selectedText) {
    if (!selectedText || selectedText.id !== text.id) {
      dispatch(batchActions([actions__WEBPACK_IMPORTED_MODULE_3__["selectedSearchResult"](text.id, start, length), actions__WEBPACK_IMPORTED_MODULE_3__["selectedText"](text)]));
    } else {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["selectedSearchResult"](text.id, start, length));
    }
  };

  return {
    toggleImage: toggleImage,
    onSelectedSearchResult: onSelectedSearchResult,
    changeMediaSelection: changeMediaSelection,
    changeIsImagePortrait: changeIsImagePortrait,
    changeImageVersion: changeImageVersion,
    changeSelectedImage: changeSelectedImage,
    changeSelectedRange: function changeSelectedRange(payload) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changeSelectedRange"](payload));
    },
    changeScrollToId: function changeScrollToId(payload) {
      return dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changeScrollToId"](payload));
    }
  };
};

var MediaContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, matchDispatchToProps)(_DraggableMedia__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (MediaContainer);

/***/ }),

/***/ "./app/components/MediaComponent/MediaOptions.css":
/*!********************************************************!*\
  !*** ./app/components/MediaComponent/MediaOptions.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","MediaOption":"MediaOptions---MediaOption","header":"MediaOptions---header","closeBtn":"MediaOptions---closeBtn"};

/***/ }),

/***/ "./app/components/MediaComponent/MediaOptions.js":
/*!*******************************************************!*\
  !*** ./app/components/MediaComponent/MediaOptions.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image */ "./app/components/MediaComponent/Image.js");
/* harmony import */ var _Audio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Audio */ "./app/components/MediaComponent/Audio.js");
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Video */ "./app/components/MediaComponent/Video.js");
/* harmony import */ var _MediaOptions_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MediaOptions.css */ "./app/components/MediaComponent/MediaOptions.css");
/* harmony import */ var _MediaOptions_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MediaOptions_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");








function MediaOptions(props) {
  // if (props.selectedMedia.isImageVisible)
  //     return <ImageComponent {...props} />;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    className: _MediaOptions_css__WEBPACK_IMPORTED_MODULE_4___default.a.MediaOption,
    sx: {
      boxShadow: 2,
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    className: _MediaOptions_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    sx: {
      bgcolor: "heading.main",
      color: "text.primary"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, props.selectedMedia.isVideoVisible && "VIDEO", props.selectedMedia.isAudioVisible && "AUDIO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    className: _MediaOptions_css__WEBPACK_IMPORTED_MODULE_4___default.a.closeBtn,
    onClick: function onClick() {
      return props.changeMediaSelection(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_5___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    sx: {
      height: "100%",
      paddingInline: 2,
      bgcolor: "navbar.main",
      color: "texts.main"
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MediaOptions);

/***/ }),

/***/ "./app/components/MediaComponent/index.js":
/*!************************************************!*\
  !*** ./app/components/MediaComponent/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MediaContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MediaContainer */ "./app/components/MediaComponent/MediaContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MediaContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

}]);
//# sourceMappingURL=29.parkhang-dev.js.map