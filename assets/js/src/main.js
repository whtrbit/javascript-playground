import Hoisting from './hoisting.js';
import Promises from './promises.js';
import Generators from './generators.js';
import FunctionInvocations from './function-invocations.js';
import Recursions from './recursions.js';
import LinkedLists from './linked-lists.js';
import Queues from "./queues";
import Stacks from "./stacks";
import HashTables from "./hash-tables";
import Heaps from "./heaps";

class Main {
  constructor () {
    this.hoisting = new Hoisting();
    this.promises = new Promises();
    this.generators = new Generators();
    this.functionInvocations = new FunctionInvocations();
    this.recursions = new Recursions();
  }

  static run () {
    // this.hoisting.run();
    // this.promises.run();
    // this.generators.run();
    // this.functionInvocations.run();
    // this.recursions.run();

    // LinkedLists.run();
    // Queues.run();
    // Stacks.run();
    // HashTables.run();

    Heaps.run();
  }
}

Main.run();
