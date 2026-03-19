//                                              for loop
// let a = 1;
// for (let i = 0; i < 15; i++) {
//     console.log(a+i);
// } 



//                                              
// let body = {
//     name :'harish',
//     role :'software engineering',
//     com :'singh.123',
// }
// for (const key in body) {
//         const element = body[key];
//         console.log(key,element);
//     }

// forin use (object),forof use (Array)

let number = 1;

for (let i = 7; i <= 10; i++) {
    const element = number[i];
    // console.log(i);
    
}


//                      for of loop

// for(i=0;i<=5;i++){
//     console.log(i);  
// }


//                  while loop
// let i = 1;
//  while(i<=4){
//     console.log(i);
//     i++;
//  }


//                 do while loop
// let i = 1;
// do{  
//     console.log(i);
//     i++;
// }while(i<=5);
// console.log("hello");


//                break and continue
// for(i=1;i<=10;i++){
//     if (i===5){
//         break;
//     }
//      console.log(i);
// }


// for(i=1;i<=10;i++){
//     if (i===5){
//         console.log("5 is not goint print");
//         continue;
//     }
//      console.log(i);
// }


//       array iteration using for of loop

// let fruits = ['apple','mango','grapes','banana'];
// for(i=0; i<fruits.length; i++){
//     console.log(fruits[i]);

// }

let persom ={
    name :'harish',
    age : 22,
    role :'software engineering',
    com :'singh.123',
}

let F = ['apple','mango','grapes','banana',persom];

// console.log(F[4].role);

// reduce in js
// let arr = [1,2,3,4];
// let sum = arr.reduce((acc,cur)=>{
//     acc = acc + cur;
//     return acc;
// },0)
// console.log(sum);

const number1 = [1,2,3,4,5];

const sum  = number1.reduce((prev,item)=>{
    return prev + item;
},5);
// console.log(sum);


// Condition statement
let age = 17;
if(age>=18){
    // console.log("you are eligible for vote");
}else{
    // console.log("you are not eligible for vote");
}


let marks = 84;

if(marks>=85){
    console.log("+");
}else{
    console.log("-"); 
}