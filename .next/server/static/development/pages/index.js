module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/colors.js":
/*!**************************!*\
  !*** ./assets/colors.js ***!
  \**************************/
/*! exports provided: MDC_PURPLE, DEEP_INDIGO, MID_PURPLE, LIGHT_PURPLE, WHITE, BLACK, LIGHT_GREY, MDC_PURPLE_HOVER, SB_GREY, PINK, RED, BABY_BLUE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDC_PURPLE", function() { return MDC_PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEEP_INDIGO", function() { return DEEP_INDIGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MID_PURPLE", function() { return MID_PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_PURPLE", function() { return LIGHT_PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WHITE", function() { return WHITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BLACK", function() { return BLACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIGHT_GREY", function() { return LIGHT_GREY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDC_PURPLE_HOVER", function() { return MDC_PURPLE_HOVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SB_GREY", function() { return SB_GREY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PINK", function() { return PINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RED", function() { return RED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BABY_BLUE", function() { return BABY_BLUE; });
const MDC_PURPLE = '#7D27FF';
const DEEP_INDIGO = '#430086';
const MID_PURPLE = '#986CFF';
const LIGHT_PURPLE = '#C5B2FF';
const WHITE = '#FFFFFF';
const BLACK = '#000000';
const LIGHT_GREY = '#969696';
const MDC_PURPLE_HOVER = '#7121EB';
const SB_GREY = '#F5F5F5';
const PINK = '#ED27FF';
const RED = '#FF2752';
const BABY_BLUE = '#3B84FF';

/***/ }),

/***/ "./components/animated-card/AnimatedCard.styled.js":
/*!*********************************************************!*\
  !*** ./components/animated-card/AnimatedCard.styled.js ***!
  \*********************************************************/
/*! exports provided: CardWrapper, TopNotch, ContentWrapper, Title, Description, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWrapper", function() { return CardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNotch", function() { return TopNotch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AnimatedCardstyled__CardWrapper",
  componentId: "q4nqi9-0"
})(["display:flex;flex-direction:column;width:100%;min-height:340px;max-width:380px;flex:1;box-shadow:0 2px 4px 0 rgba(0,0,0,0.2);height:370px;background-size:100% 200%;background-image:", ";-webkit-transition:background-position 0.15s ease-out;-moz-transition:background-position 0.15s ease-out;transition:background-position 0.15s ease-out;&:hover{cursor:pointer;background-position:0 -100%;}"], props => {
  return `linear-gradient(to bottom, white 50%, ${props.notchColor} 50%)`;
});
const TopNotch = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AnimatedCardstyled__TopNotch",
  componentId: "q4nqi9-1"
})(["width:100%;height:16px;background-color:", ";margin-bottom:23px;"], props => props.notchColor);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AnimatedCardstyled__ContentWrapper",
  componentId: "q4nqi9-2"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0 20px 17px;overflow:hidden;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "AnimatedCardstyled__Title",
  componentId: "q4nqi9-3"
})(["font-family:", ";font-size:18px;line-height:24px;margin:0 0 20px 0;align-self:flex-start;", ":hover &{color:", ";transition:color 0.15s ease;}"], props => props.theme.fonts.graphikBold, CardWrapper, props => props.theme.colors.white);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "AnimatedCardstyled__Description",
  componentId: "q4nqi9-4"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0;", ":hover &{color:", ";transition:color 0.25s ease;}"], props => props.theme.fonts.financier, CardWrapper, props => props.theme.colors.white);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "AnimatedCardstyled__Footer",
  componentId: "q4nqi9-5"
})(["font-family:", ";font-size:14px;line-height:22px;color:", ";display:flex;flex-direction:column;flex:1;justify-content:flex-end;margin:0 20px 16px;cursor:pointer;", ":hover &{color:", ";transition:color 0.25s ease;}"], props => props.theme.fonts.graphik, props => props.theme.colors.lightGrey, CardWrapper, props => props.theme.colors.white);

/***/ }),

/***/ "./components/animated-card/index.js":
/*!*******************************************!*\
  !*** ./components/animated-card/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/colors */ "./assets/colors.js");
/* harmony import */ var _AnimatedCard_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnimatedCard.styled */ "./components/animated-card/AnimatedCard.styled.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/components/animated-card/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AnimatedCard = props => {
  const {
    title,
    description,
    footer,
    notchColor,
    onClick
  } = props;
  return __jsx(_AnimatedCard_styled__WEBPACK_IMPORTED_MODULE_2__["CardWrapper"], {
    notchColor: notchColor,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_AnimatedCard_styled__WEBPACK_IMPORTED_MODULE_2__["TopNotch"], {
    notchColor: notchColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx(_AnimatedCard_styled__WEBPACK_IMPORTED_MODULE_2__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_AnimatedCard_styled__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, title), __jsx(_AnimatedCard_styled__WEBPACK_IMPORTED_MODULE_2__["Description"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, description)), __jsx(_AnimatedCard_styled__WEBPACK_IMPORTED_MODULE_2__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, footer));
};

AnimatedCard.defaultProps = {
  footer: 'Read more',
  notchColor: _assets_colors__WEBPACK_IMPORTED_MODULE_1__["MDC_PURPLE"]
};
/* harmony default export */ __webpack_exports__["default"] = (AnimatedCard);

/***/ }),

/***/ "./components/animated-footer-link/AnimatedFooterLink.styled.js":
/*!**********************************************************************!*\
  !*** ./components/animated-footer-link/AnimatedFooterLink.styled.js ***!
  \**********************************************************************/
/*! exports provided: AnimatedFooterLinkWrapper, Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedFooterLinkWrapper", function() { return AnimatedFooterLinkWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const AnimatedFooterLinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "AnimatedFooterLinkstyled__AnimatedFooterLinkWrapper",
  componentId: "djcwa6-0"
})(["display:flex;flex-direction:row;align-items:baseline;"]);
const Message = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4.withConfig({
  displayName: "AnimatedFooterLinkstyled__Message",
  componentId: "djcwa6-1"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0 8px 0 0;cursor:pointer;transition:all 0.15s ease;&:hover{margin:0 16px 0 0;opacity:0.65;}"], props => props.theme.fonts.graphik, props => props.theme.colors.mdcPurple);

/***/ }),

/***/ "./components/animated-footer-link/index.js":
/*!**************************************************!*\
  !*** ./components/animated-footer-link/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AnimatedFooterLink_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnimatedFooterLink.styled */ "./components/animated-footer-link/AnimatedFooterLink.styled.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/components/animated-footer-link/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AnimatedFooterLink = ({
  message,
  href,
  onClick
}) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: href,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(_AnimatedFooterLink_styled__WEBPACK_IMPORTED_MODULE_2__["AnimatedFooterLinkWrapper"], {
  onClick: onClick,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(_AnimatedFooterLink_styled__WEBPACK_IMPORTED_MODULE_2__["Message"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, message), __jsx("img", {
  src: "/static/images/arrow.png",
  srcSet: "/static/images/arrow@1x.png 1x, /static/images/arrow@2x.png 2x, /static/images/arrow@3x.png 3x",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})));

AnimatedFooterLink.defaultProps = {
  onClick: () => {}
};
/* harmony default export */ __webpack_exports__["default"] = (AnimatedFooterLink);

/***/ }),

/***/ "./components/bio-card/BioCard.styled.js":
/*!***********************************************!*\
  !*** ./components/bio-card/BioCard.styled.js ***!
  \***********************************************/
/*! exports provided: Container, BioCardWrapper, ImageWrapper, ContentWrapper, Name, Role, FooterWrapper, HoveredBioCardWrapper, HoveredContent, HoveredName, HoveredRole, HoveredDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioCardWrapper", function() { return BioCardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Name", function() { return Name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWrapper", function() { return FooterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoveredBioCardWrapper", function() { return HoveredBioCardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoveredContent", function() { return HoveredContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoveredName", function() { return HoveredName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoveredRole", function() { return HoveredRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoveredDescription", function() { return HoveredDescription; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "BioCardstyled__Container",
  componentId: "lk04tb-0"
})(["display:flex;flex-direction:column;flex:1;width:340px;&:hover{cursor:help;}", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    width: 380px;
    min-height: 445px;
  `);
const BioCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "BioCardstyled__BioCardWrapper",
  componentId: "lk04tb-1"
})(["display:flex;flex-direction:column;flex:1;width:100%;box-shadow:0 2px 4px 0 rgba(0,0,0,0.2);", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    max-width: 380px;
  `);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "BioCardstyled__ImageWrapper",
  componentId: "lk04tb-2"
})(["max-width:340px;max-height:401px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    max-height: 320px;
    max-width: 380px;
  `);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "BioCardstyled__ContentWrapper",
  componentId: "lk04tb-3"
})(["min-height:125px;display:flex;flex-direction:column;flex:1;padding-left:32px;"]);
const Name = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4.withConfig({
  displayName: "BioCardstyled__Name",
  componentId: "lk04tb-4"
})(["font-family:", ";font-size:21px;line-height:24px;margin:16px 0 4px;"], props => props.theme.fonts.graphikBold);
const Role = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "BioCardstyled__Role",
  componentId: "lk04tb-5"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0;"], props => props.theme.fonts.graphik);
const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "BioCardstyled__FooterWrapper",
  componentId: "lk04tb-6"
})(["display:flex;flex:1;align-items:flex-end;margin-bottom:17px;"]);
const HoveredBioCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "BioCardstyled__HoveredBioCardWrapper",
  componentId: "lk04tb-7"
})(["display:flex;flex-direction:column;flex:1;width:100%;box-shadow:0 2px 4px 0 rgba(0,0,0,0.2);", " background-color:", ";"], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    max-width: 380px;
  `, props => props.theme.colors.mdcPurple);
const HoveredContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "BioCardstyled__HoveredContent",
  componentId: "lk04tb-8"
})(["display:flex;flex-direction:column;flex:1;padding:25px 32px;"]);
const HoveredName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4.withConfig({
  displayName: "BioCardstyled__HoveredName",
  componentId: "lk04tb-9"
})(["font-family:", ";font-size:21px;line-height:24px;margin:0 0 4px;color:", ";"], props => props.theme.fonts.graphikBold, props => props.theme.colors.white);
const HoveredRole = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "BioCardstyled__HoveredRole",
  componentId: "lk04tb-10"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0 0 17px;color:", ";"], props => props.theme.fonts.graphik, props => props.theme.colors.white);
const HoveredDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "BioCardstyled__HoveredDescription",
  componentId: "lk04tb-11"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0;"], props => props.theme.fonts.financier, props => props.theme.colors.white);

/***/ }),

/***/ "./components/bio-card/index.js":
/*!**************************************!*\
  !*** ./components/bio-card/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-addons-css-transition-group */ "react-addons-css-transition-group");
/* harmony import */ var react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_addons_css_transition_group__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _animated_footer_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animated-footer-link */ "./components/animated-footer-link/index.js");
/* harmony import */ var _BioCard_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BioCard.styled */ "./components/bio-card/BioCard.styled.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/components/bio-card/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const BioCard = props => {
  const {
    name,
    role,
    message
  } = props;
  const {
    0: hovered,
    1: setHovered
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, !hovered && __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["BioCardWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
    src: "/static/images/placeholder-img.png",
    srcSet: "/static/images/placeholder-img@1x.png 1x, /static/images/placeholder-img@2x.png 2x, /static/images/placeholder-img@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["Name"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, name), __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["Role"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, role), __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["FooterWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(_animated_footer_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    message: "Bio",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  })))), hovered && __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["HoveredBioCardWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["HoveredContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["HoveredName"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, name), __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["HoveredRole"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, role), message && __jsx(_BioCard_styled__WEBPACK_IMPORTED_MODULE_3__["HoveredDescription"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, message))));
};

/* harmony default export */ __webpack_exports__["default"] = (BioCard);

/***/ }),

/***/ "./components/button/button.styled.js":
/*!********************************************!*\
  !*** ./components/button/button.styled.js ***!
  \********************************************/
/*! exports provided: ButtonWrapper, ButtonText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonText", function() { return ButtonText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);



const getBackgroundColor = props => {
  if (props.isDefault) {
    return props.theme.colors.mdcPurple;
  } else {
    return props.theme.colors.white;
  }
};

const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button.withConfig({
  displayName: "buttonstyled__ButtonWrapper",
  componentId: "ljf8l9-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:160px;height:40px;background-color:", ";border-radius:3px;box-shadow:0 2px 8px 0 rgba(0,0,0,0.15);border:none;cursor:pointer;&:hover{background-color:", ";box-shadow:", ";transform:translateY(-1px);transition:all 0.15s ease;}", ""], props => getBackgroundColor(props), props => getBackgroundColor(props), props => {
  return props.isDefault ? '0 2px 8px 0 rgba(0, 0, 0, 0.15)' : '0 8px 16px 2px rgba(0, 0, 0, 0.15)';
}, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    width: 200px;
    height: 48px;
  `);
const ButtonText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "buttonstyled__ButtonText",
  componentId: "ljf8l9-1"
})(["font-family:", ";font-size:14px;line-height:14px;letter-spacing:0.25px;color:", ";", ""], props => props.theme.fonts.graphikBold, props => props.isDefault ? props.theme.colors.white : props.theme.colors.black, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 16px;
    line-height: 24px;
  `);

/***/ }),

/***/ "./components/button/index.js":
/*!************************************!*\
  !*** ./components/button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.styled */ "./components/button/button.styled.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/components/button/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Button = props => {
  const {
    btnText,
    isDefault,
    onClick,
    isDisabled
  } = props;
  return __jsx(_button_styled__WEBPACK_IMPORTED_MODULE_1__["ButtonWrapper"], {
    isDefault: isDefault,
    onClick: onClick,
    disabled: isDisabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(_button_styled__WEBPACK_IMPORTED_MODULE_1__["ButtonText"], {
    isDefault: isDefault,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, btnText));
};

Button.defaultProps = {
  isDefault: true,
  isSecondary: false
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/company-card/CompanyCard.styled.js":
/*!*******************************************************!*\
  !*** ./components/company-card/CompanyCard.styled.js ***!
  \*******************************************************/
/*! exports provided: CompanyCardWrapper, ImageWrapper, ContentWrapper, DescriptionWrapper, Title, DescriptionText, FooterWrapper, RoleText, NextTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyCardWrapper", function() { return CompanyCardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionWrapper", function() { return DescriptionWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionText", function() { return DescriptionText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWrapper", function() { return FooterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleText", function() { return RoleText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextTag", function() { return NextTag; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const CompanyCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CompanyCardstyled__CompanyCardWrapper",
  componentId: "u0cwbv-0"
})(["display:flex;flex-direction:column;flex:1;box-shadow:0 8px 12px 2px rgba(0,0,0,0.1);", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
		flex-direction: row;
		flex: 1;
		width: 100%;
		height: 285px;
  `);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CompanyCardstyled__ImageWrapper",
  componentId: "u0cwbv-1"
})(["background-image:url(\"/static/images/cppib-img.png\");background-size:cover;min-height:220px;width:100%;"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CompanyCardstyled__ContentWrapper",
  componentId: "u0cwbv-2"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin:14px 20px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin: 32px 6%;
  `);
const DescriptionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CompanyCardstyled__DescriptionWrapper",
  componentId: "u0cwbv-3"
})(["display:flex;flex-direction:column;margin-bottom:33px;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "CompanyCardstyled__Title",
  componentId: "u0cwbv-4"
})(["font-family:", ";font-size:18px;line-height:24px;margin:0 0 6px 0;", ""], props => props.theme.fonts.graphikBold, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 21px;
    line-height: 28px;
    margin-bottom: 8px;
  `);
const DescriptionText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "CompanyCardstyled__DescriptionText",
  componentId: "u0cwbv-5"
})(["font-family:", ";font-size:21px;line-height:26px;letter-spacing:-0.11px;margin:0;"], props => props.theme.fonts.financier);
const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "CompanyCardstyled__FooterWrapper",
  componentId: "u0cwbv-6"
})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;"]);
const RoleText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "CompanyCardstyled__RoleText",
  componentId: "u0cwbv-7"
})(["font-family:", ";font-size:16px;line-height:21px;color:", ";margin:0;"], props => props.theme.fonts.graphik, props => props.theme.colors.lightGrey);
const NextTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "CompanyCardstyled__NextTag",
  componentId: "u0cwbv-8"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0;cursor:pointer;&:hover{color:#3d0099;transition:color 0.25s ease;}"], props => props.theme.fonts.graphik, props => props.theme.colors.mdcPurple);

/***/ }),

/***/ "./components/company-card/index.js":
/*!******************************************!*\
  !*** ./components/company-card/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _label_with_arrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../label-with-arrow */ "./components/label-with-arrow/index.js");
/* harmony import */ var _CompanyCard_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompanyCard.styled */ "./components/company-card/CompanyCard.styled.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/components/company-card/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CompanyCard = props => {
  const {
    title,
    description,
    role,
    company,
    onNext
  } = props;
  return __jsx(_CompanyCard_styled__WEBPACK_IMPORTED_MODULE_2__["CompanyCardWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_CompanyCard_styled__WEBPACK_IMPORTED_MODULE_2__["ImageWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx(_CompanyCard_styled__WEBPACK_IMPORTED_MODULE_2__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(_CompanyCard_styled__WEBPACK_IMPORTED_MODULE_2__["DescriptionWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_CompanyCard_styled__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, title), __jsx(_CompanyCard_styled__WEBPACK_IMPORTED_MODULE_2__["DescriptionText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, description)), __jsx(_CompanyCard_styled__WEBPACK_IMPORTED_MODULE_2__["FooterWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(_CompanyCard_styled__WEBPACK_IMPORTED_MODULE_2__["RoleText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, role), __jsx(_label_with_arrow__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: company,
    onClick: onNext,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CompanyCard);

/***/ }),

/***/ "./components/contact-footer/ContactFooter.styled.js":
/*!***********************************************************!*\
  !*** ./components/contact-footer/ContactFooter.styled.js ***!
  \***********************************************************/
/*! exports provided: ContactFooterWrapper, ContentWrapper, Content, Title, Description, ButtonWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFooterWrapper", function() { return ContactFooterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const ContactFooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ContactFooterstyled__ContactFooterWrapper",
  componentId: "sc-1z0aj7c-0"
})(["width:100%;background:rgb(125,39,255);background:linear-gradient(90deg,rgba(125,39,255,1) 0%,rgba(180,79,255,1) 100%);"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ContactFooterstyled__ContentWrapper",
  componentId: "sc-1z0aj7c-1"
})(["display:flex;flex-direction:column;align-items:center;max-width:1200px;margin:0 auto;padding:80px 20px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
  `);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ContactFooterstyled__Content",
  componentId: "sc-1z0aj7c-2"
})(["display:flex;flex-direction:column;align-items:center;margin-bottom:30px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin: 0;
    align-items: flex-start;
  `);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "ContactFooterstyled__Title",
  componentId: "sc-1z0aj7c-3"
})(["font-family:", ";font-size:32px;line-height:42px;margin:0 0 6px 0;color:", ";", ""], props => props.theme.fonts.graphikBold, props => props.theme.colors.white, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 36px;
    line-height: 48px;
    margin: 0 0 8px 0;
  `);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "ContactFooterstyled__Description",
  componentId: "sc-1z0aj7c-4"
})(["font-family:", ";font-size:18px;line-height:26px;margin:0;color:", ";text-align:center;", ""], props => props.theme.fonts.financier, props => props.theme.colors.white, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 21px;
    line-height: 28px;
    max-width: 667px;
    text-align: left;
  `);
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ContactFooterstyled__ButtonWrapper",
  componentId: "sc-1z0aj7c-5"
})(["margin-bottom:0;"]);

/***/ }),

/***/ "./components/contact-footer/index.js":
/*!********************************************!*\
  !*** ./components/contact-footer/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ "./components/button/index.js");
/* harmony import */ var _ContactFooter_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContactFooter.styled */ "./components/contact-footer/ContactFooter.styled.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/components/contact-footer/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ContactFooter = () => {
  return __jsx(_ContactFooter_styled__WEBPACK_IMPORTED_MODULE_3__["ContactFooterWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_ContactFooter_styled__WEBPACK_IMPORTED_MODULE_3__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_ContactFooter_styled__WEBPACK_IMPORTED_MODULE_3__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx(_ContactFooter_styled__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "See how we can help"), __jsx(_ContactFooter_styled__WEBPACK_IMPORTED_MODULE_3__["Description"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Reach out to us to explore our services or hear our ideas about the industry in greater detail")), __jsx(_ContactFooter_styled__WEBPACK_IMPORTED_MODULE_3__["ButtonWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    btnText: "Contact us",
    onClick: () => {},
    isDefault: false,
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/contact'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactFooter);

/***/ }),

/***/ "./components/contact-form/ContactForm.styled.js":
/*!*******************************************************!*\
  !*** ./components/contact-form/ContactForm.styled.js ***!
  \*******************************************************/
/*! exports provided: FormWrapper, Content, InputWrapper, ButtonWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormWrapper", function() { return FormWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputWrapper", function() { return InputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ContactFormstyled__FormWrapper",
  componentId: "kj1rng-0"
})(["display:flex;flex-direction:column;flex:1;box-shadow:2px 4px 8px 0 rgba(0,0,0,0.2);width:100%;max-width:640px;background-color:", ";"], props => props.theme.colors.white);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ContactFormstyled__Content",
  componentId: "kj1rng-1"
})(["display:flex;flex-direction:column;justify-content:center;flex:1;padding:0 20px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    padding: 0 40px;
  `);
const InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ContactFormstyled__InputWrapper",
  componentId: "kj1rng-2"
})(["margin-bottom:20px;"]);
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ContactFormstyled__ButtonWrapper",
  componentId: "kj1rng-3"
})(["align-self:center;"]);

/***/ }),

/***/ "./components/contact-form/index.js":
/*!******************************************!*\
  !*** ./components/contact-form/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ContactForm_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactForm.styled */ "./components/contact-form/ContactForm.styled.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input */ "./components/input/index.js");
/* harmony import */ var _textfield__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../textfield */ "./components/textfield/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button */ "./components/button/index.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/components/contact-form/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ContactForm = ({
  onChange,
  firstName,
  company,
  email,
  message,
  onSubmit,
  isError
}) => __jsx(_ContactForm_styled__WEBPACK_IMPORTED_MODULE_2__["FormWrapper"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx(_ContactForm_styled__WEBPACK_IMPORTED_MODULE_2__["Content"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx(_ContactForm_styled__WEBPACK_IMPORTED_MODULE_2__["InputWrapper"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx(_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
  label: "First name",
  placeholder: "Margaret Mango",
  value: firstName,
  name: "firstName",
  onChange: onChange,
  isRequired: true,
  isError: isError,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
})), __jsx(_ContactForm_styled__WEBPACK_IMPORTED_MODULE_2__["InputWrapper"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx(_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
  label: "Email",
  placeholder: "margaret@mango.com",
  value: email,
  name: "email",
  onChange: onChange,
  isRequired: true,
  isError: isError,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
})), __jsx(_ContactForm_styled__WEBPACK_IMPORTED_MODULE_2__["InputWrapper"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, __jsx(_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
  label: "Company",
  placeholder: "Mango co.",
  value: company,
  name: "company",
  onChange: onChange,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
})), __jsx(_ContactForm_styled__WEBPACK_IMPORTED_MODULE_2__["InputWrapper"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, __jsx(_textfield__WEBPACK_IMPORTED_MODULE_4__["default"], {
  label: "Message",
  placeholder: "Your message here",
  value: message,
  name: "message",
  onChange: onChange,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
})), __jsx(_ContactForm_styled__WEBPACK_IMPORTED_MODULE_2__["ButtonWrapper"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, __jsx(_button__WEBPACK_IMPORTED_MODULE_5__["default"], {
  btnText: "Contact us",
  onClick: onSubmit,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}))));

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./components/footer/Footer.styled.js":
/*!********************************************!*\
  !*** ./components/footer/Footer.styled.js ***!
  \********************************************/
/*! exports provided: FooterWrapper, ContentWrapper, FooterLogoWrapper, TextWrapper, MarketDataText, ExploreAndSocialWrapper, ExploreWrapper, ExploreTitle, ExploreItem, SocialWrapper, SocialContent, SocialTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWrapper", function() { return FooterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterLogoWrapper", function() { return FooterLogoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextWrapper", function() { return TextWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketDataText", function() { return MarketDataText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreAndSocialWrapper", function() { return ExploreAndSocialWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreWrapper", function() { return ExploreWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreTitle", function() { return ExploreTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreItem", function() { return ExploreItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialWrapper", function() { return SocialWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialContent", function() { return SocialContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialTitle", function() { return SocialTitle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig({
  displayName: "Footerstyled__FooterWrapper",
  componentId: "sc-1a3izcr-0"
})(["min-height:375px;width:100%;background-color:black;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    min-height: 350px;
    padding: 0;
  `);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyled__ContentWrapper",
  componentId: "sc-1a3izcr-1"
})(["display:flex;flex-direction:column;align-items:center;max-width:1200px;margin:0 auto;padding:80px 20px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
  `);
const FooterLogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyled__FooterLogoWrapper",
  componentId: "sc-1a3izcr-2"
})(["display:flex;margin-bottom:20px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
    margin-bottom: 0;
  `);
const TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyled__TextWrapper",
  componentId: "sc-1a3izcr-3"
})(["margin-bottom:40px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
		max-width: 600px;
		margin-bottom: 0;
		padding: 0 40px;
  `);
const MarketDataText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "Footerstyled__MarketDataText",
  componentId: "sc-1a3izcr-4"
})(["margin:0;color:", ";font-family:", ";font-weight:400;font-size:18px;line-height:26px;text-align:left;", " ", ""], props => props.theme.colors.white, props => props.theme.fonts.financier, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
    font-size: 16px;
    line-height: 24px;
  `, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 21px;
    line-height: 28px;
  `);
const ExploreAndSocialWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyled__ExploreAndSocialWrapper",
  componentId: "sc-1a3izcr-5"
})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
	width: 300px;
  `);
const ExploreWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyled__ExploreWrapper",
  componentId: "sc-1a3izcr-6"
})(["display:flex;flex-direction:column;"]);
const ExploreTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Footerstyled__ExploreTitle",
  componentId: "sc-1a3izcr-7"
})(["font-size:18px;line-height:24px;color:", ";font-family:", ";margin:0 0 17px 0;", ""], props => props.theme.colors.white, props => props.theme.fonts.graphikBold, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 21px;
    line-height: 28px;
    margin: 0 0 23px 0;
  `);
const ExploreItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "Footerstyled__ExploreItem",
  componentId: "sc-1a3izcr-8"
})(["font-size:16px;line-height:22px;color:#c8c8c8;margin-bottom:18px;font-family:", ";cursor:pointer;&:hover{opacity:0.65;transition:opacity 0.15s ease;}"], props => props.theme.fonts.graphik);
const SocialWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyled__SocialWrapper",
  componentId: "sc-1a3izcr-9"
})(["display:flex;flex-direction:column;margin-left:40px;"]);
const SocialContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Footerstyled__SocialContent",
  componentId: "sc-1a3izcr-10"
})(["display:flex;flex-direction:row;"]);
const SocialTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Footerstyled__SocialTitle",
  componentId: "sc-1a3izcr-11"
})(["font-size:18px;line-height:24px;color:", ";font-family:", ";margin:0 0 27px 0;", ""], props => props.theme.colors.white, props => props.theme.fonts.graphikBold, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 21px;
    line-height: 28px;
    margin: 0 0 23px 0;
  `);

/***/ }),

/***/ "./components/footer/index.js":
/*!************************************!*\
  !*** ./components/footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _social_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../social-icon */ "./components/social-icon/index.js");
/* harmony import */ var _Footer_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.styled */ "./components/footer/Footer.styled.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/components/footer/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Footer = () => __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["FooterWrapper"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["ContentWrapper"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["FooterLogoWrapper"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/images/white.png",
  srcSet: "/static/images/white.png 1x, /static/images/white@2x.png 2x, /static/images/white@3x.png 3x",
  width: "140",
  height: "127",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
})), __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["TextWrapper"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["MarketDataText"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "Market data company is North America\u2019s leading market data solutions and consultancy company. We offer specialized consulting services and leading market data management solutions that help deal with the complexity of your data.")), __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["ExploreAndSocialWrapper"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["ExploreWrapper"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["ExploreTitle"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "Explore"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/research",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["ExploreItem"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, "Research")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["ExploreItem"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, "Contact"))), __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["SocialWrapper"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["SocialTitle"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "Social"), __jsx(_Footer_styled__WEBPACK_IMPORTED_MODULE_3__["SocialContent"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}, __jsx(_social_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
  url: "http://facebook.com",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}), __jsx(_social_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
  url: "https://www.linkedin.com/company/market-data-company/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}), __jsx(_social_icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
  url: "http://twitter.com",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}))))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/hamburger-menu-content/HamburgerMenuContent.styled.js":
/*!**************************************************************************!*\
  !*** ./components/hamburger-menu-content/HamburgerMenuContent.styled.js ***!
  \**************************************************************************/
/*! exports provided: HamburgerMenuContentWrapper, Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HamburgerMenuContentWrapper", function() { return HamburgerMenuContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const HamburgerMenuContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "HamburgerMenuContentstyled__HamburgerMenuContentWrapper",
  componentId: "sc-12ib83-0"
})(["display:flex;flex-direction:column;background-color:", ";width:100%;"], props => props.theme.colors.white);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "HamburgerMenuContentstyled__Header",
  componentId: "sc-12ib83-1"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;margin-bottom:60px;"]);

/***/ }),

/***/ "./components/hamburger-menu-content/index.js":
/*!****************************************************!*\
  !*** ./components/hamburger-menu-content/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../list-item */ "./components/list-item/index.js");
/* harmony import */ var _HamburgerMenuContent_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HamburgerMenuContent.styled */ "./components/hamburger-menu-content/HamburgerMenuContent.styled.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/components/hamburger-menu-content/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const HamburgerMenuContent = props => {
  const {
    onCloseModal
  } = props;
  return __jsx(_HamburgerMenuContent_styled__WEBPACK_IMPORTED_MODULE_3__["HamburgerMenuContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_HamburgerMenuContent_styled__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/images/mdc-logo-horizontal-black.png",
    srcSet: "/static/images/mdc-logo-horizontal-black@1x.png 1x, /static/images/mdc-logo-horizontal-black@2x.png 2x, /static/images/mdc-logo-horizontal-black@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  })), __jsx("div", {
    onClick: onCloseModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/images/closeIcon.png",
    srcSet: "/static/images/closeIcon.png 1x, /static/images/closeIcon@2x.png 2x, /static/images/closeIcon@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }))), __jsx(_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Research",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/research'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx(_list_item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: "Contact us",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/contact'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HamburgerMenuContent);

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: AnimatedCard, AnimatedFooterLink, BioCard, Button, CompanyCard, ContactFooter, ContactForm, Footer, HamburgerMenuContent, Input, LabelWithArrow, Layout, ListItem, Modal, ResearchPdfForm, SocialIcon, StartDownloadForm, TabBar, TextField, ThankYou */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animated_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animated-card */ "./components/animated-card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimatedCard", function() { return _animated_card__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _animated_footer_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animated-footer-link */ "./components/animated-footer-link/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimatedFooterLink", function() { return _animated_footer_link__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bio_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bio-card */ "./components/bio-card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BioCard", function() { return _bio_card__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button */ "./components/button/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _company_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./company-card */ "./components/company-card/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompanyCard", function() { return _company_card__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _contact_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-footer */ "./components/contact-footer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactFooter", function() { return _contact_footer__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _contact_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-form */ "./components/contact-form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactForm", function() { return _contact_form__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer */ "./components/footer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _hamburger_menu_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hamburger-menu-content */ "./components/hamburger-menu-content/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HamburgerMenuContent", function() { return _hamburger_menu_content__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./input */ "./components/input/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _input__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _label_with_arrow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./label-with-arrow */ "./components/label-with-arrow/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LabelWithArrow", function() { return _label_with_arrow__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout */ "./components/layout/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return _layout__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _list_item__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./list-item */ "./components/list-item/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return _list_item__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal */ "./components/modal/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _modal__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _research_pdf_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./research-pdf-form */ "./components/research-pdf-form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResearchPdfForm", function() { return _research_pdf_form__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _social_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./social-icon */ "./components/social-icon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocialIcon", function() { return _social_icon__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _start_download_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./start-download-form */ "./components/start-download-form/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StartDownloadForm", function() { return _start_download_form__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _tab_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tab-bar */ "./components/tab-bar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabBar", function() { return _tab_bar__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _textfield__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./textfield */ "./components/textfield/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return _textfield__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _thank_you__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./thank-you */ "./components/thank-you/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThankYou", function() { return _thank_you__WEBPACK_IMPORTED_MODULE_19__["default"]; });






















/***/ }),

/***/ "./components/input/Input.styled.js":
/*!******************************************!*\
  !*** ./components/input/Input.styled.js ***!
  \******************************************/
/*! exports provided: InputWrapper, LabelWrapper, Label, ErrorStar, FieldWrapper, Field, ImageWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputWrapper", function() { return InputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelWrapper", function() { return LabelWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorStar", function() { return ErrorStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldWrapper", function() { return FieldWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Inputstyled__InputWrapper",
  componentId: "sc-1fbwxt1-0"
})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;"]);
const LabelWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Inputstyled__LabelWrapper",
  componentId: "sc-1fbwxt1-1"
})(["display:flex;flex-direction:row;"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "Inputstyled__Label",
  componentId: "sc-1fbwxt1-2"
})(["font-family:", ";font-size:16px;line-height:28px;color:", ";margin-bottom:5px;margin-right:2px;"], props => props.theme.fonts.graphik, props => props.theme.colors.black);
const ErrorStar = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "Inputstyled__ErrorStar",
  componentId: "sc-1fbwxt1-3"
})(["font-family:'LucidaGrande';font-size:21px;color:#ff0000;"]);
const FieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Inputstyled__FieldWrapper",
  componentId: "sc-1fbwxt1-4"
})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;align-items:center;border:", ";background-color:", ";-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;"], props => props.isError ? `solid 1px ${props.theme.colors.red}` : 'solid 1px #c8c8c8', props => props.isError ? 'rgba(255, 39, 82, 0.02)' : `${props => props.theme.colors.white}`);
const Field = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "Inputstyled__Field",
  componentId: "sc-1fbwxt1-5"
})(["height:39px;width:100%;padding-left:14px;font-family:", ";font-size:14px;line-height:22px;color:", ";border:none;&:focus{outline:none;}"], props => props.theme.fonts.graphik, props => props.isError ? props.theme.colors.red : props.theme.colors.lightGrey);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Inputstyled__ImageWrapper",
  componentId: "sc-1fbwxt1-6"
})(["padding-right:16px;"]);

/***/ }),

/***/ "./components/input/index.js":
/*!***********************************!*\
  !*** ./components/input/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Input_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.styled */ "./components/input/Input.styled.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/components/input/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Input = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  isRequired,
  isError
}) => {
  return __jsx(_Input_styled__WEBPACK_IMPORTED_MODULE_1__["InputWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_Input_styled__WEBPACK_IMPORTED_MODULE_1__["LabelWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_Input_styled__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, label), isRequired && __jsx(_Input_styled__WEBPACK_IMPORTED_MODULE_1__["ErrorStar"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "*")), __jsx(_Input_styled__WEBPACK_IMPORTED_MODULE_1__["FieldWrapper"], {
    isError: isError,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(_Input_styled__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    value: value,
    name: name,
    placeholder: placeholder,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), isError && __jsx(_Input_styled__WEBPACK_IMPORTED_MODULE_1__["ImageWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/images/error.png",
    srcSet: "/static/images/error.png 1x, /static/images/error@2x.png 2x, /static/images/error@3x.png 3x",
    height: "22",
    width: "22",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }))));
};

Input.defaultProps = {
  isRequired: false
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "./components/label-with-arrow/LabelWithArrow.styled.js":
/*!**************************************************************!*\
  !*** ./components/label-with-arrow/LabelWithArrow.styled.js ***!
  \**************************************************************/
/*! exports provided: LabelWithArrowWrapper, Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelWithArrowWrapper", function() { return LabelWithArrowWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const LabelWithArrowWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "LabelWithArrowstyled__LabelWithArrowWrapper",
  componentId: "sc-1b3pixz-0"
})(["display:flex;flex-direction:row;align-items:center;&:hover{cursor:pointer;}"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h5.withConfig({
  displayName: "LabelWithArrowstyled__Label",
  componentId: "sc-1b3pixz-1"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0 7px 0 0;"], props => props.theme.fonts.graphik, props => props.theme.colors.mdcPurple);

/***/ }),

/***/ "./components/label-with-arrow/index.js":
/*!**********************************************!*\
  !*** ./components/label-with-arrow/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LabelWithArrow_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LabelWithArrow.styled */ "./components/label-with-arrow/LabelWithArrow.styled.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/components/label-with-arrow/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const LabelWithArrow = props => {
  const {
    label,
    onClick
  } = props;
  return __jsx(_LabelWithArrow_styled__WEBPACK_IMPORTED_MODULE_1__["LabelWithArrowWrapper"], {
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(_LabelWithArrow_styled__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, label), __jsx("img", {
    src: "/static/images/arrow.png",
    srcSet: "/static/images/arrow@1x.png 1x, /static/images/arrow@2x.png 2x, /static/images/arrow@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LabelWithArrow);

/***/ }),

/***/ "./components/layout/Layout.styled.js":
/*!********************************************!*\
  !*** ./components/layout/Layout.styled.js ***!
  \********************************************/
/*! exports provided: Wrapper, FooterWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWrapper", function() { return FooterWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Layoutstyled__Wrapper",
  componentId: "apusfk-0"
})(["display:flex;flex-direction:column;flex:1;width:100%;"]);
const FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Layoutstyled__FooterWrapper",
  componentId: "apusfk-1"
})(["margin-top:auto;"]);

/***/ }),

/***/ "./components/layout/index.js":
/*!************************************!*\
  !*** ./components/layout/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.styled */ "./components/layout/Layout.styled.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer */ "./components/footer/index.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/components/layout/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = ({
  children
}) => {
  return __jsx(_Layout_styled__WEBPACK_IMPORTED_MODULE_1__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, children, __jsx(_Layout_styled__WEBPACK_IMPORTED_MODULE_1__["FooterWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/list-item/ListItem.styled.js":
/*!*************************************************!*\
  !*** ./components/list-item/ListItem.styled.js ***!
  \*************************************************/
/*! exports provided: ListItemWrapper, Label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemWrapper", function() { return ListItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ListItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ListItemstyled__ListItemWrapper",
  componentId: "r7lddp-0"
})(["display:flex;flex-direction:column;min-height:60px;justify-content:center;align-items:center;border-bottom:solid 1px #efefef;"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "ListItemstyled__Label",
  componentId: "r7lddp-1"
})(["font-size:21px;font-family:", ";color:", ";"], props => props.theme.fonts.graphik, props => props.theme.colors.black);

/***/ }),

/***/ "./components/list-item/index.js":
/*!***************************************!*\
  !*** ./components/list-item/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ListItem_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListItem.styled */ "./components/list-item/ListItem.styled.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/components/list-item/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ListItem = props => {
  const {
    label,
    onClick
  } = props;
  return __jsx(_ListItem_styled__WEBPACK_IMPORTED_MODULE_1__["ListItemWrapper"], {
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(_ListItem_styled__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, label));
};

/* harmony default export */ __webpack_exports__["default"] = (ListItem);

/***/ }),

/***/ "./components/modal/index.js":
/*!***********************************!*\
  !*** ./components/modal/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ "react-modal");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/components/modal/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const customStyles = {
  content: {
    padding: '20px 20px 0 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '724px',
    maxHeight: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    margin: '20px',
    backgroundColor: 'none'
  }
};

const MDCModal = props => {
  const {
    children,
    modalVisible,
    onRequestClose
  } = props;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    react_modal__WEBPACK_IMPORTED_MODULE_1___default.a.setAppElement('body');
  }, []);
  return __jsx(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {
    isOpen: modalVisible,
    onRequestClose: onRequestClose,
    style: customStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (MDCModal);

/***/ }),

/***/ "./components/research-pdf-form/ResearchPdfForm.styled.js":
/*!****************************************************************!*\
  !*** ./components/research-pdf-form/ResearchPdfForm.styled.js ***!
  \****************************************************************/
/*! exports provided: ResearchPdfFormWrapper, ImageWrapper, CloseIcon, ContentWrapper, Title, Description, InputWrapper, ButtonWrapper, StyledAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearchPdfFormWrapper", function() { return ResearchPdfFormWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputWrapper", function() { return InputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledAnchor", function() { return StyledAnchor; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const ResearchPdfFormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ResearchPdfFormstyled__ResearchPdfFormWrapper",
  componentId: "rdg6wy-0"
})(["display:flex;flex-direction:column;flex:1;min-height:591px;background-color:", ";", ""], props => props.theme.colors.white, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		max-height: 600px;
		max-width: 724px;
	`);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ResearchPdfFormstyled__ImageWrapper",
  componentId: "rdg6wy-1"
})(["align-self:flex-end;cursor:pointer;height:32px;width:32px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:50%;&:hover{background-color:", ";}"], props => props.theme.colors.sbGrey);
const CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "ResearchPdfFormstyled__CloseIcon",
  componentId: "rdg6wy-2"
})(["height:18px;width:18px;"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ResearchPdfFormstyled__ContentWrapper",
  componentId: "rdg6wy-3"
})(["display:flex;flex-direction:column;flex:1;justify-content:center;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		margin: 0 62px;
	`);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "ResearchPdfFormstyled__Title",
  componentId: "rdg6wy-4"
})(["font-family:", ";font-size:24px;line-height:30px;color:", ";margin:0 0 12px;text-align:center;"], props => props.theme.fonts.graphikBold, props => props.theme.colors.black);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h5.withConfig({
  displayName: "ResearchPdfFormstyled__Description",
  componentId: "rdg6wy-5"
})(["font-family:", ";font-size:16px;line-height:22px;margin-bottom:0 0 18px;text-align:center;"], props => props.theme.fonts.financier);
const InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ResearchPdfFormstyled__InputWrapper",
  componentId: "rdg6wy-6"
})(["margin-bottom:12px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		margin-bottom: 16px;
		&:nth-child(6) {
        	margin-bottom: 40px;
    	}
	`);
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ResearchPdfFormstyled__ButtonWrapper",
  componentId: "rdg6wy-7"
})(["align-self:center;"]);
const StyledAnchor = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "ResearchPdfFormstyled__StyledAnchor",
  componentId: "rdg6wy-8"
})(["text-decoration:none;"]);

/***/ }),

/***/ "./components/research-pdf-form/index.js":
/*!***********************************************!*\
  !*** ./components/research-pdf-form/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input */ "./components/input/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button */ "./components/button/index.js");
/* harmony import */ var _ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ResearchPdfForm.styled */ "./components/research-pdf-form/ResearchPdfForm.styled.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/components/research-pdf-form/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ResearchPdfForm = props => {
  const {
    firstName,
    company,
    email,
    onChange,
    onSubmit,
    isDisabled,
    onRequestClose,
    pdfForm
  } = props;
  return __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["ResearchPdfFormWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["ImageWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["CloseIcon"], {
    src: "/static/images/closeIcon.png",
    srcSet: "/static/images/closeIcon.png 1x, /static/images/closeIcon@2x.png 2x, /static/images/closeIcon@3x.png 3x",
    onClick: onRequestClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })), __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "Just one last thing.."), __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["Description"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "To get this case study completely free, please leave us your name and email address to receive future news and updates."), __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["InputWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "First name",
    placeholder: "Margaret Mango",
    name: "firstName",
    value: firstName,
    onChange: onChange,
    isRequired: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  })), __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["InputWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Email",
    placeholder: "margaret@mango.com",
    name: "email",
    value: email,
    onChange: onChange,
    isRequired: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  })), __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["InputWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(_input__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Company",
    placeholder: "Mango Tree",
    name: "company",
    value: company,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  })), __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["ButtonWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx(_ResearchPdfForm_styled__WEBPACK_IMPORTED_MODULE_3__["StyledAnchor"], {
    onClick: e => isDisabled ? e.preventDefault() : () => {},
    href: pdfForm,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    btnText: "Download PDF",
    onClick: onSubmit,
    isDisabled: isDisabled,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (ResearchPdfForm);

/***/ }),

/***/ "./components/social-icon/index.js":
/*!*****************************************!*\
  !*** ./components/social-icon/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-social-icons */ "react-social-icons");
/* harmony import */ var react_social_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_social_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/colors */ "./assets/colors.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/components/social-icon/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const SocialIcon = props => {
  const {
    url
  } = props;
  return __jsx(react_social_icons__WEBPACK_IMPORTED_MODULE_1__["SocialIcon"], {
    url: url,
    style: {
      height: 40,
      width: 40,
      marginRight: 20
    },
    bgColor: _assets_colors__WEBPACK_IMPORTED_MODULE_2__["MDC_PURPLE"],
    fgColor: _assets_colors__WEBPACK_IMPORTED_MODULE_2__["WHITE"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SocialIcon);

/***/ }),

/***/ "./components/start-download-form/StartDownloadForm.js":
/*!*************************************************************!*\
  !*** ./components/start-download-form/StartDownloadForm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button */ "./components/button/index.js");
/* harmony import */ var _StartDownloadForm_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StartDownloadForm.styled */ "./components/start-download-form/StartDownloadForm.styled.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/components/start-download-form/StartDownloadForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const StartDownloadForm = props => {
  const {
    onRequestClose,
    pdfForm,
    onSubmit
  } = props;
  return __jsx(_StartDownloadForm_styled__WEBPACK_IMPORTED_MODULE_2__["StartDownloadFormWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_StartDownloadForm_styled__WEBPACK_IMPORTED_MODULE_2__["ImageWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_StartDownloadForm_styled__WEBPACK_IMPORTED_MODULE_2__["CloseIcon"], {
    src: "/static/images/closeIcon.png",
    srcSet: "/static/images/closeIcon.png 1x, /static/images/closeIcon@2x.png 2x, /static/images/closeIcon@3x.png 3x",
    onClick: onRequestClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })), __jsx(_StartDownloadForm_styled__WEBPACK_IMPORTED_MODULE_2__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_StartDownloadForm_styled__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "Start your download"), __jsx(_StartDownloadForm_styled__WEBPACK_IMPORTED_MODULE_2__["Description"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, "After reading, If you'd like to learn more about how we can help you optimize your data spend, or hear more about any aspect of our market data management services, get in touch with our team and we'd be happy to help you."), __jsx(_StartDownloadForm_styled__WEBPACK_IMPORTED_MODULE_2__["ButtonWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(_StartDownloadForm_styled__WEBPACK_IMPORTED_MODULE_2__["StyledAnchor"], {
    href: pdfForm,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(_button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    btnText: "Download",
    onClick: onSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (StartDownloadForm);

/***/ }),

/***/ "./components/start-download-form/StartDownloadForm.styled.js":
/*!********************************************************************!*\
  !*** ./components/start-download-form/StartDownloadForm.styled.js ***!
  \********************************************************************/
/*! exports provided: StartDownloadFormWrapper, ImageWrapper, CloseIcon, ContentWrapper, Title, Description, ButtonWrapper, StyledAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartDownloadFormWrapper", function() { return StartDownloadFormWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIcon", function() { return CloseIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyledAnchor", function() { return StyledAnchor; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const StartDownloadFormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StartDownloadFormstyled__StartDownloadFormWrapper",
  componentId: "g865k7-0"
})(["display:flex;flex-direction:column;flex:1;min-height:591px;background-color:", ";", ""], props => props.theme.colors.white, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		max-height: 600px;
		max-width: 724px;
	`);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StartDownloadFormstyled__ImageWrapper",
  componentId: "g865k7-1"
})(["align-self:flex-end;cursor:pointer;height:32px;width:32px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:50%;&:hover{background-color:", ";}"], props => props.theme.colors.sbGrey);
const CloseIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "StartDownloadFormstyled__CloseIcon",
  componentId: "g865k7-2"
})(["height:18px;width:18px;"]);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StartDownloadFormstyled__ContentWrapper",
  componentId: "g865k7-3"
})(["display:flex;flex-direction:column;flex:1;justify-content:center;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		margin: 0 62px;
	`);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2.withConfig({
  displayName: "StartDownloadFormstyled__Title",
  componentId: "g865k7-4"
})(["font-family:", ";font-size:36px;line-height:48px;color:", ";margin:0 0 12px;text-align:center;"], props => props.theme.fonts.graphikBold, props => props.theme.colors.black);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h5.withConfig({
  displayName: "StartDownloadFormstyled__Description",
  componentId: "g865k7-5"
})(["font-family:", ";font-size:21px;line-height:28px;margin:0 0 40px;text-align:center;"], props => props.theme.fonts.financier);
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StartDownloadFormstyled__ButtonWrapper",
  componentId: "g865k7-6"
})(["align-self:center;"]);
const StyledAnchor = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "StartDownloadFormstyled__StyledAnchor",
  componentId: "g865k7-7"
})(["text-decoration:none;"]);

/***/ }),

/***/ "./components/start-download-form/index.js":
/*!*************************************************!*\
  !*** ./components/start-download-form/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StartDownloadForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StartDownloadForm */ "./components/start-download-form/StartDownloadForm.js");

/* harmony default export */ __webpack_exports__["default"] = (_StartDownloadForm__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/tab-bar/TabBar.styled.js":
/*!*********************************************!*\
  !*** ./components/tab-bar/TabBar.styled.js ***!
  \*********************************************/
/*! exports provided: Wrapper, MobileTabWrapper, TabWrapper, Tab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileTabWrapper", function() { return MobileTabWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabWrapper", function() { return TabWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "TabBarstyled__Wrapper",
  componentId: "sc-13utfq2-0"
})(["display:flex;height:72px;background-color:", ";"], props => props.backgroundColor || 'transparent');
const MobileTabWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "TabBarstyled__MobileTabWrapper",
  componentId: "sc-13utfq2-1"
})(["width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
		display: none;
	`);
const TabWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "TabBarstyled__TabWrapper",
  componentId: "sc-13utfq2-2"
})(["display:none;", " ", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	`, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	`);
const Tab = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "TabBarstyled__Tab",
  componentId: "sc-13utfq2-3"
})(["color:", ";text-decoration:none;font-size:16px;line-height:22px;font-family:", ";margin-right:50px;cursor:pointer;&:hover{opacity:0.65;transition:opacity 0.15s ease;}"], props => props.barTheme === 'dark' ? props.theme.colors.black : props.theme.colors.white, props => props.theme.fonts.graphik);

/***/ }),

/***/ "./components/tab-bar/index.js":
/*!*************************************!*\
  !*** ./components/tab-bar/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal */ "./components/modal/index.js");
/* harmony import */ var _hamburger_menu_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hamburger-menu-content */ "./components/hamburger-menu-content/index.js");
/* harmony import */ var _TabBar_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TabBar.styled */ "./components/tab-bar/TabBar.styled.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/components/tab-bar/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const linkData = [{
  href: '/research',
  tabName: 'Research'
}, {
  href: '/contact',
  tabName: 'Contact'
}];

const TabBar = props => {
  const {
    barTheme,
    backgroundColor
  } = props;
  const {
    0: modalVisible,
    1: setModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const renderLinks = () => {
    return linkData.map(data => {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        key: data.href,
        href: data.href,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: undefined
      }, __jsx(_TabBar_styled__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
        barTheme: barTheme,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: undefined
      }, data.tabName));
    });
  };

  const WebTabBar = () => __jsx(_TabBar_styled__WEBPACK_IMPORTED_MODULE_4__["TabWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(_TabBar_styled__WEBPACK_IMPORTED_MODULE_4__["Tab"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, barTheme === 'dark' && __jsx("img", {
    src: "/static/images/mdc-logo-horizontal-black.png",
    srcSet: "/static/images/mdc-logo-horizontal-black@1x.png 1x, /static/images/mdc-logo-horizontal-black@2x.png 2x, /static/images/mdc-logo-horizontal-black@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), barTheme !== 'dark' && __jsx("img", {
    src: "/static/images/mdc-logo-horizontal.png",
    srcSet: "/static/images/mdc-logo-horizontal@1x.png 1x, /static/images/mdc-logo-horizontal@2x.png 2x, /static/images/mdc-logo-horizontal@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }))), renderLinks());

  const MobileTabBar = () => __jsx(_TabBar_styled__WEBPACK_IMPORTED_MODULE_4__["MobileTabWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, barTheme === 'dark' && __jsx("img", {
    src: "/static/images/mdc-logo-horizontal-black.png",
    srcSet: "/static/images/mdc-logo-horizontal-black@1x.png 1x, /static/images/mdc-logo-horizontal-black@2x.png 2x, /static/images/mdc-logo-horizontal-black@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), barTheme !== 'dark' && __jsx("img", {
    src: "/static/images/mdc-logo-horizontal.png",
    srcSet: "/static/images/mdc-logo-horizontal@1x.png 1x, /static/images/mdc-logo-horizontal@2x.png 2x, /static/images/mdc-logo-horizontal@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }))), __jsx("div", {
    onClick: () => setModalVisible(true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, barTheme === 'dark' && __jsx("img", {
    src: "/static/images/black-hamburger.png",
    srcSet: "/static/images/black-hamburger.png 1x, /static/images/black-hamburger@2x.png 2x, /static/images/black-hamburger@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }), barTheme !== 'dark' && __jsx("img", {
    src: "/static/images/hamburger.png",
    srcSet: "/static/images/hamburger.png 1x, /static/images/hamburger@2x.png 2x, /static/images/hamburger@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  })));

  return __jsx(_TabBar_styled__WEBPACK_IMPORTED_MODULE_4__["Wrapper"], {
    themeDark: true,
    backgroundColor: backgroundColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx(WebTabBar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }), __jsx(MobileTabBar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }), __jsx(_modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    modalVisible: modalVisible,
    onRequestClose: () => setModalVisible(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx(_hamburger_menu_content__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onCloseModal: () => setModalVisible(false),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  })));
};

TabBar.defaultProps = {
  barTheme: 'light'
};
/* harmony default export */ __webpack_exports__["default"] = (TabBar);

/***/ }),

/***/ "./components/textfield/Textfield.styled.js":
/*!**************************************************!*\
  !*** ./components/textfield/Textfield.styled.js ***!
  \**************************************************/
/*! exports provided: TextFieldWrapper, Label, Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldWrapper", function() { return TextFieldWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const TextFieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Textfieldstyled__TextFieldWrapper",
  componentId: "z551o9-0"
})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "Textfieldstyled__Label",
  componentId: "z551o9-1"
})(["font-family:", ";font-size:16px;line-height:28px;color:", ";margin-bottom:5px;"], props => props.theme.fonts.graphik, props => props.theme.colors.black);
const Field = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.textarea.withConfig({
  displayName: "Textfieldstyled__Field",
  componentId: "z551o9-2"
})(["border:solid 1px #c8c8c8;height:125px;width:100%;padding:6px 0 0 14px;font-family:", ";font-size:14px;line-height:22px;color:", ";resize:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;"], props => props.theme.fonts.graphik, props => props.theme.colors.lightGrey);

/***/ }),

/***/ "./components/textfield/index.js":
/*!***************************************!*\
  !*** ./components/textfield/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Textfield_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Textfield.styled */ "./components/textfield/Textfield.styled.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/components/textfield/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Textfield = ({
  label,
  value,
  name,
  onChange,
  placeholder
}) => __jsx(_Textfield_styled__WEBPACK_IMPORTED_MODULE_1__["TextFieldWrapper"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(_Textfield_styled__WEBPACK_IMPORTED_MODULE_1__["Label"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, label), __jsx(_Textfield_styled__WEBPACK_IMPORTED_MODULE_1__["Field"], {
  value: value,
  name: name,
  placeholder: placeholder,
  onChange: onChange,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Textfield);

/***/ }),

/***/ "./components/thank-you/ThankYou.styled.js":
/*!*************************************************!*\
  !*** ./components/thank-you/ThankYou.styled.js ***!
  \*************************************************/
/*! exports provided: ThankYouWrapper, ImageWrapper, Title, Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouWrapper", function() { return ThankYouWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const ThankYouWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ThankYoustyled__ThankYouWrapper",
  componentId: "v71j8l-0"
})(["display:flex;flex-direction:column;flex:1;align-items:center;justify-content:center;background-color:", ";"], props => props.theme.colors.white);
const ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ThankYoustyled__ImageWrapper",
  componentId: "v71j8l-1"
})(["margin-bottom:29px;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "ThankYoustyled__Title",
  componentId: "v71j8l-2"
})(["font-family:", ";font-size:24px;line-height:30px;margin:0 0 9px;color:", ";", ""], props => props.theme.fonts.graphikBold, props => props.theme.colors.black, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 36px;
    line-height: 48px;
  `);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h5.withConfig({
  displayName: "ThankYoustyled__Description",
  componentId: "v71j8l-3"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0 0 44px;color:", ";text-align:center;", ""], props => props.theme.fonts.financier, props => props.theme.colors.black, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 21px;
    line-height: 28px;
    margin: 0 0 63px;
    max-width: 344px;
  `);

/***/ }),

/***/ "./components/thank-you/index.js":
/*!***************************************!*\
  !*** ./components/thank-you/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _animated_footer_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../animated-footer-link */ "./components/animated-footer-link/index.js");
/* harmony import */ var _ThankYou_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ThankYou.styled */ "./components/thank-you/ThankYou.styled.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/components/thank-you/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const ThankYou = props => {
  const {
    description,
    href,
    footerMessage,
    onClick
  } = props;
  return __jsx(_ThankYou_styled__WEBPACK_IMPORTED_MODULE_2__["ThankYouWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_ThankYou_styled__WEBPACK_IMPORTED_MODULE_2__["ImageWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/images/purple-check-mark.png",
    srcSet: "/static/images/purple-check-mark.png 1x, /static/images/purple-check-mark@2x.png 2x, /static/images/purple-check-mark@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })), __jsx(_ThankYou_styled__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "Thank You"), __jsx(_ThankYou_styled__WEBPACK_IMPORTED_MODULE_2__["Description"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, description), __jsx(_animated_footer_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    message: footerMessage,
    href: href,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }));
};

ThankYou.defaultProps = {
  email: 'your email address',
  onClick: () => {}
};
/* harmony default export */ __webpack_exports__["default"] = (ThankYou);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _sections_home_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/home-section */ "./sections/home-section/index.js");
/* harmony import */ var _utils_pdfMapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/pdfMapper */ "./utils/pdfMapper.js");
/* harmony import */ var _utils_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/validator */ "./utils/validator.js");
/* harmony import */ var _services_apiService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/apiService */ "./services/apiService.js");
/* harmony import */ var _store_useStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/useStore */ "./store/useStore.js");
/* harmony import */ var _store_actionTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/actionTypes */ "./store/actionTypes.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // Utils






const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div.withConfig({
  displayName: "pages__ContentWrapper",
  componentId: "sc-1cvwks4-0"
})(["max-width:1200px;margin:0 auto;padding:0 20px;"]);

const Home = () => {
  const {
    0: modalVisible,
    1: setModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: hasError,
    1: setHasError
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: emailSent,
    1: setEmailSent
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: pdfForm,
    1: setPdfForm
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: form,
    1: setFormValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    firstName: '',
    company: '',
    email: ''
  }); // Hooks to save the users form data

  const {
    state,
    dispatch
  } = Object(_store_useStore__WEBPACK_IMPORTED_MODULE_7__["useStore"])();
  const saveUser = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(formValues => dispatch({
    type: _store_actionTypes__WEBPACK_IMPORTED_MODULE_8__["USER_SIGNED_UP"],
    payload: formValues
  }), [dispatch]);

  const onSubmit = async () => {
    try {
      const res = await Object(_services_apiService__WEBPACK_IMPORTED_MODULE_6__["sendEmail"])(form);

      if (res.error) {
        setHasError(true);
      } else {
        // Save user form to store
        saveUser({
          name: form.firstName,
          company: form.company,
          email: form.email
        });
        setEmailSent(true);
      }
    } catch (err) {
      setHasError(true);
    }
  };

  const updateField = e => {
    setFormValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, form, {
      [e.target.name]: e.target.value
    }));
  };

  const onModalClose = () => {
    setModalVisible(false);
    setEmailSent(false);
  };

  const openModal = researchForm => {
    setModalVisible(true);
    setPdfForm(_utils_pdfMapper__WEBPACK_IMPORTED_MODULE_4__["default"][researchForm]);
  };

  const isDisabled = !form.firstName && !Object(_utils_validator__WEBPACK_IMPORTED_MODULE_5__["validateEmail"])(form.email);
  return __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_3__["Landing"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    modalVisible: modalVisible,
    onRequestClose: onModalClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, !emailSent && !hasError && !state.user && __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["ResearchPdfForm"], {
    firstName: form.firstName,
    company: form.company,
    email: form.email,
    onChange: updateField,
    isDisabled: isDisabled,
    onRequestClose: onModalClose,
    onSubmit: onSubmit,
    pdfForm: pdfForm,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }), !emailSent && !hasError && state.user && __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["StartDownloadForm"], {
    onRequestClose: onModalClose,
    pdfForm: pdfForm,
    onSubmit: () => setEmailSent(true),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }), emailSent && !hasError && __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["ThankYou"], {
    description: "Your download should start automatically. Enjoy!",
    footerMessage: "Back to research",
    href: "/research",
    onClick: onModalClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  })), __jsx(ContentWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_3__["LeaderMarketData"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }), __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_3__["WorkedWith"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }), __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_3__["WhyMdc"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }), __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_3__["Services"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }), __jsx(_sections_home_section__WEBPACK_IMPORTED_MODULE_3__["Research"], {
    onClick: openModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  })), __jsx(_components__WEBPACK_IMPORTED_MODULE_2__["ContactFooter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./sections/home-section/index.js":
/*!****************************************!*\
  !*** ./sections/home-section/index.js ***!
  \****************************************/
/*! exports provided: Landing, LeaderMarketData, Research, Services, WhyMdc, WorkedWith */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _landing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing */ "./sections/home-section/landing/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Landing", function() { return _landing__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _leader_market_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./leader-market-data */ "./sections/home-section/leader-market-data/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeaderMarketData", function() { return _leader_market_data__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _research__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./research */ "./sections/home-section/research/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Research", function() { return _research__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./sections/home-section/services/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return _services__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _why_mdc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./why-mdc */ "./sections/home-section/why-mdc/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WhyMdc", function() { return _why_mdc__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _worked_with__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./worked-with */ "./sections/home-section/worked-with/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WorkedWith", function() { return _worked_with__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./sections/home-section/landing/Landing.styled.js":
/*!*********************************************************!*\
  !*** ./sections/home-section/landing/Landing.styled.js ***!
  \*********************************************************/
/*! exports provided: LandingWrapper, ContentWrapper, Title, Description, ButtonWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingWrapper", function() { return LandingWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const LandingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Landingstyled__LandingWrapper",
  componentId: "t8svsq-0"
})(["background-image:url('/static/images/mobile-landing.jpg');background-size:cover;width:100%;", " ", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
		background-image: url("/static/images/tablet-landing.jpg");
	`, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		background-image: url("/static/images/desktop-landing.png");
  `);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Landingstyled__ContentWrapper",
  componentId: "t8svsq-1"
})(["max-width:1200px;margin:0 auto;padding:0 20px;display:flex;flex-direction:column;flex:1;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Landingstyled__Title",
  componentId: "t8svsq-2"
})(["font-family:", ";font-size:42px;line-height:44px;color:", ";padding:40px 0 12px 0;margin-bottom:16px;", ""], props => props.theme.fonts.graphikBold, props => props.theme.colors.white, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 57px;
    line-height: 64px;
  `);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Landingstyled__Description",
  componentId: "t8svsq-3"
})(["font-family:", ";font-weight:400;font-size:21px;line-height:24px;color:", ";margin:0 0 42px 0;text-align:left;max-width:720px;", ""], props => props.theme.fonts.financier, props => props.theme.colors.white, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 24px;
    line-height: 32px;
  `);
const ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Landingstyled__ButtonWrapper",
  componentId: "t8svsq-4"
})(["display:flex;flex-direction:row;justify-content:space-between;width:332px;margin:0 0 38px 0;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    width: 412px;
  `);

/***/ }),

/***/ "./sections/home-section/landing/index.js":
/*!************************************************!*\
  !*** ./sections/home-section/landing/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Landing_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Landing.styled */ "./sections/home-section/landing/Landing.styled.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/button */ "./components/button/index.js");
/* harmony import */ var _components_tab_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/tab-bar */ "./components/tab-bar/index.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/sections/home-section/landing/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Landing = () => __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["LandingWrapper"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["ContentWrapper"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(_components_tab_bar__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["Title"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Industry research by", __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), " industry experts."), __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["Description"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "We are a boutique consulting firm serving the financial information services industry. Our consultants are industry experts on market and reference data products and investment management solutions."), __jsx(_Landing_styled__WEBPACK_IMPORTED_MODULE_2__["ButtonWrapper"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
  btnText: "View Research",
  onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/research'),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}), __jsx(_components_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
  btnText: "Contact us",
  isDefault: false,
  onClick: () => next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/contact'),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}))));

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "./sections/home-section/leader-market-data/LeaderMarketData.styled.js":
/*!*****************************************************************************!*\
  !*** ./sections/home-section/leader-market-data/LeaderMarketData.styled.js ***!
  \*****************************************************************************/
/*! exports provided: LeaderMarketDataWrapper, Content, Title, InfoWrapper, InfoText, FactsWrapper, ProjectsCompletedWrapper, NumberText, FactsText, FooterText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderMarketDataWrapper", function() { return LeaderMarketDataWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWrapper", function() { return InfoWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoText", function() { return InfoText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactsWrapper", function() { return FactsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsCompletedWrapper", function() { return ProjectsCompletedWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberText", function() { return NumberText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactsText", function() { return FactsText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterText", function() { return FooterText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const LeaderMarketDataWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "LeaderMarketDatastyled__LeaderMarketDataWrapper",
  componentId: "sc-1rb8ak0-0"
})(["display:flex;flex-direction:column;flex:1;background-color:", ";margin:40px 0 75px 0;", ""], props => props.theme.colors.white, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin: 96px 0 151px 0;
  `);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "LeaderMarketDatastyled__Content",
  componentId: "sc-1rb8ak0-1"
})(["display:flex;flex-direction:column;margin-bottom:20px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    flex-direction: row;
    justify-content: space-between;
  `);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "LeaderMarketDatastyled__Title",
  componentId: "sc-1rb8ak0-2"
})(["font-family:", ";font-size:24px;line-height:30px;color:", ";margin:0 0 20px 0;", ""], props => props.theme.fonts.graphikBold, props => props.theme.colors.black, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		font-size: 36px;
		line-height: 48px;
  `);
const InfoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "LeaderMarketDatastyled__InfoWrapper",
  componentId: "sc-1rb8ak0-3"
})(["display:flex;flex-direction:column;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    max-width: 780px;
  `);
const InfoText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "LeaderMarketDatastyled__InfoText",
  componentId: "sc-1rb8ak0-4"
})(["font-family:", ";font-size:18px;line-height:26px;color:", ";margin:0 0 24px 0;", "\t"], props => props.theme.fonts.financier, props => props.theme.colors.black, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		font-size: 24px;
		line-height: 30px;
	`);
const FactsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "LeaderMarketDatastyled__FactsWrapper",
  componentId: "sc-1rb8ak0-5"
})(["display:flex;flex-direction:row;justify-content:flex-start;margin-bottom:30px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    flex-direction: column;
	justify-content: flex-start;
	margin-left: 40px;
  `);
const ProjectsCompletedWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "LeaderMarketDatastyled__ProjectsCompletedWrapper",
  componentId: "sc-1rb8ak0-6"
})(["display:flex;flex-direction:column;margin-right:40px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin-bottom: 38px;
  `);
const NumberText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "LeaderMarketDatastyled__NumberText",
  componentId: "sc-1rb8ak0-7"
})(["font-family:", ";font-size:36px;line-height:36px;color:", ";margin:0 0 10px 0;", ""], props => props.theme.fonts.graphikBold, props => props.theme.colors.mdcPurple, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
	font-size: 48px;
	line-height: 48px;
  `);
const FactsText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "LeaderMarketDatastyled__FactsText",
  componentId: "sc-1rb8ak0-8"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0;"], props => props.theme.fonts.financier, props => props.theme.colors.lightGrey);
const FooterText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "LeaderMarketDatastyled__FooterText",
  componentId: "sc-1rb8ak0-9"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";cursor:pointer;&:hover{color:#3d0099;transition:color 0.25s ease;}"], props => props.theme.fonts.graphik, props => props.theme.colors.mdcPurple);

/***/ }),

/***/ "./sections/home-section/leader-market-data/index.js":
/*!***********************************************************!*\
  !*** ./sections/home-section/leader-market-data/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_animated_footer_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/animated-footer-link */ "./components/animated-footer-link/index.js");
/* harmony import */ var _LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LeaderMarketData.styled */ "./sections/home-section/leader-market-data/LeaderMarketData.styled.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/sections/home-section/leader-market-data/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const LeaderMarketData = () => {
  return __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["LeaderMarketDataWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["InfoWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Leader in market data consulting"), __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["InfoText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Market Data Company is a professional consulting firm with experts skilled in Market Data products and Management. We are committed to helping financial investment firms optimize Market and Reference data spend."), __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["InfoText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "We partner with our clients to answer the growing demands of their business by providing the expertise in the details that lead to increased profitability. Specifically, MDC has developed a series of diagnostic tools and programs that tangibly drive down costs while optimizing services.")), __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["FactsWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["ProjectsCompletedWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["NumberText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "106"), __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["FactsText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Projects completed")), __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["ProjectsCompletedWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["NumberText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "$154MM"), __jsx(_LeaderMarketData_styled__WEBPACK_IMPORTED_MODULE_2__["FactsText"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, "Client dollars saved")))));
};

/* harmony default export */ __webpack_exports__["default"] = (LeaderMarketData);

/***/ }),

/***/ "./sections/home-section/research/Research.styled.js":
/*!***********************************************************!*\
  !*** ./sections/home-section/research/Research.styled.js ***!
  \***********************************************************/
/*! exports provided: ResearchWrapper, HeaderWrapper, HeaderTitle, HeaderDescription, CardContentWrapper, CardWrapper, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResearchWrapper", function() { return ResearchWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderWrapper", function() { return HeaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTitle", function() { return HeaderTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderDescription", function() { return HeaderDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContentWrapper", function() { return CardContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWrapper", function() { return CardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const ResearchWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Researchstyled__ResearchWrapper",
  componentId: "sc-1uddaix-0"
})(["display:flex;flex-direction:column;flex:1;margin-bottom:93px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin-bottom: 160px;
  `);
const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Researchstyled__HeaderWrapper",
  componentId: "sc-1uddaix-1"
})(["display:flex;flex-direction:column;aligh-items:flex-start;margin-bottom:55px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    max-width: 780px;
`);
const HeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Researchstyled__HeaderTitle",
  componentId: "sc-1uddaix-2"
})(["font-family:", ";font-size:24px;line-height:30px;color:", ";margin:0 0 13px 0;", ""], props => props.theme.fonts.graphikBold, props => props.theme.colors.black, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 36px;
    line-height: 48px;
  `);
const HeaderDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "Researchstyled__HeaderDescription",
  componentId: "sc-1uddaix-3"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0;", ""], props => props.theme.fonts.financier, props => props.theme.colors.black, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 24px;
    line-height: 30px;
  `);
const CardContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Researchstyled__CardContentWrapper",
  componentId: "sc-1uddaix-4"
})(["display:flex;flex-direction:column;margin-bottom:16px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    flex-direction: row;
    margin-bottom: 35px;
  `);
const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Researchstyled__CardWrapper",
  componentId: "sc-1uddaix-5"
})(["margin-bottom:20px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin-bottom: 0;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
  `);
const Footer = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "Researchstyled__Footer",
  componentId: "sc-1uddaix-6"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";cursor:pointer;&:hover{color:#3d0099;transition:color 0.25s ease;}"], props => props.theme.fonts.graphik, props => props.theme.colors.mdcPurple);

/***/ }),

/***/ "./sections/home-section/research/index.js":
/*!*************************************************!*\
  !*** ./sections/home-section/research/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_animated_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/animated-card */ "./components/animated-card/index.js");
/* harmony import */ var _components_animated_footer_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/animated-footer-link */ "./components/animated-footer-link/index.js");
/* harmony import */ var _Research_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Research.styled */ "./sections/home-section/research/Research.styled.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/sections/home-section/research/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Research = ({
  onClick
}) => {
  return __jsx(_Research_styled__WEBPACK_IMPORTED_MODULE_3__["ResearchWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_Research_styled__WEBPACK_IMPORTED_MODULE_3__["HeaderWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx(_Research_styled__WEBPACK_IMPORTED_MODULE_3__["HeaderTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Research & Case Studies"), __jsx(_Research_styled__WEBPACK_IMPORTED_MODULE_3__["HeaderDescription"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "MDC has done extensive research over the past 10 years through its qualitative and quantitative analytics. Our findings have been linked to the strength of a firms operational management and its investment strategy, and can be used to improve capabilities in core business areas such as client intelligence, trading strategies, and business productivity.")), __jsx(_Research_styled__WEBPACK_IMPORTED_MODULE_3__["CardContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(_Research_styled__WEBPACK_IMPORTED_MODULE_3__["CardWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(_components_animated_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Data Management Compliance: The Right to Audit",
    description: "THE RIGHT TO AUDIT is a common phrase used in most every Data Vendor or Exchange Agreement (Data Provider Agreements). It is neither new, misunderstood, nor misrepresented. Yet this term has wreaked havoc of late, as it exposes the three modern day plagues causing considerable distress amongst financial...",
    onClick: () => onClick('rightToAudit'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  })), __jsx(_Research_styled__WEBPACK_IMPORTED_MODULE_3__["CardWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(_components_animated_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "The Value of Market Data Administration: Transparency, Accountability & Governance",
    description: "AS FINANCIAL FIRMS GRAPPLE with increasing demands for market data, dealing with the number and complexity of market data licenses and subscriptions can be overwhelming. The volume and variety challenges their ability to effectively manage costs, control user-access, monitor usage, and produce ...",
    onClick: () => onClick('accountabilityAndGovernance'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  })), __jsx(_Research_styled__WEBPACK_IMPORTED_MODULE_3__["CardWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx(_components_animated_card__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "MDC Forecasts 10-13% Increase in Data Spend",
    description: "WITHOUT ANY CHANGE to consumption, service mix, or even annual price increases, Canadian-based financial services firms can expect a +10% price increase in their Market and Reference Data spend for 2014. To understand why, firms need only look to the fall of the CAD$ relative to the US$ for the change that will impact their general ledgers...",
    onClick: () => onClick('dataSpend'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }))), __jsx(_components_animated_footer_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
    message: "View all of our research",
    href: "/research",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Research);

/***/ }),

/***/ "./sections/home-section/services/Services.styled.js":
/*!***********************************************************!*\
  !*** ./sections/home-section/services/Services.styled.js ***!
  \***********************************************************/
/*! exports provided: ServicesWrapper, HeaderWrapper, HeaderTitle, HeaderDescription, ContentWrapper, CardWrapper, CardImage, CardContent, CardTitle, CardDescription, FooterText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesWrapper", function() { return ServicesWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderWrapper", function() { return HeaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderTitle", function() { return HeaderTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderDescription", function() { return HeaderDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWrapper", function() { return CardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImage", function() { return CardImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardContent", function() { return CardContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTitle", function() { return CardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDescription", function() { return CardDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterText", function() { return FooterText; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const ServicesWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Servicesstyled__ServicesWrapper",
  componentId: "xea5xp-0"
})(["display:flex;flex-direction:column;flex:1;margin-bottom:83px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin-bottom: 160px;
  `);
const HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Servicesstyled__HeaderWrapper",
  componentId: "xea5xp-1"
})(["display:flex;flex-direction:column;align-items:flex-start;margin-bottom:43px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin-bottom: 49px;
    max-width: 780px;
  `);
const HeaderTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "Servicesstyled__HeaderTitle",
  componentId: "xea5xp-2"
})(["font-family:", ";font-size:24px;line-height:30px;margin:0 0 17px 0;", ""], props => props.theme.fonts.graphikBold, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
    font-size: 36px;
    line-height: 48px;
  `);
const HeaderDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "Servicesstyled__HeaderDescription",
  componentId: "xea5xp-3"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0;", ""], props => props.theme.fonts.financier, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
    font-size: 24px;
    line-height: 30px;
  `);
const ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Servicesstyled__ContentWrapper",
  componentId: "xea5xp-4"
})(["display:flex;flex-direction:column;margin-bottom:34px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 16px;
  `);
const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Servicesstyled__CardWrapper",
  componentId: "xea5xp-5"
})(["display:flex;flex-direction:column;align-items:center;margin-bottom:26px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
    flex-direction: row;
    align-items: flex-start;
    width: 48%;
    margin-bottom: 64px;
  `);
const CardImage = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "Servicesstyled__CardImage",
  componentId: "xea5xp-6"
})(["margin-bottom:20px;width:140px;height:140px;", " ", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
	width: 80px;
	height: 80px;
    margin-right: 24px;
    margin-bottom: 0;
  `, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
	width: 160px;
	height: 160px;
  `);
const CardContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Servicesstyled__CardContent",
  componentId: "xea5xp-7"
})(["display:flex;flex-direction:column;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    max-width: 380px;
  `);
const CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "Servicesstyled__CardTitle",
  componentId: "xea5xp-8"
})(["font-family:", ";font-size:18px;line-height:24px;color:", ";margin-bottom:7px;text-align:center;", ""], props => props.theme.fonts.graphikBold, props => props.theme.colors.black, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
    text-align: left;
  `);
const CardDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "Servicesstyled__CardDescription",
  componentId: "xea5xp-9"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0;"], props => props.theme.fonts.financier);
const FooterText = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a.withConfig({
  displayName: "Servicesstyled__FooterText",
  componentId: "xea5xp-10"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";cursor:pointer;&:hover{color:#3d0099;transition:color 0.25s ease;}", ""], props => props.theme.fonts.graphik, props => props.theme.colors.mdcPurple, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin-top: -98px;
  `);

/***/ }),

/***/ "./sections/home-section/services/index.js":
/*!*************************************************!*\
  !*** ./sections/home-section/services/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_animated_footer_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/animated-footer-link */ "./components/animated-footer-link/index.js");
/* harmony import */ var _Services_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services.styled */ "./sections/home-section/services/Services.styled.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/sections/home-section/services/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Services = () => {
  return __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["ServicesWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["HeaderWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["HeaderTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "What our services can do for you"), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["HeaderDescription"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "Taking Benchmarking to an entirely different level, our marketing data services offers you exceptional insight into the capital markets industry. With our current commercial solutions, you have the tools to take your strategy to the next level.")), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardImage"], {
    src: "/static/images/managed-services.png",
    srcSet: "/static/images/managed-services@1x.png 1x, /static/images/managed-services@2x.png 2x, /static/images/managed-services@3x.png 3x",
    width: "177",
    height: "177",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Managed services & products"), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardDescription"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "Our clients care about providing the right type of market data to their stakeholders. That's why our proprietary per security analyzer Kiaro product has been pivotal in monitoring how Bloomberg Per Security is replicating data across business applications, allowing us to accurately and rapidly assess where firms can optimize their data."))), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardImage"], {
    src: "/static/images/measure-compare.png",
    srcSet: "/static/images/measure-compare@1x.png 1x, /static/images/measure-compare@2x.png 2x, /static/images/measure-compare@3x.png 3x",
    width: "177",
    height: "177",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Measure & compare data costs"), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardDescription"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "We have done extensive research over the past 10 years through our qualitative and quantitative analytics. As a result, we've developed an approach to compare individual company data to our proprietary industry benchmark. Our findings have been linked to the strength of a firms operational management and its short and long term investment strategy."))), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardImage"], {
    src: "/static/images/match-demand.png",
    srcSet: "/static/images/match-demand@1x.png 1x, /static/images/match-demand@2x.png 2x, /static/images/match-demand@3x.png 3x",
    width: "177",
    height: "177",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "Match your strategy to the market data demand"), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardDescription"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "With expert knowledge of both your industry and your customer\u2019s needs, you can keep your data consumption activities appropriate while optimizing your commercial obligations."))), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardImage"], {
    src: "/static/images/benchmark.png",
    srcSet: "/static/images/benchmark@1x.png 1x, /static/images/benchmark@2x.png 2x, /static/images/benchmark@3x.png 3x",
    width: "177",
    height: "177",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardContent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, "Capital market spend benchmarking"), __jsx(_Services_styled__WEBPACK_IMPORTED_MODULE_2__["CardDescription"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, "Our benchmark adds exponential value through its categorization of market data products and services: technology, investments, productivity, operations, human resource strategies, and a host of other business functions. It\u2019s a peer group assessment of our client\u2019s 160 market data activities against a set of best practices. Our benchmark has inspired discussions that explore qualitative measures \u2013 enhancing performance against benchmarks.")))), __jsx(_components_animated_footer_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    message: "Get in touch to learn more",
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./sections/home-section/why-mdc/WhyMdc.styled.js":
/*!********************************************************!*\
  !*** ./sections/home-section/why-mdc/WhyMdc.styled.js ***!
  \********************************************************/
/*! exports provided: WhyMdcWrapper, HeadingWrapper, HeadingTitle, HeadingDescription, Content, CardWrapper, CardTitleWrapper, CardTitleIcon, CardTitle, CardDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhyMdcWrapper", function() { return WhyMdcWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingWrapper", function() { return HeadingWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingTitle", function() { return HeadingTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingDescription", function() { return HeadingDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWrapper", function() { return CardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTitleWrapper", function() { return CardTitleWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTitleIcon", function() { return CardTitleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardTitle", function() { return CardTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardDescription", function() { return CardDescription; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const ICON_MARGIN = '35px';
const WhyMdcWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WhyMdcstyled__WhyMdcWrapper",
  componentId: "sc-18f360v-0"
})(["display:flex;flex-direction:column;align-self:center flex:1;margin-bottom:60px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin-bottom: 100px;
  `);
const HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WhyMdcstyled__HeadingWrapper",
  componentId: "sc-18f360v-1"
})(["display:flex;flex-direction:column;align-items:flex-start;margin-bottom:40px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`     
		max-width: 780px;
  `);
const HeadingTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "WhyMdcstyled__HeadingTitle",
  componentId: "sc-18f360v-2"
})(["font-family:", ";font-size:24px;line-height:30px;margin:0 0 14px 0;", ""], props => props.theme.fonts.graphikBold, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 36px;
    line-height: 48px;
    margin: 0 0 17px 0;
  `);
const HeadingDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "WhyMdcstyled__HeadingDescription",
  componentId: "sc-18f360v-3"
})(["font-family:", ";font-size:18px;line-height:24px;margin:0;", ""], props => props.theme.fonts.financier, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		font-size: 24px;
		line-height: 30px;
`);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WhyMdcstyled__Content",
  componentId: "sc-18f360v-4"
})(["display:flex;flex-direction:column;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  `);
const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WhyMdcstyled__CardWrapper",
  componentId: "sc-18f360v-5"
})(["display:flex;flex-direction:column;margin-bottom:27px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
    width: 48%;
  `);
const CardTitleWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WhyMdcstyled__CardTitleWrapper",
  componentId: "sc-18f360v-6"
})(["display:flex;flex-direction:row;"]);
const CardTitleIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img.withConfig({
  displayName: "WhyMdcstyled__CardTitleIcon",
  componentId: "sc-18f360v-7"
})(["height:27px;width:27px;margin-right:8px;", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    margin-right: 16px;
  `);
const CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "WhyMdcstyled__CardTitle",
  componentId: "sc-18f360v-8"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0 0 10px 0;", ""], props => props.theme.fonts.graphikBold, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 18px;
    line-height: 24px;
  `);
const CardDescription = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "WhyMdcstyled__CardDescription",
  componentId: "sc-18f360v-9"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0 0 0 ", ";", ""], props => props.theme.fonts.financier, ICON_MARGIN, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
    font-size: 16px;
    line-height: 22px;
    max-width: 450px;
  `);

/***/ }),

/***/ "./sections/home-section/why-mdc/index.js":
/*!************************************************!*\
  !*** ./sections/home-section/why-mdc/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WhyMdc.styled */ "./sections/home-section/why-mdc/WhyMdc.styled.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/sections/home-section/why-mdc/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const descriptionData = [{
  title: 'The right people, solving the right problems with passion',
  description: 'Our people bring a mix of expertise to solve problems with a different, more dedicated mindset, devising powerful tools and solutions for our clients’ toughest challenges'
}, {
  title: 'Highly effective market data governance structure',
  description: 'Our approach brings together a highly effective discipline that focuses on process, controls and vendors.'
}, {
  title: 'We’ve saved upwards of 35% on total data spend for our clients',
  description: 'At the end of the day, it’s our clients bottom line that we take care of, and the results speak for themselves.'
}, {
  title: 'Market data management optimization with proven results',
  description: 'Results are predicated by our strengths surrounding operational Governance and Market Data Vendors'
}];

const Card = props => {
  const {
    title,
    description
  } = props;
  return __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["CardWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["CardTitleWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["CardTitleIcon"], {
    src: "/static/images/checkmark.png",
    srcSet: "/static/images/checkmark@1x.png 1x, /static/images/checkmark@2x.png 2x, /static/images/checkmark@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, title)), __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["CardDescription"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, description));
};

const WhyMdc = () => {
  const renderDescription = () => {
    return descriptionData.map(data => {
      const {
        title,
        description
      } = data;
      return __jsx(Card, {
        key: title,
        title: title,
        description: description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: undefined
      });
    });
  };

  return __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["WhyMdcWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["HeadingWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["HeadingTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, "Why Market Data Company?"), __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["HeadingDescription"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, "From inception, our focus has been on the dynamics and complexities of market data and the critical third-party relationships built through data providers within the Capital Markets and Wealth Management industries.")), __jsx(_WhyMdc_styled__WEBPACK_IMPORTED_MODULE_1__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, renderDescription()));
};

/* harmony default export */ __webpack_exports__["default"] = (WhyMdc);

/***/ }),

/***/ "./sections/home-section/worked-with/WorkedWith.styled.js":
/*!****************************************************************!*\
  !*** ./sections/home-section/worked-with/WorkedWith.styled.js ***!
  \****************************************************************/
/*! exports provided: WorkedWithWrapper, Title, Description, CardWrapper, LogoContentWrapper, LogoWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkedWithWrapper", function() { return WorkedWithWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardWrapper", function() { return CardWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoContentWrapper", function() { return LogoContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoWrapper", function() { return LogoWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components-breakpoint */ "styled-components-breakpoint");
/* harmony import */ var styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1__);


const WorkedWithWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WorkedWithstyled__WorkedWithWrapper",
  componentId: "sc-10nv40i-0"
})(["display:flex;flex-direction:column;flex:1;align-items:flex-start;margin-bottom:120px;"]);
const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "WorkedWithstyled__Title",
  componentId: "sc-10nv40i-1"
})(["font-family:", ";font-size:36px;line-height:48px;color:", ";margin:0 0 18px 0;"], props => props.theme.fonts.graphikBold, props => props.theme.colors.black);
const Description = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "WorkedWithstyled__Description",
  componentId: "sc-10nv40i-2"
})(["font-family:", ";font-size:18px;line-height:26px;margin:0 0 46px 0;", ""], props => props.theme.fonts.financier, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		font-size: 24px;
		line-height: 30px;
		max-width: 50%;
	`);
const CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WorkedWithstyled__CardWrapper",
  componentId: "sc-10nv40i-3"
})(["margin-bottom:47px;box-shadow:0 8px 12px 2px rgba(0,0,0,0.1);"]);
const LogoContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WorkedWithstyled__LogoContentWrapper",
  componentId: "sc-10nv40i-4"
})(["display:flex;flex:1;align-items:center;justify-content:space-between;flex-wrap:wrap;width:100%;"]);
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "WorkedWithstyled__LogoWrapper",
  componentId: "sc-10nv40i-5"
})(["width:48%;margin-bottom:40px;transform:scale(0.75);display:flex;justify-content:center;", " ", ""], styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('tablet')`
		margin-bottom: 0; 
		transform: scale(0.6);
		width: 25%;
	`, styled_components_breakpoint__WEBPACK_IMPORTED_MODULE_1___default()('desktop')`
		transform: scale(0.8);
	`);

/***/ }),

/***/ "./sections/home-section/worked-with/index.js":
/*!****************************************************!*\
  !*** ./sections/home-section/worked-with/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_company_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/company-card */ "./components/company-card/index.js");
/* harmony import */ var _WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WorkedWith.styled */ "./sections/home-section/worked-with/WorkedWith.styled.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/sections/home-section/worked-with/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const COMPANY_DATA = [{
  title: 'Canada Pension Plan Investment Board',
  description: `“MDC identified and realized vendor cost savings of 12% of our spend, and then developed a target state organization with capabilities to effectively manage market data products, consumption, costs and vendors”`,
  role: 'Marc Odho – Head of Data Management',
  company: 'PSP'
}, {
  title: 'PSP Investissements',
  description: `“The team at Market Data Company is great to work with. Each consultant has their own strengths and weaknesses, and are great at what they do. In my book, I highly recommend the entire team at MDC.”`,
  role: 'Alex DiCristofano, Director of Market Data',
  company: 'Aviva'
}, {
  title: 'Aviva Investors',
  description: `“Robert and his team brought the right expertise to the job, making the transitional program easier to manage. MDC’s approach to market data supported our Global operations and provided a clear line of sight to our vendor spend.”`,
  role: 'Kelly McManis, Head of Operations',
  company: 'Swiss Re'
}, {
  title: 'Swiss Re',
  description: `“MDC’s product Kiaro’s overspend report clearly articulated where Bloomberg data was being replicated within our technology envirorment. As a result we closed down several jobs that lead to $450,000 in cost savings.”`,
  role: 'Eric Kemeny, Vice President, Group Asset Management',
  company: 'CPPIB'
}];

const WorkedWith = () => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  let animating = false;

  const onExiting = () => {
    animating = true;
  };

  const onExited = () => {
    animating = false;
  };

  const next = () => {
    if (animating) {
      return;
    }

    const nextIndex = activeIndex === COMPANY_DATA.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const carouselItems = COMPANY_DATA.map(item => {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselItem"], {
      onExiting: onExiting,
      onExited: onExited,
      key: item.company,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: undefined
    }, __jsx(_components_company_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: item.title,
      description: item.description,
      role: item.role,
      company: item.company,
      onNext: next,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    }));
  });
  return __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["WorkedWithWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["Title"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "Who we\u2019ve worked with"), __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["Description"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, "Our consultants are industry experts on market and reference data products and investment management solutions. MDC delivers results that make financial differences."), __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["CardWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
    activeIndex: activeIndex,
    next: next,
    previous: () => {},
    interval: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, carouselItems)), __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["LogoContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["LogoWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/images/cppib.png",
    srcSet: "/static/images/cppib@1x.png 1x, /static/images/cppib@2x.png 2x, /static/images/cppib@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  })), __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["LogoWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/images/psp.png",
    srcSet: "/static/images/psp@1x.png 1x, /static/images/psp@2x.png 2x, /static/images/psp@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  })), __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["LogoWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/images/aviva.png",
    srcSet: "/static/images/aviva@1x.png 1x, /static/images/aviva@2x.png 2x, /static/images/aviva@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  })), __jsx(_WorkedWith_styled__WEBPACK_IMPORTED_MODULE_4__["LogoWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx("img", {
    src: "/static/images/iiroc.png",
    srcSet: "/static/images/iiroc@1x.png 1x, /static/images/iiroc@2x.png 2x, /static/images/iiroc@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (WorkedWith);

/***/ }),

/***/ "./services/apiEndpoints.js":
/*!**********************************!*\
  !*** ./services/apiEndpoints.js ***!
  \**********************************/
/*! exports provided: EMAIL_ENDPOINT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EMAIL_ENDPOINT", function() { return EMAIL_ENDPOINT; });
const EMAIL_ENDPOINT = '/api/email';

/***/ }),

/***/ "./services/apiService.js":
/*!********************************!*\
  !*** ./services/apiService.js ***!
  \********************************/
/*! exports provided: sendEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendEmail", function() { return sendEmail; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apiEndpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiEndpoints */ "./services/apiEndpoints.js");



const sendEmail = async payload => {
  try {
    const response = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(_apiEndpoints__WEBPACK_IMPORTED_MODULE_2__["EMAIL_ENDPOINT"], {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(payload)
    });
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    throw err;
  }
};

/***/ }),

/***/ "./store/actionTypes.js":
/*!******************************!*\
  !*** ./store/actionTypes.js ***!
  \******************************/
/*! exports provided: USER_SIGNED_UP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_SIGNED_UP", function() { return USER_SIGNED_UP; });
const USER_SIGNED_UP = 'USER_SIGNED_UP';

/***/ }),

/***/ "./store/useStore.js":
/*!***************************!*\
  !*** ./store/useStore.js ***!
  \***************************/
/*! exports provided: StoreProvider, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreProvider", function() { return StoreProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionTypes */ "./store/actionTypes.js");
var _jsxFileName = "/Users/andrewnguyen/Desktop/dev/market-data-company/store/useStore.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const initialState = {};
const StoreContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(initialState);

const userReducer = (state, action) => {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__["USER_SIGNED_UP"]:
      return {
        user: action.payload
      };

    default:
      return state;
  }
};

const StoreProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(userReducer, initialState);
  return __jsx(StoreContext.Provider, {
    value: {
      state,
      dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, children);
};
const useStore = store => {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(StoreContext);
  return {
    state,
    dispatch
  };
};

/***/ }),

/***/ "./utils/pdfMapper.js":
/*!****************************!*\
  !*** ./utils/pdfMapper.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Research
const rightToAuditPdfPath = '/static/pdfs/Data-Managment-Compliance-why-firms-are-Audited-vFinal.pdf';
const identityCrisisPdfPath = '/static/pdfs/Market-Data-Management-Identity-Crisis-value-prop.pdf';
const maturingArtPdfPath = '/static/pdfs/Market-Data-Management-Maturity-Curve-Final.pdf';
const accountabilityAndGovernancePdfPath = '/static/pdfs/Value-of-Market-Data-Admin-Exec-Summary-v27Jun16.pdf';
const dataSpendPdfPath = '/static/pdfs/FX-Impact-MD-spend-2.pdf'; // Case Studies

const caseStudiesPptPath = '/static/pdfs/MDC-case-studies.pptx'; // White Papers

const riskFactorsPdfPath = '/static/pdfs/Uncovering_FRTB_Risk_Factors.pdf'; // Surveys

const surveyInsightsPdfPath = '/static/pdfs/Market-Data-Survey-Insights-2017.pdf';
const pdfMapper = {
  rightToAudit: rightToAuditPdfPath,
  identityCrisis: identityCrisisPdfPath,
  maturingArt: maturingArtPdfPath,
  accountabilityAndGovernance: accountabilityAndGovernancePdfPath,
  dataSpend: dataSpendPdfPath,
  riskFactors: riskFactorsPdfPath,
  caseStudies: caseStudiesPptPath,
  surveyInsights: surveyInsightsPdfPath
};
/* harmony default export */ __webpack_exports__["default"] = (pdfMapper);

/***/ }),

/***/ "./utils/validator.js":
/*!****************************!*\
  !*** ./utils/validator.js ***!
  \****************************/
/*! exports provided: validateEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andrewnguyen/Desktop/dev/market-data-company/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-addons-css-transition-group":
/*!****************************************************!*\
  !*** external "react-addons-css-transition-group" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "react-social-icons":
/*!*************************************!*\
  !*** external "react-social-icons" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-social-icons");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-components-breakpoint":
/*!***********************************************!*\
  !*** external "styled-components-breakpoint" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components-breakpoint");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map