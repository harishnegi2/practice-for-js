// function defination
// function getName(name){
//     console.log("Hello " + name);
    
// }
// // function calling
// getName("ahmed");


function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
//   console.log("Goodbye!");
}

// greet("Harish", sayBye);




// Real-world example: Using setTimeout (Async)

setTimeout(function() {
  console.log("Executed after 2 seconds");
}, 2000);

// 📌 Arrow function as a callback:

setTimeout(() => {
  console.log("Arrow function callback");
}, 1000);
// 🔄 Use Case in Array methods:

let numbers = [1, 2, 3];
numbers.forEach(function(num) {  
  console.log(num * 2);
});