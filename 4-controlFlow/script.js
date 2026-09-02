// time -- 2:53
let age = 20;
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// if ... else 

if (condition) {
    // true block
} else {
    // false block
}
  
// esle .. if  else .. if 

if (condition1) {
// ..
} else if (condition2) {
//    ...
} else {
// ..
}

// example.
let marks = 75;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// condition case 
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid Day");
}

// early return paittern
function checkAge(age) {
    if (age < 18) {
      return "Minor";
    }
    return "Adult";
}
console.log(checkAge(16));