/** @format */

//big o notation => sebuah cara untuk mengukur effeciency dari sebuah function
//pengukuran bigo meliputi dari sisi time complexity dan space complexity
//time complexity adalah berapa banyak waktu yang dijalankan untuk menyelesaikan sebuah function
//space complexity adalah berapa besar memory yang dibutuhkan untuk menyelesaikan sebuah function

//general rules
//  1. ignore constants =>
//  2. certain terms "dominate" others
// O(1) < O(logN) < O(N) < O(N Log N) < O(N^2) < O(2^n) < O(n!)

let str = "hello world"; // O(1) constant
str = "hello hello"; // O(1) constant
for (let i = 0; i < str.length; i++) {
  console.log(str[i]); //O(1) constant
} // O(N) => N adalah berapa banyak loop yang dilakukan
// =>
//time complexity => O(N)
//space complexity => O(1)

//for vs recursive => recursive makan waktu lebih lama dibandingkan for biasa
