/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./css/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./css/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Rampart+One&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Pacifico&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  font-family: \"Rampart One\", cursive;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  box-sizing: border-box;\n  color: rgb(247, 228, 228);\n  font-size: 1.2rem;\n}\n\n#container {\n  margin: 0 auto;\n  max-width: 800px;\n  height: 100vh;\n  padding: 20px;\n  box-sizing: border-box;\n  background-image: url(\"https://media.rusability.ru/wp-content/uploads/2019/02/v-telegram-poyavilis-novye-vozmozhnosti-dlya-raboty-s-fonami-chatov.jpg\");\n  background-repeat: repeat-y;\n  background-color: rgba(11, 115, 201, 0.3);\n  display: grid;\n  grid-template-rows: repeat(2, 50px) 100px;\n  grid-template-columns: 20% 1fr;\n  grid-template-areas:\n    \"changeBlocks changeBlocks\"\n    \". header\"\n    \". form\";\n  gap: 40px;\n}\n\nheader {\n  grid-area: header;\n  font-size: 4rem;\n  font-weight: bold;\n  color: rgb(114, 46, 46);\n}\n\n#form-login {\n  grid-area: form;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 15px;\n}\n\n#label-input-nikname {\n  color: rgb(114, 46, 46);\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n#input-nikname {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  font-size: 2rem;\n}\n\n#greet-block {\n  display: none;\n  grid-area: changeBlocks;\n}\n\n#btn-login {\n  padding: 0 30px;\n  background-color: rgba(4, 27, 43, 0.5);\n  margin-top: 10px;\n  box-shadow: 5px 5px 5px rgba(154, 147, 140, 0.4);\n  color: #c9a5a5;\n}\n\n#btn-login:hover {\n  filter: brightness(150%);\n}\n\n.btn {\n  text-align: center;\n  padding: 0 30px;\n  box-sizing: border-box;\n  outline: none;\n  border: 3px solid rgb(0, 0, 0, 0.2);\n  border-radius: 3px;\n  font-size: 1rem;\n  font-weight: bold;\n  text-decoration: none;\n  background-color: rgba(36, 80, 116, 0.7);\n  cursor: pointer;\n  touch-action: manipulation;\n  box-shadow: 15px 15px 15px rgba(154, 147, 140, 0.5);\n  color: #f5ebeb;\n}\n\n#btn-enter-chat {\n  margin-top: 10px;\n}\n\n#btn-exit-user {\n  margin-top: 10px;\n}\n\n#btn-send-message {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 30px;\n  background-image: url(\"https://oir.mobi/uploads/posts/2021-01/thumbs/1611926396_7-p-krasivii-fon-dlya-chata-7.jpg\");\n  }\n\n.btn:hover {\n  filter: opacity(0.9);\n  border: 3px solid rgba(235, 232, 232, 0.7);\n}\n\n#btn-reload-user {\n  width: 34%;\n  background-image: url(\"https://oir.mobi/uploads/posts/2021-01/thumbs/1611926396_7-p-krasivii-fon-dlya-chata-7.jpg\");\n}\n\n#btn-checkbox {\n  width: 33%;\n  background-image: url(\"https://oir.mobi/uploads/posts/2021-01/thumbs/1611926396_7-p-krasivii-fon-dlya-chata-7.jpg\");\n}\n\n#btn-exit-user-from-chat {\n  width: 33%;\n  background-image: url(\"https://oir.mobi/uploads/posts/2021-01/thumbs/1611926396_7-p-krasivii-fon-dlya-chata-7.jpg\");\n}\n\n#byebye {\n  grid-area: changeBlocks;\n}\n\n.block {\n  display: none;\n  text-align: center;\n  color: rgb(65, 7, 7);\n  border: 1px;\n  border-radius: 13px;\n  font-size: 3rem;\n  font-weight: 800;\n}\n\n#block-ask-login-filling {\n  grid-area: changeBlocks;\n}\n\n#wrapper-chat-block {\n  box-sizing: border-box;\n  max-width: 80%;\n  margin: 0 auto;\n  display: none;\n  height: 100vh;\n}\n\n#function-btn {\n  box-sizing: border-box;\n  grid-area: funcBtn;\n  display: flex;\n  flex-wrap: nowrap;\n  align-content: space-between;\n  justify-content: stretch;\n  align-items: stretch;\n  margin: 0;\n  padding: 0;\n}\n\n#chat-block {\n  grid-area: messages;\n  box-sizing: content-box;\n  height: 90vh;\n  display: grid;\n  grid-template-rows: 1fr 30% auto;\n  grid-template-columns: 30% auto;\n  grid-template-areas:\n    \"users messages\"\n    \"users message\"\n    \"funcBtn funcBtn\";\n}\n\n#users-block {\n  background-image: url(\"https://oir.mobi/uploads/posts/2021-01/thumbs/1611926396_7-p-krasivii-fon-dlya-chata-7.jpg\");\n  grid-area: messages;\n  grid-area: users;\n  background-color: rgb(236, 161, 161);\n  overflow: scroll;\n}\n\n#messages-block {\n  background-image: url(\"https://oir.mobi/uploads/posts/2021-01/thumbs/1611926396_7-p-krasivii-fon-dlya-chata-7.jpg\");\n  grid-area: messages;\n  background-color: rgb(23, 103, 134);\n  overflow: scroll;\n}\n\n#input-message {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: rgb(199, 228, 228);\n  resize: none;\n}\n\n#write-message-block {\n  overflow: scroll;\n  grid-area: message;\n  background-color: aqua;\n  display: flex;\n  align-items: stretch;\n}\n\n@media (max-width: 600px) {\n  #form-login {\n    flex-direction: column;\n    justify-content: baseline;\n    align-items: center;\n  }\n\n  #container {\n    padding: 20px;\n    display: grid;\n    grid-template-rows: 50px 50px 50px;\n    grid-template-columns: 30px 1fr;\n    grid-template-areas:\n    'changeBlocks changeBlocks'\n      \". header\"\n      \". form\";\n    margin: 0 auto;\n    max-width: 800px;\n    gap: 40px;\n  }\n\n#header {\n  font-size: 3rem;\n}\n\n#label-input-nikname {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n#block-ask-login-filling {\n  font-size: 2.2rem;\n}\n}\n", "",{"version":3,"sources":["webpack://./css/style.css"],"names":[],"mappings":"AAGA;EACE,mCAAmC;EACnC,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uJAAuJ;EACvJ,2BAA2B;EAC3B,yCAAyC;EACzC,aAAa;EACb,yCAAyC;EACzC,8BAA8B;EAC9B;;;YAGU;EACV,SAAS;AACX;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,uBAAuB;EACvB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,sCAAsC;EACtC,gBAAgB;EAChB,gDAAgD;EAChD,cAAc;AAChB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,sBAAsB;EACtB,aAAa;EACb,mCAAmC;EACnC,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,wCAAwC;EACxC,eAAe;EACf,0BAA0B;EAC1B,mDAAmD;EACnD,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,mHAAmH;EACnH;;AAEF;EACE,oBAAoB;EACpB,0CAA0C;AAC5C;;AAEA;EACE,UAAU;EACV,mHAAmH;AACrH;;AAEA;EACE,UAAU;EACV,mHAAmH;AACrH;;AAEA;EACE,UAAU;EACV,mHAAmH;AACrH;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,oBAAoB;EACpB,WAAW;EACX,mBAAmB;EACnB,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;EACtB,cAAc;EACd,cAAc;EACd,aAAa;EACb,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,iBAAiB;EACjB,4BAA4B;EAC5B,wBAAwB;EACxB,oBAAoB;EACpB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,gCAAgC;EAChC,+BAA+B;EAC/B;;;qBAGmB;AACrB;;AAEA;EACE,mHAAmH;EACnH,mBAAmB;EACnB,gBAAgB;EAChB,oCAAoC;EACpC,gBAAgB;AAClB;;AAEA;EACE,mHAAmH;EACnH,mBAAmB;EACnB,mCAAmC;EACnC,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,sBAAsB;EACtB,aAAa;EACb,oBAAoB;AACtB;;AAEA;EACE;IACE,sBAAsB;IACtB,yBAAyB;IACzB,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,aAAa;IACb,kCAAkC;IAClC,+BAA+B;IAC/B;;;cAGU;IACV,cAAc;IACd,gBAAgB;IAChB,SAAS;EACX;;AAEF;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;AACA","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Rampart+One&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Pacifico&display=swap\");\n\n* {\n  font-family: \"Rampart One\", cursive;\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  box-sizing: border-box;\n  color: rgb(247, 228, 228);\n  font-size: 1.2rem;\n}\n\n#container {\n  margin: 0 auto;\n  max-width: 800px;\n  height: 100vh;\n  padding: 20px;\n  box-sizing: border-box;\n  background-image: url(\"https://media.rusability.ru/wp-content/uploads/2019/02/v-telegram-poyavilis-novye-vozmozhnosti-dlya-raboty-s-fonami-chatov.jpg\");\n  background-repeat: repeat-y;\n  background-color: rgba(11, 115, 201, 0.3);\n  display: grid;\n  grid-template-rows: repeat(2, 50px) 100px;\n  grid-template-columns: 20% 1fr;\n  grid-template-areas:\n    \"changeBlocks changeBlocks\"\n    \". header\"\n    \". form\";\n  gap: 40px;\n}\n\nheader {\n  grid-area: header;\n  font-size: 4rem;\n  font-weight: bold;\n  color: rgb(114, 46, 46);\n}\n\n#form-login {\n  grid-area: form;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 15px;\n}\n\n#label-input-nikname {\n  color: rgb(114, 46, 46);\n  font-size: 2rem;\n  font-weight: bold;\n}\n\n#input-nikname {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: column;\n  border-radius: 5px;\n  font-size: 2rem;\n}\n\n#greet-block {\n  display: none;\n  grid-area: changeBlocks;\n}\n\n#btn-login {\n  padding: 0 30px;\n  background-color: rgba(4, 27, 43, 0.5);\n  margin-top: 10px;\n  box-shadow: 5px 5px 5px rgba(154, 147, 140, 0.4);\n  color: #c9a5a5;\n}\n\n#btn-login:hover {\n  filter: brightness(150%);\n}\n\n.btn {\n  text-align: center;\n  padding: 0 30px;\n  box-sizing: border-box;\n  outline: none;\n  border: 3px solid rgb(0, 0, 0, 0.2);\n  border-radius: 3px;\n  font-size: 1rem;\n  font-weight: bold;\n  text-decoration: none;\n  background-color: rgba(36, 80, 116, 0.7);\n  cursor: pointer;\n  touch-action: manipulation;\n  box-shadow: 15px 15px 15px rgba(154, 147, 140, 0.5);\n  color: #f5ebeb;\n}\n\n#btn-enter-chat {\n  margin-top: 10px;\n}\n\n#btn-exit-user {\n  margin-top: 10px;\n}\n\n#btn-send-message {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 10px 30px;\n  background-image: url(\"https://oir.mobi/uploads/posts/2021-01/thumbs/1611926396_7-p-krasivii-fon-dlya-chata-7.jpg\");\n  }\n\n.btn:hover {\n  filter: opacity(0.9);\n  border: 3px solid rgba(235, 232, 232, 0.7);\n}\n\n#btn-reload-user {\n  width: 34%;\n  background-image: url(\"https://oir.mobi/uploads/posts/2021-01/thumbs/1611926396_7-p-krasivii-fon-dlya-chata-7.jpg\");\n}\n\n#btn-checkbox {\n  width: 33%;\n  background-image: url(\"https://oir.mobi/uploads/posts/2021-01/thumbs/1611926396_7-p-krasivii-fon-dlya-chata-7.jpg\");\n}\n\n#btn-exit-user-from-chat {\n  width: 33%;\n  background-image: url(\"https://oir.mobi/uploads/posts/2021-01/thumbs/1611926396_7-p-krasivii-fon-dlya-chata-7.jpg\");\n}\n\n#byebye {\n  grid-area: changeBlocks;\n}\n\n.block {\n  display: none;\n  text-align: center;\n  color: rgb(65, 7, 7);\n  border: 1px;\n  border-radius: 13px;\n  font-size: 3rem;\n  font-weight: 800;\n}\n\n#block-ask-login-filling {\n  grid-area: changeBlocks;\n}\n\n#wrapper-chat-block {\n  box-sizing: border-box;\n  max-width: 80%;\n  margin: 0 auto;\n  display: none;\n  height: 100vh;\n}\n\n#function-btn {\n  box-sizing: border-box;\n  grid-area: funcBtn;\n  display: flex;\n  flex-wrap: nowrap;\n  align-content: space-between;\n  justify-content: stretch;\n  align-items: stretch;\n  margin: 0;\n  padding: 0;\n}\n\n#chat-block {\n  grid-area: messages;\n  box-sizing: content-box;\n  height: 90vh;\n  display: grid;\n  grid-template-rows: 1fr 30% auto;\n  grid-template-columns: 30% auto;\n  grid-template-areas:\n    \"users messages\"\n    \"users message\"\n    \"funcBtn funcBtn\";\n}\n\n#users-block {\n  background-image: url(\"https://oir.mobi/uploads/posts/2021-01/thumbs/1611926396_7-p-krasivii-fon-dlya-chata-7.jpg\");\n  grid-area: messages;\n  grid-area: users;\n  background-color: rgb(236, 161, 161);\n  overflow: scroll;\n}\n\n#messages-block {\n  background-image: url(\"https://oir.mobi/uploads/posts/2021-01/thumbs/1611926396_7-p-krasivii-fon-dlya-chata-7.jpg\");\n  grid-area: messages;\n  background-color: rgb(23, 103, 134);\n  overflow: scroll;\n}\n\n#input-message {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background-color: rgb(199, 228, 228);\n  resize: none;\n}\n\n#write-message-block {\n  overflow: scroll;\n  grid-area: message;\n  background-color: aqua;\n  display: flex;\n  align-items: stretch;\n}\n\n@media (max-width: 600px) {\n  #form-login {\n    flex-direction: column;\n    justify-content: baseline;\n    align-items: center;\n  }\n\n  #container {\n    padding: 20px;\n    display: grid;\n    grid-template-rows: 50px 50px 50px;\n    grid-template-columns: 30px 1fr;\n    grid-template-areas:\n    'changeBlocks changeBlocks'\n      \". header\"\n      \". form\";\n    margin: 0 auto;\n    max-width: 800px;\n    gap: 40px;\n  }\n\n#header {\n  font-size: 3rem;\n}\n\n#label-input-nikname {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n#block-ask-login-filling {\n  font-size: 2.2rem;\n}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrayOfMsgForReserv": () => (/* binding */ arrayOfMsgForReserv),
/* harmony export */   "usersArray": () => (/* binding */ usersArray),
/* harmony export */   "container": () => (/* binding */ container),
/* harmony export */   "formUserLogin": () => (/* binding */ formUserLogin),
/* harmony export */   "btnUserLogin": () => (/* binding */ btnUserLogin),
/* harmony export */   "inputUserLogin": () => (/* binding */ inputUserLogin),
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "blockAskLoginFilling": () => (/* binding */ blockAskLoginFilling),
/* harmony export */   "byebye": () => (/* binding */ byebye),
/* harmony export */   "greetBlock": () => (/* binding */ greetBlock),
/* harmony export */   "greeting": () => (/* binding */ greeting),
/* harmony export */   "btnUserExit": () => (/* binding */ btnUserExit),
/* harmony export */   "btnEnterChat": () => (/* binding */ btnEnterChat),
/* harmony export */   "chatBlockWrapper": () => (/* binding */ chatBlockWrapper),
/* harmony export */   "chatBlock": () => (/* binding */ chatBlock),
/* harmony export */   "messages": () => (/* binding */ messages),
/* harmony export */   "usersBlock": () => (/* binding */ usersBlock),
/* harmony export */   "inputMessage": () => (/* binding */ inputMessage),
/* harmony export */   "btnSendMessage": () => (/* binding */ btnSendMessage),
/* harmony export */   "formMsg": () => (/* binding */ formMsg),
/* harmony export */   "checkbox": () => (/* binding */ checkbox),
/* harmony export */   "btnExitFromChat": () => (/* binding */ btnExitFromChat),
/* harmony export */   "btnReloadUser": () => (/* binding */ btnReloadUser)
/* harmony export */ });
/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function.js */ "./src/function.js");
/* harmony import */ var _ws_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ws.js */ "./src/ws.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");



debugger
document.addEventListener("DOMContentLoaded", _function_js__WEBPACK_IMPORTED_MODULE_0__.checkLocalStorage);

let arrayOfMsgForReserv = [];
let usersArray = new Set();

const container= document.getElementById('container');
const formUserLogin = document.getElementById('form-login');
const btnUserLogin = document.getElementById('btn-login');
const inputUserLogin = document.getElementById('input-nikname');
const header = document.getElementById('header');

const blockAskLoginFilling = document.getElementById('block-ask-login-filling');

const byebye = document.getElementById('byebye');
const greetBlock = document.getElementById('greet-block');
const greeting = document.getElementById('greet');
const btnUserExit = document.getElementById('btn-exit-user');
const btnEnterChat = document.getElementById('btn-enter-chat');

const chatBlockWrapper = document.getElementById('wrapper-chat-block');
const chatBlock = document.getElementById('chat-block');
const messages = document.getElementById('messages-block');
const usersBlock = document.getElementById('users-block');
const inputMessage = document.getElementById('input-message');
const btnSendMessage = document.getElementById("btn-send-message");
const formMsg = document.getElementById("form-msg");

const checkbox = document.getElementById('checkbox');
const btnExitFromChat = document.getElementById('btn-exit-user-from-chat');
const btnReloadUser = document.getElementById('btn-reload-user');

btnUserLogin.addEventListener("click", _function_js__WEBPACK_IMPORTED_MODULE_0__.checkLoginFilling);
btnUserExit.addEventListener('click', _function_js__WEBPACK_IMPORTED_MODULE_0__.userExit);
btnEnterChat.addEventListener('click', _function_js__WEBPACK_IMPORTED_MODULE_0__.goToChat);
btnReloadUser.addEventListener('click', _ws_js__WEBPACK_IMPORTED_MODULE_1__.createNewConnection);
btnSendMessage.addEventListener('click', _function_js__WEBPACK_IMPORTED_MODULE_0__.sendMsg);
btnExitFromChat.addEventListener('click', _function_js__WEBPACK_IMPORTED_MODULE_0__.closeSocket);

formUserLogin.addEventListener('submit', e => {
    e.preventDefault();
    _function_js__WEBPACK_IMPORTED_MODULE_0__.checkLoginFilling();
});





/***/ }),

/***/ "./src/function.js":
/*!*************************!*\
  !*** ./src/function.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkLocalStorage": () => (/* binding */ checkLocalStorage),
/* harmony export */   "checkLoginFilling": () => (/* binding */ checkLoginFilling),
/* harmony export */   "checkNotEmptyField": () => (/* binding */ checkNotEmptyField),
/* harmony export */   "writeUsernameToLocalStorage": () => (/* binding */ writeUsernameToLocalStorage),
/* harmony export */   "askLoginFilling": () => (/* binding */ askLoginFilling),
/* harmony export */   "userExit": () => (/* binding */ userExit),
/* harmony export */   "goToChat": () => (/* binding */ goToChat),
/* harmony export */   "exitFromChat": () => (/* binding */ exitFromChat),
/* harmony export */   "closeSocket": () => (/* binding */ closeSocket),
/* harmony export */   "sendMsg": () => (/* binding */ sendMsg),
/* harmony export */   "checkCheckbox": () => (/* binding */ checkCheckbox)
/* harmony export */ });
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/* harmony import */ var _ws_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ws.js */ "./src/ws.js");
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script */ "./src/script.js");




function checkLocalStorage() {
  if (localStorage.getItem('username')) {
    goToChat();
  }
}

function checkLoginFilling() {
  checkNotEmptyField(_app_js__WEBPACK_IMPORTED_MODULE_0__.inputUserLogin) ? writeUsernameToLocalStorage() : askLoginFilling();
}

function checkNotEmptyField(inputField) {
  if (inputField.value == "") {
  return 0;
  } else {
  return 1; }
}

function writeUsernameToLocalStorage() {
  _app_js__WEBPACK_IMPORTED_MODULE_0__.byebye.style.display = 'none';
  _app_js__WEBPACK_IMPORTED_MODULE_0__.blockAskLoginFilling.style.display = 'none';
  _app_js__WEBPACK_IMPORTED_MODULE_0__.greetBlock.style.display = "block";
  _app_js__WEBPACK_IMPORTED_MODULE_0__.formUserLogin.style.display = "none";
  _app_js__WEBPACK_IMPORTED_MODULE_0__.header.style.display = "none";
  localStorage.setItem('username', `${_app_js__WEBPACK_IMPORTED_MODULE_0__.inputUserLogin.value}`);
  _app_js__WEBPACK_IMPORTED_MODULE_0__.inputUserLogin.value = "";
  _app_js__WEBPACK_IMPORTED_MODULE_0__.greeting.textContent = `Hi, ${localStorage.getItem('username')}`;
}

function askLoginFilling() {
  _app_js__WEBPACK_IMPORTED_MODULE_0__.byebye.style.display = 'none';
  _app_js__WEBPACK_IMPORTED_MODULE_0__.blockAskLoginFilling.style.display = 'block';
  _app_js__WEBPACK_IMPORTED_MODULE_0__.blockAskLoginFilling.textContent = "You should enter The Name!";
}

function userExit() {
  _app_js__WEBPACK_IMPORTED_MODULE_0__.byebye.style.display = 'block';
  _app_js__WEBPACK_IMPORTED_MODULE_0__.formUserLogin.style.display = 'block';
  _app_js__WEBPACK_IMPORTED_MODULE_0__.byebye.textContent = `Byebye, ${localStorage.getItem('username')}`;
  _app_js__WEBPACK_IMPORTED_MODULE_0__.greetBlock.style.display = "none";
  localStorage.clear();
}

function goToChat() {
  (0,_ws_js__WEBPACK_IMPORTED_MODULE_1__.createNewConnection)();
  _app_js__WEBPACK_IMPORTED_MODULE_0__.container.style.display = 'none';
  _app_js__WEBPACK_IMPORTED_MODULE_0__.chatBlockWrapper.style.display = 'block';
}

function exitFromChat() {
  _app_js__WEBPACK_IMPORTED_MODULE_0__.chatBlockWrapper.style.display = 'none';
  _app_js__WEBPACK_IMPORTED_MODULE_0__.container.style.display = 'block';
  _app_js__WEBPACK_IMPORTED_MODULE_0__.header.style.margin = '20px 20px 20px 50px';
  _app_js__WEBPACK_IMPORTED_MODULE_0__.formUserLogin.style.margin = '20px 20px 20px 50px';
  
}

function closeSocket() {
  let msgCloseSocket = new _script__WEBPACK_IMPORTED_MODULE_2__.Obj("message", "", `${localStorage.getItem('username')} вышел`);
  _ws_js__WEBPACK_IMPORTED_MODULE_1__.socket.send(JSON.stringify(msgCloseSocket));
  setTimeout(() => {_ws_js__WEBPACK_IMPORTED_MODULE_1__.socket.close(1000, "работа закончена")
  }, 5000);
  exitFromChat();
}

function sendMsg() {
  let newMsg = new _script__WEBPACK_IMPORTED_MODULE_2__.Obj("message", `${localStorage.getItem('username')}`, `${_app_js__WEBPACK_IMPORTED_MODULE_0__.inputMessage.value}`);
  if (_ws_js__WEBPACK_IMPORTED_MODULE_1__.socket.readyState == 1) {
  _ws_js__WEBPACK_IMPORTED_MODULE_1__.socket.send(JSON.stringify(newMsg));
  } else {
  reportNoConnection();
  }
}

function reportNoConnection() {
  let p4 = document.createElement('p');
  p4.textContent = "Соединение не установлено, залогиньтесь";
  _app_js__WEBPACK_IMPORTED_MODULE_0__.messages.append(p4);
  _app_js__WEBPACK_IMPORTED_MODULE_0__.inputMessage.value = "";
}

function checkCheckbox() {
if (_app_js__WEBPACK_IMPORTED_MODULE_0__.checkbox.checked) {
  (0,_ws_js__WEBPACK_IMPORTED_MODULE_1__.createNewConnection)();
	}
	else {
	reportNoConnection();
	}
}
 


/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Obj": () => (/* binding */ Obj)
/* harmony export */ });
class Obj {
  constructor(type, username, message) {
    this.type = type;
    this.payload = { username, message };
  }
}






/***/ }),

/***/ "./src/ws.js":
/*!*******************!*\
  !*** ./src/ws.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "socket": () => (/* binding */ socket),
/* harmony export */   "createNewConnection": () => (/* binding */ createNewConnection)
/* harmony export */ });
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ "./src/app.js");
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script */ "./src/script.js");
/* harmony import */ var _function_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./function.js */ "./src/function.js");

let socket;


 
function createNewConnection() {
  socket = new WebSocket("wss://fep-app.herokuapp.com/");
  let oldMsg;

  if (localStorage.getItem('messages') !== null) {
    oldMsg = JSON.parse(localStorage.getItem('messages'));
    } else {
    oldMsg = [];
  }
  
  socket.onmessage = function (event) {
    _app_js__WEBPACK_IMPORTED_MODULE_0__.inputMessage.placeholder = "";
    if ((0,_function_js__WEBPACK_IMPORTED_MODULE_2__.checkNotEmptyField)(_app_js__WEBPACK_IMPORTED_MODULE_0__.inputMessage) || JSON.parse(event.data).payload.message !== ''){
    _app_js__WEBPACK_IMPORTED_MODULE_0__.inputMessage.value = "";
    _app_js__WEBPACK_IMPORTED_MODULE_0__.arrayOfMsgForReserv.push(event.data);
    let allMsg = oldMsg.concat(_app_js__WEBPACK_IMPORTED_MODULE_0__.arrayOfMsgForReserv);
    localStorage.setItem('messages', JSON.stringify(allMsg));
      writeMsgToMsgblock(event.data);
    } else {
      _app_js__WEBPACK_IMPORTED_MODULE_0__.inputMessage.placeholder = "Ваше сообщение";
    }
  }
 
  socket.onopen = function (e) {
    oldMsg.forEach(function (item) {
    writeMsgToMsgblock(item);
    });
    let msgEnter = new _script__WEBPACK_IMPORTED_MODULE_1__.Obj("message", "", `${localStorage.getItem('username')} вошел в чат`);
    socket.send(JSON.stringify(msgEnter));

  }
  
  socket.onclose = function(evt) {
    if (evt.code !== 1000) {
        (0,_function_js__WEBPACK_IMPORTED_MODULE_2__.checkCheckbox)();
    }
  }
}
 
function writeMsgToMsgblock(parseObj) {
  let username = JSON.parse(parseObj).payload.username;
  let p1 = document.createElement('p');
  let p2 = document.createElement('p');
  p1.textContent = username;
  p2.textContent = JSON.parse(parseObj).payload.message;
  if (username == `${localStorage.getItem('username')}`) {
    p1.style.color = '#5194DB';
    p2.style.color = "#66AEF2";
    p1.style.margin = `0 0 0 30px`;
    p2.style.margin = `0 0 20px 30px`;
  } else if (username == '') {
    p2.style.color = "#E8E2CF";
    p2.style.margin = "0 0 20px 0";
  } else {p1.style.color = '#9A93DB';
    p2.style.color = "#D4A9F5";
    p2.style.margin = "0 0 20px 0";
  }
  
  _app_js__WEBPACK_IMPORTED_MODULE_0__.messages.append(p1);
  _app_js__WEBPACK_IMPORTED_MODULE_0__.messages.append(p2);
  
  let h = _app_js__WEBPACK_IMPORTED_MODULE_0__.messages.scrollHeight;
  _app_js__WEBPACK_IMPORTED_MODULE_0__.messages.scrollTop = h;
    
  let p5 = document.createElement('p');
  if (!_app_js__WEBPACK_IMPORTED_MODULE_0__.usersArray.has(username) && username !== `${localStorage.getItem('username')}` && username !== '') {
  p5.textContent = JSON.parse(parseObj).payload.username;
  _app_js__WEBPACK_IMPORTED_MODULE_0__.usersBlock.append(p5);
  let h1 = _app_js__WEBPACK_IMPORTED_MODULE_0__.usersBlock.scrollHeight;
  _app_js__WEBPACK_IMPORTED_MODULE_0__.usersBlock.scrollTop = h1;
  _app_js__WEBPACK_IMPORTED_MODULE_0__.usersArray.add(username);
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxRQUFRLDJEQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlDQUFpQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSSxNQUFNO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9EQUFlO0FBQ2pCLEVBQUUsb0RBQWU7QUFDakI7QUFDQSxVQUFVLDBEQUFxQjtBQUMvQixFQUFFLHVEQUFrQjtBQUNwQjtBQUNBO0FBQ0EsT0FBTyxtREFBYyw4QkFBOEIsaUNBQWlDO0FBQ3BGO0FBQ0EsRUFBRSxzREFBaUI7QUFDbkIsV0FBVyw0REFBdUI7QUFDbEMsRUFBRSx5REFBb0I7QUFDdEIsRUFBRSxtREFBYztBQUNoQjtBQUNBOzs7Ozs7VUM3RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maW5hbHByby8uL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZmluYWxwcm8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ZpbmFscHJvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZmluYWxwcm8vLi9jc3Mvc3R5bGUuY3NzP2RhMWYiLCJ3ZWJwYWNrOi8vZmluYWxwcm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZmluYWxwcm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2ZpbmFscHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ZpbmFscHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2ZpbmFscHJvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZmluYWxwcm8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9maW5hbHByby8uL3NyYy9hcHAuanMiLCJ3ZWJwYWNrOi8vZmluYWxwcm8vLi9zcmMvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZmluYWxwcm8vLi9zcmMvc2NyaXB0LmpzIiwid2VicGFjazovL2ZpbmFscHJvLy4vc3JjL3dzLmpzIiwid2VicGFjazovL2ZpbmFscHJvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpbmFscHJvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2ZpbmFscHJvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maW5hbHByby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZpbmFscHJvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmluYWxwcm8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9maW5hbHByby93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vZmluYWxwcm8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFtcGFydCtPbmUmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGFjaWZpY28mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBmb250LWZhbWlseTogXFxcIlJhbXBhcnQgT25lXFxcIiwgY3Vyc2l2ZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogcmdiKDI0NywgMjI4LCAyMjgpO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL21lZGlhLnJ1c2FiaWxpdHkucnUvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDIvdi10ZWxlZ3JhbS1wb3lhdmlsaXMtbm92eWUtdm96bW96aG5vc3RpLWRseWEtcmFib3R5LXMtZm9uYW1pLWNoYXRvdi5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTEsIDExNSwgMjAxLCAwLjMpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDUwcHgpIDEwMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMCUgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImNoYW5nZUJsb2NrcyBjaGFuZ2VCbG9ja3NcXFwiXFxuICAgIFxcXCIuIGhlYWRlclxcXCJcXG4gICAgXFxcIi4gZm9ybVxcXCI7XFxuICBnYXA6IDQwcHg7XFxufVxcblxcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6IHJnYigxMTQsIDQ2LCA0Nik7XFxufVxcblxcbiNmb3JtLWxvZ2luIHtcXG4gIGdyaWQtYXJlYTogZm9ybTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBnYXA6IDE1cHg7XFxufVxcblxcbiNsYWJlbC1pbnB1dC1uaWtuYW1lIHtcXG4gIGNvbG9yOiByZ2IoMTE0LCA0NiwgNDYpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNpbnB1dC1uaWtuYW1lIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuI2dyZWV0LWJsb2NrIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBncmlkLWFyZWE6IGNoYW5nZUJsb2NrcztcXG59XFxuXFxuI2J0bi1sb2dpbiB7XFxuICBwYWRkaW5nOiAwIDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQsIDI3LCA0MywgMC41KTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDE1NCwgMTQ3LCAxNDAsIDAuNCk7XFxuICBjb2xvcjogI2M5YTVhNTtcXG59XFxuXFxuI2J0bi1sb2dpbjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMTUwJSk7XFxufVxcblxcbi5idG4ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMCAzMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMCwgMCwgMCwgMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNiwgODAsIDExNiwgMC43KTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgYm94LXNoYWRvdzogMTVweCAxNXB4IDE1cHggcmdiYSgxNTQsIDE0NywgMTQwLCAwLjUpO1xcbiAgY29sb3I6ICNmNWViZWI7XFxufVxcblxcbiNidG4tZW50ZXItY2hhdCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4jYnRuLWV4aXQtdXNlciB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4jYnRuLXNlbmQtbWVzc2FnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL29pci5tb2JpL3VwbG9hZHMvcG9zdHMvMjAyMS0wMS90aHVtYnMvMTYxMTkyNjM5Nl83LXAta3Jhc2l2aWktZm9uLWRseWEtY2hhdGEtNy5qcGdcXFwiKTtcXG4gIH1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIGZpbHRlcjogb3BhY2l0eSgwLjkpO1xcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyMzUsIDIzMiwgMjMyLCAwLjcpO1xcbn1cXG5cXG4jYnRuLXJlbG9hZC11c2VyIHtcXG4gIHdpZHRoOiAzNCU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vb2lyLm1vYmkvdXBsb2Fkcy9wb3N0cy8yMDIxLTAxL3RodW1icy8xNjExOTI2Mzk2XzctcC1rcmFzaXZpaS1mb24tZGx5YS1jaGF0YS03LmpwZ1xcXCIpO1xcbn1cXG5cXG4jYnRuLWNoZWNrYm94IHtcXG4gIHdpZHRoOiAzMyU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vb2lyLm1vYmkvdXBsb2Fkcy9wb3N0cy8yMDIxLTAxL3RodW1icy8xNjExOTI2Mzk2XzctcC1rcmFzaXZpaS1mb24tZGx5YS1jaGF0YS03LmpwZ1xcXCIpO1xcbn1cXG5cXG4jYnRuLWV4aXQtdXNlci1mcm9tLWNoYXQge1xcbiAgd2lkdGg6IDMzJTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9vaXIubW9iaS91cGxvYWRzL3Bvc3RzLzIwMjEtMDEvdGh1bWJzLzE2MTE5MjYzOTZfNy1wLWtyYXNpdmlpLWZvbi1kbHlhLWNoYXRhLTcuanBnXFxcIik7XFxufVxcblxcbiNieWVieWUge1xcbiAgZ3JpZC1hcmVhOiBjaGFuZ2VCbG9ja3M7XFxufVxcblxcbi5ibG9jayB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHJnYig2NSwgNywgNyk7XFxuICBib3JkZXI6IDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogODAwO1xcbn1cXG5cXG4jYmxvY2stYXNrLWxvZ2luLWZpbGxpbmcge1xcbiAgZ3JpZC1hcmVhOiBjaGFuZ2VCbG9ja3M7XFxufVxcblxcbiN3cmFwcGVyLWNoYXQtYmxvY2sge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1heC13aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBkaXNwbGF5OiBub25lO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2Z1bmN0aW9uLWJ0biB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZ3JpZC1hcmVhOiBmdW5jQnRuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuI2NoYXQtYmxvY2sge1xcbiAgZ3JpZC1hcmVhOiBtZXNzYWdlcztcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgaGVpZ2h0OiA5MHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDMwJSBhdXRvO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMCUgYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJ1c2VycyBtZXNzYWdlc1xcXCJcXG4gICAgXFxcInVzZXJzIG1lc3NhZ2VcXFwiXFxuICAgIFxcXCJmdW5jQnRuIGZ1bmNCdG5cXFwiO1xcbn1cXG5cXG4jdXNlcnMtYmxvY2sge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL29pci5tb2JpL3VwbG9hZHMvcG9zdHMvMjAyMS0wMS90aHVtYnMvMTYxMTkyNjM5Nl83LXAta3Jhc2l2aWktZm9uLWRseWEtY2hhdGEtNy5qcGdcXFwiKTtcXG4gIGdyaWQtYXJlYTogbWVzc2FnZXM7XFxuICBncmlkLWFyZWE6IHVzZXJzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMTYxLCAxNjEpO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuI21lc3NhZ2VzLWJsb2NrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9vaXIubW9iaS91cGxvYWRzL3Bvc3RzLzIwMjEtMDEvdGh1bWJzLzE2MTE5MjYzOTZfNy1wLWtyYXNpdmlpLWZvbi1kbHlhLWNoYXRhLTcuanBnXFxcIik7XFxuICBncmlkLWFyZWE6IG1lc3NhZ2VzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzLCAxMDMsIDEzNCk7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4jaW5wdXQtbWVzc2FnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTksIDIyOCwgMjI4KTtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuI3dyaXRlLW1lc3NhZ2UtYmxvY2sge1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gIGdyaWQtYXJlYTogbWVzc2FnZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgI2Zvcm0tbG9naW4ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGJhc2VsaW5lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgI2NvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCA1MHB4IDUwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzBweCAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICdjaGFuZ2VCbG9ja3MgY2hhbmdlQmxvY2tzJ1xcbiAgICAgIFxcXCIuIGhlYWRlclxcXCJcXG4gICAgICBcXFwiLiBmb3JtXFxcIjtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIGdhcDogNDBweDtcXG4gIH1cXG5cXG4jaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuI2xhYmVsLWlucHV0LW5pa25hbWUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2Jsb2NrLWFzay1sb2dpbi1maWxsaW5nIHtcXG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xcbn1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4v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dEIsYUFBYTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtDQUFrQztJQUNsQywrQkFBK0I7SUFDL0I7OztjQUdVO0lBQ1YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixTQUFTO0VBQ1g7O0FBRUY7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbXBhcnQrT25lJmRpc3BsYXk9c3dhcFxcXCIpO1xcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBhY2lmaWNvJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSYW1wYXJ0IE9uZVxcXCIsIGN1cnNpdmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IHJnYigyNDcsIDIyOCwgMjI4KTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9tZWRpYS5ydXNhYmlsaXR5LnJ1L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzAyL3YtdGVsZWdyYW0tcG95YXZpbGlzLW5vdnllLXZvem1vemhub3N0aS1kbHlhLXJhYm90eS1zLWZvbmFtaS1jaGF0b3YuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDExLCAxMTUsIDIwMSwgMC4zKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA1MHB4KSAxMDBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAlIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJjaGFuZ2VCbG9ja3MgY2hhbmdlQmxvY2tzXFxcIlxcbiAgICBcXFwiLiBoZWFkZXJcXFwiXFxuICAgIFxcXCIuIGZvcm1cXFwiO1xcbiAgZ2FwOiA0MHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICBmb250LXNpemU6IDRyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiByZ2IoMTE0LCA0NiwgNDYpO1xcbn1cXG5cXG4jZm9ybS1sb2dpbiB7XFxuICBncmlkLWFyZWE6IGZvcm07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4jbGFiZWwtaW5wdXQtbmlrbmFtZSB7XFxuICBjb2xvcjogcmdiKDExNCwgNDYsIDQ2KTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jaW5wdXQtbmlrbmFtZSB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbiNncmVldC1ibG9jayB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZ3JpZC1hcmVhOiBjaGFuZ2VCbG9ja3M7XFxufVxcblxcbiNidG4tbG9naW4ge1xcbiAgcGFkZGluZzogMCAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0LCAyNywgNDMsIDAuNSk7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgxNTQsIDE0NywgMTQwLCAwLjQpO1xcbiAgY29sb3I6ICNjOWE1YTU7XFxufVxcblxcbiNidG4tbG9naW46aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDE1MCUpO1xcbn1cXG5cXG4uYnRuIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMzBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyOiAzcHggc29saWQgcmdiKDAsIDAsIDAsIDAuMik7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDgwLCAxMTYsIDAuNyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIGJveC1zaGFkb3c6IDE1cHggMTVweCAxNXB4IHJnYmEoMTU0LCAxNDcsIDE0MCwgMC41KTtcXG4gIGNvbG9yOiAjZjVlYmViO1xcbn1cXG5cXG4jYnRuLWVudGVyLWNoYXQge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuI2J0bi1leGl0LXVzZXIge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuI2J0bi1zZW5kLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9vaXIubW9iaS91cGxvYWRzL3Bvc3RzLzIwMjEtMDEvdGh1bWJzLzE2MTE5MjYzOTZfNy1wLWtyYXNpdmlpLWZvbi1kbHlhLWNoYXRhLTcuanBnXFxcIik7XFxuICB9XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBmaWx0ZXI6IG9wYWNpdHkoMC45KTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMjM1LCAyMzIsIDIzMiwgMC43KTtcXG59XFxuXFxuI2J0bi1yZWxvYWQtdXNlciB7XFxuICB3aWR0aDogMzQlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL29pci5tb2JpL3VwbG9hZHMvcG9zdHMvMjAyMS0wMS90aHVtYnMvMTYxMTkyNjM5Nl83LXAta3Jhc2l2aWktZm9uLWRseWEtY2hhdGEtNy5qcGdcXFwiKTtcXG59XFxuXFxuI2J0bi1jaGVja2JveCB7XFxuICB3aWR0aDogMzMlO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJodHRwczovL29pci5tb2JpL3VwbG9hZHMvcG9zdHMvMjAyMS0wMS90aHVtYnMvMTYxMTkyNjM5Nl83LXAta3Jhc2l2aWktZm9uLWRseWEtY2hhdGEtNy5qcGdcXFwiKTtcXG59XFxuXFxuI2J0bi1leGl0LXVzZXItZnJvbS1jaGF0IHtcXG4gIHdpZHRoOiAzMyU7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vb2lyLm1vYmkvdXBsb2Fkcy9wb3N0cy8yMDIxLTAxL3RodW1icy8xNjExOTI2Mzk2XzctcC1rcmFzaXZpaS1mb24tZGx5YS1jaGF0YS03LmpwZ1xcXCIpO1xcbn1cXG5cXG4jYnllYnllIHtcXG4gIGdyaWQtYXJlYTogY2hhbmdlQmxvY2tzO1xcbn1cXG5cXG4uYmxvY2sge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2IoNjUsIDcsIDcpO1xcbiAgYm9yZGVyOiAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG59XFxuXFxuI2Jsb2NrLWFzay1sb2dpbi1maWxsaW5nIHtcXG4gIGdyaWQtYXJlYTogY2hhbmdlQmxvY2tzO1xcbn1cXG5cXG4jd3JhcHBlci1jaGF0LWJsb2NrIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXgtd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbiNmdW5jdGlvbi1idG4ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGdyaWQtYXJlYTogZnVuY0J0bjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IG5vd3JhcDtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjaGF0LWJsb2NrIHtcXG4gIGdyaWQtYXJlYTogbWVzc2FnZXM7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXG4gIGhlaWdodDogOTB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAzMCUgYXV0bztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzAlIGF1dG87XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwidXNlcnMgbWVzc2FnZXNcXFwiXFxuICAgIFxcXCJ1c2VycyBtZXNzYWdlXFxcIlxcbiAgICBcXFwiZnVuY0J0biBmdW5jQnRuXFxcIjtcXG59XFxuXFxuI3VzZXJzLWJsb2NrIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaHR0cHM6Ly9vaXIubW9iaS91cGxvYWRzL3Bvc3RzLzIwMjEtMDEvdGh1bWJzLzE2MTE5MjYzOTZfNy1wLWtyYXNpdmlpLWZvbi1kbHlhLWNoYXRhLTcuanBnXFxcIik7XFxuICBncmlkLWFyZWE6IG1lc3NhZ2VzO1xcbiAgZ3JpZC1hcmVhOiB1c2VycztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDE2MSwgMTYxKTtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbiNtZXNzYWdlcy1ibG9jayB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImh0dHBzOi8vb2lyLm1vYmkvdXBsb2Fkcy9wb3N0cy8yMDIxLTAxL3RodW1icy8xNjExOTI2Mzk2XzctcC1rcmFzaXZpaS1mb24tZGx5YS1jaGF0YS03LmpwZ1xcXCIpO1xcbiAgZ3JpZC1hcmVhOiBtZXNzYWdlcztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMywgMTAzLCAxMzQpO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuI2lucHV0LW1lc3NhZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk5LCAyMjgsIDIyOCk7XFxuICByZXNpemU6IG5vbmU7XFxufVxcblxcbiN3cml0ZS1tZXNzYWdlLWJsb2NrIHtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBncmlkLWFyZWE6IG1lc3NhZ2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICNmb3JtLWxvZ2luIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBiYXNlbGluZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNjb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggNTBweCA1MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAnY2hhbmdlQmxvY2tzIGNoYW5nZUJsb2NrcydcXG4gICAgICBcXFwiLiBoZWFkZXJcXFwiXFxuICAgICAgXFxcIi4gZm9ybVxcXCI7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBnYXA6IDQwcHg7XFxuICB9XFxuXFxuI2hlYWRlciB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbiNsYWJlbC1pbnB1dC1uaWtuYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNibG9jay1hc2stbG9naW4tZmlsbGluZyB7XFxuICBmb250LXNpemU6IDIuMnJlbTtcXG59XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgKiBhcyBteUZ1bnN0aW9uIGZyb20gJy4vZnVuY3Rpb24uanMnO1xyXG5pbXBvcnQgeyBjcmVhdGVOZXdDb25uZWN0aW9uIH0gZnJvbSAnLi93cy5qcyc7XHJcbmltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcyc7XHJcbmRlYnVnZ2VyXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIG15RnVuc3Rpb24uY2hlY2tMb2NhbFN0b3JhZ2UpO1xyXG5cclxuZXhwb3J0IGxldCBhcnJheU9mTXNnRm9yUmVzZXJ2ID0gW107XHJcbmV4cG9ydCBsZXQgdXNlcnNBcnJheSA9IG5ldyBTZXQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjb250YWluZXI9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcclxuZXhwb3J0IGNvbnN0IGZvcm1Vc2VyTG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybS1sb2dpbicpO1xyXG5leHBvcnQgY29uc3QgYnRuVXNlckxvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1sb2dpbicpO1xyXG5leHBvcnQgY29uc3QgaW5wdXRVc2VyTG9naW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtbmlrbmFtZScpO1xyXG5leHBvcnQgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJsb2NrQXNrTG9naW5GaWxsaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jsb2NrLWFzay1sb2dpbi1maWxsaW5nJyk7XHJcblxyXG5leHBvcnQgY29uc3QgYnllYnllID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J5ZWJ5ZScpO1xyXG5leHBvcnQgY29uc3QgZ3JlZXRCbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdncmVldC1ibG9jaycpO1xyXG5leHBvcnQgY29uc3QgZ3JlZXRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ3JlZXQnKTtcclxuZXhwb3J0IGNvbnN0IGJ0blVzZXJFeGl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1leGl0LXVzZXInKTtcclxuZXhwb3J0IGNvbnN0IGJ0bkVudGVyQ2hhdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG4tZW50ZXItY2hhdCcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoYXRCbG9ja1dyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlci1jaGF0LWJsb2NrJyk7XHJcbmV4cG9ydCBjb25zdCBjaGF0QmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhdC1ibG9jaycpO1xyXG5leHBvcnQgY29uc3QgbWVzc2FnZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZXMtYmxvY2snKTtcclxuZXhwb3J0IGNvbnN0IHVzZXJzQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcnMtYmxvY2snKTtcclxuZXhwb3J0IGNvbnN0IGlucHV0TWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1tZXNzYWdlJyk7XHJcbmV4cG9ydCBjb25zdCBidG5TZW5kTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXNlbmQtbWVzc2FnZVwiKTtcclxuZXhwb3J0IGNvbnN0IGZvcm1Nc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcm0tbXNnXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrYm94Jyk7XHJcbmV4cG9ydCBjb25zdCBidG5FeGl0RnJvbUNoYXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLWV4aXQtdXNlci1mcm9tLWNoYXQnKTtcclxuZXhwb3J0IGNvbnN0IGJ0blJlbG9hZFVzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuLXJlbG9hZC11c2VyJyk7XHJcblxyXG5idG5Vc2VyTG9naW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG15RnVuc3Rpb24uY2hlY2tMb2dpbkZpbGxpbmcpO1xyXG5idG5Vc2VyRXhpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG15RnVuc3Rpb24udXNlckV4aXQpO1xyXG5idG5FbnRlckNoYXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBteUZ1bnN0aW9uLmdvVG9DaGF0KTtcclxuYnRuUmVsb2FkVXNlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZU5ld0Nvbm5lY3Rpb24pO1xyXG5idG5TZW5kTWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG15RnVuc3Rpb24uc2VuZE1zZyk7XHJcbmJ0bkV4aXRGcm9tQ2hhdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG15RnVuc3Rpb24uY2xvc2VTb2NrZXQpO1xyXG5cclxuZm9ybVVzZXJMb2dpbi5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIG15RnVuc3Rpb24uY2hlY2tMb2dpbkZpbGxpbmcoKTtcclxufSk7XHJcblxyXG5cclxuXHJcbiIsImltcG9ydCB7Z3JlZXRCbG9jaywgZm9ybVVzZXJMb2dpbiwgZ3JlZXRpbmcsIGhlYWRlciwgaW5wdXRVc2VyTG9naW4sIGNoYXRCbG9ja1dyYXBwZXIsIGNvbnRhaW5lciwgYnllYnllLCBibG9ja0Fza0xvZ2luRmlsbGluZywgaW5wdXRNZXNzYWdlLCBtZXNzYWdlcywgY2hlY2tib3h9IGZyb20gJy4vYXBwLmpzJztcclxuaW1wb3J0IHsgY3JlYXRlTmV3Q29ubmVjdGlvbiwgc29ja2V0IH0gZnJvbSAnLi93cy5qcyc7XHJcbmltcG9ydCB7IE9iaiB9IGZyb20gJy4vc2NyaXB0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0xvY2FsU3RvcmFnZSgpIHtcclxuICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJykpIHtcclxuICAgIGdvVG9DaGF0KCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tMb2dpbkZpbGxpbmcoKSB7XHJcbiAgY2hlY2tOb3RFbXB0eUZpZWxkKGlucHV0VXNlckxvZ2luKSA/IHdyaXRlVXNlcm5hbWVUb0xvY2FsU3RvcmFnZSgpIDogYXNrTG9naW5GaWxsaW5nKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja05vdEVtcHR5RmllbGQoaW5wdXRGaWVsZCkge1xyXG4gIGlmIChpbnB1dEZpZWxkLnZhbHVlID09IFwiXCIpIHtcclxuICByZXR1cm4gMDtcclxuICB9IGVsc2Uge1xyXG4gIHJldHVybiAxOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB3cml0ZVVzZXJuYW1lVG9Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgYnllYnllLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgYmxvY2tBc2tMb2dpbkZpbGxpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBncmVldEJsb2NrLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgZm9ybVVzZXJMb2dpbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgaGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcm5hbWUnLCBgJHtpbnB1dFVzZXJMb2dpbi52YWx1ZX1gKTtcclxuICBpbnB1dFVzZXJMb2dpbi52YWx1ZSA9IFwiXCI7XHJcbiAgZ3JlZXRpbmcudGV4dENvbnRlbnQgPSBgSGksICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJyl9YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFza0xvZ2luRmlsbGluZygpIHtcclxuICBieWVieWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBibG9ja0Fza0xvZ2luRmlsbGluZy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBibG9ja0Fza0xvZ2luRmlsbGluZy50ZXh0Q29udGVudCA9IFwiWW91IHNob3VsZCBlbnRlciBUaGUgTmFtZSFcIjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJFeGl0KCkge1xyXG4gIGJ5ZWJ5ZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICBmb3JtVXNlckxvZ2luLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGJ5ZWJ5ZS50ZXh0Q29udGVudCA9IGBCeWVieWUsICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJyl9YDtcclxuICBncmVldEJsb2NrLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdvVG9DaGF0KCkge1xyXG4gIGNyZWF0ZU5ld0Nvbm5lY3Rpb24oKTtcclxuICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBjaGF0QmxvY2tXcmFwcGVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhpdEZyb21DaGF0KCkge1xyXG4gIGNoYXRCbG9ja1dyYXBwZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgaGVhZGVyLnN0eWxlLm1hcmdpbiA9ICcyMHB4IDIwcHggMjBweCA1MHB4JztcclxuICBmb3JtVXNlckxvZ2luLnN0eWxlLm1hcmdpbiA9ICcyMHB4IDIwcHggMjBweCA1MHB4JztcclxuICBcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlU29ja2V0KCkge1xyXG4gIGxldCBtc2dDbG9zZVNvY2tldCA9IG5ldyBPYmooXCJtZXNzYWdlXCIsIFwiXCIsIGAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VybmFtZScpfSDQstGL0YjQtdC7YCk7XHJcbiAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkobXNnQ2xvc2VTb2NrZXQpKTtcclxuICBzZXRUaW1lb3V0KCgpID0+IHtzb2NrZXQuY2xvc2UoMTAwMCwgXCLRgNCw0LHQvtGC0LAg0LfQsNC60L7QvdGH0LXQvdCwXCIpXHJcbiAgfSwgNTAwMCk7XHJcbiAgZXhpdEZyb21DaGF0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZW5kTXNnKCkge1xyXG4gIGxldCBuZXdNc2cgPSBuZXcgT2JqKFwibWVzc2FnZVwiLCBgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcm5hbWUnKX1gLCBgJHtpbnB1dE1lc3NhZ2UudmFsdWV9YCk7XHJcbiAgaWYgKHNvY2tldC5yZWFkeVN0YXRlID09IDEpIHtcclxuICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShuZXdNc2cpKTtcclxuICB9IGVsc2Uge1xyXG4gIHJlcG9ydE5vQ29ubmVjdGlvbigpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVwb3J0Tm9Db25uZWN0aW9uKCkge1xyXG4gIGxldCBwNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBwNC50ZXh0Q29udGVudCA9IFwi0KHQvtC10LTQuNC90LXQvdC40LUg0L3QtSDRg9GB0YLQsNC90L7QstC70LXQvdC+LCDQt9Cw0LvQvtCz0LjQvdGM0YLQtdGB0YxcIjtcclxuICBtZXNzYWdlcy5hcHBlbmQocDQpO1xyXG4gIGlucHV0TWVzc2FnZS52YWx1ZSA9IFwiXCI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja0NoZWNrYm94KCkge1xyXG5pZiAoY2hlY2tib3guY2hlY2tlZCkge1xyXG4gIGNyZWF0ZU5ld0Nvbm5lY3Rpb24oKTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0cmVwb3J0Tm9Db25uZWN0aW9uKCk7XHJcblx0fVxyXG59XHJcbiBcclxuIiwiZXhwb3J0IGNsYXNzIE9iaiB7XHJcbiAgY29uc3RydWN0b3IodHlwZSwgdXNlcm5hbWUsIG1lc3NhZ2UpIHtcclxuICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICB0aGlzLnBheWxvYWQgPSB7IHVzZXJuYW1lLCBtZXNzYWdlIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBpbnB1dE1lc3NhZ2UsIG1lc3NhZ2VzLCBhcnJheU9mTXNnRm9yUmVzZXJ2LCB1c2Vyc0Jsb2NrLCB1c2Vyc0FycmF5fSBmcm9tICcuL2FwcC5qcyc7XHJcbmV4cG9ydCBsZXQgc29ja2V0O1xyXG5pbXBvcnQgeyBPYmogfSBmcm9tICcuL3NjcmlwdCc7XHJcbmltcG9ydCB7IGNoZWNrQ2hlY2tib3gsIGNoZWNrTm90RW1wdHlGaWVsZCB9IGZyb20gJy4vZnVuY3Rpb24uanMnO1xyXG4gXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdDb25uZWN0aW9uKCkge1xyXG4gIHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoXCJ3c3M6Ly9mZXAtYXBwLmhlcm9rdWFwcC5jb20vXCIpO1xyXG4gIGxldCBvbGRNc2c7XHJcblxyXG4gIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWVzc2FnZXMnKSAhPT0gbnVsbCkge1xyXG4gICAgb2xkTXNnID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWVzc2FnZXMnKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgb2xkTXNnID0gW107XHJcbiAgfVxyXG4gIFxyXG4gIHNvY2tldC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIGlucHV0TWVzc2FnZS5wbGFjZWhvbGRlciA9IFwiXCI7XHJcbiAgICBpZiAoY2hlY2tOb3RFbXB0eUZpZWxkKGlucHV0TWVzc2FnZSkgfHwgSlNPTi5wYXJzZShldmVudC5kYXRhKS5wYXlsb2FkLm1lc3NhZ2UgIT09ICcnKXtcclxuICAgIGlucHV0TWVzc2FnZS52YWx1ZSA9IFwiXCI7XHJcbiAgICBhcnJheU9mTXNnRm9yUmVzZXJ2LnB1c2goZXZlbnQuZGF0YSk7XHJcbiAgICBsZXQgYWxsTXNnID0gb2xkTXNnLmNvbmNhdChhcnJheU9mTXNnRm9yUmVzZXJ2KTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtZXNzYWdlcycsIEpTT04uc3RyaW5naWZ5KGFsbE1zZykpO1xyXG4gICAgICB3cml0ZU1zZ1RvTXNnYmxvY2soZXZlbnQuZGF0YSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbnB1dE1lc3NhZ2UucGxhY2Vob2xkZXIgPSBcItCS0LDRiNC1INGB0L7QvtCx0YnQtdC90LjQtVwiO1xyXG4gICAgfVxyXG4gIH1cclxuIFxyXG4gIHNvY2tldC5vbm9wZW4gPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgb2xkTXNnLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgIHdyaXRlTXNnVG9Nc2dibG9jayhpdGVtKTtcclxuICAgIH0pO1xyXG4gICAgbGV0IG1zZ0VudGVyID0gbmV3IE9iaihcIm1lc3NhZ2VcIiwgXCJcIiwgYCR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJyl9INCy0L7RiNC10Lsg0LIg0YfQsNGCYCk7XHJcbiAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShtc2dFbnRlcikpO1xyXG5cclxuICB9XHJcbiAgXHJcbiAgc29ja2V0Lm9uY2xvc2UgPSBmdW5jdGlvbihldnQpIHtcclxuICAgIGlmIChldnQuY29kZSAhPT0gMTAwMCkge1xyXG4gICAgICAgIGNoZWNrQ2hlY2tib3goKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIFxyXG5mdW5jdGlvbiB3cml0ZU1zZ1RvTXNnYmxvY2socGFyc2VPYmopIHtcclxuICBsZXQgdXNlcm5hbWUgPSBKU09OLnBhcnNlKHBhcnNlT2JqKS5wYXlsb2FkLnVzZXJuYW1lO1xyXG4gIGxldCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBsZXQgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgcDEudGV4dENvbnRlbnQgPSB1c2VybmFtZTtcclxuICBwMi50ZXh0Q29udGVudCA9IEpTT04ucGFyc2UocGFyc2VPYmopLnBheWxvYWQubWVzc2FnZTtcclxuICBpZiAodXNlcm5hbWUgPT0gYCR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJyl9YCkge1xyXG4gICAgcDEuc3R5bGUuY29sb3IgPSAnIzUxOTREQic7XHJcbiAgICBwMi5zdHlsZS5jb2xvciA9IFwiIzY2QUVGMlwiO1xyXG4gICAgcDEuc3R5bGUubWFyZ2luID0gYDAgMCAwIDMwcHhgO1xyXG4gICAgcDIuc3R5bGUubWFyZ2luID0gYDAgMCAyMHB4IDMwcHhgO1xyXG4gIH0gZWxzZSBpZiAodXNlcm5hbWUgPT0gJycpIHtcclxuICAgIHAyLnN0eWxlLmNvbG9yID0gXCIjRThFMkNGXCI7XHJcbiAgICBwMi5zdHlsZS5tYXJnaW4gPSBcIjAgMCAyMHB4IDBcIjtcclxuICB9IGVsc2Uge3AxLnN0eWxlLmNvbG9yID0gJyM5QTkzREInO1xyXG4gICAgcDIuc3R5bGUuY29sb3IgPSBcIiNENEE5RjVcIjtcclxuICAgIHAyLnN0eWxlLm1hcmdpbiA9IFwiMCAwIDIwcHggMFwiO1xyXG4gIH1cclxuICBcclxuICBtZXNzYWdlcy5hcHBlbmQocDEpO1xyXG4gIG1lc3NhZ2VzLmFwcGVuZChwMik7XHJcbiAgXHJcbiAgbGV0IGggPSBtZXNzYWdlcy5zY3JvbGxIZWlnaHQ7XHJcbiAgbWVzc2FnZXMuc2Nyb2xsVG9wID0gaDtcclxuICAgIFxyXG4gIGxldCBwNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBpZiAoIXVzZXJzQXJyYXkuaGFzKHVzZXJuYW1lKSAmJiB1c2VybmFtZSAhPT0gYCR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJuYW1lJyl9YCAmJiB1c2VybmFtZSAhPT0gJycpIHtcclxuICBwNS50ZXh0Q29udGVudCA9IEpTT04ucGFyc2UocGFyc2VPYmopLnBheWxvYWQudXNlcm5hbWU7XHJcbiAgdXNlcnNCbG9jay5hcHBlbmQocDUpO1xyXG4gIGxldCBoMSA9IHVzZXJzQmxvY2suc2Nyb2xsSGVpZ2h0O1xyXG4gIHVzZXJzQmxvY2suc2Nyb2xsVG9wID0gaDE7XHJcbiAgdXNlcnNBcnJheS5hZGQodXNlcm5hbWUpO1xyXG4gIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=