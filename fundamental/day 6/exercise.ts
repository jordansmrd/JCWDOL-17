/** @format */

// Create a function to calculate array of student data
// The object has this following properties :
// Name → String
// Email → String
// Age → Number
// Score → Number
// Parameters : array of student
// Return values :
// Object with this following properties :
// Score
// Highest
// Lowest
// Average
// Age
// Highest
// Lowest
// Average

class Student {
  name: string;
  email: string;
  age: number;
  score: number;
  constructor(name: string, email: string, age: number, score: number) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.score = score;
  }
}

class LHA {
  highest: number;
  lowest: number;
  average: number = 0;
  constructor(numbers: number[]) {
    this.highest = Math.max(...numbers);
    this.lowest = Math.min(...numbers);
    for (let i = 0; i < numbers.length; i++) {
      this.average += numbers[i]; //cari sumnya
    }
    this.average = this.average / numbers.length;
  }
  //   get result() {
  //     return {
  //       highest: this.highest,
  //       lowest: this.lowest,
  //       average: this.average,
  //     };
  //   }
}

const test = new LHA([5, 3, 7, 8, 10, 23, 45]);

const calculateArrayStudent = (students: Student[]) => {
  return {
    score: new LHA(students.map((student) => student.score)),
    age: new LHA(students.map((student) => student.age)),
  };
};

const john = new Student("john", "john@mail.com", 15, 88);
const alex = new Student("alex", "alex@mail.com", 16, 90);
const bambang = new Student("bambang", "bambang@mail.com", 17, 95);

console.log(calculateArrayStudent([john, alex, bambang]));
