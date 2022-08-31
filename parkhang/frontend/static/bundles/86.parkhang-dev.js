(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[86],{

/***/ "./app/components/TextDetail/SelectVersion.css":
/*!*****************************************************!*\
  !*** ./app/components/TextDetail/SelectVersion.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","mainTint":"#024279","activeButton":"#00746b","selectVersion":"SelectVersion---selectVersion","selectEmpty":"SelectVersion---selectEmpty","selectOptions":"SelectVersion---selectOptions","styled-select":"SelectVersion---styled-select"};

/***/ }),

/***/ "./app/components/TextDetail/SelectVersion.js":
/*!****************************************************!*\
  !*** ./app/components/TextDetail/SelectVersion.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _SelectVersion_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SelectVersion.css */ "./app/components/TextDetail/SelectVersion.css");
/* harmony import */ var _SelectVersion_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SelectVersion_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lib_Witness__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/Witness */ "./app/lib/Witness.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");








var SelectVersion = function SelectVersion(props) {
  var witnesses = [];
  var tabName = "";
  var r = "";
  var classes = [];

  if (props.witnesses && props.activeWitness) {
    r = props.witnesses.findIndex(function (l) {
      return l.id === props.activeWitness.id;
    });
    witnesses = props.witnesses.map(function (witness) {
      return witness;
    });
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

  var handleChangeWitness = function handleChangeWitness(e) {
    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(witnesses)) {
      props.onSelectedWitness(witnesses[e.target.value]);
    }
  };

  if (witnesses.length === 0) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["NativeSelect"], {
    onChange: handleChangeWitness,
    className: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_4___default.a.selectVersion,
    value: r,
    label: "Version",
    classes: {
      root: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_4___default.a.selectEmpty,
      select: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_4___default.a.selectOptions
    }
  }, witnesses.map(function (witness, key) {
    if (witness.id === props.activeWitness.id) classes.push(_SelectVersion_css__WEBPACK_IMPORTED_MODULE_4___default.a.selected);
    tabName = witness.source.name;

    if (witness.isWorking) {
      var _props$user;

      tabName = props.intl.locale === "en" ? ((_props$user = props.user) === null || _props$user === void 0 ? void 0 : _props$user.name) === "User" ? "Working" : "My Edition" : "མཉམ་འབྲེལ་པར་མ།";
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      key: "versionSelect-".concat(key),
      value: key,
      className: _SelectVersion_css__WEBPACK_IMPORTED_MODULE_4___default.a.selectOptions
    }, tabName);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Object(react_intl__WEBPACK_IMPORTED_MODULE_3__["injectIntl"])(SelectVersion)));

/***/ })

}]);
//# sourceMappingURL=86.parkhang-dev.js.map