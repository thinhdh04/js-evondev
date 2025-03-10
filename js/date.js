const now = new Date();
// built-in object
console.log(now);

// timestamp & epoch time
// unix time
console.log(now.getTime());
// console.log(new Date(0));

console.log(new Date(1740917549056));
console.log(new Date("Sun Mar 02 2025 19:12:47 GMT+0700 (Indochina Time)"));
console.log(new Date(2021, 5, 1, 23, 23, 23, 23));

// cac ham get trong Date
const birthday = new Date(2004, 4, 30);
// in ra nam
console.log(birthday.getFullYear());
// in ra thang: 0-11
console.log(birthday.getMonth());
// in ra ngay
console.log(birthday.getDate());
// in ra thu: 0-6
console.log(birthday.getDay());
// in ra gio
console.log(birthday.getHours());
// in ra phut
console.log(birthday.getMinutes());
// in ra giay
console.log(birthday.getSeconds());
// in ra timestamp
console.log(birthday.getTime());

// cac ham set trong Date
console.log(`my birhtday : ${birthday}`);
birthday.setFullYear(2000);
birthday.setMonth(11);
birthday.setDate(10);
birthday.setHours(23);
birthday.setMinutes(23);
birthday.setSeconds(23);
console.log(`my birhtday after update : ${birthday}`);

// UTC
// in ra nam
console.log(birthday.getUTCFullYear());
// in ra thang: 0-11
console.log(birthday.getUTCMonth());
// in ra ngay
console.log(birthday.getUTCDate());
// in ra thu: 0-6
console.log(birthday.getUTCDay());
// in ra gio
console.log(birthday.getUTCHours());
// in ra phut
console.log(birthday.getUTCMinutes());
// in ra giay
console.log(birthday.getUTCSeconds());

// date string
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleDateString());
console.log(now.toLocaleDateString("vi-VI"));
console.log(now.toISOString());

const myTime = new Date("Tue May 04 2025 23:28:36 GMT+0700 (Indochina Time)");
const myYear = myTime.getFullYear();
const myMonth = myTime.getMonth() + 1;
const myDate = myTime.getDate();
const prefixMonth = myMonth < 10 ? "0" : "";
console.log(`${myDate}/${prefixMonth}${myMonth}/${myYear}`);

// setTimeout(function () {
//     alert("call me after 3 sec");
// }, 3000);
const timer = setInterval(function () {
    console.log("call me");
}, 1000);
clearInterval(timer);