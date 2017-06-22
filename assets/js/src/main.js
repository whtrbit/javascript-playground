import Hoisting from './hoisting.js';
import Promises from './promises.js';
import Generators from './generators.js';
import FunctionInvocations from './function-invocations.js';

class Main {
  constructor () {
    this.hoisting = new Hoisting();
    this.promises = new Promises();
    this.generators = new Generators();
    this.functionInvocations = new FunctionInvocations();
  }

  run () {
    // this.hoisting.run();
    // this.promises.run();
    // this.generators.run();
    this.functionInvocations.run();
  }
}

var main = new Main();
main.run();
