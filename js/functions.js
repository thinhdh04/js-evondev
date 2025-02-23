// viet ham tinh tong 2 so a va b
function sum(a, b) {
    // console.log("hello");
    return a + b;
}
console.log(sum(500, 1000));

// luu function vao 1 bien roi goi sau
function add(a = 0, b= 0){
    console.log(a + b);
    return a + b;
}
const sum2 = add;
sum2(300, 400);
// tinh trung binh cua a va b
function average(a, b, fn) {
    const total = fn(a, b);
    return total / 2;
}
let result = average(200, 300, sum2);
console.log(`result ${result}`);
// Anonymous function(function expression)
// khong bi hosting
const logName = function () {
    console.log("your name");
};
logName();
// IIFE -> immediately invoked function execution
(function() {
    console.log("this is IIFE function");
})();
// scope
// global scope,
let myName = "evondev";
function  logYourName() {
    let myName2 = myName;
    console.log(myName2);
}
logYourName();
// block scope
let message;
if (2 > 1) {
    let message = "hello evondev";
    message = "hello tuan";
}
// alert(message);
// lexical scope
let aNewName = "Evondev";
function  sayHello() {
    let message5 = "Hi";
    console.log(`${message5} ${aNewName}`)
}
// sayHello();
// closure
// function sayHello2(){
//     let message = "Hi";
//     function sayHi(){
//         console.log(message);
//     }
//     return sayHi;
// }
// let hello = sayHello2();
// hello();
function sayHello3(message){
    return function hiYourName(name){
        console.log(`${message} ${name}`);
    };
}

let hello = sayHello3("Welcome to js");
hello("closure");
//
function anotherFunction() {
    let otherMessage = "hello";
    function sayHi(){
        console.log(otherMessage);
    }
    return sayHi;
}
let callFunc = anotherFunction();
callFunc();