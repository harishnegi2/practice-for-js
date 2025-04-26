// object is a collection of key-value pairs. The key is always a string and the value can be any data type.
// let obj = new Object(); // object constructor syntax 


let key = "address"; 
let data = {
    name: 'John',
    age: 30,
    isMarried: false,
    getData:function(){
        return this.name + ' is ' + this.age + ' years old';
    },
    inner : {
        name : 'Smith',
    },
    ['pin code'] : 246444,
    [key] : "noida,grugram, delhi"
}   // object literal
console.log(data);


// user.name="anil";
// user.city ="newYork"


for(item in data){
    console.log(`${data} : ${item[data]}`);
    // console.log(data);
    
}



// let obj = {
//     name : "Seema",
//     age : 25,
//     isMarried : false,
// }
// obj.name = "Rajesh";
// console.log(obj);


