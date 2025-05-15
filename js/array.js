// mang
const a = "a";
const b = "b";
const c = "c";
const d = "d";
// 2 cach tao mang
// array literal
// array constructor
const students2 = new Array();

const students1 = ["evondev", "tuan", "nam", "thanh", "trung", "tuan"];
// lay phan tu cuoi cung trong mang
console.log(students1[students1.length - 1]);
// length -> do dai cu mang
console.log("-----array.length-----");
console.log(students1.length);
// reverse -> dao nguoc
console.log("-----array.reverse-----");
// console.log(students1.reverse());
// join -> noi cac phan tu thanh string
console.log("-----array.join-----");
console.log(students1.join());
// includes -> kiem tra mang co chua phan tu
console.log("-----array.includes-----");
console.log(students1.includes("evondev"));
console.log(students1.includes("abc"));

// indexOf -> tra ve vi tri cua phan tu tim thay dau tien
console.log("-----array.indexOf-----");
console.log(students1.indexOf("tuan"));
// lastIndexOf -> tra ve vi tri cua phan tu tim thay cuoi cung
console.log("-----array.lastIndexOf-----");
console.log(students1.lastIndexOf("tuan"));
// push -> them phan tu vao cuoi mang
console.log("-----array.push-----");
console.log(students1.push("java"));
console.log(students1);
// unshift -> them phan tu vao cuoi mang
console.log("-----array.unshift-----");
console.log(students1.unshift("python"));
console.log(students1);

const students3 = ["evondev", "tuan", "nam", "thanh", "trung"]
console.log(students3[0]);
console.log(students3[5]);
// lay phan tu cuoi cung trong mang = do dai cua mang - 1
console.log(students3[students3.length - 1]);

// pop -> xoa phan tu cuoi cung trong mang
console.log(students3);
students3.pop();
console.log(students3);
// shift -> xoa phan tu dau tien trong mang
students3.shift();
console.log(students3);