(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[41],{

/***/ "./app/components/Editors/EditorContainer.js":
/*!***************************************************!*\
  !*** ./app/components/Editors/EditorContainer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor */ "./app/components/Editors/Editor.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions */ "./app/actions/index.js");






var mapStateToProps = function mapStateToProps(state) {
  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_3__["getSelectedText"](state);
  var selectedText2 = reducers__WEBPACK_IMPORTED_MODULE_3__["getSelectedText2"](state);
  var selectedWitness;
  var selectedWitness2;
  var witnesses;
  var witnesses2;

  if (selectedText) {
    witnesses = reducers__WEBPACK_IMPORTED_MODULE_3__["getTextWitnesses"](state, selectedText.id);
    var selectedWitnessId = reducers__WEBPACK_IMPORTED_MODULE_3__["getSelectedTextWitnessId"](state, selectedText.id);

    if (selectedWitnessId) {
      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_3__["getWitness"](state, selectedWitnessId);
    } else {
      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_3__["getWorkingWitness"](state, selectedText.id);
    }
  }

  if (selectedText2) {
    witnesses2 = reducers__WEBPACK_IMPORTED_MODULE_3__["getTextWitnesses2"](state, selectedText2.id);
    var selectedWitnessId2 = reducers__WEBPACK_IMPORTED_MODULE_3__["getSelectedTextWitnessId2"](state, selectedText2.id);

    if (selectedWitnessId2) {
      selectedWitness2 = reducers__WEBPACK_IMPORTED_MODULE_3__["getWitness2"](state, selectedWitnessId2);
    } else {
      selectedWitness2 = reducers__WEBPACK_IMPORTED_MODULE_3__["getWorkingWitness2"](state, selectedText2.id);
    }
  }

  if (!state.user.userId === -1) {
    user = state.user;
  }

  return {
    selectedText: selectedText,
    selectedWitness: selectedWitness,
    selectedText2: selectedText2,
    selectedWitness2: selectedWitness2,
    title: reducers__WEBPACK_IMPORTED_MODULE_3__["getTranslation"](state, "header.title"),
    page: state.page,
    isAnnotating: reducers__WEBPACK_IMPORTED_MODULE_3__["isAnnotating"](state),
    isSecondWindowOpen: reducers__WEBPACK_IMPORTED_MODULE_3__["isSecondWindowOpen"](state),
    theme: reducers__WEBPACK_IMPORTED_MODULE_3__["getTheme"](state),
    isPanelLinked: reducers__WEBPACK_IMPORTED_MODULE_3__["isPanelLinked"](state),
    textListIsVisible: reducers__WEBPACK_IMPORTED_MODULE_3__["getTextListVisible"](state)
  };
};

var matchDispatchToProps = function matchDispatchToProps(dispatch) {
  return {
    onChangedTextWidth: function onChangedTextWidth(width) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__["changedTextListWidth"](width));
    },
    onChangedTextListVisible: function onChangedTextListVisible(isVisible) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__["changedTextListVisible"](isVisible));
    },
    changeIsAnnotating: function changeIsAnnotating(payload) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__["changeIsAnnotating"](payload));

      if (payload === false) {
        var dismissTextAnnotation = actions__WEBPACK_IMPORTED_MODULE_4__["changedActiveTextAnnotation"](null);
        dispatch(dismissTextAnnotation);
        dispatch(actions__WEBPACK_IMPORTED_MODULE_4__["changedActiveTextAnnotation"](null));
      }
    },
    onChangeWindowOpen: function onChangeWindowOpen(data, textId) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__["toggleSecondWindow"](data, textId));
    },
    onChangePanelLink: function onChangePanelLink(data) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__["changePanelLink"](data));
    }
  };
};

var EditorContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, matchDispatchToProps)(_Editor__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (EditorContainer);

/***/ }),

/***/ "./app/components/Editors/index.js":
/*!*****************************************!*\
  !*** ./app/components/Editors/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditorContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditorContainer */ "./app/components/Editors/EditorContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _EditorContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

}]);
//# sourceMappingURL=41.parkhang-dev.js.map