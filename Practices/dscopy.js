// Deep copy and shallow copy in JavaScript

let obj={
    name :'HSN'
};

let user = {...obj}
user.name = 'Rajkumar';

// console.log("object is: ",obj);
// console.log("user is: ",user); // Hassan


let obj1 = 4;
let obj2 = obj1;
obj2 = 5;
// console.log("obj1: ",obj1); // 4
// console.log("obj2: ",obj2); // 5

// const fruits = ['apple','banana','mango'];

// const dightFruits = [...fruits];
 
const data={
    name :'Rohit'
}
const copyData = Object.assign({},data);
copyData.name ="Satish";

// console.log("data is original", data);
// console.log("data is copy original", copyData);

const original = {
    name: 'John',
    address: {
      city: 'New York',
      zip: 10001
    }
  };
  
  const shallowCopy = {...original} ; // Using spread operator for shallow copy
  
  shallowCopy.address.city = 'Los Angeles'; // Changing the city in the shallow copy
  
  console.log(original.address.city); // Outputs: 'Los Angeles' (changes affect the original)
  console.log(shallowCopy.address.city); // Outputs: 'Los Angeles'
  