// ===============================
// REGEX PRACTICE
// ===============================

// Basic match
let text = "Hello World";
let pattern = /World/;
console.log(pattern.test(text));

// Numbers only
let numberRegex = /^[0-9]+$/;
console.log(numberRegex.test("12345"));
console.log(numberRegex.test("123a"));

// Email validation
let email = "jay@gmail.com";
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log("Valid Email:", emailRegex.test(email));

// Phone number (10 digits)
let phone = "9876543210";
let phoneRegex = /^[0-9]{10}$/;
console.log("Valid Phone:", phoneRegex.test(phone));

// match & replace
let msg = "My OTP is 4567";
console.log(msg.match(/\d+/));
console.log(msg.replace(/\d+/, "****"));
