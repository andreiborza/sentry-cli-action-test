import * as __WEBPACK_EXTERNAL_MODULE__actions_core_a059c86c__ from "@actions/core";
import * as __WEBPACK_EXTERNAL_MODULE__sentry_cli_66fcec05__ from "@sentry/cli";
/******/ // The require scope
/******/ var __nccwpck_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__nccwpck_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/compat */
/******/ 
/******/ if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = new URL('.', import.meta.url).pathname.slice(import.meta.url.match(/^file:\/\/\/\w:/) ? 1 : 0, -1) + "/";
/******/ 
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: external "@actions/core"
var x = (y) => {
	var x = {}; __nccwpck_require__.d(x, y); return x
} 
var y = (x) => (() => (x))
const core_namespaceObject = x({ ["default"]: () => (__WEBPACK_EXTERNAL_MODULE__actions_core_a059c86c__["default"]) });
;// CONCATENATED MODULE: external "@sentry/cli"
var cli_x = (y) => {
	var x = {}; __nccwpck_require__.d(x, y); return x
} 
var cli_y = (x) => (() => (x))
const cli_namespaceObject = cli_x({ ["default"]: () => (__WEBPACK_EXTERNAL_MODULE__sentry_cli_66fcec05__["default"]) });
;// CONCATENATED MODULE: ./src/index.js



try {
  const cli = new cli_namespaceObject["default"]()
  const sentryMsg = core_namespaceObject["default"].getInput('sentry_msg');
  const cacheHit = core_namespaceObject["default"].getInput('cache_hit');
  console.log('Got cache hit: ', cacheHit)

  console.log(`Sending event to Sentry: ${sentryMsg}`)
  cli.execute(['send-event', '-m', sentryMsg], true)
} catch (error) {
  core_namespaceObject["default"].setFailed(error.message);
}

