console.log("hellow jay");
console.log("Node is working");
console.log("Jay"+" "+"Joshi");

var name = "Jay";
var age = "25";
console.log(name);
console.log(age);

var college;
college= "GCET college";
console.log(college);

var college;  // re-assignment
college= "GCET college vvn";
console.log(college);

let Age = 24;
    Age = 25;
console.log(Age);

console.log(typeof(Age));

let x=10;
    x=2;
console.log(x);    
let y=10;                   // assignment operator means we assign a value    
    y+=2;
    y-=5;
console.log(y);    

let z=10;
    z++;            // arithmatic op. ++(inc op +1)  --(dec op -1)
console.log(z);
let a=10;
    a--;
console.log(a);    

console.log(16=="16"); // num and string but value same COMPARISION OP
                       // == true != isn't eqls to > <  TRUE AND FALSE
                       
let aGe=17;
if (aGe >= 18){
    console.log("You are allowed to watch this movie");
}else{
    console.log("You arn't allowed");
}
                       
const marks=73;
if (marks>=34){
    console.log("Pass");
}else {
    console.log("Fail");
}


let day = 4;
switch (day){
    case 1:
        console.log("Monday");
    break;
    case 2:
        console.log("Tuesday");
    break;
    case 3:
        console.log("Wednesday");
    break;
    case 4:
        console.log("Thursday");
    break;
    case 5:
        console.log("Friday");
    break;
    case 6:
        console.log("Saturday");
    break;
    case 7:
        console.log("Sunday");
    break;
    default:
        console.log("Invalid Day");
}

for(let i=1;i<=5;i++){
    console.log(i);
}

for(let i=5;i>=0;i--){
    console.log(i);
}

let A=5;
let B=8;
let C=1;

if(A>B && A>C){
    console.log("A is largest number");
}else if(B>C && B>A){
    console.log("B is largest number");
}else{
    console.log("C is largest number");
}

let pattern="";
for(let i=1;i<=6;i++){
    pattern=pattern+"$";
    console.log(pattern);
}

for(let i=1;i<=4;i++){
   console.log("****");      // from 1 loop
}

for(let row=1;row<=4;row++){
    line="";
    for(let col=1;col<=4;col++){
        line=line+"*";                  //with 2 loops
    }
    console.log(line);
}


for(let row=1;row<=4;row++){
    line="";
    for(let col=1;col<=row;col++){
        line=line+"* ";
    }
    console.log(line);
}

let person={
          name:"Jay",
          age: 25
};
console.log(person.name);  // dot notation method 
console.log(person.age);   // bracket method console.log(person["name"]);

const Person = {name:"Jay",age:25};

for(let key in Person){                        // for..in loop
    console.log(key,Person[key]);
};

let person1 ={
            name : "Jay",
            address:{city:"Anand",State:"Gujarat",Country:"India"}  
}     // nested

console.log(person1.address.city);

person1.address.city="ANAND"; // modify
console.log(person1.address.city);

person1.pincode = 388120;
console.log(person1);      // add

delete person1.pincode;
console.log(person1);    // dlt


let person2={
          name:"Jay",
          age: 25,
          greet : function(){
            console.log("I am " + this.name)
        }
};                                   // this object
person2.greet();

const fruits = new Set(["apple","banana","watermelon","banana","apple","grapes"]);
console.log(fruits);     // Set (no duplicates)

fruits.add("pineapple");
console.log(fruits);   // add in set
fruits.delete("banana");
console.log(fruits);  // dlt in set

// .has for check value

console.log(Person);
const Person3 = JSON.stringify(Person);
console.log(Person3);        // object to JSON conversion

const Person4 = JSON.parse(Person3);
console.log(Person4);     // JSON to Object 


function hotel(location , contact){   // <--- single parameters
    console.log("Jay Mahadev Hotel " + location + " Contact number: " + contact);   // function
}

hotel("Anand",9099036120);   // arguments
hotel("Gujarat",9099036120);  
// multiple param

function sum(num1,num2){
    console.log(num1 + num2);
}

let num1=11;
let num2=11;   // calculator
sum(num1,num2);

function multiple(a,b){
    return a * b ;
}

let Multiple= multiple(16,11);
console.log(Multiple);         // return fnc

function Name(surname){
    return `Jay ${surname}`
}
console.log(Name("Joshi"));    // backtick and templet string

function name1(name="User"){
    console.log("Hello " + name );
}
name1();         // default parameter

const div=function(a,b){
    return a/b;
}
console.log(div(4,2));  // func expression

// call stack function

function main(){
    console.log("Jay");
    mahadev();
    console.log("Hotel");
}

function mahadev(){
    console.log("Mahadev");
}

main();
















