// 1.
function log(value) {
    console.log(value);
}
const boxed = document.querySelector(".boxed");
log(boxed.offsetWidth);
log(boxed.offsetHeight);
log(boxed.offsetLeft);
log(boxed.offsetTop);
log(boxed.offsetParent);


// 2.
log(boxed.clientWidth); //do rong cua phan tu tru di border
log(boxed.clientHeight); //chieu cao cua phan tu tru di border
log(boxed.clientLeft); //vi tri cua no so voi ben trai border
log(boxed.clientTop); //vi tri cua no so voi phia tren border


// 3.
log(window.innerHeight);
log(window.outerHeight);
log(window.innerWidth);
log(window.outerWidth);


// 4. selector.getBoundingClientRect() -> lay ra toa do, kich thuoc cua phan tu
log(boxed.getBoundingClientRect());
// left, x: vi tri cua khoi so voi ben trai
// top: vi tri cua khoi so voi phia tren
// bottom: chieu cao cua khoi + top
// right: do rong cua khoi + left
// width: do rong
// height: chieu cao


// su khac nhau gia Node List va HTML Collection
const li = document.getElementsByTagName("li");
const li2 = document.querySelector("li");
log(li);
log(li2);
// diem giong: co the truy cap bang index, co do dai(length)
// HTML Collection: khong su dung forEach
// NodeList: su dung forEach
for (let i = 0; i < li.length; i++) {
    log(li[i]);
}


// su khac nhau gia parentNode va parentElement
// parentElement co the null
// document.documentElement -> lay the html
log(document.documentElement.parentElement);
log(document.documentElement.parentNode);