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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

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

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ALdH");


/***/ }),

/***/ "40lu":
/***/ (function(module, exports) {

module.exports = require("styled-components-breakpoint");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "61O8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/list-item/ListItem.styled.js

const ListItemWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ListItemstyled__ListItemWrapper",
  componentId: "r7lddp-0"
})(["display:flex;flex-direction:column;min-height:60px;justify-content:center;align-items:center;border-bottom:solid 1px #efefef;"]);
const Label = external_styled_components_default.a.span.withConfig({
  displayName: "ListItemstyled__Label",
  componentId: "r7lddp-1"
})(["font-size:21px;font-family:", ";color:", ";"], props => props.theme.fonts.graphik, props => props.theme.colors.black);
// CONCATENATED MODULE: ./components/list-item/index.js
var __jsx = external_react_default.a.createElement;



const ListItem = props => {
  const {
    label,
    onClick
  } = props;
  return __jsx(ListItemWrapper, {
    onClick: onClick
  }, __jsx(Label, null, label));
};

/* harmony default export */ var list_item = __webpack_exports__["a"] = (ListItem);

/***/ }),

/***/ "7koQ":
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "ALdH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/index.js + 22 modules
var components = __webpack_require__("e+cM");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-components-breakpoint"
var external_styled_components_breakpoint_ = __webpack_require__("40lu");
var external_styled_components_breakpoint_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_breakpoint_);

// CONCATENATED MODULE: ./sections/contact-section/landing/Landing.styled.js


const LandingWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Landingstyled__LandingWrapper",
  componentId: "sc-3mk9j5-0"
})(["width:100%;background-color:", ";"], props => props.theme.colors.sbGrey);
const ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Landingstyled__ContentWrapper",
  componentId: "sc-3mk9j5-1"
})(["display:flex;flex-direction:column;flex:1;max-width:1200px;margin:0 auto;padding:0 20px;"]);
const Content = external_styled_components_default.a.div.withConfig({
  displayName: "Landingstyled__Content",
  componentId: "sc-3mk9j5-2"
})(["min-height:480px;display:flex;flex-direction:column;align-items:center;justify-content:center;"]);
const Description = external_styled_components_default.a.p.withConfig({
  displayName: "Landingstyled__Description",
  componentId: "sc-3mk9j5-3"
})(["font-family:", ";font-size:24px;line-height:30px;color:", ";margin:0;text-align:center;", ""], props => props.theme.fonts.financier, props => props.theme.colors.black, external_styled_components_breakpoint_default()('desktop')`
    font-size: 36px;
    line-height: 42px;
  `);
// EXTERNAL MODULE: ./components/tab-bar/index.js + 1 modules
var tab_bar = __webpack_require__("oQsg");

// CONCATENATED MODULE: ./sections/contact-section/landing/index.js

var __jsx = external_react_default.a.createElement;



const Landing = () => __jsx(LandingWrapper, null, __jsx(ContentWrapper, null, __jsx(tab_bar["a" /* default */], {
  barTheme: "dark"
}), __jsx(Content, null, __jsx(Description, null, "Whether you'd like to request a consultation or have any questions for us, we'd love to hear from you. Write your message in the below form and we'll be in touch."))));

/* harmony default export */ var landing = (Landing);
// CONCATENATED MODULE: ./sections/contact-section/index.js

// EXTERNAL MODULE: ./utils/validator.js
var validator = __webpack_require__("THFB");

// EXTERNAL MODULE: ./store/useStore.js
var useStore = __webpack_require__("y4cE");

// EXTERNAL MODULE: ./store/actionTypes.js
var actionTypes = __webpack_require__("k2H8");

// EXTERNAL MODULE: ./services/apiService.js + 1 modules
var apiService = __webpack_require__("W5CI");

// CONCATENATED MODULE: ./pages/contact.js

var contact_jsx = external_react_default.a.createElement;








const contact_ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "contact__ContentWrapper",
  componentId: "sc-1jz255m-0"
})(["padding:0 20px;margin-bottom:100px;margin-top:-80px;display:flex;flex-direction:column;align-items:center;flex:1;z-index:0;min-height:640px;"]);
const ThankYouWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "contact__ThankYouWrapper",
  componentId: "sc-1jz255m-1"
})(["display:flex;flex-direction:column;flex:1;min-height:500px;margin:0 40px;"]);
/* harmony default export */ var contact = __webpack_exports__["default"] = (() => {
  const {
    0: form,
    1: setFormValues
  } = Object(external_react_["useState"])({
    firstName: '',
    company: '',
    email: '',
    message: ''
  });
  const {
    0: emailSent,
    1: setEmailSent
  } = Object(external_react_["useState"])(false);
  const {
    0: hasError,
    1: setHasError
  } = Object(external_react_["useState"])(false);
  const {
    0: formError,
    1: setFormError
  } = Object(external_react_["useState"])(false);
  const {
    dispatch
  } = Object(useStore["b" /* useStore */])();
  const saveUser = Object(external_react_["useCallback"])(formValues => dispatch({
    type: actionTypes["a" /* USER_SIGNED_UP */],
    payload: formValues
  }), [dispatch]);
  const inputError = !form.firstName || !form.email || !Object(validator["a" /* validateEmail */])(form.email);
  Object(external_react_["useEffect"])(() => {
    if (formError && !inputError) {
      setFormError(false);
    }
  }, [form]);

  const updateField = e => {
    setFormValues(Object(objectSpread["a" /* default */])({}, form, {
      [e.target.name]: e.target.value
    }));
  };

  const onSubmit = async () => {
    if (inputError) {
      setFormError(true);
      return;
    }

    try {
      saveUser({
        name: form.name,
        email: form.email,
        company: form.company
      });
      const res = await Object(apiService["a" /* sendEmail */])(form);

      if (res.success) {
        setEmailSent(true);
      }
    } catch (err) {
      setHasError(true);
    }
  };

  return contact_jsx(components["d" /* Layout */], null, !emailSent && !hasError && contact_jsx(external_react_default.a.Fragment, null, contact_jsx(landing, null), contact_jsx(contact_ContentWrapper, null, contact_jsx(components["c" /* ContactForm */], {
    firstName: form.firstName,
    company: form.company,
    email: form.email,
    message: form.message,
    onChange: updateField,
    onSubmit: onSubmit,
    isError: formError
  }))), emailSent && !hasError && contact_jsx(ThankYouWrapper, null, contact_jsx(components["h" /* ThankYou */], {
    description: `We’ll reply to you at ${form.email} as soon as possible.`,
    footerMessage: "Back to home",
    href: "/"
  })));
});

/***/ }),

/***/ "AjxQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/animated-footer-link/AnimatedFooterLink.styled.js

const AnimatedFooterLinkWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "AnimatedFooterLinkstyled__AnimatedFooterLinkWrapper",
  componentId: "djcwa6-0"
})(["display:flex;flex-direction:row;align-items:baseline;"]);
const Message = external_styled_components_default.a.h4.withConfig({
  displayName: "AnimatedFooterLinkstyled__Message",
  componentId: "djcwa6-1"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0 8px 0 0;cursor:pointer;transition:all 0.15s ease;&:hover{margin:0 16px 0 0;opacity:0.65;}"], props => props.theme.fonts.graphik, props => props.theme.colors.mdcPurple);
// CONCATENATED MODULE: ./components/animated-footer-link/index.js
var __jsx = external_react_default.a.createElement;




const AnimatedFooterLink = ({
  message,
  href,
  onClick
}) => __jsx(link_default.a, {
  href: href
}, __jsx(AnimatedFooterLinkWrapper, {
  onClick: onClick
}, __jsx(Message, null, message), __jsx("img", {
  src: "/static/images/arrow.png",
  srcSet: "/static/images/arrow@1x.png 1x, /static/images/arrow@2x.png 2x, /static/images/arrow@3x.png 3x"
})));

AnimatedFooterLink.defaultProps = {
  onClick: () => {}
};
/* harmony default export */ var animated_footer_link = __webpack_exports__["a"] = (AnimatedFooterLink);

/***/ }),

/***/ "Chgs":
/***/ (function(module, exports) {

module.exports = require("react-addons-css-transition-group");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "HlVv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-components-breakpoint"
var external_styled_components_breakpoint_ = __webpack_require__("40lu");
var external_styled_components_breakpoint_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_breakpoint_);

// CONCATENATED MODULE: ./components/button/button.styled.js



const getBackgroundColor = props => {
  if (props.isDefault) {
    return props.theme.colors.mdcPurple;
  } else {
    return props.theme.colors.white;
  }
};

const ButtonWrapper = external_styled_components_default.a.button.withConfig({
  displayName: "buttonstyled__ButtonWrapper",
  componentId: "ljf8l9-0"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;width:160px;height:40px;background-color:", ";border-radius:3px;box-shadow:0 2px 8px 0 rgba(0,0,0,0.15);border:none;cursor:pointer;&:hover{background-color:", ";box-shadow:", ";transform:translateY(-1px);transition:all 0.15s ease;}", ""], props => getBackgroundColor(props), props => getBackgroundColor(props), props => {
  return props.isDefault ? '0 2px 8px 0 rgba(0, 0, 0, 0.15)' : '0 8px 16px 2px rgba(0, 0, 0, 0.15)';
}, external_styled_components_breakpoint_default()('desktop')`
    width: 180px;
    height: 48px;
  `);
const ButtonText = external_styled_components_default.a.span.withConfig({
  displayName: "buttonstyled__ButtonText",
  componentId: "ljf8l9-1"
})(["font-family:", ";font-size:14px;line-height:14px;letter-spacing:0.25px;color:", ";", ""], props => props.theme.fonts.graphikBold, props => props.isDefault ? props.theme.colors.white : props.theme.colors.black, external_styled_components_breakpoint_default()('desktop')`
    font-size: 16px;
    line-height: 24px;
  `);
// CONCATENATED MODULE: ./components/button/index.js
var __jsx = external_react_default.a.createElement;



const Button = props => {
  const {
    btnText,
    isDefault,
    onClick,
    isDisabled
  } = props;
  return __jsx(ButtonWrapper, {
    isDefault: isDefault,
    onClick: onClick,
    disabled: isDisabled
  }, __jsx(ButtonText, {
    isDefault: isDefault
  }, btnText));
};

Button.defaultProps = {
  isDefault: true,
  isSecondary: false
};
/* harmony default export */ var components_button = __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "MPXY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/label-with-arrow/LabelWithArrow.styled.js

const LabelWithArrowWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "LabelWithArrowstyled__LabelWithArrowWrapper",
  componentId: "sc-1b3pixz-0"
})(["display:flex;flex-direction:row;align-items:center;&:hover{cursor:pointer;}"]);
const Label = external_styled_components_default.a.h5.withConfig({
  displayName: "LabelWithArrowstyled__Label",
  componentId: "sc-1b3pixz-1"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0 7px 0 0;"], props => props.theme.fonts.graphik, props => props.theme.colors.mdcPurple);
// CONCATENATED MODULE: ./components/label-with-arrow/index.js
var __jsx = external_react_default.a.createElement;



const LabelWithArrow = props => {
  const {
    label,
    onClick
  } = props;
  return __jsx(LabelWithArrowWrapper, {
    onClick: onClick
  }, __jsx(Label, null, label), __jsx("img", {
    src: "/static/images/arrow.png",
    srcSet: "/static/images/arrow@1x.png 1x, /static/images/arrow@2x.png 2x, /static/images/arrow@3x.png 3x"
  }));
};

/* harmony default export */ var label_with_arrow = __webpack_exports__["a"] = (LabelWithArrow);

/***/ }),

/***/ "SPDB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/label-with-arrow/index.js + 1 modules
var label_with_arrow = __webpack_require__("MPXY");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-components-breakpoint"
var external_styled_components_breakpoint_ = __webpack_require__("40lu");
var external_styled_components_breakpoint_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_breakpoint_);

// CONCATENATED MODULE: ./components/company-card/CompanyCard.styled.js


const CompanyCardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "CompanyCardstyled__CompanyCardWrapper",
  componentId: "u0cwbv-0"
})(["display:flex;flex-direction:column;flex:1;box-shadow:0 8px 12px 2px rgba(0,0,0,0.1);", ""], external_styled_components_breakpoint_default()('desktop')`
		flex-direction: row;
		flex: 1;
		width: 100%;
		min-height: 285px;
  	`);
const ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "CompanyCardstyled__ImageWrapper",
  componentId: "u0cwbv-1"
})(["min-height:220px;width:100%;", ""], external_styled_components_breakpoint_default()('desktop')`
		min-width: 476px;
  	`);
const StyledImage = external_styled_components_default.a.img.withConfig({
  displayName: "CompanyCardstyled__StyledImage",
  componentId: "u0cwbv-2"
})(["width:100%;height:100%;object-fit:fill;"]);
const ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "CompanyCardstyled__ContentWrapper",
  componentId: "u0cwbv-3"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0 20px;min-height:320px;", ""], external_styled_components_breakpoint_default()('desktop')`
	margin: 32px 6%;
	min-height: 0;
  `);
const DescriptionWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "CompanyCardstyled__DescriptionWrapper",
  componentId: "u0cwbv-4"
})(["display:flex;flex-direction:column;margin-bottom:33px;"]);
const Title = external_styled_components_default.a.h1.withConfig({
  displayName: "CompanyCardstyled__Title",
  componentId: "u0cwbv-5"
})(["font-family:", ";font-size:18px;line-height:24px;margin:0 0 6px 0;", ""], props => props.theme.fonts.graphikBold, external_styled_components_breakpoint_default()('desktop')`
		font-size: 21px;
		line-height: 28px;
		margin-bottom: 8px;
  	`);
const DescriptionText = external_styled_components_default.a.p.withConfig({
  displayName: "CompanyCardstyled__DescriptionText",
  componentId: "u0cwbv-6"
})(["font-family:", ";font-size:21px;line-height:26px;letter-spacing:-0.11px;margin:0;"], props => props.theme.fonts.financier);
const FooterWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "CompanyCardstyled__FooterWrapper",
  componentId: "u0cwbv-7"
})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;margin-bottom:20px;", ""], external_styled_components_breakpoint_default()('desktop')`
		margin-bottom: 0;
  	`);
const RoleText = external_styled_components_default.a.p.withConfig({
  displayName: "CompanyCardstyled__RoleText",
  componentId: "u0cwbv-8"
})(["font-family:", ";font-size:16px;line-height:21px;color:", ";margin:0;"], props => props.theme.fonts.graphik, props => props.theme.colors.lightGrey);
const NextTag = external_styled_components_default.a.a.withConfig({
  displayName: "CompanyCardstyled__NextTag",
  componentId: "u0cwbv-9"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0;cursor:pointer;&:hover{color:#3d0099;transition:color 0.25s ease;}"], props => props.theme.fonts.graphik, props => props.theme.colors.mdcPurple);
// CONCATENATED MODULE: ./components/company-card/index.js
var __jsx = external_react_default.a.createElement;




const CompanyCard = props => {
  const {
    title,
    description,
    role,
    company,
    onNext,
    imageUrl
  } = props;
  return __jsx(CompanyCardWrapper, null, __jsx(ImageWrapper, null, __jsx(StyledImage, {
    src: `/static/images/${imageUrl}.png`,
    srcSet: `/static/images/${imageUrl}@1x.png 1x, /static/images/${imageUrl}@2x.png 2x,
                                 /static/images/${imageUrl}@3x.png 3x`
  })), __jsx(ContentWrapper, null, __jsx(DescriptionWrapper, null, __jsx(Title, null, title), __jsx(DescriptionText, null, description)), __jsx(FooterWrapper, null, __jsx(RoleText, null, role), __jsx(label_with_arrow["a" /* default */], {
    label: company,
    onClick: onNext
  }))));
};

/* harmony default export */ var company_card = __webpack_exports__["a"] = (CompanyCard);

/***/ }),

/***/ "SriO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./components/list-item/index.js + 1 modules
var list_item = __webpack_require__("61O8");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/hamburger-menu-content/HamburgerMenuContent.styled.js

const HamburgerMenuContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "HamburgerMenuContentstyled__HamburgerMenuContentWrapper",
  componentId: "sc-12ib83-0"
})(["display:flex;flex-direction:column;background-color:", ";width:100%;"], props => props.theme.colors.white);
const Header = external_styled_components_default.a.div.withConfig({
  displayName: "HamburgerMenuContentstyled__Header",
  componentId: "sc-12ib83-1"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;width:100%;margin-bottom:60px;"]);
// CONCATENATED MODULE: ./components/hamburger-menu-content/index.js
var __jsx = external_react_default.a.createElement;





const HamburgerMenuContent = props => {
  const {
    onCloseModal
  } = props;
  return __jsx(HamburgerMenuContentWrapper, null, __jsx(Header, null, __jsx("div", {
    onClick: () => router_default.a.push('/')
  }, __jsx("img", {
    src: "/static/images/mdc-logo-horizontal-black.png",
    srcSet: "/static/images/mdc-logo-horizontal-black@1x.png 1x, /static/images/mdc-logo-horizontal-black@2x.png 2x, /static/images/mdc-logo-horizontal-black@3x.png 3x"
  })), __jsx("div", {
    onClick: onCloseModal
  }, __jsx("img", {
    src: "/static/images/closeIcon.png",
    srcSet: "/static/images/closeIcon.png 1x, /static/images/closeIcon@2x.png 2x, /static/images/closeIcon@3x.png 3x"
  }))), __jsx(list_item["a" /* default */], {
    label: "Research",
    onClick: () => router_default.a.push('/research')
  }), __jsx(list_item["a" /* default */], {
    label: "Contact us",
    onClick: () => router_default.a.push('/contact')
  }));
};

/* harmony default export */ var hamburger_menu_content = __webpack_exports__["a"] = (HamburgerMenuContent);

/***/ }),

/***/ "THFB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return validateEmail; });
const validateEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UJvz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("7koQ");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);
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
    marginTop: '10%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  overlay: {
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.25' // margin: '20px',
    // backgroundColor: 'none'

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
    style: customStyles
  }, children);
};

/* harmony default export */ __webpack_exports__["a"] = (MDCModal);

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "W5CI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./services/apiEndpoints.js
const EMAIL_ENDPOINT = 'https://market-data-company-server.herokuapp.com/email';
// CONCATENATED MODULE: ./services/apiService.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendEmail; });



const sendEmail = async payload => {
  try {
    const response = await external_isomorphic_unfetch_default()(EMAIL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: stringify_default()(payload)
    });
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    throw err;
  }
};

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
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

    if (false) {}

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

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "e+cM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./components/animated-card/index.js + 1 modules
var animated_card = __webpack_require__("lltq");

// EXTERNAL MODULE: ./components/animated-footer-link/index.js + 1 modules
var animated_footer_link = __webpack_require__("AjxQ");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-addons-css-transition-group"
var external_react_addons_css_transition_group_ = __webpack_require__("Chgs");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-components-breakpoint"
var external_styled_components_breakpoint_ = __webpack_require__("40lu");
var external_styled_components_breakpoint_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_breakpoint_);

// CONCATENATED MODULE: ./components/bio-card/BioCard.styled.js


const Container = external_styled_components_default.a.div.withConfig({
  displayName: "BioCardstyled__Container",
  componentId: "lk04tb-0"
})(["display:flex;flex-direction:column;flex:1;width:340px;&:hover{cursor:help;}", ""], external_styled_components_breakpoint_default()('desktop')`
    width: 380px;
    min-height: 445px;
  `);
const BioCardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "BioCardstyled__BioCardWrapper",
  componentId: "lk04tb-1"
})(["display:flex;flex-direction:column;flex:1;width:100%;box-shadow:0 2px 4px 0 rgba(0,0,0,0.2);", ""], external_styled_components_breakpoint_default()('desktop')`
    max-width: 380px;
  `);
const ImageWrapper = external_styled_components_default.a.img.withConfig({
  displayName: "BioCardstyled__ImageWrapper",
  componentId: "lk04tb-2"
})(["max-width:340px;max-height:401px;", ""], external_styled_components_breakpoint_default()('desktop')`
    max-height: 320px;
    max-width: 380px;
  `);
const ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "BioCardstyled__ContentWrapper",
  componentId: "lk04tb-3"
})(["min-height:125px;display:flex;flex-direction:column;flex:1;padding-left:32px;"]);
const Name = external_styled_components_default.a.h4.withConfig({
  displayName: "BioCardstyled__Name",
  componentId: "lk04tb-4"
})(["font-family:", ";font-size:21px;line-height:24px;margin:16px 0 4px;"], props => props.theme.fonts.graphikBold);
const Role = external_styled_components_default.a.p.withConfig({
  displayName: "BioCardstyled__Role",
  componentId: "lk04tb-5"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0;"], props => props.theme.fonts.graphik);
const FooterWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "BioCardstyled__FooterWrapper",
  componentId: "lk04tb-6"
})(["display:flex;flex:1;align-items:flex-end;margin-bottom:17px;"]);
const HoveredBioCardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "BioCardstyled__HoveredBioCardWrapper",
  componentId: "lk04tb-7"
})(["display:flex;flex-direction:column;flex:1;width:100%;box-shadow:0 2px 4px 0 rgba(0,0,0,0.2);", " background-color:", ";"], external_styled_components_breakpoint_default()('desktop')`
    max-width: 380px;
  `, props => props.theme.colors.mdcPurple);
const HoveredContent = external_styled_components_default.a.div.withConfig({
  displayName: "BioCardstyled__HoveredContent",
  componentId: "lk04tb-8"
})(["display:flex;flex-direction:column;flex:1;padding:25px 32px;"]);
const HoveredName = external_styled_components_default.a.h4.withConfig({
  displayName: "BioCardstyled__HoveredName",
  componentId: "lk04tb-9"
})(["font-family:", ";font-size:21px;line-height:24px;margin:0 0 4px;color:", ";"], props => props.theme.fonts.graphikBold, props => props.theme.colors.white);
const HoveredRole = external_styled_components_default.a.p.withConfig({
  displayName: "BioCardstyled__HoveredRole",
  componentId: "lk04tb-10"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0 0 17px;color:", ";"], props => props.theme.fonts.graphik, props => props.theme.colors.white);
const HoveredDescription = external_styled_components_default.a.p.withConfig({
  displayName: "BioCardstyled__HoveredDescription",
  componentId: "lk04tb-11"
})(["font-family:", ";font-size:16px;line-height:22px;color:", ";margin:0;"], props => props.theme.fonts.financier, props => props.theme.colors.white);
// CONCATENATED MODULE: ./components/bio-card/index.js
var __jsx = external_react_default.a.createElement;





const BioCard = props => {
  const {
    name,
    role,
    message
  } = props;
  const {
    0: hovered,
    1: setHovered
  } = Object(external_react_["useState"])(false);
  return __jsx(Container, {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, !hovered && __jsx(BioCardWrapper, null, __jsx(ImageWrapper, {
    src: "/static/images/placeholder-img.png",
    srcSet: "/static/images/placeholder-img@1x.png 1x, /static/images/placeholder-img@2x.png 2x, /static/images/placeholder-img@3x.png 3x"
  }), __jsx(ContentWrapper, null, __jsx(Name, null, name), __jsx(Role, null, role), __jsx(FooterWrapper, null, __jsx(animated_footer_link["a" /* default */], {
    message: "Bio"
  })))), hovered && __jsx(HoveredBioCardWrapper, null, __jsx(HoveredContent, null, __jsx(HoveredName, null, name), __jsx(HoveredRole, null, role), message && __jsx(HoveredDescription, null, message))));
};

/* harmony default export */ var bio_card = (BioCard);
// EXTERNAL MODULE: ./components/button/index.js + 1 modules
var components_button = __webpack_require__("HlVv");

// EXTERNAL MODULE: ./components/company-card/index.js + 1 modules
var company_card = __webpack_require__("SPDB");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./components/contact-footer/ContactFooter.styled.js


const ContactFooterWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ContactFooterstyled__ContactFooterWrapper",
  componentId: "sc-1z0aj7c-0"
})(["width:100%;background:rgb(125,39,255);background:linear-gradient(90deg,rgba(125,39,255,1) 0%,rgba(180,79,255,1) 100%);"]);
const ContactFooter_styled_ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ContactFooterstyled__ContentWrapper",
  componentId: "sc-1z0aj7c-1"
})(["display:flex;flex-direction:column;align-items:center;max-width:1200px;margin:0 auto;padding:80px 20px;", ""], external_styled_components_breakpoint_default()('desktop')`
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
  `);
const Content = external_styled_components_default.a.div.withConfig({
  displayName: "ContactFooterstyled__Content",
  componentId: "sc-1z0aj7c-2"
})(["display:flex;flex-direction:column;align-items:center;margin-bottom:30px;", ""], external_styled_components_breakpoint_default()('desktop')`
    margin: 0;
    align-items: flex-start;
  `);
const Title = external_styled_components_default.a.h1.withConfig({
  displayName: "ContactFooterstyled__Title",
  componentId: "sc-1z0aj7c-3"
})(["font-family:", ";font-size:32px;line-height:42px;margin:0 0 6px 0;color:", ";", ""], props => props.theme.fonts.graphikBold, props => props.theme.colors.white, external_styled_components_breakpoint_default()('desktop')`
    font-size: 36px;
    line-height: 48px;
    margin: 0 0 8px 0;
  `);
const Description = external_styled_components_default.a.p.withConfig({
  displayName: "ContactFooterstyled__Description",
  componentId: "sc-1z0aj7c-4"
})(["font-family:", ";font-size:18px;line-height:26px;margin:0;color:", ";text-align:center;", ""], props => props.theme.fonts.financier, props => props.theme.colors.white, external_styled_components_breakpoint_default()('desktop')`
    font-size: 21px;
    line-height: 28px;
    max-width: 667px;
    text-align: left;
  `);
const ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ContactFooterstyled__ButtonWrapper",
  componentId: "sc-1z0aj7c-5"
})(["margin-bottom:0;"]);
// CONCATENATED MODULE: ./components/contact-footer/index.js
var contact_footer_jsx = external_react_default.a.createElement;





const ContactFooter = () => {
  return contact_footer_jsx(ContactFooterWrapper, null, contact_footer_jsx(ContactFooter_styled_ContentWrapper, null, contact_footer_jsx(Content, null, contact_footer_jsx(Title, null, "See how we can help"), contact_footer_jsx(Description, null, "Reach out to us to explore our services or hear our ideas about the industry in greater detail")), contact_footer_jsx(ButtonWrapper, null, contact_footer_jsx(components_button["a" /* default */], {
    btnText: "Contact us",
    onClick: () => {},
    isDefault: false,
    onClick: () => router_default.a.push('/contact')
  }))));
};

/* harmony default export */ var contact_footer = (ContactFooter);
// CONCATENATED MODULE: ./components/contact-form/ContactForm.styled.js


const FormWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ContactFormstyled__FormWrapper",
  componentId: "kj1rng-0"
})(["display:flex;flex-direction:column;flex:1;box-shadow:2px 4px 8px 0 rgba(0,0,0,0.2);width:100%;max-width:640px;background-color:", ";"], props => props.theme.colors.white);
const ContactForm_styled_Content = external_styled_components_default.a.div.withConfig({
  displayName: "ContactFormstyled__Content",
  componentId: "kj1rng-1"
})(["display:flex;flex-direction:column;justify-content:center;flex:1;padding:0 20px;", ""], external_styled_components_breakpoint_default()('desktop')`
    padding: 0 40px;
  `);
const InputWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ContactFormstyled__InputWrapper",
  componentId: "kj1rng-2"
})(["margin-bottom:20px;"]);
const ContactForm_styled_ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ContactFormstyled__ButtonWrapper",
  componentId: "kj1rng-3"
})(["align-self:center;"]);
// CONCATENATED MODULE: ./components/input/Input.styled.js

const Input_styled_InputWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Inputstyled__InputWrapper",
  componentId: "sc-1fbwxt1-0"
})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;"]);
const LabelWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Inputstyled__LabelWrapper",
  componentId: "sc-1fbwxt1-1"
})(["display:flex;flex-direction:row;"]);
const Label = external_styled_components_default.a.span.withConfig({
  displayName: "Inputstyled__Label",
  componentId: "sc-1fbwxt1-2"
})(["font-family:", ";font-size:16px;line-height:28px;color:", ";margin-bottom:5px;margin-right:2px;"], props => props.theme.fonts.graphik, props => props.theme.colors.black);
const ErrorStar = external_styled_components_default.a.span.withConfig({
  displayName: "Inputstyled__ErrorStar",
  componentId: "sc-1fbwxt1-3"
})(["font-family:'LucidaGrande';font-size:21px;color:#ff0000;"]);
const FieldWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Inputstyled__FieldWrapper",
  componentId: "sc-1fbwxt1-4"
})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;align-items:center;border:", ";background-color:", ";-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;"], props => props.isError ? `solid 1px ${props.theme.colors.red}` : 'solid 1px #c8c8c8', props => props.isError ? 'rgba(255, 39, 82, 0.02)' : `${props => props.theme.colors.white}`);
const Field = external_styled_components_default.a.input.withConfig({
  displayName: "Inputstyled__Field",
  componentId: "sc-1fbwxt1-5"
})(["height:39px;width:100%;padding-left:14px;font-family:", ";font-size:14px;line-height:22px;color:", ";border:none;&:focus{outline:none;}"], props => props.theme.fonts.graphik, props => props.isError ? props.theme.colors.red : props.theme.colors.lightGrey);
const Input_styled_ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Inputstyled__ImageWrapper",
  componentId: "sc-1fbwxt1-6"
})(["padding-right:16px;"]);
// CONCATENATED MODULE: ./components/input/index.js
var input_jsx = external_react_default.a.createElement;



const Input = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  isRequired,
  isError
}) => {
  return input_jsx(Input_styled_InputWrapper, null, input_jsx(LabelWrapper, null, input_jsx(Label, null, label), isRequired && input_jsx(ErrorStar, null, "*")), input_jsx(FieldWrapper, {
    isError: isError
  }, input_jsx(Field, {
    value: value,
    name: name,
    placeholder: placeholder,
    onChange: onChange
  }), isError && input_jsx(Input_styled_ImageWrapper, null, input_jsx("img", {
    src: "/static/images/error.png",
    srcSet: "/static/images/error.png 1x, /static/images/error@2x.png 2x, /static/images/error@3x.png 3x",
    height: "22",
    width: "22"
  }))));
};

Input.defaultProps = {
  isRequired: false
};
/* harmony default export */ var input = (Input);
// CONCATENATED MODULE: ./components/textfield/Textfield.styled.js

const TextFieldWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Textfieldstyled__TextFieldWrapper",
  componentId: "z551o9-0"
})(["display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;"]);
const Textfield_styled_Label = external_styled_components_default.a.span.withConfig({
  displayName: "Textfieldstyled__Label",
  componentId: "z551o9-1"
})(["font-family:", ";font-size:16px;line-height:28px;color:", ";margin-bottom:5px;"], props => props.theme.fonts.graphik, props => props.theme.colors.black);
const Textfield_styled_Field = external_styled_components_default.a.textarea.withConfig({
  displayName: "Textfieldstyled__Field",
  componentId: "z551o9-2"
})(["border:solid 1px #c8c8c8;height:125px;width:100%;padding:6px 0 0 14px;font-family:", ";font-size:14px;line-height:22px;color:", ";resize:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;"], props => props.theme.fonts.graphik, props => props.theme.colors.lightGrey);
// CONCATENATED MODULE: ./components/textfield/index.js
var textfield_jsx = external_react_default.a.createElement;



const Textfield = ({
  label,
  value,
  name,
  onChange,
  placeholder
}) => textfield_jsx(TextFieldWrapper, null, textfield_jsx(Textfield_styled_Label, null, label), textfield_jsx(Textfield_styled_Field, {
  value: value,
  name: name,
  placeholder: placeholder,
  onChange: onChange
}));

/* harmony default export */ var textfield = (Textfield);
// CONCATENATED MODULE: ./components/contact-form/index.js
var contact_form_jsx = external_react_default.a.createElement;







const ContactForm = ({
  onChange,
  firstName,
  company,
  email,
  message,
  onSubmit,
  isError
}) => contact_form_jsx(FormWrapper, null, contact_form_jsx(ContactForm_styled_Content, null, contact_form_jsx(InputWrapper, null, contact_form_jsx(input, {
  label: "Name" // placeholder="Margaret Mango"
  ,
  value: firstName,
  name: "firstName",
  onChange: onChange,
  isRequired: true,
  isError: isError
})), contact_form_jsx(InputWrapper, null, contact_form_jsx(input, {
  label: "Email" // placeholder="margaret@mango.com"
  ,
  value: email,
  name: "email",
  onChange: onChange,
  isRequired: true,
  isError: isError
})), contact_form_jsx(InputWrapper, null, contact_form_jsx(input, {
  label: "Company" // placeholder="Mango co."
  ,
  value: company,
  name: "company",
  onChange: onChange
})), contact_form_jsx(InputWrapper, null, contact_form_jsx(textfield, {
  label: "Message" // placeholder="Your message here"
  ,
  value: message,
  name: "message",
  onChange: onChange
})), contact_form_jsx(ContactForm_styled_ButtonWrapper, null, contact_form_jsx(components_button["a" /* default */], {
  btnText: "Contact us",
  onClick: onSubmit
}))));

/* harmony default export */ var contact_form = (ContactForm);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-social-icons"
var external_react_social_icons_ = __webpack_require__("zJq1");

// EXTERNAL MODULE: ./assets/colors.js
var colors = __webpack_require__("zWDp");

// CONCATENATED MODULE: ./components/social-icon/index.js

var social_icon_jsx = external_react_default.a.createElement;



const SocialIcon = props => {
  const {
    url
  } = props;
  return social_icon_jsx(external_react_social_icons_["SocialIcon"], {
    url: url,
    style: {
      height: 40,
      width: 40,
      marginRight: 20
    },
    bgColor: colors["f" /* MDC_PURPLE */],
    fgColor: colors["l" /* WHITE */]
  });
};

/* harmony default export */ var social_icon = (SocialIcon);
// CONCATENATED MODULE: ./components/footer/Footer.styled.js


const Footer_styled_FooterWrapper = external_styled_components_default.a.footer.withConfig({
  displayName: "Footerstyled__FooterWrapper",
  componentId: "sc-1a3izcr-0"
})(["min-height:375px;width:100%;background-color:black;", ""], external_styled_components_breakpoint_default()('desktop')`
    min-height: 350px;
    padding: 0;
  `);
const Footer_styled_ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Footerstyled__ContentWrapper",
  componentId: "sc-1a3izcr-1"
})(["display:flex;flex-direction:column;align-items:center;max-width:1200px;margin:0 auto;padding:80px 20px;", ""], external_styled_components_breakpoint_default()('tablet')`
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;
  `);
const FooterLogoWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Footerstyled__FooterLogoWrapper",
  componentId: "sc-1a3izcr-2"
})(["display:flex;margin-bottom:20px;", ""], external_styled_components_breakpoint_default()('tablet')`
    margin-bottom: 0;
  `);
const TextWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Footerstyled__TextWrapper",
  componentId: "sc-1a3izcr-3"
})(["margin-bottom:40px;", ""], external_styled_components_breakpoint_default()('tablet')`
		max-width: 600px;
		margin-bottom: 0;
		padding: 0 40px;
  `);
const MarketDataText = external_styled_components_default.a.p.withConfig({
  displayName: "Footerstyled__MarketDataText",
  componentId: "sc-1a3izcr-4"
})(["margin:0;color:", ";font-family:", ";font-weight:400;font-size:18px;line-height:26px;text-align:left;", " ", ""], props => props.theme.colors.white, props => props.theme.fonts.financier, external_styled_components_breakpoint_default()('tablet')`
    font-size: 16px;
    line-height: 24px;
  `, external_styled_components_breakpoint_default()('desktop')`
    font-size: 21px;
    line-height: 28px;
  `);
const ExploreAndSocialWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Footerstyled__ExploreAndSocialWrapper",
  componentId: "sc-1a3izcr-5"
})(["display:flex;flex-direction:row;justify-content:space-between;width:100%;", ""], external_styled_components_breakpoint_default()('tablet')`
	width: 300px;
  `);
const ExploreWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Footerstyled__ExploreWrapper",
  componentId: "sc-1a3izcr-6"
})(["display:flex;flex-direction:column;"]);
const ExploreTitle = external_styled_components_default.a.h1.withConfig({
  displayName: "Footerstyled__ExploreTitle",
  componentId: "sc-1a3izcr-7"
})(["font-size:18px;line-height:24px;color:", ";font-family:", ";margin:0 0 17px 0;", ""], props => props.theme.colors.white, props => props.theme.fonts.graphikBold, external_styled_components_breakpoint_default()('desktop')`
    font-size: 21px;
    line-height: 28px;
    margin: 0 0 23px 0;
  `);
const ExploreItem = external_styled_components_default.a.span.withConfig({
  displayName: "Footerstyled__ExploreItem",
  componentId: "sc-1a3izcr-8"
})(["font-size:16px;line-height:22px;color:#c8c8c8;margin-bottom:18px;font-family:", ";cursor:pointer;&:hover{opacity:0.65;transition:opacity 0.15s ease;}"], props => props.theme.fonts.graphik);
const SocialWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Footerstyled__SocialWrapper",
  componentId: "sc-1a3izcr-9"
})(["display:flex;flex-direction:column;margin-left:40px;"]);
const SocialContent = external_styled_components_default.a.div.withConfig({
  displayName: "Footerstyled__SocialContent",
  componentId: "sc-1a3izcr-10"
})(["display:flex;flex-direction:row;"]);
const SocialTitle = external_styled_components_default.a.h1.withConfig({
  displayName: "Footerstyled__SocialTitle",
  componentId: "sc-1a3izcr-11"
})(["font-size:18px;line-height:24px;color:", ";font-family:", ";margin:0 0 27px 0;", ""], props => props.theme.colors.white, props => props.theme.fonts.graphikBold, external_styled_components_breakpoint_default()('desktop')`
    font-size: 21px;
    line-height: 28px;
    margin: 0 0 23px 0;
  `);
// CONCATENATED MODULE: ./components/footer/index.js
var footer_jsx = external_react_default.a.createElement;





const Footer = () => footer_jsx(Footer_styled_FooterWrapper, null, footer_jsx(Footer_styled_ContentWrapper, null, footer_jsx(FooterLogoWrapper, null, footer_jsx("img", {
  src: "/static/images/white.png",
  srcSet: "/static/images/white.png 1x, /static/images/white@2x.png 2x, /static/images/white@3x.png 3x",
  width: "140",
  height: "127"
})), footer_jsx(TextWrapper, null, footer_jsx(MarketDataText, null, "Market data company is North America\u2019s leading market data solutions and consultancy company. We offer specialized consulting services and leading market data management solutions that help deal with the complexity of your data.")), footer_jsx(ExploreAndSocialWrapper, null, footer_jsx(ExploreWrapper, null, footer_jsx(ExploreTitle, null, "Explore"), footer_jsx(link_default.a, {
  href: "/research"
}, footer_jsx(ExploreItem, null, "Research")), footer_jsx(link_default.a, {
  href: "/contact"
}, footer_jsx(ExploreItem, null, "Contact"))), footer_jsx(SocialWrapper, null, footer_jsx(SocialTitle, null, "Social"), footer_jsx(SocialContent, null, footer_jsx(social_icon, {
  url: "http://facebook.com"
}), footer_jsx(social_icon, {
  url: "https://www.linkedin.com/company/market-data-company/"
}), footer_jsx(social_icon, {
  url: "http://twitter.com"
}))))));

/* harmony default export */ var footer = (Footer);
// EXTERNAL MODULE: ./components/hamburger-menu-content/index.js + 1 modules
var hamburger_menu_content = __webpack_require__("SriO");

// EXTERNAL MODULE: ./components/label-with-arrow/index.js + 1 modules
var label_with_arrow = __webpack_require__("MPXY");

// CONCATENATED MODULE: ./components/layout/Layout.styled.js

const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Layoutstyled__Wrapper",
  componentId: "apusfk-0"
})(["display:flex;flex-direction:column;flex:1;width:100%;"]);
const Layout_styled_FooterWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Layoutstyled__FooterWrapper",
  componentId: "apusfk-1"
})(["margin-top:auto;"]);
// CONCATENATED MODULE: ./components/layout/index.js
var layout_jsx = external_react_default.a.createElement;




const Layout = ({
  children
}) => {
  return layout_jsx(Wrapper, null, children, layout_jsx(Layout_styled_FooterWrapper, null, layout_jsx(footer, null)));
};

/* harmony default export */ var layout = (Layout);
// EXTERNAL MODULE: ./components/list-item/index.js + 1 modules
var list_item = __webpack_require__("61O8");

// EXTERNAL MODULE: ./components/modal/index.js
var modal = __webpack_require__("UJvz");

// CONCATENATED MODULE: ./components/research-pdf-form/ResearchPdfForm.styled.js


const ResearchPdfFormWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ResearchPdfFormstyled__ResearchPdfFormWrapper",
  componentId: "rdg6wy-0"
})(["display:flex;flex-direction:column;flex:1;min-height:591px;background-color:", ";", ""], props => props.theme.colors.white, external_styled_components_breakpoint_default()('desktop')`
		max-height: 600px;
		max-width: 724px;
	`);
const ResearchPdfForm_styled_ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ResearchPdfFormstyled__ImageWrapper",
  componentId: "rdg6wy-1"
})(["align-self:flex-end;cursor:pointer;height:32px;width:32px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:50%;&:hover{background-color:", ";}"], props => props.theme.colors.sbGrey);
const CloseIcon = external_styled_components_default.a.img.withConfig({
  displayName: "ResearchPdfFormstyled__CloseIcon",
  componentId: "rdg6wy-2"
})(["height:18px;width:18px;"]);
const ResearchPdfForm_styled_ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ResearchPdfFormstyled__ContentWrapper",
  componentId: "rdg6wy-3"
})(["display:flex;flex-direction:column;flex:1;justify-content:center;", ""], external_styled_components_breakpoint_default()('desktop')`
		margin: 0 60px;
	`);
const ResearchPdfForm_styled_Title = external_styled_components_default.a.h3.withConfig({
  displayName: "ResearchPdfFormstyled__Title",
  componentId: "rdg6wy-4"
})(["font-family:", ";font-size:24px;line-height:30px;color:", ";margin:0 0 12px;text-align:center;"], props => props.theme.fonts.graphikBold, props => props.theme.colors.black);
const ResearchPdfForm_styled_Description = external_styled_components_default.a.h5.withConfig({
  displayName: "ResearchPdfFormstyled__Description",
  componentId: "rdg6wy-5"
})(["font-family:", ";font-size:16px;line-height:22px;margin-bottom:0 0 18px;text-align:center;"], props => props.theme.fonts.financier);
const ResearchPdfForm_styled_InputWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ResearchPdfFormstyled__InputWrapper",
  componentId: "rdg6wy-6"
})(["margin-bottom:12px;", ""], external_styled_components_breakpoint_default()('desktop')`
		margin-bottom: 16px;
		&:nth-child(6) {
        	margin-bottom: 40px;
    	}
	`);
const ResearchPdfForm_styled_ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ResearchPdfFormstyled__ButtonWrapper",
  componentId: "rdg6wy-7"
})(["align-self:center;"]);
const StyledAnchor = external_styled_components_default.a.a.withConfig({
  displayName: "ResearchPdfFormstyled__StyledAnchor",
  componentId: "rdg6wy-8"
})(["text-decoration:none;"]);
// CONCATENATED MODULE: ./components/research-pdf-form/index.js
var research_pdf_form_jsx = external_react_default.a.createElement;





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
  return research_pdf_form_jsx(ResearchPdfFormWrapper, null, research_pdf_form_jsx(ResearchPdfForm_styled_ImageWrapper, null, research_pdf_form_jsx(CloseIcon, {
    src: "/static/images/closeIcon.png",
    srcSet: "/static/images/closeIcon.png 1x, /static/images/closeIcon@2x.png 2x, /static/images/closeIcon@3x.png 3x",
    onClick: onRequestClose
  })), research_pdf_form_jsx(ResearchPdfForm_styled_ContentWrapper, null, research_pdf_form_jsx(ResearchPdfForm_styled_Title, null, "Just one last thing.."), research_pdf_form_jsx(ResearchPdfForm_styled_Description, null, "To get this case study completely free, please leave us your name and email address to receive future news and updates."), research_pdf_form_jsx(ResearchPdfForm_styled_InputWrapper, null, research_pdf_form_jsx(input, {
    label: "Name" // placeholder="John Doe"
    ,
    name: "firstName",
    value: firstName,
    onChange: onChange,
    isRequired: true
  })), research_pdf_form_jsx(ResearchPdfForm_styled_InputWrapper, null, research_pdf_form_jsx(input, {
    label: "Email" // placeholder="johndoe@email.com"
    ,
    name: "email",
    value: email,
    onChange: onChange,
    isRequired: true
  })), research_pdf_form_jsx(ResearchPdfForm_styled_InputWrapper, null, research_pdf_form_jsx(input, {
    label: "Company" // placeholder="company name"
    ,
    name: "company",
    value: company,
    onChange: onChange
  })), research_pdf_form_jsx(ResearchPdfForm_styled_ButtonWrapper, null, research_pdf_form_jsx(StyledAnchor, {
    onClick: e => isDisabled ? e.preventDefault() : () => {},
    href: pdfForm,
    target: "_blank"
  }, research_pdf_form_jsx(components_button["a" /* default */], {
    btnText: "Download PDF",
    onClick: onSubmit,
    isDisabled: isDisabled
  })))));
};

/* harmony default export */ var research_pdf_form = (ResearchPdfForm);
// CONCATENATED MODULE: ./components/start-download-form/StartDownloadForm.styled.js


const StartDownloadFormWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "StartDownloadFormstyled__StartDownloadFormWrapper",
  componentId: "g865k7-0"
})(["display:flex;flex-direction:column;flex:1;min-height:560px;background-color:", ";", ""], props => props.theme.colors.white, external_styled_components_breakpoint_default()('desktop')`
		max-height: 600px;
		max-width: 724px;
	`);
const StartDownloadForm_styled_ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "StartDownloadFormstyled__ImageWrapper",
  componentId: "g865k7-1"
})(["align-self:flex-end;cursor:pointer;height:32px;width:32px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:50%;&:hover{background-color:", ";}"], props => props.theme.colors.sbGrey);
const StartDownloadForm_styled_CloseIcon = external_styled_components_default.a.img.withConfig({
  displayName: "StartDownloadFormstyled__CloseIcon",
  componentId: "g865k7-2"
})(["height:18px;width:18px;"]);
const StartDownloadForm_styled_ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "StartDownloadFormstyled__ContentWrapper",
  componentId: "g865k7-3"
})(["display:flex;flex-direction:column;flex:1;justify-content:center;", ""], external_styled_components_breakpoint_default()('desktop')`
		margin: 0 62px;
	`);
const StartDownloadForm_styled_Title = external_styled_components_default.a.h2.withConfig({
  displayName: "StartDownloadFormstyled__Title",
  componentId: "g865k7-4"
})(["font-family:", ";font-size:36px;line-height:48px;color:", ";margin:0 0 12px;text-align:center;"], props => props.theme.fonts.graphikBold, props => props.theme.colors.black);
const StartDownloadForm_styled_Description = external_styled_components_default.a.h5.withConfig({
  displayName: "StartDownloadFormstyled__Description",
  componentId: "g865k7-5"
})(["font-family:", ";font-size:21px;line-height:28px;margin:0 0 40px;text-align:center;"], props => props.theme.fonts.financier);
const StartDownloadForm_styled_ButtonWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "StartDownloadFormstyled__ButtonWrapper",
  componentId: "g865k7-6"
})(["align-self:center;"]);
const StartDownloadForm_styled_StyledAnchor = external_styled_components_default.a.a.withConfig({
  displayName: "StartDownloadFormstyled__StyledAnchor",
  componentId: "g865k7-7"
})(["text-decoration:none;"]);
// CONCATENATED MODULE: ./components/start-download-form/StartDownloadForm.js
var StartDownloadForm_jsx = external_react_default.a.createElement;




const StartDownloadForm = props => {
  const {
    onRequestClose,
    pdfForm,
    onSubmit
  } = props;
  return StartDownloadForm_jsx(StartDownloadFormWrapper, null, StartDownloadForm_jsx(StartDownloadForm_styled_ImageWrapper, null, StartDownloadForm_jsx(StartDownloadForm_styled_CloseIcon, {
    src: "/static/images/closeIcon.png",
    srcSet: "/static/images/closeIcon.png 1x, /static/images/closeIcon@2x.png 2x, /static/images/closeIcon@3x.png 3x",
    onClick: onRequestClose
  })), StartDownloadForm_jsx(StartDownloadForm_styled_ContentWrapper, null, StartDownloadForm_jsx(StartDownloadForm_styled_Title, null, "Start your download"), StartDownloadForm_jsx(StartDownloadForm_styled_Description, null, "After reading, If you'd like to learn more about how we can help you optimize your data spend, get in touch with our team and we'd be happy to help you."), StartDownloadForm_jsx(StartDownloadForm_styled_ButtonWrapper, null, StartDownloadForm_jsx(StartDownloadForm_styled_StyledAnchor, {
    href: pdfForm,
    target: "_blank"
  }, StartDownloadForm_jsx(components_button["a" /* default */], {
    btnText: "Download",
    onClick: onSubmit
  })))));
};

/* harmony default export */ var start_download_form_StartDownloadForm = (StartDownloadForm);
// CONCATENATED MODULE: ./components/start-download-form/index.js

/* harmony default export */ var start_download_form = (start_download_form_StartDownloadForm);
// EXTERNAL MODULE: ./components/tab-bar/index.js + 1 modules
var tab_bar = __webpack_require__("oQsg");

// CONCATENATED MODULE: ./components/thank-you/ThankYou.styled.js


const ThankYouWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ThankYoustyled__ThankYouWrapper",
  componentId: "v71j8l-0"
})(["display:flex;flex-direction:column;flex:1;align-items:center;justify-content:center;background-color:", ";"], props => props.theme.colors.white);
const ThankYou_styled_ImageWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ThankYoustyled__ImageWrapper",
  componentId: "v71j8l-1"
})(["margin-bottom:29px;"]);
const ThankYou_styled_Title = external_styled_components_default.a.h3.withConfig({
  displayName: "ThankYoustyled__Title",
  componentId: "v71j8l-2"
})(["font-family:", ";font-size:24px;line-height:30px;margin:0 0 9px;color:", ";", ""], props => props.theme.fonts.graphikBold, props => props.theme.colors.black, external_styled_components_breakpoint_default()('desktop')`
    font-size: 36px;
    line-height: 48px;
  `);
const ThankYou_styled_Description = external_styled_components_default.a.h5.withConfig({
  displayName: "ThankYoustyled__Description",
  componentId: "v71j8l-3"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0 0 44px;color:", ";text-align:center;", ""], props => props.theme.fonts.financier, props => props.theme.colors.black, external_styled_components_breakpoint_default()('desktop')`
    font-size: 21px;
    line-height: 28px;
    margin: 0 0 63px;
    max-width: 344px;
  `);
// CONCATENATED MODULE: ./components/thank-you/index.js
var thank_you_jsx = external_react_default.a.createElement;




const ThankYou = props => {
  const {
    description,
    href,
    footerMessage,
    onClick
  } = props;
  return thank_you_jsx(ThankYouWrapper, null, thank_you_jsx(ThankYou_styled_ImageWrapper, null, thank_you_jsx("img", {
    src: "/static/images/purple-check-mark.png",
    srcSet: "/static/images/purple-check-mark.png 1x, /static/images/purple-check-mark@2x.png 2x, /static/images/purple-check-mark@3x.png 3x"
  })), thank_you_jsx(ThankYou_styled_Title, null, "Thank You"), thank_you_jsx(ThankYou_styled_Description, null, description), thank_you_jsx(animated_footer_link["a" /* default */], {
    message: footerMessage,
    href: href,
    onClick: onClick
  }));
};

ThankYou.defaultProps = {
  email: 'your email address',
  onClick: () => {}
};
/* harmony default export */ var thank_you = (ThankYou);
// CONCATENATED MODULE: ./components/index.js
/* unused concated harmony import AnimatedCard */
/* concated harmony reexport AnimatedFooterLink */__webpack_require__.d(__webpack_exports__, "a", function() { return animated_footer_link["a" /* default */]; });
/* unused concated harmony import BioCard */
/* unused concated harmony import Button */
/* unused concated harmony import CompanyCard */
/* concated harmony reexport ContactFooter */__webpack_require__.d(__webpack_exports__, "b", function() { return contact_footer; });
/* concated harmony reexport ContactForm */__webpack_require__.d(__webpack_exports__, "c", function() { return contact_form; });
/* unused concated harmony import Footer */
/* unused concated harmony import HamburgerMenuContent */
/* unused concated harmony import Input */
/* unused concated harmony import LabelWithArrow */
/* concated harmony reexport Layout */__webpack_require__.d(__webpack_exports__, "d", function() { return layout; });
/* unused concated harmony import ListItem */
/* concated harmony reexport Modal */__webpack_require__.d(__webpack_exports__, "e", function() { return modal["a" /* default */]; });
/* concated harmony reexport ResearchPdfForm */__webpack_require__.d(__webpack_exports__, "f", function() { return research_pdf_form; });
/* unused concated harmony import SocialIcon */
/* concated harmony reexport StartDownloadForm */__webpack_require__.d(__webpack_exports__, "g", function() { return start_download_form; });
/* unused concated harmony import TabBar */
/* unused concated harmony import TextField */
/* concated harmony reexport ThankYou */__webpack_require__.d(__webpack_exports__, "h", function() { return thank_you; });





















/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

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

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "k2H8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USER_SIGNED_UP; });
const USER_SIGNED_UP = 'USER_SIGNED_UP';

/***/ }),

/***/ "lltq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./assets/colors.js
var colors = __webpack_require__("zWDp");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/animated-card/AnimatedCard.styled.js

const CardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "AnimatedCardstyled__CardWrapper",
  componentId: "q4nqi9-0"
})(["display:flex;flex-direction:column;width:100%;min-height:340px;max-width:360px;flex:1;box-shadow:0 2px 4px 0 rgba(0,0,0,0.2);background-size:100% 200%;background-image:", ";-webkit-transition:background-position 0.15s ease-out;-moz-transition:background-position 0.15s ease-out;transition:background-position 0.15s ease-out;&:hover{cursor:pointer;background-position:0 -100%;}"], props => {
  return `linear-gradient(to bottom, white 50%, ${props.notchColor} 50%)`;
});
const TopNotch = external_styled_components_default.a.div.withConfig({
  displayName: "AnimatedCardstyled__TopNotch",
  componentId: "q4nqi9-1"
})(["width:100%;height:16px;background-color:", ";margin-bottom:23px;"], props => props.notchColor);
const ContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "AnimatedCardstyled__ContentWrapper",
  componentId: "q4nqi9-2"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin:0 20px 17px;"]);
const Title = external_styled_components_default.a.h1.withConfig({
  displayName: "AnimatedCardstyled__Title",
  componentId: "q4nqi9-3"
})(["font-family:", ";font-size:18px;line-height:24px;margin:0 0 20px 0;align-self:flex-start;", ":hover &{color:", ";transition:color 0.15s ease;}"], props => props.theme.fonts.graphikBold, CardWrapper, props => props.theme.colors.white);
const Description = external_styled_components_default.a.p.withConfig({
  displayName: "AnimatedCardstyled__Description",
  componentId: "q4nqi9-4"
})(["font-family:", ";font-size:16px;line-height:22px;margin:0;", ":hover &{color:", ";transition:color 0.25s ease;}"], props => props.theme.fonts.financier, CardWrapper, props => props.theme.colors.white);
const Footer = external_styled_components_default.a.span.withConfig({
  displayName: "AnimatedCardstyled__Footer",
  componentId: "q4nqi9-5"
})(["font-family:", ";font-size:14px;line-height:22px;color:", ";display:flex;flex-direction:column;flex:1;justify-content:flex-end;margin:0 20px 16px;cursor:pointer;", ":hover &{color:", ";transition:color 0.25s ease;}"], props => props.theme.fonts.graphik, props => props.theme.colors.lightGrey, CardWrapper, props => props.theme.colors.white);
// CONCATENATED MODULE: ./components/animated-card/index.js
var __jsx = external_react_default.a.createElement;




const AnimatedCard = props => {
  const {
    title,
    description,
    footer,
    notchColor,
    onClick
  } = props;
  return __jsx(CardWrapper, {
    notchColor: notchColor,
    onClick: onClick
  }, __jsx(TopNotch, {
    notchColor: notchColor
  }), __jsx(ContentWrapper, null, __jsx(Title, null, title), __jsx(Description, null, description)), __jsx(Footer, null, footer));
};

AnimatedCard.defaultProps = {
  footer: 'Read more',
  notchColor: colors["f" /* MDC_PURPLE */]
};
/* harmony default export */ var animated_card = __webpack_exports__["a"] = (AnimatedCard);

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "oQsg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/modal/index.js
var modal = __webpack_require__("UJvz");

// EXTERNAL MODULE: ./components/hamburger-menu-content/index.js + 1 modules
var hamburger_menu_content = __webpack_require__("SriO");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-components-breakpoint"
var external_styled_components_breakpoint_ = __webpack_require__("40lu");
var external_styled_components_breakpoint_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_breakpoint_);

// CONCATENATED MODULE: ./components/tab-bar/TabBar.styled.js


const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "TabBarstyled__Wrapper",
  componentId: "sc-13utfq2-0"
})(["display:flex;height:72px;background-color:", ";"], props => props.backgroundColor || 'transparent');
const MobileTabWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "TabBarstyled__MobileTabWrapper",
  componentId: "sc-13utfq2-1"
})(["width:100%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;", ""], external_styled_components_breakpoint_default()('tablet')`
		display: none;
	`);
const TabWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "TabBarstyled__TabWrapper",
  componentId: "sc-13utfq2-2"
})(["display:none;", " ", ""], external_styled_components_breakpoint_default()('tablet')`
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	`, external_styled_components_breakpoint_default()('desktop')`
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-start;
	`);
const Tab = external_styled_components_default.a.span.withConfig({
  displayName: "TabBarstyled__Tab",
  componentId: "sc-13utfq2-3"
})(["color:", ";text-decoration:none;font-size:16px;line-height:22px;font-family:", ";margin-right:50px;cursor:pointer;&:hover{opacity:0.65;transition:opacity 0.15s ease;}"], props => props.barTheme === 'dark' ? props.theme.colors.black : props.theme.colors.white, props => props.theme.fonts.graphik);
// CONCATENATED MODULE: ./components/tab-bar/index.js
var __jsx = external_react_default.a.createElement;





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
  } = Object(external_react_["useState"])(false);

  const renderLinks = () => {
    return linkData.map(data => {
      return __jsx(link_default.a, {
        key: data.href,
        href: data.href
      }, __jsx(Tab, {
        barTheme: barTheme
      }, data.tabName));
    });
  };

  const WebTabBar = () => __jsx(TabWrapper, null, __jsx(link_default.a, {
    href: "/"
  }, __jsx(Tab, null, barTheme === 'dark' && __jsx("img", {
    src: "/static/images/mdc-logo-horizontal-black.png",
    srcSet: "/static/images/mdc-logo-horizontal-black@1x.png 1x, /static/images/mdc-logo-horizontal-black@2x.png 2x, /static/images/mdc-logo-horizontal-black@3x.png 3x"
  }), barTheme !== 'dark' && __jsx("img", {
    src: "/static/images/mdc-logo-horizontal.png",
    srcSet: "/static/images/mdc-logo-horizontal@1x.png 1x, /static/images/mdc-logo-horizontal@2x.png 2x, /static/images/mdc-logo-horizontal@3x.png 3x"
  }))), renderLinks());

  const MobileTabBar = () => __jsx(MobileTabWrapper, null, __jsx(link_default.a, {
    href: "/"
  }, __jsx("div", null, barTheme === 'dark' && __jsx("img", {
    src: "/static/images/mdc-logo-horizontal-black.png",
    srcSet: "/static/images/mdc-logo-horizontal-black@1x.png 1x, /static/images/mdc-logo-horizontal-black@2x.png 2x, /static/images/mdc-logo-horizontal-black@3x.png 3x"
  }), barTheme !== 'dark' && __jsx("img", {
    src: "/static/images/mdc-logo-horizontal.png",
    srcSet: "/static/images/mdc-logo-horizontal@1x.png 1x, /static/images/mdc-logo-horizontal@2x.png 2x, /static/images/mdc-logo-horizontal@3x.png 3x"
  }))), __jsx("div", {
    onClick: () => setModalVisible(true)
  }, barTheme === 'dark' && __jsx("img", {
    src: "/static/images/black-hamburger.png",
    srcSet: "/static/images/black-hamburger.png 1x, /static/images/black-hamburger@2x.png 2x, /static/images/black-hamburger@3x.png 3x"
  }), barTheme !== 'dark' && __jsx("img", {
    src: "/static/images/hamburger.png",
    srcSet: "/static/images/hamburger.png 1x, /static/images/hamburger@2x.png 2x, /static/images/hamburger@3x.png 3x"
  })));

  return __jsx(Wrapper, {
    themeDark: true,
    backgroundColor: backgroundColor
  }, __jsx(WebTabBar, null), __jsx(MobileTabBar, null), __jsx(modal["a" /* default */], {
    modalVisible: modalVisible,
    onRequestClose: () => setModalVisible(false)
  }, __jsx(hamburger_menu_content["a" /* default */], {
    onCloseModal: () => setModalVisible(false)
  })));
};

TabBar.defaultProps = {
  barTheme: 'light'
};
/* harmony default export */ var tab_bar = __webpack_exports__["a"] = (TabBar);

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "y4cE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k2H8");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const initialState = {};
const StoreContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(initialState);

const userReducer = (state, action) => {
  switch (action.type) {
    case _actionTypes__WEBPACK_IMPORTED_MODULE_1__[/* USER_SIGNED_UP */ "a"]:
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
    }
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

/***/ "zJq1":
/***/ (function(module, exports) {

module.exports = require("react-social-icons");

/***/ }),

/***/ "zWDp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MDC_PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DEEP_INDIGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return MID_PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LIGHT_PURPLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return WHITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BLACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LIGHT_GREY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return MDC_PURPLE_HOVER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SB_GREY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return PINK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return RED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BABY_BLUE; });
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

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js
var get_own_property_descriptor = __webpack_require__("Jo+v");
var get_own_property_descriptor_default = /*#__PURE__*/__webpack_require__.n(get_own_property_descriptor);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
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
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = keys_default()(source);

    if (typeof get_own_property_symbols_default.a === 'function') {
      ownKeys = ownKeys.concat(get_own_property_symbols_default()(source).filter(function (sym) {
        return get_own_property_descriptor_default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });