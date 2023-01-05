import Node from "./node.js";

export default class LinkedList {

  constructor(head = null) {
    this.head = head;
  }

// Adds a new node containing value to the end of the list
  append(value) {
    if (this.head === null) {
      this.head = new Node(value);
    } else {
      let tail = this.head;
      while (tail.next !== null){
        tail = tail.next;
      }
      tail.next = new Node(value);
    }
  }

// Adds a new node containing value to the start of the list
  prepend(value) {
    this.head = new Node(value, this.head);
  }

// Returns the total number of nodes in the list
size() {
  let count = 0;
  let pointer = this.head;
  while(pointer !== null){
    count += 1;
    pointer = pointer.next;
  }

  return count;
}

// Returns the first node in the list
getHead() {
  return this.head.value;
}

// Returns the last node in the list
getTail() {
    if (!this.head) return null;
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    return tail.value;
  }


// Returns the node at the given index
at(index) {
  if (!this.head) return null;
  let i = 0;
  let pointer = this.head;
  while (i < index) {
    pointer = pointer.next;
    i += 1;
  } 
  return pointer ? pointer.value : null;
}

// Removes the last element from the list
pop() {
  if (!this.head) return null;
  let pointer = this.head;
  while (pointer.next.next) {
    pointer = pointer.next;
  }
  pointer.next = null;
  return pointer.value;
}

// Returns true if the passed in value is in the list and otherwise returns false
contains(value) {
  if (!this.head) return null
  let pointer = this.head;
  while (pointer.next !== null) {
    pointer.value === value ? true : pointer = pointer.next;
  }

  return pointer.value === value ? true: false;
}

// Returns the index of the node containing value, or null if not found
find(value) {
  if (!this.head) return null;
  let pointer = this.head;
  let count = 0;

  while (pointer.next !== null){
    if (pointer.value === value) return count;
    pointer= pointer.next;
    count += 1;
  }
  pointer.value === value ? count : null;
}

// Represents your LinkedList objects as strings, so you can print them out and preview them in the console.
toString() {
  if (!this.head) return 'null';
  let pointer = this.head;
  let value = '';

  while (pointer.next !== null){
    value = `${value} (${pointer.value}) ➡`;
    pointer = pointer.next;
  }

  return value = `${value} (${pointer.value}) ➡ null`;
}

}