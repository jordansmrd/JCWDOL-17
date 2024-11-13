/** @format */

// Write a function to get the lowest, highest and average value in the array (with and without sort function).
// Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
const lha = (numbers: number[]) =>
  console.log(
    Math.min(...numbers),
    Math.max(...numbers),
    (numbers.reduce((sum, n) => sum + n, 0) / numbers.length).toFixed(4)
  );

const lha2 = (numbers: number[]) => {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  let avg = 0;
  for (let i = 0; i < numbers.length; i++) {
    avg += numbers[i];
  }
  console.log(min, max, avg);
};

//reduce punya 2 parameter
// parameter 1 adalah callbackfunction : (prev,curr,index,array) => { return xxx }
// parameter 2 adalah initvalue dari parameter pertama dicallback functionnya

//apabila argument reduce hanya 1, maka looping start dari index 1]

lha([12, 5, 23, 18, 4, 45, 32]);
// numbers = [12, 5, 23, 18, 4, 45, 32]
//reduce salah satu function yg melakukan looping
//reduce memiliki parameter berbentuk function ( callback function )

// Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
// Example : arr =  ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
//["apple", "banana", "cherry", "date"] => "apple, banana,cherry, date"
//["apple", "banana", "cherry", "date"] => ["apple", "banana", "cherry", " and date"]
// ["apple", "banana", "cherry", " and date"] =>  "apple, banana,cherry, and date"
//map
//length = 4
//index terakhir adalah 3
const concatenating = (arr: string[]) =>
  console.log(
    arr.map((str, i) => (i == arr.length - 1 ? " and " + str : str)).toString()
  );

concatenating(["apple", "banana", "cherry", "date"]);
// Write a function from a given array of numbers and return the second smallest number
// Example : numbers = [5, 3, 1, 7, 2, 6] → 2
const smallest = (numbers: number[]) =>
  console.log(numbers.sort((a, b) => a - b)[1]);

smallest([5, 3, 1, 7, 2, 6]);
// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
// Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]

const sumSamePos = (numbers1: number[], numbers2: number[]) =>
  console.log(numbers1.map((n, i) => n + numbers2[i]));

sumSamePos([1, 2, 3], [3, 2, 1]);
// Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
// Example : arr = [1, 2, 3, 4], newElement = 4   →   [1, 2, 3, 4]
// Example : arr = [1, 2, 3, 4], newElement = 7   →   [1, 2, 3, 4, 7]

const addElement = (numbers: number[], element: number) =>
  console.log(numbers.indexOf(element) == -1 ? [...numbers, element] : numbers);

addElement([1, 2, 3, 4], 8);

// Write a function from a given array of mixed data types and return the sum of all the number
// Example : mixedArray = ["3", 1, "string", null, false, undefined, 2] → 3

const sumNumber = (mixed: any[]) =>
  console.log(
    mixed.reduce(
      (sum, element) => (typeof element == "number" ? sum + element : sum),
      0
    )
  );

sumNumber(["3", 1, "string", null, false, undefined, 2]);

// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input. (if the maximum size of the given input is 5 than the array can only contain 5 elements).
// Example :
// maxSize = 5, given integers is 5, 10, 24, 3, 6, 7, 8
// The function will return [5, 10, 24, 3, 6]

const insertNumbers = (max: number, ...numbers: number[]) =>
  console.log([...new Array(max)].map((n, i) => numbers[i]));

insertNumbers(5, 5, 10, 24, 3, 6, 7, 8);

// Write a function that will combine 2 given array into one array
// Example : arr1 = [1, 2, 3], arr2 =  [4, 5, 6] → [1, 2, 3, 4, 5, 6]

const combine = (arr1: number[], arr2: number[]) =>
  console.log(arr1.concat(arr2));

combine([1, 2, 3], [4, 5, 6]);

// Write a function to find duplicate values in an array
// Example : arr = [1, 2, 2, 2, 3, 3, 4, 5, 5] → [2, 3, 5]
const duplicate = (numbers: number[]) =>
  console.log(
    numbers.reduce(
      (arr: number[], val: number) =>
        numbers.filter((n) => n == val).length > 1 && arr.indexOf(val) == -1
          ? [...arr, val]
          : arr,
      []
    )
  );
duplicate([1, 2, 2, 2, 3, 3, 4, 5, 5]);

// Write a function to find the difference in 2 given array
// Example : arr1 = [1, 2, 3, 4, 5], arr2 =  [3, 4, 5, 6, 7] → [1, 2, 6, 7]

const diff = (arr1: number[], arr2: number[]) =>
  console.log(
    arr1
      .concat(arr2)
      .reduce(
        (arr: number[], val: number, i, currArr) =>
          currArr.filter((n) => n == val).length == 1 && arr.indexOf(val) == -1
            ? [...arr, val]
            : arr,
        []
      )
  );

diff([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);

// Based on the array below write a function that will return primitive data types only.                                             let arr = [1, [], undefined, {}, "string", {}, []];
// The function will return [1, undefined, “string”]
const primitive = (arr: any[]) =>
  console.log(arr.filter((element) => typeof element != "object"));

primitive([1, [], undefined, {}, "string", {}, []]);
// Write a function from the below array of number that will return sum of duplicate values.                                    let arr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
// The function will return 40

const sumDuplicate = (arr: number[]) =>
  arr.reduce(
    (sum, val) => (arr.indexOf(val) != arr.lastIndexOf(val) ? sum + val : sum),
    0
  );

console.log(sumDuplicate([10, 20, 40, 10, 50, 30, 10, 60, 10]));

// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'. The function will randomly pick between rock, paper, or scissor.
// Example: if you throw a rock as an argument and the function pick a scissor then it will return 'Win'

const computer = ["rock", "paper", "scissor"][Math.floor(Math.random() * 3)];

const rps = (user: string) =>
  console.log(
    `${user} vs ${computer} ${
      (user == "rock" && computer == "scissor") ||
      (user == "paper" && computer == "rock") ||
      (user == "scissor" && computer == "paper")
        ? "win"
        : user == computer
        ? "draw"
        : "lose"
    }`
  );

rps("paper");
