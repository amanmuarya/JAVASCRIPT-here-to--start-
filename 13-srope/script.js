// Global   → Everywhere 🌍
// Function → Function Only ⚙️
// Block    → { } Only 📦
// Lexical  → Parent → Child 🔗

//  Global Scope

let name = "Aman";
function show() {
    console.log(name);
}
show();
console.log(name);

// Function Scope 

function test() {
    var age = 19;
    console.log(age);
}
test();// console.log(age); // Error

//  Block Scope 
if (true) {
    let city = "Delhi";
    console.log(city);
}// console.log(city); // Error

//  Lexical Scope 🔗  
function outer() {
    let name = "Aman";

    function inner() {
        console.log(name);
    }
    inner();
}
outer();

// Global Execution Context(GEC)
let a = 10;
function greet() {
    console.log("Hello");
}
greet();

// Function Execution Context(FEC)
function greet() {
    let name = "Aman";
    console.log(name);
}
greet();
// GEC = Program Start 🌍
// FEC = Function Call ⚙️
// Memory Phase → Allocate Memory
// Execution Phase → Run Code
 
// closure
function outer() {
    let name = "Aman";
    function inner() {
        console.log(name);
    }
    return inner;
}
const show = outer();
show();
