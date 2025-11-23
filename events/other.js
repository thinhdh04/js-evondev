// document.addEventListener("DOMContentLoaded", function() {
//     console.log("loaded");
// });
const button = document.querySelector(".button");
// removeEventListener
// function handleMouseMove(e) {
//     console.log(e.clientX);
// }
// document.addEventListener("mousemove", handleMouseMove);
// button.addEventListener("click", function() {
//     document.removeEventListener("mousemove", handleMouseMove);
// })
function handleClick() {
    console.log("clicked");
}
function handleClick2() {
    console.log("clicked2");
}
// event handler
// onclick: chap nhan 1 event handler
// button.onclick = handleClick;
// button.onclick = handleClick2;
// addEventListener: chap nhan nhieu event handler
// button.addEventListener("click", handleClick);
button.addEventListener("click", handleClick2, {
    once: true,
});