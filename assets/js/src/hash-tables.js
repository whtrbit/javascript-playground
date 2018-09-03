import {LinkedList} from './linked-lists';

export default class HashTables {
    static run () {
        const hashTable = new HashTable();

        hashTable.set('Johnny Five', {
            iq: 220
        });
        hashTable.set('Dr Brown', {
            iq: 221
        });

        for (let i = 0; i <= 36; i++) {
            hashTable.set('Index' + i, {
                id: i * i
            });
        }

        console.log(hashTable);
        console.log(hashTable.get('Index5'));
        console.log(hashTable.remove('Index5'));
        console.log(hashTable.get('Index5'));
        console.log(hashTable.keys);
    }
}

class HashTable {
    constructor () {
        this.buckets = {};

        this.keys = {};
    }

    convertToHash (key) {
        var hash = 5381;
        var i = key.length;

        while (i) {
            hash = (hash * 33) ^ key.charCodeAt(--i);
        }

        return hash >>> 0;
    }

    set (key, value) {
        const hashKey = this.convertToHash(key);
        this.keys[key] = hashKey;

        if (!this.buckets[hashKey]) {
            this.buckets[hashKey] = new LinkedList();
            this.buckets[hashKey].append({key, value});
        } else {
            this.buckets[hashKey] = new LinkedList();
            this.buckets[hashKey].value.value = value;
        }
    }

    get (key) {
        const bucketLinkedList = this.buckets[this.convertToHash(key)];
        const node = bucketLinkedList ? bucketLinkedList.find(null, (nodeValue) => nodeValue.key === key) : null;

        return node ? node.value.value : undefined;
    }

    remove (key) {
        const hashKey = this.convertToHash(key);
        delete this.keys[key];

        const bucketLinkedList = this.buckets[hashKey];
        const node = bucketLinkedList.find(null, (nodeValue) => nodeValue.key === key);

        if (node) {
            return bucketLinkedList.remove(node.value);
        }

        return null;
    }

    has (key) {
        return Object.hasOwnProperty.call(this.keys, key);
    }
}
