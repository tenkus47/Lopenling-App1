(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[25],{

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

      if (element !== null && element !== void 0 && element.id.includes("s2_") && this.props.isPanelLinked && this.props.condition) {
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

/***/ })

}]);
//# sourceMappingURL=25.parkhang-dev.js.map