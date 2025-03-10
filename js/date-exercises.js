// 1. chuong trinh nhap nam sinh va in ra so tuoi
function getAge(year = 0) {
    if (typeof year !== "number") return 0;
    const now = new Date();
    const currentYear = now.getFullYear();
    return currentYear - year;
}
const yourAge= getAge(2004);
// console.log(`tuoi cua ban la: ${yourAge} tuoi`);

// 2. chuong trinh nguoc thoi gian theo tung giay(countdown) dua vao thoi gian dau vao
function countdown(minutes = 30) {
    let seconds = minutes * 60;
    let counter = 0;
    const timer = setInterval(function() {
        counter = counter + 1;
        console.log(counter);
        if (counter === seconds) {
            clearInterval(timer);
            console.log("your time is end!");
        }
    }, 1000);
}
// countdown(1);

// 3. chuong trinh co ten la timeSince, dau vao la thoi gian va tinh thoi gian dau vao so voi thoi gian hien tai
function timeSince(date) {
    const now = new Date();
    const yourDate = new Date(date);
    const seconds = Math.floor((now.getTime() - yourDate.getTime()) / 1000);
    if (seconds < 0) {
        alert("your time is invalid");
    }
    console.log(seconds);
    let timer = seconds / 31536000;
    console.log(timer);
    if (timer > 1) {
        console.log(`${Math.floor(timer)} nam truoc`);
    }
    timer = seconds / 2678400;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} thang truoc`);
    }
    timer = seconds / 604800;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} tuan truoc`);
    }
    timer = seconds / 86400;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} ngay truoc`);
    }
    timer = seconds / 3600;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} gio truoc`);
    }
    timer = seconds / 60;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} phut truoc`);
    }
    timer = seconds;
    if (timer > 1) {
        console.log(`${Math.floor(timer)} giay truoc`);
    }
}

// 1 nam = 365 * 24 * 60 * 60 = 31536000
// 1 thang = 31 * 24 * 60 * 60 = 2678400
// 1 tuan = 7 * 24 * 60 * 60 = 604800
// 1 ngay = 1 * 24 * 60 * 60 = 86400
// 1 gio = 1 * 60 * 60 = 3600
// 1 phut = 1 * 60 = 60

timeSince("Sun Mar 10 2025 14:00:00 GMT+0700 (Indochina Time)")