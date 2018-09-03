import Comparator from "./utils/comparator";

export default class Heaps {
    static run () {
        const heapMin = new HeapMin();
              heapMin.add(9);
              heapMin.add(1);
              heapMin.add(0);
              heapMin.add(100);
              heapMin.remove(0);
              heapMin.add(27);

        const heapMax = new HeapMax();
              heapMax.add(9);
              heapMax.add(0);
              heapMax.add(27);
              heapMax.add(25);
              heapMax.remove(27);

        console.log('heapMin\n', heapMin, '\n\n');
        console.log('heapMax\n', heapMax, '\n\n');
    }
}

class Heap {
    constructor (comparatorFunction) {
        this.compare = new Comparator(comparatorFunction);

        this.heapContainer = [];
    }

    add (item) {
        this.heapContainer.push(item);
        this.heapifyUp();

        return this.heapContainer;
    }

    remove (item, comparator = this.compare) {
        const numberOfItemsToRemove = this.find(item, comparator).length;

        for (let iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {
            const indexToRemove = this.find(item, comparator).pop();

            if (indexToRemove === (this.heapContainer.length - 1)) {
                this.heapContainer.pop();
            } else {
                this.heapContainer[indexToRemove] = this.heapContainer.pop();

                const parentItem = this.getParent(indexToRemove);

                if (
                    this.hasLeftChild(indexToRemove) &&
                    (!parentItem || this.pairIsInCorrectOrder(parentItem, this.heapContainer[indexToRemove]))
                ) {
                    this.heapifyDown(indexToRemove);
                } else {
                    this.heapifyUp(indexToRemove);
                }
            }
        }

        return this.heapContainer;
    }

    find (item, comparator = this.compare) {
        const foundItemIndices = [];

        for (let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex += 1) {
            if (comparator.equal(item, this.heapContainer[itemIndex])) {
                foundItemIndices.push(itemIndex);
            }
        }

        return foundItemIndices;
    }

    heapifyUp (customStartIndex) {
        let currentIndex = customStartIndex || this.heapContainer.length - 1;

        console.log(this.getParent(currentIndex), this.heapContainer[currentIndex], this.pairIsInCorrectOrder(this.getParent(currentIndex), this.heapContainer[currentIndex]));

        while (
            this.hasParent(currentIndex) &&
            !this.pairIsInCorrectOrder(this.getParent(currentIndex), this.heapContainer[currentIndex])
        ) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    heapifyDown (customStartIndex = 0) {
        let currentIndex = customStartIndex;
        let nextIndex = null;

        while (this.hasLeftChild(currentIndex)) {
            if (
                this.hasRightChild(currentIndex) &&
                this.pairIsInCorrectOrder(this.getRightChild(currentIndex), this.getLeftChild(currentIndex))
            ) {
                nextIndex = this.getRightChildIndex(currentIndex);
            } else {
                nextIndex = this.getLeftChildIndex(currentIndex);
            }

            if (this.pairIsInCorrectOrder(this.heapContainer[currentIndex], this.heapContainer[nextIndex])) {
                break;
            }

            this.swap(currentIndex, nextIndex);
            currentIndex = nextIndex;
        }
    }

    swap (indexOne, indexTwo) {
        const tmpSecond = this.heapContainer[indexTwo];

        this.heapContainer[indexTwo] = this.heapContainer[indexOne];
        this.heapContainer[indexOne] = tmpSecond;
    }

    hasParent (childIndex) {
        return this.getParentIndex(childIndex) >= 0;
    }

    hasLeftChild (parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
    }

    hasRightChild (parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
    }

    getParentIndex (childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    getLeftChildIndex (parentIndex) {
        return (2 * parentIndex) + 1;
    }

    getRightChildIndex (parentIndex) {
        return (2 * parentIndex) + 2;
    }

    getParent (childIndex) {
        return this.heapContainer[this.getParentIndex(childIndex)];
    }

    getLeftChild (parentIndex) {
        return this.heapContainer[this.getLeftChildIndex(parentIndex)];
    }

    getRightChild (parentIndex) {
        return this.heapContainer[this.getRightChildIndex(parentIndex)];
    }

    pairIsInCorrectOrder (firstItem, secondItem) {
        throw new Error('Implement comparison method in HeapMax/HeapMin classes.')
    }
}

export class HeapMin extends Heap {
    constructor () {
        super();
    }

    pairIsInCorrectOrder (firstItem, secondItem) {
        return this.compare.lessThanOrEqual(firstItem, secondItem);
    }
}

export class HeapMax extends Heap {
    constructor () {
        super();
    }

    pairIsInCorrectOrder (firstItem, secondItem) {
        return this.compare.greaterThanOrEqual(firstItem, secondItem);
    }
}