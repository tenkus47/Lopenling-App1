(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[180],{

/***/ "./app/components/MediaComponent/MediaContainer.js":
/*!*********************************************************!*\
  !*** ./app/components/MediaComponent/MediaContainer.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var _MediaOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MediaOptions */ "./app/components/MediaComponent/MediaOptions.js");
/* harmony import */ var _DraggableMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DraggableMedia */ "./app/components/MediaComponent/DraggableMedia.js");







var mapStateToProps = function mapStateToProps(state) {
  var scrollToId = reducers__WEBPACK_IMPORTED_MODULE_2__["getScrollToId"](state);
  var syncIdOnClick = reducers__WEBPACK_IMPORTED_MODULE_2__["getSyncIdOnClick"](state);
  var imageData = reducers__WEBPACK_IMPORTED_MODULE_2__["getImageData"](state);
  var videoData = reducers__WEBPACK_IMPORTED_MODULE_2__["getVideoData"](state);
  var Media = reducers__WEBPACK_IMPORTED_MODULE_2__["getMediaData"](state);
  var selectedText = reducers__WEBPACK_IMPORTED_MODULE_2__["getSelectedText"](state);
  var isImagePortrait = reducers__WEBPACK_IMPORTED_MODULE_2__["isImagePortrait"](state);
  var alignmentData = reducers__WEBPACK_IMPORTED_MODULE_2__["getAlignment"](state);
  var witness = reducers__WEBPACK_IMPORTED_MODULE_2__["getSelectedTextWitnessId"](state, selectedText.id);
  var witnesses = reducers__WEBPACK_IMPORTED_MODULE_2__["getTextWitnesses"](state, selectedText.id);
  var ImageVersion = reducers__WEBPACK_IMPORTED_MODULE_2__["getSelectedImageVersion"](state);
  var selectedImage = reducers__WEBPACK_IMPORTED_MODULE_2__["getSelectedImage"](state);
  var imageScrollId = reducers__WEBPACK_IMPORTED_MODULE_2__["getImageScrollId"](state);
  var imageAlignmentById = reducers__WEBPACK_IMPORTED_MODULE_2__["getImageAlignmentById"](state); //  const selectedSegmentId=reducers.getSelectedSegmentId(state);

  return {
    scrollToId: scrollToId,
    syncIdOnClick: syncIdOnClick,
    imageData: imageData,
    videoData: videoData,
    selectedMedia: Media,
    selectedText: selectedText,
    isImagePortrait: isImagePortrait,
    // selectedSegmentId,
    alignmentData: alignmentData,
    witness: witness,
    witnesses: witnesses,
    ImageVersion: ImageVersion,
    selectedImage: selectedImage,
    imageScrollId: imageScrollId,
    imageAlignmentById: imageAlignmentById
  };
};

var matchDispatchToProps = function matchDispatchToProps(dispatch) {
  var toggleImage = function toggleImage(data) {
    return dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changedShowPageImages"](data));
  };

  var changeMediaSelection = function changeMediaSelection(data) {
    return dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["mediaSelection"](data));
  };

  var changeIsImagePortrait = function changeIsImagePortrait(payload) {
    return dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["setIsImagePortrait"](payload));
  };

  var changeImageVersion = function changeImageVersion(imageVersionId) {
    return dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["selectImageVersion"](imageVersionId));
  };

  var changeSelectedImage = function changeSelectedImage(payload) {
    return dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["selectImage"](payload));
  };

  var onSelectedSearchResult = function onSelectedSearchResult(text, start, length, selectedText) {
    if (!selectedText || selectedText.id !== text.id) {
      dispatch(batchActions([actions__WEBPACK_IMPORTED_MODULE_3__["selectedSearchResult"](text.id, start, length), actions__WEBPACK_IMPORTED_MODULE_3__["selectedText"](text)]));
    } else {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["selectedSearchResult"](text.id, start, length));
    }
  };

  return {
    toggleImage: toggleImage,
    onSelectedSearchResult: onSelectedSearchResult,
    changeMediaSelection: changeMediaSelection,
    changeIsImagePortrait: changeIsImagePortrait,
    changeImageVersion: changeImageVersion,
    changeSelectedImage: changeSelectedImage,
    changeSelectedRange: function changeSelectedRange(payload) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changeSelectedRange"](payload));
    },
    changeScrollToId: function changeScrollToId(payload) {
      return dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changeScrollToId"](payload));
    }
  };
};

var MediaContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, matchDispatchToProps)(_DraggableMedia__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (MediaContainer);

/***/ }),

/***/ "./app/components/MediaComponent/MediaOptions.css":
/*!********************************************************!*\
  !*** ./app/components/MediaComponent/MediaOptions.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","MediaOption":"MediaOptions---MediaOption","header":"MediaOptions---header","closeBtn":"MediaOptions---closeBtn"};

/***/ }),

/***/ "./app/components/MediaComponent/MediaOptions.js":
/*!*******************************************************!*\
  !*** ./app/components/MediaComponent/MediaOptions.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Image */ "./app/components/MediaComponent/Image.js");
/* harmony import */ var _Audio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Audio */ "./app/components/MediaComponent/Audio.js");
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Video */ "./app/components/MediaComponent/Video.js");
/* harmony import */ var _MediaOptions_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MediaOptions.css */ "./app/components/MediaComponent/MediaOptions.css");
/* harmony import */ var _MediaOptions_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MediaOptions_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");








function MediaOptions(props) {
  // if (props.selectedMedia.isImageVisible)
  //     return <ImageComponent {...props} />;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    className: _MediaOptions_css__WEBPACK_IMPORTED_MODULE_4___default.a.MediaOption,
    sx: {
      boxShadow: 2,
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    className: _MediaOptions_css__WEBPACK_IMPORTED_MODULE_4___default.a.header,
    sx: {
      bgcolor: "heading.main",
      color: "text.primary"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, props.selectedMedia.isVideoVisible && "VIDEO", props.selectedMedia.isAudioVisible && "AUDIO"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["IconButton"], {
    className: _MediaOptions_css__WEBPACK_IMPORTED_MODULE_4___default.a.closeBtn,
    onClick: function onClick() {
      return props.changeMediaSelection(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_5___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    sx: {
      height: "100%",
      paddingInline: 2,
      bgcolor: "navbar.main",
      color: "texts.main"
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (MediaOptions);

/***/ })

}]);
//# sourceMappingURL=180.parkhang-dev.js.map