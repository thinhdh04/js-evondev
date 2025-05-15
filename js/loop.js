// vong lap
const numbers = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(`the index is ${i}`);
// }

// for (let i = 0; i < numbers.length; i = i + 2) {
//     console.log(`the index is ${i}`);
// }

// gia tri bang 8
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] === 8) {
//         continue;
//     }
//     console.log(`the value is ${numbers[i]}`);
// }

// nested loop
// for (let i = numbers.length - 1; i >= 0; i--) {
//     console.log(`the value is ${numbers[i]}`);
//     for (let j = numbers.length - 1; j >= 0; j--) {
//         console.log(j);
//     }
// }

// 1. sao chep mang dung vong lap for
let copyArr = [];
for (let i = 0; i < numbers.length; i++) {
    copyArr.push(numbers[i]);
}
console.log(copyArr);
//  2. dao nguoc tu "i love" -> "evol i"
let str = "i love";
let result = "";
for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
    result = result + str[i];
}
console.log(result);

// while va do while
// let number = 1;
// while(number < 10) {
//     console.log("number is " + number);
//     // dieu kien de dung
//     number = number + 1;
// }
// let number2 = 1;
// do {
//     number2++;
//     console.log("number is " + number2);
// }while(number2 < 10);

let a = [];
for (let value of numbers) {
    value += 10;
    a.push(value);
}
for (let c of "evondev") {
    console.log(c);
}
console.log(a);