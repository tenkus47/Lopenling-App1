(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[1],{

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

/***/ "./app/components/TextDetail/AnnotationControls.css":
/*!**********************************************************!*\
  !*** ./app/components/TextDetail/AnnotationControls.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","inlineWidth":"280px","annotationControls":"AnnotationControls---annotationControls","annotationContent":"AnnotationControls---annotationContent","subTitle":"AnnotationControls---subTitle","title":"AnnotationControls---title","sectionHeading":"AnnotationControls---sectionHeading","text":"AnnotationControls---text","padding":"AnnotationControls---padding","arrowTop":"AnnotationControls---arrowTop","arrowLeft":"AnnotationControls---arrowLeft","arrowRight":"AnnotationControls---arrowRight","inline":"AnnotationControls---inline","arrow":"AnnotationControls---arrow","arrowDs":"AnnotationControls---arrowDs","nothingSelected":"AnnotationControls---nothingSelected","anonymousMessage":"AnnotationControls---anonymousMessage","noNotes":"AnnotationControls---noNotes","breakButtons":"AnnotationControls---breakButtons"};

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
      this.fakeLogin = this.props.fake_login_togle;
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
      var isLoggedIn = props.user.isLoggedIn;
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

        if (!props.user.isLoggedIn) {
          // NOTE: FormattedMessage cannot take a child when using
          // the values option, so need to wrap it in a div
          anonymousUserMessage = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
            className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_4___default.a.anonymousMessage,
            style: {
              position: "relative",
              background: "#eee",
              width: "fit-content",
              border: "1px solid gray",
              paddingInline: 10
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_14__["FormattedMessage"], {
            id: "annotations.loginMessage",
            values: {
              loginLink: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
                href: "/accounts/login/"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_intl__WEBPACK_IMPORTED_MODULE_14__["FormattedMessage"], {
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

/* harmony default export */ __webpack_exports__["default"] = (AnnotationControls);

/***/ }),

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

/***/ "./app/components/TextDetail/AnnotationControlsHeader.css":
/*!****************************************************************!*\
  !*** ./app/components/TextDetail/AnnotationControlsHeader.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","header":"AnnotationControlsHeader---header","Anotation_closeBtn":"AnnotationControlsHeader---Anotation_closeBtn","edit":"AnnotationControlsHeader---edit"};

/***/ }),

/***/ "./app/components/TextDetail/AnnotationControlsHeader.js":
/*!***************************************************************!*\
  !*** ./app/components/TextDetail/AnnotationControlsHeader.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_UI_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/UI/Button */ "./app/components/UI/Button.js");
/* harmony import */ var _AnnotationControlsHeader_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnnotationControlsHeader.css */ "./app/components/TextDetail/AnnotationControlsHeader.css");
/* harmony import */ var _AnnotationControlsHeader_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AnnotationControlsHeader_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var images_page_break_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! images/page_break_icon.svg */ "./app/images/page_break_icon.svg");
/* harmony import */ var images_note_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! images/note.svg */ "./app/images/note.svg");
/* harmony import */ var images_question_answer_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! images/question_answer.svg */ "./app/images/question_answer.svg");
/* harmony import */ var _UI_ApplyTooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/ApplyTooltip */ "./app/components/UI/ApplyTooltip.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_9__);
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












var AnnotationControlsHeader = /*#__PURE__*/function (_React$Component) {
  _inherits(AnnotationControlsHeader, _React$Component);

  var _super = _createSuper(AnnotationControlsHeader);

  function AnnotationControlsHeader() {
    _classCallCheck(this, AnnotationControlsHeader);

    return _super.call(this);
  }

  _createClass(AnnotationControlsHeader, [{
    key: "render",
    value: function render() {
      var allowPageBreak = this.props.addPageBreak != null;
      var allowLineBreak = this.props.addLineBreak != null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _AnnotationControlsHeader_css__WEBPACK_IMPORTED_MODULE_2___default.a.header
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        noBezel: true,
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_note_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
          width: 21,
          height: 21,
          style: {
            fill: "#1A73E8"
          }
        }),
        backgroundColor: "transparent",
        accessoryType: this.props.addNote ? "ADD" : null,
        onClick: this.props.addNote,
        disabled: this.props.addNote ? false : true,
        align: "center"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        noBezel: true,
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_question_answer_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
          width: 21,
          height: 21,
          style: {
            fill: "#F2A41F"
          }
        }),
        accessoryType: this.props.addQuestion ? "ADD" : null,
        onClick: this.props.addQuestion,
        disabled: this.props.addQuestion ? false : true,
        align: "left",
        backgroundColor: "transparent"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        noBezel: true,
        color: "#1E8E3E",
        fontSize: "18px",
        icon: "\xB6",
        accessoryType: allowLineBreak ? "ADD" : null,
        onClick: this.props.addLineBreak,
        disabled: !allowLineBreak,
        align: "left",
        backgroundColor: "transparent"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
        noBezel: true,
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_page_break_icon_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
          width: 21,
          height: 21,
          style: {
            fill: "darkgray"
          }
        }),
        accessoryType: allowPageBreak ? "ADD" : null,
        onClick: this.props.addPageBreak,
        disabled: !allowPageBreak,
        align: "left",
        backgroundColor: "transparent"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_ApplyTooltip__WEBPACK_IMPORTED_MODULE_6__["default"], {
        format: "annotation.edit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.props.editAnnotationHandler,
        className: _AnnotationControlsHeader_css__WEBPACK_IMPORTED_MODULE_2___default.a.edit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_9___default.a, null)))));
    }
  }]);

  return AnnotationControlsHeader;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AnnotationControlsHeader);

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

/***/ "./app/components/TextDetail/AnnotationDetail.css":
/*!********************************************************!*\
  !*** ./app/components/TextDetail/AnnotationDetail.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","annotationDetail":"AnnotationDetail---annotationDetail","active":"AnnotationDetail---active","annotationHeader":"AnnotationDetail---annotationHeader","activeIcon":"AnnotationDetail---activeIcon","editing":"AnnotationDetail---editing","actionButtons":"AnnotationDetail---actionButtons","edit":"AnnotationDetail---edit","editImage":"AnnotationDetail---editImage","save":"AnnotationDetail---save","cancel":"AnnotationDetail---cancel"};

/***/ }),

/***/ "./app/components/TextDetail/AnnotationDetail.js":
/*!*******************************************************!*\
  !*** ./app/components/TextDetail/AnnotationDetail.js ***!
  \*******************************************************/
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
/* harmony import */ var images_check_circle_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! images/check_circle.svg */ "./app/images/check_circle.svg");
/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! css/colour.css */ "./app/css/colour.css");
/* harmony import */ var css_colour_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(css_colour_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UI_ApplyTooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/ApplyTooltip */ "./app/components/UI/ApplyTooltip.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var MAXIMUM_TEXT_LENGTH = 250;

var AnnotationDetail = function AnnotationDetail(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      imageUrl = _useState2[0],
      setImageUrl = _useState2[1];

  function longest_str_in_array(arra) {
    var max_str = arra[0].length;
    var ans = arra[0].length;

    for (var i = 0; i < arra.length; i++) {
      var maxi = arra[i].length;

      if (maxi > max_str) {
        ans = arra[i].length;
        max_str = maxi;
      }
    }

    return ans;
  }

  function mergeArray(arr) {
    var textCount = arr.length;
    var maxPerLine = 55;

    for (var i = 0; i < Math.ceil(arr.join().length / maxPerLine) + 1; i++) {
      if (arr[i] && arr[i + 1] && arr[i].length < maxPerLine) {
        arr[i] = arr[i] + " " + arr[i + 1];
        arr.splice(i + 1, 1);
        mergeArray(arr);
      } else if (arr[i] && arr[i + 1] && arr[i].length > maxPerLine) {// code to cut selected text should be here
      }
    }

    return arr;
  }

  var desc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "<", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: "annotation.delete"
  }), ">");
  var content = props.annotationData.content;

  if (content.trim() !== "") {
    if (content.length > MAXIMUM_TEXT_LENGTH) {
      content = content.substr(0, MAXIMUM_TEXT_LENGTH) + "…";
    } // content variable is the selected trimmed context


    desc = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, content);
  }

  var classes = [_AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.annotationDetail];

  if (props.isActive) {
    classes.push(_AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.active);
  }

  var className = classnames__WEBPACK_IMPORTED_MODULE_1___default.a.apply(void 0, classes);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: className,
    onClick: props.selectAnnotationHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.annotationHeader
  }, props.isActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.activeIcon
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_check_circle_svg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      fill: css_colour_css__WEBPACK_IMPORTED_MODULE_5___default.a.activeButton
    },
    width: 15,
    height: 15
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, props.annotationData.name), props.isLoggedIn && props.isActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    style: {
      display: "none"
    },
    className: _AnnotationDetail_css__WEBPACK_IMPORTED_MODULE_3___default.a.edit,
    onClick: props.editAnnotationHandler,
    id: "editBtn"
  })), !props.isWorkingSection && desc);
};

/* harmony default export */ __webpack_exports__["default"] = (AnnotationDetail);

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

/***/ "./app/components/TextDetail/AnswerView.css":
/*!**************************************************!*\
  !*** ./app/components/TextDetail/AnswerView.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"name":"AnswerView---name","answer":"AnswerView---answer"};

/***/ }),

/***/ "./app/components/TextDetail/AnswerView.js":
/*!*************************************************!*\
  !*** ./app/components/TextDetail/AnswerView.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AnswerView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AnswerView_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnswerView.css */ "./app/components/TextDetail/AnswerView.css");
/* harmony import */ var _AnswerView_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AnswerView_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnnotationControls.css */ "./app/components/TextDetail/AnnotationControls.css");
/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button.css */ "./app/components/TextDetail/Button.css");
/* harmony import */ var _Button_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Button_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var lib_Answer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/Answer */ "./app/lib/Answer.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
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










var AnswerView = /*#__PURE__*/function (_React$Component) {
  _inherits(AnswerView, _React$Component);

  var _super = _createSuper(AnswerView);

  function AnswerView() {
    _classCallCheck(this, AnswerView);

    return _super.apply(this, arguments);
  }

  _createClass(AnswerView, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _AnswerView_css__WEBPACK_IMPORTED_MODULE_1___default.a.answer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2___default.a.text,
        dangerouslySetInnerHTML: {
          __html: this.props.answer.content
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2___default.a.subTitle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedMessage"], {
        id: "question.answeredBy"
      }), " ", this.props.answer.name, ",", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_6__["FormattedDate"], {
        value: this.props.answer.created
      })));
    }
  }]);

  return AnswerView;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./app/components/TextDetail/Button.css":
/*!**********************************************!*\
  !*** ./app/components/TextDetail/Button.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","save":"Button---save","cancel":"Button---cancel","buttonContainer":"Button---buttonContainer"};

/***/ }),

/***/ "./app/components/TextDetail/HeaderMenu/Annotate.js":
/*!**********************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/Annotate.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ToggleButton */ "./node_modules/@mui/material/ToggleButton/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");





var ToggleButton = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__["styled"])(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_3__["default"])(function (_ref) {
  var selectedcolor = _ref.selectedcolor;
  return {
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: selectedcolor
    }
  };
});
var theme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__["createTheme"])({
  palette: {
    text: {
      primary: "#00398e"
    }
  }
});

function Annotate(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ToggleButton, {
    value: "Annotate",
    selected: props.isAnnotating,
    style: {
      padding: 0,
      marginRight: 10
    },
    selectedcolor: "#053982",
    onClick: function onClick() {
      return props.changeIsAnnotating(!props.isAnnotating);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "Annotate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_1___default.a, null))));
}

/* harmony default export */ __webpack_exports__["default"] = (Annotate);

/***/ }),

/***/ "./app/components/TextDetail/HeaderMenu/Refresh.js":
/*!*********************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/Refresh.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Refresh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/Refresh */ "./node_modules/@mui/icons-material/Refresh.js");
/* harmony import */ var _mui_icons_material_Refresh__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Refresh__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");




function Refresh(_ref) {
  var isSecondWindowOpen = _ref.isSecondWindowOpen;
  var handleRefresh = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var updatelistBtn = document.getElementById("updateList");
    var updatelistBtn2 = document.getElementById("updateList2");
    if (updatelistBtn) updatelistBtn.click();
    if (updatelistBtn2) updatelistBtn2.click();
  }, [isSecondWindowOpen]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var timer = setTimeout(function () {
      handleRefresh();
    }, 500);
    return function () {
      return clearTimeout(timer);
    };
  }, [isSecondWindowOpen]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "text",
    size: "small",
    style: {
      padding: 0,
      color: "black"
    },
    onClick: handleRefresh
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Refresh__WEBPACK_IMPORTED_MODULE_1___default.a, null));
}

/* harmony default export */ __webpack_exports__["default"] = (Refresh);

/***/ }),

/***/ "./app/components/TextDetail/HeaderMenu/Search.js":
/*!********************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/Search.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");




function Search(_ref) {
  var handleWindowSearch = _ref.handleWindowSearch;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    size: "small",
    variant: "text",
    onClick: handleWindowSearch,
    style: {
      padding: 0,
      color: "black"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_1___default.a, null));
}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./app/components/TextDetail/HeaderMenu/Settings.js":
/*!**********************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/Settings.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/Settings */ "./node_modules/@mui/icons-material/Settings.js");
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../UI/Slider */ "./app/components/UI/Slider.js");
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Check */ "./node_modules/@mui/icons-material/Check.js");
/* harmony import */ var _mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Settings(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showOption = _useState2[0],
      setShowOption = _useState2[1];

  var handleClick = function handleClick() {
    setShowOption(function (prev) {
      return !prev;
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["ClickAwayListener"], {
    onClickAway: function onClickAway() {
      return setShowOption(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    onClick: handleClick,
    size: "small",
    variant: "text",
    style: {
      padding: 0,
      color: "black"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_1___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Grow"], {
    "in": showOption
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["MenuList"], {
    dense: true,
    style: {
      position: "absolute",
      right: 0,
      zIndex: 2,
      top: 30,
      backgroundColor: "#eee"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UI_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
    max: 20,
    min: 14,
    initialvalue: props.textFontSize,
    changeSize: props.onChangedFontSize
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
    onClick: function onClick() {
      return props.onExport();
    }
  }, "Export Document", props.exportingWitness && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], {
    onClick: function onClick() {
      return props.onChangePanelLink(!props.isPanelLinked);
    }
  }, props.isPanelLinked && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Check__WEBPACK_IMPORTED_MODULE_3___default.a, null), "link panels")))));
}

/* harmony default export */ __webpack_exports__["default"] = (Settings);

/***/ }),

/***/ "./app/components/TextDetail/HeaderMenu/Share.js":
/*!*******************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/Share.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Share__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Share */ "./node_modules/@mui/icons-material/Share.js");
/* harmony import */ var _mui_icons_material_Share__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Share__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ContentCopy */ "./node_modules/@mui/icons-material/ContentCopy.js");
/* harmony import */ var _mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Share(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showShare = _useState2[0],
      setShowShare = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var handleClose = function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["ClickAwayListener"], {
    onClickAway: function onClickAway() {
      return setShowShare(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    size: "small" // ref={domNode3}
    ,
    variant: "text",
    style: {
      padding: 0,
      color: "black"
    },
    onClick: function onClick() {
      return setShowShare(function (prev) {
        return !prev;
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
    title: "Share"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Share__WEBPACK_IMPORTED_MODULE_2___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShareOption, _extends({}, props, {
    showShare: showShare,
    setOpen: setOpen
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["Snackbar"], {
    open: open,
    autoHideDuration: 6000,
    onClose: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
    onClose: handleClose,
    severity: "success",
    sx: {
      width: "100%"
    }
  }, "The Url Copied to Clipboard !")));
}

/* harmony default export */ __webpack_exports__["default"] = (Share);

function ShareOption(props) {
  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      coppied = _useState6[0],
      setcoppied = _useState6[1];

  var textid = props.selectedText;
  var textid2 = props.selectedText2;
  var witnessid = props.selectedWitness;
  var witnessid2 = props.selectedWitness2;
  var url = "";

  if (textid2 && witnessid2) {
    url = window.location.origin + "/texts/".concat(textid.id, "/witnesses/").concat(witnessid === null || witnessid === void 0 ? void 0 : witnessid.id, "/texts2/").concat(textid2.id, "/witnesses2/").concat(witnessid2.id);
  } else {
    url = window.location.origin + "/texts/".concat(textid.id, "/witnesses/").concat(witnessid === null || witnessid === void 0 ? void 0 : witnessid.id);
  }

  var handleCopy = function handleCopy() {
    navigator.clipboard.writeText(url).then(function () {
      setcoppied(true);
      setTimeout(function () {
        setcoppied(false);
      }, 3000);
    })["catch"](function (e) {
      return console.log(e.message);
    })["finally"](function () {
      return props.setOpen(true);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["Fade"], {
    "in": props.showShare
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "absolute",
      top: 30,
      background: "white",
      width: 240,
      right: 10,
      boxShadow: "1px 1px 2px black",
      zIndex: 9999,
      padding: 10,
      borderRadius: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 10
    }
  }, props.selectedText.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: "center",
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    defaultValue: url,
    disabled: coppied
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: handleCopy,
    style: {
      color: coppied && "green"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_ContentCopy__WEBPACK_IMPORTED_MODULE_4___default.a, null)))));
}

/***/ }),

/***/ "./app/components/TextDetail/HeaderMenu/TableOfContent.js":
/*!****************************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/TableOfContent.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2__);




function TableOfContent(props) {
  function handleClick() {
    props.changeShowTableContent(!props.showTableContent);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: "right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: handleClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_2___default.a, null)));
}

/* harmony default export */ __webpack_exports__["default"] = (TableOfContent);

/***/ }),

/***/ "./app/components/TextDetail/HeaderMenu/WindowSplitter.js":
/*!****************************************************************!*\
  !*** ./app/components/TextDetail/HeaderMenu/WindowSplitter.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_VerticalSplit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material/VerticalSplit */ "./node_modules/@mui/icons-material/VerticalSplit.js");
/* harmony import */ var _mui_icons_material_VerticalSplit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_VerticalSplit__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var _mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ToggleButton */ "./node_modules/@mui/material/ToggleButton/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");





var ToggleButton = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["styled"])(_mui_material_ToggleButton__WEBPACK_IMPORTED_MODULE_3__["default"])(function (_ref) {
  var selectedcolor = _ref.selectedcolor;
  return {
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: selectedcolor
    }
  };
});
var theme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["createTheme"])({
  palette: {
    text: {
      primary: "#00398e"
    }
  }
});

function WindowSplitter(props) {
  var isSecondWindowOpen = props.isSecondWindowOpen,
      onChangeWindowOpen = props.onChangeWindowOpen;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ToggleButton, {
    value: "secondWindow",
    selected: isSecondWindowOpen,
    onClick: function onClick() {
      onChangeWindowOpen(!isSecondWindowOpen, 139);
    },
    style: {
      padding: 0
    },
    selectedcolor: "#053982"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
    title: "split panel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_VerticalSplit__WEBPACK_IMPORTED_MODULE_1___default.a, null))));
}

/* harmony default export */ __webpack_exports__["default"] = (WindowSplitter);

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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Note_css__WEBPACK_IMPORTED_MODULE_1___default.a.note
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Note_css__WEBPACK_IMPORTED_MODULE_1___default.a.header
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: _Note_css__WEBPACK_IMPORTED_MODULE_1___default.a.info
      }, this.props.note.creatorUser.name), this.props["delete"] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Note_css__WEBPACK_IMPORTED_MODULE_1___default.a["delete"],
        onClick: this["delete"].bind(this)
      }, "\xD7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(_QuestionView_css__WEBPACK_IMPORTED_MODULE_1___default.a.question, _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_2___default.a.padding)
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



/***/ }),

/***/ "./app/components/TextDetail/SelectVersion.css":
/*!*****************************************************!*\
  !*** ./app/components/TextDetail/SelectVersion.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","selectVersion":"SelectVersion---selectVersion","selected":"SelectVersion---selected","styled-select":"SelectVersion---styled-select"};

/***/ }),

/***/ "./app/components/TextDetail/SelectVersion.js":
/*!****************************************************!*\
  !*** ./app/components/TextDetail/SelectVersion.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _SelectVersion_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectVersion.css */ "./app/components/TextDetail/SelectVersion.css");
/* harmony import */ var _SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SelectVersion_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _mui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/styles */ "./node_modules/@mui/styles/index.js");
/* harmony import */ var components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/utility/useLocalStorage */ "./app/components/utility/useLocalStorage.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var style = function style(theme) {
  return {
    root: {
      minWidth: 60,
      padding: 0,
      textAlign: "center",
      fontWeight: "bold"
    },
    selectEmpty: {
      paddingLeft: "6px",
      backgroundColor: "transparent"
    },
    select: {
      color: "black",
      "&:not([multiple]) option": {
        backgroundColor: "#eee"
      }
    }
  };
};

var SelectVersion = function SelectVersion(props) {
  var witnesses;
  var tabName = "";
  var r = props.witnesses.findIndex(function (l) {
    var _props$activeWitness;

    return (l === null || l === void 0 ? void 0 : l.id) === ((_props$activeWitness = props.activeWitness) === null || _props$activeWitness === void 0 ? void 0 : _props$activeWitness.id);
  });
  var classtype = props.classes;

  var _useLocaleStorage = Object(components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_7__["default"])("selectedWitness", 0),
      _useLocaleStorage2 = _slicedToArray(_useLocaleStorage, 2),
      temp = _useLocaleStorage2[0],
      setTemp = _useLocaleStorage2[1];

  var classes = [_SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectOptions];

  if (props.witnesses) {
    witnesses = props.witnesses.map(function (witness) {
      return witness;
    });
    classes = [_SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.tab];
    witnesses.sort(function (a, b) {
      if (a.isWorking) {
        return -1;
      }

      if (b.isWorking) {
        return 1;
      }

      if (a.isBase) {
        return -1;
      }

      if (b.isBase) {
        return 1;
      }

      return 0;
    });
    witnesses = witnesses.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (props.witnesses.length > 0) {
      props.onSelectedWitness(witnesses[temp]);
    }
  }, [temp]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["NativeSelect"], {
    onChange: function onChange(e) {
      return setTemp(e.target.value);
    },
    className: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.selectVersion,
    value: r,
    label: "Version",
    classes: {
      root: classtype.selectEmpty,
      select: classtype.select
    },
    style: {
      border: 0
    }
  }, witnesses.map(function (witness, key) {
    if (witness.id === props.activeWitness.id) classes.push(_SelectVersion_css__WEBPACK_IMPORTED_MODULE_3___default.a.selected);
    tabName = witness.source.name;

    if (witness.isWorking) {
      var _props$user;

      tabName = props.intl.locale === "en" ? ((_props$user = props.user) === null || _props$user === void 0 ? void 0 : _props$user.name) === "User" ? "Working" : "My Edition" : "མཉམ་འབྲེལ་པར་མ།";
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: "versionSelect-".concat(key),
      value: key,
      className: classes,
      styles: {
        textAlign: "center"
      }
    }, tabName);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(Object(react_intl__WEBPACK_IMPORTED_MODULE_2__["injectIntl"])(Object(_mui_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(style)(SelectVersion))));

/***/ }),

/***/ "./app/components/TextDetail/SplitText.css":
/*!*************************************************!*\
  !*** ./app/components/TextDetail/SplitText.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","inlineWidth":"280px","annotationControls":"SplitText---annotationControls","annotationContent":"SplitText---annotationContent","subTitle":"SplitText---subTitle","title":"SplitText---title","sectionHeading":"SplitText---sectionHeading","text":"SplitText---text","padding":"SplitText---padding","arrowTop":"SplitText---arrowTop","arrowLeft":"SplitText---arrowLeft","arrowRight":"SplitText---arrowRight","inline":"SplitText---inline","arrow":"SplitText---arrow","arrowDs":"SplitText---arrowDs","nothingSelected":"SplitText---nothingSelected","anonymousMessage":"SplitText---anonymousMessage","noNotes":"SplitText---noNotes","breakButtons":"SplitText---breakButtons","splitText":"SplitText---splitText","splitTextRowContent":"SplitText---splitTextRowContent","splitTextRow":"SplitText---splitTextRow","pechaImage":"SplitText---pechaImage","controlsPlaceholder":"SplitText---controlsPlaceholder","hide":"SplitText---hide","pageNumber":"SplitText---pageNumber","hightlighter":"SplitText---hightlighter","pulse":"SplitText---pulse"};

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
/* harmony import */ var react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-virtualized/dist/es/CellMeasurer */ "./node_modules/react-virtualized/dist/es/CellMeasurer/index.js");
/* harmony import */ var react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-virtualized/styles.css */ "./node_modules/react-virtualized/styles.css");
/* harmony import */ var react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_virtualized_styles_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Text */ "./app/components/TextDetail/Text.js");
/* harmony import */ var lib_SplitText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/SplitText */ "./app/lib/SplitText.js");
/* harmony import */ var lib_SegmentedText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lib/SegmentedText */ "./app/lib/SegmentedText.js");
/* harmony import */ var lib_shallowEqual__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lib/shallowEqual */ "./app/lib/shallowEqual.js");
/* harmony import */ var _AnnotationControls__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./AnnotationControls */ "./app/components/TextDetail/AnnotationControls.js");
/* harmony import */ var _AnnotationControlsContainer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./AnnotationControlsContainer */ "./app/components/TextDetail/AnnotationControlsContainer.js");
/* harmony import */ var _SplitText_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./SplitText.css */ "./app/components/TextDetail/SplitText.css");
/* harmony import */ var _SplitText_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_SplitText_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./AnnotationControls.css */ "./app/components/TextDetail/AnnotationControls.css");
/* harmony import */ var _AnnotationControls_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var lib_TextSegment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lib/TextSegment */ "./app/lib/TextSegment.js");
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! grapheme-splitter */ "./node_modules/grapheme-splitter/index.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(grapheme_splitter__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var flagsmith__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! flagsmith */ "./node_modules/flagsmith/index.js");
/* harmony import */ var flagsmith__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(flagsmith__WEBPACK_IMPORTED_MODULE_22__);
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






















var MIN_SPACE_RIGHT = parseInt(_AnnotationControls_css__WEBPACK_IMPORTED_MODULE_16___default.a.inlineWidth) + _AnnotationControls__WEBPACK_IMPORTED_MODULE_13__["CONTROLS_MARGIN_LEFT"];
var IMAGE_URL_PREFIX = "//iiif.bdrc.io/";
var IMAGE_URL_SUFFIX = "/full/full/0/default.jpg";
var IMAGE_START_PRE_KEY = "bdrcimg_pre";
var IMAGE_START_NUMBER_KEY = "bdrcimg_number";
var IMAGE_START_SUFFIX_KEY = "bdrcimg_suffix";
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
    _this.childRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createRef"]("0");
    _this.list = null;
    _this.splitText = null;
    _this.cache = new react_virtualized_dist_es_CellMeasurer__WEBPACK_IMPORTED_MODULE_7__["CellMeasurerCache"]({
      fixedWidth: true,
      defaultHeight: 300
    });
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
    _this.fake_login_toggle = flagsmith__WEBPACK_IMPORTED_MODULE_22___default.a.hasFeature("fake_login_toggle");
    return _this;
  }

  _createClass(SplitTextComponent, [{
    key: "scrollEvent",
    value: function scrollEvent(e) {
      if (this.selectedWindow === 2) return null;

      if (this.selectedWindow === 1 && this.isPanelLinked) {
        var list = [];
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

        if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(list)) {
          if (this.selectedWindow === 1) {
            this.debouncedScroll(list);
          }
        }
      }
    }
  }, {
    key: "updateId",
    value: function updateId(id) {
      var rangeUnique = this.textAlignmentById.find(function (l) {
        return segment.start >= l.start && segment.start < l.end;
      });
      console.log(rangeUnique);
    }
  }, {
    key: "updateList",
    value: function updateList() {
      var resetCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var resetRows = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (!this.props.showImages && !this.calculatedImageHeight && this.imageHeight && this.imageWidth) {
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

        if (activeAnnotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_18__["ANNOTATION_TYPES"].pageBreak) {
          startPos -= 1;
        }

        if (activeAnnotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_18__["ANNOTATION_TYPES"].lineBreak) {
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

          if (firstSelectedSegment === null && _segment instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_17__["default"]) {
            firstSelectedSegment = _segment;
            break;
          }
        }

        if (firstSelectedSegment) {
          if (firstSelectedSegment.length === 0 && props.activeAnnotation && props.activeAnnotation.isInsertion) {
            selectedElementId = Object(_Text__WEBPACK_IMPORTED_MODULE_9__["idForInsertion"])(firstSelectedSegment);
            segmentIdFunction = _Text__WEBPACK_IMPORTED_MODULE_9__["idForInsertion"];
          } else {
            selectedElementId = Object(_Text__WEBPACK_IMPORTED_MODULE_9__["idForSegment"])(firstSelectedSegment);
            segmentIdFunction = _Text__WEBPACK_IMPORTED_MODULE_9__["idForSegment"];
          }
        }
      } else if (props.activeAnnotation) {
        if (props.activeAnnotation.isDeletion) {
          var _segment2 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_17__["default"](startPos, "");

          selectedElementId = Object(_Text__WEBPACK_IMPORTED_MODULE_9__["idForDeletedSegment"])(_segment2);
          segmentIdFunction = _Text__WEBPACK_IMPORTED_MODULE_9__["idForDeletedSegment"];
          firstSelectedSegment = _segment2;
          selectedAnnotatedSegments = [firstSelectedSegment];
        } else if (props.activeAnnotation.isInsertion) {
          var _props$splitText$anno3 = props.splitText.annotatedText.getPositionOfAnnotation(props.activeAnnotation),
              _props$splitText$anno4 = _slicedToArray(_props$splitText$anno3, 1),
              start = _props$splitText$anno4[0];

          if (start) {
            var _segment3 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_17__["default"](start, "");

            selectedElementId = Object(_Text__WEBPACK_IMPORTED_MODULE_9__["idForInsertion"])(_segment3);
            segmentIdFunction = _Text__WEBPACK_IMPORTED_MODULE_9__["idForInsertion"];
            firstSelectedSegment = _segment3;
            selectedAnnotatedSegments = [firstSelectedSegment];
          }
        } else if (props.activeAnnotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_18__["ANNOTATION_TYPES"].pageBreak) {
          var _segment4 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_17__["default"](startPos + 1, "");

          var prevSegment = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_17__["default"](startPos, "");
          selectedElementId = Object(_Text__WEBPACK_IMPORTED_MODULE_9__["idForPageBreak"])(prevSegment);
          firstSelectedSegment = _segment4;
          selectedAnnotatedSegments = [_segment4];
          selectedElementIds = [selectedElementId];
        } else if (props.activeAnnotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_18__["ANNOTATION_TYPES"].lineBreak) {
          var _segment5 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_17__["default"](startPos + 1, "");

          var _prevSegment = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_17__["default"](startPos, "");

          selectedElementId = Object(_Text__WEBPACK_IMPORTED_MODULE_9__["idForLineBreak"])(_prevSegment);
          firstSelectedSegment = _segment5;
          selectedAnnotatedSegments = [_segment5];
          selectedElementIds = [selectedElementId];
        }
      }

      if (segmentIdFunction) {
        for (var _i2 = 0; _i2 < selectedAnnotatedSegments.length; _i2++) {
          var _segment6 = selectedAnnotatedSegments[_i2];

          if (_segment6 instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_17__["default"]) {
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

      if (oldActiveAnnotation && oldActiveAnnotation.isType(lib_Annotation__WEBPACK_IMPORTED_MODULE_18__["ANNOTATION_TYPES"].lineBreak) && newProps.activeAnnotations && !newProps.activeAnnotations.hasOwnProperty(oldActiveAnnotation.uniqueId)) {
        hasChanged = true;
      }

      if (newActiveAnnotation && newActiveAnnotation.isType(lib_Annotation__WEBPACK_IMPORTED_MODULE_18__["ANNOTATION_TYPES"].lineBreak) && oldProps.activeAnnotations && !oldProps.activeAnnotations.hasOwnProperty(newActiveAnnotation.uniqueId)) {
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
        if (current instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_17__["default"]) acc.push(current);
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

      var list = this.list;
      this.resizeHandler = lodash_throttle__WEBPACK_IMPORTED_MODULE_1___default()(function () {
        _this3.calculatedImageHeight = null;

        _this3.updateList();
      }, 500).bind(this);
      this.debouncedScroll = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (list) {
        _this3.changeScrollToId(list[0].start);
      }, 1000);
      window.addEventListener("resize", this.resizeHandler);
      this.selectionHandler = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function (e) {
        _this3.handleSelection(e);
      }, 200).bind(this);
      document.addEventListener("selectionchange", this.selectionHandler);
      document.addEventListener("mousedown", this.mouseDown.bind(this), true);
      document.addEventListener("mouseup", this.mouseUp.bind(this), true);
      this.processProps(this.props);
      this.componentDidUpdate();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props,
          _this4 = this,
          _this$props2,
          _this$props3;

      if ((prevProps === null || prevProps === void 0 ? void 0 : prevProps.isSecondWindowOpen) !== ((_this$props = this.props) === null || _this$props === void 0 ? void 0 : _this$props.isSecondWindowOpen)) {
        setTimeout(function () {
          for (var i = 0; i < 2; i++) {
            _this4.resizeHandler();
          }
        }, 1000);
      }

      var SearchSyncId = this.props.syncIdOnSearch || null;
      var result = this.props.searchResults;
      var list = this.list;
      var con = (prevProps === null || prevProps === void 0 ? void 0 : prevProps.searchResults) !== ((_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : _this$props2.searchResults) || (prevProps === null || prevProps === void 0 ? void 0 : prevProps.syncIdOnSearch) !== ((_this$props3 = this.props) === null || _this$props3 === void 0 ? void 0 : _this$props3.syncIdOnSearch);

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
      }

      this.textAlignmentById = this.props.textAlignmentById;
      this.isPanelLinked = this.props.isPanelLinked;
      this.selectedWindow = this.props.selectedWindow;
      this.targetId = this.props.syncIdOnScroll2;
      this.fake_login_toggle = true;

      if (this.selectedNodes && this.selectedNodes.length > 0) {
        var selectedNodes = this.selectedNodes;
        var selectedSegments = this.props.selectedAnnotatedSegments;
        setTimeout(function () {
          var selRange = document.createRange();
          var startNode = selectedNodes[0];
          var endNode = selectedNodes[selectedNodes.length - 1];
          var lastSegment = selectedSegments[selectedSegments.length - 1];

          if (lastSegment instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_17__["default"]) {
            var lastElement = document.getElementById(Object(_Text__WEBPACK_IMPORTED_MODULE_9__["idForSegment"])(lastSegment));
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
      } // if (this.selectedWindow === 2 && this.isPanelLinked) {
      //     this.textAlignmentById = this.props.textAlignmentById;
      //     if (this.textAlignmentById) {
      //         if (this.targetId) {
      //             let selectedTextIndex =
      //                 this.props.splitText.getTextIndexOfPosition(
      //                     this.targetId
      //                 );
      //             setTimeout(() => {
      //                 list.scrollToRow(selectedTextIndex);
      //                 setTimeout(() => {
      //                     list.scrollToPosition(list.props.scrollTop - 300);
      //                 }, 0);
      //             }, 100);
      //         }
      //     }
      // }

    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("mousedown", this);
      document.removeEventListener("mouseup", this);
      window.removeEventListener("resize", this.resizeHandler);
      this.splitText.removeEventListener("resize", this.resizeHandler);
      document.removeEventListener("selectionchange", this.selectionHandler);
    }
  }, {
    key: "calculateImageHeight",
    value: function calculateImageHeight() {
      var height = null;

      if (this.imageHeight && this.imageWidth) {
        var ratio = this.imageWidth / this.imageHeight;
        var pechaImageClass = _SplitText_css__WEBPACK_IMPORTED_MODULE_15___default.a.pechaImage;
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

        if (_segment7 instanceof lib_TextSegment__WEBPACK_IMPORTED_MODULE_17__["default"]) {
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
        className: _SplitText_css__WEBPACK_IMPORTED_MODULE_15___default.a.splitText,
        ref: function ref(div) {
          return _this5.splitText = div;
        },
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("button", {
        id: "updateList",
        style: {
          display: "none"
        },
        onClick: function onClick() {
          return _this5.updateList(true);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_virtualized_dist_es_AutoSizer__WEBPACK_IMPORTED_MODULE_5__["AutoSizer"], null, function (_ref) {
        var height = _ref.height,
            width = _ref.width;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react_virtualized_dist_es_List__WEBPACK_IMPORTED_MODULE_6__["List"], {
          ref: function ref(list) {
            return _this5.list = list;
          },
          height: height,
          rowCount: props.splitText.texts.length,
          rowHeight: cache.rowHeight,
          rowRenderer: rowRenderer,
          width: width,
          overscanRowCount: 1,
          deferredMeasurementCache: cache,
          onScroll: _this5.scrollEvent,
          scrollToAlignment: "start"
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
      return IMAGE_URL_PREFIX + prefix + id + "." + suffix + IMAGE_URL_SUFFIX;
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

      var splitter = new grapheme_splitter__WEBPACK_IMPORTED_MODULE_20___default.a();
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
      var component = this;
      var pechaImageClass = props.showImages ? _SplitText_css__WEBPACK_IMPORTED_MODULE_15___default.a.pechaImage : null;
      var imageUrl = "";

      if (props.selectedWitness && props.selectedWitness.properties && props.selectedWitness.properties.hasOwnProperty(IMAGE_START_PRE_KEY)) {
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
        className: _SplitText_css__WEBPACK_IMPORTED_MODULE_15___default.a.splitTextRow,
        ref: this.splitTextRef,
        id: "index_".concat(index)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
        className: _SplitText_css__WEBPACK_IMPORTED_MODULE_15___default.a.splitTextRowContent
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_Text__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
        isPanelLinked: this.props.isPanelLinked,
        isAnnotating: this.props.isAnnotating,
        textAlignmentById: this.props.textAlignmentById,
        selectedSourceRange: this.props.selectedSourceRange,
        selectedTargetRange: this.props.selectedTargetRange,
        changeSelectedRange: this.props.changeSelectedRange // menuVisible={props.menuVisible}

      })), this.props.isAnnotating && this.selectedTextIndex === index && this.props.activeAnnotation && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_AnnotationControlsContainer__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
        list: this.list,
        fake_login_toggle: this.fake_login_toggle
      })));
    }
  }]);

  return SplitTextComponent;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);



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



function TableOfContent() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    textTransform: "uppercase"
  }, "Table Of Content"));
}

/* harmony default export */ __webpack_exports__["default"] = (TableOfContent);

/***/ }),

/***/ "./app/components/TextDetail/Text.css":
/*!********************************************!*\
  !*** ./app/components/TextDetail/Text.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","paddingSide":"20px","maxWidth":"600px","text":"Text---text","syncIdClass":"Text---syncIdClass","textFirstRow":"Text---textFirstRow","textLine":"Text---textLine","textline":"Text---textline","limitWidth":"Text---limitWidth","textContainer":"Text---textContainer","annotation":"Text---annotation","selectedAnnotation":"Text---selectedAnnotation","removedByAnnotation":"Text---removedByAnnotation","insertion":"Text---insertion","highlight":"Text---highlight","activeHighlight":"Text---activeHighlight","lineBreak":"Text---lineBreak","pageBreak":"Text---pageBreak","selectedRange":"Text---selectedRange"};

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Text; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Text_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Text.css */ "./app/components/TextDetail/Text.css");
/* harmony import */ var _Text_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Text_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lib_TextSegment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/TextSegment */ "./app/lib/TextSegment.js");
/* harmony import */ var lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/AnnotatedText */ "./app/lib/AnnotatedText.js");
/* harmony import */ var lib_SegmentedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/SegmentedText */ "./app/lib/SegmentedText.js");
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! grapheme-splitter */ "./node_modules/grapheme-splitter/index.js");
/* harmony import */ var grapheme_splitter__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(grapheme_splitter__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var images_page_break_icon_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! images/page_break_icon.svg */ "./app/images/page_break_icon.svg");
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
var pageBreakIconString = react_dom_server__WEBPACK_IMPORTED_MODULE_9___default.a.renderToStaticMarkup( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_page_break_icon_svg__WEBPACK_IMPORTED_MODULE_10__["default"], null));

var Text = /*#__PURE__*/function (_React$Component) {
  _inherits(Text, _React$Component);

  var _super = _createSuper(Text);

  function Text(props) {
    var _this;

    _classCallCheck(this, Text);

    _this = _super.call(this, props);
    _this.textAlignmentById = [];
    _this.textRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    _this.state = {
      segmentedText: props.segmentedText
    };
    _this.textAlignmentById = _this.props.textAlignmentById;
    _this._renderedSegments = null;
    _this._renderedHtml = null;
    _this.rangeSelect = [];
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

      var insertions = this.props.annotationPositions[lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_4__["INSERTION_KEY"] + segment.start] || [];
      var deletions = this.props.annotationPositions[lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_4__["DELETION_KEY"] + segment.start] || [];
      var pageBreaks = this.props.annotationPositions[lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_4__["PAGE_BREAK_KEY"] + (segment.end + 1)] || [];
      var lineBreaks = this.props.annotationPositions[lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_4__["LINE_BREAK_KEY"] + (segment.end + 1)] || [];
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
      var sourceRangeSelection = [];
      var targetRangeSelection = [];
      var selection = document.getSelection();

      if (element !== null && element !== void 0 && element.id.includes("s_") && this.props.isPanelLinked) {
        var clickId = parseInt(element.id.replace("s_", ""));
        this.props.changeSyncIdOnClick(clickId);
        this.props.changeScrollToId(null);

        var _id = parseInt(element.id.replace("s_", ""));

        var rangeUnique = this.textAlignmentById.find(function (l) {
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
      var _this2 = this;

      var segments = renderState.segmentedText.segments;
      var textLineClass = _Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.textLine;
      var segmentHTML = '<p class="' + textLineClass + '">';
      if (segments.length === 0) return {
        __html: segmentHTML
      };
      var insertionClass = _Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.insertion;
      var endPosition = segments[segments.length - 1].end + 1;

      if (renderProps.annotationPositions[lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_4__["INSERTION_KEY"] + endPosition]) {
        var endSegment = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_3__["default"](endPosition, "");
        segments.push(endSegment);
      }

      if (renderProps.annotationPositions[lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_4__["PAGE_BREAK_KEY"] + endPosition]) {
        var _endSegment = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_3__["default"](endPosition, "");

        segments.push(_endSegment);
      }

      if (renderProps.annotationPositions[lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_4__["LINE_BREAK_KEY"] + endPosition]) {
        var _endSegment2 = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_3__["default"](endPosition, "");

        segments.push(_endSegment2);
      }

      var activeAnnotations = renderProps.activeAnnotations || {};
      var highlightClass = _Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.highlight;
      var activeHighlightClass = _Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.activeHighlight;
      var activeSearchResultEnd = null;
      var processedInactiveInsertions = {};

      var _loop = function _loop(i) {
        var segment = segments[i];
        var classAttribute = "";
        var classes = [];

        var annotations = _this2.annotationsForSegment(segment);

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
              } else if (_annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_6__["ANNOTATION_TYPES"].pageBreak && !renderProps.activeWitness.isWorking) {
                pageBreakAnnotation = _annotation;
              } else if (_annotation.type === lib_Annotation__WEBPACK_IMPORTED_MODULE_6__["ANNOTATION_TYPES"].lineBreak && !renderProps.activeWitness.isWorking) {
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
              insertionClasses += " " + _Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.selectedAnnotation;
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
            classes.push(_Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.annotation);
          }
        } // It's an insertion at the end of the text, which should have just been added to the html.
        // So break as we don't want anymore segment html adding.


        if (segment.start === endPosition) {
          return "break";
        }

        var id = null;

        if (segment.length === 0) {
          id = idForDeletedSegment(segment);
          classes.push(_Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.removedByAnnotation);

          if (deletionText) {
            segment = new lib_TextSegment__WEBPACK_IMPORTED_MODULE_3__["default"](segment.start, deletionText);
          }
        } else {
          id = idForSegment(segment);
        }

        if (_this2.segmentsContainSegment(renderProps.selectedAnnotatedSegments, segment) || selectedCurrentDeletion) {
          classes.push(_Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.selectedAnnotation);
        }

        if (renderProps.selectedSourceRange.includes(segment.start)) {
          classes.push(_Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.selectedRange);
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

        if (_this2.props.textAlignmentById !== null) {
          var r = _this2.props.textAlignmentById.find(function (d) {
            return d.start === segment.start;
          });

          if (r) {
            segmentHTML += "<span id='alignment_" + segment.start + "'>" + "<sup class=" + _Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.syncIdClass + ">".concat(r.id, "</sup>") + "</span>";
          }
        }

        segmentHTML += "<span id=" + id + " key=" + id + " " + classAttribute + ">" + segmentContent + "</span>";

        if (pageBreakAnnotation) {
          var pageBreakClasses = [_Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.pageBreak];

          if (selectedCurrentPageBreak) {
            pageBreakClasses.push(_Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.selectedAnnotation);
          }

          var pageBreakClassAttribute = ' class="' + pageBreakClasses.join(" ") + '" ';
          segmentHTML += "<span id=" + idForPageBreak(segment) + " key=" + idForPageBreak(segment) + pageBreakClassAttribute + ">" + pageBreakIconString + "</span>";
        }

        if (lineBreakAnnotation) {
          var lineBreakClasses = [_Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.lineBreak];

          if (selectedCurrentLineBreak) {
            lineBreakClasses.push(_Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.selectedAnnotation);
          }

          var lineBreakClassAttribute = ' class="' + lineBreakClasses.join(" ") + '" ';
          segmentHTML += "<span id=" + idForLineBreak(segment) + " key=" + idForLineBreak(segment) + lineBreakClassAttribute + ">" + PARA_SYMBOL + "</span>";
          segmentHTML += '</p><p class="' + textLineClass + '">';
        }
      };

      for (var i = 0; i < segments.length; i++) {
        var _ret = _loop(i);

        if (_ret === "break") break;
      }

      this._renderedSegments = segments;
      segmentHTML += "</p>";
      var html = {
        __html: segmentHTML
      };
      return html;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
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
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var classes = [_Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.text];

      if (this.props.row === 0) {
        classes.push(_Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.textFirstRow);
      } // Generate HTML manually as it is much faster when
      // creating large numbers of elements, such as these spans.


      var html = this._renderedHtml ? this._renderedHtml : this.generateHtml(this.props, this.state);

      if (!this._renderedHtml) {
        this._renderedHtml = html;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _Text_css__WEBPACK_IMPORTED_MODULE_2___default.a.textContainer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: this.textRef,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default.a.apply(void 0, classes),
        dangerouslySetInnerHTML: html,
        style: {
          fontSize: this.props.fontSize
        },
        onClick: function onClick(e) {
          _this3.selectedElement(e.target);
        }
      }));
    }
  }]);

  return Text;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



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
/* harmony import */ var _Editors_MediaComponent_Image_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Editors/MediaComponent/Image.css */ "./app/components/Editors/MediaComponent/Image.css");
/* harmony import */ var _Editors_MediaComponent_Image_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Editors_MediaComponent_Image_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_TextDetail_SplitText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/TextDetail/SplitText */ "./app/components/TextDetail/SplitText.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader */ "./node_modules/react-loader/lib/react-loader.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AnnotationControlsContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AnnotationControlsContainer */ "./app/components/TextDetail/AnnotationControlsContainer.js");
/* harmony import */ var lib_SplitText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/SplitText */ "./app/lib/SplitText.js");
/* harmony import */ var lib_Annotation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/Annotation */ "./app/lib/Annotation.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var lib_AnnotatedText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/AnnotatedText */ "./app/lib/AnnotatedText.js");
/* harmony import */ var lib_text_splitters_lengthSplitter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/text_splitters/lengthSplitter */ "./app/lib/text_splitters/lengthSplitter.js");
/* harmony import */ var lib_text_splitters_positionSplitter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lib/text_splitters/positionSplitter */ "./app/lib/text_splitters/positionSplitter.js");
/* harmony import */ var components_Header_Header_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Header/Header.css */ "./app/components/Header/Header.css");
/* harmony import */ var components_Header_Header_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(components_Header_Header_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _TextDetail_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./TextDetail.css */ "./app/components/TextDetail/TextDetail.css");
/* harmony import */ var _TextDetail_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_TextDetail_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var css_util_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! css/util.css */ "./app/css/util.css");
/* harmony import */ var css_util_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(css_util_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var lib_TextSegment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lib/TextSegment */ "./app/lib/TextSegment.js");
/* harmony import */ var _TextDetailHeadingContainer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./TextDetailHeadingContainer */ "./app/components/TextDetail/TextDetailHeadingContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _TableOfContent_TableOfContent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./TableOfContent/TableOfContent */ "./app/components/TextDetail/TableOfContent/TableOfContent.js");
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
          splitter = Object(lib_text_splitters_positionSplitter__WEBPACK_IMPORTED_MODULE_11__["default"])(this.props.pageBreaks);
        } else {
          splitter = Object(lib_text_splitters_lengthSplitter__WEBPACK_IMPORTED_MODULE_10__["default"])(1000, /^།[\s]+(?!།[\s]+)/, 2, 5);
        }

        splitText = new lib_SplitText__WEBPACK_IMPORTED_MODULE_6__["default"](this.props.annotatedText, splitter);
        inlineControls = true;
        textComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_TextDetail_SplitText__WEBPACK_IMPORTED_MODULE_3__["default"], {
          splitText: splitText,
          annotations: this.props.annotations,
          activeAnnotations: this.props.activeAnnotations,
          activeAnnotation: this.props.activeAnnotation,
          limitWidth: limitWidth,
          didSelectSegmentIds: this.props.didSelectSegmentIds,
          selectedSegmentId: this.props.selectedSegmentId,
          annotationPositions: this.props.annotationPositions,
          selectedAnnotatedSegments: this.props.selectedAnnotatedSegments,
          textListVisible: this.props.textListVisible,
          showImages: this.props.pageImagesVisible,
          imagesBaseUrl: this.props.imagesBaseUrl,
          selectedWitness: this.props.selectedWitness,
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
          textAlignmentById: this.props.textAlignmentById,
          isPanelVisible: this.props.isPanelVisible,
          syncIdOnScroll: this.props.syncIdOnScroll,
          syncIdOnScroll2: this.props.syncIdOnScroll2,
          selectedWindow: this.props.selectedWindow,
          selectedSourceRange: this.props.selectedSourceRange,
          selectedTargetRange: this.props.selectedTargetRange,
          changeSelectedRange: this.props.changeSelectedRange,
          searchResults: this.props.searchResults,
          showTableContent: this.props.showTableContent,
          selectedText: this.props.text,
          syncIdOnSearch: this.props.syncIdOnSearch
        });
      }

      var textComponents = [textComponent];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Box"], {
        style: {
          height: "100%",
          flex: 1
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_TextDetail_css__WEBPACK_IMPORTED_MODULE_13___default.a.textDetail, css_util_css__WEBPACK_IMPORTED_MODULE_14___default.a.flex, css_util_css__WEBPACK_IMPORTED_MODULE_14___default.a.flexColumn),
        key: this.key,
        ref: this.ref
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TextDetailHeadingContainer__WEBPACK_IMPORTED_MODULE_16__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader__WEBPACK_IMPORTED_MODULE_4___default.a, {
        loaded: !this.props.loading,
        zIndex: 5
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Box"], {
        style: {
          display: "flex",
          height: "100%",
          width: "100%",
          position: "relative"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Box"], {
        style: {
          flex: 1
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_TextDetail_css__WEBPACK_IMPORTED_MODULE_13___default.a.textContainer, css_util_css__WEBPACK_IMPORTED_MODULE_14___default.a.flex)
      }, !this.props.loading ? textComponents : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Slide"], {
        direction: "left",
        "in": this.props.showTableContent,
        container: this.ref.current
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Box"], {
        sx: {
          position: "absolute",
          height: "100%",
          minWidth: "50%",
          right: 0,
          background: "#eee",
          borderLeft: "1px solid gray",
          padding: 2
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_TableOfContent_TableOfContent__WEBPACK_IMPORTED_MODULE_18__["default"], null)))));
    }
  }]);

  return TextDetail;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TextDetail);

/***/ }),

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
      pageImagesVisible: false,
      annotatedText: null,
      selectedAnnotatedSegments: null,
      annotationPositions: null,
      activeAnnotations: null,
      activeAnnotation: null,
      user: user,
      textListVisible: textListVisible,
      fontSize: app_constants__WEBPACK_IMPORTED_MODULE_16__["DEFAULT_TEXT_FONT_SIZE"],
      isSecondWindowOpen: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["isSecondWindowOpen"])(state),
      isPanelLinked: isPanelLinked,
      textAlignmentById: textAlignmentById
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
      var witnessPageBreaks = annotatedText.getAnnotationsOfType(lib_Annotation__WEBPACK_IMPORTED_MODULE_5__["ANNOTATION_TYPES"].pageBreak) || {}; // console.log(witnessPageBreaks);

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
  var syncIdOnClick = reducers__WEBPACK_IMPORTED_MODULE_13__["getSyncIdOnClick"](state);
  var selectedWindow = reducers__WEBPACK_IMPORTED_MODULE_13__["getSelectedWindow"](state);
  return {
    text: selectedText,
    witnesses: witnesses,
    workingWitness: workingWitness,
    baseWitness: baseWitness,
    annotations: annotations,
    loading: loading,
    paginated: paginated,
    pageImagesVisible: false,
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
    isSecondWindowOpen: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["isSecondWindowOpen"])(state),
    imageData: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getImageData"])(state),
    isPanelLinked: isPanelLinked,
    selectedImage: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getSelectedImage"])(state),
    isImagePortrait: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["isImagePortrait"])(state),
    isPanelVisible: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["isPanelVisible"])(state),
    isAnnotating: reducers__WEBPACK_IMPORTED_MODULE_13__["isAnnotating"](state),
    textAlignmentById: textAlignmentById,
    scrollToId: scrollToId,
    syncIdOnClick: syncIdOnClick,
    selectedWindow: selectedWindow,
    selectedSourceRange: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getSelectedSourceRange"])(state),
    selectedTargetRange: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getSelectedTargetRange"])(state),
    searchResults: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getSearchResults"])(state, searchValue),
    showTableContent: Object(reducers__WEBPACK_IMPORTED_MODULE_13__["getShowTableContent"])(state),
    syncIdOnSearch: reducers__WEBPACK_IMPORTED_MODULE_13__["getSyncIdOnSearch"](state)
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
/* harmony default export */ __webpack_exports__["default"] = (TextDetailContainer);

/***/ }),

/***/ "./app/components/TextDetail/TextDetailHeading.js":
/*!********************************************************!*\
  !*** ./app/components/TextDetail/TextDetailHeading.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _textDetailHeading_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./textDetailHeading.css */ "./app/components/TextDetail/textDetailHeading.css");
/* harmony import */ var _textDetailHeading_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_textDetailHeading_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SelectVersion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectVersion */ "./app/components/TextDetail/SelectVersion.js");
/* harmony import */ var _TextListContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TextListContainer */ "./app/components/TextDetail/TextListContainer.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _HeaderMenu_Share__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./HeaderMenu/Share */ "./app/components/TextDetail/HeaderMenu/Share.js");
/* harmony import */ var _HeaderMenu_Annotate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./HeaderMenu/Annotate */ "./app/components/TextDetail/HeaderMenu/Annotate.js");
/* harmony import */ var _HeaderMenu_Refresh__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./HeaderMenu/Refresh */ "./app/components/TextDetail/HeaderMenu/Refresh.js");
/* harmony import */ var _HeaderMenu_Search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./HeaderMenu/Search */ "./app/components/TextDetail/HeaderMenu/Search.js");
/* harmony import */ var _HeaderMenu_WindowSplitter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./HeaderMenu/WindowSplitter */ "./app/components/TextDetail/HeaderMenu/WindowSplitter.js");
/* harmony import */ var _HeaderMenu_Settings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./HeaderMenu/Settings */ "./app/components/TextDetail/HeaderMenu/Settings.js");
/* harmony import */ var _HeaderMenu_TableOfContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./HeaderMenu/TableOfContent */ "./app/components/TextDetail/HeaderMenu/TableOfContent.js");
/* harmony import */ var _mui_material_Autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Autocomplete */ "./node_modules/@mui/material/Autocomplete/index.js");



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















function TextDetailHeading(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      findvalue = _useState2[0],
      setfindvalue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showFind = _useState4[0],
      setShowFind = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      visible = _useState6[0],
      setVisible = _useState6[1];

  var headingRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var handleListItemClick = function handleListItemClick(id) {
    props.changeSelectSyncId(id);
    setVisible(false);
  };

  var debouncedSearch = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef(lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default()(function (s) {
    props.searchChanged(s);
  }, 1000)).current;
  var handleSearch = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    e.preventDefault();
    setfindvalue("");
    debouncedSearch(findvalue);
    setVisible(true);
  }, [findvalue]);
  var handleWindowSearch = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (showFind === false) debouncedSearch(null);
    setShowFind(!showFind);
  }, [showFind]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (showFind === true) {
      inputRef.current.focus();
    }

    if (showFind === false) debouncedSearch(null);
  }, [showFind]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["Stack"], {
    ref: headingRef,
    direction: "column",
    spacing: 1,
    px: 2,
    py: 1,
    style: {
      background: "#f7f7f7"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["Stack"], {
    direction: "row",
    spacing: 1,
    justifyContent: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    sx: {
      display: "flex",
      gap: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_TextListContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SelectVersion__WEBPACK_IMPORTED_MODULE_4__["default"], {
    witnesses: props.witnesses,
    activeWitness: props.selectedWitness,
    onSelectedWitness: props.onSelectedWitness,
    user: props.user
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["ButtonGroup"], {
    size: "small",
    "aria-label": "small button group",
    sx: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "fit-content",
      border: function border(theme) {
        return "1px solid ".concat(theme.palette.divider);
      },
      borderRadius: 1,
      bgcolor: "background.paper",
      color: "text.secondary",
      "& svg": {
        m: 1.5
      },
      "& hr": {
        mx: 0.5
      }
    },
    className: _textDetailHeading_css__WEBPACK_IMPORTED_MODULE_3___default.a.button_group_menu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_Refresh__WEBPACK_IMPORTED_MODULE_9__["default"], {
    isSecondWindowOpen: props.isSecondWindowOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
    orientation: "vertical",
    variant: "middle",
    flexItem: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_Search__WEBPACK_IMPORTED_MODULE_10__["default"], {
    handleWindowSearch: handleWindowSearch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_Settings__WEBPACK_IMPORTED_MODULE_12__["default"], props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HeaderMenu_TableOfContent__WEBPACK_IMPORTED_MODULE_13__["default"], props))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["Collapse"], {
    "in": showFind
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    onSubmit: handleSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["Stack"], {
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["TextField"], {
    hiddenLabel: true,
    id: "filled-hidden-label-small",
    inputProps: {
      style: {
        height: 25,
        padding: "0 14px"
      }
    },
    style: {
      height: 25,
      flex: 1
    },
    fullWidth: true,
    inputRef: inputRef,
    value: findvalue,
    onChange: function onChange(e) {
      return setfindvalue(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "outlined",
    size: "small",
    onClick: handleSearch,
    style: {
      height: 25
    }
  }, "Search"), props.searchResults && visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["List"], {
    sx: {
      position: "absolute",
      top: 84,
      zIndex: 1,
      background: "#eee",
      boxShadow: 3
    }
  }, lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(props.searchResults) && props.searchResults.hasOwnProperty(props.selectedText.id) && props.searchResults[props.selectedText.id].results.map(function (l, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["ListItem"], {
      onClick: function onClick() {
        return handleListItemClick(l[0]);
      },
      sx: {
        cursor: "pointer",
        "&:hover": {
          background: "#fff"
        }
      },
      key: l[0] + "listsearch"
    }, l[1]);
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (TextDetailHeading);

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
    textListIsVisible: Object(reducers__WEBPACK_IMPORTED_MODULE_4__["getTextListVisible"])(state),
    accountOverlayVisible: Object(reducers__WEBPACK_IMPORTED_MODULE_4__["getAccountOverlayVisible"])(state),
    textFontSize: textFontSize,
    isSecondWindowOpen: reducers__WEBPACK_IMPORTED_MODULE_4__["isSecondWindowOpen"](state),
    exportingWitness: exportingWitness,
    isPanelLinked: reducers__WEBPACK_IMPORTED_MODULE_4__["isPanelLinked"](state),
    user: reducers__WEBPACK_IMPORTED_MODULE_4__["getUser"](state),
    isAnnotating: reducers__WEBPACK_IMPORTED_MODULE_4__["isAnnotating"](state),
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
  }), _defineProperty(_objectSpread2, "onChangePanelLink", function onChangePanelLink(data) {
    dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changePanelLink"](data));
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

/***/ "./app/components/TextDetail/TextList.css":
/*!************************************************!*\
  !*** ./app/components/TextDetail/TextList.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"textlist":"TextList---textlist","open":"TextList---open","listToggelBtn":"TextList---listToggelBtn"};

/***/ }),

/***/ "./app/components/TextDetail/TextList.js":
/*!***********************************************!*\
  !*** ./app/components/TextDetail/TextList.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_virtualized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-virtualized */ "./node_modules/react-virtualized/dist/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextList.css */ "./app/components/TextDetail/TextList.css");
/* harmony import */ var _TextList_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TextList_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function TextList(props) {
  var temptext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(props.texts);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(temptext.current),
      _useState2 = _slicedToArray(_useState, 2),
      textslist = _useState2[0],
      setTextList = _useState2[1];

  var onSelectedText = props.onSelectedText;
  var selectedText = props.selectedText;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

  var selected = selectedText ? selectedText.name : textslist[0].name;
  var cache = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new react_virtualized__WEBPACK_IMPORTED_MODULE_1__["CellMeasurerCache"]({
    fixedHeight: true,
    defaultHeight: 30,
    defaultWidth: 400
  }));
  var classes = [_TextList_css__WEBPACK_IMPORTED_MODULE_3___default.a.textlist];

  var truncate = function truncate() {
    var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var limit = arguments.length > 1 ? arguments[1] : undefined;

    if (string.length <= limit) {
      return string;
    }

    return string.slice(0, limit) + "...";
  };

  var handleClick = function handleClick() {
    setIsOpen(function (prev) {
      return !prev;
    });
    if (isOpen === false) classes.push(_TextList_css__WEBPACK_IMPORTED_MODULE_3___default.a.open);
  };

  var handleChange = function handleChange(e) {
    var value = e.target.value;
    setTextList(temptext.current);

    if (value === "" || value === null) {
      return;
    }

    var newtextslist = textslist.filter(function (l) {
      return l.name.includes(value);
    });
    setTextList(newtextslist);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["ClickAwayListener"], {
    onClickAway: function onClickAway() {
      return setIsOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    onClick: handleClick,
    className: _TextList_css__WEBPACK_IMPORTED_MODULE_3___default.a.listToggelBtn,
    component: "div",
    sx: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: "10rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
    noWrap: true
  }, selected)), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes),
    style: {
      position: "absolute"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["TextField"], {
    onChange: handleChange,
    id: "standard-basic",
    label: "filter",
    variant: "standard",
    style: {
      width: "100%"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["AutoSizer"], null, function (_ref) {
    var width = _ref.width,
        height = _ref.height;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["List"], {
      width: width,
      height: height,
      rowHeight: cache.current.rowHeight,
      deferredMeasurementCache: cache.current,
      rowCount: textslist.length,
      rowRenderer: function rowRenderer(_ref2) {
        var key = _ref2.key,
            index = _ref2.index,
            style = _ref2.style,
            parent = _ref2.parent;
        var data = textslist[index];
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_virtualized__WEBPACK_IMPORTED_MODULE_1__["CellMeasurer"], {
          key: "optionvalues-".concat(key),
          cache: cache.current,
          parent: parent,
          columnIndex: 0,
          rowIndex: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: style,
          onClick: function onClick() {
            setIsOpen(false);
            onSelectedText(data);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          style: {
            paddingLeft: "10px"
          }
        }, data.name)));
      }
    });
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (TextList);

/***/ }),

/***/ "./app/components/TextDetail/TextListContainer.js":
/*!********************************************************!*\
  !*** ./app/components/TextDetail/TextListContainer.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _TextList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextList */ "./app/components/TextDetail/TextList.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! api */ "./app/api/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-batched-actions */ "./node_modules/redux-batched-actions/lib/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_batched_actions__WEBPACK_IMPORTED_MODULE_6__);









var mapStateToProps = function mapStateToProps(state) {
  var searchValue = reducers__WEBPACK_IMPORTED_MODULE_4__["getSearchValue"](state);
  var searchResults = reducers__WEBPACK_IMPORTED_MODULE_4__["getSearchResults"](state, searchValue);
  var selectedSearchResult = reducers__WEBPACK_IMPORTED_MODULE_4__["getSelectedSearchResult"](state); // TODO: display search results or spinner depending on when anything
  // returned

  var searching = false;
  var texts = reducers__WEBPACK_IMPORTED_MODULE_4__["getTexts"](state);

  if (searchValue.length > 0) {
    if (searchResults === null) {
      searching = true;
      texts = [];
    } else {
      texts = texts.filter(function (text) {
        return searchResults.hasOwnProperty(text.id);
      });
    }
  }

  return {
    texts: texts,
    selectedText: Object(reducers__WEBPACK_IMPORTED_MODULE_4__["getSelectedText"])(state),
    searchTerm: searchValue,
    searchResults: searchResults,
    selectedSearchResult: selectedSearchResult,
    searching: searching
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSelectedText: function onSelectedText(text) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["selectedText"](text));
    }
  };
};

var TextListContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(_TextList__WEBPACK_IMPORTED_MODULE_2__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (TextListContainer);

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

/***/ "./app/components/TextDetail/textDetailHeading.css":
/*!*********************************************************!*\
  !*** ./app/components/TextDetail/textDetailHeading.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","button_group_menu":"textDetailHeading---button_group_menu"};

/***/ }),

/***/ "./app/components/UI/ApplyTooltip.js":
/*!*******************************************!*\
  !*** ./app/components/UI/ApplyTooltip.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tooltip */ "./node_modules/react-tooltip/dist/index.es.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");




function ApplyTooltip(_ref) {
  var children = _ref.children,
      tooltipName = _ref.tooltipName,
      _ref$format = _ref.format,
      format = _ref$format === void 0 ? null : _ref$format,
      _ref$effect = _ref.effect,
      effect = _ref$effect === void 0 ? 'solid' : _ref$effect,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$setTimer = _ref.setTimer,
      setTimer = _ref$setTimer === void 0 ? 0 : _ref$setTimer;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-tip": true,
    "data-for": tooltipName,
    className: className,
    style: {
      width: "100%"
    }
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tooltip__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: tooltipName,
    type: "dark",
    effect: effect
  }, format ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_2__["FormattedMessage"], {
    id: format
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, tooltipName)));
}

/* harmony default export */ __webpack_exports__["default"] = (ApplyTooltip);

/***/ }),

/***/ "./app/components/UI/Slider.css":
/*!**************************************!*\
  !*** ./app/components/UI/Slider.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"inputRanges":"Slider---inputRanges","inputRange":"Slider---inputRange"};

/***/ }),

/***/ "./app/components/UI/Slider.js":
/*!*************************************!*\
  !*** ./app/components/UI/Slider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Slider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Slider.css */ "./app/components/UI/Slider.css");
/* harmony import */ var _Slider_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Slider_css__WEBPACK_IMPORTED_MODULE_1__);



function Slider(_ref) {
  var max = _ref.max,
      min = _ref.min,
      initialvalue = _ref.initialvalue,
      _ref$changeSize = _ref.changeSize,
      changeSize = _ref$changeSize === void 0 ? function (r) {
    return console.log(r);
  } : _ref$changeSize;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Slider_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputRanges
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      fontSize: 13,
      top: "-5px"
    }
  }, "\u0F40"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "range",
    style: {
      width: "70%"
    },
    className: _Slider_css__WEBPACK_IMPORTED_MODULE_1___default.a.inputRange,
    min: min,
    max: max,
    step: 1,
    smooth: "yes",
    value: initialvalue,
    onChange: function onChange(e) {
      return changeSize(parseInt(e.target.value));
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      fontSize: 18,
      top: "-10px"
    }
  }, "\u0F40"));
}

/* harmony default export */ __webpack_exports__["default"] = (Slider);

/***/ }),

/***/ "./app/images/check_circle.svg":
/*!*************************************!*\
  !*** ./app/images/check_circle.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/

/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
});

var _ref2 =
/*#__PURE__*/

/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
});

var SvgCheckCircle = function SvgCheckCircle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _ref, _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgCheckCircle);

/***/ }),

/***/ "./app/images/note.svg":
/*!*****************************!*\
  !*** ./app/images/note.svg ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/

/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"
});

var _ref2 =
/*#__PURE__*/

/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0V0z"
});

var SvgNote = function SvgNote(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 24 24"
  }, props), _ref, _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgNote);

/***/ }),

/***/ "./app/images/page_break_icon.svg":
/*!****************************************!*\
  !*** ./app/images/page_break_icon.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/

/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M3 0h24v15H3z"
});

var _ref2 =
/*#__PURE__*/

/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  stroke: "currentColor",
  strokeWidth: 3,
  d: "M0 20h8M11 20h8M22 20h8"
});

var _ref3 =
/*#__PURE__*/

/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M3 25h24v15H3z"
});

var SvgPageBreakIcon = function SvgPageBreakIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 30 40",
    fill: "currentColor"
  }, props), _ref, _ref2, _ref3);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgPageBreakIcon);

/***/ }),

/***/ "./app/images/question_answer.svg":
/*!****************************************!*\
  !*** ./app/images/question_answer.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref =
/*#__PURE__*/

/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
});

var _ref2 =
/*#__PURE__*/

/*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
  d: "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"
});

var SvgQuestionAnswer = function SvgQuestionAnswer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, props), _ref, _ref2);
};

/* harmony default export */ __webpack_exports__["default"] = (SvgQuestionAnswer);

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
//# sourceMappingURL=1.parkhang-dev.js.map