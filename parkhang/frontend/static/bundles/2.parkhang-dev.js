(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[2],{

/***/ "./app/components/App/Switcher.js":
/*!****************************************!*\
  !*** ./app/components/App/Switcher.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-universal-component */ "./node_modules/react-universal-component/dist/index.js");
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loader */ "./node_modules/react-loader/lib/react-loader.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./app/components/App/components.js");
var _excluded = ["page", "direction"];

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}







function Switcher(props) {
  var page = props.page,
      isLoading = props.isLoading;
  var Component = _components__WEBPACK_IMPORTED_MODULE_4__[page];
  return (
    /*#__PURE__*/
    // <UniversalComponent
    //     page={page}
    //     isLoading={page === "Editors" ? isLoading : false}
    // />
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, null)
  );
} // const UniversalComponent = universal(
//     (props) => import(`components/${props.page}`),
//     {
//         minDelay: 300,
//         chunkName: (props) => props.page,
//         loading: () => <Loader />,
//         ignoreBabelRename: true,
//         error: (e) => (
//             <div className="notFound">
//                 PAGE NOT FOUND - 404, click <a href="/">Here</a>
//                 {`${e.toString()}`}
//             </div>
//         ),
//         loadingTransition: true,
//     }
// );


var mapState = function mapState(_ref) {
  var page = _ref.page,
      direction = _ref.direction,
      state = _objectWithoutProperties(_ref, _excluded);

  return {
    page: page,
    isLoading: !state.data.loadedInitialData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapState)(Switcher));

/***/ }),

/***/ "./app/components/App/components.js":
/*!******************************************!*\
  !*** ./app/components/App/components.js ***!
  \******************************************/
/*! exports provided: HomePage, Editors, Vote, NotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editors", function() { return Editors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vote", function() { return Vote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFound", function() { return NotFound; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Editors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Editors */ "./app/components/Editors/index.js");
/* harmony import */ var components_HomePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/HomePage */ "./app/components/HomePage/index.js");
/* harmony import */ var components_utility_embedingVote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/utility/embedingVote */ "./app/components/utility/embedingVote.js");
// components.js





var HomePage = function HomePage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_HomePage__WEBPACK_IMPORTED_MODULE_2__["default"], null);
};

var Editors = function Editors() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Editors__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};

var Vote = function Vote() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_utility_embedingVote__WEBPACK_IMPORTED_MODULE_3__["default"], null);
};

var NotFound = function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "404");
};



var mapStateToProps = function mapStateToProps(_ref) {
  var location = _ref.location;
  return {
    userId: location.payload.id
  };
};

/***/ }),

/***/ "./app/components/Editors/Editor.css":
/*!*******************************************!*\
  !*** ./app/components/Editors/Editor.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"container":"Editor---container","interface":"Editor---interface","listContainer":"Editor---listContainer","showListContainer":"Editor---showListContainer","hideListContainer":"Editor---hideListContainer"};

/***/ }),

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
/* harmony import */ var _Editor_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Editor.css */ "./app/components/Editors/Editor.css");
/* harmony import */ var _Editor_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Editor_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var css_util_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! css/util.css */ "./app/css/util.css");
/* harmony import */ var css_util_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(css_util_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _TextSheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TextSheet */ "./app/components/Editors/TextSheet.js");
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
















var Editor = function Editor(props) {
  var textListClassnames = [_Editor_css__WEBPACK_IMPORTED_MODULE_8___default.a.listContainer];
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
    textListClassnames.push(_Editor_css__WEBPACK_IMPORTED_MODULE_8___default.a.showListContainer);
  } else {
    size = 0;
    textListClassnames.push(_Editor_css__WEBPACK_IMPORTED_MODULE_8___default.a.hideListContainer);
  }

  bodyHeight = "calc(100vh - " + components_Header_Header_css__WEBPACK_IMPORTED_MODULE_6___default.a.headerHeight + ")";

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
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_13__["Edit"], {
      htmlColor: props.isAnnotating ? "#ff7961" : undefined
    }),
    name: "Annotate",
    condition: props.isAnnotating,
    "function": function _function() {
      return props.changeIsAnnotating(!props.isAnnotating);
    }
  }, {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_13__["SyncAlt"], {
      htmlColor: props.isPanelLinked ? "#ff7961" : undefined
    }),
    name: "Link Panel",
    condition: props.isPanelLinked,
    "function": function _function() {
      return props.onChangePanelLink(!props.isPanelLinked);
    }
  }, {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_13__["Share"], null),
    name: "Share",
    "function": handleShare
  }, {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_13__["VerticalSplit"], {
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
    className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(_Editor_css__WEBPACK_IMPORTED_MODULE_8___default.a["interface"], css_util_css__WEBPACK_IMPORTED_MODULE_10___default.a.flex)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Sidebar__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextSheet__WEBPACK_IMPORTED_MODULE_11__["default"], {
    bodyHeight: bodyHeight
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_12__["SpeedDial"], {
    ariaLabel: "SpeedDial basic",
    sx: {
      position: "absolute",
      bottom: 60,
      right: 16
    },
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_12__["SpeedDialIcon"], null)
  }, actions.map(function (action) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_12__["SpeedDialAction"], {
      key: action.name,
      icon: action.icon,
      tooltipTitle: action.name,
      onClick: action["function"],
      open: action.condition
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_12__["Snackbar"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_12__["Alert"], {
    onClose: handleClose,
    severity: "success",
    sx: {
      width: "100%"
    }
  }, "The Url Copied to Clipboard !")));
};

/* harmony default export */ __webpack_exports__["default"] = (Editor);

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
    textListIsVisible: reducers__WEBPACK_IMPORTED_MODULE_3__["getTextListVisible"](state),
    isPanelVisible: reducers__WEBPACK_IMPORTED_MODULE_3__["isPanelVisible"](state)
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
    onChangeWindowOpen: function onChangeWindowOpen(data) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__["toggleSecondWindow"](data));
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
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loader */ "./node_modules/react-loader/lib/react-loader.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/ErrorBoundary/ErrorBoundary */ "./app/components/ErrorBoundary/ErrorBoundary.js");
/* harmony import */ var react_split_pane__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-split-pane */ "./node_modules/react-split-pane/dist/index.esm.js");
/* harmony import */ var _resizerStyle_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resizerStyle.css */ "./app/components/Editors/resizerStyle.css");
/* harmony import */ var _resizerStyle_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_resizerStyle_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var components_TextDetail2_TextDetailContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/TextDetail2/TextDetailContainer */ "./app/components/TextDetail2/TextDetailContainer.js");
/* harmony import */ var components_TextDetail_TextDetailContainer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/TextDetail/TextDetailContainer */ "./app/components/TextDetail/TextDetailContainer.js");
/* harmony import */ var _shortcuts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shortcuts */ "./app/shortcuts.js");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

















function TextSheet(props) {
  var editorRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    ref: editorRef,
    sx: {
      display: "flex",
      flexDirection: "column",
      // bgcolor: "#d4dde5",
      width: "100%",
      height: props.bodyHeight,
      position: "relative"
    },
    onKeyDown: function onKeyDown(e) {
      Object(_shortcuts__WEBPACK_IMPORTED_MODULE_14__["handleKeyDown"])(e, props.state, props.dispatch);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_split_pane__WEBPACK_IMPORTED_MODULE_9__["default"], {
    size: props.isSecondWindowOpen && props.selectedText ? "50%" : "100%",
    pane1Style: {
      display: "flex",
      justifyContent: "center"
    },
    resizerStyle: {
      display: !props.isSecondWindowOpen ? "none" : "block"
    },
    onDragFinished: function onDragFinished(width) {
      if (width > 0) window.dispatchEvent(new Event("resize"));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TextDetail_TextDetailContainer__WEBPACK_IMPORTED_MODULE_13__["default"], null)), props.isSecondWindowOpen && props.selectedText ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TextDetail2_TextDetailContainer__WEBPACK_IMPORTED_MODULE_12__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)), props.Media.isPanelVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_ErrorBoundary_ErrorBoundary__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_MediaComponent__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
}

var mapStateToProps = function mapStateToProps(state) {
  var isSecondWindowOpen = reducers__WEBPACK_IMPORTED_MODULE_2__["isSecondWindowOpen"](state);
  var Media = reducers__WEBPACK_IMPORTED_MODULE_2__["getMediaData"](state);
  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_2__["getSelectedText"](state);
  return {
    state: state,
    selectedText: selectedText,
    isSecondWindowOpen: isSecondWindowOpen,
    Media: Media
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  var dispatch = dispatchProps.dispatch;
  return _objectSpread(_objectSpread({
    dispatch: dispatch
  }, ownProps), stateProps);
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
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}



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

/***/ "./app/components/Header/Header.css":
/*!******************************************!*\
  !*** ./app/components/Header/Header.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","header-height":"40px","mainTint":"#024279","activeButton":"#00746b","headerHeight":"40px","header":"Header---header","logo":"Header---logo","navigationButton":"Header---navigationButton","loginButton":"Header---loginButton","ButtonText":"Header---ButtonText","buttonLink":"Header---buttonLink","controls":"Header---controls"};

/***/ }),

/***/ "./app/components/HomePage/Filter.js":
/*!*******************************************!*\
  !*** ./app/components/HomePage/Filter.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}






var icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__["CheckBoxOutlineBlank"], {
  fontSize: "small"
});
var checkedIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__["CheckBox"], {
  fontSize: "small"
});

function Filter(_ref) {
  var setFiltered = _ref.setFiltered,
      _ref$featureText = _ref.featureText,
      featureText = _ref$featureText === void 0 ? [] : _ref$featureText;

  var handleChange = function handleChange(e) {
    setFiltered(e.target.value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setFiltered(featureText);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
    direction: {
      md: "row",
      xs: "column"
    },
    justifyContent: "space-around",
    alignItems: {
      md: "center"
    },
    gap: 2,
    mx: {
      md: 3
    },
    sx: {
      boxShadow: 3,
      padding: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["Typography"], null, "Filter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    flex: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchBar, {
    handleChange: handleChange
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Filter);

var SearchBar = function SearchBar(_ref2) {
  var handleChange = _ref2.handleChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
    id: "search-bar",
    className: "text",
    onInput: handleChange,
    label: "Title",
    variant: "outlined",
    placeholder: "Search...",
    size: "small"
  });
}; // const Category = ({ setCategoryList }) => {
//     const CATEGORY_LIST = ["root", "commentary"];
//     const [selectedCategory, setSelectedCategory] = useState([]);
//     function handleChipClick(e) {
//         let arr = [...selectedCategory];
//         if (arr.includes(e)) {
//             arr.splice(arr.indexOf(e), 1);
//         } else {
//             arr.push(e);
//         }
//         setSelectedCategory([...arr]);
//         setCategoryList([...arr]);
//     }
//     return (
//         <Stack direction="row" gap={2}>
//             {CATEGORY_LIST.map((category, index) => {
//                 let condition = selectedCategory.includes(category);
//                 return (
//                     <Chip
//                         key={category + "-" + index}
//                         label={category}
//                         size="small"
//                         variant={condition ? "filled" : "outlined"}
//                         sx={{
//                             cursor: "pointer",
//                         }}
//                         onClick={() => handleChipClick(category)}
//                     />
//                 );
//             })}
//         </Stack>
//     );
// };
// const TextLength = ({ setLengthRange }) => {
//     const MinLength = 1000;
//     const MaxLength = 30000;
//     const [value, setValue] = React.useState([MinLength, MaxLength]);
//     const debounce_change = _.debounce(function (event, newValue) {
//         setLengthRange(newValue);
//     }, 1000);
//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//         debounce_change(event, newValue);
//     };
//     return (
//         <Slider
//             max={MaxLength}
//             min={MinLength}
//             getAriaLabel={() => "TextLength range"}
//             value={value}
//             onChange={handleChange}
//             valueLabelDisplay="auto"
//             // getAriaValueText={valuetext}
//         />
//     );
// };


var Author = function Author(_ref3) {
  var setAuthor = _ref3.setAuthor,
      AuthorList = _ref3.AuthorList;

  var handleChange = function handleChange(e, value) {
    setAuthor(_toConsumableArray(value));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["Autocomplete"], {
    multiple: true,
    id: "checkboxes-tags-demo",
    options: AuthorList,
    onChange: handleChange,
    disableCloseOnSelect: true,
    getOptionLabel: function getOptionLabel(option) {
      return option;
    },
    renderOption: function renderOption(props, option, _ref4) {
      var selected = _ref4.selected;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
        icon: icon,
        checkedIcon: checkedIcon,
        style: {
          marginRight: 8
        },
        checked: selected
      }), option);
    },
    style: {
      width: 500
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["TextField"], _extends({}, params, {
        label: "Author",
        placeholder: "Name",
        size: "small"
      }));
    }
  });
};

/***/ }),

/***/ "./app/components/HomePage/Footer.js":
/*!*******************************************!*\
  !*** ./app/components/HomePage/Footer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GuestFooter; });
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var images_Indrajala_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! images/Indrajala_logo.png */ "./app/images/Indrajala_logo.png");
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}




function GuestFooter() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_0__["Paper"], {
    sx: _defineProperty({
      marginTop: "calc(10% + 60px)",
      width: "100%",
      position: "fixed",
      bottom: 0
    }, "width", "100%"),
    component: "footer",
    square: true,
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_0__["Stack"], {
    sx: {
      width: "100%",
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      bottom: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: _defineProperty({
      height: "100%",
      display: "flex",
      background: "#292826",
      width: "100%",
      alignItems: "center",
      justifyContent: "center"
    }, "height", 55)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_0__["Typography"], {
    textAlign: "center",
    variant: "h6",
    fontSize: {
      md: "20px",
      xs: "10px"
    },
    textTransform: "capitalize",
    color: "white"
  }, "Our Trusted partner"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: images_Indrajala_logo_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    alt: "indrajala logo",
    style: {
      objectFit: "contain",
      maxHeight: "100%",
      marginLeft: "40px"
    }
  }))));
}

/***/ }),

/***/ "./app/components/HomePage/HomePage.css":
/*!**********************************************!*\
  !*** ./app/components/HomePage/HomePage.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"title":"HomePage---title","list":"HomePage---list"};

/***/ }),

/***/ "./app/components/HomePage/HomePage.js":
/*!*********************************************!*\
  !*** ./app/components/HomePage/HomePage.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_first_router_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-first-router-link */ "./node_modules/redux-first-router-link/dist/index.js");
/* harmony import */ var redux_first_router_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_first_router_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/addTibetanShay */ "./app/lib/addTibetanShay.js");
/* harmony import */ var _HomePage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomePage.css */ "./app/components/HomePage/HomePage.css");
/* harmony import */ var _HomePage_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_HomePage_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Filter */ "./app/components/HomePage/Filter.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.mjs");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Footer */ "./app/components/HomePage/Footer.js");
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pagination */ "./app/components/HomePage/pagination.js");
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}












var PER_PAGE = 4;

function HomePage(props) {
  var Textdata = props.Textdata;
  var activeText = Textdata.activeText,
      detail = Textdata.detail;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  console.log(detail);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(detail),
      _useState4 = _slicedToArray(_useState3, 2),
      filteredData = _useState4[0],
      setFilteredData = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showFilter = _useState6[0],
      setShowFilter = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState8 = _slicedToArray(_useState7, 2),
      filteredTitle = _useState8[0],
      setFilteredTitle = _useState8[1]; // const [categorySelected, setCategorySelected] = useState([]);
  // const [author, setAuthor] = useState([]);
  // const [lengthRange, setLengthRange] = useState([]);


  var count = Math.ceil(filteredData.length / PER_PAGE);

  var _DATA = Object(_pagination__WEBPACK_IMPORTED_MODULE_10__["default"])(filteredData, PER_PAGE) || [];

  var handleChange = function handleChange(e, p) {
    setPage(p);

    _DATA.jump(p);
  };

  var handleToggleFilter = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function () {
    setShowFilter(function (prev) {
      return !prev;
    });
  }, []);
  var listRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var tempData = [];

    if (filteredTitle !== null) {
      tempData = detail === null || detail === void 0 ? void 0 : detail.filter(function (val) {
        if (filteredTitle === "" || filteredTitle === []) return val;else return val.title.includes(filteredTitle);
      });
    } else {
      tempData = detail;
    } // if (categorySelected.length) {
    //     tempData = tempData.filter((val) => {
    //         return categorySelected.includes(val.category);
    //     });
    // }
    // if (lengthRange.length) {
    //     tempData = tempData.filter((val) => {
    //         return (
    //             val.length >= lengthRange[0] && val.length < lengthRange[1]
    //         );
    //     });
    // }
    // if (author.length) {
    //     tempData = tempData.filter((val) => {
    //         return author.includes(val.author);
    //     });
    // }


    setFilteredData(tempData.sort(function (a, b) {
      return (a === null || a === void 0 ? void 0 : a.order) - (b === null || b === void 0 ? void 0 : b.order);
    }));
  }, [filteredTitle, detail]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Stack"], {
    sx: {
      height: "100vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    sx: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "4rem"
    },
    m: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: _HomePage_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
    mx: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__["FormattedMessage"], {
    id: "library"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    onClick: handleToggleFilter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_6__["FilterAlt"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Collapse"], {
    "in": showFilter
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Filter__WEBPACK_IMPORTED_MODULE_7__["default"], {
    setFiltered: setFilteredTitle // setCategoryList={setCategorySelected}
    // setLengthRange={setLengthRange}
    // setAuthor={setAuthor}

  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }
  }, filteredData.length > PER_PAGE && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Pagination"], {
    count: count,
    size: "small",
    page: page,
    variant: "outlined",
    shape: "rounded",
    onChange: handleChange,
    sx: {
      alignSelf: "flex-end",
      marginTop: 2
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    mt: 2,
    py: 1,
    display: "flex" // height={{ xs: "60vh", md: "auto" }}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].div, {
    layout: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Stack"], {
    sx: {
      flexWrap: "wrap",
      gap: 1
    },
    pb: 2,
    direction: "row",
    className: _HomePage_css__WEBPACK_IMPORTED_MODULE_3___default.a.list,
    ref: listRef
  }, _DATA.currentData().map(function (pecha, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      key: pecha.id || "filteredData-".concat(i),
      sx: {
        width: "auto",
        scrollSnapAlign: "start"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
      title: pecha.description
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_8__["motion"].div, {
      animate: {
        opacity: 1
      },
      initial: {
        opacity: 0
      },
      exit: {
        opacity: 0
      },
      layout: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_first_router_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      to: "/texts/".concat(pecha.text),
      style: {
        textDecoration: "none"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Card"], {
      sx: {
        cursor: "pointer",
        textDecoration: "none"
      },
      elevation: 3,
      key: pecha.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["CardContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
      gutterBottom: true,
      variant: "h6",
      textAlign: "center",
      textTransform: "capitalize",
      fontWeight: "bold",
      width: "max-content"
    }, Object(lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_2__["default"])(pecha.title))))))));
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(HomePage));

/***/ }),

/***/ "./app/components/HomePage/HomePageContainer.js":
/*!******************************************************!*\
  !*** ./app/components/HomePage/HomePageContainer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var _HomePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HomePage */ "./app/components/HomePage/HomePage.js");





var user;

var mapStateToProps = function mapStateToProps(state) {
  if (!state.user.userId === -1) {
    user = state.user;
  }

  return {
    text: reducers__WEBPACK_IMPORTED_MODULE_2__["getTexts"](state),
    title: reducers__WEBPACK_IMPORTED_MODULE_2__["getTranslation"](state, "header.title"),
    Textdata: reducers__WEBPACK_IMPORTED_MODULE_2__["getTextTitle"](state)
  };
};

var matchDispatchToProps = function matchDispatchToProps(dispatch) {
  return {
    onChangedTextWidth: function onChangedTextWidth(width) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changedTextListWidth"](width));
    },
    onChangedTextTitle: function onChangedTextTitle(title) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["selectTextTitle"](title));
    },
    dispatch: dispatch
  };
};

var HomePageContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, matchDispatchToProps)(_HomePage__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (HomePageContainer);

/***/ }),

/***/ "./app/components/HomePage/index.js":
/*!******************************************!*\
  !*** ./app/components/HomePage/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomePageContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePageContainer */ "./app/components/HomePage/HomePageContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _HomePageContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./app/components/HomePage/pagination.js":
/*!***********************************************!*\
  !*** ./app/components/HomePage/pagination.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}



function usePagination(data, itemsPerPage) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var maxPage = Math.ceil(data.length / itemsPerPage);

  function currentData() {
    var begin = (currentPage - 1) * itemsPerPage;
    var end = begin + itemsPerPage;
    return data.slice(begin, end);
  }

  function next() {
    setCurrentPage(function (currentPage) {
      return Math.min(currentPage + 1, maxPage);
    });
  }

  function prev() {
    setCurrentPage(function (currentPage) {
      return Math.max(currentPage - 1, 1);
    });
  }

  function jump(page) {
    var pageNumber = Math.max(1, page);
    setCurrentPage(function (currentPage) {
      return Math.min(pageNumber, maxPage);
    });
  }

  return {
    next: next,
    prev: prev,
    jump: jump,
    currentData: currentData,
    currentPage: currentPage,
    maxPage: maxPage
  };
}

/* harmony default export */ __webpack_exports__["default"] = (usePagination);

/***/ }),

/***/ "./app/components/MediaComponent/Audio/Audio.js":
/*!******************************************************!*\
  !*** ./app/components/MediaComponent/Audio/Audio.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_howler_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-howler-player */ "./node_modules/react-howler-player/build/index.es.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/esm/styles/index.js");





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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_0__["Collapse"], {
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

/***/ "./app/components/MediaComponent/Audio/index.js":
/*!******************************************************!*\
  !*** ./app/components/MediaComponent/Audio/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Audio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Audio */ "./app/components/MediaComponent/Audio/Audio.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Audio__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Video */ "./app/components/MediaComponent/Video/index.js");
/* harmony import */ var _Audio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Audio */ "./app/components/MediaComponent/Audio/index.js");
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}








var MEDIA_MAX_WIDTH = "400px";

function PaperComponent(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_draggable__WEBPACK_IMPORTED_MODULE_1___default.a, {
    handle: "#draggable-dialog-title",
    bounds: "parent"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_3__["Paper"], props));
}

function DraggableMedia(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaperComponent, {
    sx: {
      position: "absolute",
      zIndex: 1,
      right: 0,
      maxWidth: MEDIA_MAX_WIDTH
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    onClick: toggleHide,
    disableRipple: true
  }, hide ? "+" : "-"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    onClick: handleClose,
    disableRipple: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__["Close"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.selectedMedia.isVideoVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Video__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: !hide,
    setOpen: setHide
  }), props.selectedMedia.isAudioVisible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Audio__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: !hide,
    setOpen: setHide
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (DraggableMedia);

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
/* harmony import */ var _DraggableMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DraggableMedia */ "./app/components/MediaComponent/DraggableMedia.js");






var mapStateToProps = function mapStateToProps(state) {
  var Media = reducers__WEBPACK_IMPORTED_MODULE_2__["getMediaData"](state);
  return {
    selectedMedia: Media
  };
};

var matchDispatchToProps = function matchDispatchToProps(dispatch) {
  var changeMediaSelection = function changeMediaSelection(data) {
    return dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["mediaSelection"](data));
  };

  return {
    changeMediaSelection: changeMediaSelection
  };
};

var MediaContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, matchDispatchToProps)(_DraggableMedia__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (MediaContainer);

/***/ }),

/***/ "./app/components/MediaComponent/Video/Chapters.css":
/*!**********************************************************!*\
  !*** ./app/components/MediaComponent/Video/Chapters.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"time_stamp":"Chapters---time_stamp","active_stamp":"Chapters---active_stamp","dot":"Chapters---dot","image":"Chapters---image","chapter_info":"Chapters---chapter_info","topic":"Chapters---topic","startTime":"Chapters---startTime"};

/***/ }),

/***/ "./app/components/MediaComponent/Video/Chapters.js":
/*!*********************************************************!*\
  !*** ./app/components/MediaComponent/Video/Chapters.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Chapters_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chapters.css */ "./app/components/MediaComponent/Video/Chapters.css");
/* harmony import */ var _Chapters_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Chapters_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}









var YOUTUBE_ID = "2MMM_ggekfE";

function Chapters(props) {
  var idxOf = props.videoData.indexOf(props.mediaInterval);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      activeChapter = _useState2[0],
      setActiveChapter = _useState2[1];

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if (idxOf === -1) {
      idxOf = 0;
    }

    setActiveChapter(idxOf);
  }, [idxOf]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    props.changeMediaInterval(props.videoData[activeChapter]);
    if (props.isPanelLinked) props.changeScrollToId({
      id: props.mediaInterval.source_segment.start || null,
      from: "video"
    });
  }, [activeChapter]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__["Accordion"], {
    sx: {
      border: "#eee 1px solid",
      maxHeight: "80vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__["AccordionSummary"], {
    expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_3__["ExpandMore"], null),
    "aria-controls": "video-chapter-content",
    id: "chapter-accordion"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__["Typography"], null, "Chapters")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__["AccordionDetails"], {
    sx: {
      position: "relative",
      overflow: "scroll",
      maxHeight: "250px"
    }
  }, props.videoData.map(function (l, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      key: l.source_segment.start
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimeStamp, {
      img: "//img.youtube.com/vi/" + YOUTUBE_ID + "/0.jpg",
      topic: "first chapter of chojuk asdfa sdfasdfasdf asfdas dfasdfasdd dfsdfsd sdfs s",
      startTime: l.target_segment.start,
      active: activeChapter === index,
      setActive: function setActive() {
        return setActiveChapter(index);
      },
      jumpToTime: props.jumpToTime
    }));
  })));
}

function TimeStamp(props) {
  var classname = [_Chapters_css__WEBPACK_IMPORTED_MODULE_1___default.a.time_stamp];

  if (props.active) {
    classname.push(_Chapters_css__WEBPACK_IMPORTED_MODULE_1___default.a.active_stamp);
  }

  var chapterClickHandler = function chapterClickHandler() {
    props.jumpToTime(props.startTime);
    props.setActive();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classname),
    onClick: chapterClickHandler
  }, props.active === props.index && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Chapters_css__WEBPACK_IMPORTED_MODULE_1___default.a.dot
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: _Chapters_css__WEBPACK_IMPORTED_MODULE_1___default.a.image
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.img,
    alt: "timestamp image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: _Chapters_css__WEBPACK_IMPORTED_MODULE_1___default.a.chapter_info
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: _Chapters_css__WEBPACK_IMPORTED_MODULE_1___default.a.topic
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, props.topic), props.active && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    target: "_blank",
    href: "https://youtu.be/".concat(YOUTUBE_ID, "?t=").concat(toSec(props.startTime))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_3__["OpenInNew"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    className: _Chapters_css__WEBPACK_IMPORTED_MODULE_1___default.a.startTime
  }, props.startTime)));
}

var mapStateToProps = function mapStateToProps(state) {
  var videoData = reducers__WEBPACK_IMPORTED_MODULE_6__["getVideoData"](state);
  var isPanelLinked = reducers__WEBPACK_IMPORTED_MODULE_6__["isPanelLinked"](state);
  return {
    isPanelLinked: isPanelLinked,
    videoData: videoData.alignment,
    mediaInterval: reducers__WEBPACK_IMPORTED_MODULE_6__["getMediaInterval"](state)
  };
};

var matchDispatchToProps = function matchDispatchToProps(dispatch) {
  var changeMediaInterval = function changeMediaInterval(interval) {
    dispatch(actions__WEBPACK_IMPORTED_MODULE_7__["selectMediaInterval"](interval));
  };

  return {
    changeMediaInterval: changeMediaInterval,
    changeScrollToId: function changeScrollToId(payload) {
      return dispatch(actions__WEBPACK_IMPORTED_MODULE_7__["changeScrollToId"](payload));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, matchDispatchToProps)(Chapters));

function toSec() {
  var hms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var a = hms.split(":"); // split it at the colons
  // minutes are worth 60 seconds. Hours are worth 60 minutes.

  var seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
  return seconds;
}

/***/ }),

/***/ "./app/components/MediaComponent/Video/Video.js":
/*!******************************************************!*\
  !*** ./app/components/MediaComponent/Video/Video.js ***!
  \******************************************************/
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
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var _Chapters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Chapters */ "./app/components/MediaComponent/Video/Chapters.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! actions */ "./app/actions/index.js");


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}









function Video(props) {
  var _props$videoData;

  var textIdfromAlignment = props.alignmentData.text;
  var syncIdOnClick = props.syncIdOnClick;
  var videoRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  var VideoData = (props === null || props === void 0 ? void 0 : (_props$videoData = props.videoData) === null || _props$videoData === void 0 ? void 0 : _props$videoData.alignment) || [];
  var url = "https://www.youtube.com/watch?v=2MMM_ggekfE"; //url should be from db api

  var VideoIdListRange = [];
  var closestID = [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    played: 0,
    duration: 0,
    playing: true
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(VideoData)) {
    VideoIdListRange = VideoData.map(function (l) {
      return [parseInt(l.source_segment.start), parseInt(l.source_segment.end)];
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (textIdfromAlignment === props.selectedText.id && props.isPanelLinked) {
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
          props.changeMediaInterval(data);
        }
      }
    }
  }, [syncIdOnClick]);

  var handleProgress = function handleProgress(state) {
    // We only want to update time slider if we are not currently seeking
    var played = state.playedSeconds;
    var Interval = VideoData.find(function (time) {
      return toSec(time.target_segment.start) < played && toSec(time.target_segment.end) > played;
    });

    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(Interval)) {
      props.changeMediaInterval(Interval);
    }
  };

  var jumpToTime = function jumpToTime(time) {
    videoRef.current.seekTo(toSec(time), "seconds");
  };

  if (VideoData.length === 0) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
  if (props.videoData.source.witness !== parseInt(props.witness)) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
    "in": props.open
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_2___default.a, {
    url: url,
    style: {
      maxWidth: "100%",
      objectFit: "contain"
    },
    width: "400px",
    height: "250px",
    ref: videoRef,
    controls: true,
    onDuration: function onDuration(duration) {
      return setState(_objectSpread(_objectSpread({}, state), {}, {
        duration: duration
      }));
    },
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
    onError: function onError() {
      return console.log("error in media sec");
    },
    onSeek: function onSeek(e) {
      return console.log("onSeek", e);
    },
    onProgress: handleProgress
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Chapters__WEBPACK_IMPORTED_MODULE_4__["default"], {
    jumpToTime: jumpToTime
  }));
}

var mapStateToProps = function mapStateToProps(state) {
  var scrollToId = reducers__WEBPACK_IMPORTED_MODULE_6__["getScrollToId"](state);
  var syncIdOnClick = reducers__WEBPACK_IMPORTED_MODULE_6__["getSyncIdOnClick"](state);
  var videoData = reducers__WEBPACK_IMPORTED_MODULE_6__["getVideoData"](state);
  var Media = reducers__WEBPACK_IMPORTED_MODULE_6__["getMediaData"](state);
  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_6__["getSelectedText"](state);
  var alignmentData = reducers__WEBPACK_IMPORTED_MODULE_6__["getAlignment"](state);
  var witness = reducers__WEBPACK_IMPORTED_MODULE_6__["getSelectedTextWitnessId"](state, selectedText.id);
  var isPanelLinked = reducers__WEBPACK_IMPORTED_MODULE_6__["isPanelLinked"](state);
  return {
    isPanelLinked: isPanelLinked,
    scrollToId: scrollToId,
    syncIdOnClick: syncIdOnClick,
    videoData: videoData,
    selectedMedia: Media,
    selectedText: selectedText,
    alignmentData: alignmentData,
    witness: witness,
    mediaInterval: reducers__WEBPACK_IMPORTED_MODULE_6__["getMediaInterval"](state)
  };
};

var matchDispatchToProps = function matchDispatchToProps(dispatch) {
  var toggleImage = function toggleImage(data) {
    return dispatch(actions__WEBPACK_IMPORTED_MODULE_7__["changedShowPageImages"](data));
  };

  var changeMediaSelection = function changeMediaSelection(data) {
    return dispatch(actions__WEBPACK_IMPORTED_MODULE_7__["mediaSelection"](data));
  };

  var onSelectedSearchResult = function onSelectedSearchResult(text, start, length, selectedText) {
    if (!selectedText || selectedText.id !== text.id) {
      dispatch(batchActions([actions__WEBPACK_IMPORTED_MODULE_7__["selectedSearchResult"](text.id, start, length), actions__WEBPACK_IMPORTED_MODULE_7__["selectedText"](text)]));
    } else {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_7__["selectedSearchResult"](text.id, start, length));
    }
  };

  var changeMediaInterval = function changeMediaInterval(interval) {
    dispatch(actions__WEBPACK_IMPORTED_MODULE_7__["selectMediaInterval"](interval));
  };

  return {
    toggleImage: toggleImage,
    onSelectedSearchResult: onSelectedSearchResult,
    changeMediaSelection: changeMediaSelection,
    changeMediaInterval: changeMediaInterval,
    changeSelectedRange: function changeSelectedRange(payload) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_7__["changeSelectedRange"](payload));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, matchDispatchToProps)(Video));

function toSec() {
  var hms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var a = hms.split(":"); // split it at the colons
  // minutes are worth 60 seconds. Hours are worth 60 minutes.

  var seconds = +a[0] * 60 * 60 + +a[1] * 60 + +a[2];
  return seconds;
}

/***/ }),

/***/ "./app/components/MediaComponent/Video/index.js":
/*!******************************************************!*\
  !*** ./app/components/MediaComponent/Video/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Video */ "./app/components/MediaComponent/Video/Video.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Video__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./app/components/Sidebar/Sidebar.css":
/*!********************************************!*\
  !*** ./app/components/Sidebar/Sidebar.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","Resources":"Sidebar---Resources","ResourceDetail":"Sidebar---ResourceDetail","optionlist":"Sidebar---optionlist","css-heg063-MuiTabs-flexContainer":"Sidebar---css-heg063-MuiTabs-flexContainer","listContainer":"Sidebar---listContainer","sidebar":"Sidebar---sidebar","menu_title":"Sidebar---menu_title","sidebar_header":"Sidebar---sidebar_header"};

/***/ }),

/***/ "./app/components/Sidebar/Sidebar.js":
/*!*******************************************!*\
  !*** ./app/components/Sidebar/Sidebar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Sidebar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.css */ "./app/components/Sidebar/Sidebar.css");
/* harmony import */ var _Sidebar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Sidebar_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
/* harmony import */ var _SidebarOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SidebarOptions */ "./app/components/Sidebar/SidebarOptions/index.js");
/* harmony import */ var components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/utility/useLocalStorage */ "./app/components/utility/useLocalStorage.js");
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
var _excluded = ["children", "value", "index"];

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}











function Sidebar(props) {
  var _useLocalStorage = Object(components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__["default"])("selectedResources", 0),
      _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
      value = _useLocalStorage2[0],
      setValue = _useLocalStorage2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    var timer = setTimeout(function () {
      if (props.isSecondWindowOpen) {
        window.dispatchEvent(new Event("resize"));
      }
    }, 1000);
    return function () {
      return clearTimeout(timer);
    };
  }, [isOpen]);

  var handleChange = function handleChange(event, newValue) {
    setValue(newValue);
  };

  var handleOpen = function handleOpen() {
    setOpen(function (prev) {
      return !prev;
    });
  };

  var theme = Object(_mui_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    sx: {
      width: isOpen ? "100%" : "45px",
      bgcolor: "background.default",
      position: props.isSecondWindowOpen ? "relative" : "absolute",
      borderRight: theme.palette.mode === "light" ? "2px solid lightgray" : "2px solid #d3d3d3"
    },
    className: _Sidebar_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    className: _Sidebar_css__WEBPACK_IMPORTED_MODULE_1___default.a.sidebar_header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    className: _Sidebar_css__WEBPACK_IMPORTED_MODULE_1___default.a.menu_title,
    sx: isOpen ? {
      width: "fit-content",
      opacity: 1
    } : {
      width: "0",
      opacity: 0
    }
  }, "Menu"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: handleOpen,
    style: {
      cursor: "pointer",
      zIndex: 1
    }
  }, !isOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__["Menu"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__["Close"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    sx: {
      borderBottom: 1,
      display: "flex"
    },
    className: _Sidebar_css__WEBPACK_IMPORTED_MODULE_1___default.a.optionlist
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Tabs"], {
    value: value,
    sx: {
      flex: 1
    },
    onChange: handleChange,
    orientation: !isOpen ? "vertical" : "horizontal",
    "aria-label": "basic tabs example"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Tab"], _extends({
    style: {
      minWidth: 0,
      flex: 1
    },
    onClick: function onClick() {
      return setOpen(true);
    },
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__["Info"], null)
  }, a11yProps(0))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Tab"], _extends({
    style: {
      minWidth: 0,
      flex: 1
    },
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__["PermMedia"], null),
    onClick: function onClick() {
      return setOpen(true);
    }
  }, a11yProps(1))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Tab"], _extends({
    style: {
      minWidth: 0,
      flex: 1
    },
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__["Book"], null),
    onClick: function onClick() {
      return setOpen(true);
    }
  }, a11yProps(2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Tab"], _extends({
    style: {
      minWidth: 0,
      flex: 1
    },
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__["Feedback"], null),
    onClick: function onClick() {
      return setOpen(true);
    }
  }, a11yProps(3))))), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPanel, {
    value: value,
    index: 0
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarOptions__WEBPACK_IMPORTED_MODULE_3__["default"].About, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPanel, {
    value: value,
    index: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarOptions__WEBPACK_IMPORTED_MODULE_3__["default"].Resources, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPanel, {
    value: value,
    index: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarOptions__WEBPACK_IMPORTED_MODULE_3__["default"].FullTextSearch, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TabPanel, {
    value: value,
    index: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SidebarOptions__WEBPACK_IMPORTED_MODULE_3__["default"].Discussion, null))));
}

var mapStateToProps = function mapStateToProps(state) {
  var isSecondWindowOpen = reducers__WEBPACK_IMPORTED_MODULE_8__["isSecondWindowOpen"](state);
  return {
    isSecondWindowOpen: isSecondWindowOpen
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(Sidebar));

function a11yProps(index) {
  return {
    id: "simple-tab-".concat(index),
    "aria-controls": "simple-tabpanel-".concat(index)
  };
}

function TabPanel(props) {
  var children = props.children,
      value = props.value,
      index = props.index,
      other = _objectWithoutProperties(props, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    role: "tabpanel",
    hidden: value !== index,
    id: "simple-tabpanel-".concat(index),
    "aria-labelledby": "simple-tab-".concat(index)
  }, other, {
    style: {
      flex: 1,
      display: value == index ? "flex" : "none",
      flexDirection: "column"
    }
  }), value === index && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Sidebar_css__WEBPACK_IMPORTED_MODULE_1___default.a.listContainer
  }, children));
}

/***/ }),

/***/ "./app/components/Sidebar/SidebarOptions/About.css":
/*!*********************************************************!*\
  !*** ./app/components/Sidebar/SidebarOptions/About.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/components/Sidebar/SidebarOptions/About.js":
/*!********************************************************!*\
  !*** ./app/components/Sidebar/SidebarOptions/About.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _About_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.css */ "./app/components/Sidebar/SidebarOptions/About.css");
/* harmony import */ var _About_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_About_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.mjs");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");










function About(props) {
  var Textdata = props.Textdata,
      selectedText = props.selectedText;
  if (!selectedText) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "no selected Text available");
  var selected = Textdata.detail.find(function (l) {
    return l.text === selectedText.id;
  });
  if (!selected) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "No about info");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h4",
    component: "div",
    mb: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
    id: "Resource.About"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["Accordion"], {
    TransitionProps: {
      unmountOnExit: true
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["AccordionSummary"], {
    sx: {
      fontWeight: "bold"
    },
    expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_8__["ExpandMore"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
    id: "text.title"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["AccordionDetails"], null, selected.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["Accordion"], {
    TransitionProps: {
      unmountOnExit: true
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["AccordionSummary"], {
    expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_8__["ExpandMore"], null)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
    id: "text.description"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["AccordionDetails"], null, selected.description)));
}

var mapStateToProps = function mapStateToProps(state) {
  return {
    Textdata: reducers__WEBPACK_IMPORTED_MODULE_2__["getTextTitle"](state),
    selectedText: reducers__WEBPACK_IMPORTED_MODULE_2__["getSelectedText"](state)
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(mapStateToProps, mapDispatchToProps)(About));

/***/ }),

/***/ "./app/components/Sidebar/SidebarOptions/Discussions.js":
/*!**************************************************************!*\
  !*** ./app/components/Sidebar/SidebarOptions/Discussions.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_utility_discourseForum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/utility/discourseForum */ "./app/components/utility/discourseForum.js");
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");




function Discussions() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    gutterBottom: true,
    component: "div"
  }, "Discussions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_utility_discourseForum__WEBPACK_IMPORTED_MODULE_1__["DiscourseTopicList"], {
    category: "55",
    perPage: "5"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Discussions);

/***/ }),

/***/ "./app/components/Sidebar/SidebarOptions/FullTextSearch.js":
/*!*****************************************************************!*\
  !*** ./app/components/Sidebar/SidebarOptions/FullTextSearch.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ResourceOption_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResourceOption.css */ "./app/components/Sidebar/SidebarOptions/ResourceOption.css");
/* harmony import */ var _ResourceOption_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ResourceOption_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_TextsSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/TextsSearch */ "./app/components/TextsSearch/index.js");
/* harmony import */ var containers_TextListContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! containers/TextListContainer */ "./app/containers/TextListContainer.js");





function FullTextSearch() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TextsSearch__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(containers_TextListContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (FullTextSearch);

/***/ }),

/***/ "./app/components/Sidebar/SidebarOptions/ResourceOption.css":
/*!******************************************************************!*\
  !*** ./app/components/Sidebar/SidebarOptions/ResourceOption.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"Dictionary":"ResourceOption---Dictionary"};

/***/ }),

/***/ "./app/components/Sidebar/SidebarOptions/Resources.css":
/*!*************************************************************!*\
  !*** ./app/components/Sidebar/SidebarOptions/Resources.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/components/Sidebar/SidebarOptions/Resources.js":
/*!************************************************************!*\
  !*** ./app/components/Sidebar/SidebarOptions/Resources.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Resources_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Resources.css */ "./app/components/Sidebar/SidebarOptions/Resources.css");
/* harmony import */ var _Resources_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Resources_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");








function Resources(props) {
  var handleMediaToggle = function handleMediaToggle(data) {
    props.changeMediaSelection(data);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
    variant: "h6",
    gutterBottom: true,
    component: "div"
  }, "Media"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__["List"], {
    sx: {
      width: "100%",
      maxWidth: 360,
      bgcolor: "background.paper"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__["ListItemButton"], {
    selected: props.showPageImages,
    onClick: function onClick() {
      return props.changedShowPageImages(!props.showPageImages);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__["ListItemIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_3__["Image"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
    primary: "Image"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__["ListItemButton"], {
    selected: props.selectedMedia.isVideoVisible,
    onClick: function onClick() {
      return handleMediaToggle("VIDEO");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__["ListItemIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_3__["OndemandVideo"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
    primary: "Video"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__["ListItemButton"], {
    selected: props.selectedMedia.isAudioVisible,
    onClick: function onClick() {
      return handleMediaToggle("AUDIO");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__["ListItemIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_3__["Audiotrack"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__["ListItemText"], {
    primary: "Audio"
  }))));
}

var mapStateToProps = function mapStateToProps(state) {
  var selectedMedia = reducers__WEBPACK_IMPORTED_MODULE_5__["getMediaData"](state);
  var alignmentData = reducers__WEBPACK_IMPORTED_MODULE_5__["getAlignment"](state);
  var showPageImages = reducers__WEBPACK_IMPORTED_MODULE_5__["showPageImages"](state);
  return {
    alignmentData: alignmentData,
    selectedMedia: selectedMedia,
    showPageImages: showPageImages
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  var changeMediaSelection = function changeMediaSelection(data) {
    return dispatch(actions__WEBPACK_IMPORTED_MODULE_4__["mediaSelection"](data));
  };

  return {
    changedShowPageImages: function changedShowPageImages(data) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__["changedShowPageImages"](data));
    },
    changeMediaSelection: changeMediaSelection,
    onSelectedSearchResult: function onSelectedSearchResult(text, start, length) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__["selectedSearchResult"](text, start, length));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Resources));

/***/ }),

/***/ "./app/components/Sidebar/SidebarOptions/index.js":
/*!********************************************************!*\
  !*** ./app/components/Sidebar/SidebarOptions/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About */ "./app/components/Sidebar/SidebarOptions/About.js");
/* harmony import */ var _Resources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Resources */ "./app/components/Sidebar/SidebarOptions/Resources.js");
/* harmony import */ var _FullTextSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FullTextSearch */ "./app/components/Sidebar/SidebarOptions/FullTextSearch.js");
/* harmony import */ var _Discussions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Discussions */ "./app/components/Sidebar/SidebarOptions/Discussions.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  About: _About__WEBPACK_IMPORTED_MODULE_0__["default"],
  Resources: _Resources__WEBPACK_IMPORTED_MODULE_1__["default"],
  FullTextSearch: _FullTextSearch__WEBPACK_IMPORTED_MODULE_2__["default"],
  Discussion: _Discussions__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./app/components/Sidebar/index.js":
/*!*****************************************!*\
  !*** ./app/components/Sidebar/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.js */ "./app/components/Sidebar/Sidebar.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Sidebar_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AnnotationDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnnotationDetail */ "./app/components/TextDetail/AnnotationDetail.js");
/* harmony import */ var _AnnotationDetailEdit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnnotationDetailEdit */ "./app/components/TextDetail/AnnotationDetailEdit.js");
/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnnotationControls.css */ "./app/components/TextDetail/AnnotationControls.css");
/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! css/colour.css */ "./app/css/colour.css");
/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(css_colour_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lib_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/User */ "./app/lib/User.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var _AnnotationControlsHeading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AnnotationControlsHeading */ "./app/components/TextDetail/AnnotationControlsHeading.js");
/* harmony import */ var _NoteEditor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NoteEditor */ "./app/components/TextDetail/NoteEditor.js");
/* harmony import */ var _QuestionView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./QuestionView */ "./app/components/TextDetail/QuestionView.js");
/* harmony import */ var _QuestionEditor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./QuestionEditor */ "./app/components/TextDetail/QuestionEditor.js");
/* harmony import */ var _QuestionsLoading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./QuestionsLoading */ "./app/components/TextDetail/QuestionsLoading.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Note */ "./app/components/TextDetail/Note.js");
/* harmony import */ var components_UI_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/UI/Button */ "./app/components/UI/Button.js");
/* harmony import */ var images_page_break_icon_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! images/page_break_icon.svg */ "./app/images/page_break_icon.svg");
/* harmony import */ var react_virtualized_dist_es_List__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-virtualized/dist/es/List */ "./node_modules/react-virtualized/dist/es/List/index.js");
/* harmony import */ var _AnnotationControlsHeader__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./AnnotationControlsHeader */ "./app/components/TextDetail/AnnotationControlsHeader.js");
/* harmony import */ var lib_Question__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! lib/Question */ "./app/lib/Question.js");
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
























var CONTROLS_MARGIN_LEFT = 10;
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
      var selectedRightSide = viewPortWidth - (selectedLeft + selectedWidth);
      var anchorPoint = anchorPoints.bottom;
      var moveToSide = false;
      var moveRight = 0;

      if (!offScreen && bottomGap < height) {
        moveToSide = true;
      }

      if (selectedRightSide < width + 50 || viewPortWidth - measurements.left < width + 50) {
        moveToSide = true;
      }

      if (moveToSide) {
        arrow.className = _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_5___default.a.arrowLeft;

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
          this.arrow.className = _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_5___default.a.arrowTop;
          arrowLeft = width / 2 - this.arrow.offsetWidth / 2 - moveRight;
          if (arrowLeft < 0) arrowLeft = 0;
          this.arrow.style.left = arrowLeft + "px";
          arrowHeight = this.arrow.offsetHeight;
          this.arrow.style.top = 0 - arrowHeight + "px";
        } // controls.style.top = top + measurements.height + arrowHeight + "px";


        controls.style.top = top - measurements.height - 15 + "px"; // controls.style.left =
        // selectedLeft + selectedWidth / 2 - width / 2 + moveRight + "px";

        controls.style.left = measurements.left + "px";
      } else if (moveToSide) {
        arrow.className = _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_5___default.a.arrowRight;
        var _arrowHeight = arrow.offsetHeight;
        var controlsTop = measurements.top - measurements.height - 15;

        if (measurements.top + measurements.height + bottomGap - controlsTop < height) {
          controlsTop = measurements.top + measurements.height + bottomGap - height;
        }

        if (anchorPoint === anchorPoints.left) {
          // left side of selection
          arrow.style.left = width - 2 + "px";
          controls.style.left = selectedLeft - width / 2 - arrow.offsetWidth + "px";
        } else {
          // right-side of selection
          arrow.className = _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_5___default.a.arrowLeft;
          arrow.style.left = -arrow.offsetWidth + "px";
          controls.style.left = selectedLeft + selectedWidth - width / 2 + arrow.offsetWidth + "px"; // controls.style.right = 0 + "px";
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

      if (!firstElement) {
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

      var top = firstElement.offsetTop + extraTop;
      var textTop = firstElement.offsetTop;
      var left = firstElement.offsetLeft;
      var width = firstElement.offsetWidth;
      var height = firstElement.offsetHeight;
      var rowTop = top;
      var viewPortWidth = null;
      var topGap = 0;
      var bottomGap = 0;

      if (firstElement && splitTextRect) {
        var elRect = firstElement.getBoundingClientRect();
        topGap = splitTextRect.height - elRect.top;
      }

      if (lastElement && splitTextRect) {
        var _elRect = lastElement.getBoundingClientRect();

        bottomGap = splitTextRect.height + splitTextRect.top - _elRect.bottom;
        viewPortWidth = splitTextRect.width;
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
      var isLoggedIn = props.user.isLoggedIn;
      var breakSelected = false;

      if (props.activeAnnotation && (props.activeAnnotation.isType(lib_Annotation__WEBPACK_IMPORTED_MODULE_9__["ANNOTATION_TYPES"].pageBreak) || props.activeAnnotation.isType(lib_Annotation__WEBPACK_IMPORTED_MODULE_9__["ANNOTATION_TYPES"].lineBreak))) {
        breakSelected = true;
      } // the selected word/sentence is props.anotationsData


      if (props.annotationsData) {
        props.annotationsData.map(function (annotationData) {
          var randomPercentage = Math.round(Math.random() * 99) + 1;
          var isEditing = false;
          var isActive = false;

          if (annotationData.isTemporary) {
            isEditing = true;
            isActive = true;
          } else if (!props.temporaryAnnotation && annotationData.annotation.uniqueId == props.activeAnnotation.uniqueId) {
            isActive = true;
          }

          if (isEditing) {
            var annotationDetail = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AnnotationDetailEdit__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
            var _annotationDetail = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AnnotationDetail__WEBPACK_IMPORTED_MODULE_3__["default"], {
              accuracy: randomPercentage,
              annotationData: annotationData,
              key: annotationData.annotation.uniqueId,
              isActive: isActive,
              user: props.user,
              selectAnnotationHandler: function selectAnnotationHandler() {
                if (isLoggedIn && !isEditing) {
                  props.didSelectAnnotation(annotationData.annotation);
                }
              },
              editAnnotationHandler: function editAnnotationHandler() {
                if (isLoggedIn && !isEditing) {
                  props.editAnnotation(annotationData.annotation);
                }
              },
              isLoggedIn: isLoggedIn
            });

            annotations.push(_annotationDetail);
          }
        }, this);

        if (!props.user.isLoggedIn) {
          // NOTE: FormattedMessage cannot take a child when using
          // the values option, so need to wrap it in a div
          anonymousUserMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_5___default.a.anonymousMessage
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
            id: "annotations.loginMessage",
            values: {
              loginLink: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
                href: "/accounts/login/"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_15__["FormattedMessage"], {
                id: "annotations.loginLink"
              }))
            }
          }));
        }
      } else {
        nothingSelected = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_5___default.a.nothingSelected
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
            return annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_9__["ANNOTATION_TYPES"].pageBreak && annotation.creatorWitness.id === _this2.props.selectedWitness.id;
          });
          lineBreaks = this.props.availableAnnotations.filter(function (annotation) {
            return annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_9__["ANNOTATION_TYPES"].lineBreak && annotation.creatorWitness.id === _this2.props.selectedWitness.id;
          });
        }

        if (pageBreaks.length > 0) {
          pageBreaksButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_5___default.a.breakButtons
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_UI_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
            title: "Page Break",
            accessoryType: "DELETE",
            icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](images_page_break_icon_svg__WEBPACK_IMPORTED_MODULE_18__["default"], {
              width: 20,
              height: 20
            }),
            onClick: function onClick() {
              _this2.props.deleteAnnotation(pageBreaks[0]);
            },
            isActive: true,
            backgroundColor: css_colour_css__WEBPACK_IMPORTED_MODULE_6___default.a.activeButton
          }));
          allowPageBreak = false;
        }

        if (lineBreaks.length > 0) {
          lineBreaksButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_5___default.a.breakButtons
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_UI_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
            title: "Line Break",
            accessoryType: "DELETE",
            icon: "\xB6",
            onClick: function onClick() {
              _this2.props.deleteAnnotation(lineBreaks[0]);
            },
            isActive: true,
            backgroundColor: css_colour_css__WEBPACK_IMPORTED_MODULE_6___default.a.activeButton
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

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NoteEditor__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Note__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_QuestionEditor__WEBPACK_IMPORTED_MODULE_13__["default"], {
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

        questionViews = questions.map(function (question, index) {
          var key = "QUESTION_" + question.annotationUniqueId;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_QuestionView__WEBPACK_IMPORTED_MODULE_12__["default"], {
            question: question,
            key: "question_" + question.annotationUniqueId,
            "delete": function _delete() {
              return _this2.props.deleteAnnotation(_this2.props.questions[index]);
            }
          });
        });
      }

      var questionHeading = null;

      if (questionViews.length > 0) {
        questionHeading = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
          className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_5___default.a.sectionHeading
        }, "Questions");
      }

      var questionsLoading = null;

      if (questionsAreLoading) {
        questionsLoading = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_QuestionsLoading__WEBPACK_IMPORTED_MODULE_14__["default"], null);
      }

      var allowQuestion = ((_props$questions = props.questions) === null || _props$questions === void 0 ? void 0 : _props$questions.length) === 0 && props.temporaryQuestions.length === 0;
      var classes = [_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_5___default.a.annotationControls];

      if (props.inline) {
        classes.push(_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_5___default.a.inline);
      }

      var showHeader = true;
      if (anonymousUserMessage || breakSelected) showHeader = false;
      var annotationBody = /*#__PURE__*/react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.createPortal( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_5___default.a.annotationContent
      }, anonymousUserMessage, nothingSelected, !breakSelected && annotations, pageBreaksButton, lineBreaksButton, tempNotes, notes, questionHeading, tempQuestions, questionsLoading, questionViews), document.getElementById("annotation-portal"));
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default.a.apply(void 0, classes),
        style: {
          maxWidth: 150
        },
        ref: function ref(controls) {
          return _this2.controls = controls;
        },
        id: "annotation-control"
      }, showHeader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AnnotationControlsHeader__WEBPACK_IMPORTED_MODULE_20__["default"], {
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
      }), !breakSelected && temporaryAnnotations, annotationBody, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_5___default.a.arrow,
        ref: function ref(div) {
          return _this2.arrow = div;
        }
      }));
    }
  }]);

  return AnnotationControls;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AnnotationControls);

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



function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}



















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
      var id = annotation.content + annotation.start + i; // remove i if you want to make group of same annotations

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
      //Dominant only available for chojuk text
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
        if (stateProps.questionsData[question.uniqueId].questions.length > 0 && !stateProps.questionsData[question.uniqueId].loading) {
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
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}








var ICON_SIZE = 15;

var AnnotationControlsHeader = /*#__PURE__*/function (_React$Component) {
  _inherits(AnnotationControlsHeader, _React$Component);

  var _super = _createSuper(AnnotationControlsHeader); // keyHandler;


  function AnnotationControlsHeader() {
    _classCallCheck(this, AnnotationControlsHeader);

    return _super.call(this);
  }

  _createClass(AnnotationControlsHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {// this.keyHandler = (evtobj) => {
      //     var e = window.event ? event : evtobj;
      //     let condition = e.ctrlKey;
      //     if (condition && e.keyCode != 67) {
      //         evtobj.preventDefault();
      //     }
      //     if (condition && e.keyCode == 69) {
      //         this.props.editAnnotationHandler();
      //     }
      //     if (condition && e.keyCode == 81) {
      //         this.props?.addQuestion();
      //     }
      //     if (condition && e.keyCode == 76) {
      //         this.props?.addLineBreak();
      //     }
      //     if (condition && e.keyCode == 78) {
      //         this.props?.addNote();
      //     }
      //     if (condition && e.keyCode == 80) {
      //         this.props?.addPageBreak();
      //     }
      // };
      // document.addEventListener("keydown", this.keyHandler, { once: false });
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
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}







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
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","annotation-desc":"AnnotationDetail---annotation-desc","annotationDetail":"AnnotationDetail---annotationDetail","date":"AnnotationDetail---date","active":"AnnotationDetail---active","annotationHeader":"AnnotationDetail---annotationHeader","activeIcon":"AnnotationDetail---activeIcon","editing":"AnnotationDetail---editing","contentOptions":"AnnotationDetail---contentOptions","actionButtons":"AnnotationDetail---actionButtons","edit":"AnnotationDetail---edit","editImage":"AnnotationDetail---editImage","save":"AnnotationDetail---save","cancel":"AnnotationDetail---cancel"};

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
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var components_UI_ShareButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/UI/ShareButton */ "./app/components/UI/ShareButton.js");
/* harmony import */ var components_UI_Voting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/UI/Voting */ "./app/components/UI/Voting/index.js");
/* harmony import */ var components_UI_AnnotationAvatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/UI/AnnotationAvatar */ "./app/components/UI/AnnotationAvatar.js");










var MAXIMUM_TEXT_LENGTH = 250;

var AnnotationDetail = function AnnotationDetail(props) {
  var accuracyPercentage = props.accuracy;
  var desc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "<", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "annotation.delete"
  }), ">");
  var content = props.annotationData.content;

  if (content.trim() !== "") {
    if (content.length > MAXIMUM_TEXT_LENGTH) {
      content = content.substr(0, MAXIMUM_TEXT_LENGTH) + "…";
    } // content variable is the selected trimmed context


    desc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      style: {
        minWidth: 100,
        maxWidth: "30ch"
      }
    }, content);
  }

  var classes = [_AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.annotationDetail];

  if (props.isActive) {
    classes.push(_AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.active);
  }

  var className = classnames__WEBPACK_IMPORTED_MODULE_1___default.a.apply(void 0, classes);
  var name = props.annotationData.name ? props.annotationData.name : props.user.name;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    onClick: props.selectAnnotationHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    className: _AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.annotationHeader,
    sx: {
      bgcolor: "secondary.light",
      color: "texts.main"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_AnnotationAvatar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, name), name === "པེ་ཅིན།" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.date
  }, "1738, month, day N/A"), name === "སྣར་ཐང༌།" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.date
  }, "1742, month, day N/A"), name === "སྡེ་དགེ" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.date
  }, "1744, month, day N/A")), props.isLoggedIn && props.isActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    style: {
      display: "none"
    },
    className: _AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.edit,
    onClick: props.editAnnotationHandler,
    id: "editBtn"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between"
    }
  }, desc), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.contentOptions
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_Voting__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: props.annotationData
  })));
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
/* harmony import */ var images_PencilAltIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! images/PencilAltIcon.svg */ "./app/images/PencilAltIcon.svg");






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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_PencilAltIcon_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    height: "0.8em",
    width: "0.8em",
    style: {
      fill: "currentColor",
      marginRight: 6
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
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

/***/ "./app/components/TextDetail/AnnotationProtal.js":
/*!*******************************************************!*\
  !*** ./app/components/TextDetail/AnnotationProtal.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");



var initialLoad = true;

function AnnotationProtal(_ref) {
  var activeAnnotation = _ref.activeAnnotation;
  var portal = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  var measure = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(function (e) {
    var control = document.getElementById("s_".concat(activeAnnotation === null || activeAnnotation === void 0 ? void 0 : activeAnnotation.start));

    if (control) {
      var position = control.getBoundingClientRect();
      var top = Math.floor(position.top - 40);
      portal.current.style.top = top + "px";
    }
  }, [activeAnnotation === null || activeAnnotation === void 0 ? void 0 : activeAnnotation.start]);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    var scrollElement = document.getElementById("scroller");

    if (!initialLoad) {
      var scrolling = false;
      if (scrollElement) scrollElement.addEventListener("scroll", measure);

      if (!scrolling) {
        var start = activeAnnotation === null || activeAnnotation === void 0 ? void 0 : activeAnnotation.start;

        if (start) {
          var control = null;

          do {
            control = document.getElementById("s_".concat(start));
            start += 1;
          } while (!control);

          if (control) {
            var position = control.getBoundingClientRect();
            var top = Math.floor(position.top - 40);
            portal.current.style.top = top + "px";
          }
        }
      }
    }

    initialLoad = false;
    return function () {
      if (!scrollElement) return null;
      scrollElement.removeEventListener("scroll", measure);
    };
  }, [activeAnnotation === null || activeAnnotation === void 0 ? void 0 : activeAnnotation.start]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "annotation-portal",
    ref: portal,
    style: {
      position: "absolute",
      left: "97%",
      zIndex: 10,
      maxWidth: 300,
      width: "max-content",
      transition: "all 0.1s linear 0s"
    }
  });
}

var getStateUsingProp = function getStateUsingProp(state) {
  return {
    activeAnnotation: Object(reducers__WEBPACK_IMPORTED_MODULE_2__["getActiveTextAnnotation"])(state)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(getStateUsingProp)(AnnotationProtal));

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
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}










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
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}





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
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");




function Search(_ref) {
  var handleWindowSearch = _ref.handleWindowSearch;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    size: "small",
    variant: "text",
    onClick: handleWindowSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_1__["Search"], null));
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
  var onSelectedSearchResult = props.onSelectedSearchResult,
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
      className: _SearchStyle_css__WEBPACK_IMPORTED_MODULE_3___default.a.searchListItem,
      onClick: function onClick() {
        return onSelectedSearchResult(selectedText, result[0], searchValue.length, selectedText);
      },
      style: style
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HighlightedString__WEBPACK_IMPORTED_MODULE_2__["default"], {
      string: result[1],
      highlightClass: _SearchStyle_css__WEBPACK_IMPORTED_MODULE_3___default.a.highlight,
      searchTerm: searchValue
    })));
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
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
/* harmony import */ var components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/utility/useLocalStorage */ "./app/components/utility/useLocalStorage.js");
/* harmony import */ var components_textDetail_fontSize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/textDetail/fontSize */ "./app/components/textDetail/fontSize.js");
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app_constants */ "./app/app_constants/index.js");
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}









function Settings(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showOption = _useState2[0],
      setShowOption = _useState2[1];

  var _useLocalStorage = Object(components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_3__["default"])("WindowOneFont", "Tibetan"),
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
    setTimeout(function () {
      window.dispatchEvent(new Event("resize"));
    }, 1000);
    setShowOption(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["ClickAwayListener"], {
    onClickAway: function onClickAway() {
      return setShowOption(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    position: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    onClick: handleClick,
    size: "small",
    variant: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_wrench_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    height: 20,
    width: 20,
    fill: "currentColor"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Grow"], {
    "in": showOption
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["MenuList"], {
    dense: true,
    sx: {
      position: "absolute",
      right: 0,
      zIndex: 2,
      top: 40,
      bgcolor: "heading.main"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_textDetail_fontSize__WEBPACK_IMPORTED_MODULE_4__["default"], {
    fontSize: props.textFontSize,
    onChange: props.onChangedFontSize
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FontSelection, {
    selectFont: handlefont,
    selectedfont: fontSelect
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
    onClick: function onClick() {
      return props.onExport();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    variant: "subtitle2"
  }, "Export Document"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Settings);

var FontSelection = function FontSelection(_ref) {
  var selectFont = _ref.selectFont,
      selectedfont = _ref.selectedfont;
  var fontAvailable = app_constants__WEBPACK_IMPORTED_MODULE_6__["FONT_LIST"] || [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Box"], {
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
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");




function TableOfContent(_ref) {
  var changeShowTableContent = _ref.changeShowTableContent,
      showTableContent = _ref.showTableContent;

  function handleClick() {
    changeShowTableContent(!showTableContent);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: handleClick
  }, showTableContent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__["Clear"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__["Menu"], null)));
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
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}








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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["Box"], {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
        "aria-label": "delete",
        size: "small"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_5__["Delete"], {
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
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}







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
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}







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
      var topicTitle = this.props.defaultTitle + "[# ".concat(Date.now().toString().slice(-5, -1), " ]"); // randomize topic Title 

      this.props.saveQuestion(this.props.question, topicTitle, content);
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
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var components_utility_discourseForum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/utility/discourseForum */ "./app/components/utility/discourseForum.js");
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}















var QuestionView = /*#__PURE__*/function (_React$Component) {
  _inherits(QuestionView, _React$Component);

  var _super = _createSuper(QuestionView);

  function QuestionView() {
    var _this;

    _classCallCheck(this, QuestionView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "delete", function () {
      if (_this.props["delete"]) {
        _this.props["delete"]();
      }
    });

    return _this;
  }

  _createClass(QuestionView, [{
    key: "render",
    value: function render() {
      var topicId = this.props.question.topicId || null;
      var topicUrl = app_constants__WEBPACK_IMPORTED_MODULE_9__["QUESTION_URL"] + topicId;
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_QuestionView_css__WEBPACK_IMPORTED_MODULE_1___default.a.question, _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2___default.a.padding),
        sx: {
          boxShadow: 2
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2___default.a.text,
        dangerouslySetInnerHTML: {
          __html: this.props.question.content
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_QuestionView_css__WEBPACK_IMPORTED_MODULE_1___default.a.threadLink, _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2___default.a.text)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: topicUrl,
        target: "_blank"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        id: "question.viewThread"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_10__["IconButton"], {
        "aria-label": "delete",
        size: "small",
        onClick: this["delete"]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_12__["Delete"], {
        fontSize: "inherit"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2___default.a.subTitle
      }, name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedDate"], {
        value: this.props.question.created
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_utility_discourseForum__WEBPACK_IMPORTED_MODULE_11__["DiscourseForum"], {
        topicId: topicId
      }));
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
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}









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
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");








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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__["NativeSelect"], {
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
/* harmony import */ var components_utility_imageZoom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/utility/imageZoom */ "./app/components/utility/imageZoom.js");
/* harmony import */ var react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-virtualized/dist/es/CellMeasurer */ "./node_modules/react-virtualized/dist/es/CellMeasurer/index.js");
/* harmony import */ var react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-virtualized/styles.css */ "./node_modules/react-virtualized/styles.css");
/* harmony import */ var react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Text */ "./app/components/TextDetail/Text.js");
/* harmony import */ var lib_SplitText__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lib/SplitText */ "./app/lib/SplitText.js");
/* harmony import */ var lib_SegmentedText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lib/SegmentedText */ "./app/lib/SegmentedText.js");
/* harmony import */ var lib_shallowEqual__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lib/shallowEqual */ "./app/lib/shallowEqual.js");
/* harmony import */ var _AnnotationControls__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./AnnotationControls */ "./app/components/TextDetail/AnnotationControls.js");
/* harmony import */ var _AnnotationControlsContainer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AnnotationControlsContainer */ "./app/components/TextDetail/AnnotationControlsContainer.js");
/* harmony import */ var _SplitText_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./SplitText.css */ "./app/components/TextDetail/SplitText.css");
/* harmony import */ var _SplitText_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_SplitText_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./AnnotationControls.css */ "./app/components/TextDetail/AnnotationControls.css");
/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var lib_TextSegment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lib/TextSegment */ "./app/lib/TextSegment.js");
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! grapheme-splitter */ "./node_modules/grapheme-splitter/index.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(grapheme_splitter__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_23__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}





function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}























var MIN_SPACE_RIGHT = parseInt(_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_18___default.a.inlineWidth) + _AnnotationControls__WEBPACK_IMPORTED_MODULE_15__["CONTROLS_MARGIN_LEFT"];
var IMAGE_URL_PREFIX = "//iiif.bdrc.io/";
var IMAGE_URL_SUFFIX = "/full/full/0/default.jpg";
var IMAGE_START_PRE_KEY = "bdrcimg_pre";
var IMAGE_START_NUMBER_KEY = "bdrcimg_number";
var IMAGE_START_SUFFIX_KEY = "bdrcimg_suffix";
var _searchResultsCache = {};

var SplitTextComponent = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(SplitTextComponent, _React$PureComponent);

  var _super = _createSuper(SplitTextComponent); // Whether the mouse button is down


  function SplitTextComponent(props) {
    var _this;

    _classCallCheck(this, SplitTextComponent);

    _this = _super.call(this, props);
    _this.textAlignmentById = [];
    _this.list = null;
    _this.splitText = null;
    _this.cache = new react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_9__["CellMeasurerCache"]({
      fixedWidth: true
    });
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
        });

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

        if (activeAnnotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_20__["ANNOTATION_TYPES"].pageBreak) {
          startPos -= 1;
        }

        if (activeAnnotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_20__["ANNOTATION_TYPES"].lineBreak) {
          startPos -= 1;
        } // Index of text containing end of annotation


        var positionEnd = startPos + activeAnnotation.length;
        if (activeAnnotation.length > 0) positionEnd -= 1;
        selectedTextIndex = // props.splitText.getTextIndexOfPosition(positionEnd);
        props.splitText.getTextIndexOfPosition(startPos); //to position the control on start of selection

        splitTextRect = splitTextComponent.getBoundingClientRect();
      }

      var selectedAnnotatedSegments = [];

      if (props.selectedAnnotatedSegments && props.selectedAnnotatedSegments.length > 0) {
        selectedAnnotatedSegments = props.selectedAnnotatedSegments;

        for (var i = 0; i < selectedAnnotatedSegments.length; i++) {
          var _segment = selectedAnnotatedSegments[i];

          if (firstSelectedSegment === null && _segment instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_19__["default"]) {
            firstSelectedSegment = _segment;
            break;
          }
        }

        if (firstSelectedSegment) {
          if (firstSelectedSegment.length === 0 && props.activeAnnotation && props.activeAnnotation.isInsertion) {
            selectedElementId = Object(_Text__WEBPACK_IMPORTED_MODULE_11__["idForInsertion"])(firstSelectedSegment);
            segmentIdFunction = _Text__WEBPACK_IMPORTED_MODULE_11__["idForInsertion"];
          } else {
            selectedElementId = Object(_Text__WEBPACK_IMPORTED_MODULE_11__["idForSegment"])(firstSelectedSegment);
            segmentIdFunction = _Text__WEBPACK_IMPORTED_MODULE_11__["idForSegment"];
          }
        }
      } else if (props.activeAnnotation) {
        if (props.activeAnnotation.isDeletion) {
          var _segment2 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_19__["default"](startPos, "");

          selectedElementId = Object(_Text__WEBPACK_IMPORTED_MODULE_11__["idForDeletedSegment"])(_segment2);
          segmentIdFunction = _Text__WEBPACK_IMPORTED_MODULE_11__["idForDeletedSegment"];
          firstSelectedSegment = _segment2;
          selectedAnnotatedSegments = [firstSelectedSegment];
        } else if (props.activeAnnotation.isInsertion) {
          var _props$splitText$anno3 = props.splitText.annotatedText.getPositionOfAnnotation(props.activeAnnotation),
              _props$splitText$anno4 = _slicedToArray(_props$splitText$anno3, 1),
              start = _props$splitText$anno4[0];

          if (start) {
            var _segment3 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_19__["default"](start, "");

            selectedElementId = Object(_Text__WEBPACK_IMPORTED_MODULE_11__["idForInsertion"])(_segment3);
            segmentIdFunction = _Text__WEBPACK_IMPORTED_MODULE_11__["idForInsertion"];
            firstSelectedSegment = _segment3;
            selectedAnnotatedSegments = [firstSelectedSegment];
          }
        } else if (props.activeAnnotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_20__["ANNOTATION_TYPES"].pageBreak) {
          var _segment4 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_19__["default"](startPos + 1, "");

          var prevSegment = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_19__["default"](startPos, "");
          selectedElementId = Object(_Text__WEBPACK_IMPORTED_MODULE_11__["idForPageBreak"])(prevSegment);
          firstSelectedSegment = _segment4;
          selectedAnnotatedSegments = [_segment4];
          selectedElementIds = [selectedElementId];
        } else if (props.activeAnnotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_20__["ANNOTATION_TYPES"].lineBreak) {
          var _segment5 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_19__["default"](startPos + 1, "");

          var _prevSegment = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_19__["default"](startPos, "");

          selectedElementId = Object(_Text__WEBPACK_IMPORTED_MODULE_11__["idForLineBreak"])(_prevSegment);
          firstSelectedSegment = _segment5;
          selectedAnnotatedSegments = [_segment5];
          selectedElementIds = [selectedElementId];
        }
      }

      if (segmentIdFunction) {
        for (var _i2 = 0; _i2 < selectedAnnotatedSegments.length; _i2++) {
          var _segment6 = selectedAnnotatedSegments[_i2];

          if (_segment6 instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_19__["default"]) {
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

      if (oldActiveAnnotation && oldActiveAnnotation.isType(lib_Annotation__WEBPACK_IMPORTED_MODULE_20__["ANNOTATION_TYPES"].lineBreak) && newProps.activeAnnotations && !newProps.activeAnnotations.hasOwnProperty(oldActiveAnnotation.uniqueId)) {
        hasChanged = true;
      }

      if (newActiveAnnotation && newActiveAnnotation.isType(lib_Annotation__WEBPACK_IMPORTED_MODULE_20__["ANNOTATION_TYPES"].lineBreak) && oldProps.activeAnnotations && !oldProps.activeAnnotations.hasOwnProperty(newActiveAnnotation.uniqueId)) {
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
        if (current instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_19__["default"]) acc.push(current);
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
    value: function scrollToIndex(startId) {
      var list = this.list;
      var selectedTextIndex = this.props.splitText.getTextIndexOfPosition(startId);
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
      this.processProps(this.props);
      this.debouncedScroll = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (list) {
        if (list.length) {
          var _list$;

          _this3.changeScrollToId({
            id: (_list$ = list[0]) === null || _list$ === void 0 ? void 0 : _list$.start,
            from: 1
          });
        }
      }, 1000);
      window.addEventListener("resize", this.resizeHandler);
      this.selectionHandler = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (e) {
        _this3.handleSelection(e);
      }, 200).bind(this);
      setTimeout(function () {
        window.dispatchEvent(new Event("resize"));
      }, 2000);
      document.addEventListener("selectionchange", this.selectionHandler);
      document.addEventListener("mousedown", this.mouseDown.bind(this), true);
      document.addEventListener("mouseup", this.mouseUp.bind(this), true);
      this.componentDidUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this4 = this;

      this.Alignment = this.props.textAlignment;
      this.condition = this.props.condition;
      this.scrollToId = this.props.scrollToId;

      if (!this.props.isAnnotating) {
        this.activeSelection = null;
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

          if (lastSegment instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_19__["default"]) {
            var lastElement = document.getElementById(Object(_Text__WEBPACK_IMPORTED_MODULE_11__["idForSegment"])(lastSegment));
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
        var list = this.list;

        if (this.props.activeAnnotation || this.props.selectedSearchResult) {
          var selectedTextIndex = this.getSelectedTextIndex();
          setTimeout(function () {
            list.scrollToRow(selectedTextIndex); // scrollToRow often positions the annotation at the
            // bottom of the screen, so scroll up a bit

            setTimeout(function () {
              list.scrollToPosition(list.props.scrollTop - 300);
            }, 0);
          }, 100);
        }

        this._didSetInitialScrollPosition = true;
      } //Table Of content scrolling


      if (this.scrollToId.from == "table" && this.scrollToId.id) {
        var start = this.scrollToId.id;
        this.scrollToIndex(start);
      } //Video and audio alignment scrolling


      if (this.scrollToId.from == "video" && this.scrollToId.id) {
        var _start = this.scrollToId.id;
        this.scrollToIndex(_start);
      } // scroll dom with respect to window 2 scrolling


      if (this.selectedWindow === 2 && this.scrollToId.from == 2 && this.condition && this.scrollToId.id !== null) {
        this.textAlignmentById = this.props.textAlignmentById || [];

        if (this.Alignment) {
          var req = this.textAlignmentById.find(function (l) {
            return l.TStart === _this4.scrollToId.id;
          });

          var _start2 = req === null || req === void 0 ? void 0 : req.start;

          if (_start2 !== null) {
            this.scrollToIndex(_start2);
          }
        }
      } // scroll dom with respect to window 2 click
      //for scrolling to the highlighted alignment if its outside visible DOM


      if (this.targetId && this.scrollToId.from === "ua" && this.selectedWindow === 2 && this.scrollToId.id === "ua" && this.condition) {
        var _clickIdObj$source_se;

        var clickIdObj = this.Alignment.alignment.find(function (l) {
          return _this4.targetId >= l.target_segment.start && _this4.targetId < l.target_segment.end;
        });
        var startId = clickIdObj === null || clickIdObj === void 0 ? void 0 : (_clickIdObj$source_se = clickIdObj.source_segment) === null || _clickIdObj$source_se === void 0 ? void 0 : _clickIdObj$source_se.start;
        this.scrollToIndex(startId);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("mousedown", this);
      document.removeEventListener("mouseup", this);
      window.removeEventListener("resize", this.resizeHandler);
      document.removeEventListener("selectionchange", this.selectionHandler);
    }
  }, {
    key: "calculateImageHeight",
    value: function calculateImageHeight() {
      var height = null;

      if (this.imageHeight && this.imageWidth) {
        var ratio = this.imageWidth / this.imageHeight;
        var pechaImageClass = _SplitText_css__WEBPACK_IMPORTED_MODULE_17___default.a.pechaImage;
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

        if (_segment7 instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_19__["default"]) {
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
        className: _SplitText_css__WEBPACK_IMPORTED_MODULE_17___default.a.splitText,
        ref: function ref(div) {
          return _this5.splitText = div;
        },
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_5__["AutoSizer"], {
        disableWidth: true
      }, function (_ref) {
        var height = _ref.height;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_virtualized_dist_es_List__WEBPACK_IMPORTED_MODULE_6__["List"], {
          id: "scroller",
          width: 1,
          ref: function ref(list) {
            return _this5.list = list;
          },
          height: height,
          rowCount: props.splitText.texts.length,
          rowHeight: cache.rowHeight,
          rowRenderer: rowRenderer,
          overscanRowCount: 3,
          deferredMeasurementCache: cache,
          onScroll: _this5.scrollEvent,
          scrollToAlignment: "start",
          containerStyle: {
            width: "100%",
            maxWidth: "100%"
          },
          style: {
            width: "100%",
            paddingTop: 30,
            paddingInline: 50
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

      var splitter = new grapheme_splitter__WEBPACK_IMPORTED_MODULE_22___default.a();
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
      var imageUrl = "";

      if (props.selectedWitness && props.selectedWitness.properties && props.selectedWitness.properties.hasOwnProperty(IMAGE_START_PRE_KEY)) {
        imageUrl = this.getImageUrl(index);
      }

      var searchStringPositions = {};
      var searchValue = this.props.searchValue;

      if (searchValue && searchValue.length > 0 && props.splitText) {
        searchStringPositions = this.getStringPositions(props.splitText.texts[index], searchValue, index);
      }

      var pechaImageClass = props.showImages && imageUrl ? _SplitText_css__WEBPACK_IMPORTED_MODULE_17___default.a.pechaImage : null;
      var containerHeight = style.height;
      var pechaStyles = {};

      if (props.showImages && pechaImageClass && this.calculatedImageHeight) {
        pechaStyles["height"] = this.calculatedImageHeight + "px";
      }

      var newStyle = _objectSpread(_objectSpread({}, style), {}, {
        height: style.height,
        cursor: !this.props.isAnnotating ? "pointer" : "text"
      });

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_9__["CellMeasurer"], {
        columnIndex: 0,
        parent: parent,
        rowIndex: index,
        cache: cache,
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
        key: key,
        style: newStyle,
        className: _SplitText_css__WEBPACK_IMPORTED_MODULE_17___default.a.splitTextRow,
        ref: this.splitTextRef,
        id: "index_".concat(index)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
        className: _SplitText_css__WEBPACK_IMPORTED_MODULE_17___default.a.splitTextRowContent
      }, props.showImages && imageUrl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
        className: pechaImageClass,
        style: pechaStyles
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](components_utility_imageZoom__WEBPACK_IMPORTED_MODULE_8__["default"], {
        cl: "zoomableImage-".concat(index)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("img", {
        alt: "Text related Image",
        className: classnames__WEBPACK_IMPORTED_MODULE_23___default()([_SplitText_css__WEBPACK_IMPORTED_MODULE_17___default.a.image, "zoomableImage-".concat(index)]),
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
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Text__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
        condition: this.condition,
        isPanelLinked: this.props.isPanelLinked,
        selectedMedia: this.props.selectedMedia,
        MediaInterval: this.props.MediaInterval
      })), this.props.isAnnotating && this.selectedTextIndex === index && this.props.activeAnnotation && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_AnnotationControlsContainer__WEBPACK_IMPORTED_MODULE_16__["default"], {
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

/***/ "./app/components/TextDetail/TableOfContent/Commentary.js":
/*!****************************************************************!*\
  !*** ./app/components/TextDetail/TableOfContent/Commentary.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");





var TEXT_DEMO_DETAIL_ID = 2;

function Commentary(_ref) {
  var getWitness = _ref.getWitness,
      alignmentData = _ref.alignmentData,
      text = _ref.text,
      selectSecondWindowText = _ref.selectSecondWindowText;
  var textAlignments = (alignmentData === null || alignmentData === void 0 ? void 0 : alignmentData.alignments.text) || [];

  var handleSelectText = function handleSelectText(text) {
    selectSecondWindowText(text);
  };

  if (!textAlignments.length) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["Box"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    variant: "h6",
    gutterBottom: true,
    component: "div"
  }, "Commentary"), textAlignments.map(function (alignment, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: "commentary-".concat(index),
      style: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        return handleSelectText(text(TEXT_DEMO_DETAIL_ID));
      }
    }, text(2).name, alignment.target);
  }));
}

var mapStateToProps = function mapStateToProps(state) {
  var selectedMedia = reducers__WEBPACK_IMPORTED_MODULE_3__["getMediaData"](state);
  var alignmentData = reducers__WEBPACK_IMPORTED_MODULE_3__["getAlignment"](state);

  var text = function text(textId) {
    return reducers__WEBPACK_IMPORTED_MODULE_3__["getText"](state, textId);
  };

  var getWitness = function getWitness(id) {
    return reducers__WEBPACK_IMPORTED_MODULE_3__["getWitness"](state, id);
  };

  return {
    alignmentData: alignmentData,
    selectedMedia: selectedMedia,
    text: text,
    getWitness: getWitness
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  var changeMediaSelection = function changeMediaSelection(data) {
    return dispatch(actions__WEBPACK_IMPORTED_MODULE_2__["mediaSelection"](data));
  };

  var onChangeWindowOpen = function onChangeWindowOpen(data) {
    dispatch(actions__WEBPACK_IMPORTED_MODULE_2__["toggleSecondWindow"](data));
  };

  return {
    changeMediaSelection: changeMediaSelection,
    onChangeWindowOpen: function onChangeWindowOpen(data) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_2__["toggleSecondWindow"](data));
    },
    onSelectedSearchResult: function onSelectedSearchResult(text, start, length) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_2__["selectedSearchResult"](text, start, length));
    },
    selectSecondWindowText: function selectSecondWindowText(data) {
      onChangeWindowOpen(true);
      dispatch(actions__WEBPACK_IMPORTED_MODULE_2__["selectedText2"](data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Commentary));

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
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-loader */ "./node_modules/react-loader/lib/react-loader.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TableOfContent_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TableOfContent.css */ "./app/components/TextDetail/TableOfContent/TableOfContent.css");
/* harmony import */ var _TableOfContent_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_TableOfContent_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/esm/styles/index.js");
/* harmony import */ var components_UI_muiIcon___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/UI/muiIcon/ */ "./app/components/UI/muiIcon/index.js");
/* harmony import */ var _Commentary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Commentary */ "./app/components/TextDetail/TableOfContent/Commentary.js");
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}











var Search = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__["styled"])("div")(function (_ref) {
  var theme = _ref.theme;
  return _defineProperty({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__["alpha"])(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__["alpha"])(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%"
  }, theme.breakpoints.up("sm"), {
    marginLeft: theme.spacing(1),
    width: "auto"
  });
});
var SearchIconWrapper = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__["styled"])("div")(function (_ref3) {
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
var StyledInputBase = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__["styled"])(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["InputBase"])(function (_ref4) {
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

function TableOfContent(props) {
  var data = [{
    Id: 1,
    Title: "chapter 1",
    segment_id: 1
  }, {
    Id: 2,
    Title: "chapter 2",
    segment_id: 400
  }, {
    Id: 3,
    Title: "chapter 3",
    segment_id: 3000
  }];
  var loaded = data.length > 0 ? true : false;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: _TableOfContent_css__WEBPACK_IMPORTED_MODULE_6___default.a.TableContent,
    sx: {
      bgcolor: "heading.main",
      color: "text.primary",
      width: "100%",
      height: "100%",
      paddingInline: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Commentary__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    sx: {
      justifyContent: "space-between",
      paddingLeft: "0 !important",
      margin: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    textTransform: "uppercase",
    component: "h6"
  }, "Table Of Content"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Search, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchIconWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon___WEBPACK_IMPORTED_MODULE_8__["Search"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInputBase, {
    placeholder: "Search\u2026",
    inputProps: {
      "aria-label": "search"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["Box"], null, data.map(function (list, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      key: "TableContent-" + index,
      sx: {
        cursor: "pointer",
        width: "fit-content",
        "&:hover": {
          textDecoration: "underline"
        }
      },
      onClick: function onClick() {
        return props.changeScrollToId({
          from: "table",
          id: list.segment_id
        });
      }
    }, list.Title);
  })));
}

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    changeScrollToId: function changeScrollToId(payload) {
      return dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changeScrollToId"](payload));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(TableOfContent)));

/***/ }),

/***/ "./app/components/TextDetail/Text.css":
/*!********************************************!*\
  !*** ./app/components/TextDetail/Text.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","paddingSide":"20px","maxWidth":"600px","text":"Text---text","textFirstRow":"Text---textFirstRow","textLine":"Text---textLine","textline":"Text---textline","limitWidth":"Text---limitWidth","textContainer":"Text---textContainer","N_annotation":"Text---N_annotation","V_annotation":"Text---V_annotation","Q_annotation":"Text---Q_annotation","Q_annotation_double":"Text---Q_annotation_double","P_annotation":"Text---P_annotation","selectedAnnotation":"Text---selectedAnnotation","removedByAnnotation":"Text---removedByAnnotation","insertion":"Text---insertion","highlight":"Text---highlight","activeHighlight":"Text---activeHighlight","lineBreak":"Text---lineBreak","pageBreak":"Text---pageBreak","selectedRangelight":"Text---selectedRangelight","selectedRangeDark":"Text---selectedRangeDark","selectedImage":"Text---selectedImage","mediaInterval":"Text---mediaInterval"};

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
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}












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
            if (remainingAnnotations.some(function (l) {
              return l.type === "P";
            })) {
              classes.push(_Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.P_annotation);
            }

            if (remainingAnnotations.some(function (l) {
              return l.type === "Q";
            })) {
              var _double = remainingAnnotations.filter(function (l) {
                return l.type === "Q";
              });

              if (_double.length > 1) {
                classes.push(_Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.Q_annotation_double);
              }

              classes.push(_Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.Q_annotation);
            }

            if (remainingAnnotations.some(function (l) {
              return l.type === "N";
            })) {
              classes.push(_Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.N_annotation);
            }

            if (remainingAnnotations.some(function (l) {
              return l.type === "V";
            })) {
              classes.push(_Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.V_annotation);
            }
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

        if (renderProps.selectedMedia.isVideoVisible && renderProps.isPanelLinked) {
          if (renderProps.MediaInterval.source_segment && renderProps.MediaInterval.source_segment.start < segment.start && renderProps.MediaInterval.source_segment.end > segment.start) classes.push(_Text_css__WEBPACK_IMPORTED_MODULE_3___default.a.mediaInterval);
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
      this.textAlignmentById = this.props.textAlignmentById;
      var renderedHtml = this.generateHtml(nextProps, nextState);

      if (this.props.fontSize !== nextProps.fontSize) {
        return true;
      } else if (this._renderedHtml && renderedHtml.__html === this._renderedHtml.__html) {
        return false;
      } else {
        this._renderedHtml = renderedHtml;
        return true;
      }
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
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loader */ "./node_modules/react-loader/lib/react-loader.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AnnotationControlsContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnnotationControlsContainer */ "./app/components/TextDetail/AnnotationControlsContainer.js");
/* harmony import */ var lib_SplitText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/SplitText */ "./app/lib/SplitText.js");
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/AnnotatedText */ "./app/lib/AnnotatedText.js");
/* harmony import */ var lib_text_splitters_lengthSplitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/text_splitters/lengthSplitter */ "./app/lib/text_splitters/lengthSplitter.js");
/* harmony import */ var lib_text_splitters_positionSplitter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/text_splitters/positionSplitter */ "./app/lib/text_splitters/positionSplitter.js");
/* harmony import */ var components_Header_Header_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Header/Header.css */ "./app/components/Header/Header.css");
/* harmony import */ var components_Header_Header_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(components_Header_Header_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _TextDetail_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TextDetail.css */ "./app/components/TextDetail/TextDetail.css");
/* harmony import */ var _TextDetail_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_TextDetail_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var css_util_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! css/util.css */ "./app/css/util.css");
/* harmony import */ var css_util_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(css_util_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var lib_TextSegment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lib/TextSegment */ "./app/lib/TextSegment.js");
/* harmony import */ var _TextDetailHeadingContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./TextDetailHeadingContainer */ "./app/components/TextDetail/TextDetailHeadingContainer.js");
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var _TableOfContent_TableOfContent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TableOfContent/TableOfContent */ "./app/components/TextDetail/TableOfContent/TableOfContent.js");
/* harmony import */ var _AnnotationProtal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./AnnotationProtal */ "./app/components/TextDetail/AnnotationProtal.js");
/* harmony import */ var components_TextDetail_SplitText__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/TextDetail/SplitText */ "./app/components/TextDetail/SplitText.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}




















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
      if (this.selectedWindow === 2 && this.props.text.name) this.props.changeSelectedWindow(1);
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
          splitter = Object(lib_text_splitters_positionSplitter__WEBPACK_IMPORTED_MODULE_9__["default"])(this.props.pageBreaks);
        } else {
          splitter = Object(lib_text_splitters_lengthSplitter__WEBPACK_IMPORTED_MODULE_8__["default"])(1000, /^།[\s]+(?!།[\s]+)/, 2, 5);
        }

        splitText = new lib_SplitText__WEBPACK_IMPORTED_MODULE_4__["default"](this.props.annotatedText, splitter);
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
          isAnnotating: this.props.isAnnotating,
          syncIdOnClick: this.props.syncIdOnClick,
          textListVisible: this.props.textListVisible,
          showImages: this.props.pageImagesVisible,
          imagesBaseUrl: this.props.imagesBaseUrl,
          selectedWitness: this.props.selectedWitness,
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
          condition: this.props.condition,
          selectedMedia: this.props.selectedMedia,
          MediaInterval: this.props.MediaInterval
        });
      }

      var textComponents = [textComponent];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_15__["Box"], {
        sx: {
          bgcolor: "heading.main",
          color: "texts.main"
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_TextDetail_css__WEBPACK_IMPORTED_MODULE_11___default.a.textDetail, css_util_css__WEBPACK_IMPORTED_MODULE_12___default.a.flex, css_util_css__WEBPACK_IMPORTED_MODULE_12___default.a.flexColumn),
        key: this.key,
        ref: this.ref
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextDetailHeadingContainer__WEBPACK_IMPORTED_MODULE_14__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_15__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader__WEBPACK_IMPORTED_MODULE_2___default.a, {
        loaded: !this.props.loading,
        zIndex: 5
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_15__["Box"], {
        style: {
          display: "flex",
          height: "100%",
          width: "100%"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_15__["Box"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_TextDetail_css__WEBPACK_IMPORTED_MODULE_11___default.a.textContainer, css_util_css__WEBPACK_IMPORTED_MODULE_12___default.a.flex)
      }, !this.props.loading ? textComponents : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_15__["Slide"], {
        direction: "left",
        "in": this.props.showTableContent,
        container: this.ref.current,
        unmountOnExit: true,
        mountOnEnter: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_15__["Box"], {
        sx: {
          position: "absolute",
          height: "100%",
          minWidth: "50%",
          right: 0
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableOfContent_TableOfContent__WEBPACK_IMPORTED_MODULE_16__["default"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AnnotationProtal__WEBPACK_IMPORTED_MODULE_17__["default"], null));
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




function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}



















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
      textAlignmentById: textAlignmentById
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
      var selectedWitnessAnnotaion = state.data.witnessAnnotationsById[selectedWitness.id];
      var newArray = Object.values(selectedWitnessAnnotaion);
      var witnessPageBreaks = newArray; // annotatedText.getAnnotationsOfType(
      //     ANNOTATION_TYPES.pageBreak
      // ) || {};

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
    selectedMedia: Media,
    MediaInterval: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getMediaInterval"])(state),
    condition: condition && isPanelLinked && isSecondWindowOpen,
    isPanelLinked: isPanelLinked
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
/* harmony default export */ __webpack_exports__["default"] = (TextDetailContainer);

/***/ }),

/***/ "./app/components/TextDetail/TextDetailHeading.css":
/*!*********************************************************!*\
  !*** ./app/components/TextDetail/TextDetailHeading.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","button_group_menu":"TextDetailHeading---button_group_menu"};

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
/* harmony import */ var _TextDetailHeading_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextDetailHeading.css */ "./app/components/TextDetail/TextDetailHeading.css");
/* harmony import */ var _TextDetailHeading_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TextDetailHeading_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SelectVersion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectVersion */ "./app/components/TextDetail/SelectVersion.js");
/* harmony import */ var _TextListContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextListContainer */ "./app/components/TextDetail/TextListContainer.js");
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var _HeaderMenu_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HeaderMenu/Search */ "./app/components/TextDetail/HeaderMenu/Search.js");
/* harmony import */ var _HeaderMenu_Settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HeaderMenu/Settings */ "./app/components/TextDetail/HeaderMenu/Settings.js");
/* harmony import */ var _HeaderMenu_TableOfContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HeaderMenu/TableOfContent */ "./app/components/TextDetail/HeaderMenu/TableOfContent.js");
/* harmony import */ var _HeaderMenu_SearchList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HeaderMenu/SearchList */ "./app/components/TextDetail/HeaderMenu/SearchList.js");



function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}












function TextDetailHeading(props) {
  var _ref;

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
    direction: "row",
    spacing: 1,
    justifyContent: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_7__["Box"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_7__["ButtonGroup"], {
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
    className: _TextDetailHeading_css__WEBPACK_IMPORTED_MODULE_3___default.a.button_group_menu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_7__["Divider"], {
    orientation: "vertical",
    variant: "middle",
    flexItem: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_Search__WEBPACK_IMPORTED_MODULE_8__["default"], {
    handleWindowSearch: handleWindowSearch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_Settings__WEBPACK_IMPORTED_MODULE_9__["default"], {
    textFontSize: props.textFontSize,
    onChangedFontSize: props.onChangedFontSize,
    onExport: props.onExport
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_TableOfContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
    changeShowTableContent: props.changeShowTableContent,
    showTableContent: props.showTableContent
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
    "in": showFind,
    mountOnEnter: true,
    unmountOnExit: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    onSubmit: handleSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_7__["Stack"], {
    direction: "row",
    spacing: 2,
    position: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_7__["TextField"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    variant: "outlined",
    size: "small",
    onClick: handleSearch,
    style: {
      height: 25
    }
  }, "Search"), props.searchResults && visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    sx: (_ref = {
      position: "absolute",
      top: 35,
      right: 0,
      zIndex: 1,
      bgcolor: "heading.main",
      height: 350,
      width: 350,
      boxShadow: 3,
      overflowX: "hidden"
    }, _defineProperty(_ref, "boxShadow", 3), _defineProperty(_ref, "display", results.length === 0 ? "none" : "block"), _ref)
  }, condition && results.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_SearchList__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onSelectedSearchResult: props.onSelectedSearchResult,
    searchValue: props.searchValue,
    results: results,
    selectedText: props.selectedText
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_7__["IconButton"], {
    "aria-label": "closeButton",
    onClick: closeSearchItemBox,
    size: "small",
    sx: {
      right: 15,
      top: 0,
      position: "absolute"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_6__["Close"], {
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
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}







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
    onChangeWindowOpen: function onChangeWindowOpen(data) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["toggleSecondWindow"](data));
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
  }), _defineProperty(_objectSpread2, "onSelectedSearchResult", function onSelectedSearchResult(text, start, length, selectedText) {
    if (!selectedText || selectedText.id !== text.id) {
      dispatch(batchActions([actions__WEBPACK_IMPORTED_MODULE_3__["selectedSearchResult"](text.id, start, length), actions__WEBPACK_IMPORTED_MODULE_3__["selectedText"](text)]));
    } else {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["selectedSearchResult"](text.id, start, length));
    }
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
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/addTibetanShay */ "./app/lib/addTibetanShay.js");
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}








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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["Box"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
      noWrap: true
    }, Object(lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_5__["default"])(data.name)))));
  }, [textslist]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["ClickAwayListener"], {
    onClickAway: function onClickAway() {
      return setIsOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "relative",
      marginLeft: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: handleClick,
    component: "div",
    variant: "outlined",
    sx: {
      textOverflow: "ellipsis",
      width: "10rem",
      height: "100%",
      color: "text.primary"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    noWrap: true
  }, selected ? selected : "select Text here")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["Grow"], {
    "in": isOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes),
    sx: {
      position: "absolute",
      bgcolor: "heading.main",
      zIndex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    onChange: handleChange,
    id: "standard-basic",
    label: "Search",
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
      rowHeight: 30,
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
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}





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
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");




function Search(_ref) {
  var handleWindowSearch = _ref.handleWindowSearch;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
    size: "small",
    variant: "text",
    onClick: handleWindowSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_1__["Search"], null));
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
  var onSelectedSearchResult = props.onSelectedSearchResult,
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
        return onSelectedSearchResult(selectedText, result[0], searchValue.length, selectedText);
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
/* harmony import */ var components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/utility/useLocalStorage */ "./app/components/utility/useLocalStorage.js");
/* harmony import */ var components_textDetail_fontSize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/textDetail/fontSize */ "./app/components/textDetail/fontSize.js");
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app_constants */ "./app/app_constants/index.js");
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}









function Settings(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showOption = _useState2[0],
      setShowOption = _useState2[1];

  var _useLocalStorage = Object(components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_2__["default"])("WindowTwoFont", "Tibetan"),
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
    setTimeout(function () {
      window.dispatchEvent(new Event("resize"));
    }, 1000);
    setShowOption(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["ClickAwayListener"], {
    onClickAway: function onClickAway() {
      return setShowOption(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    position: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    onClick: handleClick,
    size: "small",
    variant: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_wrench_svg__WEBPACK_IMPORTED_MODULE_1__["default"], {
    height: 20,
    width: 20,
    fill: "currentColor"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Grow"], {
    "in": showOption
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["MenuList"], {
    dense: true,
    sx: {
      position: "absolute",
      right: 0,
      zIndex: 2,
      top: 40,
      bgcolor: "heading.main"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_textDetail_fontSize__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fontSize: props.textFontSize,
    onChange: props.onChangedFontSize
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FontSelection, {
    selectFont: handlefont,
    selectedfont: fontSelect
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["MenuItem"], {
    onClick: function onClick() {
      return props.onExport();
    }
  }, "Export Document", props.exportingWitness && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_4__["Check"], null))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Settings);

var FontSelection = function FontSelection(_ref) {
  var selectFont = _ref.selectFont,
      selectedfont = _ref.selectedfont;
  var fontAvailable = app_constants__WEBPACK_IMPORTED_MODULE_6__["FONT_LIST"] || [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Box"], {
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
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");




function TableOfContent(props) {
  var handleClick = function handleClick() {
    props.changeShowTableContent(!props.showTableContent);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: handleClick
  }, props.showTableContent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__["Clear"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__["Menu"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (TableOfContent);

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
/* harmony import */ var components_TextDetail_SelectVersion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/TextDetail/SelectVersion.css */ "./app/components/TextDetail/SelectVersion.css");
/* harmony import */ var components_TextDetail_SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(components_TextDetail_SelectVersion_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");







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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["NativeSelect"], {
    onChange: handleChangeWitness,
    className: components_TextDetail_SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectVersion,
    value: r,
    label: "Version2",
    classes: {
      root: components_TextDetail_SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectEmpty,
      select: components_TextDetail_SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectOptions
    }
  }, witnesses.map(function (witness, key) {
    var _props$activeWitness;

    if (witness.id === ((_props$activeWitness = props.activeWitness) === null || _props$activeWitness === void 0 ? void 0 : _props$activeWitness.id)) classes.push(components_TextDetail_SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.selected);
    tabName = witness.source.name;

    if (witness.isWorking) {
      tabName = props.intl.locale === "en" ? props.user.name === "User" ? "Working" : "My Edition" : "མཉམ་འབྲེལ་པར་མ།";
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      key: "versionSelect2-".concat(key),
      value: key,
      className: components_TextDetail_SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectOptions
    }, tabName);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(SelectVersion)));

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
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Text */ "./app/components/TextDetail2/Text.js");
/* harmony import */ var lib_SplitText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/SplitText */ "./app/lib/SplitText.js");
/* harmony import */ var components_TextDetail_SplitText_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/TextDetail/SplitText.css */ "./app/components/TextDetail/SplitText.css");
/* harmony import */ var components_TextDetail_SplitText_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(components_TextDetail_SplitText_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var lib_TextSegment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lib/TextSegment */ "./app/lib/TextSegment.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! grapheme-splitter */ "./node_modules/grapheme-splitter/index.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(grapheme_splitter__WEBPACK_IMPORTED_MODULE_14__);
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}





function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}













var _searchResultsCache = {};

var SplitTextComponent = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(SplitTextComponent, _React$PureComponent);

  var _super = _createSuper(SplitTextComponent); // Whether the mouse button is down


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
      var _this4 = this;

      var scrollToId = this.props.scrollToId;
      this.targetId2 = this.props.syncIdOnClick;
      this.selectedWindow = this.props.selectedWindow;
      var list = this.list;
      var result = this.props.searchResults;
      var Alignment = this.props.textAlignment;
      this.condition = this.props.condition;

      if (!this._didSetInitialScrollPosition && this.list) {
        var _list = this.list;

        if (this.props.activeAnnotation || this.props.selectedSearchResult) {
          var selectedTextIndex = this.getSelectedTextIndex();
          setTimeout(function () {
            _list.scrollToRow(selectedTextIndex); // scrollToRow often positions the annotation at the
            // bottom of the screen, so scroll up a bit


            setTimeout(function () {
              _list.scrollToPosition(_list.props.scrollTop - 300);
            }, 0);
          }, 100);
        }

        this._didSetInitialScrollPosition = true;
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
        className: components_TextDetail_SplitText_css__WEBPACK_IMPORTED_MODULE_11___default.a.splitText,
        ref: function ref(div) {
          return _this5.splitText = div;
        },
        key: key,
        style: {
          cursor: "pointer"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_5__["AutoSizer"], {
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
            width: "100%",
            paddingTop: 30,
            paddingInline: 50
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
        parent: parent,
        rowIndex: index,
        cache: cache,
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
        style: newStyle,
        ref: this.splitTextRef,
        id: "index2_".concat(index),
        className: components_TextDetail_SplitText_css__WEBPACK_IMPORTED_MODULE_11___default.a.splitTextRow
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
        className: components_TextDetail_SplitText_css__WEBPACK_IMPORTED_MODULE_11___default.a.splitTextRowContent
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Text__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loader */ "./node_modules/react-loader/lib/react-loader.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/esm/styles/index.js");
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}







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
var StyledInputBase = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["styled"])(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["InputBase"])(function (_ref4) {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: {
      bgcolor: "heading.main",
      color: "text.primary",
      width: "100%",
      height: "100%",
      paddingInline: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["Toolbar"], {
    sx: {
      justifyContent: "space-between",
      paddingLeft: "0 !important",
      margin: 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    textTransform: "uppercase",
    component: "h6"
  }, "Table Of Content"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Search, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchIconWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_4__["Search"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledInputBase, {
    placeholder: "Search\u2026",
    inputProps: {
      "aria-label": "search"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["Box"], null, data.map(function (list, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["Box"], {
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

/***/ "./app/components/TextDetail2/TestHtml.js":
/*!************************************************!*\
  !*** ./app/components/TextDetail2/TestHtml.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function TextHtml() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      margin: 40
    }
  }, "bodhicary\u0101vat\u0101ra o\u1E43 namo buddh\u0101ya sugat\u0101n sasut\u0101n sadharmak\u0101y\u0101n pra\u1E47ipaty\u0101darato \u2019khil\u0101\u1E43\u015B ca vandy\u0101n sugat\u0101tmajasa\u1E43var\u0101vat\u0101ra\u1E43 kathayi\u1E63y\u0101mi yath\u0101gama\u1E43 sam\u0101s\u0101t", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      background: "#eee"
    }
  }, "na hi ki\u1E43cid ap\u016Brvam atra v\u0101cya\u1E43 na ca sa\u1E43granthanakau\u015Bala\u1E43 mam\u0101sti ata eva na me par\u0101rthacint\u0101 svamano bh\u0101vayitu\u1E43 1 k\u1E5Bta\u1E43 mayedam 2"), " ", "mama t\u0101vad anena y\u0101ti v\u1E5Bddhi\u1E43 ku\u015Bala\u1E43 bh\u0101vayitu\u1E43 pras\u0101davega\u1E25 atha matsamadh\u0101tur eva pa\u015Byed aparo \u2019py enam ato \u2019pi s\u0101rthako \u2019yam k\u1E63a\u1E47asa\u1E43pad iya\u1E43 sudurlabh\u0101 pratilabdh\u0101 puru\u1E63\u0101rthas\u0101dhan\u012B yadi n\u0101tra vicintyate hita\u1E43 punar apy e\u1E63a sam\u0101gama\u1E25 kuta\u1E25 r\u0101trau yath\u0101 meghaghan\u0101ndhak\u0101re vidyut k\u1E63a\u1E47a\u1E43 dar\u015Bayati prak\u0101\u015Bam buddh\u0101nubh\u0101vena tath\u0101 kad\u0101cil lokasya pu\u1E47ye\u1E63u mati\u1E25 k\u1E63a\u1E47a\u1E43 sy\u0101t tasm\u0101c chubha\u1E43 durbalam eva nitya\u1E43 bala\u1E43 tu p\u0101pasya mahat sughoram taj j\u012Byate \u2019nyena \u015Bubhena kena sa\u1E43bodhicitta\u1E43 yadi n\u0101ma na sy\u0101t kalp\u0101n analp\u0101n pravicintayadbhir d\u1E5B\u1E63\u1E6Da\u1E43 mun\u012Bndrair hitam etad eva yati ki\u1E43cid ap\u016Brvam atra v\u0101cya\u1E43 a\u1E25 sukhenaiva sukha\u1E43 prav\u1E5Bddham utpl\u0101vayaty apramit\u0101\xF1 janaugh\u0101n bhavadu\u1E25kha\u015Bat\u0101ni tartuk\u0101mair api sattvavyasan\u0101ni hartuk\u0101mai\u1E25 bahusaukhya\u015Bat\u0101ni bhoktuk\u0101mair na vimocya\u1E43 hi sadaiva bodhicittam bhavac\u0101rakabandhano var\u0101ka\u1E25 sugat\u0101n\u0101\u1E43 suta ucyate k\u1E63a\u1E47ena sanar\u0101maralokavandan\u012Byo bhavati smodita eva bodhicitte a\u015Bucipratim\u0101m im\u0101\u1E43 g\u1E5Bh\u012Btv\u0101 jinaratnapratim\u0101\u1E43 karoty anargh\u0101m rasaj\u0101tam at\u012Bva vedhan\u012Bya\u1E43 sud\u1E5B\u1E0Dha\u1E43 g\u1E5Bh\u1E47ata bodhicittasa\u1E43j\xF1am supar\u012Bk\u1E63itam aprameyadh\u012Bbhir bahum\u016Blya\u1E43 jagadekas\u0101rthav\u0101hai\u1E25 gatipattanaviprav\u0101sa\u015B\u012Bl\u0101\u1E25 sud\u1E5B\u1E0Dha\u1E43 g\u1E5Bh\u1E47ata bodhicittaratnam kadal\u012Bva phala\u1E43 vih\u0101ya y\u0101ti k\u1E63ayam anyat ku\u015Bala\u1E43 hi sarvam eva satata\u1E43 phalati k\u1E63aya\u1E43 na y\u0101ti prasavaty eva tu bodhicittav\u1E5Bk\u1E63a\u1E25 k\u1E5Btv\u0101pi p\u0101p\u0101ni sud\u0101ru\u1E47\u0101ni yad\u0101\u015Bray\u0101d uttarati k\u1E63a\u1E47ena \u015B\u016Br\u0101\u015Braye\u1E47eva mah\u0101bhay\u0101ni n\u0101\u015Br\u012Byate tat katham aj\xF1asattvai\u1E25 yug\u0101ntak\u0101l\u0101nalavan mah\u0101nti p\u0101p\u0101ni yan nirdahati k\u1E63a\u1E47ena yasy\u0101nu\u015Ba\u1E43s\u0101n amit\u0101n uv\u0101ca maitreyan\u0101tha\u1E25 sudhan\u0101ya dh\u012Bm\u0101n tad bodhicitta\u1E43 dvividha\u1E43 vij\xF1\u0101tavya\u1E43 sam\u0101sata\u1E25 bodhipra\u1E47idhicitta\u1E43 ca bodhiprasth\u0101nam eva ca gantuk\u0101masya gantu\u015B ca yath\u0101 bheda\u1E25 prat\u012Byate tath\u0101 bhedo \u2019nayor j\xF1eyo y\u0101th\u0101sa\u1E43khyena pa\u1E47\u1E0Ditai\u1E25 bodhipra\u1E47idhicittasya sa\u1E43s\u0101re \u2019pi phala\u1E43 mahat na tv avicchinnapu\u1E47yatva\u1E43 yath\u0101 prasth\u0101na cetasa\u1E25 yata\u1E25 prabh\u1E5Bty aparyantasattvadh\u0101tupramok\u1E63a\u1E47e sam\u0101dad\u0101ti tac cittam anivartyena cetas\u0101 tata\u1E25 prabh\u1E5Bti suptasya pramattasy\u0101py aneka\u015Ba\u1E25 avicchinn\u0101\u1E25 pu\u1E47yadh\u0101r\u0101\u1E25 pravartante nabha\u1E25 sam\u0101\u1E25 ida\u1E43 sub\u0101hup\u1E5Bcch\u0101y\u0101\u1E43 sopapattikam uktav\u0101n h\u012Bn\u0101dhimuktisattv\u0101rtha\u1E43 svayam eva tath\u0101gata\u1E25 \u015Bira\u1E25\u015B\u016Bl\u0101ni sattv\u0101n\u0101\u1E43 n\u0101\u015Bay\u0101m\u012Bti cintayan aprameye\u1E47a pu\u1E47yena g\u1E5Bhyate sma hit\u0101\u015Baya\u1E25 kim ut\u0101pramita\u1E43 \u015B\u016Blam ekaikasya jih\u012Br\u1E63ata\u1E25 aprameyagu\u1E47a\u1E43 sattvam ekaika\u1E43 ca cik\u012Br\u1E63ata\u1E25 kasya m\u0101tu\u1E25 pitur v\u0101pi hit\u0101\u015Ba\u1E43seyam \u012Bd\u1E5B\u015B\u012B devat\u0101n\u0101m \u1E5B\u1E63\u012B\u1E47\u0101\u1E43 v\u0101 brahma\u1E47\u0101\u1E43 v\u0101 bhavi\u1E63yati te\u1E63\u0101m eva ca sattv\u0101n\u0101\u1E43 sv\u0101rthe \u2019py e\u1E63a manoratha\u1E25 notpannap\u016Brva\u1E25 svapne \u2019pi par\u0101rthe sa\u1E43bhava\u1E25 kuta\u1E25 sattvaratnavi\u015Be\u1E63o \u2019yam ap\u016Brvo j\u0101yate katham3 yat par\u0101rth\u0101\u015Bayo \u2019nye\u1E63\u0101\u1E43 na sv\u0101rthe \u2019py upaj\u0101yate jagad\u0101nandab\u012Bjasya jagaddu\u1E25khau\u1E63adhasya ca cittaratnasya yat pu\u1E47ya\u1E43 tat katha\u1E43 hi pram\u012Byat\u0101m hit\u0101\u015Ba\u1E43sanam\u0101tre\u1E47a buddhap\u016Bj\u0101 vi\u015Bi\u1E63yate ki\u1E43 puna\u1E25 sarvasattv\u0101n\u0101\u1E43 sarvasaukhy\u0101rtham udyam\u0101t du\u1E25kham ev\u0101bhidh\u0101vanti du\u1E25khani\u1E25sara\u1E47\u0101\u015Bay\u0101 sukhecchayaiva sa\u1E43moh\u0101t svasukha\u1E43 ghnanti \u015Batruvat yas te\u1E63\u0101\u1E43 sukhara\u1E45k\u0101\u1E47\u0101\u1E43 p\u012B\u1E0Dit\u0101n\u0101m aneka\u015Ba\u1E25 t\u1E5Bpti\u1E43 sarvasukhai\u1E25 kury\u0101t sarv\u0101\u1E25 p\u012B\u1E0D\u0101\u015B chinatti ca n\u0101\u015Bayaty api sa\u1E43moha\u1E43 s\u0101dhus tena sama\u1E25 kuta\u1E25 kuto v\u0101 t\u0101d\u1E5B\u015Ba\u1E43 mitra\u1E43 pu\u1E47ya\u1E43 v\u0101 t\u0101d\u1E5B\u015Ba\u1E43 kuta\u1E25 k\u1E5Bte ya\u1E25 pratikurv\u012Bta so \u2019pi t\u0101vat pra\u015Basyate avy\u0101p\u0101ritas\u0101dhus tu bodhisattva\u1E25 kim ucyat\u0101m katipayajanasattrad\u0101yaka\u1E25 ku\u015Balak\u1E5Bd ity abhip\u016Bjyate janai\u1E25 k\u1E63a\u1E47am a\u015Banakam\u0101trad\u0101nata\u1E25 saparibhava\u1E43 divas\u0101rdhay\u0101pan\u0101t kim u niravadhisattvasa\u1E43khyay\u0101 niravadhik\u0101lam anuprayacchata\u1E25 gaganajanaparik\u1E63ay\u0101k\u1E63aya\u1E43 sakalamanorathasa\u1E43prap\u016Bra\u1E47am iti sattrapatau jinasya putre kalu\u1E63a\u1E43 sve h\u1E5Bdaye karoti ya\u015B ca kalu\u1E63odayasa\u1E43khyay\u0101 sa kalp\u0101n narake\u1E63v \u0101vasat\u012Bti n\u0101tha \u0101ha atha yasya mana\u1E25 pras\u0101dam eti prasavet tasya tato \u2019dhika\u1E43 phalam mahat\u0101 hi balena p\u0101pakarma jinaputre\u1E63u \u015Bubha\u1E43 tv ayatnata\u1E254 te\u1E63\u0101\u1E43 \u015Bar\u012Br\u0101\u1E47i namaskaromi yatrodita\u1E43 tad varacittaratnam yatr\u0101pak\u0101ro \u2019pi sukh\u0101nubandh\u012B sukh\u0101kar\u0101\u1E43s t\u0101\u1E43 \u015Bara\u1E47a\u1E43 pray\u0101mi bodhicary\u0101vat\u0101re bodhicitt\u0101nu\u015Ba\u1E43sa\u1E25 n\u0101ma prathama\u1E25 pariccheda\u1E25 taccittaratnagraha\u1E47\u0101ya samyakp\u016Bj\u0101\u1E43 karomy e\u1E63a tath\u0101gat\u0101n\u0101m saddharmaratnasya ca nirmalasya buddh\u0101tmaj\u0101n\u0101\u1E43 ca gu\u1E47odadh\u012Bn\u0101m y\u0101vanti pu\u1E63p\u0101\u1E47i phal\u0101ni caiva bhai\u1E63ajyaj\u0101t\u0101ni ca y\u0101ni santi ratn\u0101ni y\u0101vanti ca santi loke jal\u0101ni ca svacchamanoram\u0101\u1E47i mah\u012Bdhar\u0101 ratnamay\u0101s tath\u0101nye vanaprade\u015B\u0101\u015B ca vivekaramy\u0101\u1E25 lat\u0101\u1E25 supu\u1E63p\u0101bhara\u1E47ojjval\u0101\u015B ca drum\u0101\u015B ca ye satphalanamra\u015B\u0101kh\u0101\u1E25 dev\u0101diloke\u1E63u ca gandhadh\u016Bp\u0101\u1E25 kalpadrum\u0101 ratnamay\u0101\u015B ca v\u1E5Bk\u1E63\u0101\u1E25 sar\u0101\u1E43si c\u0101mbhoruhabh\u016B\u1E63a\u1E47\u0101ni ha\u1E43sasvan\u0101tyantamanohar\u0101\u1E47i ak\u1E5B\u1E63\u1E6Daj\u0101t\u0101ni ca \u015Basyaj\u0101t\u0101ny any\u0101ni v\u0101 p\u016Bjyavibh\u016B\u1E63a\u1E47\u0101ni \u0101k\u0101\u015Badh\u0101tuprasar\u0101vadh\u012Bni sarv\u0101\u1E47y ap\u012Bm\u0101ny aparigrah\u0101\u1E47i \u0101d\u0101ya buddhy\u0101 munipu\u1E43gavebhyo niry\u0101tay\u0101my e\u1E63a saputrakebhya\u1E25 g\u1E5Bh\u1E47antu tan me varadak\u1E63i\u1E47\u012By\u0101 mah\u0101k\u1E5Bp\u0101 m\u0101m anukampam\u0101n\u0101\u1E25 apu\u1E47yav\u0101n asmi mah\u0101daridra\u1E25 p\u016Bj\u0101rtham anyan mama n\u0101sti ki\u1E43cit ato mam\u0101rth\u0101ya par\u0101rthacitt\u0101 g\u1E5Bh\u1E47antu n\u0101th\u0101 idam \u0101tma\u015Bakty\u0101 dad\u0101mi c\u0101tm\u0101nam aha\u1E43 jinebhya\u1E25 sarve\u1E47a sarva\u1E43 ca tad\u0101tmajebhya\u1E25 parigraha\u1E43 me kurut\u0101grasattv\u0101\u1E25 yu\u1E63m\u0101su d\u0101satvam upaimi bhakty\u0101 parigrahe\u1E47\u0101smi bhavatk\u1E5Btena nirbh\u012Br bhave sattvahita\u1E43 karomi p\u016Brva\u1E43 ca p\u0101pa\u1E43 samatikram\u0101mi n\u0101nyac ca p\u0101pa\u1E43 prakaromi bh\u016Bya\u1E25 ratnojjvalastambhamanorame\u1E63u mukt\u0101mayodbh\u0101sivit\u0101nake\u1E63u svacchojjvalasph\u0101\u1E6Dikaku\u1E6D\u1E6Dime\u1E63u sugandhi\u1E63u sn\u0101nag\u1E5Bhe\u1E63u te\u1E63u manoj\xF1agandhodakapu\u1E63pap\u016Br\u1E47ai\u1E25 kumbhair mah\u0101ratnamayair anekai\u1E25 sn\u0101na\u1E43 karomy e\u1E63a tath\u0101gat\u0101n\u0101\u1E43 tad\u0101tmaj\u0101n\u0101\u1E43 ca sag\u012Btav\u0101dyam pradh\u016Bpitair dhautamalair atulyair vastrai\u015B ca te\u1E63\u0101\u1E43 tanum unm\u1E5B\u015B\u0101mi tata\u1E25 surakt\u0101ni sudh\u016Bpit\u0101ni dad\u0101mi tebhyo varac\u012Bvar\u0101\u1E47i divyair m\u1E5Bdu\u015Blak\u1E63\u1E47avicitra\u015Bobhair vastrair ala\u1E43k\u0101ravarai\u015B ca tais tai\u1E25 samantabhadr\u0101jitama\xF1jugho\u1E63aloke\u015Bvar\u0101d\u012Bn api ma\u1E47\u1E0Day\u0101mi sarvatris\u0101hasravis\u0101rigandhair gandhottamais t\u0101n anulepay\u0101mi s\u016Bttaptas\u016Bnm\u1E5B\u1E63\u1E6Dasudhautahemaprabhojjval\u0101n sarvamun\u012Bndrak\u0101y\u0101n m\u0101nd\u0101ravend\u012Bvaramallik\u0101dyai\u1E25 sarvai\u1E25 sugandhai\u1E25 kusumair manoj\xF1ai\u1E25 abhyarcay\u0101my arcyatam\u0101n mun\u012Bndr\u0101n sragbhi\u015B ca sa\u1E43sth\u0101namanoram\u0101bhi\u1E25 sph\u012Btasphuradgandhamanoramai\u015B ca t\u0101n dh\u016Bpameghair upadh\u016Bpay\u0101mi bhojyai\u015B ca sv\u0101dyair vividhai\u015B ca peyais tebhyo nivedya\u1E43 ca niveday\u0101mi ratnaprad\u012Bp\u0101\u1E43\u015B ca niveday\u0101mi suvar\u1E47apadme\u1E63u nivi\u1E63\u1E6Dapa\u1E45kt\u012Bn gandhopalipte\u1E63u ca ku\u1E6D\u1E6Dime\u1E63u kir\u0101mi pu\u1E63paprakar\u0101n1 manoj\xF1\u0101n pralambamukt\u0101ma\u1E47ih\u0101ra\u015Bobh\u0101n \u0101bh\u0101svar\u0101n digmukhama\u1E47\u1E0Dan\u0101\u1E43s t\u0101n vim\u0101namegh\u0101n stutig\u012Btaramy\u0101n maitr\u012Bmayebhyo \u2019pi niveday\u0101mi suvar\u1E47ada\u1E47\u1E0Dai\u1E25 kaman\u012Byar\u016Bpai\u1E25 sa\u1E43saktamukt\u0101ni samucchrit\u0101ni pradh\u0101ray\u0101my e\u1E63a mah\u0101mun\u012Bn\u0101\u1E43 ratn\u0101tapatr\u0101\u1E47y ati\u015Bobhan\u0101ni ata\u1E25 para\u1E43 prati\u1E63\u1E6Dhant\u0101\u1E43 p\u016Bj\u0101megh\u0101 manoram\u0101\u1E25 t\u016Bryasa\u1E43g\u012Btimegh\u0101\u015B ca sarvasattvaprahar\u1E63a\u1E47\u0101\u1E25 sarvasaddharmaratne\u1E63u caitye\u1E63u pratim\u0101su ca pu\u1E63paratn\u0101divar\u1E63\u0101\u015B ca pravartant\u0101\u1E43 nirantaram ma\xF1jugho\u1E63aprabh\u1E5Btaya\u1E25 p\u016Bjayanti yath\u0101 jin\u0101n tath\u0101 tath\u0101gat\u0101n n\u0101th\u0101n saputr\u0101n p\u016Bjay\u0101my aham svar\u0101\u1E45gas\u0101garai\u1E25 stotrai\u1E25 staumi c\u0101ha\u1E43 gu\u1E47odadh\u012Bn stutisa\u1E43g\u012Btimegh\u0101\u015B ca sa\u1E43bhavantv e\u1E63v ananyath\u0101 sarvak\u1E63etr\u0101\u1E47usa\u1E43khyai\u015B ca pra\u1E47\u0101mai\u1E25 pra\u1E47am\u0101my aham sarvatr\u0101dhvagat\u0101n buddh\u0101n sahadharmaga\u1E47ottam\u0101n sarvacaity\u0101ni vande \u2019ha\u1E43 bodhisattv\u0101\u015Bray\u0101\u1E43s tath\u0101 nama\u1E25 karomy up\u0101dhy\u0101y\u0101n abhivandy\u0101n yat\u012B\u1E43s tath\u0101 buddha\u1E43 gacch\u0101mi \u015Bara\u1E47a\u1E43 y\u0101vad \u0101 bodhima\u1E47\u1E0Data\u1E25 dharma\u1E43 gacch\u0101mi \u015Bara\u1E47a\u1E43 bodhisattvaga\u1E47a\u1E43 tath\u0101 vij\xF1\u0101pay\u0101mi sa\u1E43buddh\u0101n sarvadik\u1E63u vyavasthit\u0101n mah\u0101k\u0101ru\u1E47ik\u0101\u1E43\u015B c\u0101pi bodhisattv\u0101n k\u1E5Bt\u0101\xF1jali\u1E25 an\u0101dimati sa\u1E43s\u0101re janmany atraiva v\u0101 puna\u1E25 yan may\u0101 pa\u015Bun\u0101 p\u0101pa\u1E43 k\u1E5Bta\u1E43 k\u0101ritam eva v\u0101 yac c\u0101numodita\u1E43 ki\u1E43cid \u0101tmagh\u0101t\u0101ya mohata\u1E25 tad atyaya\u1E43 de\u015Bay\u0101mi pa\u015Bc\u0101tt\u0101pena t\u0101pita\u1E25 ratnatraye \u2019pak\u0101ro yo m\u0101t\u0101pit\u1E5B\u1E63u v\u0101 may\u0101 guru\u1E63v anye\u1E63u v\u0101 k\u1E63ep\u0101t k\u0101yav\u0101gbuddhibhi\u1E25 k\u1E5Bta\u1E25 anekado\u1E63adu\u1E63\u1E6Dena may\u0101 p\u0101pena n\u0101yak\u0101\u1E25 yat k\u1E5Bta\u1E43 d\u0101ru\u1E47a\u1E43 p\u0101pa\u1E43 tat sarva\u1E43 de\u015Bay\u0101my aham katha\u1E43 ca ni\u1E25sar\u0101my asm\u0101t paritr\u0101yata satvaram m\u0101 mam\u0101k\u1E63\u012B\u1E47ap\u0101pasya mara\u1E47a\u1E43 \u015B\u012Bghram e\u1E63yati k\u1E5Bt\u0101k\u1E5Bt\u0101par\u012Bk\u1E63o \u2019ya\u1E43 m\u1E5Btyur vi\u015Brambhagh\u0101taka\u1E25 svasth\u0101svasthair avi\u015Bv\u0101sya \u0101kasmikamah\u0101\u015Bani\u1E25 priy\u0101priyanimittena p\u0101pa\u1E43 k\u1E5Btam anekadh\u0101 sarvam uts\u1E5Bjya gantavyam iti na j\xF1\u0101tam \u012Bd\u1E5B\u015Bam apriy\u0101 na bhavi\u1E63yanti priyo me na bhavi\u1E63yati aha\u1E43 ca na bhavi\u1E63y\u0101mi sarva\u1E43 ca na bhavi\u1E63yati 3 tattatsmara\u1E47at\u0101\u1E43 y\u0101ti yadyadvastvanubh\u016Byate svapn\u0101nubh\u016Btavatsarva\u1E43 gata\u1E43 na punar \u012Bk\u1E63yate ihaiva ti\u1E63\u1E6Dhatas t\u0101vad gat\u0101 naike priy\u0101priy\u0101\u1E25 tannimitta\u1E43 tu yat p\u0101pa\u1E43 tat sthita\u1E43 ghoram agrata\u1E25 evam \u0101gantuko \u2019sm\u012Bti na may\u0101 pratyavek\u1E63itam moh\u0101nunayavidve\u1E63ai\u1E25 k\u1E5Bta\u1E43 p\u0101pam anekadh\u0101 r\u0101tri\u1E43divam avi\u015Br\u0101mam \u0101yu\u1E63o vardhate vyaya\u1E25 \u0101yasya c\u0101gamo n\u0101sti na mari\u1E63y\u0101mi ki\u1E43 nv aham iha \u015Bayy\u0101gaten\u0101pi bandhumadhye \u2019pi ti\u1E63\u1E6Dhat\u0101 mayaivaikena so\u1E0Dhavy\u0101 marmacched\u0101divedan\u0101 yamad\u016Btair g\u1E5Bh\u012Btasya kuto bandhu\u1E25 kuta\u1E25 suh\u1E5Bt pu\u1E47yam eka\u1E43 tad\u0101 tr\u0101\u1E47a\u1E43 may\u0101 tac ca na sevitam anityaj\u012Bvit\u0101sa\u1E45g\u0101d ida\u1E43 bhayam aj\u0101nat\u0101 pramattena may\u0101 n\u0101th\u0101 bahu p\u0101pam4 up\u0101rjitam a\u1E45gacched\u0101rtham apy adya n\u012Byam\u0101no vi\u015Bu\u1E63yati pip\u0101sito d\u012Bnad\u1E5B\u1E63\u1E6Dir anyad evek\u1E63ate jagat ki\u1E43 punar bhairav\u0101k\u0101rair yamad\u016Btair adhi\u1E63\u1E6Dhita\u1E25 mah\u0101tr\u0101sajvaragrasta\u1E25 pur\u012B\u1E63otsargave\u1E63\u1E6Dita\u1E25 k\u0101tarair d\u1E5B\u1E63\u1E6Dip\u0101tai\u015B ca tr\u0101\u1E47\u0101nve\u1E63\u012B caturdi\u015Bam ko me mah\u0101bhay\u0101d asm\u0101t s\u0101dhus tr\u0101\u1E47a\u1E43 bhavi\u1E63yati5 tr\u0101\u1E47a\u015B\u016Bny\u0101 di\u015Bo d\u1E5B\u1E63\u1E6Dv\u0101 puna\u1E25 sa\u1E43moham \u0101gata\u1E25 tad\u0101ha\u1E43 ki\u1E43 kari\u1E63y\u0101mi tasmin sth\u0101ne mah\u0101bhaye adyaiva \u015Bara\u1E47a\u1E43 y\u0101mi jagann\u0101th\u0101n mah\u0101bal\u0101n jagadrak\u1E63\u0101rtham udyukt\u0101n sarvatr\u0101sahar\u0101n jin\u0101n tai\u015B c\u0101py adhigata\u1E43 dharma\u1E43 sa\u1E43s\u0101rabhayan\u0101\u015Banam \u015Bara\u1E47a\u1E43 y\u0101mi bh\u0101vena bodhisattvaga\u1E47a\u1E43 tath\u0101 samantabhadr\u0101y\u0101tm\u0101na\u1E43 dad\u0101mi bhayavihvala\u1E25 puna\u015B ca ma\xF1jugho\u1E63\u0101ya dad\u0101my \u0101tm\u0101nam \u0101tman\u0101 ta\u1E43 c\u0101valokita\u1E43 n\u0101tha\u1E43 k\u1E5Bp\u0101vy\u0101kulac\u0101ri\u1E47am viraumy \u0101rtarava\u1E43 bh\u012Bta\u1E25 sa m\u0101\u1E43 rak\u1E63atu p\u0101pinam \u0101ryam \u0101k\u0101\u015Bagarbha\u1E43 ca k\u1E63itigarbha\u1E43 ca bh\u0101vata\u1E25 sarv\u0101n mah\u0101k\u1E5Bp\u0101\u1E43\u015B c\u0101pi tr\u0101\u1E47\u0101nve\u1E63\u012B viraumy aham ya\u1E43 d\u1E5B\u1E63\u1E6Dvaiva6 ca sa\u1E43trast\u0101\u1E25 pal\u0101yante caturdi\u015Bam yamad\u016Bt\u0101dayo du\u1E63\u1E6D\u0101s ta\u1E43 namasy\u0101mi vajri\u1E47am at\u012Btya yu\u1E63madvacana\u1E43 s\u0101\u1E43prata\u1E43 bhayadar\u015Ban\u0101t \u015Bara\u1E47a\u1E43 y\u0101mi vo bh\u012Bto bhaya\u1E43 n\u0101\u015Bayata drutam itvaravy\u0101dhibh\u012Bto \u2019pi vaidyav\u0101kya\u1E43 na la\u1E45ghayet kim u vy\u0101dhi\u015Batair grasta\u015B caturbhi\u015B caturuttarai\u1E25 eken\u0101pi yata\u1E25 sarve jambudv\u012Bpagat\u0101 nar\u0101\u1E25 na\u015Byanti ye\u1E63\u0101\u1E43 bhai\u1E63ajya\u1E43 sarvadik\u1E63u na labhyate tatra sarvaj\xF1avaidyasya sarva\u015Baly\u0101pah\u0101ri\u1E47a\u1E25 v\u0101kyam ulla\u1E45ghay\u0101m\u012Bti dhig m\u0101m atyantamohitam atyapramattas ti\u1E63\u1E6Dh\u0101mi prap\u0101te\u1E63v itare\u1E63v api kim u yojanas\u0101hasre prap\u0101te d\u012Brghak\u0101like adyaiva mara\u1E47a\u1E43 naiti na yukt\u0101 me sukh\u0101sik\u0101 ava\u015Byam eti s\u0101 vel\u0101 na bhavi\u1E63y\u0101my aha\u1E43 yad\u0101 abhaya\u1E43 kena me datta\u1E43 ni\u1E25sari\u1E63y\u0101mi v\u0101 katham ava\u015Bya\u1E43 na bhavi\u1E63y\u0101mi kasm\u0101n me susthita\u1E43 mana\u1E25 p\u016Brv\u0101nubh\u016Btana\u1E63\u1E6Debhya\u1E25 ki\u1E43 me s\u0101ram avasthitam ye\u1E63u me \u2019bhinivi\u1E63\u1E6Dena gur\u016B\u1E47\u0101\u1E43 la\u1E45ghita\u1E43 vaca\u1E25 j\u012Bvalokam ima\u1E43 tyaktv\u0101 bandh\u016Bn paricit\u0101\u1E43s tath\u0101 ek\u0101k\u012B kv\u0101pi y\u0101sy\u0101mi ki\u1E43 me sarvai\u1E25 priy\u0101priyai\u1E25 iyam eva tu me cint\u0101 yukt\u0101 r\u0101trin diva\u1E43 sad\u0101 a\u015Bubh\u0101n niyata\u1E43 du\u1E25kha\u1E43 ni\u1E25sareya\u1E43 tata\u1E25 katham may\u0101 b\u0101lena m\u016B\u1E0Dhena yat ki\u1E43cit p\u0101pam \u0101citam prak\u1E5Bty\u0101 yac ca s\u0101vadya\u1E43 praj\xF1apty\u0101vadyam eva ca tatsarva\u1E43 de\u015Bay\u0101my e\u1E63a n\u0101th\u0101n\u0101m agrata\u1E25 sthita\u1E25 k\u1E5Bt\u0101\xF1jalir du\u1E25khabh\u012Bta\u1E25 pra\u1E47ipatya puna\u1E25 puna\u1E25 atyayam atyayatvena pratig\u1E5Bh\u1E47antu n\u0101yak\u0101\u1E25 na bhadrakam ida\u1E43 n\u0101th\u0101 na karttavya\u1E43 punar may\u0101 bodhicary\u0101vat\u0101re p\u0101pade\u015Ban\u0101 dvit\u012Bya\u1E25 pariccheda\u1E25 ap\u0101yadu\u1E25khavi\u015Br\u0101ma\u1E43 sarvasattvai\u1E25 k\u1E5Bta\u1E43 \u015Bubham anumode pramodena sukha\u1E43 ti\u1E63\u1E6Dhantu du\u1E25khit\u0101\u1E25 sa\u1E43s\u0101radu\u1E25khanirmok\u1E63am anumode \u015Bar\u012Bri\u1E47\u0101m bodhisattvatvabuddhatvam anumode ca t\u0101yin\u0101m cittotp\u0101dasamudr\u0101\u1E43\u015B ca sarvasattvasukh\u0101vah\u0101n sarvasattvahit\u0101dh\u0101n\u0101n anumode ca \u015B\u0101sin\u0101m pu\u1E47y\u0101numodan\u0101 sarv\u0101su dik\u1E63u sa\u1E43buddh\u0101n pr\u0101rthay\u0101mi k\u1E5Bt\u0101\xF1jali\u1E25 dharmaprad\u012Bpa\u1E43 kurvantu moh\u0101d du\u1E25khaprap\u0101tin\u0101m adhyo\u1E63a\u1E47\u0101 nirv\u0101tuk\u0101m\u0101\u1E43\u015B ca jin\u0101n y\u0101cay\u0101mi k\u1E5Bt\u0101\xF1jali\u1E25 kalp\u0101n anant\u0101\u1E43s ti\u1E63\u1E6Dhantu m\u0101 bh\u016Bd andham ida\u1E43 jagat y\u0101can\u0101 eva\u1E43 sarvam ida\u1E43 k\u1E5Btv\u0101 yan may\u0101s\u0101dita\u1E43 \u015Bubham tena sy\u0101\u1E43 sarvasattv\u0101n\u0101\u1E43 sarvadu\u1E25khapra\u015B\u0101ntik\u1E5Bt gl\u0101n\u0101n\u0101m asmi bhai\u1E63ajya\u1E43 bhaveya\u1E43 vaidya eva ca tadupasth\u0101yaka\u015B caiva y\u0101vad rog\u0101punarbhava\u1E25 k\u1E63utpip\u0101s\u0101vyath\u0101\u1E43 hany\u0101m annap\u0101napravar\u1E63a\u1E47ai\u1E25 durbhik\u1E63\u0101ntarakalpe\u1E63u bhaveya\u1E43 p\u0101nabhojanam daridr\u0101\u1E47\u0101\u1E43 ca sattv\u0101n\u0101\u1E43 nidhi\u1E25 sy\u0101m aham ak\u1E63aya\u1E25 n\u0101nopakara\u1E47\u0101k\u0101rair upati\u1E63\u1E6Dheyam agrata\u1E25 \u0101tmabh\u0101v\u0101\u1E43s tath\u0101 bhog\u0101n sarvatryadhvagata\u1E43 \u015Bubham nirapek\u1E63as tyaj\u0101my e\u1E63a sarvasattv\u0101rthasiddhaye sarvaty\u0101ga\u015B ca nirv\u0101\u1E47a\u1E43 nirv\u0101\u1E47\u0101rthi ca me mana\u1E25 tyaktavya\u1E43 cen may\u0101 sarva\u1E43 vara\u1E43 sattve\u1E63u d\u012Byat\u0101m yath\u0101sukh\u012Bk\u1E5Bta\u015B1 c\u0101tm\u0101 may\u0101ya\u1E43 sarvadehin\u0101m ghnantu nindantu v\u0101 nityam \u0101kirantu ca p\u0101\u1E43subhi\u1E25 kr\u012B\u1E0Dantu mama k\u0101yena hasantu vilasantu ca dattas tebhyo may\u0101 k\u0101ya\u015B cintay\u0101 ki\u1E43 mam\u0101nay\u0101 k\u0101rayantu ca karm\u0101\u1E47i y\u0101ni te\u1E63\u0101\u1E43 sukh\u0101vaham anartha\u1E25 kasyacin m\u0101 bh\u016Bn m\u0101m \u0101lambya kad\u0101 cana ye\u1E63\u0101\u1E43 kruddh\u0101prasann\u01012 v\u0101 m\u0101m \u0101lambya matir bhavet te\u1E63\u0101\u1E43 sa eva3 hetu\u1E25 sy\u0101n nitya\u1E43 sarv\u0101rthasiddhaye4 abhy\u0101khy\u0101syanti m\u0101\u1E43 ye ca ye c\u0101nye \u2019py apak\u0101ri\u1E47a\u1E25 utpr\u0101sak\u0101s tath\u0101nye \u2019pi5 sarve syur bodhibh\u0101gina\u1E25 an\u0101th\u0101n\u0101m aha\u1E43 n\u0101tha\u1E25 s\u0101rthav\u0101ha\u015B ca y\u0101yin\u0101m p\u0101reps\u016Bn\u0101\u1E43 ca naubh\u016Bta\u1E25 setu\u1E25 sa\u1E43krama eva ca d\u012Bp\u0101rthin\u0101m aha\u1E43 d\u012Bpa\u1E25 \u015Bayy\u0101 \u015Bayy\u0101rthin\u0101m aham d\u0101s\u0101rthin\u0101m aha\u1E43 d\u0101so bhaveya\u1E43 sarvadehin\u0101m cint\u0101ma\u1E47ir bhadragha\u1E6Da\u1E25 siddhavidy\u0101 mahau\u1E63adhi\u1E25 bhaveya\u1E43 kalpav\u1E5Bk\u1E63a\u015B ca k\u0101madhenu\u015B ca dehin\u0101m p\u1E5Bthivy\u0101d\u012Bni bh\u016Bt\u0101ni ni\u1E25\u015Be\u1E63\u0101k\u0101\u015Bav\u0101sin\u0101m sattv\u0101n\u0101m apramey\u0101\u1E47\u0101\u1E43 yath\u0101 bhog\u0101ny anekadh\u0101 evam \u0101k\u0101\u015Bani\u1E63\u1E6Dhasya sattvadh\u0101tor anekadh\u0101 bhaveyam upaj\u012Bvyo \u2019ha\u1E43 y\u0101vat sarve na nirv\u1E5Bt\u0101\u1E25 yath\u0101 g\u1E5Bh\u012Bta\u1E43 sugatair bodhicitta\u1E43 pur\u0101tanai\u1E25 te bodhisattva\u015Bik\u1E63\u0101y\u0101m \u0101nup\u016Brvy\u01016 yath\u0101 sthit\u0101\u1E25 tadvad utp\u0101day\u0101my e\u1E63a bodhicitta\u1E43 jagaddhite tadvad eva ca t\u0101\u1E25 \u015Bik\u1E63\u0101\u1E25 \u015Bik\u1E63i\u1E63y\u0101mi yath\u0101 kramam eva\u1E43 g\u1E5Bh\u012Btv\u0101 matim\u0101n bodhicitta\u1E43 pras\u0101data\u1E25 puna\u1E25 p\u1E5B\u1E63\u1E6Dhasya pu\u1E63\u1E6Dyartha\u1E43 cittam eva\u1E43 prahar\u1E63ayet adya me saphala\u1E43 janma sulabdho m\u0101nu\u1E63o bhava\u1E25 adya buddhakule j\u0101to buddhaputro \u2019smi s\u0101mpratam tath\u0101dhun\u0101 may\u0101 k\u0101rya\u1E43 svakulocitak\u0101ri\u1E47\u0101m nirmalasya kulasy\u0101sya kala\u1E45ko na bhaved yath\u0101 andha\u1E25 sa\u1E43k\u0101rak\u016B\u1E6Debhyo yath\u0101 ratnam av\u0101pnuy\u0101t tath\u0101 katha\u1E43cid apy etad bodhicitta\u1E43 mamoditam jaganm\u1E5Btyuvin\u0101\u015B\u0101ya j\u0101tam etad ras\u0101yanam jagadd\u0101ridrya\u015Bamana\u1E43 nidh\u0101nam idam ak\u1E63ayam jagadvy\u0101dhipra\u015Bamana\u1E43 bhai\u1E63ajyam idam uttamam bhav\u0101dhvabhrama\u1E47a\u015Br\u0101ntajagadvi\u015Br\u0101map\u0101dapa\u1E25 durgatyuttara\u1E47e setu\u1E25 s\u0101m\u0101nya\u1E25 sarvay\u0101yin\u0101m jagatkle\u015Bopa\u015Bamana udita\u015B cittacandram\u0101\u1E25 jagadaj\xF1\u0101natimiraprots\u0101ra\u1E47amah\u0101ravi\u1E25 saddharmak\u1E63\u012Bramathan\u0101n navan\u012Bta\u1E43 samutthitam sukhabhogabubhuk\u1E63itasya v\u0101 janas\u0101rthasya bhav\u0101dhvac\u0101ri\u1E47a\u1E25 sukhasattram ida\u1E43 hy upasthita\u1E43 sakal\u0101bhy\u0101gatasattvatarpa\u1E47am jagad adya nimantrita\u1E43 may\u0101 sugatatvena sukhena c\u0101ntar\u0101 purata\u1E25 khalu sarvat\u0101yin\u0101m abhinandantu sur\u0101sur\u0101daya\u1E25 bodhicary\u0101vat\u0101re bodhicittaparigraho n\u0101ma t\u1E5Bt\u012Bya\u1E25 pariccheda\u1E25 eva\u1E43 g\u1E5Bh\u012Btv\u0101 sud\u1E5B\u1E0Dha\u1E43 bodhicitta\u1E43 jin\u0101tmaja\u1E25 \u015Bik\u1E63\u0101natikrame yatna\u1E43 kury\u0101n nityam atandrita\u1E25 sahas\u0101 yat sam\u0101rabdha\u1E43 samyag yad avic\u0101ritam tatra kury\u0101n na vety eva\u1E43 pratij\xF1\u0101y\u0101pi yujyate vic\u0101rita\u1E43 tu yad buddhair mah\u0101pr\u0101j\xF1ai\u015B ca tatsutai\u1E25 may\u0101pi ca yath\u0101\u015Bakti tatra ki\u1E43 parilambyate yadi caiva\u1E43 pratij\xF1\u0101ya s\u0101dhayeya\u1E43 na karma\u1E47\u0101 et\u0101\u1E43 sarv\u0101\u1E43 visa\u1E43v\u0101dya k\u0101 gatir me bhavi\u1E63yati manas\u0101 cintayitv\u0101pi yo na dady\u0101t punar nara\u1E25 sa preto bhavat\u012Bty uktam alpam\u0101tre \u2019pi vastuni kim ut\u0101nuttara\u1E43 saukhyam uccair uddhu\u1E63ya bh\u0101vata\u1E25 jagatsarva\u1E43 visa\u1E43v\u0101dya k\u0101 gatir me bhavi\u1E63yati vetti sarvaj\xF1a evait\u0101m acinty\u0101\u1E43 karma\u1E47o gatim yad bodhicittaty\u0101ge \u2019pi mocayaty eva t\u0101\u1E43 nar\u0101n bodhisattvasya tenaiva\u1E43 sarv\u0101pattir gar\u012Byas\u012B yasm\u0101d \u0101padyam\u0101no \u2019sau sarvasattv\u0101rthah\u0101nik\u1E5Bt yo \u2019py anya\u1E25 k\u1E63a\u1E47am apy asya pu\u1E47yavighna\u1E43 kari\u1E63yati tasya durgatiparyanto n\u0101sti sattv\u0101rthagh\u0101tina\u1E25 ekasy\u0101pi hi sattvasya hita\u1E43 hatv\u0101 hato bhavet a\u015Be\u1E63\u0101k\u0101\u015Baparyantav\u0101sin\u0101\u1E43 kim u dehin\u0101m evam \u0101pattibalato bodhicittabalena ca dol\u0101yam\u0101na\u1E25 sa\u1E43s\u0101re bh\u016Bmipr\u0101pta\u015B cir\u0101yate tasm\u0101d yath\u0101pratij\xF1\u0101ta\u1E43 s\u0101dhan\u012Bya\u1E43 may\u0101dar\u0101t n\u0101dya cet kriyate yatnas talen\u0101smi tala\u1E43 gata\u1E25 apramey\u0101 gat\u0101 buddh\u0101\u1E25 sarvasattvagave\u1E63ak\u0101\u1E25 nai\u1E63\u0101m aha\u1E43 svado\u1E63e\u1E47a cikits\u0101gocara\u1E43 gata\u1E25 ady\u0101pi cet tathaiva sy\u0101\u1E43 yathaiv\u0101ha\u1E43 puna\u1E25 puna\u1E25 durgativy\u0101dhimara\u1E47acchedabhed\u0101dy av\u0101pnuy\u0101m kad\u0101 tath\u0101gatotp\u0101da\u1E43 \u015Braddh\u0101\u1E43 m\u0101nu\u1E63yam eva ca ku\u015Bal\u0101bhy\u0101sayogyatvam eva\u1E43 lapsye \u2019tidurlabham \u0101rogya\u1E43 divasa\u1E43 ceda\u1E43 sabhakta\u1E43 nirupadravam \u0101yu\u1E25 k\u1E63a\u1E47a\u1E43 visa\u1E43v\u0101di k\u0101yo y\u0101citakopama\u1E251 na h\u012Bd\u1E5B\u015Bair maccaritair m\u0101nu\u1E63ya\u1E43 labhyate puna\u1E25 alabhyam\u0101ne m\u0101nu\u1E63ye p\u0101pam eva kuta\u1E25 \u015Bubham yad\u0101 ku\u015Balayogyo \u2019pi ku\u015Bala\u1E43 na karomy aham ap\u0101yadu\u1E25khai\u1E25 sa\u1E43m\u016B\u1E0Dha\u1E25 ki\u1E43 kari\u1E63y\u0101my aha\u1E43 tad\u0101 akurvata\u015B ca ku\u015Bala\u1E43 p\u0101pa\u1E43 c\u0101py upacinvata\u1E25 hata\u1E25 sugata\u015Babdo \u2019pi kalpako\u1E6Di\u015Batair api ata ev\u0101ha bhagav\u0101n m\u0101nu\u1E63am atidurlabham mah\u0101r\u1E47avayugacchidrak\u016Brmagr\u012Bv\u0101rpa\u1E47opamam ekak\u1E63a\u1E47ak\u1E5Bt\u0101t p\u0101p\u0101d av\u012Bcau kalpam \u0101syate an\u0101dik\u0101lopacit\u0101t p\u0101p\u0101t k\u0101 sugatau kath\u0101 na ca tanm\u0101tram ev\u0101sau vedayitv\u0101 vimucyate tasm\u0101t tadvedayann eva p\u0101pam anyat pras\u016Byate n\u0101ta\u1E25 par\u0101 va\xF1can\u0101sti na ca moho \u2019sty ata\u1E25 para\u1E25 yad \u012Bd\u1E5B\u015Ba\u1E43 k\u1E63a\u1E47a\u1E43 pr\u0101pya n\u0101bhyasta\u1E43 ku\u015Bala\u1E43 may\u0101 yadi caiva\u1E43 vim\u1E5B\u1E63y\u0101mi2 puna\u1E25 s\u012Bd\u0101mi mohita\u1E25 \u015Boci\u1E63y\u0101mi cira\u1E43 bh\u016Byo yamad\u016Btai\u1E25 pracodita\u1E25 cira\u1E43 dhak\u1E63yati me k\u0101ya\u1E43 n\u0101rak\u0101gni\u1E25 sudu\u1E25saha\u1E25 pa\u015Bc\u0101tt\u0101p\u0101nala\u015B citta\u1E43 cira\u1E43 dhak\u1E63yaty ani\u015Bcitam katha\u1E43cid api sa\u1E43pr\u0101pto hitabh\u016Bmi\u1E43 sudurlabh\u0101m j\u0101nann api ca n\u012Bye \u2019ha\u1E43 t\u0101n eva narak\u0101n puna\u1E25 atra me cetan\u0101 n\u0101sti mantrair iva vimohita\u1E25 na j\u0101ne kena muhy\u0101mi ko \u2019tr\u0101ntar mama ti\u1E63\u1E6Dhati hastap\u0101d\u0101dirahit\u0101s t\u1E5B\u1E63\u1E47\u0101dve\u1E63\u0101di\u015Batrava\u1E25 na \u015B\u016Br\u0101 na ca te pr\u0101j\xF1\u0101\u1E25 katha\u1E43 d\u0101s\u012Bk\u1E5Bto \u2019smi tai\u1E25 maccitt\u0101vasthit\u0101 eva ghnanti m\u0101m eva susthit\u0101\u1E25 tatr\u0101py aha\u1E43 na kupy\u0101mi dhigasth\u0101nasahi\u1E63\u1E47ut\u0101m sarve dev\u0101 manu\u1E63y\u0101\u015B ca yadi syur mama \u015Batrava\u1E25 te \u2019pi n\u0101v\u012Bcika\u1E43 vahni\u1E43 samud\u0101nayitu\u1E43 k\u1E63am\u0101\u1E25 meror api yad\u0101 sa\u1E45g\u0101n na bhasm\u0101py upalabhyate k\u1E63a\u1E47\u0101t k\u1E63ipanti m\u0101\u1E43 tatra balina\u1E25 kle\u015Ba\u015Batrava\u1E25 na hi sarv\u0101nya\u015Batr\u016B\u1E47\u0101\u1E43 d\u012Brgham \u0101yur ap\u012Bd\u1E5B\u015Bam an\u0101dyanta\u1E43 mah\u0101d\u012Brgha\u1E43 yan mama kle\u015Bavairi\u1E47\u0101m sarve hit\u0101ya kalpante \u0101nuk\u016Blyena sevit\u0101\u1E25 sevyam\u0101n\u0101s tv am\u012B kle\u015B\u0101\u1E25 sutar\u0101\u1E43 du\u1E25khak\u0101rak\u0101\u1E25 iti satatad\u012Brghavairi\u1E63u vyasanaughaprasavaikahetu\u1E63u h\u1E5Bdaye nivasatsu nirbhaya\u1E43 mama sa\u1E43s\u0101rarati\u1E25 katha\u1E43 bhavet bhavac\u0101rakap\u0101lak\u0101 ime narak\u0101di\u1E63v api vadhyagh\u0101tak\u0101\u1E25 mative\u015Bmani lobhapa\xF1jare yadi ti\u1E63\u1E6Dhanti kuta\u1E25 sukha\u1E43 mama tasm\u0101n na t\u0101vad aham atra dhura\u1E43 k\u1E63ip\u0101mi y\u0101van na \u015Batrava ime nihat\u0101\u1E25 samak\u1E63am svalpe \u2019pi t\u0101vad apak\u0101ri\u1E47i baddharo\u1E63\u0101 m\u0101nonnat\u0101s tam anihatya na y\u0101nti nidr\u0101m prak\u1E5Btimara\u1E47adu\u1E25khit\u0101ndhak\u0101r\u0101n ra\u1E47a\u015Birasi prasabha\u1E43 nihantum ugr\u0101\u1E25 aga\u1E47ita\u015Bara\u015Baktigh\u0101tadu\u1E25kh\u0101 na vimukhat\u0101m upay\u0101nty as\u0101dhayitv\u0101 kim uta satatasarvadu\u1E25khahet\u016Bn prak\u1E5Btirip\u016Bn upahantum udyatasya bhavati mama vi\u1E63\u0101dadainyam adya vyasana\u015Batair api kena hetun\u0101 vai ak\u0101ra\u1E47enaiva ripuk\u1E63at\u0101ni g\u0101tre\u1E63v ala\u1E43k\u0101ravad udvahanti mah\u0101rthasiddhyai tu samudyatasya du\u1E25kh\u0101ni kasm\u0101n mama b\u0101dhak\u0101ni svaj\u012Bvik\u0101m\u0101tranibaddhacitt\u0101\u1E25 kaivartaca\u1E47\u1E0D\u0101lak\u1E5B\u1E63\u012Bval\u0101dy\u0101\u1E25 \u015B\u012Bt\u0101tap\u0101divyasana\u1E43 sahante jagaddhit\u0101rtha\u1E43 na katha\u1E43 sahe \u2019ham da\u015Badigvyomaparyantajagatkle\u015Bavimok\u1E63a\u1E47e pratij\xF1\u0101ya mad\u0101tm\u0101pi na kle\u015Bebhyo vimocita\u1E25 \u0101tmapram\u0101\u1E47am aj\xF1\u0101tv\u0101 bruvann unmattakas tad\u0101 anivart\u012B bhavi\u1E63y\u0101mi tasm\u0101t kle\u015Bavadhe sad\u0101 atra grah\u012B bhavi\u1E63y\u0101mi baddhavaira\u015B ca vigrah\u012B anyatra tadvidh\u0101t kle\u015B\u0101t kle\u015Bagh\u0101t\u0101nubandhina\u1E25 galantv antr\u0101\u1E47i me k\u0101ma\u1E43 \u015Bira\u1E25 patatu n\u0101ma me na tv ev\u0101vanati\u1E43 y\u0101mi sarvath\u0101 kle\u015Bavairi\u1E47\u0101m nirv\u0101sitasy\u0101pi tu n\u0101ma \u015Batror de\u015B\u0101ntare sth\u0101naparigraha\u1E25 sy\u0101t yata\u1E25 puna\u1E25 sa\u1E43bh\u1E5Bta\u015Baktir eti na kle\u015Ba\u015Batror gatir \u012Bd\u1E5B\u015B\u012B tu kv\u0101sau y\u0101y\u0101n manmana\u1E25stho nirasta\u1E25 sthitv\u0101 yasmin madvadh\u0101rtha\u1E43 yateta nodyogo me kevala\u1E43 mandabuddhe\u1E25 kle\u015B\u0101\u1E25 praj\xF1\u0101d\u1E5B\u1E63\u1E6Dis\u0101dhy\u0101 var\u0101k\u0101\u1E25 na kle\u015B\u0101 vi\u1E63aye\u1E63u nendriyaga\u1E47e n\u0101py antar\u0101le sthit\u0101 n\u0101to \u2019nyatra kuha sthit\u0101\u1E25 punar ime3 mathnanti k\u1E5Btsna\u1E43 jagat m\u0101yaiveyam ato vimu\xF1ca h\u1E5Bdayatr\u0101sa\u1E434 bhajasvodyama\u1E43 praj\xF1\u0101rtha\u1E43 kim ak\u0101\u1E47\u1E0Da eva narake\u1E63v \u0101tm\u0101nam \u0101b\u0101dhase 1 eva\u1E43 vini\u015Bcitya karomi yatna\u1E43 yathokta\u015Bik\u1E63\u0101pratipattiheto\u1E25 vaidyopade\u015B\u0101c calata\u1E25 kuto \u2019sti bhai\u1E63ajyas\u0101dhyasya nir\u0101mayatvam bodhicary\u0101vat\u0101re bodhicitt\u0101pram\u0101do n\u0101ma caturtha\u1E25 pariccheda\u1E25 \u015Bik\u1E63\u0101\u1E43 rak\u1E63ituk\u0101mena citta\u1E43 rak\u1E63ya\u1E43 prayatnata\u1E25 na \u015Bik\u1E63\u0101 rak\u1E63itu\u1E43 \u015Baky\u0101 cala\u1E43 cittam arak\u1E63at\u0101 ad\u0101nt\u0101 mattam\u0101ta\u1E45g\u0101 na kurvant\u012Bha t\u0101\u1E43 vyath\u0101m karoti y\u0101m av\u012Bcy\u0101dau mukta\u015B cittamata\u1E45gaja\u1E25 baddha\u015B cec cittam\u0101ta\u1E45ga\u1E25 sm\u1E5Btirajjv\u0101 samantata\u1E25 bhayam asta\u1E43 gata\u1E43 sarva\u1E43 k\u1E5Btsna\u1E43 kaly\u0101\u1E47am \u0101gatam vy\u0101ghr\u0101\u1E25 si\u1E43h\u0101 gaj\u0101 \u1E5Bk\u1E63\u0101\u1E25 sarp\u0101\u1E25 sarve ca \u015Batrava\u1E25 sarve narakap\u0101l\u0101\u015B ca \u1E0D\u0101kinyo r\u0101k\u1E63as\u0101s tath\u0101 sarve baddh\u0101 bhavanty ete cittasyaikasya bandhan\u0101t cittasyaikasya daman\u0101t sarve d\u0101nt\u0101 bhavanti ca yasm\u0101d bhay\u0101ni sarv\u0101\u1E47i du\u1E25kh\u0101ny apramit\u0101ni ca citt\u0101d eva bhavant\u012Bti kathita\u1E43 tattvav\u0101din\u0101 \u015Bastr\u0101\u1E47i kena narake gha\u1E6Dit\u0101ni prayatnata\u1E25 tapt\u0101ya\u1E25ku\u1E6D\u1E6Dima\u1E43 kena kuto j\u0101t\u0101\u015B ca t\u0101\u1E25 striya\u1E25 p\u0101pacittasamudbh\u016Bta\u1E43 tattatsarva\u1E43 jagau muni\u1E25 tasm\u0101n na ka\u015Bcit trailokye citt\u0101d anyo bhay\u0101naka\u1E25 adaridra\u1E43 jagat k\u1E5Btv\u0101 d\u0101nap\u0101ramit\u0101 yadi jagaddaridram ady\u0101pi s\u0101 katha\u1E43 p\u016Brvat\u0101yin\u0101m phalena saha sarvasvaty\u0101gacitt\u0101j1 jane \u2019khile d\u0101nap\u0101ramit\u0101 prokt\u0101 tasm\u0101t s\u0101 cittam eva tu matsy\u0101daya\u1E25 kva n\u012Byant\u0101\u1E43 m\u0101rayeya\u1E43 yato na t\u0101n labdhe viraticitte tu \u015B\u012Blap\u0101ramit\u0101 mat\u0101 kiyato m\u0101rayi\u1E63y\u0101mi durjan\u0101n gaganopam\u0101n m\u0101rite krodhacitte tu m\u0101rit\u0101\u1E25 sarva\u015Batrava\u1E25 bh\u016Bmi\u1E43 ch\u0101dayitu\u1E43 sarv\u0101\u1E43 kuta\u015B carma bhavi\u1E63yati up\u0101naccarmam\u0101tre\u1E47a chann\u0101 bhavati medin\u012B b\u0101hy\u0101 bh\u0101v\u0101 may\u0101 tadvac chaky\u0101 v\u0101rayitu\u1E43 na hi svacitta\u1E43 v\u0101rayi\u1E63y\u0101mi ki\u1E43 mam\u0101nyair niv\u0101ritai\u1E25 sah\u0101pi v\u0101kchar\u012Br\u0101bhy\u0101\u1E43 mandav\u1E5Btter na tat phalam yat pa\u1E6Dor ekakasy\u0101pi cittasya brahmat\u0101dikam jap\u0101s tap\u0101\u1E43si sarv\u0101\u1E47i d\u012Brghak\u0101lak\u1E5Bt\u0101ny api anyacittena mandena v\u1E5Bthaivety \u0101ha sarvavit du\u1E25kha\u1E43 hantu\u1E43 sukha\u1E43 pr\u0101ptu\u1E43 te bhramanti mudh\u0101mbare2 yair etad dharmasarvasva\u1E43 citta\u1E43 guhya\u1E43 na bh\u0101vitam tasm\u0101t svadhi\u1E63\u1E6Dhita\u1E43 citta\u1E43 may\u0101 k\u0101rya\u1E43 surak\u1E63itam cittarak\u1E63\u0101vrata\u1E43 muktv\u0101 bahubhi\u1E25 ki\u1E43 mama vratai\u1E25 yath\u0101 capalamadhyastho rak\u1E63ati vra\u1E47am \u0101dar\u0101t eva\u1E43 durjanamadhyastho rak\u1E63ec cittavra\u1E47a\u1E43 sad\u0101 vra\u1E47adu\u1E25khalav\u0101d bh\u012Bto rak\u1E63\u0101mi vra\u1E47am \u0101dar\u0101t sa\u1E43gh\u0101taparvat\u0101gh\u0101t\u0101d bh\u012Bta\u015B cittavra\u1E47a\u1E43 na kim anena hi vih\u0101re\u1E47a viharan durjane\u1E63v api pramad\u0101janamadhye \u2019pi yatir dh\u012Bro na kha\u1E47\u1E0Dyate l\u0101bh\u0101 na\u015Byantu me k\u0101ma\u1E43 satk\u0101ra\u1E25 k\u0101yaj\u012Bvitam na\u015Byatv anyac ca ku\u015Bala\u1E43 m\u0101 tu citta\u1E43 kad\u0101 cana citta\u1E43 rak\u1E63ituk\u0101m\u0101n\u0101\u1E43 mayai\u1E63a kriyate \u2019\xF1jali\u1E25 sm\u1E5Bti\u1E43 ca sa\u1E43prajanya\u1E43 ca sarvayatnena rak\u1E63ata vy\u0101dhy\u0101kulo naro yadvan na k\u1E63ama\u1E25 sarvakarmasu tath\u0101bhy\u0101\u1E43 vy\u0101kula\u1E43 citta\u1E43 na k\u1E63ama\u1E43 sarvakarmasu asa\u1E43prajanyacittasya \u015Brutacintitabh\u0101vitam sacchidrakumbhajalavan na sm\u1E5Bt\u0101v avati\u1E63\u1E6Dhate aneke \u015Brutavanto \u2019pi \u015Br\u0101ddh\u0101 yatnapar\u0101 api asa\u1E43prajanyado\u1E63e\u1E47a bhavanty \u0101pattika\u015Bmal\u0101\u1E25 asa\u1E43prajanyacaure\u1E47a sm\u1E5Btimo\u1E63\u0101nus\u0101ri\u1E47\u0101 upacity\u0101pi pu\u1E47y\u0101ni mu\u1E63it\u0101 y\u0101nti durgatim kle\u015Bataskarasa\u1E43gho \u2019yam avat\u0101ragave\u1E63aka\u1E25 pr\u0101py\u0101vat\u0101ra\u1E43 mu\u1E63\u1E47\u0101ti hanti sadgatij\u012Bvitam tasm\u0101t sm\u1E5Btir manodv\u0101r\u0101n n\u0101paney\u0101 kad\u0101 cana gat\u0101pi pratyupasth\u0101py\u0101 sa\u1E43sm\u1E5Bty\u0101p\u0101yik\u012B\u1E43 vyath\u0101m up\u0101dhy\u0101y\u0101nu\u015B\u0101siny\u0101 bh\u012Bty\u0101py \u0101darak\u0101ri\u1E47\u0101m dhany\u0101n\u0101\u1E43 gurusa\u1E43v\u0101s\u0101t sukara\u1E43 j\u0101yate sm\u1E5Bti\u1E25 buddh\u0101\u015B ca bodhisattv\u0101\u015B ca sarvatr\u0101vy\u0101hatek\u1E63a\u1E47\u0101\u1E25 sarvam ev\u0101gratas te\u1E63\u0101\u1E43 te\u1E63\u0101m asmi pura\u1E25 sthita\u1E25 iti dhy\u0101tv\u0101 tath\u0101 ti\u1E63\u1E6Dhet trap\u0101darabhay\u0101nvita\u1E25 buddh\u0101nusm\u1E5Btir apy eva\u1E43 bhavet tasya muhur muhu\u1E25 sa\u1E43prajanya\u1E43 tad\u0101y\u0101ti na ca y\u0101ty \u0101gata\u1E43 puna\u1E25 sm\u1E5Btir yad\u0101 manodv\u0101re rak\u1E63\u0101rtham avati\u1E63\u1E6Dhate p\u016Brva\u1E43 t\u0101vad ida\u1E43 citta\u1E43 sadopasth\u0101pyam \u012Bd\u1E5B\u015Bam nirindriye\u1E47eva may\u0101 sth\u0101tavya\u1E43 k\u0101\u1E63\u1E6Dhavat sad\u0101 ni\u1E63phal\u0101 netravik\u1E63ep\u0101 na kartavy\u0101\u1E25 kad\u0101 cana nidhy\u0101yant\u012Bva satata\u1E43 k\u0101ry\u0101 d\u1E5B\u1E63\u1E6Dir adhogat\u0101 d\u1E5B\u1E63\u1E6Divi\u015Br\u0101mahetos tu di\u015Ba\u1E25 pa\u015Byet kad\u0101 cana \u0101bh\u0101sam\u0101tra\u1E43 d\u1E5B\u1E63\u1E6Dv\u0101 ca sv\u0101gat\u0101rtha\u1E43 vilokayet m\u0101rg\u0101dau bhayabodh\u0101rtha\u1E43 muhu\u1E25 pa\u015Byec caturdi\u015Bam di\u015Bo vi\u015Bramya3 v\u012Bk\u1E63eta par\u0101v\u1E5Btyaiva p\u1E5B\u1E63\u1E6Dhata\u1E25 sared apasared v\u0101pi pura\u1E25 pa\u015Bc\u0101n nir\u016Bpya ca eva\u1E43 sarv\u0101sv avasth\u0101su k\u0101rya\u1E43 buddhv\u0101 sam\u0101caret k\u0101yenaivam avastheyam ity \u0101k\u1E63ipya kriy\u0101\u1E43 puna\u1E25 katha\u1E43 k\u0101ya\u1E25 sthita iti dra\u1E63\u1E6Davya\u1E43 punar antar\u0101 nir\u016Bpya\u1E254 sarvayatnena cittamattadvipas tath\u0101 dharmacint\u0101mah\u0101stambhe yath\u0101 baddho na mucyate kutra me vartata iti pratyavek\u1E63ya\u1E43 tath\u0101 mana\u1E25 sam\u0101dh\u0101nadhura\u1E43 naiva k\u1E63a\u1E47am apy uts\u1E5Bjed yath\u0101 bhayotsav\u0101disa\u1E43bandhe yady a\u015Bakto yath\u0101 sukham d\u0101nak\u0101le tu \u015B\u012Blasya yasm\u0101d uktam upek\u1E63a\u1E47am yad buddhv\u0101 kartum \u0101rabdha\u1E43 tato \u2019nyan na vicintayet tad eva t\u0101van ni\u1E63p\u0101dya\u1E43 tadgaten\u0101ntar\u0101tman\u0101 eva\u1E43 hi suk\u1E5Bta\u1E43 sarvam anyath\u0101 nobhaya\u1E435 bhavet asa\u1E43prajanyakle\u015Bo \u2019pi v\u1E5Bddhi\u1E43 caiva\u1E43 gami\u1E63yati n\u0101n\u0101vidhapral\u0101pe\u1E63u vartam\u0101ne\u1E63v anekadh\u0101 kaut\u016Bhale\u1E63u sarve\u1E63u hany\u0101d autsukyam \u0101gatam m\u1E5Bnmardanat\u1E5B\u1E47acchedarekh\u0101dyaphalam \u0101gatam sm\u1E5Btv\u0101 t\u0101th\u0101gat\u012B\u1E43 \u015Bik\u1E63\u0101\u1E43 bh\u012Btas tatk\u1E63a\u1E47am uts\u1E5Bjet yad\u0101 calituk\u0101ma\u1E25 sy\u0101d vaktuk\u0101mo \u2019pi v\u0101 bhavet svacitta\u1E43 pratyavek\u1E63y\u0101dau kury\u0101d dhairye\u1E47a yuktimat anun\u012Bta\u1E43 pratihata\u1E43 yad\u0101 pa\u015Byet svaka\u1E43 mana\u1E25 na kartavya\u1E43 na vaktavya\u1E43 sth\u0101tavya\u1E43 k\u0101\u1E63\u1E6Dhavat tad\u0101 uddhata\u1E43 sopah\u0101sa\u1E43 v\u0101 yad\u0101 m\u0101namad\u0101nvitam sotpr\u0101s\u0101ti\u015Baya\u1E43 vakra\u1E43 va\xF1caka\u1E43 ca mano bhavet yad\u0101tmotkar\u1E63a\u1E47\u0101bh\u0101sa\u1E43 parapa\u1E43sanam eva ca s\u0101dhik\u1E63epa\u1E43 sasa\u1E43rambha\u1E43 sth\u0101tavya\u1E43 k\u0101\u1E63\u1E6Dhavat tad\u0101 l\u0101bhasatk\u0101rak\u012Brtyarthi pariv\u0101r\u0101rthi v\u0101 puna\u1E25 upasth\u0101n\u0101rthi me citta\u1E43 tasm\u0101t ti\u1E63\u1E6Dh\u0101mi k\u0101\u1E63\u1E6Dhavat par\u0101rthar\u016Bk\u1E63a\u1E436 sv\u0101rth\u0101rthi pari\u1E63atk\u0101mam eva v\u0101 vaktum icchati me citta\u1E43 tasm\u0101t ti\u1E63\u1E6Dh\u0101mi k\u0101\u1E63\u1E6Dhavat asahi\u1E63\u1E47v alasa\u1E43 bh\u012Bta\u1E437 pragalbha\u1E43 mukhara\u1E43 tath\u0101 svapak\u1E63\u0101bhinivi\u1E63\u1E6Da\u1E43 v\u0101 tasm\u0101t ti\u1E63\u1E6Dh\u0101mi k\u0101\u1E63\u1E6Dhavat eva\u1E43 sa\u1E43kli\u1E63\u1E6Dam \u0101lokya ni\u1E63phal\u0101rambhi v\u0101 mana\u1E25 nig\u1E5Bh\u1E47\u012By\u0101d d\u1E5B\u1E0Dha\u1E43 \u015B\u016Bra\u1E25 pratipak\u1E63e\u1E47a tatsad\u0101 suni\u015Bcita\u1E43 suprasanna\u1E43 dh\u012Bra\u1E43 s\u0101daragauravam salajja\u1E43 sabhaya\u1E43 \u015B\u0101nta\u1E43 par\u0101r\u0101dhanatatparam parasparaviruddh\u0101bhir b\u0101lecch\u0101bhir akheditam kle\u015Botp\u0101d\u0101d ida\u1E43 hy etad e\u1E63\u0101m iti day\u0101nvitam \u0101tmasattvava\u015Ba\u1E43 nityam anavadye\u1E63u vastu\u1E63u nirm\u0101\u1E47am iva nirm\u0101na\u1E43 dh\u0101ray\u0101my e\u1E63a m\u0101nasam cir\u0101t pr\u0101pta\u1E43 k\u1E63a\u1E47avara\u1E43 sm\u1E5Btv\u0101 sm\u1E5Btv\u0101 muhur muhu\u1E25 dh\u0101ray\u0101m\u012Bd\u1E5B\u015Ba\u1E43 cittam aprakampya\u1E43 sumeruvat g\u1E5Bdhrair \u0101mi\u1E63asa\u1E43g\u1E5Bddhai\u1E25 k\u1E5B\u1E63yam\u0101\u1E47a itastata\u1E25 na karoty anyath\u0101 k\u0101ya\u1E25 kasm\u0101d atra pratikriy\u0101m rak\u1E63as\u012Bma\u1E43 mana\u1E25 kasm\u0101d \u0101tm\u012Bk\u1E5Btya samucchrayam tvat ta\u015B cet p\u1E5Bthag ev\u0101ya\u1E43 ten\u0101tra tava ko vyaya\u1E25 na sv\u012Bkaro\u1E63i he m\u016B\u1E0Dha k\u0101\u1E63\u1E6Dhaputtalaka\u1E438 \u015Bucim amedhyagha\u1E6Dita\u1E43 yantra\u1E43 kasm\u0101d rak\u1E63asi p\u016Btikam ima\u1E43 carmapu\u1E6Da\u1E43 t\u0101vat svabuddhyaiva p\u1E5Bthak kuru asthipa\xF1jarato m\u0101\u1E43sa\u1E43 praj\xF1\u0101\u015Bastre\u1E47a mocaya asth\u012Bny api p\u1E5Bthak k\u1E5Btv\u0101 pa\u015Bya majj\u0101nam antata\u1E25 kim atra s\u0101ram ast\u012Bti svayam eva vic\u0101raya evam anvi\u1E63ya yatnena na d\u1E5B\u1E63\u1E6Da\u1E43 s\u0101ram atra te adhun\u0101 vada kasm\u0101t tva\u1E43 k\u0101yam ady\u0101pi rak\u1E63asi na kh\u0101ditavyam a\u015Buci9 tvay\u0101 peya\u1E43 na \u015Bo\u1E47itam n\u0101ntr\u0101\u1E47i c\u016B\u1E63itavy\u0101ni ki\u1E43 k\u0101yena kari\u1E63yasi yukta\u1E43 g\u1E5Bdhra\u015B\u1E5Bg\u0101l\u0101der \u0101h\u0101r\u0101rtha\u1E43 tu rak\u1E63itum10 karmopakara\u1E47a\u1E43 tv etan manu\u1E63y\u0101\u1E47\u0101\u1E43 \u015Bar\u012Brakam eva\u1E43 te rak\u1E63ata\u015B c\u0101pi m\u1E5Btyur \u0101cchidya nirdaya\u1E25 k\u0101ya\u1E43 d\u0101syati g\u1E5Bdhrebhyas tad\u0101 tva\u1E43 ki\u1E43 kari\u1E63yasi na sth\u0101syat\u012Bti bh\u1E5Bty\u0101ya na vastr\u0101di prad\u012Byate k\u0101yo y\u0101syati kh\u0101ditv\u0101 kasm\u0101t tva\u1E43 kuru\u1E63e vyayam dattv\u0101smai vetana\u1E43 tasm\u0101t sv\u0101rtha\u1E43 kuru mano \u2019dhun\u0101 na hi vaitanikop\u0101tta\u1E43 sarva\u1E43 tasmai prad\u012Byate k\u0101ye naubuddhim \u0101dh\u0101ya gaty\u0101gamanani\u015Bray\u0101t yath\u0101k\u0101ma\u1E43 gama\u1E43 k\u0101ya\u1E43 kuru sattv\u0101rthasiddhaye eva\u1E43 va\u015B\u012Bk\u1E5Btasv\u0101tm\u0101 nitya\u1E43 smitamukho bhavet tyajed bh\u1E5Bku\u1E6Disa\u1E43koca\u1E43 p\u016Brv\u0101bh\u0101\u1E63\u012B jagatsuh\u1E5Bt sa\u015Babdap\u0101ta\u1E43 sahas\u0101 na p\u012B\u1E6Dh\u0101d\u012Bn vinik\u1E63ipet n\u0101sph\u0101layet kap\u0101\u1E6Da\u1E43 ca sy\u0101n ni\u1E25\u015Babdaruci\u1E25 sad\u0101 bako bi\u1E0D\u0101la\u015B caura\u015B ca ni\u1E25\u015Babdo nibh\u1E5Bta\u015B caran pr\u0101pnoty abhimata\u1E43 k\u0101ryam eva\u1E43 nitya\u1E43 yati\u015B caret paracodanadak\u1E63\u0101\u1E47\u0101m anadh\u012B\u1E63\u1E6Dopak\u0101ri\u1E47\u0101m prat\u012Bcchec chiras\u0101 v\u0101kya\u1E43 sarva\u015Bi\u1E63ya\u1E25 sad\u0101 bhavet subh\u0101\u1E63ite\u1E63u sarve\u1E63u s\u0101dhuk\u0101ram ud\u012Brayet pu\u1E47yak\u0101ri\u1E47am \u0101lokya stutibhi\u1E25 sa\u1E43prahar\u1E63ayet parok\u1E63a\u1E43 ca gu\u1E47\u0101n11 br\u016By\u0101d anubr\u016By\u0101c ca to\u1E63ata\u1E25 svavar\u1E47e bh\u0101\u1E63yam\u0101\u1E47e ca bh\u0101vayet tad gu\u1E47aj\xF1at\u0101m sarv\u0101rambh\u0101 hi tu\u1E63\u1E6Dyarth\u0101\u1E25 s\u0101 vittair api durlabh\u0101 bhok\u1E63ye12 tu\u1E63\u1E6Disukha\u1E43 tasm\u0101t para\u015Bramak\u1E5Btair gu\u1E47ai\u1E25 na c\u0101tra me vyaya\u1E25 ka\u015Bcit paratra ca mahatsukham apr\u012Btidu\u1E25kha\u1E43 dve\u1E63ais tu mahaddu\u1E25kha\u1E43 paratra ca vi\u015Bvastavinyastapada\u1E43 vispa\u1E63\u1E6D\u0101rtha\u1E43 manoramam \u015Brutisaukhya\u1E43 k\u1E5Bp\u0101m\u016Bla\u1E43 m\u1E5Bdumandasvara\u1E43 vadet \u1E5Bju pa\u015Byet sad\u0101 sattv\u0101\u1E43\u015B cak\u1E63u\u1E63\u0101 sa\u1E43pibann iva et\u0101n eva sam\u0101\u015Britya buddhatva\u1E43 me bhavi\u1E63yati s\u0101taty\u0101bhinive\u015Bottha\u1E43 pratipak\u1E63ottham13 eva ca gu\u1E47opak\u0101rik\u1E63etre ca du\u1E25khite ca mahacchubham dak\u1E63a utth\u0101nasa\u1E43panna\u1E25 svaya\u1E43k\u0101r\u012B sad\u0101 bhavet n\u0101vak\u0101\u015Ba\u1E25 prad\u0101tavya\u1E25 kasyacit sarvakarmasu uttarottarata\u1E25 \u015Bre\u1E63\u1E6Dh\u0101 d\u0101nap\u0101ramit\u0101daya\u1E25 netar\u0101rtha\u1E43 tyajec chre\u1E63\u1E6Dh\u0101m anyatr\u0101c\u0101rasetuta\u1E25 eva\u1E43 buddhv\u0101 par\u0101rthe\u1E63u bhavet satatam utthita\u1E25 ni\u1E63iddham apy anuj\xF1\u0101ta\u1E43 k\u1E5Bp\u0101lor arthadar\u015Bina\u1E25 vinip\u0101tagat\u0101n\u0101thavratasth\u0101n sa\u1E43vibhajya ca bhu\xF1j\u012Bta madhyam\u0101\u1E43 m\u0101tr\u0101\u1E43 tric\u012Bvarabahis tyajet saddharmasevaka\u1E43 k\u0101yam itar\u0101rta\u1E43 na p\u012B\u1E0Dayet evam eva hi sattv\u0101n\u0101m \u0101\u015B\u0101m \u0101\u015Bu prap\u016Brayet tyajen na j\u012Bvita\u1E43 tasm\u0101d a\u015Buddhe karu\u1E47\u0101\u015Baye tuly\u0101\u015Baye tu tat ty\u0101jyam ittha\u1E43 na parih\u012Byate dharma\u1E43 nirgaurave svasthe na \u015Birove\u1E63\u1E6Dhite vadet sacchatrada\u1E47\u1E0Da\u015Bastre ca n\u0101vagu\u1E47\u1E6Dhitamastake gambh\u012Brod\u0101ram alpe\u1E63u na str\u012B\u1E63u puru\u1E63a\u1E43 vin\u0101 h\u012Bnotk\u1E5B\u1E63\u1E6De\u1E63u dharme\u1E63u sama\u1E43 gauravam \u0101caret nod\u0101radharmap\u0101tra\u1E43 ca h\u012Bne dharme niyojayet na c\u0101c\u0101ra\u1E43 parityajya s\u016Btramantrai\u1E25 pralobhayet dantak\u0101\u1E63\u1E6Dhasya khe\u1E6Dasya visarjanam ap\u0101v\u1E5Btam ne\u1E63\u1E6Da\u1E43 jale sthale bhogye m\u016Btr\u0101de\u015B c\u0101pi garhitam mukhap\u016Bra\u1E43 na bhu\xF1j\u012Bta sa\u015Babda\u1E43 pras\u1E5Bt\u0101nanam pralambap\u0101da\u1E43 n\u0101s\u012Bta na b\u0101h\u016B mardayet samam naikay\u0101nyastriy\u0101 kury\u0101d y\u0101na\u1E43 \u015Bayanam \u0101sanam lok\u0101pras\u0101daka\u1E43 sarva\u1E43 d\u1E5B\u1E63\u1E6Dv\u0101 p\u1E5B\u1E63\u1E6Dv\u0101 ca varjayet n\u0101\u1E45guly\u0101 k\u0101rayet ki\u1E43cid dak\u1E63i\u1E47ena tu s\u0101daram samastenaiva hastena m\u0101rgam apy evam \u0101di\u015Bet na b\u0101h\u016Btk\u1E63epaka\u1E43 ka\u1E43cic chabdayed alpasa\u1E43bhrame accha\u1E6D\u0101di tu kartavyam anyath\u0101 sy\u0101d asa\u1E43v\u1E5Bta\u1E25 n\u0101thanirv\u0101\u1E47a\u015Bayy\u0101vac chay\u012Btepsitay\u0101 di\u015B\u0101 sa\u1E43praj\u0101na\u1E43l lagh\u016Btth\u0101na\u1E25 pr\u0101gava\u015Bya\u1E43 niyogata\u1E25 \u0101c\u0101ro bodhisattv\u0101n\u0101m aprameya ud\u0101h\u1E5Bta\u1E25 citta\u015Bodhanam \u0101c\u0101ra\u1E43 niyata\u1E43 t\u0101vad \u0101caret r\u0101tri\u1E43 diva\u1E43 ca triskandha\u1E43 trik\u0101la\u1E43 ca pravartayet \u015Be\u1E63\u0101patti\u015Bamas tena bodhicittajin\u0101\u015Bray\u0101t y\u0101 avasth\u0101\u1E25 prapadyeta svaya\u1E43 parava\u015Bo \u2019pi v\u0101 t\u0101sv avasth\u0101su y\u0101\u1E25 \u015Bik\u1E63\u0101\u1E25 \u015Bik\u1E63et t\u0101 eva yatnata\u1E25 na hi tad vidyate ki\u1E43cid yan na \u015Bik\u1E63ya\u1E43 jin\u0101tmajai\u1E25 na tad asti na yat pu\u1E47yam eva\u1E43 viharata\u1E25 sata\u1E25 p\u0101ra\u1E43parye\u1E47a s\u0101k\u1E63\u0101d v\u0101 sattv\u0101rtha\u1E43 n\u0101nyad\u0101caret sattv\u0101n\u0101m eva c\u0101rth\u0101ya sarva\u1E43 bodh\u0101ya n\u0101mayet sad\u0101 kaly\u0101\u1E47amitra\u1E43 ca j\u012Bvit\u0101rthe \u2019pi na tyajet bodhisattvavratadhara\u1E43 mah\u0101y\u0101n\u0101rthakovidam \u015Br\u012Bsa\u1E43bhavavimok\u1E63\u0101c ca \u015Bik\u1E63ed yad guruvartanam etac c\u0101nyac ca buddhokta\u1E43 j\xF1eya\u1E43 s\u016Btr\u0101ntav\u0101can\u0101t \u015Bik\u1E63\u0101\u1E25 s\u016Btre\u1E63u d\u1E5B\u015Byante tasm\u0101t s\u016Btr\u0101\u1E47i v\u0101cayet \u0101k\u0101\u015Bagarbhas\u016Btre ca m\u016Bl\u0101patt\u012Br nir\u016Bpayet \u015Bik\u1E63\u0101samuccayo \u2019va\u015Bya\u1E43 dra\u1E63\u1E6Davya\u015B ca14 puna\u1E25 puna\u1E25 vistare\u1E47a sad\u0101c\u0101ro yasm\u0101t tatra pradar\u015Bita\u1E25 sa\u1E43k\u1E63epe\u1E47\u0101tha v\u0101 t\u0101vat pa\u015Byet s\u016Btrasamuccayam \u0101ryan\u0101g\u0101rjun\u0101baddha\u1E43 dvit\u012Bya\u1E43 ca prayatnata\u1E25 yato niv\u0101ryate yatra yad eva ca niyujyate tal lokacittarak\u1E63\u0101rtha\u1E43 \u015Bik\u1E63\u0101\u1E43 d\u1E5B\u1E63\u1E6Dv\u0101 sam\u0101caret etad eva sam\u0101sena sa\u1E43prajanyasya lak\u1E63a\u1E47am yat k\u0101yacitt\u0101vasth\u0101y\u0101\u1E25 pratyavek\u1E63\u0101 muhur muhu\u1E25 k\u0101yenaiva pa\u1E6Dhi\u1E63y\u0101mi v\u0101kp\u0101\u1E6Dhena tu ki\u1E43 bhavet cikits\u0101p\u0101\u1E6Dham\u0101tre\u1E47a rogi\u1E47a\u1E25 ki\u1E43 bhavi\u1E63yati bodhicary\u0101vat\u0101re sa\u1E43prajanyarak\u1E63a\u1E47a\u1E25 n\u0101ma pa\xF1cama\u1E25 pariccheda\u1E25 sarvam etat sucarita\u1E43 d\u0101na\u1E43 sugatap\u016Bjanam k\u1E5Bta\u1E43 kalpasahasrair1 yat pratigha\u1E25 pratihanti tat na ca dve\u1E63asama\u1E43 p\u0101pa\u1E43 na ca k\u1E63\u0101ntisama\u1E43 tapa\u1E25 tasm\u0101t k\u1E63\u0101nti\u1E43 prayatnena bh\u0101vayed vividhair nayai\u1E25 mana\u1E25 \u015Bama\u1E43 na g\u1E5Bh\u1E47\u0101ti na pr\u012Btisukham a\u015Bnute na nidr\u0101\u1E43 na dh\u1E5Bti\u1E43 y\u0101ti dve\u1E63a\u015Balye h\u1E5Bdi sthite p\u016Bjayaty artham\u0101nair y\u0101n ye \u2019pi caina\u1E43 sam\u0101\u015Brit\u0101\u1E25 te \u2019py ena\u1E43 hantum icchanti sv\u0101mina\u1E43 dve\u1E63adurbhagam suh\u1E5Bdo \u2019py udvijante \u2019sm\u0101d dad\u0101ti na ca sevyate sa\u1E43k\u1E63ep\u0101n n\u0101sti tat ki\u1E43 cit krodhano yena susthita\u1E25 evam\u0101d\u012Bni du\u1E25kh\u0101ni karot\u012Bty ari sa\u1E43j\xF1ay\u0101 ya\u1E25 krodha\u1E43 hanti nirbandh\u0101t sa sukh\u012Bha paratra ca ani\u1E63\u1E6Dakara\u1E47\u0101j j\u0101tam i\u1E63\u1E6Dasya ca vigh\u0101tan\u0101t daurmanasy\u0101\u015Bana\u1E43 pr\u0101pya dve\u1E63o d\u1E5Bpto2 nihanti m\u0101m tasm\u0101d vigh\u0101tayi\u1E63y\u0101mi tasy\u0101\u015Banam aha\u1E43 ripo\u1E25 yasm\u0101n na madvadh\u0101d anyat k\u1E5Btyam asy\u0101sti vairi\u1E47a\u1E25 atyani\u1E63\u1E6D\u0101gamen\u0101pi na k\u1E63obhy\u0101 mudit\u0101 may\u0101 daurmanasye \u2019pi n\u0101st\u012B\u1E63\u1E6Da\u1E433 ku\u015Bala\u1E43 tv avah\u012Byate yady asty eva prat\u012Bk\u0101ro daurmanasyena tatra kim atha n\u0101sti prat\u012Bk\u0101ro daurmanasyena tatra kim du\u1E25kha\u1E43 nyakk\u0101rap\u0101ru\u1E63yam aya\u015Ba\u015B cety an\u012Bpsitam priy\u0101\u1E47\u0101m \u0101tmano v\u0101pi \u015Batro\u015B ca etad viparyay\u0101t katha\u1E43 cil labhyate saukhya\u1E43 du\u1E25kha\u1E43 sthitam ayatnata\u1E25 du\u1E25khenaiva ca ni\u1E25s\u0101ra\u015B cetas tasm\u0101d d\u1E5B\u1E0Dh\u012Bbhava durg\u0101putrakakar\u1E47\u0101\u1E6D\u0101 d\u0101hacched\u0101divedan\u0101m v\u1E5Bth\u0101 sahante muktyartham aha\u1E43 kasm\u0101t tu k\u0101tara\u1E25 na ki\u1E43cid asti tad vastu yad abhy\u0101sasya du\u1E63karam tasm\u0101n m\u1E5Bduvyath\u0101bhy\u0101s\u0101t so\u1E0Dhavy\u0101pi mah\u0101vyath\u0101 udda\u1E43\u015Bada\u1E43\u015Bama\u015Bakak\u1E63utpip\u0101s\u0101divedan\u0101m mahatka\u1E47\u1E0Dv\u0101didu\u1E25kha\u1E43 ca kim anartha\u1E43 na pa\u015Byasi \u015B\u012Bto\u1E63\u1E47av\u1E5B\u1E63\u1E6Div\u0101t\u0101dhvavy\u0101dhibandhanat\u0101\u1E0Danai\u1E25 saukum\u0101rya\u1E43 na kartavyam anyath\u0101 vardhate vyath\u0101 kecit sva\u015Bo\u1E47ita\u1E43 d\u1E5B\u1E63\u1E6Dv\u0101 vikramante vi\u015Be\u1E63ata\u1E25 para\u015Bo\u1E47itam apy eke d\u1E5B\u1E63\u1E6Dv\u0101 m\u016Brch\u0101\u1E43 vrajanti yat tac cittasya d\u1E5B\u1E0Dhatvena k\u0101taratvena c\u0101gatam du\u1E25khaduryodhanas tasm\u0101d bhaved abhibhaved vyath\u0101m du\u1E25khe \u2019pi naiva cittasya pras\u0101da\u1E43 k\u1E63obhayed budha\u1E25 sa\u1E43gr\u0101mo4 hi saha kle\u015Bair yuddhe ca sulabh\u0101 vyath\u0101 uras\u0101r\u0101tigh\u0101t\u0101n ye prat\u012Bcchanto jayanty ar\u012Bn te te vijayina\u1E25 \u015B\u016Br\u0101\u1E25 \u015Be\u1E63\u0101s tu m\u1E5Btam\u0101rak\u0101\u1E25 gu\u1E47o \u2019para\u015B ca du\u1E25khasya yatsa\u1E43veg\u0101n madacyuti\u1E25 sa\u1E43s\u0101ri\u1E63u ca k\u0101ru\u1E47ya\u1E43 p\u0101p\u0101d bh\u012Btir jine sp\u1E5Bh\u0101 pitt\u0101di\u1E63u na me kopo mah\u0101du\u1E25khakare\u1E63v5 api sacetane\u1E63u ki\u1E43 kopa\u1E25 te \u2019pi pratyayakopit\u0101\u1E25 ani\u1E63yam\u0101\u1E47am apy etac ch\u016Blam utpadyate yath\u0101 ani\u1E63yam\u0101\u1E47o \u2019pi bal\u0101t krodha utpadyate tath\u0101 kupy\u0101m\u012Bti na sa\u1E43cintya kupyati svecchay\u0101 jana\u1E25 utpatsya ity abhipretya krodha utpadyate na ca ye kecid apar\u0101dh\u0101s tu p\u0101p\u0101ni vividh\u0101ni ca sarva\u1E43 tat pratyayabal\u0101t svatantra\u1E43 tu na vidyate na ca pratyayas\u0101magry\u0101 janay\u0101m\u012Bti cetan\u0101 na c\u0101pi janitasy\u0101sti janito \u2019sm\u012Bti cetan\u0101 yat pradh\u0101na\u1E43 kil\u0101bh\u012B\u1E63\u1E6Da\u1E43 yat tad\u0101tmeti kalpitam tad eva hi bhav\u0101m\u012Bti na sa\u1E43cintyopaj\u0101yate anutpanna\u1E43 hi tan n\u0101sti ka icched bhavitu\u1E43 tad\u0101 vi\u1E63ayavy\u0101p\u1E5Btatv\u0101c6 ca niroddhum api nehate nityo hy acetana\u015B c\u0101tm\u0101 vyomavat sphu\u1E6Dam akriya\u1E25 pratyay\u0101ntarasa\u1E45ge \u2019pi nirvik\u0101rasya k\u0101 kriy\u0101 ya\u1E25 p\u016Brvavat kriy\u0101k\u0101le kriy\u0101y\u0101s tena ki\u1E43 k\u1E5Btam tasya kriyeti sa\u1E43bandhe katarat tan7 nibandhanam eva\u1E43 parava\u015Ba\u1E43 sarva\u1E43 yadva\u015Ba\u1E43 so \u2019pi c\u0101va\u015Ba\u1E25 nirm\u0101\u1E47avadace\u1E63\u1E6De\u1E63u bh\u0101ve\u1E63v eva\u1E43 kva kupyate v\u0101ra\u1E47\u0101pi na yuktaiva\u1E43 ka\u1E25 ki\u1E43 v\u0101rayat\u012Bti cet yukt\u0101 prat\u012Btyat\u0101 yasm\u0101d du\u1E25khasyoparatir mat\u0101 tasm\u0101d amitra\u1E43 mitra\u1E43 v\u0101 d\u1E5B\u1E63\u1E6Dv\u0101py any\u0101yak\u0101ri\u1E47am \u012Bd\u1E5B\u015B\u0101\u1E25 pratyay\u0101 asyety eva\u1E43 matv\u0101 sukh\u012B bhavet yadi tu svecchay\u0101 siddhi\u1E25 sarve\u1E63\u0101m eva dehin\u0101m na bhavet kasyacid du\u1E25kha\u1E43 na du\u1E25kha\u1E43 ka\u015Bcid icchati pram\u0101d\u0101d \u0101tman\u0101tm\u0101na\u1E43 b\u0101dhante ka\u1E47\u1E6Dak\u0101dibhi\u1E25 bhaktacched\u0101dibhi\u1E25 kop\u0101d dur\u0101pastry\u0101dilipsay\u0101 udvandhanaprap\u0101tai\u015B ca vi\u1E63\u0101pathy\u0101dibhak\u1E63a\u1E47ai\u1E25 nighnanti kecid \u0101tm\u0101nam apu\u1E47y\u0101cara\u1E47ena ca yadaiva\u1E43 kle\u015Bava\u015Byatv\u0101d ghnanty \u0101tm\u0101nam api priyam tadai\u1E63\u0101\u1E43 parak\u0101ye\u1E63u parih\u0101ra\u1E25 katha\u1E43 bhavet kle\u015Bonmatt\u012Bk\u1E5Bte\u1E63v e\u1E63u prav\u1E5Btte\u1E63v \u0101tmagh\u0101tane na kevala\u1E43 day\u0101 n\u0101sti krodha utpadyate katham yadi svabh\u0101vo b\u0101l\u0101n\u0101\u1E43 paropadravak\u0101rit\u0101 te\u1E63u kopo na yukto me yath\u0101gnau dahan\u0101tmake atha do\u1E63o \u2019yam \u0101gantu\u1E25 sattv\u0101\u1E25 prak\u1E5Btipe\u015Bal\u0101\u1E25 yath\u0101py ayuktas tatkopa\u1E25 ka\u1E6Dudh\u016Bme yath\u0101mbare mukhya\u1E43 da\u1E47\u1E0D\u0101dika\u1E43 hitv\u0101 prerake yadi kupyate dve\u1E63e\u1E47a prerita\u1E25 so \u2019pi dve\u1E63e dve\u1E63o \u2019stu me varam may\u0101pi p\u016Brva\u1E43 sattv\u0101n\u0101m \u012Bd\u1E5B\u015Byeva vyath\u0101 k\u1E5Bt\u0101 tasm\u0101n me yuktam evaitat sattvopadravak\u0101ri\u1E47a\u1E25 tacchastra\u1E43 mama k\u0101ya\u015B ca dvaya\u1E43 du\u1E25khasya k\u0101ra\u1E47am tena \u015Bastra\u1E43 may\u0101 k\u0101yo g\u1E5Bh\u012Bta\u1E25 kutra kupyate ga\u1E47\u1E0Do \u2019ya\u1E43 pratim \u0101k\u0101ro g\u1E5Bh\u012Bto gha\u1E6D\u1E6Dan\u0101saha\u1E25 t\u1E5B\u1E63\u1E47\u0101ndhena may\u0101 tatra vyath\u0101y\u0101\u1E43 kutra kupyate du\u1E25kha\u1E43 necch\u0101mi du\u1E25khasya hetum icch\u0101mi b\u0101li\u015Ba\u1E25 sv\u0101par\u0101dh\u0101gate du\u1E25khe kasm\u0101d anyatra kupyate asipattravana\u1E43 yadvad yath\u0101 n\u0101rakapak\u1E63i\u1E47a\u1E25 matkarmajanit\u0101 eva tatheda\u1E43 kutra kupyate", " ");
}

/* harmony default export */ __webpack_exports__["default"] = (TextHtml);

/***/ }),

/***/ "./app/components/TextDetail2/Text.js":
/*!********************************************!*\
  !*** ./app/components/TextDetail2/Text.js ***!
  \********************************************/
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
/* harmony import */ var components_TextDetail_Text_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/TextDetail/Text.css */ "./app/components/TextDetail/Text.css");
/* harmony import */ var components_TextDetail_Text_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(components_TextDetail_Text_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_TextSegment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/TextSegment */ "./app/lib/TextSegment.js");
/* harmony import */ var lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/AnnotatedText */ "./app/lib/AnnotatedText.js");
/* harmony import */ var lib_SegmentedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/SegmentedText */ "./app/lib/SegmentedText.js");
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! grapheme-splitter */ "./node_modules/grapheme-splitter/index.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(grapheme_splitter__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}












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
      var textLineClass = components_TextDetail_Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.textLine;
      var segmentHTML = '<p class="' + textLineClass + '">';
      if (segments.length === 0) return {
        __html: segmentHTML
      };
      var endPosition = segments[segments.length - 1].end + 1;
      var highlightClass = components_TextDetail_Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.highlight;
      var activeHighlightClass = components_TextDetail_Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.activeHighlight;
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
          var newClass = renderProps.theme.palette.mode === "light" ? components_TextDetail_Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.selectedRangelight : components_TextDetail_Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.selectedRangeDark;
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

      var classes = [components_TextDetail_Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.text];

      if (this.props.row === 0) {
        classes.push(components_TextDetail_Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.textFirstRow);
      } // Generate HTML manually as it is much faster when
      // creating large numbers of elements, such as these spans.


      var html = this._renderedHtml ? this._renderedHtml : this.generateHtml(this.props, this.state);

      if (!this._renderedHtml) {
        this._renderedHtml = html;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: components_TextDetail_Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.textContainer
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
/* harmony import */ var components_TextDetail_TextDetail_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/TextDetail/TextDetail.css */ "./app/components/TextDetail/TextDetail.css");
/* harmony import */ var components_TextDetail_TextDetail_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(components_TextDetail_TextDetail_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var _TableOfContent_TableOfContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TableOfContent/TableOfContent */ "./app/components/TextDetail2/TableOfContent/TableOfContent.js");
/* harmony import */ var css_util_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! css/util.css */ "./app/css/util.css");
/* harmony import */ var css_util_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(css_util_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _TestHtml__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TestHtml */ "./app/components/TextDetail2/TestHtml.js");
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
    if (text.name) {
      props.changeSelectedWindow(2);
    }
  }

  var inlineControls = false;
  var textComponent = null;
  var splitText = null;
  var selectedWindow = props.selectedWindow;

  if (!props.annotatedText || !props.text || props.loading) {
    textComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: Math.random()
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
      splitText: splitText,
      limitWidth: limitWidth,
      selectedSegmentId: props.selectedSegmentId,
      annotationPositions: props.annotationPositions,
      selectedAnnotatedSegments: props === null || props === void 0 ? void 0 : props.selectedAnnotatedSegments,
      selectedWitness: props.selectedWitness,
      key: key,
      selectedSearchResult: props.selectedSearchResult,
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
      condition: props.condition
    });
  }

  var textComponents = [textComponent];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    ref: ref,
    className: components_TextDetail_TextDetail_css__WEBPACK_IMPORTED_MODULE_5___default.a.textDetail,
    sx: {
      height: "100%",
      flex: 1,
      bgcolor: "heading.main",
      color: "texts.main"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextDetailHeadingContainer__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader__WEBPACK_IMPORTED_MODULE_3___default.a, {
    loaded: !props.loading,
    zIndex: 5
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    style: {
      display: "flex",
      height: "100%",
      width: "100%",
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(components_TextDetail_TextDetail_css__WEBPACK_IMPORTED_MODULE_5___default.a.textContainer, css_util_css__WEBPACK_IMPORTED_MODULE_8___default.a.flex)
  }, !props.loading ? textComponents : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__["Slide"], {
    direction: "left",
    "in": props.showTableContent,
    container: ref.current,
    unmountOnExit: true,
    mountOnEnter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_6__["Box"], {
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




function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function F() {};

      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e2) {
          throw _e2;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e3) {
      didErr = true;
      err = _e3;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}









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
  var textFontSize = Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getTextFontSize2"])(state);
  var selectedText = Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getSelectedText2"])(state);
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
  var scrollToId = Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getScrollToId"])(state);
  var syncIdOnClick = Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getSyncIdOnClick"])(state);
  var textAlignment = Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getTextAlignment"])(state);
  var selectedWindow = Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getSelectedWindow"])(state);
  var searchValue = Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getSearchValue2"])(state);
  var isSecondWindowOpen = reducers__WEBPACK_IMPORTED_MODULE_7__["isSecondWindowOpen"](state);
  var condition = Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getConditionForAlignment"])(state);
  return {
    text: selectedText,
    textFontSize: textFontSize,
    annotatedText: annotatedText,
    selectedWitness: selectedWitness,
    loading: loading,
    annotationPositions: annotationPositions,
    scrollToId: scrollToId,
    syncIdOnClick: syncIdOnClick,
    textAlignment: textAlignment,
    textAlignmentById: Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getTextAlignmentById"])(state),
    selectedWindow: selectedWindow,
    selectedSourceRange: Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getSelectedSourceRange"])(state),
    selectedTargetRange: Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getSelectedTargetRange"])(state),
    showTableContent: Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getShowTableContent2"])(state),
    selectedSearchResult: Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getSelectedSearchResult2"])(state),
    searchResults: Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getSearchResults2"])(state, searchValue),
    searchValue: searchValue,
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
/* harmony import */ var components_TextDetail_TextDetailHeading_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/TextDetail/TextDetailHeading.css */ "./app/components/TextDetail/TextDetailHeading.css");
/* harmony import */ var components_TextDetail_TextDetailHeading_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(components_TextDetail_TextDetailHeading_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SelectVersion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectVersion */ "./app/components/TextDetail2/SelectVersion.js");
/* harmony import */ var _TextListContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextListContainer */ "./app/components/TextDetail2/TextListContainer.js");
/* harmony import */ var images_options_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! images/options.svg */ "./app/images/options.svg");
/* harmony import */ var _HeaderMenu_Settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HeaderMenu/Settings */ "./app/components/TextDetail2/HeaderMenu/Settings.js");
/* harmony import */ var _HeaderMenu_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HeaderMenu/Search */ "./app/components/TextDetail2/HeaderMenu/Search.js");
/* harmony import */ var _HeaderMenu_TableOfContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HeaderMenu/TableOfContent */ "./app/components/TextDetail2/HeaderMenu/TableOfContent.js");
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var _HeaderMenu_SearchList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HeaderMenu/SearchList */ "./app/components/TextDetail2/HeaderMenu/SearchList.js");



function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}













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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_11__["Stack"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_11__["Stack"], {
    direction: "row",
    spacing: 1,
    justifyContent: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_11__["Box"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_11__["ButtonGroup"], {
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
    className: components_TextDetail_TextDetailHeading_css__WEBPACK_IMPORTED_MODULE_3___default.a.button_group_menu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_Search__WEBPACK_IMPORTED_MODULE_8__["default"], {
    handleWindowSearch: handleWindowSearch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_Settings__WEBPACK_IMPORTED_MODULE_7__["default"], {
    textFontSize: props.textFontSize,
    onChangedFontSize: props.onChangedFontSize,
    onExport: props.onExport
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_TableOfContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    changeShowTableContent: props.changeShowTableContent,
    showTableContent: props.showTableContent
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_11__["Collapse"], {
    "in": showFind,
    mountOnEnter: true,
    unmountOnExit: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    onSubmit: handleSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_11__["Stack"], {
    direction: "row",
    spacing: 2,
    position: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_11__["TextField"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_11__["Button"], {
    variant: "outlined",
    size: "small",
    onClick: handleSearch,
    style: {
      height: 25
    }
  }, "Search"), props.searchResults && visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_11__["Box"], {
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
  }, results.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", null, "no such word present"), condition && results.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_SearchList__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onSelectedSearchResult: props.onSelectedSearchResult,
    searchValue: props.searchValue,
    results: results,
    selectedText: props.selectedText
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_11__["IconButton"], {
    "aria-label": "closeButton",
    onClick: closeSearchItemBox,
    size: "small",
    sx: {
      right: 15,
      top: 0,
      position: "absolute"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_10__["Close"], {
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
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}








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
    changeSelectSyncId: function changeSelectSyncId(payload) {},
    onSelectedSearchResult: function onSelectedSearchResult(text, start, length, selectedText) {
      if (!selectedText || selectedText.id !== text.id) {
        dispatch(batchActions([actions__WEBPACK_IMPORTED_MODULE_3__["selectedSearchResult2"](text.id, start, length), actions__WEBPACK_IMPORTED_MODULE_3__["selectedText2"](text)]));
      } else {
        dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["selectedSearchResult2"](text.id, start, length));
      }
    }
  });
};

var TextDetailHeadingContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null, mergeProps)(_TextDetailHeading__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (TextDetailHeadingContainer);

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
/* harmony import */ var components_TextDetail_TextList_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/TextDetail/TextList.css */ "./app/components/TextDetail/TextList.css");
/* harmony import */ var components_TextDetail_TextList_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(components_TextDetail_TextList_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/addTibetanShay */ "./app/lib/addTibetanShay.js");
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}









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
  var selectedText1 = props.selectedText1;
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
  var classes = [components_TextDetail_TextList_css__WEBPACK_IMPORTED_MODULE_3___default.a.textlist];

  var handleClick = function handleClick() {
    setIsOpen(function (prev) {
      return !prev;
    });
    if (isOpen === false) classes.push(components_TextDetail_TextList_css__WEBPACK_IMPORTED_MODULE_3___default.a.open);
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Box"], {
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
      noWrap: true
    }, Object(lib_addTibetanShay__WEBPACK_IMPORTED_MODULE_4__["default"])(data.name)))));
  }, [textslist]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["ClickAwayListener"], {
    onClickAway: function onClickAway() {
      return setIsOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "relative",
      marginLeft: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    onClick: handleClick,
    component: "div",
    variant: "outlined",
    sx: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: "10rem",
      height: "100%",
      color: "text.primary"
    },
    disabled: selectedText1 === null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Typography"], {
    noWrap: true
  }, selected ? selected : "select Text here")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Grow"], {
    "in": isOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes),
    sx: {
      position: "absolute",
      bgcolor: "heading.main",
      zIndex: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["TextField"], {
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
    selectedText1: Object(reducers__WEBPACK_IMPORTED_MODULE_4__["getSelectedText"])(state),
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
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}





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
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}




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
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}





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
      var nameHtml = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.textName
      }, name);
      var textSearchResults = [];
      var resultsCount = null;
      var extraRemaining = false;
      var loadingResults = false;

      if (searchTerm.length > 0) {
        nameHtml = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_HighlightedString__WEBPACK_IMPORTED_MODULE_10__["default"], {
          string: name,
          stringClass: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.textName,
          highlightClass: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.highlight,
          searchTerm: searchTerm
        });

        if (searchResults.hasOwnProperty(text.id)) {
          textSearchResults = searchResults[text.id].results;
          extraRemaining = searchResults[text.id].extra;
          loadingResults = searchResults[text.id].loading;
          resultsCount = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_ResultCount__WEBPACK_IMPORTED_MODULE_11__["default"], {
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

          if (isSelected) {
            // TODO: keeps getting rendered when selecting a syllable
            console.log("got selected result: %o", result);
          }

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_13__["Box"], {
            key: text.id + "_" + result[0],
            onClick: function onClick() {
              onSelectedSearchResult(text, result[0], searchTerm.length, selectedText);
            },
            sx: {
              bgcolor: "inherit",
              color: "inherit"
            },
            className: className
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_HighlightedString__WEBPACK_IMPORTED_MODULE_10__["default"], {
            string: result[1],
            highlightClass: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.highlight,
            searchTerm: searchTerm
          }));
        });
      }

      var searchText = function searchText() {
        _this2.props.onSearchText(text, searchTerm);
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_3__["CellMeasurer"], {
        columnIndex: 0,
        key: key,
        parent: parent,
        rowIndex: index,
        cache: cache
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        key: key,
        style: style,
        className: className
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.textNameRow,
        onClick: function onClick() {
          onSelectedText(texts[index]);
        }
      }, nameHtml, " ", resultsCount), textSearchResults.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.searchResults
      }, textSearchResultRows), extraRemaining && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.loadMore,
        onClick: searchText
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_LoadMore__WEBPACK_IMPORTED_MODULE_12__["default"], {
        loading: loadingResults
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var texts = this.props.texts;
      var rowCount = texts.length;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.textList
      }, this.props.texts && this.props.texts.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_2__["AutoSizer"], null, function (_ref2) {
        var height = _ref2.height,
            width = _ref2.width;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_virtualized_dist_es_List__WEBPACK_IMPORTED_MODULE_5__["List"], {
          ref: function ref(list) {
            return _this3.list = list;
          },
          height: height,
          rowCount: rowCount,
          rowHeight: _this3.cache.rowHeight,
          rowRenderer: _this3.rowRenderer,
          width: width,
          overscanRowCount: 3,
          deferredMeasurementCache: _this3.cache
        });
      }) : this.props.searching ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.textListLoader
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_loader__WEBPACK_IMPORTED_MODULE_9___default.a, {
        loaded: !this.props.searching,
        scale: 0.5
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
        className: _TextList_css__WEBPACK_IMPORTED_MODULE_8___default.a.searching
      }, "Searching\u2026")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("ul", {
        className: "textList"
      }));
    }
  }]);

  return TextList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

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
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}




 // import Button from "components/UI/Button";





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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    sx: {
      bgcolor: "inherit"
    },
    className: _TextsSearch_css__WEBPACK_IMPORTED_MODULE_1___default.a.textsSearchContainer // style={{ maxWidth: props.textListWidth }}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _TextsSearch_css__WEBPACK_IMPORTED_MODULE_1___default.a.textsSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: initiateSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    style: {
      outline: "none",
      maxWidth: 196
    },
    type: "text",
    id: "textSearchInput",
    placeholder: props.intl.formatMessage({
      id: "leftbar.search"
    }),
    ref: textInput
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: initiateSearch,
    variant: "outlined",
    size: "small",
    sx: {
      minWidth: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_5__["Search"], null)))));
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

/***/ "./app/components/TextsSearch/index.js":
/*!*********************************************!*\
  !*** ./app/components/TextsSearch/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextsSearchContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextsSearchContainer */ "./app/components/TextsSearch/TextsSearchContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TextsSearchContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./app/components/UI/AnnotationAvatar.css":
/*!************************************************!*\
  !*** ./app/components/UI/AnnotationAvatar.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"avatars":"AnnotationAvatar---avatars","avatar":"AnnotationAvatar---avatar"};

/***/ }),

/***/ "./app/components/UI/AnnotationAvatar.js":
/*!***********************************************!*\
  !*** ./app/components/UI/AnnotationAvatar.js ***!
  \***********************************************/
/*! exports provided: Avatarlist, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Avatarlist", function() { return Avatarlist; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var _AnnotationAvatar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnnotationAvatar.css */ "./app/components/UI/AnnotationAvatar.css");
/* harmony import */ var _AnnotationAvatar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AnnotationAvatar_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");




var imageUrl = {
  "སྡེ་དགེ": "https://www.lotsawahouse.org/Images/Situ_Panchen.jpg",
  "པེ་ཅིན།": "https://cdn.discordapp.com/attachments/959329505661554708/1034029050580172830/unknown.png",
  "སྣར་ཐང༌།": "https://www.lotsawahouse.org/Images/Situ_Panchen.jpg"
};

function AnnotationAvatar(_ref) {
  var name = _ref.name;

  function stringToColor(string) {
    var hash = 0;
    var i;
    /* eslint-disable no-bitwise */

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    var color = "#";

    for (i = 0; i < 3; i += 1) {
      var value = hash >> i * 8 & 0xff;
      color += "00".concat(value.toString(16)).slice(-2);
    }
    /* eslint-enable no-bitwise */


    return color;
  }

  if (name.includes("མཉམ་འབྲེལ་པར་མ།།") || name.includes("Working")) {
    name = "Working Edition";
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    alt: "dege",
    src: imageUrl[name],
    sx: {
      width: 24,
      height: 24,
      bgcolor: stringToColor(name),
      fontSize: 10
    }
  }, name.split(" ").length > 1 ? "".concat(name.split(" ")[0][0]).concat(name.split(" ")[1][0]) : "".concat(name[0]));
}

var Avatarlist = function Avatarlist() {
  var list = [{
    img: 23
  }, {
    img: 34
  }, {
    img: 70
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_3__["ThumbUpAlt"], {
    sx: {
      fontSize: 16,
      color: "rgba(0,0,0,0.5)"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _AnnotationAvatar_css__WEBPACK_IMPORTED_MODULE_2___default.a.avatars
  }, list.map(function (l, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _AnnotationAvatar_css__WEBPACK_IMPORTED_MODULE_2___default.a.avatar,
      key: "d-" + index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: "https://picsum.photos/".concat(l.img),
      alt: "index-image"
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["Chip"], {
    label: "+".concat(Math.floor(Math.random() * 100)),
    size: "small",
    sx: {
      fontSize: 11,
      height: 11
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (AnnotationAvatar);

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
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");




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
  }, !on ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
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
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}








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
  var content = _ref.content; // const content=props?.annotationData?.content

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

/***/ }),

/***/ "./app/components/UI/Voting/Vote.css":
/*!*******************************************!*\
  !*** ./app/components/UI/Voting/Vote.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"voteBtn":"Vote---voteBtn","number":"Vote---number","voteContainer":"Vote---voteContainer"};

/***/ }),

/***/ "./app/components/UI/Voting/index.js":
/*!*******************************************!*\
  !*** ./app/components/UI/Voting/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
/* harmony import */ var _Vote_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Vote.css */ "./app/components/UI/Voting/Vote.css");
/* harmony import */ var _Vote_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Vote_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AnnotationAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AnnotationAvatar */ "./app/components/UI/AnnotationAvatar.js");
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}






function index(_ref) {
  var data = _ref.data;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(20),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      no = _React$useState2[0],
      setno = _React$useState2[1];

  var handleClick = function handleClick() {
    return setno(function (prev) {
      return prev + 1;
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Vote_css__WEBPACK_IMPORTED_MODULE_2___default.a.voteContainer,
    onClick: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AnnotationAvatar__WEBPACK_IMPORTED_MODULE_3__["Avatarlist"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./app/components/UI/muiIcon/index.js":
/*!********************************************!*\
  !*** ./app/components/UI/muiIcon/index.js ***!
  \********************************************/
/*! exports provided: Edit, Share, VerticalSplit, SyncAlt, PersonAdd, Settings, Logout, Person, Menu, CheckBoxOutlineBlank, CheckBox, Language, ExpandMore, OpenInNew, Info, PermMedia, Book, Feedback, Close, YoutubeSearchedFor, Image, OndemandVideo, Audiotrack, Brightness7, Brightness4, FilterAlt, Search, Delete, ThumbUpAlt, Clear, Check */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Edit", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Edit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Share"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerticalSplit", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["VerticalSplit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SyncAlt", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["SyncAlt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonAdd", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["PersonAdd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Settings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Logout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Person"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Menu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBoxOutlineBlank", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["CheckBoxOutlineBlank"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBox", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["CheckBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Language"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpandMore", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["ExpandMore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenInNew", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["OpenInNew"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Info"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermMedia", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["PermMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Book"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Feedback", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Feedback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Close", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Close"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YoutubeSearchedFor", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["YoutubeSearchedFor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OndemandVideo", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["OndemandVideo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Audiotrack", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Audiotrack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Brightness7", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Brightness7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Brightness4", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Brightness4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterAlt", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["FilterAlt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Search"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Delete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThumbUpAlt", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["ThumbUpAlt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clear", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Clear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Check", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Check"]; });




/***/ }),

/***/ "./app/components/textDetail/FontSize.css":
/*!************************************************!*\
  !*** ./app/components/textDetail/FontSize.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"fontSize":"FontSize---fontSize"};

/***/ }),

/***/ "./app/components/textDetail/fontSize.js":
/*!***********************************************!*\
  !*** ./app/components/textDetail/fontSize.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FontSize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FontSize.css */ "./app/components/textDetail/FontSize.css");
/* harmony import */ var _FontSize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FontSize_css__WEBPACK_IMPORTED_MODULE_1__);



var FontSize = function FontSize(props) {
  var minimumSize = 14;
  var maximumSize = 48;
  var options = new Array(maximumSize - minimumSize).fill().map(function (value, index) {
    var size = minimumSize + index;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: size,
      key: size
    }, size);
  });

  var onChange = function onChange(e) {
    var target = event.target;
    var fontSize = Number(target.value);
    props.onChange(fontSize);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _FontSize_css__WEBPACK_IMPORTED_MODULE_1___default.a.fontSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: "fontSize"
  }, "Font Size"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    value: props.fontSize,
    onChange: onChange
  }, options));
};

/* harmony default export */ __webpack_exports__["default"] = (FontSize);

/***/ }),

/***/ "./app/components/utility/discourseForum.js":
/*!**************************************************!*\
  !*** ./app/components/utility/discourseForum.js ***!
  \**************************************************/
/*! exports provided: DiscourseForum, DiscourseTopicList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscourseForum", function() { return DiscourseForum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscourseTopicList", function() { return DiscourseTopicList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _discourseforumsettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discourseforumsettings */ "./app/components/utility/discourseforumsettings.js");



function postMessageReceived(e) {
  if (!e) {
    return;
  }

  if (e.data && e.data.type === "discourse-resize" && e.data.embedId) {
    var elem = document.getElementById(e.data.embedId);

    if (elem) {
      elem.height = e.data.height + "px";
    }
  }
}

window.addEventListener("message", postMessageReceived, false);
function DiscourseForum(_ref) {
  var topicId = _ref.topicId; // const topicId=1446

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (topicId) {
      window.DiscourseEmbed = {
        discourseUrl: "https://lopenling.org/",
        topicId: topicId
      };
      var d = document.createElement("script");
      d.type = "text/javascript";
      d.async = true;
      d.src = Object(_discourseforumsettings__WEBPACK_IMPORTED_MODULE_1__["default"])(topicId);
      (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(d);
    }
  }, []);
  if (!topicId) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Topic unavailable");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "discourse-comments-".concat(topicId)
  });
}
function DiscourseTopicList(_ref2) {
  var _ref2$category = _ref2.category,
      category = _ref2$category === void 0 ? "" : _ref2$category,
      _ref2$perPage = _ref2.perPage,
      perPage = _ref2$perPage === void 0 ? 5 : _ref2$perPage;
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    var lists = document.querySelectorAll("#topics");

    for (var i = 0; i < lists.length; i++) {
      var list = lists[i];
      var url = list.getAttribute("url");

      if (!url || url.length === 0) {
        console.error("Error, `discourse-url` was not found");
        continue;
      }

      var frameId = "de-" + Math.random().toString(36).substr(2, 9);
      var params = ["discourse_embed_id=" + frameId];
      list.removeAttribute("discourse-url");

      for (var j = 0; j < list.attributes.length; j++) {
        var attr = list.attributes[j];
        params.push(attr.name.replace("-", "_") + "=" + attr.value);
      }

      var iframe = document.createElement("iframe");
      iframe.src = url + "/embed/topics?" + params.join("&");
      iframe.id = frameId;
      iframe.frameBorder = 0;
      iframe.scrolling = "no";
      iframe.width = "100%";
      list.appendChild(iframe);
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "topics",
    url: "https://lopenling.org/",
    style: {
      maxHeight: "70vh",
      overflow: "scroll"
    },
    "per-page": perPage,
    category: category,
    template: "complete",
    status: "open",
    "allow-create": "true"
  });
}

/***/ }),

/***/ "./app/components/utility/discourseforumsettings.js":
/*!**********************************************************!*\
  !*** ./app/components/utility/discourseforumsettings.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (id) {
  var DE = window.DiscourseEmbed || {};
  var comments = document.getElementById("discourse-comments-".concat(id));

  if (comments) {
    // Thanks http://amendsoft-javascript.blogspot.ca/2010/04/find-x-and-y-coordinate-of-html-control.html
    var findPosY = function findPosY(obj) {
      var top = 0;

      if (obj.offsetParent) {
        while (1) {
          top += obj.offsetTop;
          if (!obj.offsetParent) break;
          obj = obj.offsetParent;
        }
      } else if (obj.y) {
        top += obj.y;
      }

      return top;
    };

    var normalizeUrl = function normalizeUrl(url) {
      return url.replace(/^https?(\:\/\/)?/, "");
    };

    var postMessageReceived = function postMessageReceived(e) {
      if (!e) {
        return;
      }

      if (!normalizeUrl(DE.discourseUrl).includes(normalizeUrl(e.origin))) {
        return;
      }

      if (e.data) {
        if (e.data.type === "discourse-resize" && e.data.height) {
          iframe.height = e.data.height + "px";
        }

        if (e.data.type === "discourse-scroll" && e.data.top) {
          // find iframe offset
          var destY = findPosY(iframe) + e.data.top;
          window.scrollTo(0, destY);
        }
      }
    };

    var iframe = document.createElement("iframe");
    ["discourseUrl", "discourseEmbedUrl", "discourseUserName", "discourseReferrerPolicy"].forEach(function (i) {
      if (window[i]) {
        DE[i] = DE[i] || window[i];
      }
    });
    var queryParams = {};

    if (DE.discourseEmbedUrl) {
      if (DE.discourseEmbedUrl.startsWith("/")) {
        console.error("discourseEmbedUrl must be a full URL, not a relative path");
      }

      queryParams.embed_url = encodeURIComponent(DE.discourseEmbedUrl);
    }

    if (DE.discourseUserName) {
      queryParams.discourse_username = DE.discourseUserName;
    }

    if (DE.topicId) {
      queryParams.topic_id = DE.topicId;
    }

    var src = DE.discourseUrl + "embed/comments";
    var keys = Object.keys(queryParams);

    if (keys.length > 0) {
      src += "?";

      for (var i = 0; i < keys.length; i++) {
        if (i > 0) {
          src += "&";
        }

        var k = keys[i];
        src += k + "=" + queryParams[k];
      }
    }

    iframe.src = src;
    iframe.id = "discourse-embed-frame";
    iframe.width = "100%";
    iframe.frameBorder = "0";
    iframe.scrolling = "no";
    iframe.referrerPolicy = DE.discourseReferrerPolicy || "no-referrer-when-downgrade";
    comments.appendChild(iframe);
    window.addEventListener("message", postMessageReceived, false);
  }
});
;

/***/ }),

/***/ "./app/components/utility/embedingVote.css":
/*!*************************************************!*\
  !*** ./app/components/utility/embedingVote.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"voteBtn":"embedingVote---voteBtn"};

/***/ }),

/***/ "./app/components/utility/embedingVote.js":
/*!************************************************!*\
  !*** ./app/components/utility/embedingVote.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var _embedingVote_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./embedingVote.css */ "./app/components/utility/embedingVote.css");
/* harmony import */ var _embedingVote_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_embedingVote_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}






var liste = [{
  annotationId: "234241weq",
  annotationContent: "sad",
  voteCount: 20
}, {
  annotationId: "12312weq",
  annotationContent: "happy",
  voteCount: 40
}];

function embedingVote(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(liste),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      list = _React$useState2[0],
      setList = _React$useState2[1];

  var handleClick = function handleClick(id) {
    //increase Count from axios and refresh
    var newList = list.map(function (l) {
      if (l.annotationId === id) return _objectSpread(_objectSpread({}, l), {}, {
        voteCount: l.voteCount + 1
      });else return l;
    });
    setList(newList);
  }; // if(!USER_LOGGED_IN) return <h1>Login please!</h1>


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      marginTop: 2
    }
  }, list.map(function (ls, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: {
        display: "flex",
        alignItems: "center"
      },
      key: ls.annotationId
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
      badgeContent: ls.voteCount,
      color: "primary"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_2__["Chip"], {
      label: ls.annotationContent,
      onClick: function onClick() {
        return handleClick(ls.annotationId);
      }
    })));
  }));
}

var mapStateToProps = function mapStateToProps(state) {
  console.log(state);
  return {
    user: "hi"
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(mapStateToProps)(embedingVote));

/***/ }),

/***/ "./app/components/utility/imageZoom.js":
/*!*********************************************!*\
  !*** ./app/components/utility/imageZoom.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var medium_zoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! medium-zoom */ "./node_modules/medium-zoom/dist/medium-zoom.esm.js");
 // import { MapInteractionCSS } from "react-map-interaction";



function imageZoom(_ref) {
  var children = _ref.children,
      cl = _ref.cl;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var images = document.querySelector("." + cl);
    Object(medium_zoom__WEBPACK_IMPORTED_MODULE_1__["default"])(images, {
      margin: 50,
      background: "rgba(0,0,0,0.4)",
      scrollOffset: 200
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children);
}

/* harmony default export */ __webpack_exports__["default"] = (imageZoom);

/***/ }),

/***/ "./app/components/utility/useLocalStorage.js":
/*!***************************************************!*\
  !*** ./app/components/utility/useLocalStorage.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useLocalStorage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}



function getSavedValue(key, initialValue) {
  var savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue; // if (initialValue instanceof function) return initialValue()

  return initialValue;
}

function useLocalStorage(key, initialValue) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    return getSavedValue(key, initialValue);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}

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

/***/ "./app/images/Indrajala_logo.png":
/*!***************************************!*\
  !*** ./app/images/Indrajala_logo.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b81eedeb7a90a13b48c4a1185a58ca30.png");

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
var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgPencilAltIcon = function SvgPencilAltIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 512 512"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
  })));
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
var _path, _path2;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgCheckCircle = function SvgCheckCircle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgCheckCircle);

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
var _path, _path2;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgNote = function SvgNote(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  })));
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
var _g;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgOptions = function SvgOptions(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 52.93 52.93"
  }, props), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "#010002"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: 26.465,
    cy: 25.59,
    r: 4.462
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M52.791 32.256c-.187-1.034-1.345-2.119-2.327-2.492l-2.645-1.004c-.982-.373-1.699-1.237-1.651-1.935.029-.417.046-.838.046-1.263 0-.284-.008-.566-.021-.846-.023-.467.719-1.193 1.677-1.624l2.39-1.074c.958-.432 2.121-1.565 2.194-2.613.064-.929-.047-2.196-.648-3.765a8.336 8.336 0 00-2.779-3.718c-.839-.633-2.423-.595-3.381-.163l-2.08.936c-.958.431-2.274.119-3.025-.616a17.282 17.282 0 00-.54-.509c-.778-.705-1.17-2-.796-2.983l.819-2.162c.373-.982.368-2.594-.322-3.385-.635-.728-1.643-1.579-3.215-2.281-1.764-.788-3.346-.811-4.483-.639-1.039.158-2.121 1.331-2.494 2.312l-.946 2.491c-.373.982-.798 1.775-.949 1.771a6.289 6.289 0 00-.274-.005c-.622 0-1.238.03-1.846.09-1.016.1-2.176-.507-2.607-1.465l-1.124-2.5c-.431-.959-1.538-2.21-2.589-2.227-.916-.016-2.207.209-3.936 1.028-1.874.889-2.971 1.742-3.611 2.437-.712.771-.554 2.416-.122 3.374l1.481 3.296c.431.958.256 2.266-.324 2.979-.579.714-1.786 1.033-2.768.661l-3.598-1.365c-.982-.373-2.65-.476-3.406.256-.658.637-1.412 1.709-2.056 3.51-.696 1.954-.867 3.332-.83 4.276.042 1.05 1.317 2.101 2.3 2.474l4.392 1.667c.982.373 1.782 1.244 1.839 1.941.055.699-.635 1.61-1.593 2.042l-4.382 1.97c-.958.431-2.211 1.539-2.227 2.589-.015.916.21 2.208 1.028 3.935.89 1.874 1.742 2.971 2.437 3.611.773.713 2.417.554 3.375.123l4.698-2.112c.958-.432 2.076-.412 2.525.013s.535 1.541.162 2.524L12.743 46.6c-.373.982-.476 2.65.256 3.404.638.659 1.709 1.414 3.51 2.057 1.954.697 3.333.868 4.277.831 1.05-.042 2.1-1.318 2.473-2.3l1.693-4.46c.373-.982 1.058-1.742 1.531-1.719a17.414 17.414 0 001.255.016c.219-.007.747.762 1.178 1.721l1.963 4.364c.431.958 1.605 1.986 2.653 2.038 1.121.056 2.669-.062 4.43-.734 1.685-.645 2.659-1.604 3.219-2.442.584-.873.388-2.517-.044-3.475l-1.606-3.573c-.431-.958-.169-2.191.527-2.824.693-.633 2-.9 2.981-.526l3.432 1.303c.982.373 2.64.489 3.478-.145.738-.56 1.591-1.49 2.281-3.034.827-1.854.785-3.605.561-4.846zM26.465 39.79c-7.844 0-14.201-6.357-14.201-14.2s6.357-14.2 14.201-14.2c7.842 0 14.2 6.357 14.2 14.2.001 7.843-6.358 14.2-14.2 14.2z"
  }))));
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
var _path, _path2, _path3;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgPageBreakIcon = function SvgPageBreakIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 30 40",
    fill: "currentColor"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M3 0h24v15H3z"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 3,
    d: "M0 20h8M11 20h8M22 20h8"
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M3 25h24v15H3z"
  })));
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
var _path, _path2;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgQuestionAnswer = function SvgQuestionAnswer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgQuestionAnswer);

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
var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgWrench = function SvgWrench(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 512 512"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
  })));
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
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}




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

/***/ "./app/lib/addTibetanShay.js":
/*!***********************************!*\
  !*** ./app/lib/addTibetanShay.js ***!
  \***********************************/
/*! exports provided: NON_BREAKING_TSHEG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NON_BREAKING_TSHEG", function() { return NON_BREAKING_TSHEG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addTibetanShay; });
var tibetanVowels = ["ི", "ུ", "ེ", "ོ"];
var shaySwallowers = ["ཀ", "ག"];
var NON_BREAKING_TSHEG = "༌";

function isTibetanCharacter(_char) {
  return _char.codePointAt(0) >= 3840 && _char.codePointAt(0) <= 4095;
}
/**
 * Returns the given string with a Tibetan shay character
 * added (or omitted) correctly.
 * @param {string} str
 * @returns {string}
 */


function addTibetanShay(str) {
  var alternateEnd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var lastChar = str.slice(-1);
  var newStr = "";

  if (!isTibetanCharacter(lastChar)) {
    newStr = str;

    if (alternateEnd) {
      newStr += alternateEnd;
    }
  } else if (lastChar === "ང") {
    newStr += str + NON_BREAKING_TSHEG + "།";
  } else if (shaySwallowers.indexOf(lastChar) !== -1) {
    newStr += str;
  } else if (tibetanVowels.indexOf(lastChar) !== -1) {
    if (shaySwallowers.indexOf(str.charAt(str.length - 2)) !== -1) {
      newStr += str;
    } else {
      newStr += str + "།";
    }
  } else {
    newStr += str + "།";
  }

  return newStr;
}

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
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
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

/***/ "./app/shortcuts.js":
/*!**************************!*\
  !*** ./app/shortcuts.js ***!
  \**************************/
/*! exports provided: handleKeyDown, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleKeyDown", function() { return handleKeyDown; });
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var state_helpers_TextStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! state_helpers/TextStore */ "./app/state_helpers/TextStore.js");
/* harmony import */ var lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/AnnotatedText */ "./app/lib/AnnotatedText.js");
/* harmony import */ var lib_Source__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/Source */ "./app/lib/Source.js");
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var lib_TextSegment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/TextSegment */ "./app/lib/TextSegment.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux-batched-actions */ "./node_modules/redux-batched-actions/lib/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(redux_batched_actions__WEBPACK_IMPORTED_MODULE_7__);
var _shortcuts;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}










var closeAnnotationControls = function closeAnnotationControls(state, dispatch) {
  var activeAnnotation = reducers__WEBPACK_IMPORTED_MODULE_1__["getActiveTextAnnotation"](state);

  if (activeAnnotation) {
    var dismissTextAnnotation = actions__WEBPACK_IMPORTED_MODULE_0__["changedActiveTextAnnotation"](null);
    dispatch(dismissTextAnnotation);
  }
};

var addPageBreak = function addPageBreak(state, dispatch) {
  addBreak(state, dispatch, lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["ANNOTATION_TYPES"].pageBreak);
};

var addLineBreak = function addLineBreak(state, dispatch) {
  addBreak(state, dispatch, lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["ANNOTATION_TYPES"].lineBreak);
};

var addBreak = function addBreak(state, dispatch, breakType) {
  var selectBreak = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_1__["getSelectedTextWitness"](state);
  var activeAnnotation = reducers__WEBPACK_IMPORTED_MODULE_1__["getActiveTextAnnotation"](state);

  if (!activeAnnotation || activeAnnotation.isType(lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["ANNOTATION_TYPES"].pageBreak) || activeAnnotation.isType(lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["ANNOTATION_TYPES"].lineBreak)) {
    return;
  }

  var annotatedText = null;

  if (selectedWitness) {
    annotatedText = state_helpers_TextStore__WEBPACK_IMPORTED_MODULE_2__["getWitnessText"](state, selectedWitness.id);
  }

  var user = reducers__WEBPACK_IMPORTED_MODULE_1__["getUser"](state);

  if (activeAnnotation && selectedWitness && annotatedText && user) {
    var breakAnnotation = new lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["default"](null, activeAnnotation.witness, activeAnnotation.end + 1, 0, null, breakType, selectedWitness, user);

    if (!breakExists(annotatedText, breakAnnotation)) {
      var selectedWitnessData = reducers__WEBPACK_IMPORTED_MODULE_1__["dataFromWitness"](selectedWitness);
      var actionsBatch = [];
      actionsBatch.push(actions__WEBPACK_IMPORTED_MODULE_0__["createdAnnotation"](breakAnnotation));
      actionsBatch.push(actions__WEBPACK_IMPORTED_MODULE_0__["appliedAnnotation"](breakAnnotation.uniqueId, selectedWitnessData));

      if (selectBreak) {
        actionsBatch.push(actions__WEBPACK_IMPORTED_MODULE_0__["changedActiveTextAnnotation"](breakAnnotation));
      } else {
        actionsBatch.push(actions__WEBPACK_IMPORTED_MODULE_0__["changedActiveTextAnnotation"](null));
      }

      dispatch(Object(redux_batched_actions__WEBPACK_IMPORTED_MODULE_7__["batchActions"])(actionsBatch));
    }
  }
};

var breakExists = function breakExists(annotatedText, breakAnnotation) {
  return annotationTypeExists(annotatedText, lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["ANNOTATION_TYPES"].pageBreak, breakAnnotation.start) || annotationTypeExists(annotatedText, lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["ANNOTATION_TYPES"].lineBreak, breakAnnotation.start);
};

var annotationTypeExists = function annotationTypeExists(annotatedText, type, position) {
  var annotations = annotatedText.getAnnotationsOfType(type);

  for (var id in annotations) {
    if (annotations.hasOwnProperty(id)) {
      var annotation = annotations[id];

      if (position === annotation.start) {
        return true;
      }
    }
  }

  return false;
};

var selectNextSegment = function selectNextSegment(state, dispatch) {
  var selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_1__["getSelectedTextWitness"](state);
  var activeAnnotation = reducers__WEBPACK_IMPORTED_MODULE_1__["getActiveTextAnnotation"](state);
  var annotatedText = null;

  if (selectedWitness) {
    annotatedText = state_helpers_TextStore__WEBPACK_IMPORTED_MODULE_2__["getWitnessText"](state, selectedWitness.id);
  }

  if (!selectedWitness || !activeAnnotation || !annotatedText) return;
  var segments, start, length, nextPos;

  if (activeAnnotation.isDeletion) {
    var nextOriginalPos = activeAnnotation.end + 1;
    var nextSegment = annotatedText.segmentAtOriginalPosition(nextOriginalPos);

    if (nextSegment && nextSegment instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_6__["default"]) {
      nextPos = nextSegment.start;
    } else if (nextSegment && typeof nextSegment == "number") {// TODO: finish this - deletion after another deletion
    }
  } else {
    segments = annotatedText.segmentsForAnnotation(activeAnnotation);
    start = typeof segments[0] == "number" ? segments[0] : segments[0].start;
    length = activeAnnotation.content.length;
    nextPos = start + length;
  } // TODO: needs to add support for non-active insertion.
  // These are visible on the working edition.


  if (nextPos === undefined) {
    console.warn("Can't get next segment after %o", activeAnnotation);
    return;
  }

  var existingAnnotations = annotatedText.annotationsForPosition(nextPos);

  if (activeAnnotation.isDeletion) {
    // The current deletion will be in exisitingAnnotations as it
    // shares a position with the next segment.
    existingAnnotations = existingAnnotations.filter(function (annotation) {
      activeAnnotation.uniqueId !== annotation.uniqueId;
    });
  }

  var newActiveAnnotation = null;

  if (existingAnnotations.length > 0) {
    newActiveAnnotation = existingAnnotations[0];
  } else {
    var segment = annotatedText.segmentedText.segmentAtPosition(nextPos);

    if (segment) {
      var baseAnnotation = annotatedText.getBaseAnnotation(nextPos, segment.length);
      var workingWitness = reducers__WEBPACK_IMPORTED_MODULE_1__["getWorkingWitness"](state, selectedWitness.text.id);
      var user = reducers__WEBPACK_IMPORTED_MODULE_1__["getUser"](state);

      if (baseAnnotation && workingWitness && user && segment) {
        newActiveAnnotation = new lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["default"](lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_3__["WORKING_VERSION_ANNOTATION_ID"], workingWitness, baseAnnotation.start, baseAnnotation.length, segment.text, lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["ANNOTATION_TYPES"].variant, selectedWitness, user);
      }
    }
  }

  if (newActiveAnnotation) {
    dispatch(actions__WEBPACK_IMPORTED_MODULE_0__["changedActiveTextAnnotation"](newActiveAnnotation));
  }
};

var selectPreviousSegment = function selectPreviousSegment(state, dispatch) {
  var selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_1__["getSelectedTextWitness"](state);
  var activeAnnotation = reducers__WEBPACK_IMPORTED_MODULE_1__["getActiveTextAnnotation"](state);
  var annotatedText = null;

  if (selectedWitness) {
    annotatedText = state_helpers_TextStore__WEBPACK_IMPORTED_MODULE_2__["getWitnessText"](state, selectedWitness.id);
  }

  if (!selectedWitness || !activeAnnotation || !annotatedText || activeAnnotation.start === 0) return;
  var segments, start, prevPos;
  var prevOriginalPos = activeAnnotation.start - 1;
  var prevSegment = annotatedText.segmentAtOriginalPosition(prevOriginalPos);

  if (prevSegment && prevSegment instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_6__["default"]) {
    prevPos = prevSegment.start;
  } else if (prevSegment && typeof prevSegment == "number") {
    var prevAnnotation = annotatedText.annotationsForPosition(prevSegment);

    var _segments = annotatedText.segmentsForAnnotation(activeAnnotation);

    if (_segments.length > 0) {
      prevPos = typeof _segments[0] == "number" ? _segments[0] : _segments[0].start;
    }
  } // TODO: needs to add support for non-active insertion.
  // These are visible on the working edition.


  if (prevPos === undefined) {
    console.warn("Can't get previous segment before %o", activeAnnotation);
    return;
  }

  var existingAnnotations = annotatedText.annotationsForPosition(prevPos);
  var newActiveAnnotation = null;

  if (existingAnnotations.length > 0) {
    newActiveAnnotation = existingAnnotations[0];

    if (newActiveAnnotation.isDeletion && prevSegment && prevSegment instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_6__["default"]) {
      newActiveAnnotation = null;
    }
  }

  if (!newActiveAnnotation && prevSegment && prevSegment instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_6__["default"]) {
    var baseAnnotation = annotatedText.getBaseAnnotation(prevPos, prevSegment.length);
    var workingWitness = reducers__WEBPACK_IMPORTED_MODULE_1__["getWorkingWitness"](state, selectedWitness.text.id);
    var user = reducers__WEBPACK_IMPORTED_MODULE_1__["getUser"](state);

    if (baseAnnotation && workingWitness && user && prevSegment) {
      newActiveAnnotation = new lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["default"](lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_3__["WORKING_VERSION_ANNOTATION_ID"], workingWitness, baseAnnotation.start, baseAnnotation.length, prevSegment.text, lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["ANNOTATION_TYPES"].variant, selectedWitness, user);
    }
  }

  if (newActiveAnnotation) {
    dispatch(actions__WEBPACK_IMPORTED_MODULE_0__["changedActiveTextAnnotation"](newActiveAnnotation));
  }
};

var extendSelectionRight = function extendSelectionRight(state, dispatch) {
  var selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_1__["getSelectedTextWitness"](state);
  var activeAnnotation = reducers__WEBPACK_IMPORTED_MODULE_1__["getActiveTextAnnotation"](state);
  var annotatedText = null;

  if (selectedWitness) {
    annotatedText = state_helpers_TextStore__WEBPACK_IMPORTED_MODULE_2__["getWitnessText"](state, selectedWitness.id);
  }

  if (!selectedWitness || !activeAnnotation || !annotatedText) return; // Don't support deletions yet

  if (activeAnnotation.isDeletion) {
    return;
  }

  var segments = annotatedText.segmentsForAnnotation(activeAnnotation);
  var start = typeof segments[0] == "number" ? segments[0] : segments[0].start;
  var length = activeAnnotation.content.length;
  var nextPos = start + length;

  if (nextPos === undefined) {
    console.warn("Can't get next segment after %o", activeAnnotation);
    return;
  }

  var existingAnnotations = annotatedText.annotationsForPosition(nextPos);
  var nextAnnotation = null;

  if (existingAnnotations.length > 0) {
    nextAnnotation = existingAnnotations[0];
  } else {
    var segment = annotatedText.segmentedText.segmentAtPosition(nextPos);

    if (segment) {
      var baseAnnotation = annotatedText.getBaseAnnotation(nextPos, segment.length);
      var workingWitness = reducers__WEBPACK_IMPORTED_MODULE_1__["getWorkingWitness"](state, selectedWitness.text.id);
      var user = reducers__WEBPACK_IMPORTED_MODULE_1__["getUser"](state);

      if (baseAnnotation && workingWitness && user && segment) {
        nextAnnotation = new lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["default"](lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_3__["WORKING_VERSION_ANNOTATION_ID"], workingWitness, baseAnnotation.start, baseAnnotation.length, segment.text, lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["ANNOTATION_TYPES"].variant, selectedWitness, user);
      }
    }
  }

  if (nextAnnotation) {
    var newAnnotation = new lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["default"](lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_3__["WORKING_VERSION_ANNOTATION_ID"], nextAnnotation.witness, activeAnnotation.start, activeAnnotation.length + nextAnnotation.length, activeAnnotation.content + nextAnnotation.content, activeAnnotation.type, activeAnnotation.creatorWitness, activeAnnotation.creatorUser);
    dispatch(actions__WEBPACK_IMPORTED_MODULE_0__["changedActiveTextAnnotation"](newAnnotation));
  }
};

var reduceSelectionLeft = function reduceSelectionLeft(state, dispatch) {
  var selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_1__["getSelectedTextWitness"](state);
  var activeAnnotation = reducers__WEBPACK_IMPORTED_MODULE_1__["getActiveTextAnnotation"](state);
  var annotatedText = null;

  if (selectedWitness) {
    annotatedText = state_helpers_TextStore__WEBPACK_IMPORTED_MODULE_2__["getWitnessText"](state, selectedWitness.id);
  }

  if (!selectedWitness || !activeAnnotation || activeAnnotation.isSaved || !annotatedText) return; // Don't support deletions yet

  if (activeAnnotation.isDeletion) {
    return;
  }

  var segments = annotatedText.segmentsForAnnotation(activeAnnotation); // Last segment, can't reduce further

  if (segments.length === 1) return;
  segments.pop();
  var content = segments.reduce(function (acc, current) {
    if (current instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_6__["default"]) {
      acc += current.text;
    }

    return acc;
  }, '');
  var newAnnotation = new lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["default"](lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_3__["WORKING_VERSION_ANNOTATION_ID"], activeAnnotation.witness, activeAnnotation.start, content.length, content, activeAnnotation.type, activeAnnotation.creatorWitness, activeAnnotation.creatorUser);
  dispatch(actions__WEBPACK_IMPORTED_MODULE_0__["changedActiveTextAnnotation"](newAnnotation));
};

var shortcuts = (_shortcuts = {
  Escape: closeAnnotationControls
}, _defineProperty(_shortcuts, "shift-Enter", addPageBreak), _defineProperty(_shortcuts, "Enter", addLineBreak), _defineProperty(_shortcuts, "ArrowLeft", selectPreviousSegment), _defineProperty(_shortcuts, "ArrowRight", selectNextSegment), _defineProperty(_shortcuts, "shift-ArrowRight", extendSelectionRight), _defineProperty(_shortcuts, "shift-ArrowLeft", reduceSelectionLeft), _shortcuts);

var getShortcutKey = function getShortcutKey(e) {
  var key = e.key;

  if (e.shiftKey) {
    key = "shift-" + key;
  }

  return key;
};

var handleKeyDown = function handleKeyDown(e, state, dispatch) {
  var key = getShortcutKey(e);

  if (shortcuts.hasOwnProperty(key)) {
    shortcuts[key](state, dispatch);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (shortcuts);

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


function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}







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

/***/ }),

/***/ "./node_modules/react-universal-component/dist/requireById sync recursive ^.*$":
/*!***************************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/requireById sync ^.*$ ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": "./node_modules/react-universal-component/dist/requireById/index.js",
	"./": "./node_modules/react-universal-component/dist/requireById/index.js",
	"./index": "./node_modules/react-universal-component/dist/requireById/index.js",
	"./index.js": "./node_modules/react-universal-component/dist/requireById/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/react-universal-component/dist/requireById sync recursive ^.*$";

/***/ })

}]);
//# sourceMappingURL=2.parkhang-dev.js.map