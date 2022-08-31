(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[44],{

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
  var _textAlignment$source, _selectedWitness2, _textAlignment$target;

  var user = Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getUser"])(state);
  var loading = state.data.loadingWitnesses || state.data.loadingAnnotations;
  var textListVisible = Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getTextListVisible"])(state);
  var isPanelLinked = reducers__WEBPACK_IMPORTED_MODULE_13__["isPanelLinked"](state);
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
      isPanelLinked: isPanelLinked,
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
  var textAlignment = reducers__WEBPACK_IMPORTED_MODULE_13__["getTextAlignment"](state);
  var syncIdOnClick = reducers__WEBPACK_IMPORTED_MODULE_13__["getSyncIdOnClick"](state);
  var selectedWindow = reducers__WEBPACK_IMPORTED_MODULE_13__["getSelectedWindow"](state);
  var selectedWitness2 = reducers__WEBPACK_IMPORTED_MODULE_13__["getSelectedTextWitness2"](state);
  var Media = reducers__WEBPACK_IMPORTED_MODULE_13__["getMediaData"](state);
  var imageData = Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getImageData"])(state);
  var isSecondWindowOpen = reducers__WEBPACK_IMPORTED_MODULE_13__["isSecondWindowOpen"](state);
  var condition = (textAlignment === null || textAlignment === void 0 ? void 0 : (_textAlignment$source = textAlignment.source) === null || _textAlignment$source === void 0 ? void 0 : _textAlignment$source.witness) === ((_selectedWitness2 = selectedWitness) === null || _selectedWitness2 === void 0 ? void 0 : _selectedWitness2.id) && isSecondWindowOpen && (textAlignment === null || textAlignment === void 0 ? void 0 : (_textAlignment$target = textAlignment.target) === null || _textAlignment$target === void 0 ? void 0 : _textAlignment$target.witness) === (selectedWitness2 === null || selectedWitness2 === void 0 ? void 0 : selectedWitness2.id) && isPanelLinked;
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
    isPanelLinked: isPanelLinked,
    selectedImage: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getSelectedImage"])(state),
    isImagePortrait: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["isImagePortrait"])(state),
    isPanelVisible: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["isPanelVisible"])(state),
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
    condition: condition
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

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_castFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_castFunction.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/forIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/forIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    castFunction = __webpack_require__(/*! ./_castFunction */ "./node_modules/lodash/_castFunction.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Iterates over own and inherited enumerable string keyed properties of an
 * object and invokes `iteratee` for each property. The iteratee is invoked
 * with three arguments: (value, key, object). Iteratee functions may exit
 * iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forInRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forIn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
 */
function forIn(object, iteratee) {
  return object == null
    ? object
    : baseFor(object, castFunction(iteratee), keysIn);
}

module.exports = forIn;


/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ })

}]);
//# sourceMappingURL=44.parkhang-dev.js.map