// time--1:20

//  this in Global Scope
// console.log(this); // value output : window 

// // this Inside an Object
// const user = {
//     name: "Aman",
//     greet() {
//         console.log(this.name);
//     }
// };
// user.greet(); // Aman

// // this in Arrow Function
// const user = {
//     name: "Aman",
//     greet: () => {
//         console.log(this);
//     }
// };
// user.greet(); 
// // Arrow function ka apna this nahi hota.
// // Ye outer scope ka this use karta hai(lexical this).

// //  Normal function → this = user
// //  Arrow function → Apna this nahi hota; outer scope ka this use karta hai.

// const user = {
//     name: "Aman",
//     normal() {
//         console.log(this.name);
//     },
//     arrow: () => {
//         console.log(this.name);
//     }
// };
// user.normal(); // Aman
// user.arrow();  // undefined

// this in Event Listener
// let btn = document.querySelector("h1");
// btn.addEventListener("click", function () {
//     console.log(this.style.color ="green");
// });

// class 

// class Student {
//     constructor(name, age) {
//       this.name = name;
//     this.age = age;
//     }
//     introduce() {
//      console.log(`My name is ${this.name}`);
//     }
// }
// const s1 = new Student("Aman", 19);
// s1.introduce();

// constructor

class Student {
    constructor(name) {
        this.name = name;
    }
}

        //      this Keyword in Class
// Definition
// Class ke andar this current object(instance) ko refer karta hai.
// 👉 this.name ka matlab hai:
// Current object ki name property
class Person {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(`Hello ${this.name}`);
    }
}
const p1 = new Person("Aman");
const p2 = new Person("Rahul");
p1.sayHello(); // Hello Aman
p2.sayHello(); // Hello Rahul

// Syntax
// Arrow Function & Lexical this in JavaScript
const greet = () => {
    console.log("Hello");
};

// call()  → Call Now 📞
// apply() → Apply Now(Array) 📦
// bind()  → Bind Now, Call Later 🔗


// apply() → Apply Now(Array)

const person = {
    name: "Aman"
};
function greet(city, country) {
    console.log(`Hello ${this.name} from ${city}, ${country}`);
}
greet.apply(person, ["Delhi", "India"]);

// bind()  → Bind Now, Call Later 

const person = {
    name: "Aman"
};
function greet() {
    console.log(`Hello ${this.name}`);
}
const newGreet = greet.bind(person);
newGreet();