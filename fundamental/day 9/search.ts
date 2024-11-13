/** @format */

//linear search

const linearSearch = (arr: number[], x: number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == x) return i;
  }
  return -1;
};

console.log(linearSearch([2, 20, 10, 3], 20));

//binary search

const binarySearch = (
  arr: number[],
  l: number,
  range: number,
  x: number
): number => {
  if (range >= l) {
    let mid = l + Math.floor((range - l) / 2); // 2, 3
    if (arr[mid] == x) return mid; //false 3
    if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x); //false
    return binarySearch(arr, mid + 1, range, x); // binarySearch(arr, 3, 4, 10)
  }
  return -1;
};
let arr = [2, 3, 4, 10, 40];
let x = 10;

console.log(binarySearch(arr, 0, 4, x));
