(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "32fd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!../node_modules/vue-loader/lib??vue-loader-options!../src/pages/Room.vue?vue&type=template&id=70354161&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"full-width"},[(_vm.error)?_c('q-banner',{staticClass:"bg-red-1 text-center text-red text-bold fixed-top"},[_vm._v(_vm._s(_vm.error))]):_vm._e(),_c('video',{ref:"localVideo",staticClass:"localUser",attrs:{"autoplay":"","playsinline":""}}),_c('div',{staticClass:"button row justify-center"},[(!_vm.hangupButton)?_c('q-btn',{attrs:{"round":"","color":"secondary","icon":"videocam"},on:{"click":_vm.makeCall}}):_vm._e(),(_vm.hangupButton)?_c('q-btn',{attrs:{"round":"","color":"primary","icon":"videocam_off"},on:{"click":_vm.turnOffRemoteVideo}}):_vm._e()],1),_c('div',{attrs:{"color":"transparent"},on:{"click":_vm.confirm}}),_c('video',{ref:"remoteVideo",staticClass:"remoteUser",attrs:{"autoplay":"","playsinline":""}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ../src/pages/Room.vue?vue&type=template&id=70354161&scoped=true&

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("46d4");

// EXTERNAL MODULE: ../node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("dddc");

// EXTERNAL MODULE: ../node_modules/webrtc-adapter/src/js/adapter_core.js + 14 modules
var adapter_core = __webpack_require__("63b8");

// EXTERNAL MODULE: ../src/boot/firebase.js
var firebase = __webpack_require__("a13d");

// CONCATENATED MODULE: ../src/boot/server.js
// Create an account on Viagenie, and replace credential and username with the information from your account
var servers = {
  'iceServers': [{
    'urls': 'stun:stun.services.mozilla.com'
  }, // { 'urls': "stun:stun01.sipphone.com" },
  // { 'urls': "stun:stun.ekiga.net" },
  // { 'urls': "stun:stun.fwdnet.net" },
  // { 'urls': "stun:stun.ideasip.com" },
  // { 'urls': "stun:stun.iptel.org" },
  // { 'urls': "stun:stun.rixtelecom.se" },
  // { 'urls': "stun:stun.schlund.de" },
  // { 'urls': "stun:stun.l.google.com:19302" },
  // { 'urls': "stun:stun1.l.google.com:19302" },
  // { 'urls': "stun:stun2.l.google.com:19302" },
  // { 'urls': "stun:stun3.l.google.com:19302" },
  // { 'urls': "stun:stun4.l.google.com:19302" },
  // { 'urls': "stun:stunserver.org" },
  // { 'urls': "stun:stun.softjoys.com" },
  // { 'urls': "stun:stun.voiparound.com" },
  // { 'urls': "stun:stun.voipbuster.com" },
  // { 'urls': "stun:stun.voipstunt.com" },
  // { 'urls': "stun:stun.voxgratia.org" },
  // { 'urls': "stun:stun.xten.com" },
  {
    'urls': 'turn:numb.viagenie.ca',
    'credential': "".concat("Qwerty12345"),
    'username': "".concat("abraham.eishow.syne19lin@tucsweden.se")
  }, {
    'urls': "turn:192.158.29.39:3478?transport=udp",
    'credential': "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
    'username': "28224511:1379330808"
  } // {
  //   'urls': "turn:192.158.29.39:3478?transport=tcp",
  //   'credential': "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
  //   'username': "28224511:1379330808"
  // }
  ]
};

// CONCATENATED MODULE: ../node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!../node_modules/babel-loader/lib??ref--2-0!../node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!../node_modules/vue-loader/lib??vue-loader-options!../src/pages/Room.vue?vue&type=script&lang=js&


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



var peerConnection = new RTCPeerConnection(servers);
var roomId = Math.floor(Math.random() * 1000000000);
/* harmony default export */ var Roomvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      error: "",
      hangupButton: false
    };
  },
  methods: {
    sendMessage: function sendMessage(senderId, data) {
      var msg = firebase["c" /* firebaseDb */].ref("videos").push({
        sender: senderId,
        message: data
      });
      msg.remove();
    },
    readMessage: function readMessage(data) {
      var _this = this;

      var msg = JSON.parse(data.val().message);
      var sender = data.val().sender;

      if (sender != roomId) {
        if (msg.ice != undefined) {
          peerConnection.addIceCandidate(new RTCIceCandidate(msg.ice));
        } else if (msg.sdp.type == "offer") {
          peerConnection.setRemoteDescription(new RTCSessionDescription(msg.sdp)).then(function () {
            return peerConnection.createAnswer();
          }).then(function (answer) {
            return peerConnection.setLocalDescription(answer);
          }).then(function () {
            return _this.sendMessage(roomId, JSON.stringify({
              sdp: peerConnection.localDescription
            }));
          }).catch(function (error) {
            return _this.error = "A connection could not be established!";
          });
        } else if (msg.sdp.type == "answer") {
          peerConnection.setRemoteDescription(new RTCSessionDescription(msg.sdp));
        }
      }
    },
    startCamera: function startCamera() {
      var _this2 = this;

      var constraints = {
        video: {
          width: {
            ideal: 4096
          },
          height: {
            ideal: 2160
          },
          facingMode: "user"
        },
        audio: {
          sampleSize: 16,
          volume: 0.2,
          channelCount: {
            ideal: 2
          },
          autoGainControl: false,
          echoCancellation: true,
          noiseSuppression: true
        }
      };
      navigator.mediaDevices.getUserMedia(constraints).then(function (stream) {
        return _this2.$refs.localVideo.srcObject = stream;
      }).then(function (stream) {
        return peerConnection.addStream(stream);
      }).catch(function (error) {
        return _this2.error = "Something went wrong, please refresh the page!";
      });
    },
    makeCall: function makeCall() {
      var _this3 = this;

      peerConnection.createOffer().then(function (offer) {
        return peerConnection.setLocalDescription(offer);
      }).then(function () {
        return _this3.sendMessage(roomId, JSON.stringify({
          sdp: peerConnection.localDescription
        }));
      }).catch(function (error) {
        return _this3.error = "Something went wrong, please refresh and call again!";
      });
      this.hangupButton = true;
    },
    turnOffRemoteVideo: function turnOffRemoteVideo() {
      try {
        var stream = this.$refs.remoteVideo.srcObject;
        stream.getVideoTracks().forEach(function (track) {
          track.stop();
        });
        peerConnection.close();
        this.hangupButton = false;
      } catch (error) {
        return this.error = "Something went wrong, please refresh and call again!";
      }
    },
    disableCamera: function disableCamera() {
      var stream = this.$refs.localVideo.srcObject;
      stream.getVideoTracks().forEach(function (track) {
        track.stop();
      });
      stream.getAudioTracks().forEach(function (track) {
        track.stop();
      });
    },
    confirm: function confirm() {
      var _this4 = this;

      this.$q.dialog({
        title: "Confirm",
        message: "Would you like to receive the call?",
        cancel: true,
        persistent: true
      }).onCancel(function () {
        _this4.turnOffRemoteVideo();
      });
    }
  },
  beforeMount: function beforeMount() {
    firebase["c" /* firebaseDb */].ref("videos").on("child_added", this.readMessage);
  },
  mounted: function mounted() {
    var _this5 = this;

    this.startCamera();

    peerConnection.onicecandidate = function (event) {
      return event.candidate ? _this5.sendMessage(roomId, JSON.stringify({
        ice: event.candidate
      })) : console.log("Success");
    }; // Seperat funktion och error på banner


    peerConnection.ontrack = function (_ref) {
      var track = _ref.track,
          streams = _ref.streams;

      // once media for a remote track arrives, show it in the remote video element
      track.onunmute = function () {
        // don't set srcObject again if it is already set.
        if (_this5.$refs.remoteVideo.srcObject) return;

        _this5.confirm();

        _this5.$refs.remoteVideo.srcObject = streams[0];
        _this5.hangupButton = true;
      };
    };
  },
  beforeDestroy: function beforeDestroy() {
    this.disableCamera();
    this.turnOffRemoteVideo();
  }
});
// CONCATENATED MODULE: ../src/pages/Room.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Roomvue_type_script_lang_js_ = (Roomvue_type_script_lang_js_); 
// EXTERNAL MODULE: ../src/pages/Room.vue?vue&type=style&index=0&id=70354161&lang=scss&scoped=true&
var Roomvue_type_style_index_0_id_70354161_lang_scss_scoped_true_ = __webpack_require__("8433");

// EXTERNAL MODULE: ../node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("a6c2");

// EXTERNAL MODULE: ../node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("505d");

// EXTERNAL MODULE: ../node_modules/quasar/src/components/banner/QBanner.js
var QBanner = __webpack_require__("91e4");

// EXTERNAL MODULE: ../node_modules/quasar/src/components/btn/QBtn.js + 2 modules
var QBtn = __webpack_require__("ef9c");

// EXTERNAL MODULE: ../node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("63c1");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ../src/pages/Room.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Roomvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "70354161",
  null
  
)

/* harmony default export */ var Room = __webpack_exports__["default"] = (component.exports);




runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QBanner: QBanner["a" /* default */],QBtn: QBtn["a" /* default */]});


/***/ }),

/***/ "65a0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8433":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_style_index_0_id_70354161_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("65a0");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_style_index_0_id_70354161_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Room_vue_vue_type_style_index_0_id_70354161_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=11.js.map