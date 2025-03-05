// object is a collection of key-value pairs. The key is always a string and the value can be any data type.
// let obj = new Object(); // object constructor syntax 



let data = {
    name: 'John',
    age: 30,
    isMarried: false,
    getData:function(){
        return this.name + ' is ' + this.age + ' years old';
    },
    inner : {
        name : 'Smith',
    }
}   // object literal
// console.log(data.inner.name);

let obj = {
    name : "Seema",
    age : 25,
    isMarried : false,
}
obj.name = "Rajesh";
console.log(obj.name);


