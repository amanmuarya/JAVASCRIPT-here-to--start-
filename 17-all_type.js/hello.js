// ternary
console.log(true ? "Alice" : "Bob"); // -> Alice
console.log(false ? "Alice" : "Bob"); // -> Bob
  

// Prompt dialog box--- kuch store karne ke liey brouser par 

let name = window.prompt("What is your name?", "John Doe");
name = name ? name : "anonymous";
let age = prompt("Hello " + name + " how old are you?");
alert(name + " is " + age + " years old");
 
