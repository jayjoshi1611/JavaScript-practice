/*************************
 * PURE FUNCTION
 *************************/
function add(a, b) {
  return a + b;
}

/*************************
 * IMPURE FUNCTION
 *************************/
let total = 0;
function addToTotal(value) {
  total += value;
}

/*************************
 * IMMUTABILITY
 *************************/
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // original array not changed

/*************************
 * FIRST CLASS FUNCTION
 *************************/
function greet() {
  return "Hello";
}

function sayHello(fn) {
  console.log(fn());
}

sayHello(greet);

/*************************
 * HIGHER ORDER FUNCTION
 *************************/
const nums = [1, 2, 3, 4];
const squared = nums.map(n => n * n);

/*************************
 * RECURSION
 *************************/
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

/*************************
 * WHY STRINGS ARE IMMUTABLE
 *************************/
let str = "hello";
str[0] = "H"; // no change
console.log(str);

/*************************
 * DECLARATIVE vs IMPERATIVE
 *************************/

// Imperative
let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}

// Declarative
const sum2 = nums.reduce((acc, val) => acc + val, 0);
