/** @format */

// Write a code to check whether the number is odd or even
// Example: 25 → odd number, 2 → even number
let number: number = 25;
console.log(number % 2 == 0 ? "even" : "odd");

// Write a code to check whether the number is prime number or not
// Example: 7 → 7 is a prime number
// Example: 6 → 6 is not a prime number
number = 3;
let isPrime = number > 1 ? true : false;
for (let i = 2; i < number; i++) {
  if (number % i == 0) {
    isPrime = false;
  }
}
console.log(isPrime);

// Write a code to find the sum of the numbers 1 to N
// Example: 5 → 1 + 2 + 3 + 4 + 5 = 15
// Example: 3 → 1 + 2 + 3 = 6
let result: number = 0;
number = 5;
for (let i = 1; i <= number; i++) {
  result += i;
}
console.log(result);

// Write a code to find factorial of a number
// Example: 4! → 4 x 3 x 2 x 1 = 24
// Example: 6! → 6 x 5 x 4 x 3 x 2 x 1 = 720
result = 1;
number = 4;
for (let i = 1; i <= number; i++) {
  result *= i;
}
console.log(result);

// Write a code to print the first N fibonacci numbers
// Example: 15 → 610
// 1,1,2,3,5,8,13, 21,
// 0,1,1,2,3,5
number = 15;
let temp1 = 0, // 3
  temp2 = 1; // 5

//butuh 3 parameter
//number => jumlah brp banyak looping
//result => menampung hasil
//temp1 => menyimpan value kedua sebelum angka yg dicari
//temp2 => menyimpan value pertama sebelum angka yg dicari

for (let i = 1; i < number; i++) {
  result = temp1 + temp2; // 5
  temp1 = temp2; // 3
  temp2 = result; // 5
}

console.log(result);
