// 1. su kien scroll
window.addEventListener("scroll", debounceFn(function(e) {
    console.log("scroll")
}, 50))
// 2. debounce
function debounceFn(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
// 3. window.pageYOffset: khoang cach scroll cua window theo chieu doc so voi phia tren cung
// window.pageXOffset: khoang cach scroll cua window theo chieu ngang so voi phia ben trai
// 4. scrollTop, scrollLeft, scrollTo, scroll, scrollHeight, scrollWidth
// scrollHeight: tra ve chieu cao cua element bao gom padding, nhung khong co border
// scrollWidth: tra ve chieu rong cua element bao gom padding, nhung khong co border
const boxed = document.querySelector(".boxed")
boxed.addEventListener("scroll", function() {
    console.log(boxed.scrollTop)
    console.log(boxed.scrollLeft)
})
// scroll(x,y)
// 5. scrollWidth vs offsetWidth
// 6. scrollIntoView(): scroll toi pham vi ma co the thay no