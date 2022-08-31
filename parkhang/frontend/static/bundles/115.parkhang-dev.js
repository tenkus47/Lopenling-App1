(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[115],{

/***/ "./app/components/TextDetail/AnnotationControlsContainer.test.js":
/*!***********************************************************************!*\
  !*** ./app/components/TextDetail/AnnotationControlsContainer.test.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AnnotationControlsContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnnotationControlsContainer */ "./app/components/TextDetail/AnnotationControlsContainer.js");
/* harmony import */ var lib_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/User */ "./app/lib/User.js");



test("mapStateToProps with no activeAnnotation", function () {
  var user = Object(lib_User__WEBPACK_IMPORTED_MODULE_2__["getAnonymousUser"])();
  var state = {
    data: {
      textsById: {
        1: {
          id: 1,
          name: "Test"
        }
      },
      witnessesById: {
        1: {
          id: 1,
          text: 1,
          source: 1,
          content: "",
          is_base: false,
          is_working: true,
          revision: 1,
          properties: null
        }
      },
      sourcesById: {
        1: {
          id: 1,
          name: "test",
          is_base: true,
          is_working: true
        }
      }
    },
    ui: {
      selectedText: {
        id: 1
      },
      selectedTextWitness: {
        1: 1
      }
    },
    user: {
      userId: user.id,
      userName: user.name
    }
  };
  expect(Object(_AnnotationControlsContainer__WEBPACK_IMPORTED_MODULE_1__["mapStateToProps"])(state, {
    activeAnnotation: null
  })).toEqual({
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
  });
});

/***/ })

}]);
//# sourceMappingURL=115.parkhang-dev.js.map