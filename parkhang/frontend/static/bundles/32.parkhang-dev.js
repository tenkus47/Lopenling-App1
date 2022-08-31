(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[32],{

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
      syncIdOnSearch: props.syncIdOnSearch
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

/***/ })

}]);
//# sourceMappingURL=32.parkhang-dev.js.map