// Deep copy and shallow copy in JavaScript

let obj={
    name :'HSN'
};

let user = {...obj}
user.name = 'Hassan';

console.log("object is: ",obj);
console.log("user is: ",user); // Hassan