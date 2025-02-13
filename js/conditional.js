const isRich = true;
const myMoney = 100;
if (!isRich) {
    console.log("I buy a car")
} else if (myMoney > 1000) {
    console.log("I give you some money")
} else {
    console.log("i poor")
}
// prompt, confirm, alert
// alert("your website has been hacked");
// const yourName = prompt("vui long nhap ten", "")
// console.log(yourName);
// const isYourMoney = confirm("day co phai tien cua ban khong?")
// console.log(isYourMoney)
// bài 1: nhập vào số tuổi và kiểm tra nếu lớn hơn 18 thì coi phim rạp và ngược lại thì không được
// const yourAge = prompt("nhap tuoi cua ban", "");
// console.log(typeof yourAge); // check typeof variable
// let message = "ban khong du tuoi vao rap";
// if (Number(yourAge) >= 18) {
//     message = "ban du tuoi vao rap";
// }
// alert(message);
// bài 2: cho 2 số a,b. Tìm số lớn hơn
const a = 15;
const b = 15;
if (a > b) {
    alert(`so lon hon la so ${a}`);
} else if (a < b) {
    alert(`so lon hon la so ${b}`);
} else {
    alert("ca 2 so deu bang nhau");
}