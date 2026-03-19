// function defination
// function getName(name){
//     console.log("Hello " + name);
    
// }
// // function calling
// getName("ahmed");


function greet(name, callback) {
  // console.log("Hi " + name);
  callback();
}

function sayBye() {
//   console.log("Goodbye!");
}

// greet("Harish", sayBye);




// Real-world example: Using setTimeout (Async)

setTimeout(function() {
  // console.log("Executed after 2 seconds");
}, 2000);

// 📌 Arrow function as a callback:

setTimeout(() => {
  // console.log("Arrow function callback");
}, 1000);
// 🔄 Use Case in Array methods:

let numbers = [1, 2, 3];
numbers.forEach(function(num) {  
  // console.log(num * 2);
});




function sadi(){
  // console.log("meri sadi hai 27 ko");
}
sadi();

function sum(a,b){
  return a+b;
}
let result =sum(5,10);
// console.log(result);




// Arrow Function 

let sub = (a, b) => {
  return a - b;
};
// console.log(sub(4, 2));

// concise arrow function
let mul = (a, b) => a * b;
// console.log(mul(3, 4));

let div = (x,y) => x/y;
// console.log(div(10,2));



let collage = (sdg) => ({
  name : "Harish",
  school : "10th",
  subject : "Maths",
});
// console.log(collage());
// console.log(collage().name);

let thisKey = () => this;
// console.log(thisKey); 


function Shop(Product, Price){
  this.Product = Product;
  this.Price = Price;
}
let myShop = new Shop("Tea", "250");
// console.log(myShop);


// function contructor
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayHello = function(){
    console.log("hello:" + this.name);
    
  }
}


let person = new Person("Harish", 25);
person.sayHello();