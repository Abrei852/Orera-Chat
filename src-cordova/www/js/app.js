/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"1":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({}[chunkId]||chunkId) + "." + {"1":"6af55ed5","3":"c826aa41","4":"be0dd9c1","5":"c7b41ea5","6":"0db94c32","7":"c244987b","8":"d56dad4b","9":"aa8ddd26","10":"a6d8882a","11":"ff949358","12":"31d6cfe0"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7d3e");


/***/ }),

/***/ "2609":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationBar_vue_vue_type_style_index_0_id_0c67ea43_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("da29");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationBar_vue_vue_type_style_index_0_id_0c67ea43_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationBar_vue_vue_type_style_index_0_id_0c67ea43_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "40c0":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "60e3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7755":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationContainer_vue_vue_type_style_index_0_id_2ad1bc92_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a690");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationContainer_vue_vue_type_style_index_0_id_2ad1bc92_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationContainer_vue_vue_type_style_index_0_id_2ad1bc92_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "7d3e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ../src/store/modules/user.js
var user_namespaceObject = {};
__webpack_require__.r(user_namespaceObject);
__webpack_require__.d(user_namespaceObject, "namespaced", function() { return namespaced; });
__webpack_require__.d(user_namespaceObject, "state", function() { return user_state; });
__webpack_require__.d(user_namespaceObject, "mutations", function() { return mutations; });
__webpack_require__.d(user_namespaceObject, "actions", function() { return actions; });
__webpack_require__.d(user_namespaceObject, "getters", function() { return getters; });

// NAMESPACE OBJECT: ../src/store/modules/message.js
var message_namespaceObject = {};
__webpack_require__.r(message_namespaceObject);
__webpack_require__.d(message_namespaceObject, "namespaced", function() { return message_namespaced; });
__webpack_require__.d(message_namespaceObject, "state", function() { return message_state; });
__webpack_require__.d(message_namespaceObject, "mutations", function() { return message_mutations; });
__webpack_require__.d(message_namespaceObject, "actions", function() { return message_actions; });

// NAMESPACE OBJECT: ../src/store/modules/notification.js
var notification_namespaceObject = {};
__webpack_require__.r(notification_namespaceObject);
__webpack_require__.d(notification_namespaceObject, "namespaced", function() { return notification_namespaced; });
__webpack_require__.d(notification_namespaceObject, "state", function() { return notification_state; });
__webpack_require__.d(notification_namespaceObject, "mutations", function() { return notification_mutations; });
__webpack_require__.d(notification_namespaceObject, "actions", function() { return notification_actions; });

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("32ec");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("cbcf");

// EXTERNAL MODULE: ../node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("c1c3");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("7c57");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ../node_modules/@quasar/extras/fontawesome-v5/fontawesome-v5.css
var fontawesome_v5 = __webpack_require__("a2a7");

// EXTERNAL MODULE: ../node_modules/@quasar/extras/roboto-font/roboto-font.css
var roboto_font = __webpack_require__("2233");

// EXTERNAL MODULE: ../node_modules/@quasar/extras/material-icons/material-icons.css
var material_icons = __webpack_require__("2f72");

// EXTERNAL MODULE: ../node_modules/quasar/dist/quasar.sass
var quasar = __webpack_require__("838b");

// EXTERNAL MODULE: ../src/css/app.scss
var css_app = __webpack_require__("40c0");

// EXTERNAL MODULE: ../node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("e832");

// EXTERNAL MODULE: ../node_modules/quasar/lang/en-us.js
var en_us = __webpack_require__("b661");

// EXTERNAL MODULE: ../node_modules/quasar/icon-set/material-icons.js
var icon_set_material_icons = __webpack_require__("8c49");

// EXTERNAL MODULE: ../node_modules/quasar/src/vue-plugin.js + 1 modules
var vue_plugin = __webpack_require__("f846");

// EXTERNAL MODULE: ../node_modules/quasar/src/plugins/Notify.js
var Notify = __webpack_require__("c545");

// EXTERNAL MODULE: ../node_modules/quasar/src/plugins/Dialog.js + 12 modules
var Dialog = __webpack_require__("b2bf");

// CONCATENATED MODULE: ../.quasar/import-quasar.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/



;
vue_runtime_esm["a" /* default */].use(vue_plugin["a" /* default */], {
  config: {},
  lang: en_us["a" /* default */],
  iconSet: icon_set_material_icons["a" /* default */],
  plugins: {
    Notify: Notify["a" /* default */],
    Dialog: Dialog["a" /* default */]
  }
});
// CONCATENATED MODULE: ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!../node_modules/vue-loader/lib??vue-loader-options!../src/App.vue?vue&type=template&id=61fb5797&
var Appvue_type_template_id_61fb5797_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"q-app"}},[_c('notification-container'),_c('router-view')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ../src/App.vue?vue&type=template&id=61fb5797&

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("c8ef");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ../node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("94ea");

// CONCATENATED MODULE: ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!../node_modules/vue-loader/lib??vue-loader-options!../src/components/NotificationContainer.vue?vue&type=template&id=2ad1bc92&scoped=true&
var NotificationContainervue_type_template_id_2ad1bc92_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-item-section',{staticClass:"notification-container"},_vm._l((_vm.notifications),function(notification){return _c('NotificationBar',{key:notification.id,attrs:{"notification":notification}})}),1)}
var NotificationContainervue_type_template_id_2ad1bc92_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ../src/components/NotificationContainer.vue?vue&type=template&id=2ad1bc92&scoped=true&

// CONCATENATED MODULE: ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!../node_modules/vue-loader/lib??vue-loader-options!../src/components/NotificationBar.vue?vue&type=template&id=0c67ea43&scoped=true&
var NotificationBarvue_type_template_id_0c67ea43_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-item-section',{staticClass:"notification-bar",class:_vm.notificationTypeClass},[_c('p',[_vm._v(_vm._s(_vm.notification.message))])])}
var NotificationBarvue_type_template_id_0c67ea43_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ../src/components/NotificationBar.vue?vue&type=template&id=0c67ea43&scoped=true&

// CONCATENATED MODULE: ../node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!../node_modules/babel-loader/lib??ref--2-0!../node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!../node_modules/vue-loader/lib??vue-loader-options!../src/components/NotificationBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var NotificationBarvue_type_script_lang_js_ = ({
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      timeout: null
    };
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.timeout);
  },
  mounted: function mounted() {
    var _this = this;

    this.timeout = setTimeout(function () {
      return _this.remove(_this.notification);
    }, 2500);
  },
  computed: {
    notificationTypeClass: function notificationTypeClass() {
      if (this.notification.type == "success") return "-text-".concat(this.notification.type, " text-positive");else return "-text-".concat(this.notification.type, " text-primary");
    }
  },
  methods: Object(vuex_esm["b" /* mapActions */])("notification", ["remove"])
});
// CONCATENATED MODULE: ../src/components/NotificationBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NotificationBarvue_type_script_lang_js_ = (NotificationBarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ../src/components/NotificationBar.vue?vue&type=style&index=0&id=0c67ea43&lang=scss&scoped=true&
var NotificationBarvue_type_style_index_0_id_0c67ea43_lang_scss_scoped_true_ = __webpack_require__("2609");

// EXTERNAL MODULE: ../node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("a6c2");

// EXTERNAL MODULE: ../node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("6c44");

// EXTERNAL MODULE: ../node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("63c1");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ../src/components/NotificationBar.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NotificationBarvue_type_script_lang_js_,
  NotificationBarvue_type_template_id_0c67ea43_scoped_true_render,
  NotificationBarvue_type_template_id_0c67ea43_scoped_true_staticRenderFns,
  false,
  null,
  "0c67ea43",
  null
  
)

/* harmony default export */ var NotificationBar = (component.exports);


runtime_auto_import_default()(component, 'components', {QItemSection: QItemSection["a" /* default */]});

// CONCATENATED MODULE: ../node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!../node_modules/babel-loader/lib??ref--2-0!../node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!../node_modules/vue-loader/lib??vue-loader-options!../src/components/NotificationContainer.vue?vue&type=script&lang=js&
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


/* harmony default export */ var NotificationContainervue_type_script_lang_js_ = ({
  components: {
    NotificationBar: NotificationBar
  },
  computed: Object(vuex_esm["d" /* mapState */])("notification", ["notifications"])
});
// CONCATENATED MODULE: ../src/components/NotificationContainer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NotificationContainervue_type_script_lang_js_ = (NotificationContainervue_type_script_lang_js_); 
// EXTERNAL MODULE: ../src/components/NotificationContainer.vue?vue&type=style&index=0&id=2ad1bc92&lang=scss&scoped=true&
var NotificationContainervue_type_style_index_0_id_2ad1bc92_lang_scss_scoped_true_ = __webpack_require__("7755");

// CONCATENATED MODULE: ../src/components/NotificationContainer.vue






/* normalize component */

var NotificationContainer_component = Object(componentNormalizer["a" /* default */])(
  components_NotificationContainervue_type_script_lang_js_,
  NotificationContainervue_type_template_id_2ad1bc92_scoped_true_render,
  NotificationContainervue_type_template_id_2ad1bc92_scoped_true_staticRenderFns,
  false,
  null,
  "2ad1bc92",
  null
  
)

/* harmony default export */ var NotificationContainer = (NotificationContainer_component.exports);


runtime_auto_import_default()(NotificationContainer_component, 'components', {QItemSection: QItemSection["a" /* default */]});

// CONCATENATED MODULE: ../node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!../node_modules/babel-loader/lib??ref--2-0!../node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!../node_modules/vue-loader/lib??vue-loader-options!../src/App.vue?vue&type=script&lang=js&

//
//
//
//
//
//


/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  components: {
    NotificationContainer: NotificationContainer
  },
  methods: objectSpread2_default()({}, Object(vuex_esm["b" /* mapActions */])("user", ["watchAuth"])),
  mounted: function mounted() {
    this.watchAuth();
  }
});
// CONCATENATED MODULE: ../src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ../src/App.vue?vue&type=style&index=0&lang=scss&
var Appvue_type_style_index_0_lang_scss_ = __webpack_require__("9300");

// EXTERNAL MODULE: ../node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__("ddc7");

// CONCATENATED MODULE: ../src/App.vue






/* normalize component */

var App_component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_61fb5797_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);


runtime_auto_import_default()(App_component, 'components', {QPageContainer: QPageContainer["a" /* default */]});

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("46d4");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("0ffc");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("c026");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("494a");

// EXTERNAL MODULE: ../node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("dddc");

// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/objectDestructuringEmpty.js
var objectDestructuringEmpty = __webpack_require__("92e5");
var objectDestructuringEmpty_default = /*#__PURE__*/__webpack_require__.n(objectDestructuringEmpty);

// EXTERNAL MODULE: ../src/boot/firebase.js
var firebase = __webpack_require__("a13d");

// CONCATENATED MODULE: ../src/store/modules/user.js









 // All Mutations, Actions, and getters will be namespaced under 'user'

var namespaced = true;
var getAuthUser = window.sessionStorage.getItem('authUser');
var user_state = {
  userDetails: {},
  users: {},
  authenticated: getAuthUser ? getAuthUser : false
};
var mutations = {
  SET_USER_Details: function SET_USER_Details(rootState, data) {
    rootState.userDetails = data;
  },
  SET_USERS: function SET_USERS(state, data) {
    state.users = data;
  },
  ADD_USER: function ADD_USER(state, data) {
    vue_runtime_esm["a" /* default */].set(state.users, data.userId, data.userDetails);
  },
  UPDATE_USER: function UPDATE_USER(state, data) {
    var target = state.users[data.userId];

    if (target) {
      Object.assign(state.users[data.userId], data.userDetails);
    }
  },
  SET_AUTH: function SET_AUTH(state, status) {
    state.authenticated = status;
  }
};
var actions = {
  registerUser: function registerUser(_ref, data) {
    var dispatch = _ref.dispatch;
    firebase["b" /* firebaseAuth */].createUserWithEmailAndPassword(data.email, data.password).then(function () {
      var userId = firebase["b" /* firebaseAuth */].currentUser.uid;
      firebase["c" /* firebaseDb */].ref('users/' + userId).set({
        name: data.name,
        email: data.email,
        isActive: false,
        image: "https://cdn.quasar.dev/img/boy-avatar.png"
      });
    }).catch(function (error) {
      var errorCode = error.code;

      if (errorCode == 'auth/weak-password') {
        var notification = {
          type: 'error',
          message: 'The password is too weak.'
        };
        dispatch('notification/add', notification, {
          root: true
        });
      } else {
        var _notification = {
          type: 'error',
          message: "Please check your information and try again"
        };
        dispatch('notification/add', _notification, {
          root: true
        });
      }
    });
  },
  loginUser: function loginUser(_ref2, data) {
    var _this = this;

    var commit = _ref2.commit,
        dispatch = _ref2.dispatch;
    firebase["b" /* firebaseAuth */].signInWithEmailAndPassword(data.email, data.password).then(function () {
      if (firebase["b" /* firebaseAuth */].currentUser.emailVerified) {
        commit('SET_AUTH', _this.authenticated = true);

        _this.$router.replace({
          name: 'Contacts'
        });

        window.sessionStorage.setItem('authUser', JSON.stringify(_this.authenticated));
      } else {
        var notification = {
          type: 'error',
          message: 'Make sure that your email is verified!'
        };
        dispatch('notification/add', notification, {
          root: true
        });
      }
    }).catch(function (error) {
      var notification = {
        type: 'error',
        message: 'Please enter a valid email address and password'
      };
      dispatch('notification/add', notification, {
        root: true
      });
    });
  },
  logoutUser: function logoutUser(_ref3) {
    var _this2 = this;

    var commit = _ref3.commit,
        dispatch = _ref3.dispatch;
    firebase["b" /* firebaseAuth */].signOut().then(function () {
      window.sessionStorage.removeItem('authUser');
      commit('SET_AUTH', _this2.authenticated = false);
      var notification = {
        type: 'success',
        message: ""
      };
      dispatch('notification/add', notification, {
        root: true
      });
    }).catch(function (error) {
      var notification = {
        type: 'error',
        message: "There was a problem logging out user"
      };
      dispatch('notification/add', notification, {
        root: true
      });
    });
  },
  watchAuth: function watchAuth(_ref4) {
    var commit = _ref4.commit,
        dispatch = _ref4.dispatch,
        state = _ref4.state;
    firebase["b" /* firebaseAuth */].onAuthStateChanged(function (user) {
      if (user) {
        if (user.emailVerified) {
          // User is logged in.
          var userId = firebase["b" /* firebaseAuth */].currentUser.uid;
          firebase["c" /* firebaseDb */].ref('users/' + userId).once('value', function (snapshot) {
            var userDetails = snapshot.val();
            commit('SET_USER_Details', {
              userId: userId,
              name: userDetails.name,
              email: userDetails.email,
              image: userDetails.image,
              isActive: userDetails.isActive
            });
          });
          dispatch('firebaseUpdateUser', {
            userId: userId,
            updates: {
              isActive: true
            }
          });
        }

        dispatch('firebaseGetUsers');
      } else {
        // User is logged out.
        dispatch('firebaseUpdateUser', {
          userId: state.userDetails.userId,
          updates: {
            isActive: false
          }
        }).then(function () {
          commit('SET_USERS', {});
        });
        commit('SET_USER_Details', {});
      }
    });
  },
  sendVerification: function sendVerification(_ref5) {
    var dispatch = _ref5.dispatch;
    var user = firebase["b" /* firebaseAuth */].currentUser;
    user.sendEmailVerification().then(function () {
      var notification = {
        type: 'success',
        message: "A verification email was sent to your inbox, may take up to 5min!"
      };
      dispatch('notification/add', notification, {
        root: true
      });
    }).catch(function (error) {
      var notification = {
        type: 'error',
        message: "Something went wrong, Please try again later"
      };
      dispatch('notification/add', notification, {
        root: true
      });
    });
  },
  recoverPassword: function recoverPassword(_ref6, data) {
    var dispatch = _ref6.dispatch;
    firebase["b" /* firebaseAuth */].sendPasswordResetEmail(data).then(function () {
      var notification = {
        type: 'success',
        message: "Your reset password link has been successfully sent"
      };
      dispatch('notification/add', notification, {
        root: true
      });
    }).catch(function (error) {
      var notification = {
        type: 'error',
        message: "Please enter a valid email address"
      };
      dispatch('notification/add', notification, {
        root: true
      });
    });
  },
  firebaseUpdateUser: function firebaseUpdateUser(_ref7, data) {
    objectDestructuringEmpty_default()(_ref7);

    if (data.userId) {
      firebase["c" /* firebaseDb */].ref('users/' + data.userId).update(data.updates);
    }
  },
  firebaseGetUsers: function firebaseGetUsers(_ref8) {
    var commit = _ref8.commit;
    firebase["c" /* firebaseDb */].ref('users').on('child_added', function (snapshot) {
      var userDetails = snapshot.val();
      var userId = snapshot.key;
      commit('ADD_USER', {
        userId: userId,
        userDetails: userDetails
      });
    });
    firebase["c" /* firebaseDb */].ref('users').on('child_changed', function (snapshot) {
      var userDetails = snapshot.val();
      var userId = snapshot.key;
      commit('UPDATE_USER', {
        userId: userId,
        userDetails: userDetails
      });
    });
  },
  firebaseSendMessage: function firebaseSendMessage(_ref9, data) {
    objectDestructuringEmpty_default()(_ref9);

    firebase["c" /* firebaseDb */].ref('chats/' + user_state.userDetails.userId + '/' + data.otherUserId).push(data.message);
    data.message.from = 'them';
    firebase["c" /* firebaseDb */].ref('chats/' + data.otherUserId + '/' + user_state.userDetails.userId).push(data.message);
  },
  goVideoRoom: function goVideoRoom() {
    return this.$router.replace('/room' + '/' + user_state.userDetails.userId);
  },
  sendRequest: function sendRequest(_ref10, data) {
    var dispatch = _ref10.dispatch;
    alert('request sent');
  }
};
var getters = {
  getUsers: function getUsers(state) {
    var usersFiltered = {};
    var user = firebase["b" /* firebaseAuth */].currentUser;
    Object.keys(state.users).forEach(function (key) {
      if (key !== user.uid) {
        usersFiltered[key] = state.users[key];
      }
    });
    return usersFiltered;
  }
};
// CONCATENATED MODULE: ../src/store/modules/message.js


var messagesRef; // All Mutations, Actions, and getters will be namespaced under 'message'

var message_namespaced = true;
var message_state = {
  messages: {}
};
var message_mutations = {
  ADD_MESSAGE: function ADD_MESSAGE(state, data) {
    vue_runtime_esm["a" /* default */].set(state.messages, data.messageId, data.messageDetails);
  },
  CLEAR_MESSAGES: function CLEAR_MESSAGES(state) {
    state.messages = {};
  }
};
var message_actions = {
  firebaseGetMessages: function firebaseGetMessages(_ref, otherUserId) {
    var commit = _ref.commit,
        rootState = _ref.rootState;
    var userId = rootState.user.userDetails.userId;
    messagesRef = firebase["c" /* firebaseDb */].ref('chats/' + userId + '/' + otherUserId);
    messagesRef.on('child_added', function (snapshot) {
      var messageDetails = snapshot.val();
      var messageId = snapshot.key;
      commit('ADD_MESSAGE', {
        messageId: messageId,
        messageDetails: messageDetails
      });
    });
  },
  firebaseStopMessages: function firebaseStopMessages(_ref2) {
    var commit = _ref2.commit;

    if (messagesRef) {
      messagesRef.off('child_added');
      commit('CLEAR_MESSAGES');
    }
  }
};
// EXTERNAL MODULE: ../node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("9588");

// CONCATENATED MODULE: ../src/store/modules/notification.js


// All Mutations, Actions, and getters will be namespaced under 'notification'
var notification_namespaced = true;
var notification_state = {
  notifications: []
};
var nextId = 1;
var notification_mutations = {
  PUSH: function PUSH(state, notification) {
    state.notifications.push(objectSpread2_default()(objectSpread2_default()({}, notification), {}, {
      id: nextId++
    }));
  },
  DELETE: function DELETE(state, notificationToRemove) {
    state.notifications = state.notifications.filter(function (notification) {
      return notification.id != notificationToRemove.id;
    });
  }
};
var notification_actions = {
  add: function add(_ref, notification) {
    var commit = _ref.commit;
    commit("PUSH", notification);
  },
  remove: function remove(_ref2, notificationToRemove) {
    var commit = _ref2.commit;
    commit("DELETE", notificationToRemove);
  }
};
// CONCATENATED MODULE: ../src/store/index.js





vue_runtime_esm["a" /* default */].use(vuex_esm["a" /* default */]);
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

/* harmony default export */ var src_store = (function ()
/* { ssrContext } */
{
  var Store = new vuex_esm["a" /* default */].Store({
    modules: {
      user: user_namespaceObject,
      message: message_namespaceObject,
      notification: notification_namespaceObject
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: true
  });
  return Store;
});
// EXTERNAL MODULE: ../node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("4af9");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("241c");

// EXTERNAL MODULE: ../node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("15db");

// CONCATENATED MODULE: ../src/router/routes.js


var routes = [{
  path: '/',
  name: 'Orera',
  component: function component() {
    return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "a185"));
  },
  children: [{
    path: '/contacts',
    name: 'Contacts',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, "4315"));
    },
    meta: {
      requiresAuth: true
    }
  }, {
    path: '/chat/:otherUserId',
    name: 'Chat',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, "6d6a"));
    }
  }, {
    path: '/auth/register',
    name: 'Register',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "8ed8"));
    },
    meta: {
      hideForAuth: true
    }
  }, {
    path: '/auth/login',
    name: 'Login',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, "8ed8"));
    },
    meta: {
      hideForAuth: true
    }
  }, {
    path: '/room/:otherUserId',
    name: 'Room',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, "32fd"));
    }
  }, {
    path: '/about-orera',
    name: 'About Orera',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, "f8f7"));
    }
  }, {
    path: '/terms-of-use',
    name: 'Terms Of Use',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "565f"));
    }
  }, {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "a25c"));
    }
  }, {
    path: '/cookies-policy',
    name: 'Cookies Policy',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, "93e5"));
    }
  }, {
    path: '/contact-us',
    name: 'Contact us',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, "3412"));
    }
  }]
}, // Always leave this as last one,
// but you can also remove it
{
  path: '*',
  component: function component() {
    return __webpack_require__.e(/* import() */ 12).then(__webpack_require__.bind(null, "f364"));
  }
}];
/* harmony default export */ var router_routes = (routes);
// CONCATENATED MODULE: ../src/router/index.js


 // import { firebaseAuth } from '../boot/firebase'

vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

/* harmony default export */ var src_router = (function (_ref
/* { store, ssrContext } */
) {
  var store = _ref.store;
  var Router = new vue_router_esm["a" /* default */]({
    scrollBehavior: function scrollBehavior() {
      return {
        x: 0,
        y: 0
      };
    },
    routes: router_routes,
    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: "hash",
    base: ""
  });
  Router.beforeEach(function (to, from, next) {
    if (to.meta.requiresAuth) {
      if (!store.state.user.authenticated) {
        next("/auth/login");
      } else {
        next();
      }
    } else {
      next();
    }

    if (to.meta.hideForAuth) {
      if (store.state.user.authenticated) {
        next("/contacts");
      } else {
        next();
      }
    } else {
      next();
    }
  });
  return Router;
});
// CONCATENATED MODULE: ../.quasar/app.js



/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/





/* harmony default export */ var _quasar_app = (function () {
  return app_ref.apply(this, arguments);
});

function app_ref() {
  app_ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var store, router, app;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof src_store === 'function')) {
              _context.next = 6;
              break;
            }

            _context.next = 3;
            return src_store({
              Vue: vue_runtime_esm["a" /* default */]
            });

          case 3:
            _context.t0 = _context.sent;
            _context.next = 7;
            break;

          case 6:
            _context.t0 = src_store;

          case 7:
            store = _context.t0;

            if (!(typeof src_router === 'function')) {
              _context.next = 14;
              break;
            }

            _context.next = 11;
            return src_router({
              Vue: vue_runtime_esm["a" /* default */],
              store: store
            });

          case 11:
            _context.t1 = _context.sent;
            _context.next = 15;
            break;

          case 14:
            _context.t1 = src_router;

          case 15:
            router = _context.t1;
            // make router instance available in store
            store.$router = router; // Create the app instantiation Object.
            // Here we inject the router, store to all child components,
            // making them available everywhere as `this.$router` and `this.$store`.

            app = {
              router: router,
              store: store,
              render: function render(h) {
                return h(App);
              }
            };
            app.el = '#q-app'; // expose the app, the router and the store.
            // note we are not mounting the app here, since bootstrapping will be
            // different depending on whether we are in a browser or on the server.

            return _context.abrupt("return", {
              app: app,
              store: store,
              router: router
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return app_ref.apply(this, arguments);
}
// CONCATENATED MODULE: ../.quasar/client-entry.js





/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/


 // We load Quasar stylesheet file






vue_runtime_esm["a" /* default */].config.devtools = true;
vue_runtime_esm["a" /* default */].config.productionTip = false;
var publicPath = "";

function start() {
  return _start.apply(this, arguments);
}

function _start() {
  _start = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _yield$createApp, app, store, router, hasRedirected, redirect, urlPath, bootFiles, i;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _quasar_app();

          case 2:
            _yield$createApp = _context.sent;
            app = _yield$createApp.app;
            store = _yield$createApp.store;
            router = _yield$createApp.router;
            hasRedirected = false;

            redirect = function redirect(url) {
              hasRedirected = true;
              var normalized = Object(url) === url ? router.resolve(url).route.fullPath : url;
              window.location.href = normalized;
            };

            urlPath = window.location.href.replace(window.location.origin, '');
            bootFiles = [firebase["default"]];
            i = 0;

          case 11:
            if (!(hasRedirected === false && i < bootFiles.length)) {
              _context.next = 29;
              break;
            }

            if (!(typeof bootFiles[i] !== 'function')) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("continue", 26);

          case 14:
            _context.prev = 14;
            _context.next = 17;
            return bootFiles[i]({
              app: app,
              router: router,
              store: store,
              Vue: vue_runtime_esm["a" /* default */],
              ssrContext: null,
              redirect: redirect,
              urlPath: urlPath,
              publicPath: publicPath
            });

          case 17:
            _context.next = 26;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](14);

            if (!(_context.t0 && _context.t0.url)) {
              _context.next = 24;
              break;
            }

            window.location.href = _context.t0.url;
            return _context.abrupt("return");

          case 24:
            console.error('[Quasar] boot error:', _context.t0);
            return _context.abrupt("return");

          case 26:
            i++;
            _context.next = 11;
            break;

          case 29:
            if (!(hasRedirected === true)) {
              _context.next = 31;
              break;
            }

            return _context.abrupt("return");

          case 31:
            document.addEventListener('deviceready', function () {
              vue_runtime_esm["a" /* default */].prototype.$q.cordova = window.cordova;
              new vue_runtime_esm["a" /* default */](app);
            }, false); // on deviceready

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[14, 19]]);
  }));
  return _start.apply(this, arguments);
}

start();

/***/ }),

/***/ "9300":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("60e3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a13d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firebaseAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return firebaseDb; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4b38");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("5705");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4874");
// Firebase App (the core Firebase SDK) is always required and must be listed first
 // Add the Firebase products that you want to use


 // PUT YOUR OWN FIREBASE CONFIGURATION HERE

var firebaseConfig = {
  apiKey: "".concat("AIzaSyDCVjoS2jaVlJ57K9Sc66QQ6xevmL3UMx4"),
  authDomain: "".concat("orera-chat.firebaseapp.com"),
  databaseURL: "".concat("https://orera-chat-default-rtdb.firebaseio.com"),
  projectId: "".concat("orera-chat"),
  storageBucket: "".concat("orera-chat.appspot.com"),
  messagingSenderId: "".concat(271481134223),
  appId: "".concat("1:271481134223:web:974834651d920d966564fa")
}; // Initialize Firebase

var firebaseApp = firebase_app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].initializeApp(firebaseConfig);
var firebaseAuth = firebaseApp.auth();
var firebaseDb = firebaseApp.database();


/***/ }),

/***/ "a690":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "da29":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.js.map