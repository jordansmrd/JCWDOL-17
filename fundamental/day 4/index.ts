/** @format */

let arr: (string | number)[] = [];
arr.push("4");
arr.push(5);

console.log(arr);

let arr2 = new Array(3, 4, 5);
console.log(arr2);

for (const index in arr2) {
  console.log(index, "index");
}

for (const element of arr2) {
  console.log(element, "element");
}
