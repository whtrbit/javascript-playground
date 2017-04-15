import Hoisting from './hoisting.js';
import Generators from './generators.js';

class Main {
  constructor () {
    this.hoisting = new Hoisting();
    this.generators = new Generators();
  }

  run () {
    // this.hoisting.run();
    this.generators.run();
  }
}

var main = new Main();
main.run();
