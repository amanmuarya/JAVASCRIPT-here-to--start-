// tiem -- 1:44
//  this type add event listener

// let gh = document.querySelector("h1");

// gh.addEventListener("click" , function(){ 
//     gh.style.fontSize= "29px";
//     gh.style.color="blue";
//     gh.style.background="orange";

// })

// CHANGE EVENT LISTONER 
// let sec=document.querySelector("select");
// let divi = document.getElementById("device");
// sec.addEventListener("change", function(dets){
//     divi.textContent=`${dets.target.value} device  section`; 
    
// });
//  here to new 
let typ = document.querySelector("#main h1");

window.addEventListener("keydown", function (e) {
    if (e.code === "Space") {
        typ.textContent = "Space";
    } else {
        typ.textContent = e.key;
    }
});