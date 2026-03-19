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
// console.log(a2);
// text()

// console.log("A"-1);
// console.log("harish"+"100");


var x = 4;
// console.log(x *2) ;
// console.log(x **2) ;

let u =5;
let v = 6;
[u,v] = [v,u];
// console.log(u,v);

// let arr1 = [1,2,3,4,5,6,7,8,9,10];  
// let [a1,b1,c1,...d1] = arr1;
// console.log(d1);


function myFunction(a,b){

    return (a*b);
}
let add = myFunction(5,2);
// console.log('add 5*2 ='+ z);


let std = ["harish","sahiba","Naresh","member"];
// function greet(you){
//     // return "Hello "+ you;
    // console.log('hello '+you+' i am your big fan')
//     // alert("hello "+std[3]+" search me")

// }
// greet(std[0])

// for(i=0;i<=3;i++){
//     greet(std[i])

// }


function myFun(name) {
    // console.log("hello "+name);
}
myFun("harish")


let myFunci = (web)=>{
    // console.log("welcome "+web+" to my computer");
    
}
myFunci('boys')



//                               Spread/copy operator


 
let op = ["AB","BC","CD","DA"]
let alu = ["ram","shayam","sita","reena"]
let mlu = [...alu,"sangeeta","seema","priyanka"]
let hlu = [...op,"mute", ...alu,"tute",...op]
// console.log(alu);
// console.log(mlu);
// console.log(hlu.length);


let student ={
    name : "Harish",
    branch : "Computer Science Engineering",
    subject : [{
        first : "HTML",
        sec : "CSS",
        third : "Javascript",
        four : "Database",
        five : "SQL",
    }],
    rollNo : "140772504",
    teachers : [{
        name1 :"Raja Negi",
        contact : "8541698530"
    },{
        name : "Amit Singh",
        contact : "8579431560"
    }]
}
// console.log(student);
// console.log(student.name+" Your course is " +student.branch);
// console.log(student.name+" Your Rollnumber is " +student.rollNo+ " Yes and No ?"); 
// console.log(student.teachers);
// console.log(student.teachers + "" +student.subject);


//                              difference between arrow function and normal function


const id ={
    name :"yuvika",

    arrowGreet: () => {
        console.log(`Arrow:hello ,${this.name}`); //lexical function 
    },
    normalGreet: function(){
        console.log(`normal:hello,${this.name}`);  //dynamic function
    },
};
// id.arrowGreet();
// id.normalGreet();

//                             loops in javascript

let feb =["energy","hosty","kind","loving","caring"];

for(){
    
}







