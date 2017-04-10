(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hoisting = function () {
  function Hoisting() {
    _classCallCheck(this, Hoisting);

    this.a = 'a';
  }

  _createClass(Hoisting, [{
    key: 'logs',
    value: function logs() {
      console.log(typeof nonexisting === 'undefined' ? 'undefined' : _typeof(nonexisting)); // undefined
      // console.log(nonexisting); // referenceError not defined
    }
  }, {
    key: 'hoist',
    value: function hoist() {
      function scoped() {
        // a = 0;
        var b = 100;
      }

      scoped();
      // console.log(a); // refErr
      // console.log(b);
    }
  }, {
    key: 'esnext',
    value: function esnext() {
      var intouchable = 0;

      console.log(intouchable);
      // intouchable  = 1; // err
    }
  }, {
    key: 'run',
    value: function run() {
      this.logs();
      this.hoist();
      this.esnext();
    }
  }]);

  return Hoisting;
}();

exports.default = Hoisting;

},{}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hoisting = require('./hoisting.js');

var _hoisting2 = _interopRequireDefault(_hoisting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
  function Main() {
    _classCallCheck(this, Main);

    this.hoisting = new _hoisting2.default();
  }

  _createClass(Main, [{
    key: 'run',
    value: function run() {
      this.hoisting.run();
    }
  }]);

  return Main;
}();

var main = new Main();
main.run();

},{"./hoisting.js":1}]},{},[2])

//# sourceMappingURL=main.js.map
