/** @format */

const myMap = new Map();

myMap.set("David", "001");
myMap.set("Buchanan", "02");
myMap.set("Buchanan", "03");

for (const [key, value] of myMap) {
  console.log(key, value);
}

console.log(myMap.get("David"));

//yang terpenting dalam map adalah kita mengetahui keynya untuk dapat value
console.log(myMap.entries());
console.log(myMap.has("Buchanan"));

const a = {
  name: "udin",
  age: 20,
};

const { name, age } = a;

console.log(name, age, a.name);

const b = [1, 2];
const [pertama, kedua] = b;
console.log(pertama, kedua, b[1]);
