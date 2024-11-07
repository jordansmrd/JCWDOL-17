/** @format */
//class merupakan sebuah template untuk menciptakan sebuah object

//class declaration
class User {
  public name: string;
  public age: number;
  private address: string;
  constructor(nama: string, umur: number, alamat: string) {
    //code-block
    this.name = nama; //assign nama ke dalam name
    this.age = umur; // assign umur ke dalam age
    this.address = alamat;
  }
  public greeting() {
    console.log("Hello World");
  }

  public showAddress() {
    return this.address;
  }
}

//class expression
const User2 = class {
  greeting() {
    console.log("Hello World");
  }
};

const user = new User("jenny", 23, "bsd");
const user2 = new User("dono", 19, "jkt");
const user3 = new User("indro", 20, "jkt");
//User() => menandakan sebuah function. function yang dijalankan adalah constructor

user.greeting(); // calling function greeting through instance user

user.name = "jono";

console.log(user);
// constructor merupakan sebuah function yang dijalankan pada saat menciptakan sebuah instance
console.log(user.showAddress());
//value dalam key object itu bisa diaccess/diassign secara langsung lewat instance apabila keys tersebut merupakan public keys

//static props

class DB {
  private static connection: string;
  private static initializeConnection() {
    const randomNum = Math.ceil(Math.random() * 100); // 37
    DB.connection = `new Database connection ${randomNum}`; // new Database connection 37
  }

  static getConnection() {
    if (!DB.connection) DB.initializeConnection();
    return DB.connection; // "new Database connection 37"
  }
}
console.log(DB.getConnection());

const numbers = new Array(1, 2, 3, 4, 5);
//numbers instance dari Array

//numbers.length; => length merupakan property dari class Array yang bisa diakses dari instancenya

class User3 {
  private fName: string;
  private lName: string;

  constructor(f: string, l: string) {
    this.fName = f;
    this.lName = l;
  }

  get fullname() {
    return this.fName + " " + this.lName;
  } // get membuat sebuah method diperlakukan seakan2 dia adalah property

  set fullname(value: string) {
    const splittedValue = value.split(" "); // "rose blackpink" => ["rose", "blackpink"]
    console.log(splittedValue);

    if (splittedValue[0].length < 4) {
      throw new Error("nama depan minimal 4 karakter");
    } else if (splittedValue[1] == undefined)
      throw new Error("nama belakang wajib ada");
    this.fName = splittedValue[0];
    this.lName = splittedValue[1];
  }

  fullname2() {
    return this.fName + " " + this.lName;
  }
}

const newUser = new User3("John", "Doe");

newUser.fullname = "lisa blackpink";
console.log(newUser.fullname); // read-only

console.log(newUser.fullname2());

//inheritance
class Product {
  public productName: string;
  public price: number;
  protected adminName: string;

  constructor(name: string, price: number, admin: string) {
    this.productName = name;
    this.price = price;
    this.adminName = admin;
  }
}

const tv = new Product('TV 55" Samsung OLED', 3000000, "jordan");
const sepeda = new Product("Sepeda Fixie", 1500000, "jordan");
console.log(tv, sepeda);

class Book extends Product {
  // public productName: string;
  // public price: number;
  public author: string;
  public total_page: number;
  constructor(
    name: string,
    price: number,
    author: string,
    total_page: number,
    admin: string
  ) {
    super(name, price, admin); // memanggil constructor milik parent(Product)
    // this.productName = name;
    // this.price = price;
    this.author = author;
    this.total_page = total_page;
  }

  get() {
    return this.adminName;
  }
}

const komikNaruto = new Book("Komik Naruto", 15000, "udin", 110, "jordan");
console.log(komikNaruto.get());

//public bisa diaccess lewat instance
//private hanya bisa diaccess di dalam class saja
//protected hanya bisa diaccess di dalam class dan sub-class(class turunan)
class Tree {}
console.log(komikNaruto instanceof Book); //true
console.log(komikNaruto instanceof Product); //true
console.log(komikNaruto instanceof Tree); //false
