import {LinkedList} from './linked-lists';

export default class Stacks {
    static run () {
        const stack = new Stack();

        stack.push(1);
        console.log(stack.toString());
        stack.push(3);
        console.log(stack.toString());
        stack.push(5);
        console.log(stack.toString());
        stack.pop();
        console.log('after pop', stack.toString());
        stack.push(100);
        console.log('after push', stack.toString());
        stack.pop();
        console.log('after pop', stack.toString());
    }
}

class Stack {
    constructor() {
        this.linkedList = new LinkedList();
    }

    isEmpty () {
        return !this.linkedList.tail;
    }

    peek () {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.linkedList.tail.value;
        }
    }

    push (value) {
        this.linkedList.append(value);
    }

    pop () {
        const removedTail = this.linkedList.deleteTail();

        return removedTail ? removedTail.value : null;
    }

    toString(callback) {
        return this.linkedList.toString(callback);
    }
}
