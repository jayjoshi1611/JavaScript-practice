// ================================
// JavaScript Functions Practice
// Topic Covered:
// - Function Declaration
// - Parameters & Arguments
// - Return Statement
// - Default Parameters
// - Function Expression
// - Call Stack (Function Execution)
// ================================


// Function Declaration with parameters
function hotel(location, contact) {
    console.log("Jay Mahadev Hotel " + location + " Contact number: " + contact);
}

// Function Calls with arguments
hotel("Anand", 9099036120);
hotel("Gujarat", 9099036120);


// Function to calculate sum
function sum(num1, num2) {
    console.log(num1 + num2);
}

let num1 = 11;
let num2 = 11;
sum(num1, num2);


// Function with return value
function multiply(a, b) {
    return a * b;
}

let result = multiply(16, 11);
console.log(result);


// Function using template literals
function fullName(surname) {
    return `Jay ${surname}`;
}

console.log(fullName("Joshi"));


// Default parameter function
function greet(name = "User") {
    console.log("Hello " + name);
}

greet();


// Function Expression
const divide = function (a, b) {
    return a / b;
};

console.log(divide(4, 2));


// Call Stack Example
function main() {
    console.log("Jay");
    mahadev();
    console.log("Hotel");
}

function mahadev() {
    console.log("Mahadev");
}

main();
