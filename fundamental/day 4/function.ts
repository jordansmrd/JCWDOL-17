/** @format */
//function merupakan sebuah reusable code, untuk melakukan suatu tugas

//function declaration
function square(angka: number) {
  //code-block/instruksi

  return angka * angka;
}
//square merupakan nama dari function
//angka merupakan parameter
//parameter adalah sebuah variable, dimana isi valuenya diisi melalui argument saat function dipanggil
//argument merupakan value yang kita passing ke dalam parameter
//return adalah sebuah hasil yang dihasilkan oleh sebuah function

//call function
let result_5: number = square(5);
let angka: number = 20;
let result_10: number = square(angka);
console.log("ini hasil perkalian 5 yaitu", result_5);
console.log(`ini hasil perkalian ${angka} yaitu`, result_10);

function tanpaParameter() {
  return "ini adalah sebuah function tanpa parameter";
}

function tanpaParameter2() {
  console.log("ini adalah function tanpa return");
}

console.log(tanpaParameter());

//function expression
//kita tidak bisa mengeksekusi/call function sebelum function itu dideclare
// console.log(square2(40)); ini tidak bisa dieksekusi/dijalankan

const square2 = function (angka: number) {
  const str: string = "saya ada di dalam function scope";
  console.log(result_10, "result_10 diakses dari dalam function square2");

  return angka * angka;
};

// console.log(str); tidak bisa akses variable str karena str dipanggil diluar function

console.log(square2(3));

//default parameter = merupakan default value yang diletakan di dalam parameter sebuah function
function multiply(a: number, b: number = 2, c?: number) {
  console.log(c, "ini nilai c");
  if (c) return a * b * c;
  return a * b;
}
//c merupakan sebuah optional parameter tanpa default param

console.log(multiply(10, 2, 5), "ini multiply");

//rest parameters
function myFunc(a: string, b: string, ...sisaArg: string[]) {
  console.log(a); //string
  console.log(b); //string
  console.log(sisaArg); //array of string
}
myFunc("one", "two", "three", "four", "five", "six");
// dengan menggunakan rest params, semua argument tidak ada limitnya
//myfunction memiliki 3 buah params
//param pertama adalah a sebuah string
//param kedua adalah b sebuah string
//param ketiga merupakan sebuah rest parameter tipe datanya adalah sebuah array

//di line 61, terdapat 6 arguments.
//argument pertama mengisi parameter a
//argument kedua mengisi parameter b
//argument ketiga dan seterusnya akan mengisi restparameter sisaArg

//nested function = function di dalam function
function getMessage(firstName: string) {
  function sayHello() {
    return "Hello " + firstName; //string
  }
  function welcomeMessage() {
    return "Welcome to Purwadhika"; //string
  }

  return sayHello() + " " + welcomeMessage(); //string
}

const message: string = getMessage("donald");
console.log(message, "ini adalah message");

//function closure adalah sebuah function yang me-return sebuah function
function greeting(name: string) {
  const defaultMessage: string = "Hello ";
  return function () {
    return defaultMessage + name;
  }; //function
}

console.log(greeting("jordan")());

// const funcMessage = greeting("jordan");

// console.log(funcMessage());

//currying function mirip dengan closure tetapi return functionnya memiliki parameter
function multiplier(factor: number) {
  return function (number: number) {
    return number * factor;
  };
}

const mul3 = multiplier(3);
console.log(mul3(10), "currying function 3 * 10");
console.log(multiplier(5)(2), "currying function 5 * 2");

//recursive adalah sebuah function yang memanggil dirinya sendiri(looping)
function countDown(fromNumber: number) {
  console.log(fromNumber); //3 , 2 , 1
  let nextNumber: number = fromNumber - 1; //2, 1 , 0

  if (nextNumber > 0) {
    countDown(nextNumber); // countDown(2) countDown(1)
  }
}

countDown(3); // countDown(2) , countDown(3)
//sebuah function yang memiliki return akan menyelesaikan segala sesuatu yg berbentuk return

let numb: number = 10;
let x: number = --numb;

console.log(numb, x);

//arrow function =>
const square3 = (number: number) => number * number;
const square4 = (number: number) => {
  const result = number * number;
  return result;
};

console.log(square3(10));
console.log(square4(3));

const funcCheckOddNumber = (number: number) => {
  if (number % 2) return true;
  return false;
};

const funcCheckOddNumber2 = (number: number) => (number % 2 ? true : false);

console.log(funcCheckOddNumber(5));
console.log(funcCheckOddNumber2(5));
