
/*!
 * vir-ui-tab v1.3.0
 * (c) 2017 cjg
 * Released under the MIT License.
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vir'), require('jquery')) :
	typeof define === 'function' && define.amd ? define(['vir', 'jquery'], factory) :
	(global.VirUiTab = factory(global.Vir,global.jQuery));
}(this, (function (Vir,$) { 'use strict';

Vir = 'default' in Vir ? Vir['default'] : Vir;
$ = 'default' in $ ? $['default'] : $;

var _extends = Object.assign || function (target) {
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

var index = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$index = options.index,
      index = _options$index === undefined ? 0 : _options$index,
      _options$eventType = options.eventType,
      eventType = _options$eventType === undefined ? 'click' : _options$eventType,
      _options$navSelector = options.navSelector,
      navSelector = _options$navSelector === undefined ? 'ol > li' : _options$navSelector,
      _options$containerSel = options.containerSelector,
      containerSelector = _options$containerSel === undefined ? 'ul > li' : _options$containerSel,
      _options$navCurrentCl = options.navCurrentClass,
      navCurrentClass = _options$navCurrentCl === undefined ? 'cur' : _options$navCurrentCl,
      _options$containerCur = options.containerCurrentClass,
      containerCurrentClass = _options$containerCur === undefined ? 'cur' : _options$containerCur;


  return Vir({
    data: {
      index: 0,
      state: {}
    },
    events: function () {
      if (eventType == 'click') {
        var _ref;

        return _ref = {}, _ref['click->' + navSelector] = 'clickHandler', _ref;
      }
      if (eventType == 'mouseover') {
        var _ref2;

        return _ref2 = {}, _ref2['mouseenter->' + navSelector] = 'enterHandler', _ref2['mouseleave->' + navSelector] = 'leaveHandler', _ref2;
      }
    }(),
    watch: {
      index: function index(result) {
        var old = result.old;
        var index = result.value;
        this.$$(navSelector).eq(old).removeClass(navCurrentClass);
        this.$$(containerSelector).eq(old).removeClass(containerCurrentClass);
        this.$$(navSelector).eq(index).addClass(navCurrentClass);
        this.$$(containerSelector).eq(index).addClass(containerCurrentClass);

        // 更新是否初始化的状态
        var state = this.get('state');
        if (state[index]) {
          return;
        }
        state = _extends({}, state);
        state[index] = true;
        this.set('state', state);
      }
    },
    methods: {
      clickHandler: function clickHandler(event) {
        event.preventDefault();
        var $this = $(event.currentTarget);
        this.set('index', $this.attr('data-index') || $this.index());
      },
      enterHandler: function enterHandler(event) {
        var _this = this;

        var $this = $(event.currentTarget);
        this.set('timeout', setTimeout(function () {
          _this.set('index', $this.attr('data-index') || $this.index());
        }, 200));
      },
      leaveHandler: function leaveHandler() {
        clearTimeout(this.get('timeout'));
      }
    }
  });
};

return index;

})));
//# sourceMappingURL=index.js.map
