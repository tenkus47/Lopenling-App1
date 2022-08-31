(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[34],{

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
  return {
    text: selectedText,
    textFontSize: textFontSize,
    annotatedText: annotatedText,
    selectedWitness: selectedWitness,
    loading: loading,
    annotationPositions: annotationPositions,
    isSecondWindowOpen: Object(reducers__WEBPACK_IMPORTED_MODULE_7__["isSecondWindowOpen"])(state),
    imageData: Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getImageData"])(state),
    isPanelLinked: isPanelLinked,
    selectedImage: Object(reducers__WEBPACK_IMPORTED_MODULE_7__["getSelectedImage"])(state),
    isImagePortrait: Object(reducers__WEBPACK_IMPORTED_MODULE_7__["isImagePortrait"])(state),
    isPanelVisible: Object(reducers__WEBPACK_IMPORTED_MODULE_7__["isPanelVisible"])(state),
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
    syncIdOnSearch: reducers__WEBPACK_IMPORTED_MODULE_7__["getSyncIdOnSearch2"](state)
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
//# sourceMappingURL=34.parkhang-dev.js.map