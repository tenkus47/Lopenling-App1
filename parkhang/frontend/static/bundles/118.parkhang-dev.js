(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[118],{

/***/ "./app/components/TextDetail/TextHeadingContainer.js":
/*!***********************************************************!*\
  !*** ./app/components/TextDetail/TextHeadingContainer.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-batched-actions */ "./node_modules/redux-batched-actions/lib/index.js");
/* harmony import */ var redux_batched_actions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_batched_actions__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TextHeading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextHeading */ "./app/components/TextDetail/TextHeading.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var mapStateToProps = function mapStateToProps(state) {
  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_5__["getSelectedText"](state);
  var witnesses = [];
  var exportingWitness = false;
  var selectedWitness;

  if (selectedText) {
    witnesses = reducers__WEBPACK_IMPORTED_MODULE_5__["getTextWitnesses"](state, selectedText.id);
    var selectedWitnessId = reducers__WEBPACK_IMPORTED_MODULE_5__["getSelectedTextWitnessId"](state, selectedText.id);

    if (selectedWitnessId) {
      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_5__["getWitness"](state, selectedWitnessId);
      exportingWitness = reducers__WEBPACK_IMPORTED_MODULE_5__["getExportingWitness"](state, selectedWitnessId);
    } else {
      selectedWitness = reducers__WEBPACK_IMPORTED_MODULE_5__["getWorkingWitness"](state, selectedText.id);
    }
  }

  var showPageImages = reducers__WEBPACK_IMPORTED_MODULE_5__["showPageImages"](state);
  var textFontSize = reducers__WEBPACK_IMPORTED_MODULE_5__["getTextFontSize"](state);
  return {
    witnesses: witnesses,
    selectedText: selectedText,
    selectedWitness: selectedWitness,
    exportingWitness: exportingWitness,
    showPageImages: showPageImages,
    textFontSize: textFontSize
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  var dispatch = dispatchProps.dispatch;
  var selectedText = stateProps.selectedText;
  return _objectSpread(_objectSpread(_objectSpread({}, stateProps), ownProps), {}, {
    onToggledPageImages: function onToggledPageImages(showImages) {
      dispatch(Object(actions__WEBPACK_IMPORTED_MODULE_4__["changedShowPageImages"])(showImages));
    },
    onChangedFontSize: function onChangedFontSize(fontSize) {
      dispatch(Object(actions__WEBPACK_IMPORTED_MODULE_4__["changedTextFontSize"])(fontSize));
    },
    onSelectedWitness: function onSelectedWitness(witness) {
      dispatch(Object(actions__WEBPACK_IMPORTED_MODULE_4__["selectedTextWitness"])(selectedText.id, witness.id));
    },
    onExport: function onExport() {
      dispatch(Object(actions__WEBPACK_IMPORTED_MODULE_4__["exportWitness"])(stateProps.selectedWitness.id, "docx"));
    }
  });
};

var TextHeadingContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null, mergeProps)(_TextHeading__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (TextHeadingContainer);

/***/ })

}]);
//# sourceMappingURL=118.parkhang-dev.js.map