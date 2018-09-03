import {HashTable} from "./hash-tables";

export default class Tries {
    static run () {
        const trie = new Trie();

        trie.addWord('exhaustive affirmation');
        trie.addWord('redhot');
        trie.addWord('redbone');

        console.log(trie);
        console.log(trie.suggestNextCharacters('ex'));
        console.log(trie.suggestNextCharacters('red'));
    }
}

class Trie {
    constructor() {
        this.head = new TrieNode('*');
    }

    /**
     * @param {string} word
     */
    addWord (word) {
        const chars = Array.from(word);

        let currentNode = this.head;

        for (let charIdx = 0; charIdx < chars.length; charIdx++) {
            const isComplete = charIdx === chars.length - 1;

            currentNode = currentNode.addChild(chars[charIdx], isComplete);
        }

        return this;
    }

    /**
     * @param {string} word
     */
    suggestNextCharacters (word) {
        const lastChar = this.getLastCharacterNode(word);

        if (!lastChar) {
            return null;
        }

        return lastChar.suggestChildren();
    }

    /**
     * @param {string} word
     */
    getLastCharacterNode (word) {
        const chars = Array.from(word);

        let currentNode = this.head;

        for (let charIdx = 0; charIdx < chars.length; charIdx += 1) {
            if (!currentNode.hasChild(chars[charIdx])) {
                return null;
            }

            currentNode = currentNode.getChild(chars[charIdx]);
        }

        return currentNode;
    }

}

class TrieNode {
    /**
     * @param {string} character
     * @param {boolean} isComplete
     */
    constructor(character, isComplete = false) {
        this.character = character;
        this.isComplete = isComplete;
        this.children = new HashTable();
    }

    addChild (char, isComplete = false) {
        if (!this.children.has(char)) {
            this.children.set(char, new TrieNode(char, isComplete));
        }

        const childNode = this.children.get(char);

        childNode.isComplete = childNode.isComplete || isComplete;

        return childNode;
    }

    suggestChildren () {
        return [...this.children.getKeys()];
    }

    /**
     * @param {string} char
     *
     * @return {boolean}
     */
    hasChild (char) {
        return this.children.has(char);
    }

    /**
     * @param {string} char
     * @return {TrieNode}
     */
    getChild (char) {
        return this.children.get(char);
    }

    toString() {
        let childrenAsString = this.suggestChildren().toString();
        childrenAsString = childrenAsString ? `:${childrenAsString}` : '';
        const isCompleteString = this.isComplete ? '*' : '';

        return `${this.character}${isCompleteString}${childrenAsString}`;
    }
}
