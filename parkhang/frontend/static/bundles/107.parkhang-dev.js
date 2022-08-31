(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[107],{

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
/* harmony import */ var components_Resources__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Resources */ "./app/components/Resources/index.js");
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
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_13__["Collapse"], {
    sx: {
      height: "100%"
    },
    orientation: "horizontal",
    "in": props.textListIsVisible,
    mountOnEnter: true,
    unmountOnExit: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Resources__WEBPACK_IMPORTED_MODULE_7__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_system__WEBPACK_IMPORTED_MODULE_15__["Box"], {
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
      bottom: 16,
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

/***/ })

}]);
//# sourceMappingURL=107.parkhang-dev.js.map