// 1. su khac nhau giua i++ va ++i
let i = 1;
let j = i++;
console.log(i, j);
let a = 1;
let b = ++a;
console.log(a, b);
// 2. luu y khi return function
function total(x, y) {
  return x + y;
}
// 3. 2 cach chuyen doi du lieu moi
const str = "";
console.log(parseInt(str));
console.log(parseFloat(str));
console.log(Number(str));
console.log(+str);
console.log(!!str);
// 4. argument
function number(a, b, c) {
  // if (!arguments.length) console.log("please insert your arguments");
  console.log(typeof arguments);
  const args = Array.from(arguments);
  const args2 = [...arguments];
  console.log(arguments);
  console.log(args2);
  return a + b + c;
}
number();
// 5. closure in loop
// for (let z = 1; z < 5; z++) {
//     setTimeout(function(){
//         console.log(z);
//     }, 1000);
// }
// let -> not hoisting
// let -> scope thay doi sau moi vong lap
// var -> hoisting
// scope cua var sau moi vong lap thi no khong thay doi
// 6. su khac nhau giau localStorage va sessionStorage
// localstorage.getItem("abc")
// sessionStorage.getItem("abc")
// 7. nhung truong hop khong nen su dung arrow function
// 7.1 Event handlers
// const input = document.querySelector(".input");
// input.addEventListener("keyup", () => {
//   console.log(this.value);
// });
// 7.2 Object
const student = {
  counter: 0,
  increment: () => {
    return ++this.counter;
  },
};
console.log(student.increment());
// 8. De quy (recursive)
function countDown(number) {
  console.log(number);
  let other = number - 1;
  if (other > 0) {
    countDown(other);
  }

  // if (condition) stop recursive else run recursive
}
countDown(3);
// Maximum call stack size exceeded
const complexArr = [
  [1, 2, 3],
  [3, 4, 5],
  9,
  [
    [2, 3],
    [2, 3, 5],
    [1, 2],
  ],
];
// [1,2,3,3,4,5,2,3,2,3,5,1,2];
// console.log(complexArr.flat(Infinity));
// a [1,2,3] b [4,5,6] -> [1,2,3,4,5,6] -> a.concat(b);
// [1,2,3].slice()
function flatArray(arr, deep) {
  const result =
    deep > 0
      ? arr.reduce(
          (a, val) => a.concat(Array.isArray(val) ? flatArray(val, deep - 1) : val),
          []
        )
      : arr.slice();
  return result;
}
console.log(flatArray(complexArr, Infinity));
// [].concat([1,2,3])
// [1,2,3].concat([3,4,5])
// const complexArr = [
//   [1, 2, 3],
//   [3, 4, 5],
//   9,
//   [
//     [2, 3],
//     [2, 3, 5],
//     [1, 2],
//   ],
// ];
// 9. Set
const mySet = new Set();
mySet.add(1);
mySet.add(1);
mySet.add("evondev");
mySet.has(1);
console.log(mySet);
mySet.delete("evondev");
mySet.clear();
//
const arr = [1,2,4,6,3,5,7,8,9];
// -> [1,2,3,4,5]
// array to set
const mySet2 = new Set(arr);
console.log(mySet2);
// set of
for (let item of mySet2) {
  console.log(`item: ${item}`);
}
// set to array
const newArr = Array.from(mySet2);
console.log(newArr);
// const newArr = [...mySet2];
let result = [];
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  if (!result.includes(element)) {
    result.push(element);
  }

}
console.log(result);
// 10. Debugger in vscode
for (let z = 1; z < 5; z++) {
  setTimeout(function() {
    console.log(z);
  }, 1000);
}