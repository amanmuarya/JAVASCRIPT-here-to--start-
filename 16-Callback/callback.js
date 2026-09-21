// Synchronous callbacks

let inner = function () {
    console.log('inner 1');
}
let outer = function (callback) {
    console.log('outer 1');
    callback();
    console.log('outer 2');
}
console.log('test 1');
outer(inner);
console.log('test 2');

// Asynchronous callbacks
let inner = function () {
    console.log('inner 1');
}
let outer = function (callback) {
    console.log('outer 1');
    setTimeout(callback, 1000) /*ms*/;
    console.log('outer 2');
}
console.log('test 1');
outer(inner);
console.log('test 2');
  

//  setTimeout and setInterval functions
let inner = function () {
    console.log('inner 1');
}
let outer = function (callback) {
    console.log('outer 1');
    let timerId = setInterval(callback, 1000) /*ms*/;
    console.log('outer 2');
    setTimeout(function () {
        clearInterval(timerId);
    }, 5500);
}
console.log('test 1');
outer(inner);
console.log('test 2');
