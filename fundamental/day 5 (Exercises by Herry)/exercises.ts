// Part 1
// No 1

const checkNum = (...argue: number[]) => {
  let temp1: number = 0,
    temp2: number = 0;
  let numLow: number = 0,
    numHigh: number = 0,
    avg: number = 0;

  for (let i = 0; i < argue.length; i++) {
    for (let j = 0; j < argue.length - i; j++) {
      if (argue[j] > argue[j + 1]) {
        temp1 = argue[j];
        temp2 = argue[j + 1];
        argue[j + 1] = temp1;
        argue[j] = temp2;
      }
    }
  }
  numLow = argue[0];
  numHigh = argue[argue.length - 1];
  let sum: number = 0;
  for (let i = 0; i < argue.length; i++) {
    sum += argue[i];
  }

  avg = sum / argue.length;
  return `Lowest Number = ${numLow}\nHighest Number = ${numHigh}\nAverage = ${avg}`;
};

const checkNum2 = (...argue: number[]) => {
  let numLow: number = 0,
    numHigh: number = 0,
    avg: number = 0;
  argue.sort((a, b) => a - b);
  numLow = argue[0];
  numHigh = argue[argue.length - 1];
  let sum: number = 0;
  for (let i = 0; i < argue.length; i++) {
    sum += argue[i];
  }

  avg = sum / argue.length;
  return `Lowest Number = ${numLow}\nHighest Number = ${numHigh}\nAverage = ${avg}`;
};

console.log("Jawaban Page 1 No 1\n");
console.log("Hasil tanpa function Sort\n", checkNum(12, 5, 23, 18, 4, 45, 32));
console.log(
  "Hasil dengan function sort\n",
  checkNum2(12, 5, 23, 18, 4, 45, 32)
);

// No 2

const wordSep = (...argue: string[]) => {
  let newWord: String = "";
  for (let i = 0; i < argue.length; i++) {
    if (i == argue.length - 1) newWord += `and ${argue[i]}`;
    else newWord += `${argue[i]}, `;
  }
  return newWord;
};

console.log("Jawaban Page 1 No 2\n");
console.log(wordSep("apple", "banana", "cherry", "date"));

// No 3
const secNumSch = (...arg: number[]) => {
  arg.sort((a, b) => a - b);
  return arg[1];
};

console.log("Jawaban Page 1 No 3\n");
console.log(secNumSch(5, 3, 1, 7, 2, 6));

// No 4
const sumArr = (arr1: number[], arr2: number[]) => {
  let newArr: number[] = [];

  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i] + arr2[i]);
  }
  return newArr;
};

console.log("Jawaban Page 1 No 4\n");
console.log(sumArr([1, 2, 3], [3, 2, 1]));

// No 5

let arrSet: number[] = [1, 2, 3, 4];
const arrAdd = (...arg: number[]) => {
  let state: boolean = false;
  for (let i = 0; i < arg.length; i++) {
    for (let j = 0; j < arrSet.length; j++) {
      if (arg[i] != arrSet[j]) {
        state = true;
      } else state = false;
    }
    // console.log(state)
    if (state == true) {
      arrSet.push(arg[i]);
    }
  }
  return arrSet;
};

console.log("Jawaban Page 1 No 5\n");
console.log(arrAdd(4));
console.log(arrAdd(5));
console.log(arrAdd(5));
// console.log(arrAdd(7))

// Part 2
// No 1

const mixedArr = (...arr: (string | number | boolean | null | undefined)[]) => {
  let total: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    if (typeof arr[i] == "number") {
      total += Number(arr[i]);
    } else continue;
  }

  return total;
};

console.log("Jawaban Page 2 No 1\n");
console.log(mixedArr("3", 1, "string", null, false, undefined, 2));

// No 2

const givNMaxArr = (maxArr: number, ...arg: number[]) => {
  // console.log(arg);
  return arg.splice(0, maxArr);
};

console.log("Jawaban Page 2 No 2\n");
console.log(givNMaxArr(5, 5, 10, 24, 3, 6, 7, 8));

// No 3
const comArr = (num1: number[], num2: number[]) => {
  return num1.concat(num2);
};

console.log("Jawaban Page 2 No 3\n");
console.log(comArr([1, 2, 3], [4, 5, 6]));

// No 4

const dupArr = (...arg: number[]) => {
  let newArr: number[] = [];
  let count: number[] = [];
  for (let i = 0; i < arg.length; i++) {
    if (count[arg[i]]) count[arg[i]] += 1;
    else count[arg[i]] = 1;
  }

  for (let prop in count) {
    if (count[prop] >= 2) {
      newArr.push(parseInt(prop));
    }
  }

  return newArr;
};

console.log("Jawaban Page 2 No 4\n");
console.log(dupArr(1, 2, 2, 2, 3, 3, 4, 5, 5));

// No 5

const arrDiff = (arr1: number[], arr2: number[]) => {
  let arrCom: number[] = arr1
    .filter((e) => !arr2.includes(e))
    .concat(arr2.filter((e) => !arr1.includes(e)));
  return arrCom;
};

console.log("Jawaban Page 2 No 5\n");
console.log(arrDiff([1, 2, 2, 4, 5], [3, 4, 5, 6, 7]));

// Part 3
// No 1

let arrq1 = [1, [], undefined, {}, "string", {}, []];

function nArr([]) {
  // let newArr = []

  //     for(let i = 0 ; i < arrq1.length; i++){
  //       if(typeof arrq1[i] == 'number' || typeof arrq1[i] == 'string' || typeof arrq1[i] == 'boolean' || typeof arrq1[i] == 'undefined' || typeof arrq1[i] == null){
  //           newArr.push(arrq1[i])
  //       }
  //     }

  const newArr = arrq1.filter((e) => {
    if (
      typeof e == "number" ||
      typeof e == "string" ||
      typeof e == "boolean" ||
      typeof e == "undefined" ||
      typeof e == null
    )
      return true;
  });
  return newArr;
}

console.log("Jawaban Page 3 No 1\n");
console.log(nArr(arrq1));

// No 2
let arrq2 = [10, 20, 40, 10, 50, 30, 10, 60, 10];

const sumDupArr = (arr: number[]) => {
  let count: number[] = [];
  let sum: number = 0;

  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) count[arr[i]] += 1;
    else count[arr[i]] = 1;
  }

  for (let i in count) {
    if (count[i] > 1) {
      sum += Number(i) * count[i];
    }
  }

  return sum;
};

console.log("Jawaban Page 3 No 2\n");
console.log(sumDupArr(arrq2));

// No 3

const game = (str: string) => {
  const arrGame: string[] = ["rock", "paper", "scissor"];
  const gameRandom = arrGame[Math.floor(Math.random() * (arrGame.length - 1))];

  if (str == "rock" && gameRandom == "paper") return "Lose";
  else if (str == "rock" && gameRandom == "scissor") return "Win";
  else if (str == "rock" && gameRandom == "rock") return "Same";

  if (str == "paper" && gameRandom == "paper") return "Same";
  else if (str == "paper" && gameRandom == "scissor") return "Lose";
  else if (str == "paper" && gameRandom == "rock") return "Win";

  if (str == "scissor" && gameRandom == "paper") return "Win";
  else if (str == "scissor" && gameRandom == "scissor") return "Same";
  else if (str == "scissor" && gameRandom == "rock") return "Lose";
};

console.log("Jawaban Page 3 No 3\n");
console.log(game("scissor"));
