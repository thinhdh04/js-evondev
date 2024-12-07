// string(chuoi)
"Hello world";
"My name is Evondev";
`I am frontend developer`;
// double quotes, single quotes, backticks (templates literal)
const name = "evondev";
const job = "frontend developer";
// console.log(name);
// console.log(typeof name);
const newStr = "my name is evondev and i am frontend developer";
const newStr2 = "my name is " + name + " and i am " + job;
// console.log(newStr2);
//${variable}
const newStr3 = `my name is ${name} and i am ${job}`;
// console.log(newStr3);
// .length
// console.log(newStr3.length);
// index là vị trí từng kí tự trong chuỗi, bao gồm khoảng trống
const myStr = " frontend developer  ";
console.log(myStr.split(" ")); // ['frontend', 'developer']
console.log(myStr.split("")); // ['f', 'r', 'o', 'n', 't', 'e', 'n', 'd', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
console.log(myStr.toUpperCase()); // FRONTEND DEVELOPER
// flase
console.log(myStr.startsWith("F"));
// true
console.log(myStr.endsWith("r"));
// true
console.log(myStr.includes("end"));
// flase
console.log(myStr.includes("abc"));
console.log(myStr.indexOf("t")); // 4
console.log(myStr.lastIndexOf("e")); // 16
console.log(myStr.replace("developer", "designer")); // 16
console.log(myStr.repeat(2));
// slice(start, end);
console.log(myStr.slice(0, 8)); // frontend
console.log(myStr.slice(0)); // frontend developer
console.log(myStr.slice(-4)); // oper
console.log(myStr.trim()); // remove space left and right
console.log(myStr.trimStart()); // remove space left
console.log(myStr.trimEnd()); // remove space right
const myStr2 = "frontend";
console.log(myStr2.charAt(4));
// substr -> lấy ra 1 phần của chuỗi (string)
// substr(index, length) -> index: vị trí, length: số lượng kí tự muốn lấy
console.log(myStr2.substr(1, 5)); // ronte
// substring -> lấy ra các kí tự của chuỗi (string)
// substring(start index, end index);
console.log(myStr2.substring(1, 5)); //ront
const myStr3 = "    frontend developer  ";
// loại bỏ khoảng trống 2 bên, đưa tất cả về in hoa, thay chữ 'developer' thành chữ ' designer', sau đó repeat 2 lần
console.log(
    `Result of myStr3: ${myStr3
    .trim()
    .replace("developer", "designer")
    .toUpperCase()
    .repeat(2)}`
);
