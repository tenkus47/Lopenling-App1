(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[47],{

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
    return _this;
  }

  _createClass(SplitTextComponent, [{
    key: "scrollEvent",
    value: function scrollEvent(e) {
      if (this.selectedWindow === 2) return null;

      if (this.selectedWindow === 1 && this.isPanelLinked) {
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
        this.imageAlignmentById.map(function (l) {
          var number = document.getElementById("s_" + (l === null || l === void 0 ? void 0 : l.start));

          if (number) {
            var _position2 = number.getBoundingClientRect();

            if (_position2.top > 102) {
              imageIdList.push({
                id: l.id,
                start: l.start,
                end: l.end
              });
            }
          }
        });

        if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(list) || !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(imageIdList)) {
          if (this.selectedWindow === 1) {
            this.debouncedScroll(list, imageIdList);
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
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      this.resizeHandler = lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(function () {
        _this3.calculatedImageHeight = null;

        _this3.updateList();
      }, 600).bind(this);
      this.debouncedScroll = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (list, imagelist) {
        if (list.length) {
          var _list$;

          _this3.changeScrollToId({
            id: (_list$ = list[0]) === null || _list$ === void 0 ? void 0 : _list$.start,
            from: 1
          });
        }

        if (imagelist.length) {
          var _imagelist$, _imagelist$2;

          _this3.changeImageScrollId({
            id: {
              start: (_imagelist$ = imagelist[0]) === null || _imagelist$ === void 0 ? void 0 : _imagelist$.start,
              end: (_imagelist$2 = imagelist[0]) === null || _imagelist$2 === void 0 ? void 0 : _imagelist$2.end
            },
            from: 1
          });
        }
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
          setTimeout(function () {
            list.scrollToRow(selectedTextIndex);
            setTimeout(function () {
              list.scrollToPosition(list.props.scrollTop - 300);
            }, 0);
          }, 100);
        }
      }

      this.textAlignmentById = this.props.textAlignmentById;
      this.isPanelLinked = this.props.isPanelLinked;
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
      } // scroll control linked with alignment on click


      if (this.selectedWindow === 2 && scrollToId.from == 2 && this.isPanelLinked && this.condition && scrollToId.id !== null) {
        var _list2 = this.list;
        this.textAlignmentById = this.props.textAlignmentById || [];
        this.splitText.style.scrollBehavior = "smooth";

        if (Alignment && this.isPanelLinked) {
          var req = this.textAlignmentById.find(function (l) {
            return l.TStart === scrollToId.id;
          });

          var _start = req === null || req === void 0 ? void 0 : req.start;

          if (_start !== null) {
            var _selectedTextIndex3 = this.props.splitText.getTextIndexOfPosition(_start);

            setTimeout(function () {
              _list2.scrollToRow(_selectedTextIndex3);

              setTimeout(function () {
                _list2.scrollToPosition(_list2.props.scrollTop - 300);
              }, 0);
            }, 100);
          }
        }
      } //for scrolling to the highlighted alignment if its outside visible DOM


      if (this.targetId && scrollToId.from === "ua" && this.selectedWindow === 2 && scrollToId.id === "ua") {
        var _clickIdObj$source_se;

        var clickIdObj = Alignment.alignment.find(function (l) {
          return _this4.targetId >= l.target_segment.start && _this4.targetId < l.target_segment.end;
        });
        var syncClickTargetId = clickIdObj === null || clickIdObj === void 0 ? void 0 : (_clickIdObj$source_se = clickIdObj.source_segment) === null || _clickIdObj$source_se === void 0 ? void 0 : _clickIdObj$source_se.start;

        var _selectedTextIndex4 = this.props.splitText.getTextIndexOfPosition(syncClickTargetId);

        setTimeout(function () {
          list.scrollToRow(_selectedTextIndex4);
          setTimeout(function () {
            list.scrollToPosition(list.props.scrollTop - 300);
          }, 0);
        }, 100);
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
      console.log(id);
      var url = IMAGE_URL_PREFIX + prefix + id + "." + suffix + IMAGE_URL_SUFFIX;
      console.log(url);
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
        var _position3 = 0;
        var activePosition = null;

        for (var i = 0; i < graphemes.length; i++) {
          var grapheme = graphemes[i];
          var graphemeEnd = _position3 + (grapheme.length - 1);

          if (activePosition !== null) {
            var expectedEnd = activePosition + (string.length - 1);

            if (graphemeEnd >= expectedEnd) {
              verifiedPositions[activePosition + startingPosition] = [activePosition + startingPosition, graphemeEnd + startingPosition];
              activePosition = null;
            }
          } else if (positions.indexOf(_position3) !== -1) {
            if (string.length === grapheme.length) {
              verifiedPositions[_position3 + startingPosition] = [_position3 + startingPosition, graphemeEnd + startingPosition];
            } else if (string.length > grapheme.length) {
              activePosition = _position3;
            }
          } else {
            activePosition = null;
          }

          _position3 += grapheme.length;
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
        console.log("running");
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

/***/ "./node_modules/@mui/icons-material/Delete.js":
/*!****************************************************!*\
  !*** ./node_modules/@mui/icons-material/Delete.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=47.parkhang-dev.js.map