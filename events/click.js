// addEventListener
// const button = document.querySelector(".button");
// const span = document.querySelector(".button span");
// function handleClick() {
//   console.log("click button");
// }
// button.addEventListener("click", function () {});
// event: e
// span.addEventListener("click", function(e) {
//     e.stopPropagation();
//     // e.stopImmediatePropagation();
//     console.log("click span");
// }, {
//     capture: true
// });
// span.addEventListener("click", function(e) {
//     console.log("click span 2");
// });
// document.body.addEventListener("click", function() {
//     console.log("click body");
// });
// bubbling: noi bot
// target vs currentTarget
button.addEventListener("click", function (event) {
    // event.target: no se chon chinh xac element ma minh click toi
    console.log(`event.target: ${event.target}`);
    // event.currentTarget: no se chon phan tu ma minh click
    console.log(`event.currentTarget: ${event.currentTarget}`);
});


// event.preventDefault();
const link = document.querySelector(".link");
link.addEventListener("click", function (event) {
    event.preventDefault();
    const name = event.target.dataset.name;
    console.log(name);
    // console.log(event.target);
    // console.log(event.target.style);
    // event.target.style.color = "red";
});


