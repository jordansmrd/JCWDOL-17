/** @format */

const car1 = {
  brand: "BMW",
  model: "M135I xDrive",
  price: 800000000,
  color: "black",
};

const car2 = {
  brand: "Toyota",
  model: "Innova",
  price: 500000000,
};

console.log(car1, car2);

car2.origin = "japan"; // cuma bisa dilakukan sama javascript
car2.greet = () => console.log("hello");

console.log(car2);
car2.greet();

//declare function berbeda dengan calling function

const fnTest = () => {
  return "ini hasil return function";
};
console.log(fnTest); //calling variable
console.log(fnTest()); //calling function
