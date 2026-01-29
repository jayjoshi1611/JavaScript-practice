/***********************
 * OBJECT & METHOD
 ***********************/
const user = {
  name: "Jay",
  role: "Developer",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  }
};

user.greet();

/***********************
 * THIS KEYWORD
 ***********************/
const car = {
  brand: "Honda",
  start: function () {
    console.log(`${this.brand} car started`);
  }
};

car.start();

/***********************
 * PROTOTYPE
 ***********************/
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayAge = function () {
  console.log(`Age is ${this.age}`);
};

const p1 = new Person("Jay", 24);
p1.sayAge();

/***********************
 * INHERITANCE
 ***********************/
function Employee(name, age, salary) {
  Person.call(this, name, age);
  this.salary = salary;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getSalary = function () {
  console.log(`Salary is ${this.salary}`);
};

const emp1 = new Employee("Jay", 24, 30000);
emp1.sayAge();
emp1.getSalary();

/***********************
 * ENCAPSULATION
 ***********************/
function BankAccount(balance) {
  let _balance = balance;

  this.getBalance = function () {
    return _balance;
  };

  this.deposit = function (amount) {
    _balance += amount;
  };
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance());

/***********************
 * POLYMORPHISM
 ***********************/
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const dog = new Dog();
dog.speak();

/***********************
 * ABSTRACTION
 ***********************/
class Vehicle {
  start() {
    this.engine();
  }

  engine() {
    console.log("Engine started");
  }
}

const bike = new Vehicle();
bike.start();
