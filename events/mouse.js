const button = document.querySelector(".button");
// mousemove, mouseover, mouseenter, mouseleave
// mousemove
// button.addEventListener("mousemove", function () {
//   console.log("mousemove");
// });
// mouseover: so se chay khi re chuot vao phan tu va con phan tu do
// button.addEventListener("mouseover", function() {
//     console.log("mouseover")
// })
// mouseenter: so se chay khi re chuot vao phan tu
// button.addEventListener("mouseenter", function () {
//   console.log("mouseenter");
// });
// mouseleave: so se chay khi re chuot vao phan tu roi re ra ngoai
// button.addEventListener("mouseleave", function () {
//   console.log("mouseleave");
// });
// pageX, pageY, clientX, clientY
document.addEventListener("mousemove", function (event) {
  console.log(`pageY: ${event.pageY}`);
  console.log(`clientY: ${event.clientY}`);
});
// clientY: so se lay toa do theo viewport
// pageY: no se lay toa do cua document, khi ma co scroll thi so se thay doi
// X: chieu ngang
// Y: chieu doc