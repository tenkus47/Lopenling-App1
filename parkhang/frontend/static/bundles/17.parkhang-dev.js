(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[17],{

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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AnnotationDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnnotationDetail */ "./app/components/TextDetail/AnnotationDetail.js");
/* harmony import */ var _AnnotationDetailEdit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AnnotationDetailEdit */ "./app/components/TextDetail/AnnotationDetailEdit.js");
/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AnnotationControls.css */ "./app/components/TextDetail/AnnotationControls.css");
/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! css/colour.css */ "./app/css/colour.css");
/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(css_colour_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lib_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/User */ "./app/lib/User.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var _AnnotationControlsHeading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AnnotationControlsHeading */ "./app/components/TextDetail/AnnotationControlsHeading.js");
/* harmony import */ var _NoteEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NoteEditor */ "./app/components/TextDetail/NoteEditor.js");
/* harmony import */ var _QuestionView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./QuestionView */ "./app/components/TextDetail/QuestionView.js");
/* harmony import */ var _QuestionEditor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./QuestionEditor */ "./app/components/TextDetail/QuestionEditor.js");
/* harmony import */ var _QuestionsLoading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./QuestionsLoading */ "./app/components/TextDetail/QuestionsLoading.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Note */ "./app/components/TextDetail/Note.js");
/* harmony import */ var components_UI_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! components/UI/Button */ "./app/components/UI/Button.js");
/* harmony import */ var images_page_break_icon_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! images/page_break_icon.svg */ "./app/images/page_break_icon.svg");
/* harmony import */ var react_virtualized_dist_es_List__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-virtualized/dist/es/List */ "./node_modules/react-virtualized/dist/es/List/index.js");
/* harmony import */ var _AnnotationControlsHeader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./AnnotationControlsHeader */ "./app/components/TextDetail/AnnotationControlsHeader.js");
/* harmony import */ var lib_Question__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! lib/Question */ "./app/lib/Question.js");
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






















var CONTROLS_MARGIN_LEFT = 10;
var FAKE_LOGIN = false;
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
      var anchorPoint = anchorPoints.bottom;
      var moveToSide = false;
      var moveRight = 0;

      if (!offScreen && bottomGap < height) {
        moveToSide = true;
      }

      if (moveToSide) {
        arrow.className = _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.arrowLeft;

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
          this.arrow.className = _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.arrowTop;
          arrowLeft = width / 2 - this.arrow.offsetWidth / 2 - moveRight;
          if (arrowLeft < 0) arrowLeft = 0;
          this.arrow.style.left = arrowLeft + "px";
          arrowHeight = this.arrow.offsetHeight;
          this.arrow.style.top = 0 - arrowHeight + "px";
        }

        controls.style.top = top + measurements.height + arrowHeight + "px";
        controls.style.left = selectedLeft + selectedWidth / 2 - width / 2 + moveRight + "px";
      } else if (moveToSide) {
        arrow.className = _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.arrowRight;
        var _arrowHeight = arrow.offsetHeight;
        var controlsTop = measurements.top + measurements.height / 2 - _arrowHeight / 2;

        if (measurements.top + measurements.height + bottomGap - controlsTop < height) {
          controlsTop = measurements.top + measurements.height + bottomGap - height;
        }

        if (anchorPoint === anchorPoints.left) {
          // left side of selection
          arrow.style.left = width - 2 + "px";
          controls.style.left = selectedLeft - width - arrow.offsetWidth + "px";
        } else {
          // right-side of selection
          arrow.className = _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.arrowLeft;
          arrow.style.left = -arrow.offsetWidth + "px";
          controls.style.left = selectedLeft + selectedWidth + arrow.offsetWidth + "px"; // controls.style.right = 0 + "px";
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

      if (!lastElement) {
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

      var top = lastElement.offsetTop + extraTop;
      var textTop = lastElement.offsetTop;
      var left = lastElement.offsetLeft;
      var width = lastElement.offsetWidth;
      var height = lastElement.offsetHeight;
      var rowTop = top;
      var viewPortWidth = null;
      var topGap = 0;
      var bottomGap = 0;

      if (lastElement && splitTextRect) {
        var elRect = lastElement.getBoundingClientRect();
        bottomGap = splitTextRect.height + splitTextRect.top - elRect.bottom;
        viewPortWidth = splitTextRect.width;
      }

      if (firstElement && splitTextRect) {
        var _elRect = firstElement.getBoundingClientRect();

        topGap = splitTextRect.height - _elRect.top;
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
      var _this2 = this;

      var props = this.props;
      var annotations = [];
      var temporaryAnnotations = [];
      var anonymousUserMessage = null;
      var nothingSelected = null;
      var isLoggedIn = props.user.isLoggedIn || FAKE_LOGIN;
      var breakSelected = false;

      if (props.activeAnnotation && (props.activeAnnotation.isType(lib_Annotation__WEBPACK_IMPORTED_MODULE_8__["ANNOTATION_TYPES"].pageBreak) || props.activeAnnotation.isType(lib_Annotation__WEBPACK_IMPORTED_MODULE_8__["ANNOTATION_TYPES"].lineBreak))) {
        breakSelected = true;
      } // the selected word/sentence is props.anotationsData


      if (props.annotationsData) {
        props.annotationsData.map(function (annotationData) {
          var isEditing = false;
          var isActive = false;

          if (annotationData.isTemporary) {
            isEditing = true;
            isActive = true;
          } else if (!props.temporaryAnnotation && annotationData.annotation.uniqueId == props.activeAnnotation.uniqueId) {
            isActive = true;
          }

          if (isEditing) {
            var annotationDetail = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AnnotationDetailEdit__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
            var _annotationDetail = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AnnotationDetail__WEBPACK_IMPORTED_MODULE_2__["default"], {
              isWorkingSection: false,
              fontSize: props.fontSize,
              annotationData: annotationData,
              key: annotationData.annotation.uniqueId,
              isActive: isActive,
              selectAnnotationHandler: function selectAnnotationHandler() {
                if (isLoggedIn && !isEditing) {
                  props.didSelectAnnotation(annotationData.annotation);
                }
              },
              editAnnotationHandler: function editAnnotationHandler() {
                if (isLoggedIn && !isEditing) {
                  _this2.annotation = annotationData.annotation;
                  props.editAnnotation(annotationData.annotation);
                }
              },
              isLoggedIn: isLoggedIn
            });

            annotations.push(_annotationDetail);
          }
        }, this);

        if (!props.user.isLoggedIn === !FAKE_LOGIN) {
          // NOTE: FormattedMessage cannot take a child when using
          // the values option, so need to wrap it in a div
          anonymousUserMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.anonymousMessage,
            style: {
              position: "relative",
              width: "fit-content",
              border: "1px solid gray",
              paddingInline: 10
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_14__["FormattedMessage"], {
            id: "annotations.loginMessage",
            values: {
              loginLink: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_14__["FormattedMessage"], {
                id: "annotations.loginLink"
              }))
            }
          }));
        }
      } else {
        nothingSelected = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
          className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.nothingSelected
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
            return annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_8__["ANNOTATION_TYPES"].pageBreak && annotation.creatorWitness.id === _this2.props.selectedWitness.id;
          });
          lineBreaks = this.props.availableAnnotations.filter(function (annotation) {
            return annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_8__["ANNOTATION_TYPES"].lineBreak && annotation.creatorWitness.id === _this2.props.selectedWitness.id;
          });
        }

        if (pageBreaks.length > 0) {
          pageBreaksButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.breakButtons
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_UI_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
            title: "Page Break",
            accessoryType: "DELETE",
            icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](images_page_break_icon_svg__WEBPACK_IMPORTED_MODULE_17__["default"], {
              width: 20,
              height: 20
            }),
            onClick: function onClick() {
              _this2.props.deleteAnnotation(pageBreaks[0]);
            },
            isActive: true,
            backgroundColor: css_colour_css__WEBPACK_IMPORTED_MODULE_5___default.a.activeButton
          }));
          allowPageBreak = false;
        }

        if (lineBreaks.length > 0) {
          lineBreaksButton = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.breakButtons
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_UI_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
            title: "Line Break",
            accessoryType: "DELETE",
            icon: "\xB6",
            onClick: function onClick() {
              _this2.props.deleteAnnotation(lineBreaks[0]);
            },
            isActive: true,
            backgroundColor: css_colour_css__WEBPACK_IMPORTED_MODULE_5___default.a.activeButton
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

          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_NoteEditor__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Note__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_QuestionEditor__WEBPACK_IMPORTED_MODULE_12__["default"], {
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

        questionViews = questions.map(function (question) {
          var key = "QUESTION_" + question.annotationUniqueId;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_QuestionView__WEBPACK_IMPORTED_MODULE_11__["default"], {
            question: question,
            key: "question_" + question.annotationUniqueId
          });
        });
      }

      var questionHeading = null;

      if (questionViews.length > 0) {
        questionHeading = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h3", {
          className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.sectionHeading
        }, "Questions");
      }

      var questionsLoading = null;

      if (questionsAreLoading) {
        questionsLoading = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_QuestionsLoading__WEBPACK_IMPORTED_MODULE_13__["default"], null);
      }

      var allowQuestion = props.questions.length === 0 && props.temporaryQuestions.length === 0;
      var classes = [_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.annotationControls];

      if (props.inline) {
        classes.push(_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.inline);
      }

      var showHeader = true;
      if (anonymousUserMessage || breakSelected) showHeader = false;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default.a.apply(void 0, classes),
        ref: function ref(controls) {
          return _this2.controls = controls;
        }
      }, showHeader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_AnnotationControlsHeader__WEBPACK_IMPORTED_MODULE_19__["default"], {
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
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.annotationContent
      }, anonymousUserMessage, nothingSelected, !breakSelected && temporaryAnnotations, !breakSelected && annotations, pageBreaksButton, lineBreaksButton, tempNotes, notes, questionHeading, tempQuestions, questionsLoading, questionViews), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.arrow,
        ref: function ref(div) {
          return _this2.arrow = div;
        }
      }));
    }
  }]);

  return AnnotationControls;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["memo"](AnnotationControls));

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5__);
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Box"], {
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["IconButton"], {
        "aria-label": "delete",
        size: "small"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
      this.props.saveQuestion(this.props.question, this.props.defaultTitle, content);
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
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
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













var QuestionView = /*#__PURE__*/function (_React$Component) {
  _inherits(QuestionView, _React$Component);

  var _super = _createSuper(QuestionView);

  function QuestionView() {
    _classCallCheck(this, QuestionView);

    return _super.apply(this, arguments);
  }

  _createClass(QuestionView, [{
    key: "render",
    value: function render() {
      var topicUrl = app_constants__WEBPACK_IMPORTED_MODULE_9__["QUESTION_URL"] + this.props.question.topicId;
      var answerViews = [];
      var answers = this.props.question.answers;
      console.log(answers);

      for (var i = 0; i < answers.length; i++) {
        var answer = answers[i];
        answerViews.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AnswerView__WEBPACK_IMPORTED_MODULE_6__["default"], {
          answer: answer,
          key: "answer_" + answer.created
        }));
      }

      var name = this.props.question.name.length > 0 ? this.props.question.name : this.props.question.username;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_10__["Box"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_QuestionView_css__WEBPACK_IMPORTED_MODULE_1___default.a.question, _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2___default.a.padding),
        sx: {
          boxShadow: 2
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_QuestionView_css__WEBPACK_IMPORTED_MODULE_1___default.a.threadLink, _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2___default.a.text)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: topicUrl,
        target: "_blank"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedMessage"], {
        id: "question.viewThread"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2___default.a.text,
        dangerouslySetInnerHTML: {
          __html: this.props.question.content
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2___default.a.subTitle
      }, name, ",", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_7__["FormattedDate"], {
        value: this.props.question.created
      })), answerViews);
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



/***/ })

}]);
//# sourceMappingURL=17.parkhang-dev.js.map