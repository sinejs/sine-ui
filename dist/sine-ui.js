(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sineui"] = factory();
	else
		root["sineui"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/animation/collapse.js":
/*!***********************************!*\
  !*** ./src/animation/collapse.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var CollapseAnimation = (_dec = sine.decorator.directive({
  namespace: 'sine.ui',
  selector: 'animation-collapse'
}), _dec(_class =
/*#__PURE__*/
function (_sine$Animation) {
  _inherits(CollapseAnimation, _sine$Animation);

  function CollapseAnimation() {
    var _this;

    _classCallCheck(this, CollapseAnimation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CollapseAnimation).call(this));
    _this.initialDisplay = '';
    _this.initialHeight = '';
    _this.clientHeight = 0;
    _this.duration = 4000;
    return _this;
  }

  _createClass(CollapseAnimation, [{
    key: "onInsert",
    value: function onInsert() {
      this.initialDisplay = this.$htmlElement.style.display;
      this.initialHeight = this.$htmlElement.style.height;
    }
  }, {
    key: "beforeEnter",
    value: function beforeEnter() {
      this.$htmlElement.style.height = 1 + 'px';
      this.$htmlElement.style.transition = 'height ' + this.duration + 'ms';
    }
  }, {
    key: "enter",
    value: function enter() {
      var self = this;
      this.nextFrame(function () {
        if (self.initialHeight) {
          self.$htmlElement.style.height = self.initialHeight;
        } else if (self.clientHeight) {
          self.$htmlElement.style.height = self.clientHeight + 'px';
        } else {
          self.$htmlElement.style.height = 'initial';
        }
      });
    }
  }, {
    key: "afterEnter",
    value: function afterEnter() {
      if (!this.initialHeight) {
        this.$htmlElement.style.height = 'initial';
      }
    }
  }, {
    key: "beforeLeave",
    value: function beforeLeave() {
      this.clientHeight = this.$htmlElement.clientHeight;
      this.$htmlElement.style.height = this.clientHeight + 'px';
    }
  }, {
    key: "leave",
    value: function leave() {
      var self = this;
      this.nextFrame(function () {
        self.$htmlElement.style.height = 0 + 'px';
      });
    }
  }, {
    key: "afterLeave",
    value: function afterLeave() {
      this.$htmlElement.style.height = this.initialHeight;
    }
  }]);

  return CollapseAnimation;
}(sine.Animation)) || _class);

/***/ }),

/***/ "./src/animation/index.js":
/*!********************************!*\
  !*** ./src/animation/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapse */ "./src/animation/collapse.js");
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_collapse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _collapse__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _collapse__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ "./src/animation/modal.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _modal__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _modal__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "./src/animation/modal.js":
/*!********************************!*\
  !*** ./src/animation/modal.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ModalAnimation = (_dec = sine.decorator.directive({
  namespace: 'sine.ui',
  selector: 'animation-modal'
}), _dec(_class =
/*#__PURE__*/
function (_sine$Animation) {
  _inherits(ModalAnimation, _sine$Animation);

  function ModalAnimation() {
    var _this;

    _classCallCheck(this, ModalAnimation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalAnimation).call(this));
    _this.backdrop = null;
    _this.left = new sine.Messenger();
    return _this;
  }

  _createClass(ModalAnimation, [{
    key: "createBackdrop",
    value: function createBackdrop() {
      this.backdrop = document.createElement('div');
      this.backdrop.classList.add('modal-backdrop');
      this.backdrop.classList.add('fade');
    }
  }, {
    key: "removeModal",
    value: function removeModal() {
      document.body.classList.remove('modal-open');

      if (this.backdrop.parentNode != null) {
        document.body.removeChild(this.backdrop);
      }
    }
  }, {
    key: "onInsert",
    value: function onInsert() {
      this.initialDisplay = this.$htmlElement.style.display;
      this.initialHeight = this.$htmlElement.style.height;
    }
  }, {
    key: "beforeEnter",
    value: function beforeEnter() {
      this.createBackdrop();
      this.$htmlElement.style.display = 'block';
      document.body.classList.add('modal-open');
      document.body.appendChild(this.backdrop);
    }
  }, {
    key: "enter",
    value: function enter() {
      var self = this;
      this.nextFrame(function () {
        self.$htmlElement.classList.add('show');
        self.backdrop.classList.add('show');
      });
    }
  }, {
    key: "beforeLeave",
    value: function beforeLeave() {
      this.$htmlElement.classList.remove('show');
      this.backdrop.classList.remove('show');
    }
  }, {
    key: "afterLeave",
    value: function afterLeave() {
      this.removeModal();
      this.left.fire();
    }
  }]);

  return ModalAnimation;
}(sine.Animation)) || _class);

/***/ }),

/***/ "./src/directive/index.js":
/*!********************************!*\
  !*** ./src/directive/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate */ "./src/directive/validate.js");
/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_validate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _validate__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _validate__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/directive/validate.js":
/*!***********************************!*\
  !*** ./src/directive/validate.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ValidateDirective = (_dec = sine.decorator.directive({
  namespace: 'sine.ui',
  selector: 'n-validate'
}), _dec(_class =
/*#__PURE__*/
function (_sine$Directive) {
  _inherits(ValidateDirective, _sine$Directive);

  function ValidateDirective() {
    _classCallCheck(this, ValidateDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(ValidateDirective).call(this));
  }

  _createClass(ValidateDirective, [{
    key: "onCompile",
    value: function onCompile() {
      var self = this,
          nModel = this.$element.getDirective('n-model');

      if (!nModel) {
        throw new Error('Require "n-model"');
      }

      nModel.$validators.push(function (modelValue) {
        var validator = self.$binding.compute();

        if (validator != null) {
          var result = validator.call(self, modelValue);
        }

        if (result != null) {
          nModel.setValidity(result.valid, result.feedback);
        } else {
          nModel.setValidity(true, null);
        }
      });
    }
  }]);

  return ValidateDirective;
}(sine.Directive)) || _class);

/***/ }),

/***/ "./src/form/form.cmp.js":
/*!******************************!*\
  !*** ./src/form/form.cmp.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.html */ "./src/form/form.html");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var FormComponent = (_dec = sine.decorator.component({
  namespace: 'sine.ui',
  selector: 'n-form',
  template: _form_html__WEBPACK_IMPORTED_MODULE_0__["default"]
}), _dec(_class =
/*#__PURE__*/
function (_sine$Component) {
  _inherits(FormComponent, _sine$Component);

  function FormComponent() {
    var _this;

    _classCallCheck(this, FormComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FormComponent).call(this));
    _this.entity = null;
    _this.config = {
      groups: [],
      validator: {}
    };
    return _this;
  }

  _createClass(FormComponent, [{
    key: "toggle",
    value: function toggle(group) {
      var proxy = group.toProxy();
      proxy.collapsed = !group.collapsed;
    }
  }, {
    key: "isValid",
    value: function isValid(item) {
      if (this[item.field] != null) {
        return this[item.field].$valid;
      }

      return true;
    }
  }, {
    key: "getFeedback",
    value: function getFeedback(item) {
      if (this[item.field] != null) {
        return this[item.field].$feedback;
      }

      return null;
    }
  }]);

  return FormComponent;
}(sine.Component)) || _class);

/***/ }),

/***/ "./src/form/form.html":
/*!****************************!*\
  !*** ./src/form/form.html ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"accordion\">\r\n    <div class=\"card\" *n-repeat=\"group in config.groups\">\r\n        <div class=\"card-header\" @click=\"toggle(group)\" *n-bind=\"group.title\"></div>\r\n\r\n        <div class=\"collapse show\" *n-hide=\"group.collapsed\" *animation-collapse>\r\n            <div class=\"card-body\">\r\n                <div class=\"form-group\" *n-repeat=\"item in group.items\">\r\n                    <label :for=\"item.field\" class=\"col-form-label-sm\" *n-bind=\"item.label\"></label>\r\n                    <input :type=\"item.type\" class=\"form-control form-control-sm {{ isValid(item)?'is-valid':'is-invalid' }}\" :name=\"item.field\" *n-model=\"entity[item.field]\" *n-validate=\"item.validator\">\r\n                    <small class=\"form-text text-muted\" *n-show=\"item.help && !getFeedback(item)\" *n-bind=\"item.help\"></small>\r\n                    <div class=\"{{ isValid(item)?'valid-feedback':'invalid-feedback'}}\" *n-bind=\"getFeedback(item)\" *n-show=\"getFeedback(item)\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/form/index.js":
/*!***************************!*\
  !*** ./src/form/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_cmp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.cmp */ "./src/form/form.cmp.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directive */ "./src/directive/index.js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _directive__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _directive__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./src/animation/index.js");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _animation__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _animation__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./src/form/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./src/modal/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return _modal__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]; });

/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./progress */ "./src/progress/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav */ "./src/nav/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _nav_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-bar */ "./src/nav-bar/index.js");
/* empty/unused harmony star reexport */







/***/ }),

/***/ "./src/modal/index.js":
/*!****************************!*\
  !*** ./src/modal/index.js ***!
  \****************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_cmp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.cmp */ "./src/modal/modal.cmp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return _modal_cmp__WEBPACK_IMPORTED_MODULE_0__["ModalComponent"]; });

/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.service */ "./src/modal/modal.service.js");
/* empty/unused harmony star reexport */


/***/ }),

/***/ "./src/modal/modal.cmp.js":
/*!********************************!*\
  !*** ./src/modal/modal.cmp.js ***!
  \********************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _modal_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.html */ "./src/modal/modal.html");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var ModalComponent = (_dec = sine.decorator.component({
  namespace: 'sine.ui',
  selector: 'n-modal',
  template: _modal_html__WEBPACK_IMPORTED_MODULE_0__["default"]
}), _dec(_class =
/*#__PURE__*/
function (_sine$Component) {
  _inherits(ModalComponent, _sine$Component);

  function ModalComponent() {
    var _this;

    _classCallCheck(this, ModalComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModalComponent).call(this));

    var self = _assertThisInitialized(_this);

    _this.visible = false;
    _this.currentCmp = null;
    _this.cmpConfig = {
      onInit: function onInit(view) {
        view.$close = function () {
          self.close();
        };
      }
    };
    return _this;
  }

  _createClass(ModalComponent, [{
    key: "onDestroy",
    value: function onDestroy() {}
  }, {
    key: "show",
    value: function show(cmp) {
      this.visible = true;
      this.currentCmp = cmp;
      this.$mount(document.body, {
        append: true
      });
    }
  }, {
    key: "close",
    value: function close() {
      var self = this,
          animation = this.rootElement.getDirective('animation-modal');
      this.$proxy.visible = false;
      animation.left.on(function () {
        self.$destroy();
      });
    }
  }]);

  return ModalComponent;
}(sine.Component)) || _class);


/***/ }),

/***/ "./src/modal/modal.html":
/*!******************************!*\
  !*** ./src/modal/modal.html ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade\" tabindex=\"-1\" *n-show=\"visible\" *animation-modal *n-name=\"rootElement\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\" *n-bind-cmp=\"currentCmp\" *n-bind-cmp-options=\"cmpConfig\">\r\n            <!--<div class=\"modal-header\">-->\r\n                <!--<h5 class=\"modal-title\">Modal Title</h5>-->\r\n                <!--<button type=\"button\" class=\"close\">-->\r\n                    <!--<span>&times;</span>-->\r\n                <!--</button>-->\r\n            <!--</div>-->\r\n\r\n            <!--<div class=\"modal-body\">-->\r\n                <!--...-->\r\n            <!--</div>-->\r\n\r\n            <!--<div class=\"modal-footer\">-->\r\n                <!--<button type=\"button\" class=\"btn btn-primary\">Save changes</button>-->\r\n            <!--</div>-->\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/modal/modal.service.js":
/*!************************************!*\
  !*** ./src/modal/modal.service.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_cmp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal.cmp */ "./src/modal/modal.cmp.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var ModalService = (_dec = sine.decorator.service({
  namespace: 'sine.ui',
  selector: 'modalService'
}), _dec(_class =
/*#__PURE__*/
function (_sine$Service) {
  _inherits(ModalService, _sine$Service);

  function ModalService() {
    _classCallCheck(this, ModalService);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalService).call(this));
  }

  _createClass(ModalService, [{
    key: "show",
    value: function show(content) {
      new _modal_cmp__WEBPACK_IMPORTED_MODULE_0__["ModalComponent"]().show(content);
    }
  }]);

  return ModalService;
}(sine.Service)) || _class);

/***/ }),

/***/ "./src/nav-bar/index.js":
/*!******************************!*\
  !*** ./src/nav-bar/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_bar_cmp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar.cmp */ "./src/nav-bar/nav-bar.cmp.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/nav-bar/nav-bar.cmp.js":
/*!************************************!*\
  !*** ./src/nav-bar/nav-bar.cmp.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_bar_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-bar.html */ "./src/nav-bar/nav-bar.html");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var defaults = {
  color: 'light'
};
var NavBarComponent = (_dec = sine.decorator.component({
  namespace: 'sine.ui',
  selector: 'n-nav-bar',
  template: _nav_bar_html__WEBPACK_IMPORTED_MODULE_0__["default"]
}), _dec(_class =
/*#__PURE__*/
function (_sine$Component) {
  _inherits(NavBarComponent, _sine$Component);

  function NavBarComponent() {
    var _this;

    _classCallCheck(this, NavBarComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavBarComponent).call(this));
    _this.brand = {};
    _this.items = [];
    _this.navOptions = {
      insideBar: true
    };
    _this.options = {};
    _this.settings = {};
    _this.css = {};
    return _this;
  }

  _createClass(NavBarComponent, [{
    key: "onInit",
    value: function onInit() {
      this.settings = sine.merge(defaults, this.options);
      this.css = {
        nav: sine.format('navbar-{0} bg-{0}', this.settings.color)
      };
    }
  }, {
    key: "toggle",
    value: function toggle(content) {
      var element = content.htmlElement;

      if (element.classList.contains('show')) {
        element.classList.remove('show');
      } else {
        element.classList.add('show');
      }
    }
  }]);

  return NavBarComponent;
}(sine.Component)) || _class);

/***/ }),

/***/ "./src/nav-bar/nav-bar.html":
/*!**********************************!*\
  !*** ./src/nav-bar/nav-bar.html ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg\" *n-class=\"css.nav\">\r\n    <a class=\"navbar-brand\" :href=\"brand.url\" *n-bind=\"brand.label\"></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" @click=\"toggle(navbarSupportedContent)\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n\r\n    <div class=\"collapse navbar-collapse show\" *n-name=\"navbarSupportedContent\">\r\n        <n-nav :items=\"items\" :options=\"navOptions\"></n-nav>\r\n    </div>\r\n</nav>");

/***/ }),

/***/ "./src/nav/index.js":
/*!**************************!*\
  !*** ./src/nav/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_cmp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.cmp */ "./src/nav/nav.cmp.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/nav/nav.cmp.js":
/*!****************************!*\
  !*** ./src/nav/nav.cmp.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.html */ "./src/nav/nav.html");
/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.css */ "./src/nav/nav.css");
/* harmony import */ var _nav_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nav_css__WEBPACK_IMPORTED_MODULE_1__);
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var defaults = {
  flexColumn: false,
  insideBar: false
};
var NavComponent = (_dec = sine.decorator.component({
  namespace: 'sine.ui',
  selector: 'n-nav',
  template: _nav_html__WEBPACK_IMPORTED_MODULE_0__["default"],
  inject: {
    $router: '$router'
  }
}), _dec(_class =
/*#__PURE__*/
function (_sine$Component) {
  _inherits(NavComponent, _sine$Component);

  function NavComponent() {
    var _this;

    _classCallCheck(this, NavComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavComponent).call(this));
    _this.items = [];
    _this.options = {};
    _this.settings = {};
    return _this;
  }

  _createClass(NavComponent, [{
    key: "onInit",
    value: function onInit() {
      var self = this;
      this.settings = sine.merge(defaults, this.options);
      this.items.some(function (item) {
        if (item.active) {
          self.navigate(item);
          return true;
        }
      });
    }
  }, {
    key: "navigate",
    value: function navigate(item) {
      if (item.path) {
        this.$router.navigate(item.path);
      } else {
        item.execute && item.execute();
      }

      this.updateActive(item);
    }
  }, {
    key: "updateActive",
    value: function updateActive(item) {
      this.items.forEach(function (item2) {
        item2.toProxy().active = false;
      });
      item.toProxy().active = true;
    }
  }]);

  return NavComponent;
}(sine.Component)) || _class);

/***/ }),

/***/ "./src/nav/nav.css":
/*!*************************!*\
  !*** ./src/nav/nav.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./src/nav/nav.html":
/*!**************************!*\
  !*** ./src/nav/nav.html ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"{{ settings.insideBar?'navbar-nav':'nav' }} {{ settings.flexColumn?'flex-column':'' }}\">\r\n    <li class=\"nav-item\" *n-repeat=\"item in items\">\r\n        <a class=\"nav-link span-nav-link {{ item.active?'active':'' }} {{ item.disable?'disable':'' }}\" *n-bind=\"item.label\" @click=\"navigate(item)\"></a>\r\n    </li>\r\n</ul>");

/***/ }),

/***/ "./src/progress/index.js":
/*!*******************************!*\
  !*** ./src/progress/index.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progress_cmp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress.cmp */ "./src/progress/progress.cmp.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/progress/progress.cmp.js":
/*!**************************************!*\
  !*** ./src/progress/progress.cmp.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _progress_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./progress.html */ "./src/progress/progress.html");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var ProgressComponent = (_dec = sine.decorator.component({
  namespace: 'sine.ui',
  selector: 'n-progress',
  template: _progress_html__WEBPACK_IMPORTED_MODULE_0__["default"]
}), _dec(_class =
/*#__PURE__*/
function (_sine$Component) {
  _inherits(ProgressComponent, _sine$Component);

  _createClass(ProgressComponent, [{
    key: "percent",
    get: function get() {
      return Math.round(this.value * 100 / this.maxValue, 2);
    }
  }, {
    key: "label",
    get: function get() {
      return this.percent + '%';
    }
  }]);

  function ProgressComponent() {
    var _this;

    _classCallCheck(this, ProgressComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProgressComponent).call(this));
    _this.value = 0;
    _this.maxValue = 100;
    _this.css = {};
    _this.barCss = {};
    return _this;
  }

  _createClass(ProgressComponent, [{
    key: "afterAttrChange",
    value: function afterAttrChange(prop, value) {
      if (prop === 'value') {
        this.barCss.toProxy().width = this.percent + '%';
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {}
  }]);

  return ProgressComponent;
}(sine.Component)) || _class);

/***/ }),

/***/ "./src/progress/progress.html":
/*!************************************!*\
  !*** ./src/progress/progress.html ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"progress\" *n-style=\"css\">\r\n    <div class=\"progress-bar\" *n-style=\"barCss\" *n-bind=\"label\"></div>\r\n</div>");

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5ldWkvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3NpbmV1aS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvYW5pbWF0aW9uL2NvbGxhcHNlLmpzIiwid2VicGFjazovL3NpbmV1aS8uL3NyYy9hbmltYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZXVpLy4vc3JjL2FuaW1hdGlvbi9tb2RhbC5qcyIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvZGlyZWN0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmV1aS8uL3NyYy9kaXJlY3RpdmUvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vc2luZXVpLy4vc3JjL2Zvcm0vZm9ybS5jbXAuanMiLCJ3ZWJwYWNrOi8vc2luZXVpLy4vc3JjL2Zvcm0vZm9ybS5odG1sIiwid2VicGFjazovL3NpbmV1aS8uL3NyYy9mb3JtL2luZGV4LmpzIiwid2VicGFjazovL3NpbmV1aS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvbW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZXVpLy4vc3JjL21vZGFsL21vZGFsLmNtcC5qcyIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvbW9kYWwvbW9kYWwuaHRtbCIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvbW9kYWwvbW9kYWwuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvbmF2LWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvbmF2LWJhci9uYXYtYmFyLmNtcC5qcyIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvbmF2LWJhci9uYXYtYmFyLmh0bWwiLCJ3ZWJwYWNrOi8vc2luZXVpLy4vc3JjL25hdi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvbmF2L25hdi5jbXAuanMiLCJ3ZWJwYWNrOi8vc2luZXVpLy4vc3JjL25hdi9uYXYuY3NzPzkzZWMiLCJ3ZWJwYWNrOi8vc2luZXVpLy4vc3JjL25hdi9uYXYuaHRtbCIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvcHJvZ3Jlc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZXVpLy4vc3JjL3Byb2dyZXNzL3Byb2dyZXNzLmNtcC5qcyIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvcHJvZ3Jlc3MvcHJvZ3Jlc3MuaHRtbCJdLCJuYW1lcyI6WyJDb2xsYXBzZUFuaW1hdGlvbiIsInNpbmUiLCJkZWNvcmF0b3IiLCJkaXJlY3RpdmUiLCJuYW1lc3BhY2UiLCJzZWxlY3RvciIsImluaXRpYWxEaXNwbGF5IiwiaW5pdGlhbEhlaWdodCIsImNsaWVudEhlaWdodCIsImR1cmF0aW9uIiwiJGh0bWxFbGVtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiaGVpZ2h0IiwidHJhbnNpdGlvbiIsInNlbGYiLCJuZXh0RnJhbWUiLCJBbmltYXRpb24iLCJNb2RhbEFuaW1hdGlvbiIsImJhY2tkcm9wIiwibGVmdCIsIk1lc3NlbmdlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJyZW1vdmUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVCYWNrZHJvcCIsImFwcGVuZENoaWxkIiwicmVtb3ZlTW9kYWwiLCJmaXJlIiwiVmFsaWRhdGVEaXJlY3RpdmUiLCJuTW9kZWwiLCIkZWxlbWVudCIsImdldERpcmVjdGl2ZSIsIkVycm9yIiwiJHZhbGlkYXRvcnMiLCJwdXNoIiwibW9kZWxWYWx1ZSIsInZhbGlkYXRvciIsIiRiaW5kaW5nIiwiY29tcHV0ZSIsInJlc3VsdCIsImNhbGwiLCJzZXRWYWxpZGl0eSIsInZhbGlkIiwiZmVlZGJhY2siLCJEaXJlY3RpdmUiLCJGb3JtQ29tcG9uZW50IiwiY29tcG9uZW50IiwidGVtcGxhdGUiLCJlbnRpdHkiLCJjb25maWciLCJncm91cHMiLCJncm91cCIsInByb3h5IiwidG9Qcm94eSIsImNvbGxhcHNlZCIsIml0ZW0iLCJmaWVsZCIsIiR2YWxpZCIsIiRmZWVkYmFjayIsIkNvbXBvbmVudCIsIk1vZGFsQ29tcG9uZW50IiwidmlzaWJsZSIsImN1cnJlbnRDbXAiLCJjbXBDb25maWciLCJvbkluaXQiLCJ2aWV3IiwiJGNsb3NlIiwiY2xvc2UiLCJjbXAiLCIkbW91bnQiLCJhcHBlbmQiLCJhbmltYXRpb24iLCJyb290RWxlbWVudCIsIiRwcm94eSIsIm9uIiwiJGRlc3Ryb3kiLCJNb2RhbFNlcnZpY2UiLCJzZXJ2aWNlIiwiY29udGVudCIsInNob3ciLCJTZXJ2aWNlIiwiZGVmYXVsdHMiLCJjb2xvciIsIk5hdkJhckNvbXBvbmVudCIsImJyYW5kIiwiaXRlbXMiLCJuYXZPcHRpb25zIiwiaW5zaWRlQmFyIiwib3B0aW9ucyIsInNldHRpbmdzIiwiY3NzIiwibWVyZ2UiLCJuYXYiLCJmb3JtYXQiLCJlbGVtZW50IiwiaHRtbEVsZW1lbnQiLCJjb250YWlucyIsImZsZXhDb2x1bW4iLCJOYXZDb21wb25lbnQiLCJpbmplY3QiLCIkcm91dGVyIiwic29tZSIsImFjdGl2ZSIsIm5hdmlnYXRlIiwicGF0aCIsImV4ZWN1dGUiLCJ1cGRhdGVBY3RpdmUiLCJmb3JFYWNoIiwiaXRlbTIiLCJQcm9ncmVzc0NvbXBvbmVudCIsIk1hdGgiLCJyb3VuZCIsInZhbHVlIiwibWF4VmFsdWUiLCJwZXJjZW50IiwiYmFyQ3NzIiwicHJvcCIsIndpZHRoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtR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bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wic2luZXVpXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInNpbmV1aVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJcclxuQHNpbmUuZGVjb3JhdG9yLmRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lLnVpJyxcclxuICAgIHNlbGVjdG9yOiAnYW5pbWF0aW9uLWNvbGxhcHNlJ1xyXG59KVxyXG5jbGFzcyBDb2xsYXBzZUFuaW1hdGlvbiBleHRlbmRzIHNpbmUuQW5pbWF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsRGlzcGxheSA9ICcnO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbEhlaWdodCA9ICcnO1xyXG4gICAgICAgIHRoaXMuY2xpZW50SGVpZ2h0ID0gMDtcclxuICAgICAgICB0aGlzLmR1cmF0aW9uID0gNDAwMDtcclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydCgpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxEaXNwbGF5ID0gdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheTtcclxuICAgICAgICB0aGlzLmluaXRpYWxIZWlnaHQgPSB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgYmVmb3JlRW50ZXIoKSB7XHJcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMSArICdweCc7XHJcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9ICdoZWlnaHQgJyArIHRoaXMuZHVyYXRpb24gKyAnbXMnO1xyXG4gICAgfVxyXG5cclxuICAgIGVudGVyKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLm5leHRGcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmluaXRpYWxIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuJGh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9IHNlbGYuaW5pdGlhbEhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzZWxmLmNsaWVudEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi4kaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gc2VsZi5jbGllbnRIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZi4kaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJ2luaXRpYWwnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJFbnRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5pdGlhbEhlaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnaW5pdGlhbCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJlZm9yZUxlYXZlKCkge1xyXG4gICAgICAgIHRoaXMuY2xpZW50SGVpZ2h0ID0gdGhpcy4kaHRtbEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuY2xpZW50SGVpZ2h0ICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBsZWF2ZSgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5uZXh0RnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLiRodG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwICsgJ3B4JztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhZnRlckxlYXZlKCkge1xyXG4gICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuaW5pdGlhbEhlaWdodDtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vY29sbGFwc2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL21vZGFsJzsiLCJcclxuQHNpbmUuZGVjb3JhdG9yLmRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lLnVpJyxcclxuICAgIHNlbGVjdG9yOiAnYW5pbWF0aW9uLW1vZGFsJ1xyXG59KVxyXG5jbGFzcyBNb2RhbEFuaW1hdGlvbiBleHRlbmRzIHNpbmUuQW5pbWF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gbmV3IHNpbmUuTWVzc2VuZ2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQmFja2Ryb3AoKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYmFja2Ryb3AnKTtcclxuICAgICAgICB0aGlzLmJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVNb2RhbCgpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYmFja2Ryb3AucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5iYWNrZHJvcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uSW5zZXJ0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbERpc3BsYXkgPSB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5O1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbEhlaWdodCA9IHRoaXMuJGh0bWxFbGVtZW50LnN0eWxlLmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBiZWZvcmVFbnRlcigpIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUJhY2tkcm9wKCk7XHJcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdtb2RhbC1vcGVuJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmJhY2tkcm9wKTtcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5uZXh0RnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLiRodG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgICAgICAgIHNlbGYuYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBiZWZvcmVMZWF2ZSgpIHtcclxuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJMZWF2ZSgpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZU1vZGFsKCk7XHJcbiAgICAgICAgdGhpcy5sZWZ0LmZpcmUoKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vdmFsaWRhdGUnOyIsIlxyXG5Ac2luZS5kZWNvcmF0b3IuZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUudWknLFxyXG4gICAgc2VsZWN0b3I6ICduLXZhbGlkYXRlJ1xyXG59KVxyXG5jbGFzcyBWYWxpZGF0ZURpcmVjdGl2ZSBleHRlbmRzIHNpbmUuRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21waWxlKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgbk1vZGVsID0gdGhpcy4kZWxlbWVudC5nZXREaXJlY3RpdmUoJ24tbW9kZWwnKTtcclxuXHJcbiAgICAgICAgaWYgKCFuTW9kZWwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlIFwibi1tb2RlbFwiJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuTW9kZWwuJHZhbGlkYXRvcnMucHVzaChmdW5jdGlvbiAobW9kZWxWYWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgdmFsaWRhdG9yID0gc2VsZi4kYmluZGluZy5jb21wdXRlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB2YWxpZGF0b3IuY2FsbChzZWxmLCBtb2RlbFZhbHVlKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIG5Nb2RlbC5zZXRWYWxpZGl0eShyZXN1bHQudmFsaWQsIHJlc3VsdC5mZWVkYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuTW9kZWwuc2V0VmFsaWRpdHkodHJ1ZSwgbnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL2Zvcm0uaHRtbCc7XG5cbkBzaW5lLmRlY29yYXRvci5jb21wb25lbnQoe1xuICAgIG5hbWVzcGFjZTogJ3NpbmUudWknLFxuICAgIHNlbGVjdG9yOiAnbi1mb3JtJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcbn0pXG5jbGFzcyBGb3JtQ29tcG9uZW50IGV4dGVuZHMgc2luZS5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVudGl0eSA9IG51bGw7XG4gICAgICAgIHRoaXMuY29uZmlnID0ge1xuICAgICAgICAgICAgZ3JvdXBzOiBbXSxcbiAgICAgICAgICAgIHZhbGlkYXRvcjoge31cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB0b2dnbGUoZ3JvdXApIHtcbiAgICAgICAgdmFyIHByb3h5ID0gZ3JvdXAudG9Qcm94eSgpO1xuICAgICAgICBwcm94eS5jb2xsYXBzZWQgPSAhZ3JvdXAuY29sbGFwc2VkO1xuICAgIH1cblxuICAgIGlzVmFsaWQoaXRlbSkge1xuICAgICAgICBpZiAodGhpc1tpdGVtLmZpZWxkXSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tpdGVtLmZpZWxkXS4kdmFsaWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBnZXRGZWVkYmFjayhpdGVtKSB7XG4gICAgICAgIGlmICh0aGlzW2l0ZW0uZmllbGRdICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzW2l0ZW0uZmllbGRdLiRmZWVkYmFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcImFjY29yZGlvblxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiICpuLXJlcGVhdD1cXFwiZ3JvdXAgaW4gY29uZmlnLmdyb3Vwc1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCIgQGNsaWNrPVxcXCJ0b2dnbGUoZ3JvdXApXFxcIiAqbi1iaW5kPVxcXCJncm91cC50aXRsZVxcXCI+PC9kaXY+XFxyXFxuXFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2xsYXBzZSBzaG93XFxcIiAqbi1oaWRlPVxcXCJncm91cC5jb2xsYXBzZWRcXFwiICphbmltYXRpb24tY29sbGFwc2U+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1ib2R5XFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCIgKm4tcmVwZWF0PVxcXCJpdGVtIGluIGdyb3VwLml0ZW1zXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVxcXCJpdGVtLmZpZWxkXFxcIiBjbGFzcz1cXFwiY29sLWZvcm0tbGFiZWwtc21cXFwiICpuLWJpbmQ9XFxcIml0ZW0ubGFiZWxcXFwiPjwvbGFiZWw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgOnR5cGU9XFxcIml0ZW0udHlwZVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20ge3sgaXNWYWxpZChpdGVtKT8naXMtdmFsaWQnOidpcy1pbnZhbGlkJyB9fVxcXCIgOm5hbWU9XFxcIml0ZW0uZmllbGRcXFwiICpuLW1vZGVsPVxcXCJlbnRpdHlbaXRlbS5maWVsZF1cXFwiICpuLXZhbGlkYXRlPVxcXCJpdGVtLnZhbGlkYXRvclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3M9XFxcImZvcm0tdGV4dCB0ZXh0LW11dGVkXFxcIiAqbi1zaG93PVxcXCJpdGVtLmhlbHAgJiYgIWdldEZlZWRiYWNrKGl0ZW0pXFxcIiAqbi1iaW5kPVxcXCJpdGVtLmhlbHBcXFwiPjwvc21hbGw+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ7eyBpc1ZhbGlkKGl0ZW0pPyd2YWxpZC1mZWVkYmFjayc6J2ludmFsaWQtZmVlZGJhY2snfX1cXFwiICpuLWJpbmQ9XFxcImdldEZlZWRiYWNrKGl0ZW0pXFxcIiAqbi1zaG93PVxcXCJnZXRGZWVkYmFjayhpdGVtKVxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvZGl2PlwiIiwiZXhwb3J0ICogZnJvbSAnLi9mb3JtLmNtcCc7IiwiZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9hbmltYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9mb3JtJztcbmV4cG9ydCAqIGZyb20gJy4vbW9kYWwnO1xuZXhwb3J0ICogZnJvbSAnLi9wcm9ncmVzcyc7XG5leHBvcnQgKiBmcm9tICcuL25hdic7XG5leHBvcnQgKiBmcm9tICcuL25hdi1iYXInOyIsImV4cG9ydCAqIGZyb20gJy4vbW9kYWwuY21wJztcclxuZXhwb3J0ICogZnJvbSAnLi9tb2RhbC5zZXJ2aWNlJzsiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9tb2RhbC5odG1sJztcclxuXHJcbkBzaW5lLmRlY29yYXRvci5jb21wb25lbnQoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZS51aScsXHJcbiAgICBzZWxlY3RvcjogJ24tbW9kYWwnLFxyXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlXHJcbn0pXHJcbmNsYXNzIE1vZGFsQ29tcG9uZW50IGV4dGVuZHMgc2luZS5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q21wID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNtcENvbmZpZyA9IHtcclxuICAgICAgICAgICAgb25Jbml0OiBmdW5jdGlvbiAodmlldykge1xyXG4gICAgICAgICAgICAgICAgdmlldy4kY2xvc2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaG93KGNtcCkge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q21wID0gY21wO1xyXG4gICAgICAgIHRoaXMuJG1vdW50KGRvY3VtZW50LmJvZHksIHtcclxuICAgICAgICAgICAgYXBwZW5kOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2UoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgICAgICBhbmltYXRpb24gPSB0aGlzLnJvb3RFbGVtZW50LmdldERpcmVjdGl2ZSgnYW5pbWF0aW9uLW1vZGFsJyk7XHJcblxyXG4gICAgICAgIHRoaXMuJHByb3h5LnZpc2libGUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgYW5pbWF0aW9uLmxlZnQub24oZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLiRkZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IE1vZGFsQ29tcG9uZW50IH0iLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcIm1vZGFsIGZhZGVcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgKm4tc2hvdz1cXFwidmlzaWJsZVxcXCIgKmFuaW1hdGlvbi1tb2RhbCAqbi1uYW1lPVxcXCJyb290RWxlbWVudFxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWRpYWxvZ1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jb250ZW50XFxcIiAqbi1iaW5kLWNtcD1cXFwiY3VycmVudENtcFxcXCIgKm4tYmluZC1jbXAtb3B0aW9ucz1cXFwiY21wQ29uZmlnXFxcIj5cXHJcXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwibW9kYWwtaGVhZGVyXFxcIj4tLT5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLTxoNSBjbGFzcz1cXFwibW9kYWwtdGl0bGVcXFwiPk1vZGFsIFRpdGxlPC9oNT4tLT5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLTxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiY2xvc2VcXFwiPi0tPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxzcGFuPiZ0aW1lczs8L3NwYW4+LS0+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS08L2J1dHRvbj4tLT5cXHJcXG4gICAgICAgICAgICA8IS0tPC9kaXY+LS0+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcIm1vZGFsLWJvZHlcXFwiPi0tPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tLi4uLS0+XFxyXFxuICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcclxcblxcclxcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJtb2RhbC1mb290ZXJcXFwiPi0tPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnlcXFwiPlNhdmUgY2hhbmdlczwvYnV0dG9uPi0tPlxcclxcbiAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIiIsImltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9tb2RhbC5jbXAnO1xyXG5cclxuQHNpbmUuZGVjb3JhdG9yLnNlcnZpY2Uoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZS51aScsXHJcbiAgICBzZWxlY3RvcjogJ21vZGFsU2VydmljZSdcclxufSlcclxuY2xhc3MgTW9kYWxTZXJ2aWNlIGV4dGVuZHMgc2luZS5TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyhjb250ZW50KSB7XHJcbiAgICAgICAgbmV3IE1vZGFsQ29tcG9uZW50KCkuc2hvdyhjb250ZW50KTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vbmF2LWJhci5jbXAnOyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL25hdi1iYXIuaHRtbCc7XHJcblxyXG52YXIgZGVmYXVsdHMgPSB7XHJcbiAgICBjb2xvcjogJ2xpZ2h0JyxcclxufTtcclxuXHJcbkBzaW5lLmRlY29yYXRvci5jb21wb25lbnQoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZS51aScsXHJcbiAgICBzZWxlY3RvcjogJ24tbmF2LWJhcicsXHJcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGVcclxufSlcclxuY2xhc3MgTmF2QmFyQ29tcG9uZW50IGV4dGVuZHMgc2luZS5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmJyYW5kID0ge307XHJcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMubmF2T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgaW5zaWRlQmFyOiB0cnVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge307XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHt9O1xyXG4gICAgICAgIHRoaXMuY3NzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgb25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzaW5lLm1lcmdlKGRlZmF1bHRzLCB0aGlzLm9wdGlvbnMpO1xyXG5cclxuICAgICAgICB0aGlzLmNzcyA9IHtcclxuICAgICAgICAgICAgbmF2OiBzaW5lLmZvcm1hdCgnbmF2YmFyLXswfSBiZy17MH0nLCB0aGlzLnNldHRpbmdzLmNvbG9yKVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlKGNvbnRlbnQpIHtcclxuICAgICAgICB2YXIgZWxlbWVudCA9IGNvbnRlbnQuaHRtbEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgXCI8bmF2IGNsYXNzPVxcXCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZ1xcXCIgKm4tY2xhc3M9XFxcImNzcy5uYXZcXFwiPlxcclxcbiAgICA8YSBjbGFzcz1cXFwibmF2YmFyLWJyYW5kXFxcIiA6aHJlZj1cXFwiYnJhbmQudXJsXFxcIiAqbi1iaW5kPVxcXCJicmFuZC5sYWJlbFxcXCI+PC9hPlxcclxcbiAgICA8YnV0dG9uIGNsYXNzPVxcXCJuYXZiYXItdG9nZ2xlclxcXCIgdHlwZT1cXFwiYnV0dG9uXFxcIiBAY2xpY2s9XFxcInRvZ2dsZShuYXZiYXJTdXBwb3J0ZWRDb250ZW50KVxcXCI+XFxyXFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwibmF2YmFyLXRvZ2dsZXItaWNvblxcXCI+PC9zcGFuPlxcclxcbiAgICAgIDwvYnV0dG9uPlxcclxcblxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2Ugc2hvd1xcXCIgKm4tbmFtZT1cXFwibmF2YmFyU3VwcG9ydGVkQ29udGVudFxcXCI+XFxyXFxuICAgICAgICA8bi1uYXYgOml0ZW1zPVxcXCJpdGVtc1xcXCIgOm9wdGlvbnM9XFxcIm5hdk9wdGlvbnNcXFwiPjwvbi1uYXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbjwvbmF2PlwiIiwiZXhwb3J0ICogZnJvbSAnLi9uYXYuY21wJzsiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9uYXYuaHRtbCc7XHJcbmltcG9ydCAnLi9uYXYuY3NzJztcclxuXHJcbnZhciBkZWZhdWx0cyA9IHtcclxuICAgIGZsZXhDb2x1bW46IGZhbHNlLFxyXG4gICAgICAgICAgICBpbnNpZGVCYXI6IGZhbHNlXHJcbn07XHJcblxyXG5Ac2luZS5kZWNvcmF0b3IuY29tcG9uZW50KHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUudWknLFxyXG4gICAgc2VsZWN0b3I6ICduLW5hdicsXHJcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXHJcbiAgICBpbmplY3Q6IHtcclxuICAgICAgICAkcm91dGVyOiAnJHJvdXRlcidcclxuICAgIH1cclxufSlcclxuY2xhc3MgTmF2Q29tcG9uZW50IGV4dGVuZHMgc2luZS5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge307XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uSW5pdCgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNpbmUubWVyZ2UoZGVmYXVsdHMsIHRoaXMub3B0aW9ucyk7ICAgICAgIFxyXG4gICAgICAgIHRoaXMuaXRlbXMuc29tZShmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubmF2aWdhdGUoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5hdmlnYXRlKGl0ZW0pIHtcclxuICAgICAgICBpZiAoaXRlbS5wYXRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5uYXZpZ2F0ZShpdGVtLnBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaXRlbS5leGVjdXRlICYmIGl0ZW0uZXhlY3V0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmUoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQWN0aXZlKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0yKSB7XHJcbiAgICAgICAgICAgIGl0ZW0yLnRvUHJveHkoKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaXRlbS50b1Byb3h5KCkuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxufSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1NzQ1ODA0Mzc2NDNcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL1VzZXJzL2ExL0RvY3VtZW50cy9Db2RlL3NpbmUtdWkvbm9kZV9tb2R1bGVzL19taW5pLWNzcy1leHRyYWN0LXBsdWdpbkAwLjguMEBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiLCJleHBvcnQgZGVmYXVsdCBcIjx1bCBjbGFzcz1cXFwie3sgc2V0dGluZ3MuaW5zaWRlQmFyPyduYXZiYXItbmF2JzonbmF2JyB9fSB7eyBzZXR0aW5ncy5mbGV4Q29sdW1uPydmbGV4LWNvbHVtbic6JycgfX1cXFwiPlxcclxcbiAgICA8bGkgY2xhc3M9XFxcIm5hdi1pdGVtXFxcIiAqbi1yZXBlYXQ9XFxcIml0ZW0gaW4gaXRlbXNcXFwiPlxcclxcbiAgICAgICAgPGEgY2xhc3M9XFxcIm5hdi1saW5rIHNwYW4tbmF2LWxpbmsge3sgaXRlbS5hY3RpdmU/J2FjdGl2ZSc6JycgfX0ge3sgaXRlbS5kaXNhYmxlPydkaXNhYmxlJzonJyB9fVxcXCIgKm4tYmluZD1cXFwiaXRlbS5sYWJlbFxcXCIgQGNsaWNrPVxcXCJuYXZpZ2F0ZShpdGVtKVxcXCI+PC9hPlxcclxcbiAgICA8L2xpPlxcclxcbjwvdWw+XCIiLCJleHBvcnQgKiBmcm9tICcuL3Byb2dyZXNzLmNtcCc7IiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vcHJvZ3Jlc3MuaHRtbCc7XHJcblxyXG5Ac2luZS5kZWNvcmF0b3IuY29tcG9uZW50KHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUudWknLFxyXG4gICAgc2VsZWN0b3I6ICduLXByb2dyZXNzJyxcclxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxyXG59KVxyXG5jbGFzcyBQcm9ncmVzc0NvbXBvbmVudCBleHRlbmRzIHNpbmUuQ29tcG9uZW50IHtcclxuICAgIGdldCBwZXJjZW50KCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRoaXMudmFsdWUgKiAxMDAgLyB0aGlzLm1heFZhbHVlLCAyKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbGFiZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGVyY2VudCArICclJztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSAwO1xyXG4gICAgICAgIHRoaXMubWF4VmFsdWUgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5jc3MgPSB7fTtcclxuICAgICAgICB0aGlzLmJhckNzcyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyQXR0ckNoYW5nZShwcm9wLCB2YWx1ZSl7XHJcbiAgICAgICAgaWYocHJvcCA9PT0gJ3ZhbHVlJyl7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyQ3NzLnRvUHJveHkoKS53aWR0aCA9IHRoaXMucGVyY2VudCArICclJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBjbGFzcz1cXFwicHJvZ3Jlc3NcXFwiICpuLXN0eWxlPVxcXCJjc3NcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzcy1iYXJcXFwiICpuLXN0eWxlPVxcXCJiYXJDc3NcXFwiICpuLWJpbmQ9XFxcImxhYmVsXFxcIj48L2Rpdj5cXHJcXG48L2Rpdj5cIiJdLCJzb3VyY2VSb290IjoiIn0=