(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueMaterial"] = factory();
	else
		root["VueMaterial"] = factory();
})(this, (function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 430);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach((function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    }))
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    mdTheme: String
  },
  data: function data() {
    return {
      closestThemedParent: false
    };
  },
  methods: {
    getClosestThemedParent: function getClosestThemedParent($parent) {
      if (!$parent || !$parent.$el || $parent._uid === 0) {
        return false;
      }

      if ($parent.mdTheme || $parent.mdName) {
        return $parent;
      }

      return this.getClosestThemedParent($parent.$parent);
    }
  },
  computed: {
    themeClass: function themeClass() {
      if (this.mdTheme) {
        return 'md-theme-' + this.mdTheme;
      }

      var theme = this.closestThemedParent.mdTheme;

      if (!theme) {
        if (this.closestThemedParent) {
          theme = this.closestThemedParent.mdName;
        } else {
          theme = this.$material.currentTheme;
        }
      }

      return 'md-theme-' + theme;
    }
  },
  mounted: function mounted() {
    this.closestThemedParent = this.getClosestThemedParent(this.$parent);

    if (!this.$material.currentTheme) {
      this.$material.setCurrentTheme('default');
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _mdRatingBar = __webpack_require__(317);

var _mdRatingBar2 = _interopRequireDefault(_mdRatingBar);

var _mdRatingBar3 = __webpack_require__(258);

var _mdRatingBar4 = _interopRequireDefault(_mdRatingBar3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function install(Vue) {
  Vue.component('md-rating-bar', _mdRatingBar2.default);

  Vue.material.styles.push(_mdRatingBar4.default);
}
module.exports = exports['default'];

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mixin = __webpack_require__(1);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconSize = 24; //size of each icon from rating bar in pixels

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

exports.default = {
  props: {
    mdMaxRating: {
      type: Number,
      default: 5
    },
    disabled: Boolean,
    value: {
      type: Number,
      default: 0
    },
    mdIconSize: {
      type: Number,
      default: 1
    },
    mdFullIconset: String,
    mdEmptyIconset: String,
    mdFullIcon: {
      type: String,
      default: 'star'
    },
    mdEmptyIcon: {
      type: String,
      default: 'star'
    }
  },
  mixins: [_mixin2.default],
  data: function data() {
    return {
      srcFullIcon: null,
      srcEmptyIcon: null,
      rating: this.value
    };
  },

  mounted: function mounted() {
    this.srcFullIcon = this.checkSrc(this.mdFullIcon);
    this.srcEmptyIcon = this.checkSrc(this.mdEmptyIcon);
  },
  computed: {
    emptyIcon: function emptyIcon() {
      if (this.mdEmptyIconset) {
        return '';
      }

      return this.mdEmptyIcon;
    },
    fullIcon: function fullIcon() {
      if (this.mdFullIconset) {
        return '';
      }

      return this.mdFullIcon;
    },
    iconClasses: function iconClasses() {
      var classes = {};

      if (this.mdIconSize) {
        classes['md-size-' + this.mdIconSize + 'x'] = true;
      }

      return classes;
    },
    fullIconStyle: function fullIconStyle() {
      return {
        width: 100 / this.mdMaxRating * this.rating + '%',
        'margin-left': -iconSize * this.mdIconSize * this.mdMaxRating + 'px'
      };
    }
  },
  watch: {
    mdFullIcon: function mdFullIcon() {
      this.srcFullIcon = this.checkSrc(this.mdFullIcon);
    },
    mdEmptyIcon: function mdEmptyIcon() {
      this.srcEmptyIcon = this.checkSrc(this.mdEmptyIcon);
    },
    value: function value() {
      this.rating = this.value;
    }
  },
  methods: {
    hoverStars: function hoverStars(evt) {
      if (!this.disabled) {
        this.rating = this.getIconIndex(evt.currentTarget);
        this.$emit('hover', this.rating);
      }
    },
    clickStars: function clickStars(evt) {
      if (!this.disabled) {
        var selected = this.getIconIndex(evt.currentTarget);

        this.$emit('input', selected);
        this.$emit('change', selected);
      }
    },
    getIconIndex: function getIconIndex(iconSelected) {
      var _this = this;

      //iconSelected is a dom element
      var ratingIcons = this.$el.querySelectorAll('.md-empty-icon > .md-icon, .md-full-icon > .md-icon');
      var selected = -1;

      ratingIcons = Array.prototype.slice.call(ratingIcons);
      //find index from iconSelected
      ratingIcons.some((function (icon, i) {
        if (icon === iconSelected) {
          selected = (i + 1) % _this.mdMaxRating;
          selected = !selected ? _this.mdMaxRating : selected;
          return true;
        }
      }));

      return selected;
    },
    checkSrc: function checkSrc(src) {
      if (src && /.+\.(svg|png)/.test(src)) {
        //check if src is a image source
        return src;
      }

      return null;
    },
    onMouseOut: function onMouseOut() {
      this.rating = this.value;
    }
  }
};
module.exports = exports['default'];

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-rating-bar > .md-empty-icon .md-icon {\n  color: BACKGROUND-CONTRAST-0.26; }\n\n.THEME_NAME.md-rating-bar > .md-full-icon .md-icon {\n  color: BACKGROUND-CONTRAST-0.38; }\n\n.THEME_NAME.md-rating-bar.md-primary > .md-full-icon .md-icon {\n  color: PRIMARY-COLOR; }\n\n.THEME_NAME.md-rating-bar.md-accent > .md-full-icon .md-icon {\n  color: ACCENT-COLOR; }\n\n.THEME_NAME.md-rating-bar.md-warn > .md-full-icon .md-icon {\n  color: WARN-COLOR; }\n"

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(223)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(175),
  /* template */
  __webpack_require__(376),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/lixiao/Workspace/Web/vue-material/src/components/mdRatingBar/mdRatingBar.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdRatingBar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c037d44", Component.options)
  } else {
    hotAPI.reload("data-v-4c037d44", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-rating-bar",
    class: [_vm.themeClass],
    attrs: {
      "disabled": _vm.disabled
    }
  }, [(_vm.srcEmptyIcon) ? _c('div', {
    staticClass: "md-empty-icon"
  }, _vm._l((_vm.mdMaxRating), (function(i) {
    return (_vm.srcEmptyIcon) ? _c('md-icon', {
      class: [_vm.iconClasses],
      attrs: {
        "md-src": _vm.srcEmptyIcon
      },
      nativeOn: {
        "mouseover": function($event) {
          _vm.hoverStars($event)
        },
        "click": function($event) {
          _vm.clickStars($event)
        },
        "mouseout": function($event) {
          _vm.onMouseOut($event)
        }
      }
    }) : _vm._e()
  }))) : _c('div', {
    staticClass: "md-empty-icon"
  }, _vm._l((_vm.mdMaxRating), (function(i) {
    return _c('md-icon', {
      class: [_vm.iconClasses],
      attrs: {
        "md-iconset": _vm.mdEmptyIconset
      },
      domProps: {
        "innerHTML": _vm._s(_vm.emptyIcon)
      },
      nativeOn: {
        "mouseover": function($event) {
          _vm.hoverStars($event)
        },
        "click": function($event) {
          _vm.clickStars($event)
        },
        "mouseout": function($event) {
          _vm.onMouseOut($event)
        }
      }
    })
  }))), _vm._v(" "), (_vm.srcFullIcon) ? _c('div', {
    staticClass: "md-full-icon",
    style: (_vm.fullIconStyle)
  }, _vm._l((_vm.mdMaxRating), (function(i) {
    return (_vm.srcFullIcon) ? _c('md-icon', {
      class: [_vm.iconClasses],
      attrs: {
        "md-src": _vm.srcFullIcon
      },
      nativeOn: {
        "mouseover": function($event) {
          _vm.hoverStars($event)
        },
        "click": function($event) {
          _vm.clickStars($event)
        },
        "mouseout": function($event) {
          _vm.onMouseOut($event)
        }
      }
    }) : _vm._e()
  }))) : _c('div', {
    staticClass: "md-full-icon",
    style: (_vm.fullIconStyle)
  }, _vm._l((_vm.mdMaxRating), (function(i) {
    return _c('md-icon', {
      class: [_vm.iconClasses],
      attrs: {
        "md-iconset": _vm.mdFullIconset
      },
      domProps: {
        "innerHTML": _vm._s(_vm.fullIcon)
      },
      nativeOn: {
        "mouseover": function($event) {
          _vm.hoverStars($event)
        },
        "click": function($event) {
          _vm.clickStars($event)
        },
        "mouseout": function($event) {
          _vm.onMouseOut($event)
        }
      }
    })
  })))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4c037d44", module.exports)
  }
}

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(113);


/***/ })

/******/ });
}));