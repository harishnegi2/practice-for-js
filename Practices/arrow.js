// const user ={
//     name : "Harish",
//     price: 555,

//     addUser:function () {
//         console.log(`${this.name},wlc to site`);
//     }
// }
// user.addUser()
// user.name = "dinesh";
// user.addUser()



//   Scope 

// let a = 20;
// if (true) {
//     let a = 5;
    // const b = 7;
    // var c = 10;
    // console.log("first: ",a);  
// }
// console.log(a);
// console.log(b);
// console.log(c);


// let i = 6;
// if(i>5){
//     // console.log("right dicison")
// }else{
//         // console.log("wrong dicison")
//     }
    
// function addone(num){
    
//     return num * 6
// }
// console.log(addone(25));



//                arrow function ,this
// this = current context to reffer krta hai


// const client = {
//     name : "Harish",
//     contectNo  : 9997453878,
//     branch : "assitent engineering",

//     welcomeMessage :function(){
//         console.log(`Good Morning ${this.name}`);
//         // console.log(this);
        
        
//     }
// }
// client.welcomeMessage()
// client.name = "sagar"
// client.welcomeMessage()

// console.log(this);          output : {}
 

// function  phadi() {
//     let palce = "Karanprayag"
//     console.log(this.phadi);
// }
// phadi(this)

// const  phadi= ()=>  {
//     let palce = "Karanprayag"
//     console.log(this.phadi);
// }
// phadi()  no output


// let addTwo=(A,B) => {
//     return A+B
// }



// ()=>{ return }    
//   Arrow mai {} curly bracket krne pe return keyword likhna pdega ,agr () m nhi likhan pdega




// const addTwo = (a,b) => a+b;
// console.log(addTwo(5,6))
 



// IIFE : Immediately Invocked Function Expression
// (function file(){
//     console.log(`DB CONNECTED`); 
// })();
  

// ((name) => {
//     console.log(`Sucessfully ${name}`); 
// })('Harish')

 

// let  a =9;
// let b =4;
// function addSum() {
//     console.log(a+b);

// }
// addSum()

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// let no = 2
// while (no<10) {
//     console.log(`add plus two ${no}`);
//     no = no+2
// }



// let myArr =[1,5,7,3,0,4];
// myArr.sort((a, b) => a - b);

// let arr = 0
// while ( arr < myArr.length) {
//     console.log(`increment ${myArr[arr]}`);
//     arr =arr+1
// }



//                  do while condition 
// let score = 10;
// do {
//     console.log(`score ${score}`);
//     score++;
    
// } while (score<=10);


// if (5 != 2) {
//     console.log("y");
// }



// const useLogIn = true
// const debitcard = true
// const logInGoogle = false
// const logInMail = false


// if (useLogIn && debitcard) {
//     console.log("You enjoy shoping");
// }else{
//     console.log("You don't have two condition");
// }

// if (logInGoogle || logInMail){
//     console.log("Access");
// }





// const month =2

// switch (month) {
//     case 1:
//         console.log("janbary");
//         break;
//     case 2 :
//         console.log("feb");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("the end");
        
//         break;
// }


const arr = [2,5,7,6,4,30]

for (const number of arr) {
    // console.log(number);  
}

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }

const greet = "Pray To God";

for (const pray of greet){
    // console.log(`Help Me! ${pray}`);  
}


// map

const map = new Map()
map.set('IN',"INDIA")
map.set('EG',"ENGLAND")
map.set('PAK',"PAKISTAAN")
map.set('AF',"AFGANISATN")

// console.log(map);
for (const [key,value] of map) {
    // console.log(key, ":-", value);
}




// forEach
const language = ["Javascript","Python","Ruby","Fulter","Node.js"]

// language.forEach(run => {
//     console.log(language);    
// });

language.forEach( function (item){
    // console.log(item);
})


// function printMe(item){
//     console.log(item);
    
// }
// language.forEach(printMe)

language.forEach((item,index,arr) => {
    // console.log(item,index,arr)
    
}) 





// array prototype find and findlast 
// find : first matching result ko find/return kr k deta hai
// findLast : sabse last ka result find kr k dega matching result ko
const user = [
    {id: 103, name :"vinay", age:30, Roll: 1042 },
    {id: 100, name :"harjot", age:20, Roll: 1242 },
    {id: 101, name :"diya", age:25, Roll: 1262 },
    {id: 102, name :"sita", age:23, Roll: 1842 }

]; 
const result = user.findLast((item)=>item.Roll>1200)
// console.log(result);


const score = [120,530,451,364,153]

const found = score.find((number)=>number>300)
// console.log(found);


console.log("hari nam shree krishna ");


