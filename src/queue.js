const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.last = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newItem = new ListNode(value);
    if (this.head === null) {
      this.head = newItem;
      return;
    } else if (this.last === null) {
      this.head.next = newItem;
      this.last = newItem;
      return;
    }

    this.last.next = newItem;
    this.last = newItem;
  }

  dequeue() {
    const previousHeadValue = this.head.value;
    this.head = this.head.next;
    return previousHeadValue;
  }
}

module.exports = {
  Queue
};