// Create a function to convert Excel sheet column title to its corresponding column number.
const titleToNumber = (s: string) => {
  let result: number = 0;
  for (let i = 0; i < s.length; i++) {
    result *= 26;
    result += s[i].charCodeAt(0) - "A".charCodeAt(0) + 1;
  }
  return result;
};
console.log(titleToNumber("AA"));

// Given a non-empty array of integers nums, every element appears twice except for one.
// Find that single one.
const findSingle = (arr: number[]) => {
  // saat dua angka yang sama dilakukan XOR, hasilnya akan 0
  // tapi pada saat 0 di XOR dengan angka, akan menghasilkan angka itu sendiri.
  return arr.reduce((i, val) => i ^ val);
};
const arr1 = [4, 1, 2, 1, 2];
console.log(findSingle(arr1));

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
const isAnagram = (s: string, t: string): boolean => {
  if (t.length !== s.length) return false;

  t.split("").forEach((char) => (s = s.replace(char, "")));

  return !s.length;
};
console.log(isAnagram("anagram", "nagaram"));

// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps.
// In how many distinct ways can you climb to the top?
const cache: number[] = [];
const stairs = (n: number): number => {
  if (n <= 3) return n;
  if (!cache[n]) {
    cache[n] = stairs(n - 2) + stairs(n - 1);
  }
  return cache[n];
};
console.log(stairs(4));

// create a function that console log 4 types of triangles
const triangle = (n: number) => {
  let str = "* ";
  let space = "  ";
  for (let i = 0; i <= n; i++) {
    console.log(str.repeat(i));
  }
  for (let i = 0; i <= n; i++) {
    console.log(space.repeat(n - i) + str.repeat(i));
  }
  for (let i = 0; i >= n; i--) {
    console.log(str.repeat(i));
  }
  for (let i = 0; i >= n; i--) {
    console.log(space.repeat(n - i) + str.repeat(i));
  }
};
triangle(5);
