/** @format */

// Create a function to check if two objects are equal
// Example
// Input :  { a: 2 } & { a: 1 }
// Output: false
// Example
// Input :  { a: “Hello” } & { a: 1 }
// Output: false
// Example
// Input :  { a: 1 } & { a: 1 }
// Output: true

interface IAnyObject {
  [key: string]: any;
}

const checkEqual = (a: IAnyObject, b: IAnyObject) => {
  const aKeys: string[] = Object.keys(a); // ["a","c"] = 2
  const bKeys: string[] = Object.keys(b); // ["a", "b"] = 2
  if (aKeys.length != bKeys.length) return false;
  for (const key in a) {
    if (a[key] != b[key]) return false; // a["c"] != b["c"]
  }
  return true;
};

console.log(checkEqual({ a: 1 }, { a: 1 }));

// Create a function to get the intersection of two objects
// Example
// Input : { a: 1, b: 2 } & { a: 1, c: 3 }
// Output: { a: 1 }

const getIntersect = (a: IAnyObject, b: IAnyObject) => {
  const c: IAnyObject = {};
  for (const key in a) {
    if (a[key] == b[key]) c[key] = a[key];
    //a["a"] == b["a"] ? c["a"]=  a["a"](1)
    //a["c"] == b["c"] ? false
  }
  return c; // { a:1 }
};

console.log(getIntersect({ a: 1, c: 3, b: 2 }, { a: 1, b: 2 }));

const obj = {
  a: 10,
  c: 3,
};

// Create a function to merge two array of student data and remove duplicate data
// Student data : name & email
// Example :
// Array1 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  },
// { name: ‘Student 2’, email : ‘student2@mail.com’  }
// ]
// Array2 → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  },
// { name: ‘Student 3’, email : ‘student3@mail.com’  }
// ]
// Result :
// ArrayResult → [
// { name: ‘Student 1’, email : ‘student1@mail.com’  },
// { name: ‘Student 2’, email : ‘student2@mail.com’  },
// { name: ‘Student 3’, email : ‘student3@mail.com’  }
// ]
class Student {
  name: string;
  email: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

// student1 digabung dengan student2 yg tidak ada di student 1
const merge = (students1: Student[], students2: Student[]) => {
  const notInStudent1: Student[] = students2.filter((s2) => {
    //filter return sebuah array. dimana value yang dikembalikan tergantung dengan hasil boolean di dalam return function tersebut
    const index = students1.findIndex(
      (s1) => s1.email == s2.email && s1.name == s2.name
    );
    //s1 "student 1", "s1@mail.com"
    //s2 = "student 1", "s1@mail.com"

    //s1 "student 2", "s2@mail.com"
    //s2 "student 2", "s2@mail.com"

    //s2 "student 3", "s3@mail.com"

    //hasil return dari findexIndex adalah sebuah index yang ditemukan. apabila indexnya ga ketemu, return -1
    //index = 0
    //index = 1
    //index = -1

    if (index == -1) return true;
    return false;
  }); //notInStudent1 = [new Student("student 3", "s3@mail.com")]

  return students1.concat(notInStudent1);
};

console.log(
  merge(
    [
      new Student("student 1", "s1@mail.com"),
      new Student("student 2", "s2@mail.com"),
    ],
    [
      new Student("student 1", "s1@mail.com"),
      new Student("student 2", "s2@mail.com"),
      new Student("student 3", "s3@mail.com"),
    ]
  )
);

// Create a function that can accept input as an array of objects and switch all values into property and property into value
// Example :
// Input : [{ name: ‘David’, age: 20 }]
// Output : [{ David: ‘name’, 20: ‘age’}]

const switchKeys = (arr: IAnyObject[]) => {
  const arrEntries = arr.map((obj) => Object.entries(obj)); //[ [["name","david"],["age",20]] ]
  const swap = arrEntries.map((val) => {
    console.log(val, "ini val"); //[ [ 'name', 'David' ], [ 'age', 20 ] ]

    return val.map((val2) => {
      //[ 'name', 'David' ], [ 'age', 20 ]
      return [val2[1], val2[0]]; // //[ 'David', 'Name' ], [ 20, "age" ]
    }); //[[ 'David', 'Name' ], [ 20, "age" ]]
  });

  const swap2: any[] = []; //[[[ 'david', 'name' ], [ 'age', '20' ] ]] => [{david:name, 20:age}]

  for (let i = 0; i < arrEntries.length; i++) {
    ////[ [ 'name', 'David' ], [ 'age', 20 ] ]
    const temp1: any[] = []; //[[ 'david', 'name' ], [ 'age', '20' ] ]

    for (let j = 0; j < arrEntries[i].length; j++) {
      //[ [ 'name', 'David' ], [ 'age', 20 ] ]
      const temp2 = [arrEntries[i][j][1], arrEntries[i][j][0]]; // [ 'age', '20' ]
      temp1.push(temp2);
    }
    swap2.push(temp1); ////[[ 'david', 'name' ], [ 'age', '20' ] ]
  }

  console.log(swap2, "ini swap 2");

  return swap.map((entries) => {
    return Object.fromEntries(entries);
  }); //[[ 'David', 'Name' ], [ 20, "age" ]] => {"david" : "name", "20" : "age"}
};

console.log(
  switchKeys([
    { name: "David", age: 20 },
    { title: "spongebob", rating: 7 },
  ])
);
//[{ name: "David", age: 20 }]
// { name: "David", age: 20 } => [["name","david"],["age",20]]

// Create a function to find a factorial number using recursion
// Example
// Input :  5
// Output: 5! = 5 x 4 x 3 x 2 x 1 = 120

const factorial = (n: number): number => {
  // n = 5
  if (n == 1) return n;
  return n * factorial(n - 1);
  // 5 * factorial(4) => 5 * 4 * 6 = 120
  //factorial(4) =>  4 * factorial(3) => 4 * 6
  //factorial(3) => 3 * factorial(2) => 3 * 2 = 6
  //factorial(2) => 2 * 1 = 2
};

console.log(factorial(5));

//cc1 16
//17 ujian module 1 fundamental => pg

//tipe data dan built in methodnya

// Specifications :
// Create a shooting game between two player
// Each player has three properties : name, health and power
// Each player will take turns to shooting
// Before shooting, players get a chance to get random items (health +10 or power +10)
// The game will continue until one of the players has health < 0
// Requirements :
// Create ShootingGame & Player class
// ShootingGame class :
// constructor(player1, player2) → player objects as a parameter
// getRandomItem() → return { health: 0 or 10, power: 0 or 10 }
// start() → start shooting games

// Player class :
// Property → name, health (default 100), power (default 10)
// hit(power) →  subtract player health
// useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
// showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)

// ShootingGame start() function flow :
// In every turn :
// Show each player status before shooting
// Get random item for each player before shooting
// Show each player status after shooting
// Show winner name

class Player {
  private name: string;
  private health: number = 100;
  private power: number = 10;
  constructor(n: string) {
    this.name = n;
  }

  damage(power: number) {
    if (this.health > this.power) this.health -= power;
    else this.health = 0;
  }
  showStatus() {
    console.log(
      `Player ${this.name} (Health => ${this.health}, Power => ${this.power}) `
    );
  }
  get h() {
    return this.health;
  }

  get p() {
    return this.power;
  }

  useItem(item: { health: number; power: number }) {
    this.health += item.health;
    this.power += item.power;
  }
}

class ShootingGame {
  private player1: Player;
  private player2: Player;
  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  private random() {
    return Math.floor(Math.random() * 2); // 0-1
  }

  private getRandomItem(): {
    health: number;
    power: number;
  } {
    return this.random() == 1
      ? { health: 0, power: 10 }
      : { health: 10, power: 0 };
  }

  start() {
    while (this.player1.h > 0 && this.player2.h > 0) {
      this.player1.showStatus();
      this.player2.showStatus();
      this.player1.useItem(this.getRandomItem());
      this.player2.useItem(this.getRandomItem());
      if (this.random() > 0) {
        this.player1.damage(this.player2.p); // 10 diserang sama player 2 = 0
        if (this.player1.h == 0) break;
        this.player2.damage(this.player1.p);
      } else {
        this.player2.damage(this.player1.p);
        if (this.player2.h == 0) break;
        this.player1.damage(this.player2.p);
      }
    }
    this.player1.showStatus();
    this.player2.showStatus();
  }
}

const p1 = new Player("david");
const p2 = new Player("cindy");

const game = new ShootingGame(p1, p2);
game.start();

// Array
// string
// number
// Object
