(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[1],{

/***/ "./app/components/Editors/Editor.js":
/*!******************************************!*\
  !*** ./app/components/Editors/Editor.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_TextsSearch_TextsSearchContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/TextsSearch/TextsSearchContainer */ "./app/components/TextsSearch/TextsSearchContainer.js");
/* harmony import */ var containers_TextListContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! containers/TextListContainer */ "./app/containers/TextListContainer.js");
/* harmony import */ var components_TextList_TextListTabContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/TextList/TextListTabContainer */ "./app/components/TextList/TextListTabContainer.js");
/* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app_constants */ "./app/app_constants/index.js");
/* harmony import */ var images_lopenling_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! images/lopenling_logo.png */ "./app/images/lopenling_logo.png");
/* harmony import */ var components_Header_Header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Header/Header.css */ "./app/components/Header/Header.css");
/* harmony import */ var components_Header_Header_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(components_Header_Header_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_Sidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Sidebar */ "./app/components/Sidebar/index.js");
/* harmony import */ var react_split_pane__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-split-pane */ "./node_modules/react-split-pane/dist/index.esm.js");
/* harmony import */ var _EditorContainer_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./EditorContainer.css */ "./app/components/Editors/EditorContainer.css");
/* harmony import */ var _EditorContainer_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_EditorContainer_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var css_util_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! css/util.css */ "./app/css/util.css");
/* harmony import */ var css_util_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(css_util_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _TextSheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TextSheet */ "./app/components/Editors/TextSheet.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/index.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var Editor = function Editor(props) {
  var textListClassnames = [_EditorContainer_css__WEBPACK_IMPORTED_MODULE_9___default.a.listContainer];
  var bodyHeight;
  var minSize = app_constants__WEBPACK_IMPORTED_MODULE_4__["MIN_TEXT_LIST_WIDTH"];
  var maxSize = app_constants__WEBPACK_IMPORTED_MODULE_4__["MAX_TEXT_LIST_WIDTH"];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var defaultSize = app_constants__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_TEXT_LIST_WIDTH"];
  var size = props.textListWidth;

  if (props.textListIsVisible) {
    textListClassnames.push(_EditorContainer_css__WEBPACK_IMPORTED_MODULE_9___default.a.showListContainer);
  } else {
    size = 0;
    textListClassnames.push(_EditorContainer_css__WEBPACK_IMPORTED_MODULE_9___default.a.hideListContainer);
  }

  bodyHeight = "calc(100vh - " + components_Header_Header_css__WEBPACK_IMPORTED_MODULE_6___default.a.headerHeight + ")";
  var image_location = images_lopenling_logo_png__WEBPACK_IMPORTED_MODULE_5__["default"];

  var handleClose = function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  var handleShare = function handleShare() {
    var textid = props.selectedText;
    var textid2 = props.selectedText2;
    var witnessid = props.selectedWitness;
    var witnessid2 = props.selectedWitness2;
    var url = "";

    if (textid2 && witnessid2) {
      url = window.location.origin + "/texts/".concat(textid.id, "/witnesses/").concat(witnessid === null || witnessid === void 0 ? void 0 : witnessid.id, "/texts2/").concat(textid2.id, "/witnesses2/").concat(witnessid2.id);
    } else {
      url = window.location.origin + "/texts/".concat(textid.id, "/witnesses/").concat(witnessid === null || witnessid === void 0 ? void 0 : witnessid.id);
    }

    navigator.clipboard.writeText(url).then()["catch"](function (e) {
      return console.log(e.message);
    })["finally"](function () {
      return setOpen(true);
    });
  };

  var actions = [{
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__["Edit"], {
      htmlColor: props.isAnnotating ? "#ff7961" : undefined
    }),
    name: "Annotate",
    condition: props.isAnnotating,
    "function": function _function() {
      return props.changeIsAnnotating(!props.isAnnotating);
    }
  }, {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__["SyncAlt"], {
      htmlColor: props.isPanelLinked ? "#ff7961" : undefined
    }),
    name: "Link Panel",
    condition: props.isPanelLinked,
    "function": function _function() {
      return props.onChangePanelLink(!props.isPanelLinked);
    }
  }, {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__["Share"], null),
    name: "Share",
    "function": handleShare
  }, {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__["VerticalSplit"], {
      htmlColor: props.isSecondWindowOpen ? "#ff7961" : undefined
    }),
    name: "Split Window",
    condition: props.isSecondWindowOpen,
    "function": function _function() {
      return props.onChangeWindowOpen(!props.isSecondWindowOpen, 140);
    }
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var timer = setTimeout(function () {
      window.dispatchEvent(new Event("resize"));
    }, 1000);
    return function () {
      return clearTimeout(timer);
    };
  }, [props.textListIsVisible]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_10___default()(_EditorContainer_css__WEBPACK_IMPORTED_MODULE_9___default.a["interface"], css_util_css__WEBPACK_IMPORTED_MODULE_11___default.a.flex)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_split_pane__WEBPACK_IMPORTED_MODULE_8__["default"], {
    size: "fit-content",
    onDragFinished: function onDragFinished(width) {
      if (width > 0) window.dispatchEvent(new Event("resize"));
    },
    resizerStyle: {
      display: "none"
    },
    style: {
      height: "auto",
      position: "static"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["Collapse"], {
    sx: {
      height: "100%"
    },
    orientation: "horizontal",
    "in": props.textListIsVisible,
    mountOnEnter: true,
    unmountOnExit: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_system__WEBPACK_IMPORTED_MODULE_15__["Box"], {
    sx: {
      height: "100vh",
      width: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextSheet__WEBPACK_IMPORTED_MODULE_12__["default"], {
    bodyHeight: bodyHeight
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["SpeedDial"], {
    ariaLabel: "SpeedDial basic",
    sx: {
      position: "absolute",
      bottom: 60,
      right: 16
    },
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["SpeedDialIcon"], null)
  }, actions.map(function (action) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["SpeedDialAction"], {
      key: action.name,
      icon: action.icon,
      tooltipTitle: action.name,
      onClick: action["function"],
      open: action.condition
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["Snackbar"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["Alert"], {
    onClose: handleClose,
    severity: "success",
    sx: {
      width: "100%"
    }
  }, "The Url Copied to Clipboard !")));
};

/* harmony default export */ __webpack_exports__["default"] = (Editor); // return (
//     <div className={classnames(styles.interface, utilStyles.flex)}>
//         <SplitPane
//             split="vertical"
//             minSize={minSize}
//             maxSize={maxSize}
//             defaultSize={defaultSize}
//             size={size}
//             paneStyle={{
//                 display: "flex",
//             }}
//             style={{
//                 height: bodyHeight,
//             }}
//             onDragFinished={(width: number) => {
//                 if (width > 0) {
//                     props.onChangedTextWidth(width);
//                     if (!props.textListIsVisible) {
//                         props.onChangedTextListVisible(true);
//                     }
//                 }
//                 window.dispatchEvent(new Event("resize"));
//             }}
//         >
//             <div className={classnames(...textListClassnames)}>
//                 <Resources />
//             </div>
//             <TextSheet bodyHeight={bodyHeight} />
//         </SplitPane>
//     </div>
// );

/***/ }),

/***/ "./app/components/Editors/EditorContainer.css":
/*!****************************************************!*\
  !*** ./app/components/Editors/EditorContainer.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"EditorContainer---container","interface":"EditorContainer---interface","listContainer":"EditorContainer---listContainer","showListContainer":"EditorContainer---showListContainer","hideListContainer":"EditorContainer---hideListContainer"};

/***/ }),

/***/ "./app/components/Editors/EditorContainer.js":
/*!***************************************************!*\
  !*** ./app/components/Editors/EditorContainer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor */ "./app/components/Editors/Editor.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions */ "./app/actions/index.js");






var mapStateToProps = function mapStateToProps(state) {
  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_3__["getSelectedText"](state);
  var selectedText2 = reducers__WEBPACK_IMPORTED_MODULE_3__["getSelectedText2"](state);
  var selectedWitness;
  var selectedWitness2;
  var witnesses;
  var witnesses2;

  if (selectedText) {
    witnesses = reducers__WEBPACK_IMPORTED_MODULE_3__["getTextWitnesses"](state, selectedText.id);
    var selectedWitnessId = reducers__WEBPACK_IMPORTED_MODULE_3__["getSelectedTextWitnessId"](state, selectedText.id);

    if (selectedWitnessId) {
      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_3__["getWitness"](state, selectedWitnessId);
    } else {
      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_3__["getWorkingWitness"](state, selectedText.id);
    }
  }

  if (selectedText2) {
    witnesses2 = reducers__WEBPACK_IMPORTED_MODULE_3__["getTextWitnesses2"](state, selectedText2.id);
    var selectedWitnessId2 = reducers__WEBPACK_IMPORTED_MODULE_3__["getSelectedTextWitnessId2"](state, selectedText2.id);

    if (selectedWitnessId2) {
      selectedWitness2 = reducers__WEBPACK_IMPORTED_MODULE_3__["getWitness2"](state, selectedWitnessId2);
    } else {
      selectedWitness2 = reducers__WEBPACK_IMPORTED_MODULE_3__["getWorkingWitness2"](state, selectedText2.id);
    }
  }

  if (!state.user.userId === -1) {
    user = state.user;
  }

  return {
    selectedText: selectedText,
    selectedWitness: selectedWitness,
    selectedText2: selectedText2,
    selectedWitness2: selectedWitness2,
    title: reducers__WEBPACK_IMPORTED_MODULE_3__["getTranslation"](state, "header.title"),
    page: state.page,
    isAnnotating: reducers__WEBPACK_IMPORTED_MODULE_3__["isAnnotating"](state),
    isSecondWindowOpen: reducers__WEBPACK_IMPORTED_MODULE_3__["isSecondWindowOpen"](state),
    theme: reducers__WEBPACK_IMPORTED_MODULE_3__["getTheme"](state),
    isPanelLinked: reducers__WEBPACK_IMPORTED_MODULE_3__["isPanelLinked"](state),
    textListIsVisible: reducers__WEBPACK_IMPORTED_MODULE_3__["getTextListVisible"](state)
  };
};

var matchDispatchToProps = function matchDispatchToProps(dispatch) {
  return {
    onChangedTextWidth: function onChangedTextWidth(width) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__["changedTextListWidth"](width));
    },
    onChangedTextListVisible: function onChangedTextListVisible(isVisible) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__["changedTextListVisible"](isVisible));
    },
    changeIsAnnotating: function changeIsAnnotating(payload) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__["changeIsAnnotating"](payload));

      if (payload === false) {
        var dismissTextAnnotation = actions__WEBPACK_IMPORTED_MODULE_4__["changedActiveTextAnnotation"](null);
        dispatch(dismissTextAnnotation);
        dispatch(actions__WEBPACK_IMPORTED_MODULE_4__["changedActiveTextAnnotation"](null));
      }
    },
    onChangeWindowOpen: function onChangeWindowOpen(data, textId) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__["toggleSecondWindow"](data, textId));
    },
    onChangePanelLink: function onChangePanelLink(data) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__["changePanelLink"](data));
    }
  };
};

var EditorContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, matchDispatchToProps)(_Editor__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (EditorContainer);

/***/ }),

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
/* harmony import */ var components_TextDetail2_TextDetailContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/TextDetail2/TextDetailContainer */ "./app/components/TextDetail2/TextDetailContainer.js");
/* harmony import */ var components_TextDetail_TextDetailContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/TextDetail/TextDetailContainer */ "./app/components/TextDetail/TextDetailContainer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TextDetail_TextDetailContainer__WEBPACK_IMPORTED_MODULE_14__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_8__["default"], null, props.isSecondWindowOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TextDetail2_TextDetailContainer__WEBPACK_IMPORTED_MODULE_13__["default"], null))), props.Media.isPanelVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_MediaComponent__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
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

/***/ "./app/components/Editors/index.js":
/*!*****************************************!*\
  !*** ./app/components/Editors/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditorContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditorContainer */ "./app/components/Editors/EditorContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _EditorContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./app/components/MediaComponent/Image.css":
/*!*************************************************!*\
  !*** ./app/components/MediaComponent/Image.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","ThirdWindow-Height":"300px","header-Height":"35px","mainTint":"#024279","activeButton":"#00746b","ThirdWindowHeight":"250px","ThirdWindow":"Image---ThirdWindow","ThirdWindowPortrait":"Image---ThirdWindowPortrait","header":"Image---header","listOfImages":"Image---listOfImages","ImageStyle":"Image---ImageStyle","imageSection":"Image---imageSection"};

/***/ }),

/***/ "./app/components/MediaComponent/Image.js":
/*!************************************************!*\
  !*** ./app/components/MediaComponent/Image.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image.css */ "./app/components/MediaComponent/Image.css");
/* harmony import */ var _Image_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Image_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-zoom-pan-pinch */ "./node_modules/react-zoom-pan-pinch/dist/index.esm.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ChevronRight */ "./node_modules/@mui/icons-material/ChevronRight.js");
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/CircularProgress */ "./node_modules/@mui/material/CircularProgress/index.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_10__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }












function HttpUrl() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  if (data.includes("https")) return data;
  return "https://" + data;
}

function fetchImage(_x) {
  return _fetchImage.apply(this, arguments);
}

function _fetchImage() {
  _fetchImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var res, imageBlob, imageObjectURL;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url);

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.blob();

          case 5:
            imageBlob = _context.sent;
            imageObjectURL = URL.createObjectURL(imageBlob);
            return _context.abrupt("return", imageObjectURL);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchImage.apply(this, arguments);
}

function Image(props) {
  var _props$imageData, _props$imageData2;

  var selectRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var imageList = (_props$imageData = props.imageData) === null || _props$imageData === void 0 ? void 0 : _props$imageData.alignment;
  var message = (_props$imageData2 = props.imageData) === null || _props$imageData2 === void 0 ? void 0 : _props$imageData2.message;
  var imageRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef("");
  var textIdfromAlignment = props.alignmentData.text;
  var imageAlignmentById = props.imageAlignmentById;
  var imageScrollId = props.imageScrollId;
  var isPortraitImage = props.isImagePortrait;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      imageSelected = _useState2[0],
      SetSelected = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("50vh"),
      _useState4 = _slicedToArray(_useState3, 2),
      imageHeight = _useState4[0],
      setImageHeight = _useState4[1];

  var imageIdList = [];
  var syncIdOnClick = props.syncIdOnClick;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState8 = _slicedToArray(_useState7, 2),
      img = _useState8[0],
      setImg = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoading(true);

    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(imageList)) {
      var url = HttpUrl(imageList[imageSelected].target_segment);
      var imageObjectURL = fetchImage(url, imageList);
      imageObjectURL.then(function (data) {
        setImg(data);
        setLoading(false);
      })["catch"](function (e) {
        return console.log(e);
      });
      var image = imageList[imageSelected];
      props.changeSelectedImage(image);
      var imageDocId = image.source_segment.start;
    }
  }, [imageList, imageSelected]);

  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(imageList)) {
    imageIdList = imageList.map(function (l) {
      return parseInt(l.source_segment.start);
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var IDtoSync = parseInt(imageScrollId.id.start);

    if (textIdfromAlignment === props.selectedText.id && imageScrollId.from === 1) {
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(imageList)) {
        var findSegment = imageList.find(function (l) {
          return l.source_segment.start <= IDtoSync && l.source_segment.end > IDtoSync;
        });
        var index = imageList.findIndex(function (l) {
          return (l === null || l === void 0 ? void 0 : l.source_segment) === findSegment.source_segment;
        });

        if (parseInt(index) >= 0) {
          SetSelected(index);
        }
      }
    }
  }, [imageScrollId]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    selectRef.current.value = props.witness;
    setLoading(true);
    fetchImage();
  }, [props.witness]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (textIdfromAlignment === props.selectedText.id) {
      var ClickId = syncIdOnClick.toString().replace("s_", "");

      if ((imageList === null || imageList === void 0 ? void 0 : imageList.length) > 0 && ClickId > 0) {
        var findSegment = imageList.find(function (l) {
          return l.source_segment.start < ClickId && l.source_segment.end > ClickId;
        });
        var index = imageList.findIndex(function (l) {
          return (l === null || l === void 0 ? void 0 : l.source_segment) === (findSegment === null || findSegment === void 0 ? void 0 : findSegment.source_segment);
        });

        if (index >= 0) {
          SetSelected(index);
        }
      }
    }
  }, [syncIdOnClick]);

  var isPortrait = function isPortrait(_ref) {
    var img = _ref.target;
    //this Check if the provided Image is a portrait or a landScape
    var tempHeight = img.naturalHeight;
    setImageHeight(img.naturalHeight);
    var tempWIdth = img.naturalWidth;
    if (tempHeight === 0 || tempWIdth === 0) return null;
    props.changeIsImagePortrait(tempHeight >= tempWIdth);
    setLoading(false);
  };

  var handleChangeImage = function handleChangeImage(data) {
    var currentid = imageAlignmentById.find(function (l) {
      return l.id === imageSelected;
    });
    console.log(currentid);

    if (data === "prev" && imageSelected > 0) {
      SetSelected(function (prev) {
        return prev - 1;
      });
    }

    if (data === "next" && imageSelected < imageIdList.length) {
      SetSelected(function (prev) {
        return prev + 1;
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: isPortraitImage ? _Image_css__WEBPACK_IMPORTED_MODULE_2___default.a.ThirdWindowPortrait : _Image_css__WEBPACK_IMPORTED_MODULE_2___default.a.ThirdWindow // onResize={handleResize}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    className: _Image_css__WEBPACK_IMPORTED_MODULE_2___default.a.header,
    sx: {
      boxShadow: 1,
      bgcolor: "primary"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    position: "relative",
    zIndex: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    sx: {
      m: 1,
      minWidth: 120
    },
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["NativeSelect"], {
    labelid: "demo-select-small",
    inputRef: selectRef,
    onChange: function onChange(e) {
      return props.changeImageVersion(e.target.value);
    },
    inputProps: {
      name: "age",
      id: "uncontrolled-native"
    }
  }, props.witnesses.map(function (witness) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      key: witness.id,
      value: witness.id,
      style: {
        textAlign: "center"
      }
    }, witness.source.name);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    "aria-label": "close",
    style: {
      position: "absolute",
      right: 10
    },
    onClick: function onClick() {
      return props.changeMediaSelection(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_10___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    className: _Image_css__WEBPACK_IMPORTED_MODULE_2___default.a.imageSection
  }, lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(imageList) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, message) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    sx: {
      height: "30vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "secondary"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("center", {
    height: "100%"
  }, !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_3__["TransformWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_3__["TransformComponent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImage"], {
    itemRef: imageRef,
    className: _Image_css__WEBPACK_IMPORTED_MODULE_2___default.a.ImageStyle,
    src: img,
    alt: "imagepecha",
    onLoad: isPortrait
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    sx: {
      height: "30vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "secondary"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    onClick: function onClick() {
      return handleChangeImage("prev");
    },
    sx: {
      position: "absolute",
      left: 20,
      top: 100
    },
    color: "primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fill: "currentColor"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    color: "primary",
    onClick: function onClick() {
      return handleChangeImage("next");
    },
    sx: {
      position: "absolute",
      right: 20,
      top: 100
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fill: "currentColor"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Image));

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

  var VideoIdListRange = [];
  var closestID = []; // const syncIdOnScroll = props.syncIdOnScroll;

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
    VideoIdListRange = VideoData.map(function (l) {
      return [parseInt(l.source_segment.start), parseInt(l.source_segment.end)];
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (textIdfromAlignment === props.selectedText.id) {
      //     let intersection = syncIdOnScroll.filter(element => VideoIdList.includes(element));
      //     newList= VideoData.filter(d=>d.source_segment===intersection[0]);
      //     jumpToTime(newList[0]?.target_segment.start)
      var ClickId = syncIdOnClick;
      closestID = VideoIdListRange.find(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            start = _ref2[0],
            end = _ref2[1];

        return ClickId > start && ClickId < end;
      });

      if (closestID) {
        var data = VideoData.find(function (l) {
          var _closestID$;

          return l.source_segment.start === ((_closestID$ = closestID[0]) === null || _closestID$ === void 0 ? void 0 : _closestID$.toString());
        });

        if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(data)) {
          jumpToTime(data.target_segment.start);
        }
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



/***/ }),

/***/ "./app/components/TextDetail/AddButton.css":
/*!*************************************************!*\
  !*** ./app/components/TextDetail/AddButton.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","button":"AddButton---button"};

/***/ }),

/***/ "./app/components/TextDetail/AddButton.js":
/*!************************************************!*\
  !*** ./app/components/TextDetail/AddButton.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddButton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddButton.css */ "./app/components/TextDetail/AddButton.css");
/* harmony import */ var _AddButton_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AddButton_css__WEBPACK_IMPORTED_MODULE_1__);



var AddButton = function AddButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _AddButton_css__WEBPACK_IMPORTED_MODULE_1___default.a.button,
    title: props.title,
    onClick: props.onClick
  }, "+");
};

/* harmony default export */ __webpack_exports__["default"] = (AddButton);

/***/ }),

/***/ "./app/components/TextDetail/AnnotationControls.css":
/*!**********************************************************!*\
  !*** ./app/components/TextDetail/AnnotationControls.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","inlineWidth":"280px","annotationControls":"AnnotationControls---annotationControls","annotationContent":"AnnotationControls---annotationContent","subTitle":"AnnotationControls---subTitle","title":"AnnotationControls---title","sectionHeading":"AnnotationControls---sectionHeading","text":"AnnotationControls---text","padding":"AnnotationControls---padding","arrowTop":"AnnotationControls---arrowTop","arrowLeft":"AnnotationControls---arrowLeft","arrowRight":"AnnotationControls---arrowRight","inline":"AnnotationControls---inline","arrow":"AnnotationControls---arrow","arrowDs":"AnnotationControls---arrowDs","nothingSelected":"AnnotationControls---nothingSelected","anonymousMessage":"AnnotationControls---anonymousMessage","noNotes":"AnnotationControls---noNotes","breakButtons":"AnnotationControls---breakButtons"};

/***/ }),

/***/ "./app/components/TextDetail/AnnotationControls.js":
/*!*********************************************************!*\
  !*** ./app/components/TextDetail/AnnotationControls.js ***!
  \*********************************************************/
/*! exports provided: CONTROLS_MARGIN_LEFT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROLS_MARGIN_LEFT", function() { return CONTROLS_MARGIN_LEFT; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AnnotationDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnnotationDetail */ "./app/components/TextDetail/AnnotationDetail.js");
/* harmony import */ var _AnnotationDetailEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnnotationDetailEdit */ "./app/components/TextDetail/AnnotationDetailEdit.js");
/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnnotationControls.css */ "./app/components/TextDetail/AnnotationControls.css");
/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! css/colour.css */ "./app/css/colour.css");
/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(css_colour_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lib_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/User */ "./app/lib/User.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var _AnnotationControlsHeading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AnnotationControlsHeading */ "./app/components/TextDetail/AnnotationControlsHeading.js");
/* harmony import */ var _NoteEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NoteEditor */ "./app/components/TextDetail/NoteEditor.js");
/* harmony import */ var _QuestionView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./QuestionView */ "./app/components/TextDetail/QuestionView.js");
/* harmony import */ var _QuestionEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./QuestionEditor */ "./app/components/TextDetail/QuestionEditor.js");
/* harmony import */ var _QuestionsLoading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./QuestionsLoading */ "./app/components/TextDetail/QuestionsLoading.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Note */ "./app/components/TextDetail/Note.js");
/* harmony import */ var components_UI_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/UI/Button */ "./app/components/UI/Button.js");
/* harmony import */ var images_page_break_icon_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! images/page_break_icon.svg */ "./app/images/page_break_icon.svg");
/* harmony import */ var react_virtualized_dist_es_List__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-virtualized/dist/es/List */ "./node_modules/react-virtualized/dist/es/List/index.js");
/* harmony import */ var _AnnotationControlsHeader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./AnnotationControlsHeader */ "./app/components/TextDetail/AnnotationControlsHeader.js");
/* harmony import */ var lib_Question__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! lib/Question */ "./app/lib/Question.js");
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






















var CONTROLS_MARGIN_LEFT = 10;
var FAKE_LOGIN = true;
var anchorPoints = {
  top: 1,
  left: 2,
  bottom: 3,
  right: 4
};

var AnnotationControls = /*#__PURE__*/function (_React$Component) {
  _inherits(AnnotationControls, _React$Component);

  var _super = _createSuper(AnnotationControls);

  function AnnotationControls(props) {
    var _this;

    _classCallCheck(this, AnnotationControls);

    _this = _super.call(this, props);
    _this.controls = null;
    _this.arrow = null;
    _this.arrowDs = null;
    return _this;
  }

  _createClass(AnnotationControls, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updatePosition();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // Need to delay calling this because the browser
      // may not have finished rendering when first called.
      setTimeout(this.updatePosition.bind(this), 0);
    }
  }, {
    key: "updatePosition",
    value: function updatePosition() {
      var measurements = this.getMeasurements();

      if (!this.props.inline || !this.controls || !this.arrow || !measurements) {
        return;
      }

      var controls = this.controls;
      var height = controls.offsetHeight;
      var width = controls.offsetWidth;
      var arrow = this.arrow;
      var bottomGap = measurements.bottomGap;
      var offScreen = bottomGap < 0 || bottomGap > height;
      var top = measurements.top;
      var viewPortWidth = measurements.viewPortWidth || 0;
      var selectedLeft = measurements.left;
      var selectedRight = selectedLeft + measurements.width;
      arrow.style.display = "none";

      if (this.props.selectedElementIds) {
        var lines = 1;
        var prevSegmentLeft = 0;
        var lastLineLeft = 0;
        var lastLineRight = 0;
        var lastLineBottom = 0;

        for (var i = 0; i < this.props.selectedElementIds.length; i++) {
          var segmentId = this.props.selectedElementIds[i];
          var segment = document.getElementById(segmentId);

          if (segment) {
            var segmentLeft = segment.offsetLeft;
            var segmentRight = segmentLeft + segment.offsetWidth;

            if (segmentLeft < prevSegmentLeft) {
              lines++;
              lastLineLeft = segmentLeft;
              lastLineRight = segmentRight;
              lastLineBottom = segment.offsetTop + segment.offsetHeight;
              selectedLeft = segmentLeft;
              selectedRight = segmentRight;
            } else if (segmentRight > lastLineRight) {
              lastLineRight = segmentRight; // selectedRight = segmentRight;
            }

            if (segmentLeft < selectedLeft) selectedLeft = segmentLeft;
            if (segmentRight > selectedRight) selectedRight = segmentRight;
            prevSegmentLeft = segmentLeft;
          }
        }
      }

      var selectedWidth = selectedRight - selectedLeft;
      var anchorPoint = anchorPoints.bottom;
      var moveToSide = false;
      var moveRight = 0;

      if (!offScreen && bottomGap < height) {
        moveToSide = true;
      }

      if (moveToSide) {
        arrow.className = _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.arrowLeft;

        if (selectedLeft - width - arrow.offsetWidth < 0) {
          anchorPoint = anchorPoints.right;
        } else {
          anchorPoint = anchorPoints.left;
        }
      } else {
        var controlOverhang = width / 2 - selectedWidth / 2;

        if (selectedLeft - controlOverhang < 0) {
          moveRight = Math.abs(selectedLeft - controlOverhang);
        }

        if (selectedRight + controlOverhang > viewPortWidth) {
          moveRight = viewPortWidth - (selectedRight + controlOverhang);
        }
      }

      if (anchorPoint === anchorPoints.bottom) {
        var arrowHeight = 0;
        var arrowLeft = 0;

        if (this.arrow) {
          this.arrow.className = _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.arrowTop;
          arrowLeft = width / 2 - this.arrow.offsetWidth / 2 - moveRight;
          if (arrowLeft < 0) arrowLeft = 0;
          this.arrow.style.left = arrowLeft + "px";
          arrowHeight = this.arrow.offsetHeight;
          this.arrow.style.top = 0 - arrowHeight + "px";
        }

        controls.style.top = top + measurements.height + arrowHeight + "px";
        controls.style.left = selectedLeft + selectedWidth / 2 - width / 2 + moveRight + "px";
      } else if (moveToSide) {
        arrow.className = _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.arrowRight;
        var _arrowHeight = arrow.offsetHeight;
        var controlsTop = measurements.top + measurements.height / 2 - _arrowHeight / 2;

        if (measurements.top + measurements.height + bottomGap - controlsTop < height) {
          controlsTop = measurements.top + measurements.height + bottomGap - height;
        }

        if (anchorPoint === anchorPoints.left) {
          // left side of selection
          arrow.style.left = width - 2 + "px";
          controls.style.left = selectedLeft - width - arrow.offsetWidth + "px";
        } else {
          // right-side of selection
          arrow.className = _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.arrowLeft;
          arrow.style.left = -arrow.offsetWidth + "px";
          controls.style.left = selectedLeft + selectedWidth + arrow.offsetWidth + "px"; // controls.style.right = 0 + "px";
        }

        arrow.style.top = measurements.top - controlsTop + measurements.height / 2 - _arrowHeight / 2 + "px";
        controls.style.top = controlsTop + "px";
      } else {
        controls.style.top = top + "px";
      }
    }
  }, {
    key: "getMeasurements",
    value: function getMeasurements() {
      if (!this.props.selectedElementIds) {
        return null;
      }

      var lastSelectedElementId = this.props.selectedElementIds[this.props.selectedElementIds.length - 1];
      var lastElement = document.getElementById(lastSelectedElementId);
      var firstSelectedElementId = this.props.selectedElementIds[0];
      var firstElement = document.getElementById(firstSelectedElementId);
      var splitTextRect = this.props.splitTextRect;
      var extraTop = 0;
      var scrollTop = 0;

      if (this.props.list) {
        scrollTop = this.props.list.Grid.state.scrollTop;
      }

      if (this.props.pechaImageClass) {
        var pechaImage = document.getElementsByClassName(this.props.pechaImageClass)[0];
        extraTop = pechaImage.offsetHeight;
      }

      if (!lastElement) {
        console.warn("no valid element found in getMeasurements, elementId: %s", this.props.selectedElementId);
        return {
          top: 0,
          textTop: 0,
          rowTop: 0,
          left: 0,
          width: 1,
          height: 1,
          topGap: 0,
          bottomGap: 0,
          viewPortWidth: 1
        };
      }

      var top = lastElement.offsetTop + extraTop;
      var textTop = lastElement.offsetTop;
      var left = lastElement.offsetLeft;
      var width = lastElement.offsetWidth;
      var height = lastElement.offsetHeight;
      var rowTop = top;
      var viewPortWidth = null;
      var topGap = 0;
      var bottomGap = 0;

      if (lastElement && splitTextRect) {
        var elRect = lastElement.getBoundingClientRect();
        bottomGap = splitTextRect.height + splitTextRect.top - elRect.bottom;
        viewPortWidth = splitTextRect.width;
      }

      if (firstElement && splitTextRect) {
        var _elRect = firstElement.getBoundingClientRect();

        topGap = splitTextRect.height - _elRect.top;
      }

      return {
        top: top,
        textTop: textTop,
        rowTop: rowTop,
        left: left,
        width: width,
        height: height,
        topGap: topGap,
        bottomGap: bottomGap,
        viewPortWidth: viewPortWidth
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _props$questions;

      var props = this.props;
      var annotations = [];
      var temporaryAnnotations = [];
      var anonymousUserMessage = null;
      var nothingSelected = null;
      var isLoggedIn = props.user.isLoggedIn || FAKE_LOGIN;
      var breakSelected = false;

      if (props.activeAnnotation && (props.activeAnnotation.isType(lib_Annotation__WEBPACK_IMPORTED_MODULE_8__["ANNOTATION_TYPES"].pageBreak) || props.activeAnnotation.isType(lib_Annotation__WEBPACK_IMPORTED_MODULE_8__["ANNOTATION_TYPES"].lineBreak))) {
        breakSelected = true;
      } // the selected word/sentence is props.anotationsData


      if (props.annotationsData) {
        props.annotationsData.map(function (annotationData) {
          var isEditing = false;
          var isActive = false;

          if (annotationData.isTemporary) {
            isEditing = true;
            isActive = true;
          } else if (!props.temporaryAnnotation && annotationData.annotation.uniqueId == props.activeAnnotation.uniqueId) {
            isActive = true;
          }

          if (isEditing) {
            var annotationDetail = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AnnotationDetailEdit__WEBPACK_IMPORTED_MODULE_3__["default"], {
              annotationData: annotationData,
              key: annotationData.annotation.uniqueId,
              isActive: isActive,
              saveAnnotationHandler: function saveAnnotationHandler(content) {
                props.saveAnnotation(annotationData.annotation, content);
              },
              cancelAnnotationHandler: function cancelAnnotationHandler() {
                props.cancelEditAnnotation(annotationData.annotation);
              },
              isLoggedIn: isLoggedIn,
              selectAnnotationHandler: function selectAnnotationHandler() {},
              editAnnotationHandler: function editAnnotationHandler() {}
            });
            temporaryAnnotations.push(annotationDetail);
          } else {
            var _annotationDetail = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AnnotationDetail__WEBPACK_IMPORTED_MODULE_2__["default"], {
              isWorkingSection: false,
              fontSize: props.fontSize,
              annotationData: annotationData,
              key: annotationData.annotation.uniqueId,
              isActive: isActive,
              selectAnnotationHandler: function selectAnnotationHandler() {
                if (isLoggedIn && !isEditing) {
                  props.didSelectAnnotation(annotationData.annotation);
                }
              },
              editAnnotationHandler: function editAnnotationHandler() {
                if (isLoggedIn && !isEditing) {
                  _this2.annotation = annotationData.annotation;
                  props.editAnnotation(annotationData.annotation);
                }
              },
              isLoggedIn: isLoggedIn
            });

            annotations.push(_annotationDetail);
          }
        }, this);

        if (!props.user.isLoggedIn === !FAKE_LOGIN) {
          // NOTE: FormattedMessage cannot take a child when using
          // the values option, so need to wrap it in a div
          anonymousUserMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.anonymousMessage,
            style: {
              position: "relative",
              width: "fit-content",
              border: "1px solid gray",
              paddingInline: 10
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_14__["FormattedMessage"], {
            id: "annotations.loginMessage",
            values: {
              loginLink: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_14__["FormattedMessage"], {
                id: "annotations.loginLink"
              }))
            }
          }));
        }
      } else {
        nothingSelected = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.nothingSelected
        }, "Nothing Selected");
      }

      var pageBreaksButton = null;
      var allowPageBreak = !this.props.selectedWitness.isWorking;
      var lineBreaksButton = null;
      var allowLineBreak = !this.props.selectedWitness.isWorking;

      if (isLoggedIn && !this.props.selectedWitness.isWorking) {
        var pageBreaks = [];
        var lineBreaks = [];

        if (this.props.availableAnnotations) {
          pageBreaks = this.props.availableAnnotations.filter(function (annotation) {
            return annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_8__["ANNOTATION_TYPES"].pageBreak && annotation.creatorWitness.id === _this2.props.selectedWitness.id;
          });
          lineBreaks = this.props.availableAnnotations.filter(function (annotation) {
            return annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_8__["ANNOTATION_TYPES"].lineBreak && annotation.creatorWitness.id === _this2.props.selectedWitness.id;
          });
        }

        if (pageBreaks.length > 0) {
          pageBreaksButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.breakButtons
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_UI_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
            title: "Page Break",
            accessoryType: "DELETE",
            icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](images_page_break_icon_svg__WEBPACK_IMPORTED_MODULE_17__["default"], {
              width: 20,
              height: 20
            }),
            onClick: function onClick() {
              _this2.props.deleteAnnotation(pageBreaks[0]);
            },
            isActive: true,
            backgroundColor: css_colour_css__WEBPACK_IMPORTED_MODULE_5___default.a.activeButton
          }));
          allowPageBreak = false;
        }

        if (lineBreaks.length > 0) {
          lineBreaksButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.breakButtons
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_UI_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
            title: "Line Break",
            accessoryType: "DELETE",
            icon: "\xB6",
            onClick: function onClick() {
              _this2.props.deleteAnnotation(lineBreaks[0]);
            },
            isActive: true,
            backgroundColor: css_colour_css__WEBPACK_IMPORTED_MODULE_5___default.a.activeButton
          }));
          allowLineBreak = false;
        } // Can't have line break and page break in same place.


        if (!allowPageBreak) allowLineBreak = false;
        if (!allowLineBreak) allowPageBreak = false;
      }

      var tempNotes = null;
      var tempNoteIds = {};

      if (props.temporaryNotes && props.temporaryNotes.length > 0) {
        tempNotes = props.temporaryNotes.map(function (note) {
          var key = "NOTE_" + note.uniqueId; // The note is being edited

          if (note.basedOn) {
            tempNoteIds[note.basedOn.uniqueId] = note.uniqueId;
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NoteEditor__WEBPACK_IMPORTED_MODULE_10__["default"], {
            note: note,
            key: key,
            saveNote: props.saveAnnotation,
            cancel: function cancel() {
              return props.cancelEditAnnotation(note);
            }
          });
        });
      }

      var notes = null;

      if (props.notes && props.notes.length > 0) {
        // Filter out notes that are being edited
        var validNotes = props.notes.filter(function (note) {
          return !tempNoteIds.hasOwnProperty(note.uniqueId);
        });
        notes = validNotes.map(function (note) {
          var key = "NOTE_" + note.uniqueId;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Note__WEBPACK_IMPORTED_MODULE_15__["default"], {
            note: note,
            key: key,
            "delete": _this2.props.deleteAnnotation,
            edit: _this2.props.editNote
          });
        });
      }

      var tempQuestions = null;
      var tempQuestionIds = {};

      if (props.temporaryQuestions && props.temporaryQuestions.length > 0 && props.questionQuote) {
        tempQuestions = props.temporaryQuestions.map(function (question) {
          tempQuestionIds[question.uniqueId] = question.uniqueId;
          var key = "QUESTION_" + question.uniqueId;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_QuestionEditor__WEBPACK_IMPORTED_MODULE_12__["default"], {
            question: question,
            questionQuote: props.questionQuote,
            defaultTitle: props.selectedWitness.text.name,
            key: key,
            saveQuestion: props.saveQuestion,
            cancel: function cancel() {
              return props.cancelEditAnnotation(question);
            }
          });
        });
      }

      var questionLoadingIndicators = null;
      var questionViews = [];
      var questionsAreLoading = false;

      if (props.questions && props.questions.length > 0) {
        var questions = [];

        for (var i = 0; i < props.questions.length; i++) {
          var _question = props.questions[i];
          var isValid = !tempQuestionIds.hasOwnProperty(_question.uniqueId);

          if (isValid) {
            if (props.questionsData.hasOwnProperty(_question.uniqueId)) {
              if (props.questionsData[_question.uniqueId].loading) {
                questionsAreLoading = true;
              }

              questions = questions.concat(props.questionsData[_question.uniqueId].questions);
            }
          }
        }

        questionViews = questions.map(function (question) {
          var key = "QUESTION_" + question.annotationUniqueId;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_QuestionView__WEBPACK_IMPORTED_MODULE_11__["default"], {
            question: question,
            key: "question_" + question.annotationUniqueId
          });
        });
      }

      var questionHeading = null;

      if (questionViews.length > 0) {
        questionHeading = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
          className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.sectionHeading
        }, "Questions");
      }

      var questionsLoading = null;

      if (questionsAreLoading) {
        questionsLoading = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_QuestionsLoading__WEBPACK_IMPORTED_MODULE_13__["default"], null);
      }

      var allowQuestion = ((_props$questions = props.questions) === null || _props$questions === void 0 ? void 0 : _props$questions.length) === 0 && props.temporaryQuestions.length === 0;
      var classes = [_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.annotationControls];

      if (props.inline) {
        classes.push(_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.inline);
      }

      var showHeader = true;
      if (anonymousUserMessage || breakSelected) showHeader = false;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default.a.apply(void 0, classes),
        ref: function ref(controls) {
          return _this2.controls = controls;
        }
      }, showHeader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AnnotationControlsHeader__WEBPACK_IMPORTED_MODULE_19__["default"], {
        addPageBreak: allowPageBreak ? props.addPageBreak : null,
        addLineBreak: allowLineBreak ? props.addLineBreak : null,
        addNote: isLoggedIn && !tempNotes ? function () {
          return props.addNote();
        } : null,
        addQuestion: allowQuestion ? props.addQuestion : null,
        closeAnnotation: props.closeAnnotation,
        editAnnotationHandler: function editAnnotationHandler() {
          var editBtn = document.getElementById("editBtn");
          editBtn === null || editBtn === void 0 ? void 0 : editBtn.click();
        },
        userLoggedIn: isLoggedIn
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.annotationContent
      }, anonymousUserMessage, nothingSelected, !breakSelected && temporaryAnnotations, !breakSelected && annotations, pageBreaksButton, lineBreaksButton, tempNotes, notes, questionHeading, tempQuestions, questionsLoading, questionViews), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.arrow,
        ref: function ref(div) {
          return _this2.arrow = div;
        }
      }));
    }
  }]);

  return AnnotationControls;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["memo"](AnnotationControls));

/***/ }),

/***/ "./app/components/TextDetail/AnnotationControlsContainer.js":
/*!******************************************************************!*\
  !*** ./app/components/TextDetail/AnnotationControlsContainer.js ***!
  \******************************************************************/
/*! exports provided: mapStateToProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapStateToProps", function() { return mapStateToProps; });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_uniqWith__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/uniqWith */ "./node_modules/lodash/uniqWith.js");
/* harmony import */ var lodash_uniqWith__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqWith__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-batched-actions */ "./node_modules/redux-batched-actions/lib/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_batched_actions__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AnnotationControls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnnotationControls */ "./app/components/TextDetail/AnnotationControls.js");
/* harmony import */ var lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/addTibetanShay */ "./app/lib/addTibetanShay.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/AnnotatedText */ "./app/lib/AnnotatedText.js");
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var lib_User__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lib/User */ "./app/lib/User.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var lib_TextSegment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lib/TextSegment */ "./app/lib/TextSegment.js");
/* harmony import */ var lib_SplitText__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lib/SplitText */ "./app/lib/SplitText.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var lib_Question__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lib/Question */ "./app/lib/Question.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



















var TEMPORARY_ANNOTATION_ID = -3;
var BASE_NAME = "Working";

var getAnnotationsData = function getAnnotationsData(annotations, sources, workingSourceName, selectedText) {
  var annotationsData = [];
  var baseSources = sources.filter(function (source) {
    return source.isWorking || source.isBase;
  });
  var baseSourceNames = baseSources.map(function (source) {
    return source.name;
  });

  if (annotations) {
    var annotationsById = {};

    var _loop = function _loop(i) {
      var annotation = annotations[i];
      var id = annotation.content + annotation.start;

      if (annotation.isTemporary) {
        annotationsById[TEMPORARY_ANNOTATION_ID] = {
          name: annotation.getSourceName(),
          content: annotation.content,
          id: annotation.uniqueId,
          isTemporary: true,
          annotation: annotation
        };
        baseSourceNames = baseSourceNames.filter(function (a) {
          return a !== annotation.getSourceName();
        });
        id = TEMPORARY_ANNOTATION_ID;
      } else if (annotationsById[id]) {
        var existingAnnotation = annotationsById[id];
        existingAnnotation.name += " " + Object(lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_6__["default"])(annotation.getSourceName());
        baseSourceNames = baseSourceNames.filter(function (a) {
          return a !== annotation.getSourceName();
        });
      } else {
        annotationsById[id] = {
          name: Object(lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_6__["default"])(annotation.getSourceName()),
          content: annotation.content,
          id: annotation.uniqueId,
          userCreated: annotation.userCreated,
          annotation: annotation
        };
        baseSourceNames = baseSourceNames.filter(function (a) {
          return a !== annotation.getSourceName();
        });
      }

      if (!annotation.userCreated && annotation.creatorWitness.isWorking) {
        annotationsById[id].isWorking = true;
      } else {
        annotationsById[id].isWorking = false;
      }
    };

    for (var i = 0; i < annotations.length; i++) {
      _loop(i);
    } // Make sure Working source is first


    baseSourceNames.unshift(workingSourceName);
    var Base = baseSourceNames;

    if ((selectedText === null || selectedText === void 0 ? void 0 : selectedText.name) !== "བྱང་ཆུབ་སེམས་དཔའི་སྤྱོད་པ་ལ་འཇུག་པ་བཞུགས་སོ།") {
      //Dominant only awailable for chojuk text
      Base = baseSourceNames.filter(function (l) {
        return l !== "Dominant";
      });
    }

    annotationsData = Object.keys(annotationsById).reduce(function (arr, key) {
      var annotationData = annotationsById[key];

      if (annotationData.isWorking) {
        annotationData.name = Base.reduce(function (prev, cur) {
          return prev += " " + Object(lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_6__["default"])(cur, ";");
        }, "");
      }

      arr.push(annotationData);
      return arr;
    }, []);
  }

  return annotationsData;
};

var getAvailableAnnotations = function getAvailableAnnotations(annotatedText, activeAnnotation, temporaryAnnotation, annotationPositions) {
  var availableAnnotations = [];

  if (!temporaryAnnotation || activeAnnotation.naturalId !== temporaryAnnotation.naturalId) {
    availableAnnotations.push(activeAnnotation);
  }

  if (temporaryAnnotation) {
    availableAnnotations.push(temporaryAnnotation);
  }

  var _annotatedText$getPos = annotatedText.getPositionOfAnnotation(activeAnnotation),
      _annotatedText$getPos2 = _slicedToArray(_annotatedText$getPos, 2),
      start = _annotatedText$getPos2[0],
      length = _annotatedText$getPos2[1];

  if (!start) {
    return availableAnnotations;
  }

  var end = start + length;
  var possibleAnnotations = [];

  if (activeAnnotation.isInsertion) {
    var insertionAnnotations = annotationPositions["i" + start];

    if (insertionAnnotations) {
      possibleAnnotations = possibleAnnotations.concat(insertionAnnotations);
    }

    var activeInsertionAnnotations = annotationPositions[String(start)];

    if (activeInsertionAnnotations) {
      possibleAnnotations = possibleAnnotations.concat(activeInsertionAnnotations);
    }
  } else {
    // Only include annotations if they encompass the whole annotation
    // i.e. not if activeAnnotation is a user annotation and combines
    // annotated text with normal text.
    var startAnnotations = annotationPositions[String(start)];
    var endAnnotations = annotationPositions[String(end)];

    if (startAnnotations) {
      possibleAnnotations = startAnnotations;
    }

    if (endAnnotations) {
      possibleAnnotations = possibleAnnotations.concat(endAnnotations);
    }
  }

  for (var i = 0; i < possibleAnnotations.length; i++) {
    var annotation = possibleAnnotations[i];

    if (annotation.start === activeAnnotation.start && annotation.length === activeAnnotation.length) {
      // If an annotation is being edited, there will be a temporary annotation
      // with the same natural id. If so, don't show the orignal version.
      //
      // We use natualId, as it normalises the id regardless of the original's
      // save state. e.g. Upon editing a witness variant, a new annotation will be
      // created. If the user is offline, that will not have been saved via the
      // API yet. The user could then edit this new annotation, creating a temporary
      // annotation based upon it. While this is being edited, the user could come
      // back online and the save operation will succeed. This will mean the id of
      // the temporary annotation will be different to the original edit, but naturalId
      // will be the same.
      if (!temporaryAnnotation || annotation.naturalId !== temporaryAnnotation.naturalId) {
        availableAnnotations.push(annotation);
      }
    } else if (!annotatedText.activeWitness.isWorking) {
      if (annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_10__["ANNOTATION_TYPES"].pageBreak || annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_10__["ANNOTATION_TYPES"].lineBreak) {
        availableAnnotations.push(annotation);
      }
    }
  }

  availableAnnotations = lodash_uniqWith__WEBPACK_IMPORTED_MODULE_1___default()(availableAnnotations, function (a, b) {
    return a.id === b.id;
  });
  return availableAnnotations;
};

var getTemporaryAnnotation = function getTemporaryAnnotation(state, type, user, witness, start, length) {
  var annotations = reducers__WEBPACK_IMPORTED_MODULE_7__["getTemporaryAnnotations"](state, witness.id, start, length, type);

  if (annotations.length > 0) {
    return annotations[0];
  } else {
    return null;
  }
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var user = reducers__WEBPACK_IMPORTED_MODULE_7__["getUser"](state);
  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_7__["getSelectedText"](state);
  var activeAnnotation = ownProps.activeAnnotation;
  var inline = ownProps.inline;
  var selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_7__["getSelectedTextWitness"](state);

  if (!selectedWitness) {
    if (selectedText) {
      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_7__["getWorkingWitness"](state, selectedText.id);
    }
  }

  if (!activeAnnotation || !selectedWitness) {
    return {
      annotationsData: null,
      activeAnnotation: null,
      baseAnnotation: null,
      availableAnnotations: null,
      user: user,
      temporaryAnnotation: null,
      inline: null,
      firstSelectedSegment: null,
      splitTextRect: null,
      selectedWitness: null
    };
  }

  var temporaryVariant = getTemporaryAnnotation(state, lib_Annotation__WEBPACK_IMPORTED_MODULE_10__["ANNOTATION_TYPES"].variant, user, selectedWitness, activeAnnotation.start, activeAnnotation.length);
  var annotations = getAvailableAnnotations(ownProps.annotatedText, activeAnnotation, temporaryVariant, ownProps.annotationPositions);
  var variants = annotations.filter(function (annotation) {
    return annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_10__["ANNOTATION_TYPES"].variant;
  });
  var sources = reducers__WEBPACK_IMPORTED_MODULE_7__["getSources"](state);
  var workingSourceName = reducers__WEBPACK_IMPORTED_MODULE_7__["getTranslation"](state, "annotation.workingEdition", BASE_NAME);
  var variantsData = getAnnotationsData(variants, sources, workingSourceName, selectedText);
  var baseAnnotation = null;

  if (activeAnnotation.id == lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_9__["BASE_ANNOTATION_ID"]) {
    baseAnnotation = activeAnnotation;
  } else {
    var _ownProps$annotatedTe = ownProps.annotatedText.getPositionOfAnnotation(activeAnnotation),
        _ownProps$annotatedTe2 = _slicedToArray(_ownProps$annotatedTe, 2),
        start = _ownProps$annotatedTe2[0],
        length = _ownProps$annotatedTe2[1];

    if (start === null || length === null) {
      variantsData = null;
    } else {
      baseAnnotation = ownProps.annotatedText.getBaseAnnotation(start, length);
      var baseAnnotationData = getAnnotationsData([baseAnnotation], sources, workingSourceName);
      variantsData = [].concat(_toConsumableArray(baseAnnotationData), _toConsumableArray(variantsData));
    }
  } // make sure temporary annotation is first, then user created, then base annotation


  if (variantsData) {
    variantsData.sort(function (a, b) {
      if (a.isTemporary) {
        return -1;
      } else if (b.isTemporary) {
        return 1;
      } else if (a.userCreated) {
        return -1;
      } else if (b.userCreated) {
        return 1;
      } else if (a.annotation.id && b.annotation.id) {
        return a.annotation.id - b.annotation.id;
      } else {
        return 1;
      }
    });
  }

  var notes = annotations.filter(function (annotation) {
    return annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_10__["ANNOTATION_TYPES"].note;
  });
  var temporaryNotes = reducers__WEBPACK_IMPORTED_MODULE_7__["getTemporaryAnnotations"](state, selectedWitness.id, activeAnnotation.start, activeAnnotation.length, lib_Annotation__WEBPACK_IMPORTED_MODULE_10__["ANNOTATION_TYPES"].note);
  var questionAnnotations = annotations.filter(function (annotation) {
    return annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_10__["ANNOTATION_TYPES"].question;
  });
  var questionsData = {};

  if (questionAnnotations.length > 0) {
    for (var i = 0; i < questionAnnotations.length; i++) {
      var question = questionAnnotations[i];
      questionsData[question.uniqueId] = {};
      var isLoading = reducers__WEBPACK_IMPORTED_MODULE_7__["questionIsLoading"](state, question);
      questionsData[question.uniqueId]["loading"] = isLoading;
      var questions = reducers__WEBPACK_IMPORTED_MODULE_7__["getQuestions"](state, question.uniqueId);
      questionsData[question.uniqueId]["questions"] = questions;
    }
  }

  var temporaryQuestions = reducers__WEBPACK_IMPORTED_MODULE_7__["getTemporaryAnnotations"](state, selectedWitness.id, activeAnnotation.start, activeAnnotation.length, lib_Annotation__WEBPACK_IMPORTED_MODULE_10__["ANNOTATION_TYPES"].question);
  var questionQuote = null;

  if (temporaryQuestions.length > 0) {
    var firstQuestion = temporaryQuestions[0];

    var _ownProps$annotatedTe3 = ownProps.annotatedText.getPositionOfAnnotation(firstQuestion),
        _ownProps$annotatedTe4 = _slicedToArray(_ownProps$annotatedTe3, 2),
        _start = _ownProps$annotatedTe4[0],
        end = _ownProps$annotatedTe4[1];

    if (_start) {
      if (!end) {
        end = _start + 1;
      }

      var _ownProps$annotatedTe5 = ownProps.annotatedText.segmentedText.extractTextAroundPosition(_start, end, ["།", " "]),
          _ownProps$annotatedTe6 = _slicedToArray(_ownProps$annotatedTe5, 3),
          startText = _ownProps$annotatedTe6[0],
          mainText = _ownProps$annotatedTe6[1],
          endText = _ownProps$annotatedTe6[2];

      var linkUrl = document.location.href;
      questionQuote = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("blockquote", null, startText, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        href: linkUrl
      }, mainText), endText);
    }
  }

  var fontSize = Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getTextFontSize"])(state);
  return {
    annotationsData: variantsData,
    activeAnnotation: activeAnnotation,
    baseAnnotation: baseAnnotation,
    availableAnnotations: annotations,
    user: user,
    temporaryAnnotation: temporaryVariant,
    inline: inline,
    firstSelectedSegment: ownProps.firstSelectedSegment,
    splitTextRect: ownProps.splitTextRect,
    selectedWitness: selectedWitness,
    notes: notes,
    temporaryNotes: temporaryNotes,
    questions: questionAnnotations,
    temporaryQuestions: temporaryQuestions,
    questionsData: questionsData,
    questionQuote: questionQuote,
    fontSize: fontSize
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  var dispatch = dispatchProps.dispatch;

  if (stateProps.questions.length > 0) {
    for (var i = 0; i < stateProps.questions.length; i++) {
      var question = stateProps.questions[i];
      var loadQuestionData = true;

      if (stateProps.questionsData.hasOwnProperty(question.uniqueId)) {
        if (stateProps.questionsData[question.uniqueId].questions.length > 0 || stateProps.questionsData[question.uniqueId].loading) {
          loadQuestionData = false;
        }
      }

      if (loadQuestionData) {
        dispatch(new actions__WEBPACK_IMPORTED_MODULE_8__["loadQuestion"](question));
      }
    }
  }

  var addBreak = function addBreak(breakType) {
    var selectBreak = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    return function () {
      var location = ownProps.activeAnnotation;
      var breakAnnotation = new lib_Annotation__WEBPACK_IMPORTED_MODULE_10__["default"](null, location.witness, location.end + 1, 0, null, breakType, stateProps.selectedWitness, stateProps.user);
      var selectedWitnessData = reducers__WEBPACK_IMPORTED_MODULE_7__["dataFromWitness"](stateProps.selectedWitness);
      var actionsBatch = [];
      actionsBatch.push(actions__WEBPACK_IMPORTED_MODULE_8__["createdAnnotation"](breakAnnotation));
      actionsBatch.push(actions__WEBPACK_IMPORTED_MODULE_8__["appliedAnnotation"](breakAnnotation.uniqueId, selectedWitnessData));

      if (selectBreak) {
        actionsBatch.push(actions__WEBPACK_IMPORTED_MODULE_8__["changedActiveTextAnnotation"](breakAnnotation));
      } else {
        actionsBatch.push(actions__WEBPACK_IMPORTED_MODULE_8__["changedActiveTextAnnotation"](null));
      }

      dispatch(Object(redux_batched_actions__WEBPACK_IMPORTED_MODULE_4__["batchActions"])(actionsBatch));
    };
  };

  var saveAnnotation = function saveAnnotation(selectedAnnotation, content) {
    if (!selectedAnnotation.isTemporary) {
      console.warn("Tried to save a non-temporary annotation: %o", selectedAnnotation);
      return;
    }

    var selectedWitness = stateProps.selectedWitness;
    var selectedWitnessData = reducers__WEBPACK_IMPORTED_MODULE_7__["dataFromWitness"](selectedWitness);
    var newAnnotation = new lib_Annotation__WEBPACK_IMPORTED_MODULE_10__["default"](selectedAnnotation.id, selectedAnnotation.witness, selectedAnnotation.start, selectedAnnotation.length, content, selectedAnnotation.type, selectedAnnotation.creatorWitness, stateProps.user, selectedAnnotation.uniqueId, selectedAnnotation.basedOn);
    newAnnotation.isSaved = selectedAnnotation.isSaved;
    var actionsBatch = [];
    var action = null;

    if (newAnnotation.isSaved) {
      action = actions__WEBPACK_IMPORTED_MODULE_8__["updatedAnnotation"];
    } else {
      action = actions__WEBPACK_IMPORTED_MODULE_8__["createdAnnotation"];
    }

    actionsBatch.push(action(newAnnotation));
    actionsBatch.push(actions__WEBPACK_IMPORTED_MODULE_8__["removedTemporaryAnnotation"](selectedAnnotation)); // TODO: figure out what needs changing to handle note annotations

    actionsBatch.push(actions__WEBPACK_IMPORTED_MODULE_8__["appliedAnnotation"](newAnnotation.uniqueId, selectedWitnessData));

    if (newAnnotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_10__["ANNOTATION_TYPES"].variant) {
      actionsBatch.push(actions__WEBPACK_IMPORTED_MODULE_8__["changedActiveTextAnnotation"](newAnnotation));
    }

    dispatch(Object(redux_batched_actions__WEBPACK_IMPORTED_MODULE_4__["batchActions"])(actionsBatch));
  };

  return _objectSpread(_objectSpread(_objectSpread({}, stateProps), ownProps), {}, {
    closeAnnotation: function closeAnnotation() {
      var activeAnnotation = stateProps.activeAnnotation;

      if (activeAnnotation) {
        var dismissTextAnnotation = actions__WEBPACK_IMPORTED_MODULE_8__["changedActiveTextAnnotation"](null);
        dispatch(dismissTextAnnotation);
      }
    },
    didSelectAnnotation: function didSelectAnnotation(annotation) {
      var selectedAnnotation = null;

      if (annotation.id == lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_9__["BASE_ANNOTATION_ID"]) {
        selectedAnnotation = stateProps.baseAnnotation;
      } else {
        selectedAnnotation = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(stateProps.availableAnnotations, function (value) {
          return value.uniqueId == annotation.uniqueId;
        }) || null;
      }

      var actionsBatch = [];
      var selectedWitness = stateProps.selectedWitness; // let selectedWitnessData = reducers.getWitnessData(
      //     state,
      //     selectedWitness.id
      // );

      var selectedWitnessData = reducers__WEBPACK_IMPORTED_MODULE_7__["dataFromWitness"](selectedWitness);

      if (annotation.uniqueId != stateProps.activeAnnotation.uniqueId) {
        if (selectedWitness.isWorking) {
          if (annotation.id != lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_9__["BASE_ANNOTATION_ID"]) {
            actionsBatch.push(actions__WEBPACK_IMPORTED_MODULE_8__["appliedAnnotation"](selectedAnnotation.uniqueId, selectedWitnessData));
          }

          if (stateProps.activeAnnotation.id != lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_9__["BASE_ANNOTATION_ID"]) {
            actionsBatch.push(actions__WEBPACK_IMPORTED_MODULE_8__["removedAppliedAnnotation"](stateProps.activeAnnotation.uniqueId, selectedWitnessData));
          }
        } else {
          if (stateProps.activeAnnotation.creatorWitness.id === selectedWitness.id) {
            // Replacing a default annotation
            // Currently selected annotation is a default
            // annotation. So need to remove that then
            // apply the newly selected annotation.
            actionsBatch.push(actions__WEBPACK_IMPORTED_MODULE_8__["removedDefaultAnnotation"](stateProps.activeAnnotation.uniqueId, selectedWitnessData));

            if (selectedAnnotation.id !== lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_9__["BASE_ANNOTATION_ID"]) {
              actionsBatch.push(actions__WEBPACK_IMPORTED_MODULE_8__["appliedAnnotation"](selectedAnnotation.uniqueId, selectedWitnessData));
            }
          } else {
            if (selectedAnnotation.creatorWitness.id === selectedWitness.id) {
              actionsBatch.push(actions__WEBPACK_IMPORTED_MODULE_8__["appliedDefaultAnnotation"](selectedAnnotation.uniqueId, selectedWitnessData));
            } else if (selectedAnnotation.id !== lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_9__["BASE_ANNOTATION_ID"]) {
              actionsBatch.push(actions__WEBPACK_IMPORTED_MODULE_8__["appliedAnnotation"](selectedAnnotation.uniqueId, selectedWitnessData));
            }

            if (stateProps.activeAnnotation.id !== lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_9__["BASE_ANNOTATION_ID"]) {
              actionsBatch.push(actions__WEBPACK_IMPORTED_MODULE_8__["removedAppliedAnnotation"](stateProps.activeAnnotation.uniqueId, selectedWitnessData));
            }
          }
        }

        actionsBatch.push(actions__WEBPACK_IMPORTED_MODULE_8__["changedActiveTextAnnotation"](selectedAnnotation));
        dispatch(Object(redux_batched_actions__WEBPACK_IMPORTED_MODULE_4__["batchActions"])(actionsBatch));
      }
    },
    editAnnotation: function editAnnotation(selectedAnnotation) {
      var basedOn = selectedAnnotation.isWorkingAnnotation || selectedAnnotation.userCreated || selectedAnnotation.id === lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_9__["BASE_ANNOTATION_ID"] ? null : selectedAnnotation;
      var temporaryAnnotation = new lib_Annotation__WEBPACK_IMPORTED_MODULE_10__["TemporaryAnnotation"](basedOn, selectedAnnotation.witness, selectedAnnotation.start, selectedAnnotation.length, selectedAnnotation.content, selectedAnnotation.type, stateProps.selectedWitness, stateProps.user);

      if (selectedAnnotation.userCreated) {
        // user annotations are updated
        temporaryAnnotation.uniqueId = selectedAnnotation.uniqueId;
        temporaryAnnotation.isSaved = selectedAnnotation.isSaved;
      }

      dispatch(actions__WEBPACK_IMPORTED_MODULE_8__["addedTemporaryAnnotation"](temporaryAnnotation, true));
    },
    saveAnnotation: saveAnnotation,
    cancelEditAnnotation: function cancelEditAnnotation(selectedAnnotation) {
      if (!selectedAnnotation.isTemporary) {
        console.warn("Tried to call cancelEditAnnotation on a non-temporary annotation: %o", selectedAnnotation);
        return;
      }

      var cancelAction = actions__WEBPACK_IMPORTED_MODULE_8__["removedTemporaryAnnotation"](selectedAnnotation);
      dispatch(cancelAction);
    },
    deleteAnnotation: function deleteAnnotation(annotation) {
      var selectedWitness = stateProps.selectedWitness;
      var selectedWitnessData = reducers__WEBPACK_IMPORTED_MODULE_7__["dataFromWitness"](selectedWitness);
      var actionsBatch = [];

      if (annotation.userCreated) {
        var deleteAction = actions__WEBPACK_IMPORTED_MODULE_8__["deletedAnnotation"](annotation, selectedWitness);
        var removeAppliedAction = actions__WEBPACK_IMPORTED_MODULE_8__["removedAppliedAnnotation"](annotation.uniqueId, selectedWitnessData);
        actionsBatch = [deleteAction, removeAppliedAction];
      } else {
        // Assume this is a default annotation that was
        // automatically imported from external data
        var removeDefaultAnnotation = actions__WEBPACK_IMPORTED_MODULE_8__["removedDefaultAnnotation"](annotation.uniqueId, selectedWitnessData);
        actionsBatch = [removeDefaultAnnotation];
      }

      if (stateProps.activeAnnotation.uniqueId === annotation.uniqueId) {
        actionsBatch.push(actions__WEBPACK_IMPORTED_MODULE_8__["changedActiveTextAnnotation"](null));
      }

      dispatch(Object(redux_batched_actions__WEBPACK_IMPORTED_MODULE_4__["batchActions"])(actionsBatch));
    },
    addNote: function addNote() {
      var activeAnnotation = ownProps.activeAnnotation;
      var temporaryAnnotation = new lib_Annotation__WEBPACK_IMPORTED_MODULE_10__["TemporaryAnnotation"](null, activeAnnotation.witness, activeAnnotation.start, activeAnnotation.length, "", lib_Annotation__WEBPACK_IMPORTED_MODULE_10__["ANNOTATION_TYPES"].note, stateProps.selectedWitness, stateProps.user);
      dispatch(actions__WEBPACK_IMPORTED_MODULE_8__["addedTemporaryAnnotation"](temporaryAnnotation, true));
    },
    editNote: function editNote(note) {
      var temporaryAnnotation = new lib_Annotation__WEBPACK_IMPORTED_MODULE_10__["TemporaryAnnotation"](note, note.witness, note.start, note.length, note.content, lib_Annotation__WEBPACK_IMPORTED_MODULE_10__["ANNOTATION_TYPES"].note, stateProps.selectedWitness, stateProps.user);
      dispatch(actions__WEBPACK_IMPORTED_MODULE_8__["addedTemporaryAnnotation"](temporaryAnnotation, true));
    },
    addPageBreak: addBreak(lib_Annotation__WEBPACK_IMPORTED_MODULE_10__["ANNOTATION_TYPES"].pageBreak),
    addLineBreak: addBreak(lib_Annotation__WEBPACK_IMPORTED_MODULE_10__["ANNOTATION_TYPES"].lineBreak),
    addQuestion: function addQuestion() {
      var activeAnnotation = ownProps.activeAnnotation;
      var temporaryAnnotation = new lib_Annotation__WEBPACK_IMPORTED_MODULE_10__["TemporaryAnnotation"](null, activeAnnotation.witness, activeAnnotation.start, activeAnnotation.length, "", lib_Annotation__WEBPACK_IMPORTED_MODULE_10__["ANNOTATION_TYPES"].question, stateProps.selectedWitness, stateProps.user);
      dispatch(actions__WEBPACK_IMPORTED_MODULE_8__["addedTemporaryAnnotation"](temporaryAnnotation, true));
    },
    saveQuestion: function saveQuestion(question, title, content) {
      var _ownProps$annotatedTe7 = ownProps.annotatedText.getPositionOfAnnotation(question),
          _ownProps$annotatedTe8 = _slicedToArray(_ownProps$annotatedTe7, 2),
          start = _ownProps$annotatedTe8[0],
          end = _ownProps$annotatedTe8[1];

      var questionQuoteText = react_dom_server__WEBPACK_IMPORTED_MODULE_15___default.a.renderToStaticMarkup(stateProps.questionQuote);
      var questionText = questionQuoteText + content;
      saveAnnotation(question, content);
      var createdQuestionAction = actions__WEBPACK_IMPORTED_MODULE_8__["createdQuestion"](question, title, questionText);
      dispatch(createdQuestionAction);
    }
  });
};

var AnnotationControlsContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, null, mergeProps)(_AnnotationControls__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (AnnotationControlsContainer);

/***/ }),

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
  }

  _createClass(AnnotationControlsHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      this.keyHandler = function (evtobj) {
        var e = window.event ? event : evtobj;
        var condition = e.ctrlKey;

        if (condition && e.keyCode != 67) {
          evtobj.preventDefault();
        }

        if (condition && e.keyCode == 69) {
          _this.props.editAnnotationHandler();
        }

        if (condition && e.keyCode == 81) {
          var _this$props;

          (_this$props = _this.props) === null || _this$props === void 0 ? void 0 : _this$props.addQuestion();
        }

        if (condition && e.keyCode == 76) {
          var _this$props2;

          (_this$props2 = _this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.addLineBreak();
        }

        if (condition && e.keyCode == 78) {
          var _this$props3;

          (_this$props3 = _this.props) === null || _this$props3 === void 0 ? void 0 : _this$props3.addNote();
        }

        if (condition && e.keyCode == 80) {
          var _this$props4;

          (_this$props4 = _this.props) === null || _this$props4 === void 0 ? void 0 : _this$props4.addPageBreak();
        }
      };

      document.addEventListener("keydown", this.keyHandler, {
        once: false
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("keydown", this.keyHandler);
    }
  }, {
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

/***/ "./app/components/TextDetail/AnnotationControlsHeading.css":
/*!*****************************************************************!*\
  !*** ./app/components/TextDetail/AnnotationControlsHeading.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"heading":"AnnotationControlsHeading---heading","title":"AnnotationControlsHeading---title","button":"AnnotationControlsHeading---button"};

/***/ }),

/***/ "./app/components/TextDetail/AnnotationControlsHeading.js":
/*!****************************************************************!*\
  !*** ./app/components/TextDetail/AnnotationControlsHeading.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _AnnotationControlsHeading_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnnotationControlsHeading.css */ "./app/components/TextDetail/AnnotationControlsHeading.css");
/* harmony import */ var _AnnotationControlsHeading_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AnnotationControlsHeading_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AddButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddButton */ "./app/components/TextDetail/AddButton.js");
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







var AnnotationControlsHeading = /*#__PURE__*/function (_React$Component) {
  _inherits(AnnotationControlsHeading, _React$Component);

  var _super = _createSuper(AnnotationControlsHeading);

  function AnnotationControlsHeading() {
    _classCallCheck(this, AnnotationControlsHeading);

    return _super.apply(this, arguments);
  }

  _createClass(AnnotationControlsHeading, [{
    key: "render",
    value: function render() {
      var button = null;

      if (this.props.buttonOnClick) {
        var title = this.props.buttonTitleId ? this.props.intl.formatMessage({
          id: this.props.buttonTitleId
        }) : "";
        button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AddButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
          title: title,
          onClick: this.props.buttonOnClick
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: _AnnotationControlsHeading_css__WEBPACK_IMPORTED_MODULE_2___default.a.heading
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _AnnotationControlsHeading_css__WEBPACK_IMPORTED_MODULE_2___default.a.title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
        id: this.props.titleId
      })), button && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _AnnotationControlsHeading_css__WEBPACK_IMPORTED_MODULE_2___default.a.button
      }, button));
    }
  }]);

  return AnnotationControlsHeading;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(AnnotationControlsHeading));

/***/ }),

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

/***/ }),

/***/ "./app/components/TextDetail/AnswerView.css":
/*!**************************************************!*\
  !*** ./app/components/TextDetail/AnswerView.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"name":"AnswerView---name","answer":"AnswerView---answer"};

/***/ }),

/***/ "./app/components/TextDetail/AnswerView.js":
/*!*************************************************!*\
  !*** ./app/components/TextDetail/AnswerView.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnswerView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AnswerView_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnswerView.css */ "./app/components/TextDetail/AnswerView.css");
/* harmony import */ var _AnswerView_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AnswerView_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnnotationControls.css */ "./app/components/TextDetail/AnnotationControls.css");
/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button.css */ "./app/components/TextDetail/Button.css");
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var lib_Answer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/Answer */ "./app/lib/Answer.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
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










var AnswerView = /*#__PURE__*/function (_React$Component) {
  _inherits(AnswerView, _React$Component);

  var _super = _createSuper(AnswerView);

  function AnswerView() {
    _classCallCheck(this, AnswerView);

    return _super.apply(this, arguments);
  }

  _createClass(AnswerView, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _AnswerView_css__WEBPACK_IMPORTED_MODULE_1___default.a.answer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2___default.a.text,
        dangerouslySetInnerHTML: {
          __html: this.props.answer.content
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2___default.a.subTitle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        id: "question.answeredBy"
      }), " ", this.props.answer.name, ",", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedDate"], {
        value: this.props.answer.created
      })));
    }
  }]);

  return AnswerView;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



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

/***/ "./app/components/TextDetail/HeaderMenu/HighlightedString.js":
/*!*******************************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/HighlightedString.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HighlightedString; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grapheme-splitter */ "./node_modules/grapheme-splitter/index.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grapheme_splitter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-string-replace */ "./node_modules/react-string-replace/index.js");
/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_string_replace__WEBPACK_IMPORTED_MODULE_2__);
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





var HighlightedString = /*#__PURE__*/function (_React$Component) {
  _inherits(HighlightedString, _React$Component);

  var _super = _createSuper(HighlightedString);

  function HighlightedString(props) {
    _classCallCheck(this, HighlightedString);

    return _super.call(this, props);
  }

  _createClass(HighlightedString, [{
    key: "render",
    value: function render() {
      var _this = this;

      var string = this.props.string;
      var nameHtml = string;
      var stringClass = this.props.stringClass || "";

      if (this.props.searchTerm) {
        var searchTerm = this.props.searchTerm;
        var splitter = new grapheme_splitter__WEBPACK_IMPORTED_MODULE_1___default.a();
        var graphemes = splitter.splitGraphemes(string);
        var start = string.indexOf(searchTerm);
        var end = start + searchTerm.length;
        var position = 0;
        var foundGraphemes = "";

        if (start > -1) {
          for (var i = 0; i < graphemes.length; i++) {
            var grapheme = graphemes[i];

            if (position >= start && position < end) {
              foundGraphemes += grapheme;
            }

            position += grapheme.length;
          }
        }

        if (foundGraphemes.length > 0) {
          nameHtml = react_string_replace__WEBPACK_IMPORTED_MODULE_2___default()(string, foundGraphemes, function (match, i) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
              className: _this.props.highlightClass,
              key: "highlight-".concat(i)
            }, match);
          });
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: stringClass
      }, nameHtml);
    }
  }]);

  return HighlightedString;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./app/components/TextDetail/HeaderMenu/Refresh.js":
/*!*********************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/Refresh.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Refresh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/Refresh */ "./node_modules/@mui/icons-material/Refresh.js");
/* harmony import */ var _mui_icons_material_Refresh__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Refresh__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");




function Refresh(_ref) {
  var isSecondWindowOpen = _ref.isSecondWindowOpen;
  var handleRefresh = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var updatelistBtn = document.getElementById("updateList");
    if (updatelistBtn) updatelistBtn.click();
  }, [isSecondWindowOpen]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var timer = setTimeout(function () {
      handleRefresh();
    }, 500);
    return function () {
      return clearTimeout(timer);
    };
  }, [isSecondWindowOpen]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    variant: "text",
    size: "small",
    disableRipple: true,
    onClick: handleRefresh
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Refresh__WEBPACK_IMPORTED_MODULE_1___default.a, null));
}

/* harmony default export */ __webpack_exports__["default"] = (Refresh);

/***/ }),

/***/ "./app/components/TextDetail/HeaderMenu/Search.js":
/*!********************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/Search.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");




function Search(_ref) {
  var handleWindowSearch = _ref.handleWindowSearch;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    size: "small",
    variant: "text",
    onClick: handleWindowSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1___default.a, null));
}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./app/components/TextDetail/HeaderMenu/SearchList.js":
/*!************************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/SearchList.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var _HighlightedString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HighlightedString */ "./app/components/TextDetail/HeaderMenu/HighlightedString.js");
/* harmony import */ var _SearchStyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchStyle.css */ "./app/components/TextDetail/HeaderMenu/SearchStyle.css");
/* harmony import */ var _SearchStyle_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SearchStyle_css__WEBPACK_IMPORTED_MODULE_3__);





function SearchList(props) {
  var handleListItemClick = props.handleListItemClick,
      searchValue = props.searchValue,
      results = props.results,
      selectedText = props.selectedText;
  var listRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var cache = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new react_virtualized__WEBPACK_IMPORTED_MODULE_1__["CellMeasurerCache"]({
    fixedWidth: true,
    defaultHeight: 100
  }));

  var rowRenderer = function rowRenderer(_ref) {
    var key = _ref.key,
        index = _ref.index,
        parent = _ref.parent,
        style = _ref.style;
    var result = results[index];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["CellMeasurer"], {
      key: "listkeys2-".concat(key),
      cache: cache.current,
      parent: parent,
      columnIndex: 0,
      rowIndex: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: style
    }, results.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _SearchStyle_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchListItem,
      onClick: function onClick() {
        return handleListItemClick(result[0]);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HighlightedString__WEBPACK_IMPORTED_MODULE_2__["default"], {
      string: result[1],
      highlightClass: _SearchStyle_css__WEBPACK_IMPORTED_MODULE_3___default.a.highlight,
      searchTerm: searchValue
    }))));
  };

  if (!results) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["AutoSizer"], null, function (_ref2) {
    var height = _ref2.height,
        width = _ref2.width;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["List"], {
      ref: listRef,
      height: height,
      rowCount: results === null || results === void 0 ? void 0 : results.length,
      rowHeight: cache.current.rowHeight,
      deferredMeasurementCache: cache.current,
      rowRenderer: rowRenderer,
      width: width,
      overscanRowCount: 1
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchList);

/***/ }),

/***/ "./app/components/TextDetail/HeaderMenu/SearchStyle.css":
/*!**************************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/SearchStyle.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"highlight":"SearchStyle---highlight","searchListItem":"SearchStyle---searchListItem"};

/***/ }),

/***/ "./app/components/TextDetail/HeaderMenu/Settings.js":
/*!**********************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/Settings.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var images_wrench_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! images/wrench.svg */ "./app/images/wrench.svg");
/* harmony import */ var _UI_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/Slider */ "./app/components/UI/Slider.js");
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Check */ "./node_modules/@mui/icons-material/Check.js");
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/utility/useLocalStorage */ "./app/components/utility/useLocalStorage.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app_constants */ "./app/app_constants/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function Settings(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showOption = _useState2[0],
      setShowOption = _useState2[1];

  var _useLocalStorage = Object(components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__["default"])("WindowOneFont", "Tibetan"),
      _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
      fontSelect = _useLocalStorage2[0],
      setFontSelect = _useLocalStorage2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.body.style.setProperty("--tibetan-fonts", fontSelect);
  }, []);

  var handleClick = function handleClick() {
    setShowOption(function (prev) {
      return !prev;
    });
  };

  var handlefont = function handlefont(value) {
    setFontSelect(value);
    document.body.style.setProperty("--tibetan-fonts", "".concat(value));
    var update = document.getElementById("updateList");
    setTimeout(function () {
      update.click();
    }, 800);
    setShowOption(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["ClickAwayListener"], {
    onClickAway: function onClickAway() {
      return setShowOption(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    position: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    onClick: handleClick,
    size: "small",
    variant: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_wrench_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    height: 20,
    width: 20,
    fill: "currentColor"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Grow"], {
    "in": showOption
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["MenuList"], {
    dense: true,
    sx: {
      position: "absolute",
      right: 0,
      zIndex: 2,
      top: 40,
      bgcolor: "heading.main"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    max: 20,
    min: 7,
    initialvalue: props.textFontSize,
    changeSize: props.onChangedFontSize
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FontSelection, {
    selectFont: handlefont,
    selectedfont: fontSelect
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
    onClick: function onClick() {
      return props.onExport();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "subtitle2"
  }, "Export Document"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Settings);

var FontSelection = function FontSelection(_ref) {
  var selectFont = _ref.selectFont,
      selectedfont = _ref.selectedfont;
  var fontAvailable = app_constants__WEBPACK_IMPORTED_MODULE_6__["FONT_LIST"] || [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    textAlign: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Font:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    onChange: function onChange(e) {
      return selectFont(e.target.value);
    },
    value: selectedfont
  }, fontAvailable.map(function (font, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: index + "-fontselect",
      value: font
    }, font);
  })));
};

/***/ }),

/***/ "./app/components/TextDetail/HeaderMenu/TableOfContent.js":
/*!****************************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/TableOfContent.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Clear */ "./node_modules/@mui/icons-material/Clear.js");
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_3__);





function TableOfContent(_ref) {
  var changeShowTableContent = _ref.changeShowTableContent,
      showTableContent = _ref.showTableContent;

  function handleClick() {
    changeShowTableContent(!showTableContent);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: handleClick
  }, showTableContent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_3___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default.a, null)));
}

/* harmony default export */ __webpack_exports__["default"] = (TableOfContent);

/***/ }),

/***/ "./app/components/TextDetail/Note.css":
/*!********************************************!*\
  !*** ./app/components/TextDetail/Note.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","note":"Note---note","header":"Note---header","info":"Note---info","content":"Note---content","delete":"Note---delete"};

/***/ }),

/***/ "./app/components/TextDetail/Note.js":
/*!*******************************************!*\
  !*** ./app/components/TextDetail/Note.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Note; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Note_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Note.css */ "./app/components/TextDetail/Note.css");
/* harmony import */ var _Note_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Note_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__);
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








var Note = /*#__PURE__*/function (_React$Component) {
  _inherits(Note, _React$Component);

  var _super = _createSuper(Note);

  function Note() {
    _classCallCheck(this, Note);

    return _super.apply(this, arguments);
  }

  _createClass(Note, [{
    key: "delete",
    value: function _delete() {
      if (this.props["delete"]) {
        this.props["delete"](this.props.note);
      }
    }
  }, {
    key: "edit",
    value: function edit() {
      if (this.props.edit) {
        this.props.edit(this.props.note);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Box"], {
        className: _Note_css__WEBPACK_IMPORTED_MODULE_1___default.a.note,
        sx: {
          boxShadow: 2
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Note:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Note_css__WEBPACK_IMPORTED_MODULE_1___default.a.header
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: _Note_css__WEBPACK_IMPORTED_MODULE_1___default.a.info
      }, this.props.note.creatorUser.name), this.props["delete"] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Note_css__WEBPACK_IMPORTED_MODULE_1___default.a["delete"],
        onClick: this["delete"].bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
        "aria-label": "delete",
        size: "small"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5___default.a, {
        fontSize: "inherit"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Note_css__WEBPACK_IMPORTED_MODULE_1___default.a.content,
        onClick: this.edit.bind(this)
      }, this.props.note.content));
    }
  }]);

  return Note;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./app/components/TextDetail/NoteEditor.css":
/*!**************************************************!*\
  !*** ./app/components/TextDetail/NoteEditor.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","editorContainer":"NoteEditor---editorContainer","textEditor":"NoteEditor---textEditor"};

/***/ }),

/***/ "./app/components/TextDetail/NoteEditor.js":
/*!*************************************************!*\
  !*** ./app/components/TextDetail/NoteEditor.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoteEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var _NoteEditor_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoteEditor.css */ "./app/components/TextDetail/NoteEditor.css");
/* harmony import */ var _NoteEditor_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NoteEditor_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button.css */ "./app/components/TextDetail/Button.css");
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
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







var NoteEditor = /*#__PURE__*/function (_React$Component) {
  _inherits(NoteEditor, _React$Component);

  var _super = _createSuper(NoteEditor);

  function NoteEditor(props) {
    var _this;

    _classCallCheck(this, NoteEditor);

    _this = _super.call(this, props);
    _this.state = {
      content: props.note.content
    };
    return _this;
  }

  _createClass(NoteEditor, [{
    key: "save",
    value: function save() {
      var content = this.textarea ? this.textarea.value : "";
      this.props.saveNote(this.props.note, content);
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.props.cancel();
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var content = e.target instanceof HTMLTextAreaElement ? e.target.value : "";
      this.setState(function (prevState, props) {
        return {
          content: content
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _NoteEditor_css__WEBPACK_IMPORTED_MODULE_2___default.a.editorContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        className: _NoteEditor_css__WEBPACK_IMPORTED_MODULE_2___default.a.textEditor,
        ref: function ref(textarea) {
          return _this2.textarea = textarea;
        },
        value: this.state.content,
        onChange: this.handleChange.bind(this)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Button_css__WEBPACK_IMPORTED_MODULE_3___default.a.buttonContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Button_css__WEBPACK_IMPORTED_MODULE_3___default.a.save,
        onClick: this.save.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "annotation.save"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Button_css__WEBPACK_IMPORTED_MODULE_3___default.a.cancel,
        onClick: this.cancel.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "annotation.cancel"
      }))));
    }
  }]);

  return NoteEditor;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./app/components/TextDetail/QuestionEditor.css":
/*!******************************************************!*\
  !*** ./app/components/TextDetail/QuestionEditor.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","editorContainer":"QuestionEditor---editorContainer","textEditor":"QuestionEditor---textEditor"};

/***/ }),

/***/ "./app/components/TextDetail/QuestionEditor.js":
/*!*****************************************************!*\
  !*** ./app/components/TextDetail/QuestionEditor.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuestionEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _QuestionEditor_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionEditor.css */ "./app/components/TextDetail/QuestionEditor.css");
/* harmony import */ var _QuestionEditor_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_QuestionEditor_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button.css */ "./app/components/TextDetail/Button.css");
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
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







var QuestionEditor = /*#__PURE__*/function (_React$Component) {
  _inherits(QuestionEditor, _React$Component);

  var _super = _createSuper(QuestionEditor);

  function QuestionEditor(props) {
    var _this;

    _classCallCheck(this, QuestionEditor);

    _this = _super.call(this, props);
    _this.state = {
      content: props.question.content
    };
    return _this;
  }

  _createClass(QuestionEditor, [{
    key: "save",
    value: function save() {
      var content = this.textarea ? this.textarea.value : "";
      this.props.saveQuestion(this.props.question, this.props.defaultTitle, content);
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this.props.cancel();
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var content = e.target instanceof HTMLTextAreaElement ? e.target.value : "";
      this.setState(function (prevState, props) {
        return {
          content: content
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _QuestionEditor_css__WEBPACK_IMPORTED_MODULE_1___default.a.editorContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.questionQuote), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        className: _QuestionEditor_css__WEBPACK_IMPORTED_MODULE_1___default.a.textEditor,
        ref: function ref(textarea) {
          return _this2.textarea = textarea;
        },
        value: this.state.content,
        onChange: this.handleChange.bind(this)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Button_css__WEBPACK_IMPORTED_MODULE_2___default.a.buttonContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Button_css__WEBPACK_IMPORTED_MODULE_2___default.a.save,
        onClick: this.save.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "annotation.save"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Button_css__WEBPACK_IMPORTED_MODULE_2___default.a.cancel,
        onClick: this.cancel.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
        id: "annotation.cancel"
      }))));
    }
  }]);

  return QuestionEditor;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./app/components/TextDetail/QuestionView.css":
/*!****************************************************!*\
  !*** ./app/components/TextDetail/QuestionView.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"question":"QuestionView---question","threadLink":"QuestionView---threadLink"};

/***/ }),

/***/ "./app/components/TextDetail/QuestionView.js":
/*!***************************************************!*\
  !*** ./app/components/TextDetail/QuestionView.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QuestionView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _QuestionView_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuestionView.css */ "./app/components/TextDetail/QuestionView.css");
/* harmony import */ var _QuestionView_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_QuestionView_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnnotationControls.css */ "./app/components/TextDetail/AnnotationControls.css");
/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button.css */ "./app/components/TextDetail/Button.css");
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var lib_Question__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/Question */ "./app/lib/Question.js");
/* harmony import */ var _AnswerView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AnswerView */ "./app/components/TextDetail/AnswerView.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app_constants */ "./app/app_constants/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
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













var QuestionView = /*#__PURE__*/function (_React$Component) {
  _inherits(QuestionView, _React$Component);

  var _super = _createSuper(QuestionView);

  function QuestionView() {
    _classCallCheck(this, QuestionView);

    return _super.apply(this, arguments);
  }

  _createClass(QuestionView, [{
    key: "render",
    value: function render() {
      var topicUrl = app_constants__WEBPACK_IMPORTED_MODULE_9__["QUESTION_URL"] + this.props.question.topicId;
      var answerViews = [];
      var answers = this.props.question.answers;

      for (var i = 0; i < answers.length; i++) {
        var answer = answers[i];
        answerViews.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AnswerView__WEBPACK_IMPORTED_MODULE_6__["default"], {
          answer: answer,
          key: "answer_" + answer.created
        }));
      }

      var name = this.props.question.name.length > 0 ? this.props.question.name : this.props.question.username;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_QuestionView_css__WEBPACK_IMPORTED_MODULE_1___default.a.question, _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2___default.a.padding),
        sx: {
          boxShadow: 2
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2___default.a.text,
        dangerouslySetInnerHTML: {
          __html: this.props.question.content
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2___default.a.subTitle
      }, name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedDate"], {
        value: this.props.question.created
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_QuestionView_css__WEBPACK_IMPORTED_MODULE_1___default.a.threadLink, _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2___default.a.text)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: topicUrl,
        target: "_blank"
      }, "answer")), answerViews);
    }
  }]);

  return QuestionView;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



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



/***/ }),

/***/ "./app/components/TextDetail/SelectVersion.css":
/*!*****************************************************!*\
  !*** ./app/components/TextDetail/SelectVersion.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","selectVersion":"SelectVersion---selectVersion","selectEmpty":"SelectVersion---selectEmpty","selectOptions":"SelectVersion---selectOptions","styled-select":"SelectVersion---styled-select"};

/***/ }),

/***/ "./app/components/TextDetail/SelectVersion.js":
/*!****************************************************!*\
  !*** ./app/components/TextDetail/SelectVersion.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _SelectVersion_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectVersion.css */ "./app/components/TextDetail/SelectVersion.css");
/* harmony import */ var _SelectVersion_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SelectVersion_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");








var SelectVersion = function SelectVersion(props) {
  var witnesses = [];
  var tabName = "";
  var r = "";
  var classes = [];

  if (props.witnesses && props.activeWitness) {
    r = props.witnesses.findIndex(function (l) {
      return l.id === props.activeWitness.id;
    });
    witnesses = props.witnesses.map(function (witness) {
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
    witnesses = witnesses.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  var handleChangeWitness = function handleChangeWitness(e) {
    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(witnesses)) {
      props.onSelectedWitness(witnesses[e.target.value]);
    }
  };

  if (witnesses.length === 0) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["NativeSelect"], {
    onChange: handleChangeWitness,
    className: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_4___default.a.selectVersion,
    value: r,
    label: "Version",
    classes: {
      root: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_4___default.a.selectEmpty,
      select: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_4___default.a.selectOptions
    }
  }, witnesses.map(function (witness, key) {
    if (witness.id === props.activeWitness.id) classes.push(_SelectVersion_css__WEBPACK_IMPORTED_MODULE_4___default.a.selected);
    tabName = witness.source.name;

    if (witness.isWorking) {
      var _props$user;

      tabName = props.intl.locale === "en" ? ((_props$user = props.user) === null || _props$user === void 0 ? void 0 : _props$user.name) === "User" ? "Working" : "My Edition" : "མཉམ་འབྲེལ་པར་མ།";
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      key: "versionSelect-".concat(key),
      value: key,
      className: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_4___default.a.selectOptions
    }, tabName);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(SelectVersion)));

/***/ }),

/***/ "./app/components/TextDetail/SplitText.css":
/*!*************************************************!*\
  !*** ./app/components/TextDetail/SplitText.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","inlineWidth":"280px","annotationControls":"SplitText---annotationControls","annotationContent":"SplitText---annotationContent","subTitle":"SplitText---subTitle","title":"SplitText---title","sectionHeading":"SplitText---sectionHeading","text":"SplitText---text","padding":"SplitText---padding","arrowTop":"SplitText---arrowTop","arrowLeft":"SplitText---arrowLeft","arrowRight":"SplitText---arrowRight","inline":"SplitText---inline","arrow":"SplitText---arrow","arrowDs":"SplitText---arrowDs","nothingSelected":"SplitText---nothingSelected","anonymousMessage":"SplitText---anonymousMessage","noNotes":"SplitText---noNotes","breakButtons":"SplitText---breakButtons","splitText":"SplitText---splitText","splitTextRowContent":"SplitText---splitTextRowContent","splitTextRow":"SplitText---splitTextRow","pechaImage":"SplitText---pechaImage","image":"SplitText---image","controlsPlaceholder":"SplitText---controlsPlaceholder","hide":"SplitText---hide","pageNumber":"SplitText---pageNumber","image-loading":"SplitText---image-loading"};

/***/ }),

/***/ "./app/components/TextDetail/SplitText.js":
/*!************************************************!*\
  !*** ./app/components/TextDetail/SplitText.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SplitTextComponent; });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-virtualized/dist/es/AutoSizer */ "./node_modules/react-virtualized/dist/es/AutoSizer/index.js");
/* harmony import */ var react_virtualized_dist_es_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-virtualized/dist/es/List */ "./node_modules/react-virtualized/dist/es/List/index.js");
/* harmony import */ var images_lopenling_logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! images/lopenling_logo.png */ "./app/images/lopenling_logo.png");
/* harmony import */ var react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-virtualized/dist/es/CellMeasurer */ "./node_modules/react-virtualized/dist/es/CellMeasurer/index.js");
/* harmony import */ var react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-virtualized/styles.css */ "./node_modules/react-virtualized/styles.css");
/* harmony import */ var react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Text */ "./app/components/TextDetail/Text.js");
/* harmony import */ var lib_SplitText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lib/SplitText */ "./app/lib/SplitText.js");
/* harmony import */ var lib_SegmentedText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lib/SegmentedText */ "./app/lib/SegmentedText.js");
/* harmony import */ var lib_shallowEqual__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lib/shallowEqual */ "./app/lib/shallowEqual.js");
/* harmony import */ var _AnnotationControls__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AnnotationControls */ "./app/components/TextDetail/AnnotationControls.js");
/* harmony import */ var _AnnotationControlsContainer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AnnotationControlsContainer */ "./app/components/TextDetail/AnnotationControlsContainer.js");
/* harmony import */ var _SplitText_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SplitText.css */ "./app/components/TextDetail/SplitText.css");
/* harmony import */ var _SplitText_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_SplitText_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./AnnotationControls.css */ "./app/components/TextDetail/AnnotationControls.css");
/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var lib_TextSegment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lib/TextSegment */ "./app/lib/TextSegment.js");
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! grapheme-splitter */ "./node_modules/grapheme-splitter/index.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(grapheme_splitter__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-zoom-pan-pinch */ "./node_modules/react-zoom-pan-pinch/dist/index.esm.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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






















var MIN_SPACE_RIGHT = parseInt(_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_17___default.a.inlineWidth) + _AnnotationControls__WEBPACK_IMPORTED_MODULE_14__["CONTROLS_MARGIN_LEFT"];
var IMAGE_URL_PREFIX = "//iiif.bdrc.io/";
var IMAGE_URL_SUFFIX = "/full/full/0/default.jpg";
var IMAGE_START_PRE_KEY = "bdrcimg_pre";
var IMAGE_START_NUMBER_KEY = "bdrcimg_number";
var IMAGE_START_SUFFIX_KEY = "bdrcimg_suffix";
var _searchResultsCache = {};

function HttpUrl() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  if (data.includes("https")) return data;
  return "https://" + data;
}

var SplitTextComponent = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(SplitTextComponent, _React$PureComponent);

  var _super = _createSuper(SplitTextComponent);

  // Whether the mouse button is down
  function SplitTextComponent(props) {
    var _this;

    _classCallCheck(this, SplitTextComponent);

    _this = _super.call(this, props);
    _this.textAlignmentById = [];
    _this.childRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createRef"]("0");
    _this.list = null;
    _this.splitText = null;
    _this.cache = new react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_8__["CellMeasurerCache"]({
      fixedWidth: true
    });
    _this.imageAlignmentById = _this.props.imageAlignmentById;
    _this.changeImageScrollId = _this.props.changeImageScrollId;
    _this.splitTextRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createRef"](null);
    _this.rowRenderer = _this.rowRenderer.bind(_assertThisInitialized(_this));
    _this.textListVisible = props.textListVisible;
    _this.editMenuVisible = props.editMenuVisible;
    _this.isPanelLinked = props.isPanelLinked;
    _this.activeSelection = null;
    _this.selectedNodes = null;
    _this._mouseDown = false;
    _this._activeWitness = null;
    _this._didSetInitialScrollPosition = false;
    _this._modifyingSelection = false;
    _this.imageHeight = null;
    _this.imageWidth = null;
    _this.calculatedImageHeight = null;

    _this.processProps(props);

    _this.changeScrollToId = props.changeScrollToId;
    _this.changeSyncIdOnClick = props.changeSyncIdOnClick;
    _this.closeAnnotation = props.closeAnnotation;
    _this.scrollJump = props.scrollJump;
    _this.textAlignmentById = [];
    _this.scrollEvent = _this.scrollEvent.bind(_assertThisInitialized(_this));
    _this.selectedWindow = props.selectedWindow;
    _this.changeImageScrollId = props.changeImageScrollId;
    _this.imageData = props.imageData;
    _this.condition = props.condition;
    return _this;
  }

  _createClass(SplitTextComponent, [{
    key: "scrollEvent",
    value: function scrollEvent(e) {
      if (this.selectedWindow === 2) return null;

      if (this.selectedWindow === 1) {
        var list = [];
        var imageIdList = [];
        this.textAlignmentById.map(function (l) {
          var number = document.getElementById("s_" + l.start);

          if (number) {
            var _position = number.getBoundingClientRect();

            if (_position.top > 102) {
              list.push({
                id: l.id,
                start: l.start,
                target: l.TStart
              });
            }
          }
        }); // this.imageAlignmentById.map((l) => {
        //     let number = document.getElementById("s_" + l?.start);
        //     if (number) {
        //         let position = number.getBoundingClientRect();
        //         if (position.top > 102) {
        //             imageIdList.push({
        //                 id: l.id,
        //                 start: l.start,
        //                 end: l.end,
        //             });
        //         }
        //     }
        // });

        if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(list) || !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(imageIdList)) {
          if (this.selectedWindow === 1) {
            this.debouncedScroll(list);
          }
        }
      }
    }
  }, {
    key: "updateList",
    value: function updateList() {
      var resetCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var resetRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (this.props.showImages && !this.calculatedImageHeight && this.imageHeight && this.imageWidth) {
        this.calculatedImageHeight = this.calculateImageHeight();
      }

      if (this.list) {
        var list = this.list;

        if (resetCache) {
          if (resetRows !== null) {
            if (!Array.isArray(resetRows)) {
              this.cache.clear(resetRows);
            } else if (Array.isArray(resetRows)) {
              for (var i = 0; i < resetRows.length; i++) {
                var resetRow = resetRows[i];
                this.cache.clear(resetRow);
              }
            }
          } else {
            this.cache.clearAll();
            list.measureAllRows();
            list.recomputeRowHeights(0);
          }
        }

        list.forceUpdateGrid();
      }
    }
  }, {
    key: "mouseDown",
    value: function mouseDown() {
      this._mouseDown = true;
    }
  }, {
    key: "mouseUp",
    value: function mouseUp() {
      this._mouseDown = false;

      if (this.activeSelection) {
        var _segmentIds = this.processSelection(this.activeSelection);

        if (!_segmentIds) {
          _segmentIds = [];
        }

        this.props.didSelectSegmentIds(_segmentIds);
        this.activeSelection = null;
      }
    }
  }, {
    key: "handleSelection",
    value: function handleSelection(e) {
      if (!this._modifyingSelection) {
        this.activeSelection = document.getSelection();

        if (!this._mouseDown) {
          // sometimes, this gets called after the mouseDown event handler
          this.mouseUp();
        }
      } else {
        e.stopPropagation(); // Need to set this here. If set at callsite, the event will not
        // have time to propagate.

        this._modifyingSelection = false;
      }
    }
  }, {
    key: "processSelection",
    value: function processSelection(selection) {
      if (selection.rangeCount === 0 || selection.isCollapsed || selection.type === "Caret") {
        this.selectedNodes = null;
        return null;
      }

      var range = selection.getRangeAt(0);
      var start = range.startContainer;
      var startSpan = this.getNodeSegmentSpan(start);

      if (!(startSpan && startSpan.parentNode)) {
        // If the selection is not a text segment, ignore.
        // Assuming if the first node is a non-segment, they
        // all are.
        return null;
      }

      var nodes = this.getRangeNodes(range, startSpan.parentNode); // Check if the selection starts after the end of a node, and
      // if so remove that node.

      if (nodes.length > 0) {
        var firstNode = nodes[0];

        if (range.startOffset === firstNode.textContent.length) {
          nodes.shift();
        }
      }

      var end = range.endContainer;
      var endSpan = this.getNodeSegmentSpan(end);

      if (!(endSpan && endSpan.parentNode)) {
        return null;
      }

      if (endSpan && startSpan.parentNode !== endSpan.parentNode) {
        // Selection is spanning Texts.
        // We assume a selection can only run across a maximum
        // of two Texts.
        nodes = nodes.concat(this.getRangeNodes(range, endSpan.parentNode));
      } else {
        // Check if the selection ends before the start of a node, and
        // if so remove that node.
        if (range.endOffset === 0) {
          nodes.pop();
        }
      }

      this.selectedNodes = nodes;
      var nodeIds = [];
      nodes.reduce(function (accumulator, current) {
        if (current instanceof Element) {
          accumulator.push(current.id);
        }

        return accumulator;
      }, nodeIds);
      return nodeIds;
    }
  }, {
    key: "getNodeSegmentSpan",
    value: function getNodeSegmentSpan(node) {
      var currentNode = node;
      var span = null;
      var test = /^(i|s|ds)_/;

      while (!span && currentNode.parentNode) {
        if (currentNode instanceof Element && test.test(currentNode.id)) {
          span = currentNode;
        }

        currentNode = currentNode.parentNode;
      }

      return span;
    }
  }, {
    key: "getRangeNodes",
    value: function getRangeNodes(range, parentNode) {
      var rangeSpans = [];

      for (var i = 0, len = parentNode.childNodes.length; i < len; i++) {
        var node = parentNode.childNodes[i]; // TODO: add polyfill for i.e.?
        // e.g. https://gist.github.com/jonathansampson/6d09bd6d2e8c22c53868aec42e66b0f9

        if (range.intersectsNode(node)) {
          rangeSpans.push(node);
        }
      }

      return rangeSpans;
    }
  }, {
    key: "getControlsMeasurements",
    value: function getControlsMeasurements(props) {
      if (!this.splitText) {
        return null;
      }

      var splitTextComponent = this.splitText;
      var selectedTextIndex = null;
      var firstSelectedSegment = null;
      var selectedElementId = null;
      var splitTextRect = null;
      var segmentIdFunction = null;
      var selectedElementIds = [];
      var startPos = 0;

      if (props.activeAnnotation) {
        var activeAnnotation = props.activeAnnotation;

        var _props$splitText$anno = props.splitText.annotatedText.getPositionOfAnnotation(activeAnnotation);

        var _props$splitText$anno2 = _slicedToArray(_props$splitText$anno, 1);

        startPos = _props$splitText$anno2[0];

        if (startPos === null) {
          console.warn("No startPos in getControlsMeasurements");
          return null;
        }

        if (activeAnnotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_19__["ANNOTATION_TYPES"].pageBreak) {
          startPos -= 1;
        }

        if (activeAnnotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_19__["ANNOTATION_TYPES"].lineBreak) {
          startPos -= 1;
        } // Index of text containing end of annotation


        var positionEnd = startPos + activeAnnotation.length;
        if (activeAnnotation.length > 0) positionEnd -= 1;
        selectedTextIndex = props.splitText.getTextIndexOfPosition(positionEnd);
        splitTextRect = splitTextComponent.getBoundingClientRect();
      }

      var selectedAnnotatedSegments = [];

      if (props.selectedAnnotatedSegments && props.selectedAnnotatedSegments.length > 0) {
        selectedAnnotatedSegments = props.selectedAnnotatedSegments;

        for (var i = 0; i < selectedAnnotatedSegments.length; i++) {
          var _segment = selectedAnnotatedSegments[i];

          if (firstSelectedSegment === null && _segment instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_18__["default"]) {
            firstSelectedSegment = _segment;
            break;
          }
        }

        if (firstSelectedSegment) {
          if (firstSelectedSegment.length === 0 && props.activeAnnotation && props.activeAnnotation.isInsertion) {
            selectedElementId = Object(_Text__WEBPACK_IMPORTED_MODULE_10__["idForInsertion"])(firstSelectedSegment);
            segmentIdFunction = _Text__WEBPACK_IMPORTED_MODULE_10__["idForInsertion"];
          } else {
            selectedElementId = Object(_Text__WEBPACK_IMPORTED_MODULE_10__["idForSegment"])(firstSelectedSegment);
            segmentIdFunction = _Text__WEBPACK_IMPORTED_MODULE_10__["idForSegment"];
          }
        }
      } else if (props.activeAnnotation) {
        if (props.activeAnnotation.isDeletion) {
          var _segment2 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_18__["default"](startPos, "");

          selectedElementId = Object(_Text__WEBPACK_IMPORTED_MODULE_10__["idForDeletedSegment"])(_segment2);
          segmentIdFunction = _Text__WEBPACK_IMPORTED_MODULE_10__["idForDeletedSegment"];
          firstSelectedSegment = _segment2;
          selectedAnnotatedSegments = [firstSelectedSegment];
        } else if (props.activeAnnotation.isInsertion) {
          var _props$splitText$anno3 = props.splitText.annotatedText.getPositionOfAnnotation(props.activeAnnotation),
              _props$splitText$anno4 = _slicedToArray(_props$splitText$anno3, 1),
              start = _props$splitText$anno4[0];

          if (start) {
            var _segment3 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_18__["default"](start, "");

            selectedElementId = Object(_Text__WEBPACK_IMPORTED_MODULE_10__["idForInsertion"])(_segment3);
            segmentIdFunction = _Text__WEBPACK_IMPORTED_MODULE_10__["idForInsertion"];
            firstSelectedSegment = _segment3;
            selectedAnnotatedSegments = [firstSelectedSegment];
          }
        } else if (props.activeAnnotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_19__["ANNOTATION_TYPES"].pageBreak) {
          var _segment4 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_18__["default"](startPos + 1, "");

          var prevSegment = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_18__["default"](startPos, "");
          selectedElementId = Object(_Text__WEBPACK_IMPORTED_MODULE_10__["idForPageBreak"])(prevSegment);
          firstSelectedSegment = _segment4;
          selectedAnnotatedSegments = [_segment4];
          selectedElementIds = [selectedElementId];
        } else if (props.activeAnnotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_19__["ANNOTATION_TYPES"].lineBreak) {
          var _segment5 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_18__["default"](startPos + 1, "");

          var _prevSegment = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_18__["default"](startPos, "");

          selectedElementId = Object(_Text__WEBPACK_IMPORTED_MODULE_10__["idForLineBreak"])(_prevSegment);
          firstSelectedSegment = _segment5;
          selectedAnnotatedSegments = [_segment5];
          selectedElementIds = [selectedElementId];
        }
      }

      if (segmentIdFunction) {
        for (var _i2 = 0; _i2 < selectedAnnotatedSegments.length; _i2++) {
          var _segment6 = selectedAnnotatedSegments[_i2];

          if (_segment6 instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_18__["default"]) {
            var _segmentId = segmentIdFunction(_segment6);

            selectedElementIds.push(_segmentId);
          }
        }
      }

      if (selectedTextIndex != null && firstSelectedSegment && selectedElementId && splitTextRect) {
        return {
          selectedTextIndex: selectedTextIndex,
          firstSelectedSegment: firstSelectedSegment,
          selectedElementId: selectedElementId,
          splitTextRect: splitTextRect,
          selectedElementIds: selectedElementIds
        };
      } else {
        return null;
      }
    }
  }, {
    key: "shouldResetListCache",
    value: function shouldResetListCache(oldProps, newProps) {
      var shouldReset = false;

      if (oldProps.showImages !== newProps.showImages || this.pageBreaksChanged(oldProps, newProps)) {
        shouldReset = true;
      }

      return shouldReset;
    }
  }, {
    key: "pageBreaksChanged",
    value: function pageBreaksChanged(oldProps, newProps) {
      var oldTextBreaks = oldProps.splitText.getTextsFinalPositions();
      var newTextBreaks = newProps.splitText.getTextsFinalPositions();
      if (oldTextBreaks.length !== newTextBreaks.length) return true;
      return JSON.stringify(oldTextBreaks) !== JSON.stringify(newTextBreaks);
    }
  }, {
    key: "lineBreaksChanges",
    value: function lineBreaksChanges(oldProps, newProps) {
      var oldActiveAnnotation = oldProps.activeAnnotation;
      var newActiveAnnotation = newProps.activeAnnotation;
      var hasChanged = false;

      if (oldActiveAnnotation && oldActiveAnnotation.isType(lib_Annotation__WEBPACK_IMPORTED_MODULE_19__["ANNOTATION_TYPES"].lineBreak) && newProps.activeAnnotations && !newProps.activeAnnotations.hasOwnProperty(oldActiveAnnotation.uniqueId)) {
        hasChanged = true;
      }

      if (newActiveAnnotation && newActiveAnnotation.isType(lib_Annotation__WEBPACK_IMPORTED_MODULE_19__["ANNOTATION_TYPES"].lineBreak) && oldProps.activeAnnotations && !oldProps.activeAnnotations.hasOwnProperty(newActiveAnnotation.uniqueId)) {
        hasChanged = true;
      }

      return hasChanged;
    }
  }, {
    key: "selectedListRow",
    value: function selectedListRow(props) {
      var row = null;

      if (props.activeAnnotation) {
        row = props.splitText.getTextIndexOfPosition(props.activeAnnotation.start);
      }

      return row;
    }
  }, {
    key: "processProps",
    value: function processProps(props) {
      var _this2 = this;

      var changedWitness = false;

      if (!this.props.selectedWitness || props.selectedWitness && props.selectedWitness.id !== this.props.selectedWitness.id) {
        changedWitness = true;
        this._didSetInitialScrollPosition = false;
      }

      if (props.selectedSearchResult && (!this.props.selectedSearchResult || props.selectedSearchResult.start !== this.props.selectedSearchResult.start || props.selectedSearchResult.textId !== this.props.selectedSearchResult.textId)) {
        console.log("resetting scroll position from search result");
        this._didSetInitialScrollPosition = false;
      } // TODO: check if new selectedSearchResult and if so
      // set this._didSetInitialScrollPosition = false
      // make sure there's no numbers in selectedAnnotatedSegments
      // as we want to pass it to Text which only expects TextSegments


      this._filteredSelectedAnnotatedSegments = props.selectedAnnotatedSegments.reduce(function (acc, current) {
        if (current instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_18__["default"]) acc.push(current);
        return acc;
      }, []);
      var controlsMeasurements = this.getControlsMeasurements(props);

      if (controlsMeasurements) {
        this.selectedTextIndex = controlsMeasurements.selectedTextIndex;
        this.firstSelectedSegment = controlsMeasurements.firstSelectedSegment;
        this.splitTextRect = controlsMeasurements.splitTextRect;
        this.selectedElementId = controlsMeasurements.selectedElementId;
        this.selectedElementIds = controlsMeasurements.selectedElementIds;
      }

      if (props.textListVisible !== this.textListVisible || props.editMenuVisible !== this.editMenuVisible) {
        setTimeout(function () {
          _this2.textListVisible = props.textListVisible;
          _this2.editMenuVisible = props.editMenuVisible;

          _this2.updateList(true);
        }, 500);
      } else {
        if (changedWitness) {
          this.updateList(true);
        } else if (this.pageBreaksChanged(this.props, props)) {
          var selectedRows = null;
          var currentSelectedRow = this.selectedListRow(this.props);
          var newSelectedRow = this.selectedListRow(props);

          if (currentSelectedRow && newSelectedRow) {
            var firstChangedRow = currentSelectedRow > newSelectedRow ? newSelectedRow : currentSelectedRow;
            var splitRowTexts = this.props.splitText.texts;
            selectedRows = [];

            for (var i = firstChangedRow, len = splitRowTexts.length; i < len; i++) {
              selectedRows.push(i);
            }
          }

          this.updateList(true, selectedRows);
        } else if (this.lineBreaksChanges(this.props, props)) {
          var selectedRow = this.selectedListRow(props);
          if (!selectedRow) selectedRow = this.selectedListRow(this.props);
          var _splitRowTexts = this.props.splitText.texts;
          var _selectedRows = [];

          if (selectedRow !== null) {
            for (var _i3 = selectedRow, _len = _splitRowTexts.length; _i3 < _len; _i3++) {
              _selectedRows.push(_i3);
            }

            this.updateList(true, _selectedRows);
          }
        } else if (this.props.fontSize !== props.fontSize) {
          this.updateList(true);
        } else if (this.props.activeAnnotation && props.activeAnnotation && this.annotationsInSameLocation(this.props.activeAnnotation, props.activeAnnotation)) {
          this.updateList(true, this.selectedListRow(props));
        } else {
          this.updateList(this.shouldResetListCache(this.props, props));
        }
      }
    }
  }, {
    key: "annotationsInSameLocation",
    value: function annotationsInSameLocation(anno1, anno2) {
      if (anno1.start === anno2.start && anno1.length === anno2.length) {
        return true;
      }

      return false;
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(props) {
      this.processProps(props);
    }
  }, {
    key: "scrollToIndex",
    value: function scrollToIndex(selectedTextIndex) {
      var list = this.list;
      setTimeout(function () {
        list.scrollToRow(selectedTextIndex);
        setTimeout(function () {
          list.scrollToPosition(list.props.scrollTop - 300);
        }, 0);
      }, 100);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.resizeHandler = lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(function () {
        _this3.calculatedImageHeight = null;

        _this3.updateList();
      }, 600).bind(this);
      this.debouncedScroll = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (list) {
        if (list.length) {
          var _list$;

          _this3.changeScrollToId({
            id: (_list$ = list[0]) === null || _list$ === void 0 ? void 0 : _list$.start,
            from: 1
          });
        } // if (imagelist.length) {
        //     this.changeImageScrollId({
        //         id: {
        //             start: imagelist[0]?.start,
        //             end: imagelist[0]?.end,
        //         },
        //         from: 1,
        //     });
        // }

      }, 1000);
      window.addEventListener("resize", this.resizeHandler);
      this.selectionHandler = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (e) {
        _this3.handleSelection(e);
      }, 200).bind(this);
      document.addEventListener("selectionchange", this.selectionHandler);
      document.addEventListener("mousedown", this.mouseDown.bind(this), true);
      document.addEventListener("mouseup", this.mouseUp.bind(this), true);
      this.processProps(this.props);
      this.timer = setTimeout(function () {
        _this3.resizeHandler();
      }, 2000);
      this.splitText.style.scrollBehavior = "smooth";
      this.componentDidUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props,
          _this$props2,
          _this4 = this;

      this.imageData = this.props.imageData;

      if (this.imageData !== (prevProps === null || prevProps === void 0 ? void 0 : prevProps.imageData)) {
        this.calculatedImageHeight = null;
        this.updateList(true);
      }

      var Alignment = this.props.textAlignment;
      this.imageAlignmentById = this.props.imageAlignmentById;
      this.SearchSyncId = this.props.syncIdOnSearch || null;
      this.condition = this.props.condition;
      var scrollToId = this.props.scrollToId;
      var list = this.list;
      var con = (prevProps === null || prevProps === void 0 ? void 0 : prevProps.searchResults) !== ((_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.searchResults) || (prevProps === null || prevProps === void 0 ? void 0 : prevProps.syncIdOnSearch) !== ((_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.syncIdOnSearch); // scroll to word searched using search input

      if (con && this.props.searchResults) {
        if (this.SearchSyncId) {
          var selectedTextIndex = this.props.splitText.getTextIndexOfPosition(this.SearchSyncId);
          this.srcollToIndex(selectedTextIndex);
        }
      }

      this.textAlignmentById = this.props.textAlignmentById;
      this.selectedWindow = this.props.selectedWindow;
      this.targetId = this.props.syncIdOnClick;

      if (this.selectedNodes && this.selectedNodes.length > 0) {
        var selectedNodes = this.selectedNodes;
        var selectedSegments = this.props.selectedAnnotatedSegments;
        setTimeout(function () {
          var selRange = document.createRange();
          var startNode = selectedNodes[0];
          var endNode = selectedNodes[selectedNodes.length - 1];
          var lastSegment = selectedSegments[selectedSegments.length - 1];

          if (lastSegment instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_18__["default"]) {
            var lastElement = document.getElementById(Object(_Text__WEBPACK_IMPORTED_MODULE_10__["idForSegment"])(lastSegment));
            if (lastElement) endNode = lastElement;
          }

          if (startNode instanceof Element && endNode instanceof Element) {
            startNode = document.getElementById(startNode.id);
            endNode = document.getElementById(endNode.id);

            if (startNode && endNode) {
              selRange.setStart(startNode, 0);
              selRange.setEnd(endNode, endNode.childNodes.length);
              var sel = document.getSelection();

              if (sel) {
                _this4._modifyingSelection = true;
                sel.removeAllRanges();
                sel.addRange(selRange);
                _this4.selectedNodes = null;
              }
            }
          }
        }, 0);
      }

      if (!this._didSetInitialScrollPosition && this.list) {
        var _list = this.list;

        if (this.props.activeAnnotation || this.props.selectedSearchResult) {
          var _selectedTextIndex = this.getSelectedTextIndex();

          setTimeout(function () {
            _list.scrollToRow(_selectedTextIndex); // scrollToRow often positions the annotation at the
            // bottom of the screen, so scroll up a bit


            setTimeout(function () {
              _list.scrollToPosition(_list.props.scrollTop - 300);
            }, 0);
          }, 100);
        }

        this._didSetInitialScrollPosition = true;
      } //Video and audio alignment scrolling


      if (scrollToId.from == "video" && scrollToId.id) {
        var start = scrollToId.id;

        var _selectedTextIndex2 = this.props.splitText.getTextIndexOfPosition(start);

        setTimeout(function () {
          list.scrollToRow(_selectedTextIndex2);
          setTimeout(function () {
            list.scrollToPosition(list.props.scrollTop - 300);
          }, 0);
        }, 100);
      } // scroll dom with respect to window 2 scrolling


      if (this.selectedWindow === 2 && scrollToId.from == 2 && this.condition && scrollToId.id !== null) {
        this.textAlignmentById = this.props.textAlignmentById || [];

        if (Alignment) {
          var req = this.textAlignmentById.find(function (l) {
            return l.TStart === scrollToId.id;
          });

          var _start = req === null || req === void 0 ? void 0 : req.start;

          if (_start !== null) {
            var _selectedTextIndex3 = this.props.splitText.getTextIndexOfPosition(_start);

            this.scrollToIndex(_selectedTextIndex3);
          }
        }
      } // scroll dom with respect to window 2 click
      //for scrolling to the highlighted alignment if its outside visible DOM


      if (this.targetId && scrollToId.from === "ua" && this.selectedWindow === 2 && scrollToId.id === "ua") {
        var _clickIdObj$source_se;

        var clickIdObj = Alignment.alignment.find(function (l) {
          return _this4.targetId >= l.target_segment.start && _this4.targetId < l.target_segment.end;
        });
        var syncClickTargetId = clickIdObj === null || clickIdObj === void 0 ? void 0 : (_clickIdObj$source_se = clickIdObj.source_segment) === null || _clickIdObj$source_se === void 0 ? void 0 : _clickIdObj$source_se.start;

        var _selectedTextIndex4 = this.props.splitText.getTextIndexOfPosition(syncClickTargetId);

        this.scrollToIndex(_selectedTextIndex4);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("mousedown", this);
      document.removeEventListener("mouseup", this);
      window.removeEventListener("resize", this.resizeHandler);
      document.removeEventListener("selectionchange", this.selectionHandler);
      clearTimeout(this.timer);
    }
  }, {
    key: "calculateImageHeight",
    value: function calculateImageHeight() {
      var height = null;

      if (this.imageHeight && this.imageWidth) {
        var ratio = this.imageWidth / this.imageHeight;
        var pechaImageClass = _SplitText_css__WEBPACK_IMPORTED_MODULE_16___default.a.pechaImage;
        var pechaImageContainers = document.getElementsByClassName(pechaImageClass);

        if (pechaImageContainers.length > 0) {
          var container = pechaImageContainers[0];
          height = container.offsetWidth / ratio;
        }
      }

      return height;
    }
  }, {
    key: "getSelectedTextIndex",
    value: function getSelectedTextIndex() {
      var selectedTextIndex = 0;
      var startPos = null;

      if (this.props.activeAnnotation) {
        var _this$props$splitText = this.props.splitText.annotatedText.getPositionOfAnnotation(this.props.activeAnnotation);

        var _this$props$splitText2 = _slicedToArray(_this$props$splitText, 1);

        startPos = _this$props$splitText2[0];
      } else if (this.props.selectedSearchResult) {
        var _segment7 = this.props.splitText.annotatedText.segmentAtOriginalPosition(this.props.selectedSearchResult.start);

        if (_segment7 instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_18__["default"]) {
          startPos = _segment7.start;
        } else if (typeof _segment7 === "number") {
          startPos = _segment7;
        }
      }

      if (startPos) {
        selectedTextIndex = this.props.splitText.getTextIndexOfPosition(startPos);
      }

      return selectedTextIndex;
    }
  }, {
    key: "getBaseAnnotation",
    value: function getBaseAnnotation(annotation) {
      var _this$props$splitText3 = this.props.splitText.annotatedText.getPositionOfAnnotation(annotation),
          _this$props$splitText4 = _slicedToArray(_this$props$splitText3, 1),
          start = _this$props$splitText4[0];

      if (start === null) start = 0;
      return this.props.splitText.annotatedText.getBaseAnnotation(start, annotation.content.length);
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var props = this.props;
      var rowRenderer = this.rowRenderer;
      var cache = this.cache;
      var key = props.selectedWitness ? props.selectedWitness.id : 0;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
        className: _SplitText_css__WEBPACK_IMPORTED_MODULE_16___default.a.splitText,
        ref: function ref(div) {
          return _this5.splitText = div;
        },
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("button", {
        id: "updateList",
        style: {
          display: "none"
        },
        onClick: this.resizeHandler
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_5__["AutoSizer"], {
        disableWidth: true
      }, function (_ref) {
        var height = _ref.height;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_virtualized_dist_es_List__WEBPACK_IMPORTED_MODULE_6__["List"], {
          width: 1,
          ref: function ref(list) {
            return _this5.list = list;
          },
          height: height,
          rowCount: props.splitText.texts.length,
          rowHeight: cache.rowHeight,
          rowRenderer: rowRenderer,
          overscanRowCount: 0,
          deferredMeasurementCache: cache,
          onScroll: _this5.scrollEvent,
          scrollToAlignment: "start",
          containerStyle: {
            width: "100%",
            maxWidth: "100%"
          },
          style: {
            width: "100%"
          }
        });
      }));
    }
  }, {
    key: "getImageUrl",
    value: function getImageUrl(pageIndex) {
      if (!this.props.selectedWitness || !this.props.selectedWitness.properties) return "";
      var witnessProperties = this.props.selectedWitness.properties;
      var prefix = witnessProperties[IMAGE_START_PRE_KEY];
      var start = witnessProperties[IMAGE_START_NUMBER_KEY];
      var suffix = witnessProperties[IMAGE_START_SUFFIX_KEY];
      var id = Number(start) + pageIndex;
      var url = IMAGE_URL_PREFIX + prefix + id + "." + suffix + IMAGE_URL_SUFFIX;
      return url;
    }
  }, {
    key: "getStringPositions",
    value: function getStringPositions(text, string, index) {
      var uniqueId = this.props.splitText.annotatedText.getUniqueId();

      if (!_searchResultsCache.hasOwnProperty(uniqueId)) {
        _searchResultsCache = _defineProperty({}, uniqueId, {});
      }

      if (!_searchResultsCache[uniqueId].hasOwnProperty(string)) {
        _searchResultsCache[uniqueId] = _defineProperty({}, string, {});
      }

      if (_searchResultsCache[uniqueId][string].hasOwnProperty(index)) {
        return _searchResultsCache[uniqueId][string][index];
      }

      var splitter = new grapheme_splitter__WEBPACK_IMPORTED_MODULE_21___default.a();
      var content = text.getText();
      var firstSegment = text.segments[0];
      var startingPosition = firstSegment === null || firstSegment === void 0 ? void 0 : firstSegment.start;
      var positions = [];
      var position = content.indexOf(string);

      while (position !== -1) {
        positions.push(position);
        position = content.indexOf(string, position + 1);
      } // Position needs to be position in complete text


      var verifiedPositions = {};

      if (positions.length > 0) {
        var graphemes = splitter.splitGraphemes(content);
        var _position2 = 0;
        var activePosition = null;

        for (var i = 0; i < graphemes.length; i++) {
          var grapheme = graphemes[i];
          var graphemeEnd = _position2 + (grapheme.length - 1);

          if (activePosition !== null) {
            var expectedEnd = activePosition + (string.length - 1);

            if (graphemeEnd >= expectedEnd) {
              verifiedPositions[activePosition + startingPosition] = [activePosition + startingPosition, graphemeEnd + startingPosition];
              activePosition = null;
            }
          } else if (positions.indexOf(_position2) !== -1) {
            if (string.length === grapheme.length) {
              verifiedPositions[_position2 + startingPosition] = [_position2 + startingPosition, graphemeEnd + startingPosition];
            } else if (string.length > grapheme.length) {
              activePosition = _position2;
            }
          } else {
            activePosition = null;
          }

          _position2 += grapheme.length;
        }
      }

      _searchResultsCache[uniqueId][string][index] = verifiedPositions;
      return verifiedPositions;
    }
  }, {
    key: "rowRenderer",
    value: function rowRenderer(_ref2) {
      var key = _ref2.key,
          index = _ref2.index,
          parent = _ref2.parent,
          style = _ref2.style;
      var props = this.props;
      var cache = this.cache;
      var component = this;
      var pechaImageClass = props.showImages ? _SplitText_css__WEBPACK_IMPORTED_MODULE_16___default.a.pechaImage : null;
      var imageUrl = ""; // if (this.imageData?.alignment && props.selectedWitness) {
      //     imageUrl = HttpUrl(
      //         this.imageData?.alignment[index]?.target_segment
      //     );
      // }

      if (props.selectedWitness && props.selectedWitness.properties && props.selectedWitness.properties.hasOwnProperty(IMAGE_START_PRE_KEY)) {
        imageUrl = this.getImageUrl(index);
      }

      var searchStringPositions = {};
      var searchValue = this.props.searchValue;

      if (searchValue && searchValue.length > 0 && props.splitText) {
        searchStringPositions = this.getStringPositions(props.splitText.texts[index], searchValue, index);
      }

      var pechaStyles = {};

      if (props.showImages && pechaImageClass && this.calculatedImageHeight) {
        pechaStyles["height"] = this.calculatedImageHeight + "px";
      }

      var newStyle = _objectSpread(_objectSpread({}, style), {}, {
        height: style.height + 10,
        cursor: !this.props.isAnnotating ? "pointer" : "text"
      });

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_8__["CellMeasurer"], {
        columnIndex: 0,
        key: key,
        parent: parent,
        rowIndex: index,
        cache: cache
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
        key: key,
        style: newStyle,
        className: _SplitText_css__WEBPACK_IMPORTED_MODULE_16___default.a.splitTextRow,
        ref: this.splitTextRef,
        id: "index_".concat(index)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
        className: _SplitText_css__WEBPACK_IMPORTED_MODULE_16___default.a.splitTextRowContent
      }, props.showImages && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
        className: pechaImageClass,
        style: pechaStyles
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("img", {
        alt: "Text related Image",
        className: _SplitText_css__WEBPACK_IMPORTED_MODULE_16___default.a.image,
        src: imageUrl,
        width: "100%",
        height: "100%",
        loading: "lazy",
        decoding: "async",
        onLoad: function onLoad(e) {
          if (e.target && component.imageWidth === null) {
            component.imageWidth = e.target.naturalWidth;
            component.imageHeight = e.target.naturalHeight;
            component.calculatedImageHeight = null;
            window.setTimeout(component.updateList.bind(component), 0);
          }
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Text__WEBPACK_IMPORTED_MODULE_10__["default"], {
        ref: this.childRef,
        segmentedText: props.splitText.texts[index],
        annotations: props.annotations,
        activeAnnotations: props.activeAnnotations,
        activeAnnotation: props.activeAnnotation,
        row: index,
        selectedSegmentId: props.selectedSegmentId,
        annotationPositions: props.annotationPositions,
        selectedAnnotatedSegments: this._filteredSelectedAnnotatedSegments,
        getBaseAnnotation: this.getBaseAnnotation.bind(this),
        activeWitness: this.props.selectedWitness,
        searchValue: searchValue,
        selectedSearchResult: this.props.selectedSearchResult,
        searchStringPositions: searchStringPositions,
        fontSize: props.fontSize,
        changeSyncIdOnClick: this.props.changeSyncIdOnClick,
        changeScrollToId: this.props.changeScrollToId,
        textAlignmentById: this.props.textAlignmentById,
        selectedSourceRange: this.props.selectedSourceRange,
        selectedTargetRange: this.props.selectedTargetRange,
        changeSelectedRange: this.props.changeSelectedRange,
        condition: this.condition
      })), this.props.isAnnotating && this.selectedTextIndex === index && this.props.activeAnnotation && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_AnnotationControlsContainer__WEBPACK_IMPORTED_MODULE_15__["default"], {
        annotationPositions: props.annotationPositions,
        annotatedText: props.splitText.annotatedText,
        activeAnnotation: props.activeAnnotation,
        inline: true,
        firstSelectedSegment: this.firstSelectedSegment,
        splitTextRect: this.splitTextRect,
        selectedElementId: this.selectedElementId,
        pechaImageClass: pechaImageClass,
        splitText: props.splitText,
        selectedElementIds: this.selectedElementIds,
        list: this.list
      })));
    }
  }]);

  return SplitTextComponent;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);



/***/ }),

/***/ "./app/components/TextDetail/TableOfContent/TableOfContent.css":
/*!*********************************************************************!*\
  !*** ./app/components/TextDetail/TableOfContent/TableOfContent.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"TableContent":"TableOfContent---TableContent"};

/***/ }),

/***/ "./app/components/TextDetail/TableOfContent/TableOfContent.js":
/*!********************************************************************!*\
  !*** ./app/components/TextDetail/TableOfContent/TableOfContent.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loader */ "./node_modules/react-loader/lib/react-loader.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TableOfContent_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TableOfContent.css */ "./app/components/TextDetail/TableOfContent/TableOfContent.css");
/* harmony import */ var _TableOfContent_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TableOfContent_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/InputBase */ "./node_modules/@mui/material/InputBase/index.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Search = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__["styled"])("div")(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__["alpha"])(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__["alpha"])(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%"
  }, theme.breakpoints.up("sm"), {
    marginLeft: theme.spacing(1),
    width: "auto"
  });
});
var SearchIconWrapper = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__["styled"])("div")(function (_ref3) {
  var theme = _ref3.theme;
  return {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
});
var StyledInputBase = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__["styled"])(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_6__["default"])(function (_ref4) {
  var theme = _ref4.theme;
  return {
    color: "inherit",
    "& .MuiInputBase-input": _defineProperty({
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "calc(1em + ".concat(theme.spacing(4), ")"),
      transition: theme.transitions.create("width"),
      width: "100%"
    }, theme.breakpoints.up("sm"), {
      width: "0",
      cursor: "pointer",
      "&:focus": {
        width: "20ch"
      }
    })
  };
});

function TableOfContent() {
  var data = [{
    Id: 1,
    Title: "chapter 1",
    segment_id: 0
  }, {
    Id: 2,
    Title: "chapter 2",
    segment_id: 400
  }];
  var loaded = data.length > 0 ? true : false;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: _TableOfContent_css__WEBPACK_IMPORTED_MODULE_3___default.a.TableContent,
    sx: {
      bgcolor: "heading.main",
      color: "text.primary",
      width: "100%",
      height: "100%",
      paddingInline: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    sx: {
      justifyContent: "space-between",
      paddingLeft: "0 !important",
      margin: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    textTransform: "uppercase",
    component: "h6"
  }, "Table Of Content"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Search, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchIconWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_5___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInputBase, {
    placeholder: "Search\u2026",
    inputProps: {
      "aria-label": "search"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], null, data.map(function (list, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      key: "TableContent-" + index,
      sx: {
        cursor: "pointer",
        width: "fit-content",
        "&:hover": {
          fontWeight: "bold"
        }
      }
    }, list.Title);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(TableOfContent));

/***/ }),

/***/ "./app/components/TextDetail/Text.css":
/*!********************************************!*\
  !*** ./app/components/TextDetail/Text.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","paddingSide":"20px","maxWidth":"600px","text":"Text---text","syncIdClass":"Text---syncIdClass","textFirstRow":"Text---textFirstRow","textLine":"Text---textLine","textline":"Text---textline","limitWidth":"Text---limitWidth","textContainer":"Text---textContainer","annotation":"Text---annotation","selectedAnnotation":"Text---selectedAnnotation","removedByAnnotation":"Text---removedByAnnotation","insertion":"Text---insertion","highlight":"Text---highlight","activeHighlight":"Text---activeHighlight","lineBreak":"Text---lineBreak","pageBreak":"Text---pageBreak","selectedRangelight":"Text---selectedRangelight","selectedRangeDark":"Text---selectedRangeDark","selectedImage":"Text---selectedImage"};

/***/ }),

/***/ "./app/components/TextDetail/Text.js":
/*!*******************************************!*\
  !*** ./app/components/TextDetail/Text.js ***!
  \*******************************************/
/*! exports provided: idForSegment, idForDeletedSegment, idForInsertion, idForPageBreak, idForLineBreak, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idForSegment", function() { return idForSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idForDeletedSegment", function() { return idForDeletedSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idForInsertion", function() { return idForInsertion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idForPageBreak", function() { return idForPageBreak; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idForLineBreak", function() { return idForLineBreak; });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Text_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Text.css */ "./app/components/TextDetail/Text.css");
/* harmony import */ var _Text_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Text_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_TextSegment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/TextSegment */ "./app/lib/TextSegment.js");
/* harmony import */ var lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/AnnotatedText */ "./app/lib/AnnotatedText.js");
/* harmony import */ var lib_SegmentedText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/SegmentedText */ "./app/lib/SegmentedText.js");
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! grapheme-splitter */ "./node_modules/grapheme-splitter/index.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(grapheme_splitter__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/index.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var images_page_break_icon_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! images/page_break_icon.svg */ "./app/images/page_break_icon.svg");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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












function idForSegment(segment) {
  return "s_" + segment.start;
}
function idForDeletedSegment(segment) {
  return "ds_" + segment.start;
}
function idForInsertion(segment) {
  return "i_" + segment.start;
}
function idForPageBreak(segment) {
  return "p_" + (segment.end + 1);
}
function idForLineBreak(segment) {
  return "l_" + (segment.end + 1);
}


var PARA_SYMBOL = String.fromCharCode(182);
var pageBreakIconString = react_dom_server__WEBPACK_IMPORTED_MODULE_11___default.a.renderToStaticMarkup( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(images_page_break_icon_svg__WEBPACK_IMPORTED_MODULE_12__["default"], null));

var Text = /*#__PURE__*/function (_React$Component) {
  _inherits(Text, _React$Component);

  var _super = _createSuper(Text);

  function Text(props) {
    var _this;

    _classCallCheck(this, Text);

    _this = _super.call(this, props);
    _this.textAlignmentById = [];
    _this.state = {
      segmentedText: props.segmentedText
    };
    _this.textAlignmentById = _this.props.textAlignmentById;
    _this._renderedSegments = null;
    _this._renderedHtml = null;
    _this.rangeSelect = [];
    _this.theme = props.theme;
    return _this;
  }

  _createClass(Text, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState(function (prevState, props) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          segmentedText: nextProps.segmentedText
        });
      });
    }
  }, {
    key: "annotationsForSegment",
    value: function annotationsForSegment(segment) {
      var annotations = [];
      var foundAnnotations = this.props.annotationPositions[String(segment.start)];

      if (foundAnnotations) {
        annotations = foundAnnotations;
      }

      var insertions = this.props.annotationPositions[lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_5__["INSERTION_KEY"] + segment.start] || [];
      var deletions = this.props.annotationPositions[lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_5__["DELETION_KEY"] + segment.start] || [];
      var pageBreaks = this.props.annotationPositions[lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_5__["PAGE_BREAK_KEY"] + (segment.end + 1)] || [];
      var lineBreaks = this.props.annotationPositions[lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_5__["LINE_BREAK_KEY"] + (segment.end + 1)] || [];
      return annotations.concat(insertions, deletions, pageBreaks, lineBreaks);
    }
  }, {
    key: "segmentsContainSegment",
    value: function segmentsContainSegment(segments, segment) {
      for (var i = 0; i < segments.length; i++) {
        var listSegment = segments[i];

        if (listSegment.start === segment.start && listSegment.text === segment.text) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "selectedElement",
    value: function selectedElement(element) {
      if (element.tagName === "DIV") {
        this.props.selectedSegmentId("");
        return;
      }

      var sourceRangeSelection = [];
      var targetRangeSelection = [];
      var selection = document.getSelection();
      var clickId = parseInt(element.id.replace("s_", ""));
      this.props.changeSyncIdOnClick(clickId);

      if (element !== null && element !== void 0 && element.id.includes("s_") && this.props.condition) {
        this.props.changeScrollToId({
          id: null,
          from: null
        });

        var _id = parseInt(element.id.replace("s_", ""));

        var rangeUnique = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(this.textAlignmentById, function (l) {
          return _id >= l.start && _id < l.end;
        });

        if (rangeUnique) {
          for (var i = rangeUnique.start; i < rangeUnique.end; i++) {
            sourceRangeSelection.push(i);
          }

          for (var _i = rangeUnique.TStart; _i < rangeUnique.TEnd; _i++) {
            targetRangeSelection.push(_i);
          }

          this.props.changeSelectedRange({
            source: sourceRangeSelection,
            target: targetRangeSelection
          });
        }
      }

      if (selection && selection.type === "Range") {
        return;
      }

      this.props.selectedSegmentId(element.id);

      if (!element.id) {
        this.props.changeSelectedRange({
          source: [],
          target: []
        });
      }
    }
  }, {
    key: "generateHtml",
    value: function generateHtml(renderProps, renderState) {
      var segments = renderState.segmentedText.segments;
      var textLineClass = _Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.textLine;
      var segmentHTML = '<p class="' + textLineClass + '">';
      if (segments.length === 0) return {
        __html: segmentHTML
      };
      var insertionClass = _Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.insertion;
      var endPosition = segments[segments.length - 1].end + 1;

      if (renderProps.annotationPositions[lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_5__["INSERTION_KEY"] + endPosition]) {
        var endSegment = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_4__["default"](endPosition, "");
        segments.push(endSegment);
      }

      if (renderProps.annotationPositions[lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_5__["PAGE_BREAK_KEY"] + endPosition]) {
        var _endSegment = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_4__["default"](endPosition, "");

        segments.push(_endSegment);
      }

      if (renderProps.annotationPositions[lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_5__["LINE_BREAK_KEY"] + endPosition]) {
        var _endSegment2 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_4__["default"](endPosition, "");

        segments.push(_endSegment2);
      }

      var activeAnnotations = renderProps.activeAnnotations || {};
      var highlightClass = _Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.highlight;
      var activeHighlightClass = _Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.activeHighlight;
      var activeSearchResultEnd = null;
      var processedInactiveInsertions = {};

      for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        var classAttribute = "";
        var classes = [];
        var annotations = this.annotationsForSegment(segment);
        var deletionText = null;
        var selectedCurrentDeletion = false;
        var selectedCurrentPageBreak = false;
        var selectedCurrentLineBreak = false;
        var lineBreakAnnotation = false;
        var pageBreakAnnotation = null;

        if (annotations) {
          var activeInsertions = [];
          var inactiveInsertions = [];
          var remainingAnnotations = [];
          var activeDeletions = [];

          for (var j = 0, len = annotations.length; j < len; j++) {
            var _annotation = annotations[j];

            if (_annotation.isInsertion) {
              if (_annotation.uniqueId in activeAnnotations) {
                activeInsertions.push(_annotation);
              } else {
                // Only first inactive insertion at a position will
                // be shown, so only process first one.
                // TODO: need to check if there is an active insertion
                // at the same place. If so, ignore inactive insertion
                // as they should be shown in the popover.
                var annotationKey = _annotation.start;

                if (!processedInactiveInsertions.hasOwnProperty(annotationKey)) {
                  inactiveInsertions.push(_annotation);
                  processedInactiveInsertions[annotationKey] = _annotation;
                }
              }
            } else {
              if (_annotation.isDeletion) {
                if (_annotation.uniqueId in activeAnnotations) {
                  activeDeletions.push(_annotation);
                }
              } else if (_annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_7__["ANNOTATION_TYPES"].pageBreak && !renderProps.activeWitness.isWorking) {
                pageBreakAnnotation = _annotation;
              } else if (_annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_7__["ANNOTATION_TYPES"].lineBreak && !renderProps.activeWitness.isWorking) {
                lineBreakAnnotation = _annotation;
              } else {
                remainingAnnotations.push(_annotation);
              }
            }
          }

          if (activeInsertions.length === 0 && inactiveInsertions.length > 0) {
            var insertion = inactiveInsertions[0];
            var insertionId = idForInsertion(segment);
            var insertionClasses = insertionClass;

            if (renderProps.activeAnnotation && renderProps.activeAnnotation.isInsertion && renderProps.activeAnnotation.start === insertion.start) {
              insertionClasses += " " + _Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectedAnnotation;
            }

            segmentHTML += "<span id=" + insertionId + " key=" + insertionId + ' class="' + insertionClasses + '">' + insertion.content + "</span>";
          }

          if (activeDeletions.length > 0) {
            var activeDeletion = activeDeletions[0];
            var baseAnnotation = renderProps.getBaseAnnotation(activeDeletion);
            deletionText = baseAnnotation.content;

            if (renderProps.activeAnnotation && renderProps.activeAnnotation.isDeletion && renderProps.activeAnnotation.start === activeDeletion.start && renderProps.activeAnnotation.length === activeDeletion.length && segment.length === 0) {
              selectedCurrentDeletion = true;
            }
          }

          if (pageBreakAnnotation) {
            if (renderProps.activeAnnotation && renderProps.activeAnnotation.uniqueId === pageBreakAnnotation.uniqueId) {
              selectedCurrentPageBreak = true;
            }
          }

          if (lineBreakAnnotation) {
            if (renderProps.activeAnnotation && renderProps.activeAnnotation.uniqueId === lineBreakAnnotation.uniqueId) {
              selectedCurrentLineBreak = true;
            }
          }

          if (remainingAnnotations.length > 0 || activeInsertions.length > 0) {
            classes.push(_Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.annotation);
          }
        } // It's an insertion at the end of the text, which should have just been added to the html.
        // So break as we don't want anymore segment html adding.


        if (segment.start === endPosition) {
          break;
        }

        var _id2 = null;

        if (segment.length === 0) {
          _id2 = idForDeletedSegment(segment);
          classes.push(_Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.removedByAnnotation);

          if (deletionText) {
            segment = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_4__["default"](segment.start, deletionText);
          }
        } else {
          _id2 = idForSegment(segment);
        }

        if (this.segmentsContainSegment(renderProps.selectedAnnotatedSegments, segment) || selectedCurrentDeletion) {
          classes.push(_Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectedAnnotation);
        }

        if (renderProps.selectedSourceRange.includes(segment.start) && renderProps.condition) {
          var newClass = renderProps.theme.palette.mode === "light" ? _Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectedRangelight : _Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectedRangeDark;
          classes.push(newClass);
        }

        if (classes.length > 0) {
          var className = classnames__WEBPACK_IMPORTED_MODULE_2___default.a.apply(void 0, classes);
          classAttribute = 'class="' + className + '"';
        }

        var segmentContent = segment.text; // Add search result highlight if required.

        if (renderProps.searchStringPositions) {
          var segmentStart = segment.start;
          var _position = segmentStart;
          segmentContent = "";
          var highlight = highlightClass;

          if (renderProps.selectedSearchResult && renderProps.selectedSearchResult.start <= _position && renderProps.selectedSearchResult.start + renderProps.selectedSearchResult.length > _position) {
            highlight = activeHighlightClass;
          }

          for (var _j = 0; _j < segment.text.length; _j++) {
            var _char = segment.text.charAt(_j);

            _position = segmentStart + _j;

            if (activeSearchResultEnd) {
              var _activeSearchResultEn = activeSearchResultEnd,
                  _activeSearchResultEn2 = _slicedToArray(_activeSearchResultEn, 2),
                  start = _activeSearchResultEn2[0],
                  end = _activeSearchResultEn2[1];

              if (_j === 0) {
                segmentContent += '<span class="' + highlight + '">';
              }

              if (_position === end) {
                segmentContent += _char + "</span>";
                activeSearchResultEnd = null;
              } else if (_j === segment.text.length - 1) {
                segmentContent += _char + "</span>";
              } else {
                segmentContent += _char;
              }
            } else if (_position in renderProps.searchStringPositions) {
              var _renderProps$searchSt = _slicedToArray(renderProps.searchStringPositions[_position], 2),
                  _start = _renderProps$searchSt[0],
                  _end = _renderProps$searchSt[1];

              segmentContent += '<span class="' + highlight + '">' + _char;

              if (_j === segment.text.length - 1 || _position === _end) {
                segmentContent += "</span>";
              }

              if (_position < _end) {
                activeSearchResultEnd = [_start, _end];
              }
            } else {
              segmentContent += _char;
            }
          }
        }

        segmentHTML += "<span id=" + _id2 + " key=" + _id2 + " " + classAttribute + ">" + segmentContent + "</span>";

        if (pageBreakAnnotation) {
          var pageBreakClasses = [_Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.pageBreak];

          if (selectedCurrentPageBreak) {
            pageBreakClasses.push(_Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectedAnnotation);
          }

          var pageBreakClassAttribute = ' class="' + pageBreakClasses.join(" ") + '" ';
          segmentHTML += "<span id=" + idForPageBreak(segment) + " key=" + idForPageBreak(segment) + pageBreakClassAttribute + ">" + pageBreakIconString + "</span>";
        }

        if (lineBreakAnnotation) {
          var lineBreakClasses = [_Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.lineBreak];

          if (selectedCurrentLineBreak) {
            lineBreakClasses.push(_Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectedAnnotation);
          }

          var lineBreakClassAttribute = ' class="' + lineBreakClasses.join(" ") + '" ';
          segmentHTML += "<span id=" + idForLineBreak(segment) + " key=" + idForLineBreak(segment) + lineBreakClassAttribute + ">" + PARA_SYMBOL + "</span>";
          segmentHTML += '</p><p class="' + textLineClass + '">';
        }
      }

      this._renderedSegments = segments;
      segmentHTML += "</p>";
      var html = {
        __html: segmentHTML
      };
      return html;
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var renderedHtml = this.generateHtml(nextProps, nextState);

      if (this.props.fontSize !== nextProps.fontSize) {
        return true;
      } else if (this._renderedHtml && renderedHtml.__html === this._renderedHtml.__html) {
        return false;
      } else {
        this._renderedHtml = renderedHtml;
        return true;
      } // return false;

    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.textAlignmentById = this.props.textAlignmentById;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = [_Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.text];

      if (this.props.row === 0) {
        classes.push(_Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.textFirstRow);
      } // Generate HTML manually as it is much faster when
      // creating large numbers of elements, such as these spans.


      var html = this._renderedHtml ? this._renderedHtml : this.generateHtml(this.props, this.state);

      if (!this._renderedHtml) {
        this._renderedHtml = html;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: _Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.textContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default.a.apply(void 0, classes),
        id: "text1",
        dangerouslySetInnerHTML: html,
        style: {
          fontSize: this.props.fontSize,
          fontFamily: "var(--tibetan-fonts)"
        },
        onClick: function onClick(e) {
          _this2.selectedElement(e.target);
        }
      }));
    }
  }]);

  return Text;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_mui_styles__WEBPACK_IMPORTED_MODULE_10__["withTheme"])(Text));

/***/ }),

/***/ "./app/components/TextDetail/TextDetail.css":
/*!**************************************************!*\
  !*** ./app/components/TextDetail/TextDetail.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","textDetail":"TextDetail---textDetail","textContainer":"TextDetail---textContainer","tableContent":"TextDetail---tableContent"};

/***/ }),

/***/ "./app/components/TextDetail/TextDetail.js":
/*!*************************************************!*\
  !*** ./app/components/TextDetail/TextDetail.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_MediaComponent_Image_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/MediaComponent/Image.css */ "./app/components/MediaComponent/Image.css");
/* harmony import */ var components_MediaComponent_Image_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(components_MediaComponent_Image_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader */ "./node_modules/react-loader/lib/react-loader.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AnnotationControlsContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnnotationControlsContainer */ "./app/components/TextDetail/AnnotationControlsContainer.js");
/* harmony import */ var lib_SplitText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/SplitText */ "./app/lib/SplitText.js");
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/AnnotatedText */ "./app/lib/AnnotatedText.js");
/* harmony import */ var lib_text_splitters_lengthSplitter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/text_splitters/lengthSplitter */ "./app/lib/text_splitters/lengthSplitter.js");
/* harmony import */ var lib_text_splitters_positionSplitter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/text_splitters/positionSplitter */ "./app/lib/text_splitters/positionSplitter.js");
/* harmony import */ var components_Header_Header_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Header/Header.css */ "./app/components/Header/Header.css");
/* harmony import */ var components_Header_Header_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(components_Header_Header_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _TextDetail_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./TextDetail.css */ "./app/components/TextDetail/TextDetail.css");
/* harmony import */ var _TextDetail_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_TextDetail_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var css_util_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! css/util.css */ "./app/css/util.css");
/* harmony import */ var css_util_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(css_util_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var lib_TextSegment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lib/TextSegment */ "./app/lib/TextSegment.js");
/* harmony import */ var _TextDetailHeadingContainer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./TextDetailHeadingContainer */ "./app/components/TextDetail/TextDetailHeadingContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _TableOfContent_TableOfContent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./TableOfContent/TableOfContent */ "./app/components/TextDetail/TableOfContent/TableOfContent.js");
/* harmony import */ var components_TextDetail_SplitText__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/TextDetail/SplitText */ "./app/components/TextDetail/SplitText.js");
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




















var textDetailId = 0;

var TextDetail = /*#__PURE__*/function (_React$Component) {
  _inherits(TextDetail, _React$Component);

  var _super = _createSuper(TextDetail);

  function TextDetail() {
    var _this;

    _classCallCheck(this, TextDetail);

    _this = _super.call(this);
    _this.key = textDetailId++;
    _this.ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.selectedWindow = null;
    return _this;
  }

  _createClass(TextDetail, [{
    key: "mouseEnter",
    value: function mouseEnter() {
      if (this.selectedWindow === 2) this.props.changeSelectedWindow(1);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.ref.current.addEventListener("mouseenter", this.mouseEnter.bind(this));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.selectedWindow = this.props.selectedWindow;
    }
  }, {
    key: "render",
    value: function render() {
      var text = {
        name: ""
      };

      if (this.props.text) {
        text = this.props.text;
      }

      var inlineControls = false;
      var textComponent = null;
      var splitText = null;

      if (!this.props.annotatedText || !this.props.text || this.props.loading) {
        textComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: this.key
        });
      } else {
        var limitWidth = false;
        var splitter;

        if (this.props.paginated) {
          splitter = Object(lib_text_splitters_positionSplitter__WEBPACK_IMPORTED_MODULE_10__["default"])(this.props.pageBreaks);
        } else {
          splitter = Object(lib_text_splitters_lengthSplitter__WEBPACK_IMPORTED_MODULE_9__["default"])(1000, /^།[\s]+(?!།[\s]+)/, 2, 5);
        }

        splitText = new lib_SplitText__WEBPACK_IMPORTED_MODULE_5__["default"](this.props.annotatedText, splitter);
        inlineControls = true;
        textComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TextDetail_SplitText__WEBPACK_IMPORTED_MODULE_18__["default"], {
          splitText: splitText,
          annotations: this.props.annotations,
          activeAnnotations: this.props.activeAnnotations,
          activeAnnotation: this.props.activeAnnotation,
          limitWidth: limitWidth,
          didSelectSegmentIds: this.props.didSelectSegmentIds,
          selectedSegmentId: this.props.selectedSegmentId,
          annotationPositions: this.props.annotationPositions,
          selectedAnnotatedSegments: this.props.selectedAnnotatedSegments,
          syncIdOnClick: this.props.syncIdOnClick,
          textListVisible: this.props.textListVisible,
          showImages: this.props.pageImagesVisible // showImages={this.props.selectedMedia.isImageVisible}
          ,
          imagesBaseUrl: this.props.imagesBaseUrl,
          selectedWitness: this.props.selectedWitness,
          selectedWitness2: this.props.selectedWitness2,
          key: this.key,
          selectedSearchResult: this.props.selectedSearchResult,
          searchValue: this.props.searchValue,
          fontSize: this.props.fontSize,
          isSecondWindowOpen: this.props.isSecondWindowOpen,
          changeScrollToId: this.props.changeScrollToId,
          changeSyncIdOnClick: this.props.changeSyncIdOnClick,
          imageData: this.props.imageData,
          isPanelLinked: this.props.isPanelLinked,
          selectedImage: this.props.selectedImage,
          changeSelectedImage: this.props.changeSelectedImage,
          isAnnotating: this.props.isAnnotating,
          closeAnnotation: this.props.closeAnnotation,
          textAlignment: this.props.textAlignment,
          textAlignmentById: this.props.textAlignmentById,
          isPanelVisible: this.props.isPanelVisible,
          scrollToId: this.props.scrollToId,
          selectedWindow: this.selectedWindow,
          selectedSourceRange: this.props.selectedSourceRange,
          selectedTargetRange: this.props.selectedTargetRange,
          changeSelectedRange: this.props.changeSelectedRange,
          searchResults: this.props.searchResults,
          showTableContent: this.props.showTableContent,
          selectedText: this.props.text,
          syncIdOnSearch: this.props.syncIdOnSearch,
          imageAlignmentById: this.props.imageAlignmentById,
          changeImageScrollId: this.props.changeImageScrollId,
          imageScrollId: this.props.imageScrollId,
          condition: this.props.condition
        });
      }

      var textComponents = [textComponent];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["Box"], {
        sx: {
          height: "100%",
          flex: 1,
          bgcolor: "navbar.main",
          color: "texts.main"
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_TextDetail_css__WEBPACK_IMPORTED_MODULE_12___default.a.textDetail, css_util_css__WEBPACK_IMPORTED_MODULE_13___default.a.flex, css_util_css__WEBPACK_IMPORTED_MODULE_13___default.a.flexColumn),
        key: this.key,
        ref: this.ref
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextDetailHeadingContainer__WEBPACK_IMPORTED_MODULE_15__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader__WEBPACK_IMPORTED_MODULE_3___default.a, {
        loaded: !this.props.loading,
        zIndex: 5
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["Box"], {
        style: {
          display: "flex",
          height: "100%",
          width: "100%",
          position: "relative"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["Box"], {
        style: {
          flex: 1
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_TextDetail_css__WEBPACK_IMPORTED_MODULE_12___default.a.textContainer, css_util_css__WEBPACK_IMPORTED_MODULE_13___default.a.flex)
      }, !this.props.loading ? textComponents : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["Slide"], {
        direction: "left",
        "in": this.props.showTableContent,
        container: this.ref.current,
        unmountOnExit: true,
        mountOnEnter: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["Box"], {
        sx: {
          position: "absolute",
          height: "100%",
          minWidth: "50%",
          right: 0
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableOfContent_TableOfContent__WEBPACK_IMPORTED_MODULE_17__["default"], null)))));
    }
  }]);

  return TextDetail;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TextDetail);

/***/ }),

/***/ "./app/components/TextDetail/TextDetailContainer.js":
/*!**********************************************************!*\
  !*** ./app/components/TextDetail/TextDetailContainer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_forIn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/forIn */ "./node_modules/lodash/forIn.js");
/* harmony import */ var lodash_forIn__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_forIn__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_uniqWith__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/uniqWith */ "./node_modules/lodash/uniqWith.js");
/* harmony import */ var lodash_uniqWith__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqWith__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_intersectionWith__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/intersectionWith */ "./node_modules/lodash/intersectionWith.js");
/* harmony import */ var lodash_intersectionWith__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_intersectionWith__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var lib_Source__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/Source */ "./app/lib/Source.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var lib_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/Text */ "./app/lib/Text.js");
/* harmony import */ var lib_TextSegment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/TextSegment */ "./app/lib/TextSegment.js");
/* harmony import */ var lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/AnnotatedText */ "./app/lib/AnnotatedText.js");
/* harmony import */ var components_TextDetail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/TextDetail */ "./app/components/TextDetail/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var lib_segmentTibetanText__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lib/segmentTibetanText */ "./app/lib/segmentTibetanText.js");
/* harmony import */ var lib_SegmentedText__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lib/SegmentedText */ "./app/lib/SegmentedText.js");
/* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app_constants */ "./app/app_constants/index.js");
/* harmony import */ var state_helpers_TextStore__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! state_helpers/TextStore */ "./app/state_helpers/TextStore.js");




function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



















var DISMISS_CONTROLS_ON_CLICK = false;

function getInsertionKey(annotation) {
  return [annotation.start, annotation.length].join("-");
}

var _posAnnotatedText;

var _posAnnotations;

var _positions;

var _posVersion;

var getAnnotationPositions = function getAnnotationPositions(annotatedText, annotations) {
  if (annotatedText === _posAnnotatedText && annotations === _posAnnotations && annotatedText.version === _posVersion) {
    return _positions;
  }

  var positions = {};
  var activeInsertions = {};

  var _loop = function _loop(i) {
    var annotation = annotations[i];

    var _annotatedText$getPos = annotatedText.getPositionOfAnnotation(annotation),
        _annotatedText$getPos2 = _slicedToArray(_annotatedText$getPos, 2),
        startPos = _annotatedText$getPos2[0],
        length = _annotatedText$getPos2[1];

    if (startPos == null) {
      return "continue";
    }

    if (length === 0) {
      if (annotation.isInsertion) {
        // group with any active insertions at the same position
        var activeKey = getInsertionKey(annotation);
        var activeInsertionPositions = activeInsertions[activeKey];

        if (activeInsertionPositions) {
          activeInsertionPositions.map(function (pos) {
            return positions[pos].push(annotation);
          });
          return "continue";
        }

        startPos = lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_10__["INSERTION_KEY"] + startPos;
      }

      if (annotation.isDeletion && annotation.length > 0) {
        // active deletion
        startPos = lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_10__["DELETION_KEY"] + startPos;
      }

      if (annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["ANNOTATION_TYPES"].pageBreak) {
        startPos = lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_10__["PAGE_BREAK_KEY"] + startPos;
      }

      if (annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["ANNOTATION_TYPES"].lineBreak) {
        startPos = lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_10__["LINE_BREAK_KEY"] + startPos;
      }

      if (positions[startPos] === undefined) {
        positions[startPos] = [];
      }

      if (positions[startPos].indexOf(annotation) === -1) {
        positions[startPos].push(annotation);
      }
    } else {
      var annotationPositions = [];

      for (var j = startPos; j < startPos + length; j++) {
        if (positions[j] === undefined) {
          positions[j] = [];
        }

        if (positions[j].indexOf(annotation) === -1) {
          positions[j].push(annotation);
        }

        annotationPositions.push(j);
      } // Store the positions this annotation is displayed at.
      // This can then be used later to group with inactive insertions


      if (annotation.isInsertion) {
        var key = getInsertionKey(annotation);
        activeInsertions[key] = annotationPositions;
      }
    }
  };

  for (var i = 0; i < annotations.length; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  }

  _posAnnotatedText = annotatedText;
  _posAnnotations = annotations;
  _positions = positions;
  _posVersion = annotatedText.version;
  return positions;
};

var _selectedWitness = null;

var mapStateToProps = function mapStateToProps(state) {
  var user = Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getUser"])(state);
  var loading = state.data.loadingWitnesses || state.data.loadingAnnotations;
  var textListVisible = Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getTextListVisible"])(state);
  var textAlignmentById = reducers__WEBPACK_IMPORTED_MODULE_13__["getTextAlignmentById"](state);

  if (loading) {
    return {
      text: null,
      witnesses: null,
      baseWitness: null,
      annotations: null,
      loading: loading,
      paginated: null,
      pageImagesVisible: true,
      annotatedText: null,
      selectedAnnotatedSegments: null,
      annotationPositions: null,
      activeAnnotations: null,
      activeAnnotation: null,
      user: user,
      textListVisible: textListVisible,
      fontSize: app_constants__WEBPACK_IMPORTED_MODULE_16__["DEFAULT_TEXT_FONT_SIZE"],
      textAlignmentById: textAlignmentById,
      imageAlignmentById: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getImageAlignmentById"])(state)
    };
  }

  var selectedText = Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getSelectedText"])(state);
  var witnesses = {};
  var workingWitness;
  var baseWitness;

  if (selectedText) {
    workingWitness = Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getWorkingWitness"])(state, selectedText.id);
    baseWitness = Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getBaseWitness"])(state, selectedText.id);
  }

  var selectedSearchResult = Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getSelectedSearchResult"])(state);
  var annotationPositions = {};
  var annotations = [];
  var annotatedText = null;
  var activeAnnotation = Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getActiveTextAnnotation"])(state);
  var selectedAnnotatedSegments = [];
  var appliedAnnotations = {};
  var pageBreaks = [];
  var imagesBaseUrl = "";
  var selectedWitness;
  var searchValue = Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getSearchValue"])(state); // Whether to show the text's page images

  var paginated = false;
  var pageImagesVisible = false;
  var fontSize = Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getTextFontSize"])(state);

  if (workingWitness && selectedText && state.data.witnessAnnotationsById.hasOwnProperty(workingWitness.id)) {
    witnesses = Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getTextWitnesses"])(state, selectedText.id);
    var selectedWitnessId = Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getSelectedTextWitnessId"])(state, selectedText.id);

    if (selectedWitnessId) {
      selectedWitness = Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getWitness"])(state, selectedWitnessId);
    }

    if (!selectedWitness) {
      selectedWitness = workingWitness;
      selectedWitnessId = workingWitness.id;
    }

    if (selectedWitness.id !== workingWitness.id) {
      paginated = true;
      pageImagesVisible = Object(reducers__WEBPACK_IMPORTED_MODULE_13__["showPageImages"])(state);
    }

    annotatedText = state_helpers_TextStore__WEBPACK_IMPORTED_MODULE_17__["getWitnessText"](state, selectedWitness.id);

    var _TextStore$getWitness = state_helpers_TextStore__WEBPACK_IMPORTED_MODULE_17__["getWitnessAnnotations"](state, selectedWitness, workingWitness);

    var _TextStore$getWitness2 = _slicedToArray(_TextStore$getWitness, 2);

    appliedAnnotations = _TextStore$getWitness2[0];
    annotations = _TextStore$getWitness2[1];

    if (annotatedText) {
      annotationPositions = getAnnotationPositions(annotatedText, Object.values(annotations));
    } // Get the segments that are part of the current active annotation.
    // These are used by Text to highlight the currently selected segment.


    if (activeAnnotation && annotatedText) {
      // If we've just switched witnesses, make sure we select the
      // correct part of the text by getting a new annotation.
      if (!_selectedWitness || _selectedWitness.id !== selectedWitness.id) {
        activeAnnotation = annotatedText.getAnnotation(activeAnnotation.start, activeAnnotation.length);
      }

      if (activeAnnotation) {
        selectedAnnotatedSegments = annotatedText.segmentsForAnnotation(activeAnnotation);
      }
    }

    if (selectedWitness && baseWitness && annotatedText) {
      var witnessPageBreaks = annotatedText.getAnnotationsOfType(lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["ANNOTATION_TYPES"].pageBreak) || {};
      var basePageBreaks = null;

      if (selectedWitness.id !== baseWitness.id) {
        basePageBreaks = Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getAnnotationsForWitnessId"])(state, workingWitness.id, lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["ANNOTATION_TYPES"].pageBreak, baseWitness.id);
      }

      pageBreaks = getPageBreaks(witnessPageBreaks, basePageBreaks);

      for (var i = 0, len = pageBreaks.length; i < len; i++) {
        var position = pageBreaks[i];
        var segment = annotatedText.segmentAtOriginalPosition(position);

        if (segment instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_9__["default"]) {
          pageBreaks[i] = segment.start;
        } else if (segment instanceof Number) {
          pageBreaks[i] = segment;
        }
      }

      if (paginated) {
        imagesBaseUrl = "/static/images/texts/" + selectedText.name + "/" + selectedWitness.source.name + "/";
      }
    }
  }

  _selectedWitness = selectedWitness;
  var scrollToId = reducers__WEBPACK_IMPORTED_MODULE_13__["getScrollToId"](state);
  var isPanelLinked = reducers__WEBPACK_IMPORTED_MODULE_13__["isPanelLinked"](state);
  var textAlignment = reducers__WEBPACK_IMPORTED_MODULE_13__["getTextAlignment"](state);
  var syncIdOnClick = reducers__WEBPACK_IMPORTED_MODULE_13__["getSyncIdOnClick"](state);
  var selectedWindow = reducers__WEBPACK_IMPORTED_MODULE_13__["getSelectedWindow"](state);
  var selectedWitness2 = reducers__WEBPACK_IMPORTED_MODULE_13__["getSelectedTextWitness2"](state);
  var Media = reducers__WEBPACK_IMPORTED_MODULE_13__["getMediaData"](state);
  var imageData = Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getImageData"])(state);
  var isSecondWindowOpen = reducers__WEBPACK_IMPORTED_MODULE_13__["isSecondWindowOpen"](state);
  var condition = reducers__WEBPACK_IMPORTED_MODULE_13__["getConditionForAlignment"](state);
  return {
    text: selectedText,
    witnesses: witnesses,
    workingWitness: workingWitness,
    baseWitness: baseWitness,
    annotations: annotations,
    loading: loading,
    paginated: paginated,
    pageImagesVisible: pageImagesVisible,
    annotatedText: annotatedText,
    selectedAnnotatedSegments: selectedAnnotatedSegments,
    annotationPositions: annotationPositions,
    activeAnnotations: _objectSpread({}, appliedAnnotations),
    activeAnnotation: activeAnnotation,
    pageBreaks: pageBreaks,
    imagesBaseUrl: imagesBaseUrl,
    user: user,
    textListVisible: textListVisible,
    selectedWitness: selectedWitness,
    selectedSearchResult: selectedSearchResult,
    searchValue: searchValue,
    fontSize: fontSize,
    isSecondWindowOpen: isSecondWindowOpen,
    imageData: imageData,
    selectedImage: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getSelectedImage"])(state),
    isImagePortrait: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["isImagePortrait"])(state),
    isAnnotating: reducers__WEBPACK_IMPORTED_MODULE_13__["isAnnotating"](state),
    textAlignment: textAlignment,
    textAlignmentById: textAlignmentById,
    scrollToId: scrollToId,
    syncIdOnClick: syncIdOnClick,
    selectedWindow: selectedWindow,
    selectedSourceRange: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getSelectedSourceRange"])(state),
    selectedTargetRange: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getSelectedTargetRange"])(state),
    searchResults: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getSearchResults"])(state, searchValue),
    showTableContent: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getShowTableContent"])(state),
    syncIdOnSearch: reducers__WEBPACK_IMPORTED_MODULE_13__["getSyncIdOnSearch"](state),
    imageAlignmentById: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getImageAlignmentById"])(state),
    imageScrollId: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getImageScrollId"])(state),
    selectedMedia: Media,
    condition: condition && isPanelLinked && isSecondWindowOpen
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  var dispatch = dispatchProps.dispatch;
  var annotatedText = stateProps.annotatedText,
      annotationPositions = stateProps.annotationPositions;

  var didSelectSegmentPosition = function didSelectSegmentPosition(segmentPosition, start, length) {
    var segmentAnnotations = annotationPositions[segmentPosition];
    var segmentVariants = [];
    var segmentPageBreaks = [];
    var segmentLineBreaks = [];

    if (segmentAnnotations) {
      segmentVariants = segmentAnnotations.filter(function (annotation) {
        return annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["ANNOTATION_TYPES"].variant;
      });
      segmentPageBreaks = segmentAnnotations.filter(function (annotation) {
        return annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["ANNOTATION_TYPES"].pageBreak;
      });
      segmentLineBreaks = segmentAnnotations.filter(function (annotation) {
        return annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["ANNOTATION_TYPES"].lineBreak;
      });
    }

    var activeAnnotations = lodash_intersectionWith__WEBPACK_IMPORTED_MODULE_2___default()(segmentVariants.concat(segmentPageBreaks, segmentLineBreaks), annotatedText.annotations, function (a, b) {
      return a.toString() == b.toString();
    });

    var activeAnnotation = null;

    if (activeAnnotations.length > 0) {
      // get any active annotations
      activeAnnotation = activeAnnotations[0];
    } else if (segmentVariants && segmentVariants.length > 0) {
      // get base text annotation for longest annotation highlighted in text
      var longestAvailable = getLongestAnnotation(segmentVariants);

      var _annotatedText$getPos3 = annotatedText.getPositionOfAnnotation(longestAvailable),
          _annotatedText$getPos4 = _slicedToArray(_annotatedText$getPos3, 2),
          _start = _annotatedText$getPos4[0],
          textLength = _annotatedText$getPos4[1];

      if (longestAvailable && longestAvailable.isInsertion) {
        textLength = 0;
      }

      activeAnnotation = annotatedText.getBaseAnnotation(_start, textLength);
    } else {
      // get base annotation of just the segment
      activeAnnotation = annotatedText.getBaseAnnotation(start, length);
    }

    dispatch(Object(actions__WEBPACK_IMPORTED_MODULE_12__["changedActiveTextAnnotation"])(activeAnnotation));
  };

  var isInsertion = function isInsertion(id) {
    return id.indexOf("i_") !== -1;
  };

  var isDeletion = function isDeletion(id) {
    return id.indexOf("ds_") !== -1;
  };

  var isPageBreak = function isPageBreak(id) {
    return id.indexOf("p_") !== -1;
  };

  var isLineBreak = function isLineBreak(id) {
    return id.indexOf("l_") !== -1;
  };

  var idFromSegmentId = function idFromSegmentId(id) {
    var start = 0;

    if (isInsertion(id)) {
      start = id.substr(2);
    } else if (isDeletion(id)) {
      start = id.substr(3);
    } else {
      start = id.substr(2);
    }

    return start;
  };

  return _objectSpread(_objectSpread(_objectSpread({}, stateProps), ownProps), {}, {
    didSelectSegmentIds: function didSelectSegmentIds(segmentIds) {
      if (segmentIds.length === 0) {
        return;
      }

      var segmentAnnotations = [];
      var segments = [];

      var _iterator = _createForOfIteratorHelper(segmentIds),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var segmentId = _step.value;

          if (isDeletion(segmentId) || isInsertion(segmentId)) {
            continue;
          }

          var segmentPosition = idFromSegmentId(segmentId);
          var textSegment = annotatedText.segmentedText.segmentAtPosition(segmentPosition);
          segments.push(textSegment);
          var annotations = annotationPositions[textSegment.start];

          if (annotations) {
            segmentAnnotations = segmentAnnotations.concat(annotations);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      segmentAnnotations = lodash_uniqWith__WEBPACK_IMPORTED_MODULE_1___default()(segmentAnnotations, function (a, b) {
        return a.toString() == b.toString();
      });

      var activeAnnotations = lodash_intersectionWith__WEBPACK_IMPORTED_MODULE_2___default()(segmentAnnotations, annotatedText.annotations, function (a, b) {
        return a.toString() == b.toString();
      });

      var range = getSegmentsRange(segments, activeAnnotations, segmentAnnotations, stateProps.annotatedText);

      if (!range) {
        console.warn("No range for selected segment ids: %o", segmentIds);
        return;
      }

      var baseAnnotation = annotatedText.getBaseAnnotation(range.start, range.length);
      var activeAnnotation = null;

      if (range.annotation) {
        activeAnnotation = range.annotation;
      } else if (activeAnnotations.length > 0) {
        var content = annotatedText.segmentedText.segmentsInRange(range.start, range.length).reduce(function (content, segment) {
          return content + segment.text;
        }, ""); // TODO: test this when editing non-working edition.
        // Check if getTextWorkingWitness works as required

        if (!stateProps.selectedWitness) {
          console.log("no stateProps.selectedWitness: %o", stateProps.selectedWitness);
        }

        activeAnnotation = new lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["default"](lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_10__["WORKING_VERSION_ANNOTATION_ID"], getTextWorkingWitness(stateProps.text), baseAnnotation.start, baseAnnotation.length, content, lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["ANNOTATION_TYPES"].variant, stateProps.selectedWitness, stateProps.user);
      } else {
        activeAnnotation = baseAnnotation;
      }

      dispatch(Object(actions__WEBPACK_IMPORTED_MODULE_12__["changedActiveTextAnnotation"])(activeAnnotation));
    },
    selectedSegmentId: function selectedSegmentId(segmentId) {
      var start = idFromSegmentId(segmentId);
      var positionKey = start;

      if (isInsertion(segmentId)) {
        positionKey = lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_10__["INSERTION_KEY"] + start;
      } else if (isDeletion(segmentId)) {
        positionKey = lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_10__["DELETION_KEY"] + start;
      } else if (isPageBreak(segmentId)) {
        positionKey = lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_10__["PAGE_BREAK_KEY"] + start;
      } else if (isLineBreak(segmentId)) {
        positionKey = lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_10__["LINE_BREAK_KEY"] + start;
      }

      var segmentAnnotations = annotationPositions[positionKey];

      if (DISMISS_CONTROLS_ON_CLICK && stateProps.activeAnnotation || segmentId === "") {
        var activeAnnotation = stateProps.activeAnnotation;

        if (activeAnnotation) {
          var dismissTextAnnotation = actions__WEBPACK_IMPORTED_MODULE_12__["changedActiveTextAnnotation"](null);
          dispatch(dismissTextAnnotation);
        }
      } else {
        if (isInsertion(segmentId) || isDeletion(segmentId) || isPageBreak(segmentId) || isLineBreak(segmentId)) {
          var length = 0;
          didSelectSegmentPosition(positionKey, start, length);
        } else {
          var segmentPosition = Number(idFromSegmentId(segmentId));
          var textSegment = annotatedText.segmentedText.segmentAtPosition(segmentPosition);

          if (textSegment) {
            didSelectSegmentPosition(textSegment.start, textSegment.start, textSegment.length);
          }
        }
      }
    },
    changeScrollToId: function changeScrollToId(payload) {
      return dispatch(actions__WEBPACK_IMPORTED_MODULE_12__["changeScrollToId"](payload));
    },
    changeSyncIdOnClick: function changeSyncIdOnClick(payload) {
      return dispatch(actions__WEBPACK_IMPORTED_MODULE_12__["changeSyncIdOnClick"](payload));
    },
    changeSelectedImage: function changeSelectedImage(payload) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_12__["selectImage"](payload));
    },
    changeSelectedWindow: function changeSelectedWindow(payload) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_12__["changeSelectedWindow"](payload));
    },
    changeSelectedRange: function changeSelectedRange(payload) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_12__["changeSelectedRange"](payload));
    },
    changeShowTableContent: function changeShowTableContent(payload) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_12__["showTableContent"](payload));
    },
    closeAnnotation: function closeAnnotation() {
      var dismissTextAnnotation = actions__WEBPACK_IMPORTED_MODULE_12__["changedActiveTextAnnotation"](null);
      dispatch(dismissTextAnnotation);
    },
    changeImageScrollId: function changeImageScrollId(data) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_12__["changeImageScrollId"](data));
    }
  });
};

var getPageBreaks = function getPageBreaks(witnessPageBreaks, basePageBreaks) {
  var witnessStarts = [];

  lodash_forIn__WEBPACK_IMPORTED_MODULE_0___default()(witnessPageBreaks, function (o) {
    return witnessStarts.push(o.start);
  });

  witnessStarts = witnessStarts.sort(function (a, b) {
    return a - b;
  });

  if (!basePageBreaks) {
    return witnessStarts;
  }

  var baseStarts = [];

  lodash_forIn__WEBPACK_IMPORTED_MODULE_0___default()(basePageBreaks, function (o) {
    return baseStarts.push(o.start);
  });

  baseStarts = baseStarts.sort(function (a, b) {
    return a - b;
  });

  if (witnessStarts.length === 0) {
    return baseStarts;
  } // Only add page breaks if witness has < 90% of base witness breaks.
  // Editions often have differing numbers of words per page so can't
  // be 100%.


  var threshold = 0.9;

  if (witnessStarts.length / baseStarts.length < threshold) {
    var lastWitnessPageStart = witnessStarts[witnessStarts.length - 1];

    for (var i = 0, len = baseStarts.length; i < len; i++) {
      var start = baseStarts[i];
      if (start > lastWitnessPageStart) witnessStarts.push(start);
    }
  }

  console.log(witnessStarts);
  return witnessStarts;
};

var getTextWorkingWitness = function getTextWorkingWitness(textData) {
  var source = new lib_Source__WEBPACK_IMPORTED_MODULE_6__["default"](lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_10__["WORKING_VERSION_ANNOTATION_ID"], lib_Source__WEBPACK_IMPORTED_MODULE_6__["WORKING_VERSION_SOURCE_NAME"]);
  var text = new lib_Text__WEBPACK_IMPORTED_MODULE_8__["default"](textData.id, textData.name);
  var witness = new lib_Witness__WEBPACK_IMPORTED_MODULE_7__["default"](lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_10__["WORKING_VERSION_ANNOTATION_ID"], text, source, "", false);
  return witness;
};

var getSegmentsRange = function getSegmentsRange(segments, activeAnnotations, annotations, annotatedText) {
  if (segments.length === 0) {
    return null;
  }

  var first = segments[0];
  var last = segments[segments.length - 1];
  var start = first.start;
  var end = last.end;
  var startAnnotation = null;
  var endAnnotation = null;

  for (var i = 0; i < annotations.length; i++) {
    var annotation = annotations[i];
    var annotationStart = void 0,
        annotationLength = void 0,
        annotationEnd = null;

    var _annotatedText$getPos5 = annotatedText.getPositionOfAnnotation(annotation);

    var _annotatedText$getPos6 = _slicedToArray(_annotatedText$getPos5, 2);

    annotationStart = _annotatedText$getPos6[0];
    annotationLength = _annotatedText$getPos6[1];

    if (activeAnnotations.indexOf(annotation) !== -1) {
      if (annotationStart && annotationStart < start) {
        start = annotationStart;
        startAnnotation = annotation;
      }

      annotationEnd = annotationStart + annotationLength - 1;

      if (annotationEnd && annotationEnd > end) {
        end = annotationEnd;
        endAnnotation = annotationEnd;
      }
    } else {
      // For inactive annotions - we want to select the whole
      // length of text the annotation refers to.
      annotationEnd = annotationStart + annotationLength - 1;

      if (annotationEnd > end) {
        end = annotationEnd;
      }
    }
  } // Set if the whole range is encompassed by a single annotation


  var rangeAnnotation = null;

  if (startAnnotation && endAnnotation && startAnnotation === endAnnotation) {
    rangeAnnotation = startAnnotation;
  }

  return {
    start: start,
    length: end - start + 1,
    annotation: rangeAnnotation
  };
};

var getLongestAnnotation = function getLongestAnnotation(annotations) {
  var longest = null;

  for (var i = 0; i < annotations.length; i++) {
    var annotation = annotations[i];

    if (!longest) {
      longest = annotation;
    } else {
      if (annotation.length > longest.length) {
        longest = annotation;
      }
    }
  }

  return longest;
};

var TextDetailContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, null, mergeProps)(components_TextDetail__WEBPACK_IMPORTED_MODULE_11__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(TextDetailContainer));

/***/ }),

/***/ "./app/components/TextDetail/TextDetailHeading.js":
/*!********************************************************!*\
  !*** ./app/components/TextDetail/TextDetailHeading.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _textDetailHeading_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textDetailHeading.css */ "./app/components/TextDetail/textDetailHeading.css");
/* harmony import */ var _textDetailHeading_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_textDetailHeading_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SelectVersion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectVersion */ "./app/components/TextDetail/SelectVersion.js");
/* harmony import */ var _TextListContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextListContainer */ "./app/components/TextDetail/TextListContainer.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _HeaderMenu_Refresh__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HeaderMenu/Refresh */ "./app/components/TextDetail/HeaderMenu/Refresh.js");
/* harmony import */ var _HeaderMenu_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HeaderMenu/Search */ "./app/components/TextDetail/HeaderMenu/Search.js");
/* harmony import */ var _HeaderMenu_Settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HeaderMenu/Settings */ "./app/components/TextDetail/HeaderMenu/Settings.js");
/* harmony import */ var _HeaderMenu_TableOfContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HeaderMenu/TableOfContent */ "./app/components/TextDetail/HeaderMenu/TableOfContent.js");
/* harmony import */ var _HeaderMenu_SearchList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HeaderMenu/SearchList */ "./app/components/TextDetail/HeaderMenu/SearchList.js");



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function TextDetailHeading(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      findvalue = _useState2[0],
      setfindvalue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showFind = _useState4[0],
      setShowFind = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      visible = _useState6[0],
      setVisible = _useState6[1];

  var headingRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var handleListItemClick = function handleListItemClick(id) {
    props.changeSelectSyncId(id);
  };

  var debouncedSearch = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function (s) {
    props.searchChanged(s);
  }, 1000)).current;
  var handleSearch = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    e.preventDefault();
    debouncedSearch(findvalue);
    setVisible(true);
  }, [findvalue]);
  var handleWindowSearch = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (showFind === false) debouncedSearch(null);
    setShowFind(!showFind);
  }, [showFind]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (showFind === true) {
      inputRef.current.focus();
    }

    if (showFind === false) debouncedSearch(null);
  }, [showFind]);
  var closeSearchItemBox = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setVisible(false);
    debouncedSearch(null);
    setfindvalue("");
  }, []);
  var condition = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(props.searchResults) && props.searchResults.hasOwnProperty(props.selectedText.id);
  }, [props.searchResults, props.selectedText]);
  var results = condition ? props.searchResults[props.selectedText.id].results : [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
    ref: headingRef,
    direction: "column",
    spacing: 1,
    sx: {
      paddingInline: {
        md: 1,
        xs: 0
      },
      paddingBlock: {
        md: 1,
        xs: 0
      },
      bgcolor: "heading.main",
      color: "text.primary"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
    direction: "row",
    spacing: 1,
    justifyContent: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    sx: {
      display: "flex",
      gap: {
        md: 2,
        sx: 0
      },
      flexDirection: {
        md: "row",
        xs: "column"
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TextListContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SelectVersion__WEBPACK_IMPORTED_MODULE_4__["default"], {
    witnesses: props.witnesses,
    activeWitness: props.selectedWitness,
    onSelectedWitness: props.onSelectedWitness,
    user: props.user
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], {
    size: "small",
    sx: {
      position: "relative",
      display: "flex",
      height: "fit-content",
      alignItems: "center",
      justifyContent: "center",
      width: "fit-content",
      border: function border(theme) {
        return "1px solid ".concat(theme.palette.divider);
      },
      borderRadius: 1,
      bgcolor: "background.paper",
      color: "text.secondary",
      "& svg": {
        m: 1
      },
      "& hr": {
        mx: 0.5
      }
    },
    className: _textDetailHeading_css__WEBPACK_IMPORTED_MODULE_3___default.a.button_group_menu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_Refresh__WEBPACK_IMPORTED_MODULE_8__["default"], {
    isSecondWindowOpen: props.isSecondWindowOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
    orientation: "vertical",
    variant: "middle",
    flexItem: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_Search__WEBPACK_IMPORTED_MODULE_9__["default"], {
    handleWindowSearch: handleWindowSearch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_Settings__WEBPACK_IMPORTED_MODULE_10__["default"], {
    textFontSize: props.textFontSize,
    onChangedFontSize: props.onChangedFontSize,
    onExport: props.onExport
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_TableOfContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    changeShowTableContent: props.changeShowTableContent,
    showTableContent: props.showTableContent
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
    "in": showFind,
    mountOnEnter: true,
    unmountOnExit: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    onSubmit: handleSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
    direction: "row",
    spacing: 2,
    position: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
    hiddenLabel: true,
    id: "filled-hidden-label-small",
    inputProps: {
      style: {
        height: 25,
        padding: "0 14px"
      }
    },
    style: {
      height: 25,
      flex: 1
    },
    fullWidth: true,
    inputRef: inputRef,
    value: findvalue,
    onChange: function onChange(e) {
      return setfindvalue(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    variant: "outlined",
    size: "small",
    onClick: handleSearch,
    style: {
      height: 25
    }
  }, "Search"), props.searchResults && visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    sx: _defineProperty({
      position: "absolute",
      top: 35,
      right: 0,
      zIndex: 1,
      bgcolor: "heading.main",
      height: 350,
      width: 350,
      boxShadow: 3,
      overflowX: "hidden"
    }, "boxShadow", 3)
  }, results.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "no such word present"), condition && results.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_SearchList__WEBPACK_IMPORTED_MODULE_12__["default"], {
    handleListItemClick: handleListItemClick,
    searchValue: props.searchValue,
    results: results,
    selectedText: props.selectedText
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    "aria-label": "closeButton",
    onClick: closeSearchItemBox,
    size: "small",
    sx: {
      right: 15,
      top: 0,
      position: "absolute"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "inherit"
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(TextDetailHeading));

/***/ }),

/***/ "./app/components/TextDetail/TextDetailHeadingContainer.js":
/*!*****************************************************************!*\
  !*** ./app/components/TextDetail/TextDetailHeadingContainer.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TextDetailHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextDetailHeading */ "./app/components/TextDetail/TextDetailHeading.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var mapStateToProps = function mapStateToProps(state) {
  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_4__["getSelectedText"](state);
  var selectedText2 = reducers__WEBPACK_IMPORTED_MODULE_4__["getSelectedText2"](state);
  var witnesses = [];
  var exportingWitness = false;
  var selectedWitness;
  var selectedWitness2;

  if (selectedText) {
    witnesses = reducers__WEBPACK_IMPORTED_MODULE_4__["getTextWitnesses"](state, selectedText.id);
    var selectedWitnessId = reducers__WEBPACK_IMPORTED_MODULE_4__["getSelectedTextWitnessId"](state, selectedText.id);

    if (selectedWitnessId) {
      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_4__["getWitness"](state, selectedWitnessId);
      exportingWitness = reducers__WEBPACK_IMPORTED_MODULE_4__["getExportingWitness"](state, selectedWitnessId);
    } else {
      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_4__["getWorkingWitness"](state, selectedText.id);
    }
  }

  if (selectedText2) {
    // witnesses = reducers.getTextWitnesses(state, selectedText2.id);
    var selectedWitnessId2 = reducers__WEBPACK_IMPORTED_MODULE_4__["getSelectedTextWitnessId2"](state, selectedText2.id);

    if (selectedWitnessId2) {
      selectedWitness2 = reducers__WEBPACK_IMPORTED_MODULE_4__["getWitness2"](state, selectedWitnessId2);
    } else {
      selectedWitness2 = reducers__WEBPACK_IMPORTED_MODULE_4__["getWorkingWitness2"](state, selectedText2.id);
    }
  }

  var textFontSize = reducers__WEBPACK_IMPORTED_MODULE_4__["getTextFontSize"](state);
  var searchValue = reducers__WEBPACK_IMPORTED_MODULE_4__["getSearchValue"](state);
  return {
    witnesses: witnesses,
    selectedText: selectedText,
    selectedText2: selectedText2,
    selectedWitness: selectedWitness,
    selectedWitness2: selectedWitness2,
    textFontSize: textFontSize,
    exportingWitness: exportingWitness,
    searchValue: searchValue,
    showTableContent: reducers__WEBPACK_IMPORTED_MODULE_4__["getShowTableContent"](state),
    searchResults: reducers__WEBPACK_IMPORTED_MODULE_4__["getSearchResults"](state, searchValue)
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  var _objectSpread2;

  var navigationButtonClicked = function navigationButtonClicked() {
    dispatchProps.dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changedTextListVisible"](!stateProps.textListIsVisible));
  };

  var dispatch = dispatchProps.dispatch;
  var selectedText = stateProps.selectedText;
  return _objectSpread(_objectSpread(_objectSpread({}, ownProps), stateProps), {}, (_objectSpread2 = {
    navigationButtonClicked: navigationButtonClicked,
    onSelectedWitness: function onSelectedWitness(witness) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["selectedTextWitness"](selectedText === null || selectedText === void 0 ? void 0 : selectedText.id, witness === null || witness === void 0 ? void 0 : witness.id));
    },
    onChangedFontSize: function onChangedFontSize(fontSize) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changedTextFontSize"](fontSize));
    },
    onChangeWindowOpen: function onChangeWindowOpen(data, textId) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["toggleSecondWindow"](data, textId));
    },
    onExport: function onExport() {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["exportWitness"](stateProps.selectedWitness.id, "docx"));
    }
  }, _defineProperty(_objectSpread2, "navigationButtonClicked", function navigationButtonClicked() {
    dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changedTextListVisible"](!stateProps.textListIsVisible));
  }), _defineProperty(_objectSpread2, "changeIsAnnotating", function changeIsAnnotating(payload) {
    dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changeIsAnnotating"](payload));

    if (payload === false) {
      var dismissTextAnnotation = actions__WEBPACK_IMPORTED_MODULE_3__["changedActiveTextAnnotation"](null);
      dispatch(dismissTextAnnotation);
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changedActiveTextAnnotation"](null));
    }
  }), _defineProperty(_objectSpread2, "searchChanged", function searchChanged(searchTerm) {
    dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changedSearchValue"](searchTerm));
  }), _defineProperty(_objectSpread2, "changeShowTableContent", function changeShowTableContent(payload) {
    dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["showTableContent"](payload));
  }), _defineProperty(_objectSpread2, "changeSelectSyncId", function changeSelectSyncId(payload) {
    dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changeSyncIdOnSearch"](payload));
  }), _objectSpread2));
};

var TextDetailHeadingContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null, mergeProps)(_TextDetailHeading__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (TextDetailHeadingContainer);

/***/ }),

/***/ "./app/components/TextDetail/TextList.css":
/*!************************************************!*\
  !*** ./app/components/TextDetail/TextList.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"textlist":"TextList---textlist","open":"TextList---open"};

/***/ }),

/***/ "./app/components/TextDetail/TextList.js":
/*!***********************************************!*\
  !*** ./app/components/TextDetail/TextList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextList.css */ "./app/components/TextDetail/TextList.css");
/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TextList_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/addTibetanShay */ "./app/lib/addTibetanShay.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function TextList(props) {
  var temptext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(props.texts);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(temptext.current),
      _useState2 = _slicedToArray(_useState, 2),
      textslist = _useState2[0],
      setTextList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      filterValue = _useState4[0],
      setFilterValue = _useState4[1];

  var onSelectedText = props.onSelectedText;
  var selectedText = props.selectedText;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isOpen = _useState6[0],
      setIsOpen = _useState6[1];

  var selected = selectedText === null || selectedText === void 0 ? void 0 : selectedText.name;
  var cache = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new react_virtualized__WEBPACK_IMPORTED_MODULE_1__["CellMeasurerCache"]({
    fixedHeight: true,
    defaultHeight: 40
  }));
  var classes = [_TextList_css__WEBPACK_IMPORTED_MODULE_3___default.a.textlist];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var temp = [];

    if (filterValue === "") {
      setTextList(_toConsumableArray(temptext.current));
    }

    if (filterValue !== null && filterValue !== "") {
      temp = temptext.current.filter(function (val) {
        return val.name.includes(filterValue);
      });
      setTextList(_toConsumableArray(temp));
    }
  }, [filterValue]);

  var handleClick = function handleClick() {
    setIsOpen(function (prev) {
      return !prev;
    });
    if (isOpen === false) classes.push(_TextList_css__WEBPACK_IMPORTED_MODULE_3___default.a.open);
  };

  var handleChange = function handleChange(e) {
    var value = e.target.value;
    setFilterValue(value);
  };

  var rowRenderer = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function (_ref) {
    var key = _ref.key,
        index = _ref.index,
        style = _ref.style,
        parent = _ref.parent;
    var data = textslist[index];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["CellMeasurer"], {
      key: "optionvalues-".concat(key),
      cache: cache.current,
      parent: parent,
      columnIndex: 0,
      rowIndex: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: style,
      onClick: function onClick() {
        setIsOpen(false);
        onSelectedText(data);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      sx: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: "13rem",
        paddingLeft: 2,
        fontSize: {
          lg: 12,
          md: 11,
          sm: 10,
          xs: 10
        },
        color: "text.primary"
      },
      component: "div"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      noWrap: true
    }, Object(lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_5__["default"])(data.name)))));
  }, [textslist]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["ClickAwayListener"], {
    onClickAway: function onClickAway() {
      return setIsOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "relative",
      marginLeft: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: handleClick,
    component: "div",
    variant: "outlined",
    sx: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: "10rem",
      height: "100%",
      color: "text.primary"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    noWrap: true
  }, selected)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Grow"], {
    "in": isOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes),
    sx: {
      position: "absolute",
      bgcolor: "heading.main",
      zIndex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    onChange: handleChange,
    id: "standard-basic",
    label: "filter",
    variant: "standard",
    style: {
      width: "100%"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["AutoSizer"], null, function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["List"], {
      width: width,
      height: height,
      rowHeight: 40,
      deferredMeasurementCache: cache.current,
      rowCount: textslist.length,
      rowRenderer: rowRenderer
    });
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(TextList));

/***/ }),

/***/ "./app/components/TextDetail/TextListContainer.js":
/*!********************************************************!*\
  !*** ./app/components/TextDetail/TextListContainer.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TextList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextList */ "./app/components/TextDetail/TextList.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! api */ "./app/api/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-batched-actions */ "./node_modules/redux-batched-actions/lib/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_batched_actions__WEBPACK_IMPORTED_MODULE_6__);









var mapStateToProps = function mapStateToProps(state) {
  // TODO: display search results or spinner depending on when anything
  // returned
  var texts = reducers__WEBPACK_IMPORTED_MODULE_4__["getTexts"](state);
  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_4__["getSelectedText"](state);
  return {
    texts: texts,
    selectedText: selectedText
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSelectedText: function onSelectedText(text) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["selectedText"](text));
    }
  };
};

var TextListContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_TextList__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(TextListContainer));

/***/ }),

/***/ "./app/components/TextDetail/index.js":
/*!********************************************!*\
  !*** ./app/components/TextDetail/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextDetail */ "./app/components/TextDetail/TextDetail.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TextDetail__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./app/components/TextDetail/textDetailHeading.css":
/*!*********************************************************!*\
  !*** ./app/components/TextDetail/textDetailHeading.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","button_group_menu":"textDetailHeading---button_group_menu"};

/***/ }),

/***/ "./app/components/TextDetail2/HeaderMenu/HighlightedString.js":
/*!********************************************************************!*\
  !*** ./app/components/TextDetail2/HeaderMenu/HighlightedString.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HighlightedString; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grapheme-splitter */ "./node_modules/grapheme-splitter/index.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grapheme_splitter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-string-replace */ "./node_modules/react-string-replace/index.js");
/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_string_replace__WEBPACK_IMPORTED_MODULE_2__);
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





var HighlightedString = /*#__PURE__*/function (_React$Component) {
  _inherits(HighlightedString, _React$Component);

  var _super = _createSuper(HighlightedString);

  function HighlightedString(props) {
    _classCallCheck(this, HighlightedString);

    return _super.call(this, props);
  }

  _createClass(HighlightedString, [{
    key: "render",
    value: function render() {
      var _this = this;

      var string = this.props.string;
      var nameHtml = string;
      var stringClass = this.props.stringClass || "";

      if (this.props.searchTerm) {
        var searchTerm = this.props.searchTerm;
        var splitter = new grapheme_splitter__WEBPACK_IMPORTED_MODULE_1___default.a();
        var graphemes = splitter.splitGraphemes(string);
        var start = string.indexOf(searchTerm);
        var end = start + searchTerm.length;
        var position = 0;
        var foundGraphemes = "";

        if (start > -1) {
          for (var i = 0; i < graphemes.length; i++) {
            var grapheme = graphemes[i];

            if (position >= start && position < end) {
              foundGraphemes += grapheme;
            }

            position += grapheme.length;
          }
        }

        if (foundGraphemes.length > 0) {
          nameHtml = react_string_replace__WEBPACK_IMPORTED_MODULE_2___default()(string, foundGraphemes, function (match, i) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
              className: _this.props.highlightClass,
              key: "highlight-".concat(i)
            }, match);
          });
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: stringClass
      }, nameHtml);
    }
  }]);

  return HighlightedString;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./app/components/TextDetail2/HeaderMenu/Refresh.js":
/*!**********************************************************!*\
  !*** ./app/components/TextDetail2/HeaderMenu/Refresh.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Refresh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/Refresh */ "./node_modules/@mui/icons-material/Refresh.js");
/* harmony import */ var _mui_icons_material_Refresh__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Refresh__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");




function Refresh(_ref) {
  var isSecondWindowOpen = _ref.isSecondWindowOpen;
  var handleRefresh = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var updatelistBtn2 = document.getElementById("updateList2");
    if (updatelistBtn2) updatelistBtn2.click();
  }, [isSecondWindowOpen]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var timer = setTimeout(function () {
      handleRefresh();
    }, 500);
    return function () {
      return clearTimeout(timer);
    };
  }, [isSecondWindowOpen]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    variant: "text",
    size: "small",
    onClick: handleRefresh
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Refresh__WEBPACK_IMPORTED_MODULE_1___default.a, null));
}

/* harmony default export */ __webpack_exports__["default"] = (Refresh);

/***/ }),

/***/ "./app/components/TextDetail2/HeaderMenu/Search.js":
/*!*********************************************************!*\
  !*** ./app/components/TextDetail2/HeaderMenu/Search.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");




function Search(_ref) {
  var handleWindowSearch = _ref.handleWindowSearch;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    size: "small",
    variant: "text",
    onClick: handleWindowSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1___default.a, null));
}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./app/components/TextDetail2/HeaderMenu/SearchList.js":
/*!*************************************************************!*\
  !*** ./app/components/TextDetail2/HeaderMenu/SearchList.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var _HighlightedString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HighlightedString */ "./app/components/TextDetail2/HeaderMenu/HighlightedString.js");
/* harmony import */ var _SearchStyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchStyle.css */ "./app/components/TextDetail2/HeaderMenu/SearchStyle.css");
/* harmony import */ var _SearchStyle_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SearchStyle_css__WEBPACK_IMPORTED_MODULE_3__);





function SearchList(props) {
  var handleListItemClick = props.handleListItemClick,
      searchValue = props.searchValue,
      results = props.results,
      selectedText = props.selectedText;
  var listRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var cache = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new react_virtualized__WEBPACK_IMPORTED_MODULE_1__["CellMeasurerCache"]({
    fixedWidth: true,
    defaultHeight: 100
  }));

  var rowRenderer = function rowRenderer(_ref) {
    var key = _ref.key,
        index = _ref.index,
        parent = _ref.parent,
        style = _ref.style;
    var result = results[index];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["CellMeasurer"], {
      key: "listkeys2-".concat(key),
      cache: cache.current,
      parent: parent,
      columnIndex: 0,
      rowIndex: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: style
    }, results.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _SearchStyle_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchListItem,
      onClick: function onClick() {
        return handleListItemClick(result[0]);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HighlightedString__WEBPACK_IMPORTED_MODULE_2__["default"], {
      string: result[1],
      highlightClass: _SearchStyle_css__WEBPACK_IMPORTED_MODULE_3___default.a.highlight,
      searchTerm: searchValue
    }))));
  };

  if (!results) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["AutoSizer"], null, function (_ref2) {
    var height = _ref2.height,
        width = _ref2.width;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["List"], {
      ref: listRef,
      height: height,
      rowCount: results === null || results === void 0 ? void 0 : results.length,
      rowHeight: cache.current.rowHeight,
      deferredMeasurementCache: cache.current,
      rowRenderer: rowRenderer,
      width: width,
      overscanRowCount: 1
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (SearchList);

/***/ }),

/***/ "./app/components/TextDetail2/HeaderMenu/SearchStyle.css":
/*!***************************************************************!*\
  !*** ./app/components/TextDetail2/HeaderMenu/SearchStyle.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"highlight":"SearchStyle---highlight","searchListItem":"SearchStyle---searchListItem"};

/***/ }),

/***/ "./app/components/TextDetail2/HeaderMenu/Settings.js":
/*!***********************************************************!*\
  !*** ./app/components/TextDetail2/HeaderMenu/Settings.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var images_wrench_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! images/wrench.svg */ "./app/images/wrench.svg");
/* harmony import */ var _UI_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/Slider */ "./app/components/UI/Slider.js");
/* harmony import */ var components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/utility/useLocalStorage */ "./app/components/utility/useLocalStorage.js");
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Check */ "./node_modules/@mui/icons-material/Check.js");
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app_constants */ "./app/app_constants/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function Settings(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showOption = _useState2[0],
      setShowOption = _useState2[1];

  var _useLocalStorage = Object(components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__["default"])("WindowTwoFont", "Tibetan"),
      _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
      fontSelect = _useLocalStorage2[0],
      setFontSelect = _useLocalStorage2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.body.style.setProperty("--tibetan-fonts2", fontSelect);
  }, []);

  var handleClick = function handleClick() {
    setShowOption(function (prev) {
      return !prev;
    });
  };

  var handlefont = function handlefont(value) {
    setFontSelect(value);
    document.body.style.setProperty("--tibetan-fonts2", "".concat(value));
    var update = document.getElementById("updateList2");
    var times = 1;
    var timer = setInterval(function () {
      update.click();
      times++;
      console.log("ran");

      if (times > 4) {
        clearInterval(timer);
      }
    }, 800);
    setShowOption(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["ClickAwayListener"], {
    onClickAway: function onClickAway() {
      return setShowOption(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    position: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    onClick: handleClick,
    size: "small",
    variant: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_wrench_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    height: 20,
    width: 20,
    fill: "currentColor"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Grow"], {
    "in": showOption
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["MenuList"], {
    dense: true,
    sx: {
      position: "absolute",
      right: 0,
      zIndex: 2,
      top: 40,
      bgcolor: "heading.main"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    max: 20,
    min: 7,
    initialvalue: props.textFontSize,
    changeSize: props.onChangedFontSize
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FontSelection, {
    selectFont: handlefont,
    selectedfont: fontSelect
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
    onClick: function onClick() {
      return props.onExport();
    }
  }, "Export Document", props.exportingWitness && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_4___default.a, null))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Settings);

var FontSelection = function FontSelection(_ref) {
  var selectFont = _ref.selectFont,
      selectedfont = _ref.selectedfont;
  var fontAvailable = app_constants__WEBPACK_IMPORTED_MODULE_6__["FONT_LIST"] || [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    textAlign: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Font:"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    onChange: function onChange(e) {
      return selectFont(e.target.value);
    },
    value: selectedfont
  }, fontAvailable.map(function (font, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: index + "-fontselect",
      value: font
    }, font);
  })));
};

/***/ }),

/***/ "./app/components/TextDetail2/HeaderMenu/TableOfContent.js":
/*!*****************************************************************!*\
  !*** ./app/components/TextDetail2/HeaderMenu/TableOfContent.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Clear */ "./node_modules/@mui/icons-material/Clear.js");
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_3__);





function TableOfContent(props) {
  var handleClick = function handleClick() {
    props.changeShowTableContent(!props.showTableContent);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: handleClick
  }, props.showTableContent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_3___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default.a, null)));
}

/* harmony default export */ __webpack_exports__["default"] = (TableOfContent);

/***/ }),

/***/ "./app/components/TextDetail2/SelectVersion.css":
/*!******************************************************!*\
  !*** ./app/components/TextDetail2/SelectVersion.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","selectVersion":"SelectVersion---selectVersion","selectEmpty":"SelectVersion---selectEmpty","selectOptions":"SelectVersion---selectOptions","styled-select":"SelectVersion---styled-select"};

/***/ }),

/***/ "./app/components/TextDetail2/SelectVersion.js":
/*!*****************************************************!*\
  !*** ./app/components/TextDetail2/SelectVersion.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _SelectVersion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectVersion.css */ "./app/components/TextDetail2/SelectVersion.css");
/* harmony import */ var _SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SelectVersion_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");







var SelectVersion = function SelectVersion(props) {
  var witnesses = [];
  var tabName = "";
  var r = "";
  var classes = [];

  if (props.witnesses) {
    witnesses = props.witnesses.map(function (witness) {
      return witness;
    });
    if (props.activeWitness) r = props.witnesses.findIndex(function (l) {
      return l.id === props.activeWitness.id;
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
    witnesses = witnesses.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  var handleChangeWitness = function handleChangeWitness(e) {
    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(witnesses)) {
      props.onSelectedWitness(witnesses[e.target.value]);
    }
  };

  if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(witnesses) && !props.activeWitness) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["NativeSelect"], {
    onChange: handleChangeWitness,
    className: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectVersion,
    value: r,
    label: "Version2",
    classes: {
      root: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectEmpty,
      select: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectOptions
    }
  }, witnesses.map(function (witness, key) {
    var _props$activeWitness;

    if (witness.id === ((_props$activeWitness = props.activeWitness) === null || _props$activeWitness === void 0 ? void 0 : _props$activeWitness.id)) classes.push(_SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.selected);
    tabName = witness.source.name;

    if (witness.isWorking) {
      tabName = props.intl.locale === "en" ? props.user.name === "User" ? "Working" : "My Edition" : "མཉམ་འབྲེལ་པར་མ།";
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      key: "versionSelect2-".concat(key),
      value: key,
      className: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectOptions
    }, tabName);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(SelectVersion)));

/***/ }),

/***/ "./app/components/TextDetail2/SplitText.css":
/*!**************************************************!*\
  !*** ./app/components/TextDetail2/SplitText.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","inlineWidth":"280px","annotationControls":"SplitText---annotationControls","annotationContent":"SplitText---annotationContent","subTitle":"SplitText---subTitle","title":"SplitText---title","sectionHeading":"SplitText---sectionHeading","text":"SplitText---text","padding":"SplitText---padding","arrowTop":"SplitText---arrowTop","arrowLeft":"SplitText---arrowLeft","arrowRight":"SplitText---arrowRight","inline":"SplitText---inline","arrow":"SplitText---arrow","arrowDs":"SplitText---arrowDs","nothingSelected":"SplitText---nothingSelected","anonymousMessage":"SplitText---anonymousMessage","noNotes":"SplitText---noNotes","breakButtons":"SplitText---breakButtons","splitText2":"SplitText---splitText2","splitTextRowContent":"SplitText---splitTextRowContent","splitTextRow":"SplitText---splitTextRow","pechaImage":"SplitText---pechaImage","controlsPlaceholder":"SplitText---controlsPlaceholder","pageNumber":"SplitText---pageNumber"};

/***/ }),

/***/ "./app/components/TextDetail2/SplitText.js":
/*!*************************************************!*\
  !*** ./app/components/TextDetail2/SplitText.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SplitTextComponent; });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-virtualized/dist/es/AutoSizer */ "./node_modules/react-virtualized/dist/es/AutoSizer/index.js");
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-virtualized/dist/es/CellMeasurer */ "./node_modules/react-virtualized/dist/es/CellMeasurer/index.js");
/* harmony import */ var react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-virtualized/styles.css */ "./node_modules/react-virtualized/styles.css");
/* harmony import */ var react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Text2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Text2 */ "./app/components/TextDetail2/Text2.js");
/* harmony import */ var lib_SplitText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/SplitText */ "./app/lib/SplitText.js");
/* harmony import */ var _SplitText_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SplitText.css */ "./app/components/TextDetail2/SplitText.css");
/* harmony import */ var _SplitText_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_SplitText_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lib_TextSegment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lib/TextSegment */ "./app/lib/TextSegment.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! grapheme-splitter */ "./node_modules/grapheme-splitter/index.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(grapheme_splitter__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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














var _searchResultsCache = {};

var SplitTextComponent = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(SplitTextComponent, _React$PureComponent);

  var _super = _createSuper(SplitTextComponent);

  // Whether the mouse button is down
  function SplitTextComponent(props) {
    var _this;

    _classCallCheck(this, SplitTextComponent);

    _this = _super.call(this, props);
    _this.textAlignmentById = [];
    _this.changeScrollToId = props.changeScrollToId;
    _this.condition = props.condition;
    _this.list = null;
    _this.splitText = null;
    _this.cache = new react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_7__["CellMeasurerCache"]({
      fixedWidth: true
    });
    _this.rowRenderer = _this.rowRenderer.bind(_assertThisInitialized(_this));
    _this.activeSelection = null;
    _this.selectedNodes = null;
    _this._mouseDown = false;
    _this._activeWitness = null;
    _this._didSetInitialScrollPosition = false;
    _this._modifyingSelection = false;
    _this.imageHeight = null;
    _this.imageWidth = null;
    _this.calculatedImageHeight = null;
    _this.selectedWindow = _this.props.selectedWindow;
    _this.scrollEvent = _this.scrollEvent.bind(_assertThisInitialized(_this)); // this.processProps(props);

    _this.scrollTop = 0;
    return _this;
  }

  _createClass(SplitTextComponent, [{
    key: "scrollEvent",
    value: function scrollEvent(e) {
      if (this.selectedWindow === 1) return null;

      if (this.selectedWindow === 2) {
        var list = [];
        this.textAlignmentById.map(function (l) {
          var number = document.getElementById("s2_" + l.TStart);

          if (number) {
            var _position = number.getBoundingClientRect();

            if (_position.top > 90) {
              list.push({
                id: l.id,
                start: l.start,
                TStart: l.TStart,
                end: l.end,
                TEnd: l.TEnd
              });
            }
          }
        });

        if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(list)) {
          if (this.selectedWindow === 2) {
            this.debouncedScroll(list);
          }
        }
      }
    }
  }, {
    key: "selectedListRow",
    value: function selectedListRow(props) {
      var row = null;

      if (props.activeAnnotation) {
        row = props.splitText.getTextIndexOfPosition(props.activeAnnotation.start);
      }

      return row;
    }
  }, {
    key: "handleSelection",
    value: function handleSelection(e) {
      if (!this._modifyingSelection) {
        this.activeSelection = document.getSelection();

        if (!this._mouseDown) {
          // sometimes, this gets called after the mouseDown event handler
          this.mouseUp();
        }
      } else {
        e.stopPropagation(); // Need to set this here. If set at callsite, the event will not
        // have time to propagate.

        this._modifyingSelection = false;
      }
    }
  }, {
    key: "mouseDown",
    value: function mouseDown() {
      this._mouseDown = true;
    }
  }, {
    key: "mouseUp",
    value: function mouseUp() {
      this._mouseDown = false;

      if (this.activeSelection) {
        // let segmentIds = this.processSelection(this.activeSelection);
        // if (!segmentIds) {
        //     segmentIds = [];
        // }
        // this.props.didSelectSegmentIds(segmentIds);
        this.activeSelection = null;
      }
    } // processSelection(selection: Selection): string[] | null {
    //     if (
    //         selection.rangeCount === 0 ||
    //         selection.isCollapsed ||
    //         selection.type === "Caret"
    //     ) {
    //         this.selectedNodes = null;
    //         return null;
    //     }
    //     const range = selection.getRangeAt(0);
    //     const start = range.startContainer;
    //     const startSpan = this.getNodeSegmentSpan(start);
    //     if (!(startSpan && startSpan.parentNode)) {
    //         If the selection is not a text segment, ignore.
    //         Assuming if the first node is a non-segment, they
    //         all are.
    //         return null;
    //     }
    //     let nodes = this.getRangeNodes(range, startSpan.parentNode);
    //     Check if the selection starts after the end of a node, and
    //     if so remove that node.
    //     if (nodes.length > 0) {
    //         let firstNode = nodes[0];
    //         if (range.startOffset === firstNode.textContent.length) {
    //             nodes.shift();
    //         }
    //     }
    //     const end = range.endContainer;
    //     const endSpan = this.getNodeSegmentSpan(end);
    //     if (!(endSpan && endSpan.parentNode)) {
    //         return null;
    //     }
    //     if (endSpan && startSpan.parentNode !== endSpan.parentNode) {
    //         Selection is spanning Texts.
    //         We assume a selection can only run across a maximum
    //         of two Texts.
    //         nodes = nodes.concat(this.getRangeNodes(range, endSpan.parentNode));
    //     } else {
    //         Check if the selection ends before the start of a node, and
    //         if so remove that node.
    //         if (range.endOffset === 0) {
    //             nodes.pop();
    //         }
    //     }
    //     this.selectedNodes = nodes;
    //     let nodeIds = [];
    //     nodes.reduce((accumulator: string[], current: Node) => {
    //         if (current instanceof Element) {
    //             accumulator.push(current.id);
    //         }
    //         return accumulator;
    //     }, nodeIds);
    //     return nodeIds;
    // }
    // getRangeNodes(range: Range, parentNode: Node): Node[] {
    //     let rangeSpans = [];
    //     for (let i = 0, len = parentNode.childNodes.length; i < len; i++) {
    //         const node = parentNode.childNodes[i];
    //         // TODO: add polyfill for i.e.?
    //         // e.g. https://gist.github.com/jonathansampson/6d09bd6d2e8c22c53868aec42e66b0f9
    //         if (range.intersectsNode(node)) {
    //             rangeSpans.push(node);
    //         }
    //     }
    //     return rangeSpans;
    // }

  }, {
    key: "getNodeSegmentSpan",
    value: function getNodeSegmentSpan(node) {
      var currentNode = node;
      var span = null;
      var test = /^(i|s|ds)_/;

      while (!span && currentNode.parentNode) {
        if (currentNode instanceof Element && test.test(currentNode.id)) {
          span = currentNode;
        }

        currentNode = currentNode.parentNode;
      }

      return span;
    }
  }, {
    key: "updateList",
    value: function updateList() {
      var resetCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var resetRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (this.props.showImages && !this.calculatedImageHeight && this.imageHeight && this.imageWidth) {
        this.calculatedImageHeight = this.calculateImageHeight();
      }

      if (this.list) {
        var list = this.list;

        if (resetCache) {
          if (resetRows !== null) {
            if (!Array.isArray(resetRows)) {
              this.cache.clear(resetRows);
            } else if (Array.isArray(resetRows)) {
              for (var i = 0; i < resetRows.length; i++) {
                var resetRow = resetRows[i];
                this.cache.clear(resetRow);
              }
            }
          } else {
            this.cache.clearAll();
            list.measureAllRows();
            list.recomputeRowHeights(0);
          }
        }

        list.forceUpdateGrid();
      }
    }
  }, {
    key: "processProps",
    value: function processProps(props) {
      var _this2 = this;

      var changedWitness = false;

      if (!this.props.selectedWitness || props.selectedWitness && props.selectedWitness.id !== this.props.selectedWitness.id) {
        changedWitness = true;
        this._didSetInitialScrollPosition = false;
      }

      if (props.selectedSearchResult && (!this.props.selectedSearchResult || props.selectedSearchResult.start !== this.props.selectedSearchResult.start || props.selectedSearchResult.textId !== this.props.selectedSearchResult.textId)) {
        console.log("resetting scroll position from search result");
        this._didSetInitialScrollPosition = false;
      } // TODO: check if new selectedSearchResult and if so
      // set this._didSetInitialScrollPosition = false
      // make sure there's no numbers in selectedAnnotatedSegments
      // as we want to pass it to Text which only expects TextSegments
      // this._filteredSelectedAnnotatedSegments = props.selectedAnnotatedSegments.reduce(
      //     (acc, current: TextSegment | number) => {
      //         if (current instanceof TextSegment) acc.push(current);
      //         return acc;
      //     },
      //     []
      // );


      var controlsMeasurements = this.getControlsMeasurements(props);

      if (controlsMeasurements) {
        this.selectedTextIndex = controlsMeasurements.selectedTextIndex;
        this.firstSelectedSegment = controlsMeasurements.firstSelectedSegment;
        this.splitTextRect = controlsMeasurements.splitTextRect;
        this.selectedElementId = controlsMeasurements.selectedElementId;
        this.selectedElementIds = controlsMeasurements.selectedElementIds;
      }

      if (props.textListVisible !== this.textListVisible || props.editMenuVisible !== this.editMenuVisible) {
        setTimeout(function () {
          _this2.textListVisible = props.textListVisible;
          _this2.editMenuVisible = props.editMenuVisible;

          _this2.updateList(true);
        }, 500);
      } else {
        if (changedWitness) {
          this.updateList(true);
        } else if (this.pageBreaksChanged(this.props, props)) {
          var selectedRows = null;
          var currentSelectedRow = this.selectedListRow(this.props);
          var newSelectedRow = this.selectedListRow(props);

          if (currentSelectedRow && newSelectedRow) {
            var firstChangedRow = currentSelectedRow > newSelectedRow ? newSelectedRow : currentSelectedRow;
            var splitRowTexts = this.props.splitText.texts;
            selectedRows = [];

            for (var i = firstChangedRow, len = splitRowTexts.length; i < len; i++) {
              selectedRows.push(i);
            }
          }

          this.updateList(true, selectedRows);
        } else if (this.lineBreaksChanges(this.props, props)) {
          var selectedRow = this.selectedListRow(props);
          if (!selectedRow) selectedRow = this.selectedListRow(this.props);
          var _splitRowTexts = this.props.splitText.texts;
          var _selectedRows = [];

          if (selectedRow !== null) {
            for (var _i = selectedRow, _len = _splitRowTexts.length; _i < _len; _i++) {
              _selectedRows.push(_i);
            }

            this.updateList(true, _selectedRows);
          }
        } else if (this.props.fontSize !== props.fontSize) {
          this.updateList(true);
        } else if (this.props.activeAnnotation && props.activeAnnotation && this.annotationsInSameLocation(this.props.activeAnnotation, props.activeAnnotation)) {
          this.updateList(true, this.selectedListRow(props));
        } else {
          this.updateList(this.shouldResetListCache(this.props, props));
        }
      }
    }
  }, {
    key: "pageBreaksChanged",
    value: function pageBreaksChanged(oldProps, newProps) {
      var oldTextBreaks = oldProps.splitText.getTextsFinalPositions();
      var newTextBreaks = newProps.splitText.getTextsFinalPositions();
      if (oldTextBreaks.length !== newTextBreaks.length) return true;
      return JSON.stringify(oldTextBreaks) !== JSON.stringify(newTextBreaks);
    }
  }, {
    key: "lineBreaksChanges",
    value: function lineBreaksChanges(oldProps, newProps) {
      var oldActiveAnnotation = oldProps.activeAnnotation;
      var newActiveAnnotation = newProps.activeAnnotation;
      var hasChanged = false;

      if (oldActiveAnnotation && oldActiveAnnotation.isType(ANNOTATION_TYPES.lineBreak) && newProps.activeAnnotations && !newProps.activeAnnotations.hasOwnProperty(oldActiveAnnotation.uniqueId)) {
        hasChanged = true;
      }

      if (newActiveAnnotation && newActiveAnnotation.isType(ANNOTATION_TYPES.lineBreak) && oldProps.activeAnnotations && !oldProps.activeAnnotations.hasOwnProperty(newActiveAnnotation.uniqueId)) {
        hasChanged = true;
      }

      return hasChanged;
    }
  }, {
    key: "shouldResetListCache",
    value: function shouldResetListCache(oldProps, newProps) {
      var shouldReset = false;

      if (oldProps.showImages !== newProps.showImages || this.pageBreaksChanged(oldProps, newProps)) {
        shouldReset = true;
      }

      return shouldReset;
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(props) {
      this.processProps(props);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.resizeHandler = lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(function () {
        _this3.calculatedImageHeight = null;

        _this3.updateList();
      }, 500).bind(this);
      window.addEventListener("resize", this.resizeHandler);
      this.debouncedScroll = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (list) {
        _this3.changeScrollToId({
          id: list[0].TStart,
          from: 2
        });
      }, 1000);
      this.selectionHandler = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (e) {
        _this3.handleSelection(e);
      }, 200).bind(this);
      document.addEventListener("selectionchange", this.selectionHandler);
      document.addEventListener("mousedown", this.mouseDown.bind(this), true);
      document.addEventListener("mouseup", this.mouseUp.bind(this), true);
      this.processProps(this.props);
      this.componentDidUpdate();
      this.splitText.style.scrollBehavior = "smooth";
      this.timer = setTimeout(function () {
        _this3.resizeHandler();
      }, 2000);
    }
  }, {
    key: "scrollToIndex",
    value: function scrollToIndex(selectedTextIndex) {
      var list = this.list;
      setTimeout(function () {
        list.scrollToRow(selectedTextIndex);
        setTimeout(function () {
          list.scrollToPosition(list.props.scrollTop - 300);
        }, 0);
      }, 100);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props,
          _this$props2,
          _this4 = this;

      var scrollToId = this.props.scrollToId;
      this.targetId2 = this.props.syncIdOnClick;
      this.selectedWindow = this.props.selectedWindow;
      var SearchSyncId = this.props.syncIdOnSearch || null;
      var list = this.list;
      var result = this.props.searchResults;
      var Alignment = this.props.textAlignment;
      this.condition = this.props.condition;
      var con = (prevProps === null || prevProps === void 0 ? void 0 : prevProps.searchResults) !== ((_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.searchResults) || (prevProps === null || prevProps === void 0 ? void 0 : prevProps.syncIdOnSearch) !== ((_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.syncIdOnSearch); // for scrolling for search results;

      if (con && result) {
        if (SearchSyncId) {
          var selectedTextIndex = this.props.splitText.getTextIndexOfPosition(SearchSyncId);
          this.scrollToIndex(selectedTextIndex);
        }
      } // scroll dom with respect to window 1 scrolling


      if (this.selectedWindow === 1 && scrollToId.from === 1 && this.condition && scrollToId.id !== null) {
        this.textAlignmentById = this.props.textAlignmentById || [];

        if (Alignment) {
          var req = this.textAlignmentById.find(function (l) {
            return l.start === scrollToId.id;
          });
          var TStart = req === null || req === void 0 ? void 0 : req.TStart;

          if (TStart !== null) {
            var _selectedTextIndex = this.props.splitText.getTextIndexOfPosition(TStart);

            this.scrollToIndex(_selectedTextIndex);
          }
        }
      } // scroll dom with respect to window 1 click
      //for scrolling to the highlighted alignment if its outside visible DOM


      if (this.targetId2 && scrollToId.from === null && this.selectedWindow === 1 && scrollToId.id === null && this.condition) {
        var _clickIdObj$target_se;

        var clickIdObj = Alignment.alignment.find(function (l) {
          return _this4.targetId2 >= l.source_segment.start && _this4.targetId2 < l.source_segment.end;
        });
        var syncClickTargetId = clickIdObj === null || clickIdObj === void 0 ? void 0 : (_clickIdObj$target_se = clickIdObj.target_segment) === null || _clickIdObj$target_se === void 0 ? void 0 : _clickIdObj$target_se.start;

        var _selectedTextIndex2 = this.props.splitText.getTextIndexOfPosition(syncClickTargetId);

        this.scrollToIndex(_selectedTextIndex2);
      } // if (this.selectedNodes && this.selectedNodes.length > 0) {
      //     const selectedNodes = this.selectedNodes;
      //     const selectedSegments = this.props.selectedAnnotatedSegments;
      //     setTimeout(() => {
      //         let selRange = document.createRange();
      //         let startNode = selectedNodes[0];
      //         let endNode = selectedNodes[selectedNodes.length - 1];
      //         // let lastSegment = selectedSegments[selectedSegments.length - 1];
      //         if (lastSegment instanceof TextSegment) {
      //             let lastElement = document.getElementById(
      //                 idForSegment(lastSegment)
      //             );
      //             if (lastElement) endNode = lastElement;
      //         }
      //         if (
      //             startNode instanceof Element &&
      //             endNode instanceof Element
      //         ) {
      //             startNode = document.getElementById(startNode.id);
      //             endNode = document.getElementById(endNode.id);
      //             if (startNode && endNode) {
      //                 selRange.setStart(startNode, 0);
      //                 selRange.setEnd(endNode, endNode.childNodes.length);
      //                 let sel = document.getSelection();
      //                 if (sel) {
      //                     this._modifyingSelection = true;
      //                     sel.removeAllRanges();
      //                     sel.addRange(selRange);
      //                     this.selectedNodes = null;
      //                 }
      //             }
      //         }
      //     }, 0);
      // }

    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("mousedown", this);
      document.removeEventListener("mouseup", this);
      window.removeEventListener("resize", this.resizeHandler);
      document.removeEventListener("selectionchange", this.selectionHandler);
      clearTimeout(this.timer);
    }
  }, {
    key: "getSelectedTextIndex",
    value: function getSelectedTextIndex() {
      var selectedTextIndex = 0;
      var startPos = null;

      if (this.props.activeAnnotation) {
        var _this$props$splitText = this.props.splitText.annotatedText.getPositionOfAnnotation(this.props.activeAnnotation);

        var _this$props$splitText2 = _slicedToArray(_this$props$splitText, 1);

        startPos = _this$props$splitText2[0];
      } else if (this.props.selectedSearchResult) {
        var _segment = this.props.splitText.annotatedText.segmentAtOriginalPosition(this.props.selectedSearchResult.start);

        if (_segment instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_12__["default"]) {
          startPos = _segment.start;
        } else if (typeof _segment === "number") {
          startPos = _segment;
        }
      }

      if (startPos) {
        selectedTextIndex = this.props.splitText.getTextIndexOfPosition(startPos);
      }

      return selectedTextIndex;
    }
  }, {
    key: "getControlsMeasurements",
    value: function getControlsMeasurements(props) {
      if (!this.splitText) {
        return null;
      }

      var splitTextComponent = this.splitText;
      var selectedTextIndex = null;
      var firstSelectedSegment = null;
      var selectedElementId = null;
      var splitTextRect = null;
      var segmentIdFunction = null;
      var selectedElementIds = [];
      var startPos = 0;

      if (props.activeAnnotation) {
        var activeAnnotation = props.activeAnnotation;

        var _props$splitText$anno = props.splitText.annotatedText.getPositionOfAnnotation(activeAnnotation);

        var _props$splitText$anno2 = _slicedToArray(_props$splitText$anno, 1);

        startPos = _props$splitText$anno2[0];

        if (startPos === null) {
          console.warn("No startPos in getControlsMeasurements");
          return null;
        }

        if (activeAnnotation.type === ANNOTATION_TYPES.pageBreak) {
          startPos -= 1;
        }

        if (activeAnnotation.type === ANNOTATION_TYPES.lineBreak) {
          startPos -= 1;
        } // Index of text containing end of annotation


        var positionEnd = startPos + activeAnnotation.length;
        if (activeAnnotation.length > 0) positionEnd -= 1;
        selectedTextIndex = props.splitText.getTextIndexOfPosition(positionEnd);
        splitTextRect = splitTextComponent.getBoundingClientRect();
      }

      var selectedAnnotatedSegments = [];

      if (props.selectedAnnotatedSegments && props.selectedAnnotatedSegments.length > 0) {
        selectedAnnotatedSegments = props.selectedAnnotatedSegments;

        for (var i = 0; i < selectedAnnotatedSegments.length; i++) {
          var _segment2 = selectedAnnotatedSegments[i];

          if (firstSelectedSegment === null && _segment2 instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_12__["default"]) {
            firstSelectedSegment = _segment2;
            break;
          }
        }

        if (firstSelectedSegment) {
          if (firstSelectedSegment.length === 0 && props.activeAnnotation && props.activeAnnotation.isInsertion) {
            selectedElementId = idForInsertion(firstSelectedSegment);
            segmentIdFunction = idForInsertion;
          } else {
            selectedElementId = idForSegment(firstSelectedSegment);
            segmentIdFunction = idForSegment;
          }
        }
      } else if (props.activeAnnotation) {
        if (props.activeAnnotation.isDeletion) {
          var _segment3 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_12__["default"](startPos, "");

          selectedElementId = idForDeletedSegment(_segment3);
          segmentIdFunction = idForDeletedSegment;
          firstSelectedSegment = _segment3;
          selectedAnnotatedSegments = [firstSelectedSegment];
        } else if (props.activeAnnotation.isInsertion) {
          var _props$splitText$anno3 = props.splitText.annotatedText.getPositionOfAnnotation(props.activeAnnotation),
              _props$splitText$anno4 = _slicedToArray(_props$splitText$anno3, 1),
              start = _props$splitText$anno4[0];

          if (start) {
            var _segment4 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_12__["default"](start, "");

            selectedElementId = idForInsertion(_segment4);
            segmentIdFunction = idForInsertion;
            firstSelectedSegment = _segment4;
            selectedAnnotatedSegments = [firstSelectedSegment];
          }
        } else if (props.activeAnnotation.type === ANNOTATION_TYPES.pageBreak) {
          var _segment5 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_12__["default"](startPos + 1, "");

          var prevSegment = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_12__["default"](startPos, "");
          selectedElementId = idForPageBreak(prevSegment);
          firstSelectedSegment = _segment5;
          selectedAnnotatedSegments = [_segment5];
          selectedElementIds = [selectedElementId];
        } else if (props.activeAnnotation.type === ANNOTATION_TYPES.lineBreak) {
          var _segment6 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_12__["default"](startPos + 1, "");

          var _prevSegment = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_12__["default"](startPos, "");

          selectedElementId = idForLineBreak(_prevSegment);
          firstSelectedSegment = _segment6;
          selectedAnnotatedSegments = [_segment6];
          selectedElementIds = [selectedElementId];
        }
      }

      if (segmentIdFunction) {
        for (var _i2 = 0; _i2 < selectedAnnotatedSegments.length; _i2++) {
          var _segment7 = selectedAnnotatedSegments[_i2];

          if (_segment7 instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_12__["default"]) {
            var _segmentId = segmentIdFunction(_segment7);

            selectedElementIds.push(_segmentId);
          }
        }
      }

      if (selectedTextIndex != null && firstSelectedSegment && selectedElementId && splitTextRect) {
        return {
          selectedTextIndex: selectedTextIndex,
          firstSelectedSegment: firstSelectedSegment,
          selectedElementId: selectedElementId,
          splitTextRect: splitTextRect,
          selectedElementIds: selectedElementIds
        };
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var props = this.props;
      var rowRenderer = this.rowRenderer;
      var cache = this.cache;
      var key = props.selectedWitness ? props.selectedWitness.id : 0;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
        className: _SplitText_css__WEBPACK_IMPORTED_MODULE_11___default.a.splitText2,
        ref: function ref(div) {
          return _this5.splitText = div;
        },
        key: key,
        style: {
          cursor: "pointer"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("button", {
        id: "updateList2",
        style: {
          display: "none"
        },
        onClick: function onClick() {
          return _this5.updateList(true);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_5__["AutoSizer"], {
        disableWidth: true
      }, function (_ref) {
        var height = _ref.height;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_virtualized__WEBPACK_IMPORTED_MODULE_6__["List"], {
          ref: function ref(list) {
            return _this5.list = list;
          },
          height: height,
          rowCount: props.splitText.texts.length,
          rowHeight: cache.rowHeight,
          rowRenderer: rowRenderer,
          width: 1,
          overscanRowCount: 1,
          deferredMeasurementCache: cache,
          onScroll: _this5.scrollEvent,
          scrollToAlignment: "start",
          containerStyle: {
            width: "100%",
            maxWidth: "100%"
          },
          style: {
            width: "100%"
          }
        });
      }));
    }
  }, {
    key: "getStringPositions",
    value: function getStringPositions(text, string, index) {
      var uniqueId = this.props.splitText.annotatedText.getUniqueId();

      if (!_searchResultsCache.hasOwnProperty(uniqueId)) {
        _searchResultsCache = _defineProperty({}, uniqueId, {});
      }

      if (!_searchResultsCache[uniqueId].hasOwnProperty(string)) {
        _searchResultsCache[uniqueId] = _defineProperty({}, string, {});
      }

      if (_searchResultsCache[uniqueId][string].hasOwnProperty(index)) {
        return _searchResultsCache[uniqueId][string][index];
      }

      var splitter = new grapheme_splitter__WEBPACK_IMPORTED_MODULE_14___default.a();
      var content = text.getText();
      var firstSegment = text.segments[0];
      var startingPosition = firstSegment.start;
      var positions = [];
      var position = content.indexOf(string);

      while (position !== -1) {
        positions.push(position);
        position = content.indexOf(string, position + 1);
      } // Position needs to be position in complete text


      var verifiedPositions = {};

      if (positions.length > 0) {
        var graphemes = splitter.splitGraphemes(content);
        var _position2 = 0;
        var activePosition = null;

        for (var i = 0; i < graphemes.length; i++) {
          var grapheme = graphemes[i];
          var graphemeEnd = _position2 + (grapheme.length - 1);

          if (activePosition !== null) {
            var expectedEnd = activePosition + (string.length - 1);

            if (graphemeEnd >= expectedEnd) {
              verifiedPositions[activePosition + startingPosition] = [activePosition + startingPosition, graphemeEnd + startingPosition];
              activePosition = null;
            }
          } else if (positions.indexOf(_position2) !== -1) {
            if (string.length === grapheme.length) {
              verifiedPositions[_position2 + startingPosition] = [_position2 + startingPosition, graphemeEnd + startingPosition];
            } else if (string.length > grapheme.length) {
              activePosition = _position2;
            }
          } else {
            activePosition = null;
          }

          _position2 += grapheme.length;
        }
      }

      _searchResultsCache[uniqueId][string][index] = verifiedPositions;
      return verifiedPositions;
    }
  }, {
    key: "rowRenderer",
    value: function rowRenderer(_ref2) {
      var key = _ref2.key,
          index = _ref2.index,
          parent = _ref2.parent,
          style = _ref2.style;
      var props = this.props;
      var cache = this.cache;
      var searchStringPositions = {};
      var searchValue = this.props.searchValue;

      if (searchValue && searchValue.length > 0 && props.splitText) {
        searchStringPositions = this.getStringPositions(props.splitText.texts[index], searchValue, index);
      }

      var newStyle = _objectSpread(_objectSpread({}, style), {}, {
        height: style.height + 10
      });

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_7__["CellMeasurer"], {
        columnIndex: 0,
        key: key,
        parent: parent,
        rowIndex: index,
        cache: cache
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
        key: key,
        style: newStyle,
        ref: this.splitTextRef,
        id: "index2_".concat(index),
        className: _SplitText_css__WEBPACK_IMPORTED_MODULE_11___default.a.splitTextRow
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
        className: _SplitText_css__WEBPACK_IMPORTED_MODULE_11___default.a.splitTextRowContent
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Text2__WEBPACK_IMPORTED_MODULE_9__["default"], {
        segmentedText: props.splitText.texts[index],
        row: index,
        selectedSegmentId: props.selectedSegmentId // searchValue={searchValue}
        // selectedSearchResult={
        //     this.props.selectedSearchResult
        // }
        ,
        searchStringPositions: searchStringPositions,
        textAlignmentById: props.textAlignmentById,
        fontSize: props.fontSize,
        isPanelLinked: this.props.isPanelLinked,
        selectedSourceRange: props.selectedSourceRange,
        selectedTargetRange: props.selectedTargetRange,
        changeSelectedRange: props.changeSelectedRange,
        changeSyncIdOnClick: this.props.changeSyncIdOnClick,
        changeScrollToId: this.props.changeScrollToId,
        condition: this.condition
      }))));
    }
  }]);

  return SplitTextComponent;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);



/***/ }),

/***/ "./app/components/TextDetail2/TableOfContent/TableOfContent.js":
/*!*********************************************************************!*\
  !*** ./app/components/TextDetail2/TableOfContent/TableOfContent.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loader */ "./node_modules/react-loader/lib/react-loader.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/InputBase */ "./node_modules/@mui/material/InputBase/index.js");
/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Toolbar */ "./node_modules/@mui/material/Toolbar/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var Search = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["styled"])("div")(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["alpha"])(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["alpha"])(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%"
  }, theme.breakpoints.up("sm"), {
    marginLeft: theme.spacing(1),
    width: "auto"
  });
});
var SearchIconWrapper = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["styled"])("div")(function (_ref3) {
  var theme = _ref3.theme;
  return {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  };
});
var StyledInputBase = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["styled"])(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_5__["default"])(function (_ref4) {
  var theme = _ref4.theme;
  return {
    color: "inherit",
    "& .MuiInputBase-input": _defineProperty({
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: "calc(1em + ".concat(theme.spacing(4), ")"),
      transition: theme.transitions.create("width"),
      width: "100%"
    }, theme.breakpoints.up("sm"), {
      width: "0",
      cursor: "pointer",
      "&:focus": {
        width: "20ch"
      }
    })
  };
});

function TableOfContent() {
  var data = [{
    Id: 1,
    Title: "chapter 1",
    segment_id: 0
  }, {
    Id: 2,
    Title: "chapter 2",
    segment_id: 400
  }];
  var loaded = data.length > 0 ? true : false;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      bgcolor: "heading.main",
      color: "text.primary",
      width: "100%",
      height: "100%",
      paddingInline: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: {
      justifyContent: "space-between",
      paddingLeft: "0 !important",
      margin: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    textTransform: "uppercase",
    component: "h6"
  }, "Table Of Content"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Search, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchIconWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_4___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInputBase, {
    placeholder: "Search\u2026",
    inputProps: {
      "aria-label": "search"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], null, data.map(function (list, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      key: "TableContent-" + index,
      sx: {
        cursor: "pointer",
        width: "fit-content",
        "&:hover": {
          fontWeight: "bold"
        }
      }
    }, list.Title);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (TableOfContent);

/***/ }),

/***/ "./app/components/TextDetail2/Text2.css":
/*!**********************************************!*\
  !*** ./app/components/TextDetail2/Text2.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","paddingSide":"20px","maxWidth":"600px","text":"Text2---text","textFirstRow":"Text2---textFirstRow","textLine":"Text2---textLine","textline":"Text2---textline","limitWidth":"Text2---limitWidth","textContainer":"Text2---textContainer","annotation":"Text2---annotation","removedByAnnotation":"Text2---removedByAnnotation","insertion":"Text2---insertion","highlight":"Text2---highlight","activeHighlight":"Text2---activeHighlight","lineBreak":"Text2---lineBreak","pageBreak":"Text2---pageBreak","syncIdClass":"Text2---syncIdClass","selectedRangelight":"Text2---selectedRangelight","selectedRangeDark":"Text2---selectedRangeDark"};

/***/ }),

/***/ "./app/components/TextDetail2/Text2.js":
/*!*********************************************!*\
  !*** ./app/components/TextDetail2/Text2.js ***!
  \*********************************************/
/*! exports provided: idForSegment, idForDeletedSegment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idForSegment", function() { return idForSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idForDeletedSegment", function() { return idForDeletedSegment; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Text2_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Text2.css */ "./app/components/TextDetail2/Text2.css");
/* harmony import */ var _Text2_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Text2_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_TextSegment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/TextSegment */ "./app/lib/TextSegment.js");
/* harmony import */ var lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/AnnotatedText */ "./app/lib/AnnotatedText.js");
/* harmony import */ var lib_SegmentedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/SegmentedText */ "./app/lib/SegmentedText.js");
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! grapheme-splitter */ "./node_modules/grapheme-splitter/index.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(grapheme_splitter__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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












function idForSegment(segment) {
  return "s2_" + segment.start;
}
function idForDeletedSegment(segment) {
  return "ds_" + segment.start;
} // export function idForInsertion(segment: TextSegment): string {
//     return "i_" + segment.start;
// }
// export function idForPageBreak(segment: TextSegment): string {
//     return "p_" + (segment.end + 1);
// }
// export function idForLineBreak(segment: TextSegment): string {
//     return "l_" + (segment.end + 1);
// }

// import ReactDOMServer from "react-dom/server";
// import PageBreakIcon from "images/page_break_icon.svg";
// const PARA_SYMBOL = String.fromCharCode(182);
// const pageBreakIconString = ReactDOMServer.renderToStaticMarkup(
//     <PageBreakIcon />
// );
var Text2 = /*#__PURE__*/function (_React$Component) {
  _inherits(Text2, _React$Component);

  var _super = _createSuper(Text2);

  function Text2(props) {
    var _this;

    _classCallCheck(this, Text2);

    _this = _super.call(this, props);
    _this.state = {
      segmentedText: props.segmentedText
    };
    _this.textAlignmentById = _this.props.textAlignmentById;
    _this._renderedSegments = null;
    _this._renderedHtml = null;
    return _this;
  }

  _createClass(Text2, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState(function (prevState, props) {
        return _objectSpread(_objectSpread({}, prevState), {}, {
          segmentedText: nextProps.segmentedText
        });
      });
    } // annotationsForSegment(segment: TextSegment): Annotation[] {
    //     let annotations: Annotation[] = [];
    //     const foundAnnotations = this.props.annotationPositions[
    //         String(segment.start)
    //     ];
    //     if (foundAnnotations) {
    //         annotations = foundAnnotations;
    //     }
    //     const insertions =
    //         this.props.annotationPositions[INSERTION_KEY + segment.start] || [];
    //     const deletions =
    //         this.props.annotationPositions[DELETION_KEY + segment.start] || [];
    //     const pageBreaks =
    //         this.props.annotationPositions[
    //             PAGE_BREAK_KEY + (segment.end + 1)
    //         ] || [];
    //     const lineBreaks =
    //         this.props.annotationPositions[
    //             LINE_BREAK_KEY + (segment.end + 1)
    //         ] || [];
    //     return annotations.concat(
    //         insertions,
    //         deletions,
    //         pageBreaks,
    //         lineBreaks
    //     );
    // }
    // segmentsContainSegment(segments: TextSegment[], segment: TextSegment) {
    //     for (let i = 0; i < segments.length; i++) {
    //         let listSegment = segments[i];
    //         if (
    //             listSegment.start === segment.start &&
    //             listSegment.text === segment.text
    //         ) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

  }, {
    key: "selectedElement",
    value: function selectedElement(element) {
      var sourceRangeSelection = [];
      var targetRangeSelection = [];
      var selection = document.getSelection();

      if (element !== null && element !== void 0 && element.id.includes("s2_") && this.props.condition) {
        var clickId = parseInt(element.id.replace("s2_", ""));
        this.props.changeSyncIdOnClick(clickId);
        this.props.changeScrollToId({
          id: "ua",
          from: "ua"
        });

        var _id = parseInt(element.id.replace("s2_", ""));

        var rangeUnique = this.textAlignmentById.find(function (l) {
          return _id >= l.TStart && _id < l.TEnd;
        });

        if (rangeUnique) {
          for (var i = rangeUnique.start; i < rangeUnique.end; i++) {
            sourceRangeSelection.push(i);
          }

          for (var _i = rangeUnique.TStart; _i < rangeUnique.TEnd; _i++) {
            targetRangeSelection.push(_i);
          }

          this.props.changeSelectedRange({
            source: sourceRangeSelection,
            target: targetRangeSelection
          });
        }
      }

      if (selection && selection.type === "Range") {
        return;
      }

      this.props.selectedSegmentId(element.id);

      if (!element.id) {
        this.props.changeSelectedRange({
          source: [],
          target: []
        });
      }
    }
  }, {
    key: "generateHtml",
    value: function generateHtml(renderProps, renderState) {
      var segments = renderState.segmentedText.segments;
      var textLineClass = _Text2_css__WEBPACK_IMPORTED_MODULE_2___default.a.textLine;
      var segmentHTML = '<p class="' + textLineClass + '">';
      if (segments.length === 0) return {
        __html: segmentHTML
      };
      var endPosition = segments[segments.length - 1].end + 1;
      var highlightClass = _Text2_css__WEBPACK_IMPORTED_MODULE_2___default.a.highlight;
      var activeHighlightClass = _Text2_css__WEBPACK_IMPORTED_MODULE_2___default.a.activeHighlight;
      var activeSearchResultEnd = null;

      for (var i = 0; i < segments.length; i++) {
        var _renderProps$selected;

        var segment = segments[i];
        var classAttribute = "";
        var classes = [];
        var selectedCurrentDeletion = false;
        var selectedCurrentPageBreak = false;
        var selectedCurrentLineBreak = false;
        var lineBreakAnnotation = false;
        var pageBreakAnnotation = null; // It's an insertion at the end of the text, which should have just been added to the html.
        // So break as we don't want anymore segment html adding.

        if (segment.start === endPosition) {
          break;
        }

        var _id2 = null;

        if (segment.length === 0) {// id = idForDeletedSegment(segment);
          // classes.push(styles.removedByAnnotation);
          // if (deletionText) {
          //     segment = new TextSegment(segment.start, deletionText);
          // }
        } else {
          _id2 = idForSegment(segment);
        } // if (
        //     this.segmentsContainSegment(
        //         renderProps.selectedAnnotatedSegments,
        //         segment
        //     ) ||
        //     selectedCurrentDeletion
        // ) {
        //     classes.push(styles.selectedAnnotation);
        // }


        if ((_renderProps$selected = renderProps.selectedTargetRange) !== null && _renderProps$selected !== void 0 && _renderProps$selected.includes(segment.start) && renderProps.condition) {
          var newClass = renderProps.theme.palette.mode === "light" ? _Text2_css__WEBPACK_IMPORTED_MODULE_2___default.a.selectedRangelight : _Text2_css__WEBPACK_IMPORTED_MODULE_2___default.a.selectedRangeDark;
          classes.push(newClass);
        }

        if (classes.length > 0) {
          var className = classnames__WEBPACK_IMPORTED_MODULE_1___default.a.apply(void 0, classes);
          classAttribute = 'class="' + className + '"';
        }

        var segmentContent = segment.text; // Add search result highlight if required.

        if (renderProps.searchStringPositions) {
          var segmentStart = segment.start;
          var _position = segmentStart;
          segmentContent = "";
          var highlight = highlightClass;

          if (renderProps.selectedSearchResult && renderProps.selectedSearchResult.start <= _position && renderProps.selectedSearchResult.start + renderProps.selectedSearchResult.length > _position) {
            highlight = activeHighlightClass;
          }

          for (var j = 0; j < segment.text.length; j++) {
            var _char = segment.text.charAt(j);

            _position = segmentStart + j;

            if (activeSearchResultEnd) {
              var _activeSearchResultEn = activeSearchResultEnd,
                  _activeSearchResultEn2 = _slicedToArray(_activeSearchResultEn, 2),
                  start = _activeSearchResultEn2[0],
                  end = _activeSearchResultEn2[1];

              if (j === 0) {
                segmentContent += '<span class="' + highlight + '">';
              }

              if (_position === end) {
                segmentContent += _char + "</span>";
                activeSearchResultEnd = null;
              } else if (j === segment.text.length - 1) {
                segmentContent += _char + "</span>";
              } else {
                segmentContent += _char;
              }
            } else if (_position in renderProps.searchStringPositions) {
              var _renderProps$searchSt = _slicedToArray(renderProps.searchStringPositions[_position], 2),
                  _start = _renderProps$searchSt[0],
                  _end = _renderProps$searchSt[1];

              segmentContent += '<span class="' + highlight + '">' + _char;

              if (j === segment.text.length - 1 || _position === _end) {
                segmentContent += "</span>";
              }

              if (_position < _end) {
                activeSearchResultEnd = [_start, _end];
              }
            } else {
              segmentContent += _char;
            }
          }
        } // if (
        //     this.props.textAlignmentById !== null
        //     // && selectedTextId === TargetId
        // ) {
        //     let r = this.props.textAlignmentById.find(
        //         (d) => d.TStart === segment.start
        //     );
        //     if (r) {
        //         segmentHTML +=
        //             "<span id='alignment2_" +
        //             segment.start +
        //             "'>" +
        //             `<sup class=` +
        //             styles.syncIdClass +
        //             `>${r.id}</sup>` +
        //             "</span>";
        //     }
        // }


        segmentHTML += "<span id=" + _id2 + " key=" + _id2 + " " + classAttribute + ">" + segmentContent + "</span>";
      }

      this._renderedSegments = segments;
      segmentHTML += "</p>";
      var html = {
        __html: segmentHTML
      };
      return html;
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var renderedHtml = this.generateHtml(nextProps, nextState);

      if (this.props.fontSize !== nextProps.fontSize) {
        return true;
      } else if (this._renderedHtml && renderedHtml.__html === this._renderedHtml.__html) {
        return false;
      } else if (this._renderedHtml !== renderedHtml) {
        this._renderedHtml = renderedHtml;
        return true;
      }

      return false;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.textAlignmentById = this.props.textAlignmentById;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var classes = [_Text2_css__WEBPACK_IMPORTED_MODULE_2___default.a.text];

      if (this.props.row === 0) {
        classes.push(_Text2_css__WEBPACK_IMPORTED_MODULE_2___default.a.textFirstRow);
      } // Generate HTML manually as it is much faster when
      // creating large numbers of elements, such as these spans.


      var html = this._renderedHtml ? this._renderedHtml : this.generateHtml(this.props, this.state);

      if (!this._renderedHtml) {
        this._renderedHtml = html;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Text2_css__WEBPACK_IMPORTED_MODULE_2___default.a.textContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default.a.apply(void 0, classes),
        dangerouslySetInnerHTML: html,
        onClick: function onClick(e) {
          return _this2.selectedElement(e.target);
        },
        style: {
          fontSize: this.props.fontSize,
          fontFamily: "var(--tibetan-fonts2)"
        }
      }));
    }
  }]);

  return Text2;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_mui_styles__WEBPACK_IMPORTED_MODULE_9__["withTheme"])(Text2));

/***/ }),

/***/ "./app/components/TextDetail2/TextDetail.css":
/*!***************************************************!*\
  !*** ./app/components/TextDetail2/TextDetail.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","textDetail2":"TextDetail---textDetail2","textContainer2":"TextDetail---textContainer2"};

/***/ }),

/***/ "./app/components/TextDetail2/TextDetail.js":
/*!**************************************************!*\
  !*** ./app/components/TextDetail2/TextDetail.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextDetailHeadingContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextDetailHeadingContainer */ "./app/components/TextDetail2/TextDetailHeadingContainer.js");
/* harmony import */ var lib_SplitText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/SplitText */ "./app/lib/SplitText.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-loader */ "./node_modules/react-loader/lib/react-loader.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_text_splitters_lengthSplitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/text_splitters/lengthSplitter */ "./app/lib/text_splitters/lengthSplitter.js");
/* harmony import */ var _TextDetail_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextDetail.css */ "./app/components/TextDetail2/TextDetail.css");
/* harmony import */ var _TextDetail_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_TextDetail_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _TableOfContent_TableOfContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TableOfContent/TableOfContent */ "./app/components/TextDetail2/TableOfContent/TableOfContent.js");
/* harmony import */ var css_util_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! css/util.css */ "./app/css/util.css");
/* harmony import */ var css_util_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(css_util_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var components_MediaComponent_Image_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/MediaComponent/Image.css */ "./app/components/MediaComponent/Image.css");
/* harmony import */ var components_MediaComponent_Image_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(components_MediaComponent_Image_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _SplitText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SplitText */ "./app/components/TextDetail2/SplitText.js");













function TextDetail(props) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var text = {
    name: ""
  };

  if (props.text) {
    text = props.text;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var element = ref.current;
    element.addEventListener("mouseenter", mouseEnter);
    return function () {
      element.removeEventListener("mouseenter", mouseEnter);
    };
  }, []);

  function mouseEnter() {
    props.changeSelectedWindow(2);
  }

  var inlineControls = false;
  var textComponent = null;
  var splitText = null;
  var selectedWindow = props.selectedWindow;

  if (!props.annotatedText || !props.text || props.loading) {
    textComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: "key-".concat(Math.random())
    });
  } else {
    var limitWidth = false;
    var splitter;

    if (props.paginated) {
      splitter = positionSplitter(props.pageBreaks);
    } else {
      splitter = Object(lib_text_splitters_lengthSplitter__WEBPACK_IMPORTED_MODULE_4__["default"])(800, /^།[\s]+(?!།[\s]+)/, 2, 5);
    }

    var key = 12;
    splitText = new lib_SplitText__WEBPACK_IMPORTED_MODULE_2__["default"](props.annotatedText, splitter);
    inlineControls = true;
    textComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SplitText__WEBPACK_IMPORTED_MODULE_11__["default"], {
      splitText: splitText // annotations={this.props.annotations}
      // activeAnnotations={this.props.activeAnnotations}
      // activeAnnotation={this.props.activeAnnotation}
      ,
      limitWidth: limitWidth // didSelectSegmentIds={props.didSelectSegmentIds}
      ,
      selectedSegmentId: props.selectedSegmentId,
      annotationPositions: props.annotationPositions,
      selectedAnnotatedSegments: props === null || props === void 0 ? void 0 : props.selectedAnnotatedSegments // textListVisible={this.props.textListVisible}
      // showImages={this.props.pageImagesVisible}
      // imagesBaseUrl={this.props.imagesBaseUrl}
      ,
      selectedWitness: props.selectedWitness,
      key: key // selectedSearchResult={this.props.selectedSearchResult}
      // searchValue={this.props.searchValue}
      ,
      fontSize: props.textFontSize,
      scrollToId: props.scrollToId,
      syncIdOnClick: props.syncIdOnClick,
      textAlignment: props.textAlignment,
      textAlignmentById: props.textAlignmentById,
      isPanelLinked: props.isPanelLinked,
      changeScrollToId: props.changeScrollToId,
      changeSyncIdOnClick: props.changeSyncIdOnClick,
      selectedWindow: selectedWindow,
      selectedSourceRange: props.selectedSourceRange,
      selectedTargetRange: props.selectedTargetRange,
      changeSelectedRange: props.changeSelectedRange,
      searchResults: props.searchResults,
      searchValue: props.searchValue,
      selectedText: props.text,
      syncIdOnSearch: props.syncIdOnSearch,
      condition: props.condition
    });
  }

  var textComponents = [textComponent];
  var thirdWindowHeight = components_MediaComponent_Image_css__WEBPACK_IMPORTED_MODULE_10___default.a.ThirdWindowHeight;
  var bodyHeight = "calc(100% - " + thirdWindowHeight + ")"; // let condition = props.isPanelVisible;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    ref: ref,
    className: _TextDetail_css__WEBPACK_IMPORTED_MODULE_5___default.a.textDetail2,
    sx: {
      height: "100%",
      flex: 1,
      bgcolor: "navbar.main",
      color: "texts.main"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextDetailHeadingContainer__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader__WEBPACK_IMPORTED_MODULE_3___default.a, {
    loaded: !props.loading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    style: {
      display: "flex",
      height: "100%",
      width: "100%",
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    style: {
      flex: 1
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_TextDetail_css__WEBPACK_IMPORTED_MODULE_5___default.a.textContainer2, css_util_css__WEBPACK_IMPORTED_MODULE_8___default.a.flex)
  }, !props.loading ? textComponents : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["Slide"], {
    direction: "left",
    "in": props.showTableContent,
    container: ref.current,
    unmountOnExit: true,
    mountOnEnter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    sx: {
      position: "absolute",
      height: "100%",
      minWidth: "50%",
      right: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableOfContent_TableOfContent__WEBPACK_IMPORTED_MODULE_7__["default"], null)))));
}

/* harmony default export */ __webpack_exports__["default"] = (TextDetail);

/***/ }),

/***/ "./app/components/TextDetail2/TextDetailContainer.js":
/*!***********************************************************!*\
  !*** ./app/components/TextDetail2/TextDetailContainer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_uniqWith__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/uniqWith */ "./node_modules/lodash/uniqWith.js");
/* harmony import */ var lodash_uniqWith__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqWith__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_intersectionWith__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/intersectionWith */ "./node_modules/lodash/intersectionWith.js");
/* harmony import */ var lodash_intersectionWith__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_intersectionWith__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TextDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextDetail */ "./app/components/TextDetail2/TextDetail.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/AnnotatedText */ "./app/lib/AnnotatedText.js");
/* harmony import */ var state_helpers_TextStore2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! state_helpers/TextStore2 */ "./app/state_helpers/TextStore2.js");




function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var DISMISS_CONTROLS_ON_CLICK = true;

function getInsertionKey(annotation) {
  return [annotation.start, annotation.length].join("-");
}

var _posAnnotatedText;

var _posAnnotations;

var _positions;

var _posVersion;

var getAnnotationPositions = function getAnnotationPositions(annotatedText, annotations) {
  if (annotatedText === _posAnnotatedText && annotations === _posAnnotations && annotatedText.version === _posVersion) {
    return _positions;
  }

  var positions = {};
  var activeInsertions = {};

  var _loop = function _loop(i) {
    var annotation = annotations[i];

    var _annotatedText$getPos = annotatedText.getPositionOfAnnotation(annotation),
        _annotatedText$getPos2 = _slicedToArray(_annotatedText$getPos, 2),
        startPos = _annotatedText$getPos2[0],
        length = _annotatedText$getPos2[1];

    if (startPos == null) {
      return "continue";
    }

    if (length === 0) {
      if (annotation.isInsertion) {
        // group with any active insertions at the same position
        var activeKey = getInsertionKey(annotation);
        var activeInsertionPositions = activeInsertions[activeKey];

        if (activeInsertionPositions) {
          activeInsertionPositions.map(function (pos) {
            return positions[pos].push(annotation);
          });
          return "continue";
        }

        startPos = INSERTION_KEY + startPos;
      }

      if (annotation.isDeletion && annotation.length > 0) {
        // active deletion
        startPos = DELETION_KEY + startPos;
      }

      if (annotation.type === ANNOTATION_TYPES.pageBreak) {
        startPos = PAGE_BREAK_KEY + startPos;
      }

      if (annotation.type === ANNOTATION_TYPES.lineBreak) {
        startPos = LINE_BREAK_KEY + startPos;
      }

      if (positions[startPos] === undefined) {
        positions[startPos] = [];
      }

      if (positions[startPos].indexOf(annotation) === -1) {
        positions[startPos].push(annotation);
      }
    } else {
      var annotationPositions = [];

      for (var j = startPos; j < startPos + length; j++) {
        if (positions[j] === undefined) {
          positions[j] = [];
        }

        if (positions[j].indexOf(annotation) === -1) {
          positions[j].push(annotation);
        }

        annotationPositions.push(j);
      } // Store the positions this annotation is displayed at.
      // This can then be used later to group with inactive insertions


      if (annotation.isInsertion) {
        var key = getInsertionKey(annotation);
        activeInsertions[key] = annotationPositions;
      }
    }
  };

  for (var i = 0; i < annotations.length; i++) {
    var _ret = _loop(i);

    if (_ret === "continue") continue;
  }

  _posAnnotatedText = annotatedText;
  _posAnnotations = annotations;
  _positions = positions;
  _posVersion = annotatedText.version;
  return positions;
};

var mapStateToProps = function mapStateToProps(state) {
  var _selectedWitness;

  var selectedWitness = {};
  var annotatedText = null;
  var workingWitness;
  var textFontSize = reducers__WEBPACK_IMPORTED_MODULE_7__["getTextFontSize2"](state);
  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_7__["getSelectedText2"](state);
  var annotationPositions = {};
  var annotations = [];

  if (selectedText) {
    workingWitness = reducers__WEBPACK_IMPORTED_MODULE_7__["getWorkingWitness2"](state, selectedText.id) || {};
    var selectedWitnessId = reducers__WEBPACK_IMPORTED_MODULE_7__["getSelectedTextWitnessId2"](state, selectedText.id);

    if (selectedWitnessId) {
      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_7__["getWitness2"](state, selectedWitnessId);
    }

    if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(selectedWitness) && !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(workingWitness)) ;
    {
      selectedWitness = workingWitness;
    }
  }

  annotatedText = state_helpers_TextStore2__WEBPACK_IMPORTED_MODULE_9__["getWitnessText"](state, (_selectedWitness = selectedWitness) === null || _selectedWitness === void 0 ? void 0 : _selectedWitness.id);
  var loading = state.data2.loadingWitnesses;

  if (annotatedText) {
    annotationPositions = getAnnotationPositions(annotatedText, Object.values(annotations));
  }

  var isPanelLinked = reducers__WEBPACK_IMPORTED_MODULE_7__["isPanelLinked"](state);
  var scrollToId = reducers__WEBPACK_IMPORTED_MODULE_7__["getScrollToId"](state);
  var syncIdOnClick = reducers__WEBPACK_IMPORTED_MODULE_7__["getSyncIdOnClick"](state);
  var textAlignment = reducers__WEBPACK_IMPORTED_MODULE_7__["getTextAlignment"](state);
  var selectedWindow = reducers__WEBPACK_IMPORTED_MODULE_7__["getSelectedWindow"](state);
  var searchValue = reducers__WEBPACK_IMPORTED_MODULE_7__["getSearchValue2"](state);
  var isSecondWindowOpen = reducers__WEBPACK_IMPORTED_MODULE_7__["isSecondWindowOpen"](state);
  var condition = reducers__WEBPACK_IMPORTED_MODULE_7__["getConditionForAlignment"](state);
  return {
    text: selectedText,
    textFontSize: textFontSize,
    annotatedText: annotatedText,
    selectedWitness: selectedWitness,
    loading: loading,
    annotationPositions: annotationPositions,
    imageData: Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getImageData"])(state),
    selectedImage: Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getSelectedImage"])(state),
    isImagePortrait: Object(reducers__WEBPACK_IMPORTED_MODULE_7__["isImagePortrait"])(state),
    scrollToId: scrollToId,
    syncIdOnClick: syncIdOnClick,
    textAlignment: textAlignment,
    textAlignmentById: reducers__WEBPACK_IMPORTED_MODULE_7__["getTextAlignmentById"](state),
    selectedWindow: selectedWindow,
    selectedSourceRange: Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getSelectedSourceRange"])(state),
    selectedTargetRange: Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getSelectedTargetRange"])(state),
    showTableContent: reducers__WEBPACK_IMPORTED_MODULE_7__["getShowTableContent2"](state),
    searchResults: Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getSearchResults2"])(state, searchValue),
    searchValue: searchValue,
    syncIdOnSearch: reducers__WEBPACK_IMPORTED_MODULE_7__["getSyncIdOnSearch2"](state),
    condition: condition && isPanelLinked && isSecondWindowOpen
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  var annotatedText = stateProps.annotatedText,
      annotationPositions = stateProps.annotationPositions;
  var dispatch = dispatchProps.dispatch;

  var isDeletion = function isDeletion(id) {
    return id.indexOf("ds2_") !== -1;
  };

  var isInsertion = function isInsertion(id) {
    return id.indexOf("i2_") !== -1;
  };

  var isPageBreak = function isPageBreak(id) {
    return id.indexOf("p2_") !== -1;
  };

  var isLineBreak = function isLineBreak(id) {
    return id.indexOf("l2_") !== -1;
  };

  var idFromSegmentId = function idFromSegmentId(id) {
    var start = 0;

    if (isInsertion(id)) {
      start = id.substr(2);
    } else if (isDeletion(id)) {
      start = id.substr(3);
    } else {
      start = id.substr(2);
    }

    return start;
  };

  var didSelectSegmentPosition = function didSelectSegmentPosition(segmentPosition, start, length) {
    var segmentAnnotations = annotationPositions[segmentPosition];
    var segmentVariants = [];
    var segmentPageBreaks = [];
    var segmentLineBreaks = [];

    if (segmentAnnotations) {
      segmentVariants = segmentAnnotations.filter(function (annotation) {
        return annotation.type === ANNOTATION_TYPES.variant;
      });
      segmentPageBreaks = segmentAnnotations.filter(function (annotation) {
        return annotation.type === ANNOTATION_TYPES.pageBreak;
      });
      segmentLineBreaks = segmentAnnotations.filter(function (annotation) {
        return annotation.type === ANNOTATION_TYPES.lineBreak;
      });
    }

    var activeAnnotations = lodash_intersectionWith__WEBPACK_IMPORTED_MODULE_1___default()(segmentVariants.concat(segmentPageBreaks, segmentLineBreaks), annotatedText.annotations, function (a, b) {
      return a.toString() == b.toString();
    });

    var activeAnnotation = null;

    if (activeAnnotations.length > 0) {
      // get any active annotations
      activeAnnotation = activeAnnotations[0];
    } else if (segmentVariants && segmentVariants.length > 0) {
      // get base text annotation for longest annotation highlighted in text
      var longestAvailable = getLongestAnnotation(segmentVariants);

      var _annotatedText$getPos3 = annotatedText.getPositionOfAnnotation(longestAvailable),
          _annotatedText$getPos4 = _slicedToArray(_annotatedText$getPos3, 2),
          _start = _annotatedText$getPos4[0],
          textLength = _annotatedText$getPos4[1];

      if (longestAvailable && longestAvailable.isInsertion) {
        textLength = 0;
      }

      activeAnnotation = annotatedText.getBaseAnnotation(_start, textLength);
    } else {
      // get base annotation of just the segment
      activeAnnotation = annotatedText.getBaseAnnotation(start, length);
    } // dispatch(actions.changedActiveTextAnnotation(activeAnnotation));

  };

  return _objectSpread(_objectSpread(_objectSpread({}, ownProps), stateProps), {}, {
    onChangedFontSize: function onChangedFontSize(fontSize) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_6__["changedTextFontSize"](fontSize));
    },
    didSelectSegmentIds: function didSelectSegmentIds(segmentIds) {
      if (segmentIds.length === 0) {
        return;
      }

      var segmentAnnotations = [];
      var segments = [];

      var _iterator = _createForOfIteratorHelper(segmentIds),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var segmentId = _step.value;

          if (isDeletion(segmentId) || isInsertion(segmentId)) {
            continue;
          }

          var segmentPosition = idFromSegmentId(segmentId);
          var textSegment = annotatedText.segmentedText.segmentAtPosition(segmentPosition);
          segments.push(textSegment);
          var annotations = annotationPositions[textSegment.start];

          if (annotations) {
            segmentAnnotations = segmentAnnotations.concat(annotations);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      segmentAnnotations = lodash_uniqWith__WEBPACK_IMPORTED_MODULE_0___default()(segmentAnnotations, function (a, b) {
        return a.toString() == b.toString();
      });

      var activeAnnotations = lodash_intersectionWith__WEBPACK_IMPORTED_MODULE_1___default()(segmentAnnotations, annotatedText.annotations, function (a, b) {
        return a.toString() == b.toString();
      });

      var range = getSegmentsRange(segments, activeAnnotations, segmentAnnotations, stateProps.annotatedText);

      if (!range) {
        console.warn("No range for selected segment ids: %o", segmentIds);
        return;
      }

      var baseAnnotation = annotatedText.getBaseAnnotation(range.start, range.length);
      var activeAnnotation = null;

      if (range.annotation) {
        activeAnnotation = range.annotation;
      } else if (activeAnnotations.length > 0) {
        var content = annotatedText.segmentedText.segmentsInRange(range.start, range.length).reduce(function (content, segment) {
          return content + segment.text;
        }, ""); // TODO: test this when editing non-working edition.
        // Check if getTextWorkingWitness works as required

        if (!stateProps.selectedWitness) {
          console.log("no stateProps.selectedWitness: %o", stateProps.selectedWitness);
        }

        activeAnnotation = new Annotation(WORKING_VERSION_ANNOTATION_ID, getTextWorkingWitness(stateProps.text), baseAnnotation.start, baseAnnotation.length, content, ANNOTATION_TYPES.variant, stateProps.selectedWitness, stateProps.user);
      } else {
        activeAnnotation = baseAnnotation;
      } // dispatch(changedActiveTextAnnotation(activeAnnotation));

    },
    changeScrollToId: function changeScrollToId(payload) {
      return dispatch(actions__WEBPACK_IMPORTED_MODULE_6__["changeScrollToId"](payload));
    },
    changeSyncIdOnClick: function changeSyncIdOnClick(payload) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_6__["changeSyncIdOnClick"](payload));
    },
    changeSelectedWindow: function changeSelectedWindow(payload) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_6__["changeSelectedWindow"](payload));
    },
    changeSelectedRange: function changeSelectedRange(payload) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_6__["changeSelectedRange"](payload));
    },
    changeShowTableContent: function changeShowTableContent(payload) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_6__["showTableContent2"](payload));
    },
    selectedSegmentId: function selectedSegmentId(segmentId) {
      var start = idFromSegmentId(segmentId);
      var positionKey = start;

      if (isInsertion(segmentId)) {
        positionKey = INSERTION_KEY + start;
      } else if (isDeletion(segmentId)) {
        positionKey = DELETION_KEY + start;
      } else if (isPageBreak(segmentId)) {
        positionKey = PAGE_BREAK_KEY + start;
      } else if (isLineBreak(segmentId)) {
        positionKey = LINE_BREAK_KEY + start;
      }

      var segmentAnnotations = annotationPositions[positionKey];

      if (DISMISS_CONTROLS_ON_CLICK && stateProps.activeAnnotation) {
        var activeAnnotation = stateProps.activeAnnotation;

        if (activeAnnotation) {
          var dismissTextAnnotation = actions__WEBPACK_IMPORTED_MODULE_6__["changedActiveTextAnnotation"](null);
          dispatch(dismissTextAnnotation);
        }
      } //  else {
      //     if (
      //         isInsertion(segmentId) ||
      //         isDeletion(segmentId) ||
      //         isPageBreak(segmentId) ||
      //         isLineBreak(segmentId)
      //     ) {
      //         const length = 0;
      //         didSelectSegmentPosition(positionKey, start, length);
      //     } else {
      //         let segmentPosition = Number(idFromSegmentId(segmentId));
      //         let textSegment = annotatedText.segmentedText.segmentAtPosition(
      //             segmentPosition
      //         );
      //         if (textSegment) {
      //             didSelectSegmentPosition(
      //                 textSegment.start,
      //                 textSegment.start,
      //                 textSegment.length
      //             );
      //         }
      //     }
      // }

    }
  });
};

var TextDetailContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps, null, mergeProps)(_TextDetail__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(TextDetailContainer));

/***/ }),

/***/ "./app/components/TextDetail2/TextDetailHeading.js":
/*!*********************************************************!*\
  !*** ./app/components/TextDetail2/TextDetailHeading.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _textDetailHeading_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textDetailHeading.css */ "./app/components/TextDetail2/textDetailHeading.css");
/* harmony import */ var _textDetailHeading_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_textDetailHeading_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SelectVersion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectVersion */ "./app/components/TextDetail2/SelectVersion.js");
/* harmony import */ var _UI_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/Slider */ "./app/components/UI/Slider.js");
/* harmony import */ var _TextListContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TextListContainer */ "./app/components/TextDetail2/TextListContainer.js");
/* harmony import */ var images_options_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! images/options.svg */ "./app/images/options.svg");
/* harmony import */ var _HeaderMenu_Settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HeaderMenu/Settings */ "./app/components/TextDetail2/HeaderMenu/Settings.js");
/* harmony import */ var _HeaderMenu_Search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HeaderMenu/Search */ "./app/components/TextDetail2/HeaderMenu/Search.js");
/* harmony import */ var _HeaderMenu_TableOfContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HeaderMenu/TableOfContent */ "./app/components/TextDetail2/HeaderMenu/TableOfContent.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _HeaderMenu_Refresh__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./HeaderMenu/Refresh */ "./app/components/TextDetail2/HeaderMenu/Refresh.js");
/* harmony import */ var _HeaderMenu_SearchList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./HeaderMenu/SearchList */ "./app/components/TextDetail2/HeaderMenu/SearchList.js");



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















function TextDetailHeading(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      findvalue = _useState2[0],
      setfindvalue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showFind = _useState4[0],
      setShowFind = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      visible = _useState6[0],
      setVisible = _useState6[1];

  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var headingRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var handleListItemClick = function handleListItemClick(id) {
    props.changeSelectSyncId(id);
  };

  var debouncedSearch = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function (s) {
    props.searchChanged(s);
  }, 1000)).current;
  var handleSearch = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    e.preventDefault();
    debouncedSearch(findvalue);
    setVisible(true);
  }, [findvalue]);
  var handleWindowSearch = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setShowFind(!showFind);
  }, [showFind]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (showFind === true) {
      inputRef.current.focus();
    }

    if (showFind === false) debouncedSearch(null);
  }, [showFind]);

  var closeSearchItemBox = function closeSearchItemBox() {
    setVisible(false);
    debouncedSearch(null);
    setfindvalue("");
  };

  var condition = lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(props.searchResults) && props.searchResults.hasOwnProperty(props.selectedText.id);
  var results = condition ? props.searchResults[props.selectedText.id].results : [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["Stack"], {
    direction: "column",
    ref: headingRef,
    spacing: 1,
    sx: {
      paddingInline: {
        md: 1,
        xs: 0
      },
      paddingBlock: {
        md: 1,
        xs: 0
      },
      borderTop: {
        md: 0,
        xs: "1px solid gray"
      },
      bgcolor: "heading.main",
      color: "text.primary"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["Stack"], {
    direction: "row",
    spacing: 1,
    justifyContent: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["Box"], {
    sx: {
      display: "flex",
      gap: {
        md: 2,
        sx: 0
      },
      flexDirection: {
        md: "row",
        xs: "column"
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TextListContainer__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SelectVersion__WEBPACK_IMPORTED_MODULE_4__["default"], {
    witnesses: props.witnesses,
    activeWitness: props.selectedWitness,
    onSelectedWitness: props.onSelectedWitness,
    user: props.user
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["ButtonGroup"], {
    size: "small",
    "aria-label": "small button group",
    sx: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "fit-content",
      width: "fit-content",
      border: function border(theme) {
        return "1px solid ".concat(theme.palette.divider);
      },
      borderRadius: 1,
      bgcolor: "background.paper",
      color: "text.secondary",
      "& svg": {
        m: 1
      },
      "& hr": {
        mx: 0.5
      }
    },
    className: _textDetailHeading_css__WEBPACK_IMPORTED_MODULE_3___default.a.button_group_menu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_Refresh__WEBPACK_IMPORTED_MODULE_13__["default"], {
    isSecondWindowOpen: props.isSecondWindowOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_Search__WEBPACK_IMPORTED_MODULE_9__["default"], {
    handleWindowSearch: handleWindowSearch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_Settings__WEBPACK_IMPORTED_MODULE_8__["default"], {
    textFontSize: props.textFontSize,
    onChangedFontSize: props.onChangedFontSize,
    onExport: props.onExport
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_TableOfContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
    changeShowTableContent: props.changeShowTableContent,
    showTableContent: props.showTableContent
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["Collapse"], {
    "in": showFind,
    mountOnEnter: true,
    unmountOnExit: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    onSubmit: handleSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["Stack"], {
    direction: "row",
    spacing: 2,
    position: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["TextField"], {
    hiddenLabel: true,
    id: "filled-hidden-label-small",
    inputProps: {
      style: {
        height: 25,
        padding: "0 14px"
      }
    },
    style: {
      height: 25,
      flex: 1
    },
    fullWidth: true,
    inputRef: inputRef,
    value: findvalue,
    onChange: function onChange(e) {
      return setfindvalue(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["Button"], {
    variant: "outlined",
    size: "small",
    onClick: handleSearch,
    style: {
      height: 25
    }
  }, "Search"), props.searchResults && visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["Box"], {
    sx: _defineProperty({
      position: "absolute",
      top: 35,
      right: 0,
      zIndex: 1,
      bgcolor: "heading.main",
      width: 350,
      height: 350,
      boxShadow: 3,
      overflowX: "hidden"
    }, "boxShadow", 3)
  }, results.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "no such word present"), condition && results.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_SearchList__WEBPACK_IMPORTED_MODULE_14__["default"], {
    handleListItemClick: handleListItemClick,
    searchValue: props.searchValue,
    results: results,
    selectedText: props.selectedText
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_12__["IconButton"], {
    "aria-label": "closeButton",
    onClick: closeSearchItemBox,
    size: "small",
    sx: {
      right: 15,
      top: 0,
      position: "absolute"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11___default.a, {
    fontSize: "inherit"
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (TextDetailHeading);

/***/ }),

/***/ "./app/components/TextDetail2/TextDetailHeadingContainer.js":
/*!******************************************************************!*\
  !*** ./app/components/TextDetail2/TextDetailHeadingContainer.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TextDetailHeading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextDetailHeading */ "./app/components/TextDetail2/TextDetailHeading.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var mapStateToProps = function mapStateToProps(state) {
  var user = reducers__WEBPACK_IMPORTED_MODULE_4__["getUser"](state);
  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_4__["getSelectedText2"](state);
  var witnesses = [];
  var exportingWitness = false;
  var selectedWitness;

  if (selectedText) {
    witnesses = reducers__WEBPACK_IMPORTED_MODULE_4__["getTextWitnesses2"](state, selectedText.id);
    var selectedWitnessId = reducers__WEBPACK_IMPORTED_MODULE_4__["getSelectedTextWitnessId2"](state, selectedText.id);

    if (selectedWitnessId) {
      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_4__["getWitness2"](state, selectedWitnessId); // exportingWitness = reducers.getExportingWitness(
      //     state,
      //     selectedWitnessId
      // );
    } else {
      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_4__["getWorkingWitness2"](state, selectedText.id);
    }
  }

  var textFontSize = reducers__WEBPACK_IMPORTED_MODULE_4__["getTextFontSize2"](state);
  var showTableContent = Object(reducers__WEBPACK_IMPORTED_MODULE_4__["getShowTableContent2"])(state);
  var searchValue = reducers__WEBPACK_IMPORTED_MODULE_4__["getSearchValue2"](state);
  return {
    witnesses: witnesses,
    selectedText: selectedText,
    selectedWitness: selectedWitness,
    textListIsVisible: Object(reducers__WEBPACK_IMPORTED_MODULE_4__["getTextListVisible"])(state),
    accountOverlayVisible: Object(reducers__WEBPACK_IMPORTED_MODULE_4__["getAccountOverlayVisible"])(state),
    textFontSize: textFontSize,
    user: user,
    searchValue: searchValue,
    showTableContent: showTableContent,
    searchResults: reducers__WEBPACK_IMPORTED_MODULE_4__["getSearchResults2"](state, searchValue)
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  var navigationButtonClicked = function navigationButtonClicked() {
    dispatchProps.dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changedTextListVisible"](!stateProps.textListIsVisible));
  };

  var dispatch = dispatchProps.dispatch;
  var selectedText = stateProps.selectedText;
  return _objectSpread(_objectSpread(_objectSpread({}, ownProps), stateProps), {}, {
    navigationButtonClicked: navigationButtonClicked,
    onSelectedWitness: function onSelectedWitness(witness) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["selectedTextWitness2"](selectedText === null || selectedText === void 0 ? void 0 : selectedText.id, witness === null || witness === void 0 ? void 0 : witness.id));
    },
    onChangedFontSize: function onChangedFontSize(fontSize) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changedTextFontSize2"](fontSize));
    },
    changeShowTableContent: function changeShowTableContent(payload) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["showTableContent2"](payload));
    },
    searchChanged: function searchChanged(searchTerm) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changedSearchValue2"](searchTerm));
    },
    changeSelectSyncId: function changeSelectSyncId(payload) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changeSyncIdOnSearch2"](payload));
    }
  });
};

var TextDetailHeadingContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null, mergeProps)(_TextDetailHeading__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (TextDetailHeadingContainer);

/***/ }),

/***/ "./app/components/TextDetail2/TextList.css":
/*!*************************************************!*\
  !*** ./app/components/TextDetail2/TextList.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"textlist":"TextList---textlist","open":"TextList---open"};

/***/ }),

/***/ "./app/components/TextDetail2/TextList.js":
/*!************************************************!*\
  !*** ./app/components/TextDetail2/TextList.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextList.css */ "./app/components/TextDetail2/TextList.css");
/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TextList_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/addTibetanShay */ "./app/lib/addTibetanShay.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function TextList(props) {
  var temptext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(props.texts);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(temptext.current),
      _useState2 = _slicedToArray(_useState, 2),
      textslist = _useState2[0],
      setTextList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      filterValue = _useState4[0],
      setFilterValue = _useState4[1];

  var onSelectedText = props.onSelectedText;
  var selectedText = props.selectedText;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isOpen = _useState6[0],
      setIsOpen = _useState6[1];

  var selected = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return selectedText ? selectedText.name : textslist[0].name;
  }, [selectedText, textslist]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var temp = [];

    if (filterValue === "") {
      setTextList(_toConsumableArray(temptext.current));
    }

    if (filterValue !== null && filterValue !== "") {
      temp = temptext.current.filter(function (val) {
        return val.name.includes(filterValue);
      });
      setTextList(_toConsumableArray(temp));
    }
  }, [filterValue]);
  var cache = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new react_virtualized__WEBPACK_IMPORTED_MODULE_1__["CellMeasurerCache"]({
    fixedHeight: true,
    defaultHeight: 40
  }));
  var classes = [_TextList_css__WEBPACK_IMPORTED_MODULE_3___default.a.textlist];

  var handleClick = function handleClick() {
    setIsOpen(function (prev) {
      return !prev;
    });
    if (isOpen === false) classes.push(_TextList_css__WEBPACK_IMPORTED_MODULE_3___default.a.open);
  };

  var handleChange = function handleChange(e) {
    var value = e.target.value;
    setFilterValue(value);
  };

  var rowRenderer = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function (_ref) {
    var key = _ref.key,
        index = _ref.index,
        style = _ref.style,
        parent = _ref.parent;
    var data = textslist[index];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["CellMeasurer"], {
      key: "optionvalues-".concat(key),
      cache: cache.current,
      parent: parent,
      columnIndex: 0,
      rowIndex: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: style,
      onClick: function onClick() {
        setIsOpen(false);
        onSelectedText(data);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      sx: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: "13rem",
        paddingLeft: 2,
        fontSize: {
          lg: 12,
          md: 11,
          sm: 10,
          xs: 10
        },
        color: "text.primary"
      },
      component: "div"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
      noWrap: true
    }, Object(lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_4__["default"])(data.name)))));
  }, [textslist]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["ClickAwayListener"], {
    onClickAway: function onClickAway() {
      return setIsOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "relative",
      marginLeft: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: handleClick,
    component: "div",
    variant: "outlined",
    sx: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: "10rem",
      height: "100%",
      color: "text.primary"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    noWrap: true
  }, selected)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Grow"], {
    "in": isOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes),
    sx: {
      position: "absolute",
      bgcolor: "heading.main",
      zIndex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
    onChange: handleChange,
    id: "standard-basic",
    label: "filter",
    variant: "standard",
    style: {
      width: "100%"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["AutoSizer"], null, function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["List"], {
      width: width,
      height: height,
      rowHeight: 40,
      deferredMeasurementCache: cache.current,
      rowCount: textslist.length,
      rowRenderer: rowRenderer
    });
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(TextList));

/***/ }),

/***/ "./app/components/TextDetail2/TextListContainer.js":
/*!*********************************************************!*\
  !*** ./app/components/TextDetail2/TextListContainer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TextList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextList */ "./app/components/TextDetail2/TextList.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! api */ "./app/api/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-batched-actions */ "./node_modules/redux-batched-actions/lib/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_batched_actions__WEBPACK_IMPORTED_MODULE_6__);









var mapStateToProps = function mapStateToProps(state) {
  var searchValue = reducers__WEBPACK_IMPORTED_MODULE_4__["getSearchValue"](state);
  var searchResults = reducers__WEBPACK_IMPORTED_MODULE_4__["getSearchResults"](state, searchValue);
  var selectedSearchResult = reducers__WEBPACK_IMPORTED_MODULE_4__["getSelectedSearchResult"](state); // TODO: display search results or spinner depending on when anything
  // returned

  var searching = false;
  var texts = state.data.texts;

  if (searchValue.length > 0) {
    if (searchResults === null) {
      searching = true;
      texts = [];
    } else {
      texts = texts.filter(function (text) {
        return searchResults.hasOwnProperty(text.id);
      });
    }
  }

  return {
    texts: texts,
    selectedText: Object(reducers__WEBPACK_IMPORTED_MODULE_4__["getSelectedText2"])(state),
    searchTerm: searchValue,
    searchResults: searchResults,
    selectedSearchResult: selectedSearchResult,
    searching: searching
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSelectedText: function onSelectedText(text) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["selectedText2"](text));
    }
  };
};

var TextListContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_TextList__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (TextListContainer);

/***/ }),

/***/ "./app/components/TextDetail2/textDetailHeading.css":
/*!**********************************************************!*\
  !*** ./app/components/TextDetail2/textDetailHeading.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"button_group_menu":"textDetailHeading---button_group_menu"};

/***/ }),

/***/ "./app/components/TextList/HighlightedString.js":
/*!******************************************************!*\
  !*** ./app/components/TextList/HighlightedString.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HighlightedString; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grapheme-splitter */ "./node_modules/grapheme-splitter/index.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(grapheme_splitter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-string-replace */ "./node_modules/react-string-replace/index.js");
/* harmony import */ var react_string_replace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_string_replace__WEBPACK_IMPORTED_MODULE_2__);
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





var HighlightedString = /*#__PURE__*/function (_React$Component) {
  _inherits(HighlightedString, _React$Component);

  var _super = _createSuper(HighlightedString);

  function HighlightedString(props) {
    _classCallCheck(this, HighlightedString);

    return _super.call(this, props);
  }

  _createClass(HighlightedString, [{
    key: "render",
    value: function render() {
      var _this = this;

      var string = this.props.string;
      var nameHtml = string;
      var stringClass = this.props.stringClass || "";

      if (this.props.searchTerm) {
        var searchTerm = this.props.searchTerm;
        var splitter = new grapheme_splitter__WEBPACK_IMPORTED_MODULE_1___default.a();
        var graphemes = splitter.splitGraphemes(string);
        var start = string.indexOf(searchTerm);
        var end = start + searchTerm.length;
        var position = 0;
        var foundGraphemes = "";

        if (start > -1) {
          for (var i = 0; i < graphemes.length; i++) {
            var grapheme = graphemes[i];

            if (position >= start && position < end) {
              foundGraphemes += grapheme;
            }

            position += grapheme.length;
          }
        }

        if (foundGraphemes.length > 0) {
          nameHtml = react_string_replace__WEBPACK_IMPORTED_MODULE_2___default()(string, foundGraphemes, function (match, i) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
              className: _this.props.highlightClass,
              key: "highlight-".concat(i)
            }, match);
          });
        }
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: stringClass
      }, nameHtml);
    }
  }]);

  return HighlightedString;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./app/components/TextList/LoadMore.css":
/*!**********************************************!*\
  !*** ./app/components/TextList/LoadMore.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"LoadMore---container"};

/***/ }),

/***/ "./app/components/TextList/LoadMore.js":
/*!*********************************************!*\
  !*** ./app/components/TextList/LoadMore.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadMore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _LoadMore_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LoadMore.css */ "./app/components/TextList/LoadMore.css");
/* harmony import */ var _LoadMore_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LoadMore_css__WEBPACK_IMPORTED_MODULE_2__);



function LoadMore(props) {
  var content;

  if (props.loading) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "leftbar.loading"
    }));
  } else {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], {
      id: "leftbar.loadMore"
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _LoadMore_css__WEBPACK_IMPORTED_MODULE_2___default.a.container
  }, content);
}

/***/ }),

/***/ "./app/components/TextList/ResultCount.js":
/*!************************************************!*\
  !*** ./app/components/TextList/ResultCount.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResultCount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextList.css */ "./app/components/TextList/TextList.css");
/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TextList_css__WEBPACK_IMPORTED_MODULE_1__);
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




var ResultCount = /*#__PURE__*/function (_React$Component) {
  _inherits(ResultCount, _React$Component);

  var _super = _createSuper(ResultCount);

  function ResultCount(props) {
    _classCallCheck(this, ResultCount);

    return _super.call(this, props);
  }

  _createClass(ResultCount, [{
    key: "render",
    value: function render() {
      var countDisplay = this.props.count;
      if (this.props.extra) countDisplay += "+";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_1___default.a.searchTotal
      }, countDisplay);
    }
  }]);

  return ResultCount;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./app/components/TextList/TextList.css":
/*!**********************************************!*\
  !*** ./app/components/TextList/TextList.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","textList":"TextList---textList","textListRow":"TextList---textListRow","selectedRow":"TextList---selectedRow","textNameRow":"TextList---textNameRow","textName":"TextList---textName","highlight":"TextList---highlight","searchResults":"TextList---searchResults","searchResult":"TextList---searchResult","selectedSearchResult":"TextList---selectedSearchResult","searchTotal":"TextList---searchTotal","textListLoader":"TextList---textListLoader","searching":"TextList---searching","loadMore":"TextList---loadMore"};

/***/ }),

/***/ "./app/components/TextList/TextList.js":
/*!*********************************************!*\
  !*** ./app/components/TextList/TextList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-virtualized/dist/es/AutoSizer */ "./node_modules/react-virtualized/dist/es/AutoSizer/index.js");
/* harmony import */ var react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-virtualized/dist/es/CellMeasurer */ "./node_modules/react-virtualized/dist/es/CellMeasurer/index.js");
/* harmony import */ var react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-virtualized/styles.css */ "./node_modules/react-virtualized/styles.css");
/* harmony import */ var react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_virtualized_dist_es_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-virtualized/dist/es/List */ "./node_modules/react-virtualized/dist/es/List/index.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! api */ "./app/api/index.js");
/* harmony import */ var lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/addTibetanShay */ "./app/lib/addTibetanShay.js");
/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TextList.css */ "./app/components/TextList/TextList.css");
/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_TextList_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loader */ "./node_modules/react-loader/lib/react-loader.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _HighlightedString__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HighlightedString */ "./app/components/TextList/HighlightedString.js");
/* harmony import */ var _ResultCount__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ResultCount */ "./app/components/TextList/ResultCount.js");
/* harmony import */ var _LoadMore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./LoadMore */ "./app/components/TextList/LoadMore.js");
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





 // only needs to be imported once









var DEFAULT_ROW_HEIGHT = 60;

var TextList = /*#__PURE__*/function (_React$Component) {
  _inherits(TextList, _React$Component);

  var _super = _createSuper(TextList);

  function TextList(props) {
    var _this;

    _classCallCheck(this, TextList);

    _this = _super.call(this, props);
    _this.cache = new react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_3__["CellMeasurerCache"]({
      fixedWidth: true,
      defaultHeight: DEFAULT_ROW_HEIGHT,
      minHeight: DEFAULT_ROW_HEIGHT
    });
    _this.rowRenderer = _this.rowRenderer.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TextList, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.cache.clearAll();
      if (this.list) this.list.forceUpdateGrid();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "rowRenderer",
    value: function rowRenderer(_ref) {
      var _this2 = this;

      var key = _ref.key,
          index = _ref.index,
          parent = _ref.parent,
          style = _ref.style;
      var selectedText = this.props.selectedText;
      var selectedTextId = selectedText ? selectedText.id : -1;
      var selectedSearchResult = this.props.selectedSearchResult;
      var texts = this.props.texts;
      var onSelectedText = this.props.onSelectedText;
      var onSelectedSearchResult = this.props.onSelectedSearchResult;
      var searchTerm = this.props.searchTerm;
      var searchResults = this.props.searchResults;
      var className = _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.textListRow;
      var text = texts[index];

      if (text.id === selectedTextId) {
        className = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.selectedRow);
      }

      var name = Object(lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_7__["default"])(text.name);
      var nameHtml = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.textName
      }, name);
      var textSearchResults = [];
      var resultsCount = null;
      var extraRemaining = false;
      var loadingResults = false;

      if (searchTerm.length > 0) {
        nameHtml = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HighlightedString__WEBPACK_IMPORTED_MODULE_10__["default"], {
          string: name,
          stringClass: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.textName,
          highlightClass: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.highlight,
          searchTerm: searchTerm
        });

        if (searchResults.hasOwnProperty(text.id)) {
          textSearchResults = searchResults[text.id].results;
          extraRemaining = searchResults[text.id].extra;
          loadingResults = searchResults[text.id].loading;
          resultsCount = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ResultCount__WEBPACK_IMPORTED_MODULE_11__["default"], {
            count: searchResults[text.id].total,
            extra: extraRemaining
          });
        }
      }

      var cache = this.cache;
      var textSearchResultRows = [];

      if (textSearchResults.length > 0) {
        textSearchResultRows = textSearchResults.map(function (result) {
          var isSelected = selectedSearchResult && selectedSearchResult.textId === text.id && selectedSearchResult.start === result[0];
          var className = isSelected ? _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.selectedSearchResult : _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.searchResult;

          if (isSelected) {// TODO: keeps getting rendered when selecting a syllable
            // console.log("got selected result: %o", result);
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: text.id + "_" + result[0],
            onClick: function onClick() {
              onSelectedSearchResult(text, result[0], searchTerm.length, selectedText);
            },
            className: className
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HighlightedString__WEBPACK_IMPORTED_MODULE_10__["default"], {
            string: result[1],
            highlightClass: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.highlight,
            searchTerm: searchTerm
          }));
        });
      }

      var searchText = function searchText() {
        _this2.props.onSearchText(text, searchTerm);
      };

      if (searchResults !== null) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_3__["CellMeasurer"], {
        columnIndex: 0,
        key: key,
        parent: parent,
        rowIndex: index,
        cache: cache
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "listkeys-".concat(key),
        style: style,
        className: className
      }, searchTerm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.textNameRow,
        onClick: function onClick() {
          onSelectedText(texts[index]);
        }
      }, nameHtml, " ", resultsCount), textSearchResults.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.searchResults
      }, textSearchResultRows), extraRemaining && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.loadMore,
        onClick: searchText
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadMore__WEBPACK_IMPORTED_MODULE_12__["default"], {
        loading: loadingResults
      }))));else return null;
    }
  }, {
    key: "findRowHeight",
    value: function findRowHeight(_ref2) {
      var searchTerm = _ref2.searchTerm;
      return searchTerm ? null : 40;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var texts = this.props.texts;
      var rowCount = texts.length;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.textList
      }, this.props.texts && this.props.texts.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_2__["AutoSizer"], null, function (_ref3) {
        var height = _ref3.height,
            width = _ref3.width;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized_dist_es_List__WEBPACK_IMPORTED_MODULE_5__["List"], {
          ref: function ref(list) {
            return _this3.list = list;
          },
          height: height,
          rowCount: rowCount,
          rowHeight: _this3.findRowHeight(_this3.props) || _this3.cache.rowHeight,
          rowRenderer: _this3.rowRenderer,
          width: width,
          overscanRowCount: 1,
          deferredMeasurementCache: _this3.cache
        });
      }) : this.props.searching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.textListLoader
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader__WEBPACK_IMPORTED_MODULE_9___default.a, {
        loaded: !this.props.searching,
        scale: 0.5
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.searching
      }, "Searching\u2026")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "textList"
      }));
    }
  }]);

  return TextList;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TextList);

/***/ }),

/***/ "./app/components/TextList/TextListTab.css":
/*!*************************************************!*\
  !*** ./app/components/TextList/TextListTab.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"tab":"TextListTab---tab","showTab":"TextListTab---showTab","hideTab":"TextListTab---hideTab"};

/***/ }),

/***/ "./app/components/TextList/TextListTab.js":
/*!************************************************!*\
  !*** ./app/components/TextList/TextListTab.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/TextList/TextListTab.css */ "./app/components/TextList/TextListTab.css");
/* harmony import */ var components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2__);




var TextListTab = function TextListTab(props) {
  var tabClassnames = [components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2___default.a.tab];

  if (props.textListIsVisible) {
    tabClassnames.push(components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2___default.a.hideTab);
  } else {
    tabClassnames.push(components_TextList_TextListTab_css__WEBPACK_IMPORTED_MODULE_2___default.a.showTab);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default.a.apply(void 0, tabClassnames),
    onClick: props.tabClicked
  }, "Text List");
};

/* harmony default export */ __webpack_exports__["default"] = (TextListTab);

/***/ }),

/***/ "./app/components/TextList/TextListTabContainer.js":
/*!*********************************************************!*\
  !*** ./app/components/TextList/TextListTabContainer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-batched-actions */ "./node_modules/redux-batched-actions/lib/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_batched_actions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var components_TextList_TextListTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/TextList/TextListTab */ "./app/components/TextList/TextListTab.js");







var mapStateToProps = function mapStateToProps(state) {
  return {
    textListIsVisible: Object(reducers__WEBPACK_IMPORTED_MODULE_3__["getTextListVisible"])(state)
  };
};

var mapStateToDispatch = function mapStateToDispatch(dispatch) {
  return {
    tabClicked: function tabClicked() {
      var textListIsVisible = true;
      dispatch(Object(actions__WEBPACK_IMPORTED_MODULE_4__["changedTextListVisible"])(textListIsVisible));
    }
  };
};

var TextListTabContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapStateToDispatch)(components_TextList_TextListTab__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (TextListTabContainer);

/***/ }),

/***/ "./app/components/TextList/index.js":
/*!******************************************!*\
  !*** ./app/components/TextList/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextList */ "./app/components/TextList/TextList.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TextList__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./app/components/TextsSearch/TextsSearch.css":
/*!****************************************************!*\
  !*** ./app/components/TextsSearch/TextsSearch.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"textsSearchContainer":"TextsSearch---textsSearchContainer","textsSearch":"TextsSearch---textsSearch","minify":"TextsSearch---minify"};

/***/ }),

/***/ "./app/components/TextsSearch/TextsSearch.js":
/*!***************************************************!*\
  !*** ./app/components/TextsSearch/TextsSearch.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextsSearch_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextsSearch.css */ "./app/components/TextsSearch/TextsSearch.css");
/* harmony import */ var _TextsSearch_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TextsSearch_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app_constants */ "./app/app_constants/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_UI_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/Button */ "./app/components/UI/Button.js");
/* harmony import */ var images_search_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! images/search.svg */ "./app/images/search.svg");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var TextsSearch = function TextsSearch(props) {
  var textInput = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

  var _useTransition = Object(react__WEBPACK_IMPORTED_MODULE_0__["useTransition"])(),
      _useTransition2 = _slicedToArray(_useTransition, 2),
      ispending = _useTransition2[0],
      startTransition = _useTransition2[1];

  var initiateSearch = function initiateSearch(e) {
    e.preventDefault();

    if (textInput.current instanceof HTMLInputElement) {
      var _searchTerm = textInput.current.value;
      startTransition(function () {
        props.searchChanged(_searchTerm);
      });
    }
  };

  var handleChange = function handleChange(e) {
    startTransition(function () {
      if (e.target.value === "") {
        props.searchChanged(null);
        return;
      }

      props.searchChanged(e.target.value);
    });
  };

  console.log(props.textListWidth);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _TextsSearch_css__WEBPACK_IMPORTED_MODULE_1___default.a.textsSearchContainer,
    style: {
      maxWidth: props.textListWidth
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _TextsSearch_css__WEBPACK_IMPORTED_MODULE_1___default.a.textsSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: initiateSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    onChange: handleChange,
    style: {
      outline: "none",
      width: 150
    },
    type: "text",
    id: "textSearchInput",
    placeholder: props.intl.formatMessage({
      id: "leftbar.search"
    }),
    ref: textInput
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    backgroundColor: "#35BF5C",
    onClick: initiateSearch // title={props.intl.formatMessage({
    //     id: "leftbar.search",
    // })}
    ,
    noBezel: true,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_search_svg__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(TextsSearch));

/***/ }),

/***/ "./app/components/TextsSearch/TextsSearchContainer.js":
/*!************************************************************!*\
  !*** ./app/components/TextsSearch/TextsSearchContainer.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TextsSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextsSearch */ "./app/components/TextsSearch/TextsSearch.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");






var mapStateToProps = function mapStateToProps(state) {
  return {
    searchTerm: reducers__WEBPACK_IMPORTED_MODULE_4__["getSearchValue"](state),
    searchValue: state.ui.searchValue,
    textListWidth: reducers__WEBPACK_IMPORTED_MODULE_4__["getTextListWidth"](state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  // const { dispatch } = dispatchProps;
  // const { selectedText } = stateProps;
  return {
    searchChanged: function searchChanged(searchTerm) {
      dispatch(Object(actions__WEBPACK_IMPORTED_MODULE_3__["changedSearchValue"])(searchTerm));
    }
  };
};

var TextsSearchContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_TextsSearch__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (TextsSearchContainer);

/***/ }),

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
      }, this.props.title), this.props.accessoryType && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Accessory__WEBPACK_IMPORTED_MODULE_4__["default"], {
        type: this.props.accessoryType
      })));
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./app/components/UI/Slider.css":
/*!**************************************!*\
  !*** ./app/components/UI/Slider.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"inputRanges":"Slider---inputRanges","inputRange":"Slider---inputRange"};

/***/ }),

/***/ "./app/components/UI/Slider.js":
/*!*************************************!*\
  !*** ./app/components/UI/Slider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Slider_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider.css */ "./app/components/UI/Slider.css");
/* harmony import */ var _Slider_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Slider_css__WEBPACK_IMPORTED_MODULE_2__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Slider(_ref) {
  var max = _ref.max,
      min = _ref.min,
      initialvalue = _ref.initialvalue,
      _ref$changeSize = _ref.changeSize,
      changeSize = _ref$changeSize === void 0 ? function (r) {
    return console.log(r);
  } : _ref$changeSize;
  var initialPercent = initialvalue / max * 100;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialPercent),
      _useState2 = _slicedToArray(_useState, 2),
      tempValue = _useState2[0],
      setTempValue = _useState2[1];

  var submitValue = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (e) {
    var currentPercent = tempValue / 100 * max;
    changeSize(Math.floor(parseInt(currentPercent)));
  }, 500);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _Slider_css__WEBPACK_IMPORTED_MODULE_2___default.a.inputRanges
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      fontSize: 13,
      top: "-5px"
    },
    onClick: function onClick() {
      return changeSize(initialvalue - 2);
    }
  }, "\u0F40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "range",
    style: {
      width: "70%"
    },
    className: _Slider_css__WEBPACK_IMPORTED_MODULE_2___default.a.inputRange,
    min: 40,
    max: 100,
    smooth: "yes",
    step: 1,
    value: tempValue,
    onChange: function onChange(e) {
      return setTempValue(e.target.value);
    },
    onMouseUp: submitValue,
    onTouchEnd: submitValue
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    style: {
      fontSize: 18,
      top: "-10px"
    },
    onClick: function onClick() {
      return changeSize(initialvalue + 2);
    }
  }, "\u0F40"));
}

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./app/containers/TextListContainer.js":
/*!*********************************************!*\
  !*** ./app/containers/TextListContainer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var components_TextList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/TextList */ "./app/components/TextList/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! api */ "./app/api/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-batched-actions */ "./node_modules/redux-batched-actions/lib/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_batched_actions__WEBPACK_IMPORTED_MODULE_6__);









var mapStateToProps = function mapStateToProps(state) {
  var searchValue = reducers__WEBPACK_IMPORTED_MODULE_4__["getSearchValue"](state);
  var searchResults = reducers__WEBPACK_IMPORTED_MODULE_4__["getSearchResults"](state, searchValue);
  var selectedSearchResult = reducers__WEBPACK_IMPORTED_MODULE_4__["getSelectedSearchResult"](state); // TODO: display search results or spinner depending on when anything
  // returned

  var searching = false;
  var texts = state.data.texts;

  if (searchValue.length > 0) {
    if (searchResults === null) {
      searching = true;
      texts = [];
    } else {
      texts = texts.filter(function (text) {
        return searchResults.hasOwnProperty(text.id);
      });
    }
  }

  return {
    texts: texts,
    selectedText: Object(reducers__WEBPACK_IMPORTED_MODULE_4__["getSelectedText"])(state),
    searchTerm: searchValue,
    searchResults: searchResults,
    selectedSearchResult: selectedSearchResult,
    searching: searching
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSelectedText: function onSelectedText(text) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["selectedText"](text));
    },
    onSelectedSearchResult: function onSelectedSearchResult(text, start, length, selectedText) {
      if (!selectedText || selectedText.id !== text.id) {
        dispatch(Object(redux_batched_actions__WEBPACK_IMPORTED_MODULE_6__["batchActions"])([actions__WEBPACK_IMPORTED_MODULE_3__["selectedSearchResult"](text.id, start, length), actions__WEBPACK_IMPORTED_MODULE_3__["selectedText"](text)]));
      } else {
        dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["selectedSearchResult"](text.id, start, length));
      }
    },
    onSearchText: function onSearchText(text, searchTerm) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["searchedText"](text.id, searchTerm));
    }
  };
};

var TextListContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(components_TextList__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (TextListContainer);

/***/ }),

/***/ "./app/css/colour.css":
/*!****************************!*\
  !*** ./app/css/colour.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b"};

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

/***/ }),

/***/ "./app/images/lopenling_logo.png":
/*!***************************************!*\
  !*** ./app/images/lopenling_logo.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8967124136190c7842d863e4a862a528.png");

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

/***/ "./app/images/options.svg":
/*!********************************!*\
  !*** ./app/images/options.svg ***!
  \********************************/
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
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
  fill: "#010002"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
  cx: 26.465,
  cy: 25.59,
  r: 4.462
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M52.791 32.256c-.187-1.034-1.345-2.119-2.327-2.492l-2.645-1.004c-.982-.373-1.699-1.237-1.651-1.935.029-.417.046-.838.046-1.263 0-.284-.008-.566-.021-.846-.023-.467.719-1.193 1.677-1.624l2.39-1.074c.958-.432 2.121-1.565 2.194-2.613.064-.929-.047-2.196-.648-3.765a8.336 8.336 0 00-2.779-3.718c-.839-.633-2.423-.595-3.381-.163l-2.08.936c-.958.431-2.274.119-3.025-.616a17.282 17.282 0 00-.54-.509c-.778-.705-1.17-2-.796-2.983l.819-2.162c.373-.982.368-2.594-.322-3.385-.635-.728-1.643-1.579-3.215-2.281-1.764-.788-3.346-.811-4.483-.639-1.039.158-2.121 1.331-2.494 2.312l-.946 2.491c-.373.982-.798 1.775-.949 1.771a6.289 6.289 0 00-.274-.005c-.622 0-1.238.03-1.846.09-1.016.1-2.176-.507-2.607-1.465l-1.124-2.5c-.431-.959-1.538-2.21-2.589-2.227-.916-.016-2.207.209-3.936 1.028-1.874.889-2.971 1.742-3.611 2.437-.712.771-.554 2.416-.122 3.374l1.481 3.296c.431.958.256 2.266-.324 2.979-.579.714-1.786 1.033-2.768.661l-3.598-1.365c-.982-.373-2.65-.476-3.406.256-.658.637-1.412 1.709-2.056 3.51-.696 1.954-.867 3.332-.83 4.276.042 1.05 1.317 2.101 2.3 2.474l4.392 1.667c.982.373 1.782 1.244 1.839 1.941.055.699-.635 1.61-1.593 2.042l-4.382 1.97c-.958.431-2.211 1.539-2.227 2.589-.015.916.21 2.208 1.028 3.935.89 1.874 1.742 2.971 2.437 3.611.773.713 2.417.554 3.375.123l4.698-2.112c.958-.432 2.076-.412 2.525.013s.535 1.541.162 2.524L12.743 46.6c-.373.982-.476 2.65.256 3.404.638.659 1.709 1.414 3.51 2.057 1.954.697 3.333.868 4.277.831 1.05-.042 2.1-1.318 2.473-2.3l1.693-4.46c.373-.982 1.058-1.742 1.531-1.719a17.414 17.414 0 001.255.016c.219-.007.747.762 1.178 1.721l1.963 4.364c.431.958 1.605 1.986 2.653 2.038 1.121.056 2.669-.062 4.43-.734 1.685-.645 2.659-1.604 3.219-2.442.584-.873.388-2.517-.044-3.475l-1.606-3.573c-.431-.958-.169-2.191.527-2.824.693-.633 2-.9 2.981-.526l3.432 1.303c.982.373 2.64.489 3.478-.145.738-.56 1.591-1.49 2.281-3.034.827-1.854.785-3.605.561-4.846zM26.465 39.79c-7.844 0-14.201-6.357-14.201-14.2s6.357-14.2 14.201-14.2c7.842 0 14.2 6.357 14.2 14.2.001 7.843-6.358 14.2-14.2 14.2z"
}));

var SvgOptions = function SvgOptions(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 52.93 52.93"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgOptions);

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

/***/ }),

/***/ "./app/images/search.svg":
/*!*******************************!*\
  !*** ./app/images/search.svg ***!
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
  d: "M9 2C5.146 2 2 5.146 2 9s3.146 7 7 7a6.959 6.959 0 004.574-1.719l.426.426V16l6 6 2-2-6-6h-1.293l-.426-.426A6.959 6.959 0 0016 9c0-3.854-3.146-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5z"
});

var SvgSearch = function SvgSearch(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 24,
    height: 24
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgSearch);

/***/ }),

/***/ "./app/images/wrench.svg":
/*!*******************************!*\
  !*** ./app/images/wrench.svg ***!
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
  d: "M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
});

var SvgWrench = function SvgWrench(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 512 512"
  }, props), _ref);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgWrench);

/***/ }),

/***/ "./app/lib/SplitText.js":
/*!******************************!*\
  !*** ./app/lib/SplitText.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SplitText; });
/* harmony import */ var _SegmentedText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SegmentedText */ "./app/lib/SegmentedText.js");
/* harmony import */ var _AnnotatedText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnnotatedText */ "./app/lib/AnnotatedText.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var SplitText = /*#__PURE__*/function () {
  function SplitText(annotatedText, splitter) {
    _classCallCheck(this, SplitText);

    this.annotatedText = annotatedText;
    this.splitter = splitter;
    this._texts = null;
    this._textsId = null;
    this._textsFinalPositions = [];
  }

  _createClass(SplitText, [{
    key: "texts",
    get: function get() {
      if (!this.annotatedText) {
        return [];
      }

      if (!this._texts || this._textsId !== this.annotatedText.getUniqueId()) {
        this._textsFinalPositions = [];
        var segmentedText = this.annotatedText.segmentedText;
        var textString = segmentedText.getText();
        var splitPositions = this.splitter(textString).filter(function (l) {
          return l !== 0;
        });

        if (splitPositions.length === 0) {
          this._textsFinalPositions.push(textString.length);

          return [segmentedText];
        }

        var lastPosition = splitPositions[splitPositions.length - 1];

        if (lastPosition + 1 < textString.length) {
          splitPositions.push(textString.length - 1);
        }

        var segments = segmentedText.segments;
        var startIndex = 0;
        var texts = [];

        for (var i = 0; i < splitPositions.length; i++) {
          var position = splitPositions[i];
          var endIndex = segmentedText.indexOfSegmentAtPosition(position - 1);
          var textSegments = void 0;

          if (i == splitPositions.length - 1) {
            // final position
            textSegments = segments.slice(startIndex);
          } else {
            textSegments = segments.slice(startIndex, endIndex + 1);
          }

          var text = new _SegmentedText__WEBPACK_IMPORTED_MODULE_0__["default"](textSegments);
          texts.push(text);
          startIndex = endIndex + 1;

          if (endIndex >= 0) {
            var finalSegment = segments[endIndex];

            this._textsFinalPositions.push(finalSegment.end);
          }
        }

        this._texts = texts.filter(function (l) {
          return l.segments.length > 0;
        });
        this._textsId = this.annotatedText.getUniqueId();
      }

      return this._texts || [];
    }
  }, {
    key: "getTextsFinalPositions",
    value: function getTextsFinalPositions() {
      this.texts;
      return this._textsFinalPositions;
    }
    /**
     * Return the index of the text portion that contains the given position.
     *
     * @param position
     * @returns number
     */

  }, {
    key: "getTextIndexOfPosition",
    value: function getTextIndexOfPosition(position) {
      var textsFinalPositions = this.getTextsFinalPositions();
      var lastPosition = 0;
      var textIndex = null;

      for (var i = 0; i < textsFinalPositions.length; i++) {
        var endPosition = textsFinalPositions[i];

        if (position >= lastPosition && position <= endPosition) {
          textIndex = i;
          break;
        }

        lastPosition = endPosition;
      }

      if (textIndex === null) {
        // Likely an insertion at the end of a text
        console.warn("no index for position %d", position);
        textIndex = textsFinalPositions.length - 1;
      }

      return textIndex;
    }
  }]);

  return SplitText;
}();



/***/ }),

/***/ "./app/lib/shallowEqual.js":
/*!*********************************!*\
  !*** ./app/lib/shallowEqual.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shallowEqual; });
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);
  var len = aKeys.length;

  if (bKeys.length !== len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    var key = aKeys[i];

    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
}

/***/ }),

/***/ "./app/lib/text_splitters/positionSplitter.js":
/*!****************************************************!*\
  !*** ./app/lib/text_splitters/positionSplitter.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return positionSplitter; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Returns a function that accepts a string but simply
 * returns the initial array of positions passed to it.
 *
 * @param positions - The positions where a string should be split
 */
function positionSplitter(positions) {
  var newPositions = _toConsumableArray(positions);

  if (newPositions[0] === 0) {
    newPositions.shift();
  }

  return function (string) {
    return newPositions;
  };
}

/***/ }),

/***/ "./app/state_helpers/TextStore2.js":
/*!*****************************************!*\
  !*** ./app/state_helpers/TextStore2.js ***!
  \*****************************************/
/*! exports provided: getWitnessText, addTextAnnotation, removeTextAnnotation, deleteTextAnnotation, getWitnessAnnotations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWitnessText", function() { return getWitnessText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTextAnnotation", function() { return addTextAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTextAnnotation", function() { return removeTextAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTextAnnotation", function() { return deleteTextAnnotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWitnessAnnotations", function() { return getWitnessAnnotations; });
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/pickBy */ "./node_modules/lodash/pickBy.js");
/* harmony import */ var lodash_pickBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_pickBy__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/AnnotatedText */ "./app/lib/AnnotatedText.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var lib_segmentTibetanText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/segmentTibetanText */ "./app/lib/segmentTibetanText.js");
/* harmony import */ var lib_SegmentedText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/SegmentedText */ "./app/lib/SegmentedText.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var store = {};
var getWitnessText = function getWitnessText(state, witnessId) {
  var text = null;

  if (witnessId) {
    text = generateAnnotatedText(state, witnessId);

    if (text) {
      store[witnessId] = text;
    }
  }

  return text;
};
var addTextAnnotation = function addTextAnnotation(state, witnessId, annotation) {
  var text = getWitnessText(state, witnessId);

  if (text) {
    text.addAnnotation(annotation);
  } // If witnessId is present, assume that getWitnessAnnotations
  // has already been called.


  if (annotationStore.hasOwnProperty(witnessId)) {
    if (!annotationStore[witnessId].appliedAnnotations.hasOwnProperty(annotation.uniqueId)) {
      annotationStore[witnessId].appliedAnnotations[annotation.uniqueId] = annotation;
    }

    if (!annotationStore[witnessId].allAnnotations.hasOwnProperty(annotation.uniqueId)) {
      annotationStore[witnessId].allAnnotations[annotation.uniqueId] = annotation;
    }
  }
};
var removeTextAnnotation = function removeTextAnnotation(state, witnessId, annotationId) {
  var text = getWitnessText(state, witnessId);

  if (text) {
    text.removeAnnotation(annotationId);
  }

  if (annotationStore.hasOwnProperty(witnessId)) {
    if (annotationStore[witnessId].appliedAnnotations.hasOwnProperty(annotationId)) {
      delete annotationStore[witnessId].appliedAnnotations[annotationId];
    }
  }
};
var deleteTextAnnotation = function deleteTextAnnotation(state, witnessId, annotationId) {
  var text = getWitnessText(state, witnessId);

  if (text) {
    text.removeAnnotation(annotationId);
  }

  if (annotationStore.hasOwnProperty(witnessId)) {
    if (annotationStore[witnessId].allAnnotations.hasOwnProperty(annotationId)) {
      delete annotationStore[witnessId].allAnnotations[annotationId];
    }

    if (annotationStore[witnessId].appliedAnnotations.hasOwnProperty(annotationId)) {
      delete annotationStore[witnessId].appliedAnnotations[annotationId];
    }
  }
};
var annotationStore = {};
var getWitnessAnnotations = function getWitnessAnnotations(state, witness, workingWitness) {
  if (annotationStore.hasOwnProperty(witness.id)) {
    return [annotationStore[witness.id].appliedAnnotations, annotationStore[witness.id].allAnnotations];
  }

  var text = witness.text;
  var workingAnnotationList = reducers__WEBPACK_IMPORTED_MODULE_1__["getAnnotationsForWitnessId"](state, workingWitness.id);
  var appliedAnnotations = getActiveAnnotations(state, witness.id, workingWitness.id);
  var removedDefaultAnnotations = null; // Default annotations removed by the user.
  // Usually these are available when viewing
  // a non-working edition.

  var nonActiveAnnotations = {};

  if (witness.id !== workingWitness.id) {
    // If we are not viewing the working version,
    // get all the annotations created by the selected witness
    // BUT NOT BY A USER to apply to the base text.
    // User-created annotations need to be in appliedAnnotations.
    removedDefaultAnnotations = reducers__WEBPACK_IMPORTED_MODULE_1__["getRemovedDefaultAnnotationsForWitnessId"](state, witness.id);
    var selectedWitnessAnnotations = {};

    for (var key in workingAnnotationList) {
      if (workingAnnotationList.hasOwnProperty(key)) {
        var annotationData = workingAnnotationList[key];

        if (annotationData.creator_witness === witness.id && !removedDefaultAnnotations.hasOwnProperty(annotationData.unique_id)) {
          selectedWitnessAnnotations[annotationData.unique_id] = annotationData;
        } else if (annotationData.creator_witness === witness.id) {
          nonActiveAnnotations[annotationData.unique_id] = annotationData;
        }
      }
    }

    var selectedWitnessAnnotationsList = annotationsMapFromData(state, selectedWitnessAnnotations);
    appliedAnnotations = _objectSpread(_objectSpread({}, selectedWitnessAnnotationsList), appliedAnnotations);
    workingAnnotationList = selectedWitnessAnnotations;
  }

  var annotations = annotationsMapFromData(state, workingAnnotationList);
  nonActiveAnnotations = annotationsMapFromData(state, nonActiveAnnotations);

  if (Object.keys(nonActiveAnnotations).length > 0) {
    annotations = _objectSpread(_objectSpread({}, annotations), nonActiveAnnotations);
  }

  annotations = _objectSpread(_objectSpread({}, appliedAnnotations), annotations);
  annotations = lodash_pickBy__WEBPACK_IMPORTED_MODULE_0___default()(annotations, function (annotation, key) {
    return !(witness && annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_4__["ANNOTATION_TYPES"].lineBreak && annotation.creatorWitness.id !== witness.id);
  }); // Only cache if annotations have been loaded

  if (reducers__WEBPACK_IMPORTED_MODULE_1__["hasLoadedWitnessAnnotations2"](state, witness.id) && reducers__WEBPACK_IMPORTED_MODULE_1__["hasLoadedWitnessAppliedAnnotations"](state, witness.id)) {
    annotationStore[witness.id] = {
      appliedAnnotations: appliedAnnotations,
      allAnnotations: annotations
    };
  }

  return [appliedAnnotations, annotations];
};

var generateAnnotatedText = function generateAnnotatedText(state, witnessId) {
  var witness = reducers__WEBPACK_IMPORTED_MODULE_1__["getWitness2"](state, witnessId);

  if (!witness) {
    console.warn("no witness");
    return null;
  }

  var text = witness.text;
  var workingWitness = reducers__WEBPACK_IMPORTED_MODULE_1__["getWorkingWitness2"](state, text.id);
  var baseWitness = reducers__WEBPACK_IMPORTED_MODULE_1__["getBaseWitness2"](state, text.id);

  if (!workingWitness || !baseWitness) {
    return null;
  }

  var _getWitnessAnnotation = getWitnessAnnotations(state, witness, workingWitness),
      _getWitnessAnnotation2 = _slicedToArray(_getWitnessAnnotation, 2),
      appliedAnnotations = _getWitnessAnnotation2[0],
      availableAnnotations = _getWitnessAnnotation2[1];

  var segmentedWorkingWitness = getSegmentedWitness(workingWitness);
  var annotatedText = new lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_2__["default"](segmentedWorkingWitness, Object.values(appliedAnnotations), function (text) {
    return Object(lib_segmentTibetanText__WEBPACK_IMPORTED_MODULE_5__["default"])(text).segments;
  }, workingWitness, witness);
  return annotatedText;
};

var getActiveAnnotations = function getActiveAnnotations(state, witnessId, baseWitnessId) {
  var loadedAppliedAnnotations = reducers__WEBPACK_IMPORTED_MODULE_1__["hasLoadedWitnessAppliedAnnotations"](state, witnessId);

  if (!loadedAppliedAnnotations) {
    return {};
  }

  var activeAnnotationList = reducers__WEBPACK_IMPORTED_MODULE_1__["getActiveAnnotationsForWitnessId"](state, witnessId);

  if (!activeAnnotationList) {
    return {};
  }

  var activeAnnotationDataList = {};

  for (var activeAnnotationId in activeAnnotationList) {
    if (activeAnnotationList.hasOwnProperty(activeAnnotationId)) {
      var activeAnnotationData = reducers__WEBPACK_IMPORTED_MODULE_1__["getAnnotationData"](state, baseWitnessId, activeAnnotationId);

      if (activeAnnotationData) {
        activeAnnotationDataList[activeAnnotationData.unique_id] = activeAnnotationData;
      }
    }
  }

  return annotationsMapFromData(state, activeAnnotationDataList);
};

var annotationsMapFromData = function annotationsMapFromData(state, annotationList) {
  var annotations = {};

  for (var key in annotationList) {
    if (annotationList.hasOwnProperty(key)) {
      var annotationData = annotationList[key];
      var annotation = reducers__WEBPACK_IMPORTED_MODULE_1__["annotationFromData"](state, annotationData);

      if (annotation) {
        annotations[key] = annotation;
      }
    }
  }

  return annotations;
}; // TODO: clear cache when changing texts


var _segmentedWitnesses = {};

function getSegmentedWitness(witness) {
  if (!_segmentedWitnesses[witness.id]) {
    _segmentedWitnesses[witness.id] = Object(lib_segmentTibetanText__WEBPACK_IMPORTED_MODULE_5__["default"])(witness.content || "");
  }

  return _segmentedWitnesses[witness.id];
}

/***/ })

}]);
//# sourceMappingURL=1.parkhang-dev.js.map