(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[5],{

/***/ "./app/components/App/Switcher.js":
/*!****************************************!*\
  !*** ./app/components/App/Switcher.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-universal-component */ "./node_modules/react-universal-component/dist/index.js");
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loader */ "./node_modules/react-loader/lib/react-loader.js");
/* harmony import */ var react_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./app/components/App/components.js");
var _excluded = ["page", "direction"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function Switcher(props) {
  var page = props.page,
      isLoading = props.isLoading;
  var Component = _components__WEBPACK_IMPORTED_MODULE_4__[page];
  return (
    /*#__PURE__*/
    // <UniversalComponent
    //     page={page}
    //     isLoading={page === "Editors" ? isLoading : false}
    // />
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, null)
  );
} // const UniversalComponent = universal(
//     (props) => import(`components/${props.page}`),
//     {
//         minDelay: 300,
//         chunkName: (props) => props.page,
//         loading: () => <Loader />,
//         ignoreBabelRename: true,
//         error: (e) => (
//             <div className="notFound">
//                 PAGE NOT FOUND - 404, click <a href="/">Here</a>
//                 {`${e.toString()}`}
//             </div>
//         ),
//         loadingTransition: true,
//     }
// );


var mapState = function mapState(_ref) {
  var page = _ref.page,
      direction = _ref.direction,
      state = _objectWithoutProperties(_ref, _excluded);

  return {
    page: page,
    isLoading: !state.data.loadedInitialData
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapState)(Switcher));

/***/ }),

/***/ "./app/components/App/components.js":
/*!******************************************!*\
  !*** ./app/components/App/components.js ***!
  \******************************************/
/*! exports provided: HomePage, Editors, NotFound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Editors", function() { return Editors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFound", function() { return NotFound; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/HomePage */ "./app/components/HomePage/index.js");
// components.js

var EditorContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! components/Editors */ "./app/components/Editors/index.js"));
});


var HomePage = function HomePage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_HomePage__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};

var Editors = function Editors() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], {
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading...")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EditorContainer, null));
};

var mapStateToProps = function mapStateToProps(_ref) {
  var location = _ref.location;
  return {
    userId: location.payload.id
  };
};

var NotFound = function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "404");
};



/***/ }),

/***/ "./node_modules/react-universal-component/dist/requireById sync recursive ^.*$":
/*!***************************************************************************!*\
  !*** ./node_modules/react-universal-component/dist/requireById sync ^.*$ ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": "./node_modules/react-universal-component/dist/requireById/index.js",
	"./": "./node_modules/react-universal-component/dist/requireById/index.js",
	"./index": "./node_modules/react-universal-component/dist/requireById/index.js",
	"./index.js": "./node_modules/react-universal-component/dist/requireById/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/react-universal-component/dist/requireById sync recursive ^.*$";

/***/ })

}]);
//# sourceMappingURL=5.parkhang-dev.js.map