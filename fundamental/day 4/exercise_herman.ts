// create a func that can create a triangle pattern
function triangle(height: number) {
  let num = 1;
  for (let i = 0; i <= height; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += num > 9 ? num : "0" + num + " ";
      num++
    }
    console.log(str);
  }
}
triangle(4)

// Create a function that can loop the number of times according to the input we provide, and will
// replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
function fizzBuzz(n: number) {
  for (let i = 1; i < n; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
  }
}
fizzBuzz(16);

// create a function to calculate body mass index
function bodyMassIndex(weight: number, height2: number):string {
  let BMI: number = weight / height2 ** 2;
  if (BMI < 18.5) return "less weight";
  else if (BMI >= 18.5 && BMI <= 24.9) return "ideal";
  else if (BMI >= 25.0 && BMI <= 29.9) return "overweight";
  else if (BMI >= 30.0 && BMI <= 39.9) return "very overweight";
  else return "obesity";
}
console.log(bodyMassIndex(90, 1.70));

// write a function to remove all odd number
function removeOdd(arr: number[], invert = false) {
  for (let i = 0; i < arr.length; ++i) {
    const odd = arr[i] % 2 === 1;
    if (odd !== invert) {
      arr.splice(i--, 1);
    }
  }
}

const myArr = [0, 1, 2, 3, 4, 5, 6];
removeOdd(myArr);
console.log(myArr);

// write a function to split a string and convert it into an array of words
function splitString(kata:string){
    console.log(kata.split(' '));
}
console.log(splitString("Nama Saya Herman"))