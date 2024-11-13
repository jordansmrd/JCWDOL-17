/** @format */

const fruits: string[] = ["banana", "apple", "jackfruit", "apple"];
const distinctFruits: string[] = [];
console.log(fruits);

const newFruits = new Set(fruits);
console.log(newFruits);

newFruits.add("duren"); //menambahkan value ke dalam set collections
newFruits.delete("banana"); //menghapus value dalam set
console.log(newFruits);
console.log(newFruits.has("apple"));

// newFruits.clear(); // menghapus semua data dalam set

console.log(newFruits);
console.log(newFruits.size); //mengetahui ada berapa banyak data dalam set

newFruits.forEach((value, i, set) => {
  console.log(value, i, set);
  distinctFruits.push(value);
});

console.log(newFruits.entries());
console.log(Object.fromEntries(newFruits.entries())); //{ apple: 'apple', jackfruit: 'jackfruit', duren: 'duren' }

console.log(distinctFruits);

// const objSet = {
//   banana: "banana",
//   apple: "apple",
//   jackfruit: "jackfruit",
//   //   apple: "apple",
// };

// console.log(objSet);
