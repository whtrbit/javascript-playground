import Hoisting from './hoisting.js';
import Promises from './promises.js';
import Generators from './generators.js';

class Main {
  constructor () {
    this.hoisting = new Hoisting();
    this.promises = new Promises();
    this.generators = new Generators();
  }

  run () {
    // this.hoisting.run();
    // this.promises.run();
    this.generators.run();
  }
}

var main = new Main();
main.run();
