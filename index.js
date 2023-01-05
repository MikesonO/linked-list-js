import LinkedList from "./linkedList.js";

const list = new LinkedList();

// Test
list.append(1); // (1) ➡ null
list.append(2); // (1) ➡ (2) ➡ null
list.append(3); // (1) ➡ (2) ➡ (3) ➡ null
list.prepend(4); // (4) ➡ (1) ➡ (2) ➡ (3) ➡ null

console.log(`List size: ${list.size()}`); // List Size: 4
console.log(`First node: ${list.getHead()}`); // First node: 4
console.log(`Last node: ${list.getTail()}`); // Last node: 3
console.log(`At index: ${list.at(2)}`); // At index: 2

list.pop(); // (4) ➡ (1) ➡ (2) ➡ null

console.log(list.contains(2)); //true
console.log(list.contains(3)); //false
console.log(`At index: ${list.find(4)}`); // At index: 0
console.log(list.toString()); // (4) ➡ (1) ➡ (2) ➡ null