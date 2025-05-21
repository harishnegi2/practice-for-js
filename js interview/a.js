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


