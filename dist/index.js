import React, { Component } from 'react';

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn$1(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn$1(this, result);
  };
}

const button=a=>/*#__PURE__*/React.createElement("div",{className:"v360-menu-btns",onClick:a.clicked},/*#__PURE__*/React.createElement("i",{className:a.icon}),a.text);

function styleInject(a,b){void 0===b&&(b={});var c=b.insertAt;if(a&&"undefined"!=typeof document){var d=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css","top"===c?d.firstChild?d.insertBefore(e,d.firstChild):d.appendChild(e):d.appendChild(e),e.styleSheet?e.styleSheet.cssText=a:e.appendChild(document.createTextNode(a));}}

var css_248z = "/*\n    Document   : style.css\n    Created on : Dec 26, 2019\n    Author     : Rajeev R. Gade\n    Description: Stylesheet for 360 viewer\n*/\nbody,\nhtml {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    font-family: sans-serif;\n}\n\nroot {\n    display: block;\n}\n\n.v360-main {\n    width: 100%;\n    height: 100%;\n    max-width: 1024px;\n    margin: 20px auto;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: stretch;\n    align-content: stretch;\n}\n\n/* HEADER */\n\n.v360-header {\n    /* width: calc(100% - 20px); */\n    background-color: #000;\n    padding: 10px;\n    color: #FFFFFF;\n    font-size: 1.5em;\n    text-align: center;\n    font-weight: bold;\n    /* text-shadow: 1px 1px #000000; */\n    flex: 0 1 auto;\n}\n\n/* VIEWER */\n\n#productInsert {\n    background-color: #FFF;\n    width: 100%;\n    height: calc(100vh - 184px);\n    max-height: 768px;\n    position: relative;\n    overflow: hidden;\n}\n\n.v360-fullscreen #productInsert {\n    height: 100vh;\n    max-height: none;\n}\n\n#viewport-wrapper {\n    width: 100%;\n    height: calc(100% - 10px);\n    margin: 5px auto;\n    position: absolute;\n    left: 0;\n    transition: width 0.3s ease;\n}\n.v360-viewport {\n    background-color: #FFF;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    /* position: absolute; */\n    left: 0;\n    /* transition: width 0.3s ease; */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#viewport-wrapper.wide {\n    width: 100%;\n}\n\n.v360-viewport iframe {\n    width: 100%;\n    height: 100%;\n    position: relative;\n    /* left: 50%;\n    -webkit-transform: translateX(-50%) translateY(0);\n    -ms-transform: translateX(-50%) translateY(0);\n    transform: translateX(-50%) translateY(0);\n    transform-origin: center center; */\n}\n\n.v360-viewport img {\n    position: relative;\n}\n\n\n/* FULLSCREEN & MENU TOGGLE BUTTONS */\n\n.v360-fullscreen-toggle{\n    width: 30px;\n    height: 30px;\n    margin: 15px;\n    position: absolute;\n    /* color: #999;\n    fill: #999; */\n    float: right;\n    cursor: pointer;\n    top: 0;\n    right: 0;\n    z-index: 150;\n}\n\n.v360-fullscreen-toggle:hover {\n    fill: #000;\n}\n/*\n.v360-fullscreen-toggle div:last-child {\n    display: none;\n} */\n\n.v360-fullscreen {\n    z-index: 9999;\n    width: 100%;\n    max-width: none;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    position: fixed;\n    top: 0;\n    left: 0;\n}\n\n.v360-fullscreen .v360-header,\n.v360-fullscreen #v360-menu-btns {\n    border-radius: 0;\n}\n\n.v360-fullscreen productInsert {\n    height: calc(100vh - 95px);\n    max-height: none;\n}\n\n.ui-accordion-header {\n    background-color: #B0BEC5;\n    outline: none;\n    line-height: 1.5em;\n    transition: all 0.3s ease;\n}\n\n.ui-accordion-header:hover,\n.ui-accordion-header.ui-state-active {\n    background-color: #607D8B;\n    color: #FFF;\n}\n\n/* MENU BUTTONS */\n\n#v360-menu-btns {\n    width: 100%;\n    padding: 5px 0;\n    text-align: center;\n    /* position: absolute; */\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    z-index: 150;\n}\n\n.light{\n    background-color: #fff !important;\n}\n\n.dark{\n    background-color: #000 !important;\n}\n\n.v360-menu-btns {\n    /* background-color: #999; */\n    width: auto;\n    min-height: 20px;\n    margin: 5px 5px;\n    padding: 5px 10px;\n    border-radius: 5px;\n    outline: none;\n    font-size: 1.3em;\n    text-align: center;\n    line-height: 1em;\n    cursor: pointer;\n    user-select: none;\n    position: relative;\n    display: inline-block;\n    opacity: 1;\n}\n/*\n.v360-btn-active{\n    background-color: #000;\n} */\n\n.light .v360-menu-btns {\n    color: #000;\n}\n\n.dark .v360-menu-btns {\n    color: #fff;\n}\n\n/* .light .v360-btn-active{\n    color: #fff;\n} */\n\n.light .v360-menu-btns:hover {\n    color: #fff;\n    background-color: #000;\n}\n\n.dark .v360-menu-btns:hover {\n    color: #000;\n    background-color: #fff;\n}\n\n.v360-main {\n    filter: alpha(opacity=50);\n    /* opacity: 0.5; */\n    cursor: default;\n    /* pointer-events: none; */\n}\n\n#v360-image-container {\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    position: relative;\n}\n\n.v360-image-container {\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n    position: relative;\n}\n\n.v360-product-box-shadow{\n    position: absolute;\n    /* z-index: 99; */\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    box-shadow: rgb(34, 34, 34) 0px 0px 100px inset;\n}\n\n.v360-fullscreen-toggle-btn i{\n    /* background-color: #fff; */\n    font-size: 20px;\n}\n.v360-spinner-grow{\n    display: inline-block;\n    width: 2rem;\n    height: 2rem;\n    vertical-align: text-bottom;\n    background-color: rgb(33, 37, 41);\n    border-radius: 50%;\n    opacity: 0;\n    -webkit-animation: spinner-grow .75s linear infinite;\n    animation: spinner-grow .75s linear infinite;\n}\n.v360-percentage-description{\n    margin-left: 2rem;\n}\n\n\n/* Tooltip */\n\n.tooltip {\n    position: relative;\n    display: inline-block;\n  }\n\n  .tooltip .tooltiptext {\n    visibility: hidden;\n    width: 120px;\n    background-color: #555;\n    color: #fff;\n    text-align: center;\n    border-radius: 6px;\n    padding: 5px 0;\n    position: absolute;\n    z-index: 1;\n    bottom: 125%;\n    left: 50%;\n    margin-left: -60px;\n    opacity: 0;\n    transition: opacity 0.3s;\n  }\n\n  .tooltip .tooltiptext::after {\n    content: \"\";\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -5px;\n    border-width: 5px;\n    border-style: solid;\n    border-color: #555 transparent transparent transparent;\n  }\n\n  .tooltip:hover .tooltiptext {\n    visibility: visible;\n    opacity: 1;\n  }\n\n  .tooltip{\n    opacity: 1 !important;\n  }\n\n  /* .hotspot-button{\n      position: absolute;\n  } */\n\n  .sr-only:not(:focus):not(:active) {\n    clip: rect(0 0 0 0);\n    clip-path: inset(50%);\n    height: 1px;\n    overflow: hidden;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n  }\n";
styleInject(css_248z);

var propTypes = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_production_min;

function requireReactIs_production_min () {
	if (hasRequiredReactIs_production_min) return reactIs_production_min;
	hasRequiredReactIs_production_min = 1;
var b="function"==typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;function z(b){if("object"==typeof b&&null!==b){var i=b.$$typeof;switch(i){case c:switch(b=b.type,b){case l:case m:case e:case g:case f:case p:return b;default:switch(b=b&&b.$$typeof,b){case k:case n:case t:case r:case h:return b;default:return i;}}case d:return i;}}}function A(b){return z(b)===m}reactIs_production_min.AsyncMode=l,reactIs_production_min.ConcurrentMode=m,reactIs_production_min.ContextConsumer=k,reactIs_production_min.ContextProvider=h,reactIs_production_min.Element=c,reactIs_production_min.ForwardRef=n,reactIs_production_min.Fragment=e,reactIs_production_min.Lazy=t,reactIs_production_min.Memo=r,reactIs_production_min.Portal=d,reactIs_production_min.Profiler=g,reactIs_production_min.StrictMode=f,reactIs_production_min.Suspense=p,reactIs_production_min.isAsyncMode=function(b){return A(b)||z(b)===l},reactIs_production_min.isConcurrentMode=A,reactIs_production_min.isContextConsumer=function(b){return z(b)===k},reactIs_production_min.isContextProvider=function(b){return z(b)===h},reactIs_production_min.isElement=function(b){return "object"==typeof b&&null!==b&&b.$$typeof===c},reactIs_production_min.isForwardRef=function(b){return z(b)===n},reactIs_production_min.isFragment=function(b){return z(b)===e},reactIs_production_min.isLazy=function(b){return z(b)===t},reactIs_production_min.isMemo=function(b){return z(b)===r},reactIs_production_min.isPortal=function(b){return z(b)===d},reactIs_production_min.isProfiler=function(b){return z(b)===g},reactIs_production_min.isStrictMode=function(b){return z(b)===f},reactIs_production_min.isSuspense=function(b){return z(b)===p},reactIs_production_min.isValidElementType=function(b){return "string"==typeof b||"function"==typeof b||b===e||b===m||b===g||b===f||b===p||b===q||"object"==typeof b&&null!==b&&(b.$$typeof===t||b.$$typeof===r||b.$$typeof===h||b.$$typeof===k||b.$$typeof===n||b.$$typeof===w||b.$$typeof===x||b.$$typeof===y||b.$$typeof===v)},reactIs_production_min.typeOf=z;
	return reactIs_production_min;
}

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;
"production"!==process.env.NODE_ENV&&function(){	// nor polyfill, then a plain number is used for performance.
	function a(a){if("object"==typeof a&&null!==a){var b=a.$$typeof;switch(b){case d:var c=a.type;switch(c){case k:case l:case f:case h:case g:case n:return c;default:var o=c&&c.$$typeof;return o===j||o===m||o===q||o===p||o===i?o:b;}case e:return b;}}}// AsyncMode is deprecated along with isAsyncMode
	function b(b){return a(b)===l}var c="function"==typeof Symbol&&Symbol.for,d=c?Symbol.for("react.element"):60103,e=c?Symbol.for("react.portal"):60106,f=c?Symbol.for("react.fragment"):60107,g=c?Symbol.for("react.strict_mode"):60108,h=c?Symbol.for("react.profiler"):60114,i=c?Symbol.for("react.provider"):60109,j=c?Symbol.for("react.context"):60110,k=c?Symbol.for("react.async_mode"):60111,l=c?Symbol.for("react.concurrent_mode"):60111,m=c?Symbol.for("react.forward_ref"):60112,n=c?Symbol.for("react.suspense"):60113,o=c?Symbol.for("react.suspense_list"):60120,p=c?Symbol.for("react.memo"):60115,q=c?Symbol.for("react.lazy"):60116,r=c?Symbol.for("react.block"):60121,s=c?Symbol.for("react.fundamental"):60117,t=c?Symbol.for("react.responder"):60118,u=c?Symbol.for("react.scope"):60119,v=!1;reactIs_development.AsyncMode=k,reactIs_development.ConcurrentMode=l,reactIs_development.ContextConsumer=j,reactIs_development.ContextProvider=i,reactIs_development.Element=d,reactIs_development.ForwardRef=m,reactIs_development.Fragment=f,reactIs_development.Lazy=q,reactIs_development.Memo=p,reactIs_development.Portal=e,reactIs_development.Profiler=h,reactIs_development.StrictMode=g,reactIs_development.Suspense=n,reactIs_development.isAsyncMode=// AsyncMode should be deprecated
	function d(c){return v||(v=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),b(c)||a(c)===k},reactIs_development.isConcurrentMode=b,reactIs_development.isContextConsumer=function c(b){return a(b)===j},reactIs_development.isContextProvider=function c(b){return a(b)===i},reactIs_development.isElement=function b(a){return "object"==typeof a&&null!==a&&a.$$typeof===d},reactIs_development.isForwardRef=function c(b){return a(b)===m},reactIs_development.isFragment=function c(b){return a(b)===f},reactIs_development.isLazy=function c(b){return a(b)===q},reactIs_development.isMemo=function c(b){return a(b)===p},reactIs_development.isPortal=function c(b){return a(b)===e},reactIs_development.isProfiler=function c(b){return a(b)===h},reactIs_development.isStrictMode=function c(b){return a(b)===g},reactIs_development.isSuspense=function c(b){return a(b)===n},reactIs_development.isValidElementType=function b(a){return "string"==typeof a||"function"==typeof a||// Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	a===f||a===l||a===h||a===g||a===n||a===o||"object"==typeof a&&null!==a&&(a.$$typeof===q||a.$$typeof===p||a.$$typeof===i||a.$$typeof===j||a.$$typeof===m||a.$$typeof===s||a.$$typeof===t||a.$$typeof===u||a.$$typeof===r)},reactIs_development.typeOf=a;}();
	return reactIs_development;
}

var reactIs;
var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs;
	hasRequiredReactIs = 1;
reactIs="production"===process.env.NODE_ENV?requireReactIs_production_min():requireReactIs_development();
	return reactIs;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;
/* eslint-disable no-unused-vars */var getOwnPropertySymbols=Object.getOwnPropertySymbols,hasOwnProperty=Object.prototype.hasOwnProperty,propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(a){if(null===a||a===void 0)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(a)}function shouldUseNative(){var a=String.fromCharCode;try{if(!Object.assign)return !1;// Detect buggy property enumeration order in older V8 versions.
	// https://bugs.chromium.org/p/v8/issues/detail?id=4118
	var b=new String("abc");// eslint-disable-line no-new-wrappers
	if(b[5]="de","5"===Object.getOwnPropertyNames(b)[0])return !1;// https://bugs.chromium.org/p/v8/issues/detail?id=3056
	for(var c={},d=0;10>d;d++)c["_"+a(d)]=d;var e=Object.getOwnPropertyNames(c).map(function(a){return c[a]});if("0123456789"!==e.join(""))return !1;// https://bugs.chromium.org/p/v8/issues/detail?id=3056
	var f={};return ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"].forEach(function(a){f[a]=a;}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},f)).join("")}catch(a){// We don't expect any of the above to throw, but better to be safe.
	return !1}}objectAssign=shouldUseNative()?Object.assign:function(a){for(var b,c,d=toObject(a),e=1;e<arguments.length;e++){for(var f in b=Object(arguments[e]),b)hasOwnProperty.call(b,f)&&(d[f]=b[f]);if(getOwnPropertySymbols){c=getOwnPropertySymbols(b);for(var g=0;g<c.length;g++)propIsEnumerable.call(b,c[g])&&(d[c[g]]=b[c[g]]);}}return d};
	return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;
ReactPropTypesSecret_1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
	return ReactPropTypesSecret_1;
}

var has;
var hasRequiredHas;

function requireHas () {
	if (hasRequiredHas) return has;
	hasRequiredHas = 1;
	has=Function.call.bind(Object.prototype.hasOwnProperty);
	return has;
}

var checkPropTypes = {exports: {}};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes.exports;
	hasRequiredCheckPropTypes = 1;
var printWarning=function(){};if("production"!==process.env.NODE_ENV){var ReactPropTypesSecret=requireReactPropTypesSecret(),loggedTypeFailures={},has=requireHas();printWarning=function(a){var b="Warning: "+a;"undefined"!=typeof console&&console.error(b);try{// --- Welcome to debugging React ---
	// This error was thrown as a convenience so that you can use this stack
	// to find the callsite that caused this warning to fire.
	throw new Error(b)}catch(a){/**/}};}/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */function checkPropTypes$1(a,b,c,d,e){if("production"!==process.env.NODE_ENV)for(var f in a)if(has(a,f)){var g;// Prop type validation may throw. In case they do, we don't want to
	// fail the render phase where it didn't fail before. So we log it.
	// After these have been cleaned up, we'll let them throw.
	try{// This is intentionally an invariant that gets caught. It's the same
	// behavior as without this statement except with a better message.
	if("function"!=typeof a[f]){var h=Error((d||"React class")+": "+c+" type `"+f+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof a[f]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw h.name="Invariant Violation",h}g=a[f](b,f,d,c,null,ReactPropTypesSecret);}catch(a){g=a;}if(g&&!(g instanceof Error)&&printWarning((d||"React class")+": type specification of "+c+" `"+f+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof g+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),g instanceof Error&&!(g.message in loggedTypeFailures)){loggedTypeFailures[g.message]=!0;var i=e?e():"";printWarning("Failed "+c+" type: "+g.message+(null==i?"":i));}}}/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */checkPropTypes$1.resetWarningCache=function(){"production"!==process.env.NODE_ENV&&(loggedTypeFailures={});},checkPropTypes.exports=checkPropTypes$1;
	return checkPropTypes.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;
var ReactIs=requireReactIs(),assign=requireObjectAssign(),ReactPropTypesSecret=requireReactPropTypesSecret(),has=requireHas(),checkPropTypes=requireCheckPropTypes(),printWarning=function(){};"production"!==process.env.NODE_ENV&&(printWarning=function(a){var b="Warning: "+a;"undefined"!=typeof console&&console.error(b);try{// --- Welcome to debugging React ---
	// This error was thrown as a convenience so that you can use this stack
	// to find the callsite that caused this warning to fire.
	throw new Error(b)}catch(a){}});function emptyFunctionThatReturnsNull(){return null}factoryWithTypeCheckers=function(a,b){// Before Symbol spec.
	/**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */function c(a){var b=a&&(o&&a[o]||a["@@iterator"]);if("function"==typeof b)return b}/**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */ /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */ /*eslint-disable no-self-compare*/function d(a,b){// SameValue algorithm
	return a===b?0!==a||1/a==1/b:a!==a&&b!==b}/*eslint-enable no-self-compare*/ /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */function e(a,b){this.message=a,this.data=b&&"object"==typeof b?b:{},this.stack="";}// Make `instanceof Error` still work for returned errors.
	function f(a){function c(c,g,h,i,j,k,l){if(i=i||"<<anonymous>>",k=k||h,l!==ReactPropTypesSecret)if(b){// New behavior only for users of `prop-types` package
	var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}else if("production"!==process.env.NODE_ENV&&"undefined"!=typeof console){// Old behavior for people using React.PropTypes
	var n=i+":"+h;!d[n]&&// Avoid spamming the console because they are often not actionable except for lib authors
	3>f&&(printWarning("You are manually calling a React.PropTypes validation function for the `"+k+"` prop on `"+i+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),d[n]=!0,f++);}return null==g[h]?c?null===g[h]?new e("The "+j+" `"+k+"` is marked as required "+("in `"+i+"`, but its value is `null`.")):new e("The "+j+" `"+k+"` is marked as required in "+("`"+i+"`, but its value is `undefined`.")):null:a(g,h,i,j,k)}if("production"!==process.env.NODE_ENV)var d={},f=0;var g=c.bind(null,!1);return g.isRequired=c.bind(null,!0),g}function g(a){function b(b,c,d,f,g,h){var i=b[c],j=k(i);if(j!==a){// `propValue` being instance of, say, date/regexp, pass the 'object'
	// check, but we can offer a more precise error message here rather than
	// 'of type `object`'.
	var m=l(i);return new e("Invalid "+f+" `"+g+"` of type "+("`"+m+"` supplied to `"+d+"`, expected ")+("`"+a+"`."),{expectedType:a})}return null}return f(b)}function h(a,b,c,d,f){return new e((a||"React class")+": "+b+" type `"+c+"."+d+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+f+"`.")}function i(b){switch(typeof b){case"number":case"string":case"undefined":return !0;case"boolean":return !b;case"object":if(Array.isArray(b))return b.every(i);if(null===b||a(b))return !0;var d=c(b);if(d){var e,f=d.call(b);if(d!==b.entries){for(;!(e=f.next()).done;)if(!i(e.value))return !1;}else// Iterator will provide entry [k,v] tuples rather than values.
	for(;!(e=f.next()).done;){var g=e.value;if(g&&!i(g[1]))return !1}}else return !1;return !0;default:return !1;}}function j(a,b){// Native Symbol.
	return "symbol"===a||!!b&&("Symbol"===b["@@toStringTag"]||!!("function"==typeof Symbol&&b instanceof Symbol));// falsy value can't be a Symbol
	// 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	// Fallback for non-spec compliant Symbols which are polyfilled.
	}// Equivalent of `typeof` but with special handling for array and regexp.
	function k(a){var b=typeof a;return Array.isArray(a)?"array":a instanceof RegExp?"object":j(b,a)?"symbol":b}// This handles more types than `getPropType`. Only used for error messages.
	// See `createPrimitiveTypeChecker`.
	function l(a){if("undefined"==typeof a||null===a)return ""+a;var b=k(a);if("object"===b){if(a instanceof Date)return "date";if(a instanceof RegExp)return "regexp"}return b}// Returns a string that is postfixed to a warning about an invalid type.
	// For example, "undefined" or "of type array"
	function m(a){var b=l(a);return "array"===b||"object"===b?"an "+b:"boolean"===b||"date"===b||"regexp"===b?"a "+b:b}// Returns class name of the object, if any.
	function n(a){return a.constructor&&a.constructor.name?a.constructor.name:"<<anonymous>>"}/* global Symbol */var o="function"==typeof Symbol&&Symbol.iterator,p={array:g("array"),bigint:g("bigint"),bool:g("boolean"),func:g("function"),number:g("number"),object:g("object"),string:g("string"),symbol:g("symbol"),any:function a(){return f(emptyFunctionThatReturnsNull)}(),arrayOf:function b(a){function c(b,c,d,f,g){if("function"!=typeof a)return new e("Property `"+g+"` of component `"+d+"` has invalid PropType notation inside arrayOf.");var h=b[c];if(!Array.isArray(h)){var j=k(h);return new e("Invalid "+f+" `"+g+"` of type "+("`"+j+"` supplied to `"+d+"`, expected an array."))}for(var l,m=0;m<h.length;m++)if(l=a(h,m,d,f,g+"["+m+"]",ReactPropTypesSecret),l instanceof Error)return l;return null}return f(c)},element:function b(){function c(b,c,d,f,g){var h=b[c];if(!a(h)){var i=k(h);return new e("Invalid "+f+" `"+g+"` of type "+("`"+i+"` supplied to `"+d+"`, expected a single ReactElement."))}return null}return f(c)}(),elementType:function a(){function b(a,b,c,d,f){var g=a[b];if(!ReactIs.isValidElementType(g)){var h=k(g);return new e("Invalid "+d+" `"+f+"` of type "+("`"+h+"` supplied to `"+c+"`, expected a single ReactElement type."))}return null}return f(b)}(),instanceOf:function b(a){function c(b,c,d,f,g){if(!(b[c]instanceof a)){var h=a.name||"<<anonymous>>",i=n(b[c]);return new e("Invalid "+f+" `"+g+"` of type "+("`"+i+"` supplied to `"+d+"`, expected ")+("instance of `"+h+"`."))}return null}return f(c)},node:function a(){function b(a,b,c,d,f){return i(a[b])?null:new e("Invalid "+d+" `"+f+"` supplied to "+("`"+c+"`, expected a ReactNode."))}return f(b)}(),objectOf:function b(a){function c(b,c,d,f,g){if("function"!=typeof a)return new e("Property `"+g+"` of component `"+d+"` has invalid PropType notation inside objectOf.");var h=b[c],i=k(h);if("object"!==i)return new e("Invalid "+f+" `"+g+"` of type "+("`"+i+"` supplied to `"+d+"`, expected an object."));for(var j in h)if(has(h,j)){var l=a(h,j,d,f,g+"."+j,ReactPropTypesSecret);if(l instanceof Error)return l}return null}return f(c)},oneOf:function b(a){function c(b,c,f,g,h){for(var j=b[c],k=0;k<a.length;k++)if(d(j,a[k]))return null;var m=JSON.stringify(a,function c(a,b){var d=l(b);return "symbol"===d?b+"":b});return new e("Invalid "+g+" `"+h+"` of value `"+(j+"` ")+("supplied to `"+f+"`, expected one of "+m+"."))}return Array.isArray(a)?f(c):("production"!==process.env.NODE_ENV&&(1<arguments.length?printWarning("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):printWarning("Invalid argument supplied to oneOf, expected an array.")),emptyFunctionThatReturnsNull)},oneOfType:function b(a){function c(b,c,d,f,g){for(var h=[],j=0;j<a.length;j++){var k=a[j],l=k(b,c,d,f,g,ReactPropTypesSecret);if(null==l)return null;l.data&&has(l.data,"expectedType")&&h.push(l.data.expectedType);}var m=0<h.length?", expected one of type ["+h.join(", ")+"]":"";return new e("Invalid "+f+" `"+g+"` supplied to "+("`"+d+"`"+m+"."))}if(!Array.isArray(a))return "production"===process.env.NODE_ENV?void 0:printWarning("Invalid argument supplied to oneOfType, expected an instance of array."),emptyFunctionThatReturnsNull;for(var d,g=0;g<a.length;g++)if(d=a[g],"function"!=typeof d)return printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+m(d)+" at index "+g+"."),emptyFunctionThatReturnsNull;return f(c)},shape:function b(a){function c(b,c,d,f,g){var i=b[c],j=k(i);if("object"!==j)return new e("Invalid "+f+" `"+g+"` of type `"+j+"` "+("supplied to `"+d+"`, expected `object`."));for(var m in a){var n=a[m];if("function"!=typeof n)return h(d,f,g,m,l(n));var o=n(i,m,d,f,g+"."+m,ReactPropTypesSecret);if(o)return o}return null}return f(c)},exact:function b(a){function c(b,c,d,f,g){var i=b[c],j=k(i);if("object"!==j)return new e("Invalid "+f+" `"+g+"` of type `"+j+"` "+("supplied to `"+d+"`, expected `object`."));// We need to check all keys in case some are required but missing from props.
	var m=assign({},b[c],a);for(var n in m){var o=a[n];if(has(a,n)&&"function"!=typeof o)return h(d,f,g,n,l(o));if(!o)return new e("Invalid "+f+" `"+g+"` key `"+n+"` supplied to `"+d+"`.\nBad object: "+JSON.stringify(b[c],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(a),null,"  "));var p=o(i,n,d,f,g+"."+n,ReactPropTypesSecret);if(p)return p}return null}return f(c)}};return e.prototype=Error.prototype,p.checkPropTypes=checkPropTypes,p.resetWarningCache=checkPropTypes.resetWarningCache,p.PropTypes=p,p};
	return factoryWithTypeCheckers;
}

var factoryWithThrowingShims = {exports: {}};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredFactoryWithThrowingShims;

function requireFactoryWithThrowingShims () {
	if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims.exports;
	hasRequiredFactoryWithThrowingShims = 1;
var ReactPropTypesSecret=requireReactPropTypesSecret();function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,factoryWithThrowingShims.exports=function(){function a(a,b,c,d,e,f){if(f!==ReactPropTypesSecret)// It is still safe when called from React.
	{var g=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw g.name="Invariant Violation",g}}function b(){return a}a.isRequired=a;// Important!
	// Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	var c={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:b,element:a,elementType:a,instanceOf:b,node:a,objectOf:b,oneOf:b,oneOfType:b,shape:b,exact:b,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};return c.PropTypes=c,c};
	return factoryWithThrowingShims.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if("production"!==process.env.NODE_ENV){var ReactIs=requireReactIs(),throwOnDirectAccess=!0;// By explicitly using `prop-types` you are opting into new development behavior.
// http://fb.me/prop-types-in-prod
propTypes.exports=requireFactoryWithTypeCheckers()(ReactIs.isElement,throwOnDirectAccess);}else// By explicitly using `prop-types` you are opting into new production behavior.
// http://fb.me/prop-types-in-prod
propTypes.exports=requireFactoryWithThrowingShims()();

var _createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c);}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b&&("object"==typeof b||"function"==typeof b)?b:a}function _inherits(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function, not "+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b);}// require('hammerjs') when in a browser. This is safe because Hammer is only
// invoked in componentDidMount, which is not executed on the server.
var Hammer="undefined"==typeof window?void 0:require("hammerjs"),privateProps={children:!0,direction:!0,options:!0,recognizeWith:!0,vertical:!0},handlerToEvent={action:"tap press",onDoubleTap:"doubletap",onPan:"pan",onPanCancel:"pancancel",onPanEnd:"panend",onPanStart:"panstart",onPinch:"pinch",onPinchCancel:"pinchcancel",onPinchEnd:"pinchend",onPinchIn:"pinchin",onPinchOut:"pinchout",onPinchStart:"pinchstart",onPress:"press",onPressUp:"pressup",onRotate:"rotate",onRotateCancel:"rotatecancel",onRotateEnd:"rotateend",onRotateMove:"rotatemove",onRotateStart:"rotatestart",onSwipe:"swipe",onSwipeRight:"swiperight",onSwipeLeft:"swipeleft",onSwipeUp:"swipeup",onSwipeDown:"swipedown",onTap:"tap"};Object.keys(handlerToEvent).forEach(function(a){privateProps[a]=!0;});function updateHammer(a,b){b.hasOwnProperty("vertical")&&console.warn("vertical is deprecated, please use `direction` instead");var c=b.direction;if(c||b.hasOwnProperty("vertical")){var d=c?c:b.vertical?"DIRECTION_ALL":"DIRECTION_HORIZONTAL";a.get("pan").set({direction:Hammer[d]}),a.get("swipe").set({direction:Hammer[d]});}b.options&&Object.keys(b.options).forEach(function(c){if("recognizers"===c)Object.keys(b.options.recognizers).forEach(function(c){var d=a.get(c);d.set(b.options.recognizers[c]),b.options.recognizers[c].requireFailure&&d.requireFailure(b.options.recognizers[c].requireFailure);},this);else {var d={};d[c]=b.options[c],a.set(d);}},this),b.recognizeWith&&Object.keys(b.recognizeWith).forEach(function(c){var d=a.get(c);d.recognizeWith(b.recognizeWith[c]);},this),Object.keys(b).forEach(function(c){var d=handlerToEvent[c];d&&(a.off(d),a.on(d,b[c]));});}var HammerComponent=function(a){function b(){return _classCallCheck(this,b),_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).apply(this,arguments))}return _inherits(b,a),_createClass(b,[{key:"componentDidMount",value:function(){this.hammer=new Hammer(this.domElement),updateHammer(this.hammer,this.props);}},{key:"componentDidUpdate",value:function(){this.hammer&&updateHammer(this.hammer,this.props);}},{key:"componentWillUnmount",value:function(){this.hammer&&(this.hammer.stop(),this.hammer.destroy()),this.hammer=null;}},{key:"render",value:function(){var a={};Object.keys(this.props).forEach(function(b){privateProps[b]||(a[b]=this.props[b]);},this);var b=this;// Reuse the child provided
// This makes it flexible to use whatever element is wanted (div, ul, etc)
return a.ref=function(a){b.props.ref&&b.props.ref(a),b.domElement=a;},/*#__PURE__*/React.cloneElement(React.Children.only(this.props.children),a)}}]),b}(React.Component);HammerComponent.displayName="Hammer",HammerComponent.propTypes={className:propTypes.exports.string};

var React360Viewer=/*#__PURE__*/function(a){function b(a){var d;return _classCallCheck$1(this,b),d=c.call(this,a),_defineProperty(_assertThisInitialized(d),"updateDimensions",function(){d.setImage();}),_defineProperty(_assertThisInitialized(d),"startDragging",function(a){d.dragging=!0,document.body.style.mozUserSelect=document.body.style.webkitUserSelect=document.body.style.userSelect="none",d.setLastPositions(a),d.dragStart=d.ctx.transformedPoint(d.state.lastX,d.state.lastY);}),_defineProperty(_assertThisInitialized(d),"doDragging",function(a){if(d.setLastPositions(a),d.dragStart){var b=d.ctx.transformedPoint(d.state.lastX,d.state.lastY);d.ctx.translate(b.x-d.dragStart.x,b.y-d.dragStart.y),d.redraw();}}),_defineProperty(_assertThisInitialized(d),"stopDragging",function(){d.dragging=!1,d.dragStart=null;}),_defineProperty(_assertThisInitialized(d),"prev",function(){d.isTruthy(d.props.spinReverse)?d.turnRight():d.turnLeft();}),_defineProperty(_assertThisInitialized(d),"next",function(){d.isTruthy(d.props.spinReverse)?d.turnLeft():d.turnRight();}),_defineProperty(_assertThisInitialized(d),"resetPosition",function(){var a=d.updateCallback(d.activeImage);d.currentScale=1,d.activeImage=d.props.overrideImage||1,a(d.activeImage),d.setImage(!0);}),_defineProperty(_assertThisInitialized(d),"updateCallback",function(a){return function(){return d.props.onUpdate&&d.props.onUpdate({index:a-1,image:d.images[d.activeImage-1]},{index:d.activeImage-1,image:d.images[d.activeImage-1]})}}),_defineProperty(_assertThisInitialized(d),"zoomImage",function(a){if(d.isTruthy(d.props.allowZoom)){d.setState({lastX:a.offsetX||a.pageX-d.canvas.offsetLeft,lastY:a.offsetY||a.pageY-d.canvas.offsetTop});var b=a.wheelDelta?a.wheelDelta/40:a.deltaY?-a.deltaY:0;b&&d.zoom(b);}}),_defineProperty(_assertThisInitialized(d),"zoomIn",function(){d.setState({lastX:d.centerX,lastY:d.centerY}),d.zoom(2);}),_defineProperty(_assertThisInitialized(d),"zoomOut",function(){d.setState({lastX:d.centerX,lastY:d.centerY}),d.zoom(-2);}),_defineProperty(_assertThisInitialized(d),"startMoving",function(a){d.movement=!0,d.movementStart=a.pageX,d.viewPortElementRef.style.cursor="grabbing";}),_defineProperty(_assertThisInitialized(d),"doMoving",function(a){d.movement&&d.onMove(a.clientX);}),_defineProperty(_assertThisInitialized(d),"stopMoving",function(){d.movement=!1,d.movementStart=0,d.viewPortElementRef.style.cursor="grab";}),_defineProperty(_assertThisInitialized(d),"touchStart",function(a){d.movementStart=a.touches[0].clientX;}),_defineProperty(_assertThisInitialized(d),"touchMove",function(a){d.onMove(a.touches[0].clientX);}),_defineProperty(_assertThisInitialized(d),"touchEnd",function(){d.movementStart=0;}),_defineProperty(_assertThisInitialized(d),"play",function(){d.setState({loopTimeoutId:window.setInterval(function(){return d.loopImages()},100)});}),_defineProperty(_assertThisInitialized(d),"togglePlay",function(){d.setState({playing:!d.state.playing});}),_defineProperty(_assertThisInitialized(d),"togglePanMode",function(){d.setState({panmode:!d.state.panmode});}),_defineProperty(_assertThisInitialized(d),"toggleFullScreen",function(){d.setState({isFullScreen:!d.state.isFullScreen});}),_defineProperty(_assertThisInitialized(d),"handlePinch",function(a){a.scale<d.currentScale?d.zoomIn():a.scale>d.currentScale&&d.zoomOut();}),_defineProperty(_assertThisInitialized(d),"pinchOut",function(){d.currentScale=1;}),d.viewPercentageRef=/*#__PURE__*/React.createRef(),d.viewPortElementRef=/*#__PURE__*/React.createRef(),d.canvas=null,d.ctx=null,d.isMobile=!1,d.imageData=[],d.images=[],d.loadedImages=0,d.viewerPercentage=null,d.currentImage=null,d.currentLeftPosition=d.currentTopPosition=0,d.currentCanvasImage=null,d.centerX=0,d.centerY=0,d.movementStart=0,d.movement=!1,d.speedFactor=13,d.activeImage=1,d.stopAtEdges=!1,d.state={lastX:0,lastY:0,minScale:.5,maxScale:4,scale:.2,customOffset:10,currentScale:1,currentTopPosition:0,currentLeftPosition:0,selectMenuOption:1,currentImage:null,dragging:!1,canvas:null,ctx:null,dragStart:null,currentCanvasImage:null,isFullScreen:!1,viewPortElementWidth:null,movementStart:0,movement:!1,dragSpeed:150,speedFactor:13,activeImage:d.props.overrideImage||1,stopAtEdges:!1,panmode:!1,currentLoop:0,loopTimeoutId:0,playing:!1,imagesLoaded:!1},d}_inherits$1(b,a);var c=_createSuper(b);return _createClass$1(b,[{key:"componentDidMount",value:function componentDidMount(){window.addEventListener("resize",this.updateDimensions),this.disableZoomin(),this.viewerPercentage=this.viewPercentageRef.current,this.viewPortElementRef=this.viewerContainerRef.getElementsByClassName("v360-viewport-container")[0],this.fetchData();}},{key:"componentWillUnmount",value:function componentWillUnmount(){window.removeEventListener("resize",this.updateDimensions);}},{key:"fetchData",value:function fetchData(){for(var d=1;d<=this.props.amount;d++){var a=this.props.paddingIndex?this.lpad(d,"0",2):d,b=this.props.fileName.replace("{index}",a),c="".concat(this.props.imagePath,"/").concat(b).replace(/[^:][/]{2,}/,"/");this.imageData.push(c);}this.preloadImages();}},{key:"isTruthy",value:function isTruthy(a){return !0===a||"string"==typeof a&&"true"===a.toLowerCase()}},{key:"lpad",value:function lpad(a,b,c){for(a=a.toString();a.length<c;)a=b+a;return a}},{key:"preloadImages",value:function preloadImages(){var a=this;if(this.imageData.length)try{this.imageData.forEach(function(b){a.addImage(b);});}catch(a){console.error("Something went wrong while loading images: ".concat(a.message));}else console.log("No Images Found");}},{key:"addImage",value:function addImage(a){var b=new Image;b.src=a,b.onload=this.onImageLoad.bind(this),b.onerror=this.onImageLoad.bind(this),this.images.push(b);}},{key:"onImageLoad",value:function onImageLoad(a){var b=Math.round,c=b(100*(this.loadedImages/this.props.amount));this.loadedImages+=1,this.updatePercentageInLoader(c),this.loadedImages===this.props.amount?this.onAllImagesLoaded(a):1===this.loadedImages&&console.log("load first image");}},{key:"updatePercentageInLoader",value:function updatePercentageInLoader(a){this.viewerPercentage.innerHTML=a+"%";}},{key:"onAllImagesLoaded",value:function onAllImagesLoaded(){this.setState({imagesLoaded:!0}),this.props.onLoaded&&this.props.onLoaded(this.images),this.initData();}},{key:"initData",value:function initData(){this.canvas=this.imageContainerRef,this.ctx=this.canvas.getContext("2d"),this.attachEvents(),this.checkMobile(),this.loadInitialImage(),this.setState({playing:this.props.autoplay});}},{key:"attachEvents",value:function attachEvents(){this.state.panmode?this.bindPanModeEvents():this.bind360ModeEvents();}},{key:"bindPanModeEvents",value:function bindPanModeEvents(){this.viewPortElementRef.removeEventListener("touchend",this.touchEnd),this.viewPortElementRef.removeEventListener("touchstart",this.touchStart),this.viewPortElementRef.removeEventListener("touchmove",this.touchMove),this.viewPortElementRef.addEventListener("touchend",this.stopDragging),this.viewPortElementRef.addEventListener("touchstart",this.startDragging),this.viewPortElementRef.addEventListener("touchmove",this.doDragging),this.viewPortElementRef.removeEventListener("mouseup",this.stopMoving),this.viewPortElementRef.removeEventListener("mousedown",this.startMoving),this.viewPortElementRef.removeEventListener("mousemove",this.doMoving),this.viewPortElementRef.addEventListener("mouseup",this.stopDragging),this.viewPortElementRef.addEventListener("mousedown",this.startDragging),this.viewPortElementRef.addEventListener("mousemove",this.doDragging);}},{key:"bind360ModeEvents",value:function bind360ModeEvents(){this.viewPortElementRef.removeEventListener("touchend",this.stopDragging),this.viewPortElementRef.removeEventListener("touchstart",this.startDragging),this.viewPortElementRef.removeEventListener("touchmove",this.doDragging),this.viewPortElementRef.addEventListener("touchend",this.touchEnd),this.viewPortElementRef.addEventListener("touchstart",this.touchStart),this.viewPortElementRef.addEventListener("touchmove",this.touchMove),this.viewPortElementRef.removeEventListener("mouseup",this.stopDragging),this.viewPortElementRef.removeEventListener("mousedown",this.startDragging),this.viewPortElementRef.removeEventListener("mousemove",this.doDragging),this.viewPortElementRef.addEventListener("mouseup",this.stopMoving),this.viewPortElementRef.addEventListener("mousedown",this.startMoving),this.viewPortElementRef.addEventListener("mousemove",this.doMoving);}},{key:"setLastPositions",value:function setLastPositions(a){this.isMobile?this.setState({lastX:a.touches[0].offsetX||a.touches[0].pageX-this.canvas.offsetLeft,lastY:a.touches[0].offsetY||a.touches[0].pageY-this.canvas.offsetTop}):this.setState({lastX:a.offsetX||a.pageX-this.canvas.offsetLeft,lastY:a.offsetY||a.pageY-this.canvas.offsetTop});}},{key:"checkMobile",value:function checkMobile(){this.isMobile=!!("ontouchstart"in window||navigator.msMaxTouchPoints);}},{key:"loadInitialImage",value:function loadInitialImage(){this.currentImage=this.imageData[this.props.overrideImage||0],this.setImage();}},{key:"setImage",value:function setImage(){var a=this,b=!!(0<arguments.length&&void 0!==arguments[0])&&arguments[0];if(this.currentLeftPosition=this.currentTopPosition=0,!b)this.currentCanvasImage=new Image,this.currentCanvasImage.crossOrigin="anonymous",this.currentCanvasImage.src=this.currentImage,this.currentCanvasImage.onload=function(){var b=a.viewPortElementRef.getBoundingClientRect();a.canvas.width=a.state.isFullScreen?b.width:a.currentCanvasImage.width,a.canvas.height=a.state.isFullScreen?b.height:a.currentCanvasImage.height,a.trackTransforms(a.ctx),a.redraw();},this.currentCanvasImage.onerror=function(){console.log("cannot load this image");};else {this.currentCanvasImage=this.images[0];var c=this.viewPortElementRef.getBoundingClientRect();this.canvas.width=this.state.isFullScreen?c.width:this.currentCanvasImage.width,this.canvas.height=this.state.isFullScreen?c.height:this.currentCanvasImage.height,this.trackTransforms(this.ctx),this.redraw();}}},{key:"redraw",value:function redraw(){var a=Math.min;try{var b=this.ctx.transformedPoint(0,0),c=this.ctx.transformedPoint(this.canvas.width,this.canvas.height),d=this.canvas.width/this.currentCanvasImage.width,e=this.canvas.height/this.currentCanvasImage.height,f=a(d,e),g=(this.canvas.width-this.currentCanvasImage.width*f)/2,h=(this.canvas.height-this.currentCanvasImage.height*f)/2;this.ctx.clearRect(b.x,b.y,c.x-b.x,c.y-b.y),this.centerX=this.currentCanvasImage.width*f/2,this.centerY=this.currentCanvasImage.height*f/2,this.ctx.drawImage(this.currentCanvasImage,this.currentLeftPosition,this.currentTopPosition,this.currentCanvasImage.width,this.currentCanvasImage.height,g,h,this.currentCanvasImage.width*f,this.currentCanvasImage.height*f);}catch(a){this.trackTransforms(this.ctx);}}},{key:"trackTransforms",value:function trackTransforms(a){var g=this;return new Promise(function(b){var h=document.createElementNS("http://www.w3.org/2000/svg","svg"),i=h.createSVGMatrix();g.ctx.getTransform=function(){return i};var j=[],k=a.save;g.ctx.save=function(){return j.push(i.translate(0,0)),k.call(g.ctx)};var l=a.restore;g.ctx.restore=function(){return i=j.pop(),l.call(g.ctx)};var m=g.ctx.scale;g.ctx.scale=function(a,b){return i=i.scaleNonUniform(a,b),m.call(g.ctx,a,b)};var n=g.ctx.rotate;g.ctx.rotate=function(a){var b=Math.PI;return i=i.rotate(180*a/b),n.call(g.ctx,a)};var o=g.ctx.translate;g.ctx.translate=function(a,b){return i=i.translate(a,b),o.call(g.ctx,a,b)};var p=g.ctx.transform;g.ctx.transform=function(j,a,b,c,d,e){var f=h.createSVGMatrix();return f.a=j,f.b=a,f.c=b,f.d=c,f.e=d,f.f=e,i=i.multiply(f),p.call(g.ctx,j,a,b,c,d,e)};var q=g.ctx.setTransform;g.ctx.setTransform=function(h,a,b,c,d,e){return i.a=h,i.b=a,i.c=b,i.d=c,i.e=d,i.f=e,q.call(g.ctx,h,a,b,c,d,e)};var r=h.createSVGPoint();g.ctx.transformedPoint=function(a,b){return r.x=a,r.y=b,r.matrixTransform(i.inverse())},b(g.ctx);})}},{key:"turnLeft",value:function turnLeft(){this.moveActiveIndexDown(1);}},{key:"turnRight",value:function turnRight(){this.moveActiveIndexUp(1);}},{key:"moveActiveIndexUp",value:function moveActiveIndexUp(a){var b=this.updateCallback(this.activeImage);this.stopAtEdges?this.activeImage+a>=this.props.amount?this.activeImage=this.props.amount:this.activeImage+=a:this.activeImage=(this.activeImage+a)%this.props.amount||this.props.amount,b(),this.update();}},{key:"moveActiveIndexDown",value:function moveActiveIndexDown(a){var b=this.updateCallback(this.activeImage);this.stopAtEdges?1>=this.activeImage-a?this.activeImage=1:this.activeImage-=a:1>this.activeImage-a?this.activeImage=this.props.amount+(this.activeImage-a):this.activeImage-=a,b(),this.update();}},{key:"update",value:function update(){var a=this.images[this.activeImage-1];this.currentCanvasImage=a,this.redraw();}},{key:"zoom",value:function zoom(a){var b=Math.pow,c=b(1.01,a);if(1<c?this.currentScale+=c:1<this.currentScale-c?this.currentScale-=c:this.currentScale=1,1<this.currentScale){var d=this.ctx.transformedPoint(this.state.lastX,this.state.lastY);this.ctx.translate(d.x,d.y),this.ctx.scale(c,c),this.ctx.translate(-d.x,-d.y),this.redraw();}}},{key:"disableZoomin",value:function disableZoomin(){document.addEventListener("gesturestart",function(a){a.preventDefault(),document.body.style.zoom=.99;}),document.addEventListener("gesturechange",function(a){a.preventDefault(),document.body.style.zoom=.99;}),document.addEventListener("gestureend",function(a){a.preventDefault(),document.body.style.zoom=1;});}},{key:"onMove",value:function onMove(a){var b=Math.floor;if(a-this.movementStart>=this.speedFactor){var c=b((a-this.movementStart)/this.speedFactor)||1;this.movementStart=a,this.props.spinReverse?this.moveActiveIndexDown(c):this.moveActiveIndexUp(c),this.redraw();}else if(this.movementStart-a>=this.speedFactor){var d=b((this.movementStart-a)/this.speedFactor)||1;this.movementStart=a,this.props.spinReverse?this.moveActiveIndexUp(d):this.moveActiveIndexDown(d),this.redraw();}}},{key:"onSpin",value:function onSpin(){(this.state.playing||this.state.loopTimeoutId)&&this.stop();}},{key:"stop",value:function stop(){1===this.activeImage&&this.setState({currentLoop:0}),this.setState({playing:!1}),window.clearTimeout(this.state.loopTimeoutId);}},{key:"loopImages",value:function loopImages(){var a=this.props.loop?this.props.loop:1;1===this.activeImage?this.state.currentLoop===a?this.stop():(this.setState({currentLoop:this.state.currentLoop+1}),this.next()):this.next();}},{key:"componentDidUpdate",value:function componentDidUpdate(a,b){(a.fileName!==this.props.fileName||a.imagePath!==this.props.imagePath)&&this.ctx&&(this.redraw(),this.setState({imagesLoaded:!1}),this.imageData=[],this.images=[],this.loadedImages=0,this.fetchData()),a.overrideImage!==this.props.overrideImage&&this.ctx&&(this.setState({activeImage:this.props.overrideImage+1}),this.loadInitialImage()),this.state.currentLeftPosition!==b.currentLeftPosition&&console.log("Left Position Changed"),this.state.panmode!==b.panmode&&this.attachEvents(),this.state.playing!==b.playing&&(this.state.playing?this.play():this.stop()),this.state.isFullScreen!==b.isFullScreen&&(this.state.isFullScreen?(this.viewerContainerRef.classList.add("v360-main"),this.viewerContainerRef.classList.add("v360-fullscreen")):(this.viewerContainerRef.classList.remove("v360-main"),this.viewerContainerRef.classList.remove("v360-fullscreen")),this.setImage());}},{key:"render",value:function render(){var a=this;return/*#__PURE__*/React.createElement("div",null,/*#__PURE__*/React.createElement("div",{className:"v360-viewer-container",ref:function ref(b){a.viewerContainerRef=b;},id:this.props.id?this.props.id:"identifier",onWheel:function onWheel(b){return a.zoomImage(b)}},!this.state.imagesLoaded&&/*#__PURE__*/React.createElement("div",{className:"v360-viewport"},/*#__PURE__*/React.createElement("div",{className:"v360-spinner-grow"}),/*#__PURE__*/React.createElement("p",{ref:this.viewPercentageRef,className:"v360-percentage-text ".concat(!this.isTruthy(this.props.showPercentage)&&"sr-only")}),this.props.loadingIndicator&&/*#__PURE__*/React.createElement(this.props.loadingIndicator,null)),/*#__PURE__*/React.createElement(HammerComponent,{onPinchIn:this.handlePinch,onPinchOut:this.handlePinch,onPinchEnd:this.pinchOut,options:{recognizers:{pinch:{enable:this.isTruthy(this.props.allowPinch)}}}},/*#__PURE__*/React.createElement("div",{className:"v360-viewport-container v360-viewport"},/*#__PURE__*/React.createElement("canvas",{className:"v360-image-container ".concat(!this.state.imagesLoaded&&"sr-only"),ref:function ref(b){a.imageContainerRef=b;}}),this.props.boxShadow?/*#__PURE__*/React.createElement("div",{className:"v360-product-box-shadow"}):"")),this.isTruthy(this.props.showMenu)&&/*#__PURE__*/React.createElement("abbr",{title:"Fullscreen Toggle"},/*#__PURE__*/React.createElement("div",{className:"v360-fullscreen-toggle text-center",onClick:this.toggleFullScreen},/*#__PURE__*/React.createElement("div",{className:"dark"===this.props.buttonClass?"v360-fullscreen-toggle-btn text-light":"v360-fullscreen-toggle-btn text-dark"},/*#__PURE__*/React.createElement("i",{className:this.state.isFullScreen?"fas fa-compress text-lg":"fas fa-expand text-lg"})))),this.props.buttonNext&&/*#__PURE__*/React.createElement(this.props.buttonNext,{onClick:function onClick(){return a.next()},disabled:!this.state.imagesLoaded}),this.props.buttonPrevious&&/*#__PURE__*/React.createElement(this.props.buttonPrevious,{onClick:function onClick(){return a.prev()},disabled:!this.state.imagesLoaded}),this.props.buttonPlay&&/*#__PURE__*/React.createElement(this.props.buttonPlay,{onClick:function onClick(){return a.togglePlay()},disabled:!this.state.imagesLoaded}),this.props.buttonExpand&&/*#__PURE__*/React.createElement(this.props.buttonExpand,{onClick:function onClick(){return a.toggleFullScreen()},disabled:!this.state.imagesLoaded}),this.isTruthy(this.props.showMenu)&&/*#__PURE__*/React.createElement("div",{id:"v360-menu-btns",className:this.props.buttonClass},/*#__PURE__*/React.createElement("div",{className:"v360-navigate-btns"},/*#__PURE__*/React.createElement(button,{clicked:this.togglePlay,icon:this.state.playing?"fa fa-pause":"fa fa-play"}),/*#__PURE__*/React.createElement(button,{clicked:this.zoomIn,icon:"fa fa-search-plus"}),/*#__PURE__*/React.createElement(button,{clicked:this.zoomOut,icon:"fa fa-search-minus"}),this.state.panmode?/*#__PURE__*/React.createElement(button,{clicked:this.togglePanMode,text:"360\xB0"}):/*#__PURE__*/React.createElement(button,{clicked:this.togglePanMode,icon:"fa fa-hand-paper"}),/*#__PURE__*/React.createElement(button,{clicked:this.prev,icon:"fa fa-chevron-left"}),/*#__PURE__*/React.createElement(button,{clicked:this.next,icon:"fa fa-chevron-right"}),/*#__PURE__*/React.createElement(button,{clicked:this.resetPosition,icon:"fa fa-sync"})))))}}]),b}(Component);

export { React360Viewer as default };
