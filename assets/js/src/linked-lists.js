import Comparator from "./utils/comparator";

export default class LinkedLists {
    static run () {
        const linkedList = new LinkedList();

        linkedList.append(100);
        console.log(linkedList.toString());
        linkedList.prepend(0.5);
        console.log(linkedList.toString());
        linkedList.append(5);
        console.log(linkedList.toString());
        linkedList.prepend(0.1);
        console.log(linkedList.toString());
        linkedList.remove(5);
        console.log(linkedList.toString());

        console.log(linkedList);
        console.log(linkedList.find(0.5));

    }
}

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;

        this.length = 0;

        this.compare = new Comparator();
    }

    prepend (val) {
        const newNode = new LinkedListNode(val, this.head);

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    append (val) {
        const newNode = new LinkedListNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    remove (val) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;

        while (this.head && this.compare.equal(this.head.value, val)) {
            deletedNode = this.head;
            this.head = this.head.next;
        }

        let currentNode = this.head;

        if (currentNode !== null) {
            while (currentNode.next) {
                if (this.compare.equal(currentNode.next.value, val)) {
                    deletedNode = currentNode.next;
                    currentNode.next = currentNode.next.next;
                } else {
                    currentNode = currentNode.next;
                }
            }
        }

        if (this.compare.equal(this.tail.value, val)) {
            this.tail = currentNode;
        }

        return deletedNode;
    }

    find (val = null) {
        if (!this.head) {
            return null;
        }

        let currentNode = this.head;

        while (currentNode) {
            if (val !== null && this.compare.equal(currentNode.value, val)) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }

    deleteHead () {
        if (!this.head) {
            return null;
        }

        const deletedHead = this.head;

        if (this.head.next) {
            this.head = this.head.next;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedHead;
    }

    deleteTail () {
        const deletedTail = this.tail;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;

            return deletedTail;
        }

        let currentNode = this.head;

        while (currentNode.next) {
            if (!currentNode.next.next) {
                currentNode.next = null;
            } else {
                currentNode = currentNode.next;
            }
        }

        this.tail = currentNode;

        return deletedTail;
    }

    toArray() {
        const nodes = [];

        let currentNode = this.head;

        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }

    toString(callback) {
        return this.toArray().map((node) => node.toString(callback)).toString();
    }
}

class LinkedListNode {
    constructor (value, next = null) {
        this.value = value;
        this.next = next;
    }

    toString(callback) {
        return callback ? callback(this.value) : `${this.value}`;
    }
}
