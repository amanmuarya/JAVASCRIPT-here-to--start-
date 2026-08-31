// TIME--1:07

// String → Text
let name = "Aman";

// Number → Integer ya Decimal
let age = 19;
let pi = 3.14;

// Boolean → true / false
let isStudent = true;

// Undefined → Value assign nahi hui
let x;

// Null → Intentionally empty value
let data = null;

// BigInt → Bahut bade numbers
let big = 12345678901234567890n;

// Symbol → Unique value
let id = Symbol("id");


// 2. Non - Primitive(Reference) Data Type

// Object → Key - value pairs
let obj = {
    name: "Aman",
    age: 19
    , email :"kush@jdfd23.com",
    uid : 34
};
let a1 = Symbol("uid"); 
obj[a1]="45a";

// Array(Object ka type)
let colors = ["red", "blue", "green"];

// Function(Special object)
function greet() {
    console.log("Hello");
}

// dynamically

let data = "Aman";  // String

data = 19;          // Number
data = 324729479387293847n; 
data = true;        // Boolean

// Type Coercion in JavaScript
console.log("5" + 2);