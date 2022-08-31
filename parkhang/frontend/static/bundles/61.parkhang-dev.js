(window["webpackJsonpparkhang"] = window["webpackJsonpparkhang"] || []).push([[61],{

/***/ "./app/components/MediaComponent/Image.css":
/*!*************************************************!*\
  !*** ./app/components/MediaComponent/Image.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"green-tint":"#88af8e","blue-tint":"#024279","active-button":"#00746b","ThirdWindow-Height":"300px","header-Height":"35px","mainTint":"#024279","activeButton":"#00746b","ThirdWindowHeight":"250px","ThirdWindow":"Image---ThirdWindow","ThirdWindowPortrait":"Image---ThirdWindowPortrait","header":"Image---header","listOfImages":"Image---listOfImages","ImageStyle":"Image---ImageStyle","imageSection":"Image---imageSection"};

/***/ }),

/***/ "./app/components/MediaComponent/Image.js":
/*!************************************************!*\
  !*** ./app/components/MediaComponent/Image.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Image_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Image.css */ "./app/components/MediaComponent/Image.css");
/* harmony import */ var _Image_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Image_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-zoom-pan-pinch */ "./node_modules/react-zoom-pan-pinch/dist/index.esm.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-lazy-load-image-component */ "./node_modules/react-lazy-load-image-component/build/index.js");
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ChevronRight */ "./node_modules/@mui/icons-material/ChevronRight.js");
/* harmony import */ var _mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ "./node_modules/@mui/icons-material/ChevronLeft.js");
/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/CircularProgress */ "./node_modules/@mui/material/CircularProgress/index.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Cancel */ "./node_modules/@mui/icons-material/Cancel.js");
/* harmony import */ var _mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_10__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }












function HttpUrl() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  if (data.includes("https")) return data;
  return "https://" + data;
}

function fetchImage(_x) {
  return _fetchImage.apply(this, arguments);
}

function _fetchImage() {
  _fetchImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var res, imageBlob, imageObjectURL;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url);

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.blob();

          case 5:
            imageBlob = _context.sent;
            imageObjectURL = URL.createObjectURL(imageBlob);
            return _context.abrupt("return", imageObjectURL);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchImage.apply(this, arguments);
}

function Image(props) {
  var _props$imageData, _props$imageData2;

  var selectRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var imageList = (_props$imageData = props.imageData) === null || _props$imageData === void 0 ? void 0 : _props$imageData.alignment;
  var message = (_props$imageData2 = props.imageData) === null || _props$imageData2 === void 0 ? void 0 : _props$imageData2.message;
  var imageRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef("");
  var textIdfromAlignment = props.alignmentData.text;
  var imageAlignmentById = props.imageAlignmentById;
  var imageScrollId = props.imageScrollId;
  var isPortraitImage = props.isImagePortrait;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      imageSelected = _useState2[0],
      SetSelected = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("50vh"),
      _useState4 = _slicedToArray(_useState3, 2),
      imageHeight = _useState4[0],
      setImageHeight = _useState4[1];

  var imageIdList = [];
  var syncIdOnClick = props.syncIdOnClick;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState8 = _slicedToArray(_useState7, 2),
      img = _useState8[0],
      setImg = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setLoading(true);

    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(imageList)) {
      var url = HttpUrl(imageList[imageSelected].target_segment);
      var imageObjectURL = fetchImage(url, imageList);
      imageObjectURL.then(function (data) {
        setImg(data);
        setLoading(false);
      })["catch"](function (e) {
        return console.log(e);
      });
      var image = imageList[imageSelected];
      props.changeSelectedImage(image);
      var imageDocId = image.source_segment.start;
    }
  }, [imageList, imageSelected]);

  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(imageList)) {
    imageIdList = imageList.map(function (l) {
      return parseInt(l.source_segment.start);
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var IDtoSync = parseInt(imageScrollId.id.start);

    if (textIdfromAlignment === props.selectedText.id && imageScrollId.from === 1) {
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(imageList)) {
        var findSegment = imageList.find(function (l) {
          return l.source_segment.start <= IDtoSync && l.source_segment.end > IDtoSync;
        });
        var index = imageList.findIndex(function (l) {
          return (l === null || l === void 0 ? void 0 : l.source_segment) === findSegment.source_segment;
        });

        if (parseInt(index) >= 0) {
          SetSelected(index);
        }
      }
    }
  }, [imageScrollId]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    selectRef.current.value = props.witness;
    setLoading(true);
    fetchImage();
  }, [props.witness]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (textIdfromAlignment === props.selectedText.id) {
      var ClickId = syncIdOnClick.toString().replace("s_", "");

      if ((imageList === null || imageList === void 0 ? void 0 : imageList.length) > 0 && ClickId > 0) {
        var findSegment = imageList.find(function (l) {
          return l.source_segment.start < ClickId && l.source_segment.end > ClickId;
        });
        var index = imageList.findIndex(function (l) {
          return (l === null || l === void 0 ? void 0 : l.source_segment) === (findSegment === null || findSegment === void 0 ? void 0 : findSegment.source_segment);
        });

        if (index >= 0) {
          SetSelected(index);
        }
      }
    }
  }, [syncIdOnClick]);

  var isPortrait = function isPortrait(_ref) {
    var img = _ref.target;
    //this Check if the provided Image is a portrait or a landScape
    var tempHeight = img.naturalHeight;
    setImageHeight(img.naturalHeight);
    var tempWIdth = img.naturalWidth;
    if (tempHeight === 0 || tempWIdth === 0) return null;
    props.changeIsImagePortrait(tempHeight >= tempWIdth);
    setLoading(false);
  };

  var handleChangeImage = function handleChangeImage(data) {
    var currentid = imageAlignmentById.find(function (l) {
      return l.id === imageSelected;
    });
    console.log(currentid);

    if (data === "prev" && imageSelected > 0) {
      SetSelected(function (prev) {
        return prev - 1;
      });
    }

    if (data === "next" && imageSelected < imageIdList.length) {
      SetSelected(function (prev) {
        return prev + 1;
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: isPortraitImage ? _Image_css__WEBPACK_IMPORTED_MODULE_2___default.a.ThirdWindowPortrait : _Image_css__WEBPACK_IMPORTED_MODULE_2___default.a.ThirdWindow // onResize={handleResize}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    className: _Image_css__WEBPACK_IMPORTED_MODULE_2___default.a.header,
    sx: {
      boxShadow: 1,
      bgcolor: "primary"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    position: "relative",
    zIndex: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["FormControl"], {
    sx: {
      m: 1,
      minWidth: 120
    },
    size: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["NativeSelect"], {
    labelid: "demo-select-small",
    inputRef: selectRef,
    onChange: function onChange(e) {
      return props.changeImageVersion(e.target.value);
    },
    inputProps: {
      name: "age",
      id: "uncontrolled-native"
    }
  }, props.witnesses.map(function (witness) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      key: witness.id,
      value: witness.id,
      style: {
        textAlign: "center"
      }
    }, witness.source.name);
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    "aria-label": "close",
    style: {
      position: "absolute",
      right: 10
    },
    onClick: function onClick() {
      return props.changeMediaSelection(null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_icons_material_Cancel__WEBPACK_IMPORTED_MODULE_10___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    className: _Image_css__WEBPACK_IMPORTED_MODULE_2___default.a.imageSection
  }, lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(imageList) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, message) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    sx: {
      height: "30vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "secondary"
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("center", {
    height: "100%"
  }, !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_3__["TransformWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_3__["TransformComponent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_4__["LazyLoadImage"], {
    itemRef: imageRef,
    className: _Image_css__WEBPACK_IMPORTED_MODULE_2___default.a.ImageStyle,
    src: img,
    alt: "imagepecha",
    onLoad: isPortrait
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    sx: {
      height: "30vh"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_9__["default"], {
    color: "secondary"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    onClick: function onClick() {
      return handleChangeImage("prev");
    },
    sx: {
      position: "absolute",
      left: 20,
      top: 100
    },
    color: "primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_8___default.a, {
    fill: "currentColor"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_5__["IconButton"], {
    color: "primary",
    onClick: function onClick() {
      return handleChangeImage("next");
    },
    sx: {
      position: "absolute",
      right: 20,
      top: 100
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mui_icons_material_ChevronRight__WEBPACK_IMPORTED_MODULE_7___default.a, {
    fill: "currentColor"
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Image));

/***/ })

}]);
//# sourceMappingURL=61.parkhang-dev.js.map