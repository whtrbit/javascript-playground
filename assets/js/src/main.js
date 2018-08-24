import Hoisting from './hoisting.js';
import Promises from './promises.js';
import Generators from './generators.js';
import FunctionInvocations from './function-invocations.js';
import Recursions from './recursions.js';
import LinkedLists from './linked-lists.js';

class Main {
  constructor () {
    this.hoisting = new Hoisting();
    this.promises = new Promises();
    this.generators = new Generators();
    this.functionInvocations = new FunctionInvocations();
    this.recursions = new Recursions();
    this.linkedLists = new LinkedLists();
  }

  run () {
    // this.hoisting.run();
    // this.promises.run();
    // this.generators.run();
    // this.functionInvocations.run();
    // this.recursions.run();
      this.linkedLists.run();
  }
}

const main = new Main();
      main.run();
