/** @format */

// Create a function that can create a triangle pattern according to the height we provide like the following :
// 01
// 02  03
// 04  05  06
// 07  08  09  10

// Parameters : height → triangle height

const triangle = (h: number) => {
  let counter = 1;
  for (let i = 0; i < h; i++) {
    let result = "";
    for (let j = 0; j <= i; j++) {
      result += counter > 9 ? counter : "0" + counter + " ";
      counter++;
    }
    console.log(result);
  }
};
triangle(4);

// Create a function that can loop the number of times according to the input we provide,
// and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".
// Parameters : n → total looping
// Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
// Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
const fb = (n: number) => {
  let result: string = ""; //1 2 fizz 4 buzz fizz 7 8 fizz buzz fizzbuzz
  for (let i = 1; i <= n; i++) {
    //i = 15
    if (i % 3 == 0 && i % 5 == 0) result += "fizzBuzz";
    else if (i % 3 == 0) result += "fizz ";
    else if (i % 5 == 0) result += "buzz ";
    else result += i + " ";
  }
  console.log(result);
};
fb(15);

// Create a function to calculate Body Mass Index (BMI)
// Formula : BMI = weight (kg) / (height (meter))²
// Parameters : weight & height
// Return values :
// < 18.5 return “less weight”
// 18.5 - 24.9 return “ideal”
// 25.0 - 29.9 return “overweight”
// 30.0 - 39.9 return “very overweight”
// > 39.9 return “obesity”z

const calculateBMI = (w: number, h: number) => {
  let bmi = w / h ** 2;
  let result = "";
  if (bmi < 18.5) result = "less weight";
  else if (bmi >= 18.5 && bmi <= 24.9) result = "ideal";
  else if (bmi >= 25 && bmi <= 29.9) result = "overweight";
  else if (bmi >= 30.0 && bmi <= 39.9) result = "very overweight";
  else result = "obesity";
  console.log(result);
};
calculateBMI(72, 1.76);

// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only
// Example : [1,2,3,4,5,6,7,8,9,10] → [2,4,6,8,10]

const removeOdd = (numbers: number[]) =>
  console.log(numbers.filter((n) => n % 2 == 0));
removeOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Write a function to split a string and convert it into an array of words
// Example : “Hello World” → [“Hello”, “World”]

const split = (s: string) => console.log(s.split(" "));

split("Hello World");
