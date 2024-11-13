/** @format */

const list = {
  head: {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null,
        },
      },
    },
  },
};

class NewNode {
  element: any;
  next?: any;
  constructor(element: any) {
    this.element = element;
    this.next = null;
  }
} // {element:"david", next:null}

class LinkedList {
  head: NewNode | null;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(element: any) {
    let node = new NewNode(element); // {element:"david", next:null} , {element: "andrew", next:null},{element: "jhonny", next:null}
    let current: any;

    if (this.head == null)
      this.head = node; // {head:{element:"david", next:null} }
    else {
      current = this.head; //{head:{element:"david", next: {element: "andrew", next:null}} }
      while (current.next) current = current.next; // { next: {element: "andrew", next:null}}
      current.next = node; // {element:"david", next: {element: "andrew", next:{element: "jhonny", next:null}}}
    }
    this.size += 1;
  }

  printList() {
    let curr = this.head;
    while (curr) {
      console.log(curr.element);
      curr = curr.next;
    }
  }

  insertAt(element: any, index: number) {
    if (index < 0 || index > this.size)
      return console.log("please enter a valid index");
    else {
      const node = new NewNode(element); // { element: "cindy", next:null} index 2
      let curr: any = this.head; // { element: "albert", next:{element:"david", next: {element: "andrew", next:{element: "jhonny", next:null}}}}

      if (index == 0) {
        node.next = this.head; //{ element: "albert", next:{element:"david", next: {element: "andrew", next:{element: "jhonny", next:null}}}}
        this.head = node;
      } else {
        curr = this.head;
        let prev: any;
        for (let i = 0; i < index; i++) {
          // i =2
          prev = curr; //{element:"david", next: {element: "andrew", next:{element: "jhonny", next:null}}}}
          curr = curr.next; // {element: "andrew", next:{element: "jhonny", next:null}}
        }
        prev.next = node; //{element:"david", next:  element: "cindy", next:null}
        node.next = curr; // //{element:"david", next:  element: "cindy", next: {element: "andrew", next:{element: "jhonny", next:null}}}
      }
      this.size++;
    }
  }

  removeAt(index: number) {
    if (index < 0 || index > this.size)
      return console.log("please enter a valid index");
    else {
      let curr: any = this.head;
      let prev = curr;
      // head = {element: "andrew" , next: { element : "john" , next: null}}
      if (index == 0) {
        this.head = curr.next;
      } else {
        for (let i = 0; i < index; i++) {
          prev = curr; //{ element : "john" , next: null}
          curr = curr.next; //  next: { element : "john" , next: null}
        }
        prev.next = curr.next; // next = null
      } //{ element : "john" , next: null}
      this.size -= 1;

      return curr.element;
    }
  }

  removeElement(element: any) {
    let current: any = this.head;
    //  {element: "budi", next: null}
    let prev: any = null; // {element: "udin", next: null}
    //remove darwin
    while (current != null) {
      if (current.element === element) {
        if (prev == null) this.head = current.next;
        else prev.next = current.next;
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }

    return null;
  }

  indexOf(element: any) {
    let count: number = 0; //1
    let current: any = this.head;
    // element: "udin", next: null
    //udin

    while (current != null) {
      if (current.element === element) {
        return count;
      }

      count += 1;
      current = current.next;
    }

    return -1;
  }
}

const newLinkedList = new LinkedList();

newLinkedList.add("david");
newLinkedList.add("andrew");
newLinkedList.add("jhonny");

console.log(newLinkedList.head);
console.log(newLinkedList.size);
newLinkedList.insertAt("albert", 0);
newLinkedList.insertAt("cindy", 2);
newLinkedList.insertAt("john", 4);

newLinkedList.removeAt(1);
newLinkedList.removeElement("cindy");
console.log("index andrew adalah = ", newLinkedList.indexOf("andrew"));

newLinkedList.printList();
// const a = [3, 5];
// a[100] = 20;

// console.log(a);
