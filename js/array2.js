console.log("-----array.slice-----");
// tao ra mot mang copy cua mang ban dau
const animals = ["tiger", "lion", "horse", "elephant"];
// slice(): tao ra mang moi giong mang ban dau
const animals2 = animals.slice();
console.log(animals2);
// slice(start). start -> vi tri index trong mang
const animals3 = animals.slice(1);
console.log(animals3);
// slice(start, end). start la vi tri bat dau, end la vi tri ket thuc
const animals4 = animals.slice(1, 3);
console.log(animals4);
const animals5 = animals.slice(-2);
console.log(animals5);

// xoa hoac thay the phan tu trong mang
console.log("-----array.splice-----");
const pets = ["dog", "cat", "bird", "dragon"];
// splice(start)
// const pets2 = pets.splice(2);
// console.log(pets2);
// splice(start, deleteCount): deleteCount la so luong phan tu muon xoa hoac thay the
const pets3 = pets.splice(0, 1, "hehe", false , 100);
console.log(pets);

console.log("-----array.sort-----");
// sap xep cac phan tu trong mang theo chuan unicode-16
const random = [1, 999, 1000000000, 5, 9];
console.log(random.sort());
// function(callback)
const random2 = random.sort(function(a,b) {
    if (a > b) return 1; // doi vi tri, sap xep tang dan
    if (a < b) return -1; // khong doi vi tri, sap xep giam dan
});
const random3 = random.sort((a, b) => (a > b ? 1 : -1));
// condition ? something : something else
console.log(random2);

console.log("-----array.find-----");
// tra ve phan tu tim thay dau tien trong mang thoa dieu kien nao do
const numbers = [1, 9999, 1000000000, 5, 9];
// tim phan tu dau tien trong mang > 100
const findYourNumber = numbers.find((element) => element > 100);
console.log((findYourNumber))

console.log("-----array.findIndex-----");
// tra ve vi tri index tim thay dau tien trong mang thoa dieu kien nao do
const findYourIndex = numbers.findIndex((element) => element > 100);
console.log(findYourIndex)

// sort bo sung
const random4 = random.sort((a, b) => (a > b ? 1 : -1));
console.log(random4);

console.log("-----array.map-----");
// duyet qua tung phan tu trong mang va tra ra mot mang moi ma khong thay doi mang ban dau
const listNumber = [1,2,3,4,5];
// tra ra mot mang moi ma cac so (gia tri) trong mang cu * 2
const listNumberDouble = listNumber.map(function(value, index, array) {
    return value * 2;
});
console.log(listNumberDouble);

console.log("-----array.forEach-----");
const listNumberTripple = listNumber.forEach((value,index,array) => {
    return value * 3;
})
console.log(listNumberTripple);

console.log("-----array.filter-----");
// dung de filter (mang loc) cac phan tu thoa man dieu kien nao do
const greaterThanThree = listNumber.filter((item) => item > 3);
console.log(greaterThanThree);

console.log("-----array.some-----");
// tra ve true khi thoa man 1 dieu kien va false khi khong thoa man dieu kien nao
const someNumber = listNumber.some((value) => value > 3);
console.log(someNumber);
console.log("-----array.every-----");
// tra ve true khi ta ca dieu kien deu dung, nguoc lai la false
const everyNumber = listNumber.every((value) => value > 3);
console.log(everyNumber);

console.log("-----array.reduce-----");
// gom cac thanh trong mang lai thanh 1
// .reduce((a, b), initialize value);
const totalNumber = listNumber.reduce(function(a,b) {
    console.log(a,b)
    return a+b;
}, 0);
console.log(totalNumber);