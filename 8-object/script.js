// tiem -- 7:23

let obj = {
    name:"aman",
    Barth:"34",
    roolNo:"22", 
    sity:"bnarsh",
    country:"india"
}
 obj.country;

//  Dot Notation(.)
// Jab property ka naam fixed ho.
// Easy aur readable.

let person = {
    name: "Aman",
    age: 20
};
console.log(person.name); // Aman

// 2. Bracket Notation([])
// Jab property ka naam variable mein ho ya spaces / special characters ho.
// Key ko string mein likhte hain.
//     console.log(person["age"]); // 20
// let key = "name";
// console.log(person[key]);   // Aman

      // Yahan address ek nested object hai.
let student = {
    name: "Aman",
    address: {
        city: "Moradabad",
        state: "UP"
    }
};
    // console.log(student.address.city); // Moradabad
    // console.log(student.address.state); // UP

//   Object Destructuring in JavaScript  
let person = {
    name: "Aman",
    age: 20
};
let { name, age } = person;
console.log(name); // Aman
console.log(age);  // 20

// 1. for...in Loop
// Object ki keys ko iterate karta hai.
let person = {
    name: "Aman",
    age: 20
};
for (let key in person) {
    console.log(key, person[key]);
}

         // Reference Copy vs Deep Clone(JavaScript)
// 1. Reference Copy
let obj1 = { name: "Aman" };
let obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1.name); // Rahul

//  Deep Clone
let obj1 = { name: "Aman" };
let obj2 = structuredClone(obj1);
obj2.name = "Rahul";
console.log(obj1.name); // Aman
console.log(obj2.name); // Rahul