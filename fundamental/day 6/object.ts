/** @format */

// object merupakan sebuah ciri ciri yang menggambarkan sesuatu
// sedangkan array merupakan sebuah kumpulan data (bentuk datanya mirip mirip)

// lemari buku komik merupakan array => komik doraemon, komik shinchan, komik naruto
// object adalah bukunya. => author, total pages, genre, cover image, rating, title

// let user = {} creating object literal syntax
// let user = new Object() creating object constructor syntax

// string,number,boolean,null, undefined => tipe data primitive
// array, object => tipe data non primitive

interface ICar {
  brand: string;
  model: string;
  price: number;
}

interface ICar {
  origin?: string; // tanda tanya merupakan sebuah optional (value di propertynya boleh diisi atau ga)
  color?: string | number; //contoh untuk property yang memiliki tipe data string or number
}

type TCar = {
  brand: string;
  model: string;
  price: number;
};

// type TCar = {
//   origin: string;
// }; //type tidak boleh memiliki nama yg sama

const car1: ICar = {
  brand: "BMW",
  model: "M135I xDrive",
  price: 800000000,
};

const car2: ICar = {
  brand: "Toyota",
  model: "Innova",
  price: 500000000,
  origin: "japan",
};

const car3: TCar = {
  brand: "Honda",
  model: "HRV",
  price: 350000000,
};

type TOwner =
  | {
      name: string;
      car: TCar[];
    }
  | undefined;

const owner1: TOwner = {
  name: "jordan",
  car: [car1, car2, car3],
};

const owner2: TOwner = undefined;

interface IElectricCar extends ICar {
  batteryCap: number;
}

const tesla: IElectricCar = {
  brand: "Tesla",
  price: 1000000000,
  model: "Tesla Model 3",
  origin: "US",
  color: "silver",
  batteryCap: 100000,
};

// console.log(car1, car2);
console.log(owner1);

console.log(tesla);

// key = merupakan property atau method dalam sebuah object
// property = merupakan sebuah value yang disimpan ke dalam object
// method = function yang ada di dalam sebuah object

interface IAddress {
  street?: string;
  zip?: number;
  city?: string;
}
interface IUser {
  name: string;
  greet: () => string;
  age?: number;
  address?: IAddress;
}

const user: IUser = {
  name: "david",
  greet() {
    return "hello ";
  },
};
//name dan greet di obj user merupakan keys
//name merupakan property
//greet merupakan method

console.log(user);

//accessing value
console.log(user.name); //memanggil property name
console.log(user.greet()); //memanggil method greet

//add property ke dalam object user
user.age = 19; //reassign/assign ke dalam property di object
//variable di ts, digambarkan melalui type/interface/value yg di-declare pertama kali
user.age = 20; //assign/re-assign
user.address = {
  street: "jalan kebenaran",
  zip: 11101,
};

//edit property ke dalam object user
user.name = "john"; //re-assign
user.greet = () => "re-assign function greet"; //re-assign

console.log(user, "ini sebelum");
console.log(user.greet());

//delete key dalam object
delete user.age; //menghapus key dalam object

console.log(user, "ini sesudah");

//accessing value dalam object

console.log(user.name, "accessing key name with dot");
console.log(user["name"], "accessing key name with square bracket");

console.log(user);

//optional chaining = cara untuk mengakses property yang sifatnya optional (biasa dilakukan pada saat accessing nested property)
// console.log(user.address.street);

console.log(user.address?.street, user.address?.zip, user.address?.city);

console.log(Object.keys(user)); // method keys dalam object. return array of keys
console.log(Object.entries(user));

// console.log(Object.keys(user).map((k: string) => user[k]));

let name = "jhonny"; //jhonny => a1 'jhonny'
let newName = name; //jhonny => a2 'jhonny'
name = "Doe"; //Doe //reassign a1 'Doe'

let person: { [key: string]: string | number } = {
  name: "donny",
  age: 26,
}; // value dari person => a3

let person2 = person; // a4 => refer ke a3
person2.name = "andrew"; //accessing value dari a4 => menuju origin value a3 . dan mengganti value name

let person3 = { ...person }; // a5 => copy value dari a3.
person3.name = "donny yen";

console.log(name, newName);

console.log(person, person2, person3);

//chiki => dipindah ke tupperware

//for in
for (const key in person) {
  // if (key == "name" || key == "age") {
  const element = person[key]; //value lewat key
  console.log(key);
  console.log(element);
  // }
}

//destructuring proses menggeluarkan key supaya bisa diakses melalui variable
console.log(person);
console.log(person.name, ",accessing value name");
const { age } = person; //sekarang value age dapat diakses melalui variable age
console.log(age);

//spread operator
const dataOne = [1, 2, 3];
const dataTwo = [4, 5, 6];
const finalDataList = [...dataOne, ...dataTwo]; // mirip dengan concept concat

const objectOne = {
  name: "David",
};
const objectTwo = {
  name: "Rudi",
  email: "davil@mail.com",
};
const finalObject = { ...objectTwo, ...objectOne };
console.log(finalDataList);
console.log(finalObject);

interface INewPerson {
  firstName: string;
  lastName: string;
  greet: () => void;
}
const newPerson: INewPerson = {
  firstName: "Frengky",
  lastName: "Sihombing",
  greet() {
    console.log(`Hello ${this.firstName}`); // accessing property dari dalam object
  },
};

console.log(newPerson);
newPerson.greet();

console.log(Object.values(newPerson)); // return array of key's value
console.log(Object.keys(newPerson)); // return array of key's name
console.log(Object.entries(newPerson)); // return array of array[key,value]

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
//menggabungkan 2 buah object. pada saat source memiliki key yang sama dengan target. maka target tidak akan replace value dari prop source

console.log(returnedTarget);
