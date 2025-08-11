const button = document.querySelector(".change");
button.addEventListener("click", handleChangeColor);
const colors = [
  "#ffa400",
  "#00aefd",
  "#07a787",
  "#ffb86c",
  "#2979ff",
  "#e74c3c",
];
function handleChangeColor() {
  // document.body.setAttribute("style", "background-color: red");
//   lay random mau tu mang colors
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = color;
}
