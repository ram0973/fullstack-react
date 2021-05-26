(function() {
var exports = {};
exports.id = 197;
exports.ids = [197];
exports.modules = {

/***/ 5110:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "sc-404__Container",
  componentId: "sc-2411a-0"
})(["display:flex;flex-wrap:wrap;justify-content:center;align-items:center;text-align:center;"]);
const Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default().h2.withConfig({
  displayName: "sc-404__Main",
  componentId: "sc-2411a-1"
})(["font-size:10rem;line-height:11rem;font-family:", ";width:100%;"], p => p.theme.fonts.accent);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "sc-404__Description",
  componentId: "sc-2411a-2"
})(["width:100%;"]);

const NotFound = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Main, {
      children: "404"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Description, {
      children: "Oops! The page not found!"
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (NotFound);

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(5110));
module.exports = __webpack_exports__;

})();