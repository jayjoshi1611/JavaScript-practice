// ================================
// Day 4: Arrays Practice
// ================================

// 1️⃣ Creating Arrays
let fruits = ["Apple", "Banana", "Mango"];
console.log("Fruits Array:", fruits);

// 2️⃣ Accessing Array Elements
console.log("First Fruit:", fruits[0]); // Apple
console.log("Last Fruit:", fruits[fruits.length - 1]); // Mango

// 3️⃣ Modifying Array Elements
fruits[1] = "Orange";
console.log("Updated Fruits Array:", fruits);

// 4️⃣ Array Methods
fruits.push("Grapes"); // add at end
fruits.unshift("Pineapple"); // add at start
console.log("After push & unshift:", fruits);

fruits.pop(); // remove last
fruits.shift(); // remove first
console.log("After pop & shift:", fruits);

// 5️⃣ Looping through Arrays
console.log("Looping through fruits:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 6️⃣ Using Array in calculations
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let num of numbers) {
    sum += num;
}
console.log("Sum of numbers:", sum);
