import { Sorter } from "./Sorter";

class Node {
  value: number;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList extends Sorter {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    super();
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: number): number {
    let newNode = new Node(value);
    if (this.length === 0 && !this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.tail && this.head) {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this.length;
  }

  pop(): number | undefined {
    if (!this.head) return undefined;
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    return currentNode.value;
  }

  unshift(value: number): number | undefined {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this.length;
  }

  shift(): number | undefined {
    if (!this.head) return undefined;
    let value = this.head.value;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return value;
  }

  get(index: number): Node {
    if (index < 0 || index >= this.length)
      throw new Error("Index is out of bounds.");
    let currentNode = this.head;
    let count = 0;
    while (count !== index && currentNode) {
      currentNode = currentNode.next;
      count++;
    }
    if (currentNode) return currentNode;
    throw new Error("Index is out of bounds.");
  }

  set(index: number, value: number): boolean {
    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index: number, value: number): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      return !!this.push(value);
    } else if (index === 0) {
      return !!this.unshift(value);
    } else {
      let newNode = new Node(value);
      let prevNode = this.get(index - 1);
      newNode.next = prevNode.next;
      prevNode.next = newNode;
      this.length++;
      return true;
    }
  }

  remove(index: number): number | undefined {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) {
      return this.pop();
    } else if (index === 0) {
      return this.shift();
    } else {
      let prevNode = this.get(index - 1);
      let removedNode = prevNode.next;
      if (removedNode && removedNode.next) {
        prevNode.next = removedNode.next;
        this.length--;
        return removedNode.value;
      }
    }
  }

  reverse(): LinkedList {
    let current = this.head;
    [this.head, this.tail] = [this.tail, this.head];
    let prev = null;
    let next = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return this;
  }

  drop(): LinkedList {
    this.head === null;
    this.head === null;
    return this;
  }

  print(): void {
    if (!this.head) return;
    let currentNode: Node | null = this.head;
    while (currentNode) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }

  get getLength(): number {
    return this.length;
  }

  compareLogic(i: number, j: number): boolean {
    if (!this.head) throw new Error("Linked List is empty.");
    return this.get(i).value > this.get(j).value;
  }

  swapLogic(i: number, j: number): void {
    let leftNode = this.get(i);
    let rightNode = this.get(j);
    [leftNode.value, rightNode.value] = [rightNode.value, leftNode.value];
  }
}
