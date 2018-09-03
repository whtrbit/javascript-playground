import {HeapMin} from './heaps';
import Comparator from "./utils/comparator";

export default class PriorityQueues {
    static run () {
        const priorityQueue = new PriorityQueue();
              priorityQueue.add(100, 0);
              priorityQueue.add(11, 2);
              priorityQueue.add(500, 3);
              priorityQueue.add(501, 4);
              priorityQueue.add(101, 1);

        console.log(priorityQueue);
    }
}

class PriorityQueue extends HeapMin {
    constructor () {
        super();

        this.priorities = {};

        this.compare = new Comparator(this.comparePriority.bind(this));
    }

    add (item, priority = 0) {
        this.priorities[item] = priority;

        super.add(item);

        return this.priorities;
    }

    remove (item, customFindingComparator) {
        super.remove(item, customFindingComparator);

        delete this.priorities[item];

        return this.priorities;
    }

    changePriority (item, priority) {
        this.remove(item, new Comparator(this.compareValue));
        this.add(item, priority);

        return this.priorities;
    }

    findByValue (item) {
        return this.find(item, new Comparator(this.compareValue));
    }

    hasValue (item) {
        return this.findByValue(item).length > 0;
    }

    compareValue (a, b) {
        if (a === b) {
            return 0;
        }

        return a < b ? -1 : 1;
    }

    comparePriority (a, b) {
        if (this.priorities[a] === this.priorities[b]) {
            return 0;
        }

        return this.priorities[a] < this.priorities[b] ? -1 : 1;
    }
}
