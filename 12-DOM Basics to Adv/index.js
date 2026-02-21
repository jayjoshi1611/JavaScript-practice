/***********************
  1️⃣ DOM Introduction
************************/

console.log(document);
console.log(document.body);
console.log(document.body.innerText);

/***********************
  2️⃣ Selecting Elements
************************/

let heading = document.getElementById("title");
console.log(heading);

let paras = document.getElementsByClassName("text");
console.log(paras);

let firstPara = document.querySelector(".text");
console.log(firstPara);

let allParas = document.querySelectorAll(".text");
console.log(allParas);

/***********************
  3️⃣ Changing Content
************************/

heading.innerText = "DOM Mastered 😎";
heading.innerHTML = "<i>DOM Mastered with innerHTML</i>";

console.log(heading.textContent);

/***********************
  4️⃣ Attributes
************************/

heading.setAttribute("class", "redText");
console.log(heading.getAttribute("class"));
heading.removeAttribute("class");

/***********************
  5️⃣ Style & ClassList
************************/

let toggleBtn = document.querySelector("#btn2");
let heading1 = document.querySelector("#title1");

toggleBtn.addEventListener("click", function () {
  heading1.classList.toggle("redText");
});

/***********************
  6️⃣ Creating & Removing Elements
************************/

let addBtn = document.querySelector("#btn3");
let container = document.querySelector("#container");

addBtn.addEventListener("click", function () {
  let para = document.createElement("p");
  para.innerText = "This paragraph is made by JS";
  container.append(para); // append
});

let removeBtn = document.querySelector("#removeBtn");
removeBtn.addEventListener("click", function () {
  if (container.lastElementChild) {
    container.lastElementChild.remove();
  }
});

/***********************
  7️⃣ DOM Traversing
************************/

let p1 = document.querySelector("#para1");
console.log(p1.parentElement);
console.log(p1.nextElementSibling);
console.log(p1.previousElementSibling);

/***********************
  8️⃣ Events & Event Object
************************/

let button = document.querySelector("#btn");

button.addEventListener("click", function (event) {
  console.log("Button clicked");
  console.log(event); // event object
});

/***********************
  9️⃣ Input Handling
************************/

let input = document.querySelector("#nameInput");
let submitBtn = document.querySelector("#btn1");

submitBtn.addEventListener("click", function () {
  heading.innerText = "Hello " + input.value + " 😄";
  input.value = "";
});

/***********************
 🔟 Event Delegation (Advanced)
************************/

document.querySelector("#container").addEventListener("click", function (e) {
  console.log("Container clicked");
});