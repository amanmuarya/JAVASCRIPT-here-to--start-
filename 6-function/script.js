//  time -- 4:45

// function greet() {
//     console.log("Hello Aman");
//     console.log("Hello Aman");
//     console.log("Hello Aman");
//     console.log("Hello Aman");
//     console.log("Hello Aman");
// }

// greet();
// greet(); // many time call kar skte hai


// Example 2-- Function with Parameters

// function add(a, b) {
//     console.log(a + b);
// }
// add(10, 20);

// another ex

// function bk(r3){
//     console.log(`${r3} start now one `);
// }
// bk("two");
// bk("three");   // many time call and given me value change now

// edfault value
// function greet(name = "hell") {
//     console.log( + name);
// }
// greet();
// greet(""); // name pahle se define hai dubara nhi kar sakte ye difault hai


// Rest Parameters (...)
function sum(...numbers) {
    console.log(numbers);
}
sum(10, 20, 30, 40);

// Spread Operator(...)

let arr = [10, 20, 30];
console.log(...arr);


// Return Value

function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log(result);
// another way 
function greet() {
    return "Hello Aman";
}
console.log(greet());

// early return 
function checkAge(age) {
    if (age < 18) {
        return "Minor";
    }
    return "Adult";
}
console.log(checkAge(16));
// Another Example
function login(user) {
    if (!user) {
        return "Please Login";
    }
    return "Welcome";
}
console.log(login(null));

// -----------
return value;      // Output return karo

if (condition) {
    return;        // Jaldi function se bahar niklo
}
//  Return Value = "Function ka output."
//  Early Return = "Condition true hote hi function ko stop kar do."
 
const greet = function () {
    console.log("Hello Aman");
};
greet();

// Function ko Argument ke Roop me Pass Karna
function greet() {
    console.log("Hello");
}
function execute(fn) {
    fn();
}
execute(greet);

// 3. Function ko Return Karna
function outer() {
    return function () {
        console.log("Hi Aman");
    };
}
const result = outer();
result();

// ✅ Function ko variable me store kar sakte hain.
// ✅ Function ko argument bana sakte hain.
// ✅ Function ko return kar sakte hain.
// ✅ Isi wajah se JavaScript ko First - Class Function Language kaha jata hai.

// HTF

// Function as Argument
function greet() {
    console.log("Hello Aman");
}
function execute(fn) {
    fn();
}
execute(greet);
// Example 2: Function Returning Another Function
function outer() {
    return function () {
        console.log("Hi Aman");
    };
}
const result = outer();
result();
// outer() bhi Higher - Order Function hai kyunki ye ek function return karta hai.