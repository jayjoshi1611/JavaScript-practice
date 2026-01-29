/*************************
 * THIS KEYWORD - BASIC
 *************************/
const person = {
  name: "Jay",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet();

/*************************
 * THIS INSIDE FUNCTION
 *************************/
function showThis() {
  console.log(this);
}

showThis(); // global / undefined (strict mode)

/*************************
 * THIS WITH setTimeout
 *************************/
const user = {
  name: "Jay",
  sayName: function () {
    setTimeout(function () {
      console.log(this.name); // undefined
    }, 1000);
  }
};

user.sayName();

/*************************
 * FIXING this USING bind
 *************************/
const user2 = {
  name: "Jay",
  sayName: function () {
    setTimeout(function () {
      console.log(this.name);
    }.bind(this), 1000);
  }
};

user2.sayName();

/*************************
 * call()
 *************************/
function greet(city) {
  console.log(`Hello ${this.name} from ${city}`);
}

const person1 = { name: "Jay" };

greet.call(person1, "Udaipur");

/*************************
 * apply()
 *************************/
greet.apply(person1, ["Udaipur"]);

/*************************
 * bind()
 *************************/
const boundGreet = greet.bind(person1, "Udaipur");
boundGreet();

/*************************
 * call vs apply vs bind
 *************************/
// call   -> immediate execution, arguments separately
// apply -> immediate execution, arguments as array
// bind  -> returns new function, does not execute immediately
