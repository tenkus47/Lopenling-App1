(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[20],{

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



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



















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
      var id = annotation.content + annotation.start;

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
      //Dominant only awailable for chojuk text
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
        if (stateProps.questionsData[question.uniqueId].questions.length > 0 || stateProps.questionsData[question.uniqueId].loading) {
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
//# sourceMappingURL=20.parkhang-dev.js.map