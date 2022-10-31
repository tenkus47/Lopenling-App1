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
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}




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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
    title: "Account settings"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
    onClick: props.onClick,
    id: "account-menu-button",
    size: "small",
    sx: {
      ml: 2
    },
    "aria-controls": open ? "account-menu" : undefined,
    "aria-haspopup": "true",
    "aria-expanded": open ? "true" : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_1__["Avatar"], _extends({}, stringAvatar(props.name), {
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
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");







var AccountOverlay = function AccountOverlay(props) {
  var signOutTitle = props.intl.formatMessage({
    id: "header.logout"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], null, props.user.name || "Guest"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["Divider"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "https://www.lopenling.org",
    style: {
      textDecoration: "none",
      color: "gray"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_5__["Settings"], {
    fontSize: "small"
  })), "Settings")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["MenuItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    href: "/discourse/logout/",
    style: {
      textDecoration: "none",
      color: "gray"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_4__["ListItemIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_5__["Logout"], {
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
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}




















var linkToEditor = "/editor";
var LoginControls = function LoginControls(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["Stack"], {
    direction: "row",
    spacing: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: SSO_SIGNUP_URL
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["Button"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["Button"], {
    variant: "contained",
    type: "submit",
    className: _Header_css__WEBPACK_IMPORTED_MODULE_3___default.a.ButtonText,
    sx: {
      padding: "6px 10px",
      display: "flex",
      alignItems: "center",
      boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_18__["Person"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["Menu"], {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["AppBar"], {
    position: "static",
    color: "navbar",
    sx: {
      boxShadow: 1,
      zIndex: 3,
      display: props.page === "Vote" ? "none" : "block"
    } // className={styles.header}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["Stack"], {
    direction: "row",
    alignItems: "center",
    justifyContent: "space-between",
    sx: {
      height: "100%",
      maxWidth: "100%",
      paddingInline: 1
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["Box"], {
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["Box"], {
    display: {
      xs: "none",
      md: "flex"
    }
  }, reducers_pages__WEBPACK_IMPORTED_MODULE_16__["pageList"].map(function (page, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["Button"], {
      to: page.pageName === "Editors" ? linkToEditor : page.url,
      variant: "text",
      component: LinkRef,
      color: "links",
      key: page.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
      id: page.id
    }));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["Tooltip"], {
    title: "Forum"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["Button"], {
    href: "https://lopenling.org",
    variant: "text",
    component: "a",
    color: "links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "lopenlingForum"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["Button"], {
    href: "https://www.nalanda.works",
    variant: "text",
    component: "a",
    color: "links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "Nalanda"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["Box"], {
    sx: {
      display: {
        xs: "block",
        md: "none"
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["IconButton"], {
    size: "small",
    "aria-label": "account of current user",
    "aria-controls": "account-appbar",
    "aria-haspopup": "true",
    onClick: handleOpenNavMenu,
    color: "inherit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_18__["Menu"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["Menu"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["MenuItem"], {
    onClick: handleCloseNavMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["Button"], {
    to: "/",
    color: "links",
    component: LinkRef,
    variant: "text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "header.texts"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["MenuItem"], {
    onClick: handleCloseNavMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["Button"], {
    to: linkToEditor,
    component: LinkRef,
    variant: "text",
    color: "links" // disabled={_.isEmpty(props.text)}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "header.editor"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["MenuItem"], {
    onClick: handleCloseNavMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["Button"], {
    href: "https://www.lopenling.org",
    color: "links",
    variant: "text",
    component: "a"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "lopenlingForum"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["MenuItem"], {
    onClick: handleCloseNavMenu
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["Button"], {
    href: "https://www.nalanda.works",
    color: "links",
    variant: "text",
    component: "a"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__["FormattedMessage"], {
    id: "Nalanda"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_17__["Stack"], {
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
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/esm/styles/index.js");
/* harmony import */ var components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/utility/useLocalStorage */ "./app/components/utility/useLocalStorage.js");
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}







function ToggleTheme(_ref) {
  var changeTheme = _ref.changeTheme;

  var _useLocalStorage = Object(components_utility_useLocalStorage__WEBPACK_IMPORTED_MODULE_4__["default"])("theme", "light"),
      _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
      selectedMode = _useLocalStorage2[0],
      setSelectedMode = _useLocalStorage2[1];

  var theme = Object(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_0__["IconButton"], {
    sx: {
      ml: 1
    },
    onClick: handleThemeChange,
    color: "inherit"
  }, theme.palette.mode === "dark" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__["Brightness7"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_2__["Brightness4"], null));
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
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
/* harmony import */ var reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reducers */ "./app/reducers/index.js");
/* harmony import */ var actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions */ "./app/actions/index.js");
/* harmony import */ var reducers_locales__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reducers/locales */ "./app/reducers/locales.js");
/* harmony import */ var _LocaleSwitcher_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LocaleSwitcher.css */ "./app/components/LocaleSwitcher/LocaleSwitcher.css");
/* harmony import */ var _LocaleSwitcher_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_LocaleSwitcher_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}











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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_3__["Language"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("select", {
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
/* harmony import */ var components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/UI/muiIcon */ "./app/components/UI/muiIcon/index.js");
/* harmony import */ var components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/UI/muiComponent */ "./app/components/UI/muiComponent/index.js");







var NavigationButton = function NavigationButton(props) {
  var classNames = [_NavigationButton_css__WEBPACK_IMPORTED_MODULE_2___default.a.button];

  if (props.className) {
    classNames.push(props.className);
  } // if (props.isListVisible) return null;


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiComponent__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    "aria-label": "Navigation",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default.a.apply(void 0, classNames),
    onClick: props.onClick,
    title: props.title
  }, !props.isListVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(images_hamburger_svg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fill: "currentColor"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_UI_muiIcon__WEBPACK_IMPORTED_MODULE_4__["Close"], {
    fill: "currentColor"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationButton);

/***/ }),

/***/ "./app/components/UI/muiIcon/index.js":
/*!********************************************!*\
  !*** ./app/components/UI/muiIcon/index.js ***!
  \********************************************/
/*! exports provided: Edit, Share, VerticalSplit, SyncAlt, PersonAdd, Settings, Logout, Person, Menu, CheckBoxOutlineBlank, CheckBox, Language, ExpandMore, OpenInNew, Info, PermMedia, Book, Feedback, Close, YoutubeSearchedFor, Image, OndemandVideo, Audiotrack, Brightness7, Brightness4, FilterAlt, Search, Delete, ThumbUpAlt, Clear, Check */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Edit", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Edit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Share"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VerticalSplit", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["VerticalSplit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SyncAlt", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["SyncAlt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonAdd", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["PersonAdd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Settings"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Logout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Person", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Person"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Menu"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBoxOutlineBlank", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["CheckBoxOutlineBlank"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckBox", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["CheckBox"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Language"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpandMore", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["ExpandMore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OpenInNew", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["OpenInNew"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Info"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PermMedia", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["PermMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Book"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Feedback", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Feedback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Close", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Close"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "YoutubeSearchedFor", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["YoutubeSearchedFor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Image"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OndemandVideo", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["OndemandVideo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Audiotrack", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Audiotrack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Brightness7", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Brightness7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Brightness4", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Brightness4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilterAlt", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["FilterAlt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Search"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Delete"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThumbUpAlt", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["ThumbUpAlt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Clear", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Clear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Check", function() { return _mui_icons_material__WEBPACK_IMPORTED_MODULE_0__["Check"]; });




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
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}



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

/***/ })

}]);
//# sourceMappingURL=3.parkhang-dev.js.map