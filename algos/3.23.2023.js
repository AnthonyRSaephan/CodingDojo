/* 
  TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
  and the empty methods below the constructor.
  Every node contains
  - data
  - next
  - prv
*/

class Node {
    constructor(data, left, right) {
        this.data = data
        this.left = left
        this.right = right
    }
}

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
    /**
     * Executed when the new keyword is used to construct a new DoublyLInkedList
     * instance that inherits these methods and properties.
     * List will have
     * - head
     * - tail
     */
    constructor() {
        // TODO: implement the constructor.
        this.head = null
        this.tail = null
    }

    /**
     * Creates a new node and adds it at the front of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtFront(data) {
        let node = new Node(data)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
            return this
        }
        node.right = this.head
        this.head = node
        return this
    }

    /**
     * Creates a new node and adds it at the back of this list.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} data The data for the new node.
     * @returns {DoublyLinkedList} This list.
     */
    insertAtBack(data) {
        const node = new Node(data)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
            return this
        }

        node.left = this.tail
        this.tail = node
        return this
    }

    /**
    * Adds all the given items to the back of this list.
    * @param {Array<any>} items Items to be added to the back of this list.
    * @returns {DoublyLinkedList} This list.
    */
    insertAtBackMany(items = []) {
        items.forEach((item) => this.insertAtBack(item));
        return this;
    }

    // EXTRA
    /**
     * Removes the middle node in this list.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The data of the removed node.
     */
    removeMiddleNode() {
        let leftNode = this.head
        let rightNode = this.tail
        while (leftNode.data != rightNode.data) {
            leftNode = leftNode.right
            rightNode = rightNode.left
        }
        leftNode = leftNode.left
        rightNode = rightNode.right

        leftNode.right = leftNode.right.right
        rightNode.left = rightNode.left.left
    }

    /**
     * Determines if this list is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this list is empty.
     */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Converts this list to an array of the node's data.
     * - Time: O(n) linear, n = list length.
     * - Space: O(n) linear, array grows as list length increases.
     * @returns {Array<any>} All the data of the nodes.
     */
    toArray() {
        const vals = [];
        let runner = this.head;

        while (runner) {
            vals.push(runner.data);
            runner = runner.next;
        }
        return vals;
    }
}

const emptyList = new DoublyLinkedList();

/**************** Uncomment these test lists after insertAtBack is created. ****************/
const singleNodeList = new DoublyLinkedList().insertAtBack(1);

const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
const unorderedList = new DoublyLinkedList().insertAtBackMany([
    -5,
    -10,
    4,
    -3,
    6,
    1,
    -7,
    -2,
]);
console.log(unorderedList)