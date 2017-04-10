import Hoisting from './hoisting.js';

class Main {
  constructor () {
    this.hoisting = new Hoisting();
  }

  run () {
    this.hoisting.run();
  }
}

var main = new Main();
main.run();
