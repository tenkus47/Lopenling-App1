(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[3],{

/***/ "./app/components/Header/AccountButton.js":
/*!************************************************!*\
  !*** ./app/components/Header/AccountButton.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: "Account settings"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: props.onClick,
    id: "account-menu-button",
    size: "small",
    sx: {
      ml: 2
    },
    "aria-controls": open ? "account-menu" : undefined,
    "aria-haspopup": "true",
    "aria-expanded": open ? "true" : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__["Avatar"], _extends({}, stringAvatar(props.name), {
    sx: {
      width: 28,
      height: 28
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (AccountButton);

/***/ }),

/***/ "./app/components/Header/AccountOverlay.css":
/*!**************************************************!*\
  !*** ./app/components/Header/AccountOverlay.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"overlay":"AccountOverlay---overlay","username":"AccountOverlay---username"};

/***/ }),

/***/ "./app/components/Header/AccountOverlay.js":
/*!*************************************************!*\
  !*** ./app/components/Header/AccountOverlay.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var lib_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/User */ "./app/lib/User.js");
/* harmony import */ var _AccountOverlay_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccountOverlay.css */ "./app/components/Header/AccountOverlay.css");
/* harmony import */ var _AccountOverlay_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AccountOverlay_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _mui_icons_material_PersonAdd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/PersonAdd */ "./node_modules/@mui/icons-material/PersonAdd.js");
/* harmony import */ var _mui_icons_material_PersonAdd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_PersonAdd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Settings */ "./node_modules/@mui/icons-material/Settings.js");
/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Logout */ "./node_modules/@mui/icons-material/Logout.js");
/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_7__);









var AccountOverlay = function AccountOverlay(props) {
  var signOutTitle = props.intl.formatMessage({
    id: "header.logout"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], null, props.user.name || "Guest"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "https://www.lopenling.org",
    style: {
      textDecoration: "none",
      color: "gray"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fontSize: "small"
  })), "Settings")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "/discourse/logout/",
    style: {
      textDecoration: "none",
      color: "gray"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fontSize: "small"
  })), signOutTitle)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(AccountOverlay));

/***/ }),

/***/ "./app/components/Header/Header.css":
/*!******************************************!*\
  !*** ./app/components/Header/Header.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","header-height":"40px","mainTint":"#024279","activeButton":"#00746b","headerHeight":"40px","header":"Header---header","logo":"Header---logo","navigationButton":"Header---navigationButton","loginButton":"Header---loginButton","ButtonText":"Header---ButtonText","buttonLink":"Header---buttonLink","controls":"Header---controls"};

/***/ }),

/***/ "./app/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./app/components/Header/Header.js ***!
  \*****************************************/
/*! exports provided: LoginControls, LoggedInControls, Header, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginControls", function() { return LoginControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInControls", function() { return LoggedInControls; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.css */ "./app/components/Header/Header.css");
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/User */ "./app/lib/User.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var components_LocaleSwitcher_LocaleSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/LocaleSwitcher/LocaleSwitcher */ "./app/components/LocaleSwitcher/LocaleSwitcher.js");
/* harmony import */ var components_UI_NavigationButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/UI/NavigationButton */ "./app/components/UI/NavigationButton.js");
/* harmony import */ var _AccountButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AccountButton */ "./app/components/Header/AccountButton.js");
/* harmony import */ var _AccountOverlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AccountOverlay */ "./app/components/Header/AccountOverlay.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var images_lopenling_logo_173x_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! images/lopenling_logo_173x.png */ "./app/images/lopenling_logo_173x.png");
/* harmony import */ var images_discourse_user_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! images/discourse_user.svg */ "./app/images/discourse_user.svg");
/* harmony import */ var redux_first_router_link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! redux-first-router-link */ "./node_modules/redux-first-router-link/dist/index.js");
/* harmony import */ var redux_first_router_link__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(redux_first_router_link__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ToggleTheme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ToggleTheme */ "./app/components/Header/ToggleTheme.js");
/* harmony import */ var reducers_pages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reducers/pages */ "./app/reducers/pages.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/index.js");
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Stack"], {
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: SSO_SIGNUP_URL
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Button"], {
    variant: "contained",
    className: _Header_css__WEBPACK_IMPORTED_MODULE_3___default.a.ButtonText,
    style: {
      padding: "6px 10px",
      boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "header.signUp"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    method: "post",
    action: "/discourse/login_redirect/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Button"], {
    variant: "contained",
    type: "submit",
    className: _Header_css__WEBPACK_IMPORTED_MODULE_3___default.a.ButtonText,
    sx: {
      padding: "6px 10px",
      display: "flex",
      alignItems: "center",
      boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_18__["Person"], {
    style: {
      height: 16,
      width: 16
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "header.login"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: "csrfmiddlewaretoken",
    value: props.csrfToken
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "hidden",
    name: "success_redirect",
    value: props.successRedirect
  })));
};
var LoggedInControls = function LoggedInControls(props) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var handleClick = function handleClick(event) {
    props.accountButtonClicked();
    setAnchorEl(event.currentTarget);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Header_css__WEBPACK_IMPORTED_MODULE_3___default.a.controls
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: props.user.name,
    onClick: handleClick
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Menu"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AccountOverlay__WEBPACK_IMPORTED_MODULE_9__["default"], {
    top: 60,
    right: 0,
    user: props.user
  })));
};
var Header = function Header(props) {
  var _props$intl;

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      anchorElNav = _React$useState4[0],
      setAnchorElNav = _React$useState4[1];

  var selectedText = props.selectedText;
  var controls = null;

  if (props.user.isLoggedIn) {
    controls = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoggedInControls, {
      user: props.user,
      overlayVisible: props.accountOverlayVisible,
      accountButtonClicked: props.accountButtonClicked
    });
  } else {
    controls = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LoginControls, {
      successRedirect: props.successRedirect,
      csrfToken: props.csrfToken
    });
  }

  var toggleTitle = (_props$intl = props.intl) === null || _props$intl === void 0 ? void 0 : _props$intl.formatMessage({
    id: "header.toggleTextList"
  });
  var LinkRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      ref: ref
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_first_router_link__WEBPACK_IMPORTED_MODULE_14__["NavLink"], props));
  });
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
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

  var themeChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    return props.themeButtonClicked(e);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["AppBar"], {
    position: "static",
    color: "navbar",
    sx: {
      boxShadow: 1,
      zIndex: 3,
      display: props.page === 'Vote' ? 'none' : 'block'
    } // className={styles.header}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Stack"], {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    sx: {
      height: "100%",
      maxWidth: "100%",
      paddingInline: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Box"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_first_router_link__WEBPACK_IMPORTED_MODULE_14__["NavLink"], {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _Header_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: images_lopenling_logo_173x_png__WEBPACK_IMPORTED_MODULE_12__["default"],
    height: "37",
    width: 173,
    alt: "parkhang-logo"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Box"], {
    display: {
      xs: "none",
      md: "flex"
    }
  }, reducers_pages__WEBPACK_IMPORTED_MODULE_16__["pageList"].map(function (page, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Button"], {
      to: page.pageName === "Editors" ? linkToEditor : page.url,
      variant: "text",
      component: LinkRef,
      color: "links",
      key: page.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: page.id
    }));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], {
    title: "Forum"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Button"], {
    href: "https://lopenling.org",
    variant: "text",
    component: "a",
    color: "links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "lopenlingForum"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Button"], {
    href: "https://www.nalanda.works",
    variant: "text",
    component: "a",
    color: "links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "Nalanda"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Box"], {
    sx: {
      display: {
        xs: "block",
        md: "none"
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["IconButton"], {
    size: "small",
    "aria-label": "account of current user",
    "aria-controls": "account-appbar",
    "aria-haspopup": "true",
    onClick: handleOpenNavMenu,
    color: "inherit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material__WEBPACK_IMPORTED_MODULE_18__["Menu"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Menu"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["MenuItem"], {
    onClick: handleCloseNavMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Button"], {
    to: "/",
    color: "links",
    component: LinkRef,
    variant: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "header.texts"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["MenuItem"], {
    onClick: handleCloseNavMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Button"], {
    to: linkToEditor,
    component: LinkRef,
    variant: "text",
    color: "links" // disabled={_.isEmpty(props.text)}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "header.editor"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["MenuItem"], {
    onClick: handleCloseNavMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Button"], {
    href: "https://www.lopenling.org",
    color: "links",
    variant: "text",
    component: "a"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "lopenlingForum"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["MenuItem"], {
    onClick: handleCloseNavMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Button"], {
    href: "https://www.nalanda.works",
    color: "links",
    variant: "text",
    component: "a"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "Nalanda"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_17__["Stack"], {
    direction: "row",
    alignItems: "center",
    sx: {
      "float": {
        sx: "right"
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_LocaleSwitcher_LocaleSwitcher__WEBPACK_IMPORTED_MODULE_6__["default"], null), controls, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ToggleTheme__WEBPACK_IMPORTED_MODULE_15__["default"], {
    theme: props.theme,
    changeTheme: themeChange
  }))));
};

var mapStateToProps = function mapStateToProps(state) {
  var _ref;

  var user = Object(reducers__WEBPACK_IMPORTED_MODULE_10__["getUser"])(state);
  var activeLocale = Object(reducers__WEBPACK_IMPORTED_MODULE_10__["getActiveLocale"])(state);
  var successRedirect = document.location.pathname; // TODO: move global CSRF_TOKEN into redux

  var csrfToken = CSRF_TOKEN;
  var page = state.page;
  return _ref = {
    page: state.page,
    user: user,
    activeLocale: activeLocale,
    textListIsVisible: Object(reducers__WEBPACK_IMPORTED_MODULE_10__["getTextListVisible"])(state),
    accountOverlayVisible: Object(reducers__WEBPACK_IMPORTED_MODULE_10__["getAccountOverlayVisible"])(state),
    textListVisible: Object(reducers__WEBPACK_IMPORTED_MODULE_10__["getTextListVisible"])(state),
    successRedirect: successRedirect,
    csrfToken: csrfToken,
    theme: Object(reducers__WEBPACK_IMPORTED_MODULE_10__["getTheme"])(state),
    text: Object(reducers__WEBPACK_IMPORTED_MODULE_10__["getSelectedText"])(state)
  }, _defineProperty(_ref, "page", page), _defineProperty(_ref, "selectedText", Object(reducers__WEBPACK_IMPORTED_MODULE_10__["getSelectedText"])(state)), _ref;
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  return _objectSpread(_objectSpread(_objectSpread({}, ownProps), stateProps), {}, {
    navigationButtonClicked: function navigationButtonClicked() {
      dispatchProps.dispatch(actions__WEBPACK_IMPORTED_MODULE_11__["changedTextListVisible"](!stateProps.textListIsVisible));
    },
    accountButtonClicked: function accountButtonClicked() {
      dispatchProps.dispatch(actions__WEBPACK_IMPORTED_MODULE_11__["changedAccountOverlay"](!stateProps.accountOverlayVisible));
    },
    themeButtonClicked: function themeButtonClicked(payload) {
      dispatchProps.dispatch(actions__WEBPACK_IMPORTED_MODULE_11__["changeTheme"](payload));
    }
  });
};

var HeaderContainer = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null, mergeProps)(Header);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["injectIntl"])(HeaderContainer));

/***/ }),

/***/ "./app/components/Header/ToggleTheme.js":
/*!**********************************************!*\
  !*** ./app/components/Header/ToggleTheme.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_Brightness4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/icons-material/Brightness4 */ "./node_modules/@mui/icons-material/Brightness4.js");
/* harmony import */ var _mui_icons_material_Brightness4__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Brightness4__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Brightness7__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Brightness7 */ "./node_modules/@mui/icons-material/Brightness7.js");
/* harmony import */ var _mui_icons_material_Brightness7__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Brightness7__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/index.js");
/* harmony import */ var components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/utility/useLocalStorage */ "./app/components/utility/useLocalStorage.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function ToggleTheme(_ref) {
  var changeTheme = _ref.changeTheme;

  var _useLocalStorage = Object(components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_5__["default"])("theme", "light"),
      _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
      selectedMode = _useLocalStorage2[0],
      setSelectedMode = _useLocalStorage2[1];

  var theme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();

  var handleThemeChange = function handleThemeChange() {
    if (theme.palette.mode === "dark") {
      setSelectedMode("light");
    } else {
      setSelectedMode("dark");
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    changeTheme(selectedMode);
  }, [selectedMode]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
    sx: {
      ml: 1
    },
    onClick: handleThemeChange,
    color: "inherit"
  }, theme.palette.mode === "dark" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_icons_material_Brightness7__WEBPACK_IMPORTED_MODULE_3___default.a, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_icons_material_Brightness4__WEBPACK_IMPORTED_MODULE_2___default.a, null));
}

/* harmony default export */ __webpack_exports__["default"] = (ToggleTheme);

/***/ }),

/***/ "./app/components/Header/index.js":
/*!****************************************!*\
  !*** ./app/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./app/components/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./app/components/LocaleSwitcher/LocaleSwitcher.css":
/*!**********************************************************!*\
  !*** ./app/components/LocaleSwitcher/LocaleSwitcher.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"localeOptions":"LocaleSwitcher---localeOptions","localeOption":"LocaleSwitcher---localeOption","selected":"LocaleSwitcher---selected"};

/***/ }),

/***/ "./app/components/LocaleSwitcher/LocaleSwitcher.js":
/*!*********************************************************!*\
  !*** ./app/components/LocaleSwitcher/LocaleSwitcher.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_icons_material_Language__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/Language */ "./node_modules/@mui/icons-material/Language.js");
/* harmony import */ var _mui_icons_material_Language__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Language__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers_locales__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reducers/locales */ "./app/reducers/locales.js");
/* harmony import */ var _LocaleSwitcher_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LocaleSwitcher.css */ "./app/components/LocaleSwitcher/LocaleSwitcher.css");
/* harmony import */ var _LocaleSwitcher_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_LocaleSwitcher_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
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
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("option", {
          key: localeData.locale,
          value: localeData.locale,
          className: _LocaleSwitcher_css__WEBPACK_IMPORTED_MODULE_7___default.a.localeOption
        }, localeData.displayName);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
        style: {
          display: "flex"
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_mui_icons_material_Language__WEBPACK_IMPORTED_MODULE_3___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", {
        onChange: function onChange(e) {
          return _this.props.selectLocale(e.target.value);
        },
        value: this.props.activeLocale,
        className: _LocaleSwitcher_css__WEBPACK_IMPORTED_MODULE_7___default.a.localeOptions
      }, locales));
    }
  }]);

  return LocaleSwitcher;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

function mapStateToProps(state) {
  var locales = reducers__WEBPACK_IMPORTED_MODULE_4__["getLocales"](state);
  var activeLocale = reducers__WEBPACK_IMPORTED_MODULE_4__["getActiveLocale"](state);
  return {
    locales: locales,
    activeLocale: activeLocale
  };
}

function mapDispatchToProps(dispatch) {
  return {
    selectLocale: function selectLocale(locale) {
      dispatch(actions__WEBPACK_IMPORTED_MODULE_5__["selectedLocale"](locale));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(LocaleSwitcher));

/***/ }),

/***/ "./app/components/UI/NavigationButton.css":
/*!************************************************!*\
  !*** ./app/components/UI/NavigationButton.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"button":"NavigationButton---button"};

/***/ }),

/***/ "./app/components/UI/NavigationButton.js":
/*!***********************************************!*\
  !*** ./app/components/UI/NavigationButton.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavigationButton_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationButton.css */ "./app/components/UI/NavigationButton.css");
/* harmony import */ var _NavigationButton_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NavigationButton_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var images_hamburger_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! images/hamburger.svg */ "./app/images/hamburger.svg");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/index.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5__);







var NavigationButton = function NavigationButton(props) {
  var classNames = [_NavigationButton_css__WEBPACK_IMPORTED_MODULE_2___default.a.button];

  if (props.className) {
    classNames.push(props.className);
  } // if (props.isListVisible) return null;


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    "aria-label": "Navigation",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default.a.apply(void 0, classNames),
    onClick: props.onClick,
    title: props.title
  }, !props.isListVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_hamburger_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fill: "currentColor"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_5___default.a, {
    fill: "currentColor"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationButton);

/***/ }),

/***/ "./app/components/utility/useLocalStorage.js":
/*!***************************************************!*\
  !*** ./app/components/utility/useLocalStorage.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useLocalStorage; });
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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    return getSavedValue(key, initialValue);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}

/***/ }),

/***/ "./app/images/discourse_user.svg":
/*!***************************************!*\
  !*** ./app/images/discourse_user.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgDiscourseUser = function SvgDiscourseUser(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 448 512",
    fill: "currentColor"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgDiscourseUser);

/***/ }),

/***/ "./app/images/hamburger.svg":
/*!**********************************!*\
  !*** ./app/images/hamburger.svg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgHamburger = function SvgHamburger(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 24 20",
    className: "hamburgerIcon"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    className: "line",
    stroke: "currentColor",
    strokeWidth: 3,
    d: "M0 2h24M0 10h24M0 18h24"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgHamburger);

/***/ }),

/***/ "./app/images/lopenling_logo_173x.png":
/*!********************************************!*\
  !*** ./app/images/lopenling_logo_173x.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ea9a1cd4d17aad5a9c5bdfde6acaad2e.png");

/***/ }),

/***/ "./node_modules/@mui/icons-material/Brightness4.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mui/icons-material/Brightness4.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z"
}), 'Brightness4');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@mui/icons-material/Brightness7.js":
/*!*********************************************************!*\
  !*** ./node_modules/@mui/icons-material/Brightness7.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
}), 'Brightness7');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@mui/icons-material/Language.js":
/*!******************************************************!*\
  !*** ./node_modules/@mui/icons-material/Language.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"
}), 'Language');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@mui/icons-material/Logout.js":
/*!****************************************************!*\
  !*** ./node_modules/@mui/icons-material/Logout.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"
}), 'Logout');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@mui/icons-material/PersonAdd.js":
/*!*******************************************************!*\
  !*** ./node_modules/@mui/icons-material/PersonAdd.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), 'PersonAdd');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@mui/icons-material/Settings.js":
/*!******************************************************!*\
  !*** ./node_modules/@mui/icons-material/Settings.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@mui/icons-material/utils/createSvgIcon.js"));

var _jsxRuntime = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"
}), 'Settings');

exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=3.parkhang-dev.js.map