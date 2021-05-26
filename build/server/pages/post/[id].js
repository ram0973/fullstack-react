(function() {
var exports = {};
exports.id = 687;
exports.ids = [687];
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

/***/ 5533:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _id_; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "react-redux"
var external_react_redux_namespaceObject = require("react-redux");;
// EXTERNAL MODULE: ./components/Loader/index.ts + 2 modules
var Loader = __webpack_require__(3097);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Breadcrumbs/style.ts

const Container = external_styled_components_default().nav.withConfig({
  displayName: "style__Container",
  componentId: "eqq8un-0"
})(["& > *{margin-right:0.3em;}"]);
;// CONCATENATED MODULE: ./components/Breadcrumbs/Breadcrumbs.tsx




const Breadcrumbs = ({
  post
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: "Front"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: "\u25B8"
    }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: `/category/${post.category}`,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: post.category
      })
    })]
  });
};
;// CONCATENATED MODULE: ./components/Breadcrumbs/index.ts

;// CONCATENATED MODULE: ./components/Post/PostBodyStyle.ts

const Title = external_styled_components_default().h2.withConfig({
  displayName: "PostBodyStyle__Title",
  componentId: "sc-8jhm40-0"
})(["font-size:2.8rem;line-height:1.2;margin:10px 0 20px;@media (max-width:800px){font-size:1.8rem;margin:15px 0;}"]);
const Figure = external_styled_components_default().figure.withConfig({
  displayName: "PostBodyStyle__Figure",
  componentId: "sc-8jhm40-1"
})(["padding:0 0 0;margin:0 0 30px;max-width:100%;position:relative;overflow:hidden;border-radius:6px;img{width:100%;height:100%;position:absolute;top:0;object-fit:cover;object-position:center;}@media (max-width:800px){margin-bottom:20px;}"]);
const Content = external_styled_components_default().div.withConfig({
  displayName: "PostBodyStyle__Content",
  componentId: "sc-8jhm40-2"
})(["font-size:1.25rem;line-height:1.4;max-width:800px;"]);
const Meta = external_styled_components_default().footer.withConfig({
  displayName: "PostBodyStyle__Meta",
  componentId: "sc-8jhm40-3"
})(["color:", ";& > *{margin-right:0.3em;}"], p => p.theme.colors.gray);
;// CONCATENATED MODULE: ./components/Post/PostBody.tsx






const PostBody = ({
  post
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Breadcrumbs, {
      post: post
    }), /*#__PURE__*/jsx_runtime_.jsx(Title, {
      children: post.title
    }), /*#__PURE__*/jsx_runtime_.jsx(Figure, {
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        alt: post.title,
        src: post.image,
        loading: "lazy",
        layout: "responsive",
        objectFit: "cover",
        objectPosition: "center",
        width: 960,
        height: 340
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Content, {
      dangerouslySetInnerHTML: {
        __html: post.content
      }
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Meta, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        children: post.date
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "\xB7"
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: `/category/${post.category}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          children: post.category
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: "\xB7"
      }), /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: post.source,
        children: "Source"
      })]
    })]
  });
};
;// CONCATENATED MODULE: ./components/Comment/style.ts

const style_Container = external_styled_components_default().article.withConfig({
  displayName: "style__Container",
  componentId: "sc-17m4wkt-0"
})(["padding:10px 0;"]);
const Author = external_styled_components_default().h4.withConfig({
  displayName: "style__Author",
  componentId: "sc-17m4wkt-1"
})(["display:block;font-size:1rem;"]);
const Body = external_styled_components_default().p.withConfig({
  displayName: "style__Body",
  componentId: "sc-17m4wkt-2"
})(["margin:0;"]);
const style_Meta = external_styled_components_default().footer.withConfig({
  displayName: "style__Meta",
  componentId: "sc-17m4wkt-3"
})(["color:", ";font-size:0.8em;"], p => p.theme.colors.gray);
;// CONCATENATED MODULE: ./components/Comment/Comment.tsx




const Comment = ({
  comment
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(style_Container, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Author, {
      children: comment.author
    }), /*#__PURE__*/jsx_runtime_.jsx(Body, {
      children: comment.content
    }), /*#__PURE__*/jsx_runtime_.jsx(style_Meta, {
      children: comment.time
    })]
  });
};
;// CONCATENATED MODULE: ./components/Comment/index.ts

;// CONCATENATED MODULE: ./components/Comments/style.ts

const Comments_style_Container = external_styled_components_default().section.withConfig({
  displayName: "style__Container",
  componentId: "i1rfla-0"
})(["margin:1.5rem 0;"]);
const List = external_styled_components_default().ul.withConfig({
  displayName: "style__List",
  componentId: "i1rfla-1"
})(["margin:0;padding:0;list-style:none;margin-bottom:20px;"]);
const Item = external_styled_components_default().li.withConfig({
  displayName: "style__Item",
  componentId: "i1rfla-2"
})(["list-style:none;border-bottom:1px solid rgba(0,0,0,0.1);"]);
// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(6786);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);
// EXTERNAL MODULE: ./api/config.ts
var config = __webpack_require__(8046);
;// CONCATENATED MODULE: ./api/comments.ts


async function fetchComments(postId) {
  const res = await external_node_fetch_default()(`${config/* config.baseUrl */.v.baseUrl}/comments/${postId}`);
  return await res.json();
}
async function submitComment(postId, name, comment) {
  return await external_node_fetch_default()(`${config/* config.baseUrl */.v.baseUrl}/posts/${postId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify({
      name,
      comment
    })
  });
}
// EXTERNAL MODULE: ./store/comments.ts
var store_comments = __webpack_require__(3143);
;// CONCATENATED MODULE: ./components/CommentForm/style.ts

const Form = external_styled_components_default().form.withConfig({
  displayName: "style__Form",
  componentId: "sc-17ie0jr-0"
})(["input,textarea{display:block;width:100%;border:1px solid rgba(0,0,0,0.1);box-shadow:none;resize:none;font-size:1em;padding:5px;border-radius:2px;margin:10px 0;}button{border:0;font-size:1rem;padding:8px 20px;border-radius:6px;background-color:#fff;box-shadow:0 0 0 1px rgba(0,0,0,0.035),0 4px 25px rgba(0,0,0,0.07);transition:all 0.2s;cursor:pointer;&:hover{box-shadow:0 0 0 1px rgba(0,0,0,0.035),0 6px 35px rgba(0,0,0,0.2);}}"]);
;// CONCATENATED MODULE: ./components/CommentForm/CommentForm.tsx







const CommentForm = ({
  post
}) => {
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)("");
  const {
    0: name,
    1: setName
  } = (0,external_react_.useState)("");
  const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    const response = await submitComment(post, name, value);
    const comments = await response.json();
    setLoading(false);
    setValue("");
    setName("");

    if (response.status === 200) {
      dispatch({
        type: store_comments/* UPDATE_COMMENTS_ACTION */.z,
        comments
      });
    }
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Form, {
    onSubmit: submit,
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "Your comment"
    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
      type: "text",
      name: "name",
      value: name,
      placeholder: "Your name",
      onChange: e => setName(e.target.value),
      required: true
    }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
      name: "comment",
      value: value,
      placeholder: "What do you think?",
      onChange: e => setValue(e.target.value),
      required: true
    }), loading ? /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: "Submitting..."
    }) : /*#__PURE__*/jsx_runtime_.jsx("button", {
      children: "Submit"
    })]
  });
};
;// CONCATENATED MODULE: ./components/CommentForm/index.ts

;// CONCATENATED MODULE: ./components/Comments/Comments.tsx





const Comments = ({
  post,
  comments
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Comments_style_Container, {
    id: "comments",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      children: "Comments"
    }), /*#__PURE__*/jsx_runtime_.jsx(List, {
      children: comments.map(comment => /*#__PURE__*/jsx_runtime_.jsx(Item, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Comment, {
          comment: comment
        })
      }, comment.id))
    }), /*#__PURE__*/jsx_runtime_.jsx(CommentForm, {
      post: post
    })]
  });
};
;// CONCATENATED MODULE: ./components/Comments/index.ts

;// CONCATENATED MODULE: ./api/post.ts


async function fetchPost(id) {
  const res = await external_node_fetch_default()(`${config/* config.baseUrl */.v.baseUrl}/posts/${id}`);
  return await res.json();
}
// EXTERNAL MODULE: ./store/index.ts
var store = __webpack_require__(8517);
// EXTERNAL MODULE: ./store/post.ts
var store_post = __webpack_require__(3989);
;// CONCATENATED MODULE: ./pages/post/[id].tsx













const getServerSideProps = store/* store.getServerSideProps */.h.getServerSideProps(async ({
  store,
  params
}) => {
  if (typeof params.id !== "string") throw new Error("Unexpected id");
  const comments = await fetchComments(params.id);
  const post = await fetchPost(params.id);
  store.dispatch({
    type: store_post/* UPDATE_POST_ACTION */.M,
    post
  });
  store.dispatch({
    type: store_comments/* UPDATE_COMMENTS_ACTION */.z,
    comments
  });
});

const Post = () => {
  const {
    post,
    comments
  } = (0,external_react_redux_namespaceObject.useSelector)(state => state);
  if (!post) return /*#__PURE__*/jsx_runtime_.jsx(Loader/* Loader */.a, {});
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(PostBody, {
      post: post
    }), /*#__PURE__*/jsx_runtime_.jsx(Comments, {
      comments: comments,
      post: post.id
    })]
  });
};

/* harmony default export */ var _id_ = (Post);

/***/ }),

/***/ 2744:
/***/ (function(module) {

"use strict";
module.exports = require("next-redux-wrapper");;

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

/***/ 7561:
/***/ (function(module) {

"use strict";
module.exports = require("redux");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,675,99], function() { return __webpack_exec__(5533); });
module.exports = __webpack_exports__;

})();