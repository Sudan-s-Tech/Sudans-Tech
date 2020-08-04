exports.ids = [4];
exports.modules = {

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Wavey-Fingerprint.svg": 140,
	"./js.png": 141,
	"./logo.png": 63,
	"./logo2.png": 65,
	"./ml.jpeg": 142,
	"./opencv.png": 143,
	"./python.jpg": 144,
	"./variables.scss": 145
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
webpackContext.id = 139;

/***/ }),

/***/ 140:
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,77u/PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0NzgnIGhlaWdodD0nNTcuNCcgdmlld0JveD0nMCAwIDEwMDAgMTIwJz48cmVjdCBmaWxsPScjMmY0NTcyJyB3aWR0aD0nMTAwMCcgaGVpZ2h0PScxMjAnLz48ZyBmaWxsPSdub25lJyBzdHJva2U9JyMxNTFiMjYnIHN0cm9rZS13aWR0aD0nOC41JyA+PHBhdGggZD0nTS01MDAgNzVjMCAwIDEyNS0zMCAyNTAtMzBTMCA3NSAwIDc1czEyNSAzMCAyNTAgMzBzMjUwLTMwIDI1MC0zMHMxMjUtMzAgMjUwLTMwczI1MCAzMCAyNTAgMzBzMTI1IDMwIDI1MCAzMHMyNTAtMzAgMjUwLTMwJy8+PHBhdGggZD0nTS01MDAgNDVjMCAwIDEyNS0zMCAyNTAtMzBTMCA0NSAwIDQ1czEyNSAzMCAyNTAgMzBzMjUwLTMwIDI1MC0zMHMxMjUtMzAgMjUwLTMwczI1MCAzMCAyNTAgMzBzMTI1IDMwIDI1MCAzMHMyNTAtMzAgMjUwLTMwJy8+PHBhdGggZD0nTS01MDAgMTA1YzAgMCAxMjUtMzAgMjUwLTMwUzAgMTA1IDAgMTA1czEyNSAzMCAyNTAgMzBzMjUwLTMwIDI1MC0zMHMxMjUtMzAgMjUwLTMwczI1MCAzMCAyNTAgMzBzMTI1IDMwIDI1MCAzMHMyNTAtMzAgMjUwLTMwJy8+PHBhdGggZD0nTS01MDAgMTVjMCAwIDEyNS0zMCAyNTAtMzBTMCAxNSAwIDE1czEyNSAzMCAyNTAgMzBzMjUwLTMwIDI1MC0zMHMxMjUtMzAgMjUwLTMwczI1MCAzMCAyNTAgMzBzMTI1IDMwIDI1MCAzMHMyNTAtMzAgMjUwLTMwJy8+PHBhdGggZD0nTS01MDAtMTVjMCAwIDEyNS0zMCAyNTAtMzBTMC0xNSAwLTE1czEyNSAzMCAyNTAgMzBzMjUwLTMwIDI1MC0zMHMxMjUtMzAgMjUwLTMwczI1MCAzMCAyNTAgMzBzMTI1IDMwIDI1MCAzMHMyNTAtMzAgMjUwLTMwJy8+PHBhdGggZD0nTS01MDAgMTM1YzAgMCAxMjUtMzAgMjUwLTMwUzAgMTM1IDAgMTM1czEyNSAzMCAyNTAgMzBzMjUwLTMwIDI1MC0zMHMxMjUtMzAgMjUwLTMwczI1MCAzMCAyNTAgMzBzMTI1IDMwIDI1MCAzMHMyNTAtMzAgMjUwLTMwJy8+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/js.e9a85b5.png";

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/ml.ddf1311.jpeg";

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/opencv.d3d866c.png";

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/python.c95f547.jpg";

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(146);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("22618b18", content, true)

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(210);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("60610e01", content, true, context)
};

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(212);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("77a4182e", content, true, context)
};

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(214);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3b4f6490", content, true, context)
};

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VGrid/_grid.sass
var _grid = __webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/vuetify/src/components/VGrid/VGrid.sass
var VGrid = __webpack_require__(52);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(1);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VGrid/grid.js
// Types

function grid_VGrid(name) {
  /* @vue/component */
  return external_vue_default.a.extend({
    name: `v-${name}`,
    functional: true,
    props: {
      id: String,
      tag: {
        type: String,
        default: 'div'
      }
    },

    render(h, {
      props,
      data,
      children
    }) {
      data.staticClass = `${name} ${data.staticClass || ''}`.trim();
      const {
        attrs
      } = data;

      if (attrs) {
        // reset attrs to extract utility clases like pa-3
        data.attrs = {};
        const classes = Object.keys(attrs).filter(key => {
          // TODO: Remove once resolved
          // https://github.com/vuejs/vue/issues/7841
          if (key === 'slot') return false;
          const value = attrs[key]; // add back data attributes like data-test="foo" but do not
          // add them as classes

          if (key.startsWith('data-')) {
            data.attrs[key] = value;
            return false;
          }

          return value || typeof value === 'string';
        });
        if (classes.length) data.staticClass += ` ${classes.join(' ')}`;
      }

      if (props.id) {
        data.domProps = data.domProps || {};
        data.domProps.id = props.id;
      }

      return h(props.tag, data, children);
    }

  });
}
// EXTERNAL MODULE: ./node_modules/vuetify/lib/util/mergeData.js
var mergeData = __webpack_require__(15);

// CONCATENATED MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js




/* @vue/component */

/* harmony default export */ var VContainer = __webpack_exports__["a"] = (grid_VGrid('container').extend({
  name: 'v-container',
  functional: true,
  props: {
    id: String,
    tag: {
      type: String,
      default: 'div'
    },
    fluid: {
      type: Boolean,
      default: false
    }
  },

  render(h, {
    props,
    data,
    children
  }) {
    let classes;
    const {
      attrs
    } = data;

    if (attrs) {
      // reset attrs to extract utility clases like pa-3
      data.attrs = {};
      classes = Object.keys(attrs).filter(key => {
        // TODO: Remove once resolved
        // https://github.com/vuejs/vue/issues/7841
        if (key === 'slot') return false;
        const value = attrs[key]; // add back data attributes like data-test="foo" but do not
        // add them as classes

        if (key.startsWith('data-')) {
          data.attrs[key] = value;
          return false;
        }

        return value || typeof value === 'string';
      });
    }

    if (props.id) {
      data.domProps = data.domProps || {};
      data.domProps.id = props.id;
    }

    return h(props.tag, Object(mergeData["a" /* default */])(data, {
      staticClass: 'container',
      class: Array({
        'container--fluid': props.fluid
      }).concat(classes || [])
    }), children);
  }

}));

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/teamcard.vue?vue&type=template&id=c71ef570&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"team-box"},[_vm._ssrNode("<div class=\"team-pic\" data-v-c71ef570><img"+(_vm._ssrAttr("src",__webpack_require__(139)("./" + this.details.image)))+(_vm._ssrAttr("alt",this.details.name))+" data-v-c71ef570></div> <div class=\"team-name\" data-v-c71ef570>"+_vm._ssrEscape(_vm._s(this.details.name))+"</div> <div class=\"team-desc\" data-v-c71ef570><p data-v-c71ef570>"+_vm._ssrEscape(_vm._s(this.details.description))+"</p></div> "),_vm._ssrNode("<span data-v-c71ef570>","</span>",[_c('v-btn',{staticClass:"mx-2",attrs:{"fab":"","dark":"","large":"","color":"primary accent-4","href":this.details.linkedin}},[_c('v-icon',[_vm._v("fab fa-linkedin")])],1),_vm._ssrNode(" "),_c('v-btn',{staticClass:"mx-2",attrs:{"fab":"","dark":"","large":"","color":"primary accent-4","href":this.details.twitter}},[_c('v-icon',[_vm._v("fab fa-twitter-square")])],1)],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/teamcard.vue?vue&type=template&id=c71ef570&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/teamcard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var teamcardvue_type_script_lang_js_ = ({
  name: 'teamcard',
  props: ['details']
});
// CONCATENATED MODULE: ./components/teamcard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_teamcardvue_type_script_lang_js_ = (teamcardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(16);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(44);

// CONCATENATED MODULE: ./components/teamcard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(209)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_teamcardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c71ef570",
  "70024832"
  
)

/* harmony default export */ var teamcard = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */



installComponents_default()(component, {VBtn: VBtn["a" /* default */],VIcon: VIcon["a" /* default */]})


/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homecard.vue?vue&type=template&id=4b4fb5af&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"card"}},[_vm._ssrNode("<br data-v-4b4fb5af> "),_c('v-icon',[_vm._v(_vm._s(_vm.icon))]),_vm._ssrNode(" <h1 data-v-4b4fb5af>"+_vm._ssrEscape(_vm._s(_vm.title))+"</h1> <p data-v-4b4fb5af>"+_vm._ssrEscape(_vm._s(_vm.body))+"</p>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/homecard.vue?vue&type=template&id=4b4fb5af&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/homecard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var homecardvue_type_script_lang_js_ = ({
  props: ['icon', 'title', 'body']
});
// CONCATENATED MODULE: ./components/homecard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_homecardvue_type_script_lang_js_ = (homecardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(16);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(44);

// CONCATENATED MODULE: ./components/homecard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(211)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_homecardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4b4fb5af",
  "0de7ec69"
  
)

/* harmony default export */ var homecard = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VIcon: VIcon["a" /* default */]})


/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teamcard_vue_vue_type_style_index_0_id_c71ef570_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(157);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teamcard_vue_vue_type_style_index_0_id_c71ef570_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teamcard_vue_vue_type_style_index_0_id_c71ef570_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teamcard_vue_vue_type_style_index_0_id_c71ef570_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teamcard_vue_vue_type_style_index_0_id_c71ef570_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_teamcard_vue_vue_type_style_index_0_id_c71ef570_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".team-box[data-v-c71ef570]{text-align:center;border:1px solid #f3f3f3;margin:30px auto auto;min-height:325px;min-width:300px;max-height:460px;max-width:400px;padding:32px;border-radius:8px;box-shadow:0 5px 15px rgba(0,0,0,.07);transition:.2s ease}.team-pic[data-v-c71ef570]{display:flex;justify-content:center;margin:-4rem auto .5rem}.team-name[data-v-c71ef570]{font-weight:400;font-size:20px}.team-desc[data-v-c71ef570]{font-size:17px;line-height:1.6;color:#a9a9a9}img[data-v-c71ef570]{border-radius:50%;max-width:100px;max-height:100px;margin-bottom:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homecard_vue_vue_type_style_index_0_id_4b4fb5af_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homecard_vue_vue_type_style_index_0_id_4b4fb5af_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homecard_vue_vue_type_style_index_0_id_4b4fb5af_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homecard_vue_vue_type_style_index_0_id_4b4fb5af_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homecard_vue_vue_type_style_index_0_id_4b4fb5af_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_homecard_vue_vue_type_style_index_0_id_4b4fb5af_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#card[data-v-4b4fb5af]{width:18.75rem;height:18.75rem;background-color:#fff;border-radius:8px;text-align:center;padding:10px;box-shadow:0 0 4px 0 rgba(17,22,26,.16),0 2px 4px 0 rgba(17,22,26,.08),0 4px 8px 0 rgba(17,22,26,.08);border-top:4px solid #889abf;margin:.7rem;position:relative}h1[data-v-4b4fb5af]{font-size:1em;padding:5px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_37ddfb16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_37ddfb16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_37ddfb16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_37ddfb16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_37ddfb16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_37ddfb16_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#grad[data-v-37ddfb16]{background-color:#151b26;color:#fff;transform:skewY(8deg);transform-origin:100%;min-height:500px;height:80vh;max-height:560px}.hero-content[data-v-37ddfb16]{transform:skewY(-8deg);transform-origin:100%}.text[data-v-37ddfb16]{font-weight:100;font-size:2.2em}.box[data-v-37ddfb16],.text[data-v-37ddfb16]{text-align:center}.box[data-v-37ddfb16]{margin:5%;background-color:#3a4d72;padding:10px;color:#fff}p[data-v-37ddfb16]{padding:15px}@media (max-width:480px){#grad[data-v-37ddfb16]{height:750px}#grad[data-v-37ddfb16],.hero-content[data-v-37ddfb16]{transform:none}}@media (max-width:960px){.hero-content[data-v-37ddfb16]{justify-content:center;text-align:center}#grad[data-v-37ddfb16]{height:750px}}@media (max-width:1263px) and (min-width:960px){#grad[data-v-37ddfb16]{padding-top:40px}.hero-logo[data-v-37ddfb16]{height:250px;width:250px}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=37ddfb16&scoped=true&
var render = function () {
var this$1 = this;
var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div id=\"grad\" data-v-37ddfb16>","</div>",[_vm._ssrNode("<div class=\"hero-content\" data-v-37ddfb16>","</div>",[_c('v-container',[_c('v-row',{attrs:{"align":"center"}},[_c('v-spacer'),_vm._v(" "),_c('v-col',{staticClass:"pa-2",attrs:{"md":"4","lg":"4","sm":"12","cols":"12"}},[_c('img',{staticClass:"hero-logo",attrs:{"src":__webpack_require__(63),"height":"350px","width":"350px"}})]),_vm._v(" "),_c('v-col',{staticClass:"pa-2",attrs:{"md":"6","lg":"6","sm":"12","cols":"12"}},[_c('h1',[_vm._v("Build Your Future With Us.")]),_vm._v(" "),_c('h1',[_vm._v("Join Our Community")]),_vm._v(" "),_c('v-btn',{attrs:{"rounded":"","color":"primary","dark":""},on:{"click":function () { return this$1.$vuetify.goTo('#vision'); }}},[_vm._v("Know More")])],1),_vm._v(" "),_c('v-spacer')],1)],1)],1)]),_vm._ssrNode(" <div class=\"text\" data-v-37ddfb16><br data-v-37ddfb16><br data-v-37ddfb16> <h3 data-v-37ddfb16>Don't waste your valuable time or money</h3> <p data-v-37ddfb16>Our training provides real results </p></div> "),_vm._ssrNode("<div id=\"course\" data-v-37ddfb16>","</div>",[_c('v-container',{staticClass:"lighten-5"},[_c('v-row',{staticClass:"mb-6",attrs:{"no-gutters":"","justify":"center"}},_vm._l((_vm.homecards),function(n,i){return _c('v-col',{key:i,attrs:{"cols":"12","md":"auto","lg":"auto","xs":"auto","sm":"auto","xl":"auto"}},[_c('homecard',{attrs:{"title":n.title,"icon":n.icon,"body":n.body}})],1)}),1)],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"vision\" class=\"box\" data-v-37ddfb16>","</div>",[_vm._ssrNode("<br data-v-37ddfb16> <h1 data-v-37ddfb16>Vision</h1> <br data-v-37ddfb16> <p data-v-37ddfb16>Our vision is to create a better life for many Students in the field of Technology. We aim to Fill the gap that prevents students to become industry ready. It is a community for those students who desire to learn and grow themselves with others. Technology is what aspires us and we continue to make this world a happy place .</p> <br data-v-37ddfb16> "),_c('v-btn',{staticClass:"my-2",attrs:{"large":"","color":"accent","rounded":"","to":"/training"}},[_vm._v("\n          Training\n      ")]),_vm._ssrNode(" <br data-v-37ddfb16><br data-v-37ddfb16><br data-v-37ddfb16>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-37ddfb16>","</div>",[_c('v-row',[_c('v-spacer'),_vm._v(" "),_vm._l((this.teamembers),function(item,i){return _c('v-col',{key:i,attrs:{"cols":"12","lg":"4","md":"4","sm":"12"}},[_c('teamcard',{attrs:{"details":item}})],1)}),_vm._v(" "),_c('v-spacer')],2)],1),_vm._ssrNode(" <br data-v-37ddfb16><br data-v-37ddfb16><br data-v-37ddfb16><br data-v-37ddfb16><br data-v-37ddfb16><br data-v-37ddfb16><br data-v-37ddfb16>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=37ddfb16&scoped=true&

// EXTERNAL MODULE: ./components/teamcard.vue + 4 modules
var teamcard = __webpack_require__(165);

// EXTERNAL MODULE: ./components/homecard.vue + 4 modules
var homecard = __webpack_require__(166);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    teamcard: teamcard["default"],
    homecard: homecard["default"]
  },

  data() {
    return {
      teamembers: this.$store.state.team.members,
      image: 'logo.png',
      homecards: [{
        title: 'Get real employable skills',
        body: 'Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high-impact skills that top companies want.',
        icon: 'fas fa-briefcase'
      }, {
        title: 'Get real employable skills',
        body: 'Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high-impact skills that top companies want.',
        icon: 'fas fa-briefcase'
      }, {
        title: 'Get real employable skills',
        body: 'Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high-impact skills that top companies want.',
        icon: 'fas fa-briefcase'
      }, {
        title: 'Get real employable skills',
        body: 'Our quality curriculum is designed with top-tier industry partners, not academics, so you learn the high-impact skills that top companies want.',
        icon: 'fas fa-briefcase'
      }]
    };
  }

});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(16);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js
var VBtn = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(135);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VContainer.js + 1 modules
var VContainer = __webpack_require__(160);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(136);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(134);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(213)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "37ddfb16",
  "552c6d30"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents_default()(component, {Homecard: __webpack_require__(166).default,Teamcard: __webpack_require__(165).default})


/* vuetify-loader */






installComponents_default()(component, {VBtn: VBtn["a" /* default */],VCol: VCol["a" /* default */],VContainer: VContainer["a" /* default */],VRow: VRow["a" /* default */],VSpacer: VSpacer["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=index.js.map