// Functions with Parameters

let a = "honeydew";

function greet(a){
    // console.log("Hello, World!" + a);
}
greet(a);

function add(c,d){ 
    return c+d;
    
}
var r = add(5,6);
// console.log(r);

//                                     Control statement

let hour = 19;

//                                      1. If

if (hour<18){
    // console.log("Good Day");
}

//                                      2.if else
if (hour<18){
    // console.log("Good Day");
}else{
    // console.log("Good Evening");
}

//                                      3.else if
if (hour<18){
    // console.log("Good Day");
}else if(hour=19){
    // console.log("Good afternoon");

}else{
    // console.log("Good Evening");
}


//                                      4.switch case

let day = 4;

switch(day){
    case 0:
        // console.log("Sunday");
        break;
    case 1:
        // console.log("Monday");
        break;
    case 2:
        // console.log("Tuesday");
        break;
    case 3:
        // console.log("Wednesday");
        break;
    case 4:
        // console.log("Thursday");
        break;
    case 5:
        // console.log("Friday");
        break;
    case 6:
        // console.log("Saturday");
        break;
    default:
        // console.log("Invalid day"); 
}


let text;

switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
// console.log(text);



//                                      . Ternary Operator
let age = 19;
let canDrive = (age >= 18) ? "Yes, you can drive" : "No, you cannot drive";
// console.log(canDrive);


//                                     5. For Loop

const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text1 = "";
for (let i = 0; i < cars.length; i++) {
  text1 += cars[i] + "\n";
}
// console.log(text1);


//                                     6. while Loop
let i = 3;
while (i <= 2) {
    console.log("Big number");
    i++;
}


//                                    7. do while Loop
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);
