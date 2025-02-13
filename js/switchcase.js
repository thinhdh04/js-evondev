// const fruit = "lemon";
// if (fruit === "apple") {
//     console.log("you like to eat apple");
// }
// if (fruit === "lemon") {
//     console.log("you like to eat lemon");
// }
// if (fruit === "banana") {
//     console.log("you like to eat banana");
// }
// switch (fruit) {
//     case "apple":
//         console.log("you like apple");
//         break;
//     case "lemon":
//     case "banana":
//         console.log("you like lemon and banana");
//         break;
//     default:
//         console.log("you like orange");
//         break;
// }
// const number = "500";
// switch (Number(number)) {
//     case 500:
//         console.log("500");
//         break;

//     default:
//         break;
// }
// TERNARY OPERATOR
const yourAge = 17;
let message = "you are young";
if (yourAge >= 18) {
  message = "you are adult";
} else if (yourAge <= 10) {
  message = "You are still a child";
}
// condition ? true : false
let message2 = yourAge >= 18 ? "you are adult" : "you are still young";
console.log(message2);
let message3 =
  yourAge >= 18
    ? "you are adult"
    : yourAge <= 10
    ? "you are young"
    : "you are boys";
console.log(message3);
