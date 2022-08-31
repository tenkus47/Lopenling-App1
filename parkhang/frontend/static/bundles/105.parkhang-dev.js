(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[105],{

/***/ "./app/components/Search/Search.js":
/*!*****************************************!*\
  !*** ./app/components/Search/Search.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import React, { useRef, useState } from "react";
// import styles from "./Search.css";
// // import Magnifier from "images/magnifier.svg";
// import classnames from "classnames";
// import { injectIntl } from "react-intl";
// import * as reduxroute from "redux-first-router";
// // import useLocalStorage from "../../bodyComponent/utility/useLocalStorage";
// function Search(props) {
//     const input = useRef("");
//     const [search, setSearch] = useState(props.searchValue);
//     const [inputEmpty, setInputEmpty] = useState("");
//     const history = reduxroute.history();
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         props.changeSearchTerm(input.current.value);
//         props.searchChanged(input.current.value);
//         input.current.value = props.searchValue;
//     };
//     const handleReset = (e) => {
//         input.current.value = "";
//         setInputEmpty("");
//         setSearch("");
//     };
//     let classes = [styles.resetButton];
//     if (inputEmpty !== "") {
//         classes.push(styles.active);
//     }
//     return (
//         <div className={styles.searchContainer}>
//             <form className={styles.Search} onSubmit={handleSubmit}>
//                 <button className={styles.submit} type="submit">
//                     {/* <Magnifier />*/}
//                     search
//                 </button>
//                 <input
//                     type="text"
//                     ref={input}
//                     value={search}
//                     onChange={(e) => {
//                         setInputEmpty(e.target.value);
//                         setSearch(e.target.value);
//                         props.searchChanged(e.target.value);
//                     }}
//                     placeholder={props.intl.formatMessage({
//                         id: "leftbar.search",
//                     })}
//                 />
//                 <button
//                     type="reset"
//                     className={classnames(classes)}
//                     onClick={handleReset}
//                 >
//                     x
//                 </button>
//             </form>
//         </div>
//     );
// }
// export default injectIntl(Search);

/***/ }),

/***/ "./app/components/Search/SearchContainer.js":
/*!**************************************************!*\
  !*** ./app/components/Search/SearchContainer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Search */ "./app/components/Search/Search.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var redux_first_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-first-router */ "./node_modules/redux-first-router/dist/es/index.js");







var mapStateToProps = function mapStateToProps(state) {
  var searchTerm = reducers__WEBPACK_IMPORTED_MODULE_4__["getSearchValue"](state);
  return {
    searchTerm: searchTerm,
    searchValue: state.ui.searchValue
  };
};

var mapDisptchToProps = function mapDisptchToProps(dispatch) {
  return {
    changeSearchTerm: function changeSearchTerm(searchTerm) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changedSearchTerm"](searchTerm));
    },
    searchChanged: function searchChanged(searchTerm) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_3__["changedSearchValue"](searchTerm));
    }
  };
};

var searchContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDisptchToProps)(_Search__WEBPACK_IMPORTED_MODULE_2___default.a);
/* harmony default export */ __webpack_exports__["default"] = (searchContainer);

/***/ })

}]);
//# sourceMappingURL=105.parkhang-dev.js.map