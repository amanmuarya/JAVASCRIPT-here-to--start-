// let a ; 
// var q; 
// let a = 3; 
// const g= 4; 

// Hoisting in JavaScript

// console.log(a); // undefined
// var a = 10;

// JavaScript internally ise aise dekhta hai:

// var a;
// console.log(a); // undefined
// a = 10;

// next

// var x = 1; //global
// {
//     var x = 2; //global
// }
// console.log(x);

// next 

// let  x = 5; //blockScope / globle
// {
//     let  x = 4; //block
//     console.log("inside:", x);
// }
// console.log("outside:", x);

// next

// Object.freeze() in JavaScript
const user = {
    name: "Aman",
    age: 19
};

Object.freeze(user);

user.age = 20;       // ❌ Not allowed
user.city = "Delhi"; // ❌ Not allowed
delete user.name;    // ❌ Not allowed
console.log(user);
// Object.freeze() = 🔒 Full Lock
// Add ❌ | Update ❌ | Delete ❌
