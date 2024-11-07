/** @format */

class Stack {
  private maxSize: number;
  private container: number[] = [];

  constructor(maxSize: number = 10) {
    this.maxSize = maxSize;
  }

  private isFull() {
    return this.container.length >= this.maxSize;
  }

  private isEmpty() {
    return this.container.length == 0;
  }

  push(element: number) {
    if (this.isFull()) return console.log("stack overflow");
    this.container.push(element);
  }

  pop() {
    if (this.isEmpty()) return console.log("stack underflow");
    this.container.pop();
  }

  get elements() {
    return this.container;
  }
}

const stack = new Stack(2);
// stack.push(5); // [5]
// stack.push(6); // [5,6].  length = 2
// stack.push(7); //
console.log(stack.elements);
stack.pop();
// stack.pop();
// console.log(stack.elements);
console.log(stack.elements);
