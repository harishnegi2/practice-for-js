// destructuring an array [...]

let arr = [1, 2, 3, 4, 5];
let [ ...e] = arr;
// console.log(arr); // 1


let user = ["John", "Doe", "horn" ]
// console.log(user[2]);

const obj = {
    name: "hshs",
    no : 7259142020,
    emai: "unko11@gmail.com",
    getCountry :()=>{return "India"}
}
const {no,getCountry,...ohter}= obj
// console.log(getCountry());

const useState = ["100",(x)=>{return x}];
const [val,setval] = useState;
// console.log(200);



// function is a reusable block of code


function addTwo(a,b){
    // console.log(a+b);   
     
}
addTwo(5,4)


let a ="ram";
let b = "Sita";

let c = a+b;
// console.log(c);

// let na = myFunction(10,15);node array.js(5,myFunction(10,15));
// console.log(n2);


if (true){
    let a2 = 5
}
// var a2 = 6

// function text(){
//     var a2 =7;
    
// }
console.log(a2);
// text()
