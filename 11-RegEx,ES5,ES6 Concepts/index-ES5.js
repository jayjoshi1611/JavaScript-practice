// ===============================
// ES5 JAVASCRIPT PRACTICE
// ===============================

// Variables
var name = "Jay";
var age = 25;
console.log("Name:", name);
console.log("Age:", age);

// Data Types
var number = 10;
var text = "Hello";
var isActive = true;
var nothing = null;
var notDefined;

console.log(typeof number);
console.log(typeof text);
console.log(typeof isActive);
console.log(nothing);
console.log(notDefined);

// Operators
var a = 10;
var b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Comparison
console.log(5 == "5");   // true
console.log(5 === "5");  // false

// Function
function add(x, y) {
  return x + y;
}
console.log("Sum:", add(5, 6));

// Loop
for (var i = 1; i <= 5; i++) {
  console.log("Loop:", i);
}

// Array
var fruits = ["Apple", "Banana", "Mango"];
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
