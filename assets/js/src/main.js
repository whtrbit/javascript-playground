import Hoisting from './hoisting.js';
import Promises from './promises.js';

class Main {
  constructor () {
    this.hoisting = new Hoisting();
    this.promises = new Promises();
  }

  run () {
    // this.hoisting.run();
    this.promises.run();
  }
}

var main = new Main();
main.run();
