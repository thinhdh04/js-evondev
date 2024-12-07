// số nguyên: 1 2 3 4 5
// số thập phân: 3.4 3.5
console.log(5 + 7);
console.log(typeof 10);
const number1 = "5";
const number2 = "3.4";
console.log(parseInt(number1)); // 5
console.log(parseFloat(number2)); // 4.8
const number3 = -10;
// Math.abs(value)
console.log(Math.abs(number3)); // 10
// Math.floor(value): lam tron xuong
console.log(Math.floor(4.3));
// Math.ceil(value): lam tron len
console.log(Math.ceil(4.4));
// Math.round(value): lam tron gan nhat
console.log(Math.round(4.5)); // tren 4.5 -> 5, duoi 4.5 -> 4
// toFixed(number): 0.333333333 -> 0.33
console.log(parseFloat((1 / 3).toFixed(2))); 
console.log(Math.ceil(Math.random() * 10)) 
// Math.max: trả ra con số lớn nhất
console.log(`Max: ${Math.max(1,3,5)}`) 
// Math.min: trả ra con số nhỏ nhất
console.log(`Min: ${Math.min(1,3,5)}`) 
// Math.pow: 3^2 = 9
console.log(Math.pow(3, 2));
// isNaN: NaN -> Not a Number
console.log(isNaN("this is a string")); // true
console.log(isNaN("12345")); // false
console.log(Number.isNaN("12345")); // false
console.log(Number.isNaN(NaN)); // true

