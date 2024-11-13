/** @format */

//brute force

const checkDuplicate = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}; //O(N^2)

console.log(checkDuplicate([1, 2, 3, 3]));
// arr[0]=> 1
// arr[1] => 2
// arr[2] => 3 return true

//optimize with extra memory
const checkDuplicateWithExtraMemory = (arr: number[]) => {
  const uniqueData = new Set(); //[1,2,3]
  for (let i = 0; i < arr.length; i++) {
    if (uniqueData.has(arr[i])) return true;
    uniqueData.add(arr[1]);
  }
  return false;
};
//tc = O(N)
//sc = O(N)

console.log(checkDuplicateWithExtraMemory([1, 2, 3, 3]));

const checkDuplicateWithoutExtraMemory = (arr: number[]) => {
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) return true;
  }
  return false;
};
console.log(checkDuplicateWithoutExtraMemory([1, 2, 3, 1]));
//sorting => [1,1,2,3]

const arr = [1, 2, 3, "hello", 5, 3, "world", 100, 101, 200];

const arr2 = [1, 2, 100, 3, 4, 5];
arr2.sort((a, b) => a - b); // [1,2,3,4,5,100]
// arr2.sort();

console.log(arr2);
