/** @format */

//bubble sort

const bubbleSort = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j + 1] < arr[j]) [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
    }
  }
  return arr;
};

console.log(bubbleSort([5, 3, 8, 4, 6]));
//arr[i] = 5

//i=0
//arr[1] < arr[0] ? [5,3] => [3,5] (3, 5, 8, 4, 6)
//arr[2] < arr[1] ? [5,8] => [5,8] (3, 5, 8, 4, 6)
//arr[3] < arr[2] ? [8,4] => [4,8] (3, 5, 4, 8, 6)
//arr[4] < arr[3] ? [8,6] => [6,8] (3, 5, 4, 6, 8)

//i=1
//arr[1] < arr[0] ? [5,4] => [4,5] (3, 4, 5, 6, 8)
//arr[2] <arr[1] ? (3, 4, 5, 6, 8)
//arr[3] <arr[2] ? (3, 4, 5, 6, 8)
//arr[4] <arr[3] ? (3, 4, 5, 6, 8)

//i=2
//arr[1] <arr[0] ? (3, 4, 5, 6, 8)
//arr[2] <arr[1] ? (3, 4, 5, 6, 8)
//arr[3] <arr[2] ? (3, 4, 5, 6, 8)
//arr[4] <arr[3] ? (3, 4, 5, 6, 8)

//i=3
//arr[1] <arr[0] ? (3, 4, 5, 6, 8)
//arr[2] <arr[1] ? (3, 4, 5, 6, 8)
//arr[3] <arr[2] ? (3, 4, 5, 6, 8)
//arr[4] <arr[3] ? (3, 4, 5, 6, 8)

//i=4
//arr[1] <arr[0] ? (3, 4, 5, 6, 8)
//arr[2] <arr[1] ? (3, 4, 5, 6, 8)
//arr[3] <arr[2] ? (3, 4, 5, 6, 8)
//arr[4] <arr[3] ? (3, 4, 5, 6, 8)

//return arr = [3, 4, 5, 6, 8]

const selectionSort = (arr: number[]) => {
  let min: number | undefined;

  for (let i = 0; i < arr.length; i++) {
    min = i; // 0
    //min = 7
    for (let j = i + 1; j < arr.length; j++) {
      //get smallest
      //j= 7
      if (arr[j] < arr[min]) min = j;
      //min = 7
    }

    if (min != i) [arr[i], arr[min]] = [arr[min], arr[i]];
    // 3 != 0 ? [29,13] = [13,29]
    // 3 != 1 ? [72,29] = [29,72]
    //8 != 2 ? [98,36]= [36,98]
    //7 != 3 ? [72,51] = [51,72]
    //6 != 4 ? [87,52] = [52,87]
    //7 != 5 ? [87,72] = [72,87]
    // 7 != 7? false
  }
  return arr;
};

console.log(selectionSort([29, 72, 98, 13, 87, 66, 52, 51, 36]));
//[13, 29, 36, 51, 52, 66, 72,87, 98]

console.log([29, 72, 98, 13, 87, 66, 52, 51, 36].sort((a, b) => a - b));
