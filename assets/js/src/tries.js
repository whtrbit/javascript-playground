import {HashTable} from "./hash-tables";

export default class Tries {
    static run () {
        const trie = new Trie();

        trie.addWord('exhaustive affirmation');

        trie.addWord('redhot');
        trie.addWord('redbone');
        trie.addWord('redstone');

        trie.removeWord('redhot');

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
            const isEndOfWord = charIdx === chars.length - 1;

            currentNode = currentNode.addChild(chars[charIdx], isEndOfWord);
        }

        return this;
    }

    /**
     * @param {string} word
     */
    removeWord (word) {
        const firstDepthDeletion = (currentNode, charIdx = 0) => {
            if (charIdx >= word.length) {
                return;
            }

            const char = word[charIdx];
            const nextNode = currentNode.getChild(char);

            if (nextNode === null) {
                return;
            }

            firstDepthDeletion(nextNode, charIdx + 1);

            if (charIdx === (word.length - 1)) {
                nextNode.isEndOfWord = false;
            }

            currentNode.removeChild(char);
        };

        firstDepthDeletion(this.head);

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
     * @param {boolean} isEndOfWord
     */
    constructor(character, isEndOfWord = false) {
        this.character = character;
        this.isEndOfWord = isEndOfWord;
        this.children = new HashTable();
    }

    /**
     * @param {string} char
     * @param {boolean} isEndOfWord
     *
     * @return {TrieNode}
     */
    addChild (char, isEndOfWord = false) {
        if (!this.children.has(char)) {
            this.children.set(char, new TrieNode(char, isEndOfWord));
        }

        const childNode = this.children.get(char);

        childNode.isEndOfWord = childNode.isEndOfWord || isEndOfWord;

        return childNode;
    }

    /**
     * @param {string} char
     */
    removeChild (char) {
        const childNode = this.getChild(char);

        if (childNode && !childNode.isEndOfWord && !childNode.hasChildren()) {
            this.children.remove(char);
        }

        return this;
    }

    /**
     * @return {string[]}
     */
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
     * @return {boolean}
     */
    hasChildren() {
        return this.children.getKeys().length !== 0;
    }

    /**
     * @param {string} char
     *
     * @return {TrieNode}
     */
    getChild (char) {
        return this.children.get(char);
    }

    /**
     * @return {string}
     */
    toString () {
        let childrenAsString = this.suggestChildren().toString();
            childrenAsString = childrenAsString ? `:${childrenAsString}` : '';
        const isCompleteString = this.isEndOfWord ? '*' : '';

        return `${this.character}${isCompleteString}${childrenAsString}`;
    }
}
