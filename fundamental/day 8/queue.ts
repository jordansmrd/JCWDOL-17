/** @format */

class Queue {
  private container: number[] = [];
  private maxSize: number;

  constructor(maxSize: number = 5) {
    this.maxSize = maxSize;
  }

  private isFull() {
    return this.container.length >= this.maxSize;
  }

  private isEmpty() {
    return this.container.length == 0;
  }

  enqueue(element: number) {
    if (this.isFull()) return console.log("antrian penuh");
    this.container.push(element);
  }
  dequeue() {
    if (this.isEmpty()) return console.log("antrian kosong");

    return this.container.shift();
  }
  get elements() {
    return this.container;
  }
}

const queue = new Queue(2);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(9); //tidak masuk karena antrian sudah penuh

// console.log(queue.elements);
// queue.dequeue();
console.log(queue.elements);
