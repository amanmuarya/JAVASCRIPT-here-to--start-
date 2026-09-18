// time--2:10

// class Student {
//     constructor(name, age, addresh , profacion ) {
//         this.name = name;
//         this.age = age;
//         this.addresh= addresh;
//         this.profacion= profacion;
//     }
// }
// let gh=new Student("Aman", 19,"lacknow", "worker" );
//  let dg=new Student("Rahul", 20 , "haidrabad ", "techer" );
// console.log(gh);
// console.log(dg);

// here to class

 class Massruten{
constructor(name, day, food , time,color ){
    this.name=name;
    this.day=day;     
    this.food=food;
    this.time=time;
    this.color=color;
}
     startTime(Text) {
    let h1=document.createElement("h1");
    h1.textContent=Text;
    h1.style.color=this.color;
    document.body.appendChild(h1);
}
}
let p1 = new Massruten("aman","Monday ", "ice-creame", "4:30","green" );
let p2 = new Massruten("Rohit", "tuesday ", "ice-creame", "4:30", "pink");

// Encapsulation

// class Student {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(this.name);
//     }
// }

// // Inheritance

// class Animal {
//     eat() {
//         console.log("Eating...");
//     }
// }
// class Dog extends Animal {
//     bark() {
//         console.log("Barking...");
//     }
// }

// const d = new Dog();

// d.eat();
// d.bark();

// // Polymorphism

// class Animal {
//     sound() {
//         console.log("Animal Sound");
//     }
// }
// class Dog extends Animal {
//     sound() {
//         console.log("Bark");
//     }
// }
// const d = new Dog();
// d.sound();