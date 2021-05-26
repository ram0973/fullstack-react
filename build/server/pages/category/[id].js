(function() {
var exports = {};
exports.id = 300;
exports.ids = [300];
exports.modules = {

/***/ 3097:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": function() { return /* reexport */ Loader; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Loader/style.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "style__Container",
  componentId: "oz4apw-0"
})(["font-family:", ";"], p => p.theme.fonts.accent);
;// CONCATENATED MODULE: ./components/Loader/Loader.tsx


const Loader = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: "Loading..."
  });
};
;// CONCATENATED MODULE: ./components/Loader/index.ts


/***/ }),

/***/ 884:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _id_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: external "next/router"
var router_namespaceObject = require("next/router");;
;// CONCATENATED MODULE: ./shared/staticPaths.ts
const categoriesToPreRender = ["Science", "Technology", "Arts"];
const categoryPaths = categoriesToPreRender.map(category => ({
  params: {
    id: category
  }
}));
// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(6786);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);
// EXTERNAL MODULE: ./api/config.ts
var config = __webpack_require__(8046);
;// CONCATENATED MODULE: ./api/category.ts


async function fetchPosts(categoryId) {
  const res = await external_node_fetch_default()(`${config/* config.baseUrl */.v.baseUrl}/categories/${categoryId}`);
  return await res.json();
}
// EXTERNAL MODULE: ./components/Section/index.ts + 5 modules
var Section = __webpack_require__(7590);
// EXTERNAL MODULE: ./components/Loader/index.ts + 2 modules
var Loader = __webpack_require__(3097);
;// CONCATENATED MODULE: ./pages/category/[id].tsx






const getStaticProps = async ({
  params
}) => {
  if (typeof params.id !== "string") throw new Error("Unexpected id");
  const posts = await fetchPosts(params.id);
  return {
    props: {
      posts
    }
  };
};
async function getStaticPaths() {
  return {
    paths: categoryPaths,
    fallback: true
  };
}

const Category = ({
  posts
}) => {
  const router = (0,router_namespaceObject.useRouter)();
  if (router.isFallback) return /*#__PURE__*/jsx_runtime_.jsx(Loader/* Loader */.a, {});
  return /*#__PURE__*/jsx_runtime_.jsx(Section/* Section */.$, {
    posts: posts,
    title: String(router.query.id)
  });
};

/* harmony default export */ var _id_ = (Category);

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 6786:
/***/ (function(module) {

"use strict";
module.exports = require("node-fetch");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,675,822], function() { return __webpack_exec__(884); });
module.exports = __webpack_exports__;

})();