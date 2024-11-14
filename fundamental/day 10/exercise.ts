/** @format */

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// 1. dari kata yang kita dapat ubah menjadi array. //anagram => [a,n,a,g,r,a,m] nagaram = [n,a,g,a,r,a,m]
// 2. setelah jadi array sort. // [a,a,a,g,m,n,r] , [a,a,a,g,m,n,r]
// 3. array ubah balik ke string. aaagmnr == aaagmnr
// 4. bandingkan hasil string yang sudah disort
console.log("anagram".split("").sort());

const anagram = (s: string, t: string) =>
  s.toLowerCase().split("").sort().join("") ==
  t.toLowerCase().split("").sort().join("");

console.log("anagram", anagram("anagram", "nagaram"));

// You are climbing a staircase. It takes n steps to reach the top.
//Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

//fibonachi
// 1 2 3 5 8

console.log([...new Array(5)]);
//reduce => looping
//arr = [0, 1, 1]
// [0,1,1].concat(arr[2] + arr[1])
// [0,1,1].concat(2) => [0,1,1,2]
//

const staircase = (n: number) =>
  [...new Array(n - 1)].reduce(
    (arr: number[]) => arr.concat(arr[arr.length - 1] + arr[arr.length - 2]),
    [1, 1]
  )[n];

console.log("staircase", staircase(5));

// Create a function to convert Excel sheet column title to its corresponding column number.
// Example :
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// …
// Example :
// Input : AB
// Output : 28

//A-Z = 26
//AA = 27. 26 * digit_pertama + digit_kedua => 26 * 1 + 1 = 27
//AAA = 703. 26 * digit_pertama * 26 *  digit_kedua + 26 + digit_ketiga  = 26

const convertExcel = (c: string, n: number = 0): number =>
  c.length == 1
    ? n + c.toLowerCase().charCodeAt(0) - 96
    : convertExcel(c.slice(1), 26 * (n + c.toLowerCase().charCodeAt(0) - 96));

console.log("excel", convertExcel("zzz"));
// "ab" => convertExcel("b", 26 )
// return 26 + 2 = 28

//zzz => convertExcel("zz", 676)
//zz => convertExcel("z", 26 * 676 + 26)
//z => 18252 + 26 = 18278

// create a function
// input height :number
// output : console log 4 types of triangles

const triangle = (h: number) => {
  let result: string = "";
  for (let i = 0; i < h; i++) {
    for (let j = i; j < h; j++) result += "*";
    result += "\n";
  }
  console.log(result);
  // ****
  // ***
  // **
  // *

  result = "";
  for (let i = 0; i < h; i++) {
    for (let j = h - i; j <= h; j++) result += "*";
    result += "\n";
  }

  console.log(result);
  // *
  // **
  // ***
  // ****

  result = "";
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < h; j++) {
      if (j >= i) result += "*";
      else result += " ";
    }
    result += "\n";
  }
  console.log(result);
  //  ****
  //   ***
  //    **
  //     *

  result = "";
  for (let i = 0; i < h; i++) {
    for (let j = h; j > 0; j--) {
      if (j - 1 <= i) result += "*";
      else result += " ";
    }
    result += "\n";
  }
  console.log(result);
  //     *
  //    **
  //   ***
  //  ****
};

triangle(4);
