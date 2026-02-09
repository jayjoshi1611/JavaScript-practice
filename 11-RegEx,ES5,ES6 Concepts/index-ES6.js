// ===============================
// ES6 JAVASCRIPT PRACTICE
// ===============================

// let & const
let city = "Udaipur";
const country = "India";

console.log(city);
console.log(country);

// Arrow Function
const multiply = (a, b) => a * b;
console.log("Multiply:", multiply(4, 5));

// Template Literal
let user = "Jay";
console.log(`Hello ${user}, welcome to ES6!`);

// Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2);

// Rest Operator
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log("Sum:", sum(1, 2, 3, 4));

// Destructuring
let person = {
  name: "Jay",
  age: 25
};

let { name, age } = person;
console.log(name);
console.log(age);
