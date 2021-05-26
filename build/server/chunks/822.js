exports.id = 822;
exports.ids = [822];
exports.modules = {

/***/ 8046:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": function() { return /* binding */ config; }
/* harmony export */ });
const config = {
  baseUrl: "http://localhost:4000"
};

/***/ }),

/***/ 7590:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": function() { return /* reexport */ Section; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Post/PostCardStyle.ts

const Card = external_styled_components_default().a.withConfig({
  displayName: "PostCardStyle__Card",
  componentId: "th4g7-0"
})(["border-radius:6px;overflow:hidden;background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,0.035),0 4px 25px rgba(0,0,0,0.07);color:black;text-decoration:none;transition:all 0.2s;&:hover{color:black;box-shadow:0 0 0 1px rgba(0,0,0,0.035),0 6px 35px rgba(0,0,0,0.2);transform:translateY(-2px);}"]);
const Figure = external_styled_components_default().figure.withConfig({
  displayName: "PostCardStyle__Figure",
  componentId: "th4g7-1"
})(["margin:0;max-width:100%;position:relative;overflow:hidden;border-radius:6px 6px 0 0;"]);
const Title = external_styled_components_default().h3.withConfig({
  displayName: "PostCardStyle__Title",
  componentId: "th4g7-2"
})(["margin:10px 20px;font-size:1.4rem;"]);
const Lead = external_styled_components_default().div.withConfig({
  displayName: "PostCardStyle__Lead",
  componentId: "th4g7-3"
})(["margin:0 20px 20px;& > *{margin:0 0 10px;}"]);
;// CONCATENATED MODULE: ./components/Post/PostCard.tsx





const PostCard = ({
  post
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
    href: `/post/${post.id}`,
    passHref: true,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Figure, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          alt: post.title,
          src: post.image,
          loading: "lazy",
          layout: "responsive",
          objectFit: "cover",
          objectPosition: "center",
          width: 320,
          height: 180,
          sizes: "(min-width: 1000px) 320px, 100vw"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(Title, {
        children: post.title
      }), /*#__PURE__*/jsx_runtime_.jsx(Lead, {
        children: post.lead
      })]
    })
  });
};
;// CONCATENATED MODULE: ./components/Post/index.ts

;// CONCATENATED MODULE: ./components/Section/style.ts

const Grid = external_styled_components_default().div.withConfig({
  displayName: "style__Grid",
  componentId: "sc-1dc8btt-0"
})(["display:flex;flex-wrap:wrap;justify-content:space-between;&:after{content:\"\";flex:auto;}&:after,& > *{width:calc(33% - 10px);margin-bottom:20px;}@media (max-width:800px){&:after,& > *{width:100%;}}"]);
const style_Title = external_styled_components_default().h2.withConfig({
  displayName: "style__Title",
  componentId: "sc-1dc8btt-1"
})(["font-size:2.8rem;line-height:1.1;margin:10px 0 15px;@media (max-width:800px){font-size:2rem;}"]);
const MoreLink = external_styled_components_default().a.withConfig({
  displayName: "style__MoreLink",
  componentId: "sc-1dc8btt-2"
})(["margin:-20px 0 30px;display:inline-block;vertical-align:top;"]);
;// CONCATENATED MODULE: ./components/Section/Section.tsx





const Section = ({
  title,
  posts,
  isCompact = false
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(style_Title, {
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx(Grid, {
      children: posts.map(post => /*#__PURE__*/jsx_runtime_.jsx(PostCard, {
        post: post
      }, post.id))
    }), isCompact && /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/category/${title}`,
      passHref: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(MoreLink, {
        children: ["More in ", title]
      })
    })]
  });
};
;// CONCATENATED MODULE: ./components/Section/index.ts


/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;