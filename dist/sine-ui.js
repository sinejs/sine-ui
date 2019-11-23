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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var NavBarComponent = (_dec = sine.decorator.component({
  namespace: 'sine.ui',
  selector: 'n-nav-bar',
  template: _nav_bar_html__WEBPACK_IMPORTED_MODULE_0__["default"],
  inject: {
    $router: '$router'
  }
}), _dec(_class =
/*#__PURE__*/
function (_sine$Component) {
  _inherits(NavBarComponent, _sine$Component);

  function NavBarComponent() {
    var _this;

    _classCallCheck(this, NavBarComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NavBarComponent).call(this));
    _this.brand = {
      label: 'Sine',
      url: '#'
    };
    _this.items = [{
      label: 'Home',
      active: false,
      disable: false,
      path: 'home'
    }, {
      label: 'Document',
      active: true,
      disable: false,
      path: 'docu'
    }, {
      label: 'Component',
      active: false,
      disable: false,
      path: 'component'
    }];
    return _this;
  }

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
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" :href=\"brand.url\" :n-bind=\"brand.label\"></a>\r\n\r\n    <div class=\"collapse navbar-collapse\">\r\n        <n-nav :items=\"items\"></n-nav>\r\n    </div>\r\n</nav>");

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
    _this.options = {
      flexColumn: false,
      insideBar: false
    };
    return _this;
  }

  _createClass(NavComponent, [{
    key: "onInit",
    value: function onInit() {
      var self = this;
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

/***/ "./src/nav/nav.html":
/*!**************************!*\
  !*** ./src/nav/nav.html ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"{{ options.insideBar?'navbar-nav':'nav' }} {{ options.flexColumn?'flex-column':'' }}\">\r\n    <li class=\"nav-item\" *n-repeat=\"item in items\">\r\n        <span class=\"nav-link {{ item.active?'active':'' }} {{ item.disable?'disable':'' }}\" *n-bind=\"item.label\" @click=\"navigate(item)\"></span>\r\n    </li>\r\n</ul>");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5ldWkvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3NpbmV1aS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvYW5pbWF0aW9uL2NvbGxhcHNlLmpzIiwid2VicGFjazovL3NpbmV1aS8uL3NyYy9hbmltYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZXVpLy4vc3JjL2FuaW1hdGlvbi9tb2RhbC5qcyIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvZGlyZWN0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3NpbmV1aS8uL3NyYy9kaXJlY3RpdmUvdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vc2luZXVpLy4vc3JjL2Zvcm0vZm9ybS5jbXAuanMiLCJ3ZWJwYWNrOi8vc2luZXVpLy4vc3JjL2Zvcm0vZm9ybS5odG1sIiwid2VicGFjazovL3NpbmV1aS8uL3NyYy9mb3JtL2luZGV4LmpzIiwid2VicGFjazovL3NpbmV1aS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvbW9kYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZXVpLy4vc3JjL21vZGFsL21vZGFsLmNtcC5qcyIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvbW9kYWwvbW9kYWwuaHRtbCIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvbW9kYWwvbW9kYWwuc2VydmljZS5qcyIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvbmF2LWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvbmF2LWJhci9uYXYtYmFyLmNtcC5qcyIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvbmF2LWJhci9uYXYtYmFyLmh0bWwiLCJ3ZWJwYWNrOi8vc2luZXVpLy4vc3JjL25hdi9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvbmF2L25hdi5jbXAuanMiLCJ3ZWJwYWNrOi8vc2luZXVpLy4vc3JjL25hdi9uYXYuaHRtbCIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvcHJvZ3Jlc3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2luZXVpLy4vc3JjL3Byb2dyZXNzL3Byb2dyZXNzLmNtcC5qcyIsIndlYnBhY2s6Ly9zaW5ldWkvLi9zcmMvcHJvZ3Jlc3MvcHJvZ3Jlc3MuaHRtbCJdLCJuYW1lcyI6WyJDb2xsYXBzZUFuaW1hdGlvbiIsInNpbmUiLCJkZWNvcmF0b3IiLCJkaXJlY3RpdmUiLCJuYW1lc3BhY2UiLCJzZWxlY3RvciIsImluaXRpYWxEaXNwbGF5IiwiaW5pdGlhbEhlaWdodCIsImNsaWVudEhlaWdodCIsImR1cmF0aW9uIiwiJGh0bWxFbGVtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiaGVpZ2h0IiwidHJhbnNpdGlvbiIsInNlbGYiLCJuZXh0RnJhbWUiLCJBbmltYXRpb24iLCJNb2RhbEFuaW1hdGlvbiIsImJhY2tkcm9wIiwibGVmdCIsIk1lc3NlbmdlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJyZW1vdmUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVCYWNrZHJvcCIsImFwcGVuZENoaWxkIiwicmVtb3ZlTW9kYWwiLCJmaXJlIiwiVmFsaWRhdGVEaXJlY3RpdmUiLCJuTW9kZWwiLCIkZWxlbWVudCIsImdldERpcmVjdGl2ZSIsIkVycm9yIiwiJHZhbGlkYXRvcnMiLCJwdXNoIiwibW9kZWxWYWx1ZSIsInZhbGlkYXRvciIsIiRiaW5kaW5nIiwiY29tcHV0ZSIsInJlc3VsdCIsImNhbGwiLCJzZXRWYWxpZGl0eSIsInZhbGlkIiwiZmVlZGJhY2siLCJEaXJlY3RpdmUiLCJGb3JtQ29tcG9uZW50IiwiY29tcG9uZW50IiwidGVtcGxhdGUiLCJlbnRpdHkiLCJjb25maWciLCJncm91cHMiLCJncm91cCIsInByb3h5IiwidG9Qcm94eSIsImNvbGxhcHNlZCIsIml0ZW0iLCJmaWVsZCIsIiR2YWxpZCIsIiRmZWVkYmFjayIsIkNvbXBvbmVudCIsIk1vZGFsQ29tcG9uZW50IiwidmlzaWJsZSIsImN1cnJlbnRDbXAiLCJjbXBDb25maWciLCJvbkluaXQiLCJ2aWV3IiwiJGNsb3NlIiwiY2xvc2UiLCJjbXAiLCIkbW91bnQiLCJhcHBlbmQiLCJhbmltYXRpb24iLCJyb290RWxlbWVudCIsIiRwcm94eSIsIm9uIiwiJGRlc3Ryb3kiLCJNb2RhbFNlcnZpY2UiLCJzZXJ2aWNlIiwiY29udGVudCIsInNob3ciLCJTZXJ2aWNlIiwiTmF2QmFyQ29tcG9uZW50IiwiaW5qZWN0IiwiJHJvdXRlciIsImJyYW5kIiwibGFiZWwiLCJ1cmwiLCJpdGVtcyIsImFjdGl2ZSIsImRpc2FibGUiLCJwYXRoIiwiTmF2Q29tcG9uZW50Iiwib3B0aW9ucyIsImZsZXhDb2x1bW4iLCJpbnNpZGVCYXIiLCJzb21lIiwibmF2aWdhdGUiLCJleGVjdXRlIiwidXBkYXRlQWN0aXZlIiwiZm9yRWFjaCIsIml0ZW0yIiwiUHJvZ3Jlc3NDb21wb25lbnQiLCJNYXRoIiwicm91bmQiLCJ2YWx1ZSIsIm1heFZhbHVlIiwicGVyY2VudCIsImNzcyIsImJhckNzcyIsInByb3AiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUFnQixHQUFoQjtBQUNBLFVBQUtFLEdBQUwsR0FBVyxFQUFYO0FBQ0EsVUFBS0MsTUFBTCxHQUFjLEVBQWQ7QUFMVTtBQU1iOzs7O29DQUVlQyxJLEVBQU1MLEssRUFBTTtBQUN4QixVQUFHSyxJQUFJLEtBQUssT0FBWixFQUFvQjtBQUNoQixhQUFLRCxNQUFMLENBQVl2RCxPQUFaLEdBQXNCeUQsS0FBdEIsR0FBOEIsS0FBS0osT0FBTCxHQUFlLEdBQTdDO0FBQ0g7QUFDSjs7O2dDQUVXLENBRVg7Ozs7RUF6QjJCL0csSUFBSSxDQUFDZ0UsUzs7Ozs7Ozs7Ozs7O0FDUHJDO0FBQWUsb00iLCJmaWxlIjoic2luZS11aS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInNpbmV1aVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJzaW5ldWlcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiXHJcbkBzaW5lLmRlY29yYXRvci5kaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZS51aScsXHJcbiAgICBzZWxlY3RvcjogJ2FuaW1hdGlvbi1jb2xsYXBzZSdcclxufSlcclxuY2xhc3MgQ29sbGFwc2VBbmltYXRpb24gZXh0ZW5kcyBzaW5lLkFuaW1hdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbERpc3BsYXkgPSAnJztcclxuICAgICAgICB0aGlzLmluaXRpYWxIZWlnaHQgPSAnJztcclxuICAgICAgICB0aGlzLmNsaWVudEhlaWdodCA9IDA7XHJcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDQwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgb25JbnNlcnQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsRGlzcGxheSA9IHRoaXMuJGh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsSGVpZ2h0ID0gdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGJlZm9yZUVudGVyKCkge1xyXG4gICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9IDEgKyAncHgnO1xyXG4gICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnN0eWxlLnRyYW5zaXRpb24gPSAnaGVpZ2h0ICcgKyB0aGlzLmR1cmF0aW9uICsgJ21zJztcclxuICAgIH1cclxuXHJcbiAgICBlbnRlcigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5uZXh0RnJhbWUoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5pbml0aWFsSGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLiRodG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBzZWxmLmluaXRpYWxIZWlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5jbGllbnRIZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuJGh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9IHNlbGYuY2xpZW50SGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuJGh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9ICdpbml0aWFsJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyRW50ZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluaXRpYWxIZWlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gJ2luaXRpYWwnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBiZWZvcmVMZWF2ZSgpIHtcclxuICAgICAgICB0aGlzLmNsaWVudEhlaWdodCA9IHRoaXMuJGh0bWxFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmNsaWVudEhlaWdodCArICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgbGVhdmUoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubmV4dEZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi4kaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gMCArICdweCc7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJMZWF2ZSgpIHtcclxuICAgICAgICB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmluaXRpYWxIZWlnaHQ7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2NvbGxhcHNlJztcclxuZXhwb3J0ICogZnJvbSAnLi9tb2RhbCc7IiwiXHJcbkBzaW5lLmRlY29yYXRvci5kaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZS51aScsXHJcbiAgICBzZWxlY3RvcjogJ2FuaW1hdGlvbi1tb2RhbCdcclxufSlcclxuY2xhc3MgTW9kYWxBbmltYXRpb24gZXh0ZW5kcyBzaW5lLkFuaW1hdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYmFja2Ryb3AgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IG5ldyBzaW5lLk1lc3NlbmdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJhY2tkcm9wKCkge1xyXG4gICAgICAgIHRoaXMuYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWJhY2tkcm9wJyk7XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdmYWRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTW9kYWwoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC1vcGVuJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJhY2tkcm9wLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuYmFja2Ryb3ApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkluc2VydCgpIHtcclxuICAgICAgICB0aGlzLmluaXRpYWxEaXNwbGF5ID0gdGhpcy4kaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheTtcclxuICAgICAgICB0aGlzLmluaXRpYWxIZWlnaHQgPSB0aGlzLiRodG1sRWxlbWVudC5zdHlsZS5oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgYmVmb3JlRW50ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVCYWNrZHJvcCgpO1xyXG4gICAgICAgIHRoaXMuJGh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbW9kYWwtb3BlbicpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5iYWNrZHJvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgZW50ZXIoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubmV4dEZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi4kaHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xyXG4gICAgICAgICAgICBzZWxmLmJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgYmVmb3JlTGVhdmUoKSB7XHJcbiAgICAgICAgdGhpcy4kaHRtbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgIHRoaXMuYmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyTGVhdmUoKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVNb2RhbCgpO1xyXG4gICAgICAgIHRoaXMubGVmdC5maXJlKCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL3ZhbGlkYXRlJzsiLCJcclxuQHNpbmUuZGVjb3JhdG9yLmRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lLnVpJyxcclxuICAgIHNlbGVjdG9yOiAnbi12YWxpZGF0ZSdcclxufSlcclxuY2xhc3MgVmFsaWRhdGVEaXJlY3RpdmUgZXh0ZW5kcyBzaW5lLkRpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29tcGlsZSgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIG5Nb2RlbCA9IHRoaXMuJGVsZW1lbnQuZ2V0RGlyZWN0aXZlKCduLW1vZGVsJyk7XHJcblxyXG4gICAgICAgIGlmICghbk1vZGVsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZSBcIm4tbW9kZWxcIicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbk1vZGVsLiR2YWxpZGF0b3JzLnB1c2goZnVuY3Rpb24gKG1vZGVsVmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIHZhbGlkYXRvciA9IHNlbGYuJGJpbmRpbmcuY29tcHV0ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRvciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdmFsaWRhdG9yLmNhbGwoc2VsZiwgbW9kZWxWYWx1ZSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBuTW9kZWwuc2V0VmFsaWRpdHkocmVzdWx0LnZhbGlkLCByZXN1bHQuZmVlZGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbk1vZGVsLnNldFZhbGlkaXR5KHRydWUsIG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9mb3JtLmh0bWwnO1xuXG5Ac2luZS5kZWNvcmF0b3IuY29tcG9uZW50KHtcbiAgICBuYW1lc3BhY2U6ICdzaW5lLnVpJyxcbiAgICBzZWxlY3RvcjogJ24tZm9ybScsXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlXG59KVxuY2xhc3MgRm9ybUNvbXBvbmVudCBleHRlbmRzIHNpbmUuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbnRpdHkgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHtcbiAgICAgICAgICAgIGdyb3VwczogW10sXG4gICAgICAgICAgICB2YWxpZGF0b3I6IHt9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdG9nZ2xlKGdyb3VwKSB7XG4gICAgICAgIHZhciBwcm94eSA9IGdyb3VwLnRvUHJveHkoKTtcbiAgICAgICAgcHJveHkuY29sbGFwc2VkID0gIWdyb3VwLmNvbGxhcHNlZDtcbiAgICB9XG5cbiAgICBpc1ZhbGlkKGl0ZW0pIHtcbiAgICAgICAgaWYgKHRoaXNbaXRlbS5maWVsZF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXNbaXRlbS5maWVsZF0uJHZhbGlkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2V0RmVlZGJhY2soaXRlbSkge1xuICAgICAgICBpZiAodGhpc1tpdGVtLmZpZWxkXSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpc1tpdGVtLmZpZWxkXS4kZmVlZGJhY2s7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJhY2NvcmRpb25cXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIiAqbi1yZXBlYXQ9XFxcImdyb3VwIGluIGNvbmZpZy5ncm91cHNcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiIEBjbGljaz1cXFwidG9nZ2xlKGdyb3VwKVxcXCIgKm4tYmluZD1cXFwiZ3JvdXAudGl0bGVcXFwiPjwvZGl2PlxcclxcblxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sbGFwc2Ugc2hvd1xcXCIgKm4taGlkZT1cXFwiZ3JvdXAuY29sbGFwc2VkXFxcIiAqYW5pbWF0aW9uLWNvbGxhcHNlPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZvcm0tZ3JvdXBcXFwiICpuLXJlcGVhdD1cXFwiaXRlbSBpbiBncm91cC5pdGVtc1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cXFwiaXRlbS5maWVsZFxcXCIgY2xhc3M9XFxcImNvbC1mb3JtLWxhYmVsLXNtXFxcIiAqbi1iaW5kPVxcXCJpdGVtLmxhYmVsXFxcIj48L2xhYmVsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IDp0eXBlPVxcXCJpdGVtLnR5cGVcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIHt7IGlzVmFsaWQoaXRlbSk/J2lzLXZhbGlkJzonaXMtaW52YWxpZCcgfX1cXFwiIDpuYW1lPVxcXCJpdGVtLmZpZWxkXFxcIiAqbi1tb2RlbD1cXFwiZW50aXR5W2l0ZW0uZmllbGRdXFxcIiAqbi12YWxpZGF0ZT1cXFwiaXRlbS52YWxpZGF0b3JcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzPVxcXCJmb3JtLXRleHQgdGV4dC1tdXRlZFxcXCIgKm4tc2hvdz1cXFwiaXRlbS5oZWxwICYmICFnZXRGZWVkYmFjayhpdGVtKVxcXCIgKm4tYmluZD1cXFwiaXRlbS5oZWxwXFxcIj48L3NtYWxsPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwie3sgaXNWYWxpZChpdGVtKT8ndmFsaWQtZmVlZGJhY2snOidpbnZhbGlkLWZlZWRiYWNrJ319XFxcIiAqbi1iaW5kPVxcXCJnZXRGZWVkYmFjayhpdGVtKVxcXCIgKm4tc2hvdz1cXFwiZ2V0RmVlZGJhY2soaXRlbSlcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cIiIsImV4cG9ydCAqIGZyb20gJy4vZm9ybS5jbXAnOyIsImV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vYW5pbWF0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vZm9ybSc7XG5leHBvcnQgKiBmcm9tICcuL21vZGFsJztcbmV4cG9ydCAqIGZyb20gJy4vcHJvZ3Jlc3MnO1xuZXhwb3J0ICogZnJvbSAnLi9uYXYnO1xuZXhwb3J0ICogZnJvbSAnLi9uYXYtYmFyJzsiLCJleHBvcnQgKiBmcm9tICcuL21vZGFsLmNtcCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbW9kYWwuc2VydmljZSc7IiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vbW9kYWwuaHRtbCc7XHJcblxyXG5Ac2luZS5kZWNvcmF0b3IuY29tcG9uZW50KHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUudWknLFxyXG4gICAgc2VsZWN0b3I6ICduLW1vZGFsJyxcclxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZVxyXG59KVxyXG5jbGFzcyBNb2RhbENvbXBvbmVudCBleHRlbmRzIHNpbmUuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudENtcCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jbXBDb25maWcgPSB7XHJcbiAgICAgICAgICAgIG9uSW5pdDogZnVuY3Rpb24gKHZpZXcpIHtcclxuICAgICAgICAgICAgICAgIHZpZXcuJGNsb3NlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyhjbXApIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudENtcCA9IGNtcDtcclxuICAgICAgICB0aGlzLiRtb3VudChkb2N1bWVudC5ib2R5LCB7XHJcbiAgICAgICAgICAgIGFwcGVuZDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcclxuICAgICAgICAgICAgYW5pbWF0aW9uID0gdGhpcy5yb290RWxlbWVudC5nZXREaXJlY3RpdmUoJ2FuaW1hdGlvbi1tb2RhbCcpO1xyXG5cclxuICAgICAgICB0aGlzLiRwcm94eS52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGFuaW1hdGlvbi5sZWZ0Lm9uKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi4kZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBNb2RhbENvbXBvbmVudCB9IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJtb2RhbCBmYWRlXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiICpuLXNob3c9XFxcInZpc2libGVcXFwiICphbmltYXRpb24tbW9kYWwgKm4tbmFtZT1cXFwicm9vdEVsZW1lbnRcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1kaWFsb2dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCIgKm4tYmluZC1jbXA9XFxcImN1cnJlbnRDbXBcXFwiICpuLWJpbmQtY21wLW9wdGlvbnM9XFxcImNtcENvbmZpZ1xcXCI+XFxyXFxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XFxcIm1vZGFsLWhlYWRlclxcXCI+LS0+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS08aDUgY2xhc3M9XFxcIm1vZGFsLXRpdGxlXFxcIj5Nb2RhbCBUaXRsZTwvaDU+LS0+XFxyXFxuICAgICAgICAgICAgICAgIDwhLS08YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcImNsb3NlXFxcIj4tLT5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwhLS08c3Bhbj4mdGltZXM7PC9zcGFuPi0tPlxcclxcbiAgICAgICAgICAgICAgICA8IS0tPC9idXR0b24+LS0+XFxyXFxuICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxcclxcblxcclxcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVxcXCJtb2RhbC1ib2R5XFxcIj4tLT5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLS4uLi0tPlxcclxcbiAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cXHJcXG5cXHJcXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cXFwibW9kYWwtZm9vdGVyXFxcIj4tLT5cXHJcXG4gICAgICAgICAgICAgICAgPCEtLTxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1wcmltYXJ5XFxcIj5TYXZlIGNoYW5nZXM8L2J1dHRvbj4tLT5cXHJcXG4gICAgICAgICAgICA8IS0tPC9kaXY+LS0+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XCIiLCJpbXBvcnQgeyBNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwuY21wJztcclxuXHJcbkBzaW5lLmRlY29yYXRvci5zZXJ2aWNlKHtcclxuICAgIG5hbWVzcGFjZTogJ3NpbmUudWknLFxyXG4gICAgc2VsZWN0b3I6ICdtb2RhbFNlcnZpY2UnXHJcbn0pXHJcbmNsYXNzIE1vZGFsU2VydmljZSBleHRlbmRzIHNpbmUuU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coY29udGVudCkge1xyXG4gICAgICAgIG5ldyBNb2RhbENvbXBvbmVudCgpLnNob3coY29udGVudCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL25hdi1iYXIuY21wJzsiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9uYXYtYmFyLmh0bWwnO1xyXG5cclxuQHNpbmUuZGVjb3JhdG9yLmNvbXBvbmVudCh7XHJcbiAgICBuYW1lc3BhY2U6ICdzaW5lLnVpJyxcclxuICAgIHNlbGVjdG9yOiAnbi1uYXYtYmFyJyxcclxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcclxuICAgIGluamVjdDoge1xyXG4gICAgICAgICRyb3V0ZXI6ICckcm91dGVyJ1xyXG4gICAgfVxyXG59KVxyXG5jbGFzcyBOYXZCYXJDb21wb25lbnQgZXh0ZW5kcyBzaW5lLkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYnJhbmQgPSB7XHJcbiAgICAgICAgICAgIGxhYmVsOiAnU2luZScsXHJcbiAgICAgICAgICAgIHVybDogJyMnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLml0ZW1zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0hvbWUnLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRpc2FibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogJ2hvbWUnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiAnRG9jdW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBwYXRoOiAnZG9jdSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdDb21wb25lbnQnLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGRpc2FibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcGF0aDogJ2NvbXBvbmVudCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBcIjxuYXYgY2xhc3M9XFxcIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBiZy1saWdodFxcXCI+XFxyXFxuICAgIDxhIGNsYXNzPVxcXCJuYXZiYXItYnJhbmRcXFwiIDpocmVmPVxcXCJicmFuZC51cmxcXFwiIDpuLWJpbmQ9XFxcImJyYW5kLmxhYmVsXFxcIj48L2E+XFxyXFxuXFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVxcXCI+XFxyXFxuICAgICAgICA8bi1uYXYgOml0ZW1zPVxcXCJpdGVtc1xcXCI+PC9uLW5hdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9uYXY+XCIiLCJleHBvcnQgKiBmcm9tICcuL25hdi5jbXAnOyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL25hdi5odG1sJztcclxuXHJcbkBzaW5lLmRlY29yYXRvci5jb21wb25lbnQoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZS51aScsXHJcbiAgICBzZWxlY3RvcjogJ24tbmF2JyxcclxuICAgIHRlbXBsYXRlOiB0ZW1wbGF0ZSxcclxuICAgIGluamVjdDoge1xyXG4gICAgICAgICRyb3V0ZXI6ICckcm91dGVyJ1xyXG4gICAgfVxyXG59KVxyXG5jbGFzcyBOYXZDb21wb25lbnQgZXh0ZW5kcyBzaW5lLkNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGZsZXhDb2x1bW46IGZhbHNlLFxyXG4gICAgICAgICAgICBpbnNpZGVCYXI6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBvbkluaXQoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLml0ZW1zLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5hdmlnYXRlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0ZShpdGVtKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0ucGF0aCkge1xyXG4gICAgICAgICAgICB0aGlzLiRyb3V0ZXIubmF2aWdhdGUoaXRlbS5wYXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW0uZXhlY3V0ZSAmJiBpdGVtLmV4ZWN1dGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZlKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUFjdGl2ZShpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtMikge1xyXG4gICAgICAgICAgICBpdGVtMi50b1Byb3h5KCkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGl0ZW0udG9Qcm94eSgpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBcIjx1bCBjbGFzcz1cXFwie3sgb3B0aW9ucy5pbnNpZGVCYXI/J25hdmJhci1uYXYnOiduYXYnIH19IHt7IG9wdGlvbnMuZmxleENvbHVtbj8nZmxleC1jb2x1bW4nOicnIH19XFxcIj5cXHJcXG4gICAgPGxpIGNsYXNzPVxcXCJuYXYtaXRlbVxcXCIgKm4tcmVwZWF0PVxcXCJpdGVtIGluIGl0ZW1zXFxcIj5cXHJcXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJuYXYtbGluayB7eyBpdGVtLmFjdGl2ZT8nYWN0aXZlJzonJyB9fSB7eyBpdGVtLmRpc2FibGU/J2Rpc2FibGUnOicnIH19XFxcIiAqbi1iaW5kPVxcXCJpdGVtLmxhYmVsXFxcIiBAY2xpY2s9XFxcIm5hdmlnYXRlKGl0ZW0pXFxcIj48L3NwYW4+XFxyXFxuICAgIDwvbGk+XFxyXFxuPC91bD5cIiIsImV4cG9ydCAqIGZyb20gJy4vcHJvZ3Jlc3MuY21wJzsiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi9wcm9ncmVzcy5odG1sJztcclxuXHJcbkBzaW5lLmRlY29yYXRvci5jb21wb25lbnQoe1xyXG4gICAgbmFtZXNwYWNlOiAnc2luZS51aScsXHJcbiAgICBzZWxlY3RvcjogJ24tcHJvZ3Jlc3MnLFxyXG4gICAgdGVtcGxhdGU6IHRlbXBsYXRlXHJcbn0pXHJcbmNsYXNzIFByb2dyZXNzQ29tcG9uZW50IGV4dGVuZHMgc2luZS5Db21wb25lbnQge1xyXG4gICAgZ2V0IHBlcmNlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQodGhpcy52YWx1ZSAqIDEwMCAvIHRoaXMubWF4VmFsdWUsIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBsYWJlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wZXJjZW50ICsgJyUnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IDA7XHJcbiAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IDEwMDtcclxuICAgICAgICB0aGlzLmNzcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuYmFyQ3NzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgYWZ0ZXJBdHRyQ2hhbmdlKHByb3AsIHZhbHVlKXtcclxuICAgICAgICBpZihwcm9wID09PSAndmFsdWUnKXtcclxuICAgICAgICAgICAgdGhpcy5iYXJDc3MudG9Qcm94eSgpLndpZHRoID0gdGhpcy5wZXJjZW50ICsgJyUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcblxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJwcm9ncmVzc1xcXCIgKm4tc3R5bGU9XFxcImNzc1xcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInByb2dyZXNzLWJhclxcXCIgKm4tc3R5bGU9XFxcImJhckNzc1xcXCIgKm4tYmluZD1cXFwibGFiZWxcXFwiPjwvZGl2PlxcclxcbjwvZGl2PlwiIl0sInNvdXJjZVJvb3QiOiIifQ==