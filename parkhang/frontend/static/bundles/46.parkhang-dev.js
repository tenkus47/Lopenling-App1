(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[46],{

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

/***/ })

}]);
//# sourceMappingURL=46.parkhang-dev.js.map