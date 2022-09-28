(self["webpackChunkparkhang"] = self["webpackChunkparkhang"] || []).push([["app_components_Header_index_js"],{

/***/ "./app/images/discourse_user.svg":
/*!***************************************!*\
  !*** ./app/images/discourse_user.svg ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgDiscourseUser = function SvgDiscourseUser(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    viewBox: "0 0 448 512",
    fill: "currentColor"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgDiscourseUser);

/***/ }),

/***/ "./app/images/hamburger.svg":
/*!**********************************!*\
  !*** ./app/images/hamburger.svg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _style, _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgHamburger = function SvgHamburger(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 20",
    className: "hamburger_svg__hamburgerIcon"
  }, props), _style || (_style = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("style", null, ".hamburger_svg__hamburgerIcon .hamburger_svg__line{stroke:currentColor;stroke-width:3px}")), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    className: "hamburger_svg__line",
    d: "M0 2h24M0 10h24M0 18h24"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgHamburger);

/***/ }),

/***/ "./app/components/Header/AccountButton.js":
/*!************************************************!*\
  !*** ./app/components/Header/AccountButton.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Avatar/Avatar.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




function stringToColor(string) {
  var hash = 0;
  var i;
  /* eslint-disable no-bitwise */

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  var color = "#";

  for (i = 0; i < 3; i += 1) {
    var value = hash >> i * 8 & 0xff;
    color += "00".concat(value.toString(16)).slice(-2);
  }
  /* eslint-enable no-bitwise */


  return color;
}

function stringAvatar(name) {
  var nameformat = name.split(" ")[1] !== undefined ? "".concat(name.split(" ")[0][0]).concat(name.split(" ")[1][0]) : "".concat(name.split(" ")[0][0]);
  return {
    sx: {
      bgcolor: stringToColor(name)
    },
    children: nameformat
  };
}

var AccountButton = function AccountButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Account settings"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: props.onClick,
    id: "account-menu-button",
    size: "small",
    sx: {
      ml: 2
    },
    "aria-controls": open ? "account-menu" : undefined,
    "aria-haspopup": "true",
    "aria-expanded": open ? "true" : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, stringAvatar(props.name), {
    sx: {
      width: 28,
      height: 28
    }
  }))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountButton);

/***/ }),

/***/ "./app/components/Header/AccountOverlay.js":
/*!*************************************************!*\
  !*** ./app/components/Header/AccountOverlay.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/components/injectIntl.js");
/* harmony import */ var lib_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/User */ "./app/lib/User.js");
/* harmony import */ var _AccountOverlay_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountOverlay.css */ "./app/components/Header/AccountOverlay.css");
/* harmony import */ var _AccountOverlay_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AccountOverlay_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Link/Link.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Settings */ "./node_modules/@mui/icons-material/Settings.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");









var AccountOverlay = function AccountOverlay(props) {
  var signOutTitle = props.intl.formatMessage({
    id: "header.logout"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null, props.user.name || "Guest"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "https://www.lopenling.org",
    style: {
      textDecoration: "none",
      color: "gray"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_7__["default"], {
    fontSize: "small"
  })), "Settings")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "/discourse/logout/",
    style: {
      textDecoration: "none",
      color: "gray"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    fontSize: "small"
  })), signOutTitle)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_9__["default"])(AccountOverlay));

/***/ }),

/***/ "./app/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./app/components/Header/Header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "LoggedInControls": () => (/* binding */ LoggedInControls),
/* harmony export */   "LoginControls": () => (/* binding */ LoginControls),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.css */ "./app/components/Header/Header.css");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/User */ "./app/lib/User.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/components/message.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/components/injectIntl.js");
/* harmony import */ var components_LocaleSwitcher_LocaleSwitcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/LocaleSwitcher/LocaleSwitcher */ "./app/components/LocaleSwitcher/LocaleSwitcher.js");
/* harmony import */ var components_UI_NavigationButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/UI/NavigationButton */ "./app/components/UI/NavigationButton.js");
/* harmony import */ var _AccountButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AccountButton */ "./app/components/Header/AccountButton.js");
/* harmony import */ var _AccountOverlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AccountOverlay */ "./app/components/Header/AccountOverlay.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var images_lopenling_logo_173x_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! images/lopenling_logo_173x.png */ "./app/images/lopenling_logo_173x.png");
/* harmony import */ var images_discourse_user_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! images/discourse_user.svg */ "./app/images/discourse_user.svg");
/* harmony import */ var redux_first_router_link__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux-first-router-link */ "./node_modules/redux-first-router-link/dist/index.js");
/* harmony import */ var _ToggleTheme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ToggleTheme */ "./app/components/Header/ToggleTheme.js");
/* harmony import */ var reducers_pages__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! reducers/pages */ "./app/reducers/pages.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Menu/Menu.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/AppBar/AppBar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/MenuItem/MenuItem.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Person.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Menu.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




















var linkToEditor = "/editor";
var LoginControls = function LoginControls(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: SSO_SIGNUP_URL
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    variant: "contained",
    className: (_Header_css__WEBPACK_IMPORTED_MODULE_3___default().ButtonText),
    style: {
      padding: "6px 10px",
      boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: "header.signUp"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    method: "post",
    action: "/discourse/login_redirect/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    variant: "contained",
    type: "submit",
    className: (_Header_css__WEBPACK_IMPORTED_MODULE_3___default().ButtonText),
    sx: {
      padding: "6px 10px",
      display: "flex",
      alignItems: "center",
      boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_19__["default"], {
    style: {
      height: 16,
      width: 16
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: "header.login"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "hidden",
    name: "csrfmiddlewaretoken",
    value: props.csrfToken
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "hidden",
    name: "success_redirect",
    value: props.successRedirect
  })));
};
var LoggedInControls = function LoggedInControls(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    props.accountButtonClicked();
    setAnchorEl(event.currentTarget);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_Header_css__WEBPACK_IMPORTED_MODULE_3___default().controls)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AccountButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: props.user.name,
    onClick: handleClick
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    anchorEl: anchorEl,
    id: "account-menu",
    open: props.overlayVisible || false,
    onClose: props.accountButtonClicked,
    transformOrigin: {
      horizontal: "right",
      vertical: "top"
    },
    anchorOrigin: {
      horizontal: "right",
      vertical: "top"
    },
    style: {
      top: 20
    },
    PaperProps: {
      elevation: 0,
      sx: {
        overflow: "visible",
        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
        mt: 1.5,
        "& .MuiAvatar-root": {
          width: 32,
          height: 32,
          ml: -0.5,
          mr: 1
        },
        "&:before": {
          content: '""',
          display: "block",
          position: "absolute",
          top: 0,
          right: 14,
          width: 10,
          height: 10,
          bgcolor: "background.paper",
          transform: "translateY(-50%) rotate(45deg)",
          zIndex: 0
        }
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AccountOverlay__WEBPACK_IMPORTED_MODULE_8__["default"], {
    top: 60,
    right: 0,
    user: props.user
  })));
};
var Header = function Header(props) {
  var _props$intl;

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default().useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      anchorElNav = _React$useState4[0],
      setAnchorElNav = _React$useState4[1];

  var selectedText = props.selectedText;
  var controls = null;

  if (props.user.isLoggedIn) {
    controls = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoggedInControls, {
      user: props.user,
      overlayVisible: props.accountOverlayVisible,
      accountButtonClicked: props.accountButtonClicked
    });
  } else {
    controls = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LoginControls, {
      successRedirect: props.successRedirect,
      csrfToken: props.csrfToken
    });
  }

  var toggleTitle = (_props$intl = props.intl) === null || _props$intl === void 0 ? void 0 : _props$intl.formatMessage({
    id: "header.toggleTextList"
  });
  var LinkRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(function (props, ref) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      ref: ref
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(redux_first_router_link__WEBPACK_IMPORTED_MODULE_13__.NavLink, props));
  });
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    if (selectedText) {
      linkToEditor = "/texts/".concat(selectedText.id);
    }
  }, [selectedText]);

  var handleOpenNavMenu = function handleOpenNavMenu(event) {
    setAnchorElNav(event.currentTarget);
  };

  var handleCloseNavMenu = function handleCloseNavMenu() {
    setAnchorElNav(null);
  };

  var themeChange = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (e) {
    return props.themeButtonClicked(e);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {
    position: "static",
    color: "navbar",
    sx: {
      boxShadow: 1,
      zIndex: 3
    } // className={styles.header}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    sx: {
      height: "100%",
      maxWidth: "100%",
      paddingInline: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    sx: {
      flexGrow: 1,
      gap: 3,
      display: {
        xs: "none",
        md: "flex"
      },
      alignItems: {
        md: "center"
      }
    }
  }, props.page !== "Editors" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(redux_first_router_link__WEBPACK_IMPORTED_MODULE_13__.NavLink, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: (_Header_css__WEBPACK_IMPORTED_MODULE_3___default().logo)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: images_lopenling_logo_173x_png__WEBPACK_IMPORTED_MODULE_11__["default"],
    height: "37",
    width: 173,
    alt: "parkhang-logo"
  }))), props.page === "Editors" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_UI_NavigationButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: props.navigationButtonClicked,
    className: (_Header_css__WEBPACK_IMPORTED_MODULE_3___default().navigationButton),
    title: toggleTitle,
    isListVisible: props.textListVisible
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    display: {
      xs: "none",
      md: "flex"
    }
  }, reducers_pages__WEBPACK_IMPORTED_MODULE_15__.pageList.map(function (page, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
      to: page.pageName === "Editors" ? linkToEditor : page.url,
      variant: "text",
      component: LinkRef,
      color: "links",
      key: page.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_18__["default"], {
      id: page.id
    }));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], {
    title: "Forum"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    href: "https://lopenling.org",
    variant: "text",
    component: "a",
    color: "links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: "lopenlingForum"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    href: "https://www.nalanda.works",
    variant: "text",
    component: "a",
    color: "links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: "Nalanda"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {
    sx: {
      display: {
        xs: "block",
        md: "none"
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {
    size: "small",
    "aria-label": "account of current user",
    "aria-controls": "account-appbar",
    "aria-haspopup": "true",
    onClick: handleOpenNavMenu,
    color: "inherit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_25__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], {
    id: "menu-appbar",
    anchorEl: anchorElNav,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left"
    },
    keepMounted: true,
    transformOrigin: {
      vertical: "top",
      horizontal: "left"
    },
    open: Boolean(anchorElNav),
    onClose: handleCloseNavMenu,
    sx: {
      display: {
        xs: "block",
        md: "none"
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    onClick: handleCloseNavMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    to: "/",
    color: "links",
    component: LinkRef,
    variant: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: "header.texts"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    onClick: handleCloseNavMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    to: linkToEditor,
    component: LinkRef,
    variant: "text",
    color: "links" // disabled={_.isEmpty(props.text)}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: "header.editor"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    onClick: handleCloseNavMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    href: "https://www.lopenling.org",
    color: "links",
    variant: "text",
    component: "a"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: "lopenlingForum"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    onClick: handleCloseNavMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    href: "https://www.nalanda.works",
    color: "links",
    variant: "text",
    component: "a"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_18__["default"], {
    id: "Nalanda"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], {
    onClick: handleCloseNavMenu,
    sx: {
      display: props.page !== "Editors" ? "none" : "block"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], {
    sx: {
      color: "links",
      display: props.page !== "Editors" ? "none" : "block"
    },
    variant: "text",
    onClick: props.navigationButtonClicked
  }, "Options")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], {
    direction: "row",
    alignItems: "center",
    sx: {
      "float": {
        sx: "right"
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_LocaleSwitcher_LocaleSwitcher__WEBPACK_IMPORTED_MODULE_5__["default"], null), controls, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ToggleTheme__WEBPACK_IMPORTED_MODULE_14__["default"], {
    theme: props.theme,
    changeTheme: themeChange
  }))));
};

var mapStateToProps = function mapStateToProps(state) {
  var user = (0,reducers__WEBPACK_IMPORTED_MODULE_9__.getUser)(state);
  var activeLocale = (0,reducers__WEBPACK_IMPORTED_MODULE_9__.getActiveLocale)(state);
  var successRedirect = document.location.pathname; // TODO: move global CSRF_TOKEN into redux

  var csrfToken = CSRF_TOKEN;
  var page = state.page;
  return {
    user: user,
    activeLocale: activeLocale,
    textListIsVisible: (0,reducers__WEBPACK_IMPORTED_MODULE_9__.getTextListVisible)(state),
    accountOverlayVisible: (0,reducers__WEBPACK_IMPORTED_MODULE_9__.getAccountOverlayVisible)(state),
    textListVisible: (0,reducers__WEBPACK_IMPORTED_MODULE_9__.getTextListVisible)(state),
    successRedirect: successRedirect,
    csrfToken: csrfToken,
    theme: (0,reducers__WEBPACK_IMPORTED_MODULE_9__.getTheme)(state),
    text: (0,reducers__WEBPACK_IMPORTED_MODULE_9__.getSelectedText)(state),
    page: page,
    selectedText: (0,reducers__WEBPACK_IMPORTED_MODULE_9__.getSelectedText)(state)
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  return _objectSpread(_objectSpread(_objectSpread({}, ownProps), stateProps), {}, {
    navigationButtonClicked: function navigationButtonClicked() {
      dispatchProps.dispatch(actions__WEBPACK_IMPORTED_MODULE_10__.changedTextListVisible(!stateProps.textListIsVisible));
    },
    accountButtonClicked: function accountButtonClicked() {
      dispatchProps.dispatch(actions__WEBPACK_IMPORTED_MODULE_10__.changedAccountOverlay(!stateProps.accountOverlayVisible));
    },
    themeButtonClicked: function themeButtonClicked(payload) {
      dispatchProps.dispatch(actions__WEBPACK_IMPORTED_MODULE_10__.changeTheme(payload));
    }
  });
};

var HeaderContainer = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, null, mergeProps)(Header);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_intl__WEBPACK_IMPORTED_MODULE_27__["default"])(HeaderContainer));

/***/ }),

/***/ "./app/components/Header/ToggleTheme.js":
/*!**********************************************!*\
  !*** ./app/components/Header/ToggleTheme.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/esm/IconButton/IconButton.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_Brightness4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Brightness4 */ "./node_modules/@mui/icons-material/Brightness4.js");
/* harmony import */ var _mui_icons_material_Brightness7__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Brightness7 */ "./node_modules/@mui/icons-material/Brightness7.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/esm/styles/useTheme.js");
/* harmony import */ var components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/utility/useLocalStorage */ "./app/components/utility/useLocalStorage.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function ToggleTheme(_ref) {
  var changeTheme = _ref.changeTheme;

  var _useLocalStorage = (0,components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_1__["default"])("theme", "light"),
      _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
      selectedMode = _useLocalStorage2[0],
      setSelectedMode = _useLocalStorage2[1];

  var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["default"])();

  var handleThemeChange = function handleThemeChange() {
    if (theme.palette.mode === "dark") {
      setSelectedMode("light");
    } else {
      setSelectedMode("dark");
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    changeTheme(selectedMode);
  }, [selectedMode]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      ml: 1
    },
    onClick: handleThemeChange,
    color: "inherit"
  }, theme.palette.mode === "dark" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Brightness7__WEBPACK_IMPORTED_MODULE_4__["default"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Brightness4__WEBPACK_IMPORTED_MODULE_5__["default"], null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleTheme);

/***/ }),

/***/ "./app/components/Header/index.js":
/*!****************************************!*\
  !*** ./app/components/Header/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./app/components/Header/Header.js");


/***/ }),

/***/ "./app/components/LocaleSwitcher/LocaleSwitcher.js":
/*!*********************************************************!*\
  !*** ./app/components/LocaleSwitcher/LocaleSwitcher.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Language__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Language */ "./node_modules/@mui/icons-material/Language.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers_locales__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reducers/locales */ "./app/reducers/locales.js");
/* harmony import */ var _LocaleSwitcher_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LocaleSwitcher.css */ "./app/components/LocaleSwitcher/LocaleSwitcher.css");
/* harmony import */ var _LocaleSwitcher_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_LocaleSwitcher_css__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }











var LocaleSwitcher = /*#__PURE__*/function (_React$Component) {
  _inherits(LocaleSwitcher, _React$Component);

  var _super = _createSuper(LocaleSwitcher);

  function LocaleSwitcher() {
    _classCallCheck(this, LocaleSwitcher);

    return _super.apply(this, arguments);
  }

  _createClass(LocaleSwitcher, [{
    key: "render",
    value: function render() {
      var _this = this;

      var locales = this.props.locales.map(function (localeData) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("option", {
          key: localeData.locale,
          value: localeData.locale,
          className: (_LocaleSwitcher_css__WEBPACK_IMPORTED_MODULE_6___default().localeOption)
        }, localeData.displayName);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          display: "flex"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_icons_material_Language__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", {
        onChange: function onChange(e) {
          return _this.props.selectLocale(e.target.value);
        },
        value: this.props.activeLocale,
        className: (_LocaleSwitcher_css__WEBPACK_IMPORTED_MODULE_6___default().localeOptions)
      }, locales));
    }
  }]);

  return LocaleSwitcher;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

function mapStateToProps(state) {
  var locales = reducers__WEBPACK_IMPORTED_MODULE_3__.getLocales(state);
  var activeLocale = reducers__WEBPACK_IMPORTED_MODULE_3__.getActiveLocale(state);
  return {
    locales: locales,
    activeLocale: activeLocale
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectLocale: function selectLocale(locale) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_4__.selectedLocale(locale));
    }
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(LocaleSwitcher));

/***/ }),

/***/ "./app/components/UI/NavigationButton.js":
/*!***********************************************!*\
  !*** ./app/components/UI/NavigationButton.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavigationButton_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationButton.css */ "./app/components/UI/NavigationButton.css");
/* harmony import */ var _NavigationButton_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NavigationButton_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var images_hamburger_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! images/hamburger.svg */ "./app/images/hamburger.svg");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/esm/IconButton/IconButton.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");







var NavigationButton = function NavigationButton(props) {
  var classNames = [(_NavigationButton_css__WEBPACK_IMPORTED_MODULE_2___default().button)];

  if (props.className) {
    classNames.push(props.className);
  } // if (props.isListVisible) return null;


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "Navigation",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default().apply(void 0, classNames),
    onClick: props.onClick,
    title: props.title
  }, !props.isListVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(images_hamburger_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fill: "currentColor"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5__["default"], {
    fill: "currentColor"
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavigationButton);

/***/ }),

/***/ "./app/components/utility/useLocalStorage.js":
/*!***************************************************!*\
  !*** ./app/components/utility/useLocalStorage.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useLocalStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function getSavedValue(key, initialValue) {
  var savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue; // if (initialValue instanceof function) return initialValue()

  return initialValue;
}

function useLocalStorage(key, initialValue) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
    return getSavedValue(key, initialValue);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}

/***/ }),

/***/ "./app/images/lopenling_logo_173x.png":
/*!********************************************!*\
  !*** ./app/images/lopenling_logo_173x.png ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ea9a1cd4d17aad5a9c5bdfde6acaad2e.png");

/***/ }),

/***/ "./app/components/Header/AccountOverlay.css":
/*!**************************************************!*\
  !*** ./app/components/Header/AccountOverlay.css ***!
  \**************************************************/
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"overlay":"AccountOverlay---overlay","username":"AccountOverlay---username"};

/***/ }),

/***/ "./app/components/Header/Header.css":
/*!******************************************!*\
  !*** ./app/components/Header/Header.css ***!
  \******************************************/
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","header-height":"40px","mainTint":"#024279","activeButton":"#00746b","headerHeight":"40px","header":"Header---header","logo":"Header---logo","navigationButton":"Header---navigationButton","loginButton":"Header---loginButton","ButtonText":"Header---ButtonText","buttonLink":"Header---buttonLink","controls":"Header---controls"};

/***/ }),

/***/ "./app/components/LocaleSwitcher/LocaleSwitcher.css":
/*!**********************************************************!*\
  !*** ./app/components/LocaleSwitcher/LocaleSwitcher.css ***!
  \**********************************************************/
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"localeOptions":"LocaleSwitcher---localeOptions","localeOption":"LocaleSwitcher---localeOption","selected":"LocaleSwitcher---selected"};

/***/ }),

/***/ "./app/components/UI/NavigationButton.css":
/*!************************************************!*\
  !*** ./app/components/UI/NavigationButton.css ***!
  \************************************************/
/***/ ((module) => {

// extracted by mini-css-extract-plugin
module.exports = {"button":"NavigationButton---button"};

/***/ })

}]);
//# sourceMappingURL=app_components_Header_index_js.parkhang-dev.js.map