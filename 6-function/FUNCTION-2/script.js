// time - 5: 21 

// Real Examples
// JavaScript ke built -in Higher - Order Functions:

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num) {
    console.log(num);
});

// Pure Function
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5

// impure function 
let count = 0;

function increment() {
    count++;
    return count;
}
console.log(increment()); // 1
console.log(increment()); // 2


// Closure in JavaScript
function outer() {
    let name = "Aman";
    function inner() {
        console.log(name);
    }
    return inner;
}
const myFunction = outer();
myFunction();

// ##Lexical Scoping in JavaScript

// Lexical Scoping = Access Parent Variables
// Closure = Remember Parent Variables

let a = 10;          // Global Scope
function outer() {
    let b = 20;      // Outer Scope
    function inner() {
        let c = 30;  // Local Scope
        console.log(a);
        console.log(b);
        console.log(c);
    }
    inner();
}
outer();

// IIFE(Immediately Invoked Function Expression) in
(function (name) {
    console.log("Hello " + name);
})("Aman");
// IIFE = Define + Execute Immediately


// hosting in function js
greet();



function greet() {
    console.log("Hello Aman");
}
// Function Declaration ✅ Hoisted
// Function Expression ❌ Not Fully Hoisted

// question--start 