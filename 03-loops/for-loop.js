// ================================
// Day 3: Loops Practice
// ================================

// 1️⃣ For Loop
console.log("For Loop Example:");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}

// 2️⃣ While Loop
console.log("While Loop Example:");
let j = 1;
while (j <= 5) {
    console.log("Iteration:", j);
    j++;
}

// 3️⃣ Do-While Loop
console.log("Do-While Loop Example:");
let k = 1;
do {
    console.log("Iteration:", k);
    k++;
} while (k <= 5);

// 4️⃣ Using loops in calculations
let sum = 0;
for (let n = 1; n <= 5; n++) {
    sum += n; // sum = sum + n
}
console.log("Sum of 1 to 5:", sum);
