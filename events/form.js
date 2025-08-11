// 1. Keydown: Khi nhan xuong
const input = document.querySelector(".input");
input.addEventListener("keydown", function (e) {
  // console.log(e.key)
  // console.log(e.keyCode);
  // console.log(e.which)
  //   if (e.key === "Enter") {
  //     console.log("You hit Enter");
  //   } else {
  //     console.log(e.key);
  //   }
});
// 2. keyup: khi nhan roi tha ra
// input.addEventListener("keyup", function(e) {
//     console.log(e.key)
//     e.preventDefault();
// })
// 3. keypress: su kien nay xay ra khi cac ban nhan phim
// keypress se ignore cac phim nhe delete, mui ten, page up, page down, home, end, ctrl, alt, shift, esc
input.addEventListener("keypress", function (e) {
  //   console.log(e.key);
  //   if (e.key === "Home") {
  //     console.log("working");
  //   }
});
// thu tu uu tien keydown -> keypress -> keyup
// 4. change: xay ra khi go xong, nhan Enter hoac nhan chuot ra ngoai 1 lan
input.addEventListener("change", function (e) {
  //   console.log("working");
});
// 5. focus
input.addEventListener("focus", function (e) {
  //   console.log("input is focusing");
});
// 6. blue
input.addEventListener("blur", function (e) {
  //   console.log("input is blur");
});
// 7. submit form
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = this.elements["username"].value;
  const password = this.elements["password"].value;
  if (!username) {
    alert("please enter your username");
    return;
  }
  if (!password) {
    alert("please enter your password");
    return;
  }
  if (password.length <= 3) {
    alert("pass too short");
    return;
  }
  // this, e.target
  // console.log(this)
  // console.log(e.target)
  // this.element
  //   console.log(this.elements);
  //   console.log(this.elements["username"]);
  //   console.log(this.elements["username"].value);
  // const username = this.elements["username"].value;
  // const gender = this.elements["gender"].value;
  // const hobby = this.querySelectorAll(`input[name="hobby"]`);
  // console.log(hobby);
  // let hobbyValues = [];
  // [...hobby].forEach((item) => hobbyValues.push(item.value));
  // console.log(hobbyValues);
  // stuck
});
// validation
