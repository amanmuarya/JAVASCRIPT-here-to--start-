// start -- 3:24

// for = "Kitni baar chalna hai, pehle se pata hai."
// while = "Kab tak chalna hai, sirf condition se decide hoga."

// for (let j = 1; j <= 10; j++) {
//     console.log(j);
// }

// // while 
// let i = 7;
// while (i >=1) {
//     console.log(i);
//     i--;
// }

// // do .. while 
// let k = 1;
// do {
//     console.log(i);
//     k++;
// } while (k <= 5);

//   brick
// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         break;
//     }
//     console.log(i);
// }

// continue 

// for (let i = 1; i <= 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i);
// }

//  Yaad Rakho
// 🛑 break = Stop the loop
// ⏭️ continue = Skip current iteration, continue next   

// Q --  ask the user from number print whather each number from 1 to that number is even  
// or odd 
// ( "1 odd number " , " 2 even number ")

let ak = prompt("given number ");
for( let i= 1 ; i<= ak; i++  ){
    if(i%2===0){
        console.log(`${i} is even number` );
    }
    else{
        console.log(`${i} is  odd number`);
    }
}