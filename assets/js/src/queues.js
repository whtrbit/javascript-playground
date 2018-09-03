import {LinkedList} from './linked-lists';

export default class Queues {
    static run () {
        const queue = new Queue();

        queue.enqueue(1);
        console.log(queue.toString());
        queue.enqueue(3);
        console.log(queue.toString());
        queue.enqueue(5);
        console.log(queue.toString());
        queue.dequeue();
        console.log('after dequeue', queue.toString());
        queue.enqueue(1);
        console.log('after enqueue', queue.toString());
    }
}

class Queue {
    constructor() {
        this.linkedList = new LinkedList();
    }

    isEmpty () {
        return !this.linkedList.tail;
    }

    peek () {
        if (!this.linkedList.head) {
            return null;
        } else {
            return this.linkedList.head.value;
        }
    }

    enqueue (value) {
        this.linkedList.append(value);
    }

    dequeue () {
        const removedHead = this.linkedList.deleteHead();

        return removedHead ? removedHead.value : null;
    }

    toString(callback) {
        return this.linkedList.toString(callback);
    }
}
