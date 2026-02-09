// ================================
// Day 4(1): Loops Patterns Practice
// ================================

// 1️⃣ Star Pattern
console.log("Star Pattern:");
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

// 2️⃣ Number Pattern
console.log("Number Pattern:");
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}

// 3️⃣ Reverse Number Pattern
console.log("Reverse Number Pattern:");
for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}
