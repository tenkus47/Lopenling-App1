(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[27],{

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
    _this.list = null;
    _this.splitText = null;
    _this.cache = new react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_7__["CellMeasurerCache"]({
      fixedWidth: true
    });
    _this.rowRenderer = _this.rowRenderer.bind(_assertThisInitialized(_this));
    _this.isPanelLinked = _this.props.isPanelLinked;
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

      if (this.selectedWindow === 2 && this.isPanelLinked) {
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
      this.timer = setTimeout(function () {
        _this3.resizeHandler();
      }, 2000);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _Alignment$target,
          _this$props,
          _this$props2,
          _this4 = this;

      var scrollToId = this.props.scrollToId;
      this.targetId2 = this.props.syncIdOnClick;
      this.isPanelLinked = this.props.isPanelLinked;
      this.selectedWindow = this.props.selectedWindow;
      var SearchSyncId = this.props.syncIdOnSearch || null;
      var list = this.list;
      var result = this.props.searchResults;
      var Alignment = this.props.textAlignment;
      this.condition = (Alignment === null || Alignment === void 0 ? void 0 : (_Alignment$target = Alignment.target) === null || _Alignment$target === void 0 ? void 0 : _Alignment$target.witness) === this.props.selectedWitness.id;
      var con = (prevProps === null || prevProps === void 0 ? void 0 : prevProps.searchResults) !== ((_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.searchResults) || (prevProps === null || prevProps === void 0 ? void 0 : prevProps.syncIdOnSearch) !== ((_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.syncIdOnSearch); // for scrolling for search results;

      if (con && result) {
        if (SearchSyncId) {
          var selectedTextIndex = this.props.splitText.getTextIndexOfPosition(SearchSyncId);
          setTimeout(function () {
            list.scrollToRow(selectedTextIndex);
            setTimeout(function () {
              list.scrollToPosition(list.props.scrollTop - 300);
            }, 0);
          }, 100);
        }
      } //for scrolling to id aligned with first window
      //scroll control linked


      if (this.selectedWindow === 1 && scrollToId.from === 1 && this.isPanelLinked && this.condition && scrollToId.id !== null) {
        var _list = this.list;
        this.textAlignmentById = this.props.textAlignmentById || [];
        this.splitText.style.scrollBehavior = "smooth";

        if (Alignment && this.isPanelLinked) {
          var req = this.textAlignmentById.find(function (l) {
            return l.start === scrollToId.id;
          });
          var TStart = req === null || req === void 0 ? void 0 : req.TStart;

          if (TStart !== null) {
            var _selectedTextIndex = this.props.splitText.getTextIndexOfPosition(TStart);

            setTimeout(function () {
              _list.scrollToRow(_selectedTextIndex);

              setTimeout(function () {
                _list.scrollToPosition(_list.props.scrollTop - 300);
              }, 0);
            }, 100);
          }
        }
      } //for scrolling to the highlighted alignment if its outside visible DOM


      if (this.isPanelLinked && this.targetId2 && scrollToId.from === null && this.selectedWindow === 1 && scrollToId.id === null && this.condition) {
        var _clickIdObj$target_se;

        var clickIdObj = Alignment.alignment.find(function (l) {
          return _this4.targetId2 >= l.source_segment.start && _this4.targetId2 < l.source_segment.end;
        });
        var syncClickTargetId = clickIdObj === null || clickIdObj === void 0 ? void 0 : (_clickIdObj$target_se = clickIdObj.target_segment) === null || _clickIdObj$target_se === void 0 ? void 0 : _clickIdObj$target_se.start;

        var _selectedTextIndex2 = this.props.splitText.getTextIndexOfPosition(syncClickTargetId);

        setTimeout(function () {
          list.scrollToRow(_selectedTextIndex2);
          setTimeout(function () {
            list.scrollToPosition(list.props.scrollTop - 300);
          }, 0);
        }, 100);
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



/***/ })

}]);
//# sourceMappingURL=27.parkhang-dev.js.map