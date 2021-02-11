(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "2c89":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3412":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!../node_modules/vue-loader/lib??vue-loader-options!../src/pages/ContactUs.vue?vue&type=template&id=6a01caf0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"full-width q-pa-lg bg-white"},[_c('q-btn',{directives:[{name:"go-back",rawName:"v-go-back",value:('/'),expression:"'/'"}],attrs:{"flat":"","round":"","dense":"","unelevated":""}},[_c('q-icon',{staticClass:"q-mb-md",attrs:{"name":"reply","size":"32px","q-nohoverable":""}})],1),(_vm.shouldVerify)?_c('q-form',{on:{"submit":_vm.simulateProgress}},[_c('q-input',{staticClass:"q-mb-md",attrs:{"outlined":"","type":"email","label":"E-mail address to contact you *"},model:{value:(_vm.requestForm.email),callback:function ($$v) {_vm.$set(_vm.requestForm, "email", $$v)},expression:"requestForm.email"}}),_c('q-input',{staticClass:"q-mb-md",attrs:{"outlined":"","type":"password","label":"Full name *"},model:{value:(_vm.requestForm.name),callback:function ($$v) {_vm.$set(_vm.requestForm, "name", $$v)},expression:"requestForm.name"}}),_c('q-input',{staticClass:"q-mb-md",attrs:{"outlined":"","clearable":"","type":"textarea","label":"Please describe in details *","hint":"Please enter the details and Orera team will answer you as soon as possible."},model:{value:(_vm.requestForm.textareaModel),callback:function ($$v) {_vm.$set(_vm.requestForm, "textareaModel", $$v)},expression:"requestForm.textareaModel"}}),_c('div',{staticClass:"button"},[_c('q-btn',{staticClass:"float-left",attrs:{"loading":_vm.loading1,"color":"primary","type":"submit","label":"Submit"}})],1),(_vm.error)?_c('p',{staticClass:"text text-center text-negative"},[_vm._v("\n      "+_vm._s(_vm.error)+"\n    ")]):_vm._e()],1):_vm._e(),(!_vm.shouldVerify)?_c('q-item-section',{staticClass:"verification-form row justify-center q-mt-xl"},[_c('p',{staticClass:"text-center q-pb-xl"},[_vm._v("\n      Your request has been successfully submitted and is being processed by\n      the Orerateam, we'll get back to you as soon as possible.\n    ")])]):_vm._e(),_c('q-footer',{staticClass:" column justify-center text-center q-pt-md"},[_c('q-separator',{staticClass:"q-mb-md",attrs:{"inset":""}}),_c('div',{staticClass:"social q-ma-xs"},[_c('q-btn',{attrs:{"type":"a","href":"https://www.facebook.com/","target":"_blank","flat":"","round":"","dense":""}},[_c('q-icon',{attrs:{"name":"fab fa-facebook q-pa-xs"}})],1),_c('q-btn',{attrs:{"type":"a","href":"https://twitter.com/","target":"_blank","flat":"","round":"","dense":""}},[_c('q-icon',{attrs:{"name":"fab fa-twitter q-pa-xs"}})],1),_c('q-btn',{attrs:{"type":"a","href":"https://www.instagram.com/","target":"_blank","flat":"","round":"","dense":""}},[_c('q-icon',{attrs:{"name":"fab fa-instagram q-pa-xs"}})],1),_c('q-btn',{attrs:{"type":"a","href":"https://www.snapchat.com/","target":"_blank","flat":"","round":"","dense":""}},[_c('q-icon',{attrs:{"name":"fab fa-snapchat q-pa-xs"}})],1),_c('p',{staticClass:"copyright"},[_vm._v("© "+_vm._s(new Date().getFullYear())+" Orera")])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ../src/pages/ContactUs.vue?vue&type=template&id=6a01caf0&scoped=true&

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("0ffc");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("c8ef");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ../node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("94ea");

// CONCATENATED MODULE: ../node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!../node_modules/babel-loader/lib??ref--2-0!../node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!../node_modules/vue-loader/lib??vue-loader-options!../src/pages/ContactUs.vue?vue&type=script&lang=js&


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
//
//
//
//
//
//

/* harmony default export */ var ContactUsvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      requestForm: {
        name: "",
        email: "",
        textareaModel: ""
      },
      error: "",
      loading1: false,
      shouldVerify: true
    };
  },
  computed: {
    isValid: function isValid() {
      return this.requestForm.textareaModel.length >= 10;
    },
    emailValidation: function emailValidation() {
      return this.requestForm.email === "";
    },
    nameValidation: function nameValidation() {
      return this.requestForm.name === "";
    }
  },
  methods: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])("user", ["sendRequset"])), {}, {
    submitForm: function submitForm() {
      var _this = this;

      if (this.isValid && !this.emailValidation && !this.nameValidation) {
        this.sendRequset(this.requestForm);
        this.shouldVerify = false;
      } else {
        this.error = "Please fill all required fields!";
        setTimeout(function () {
          // we're done, we reset loading state
          _this.error = "";
        }, 1800);
      }
    },
    simulateProgress: function simulateProgress() {
      var _this2 = this;

      // we set loading1 state
      this.loading1 = true;
      this.submitForm(); // simulate a delay

      setTimeout(function () {
        // we're done, we reset loading state
        _this2.loading1 = false;
      }, 2200);
    }
  })
});
// CONCATENATED MODULE: ../src/pages/ContactUs.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_ContactUsvue_type_script_lang_js_ = (ContactUsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ../src/pages/ContactUs.vue?vue&type=style&index=0&id=6a01caf0&lang=scss&scoped=true&
var ContactUsvue_type_style_index_0_id_6a01caf0_lang_scss_scoped_true_ = __webpack_require__("ccc6");

// EXTERNAL MODULE: ../node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("a6c2");

// EXTERNAL MODULE: ../node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("505d");

// EXTERNAL MODULE: ../node_modules/quasar/src/components/btn/QBtn.js + 2 modules
var QBtn = __webpack_require__("ef9c");

// EXTERNAL MODULE: ../node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("19dc");

// EXTERNAL MODULE: ../node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__("3548");

// EXTERNAL MODULE: ../node_modules/quasar/src/components/input/QInput.js + 7 modules
var QInput = __webpack_require__("a3be");

// EXTERNAL MODULE: ../node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("6c44");

// EXTERNAL MODULE: ../node_modules/quasar/src/components/footer/QFooter.js
var QFooter = __webpack_require__("d09b");

// EXTERNAL MODULE: ../node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__("3f5f");

// EXTERNAL MODULE: ../node_modules/quasar/src/directives/GoBack.js
var GoBack = __webpack_require__("406f");

// EXTERNAL MODULE: ../node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("63c1");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ../src/pages/ContactUs.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_ContactUsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "6a01caf0",
  null
  
)

/* harmony default export */ var ContactUs = __webpack_exports__["default"] = (component.exports);









runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QBtn: QBtn["a" /* default */],QIcon: QIcon["a" /* default */],QForm: QForm["a" /* default */],QInput: QInput["a" /* default */],QItemSection: QItemSection["a" /* default */],QFooter: QFooter["a" /* default */],QSeparator: QSeparator["a" /* default */]});runtime_auto_import_default()(component, 'directives', {GoBack: GoBack["a" /* default */]});


/***/ }),

/***/ "ccc6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_style_index_0_id_6a01caf0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2c89");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_style_index_0_id_6a01caf0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactUs_vue_vue_type_style_index_0_id_6a01caf0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=8.js.map