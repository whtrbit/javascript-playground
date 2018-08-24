(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var einie = {
  e: 'E',
  m: 'm',
  c: 'c',
  getMassEquation: function getMassEquation() {
    return this.m + '=' + this.e + '/' + this.c + '*' + this.c;
  }
};

var FunctionInvocations = function () {
  function FunctionInvocations() {
    _classCallCheck(this, FunctionInvocations);
  }

  _createClass(FunctionInvocations, [{
    key: 'simpleBindFunc',
    value: function simpleBindFunc() {
      var massEquation = function () {
        console.log(this.getMassEquation());

        console.log(this.m);
        console.log(this.e);
        console.log(this.c);
      }.bind(einie)();
    }
  }, {
    key: 'simpleCallApplyFunc',
    value: function simpleCallApplyFunc() {
      var createRealEnergyEquation = function createRealEnergyEquation(momentum) {
        console.log(this.e + ' = ' + this.m + '(' + this.c + '*' + this.c + ') + (' + momentum + this.c + ')' + '(' + momentum + this.c + ')');
      };
      createRealEnergyEquation.call(einie, 'p');
      createRealEnergyEquation.apply(einie, ['p']);
    }
  }, {
    key: 'currying',
    value: function currying() {
      var meetInspirationalPerson = function meetInspirationalPerson(birthDate, profession) {
        var hello = birthDate < 1000 ? 'Hi oldie! ' : 'Hi there! ';

        switch (profession) {
          case 'phisicist':
            return hello + 'Did you know that E = mc2 is not the full equation?';

          case 'engineer':
            return hello + 'Did you know that Nikola Tesla tricked Morgan to build his tower to make his electromagnetical experiments?';

          default:
            return hello + 'Did you know that Leonardo da Vinci had no formal education?';
        }
      };

      var greetOldEngineer = meetInspirationalPerson.bind(null, 600);
      console.log(greetOldEngineer());
      console.log(greetOldEngineer('engineer'));
    }
  }, {
    key: 'curryingEinie',
    value: function curryingEinie() {
      var meetEinie = function meetEinie(birthDate) {
        var hello = birthDate < 1000 ? 'Hi oldie! ' : 'Hi body! ';

        return hello + 'Did you know that ' + this.getMassEquation() + ' is not actually full equation?';
      };

      var greetEinie = meetEinie.bind(einie);
      console.log(greetEinie(1992) === meetEinie.call(einie, 1992));
      console.log(meetEinie.apply(einie, [1992]));
    }
  }, {
    key: 'arrayLikeObjects',
    value: function arrayLikeObjects() {
      var energyTypes = {
        0: 'Potential',
        1: 'Kinetic',
        2: 'Gravitional',
        3: 'Chemical',
        4: 'Nuclear',
        5: 'Elastic',
        6: 'Motion',
        7: 'Thermal',
        length: 8
      };

      console.log(Array.prototype.slice.call(energyTypes, 0));
      console.log(Array.prototype.reverse.call(energyTypes, 0));

      // using argumets
      var listMeWithCommas = function listMeWithCommas() {
        var args = Array.prototype.slice.call(arguments);

        var filtered = args.filter(function (a) {
          var joined = a.join(', ');

          console.log(joined);
        });
      };
      listMeWithCommas(Array.prototype.slice.call(energyTypes, 0));
    }
  }, {
    key: 'variadicFuncs',
    value: function variadicFuncs() {
      var pi = [3, 1, 4, 1, 5, 9];
      var people = ['Albert Einstein', 'Nikola Tesla', 'Leonadro da Vinci'];
      var meetThemAll = function meetThemAll() {
        var args = Array.prototype.slice.call(arguments);
        var last = args.pop();

        return 'Meet ' + args.join(', ') + ', and ' + last + '.';
      };

      console.log(Math.max.apply(null, pi));
      console.log(meetThemAll.apply(null, people));
    }
  }, {
    key: 'run',
    value: function run() {
      this.simpleBindFunc();
      this.simpleCallApplyFunc();
      this.currying();
      this.curryingEinie();
      this.arrayLikeObjects();
      this.variadicFuncs();
    }
  }]);

  return FunctionInvocations;
}();

exports.default = FunctionInvocations;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Generators = function () {
  function Generators() {
    _classCallCheck(this, Generators);
  }

  _createClass(Generators, [{
    key: 'simpleGenerator',
    value: function simpleGenerator() {
      var _marked = /*#__PURE__*/regeneratorRuntime.mark(gen);

      function gen() {
        return regeneratorRuntime.wrap(function gen$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return 1;

              case 2:
                _context.next = 4;
                return 2;

              case 4:
                return _context.abrupt('return', 3);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _marked, this);
      }
      var it = gen();
      console.log('simpleGenerator', it.next());
      console.log('simpleGenerator', it.next());
      console.log('simpleGenerator', it.next()); // done: true with no value
    }
  }, {
    key: 'playingWithGenerator',
    value: function playingWithGenerator() {
      var _marked2 = /*#__PURE__*/regeneratorRuntime.mark(gen);

      function gen(x) {
        var y, z;
        return regeneratorRuntime.wrap(function gen$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                console.log('x', x); // => 5 in 1st iteration
                _context2.next = 3;
                return x + 1;

              case 3:
                _context2.t0 = _context2.sent;
                y = 2 * _context2.t0;

                console.log('y', y);
                _context2.next = 8;
                return y / 3;

              case 8:
                z = _context2.sent;
                // => 12 in 2nd iteration
                console.log(z);
                return _context2.abrupt('return', x + y + z);

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _marked2, this);
      }

      var it = gen(4);
      console.log('playingWithGenerator', it.next().value);
      console.log('playingWithGenerator', it.next(6).value);
      console.log('playingWithGenerator', it.next(2).value);
    }
  }, {
    key: 'async',
    value: function async() {
      var fetch = function fetch() {
        return new Promise(function (resolve) {
          setTimeout(function () {
            return resolve(100);
          }, 2000);
        });
      };

      var promiseFunc = function promiseFunc() {
        return new Promise(function (resolve) {
          fetch().then(function (res) {
            resolve(res + 1);
          });
        });
      };

      promiseFunc().then(function (res) {
        return console.log(res);
      });
    }
  }, {
    key: 'asyncAwait',
    value: function asyncAwait() {
      var asyncFunc = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var result;
          return regeneratorRuntime.wrap(function _callee$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return fetch();

                case 2:
                  result = _context3.sent;
                  return _context3.abrupt('return', result + 'to keep learning.');

                case 4:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee, this);
        }));

        return function asyncFunc() {
          return _ref.apply(this, arguments);
        };
      }();

      var fetch = function fetch() {
        return new Promise(function (resolve) {
          setTimeout(function () {
            return resolve('The reason I do it is ');
          }, 1000);
        });
      };

      asyncFunc().then(function (result) {
        return console.log(result);
      });
    }
  }, {
    key: 'bridgeOfDeath',
    value: function bridgeOfDeath() {
      var _marked3 = /*#__PURE__*/regeneratorRuntime.mark(bridgeRiddle);

      function bridgeRiddle() {
        var riddle;
        return regeneratorRuntime.wrap(function bridgeRiddle$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return 'What is it that belongs to you but others use it more than you?';

              case 2:
                riddle = _context4.sent;

                console.log(riddle);

                if (!(riddle !== 'My name')) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt('return', 'You shall not pass!');

              case 6:
                return _context4.abrupt('return', 'You shall pass.');

              case 7:
              case 'end':
                return _context4.stop();
            }
          }
        }, _marked3, this);
      }

      var bridge = bridgeRiddle();
      var q = bridge.next().value;
      console.log(q);
      var a = bridge.next(prompt()).value;
      console.log(a);
    }
  }, {
    key: 'run',
    value: function run() {
      // this.simpleGenerator();
      // this.playingWithGenerator();
      // this.async();
      this.asyncAwait();
      this.bridgeOfDeath();
    }
  }]);

  return Generators;
}();

exports.default = Generators;

},{}],3:[function(require,module,exports){
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
        console.log('Some code...');

        // It converts into
        // var b;
        // console.log('Some code...');
        // b = 100;
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

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _comparator = require("./utils/comparator");

var _comparator2 = _interopRequireDefault(_comparator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinkedLists = function () {
    function LinkedLists() {
        _classCallCheck(this, LinkedLists);
    }

    _createClass(LinkedLists, [{
        key: "run",
        value: function run() {
            var linkedList = new LinkedList();

            linkedList.append(100);
            console.log(linkedList.toString());
            linkedList.prepend(0.5);
            console.log(linkedList.toString());
            linkedList.append(5);
            console.log(linkedList.toString());
            linkedList.prepend(0.1);
            console.log(linkedList.toString());
            linkedList.remove(5);
            console.log(linkedList.toString());

            console.log(linkedList);
            console.log(linkedList.find(0.5));
        }
    }]);

    return LinkedLists;
}();

exports.default = LinkedLists;

var LinkedList = function () {
    function LinkedList() {
        _classCallCheck(this, LinkedList);

        this.head = null;
        this.tail = null;

        this.length = 0;

        this.compare = new _comparator2.default();
    }

    _createClass(LinkedList, [{
        key: "prepend",
        value: function prepend(val) {
            var newNode = new LinkedListNode(val, this.head);

            this.head = newNode;

            if (!this.tail) {
                this.tail = newNode;
            }

            this.length++;

            return this;
        }
    }, {
        key: "append",
        value: function append(val) {
            var newNode = new LinkedListNode(val);

            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.tail.next = newNode;
                this.tail = newNode;
            }

            this.length++;

            return this;
        }
    }, {
        key: "remove",
        value: function remove(val) {
            if (!this.head) {
                return null;
            }

            var deletedNode = null;

            while (this.head && this.compare.equal(this.head.value, val)) {
                deletedNode = this.head;
                this.head = this.head.next;
            }

            var currentNode = this.head;

            if (currentNode !== null) {
                while (currentNode.next) {
                    if (this.compare.equal(currentNode.next.value, val)) {
                        deletedNode = currentNode.next;
                        currentNode.next = currentNode.next.next;
                    } else {
                        currentNode = currentNode.next;
                    }
                }
            }

            if (this.compare.equal(this.tail.value, val)) {
                this.tail = currentNode;
            }

            return deletedNode;
        }
    }, {
        key: "find",
        value: function find() {
            var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            if (!this.head) {
                return null;
            }

            var currentNode = this.head;

            while (currentNode) {
                if (val !== null && this.compare.equal(currentNode.value, val)) {
                    return currentNode;
                }

                currentNode = currentNode.next;
            }

            return null;
        }
    }, {
        key: "toArray",
        value: function toArray() {
            var nodes = [];

            var currentNode = this.head;

            while (currentNode) {
                nodes.push(currentNode);
                currentNode = currentNode.next;
            }

            return nodes;
        }
    }, {
        key: "toString",
        value: function toString(callback) {
            return this.toArray().map(function (node) {
                return node.toString(callback);
            }).toString();
        }
    }]);

    return LinkedList;
}();

var LinkedListNode = function () {
    function LinkedListNode(value) {
        var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, LinkedListNode);

        this.value = value;
        this.next = next;
    }

    _createClass(LinkedListNode, [{
        key: "toString",
        value: function toString(callback) {
            return callback ? callback(this.value) : "" + this.value;
        }
    }]);

    return LinkedListNode;
}();

},{"./utils/comparator":8}],5:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hoisting = require('./hoisting.js');

var _hoisting2 = _interopRequireDefault(_hoisting);

var _promises = require('./promises.js');

var _promises2 = _interopRequireDefault(_promises);

var _generators = require('./generators.js');

var _generators2 = _interopRequireDefault(_generators);

var _functionInvocations = require('./function-invocations.js');

var _functionInvocations2 = _interopRequireDefault(_functionInvocations);

var _recursions = require('./recursions.js');

var _recursions2 = _interopRequireDefault(_recursions);

var _linkedLists = require('./linked-lists.js');

var _linkedLists2 = _interopRequireDefault(_linkedLists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Main = function () {
  function Main() {
    _classCallCheck(this, Main);

    this.hoisting = new _hoisting2.default();
    this.promises = new _promises2.default();
    this.generators = new _generators2.default();
    this.functionInvocations = new _functionInvocations2.default();
    this.recursions = new _recursions2.default();
    this.linkedLists = new _linkedLists2.default();
  }

  _createClass(Main, [{
    key: 'run',
    value: function run() {
      // this.hoisting.run();
      // this.promises.run();
      // this.generators.run();
      // this.functionInvocations.run();
      // this.recursions.run();
      this.linkedLists.run();
    }
  }]);

  return Main;
}();

var main = new Main();
main.run();

},{"./function-invocations.js":1,"./generators.js":2,"./hoisting.js":3,"./linked-lists.js":4,"./promises.js":6,"./recursions.js":7}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Promises = function () {
  function Promises() {
    _classCallCheck(this, Promises);
  }

  _createClass(Promises, [{
    key: 'getWorkDone',
    value: function getWorkDone() {
      return new Promise(function (resolve, reject) {
        resolve('Well done.');
        reject('Not this time.');
      });
    }
  }, {
    key: 'read',
    value: function read() {
      return Promise(function (resolve, reject) {
        resolve('Cause is resolving this in the "Neauromancer".');
        reject('Oww, I don\'t even remember what\'s what.');
      });
    }
  }, {
    key: 'goSleep',
    value: function goSleep() {
      return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', 'http://google.pl');

        resolve(req);
        reject('Offline.');
      });
    }
  }, {
    key: 'chaining',
    value: function chaining() {
      var fakeXhr = function fakeXhr() {
        return new Promise(function (resolve, reject) {
          var incoming = setTimeout(function () {
            resolve('Done.');
          }, 1000);

          return incoming;
        });
      };
      var transformRes = function transformRes(res) {
        return String(res).toUpperCase();
      };

      fakeXhr().then(function (res) {
        return transformRes(res);
      }).then(function (res) {
        console.log(res);
      }, function (err) {
        console.error(err);
      });

      var gotIt = function gotIt(res) {
        return transformRes(res);
      };

      fakeXhr() // so beutiful :D
      .then(gotIt).then(function (gotIt) {
        console.log(gotIt);
      });
    }
  }, {
    key: 'chaining2',
    value: function chaining2() {
      var time = function time() {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            var msg = 'Another promise.';
            console.log(msg);
            resolve(msg);
          }, 2000);
        });
      };
      var moreTime = function moreTime() {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            var msg = 'And another one...';
            console.log(msg);
            resolve(msg);
          }, 2000);
        });
      };
      time().then(moreTime);
    }
  }, {
    key: 'transformRes',
    value: function transformRes(res) {
      return String(res).toUpperCase();
    }
  }, {
    key: 'req',
    value: function req(done) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', '/');
      xhr.onload = function () {
        done(null, xhr.response);
      };
      xhr.onerror = function () {
        done(xhr.response);
      };
      xhr.send();

      return xhr;
    }
  }, {
    key: 'race',
    value: function race() {
      Promise.race([new Promise(function (resolve, reject) {
        setTimeout(function () {
          return reject(new Error('Some possible timeout err.'));
        }, 1);
      }), fetch('/')]).then(function (response) {
        return console.log(response);
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: 'run',
    value: function run() {
      this.chaining();
      this.chaining2();
      this.req(function (err, data) {
        if (err) {
          throw err;
          return;
        }
        console.log(data.length);
      });
      this.race();
    }
  }]);

  return Promises;
}();

exports.default = Promises;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Recursions = function () {
  function Recursions() {
    _classCallCheck(this, Recursions);
  }

  _createClass(Recursions, [{
    key: 'fractorial',
    value: function fractorial() {
      var fractorial = function fractorial(n) {
        if (n < 0) throw Error('It\'s fractorial man...');
        if (n === 0) return 1;

        var result = n * fractorial(n - 1);

        return result;
      };
      console.log(fractorial(170)); // max
    }
  }, {
    key: 'getMax',
    value: function getMax() {
      var sampleArr = [0, 1, 2, 3, 4, 5, 10, 6, 7, 8, 9];
      var getMax = function getMax(arr) {
        var nums = arr.slice();

        if (nums.length === 1) return nums[0];
        if (nums[0] < nums[1]) {
          nums.splice(0, 1);
        } else {
          nums.splice(1, 1);
        }

        return getMax(nums);
      };
      console.log(getMax(sampleArr));
    }
  }, {
    key: 'swimmingCounting',
    value: function swimmingCounting() {
      var iterate = function iterate(n) {
        console.time('iterate');
        for (var i = 1; i <= n; i++) {
          if (i === n) {
            console.timeEnd('iterate');
            console.log('Break.');
          }
        }
      };
      var recurse = function recurse(n) {
        console.time('recurse');
        if (n === 0) {
          console.timeEnd('recurse');
          console.log('Break.');
        } else {
          var nn = n - 1;
          recurse(nn);
        }
        // console.log(n); // for loop :D
      };
      iterate(8001);
      recurse(7379); // call stack size -(+degree)
    }
  }, {
    key: 'grow',
    value: function grow() {
      var grow = function grow(n) {
        if (n <= 0) {
          return 0;
        } else if (n <= 2) {
          return 1;
        } else {
          return grow(n - 1) + grow(n - 2);
        }
      };
      console.log(grow(8));
    }
  }, {
    key: 'reverseString',
    value: function reverseString() {
      var reverseString = function reverseString(string) {
        if (string === "") {
          return "";
        } else {
          return reverseString(string.substring(1)) + string.charAt(0);
        }
      };
      console.log(reverseString('live ,evil'));
    }
  }, {
    key: 'run',
    value: function run() {
      this.fractorial();
      this.getMax();
      this.swimmingCounting();
      this.grow();
      this.reverseString();
    }
  }]);

  return Recursions;
}();

exports.default = Recursions;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Comparator = function () {
    function Comparator() {
        _classCallCheck(this, Comparator);

        this.compare = Comparator.defaultCompareFunction;
    }

    /**
     * @param {(string|number)} a
     * @param {(string|number)} b
     * @returns {number}
     */


    _createClass(Comparator, [{
        key: "equal",
        value: function equal(a, b) {
            return this.compare(a, b) === 0;
        }
    }, {
        key: "lessThan",
        value: function lessThan(a, b) {
            return this.compare(a, b) < 0;
        }
    }, {
        key: "greaterThan",
        value: function greaterThan(a, b) {
            return this.compare(a, b) > 0;
        }
    }, {
        key: "lessThanOrEqual",
        value: function lessThanOrEqual(a, b) {
            return this.lessThan(a, b) || this.equal(a, b);
        }
    }, {
        key: "greaterThanOrEqual",
        value: function greaterThanOrEqual(a, b) {
            return this.greaterThan(a, b) || this.equal(a, b);
        }
    }, {
        key: "reverse",
        value: function reverse() {
            var compareOriginal = this.compare;
            this.compare = function (a, b) {
                return compareOriginal(b, a);
            };
        }
    }], [{
        key: "defaultCompareFunction",
        value: function defaultCompareFunction(a, b) {
            if (a === b) {
                return 0;
            }

            return a < b ? -1 : 1;
        }
    }]);

    return Comparator;
}();

exports.default = Comparator;

},{}]},{},[5])

//# sourceMappingURL=main.js.map
