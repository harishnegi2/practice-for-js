// function x(){
//           let a = 3;
//           function y(){
//             console.log(a);
//           }
//           return y;
//         }
//         const z = x();
//         z();
      
//                                               hosting
// console.log(a);
// var a = 3;

// hosting is a mechanism in JavaScript where variable and function declarations are moved to the top of their containing scope during the compile phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.
// In the example above, the variable 'a' is hoisted to the top of the scope, but its value is not assigned until later in the code. Therefore, when you try to log 'a' before its declaration, it will return 'undefined' instead of throwing an error.
// This is because the variable 'a' is declared but not initialized at that point in the code.
// The output of the code will be:      
// undefined
// 3


// console.log(myVar); // undefined
// var myVar = 10;

// console.log(myVar); // "This function is hoisted!



//                            API fetch
// let button = document.getElementById("search-button")
// let input = document.getElementById("city-input")


// button.addEventListener("click",()=>{
//   console.log(input.value);
  
// }) 

 

// Variables 

// In JavaScript, variables can be declared using 'var', 'let', or 'const'.
// 'var' is function-scoped or globally-scoped, 'let' and 'const' are block-scoped.
// 'const' is used for variables that should not be reassigned, while 'let' can be reassigned.
// Example of variable declaration and scope
//  var x = 10; // function or global scope
//  let y = 20; // block scope
// const z = 30; // block scope, cannot be reassigned
// Example of variable hoisting
//  console.log(x); // undefined
// var x = 10; // variable declaration is hoisted, but assignment is not
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
//  let y = 20; // 'let' and 'const' declarations are not ho
// isted
//  console.log(z); // ReferenceError: Cannot access 'z' before initialization
// const z = 30; // 'let' and 'const' declarations are not ho
// isted
// Example of variable shadowing
// function outer() {
//   var x = 10; // outer scope variable



let a;
let a1 = 6;
let b =null;
let b1 ="null";

//   console.log(typeof a);
//   console.log(typeof a1);
//   console.log(typeof b);
//   console.log(typeof b1);




