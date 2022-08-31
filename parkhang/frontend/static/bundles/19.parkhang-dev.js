(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[19],{

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

/***/ })

}]);
//# sourceMappingURL=19.parkhang-dev.js.map