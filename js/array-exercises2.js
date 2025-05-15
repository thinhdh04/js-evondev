// 1. cho 1 mang nhieu gia tri. viet chuong trinh loai bo cac gia tri falsy ra khoi mang chi giu lai gia tri truthy
const array = [
  1,
  1000,
  false,
  null,
  "evondev",
  "",
  undefined,
  "javascript",
  [1, 2, 3],
  NaN,
];
// 2. cho 1 mang phuc tap
const filterFalsy = array.filter((item) => Boolean(item));
console.log(filterFalsy);
const complexArray = [
  [1, 2, 3, [false, null]],
  [1, 5, 6, ["javascript"]],
  [888, 666, [90]],
];
const result = complexArray.flat(2);
console.log(result);

// 3. dao nguoc so nguyen
function reverseNumber(number) {
    const value = parseInt(number.toString().split("").reverse().join("")) * Math.sign(number);
    console.log(value);
}
reverseNumber(-1234);
reverseNumber(1234);

// 4. viet chuong trinh kiem tra so nguyen neu chia het cho 2 thi in ra "fizz", chia het cho 3 thi in ra "buzz", chia het cho 2 va 3 thi in ra "fizzbuzz"
function fizzBuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 2 === 0) {
            console.log("FizzBuzz");
        } else if (i % 2 === 0) {
            console.log("Fizz");
        } else if (i % 3 === 0) {
            console.log("Buzz");
        }
    }
}
fizzBuzz(15)

// 5. cho 1 chuoi bat ky, dem so luong ki tu 'vowels' co trong chuoi.
function countVowels(string) {
    let count = 0;
    const characters = "ueoai";
    for (let c of string.toLowerCase()) {
        if (characters.includes(c)) count = count + 1;
    }
    return count;
}
console.log(countVowels("EVONDEV"));

// 6. cho 1 mang cac gia tri so. viet mot function tra ve mot mang voi cac gia tri unique.
function unique(arr) {
    let result = [];
    if (!Array.isArray(arr)) return result;
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(unique([0,9,8,7,6,5,4,3,1,2,3,4,5,6]));
console.log(unique("abc"));

// 7. viet 1 function xu ly tu 1 mang lon thanh nhieu mang con dua vao mot so nguyen dau vao
function splitArray(array, number) {
    let result = [];
    let index = 0;
    while(index < array.length) {
        result.push(array.slice(index, number + index))
        index = index + number;
    }
    console.log(result);
    return result;
}
splitArray([1,2,3,4,5,6], 2);