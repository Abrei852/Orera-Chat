(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "4845":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    otherUserDetails: function otherUserDetails() {
      var details = this.$store.state.user.users[this.$route.params.otherUserId];

      if (details) {
        return details;
      }

      return {};
    }
  }
});

/***/ }),

/***/ "4e32":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_1a221585_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dcc5");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_1a221585_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_id_1a221585_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6d6a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!../node_modules/vue-loader/lib??vue-loader-options!../src/pages/Chat.vue?vue&type=template&id=1a221585&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{ref:"chatRef",staticClass:"chat flex column"},[(!_vm.otherUserDetails.isActive)?_c('q-banner',{staticClass:"bg-grey-4 text-center fixed-top"},[_vm._v("\n    "+_vm._s(_vm.otherUserDetails.name)+" is offline\n  ")]):_vm._e(),_c('div',{staticClass:"q-pa-md column col justify-end",class:{ invisible: !_vm.showMessages }},_vm._l((_vm.messages),function(message,key){return _c('q-chat-message',{key:key,attrs:{"name":message.from == 'me' ? _vm.userDetails.name : _vm.otherUserDetails.name,"avatar":message.from == 'me' ? _vm.userDetails.image : _vm.otherUserDetails.image,"size":"6","text":[message.text],"text-sanitize":"","sent":message.from == 'me' ? true : false}})}),1),_c('q-footer',{staticClass:"q-pa-xs",attrs:{"elevated":""}},[_c('q-toolbar',[_c('q-form',{staticClass:"full-width row",on:{"submit":_vm.sendMessage}},[_c('q-input',{ref:"newMessage",staticClass:"col 11",attrs:{"bg-color":"white","label":"Message","outlined":"","rounded":"","clearable":"","dense":""},on:{"blur":_vm.scrollToBottom},model:{value:(_vm.newMessage),callback:function ($$v) {_vm.newMessage=$$v},expression:"newMessage"}}),_c('q-btn',{attrs:{"id":"send","round":"","dense":"","flat":"","type":"submit","icon":"send"}})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ../src/pages/Chat.vue?vue&type=template&id=1a221585&scoped=true&

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("494a");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("c8ef");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ../node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("94ea");

// EXTERNAL MODULE: ../src/mixins/mixin-user-details.js
var mixin_user_details = __webpack_require__("4845");

// CONCATENATED MODULE: ../node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!../node_modules/babel-loader/lib??ref--2-0!../node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!../node_modules/vue-loader/lib??vue-loader-options!../src/pages/Chat.vue?vue&type=script&lang=js&


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


/* harmony default export */ var Chatvue_type_script_lang_js_ = ({
  mixins: [mixin_user_details["a" /* default */]],
  data: function data() {
    return {
      newMessage: "",
      showMessages: false
    };
  },
  computed: objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["d" /* mapState */])("message", ["messages"])), Object(vuex_esm["d" /* mapState */])("user", ["userDetails"])),
  methods: objectSpread2_default()(objectSpread2_default()(objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])("message", ["firebaseGetMessages", "firebaseStopMessages"])), Object(vuex_esm["b" /* mapActions */])("user", ["firebaseSendMessage"])), {}, {
    clearMessageForm: function clearMessageForm() {
      this.$refs.newMessage.focus();
      this.newMessage = "";
    },
    sendMessage: function sendMessage() {
      if (this.newMessage) {
        this.firebaseSendMessage({
          message: {
            text: this.newMessage,
            from: "me"
          },
          otherUserId: this.$route.params.otherUserId
        });
      }

      this.clearMessageForm();
    },
    scrollToBottom: function scrollToBottom() {
      var chatPage = this.$refs.chatRef.$el;
      setTimeout(function () {
        window.scrollTo(0, chatPage.scrollHeight);
      }, 20);
    }
  }),
  watch: {
    messages: function messages(val) {
      var _this = this;

      if (Object.keys(val).length) this.scrollToBottom();
      setTimeout(function () {
        _this.showMessages = true;
      }, 200);
    }
  },
  mounted: function mounted() {
    this.firebaseGetMessages(this.$route.params.otherUserId);
  },
  destroyed: function destroyed() {
    this.firebaseStopMessages();
  }
});
// CONCATENATED MODULE: ../src/pages/Chat.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Chatvue_type_script_lang_js_ = (Chatvue_type_script_lang_js_); 
// EXTERNAL MODULE: ../src/pages/Chat.vue?vue&type=style&index=0&id=1a221585&lang=scss&scoped=true&
var Chatvue_type_style_index_0_id_1a221585_lang_scss_scoped_true_ = __webpack_require__("4e32");

// EXTERNAL MODULE: ../node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("a6c2");

// EXTERNAL MODULE: ../node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("505d");

// EXTERNAL MODULE: ../node_modules/quasar/src/components/banner/QBanner.js
var QBanner = __webpack_require__("91e4");

// EXTERNAL MODULE: ../node_modules/quasar/src/components/chat/QChatMessage.js
var QChatMessage = __webpack_require__("273c");

// EXTERNAL MODULE: ../node_modules/quasar/src/components/footer/QFooter.js
var QFooter = __webpack_require__("d09b");

// EXTERNAL MODULE: ../node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__("66cf");

// EXTERNAL MODULE: ../node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__("3548");

// EXTERNAL MODULE: ../node_modules/quasar/src/components/input/QInput.js + 7 modules
var QInput = __webpack_require__("a3be");

// EXTERNAL MODULE: ../node_modules/quasar/src/components/btn/QBtn.js + 2 modules
var QBtn = __webpack_require__("ef9c");

// EXTERNAL MODULE: ../node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("63c1");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ../src/pages/Chat.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Chatvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "1a221585",
  null
  
)

/* harmony default export */ var Chat = __webpack_exports__["default"] = (component.exports);









runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QBanner: QBanner["a" /* default */],QChatMessage: QChatMessage["a" /* default */],QFooter: QFooter["a" /* default */],QToolbar: QToolbar["a" /* default */],QForm: QForm["a" /* default */],QInput: QInput["a" /* default */],QBtn: QBtn["a" /* default */]});


/***/ }),

/***/ "dcc5":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=6.js.map