/** @format */

//mengerti apa itu palindrome
//mengetahui input dan outputnya (input string) (output boolean)
//apabila ada special character apakah perlu dihapus ? ex:"race car" => "racecar"

//strategi
// 1. hapus semua special character (red cat) => (redcat)
// 2. reverse hasil eleminasi special character (tacder)
// 3. membandingkan hasil dari eleminasi special char dengan hasil reversed. redcat == tacder ? false

//psuedocode
// store palindrome in variable => "madam madam"
// create array of alphabet [a,b,c,d,e,f,g,...,z]
// split palindrome letters into array => ["m","a","d","a","m"," ",m,"a","d","a","m"]
// filter palindrome letters into array
//              allow letters if letter is an alphabet => ["m","a","d","a","m",m,"a","d","a","m"]
// join palindrome array => "madammadam"
//  create variable reversed = palindrome reversed
// compare palindrome with reversed

let palindrome: string | string[] = "race, car";
const arrAlpha = "abcdefghijklmnopqrstuvwxyz".split(""); //[a,b,c,d,e,f,g,...]
palindrome = palindrome.split(""); // [r,a,c,e,","," ",c,a,r]
palindrome = palindrome.filter((letter: string) => arrAlpha.includes(letter)); //[r,a,c,e,c,a,r]
palindrome = palindrome.join(""); // racecar
const reversed: string = palindrome.split("").reverse().join("");

console.log(palindrome, reversed);
console.log(palindrome == reversed);

const test = (str: string) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "a") {
      return true;
    }
  }
};

test("a");
test("hello");
test("world");
test("hasdahskdashdkjahskdashdkjashdkjashdkjahskdahskdsahkdjashkj");
