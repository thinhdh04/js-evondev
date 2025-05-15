// By value -> gia tri thuc su luu trong vung bo nho
const num1 = 1;
const num2 = 1;
console.log(num1 === num2)
// By references
const arr1 = [1,2]
const arr2 = [1,2]
console.log(arr1 === arr2)

// JSON
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.parse("[1,2,3]"));
const arr1Str = JSON.stringify(arr1);
const arr2Str = JSON.stringify(arr1);
console.log(arr1Str === arr2Str);

// clone
const students = ["a", "b", "c", "d", "e"];
// 1.su dung phuong thuc slice()
const sliceStudents = students.slice();
sliceStudents.pop();
console.log(sliceStudents)
// 2. spread operator [...array]
const spreadStudents = [...students];
console.log(spreadStudents);

// concat -> array1.concat(array2, array3, arrayN)
const array1 = [1,2];
const array2 = [3,4];
const array3 = [5,6];
const mergeArray = array1.concat(array2, array3);
console.log(mergeArray)
// spread operator-> [...array]
const mergeArray2 = [...array1, ...array2, ...array3]
console.log(mergeArray2)

// destructuring array
const toys = ["ball", "sword", "arrow", "magic", "water", "fire"];
const a = toys[0]
const b = toys[1]
const c = toys[2]
console.log(a,b,c);
// const [] = toys;
const [x,y,z, ...rest] = toys;
console.log(x,y,z);

// rest parameter ...
console.log(rest);
function demo(a, ...rest){
    console.log(a, rest);
}
demo(1,2,3,4,5);