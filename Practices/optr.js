// There are there type logical operators in JavaScript: AND (&&), OR (||) and NOT (!).


// 1.The AND operator (&&) returns true if both operands are true, otherwise it returns false.
// 2.The OR operator (||) returns true if at least one of the operands is true, otherwise it returns false.
// 3.The NOT operator (!) returns true if the operand is false, and false if the operand is true.

// thypeof operator
let val1 = 5;
let val2 = "harish";
// console.log(typeof val1); // number
// console.log(typeof val2); // string

// Example usage of logical operators
let a = true;
let b = false;
// console.log(a && b); // false
// console.log(a || b); // true
// console.log(!a);     // false
// console.log(!b);     // true

// Example usage of typeof operator
// console.log(typeof a); // boolean
// console.log(typeof b); // boolean

// Example usage of logical operators
let x = 10;
let y = 20;
// console.log((x > 5) && (y < 25)); // true
// console.log((x < 5) || (y < 15)); // false
// console.log(!(x === 10));          // false
// Example usage of typeof operator
// console.log(typeof x); // number
// console.log(typeof y); // number

// function is a reusable block of code
function multiply(a,b){
    return a*b;   
     
}   
let result = multiply(5,4);
// console.log(result); // 20   


let firstName ="John";
let lastName = "Doe";   
let fullName = firstName + " " + lastName;
// console.log(fullName); // John Doe
// console.log(multiply(7,3)); // 21
// console.log("Hello, " + firstName + "!"); // Hello, John!
// console.log("The result of 10 + 5 is: " + (10 + 5)); // The result of 10 + 5 is: 15
// console.log("5" + 10); // "510" (string concatenation)
// console.log("5" - 2);  // 3 (numeric subtraction)
// console.log("10" * 2); // 20 (numeric multiplication)
// console.log("20" / 4); // 5 (numeric division)
// console.log("10" + "5"); // "105" (string concatenation)
// console.log("10" - "5"); // 5 (numeric subtraction)
// console.log("10" * "2"); // 20 (numeric multiplication)
// console.log("20" / "4"); // 5 (numeric division)

// let n2 = myFunction(10,15);
// function myFunction(a,b){
//     return a+b;
// }
// console.log(n2); // 25


let aru = "7";
// console.log(aru instanceof String); // false, because "7" is a primitive string, not an instance of String

let valu1 = "hasi";
let valu2 = BigInt("12972395284");
let valu3 = null;
valu3 = 9;
// console.log(valu1.length);
// console.log(valu3);


// int and let are used to declare variables in JavaScript. The main difference between them is that int is not a valid keyword in JavaScript, while let is used to declare block-scoped variables.


let string = "Welcome to JavaScript!";
console.log(string.length); 
console.log(string.toLocaleUpperCase());
console.log(string.charAt(6));
console.log(string.repeat(2));