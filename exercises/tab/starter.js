const tabItems = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");
[...tabItems].forEach((item) => item.addEventListener("click", handleTabClick));
function handleTabClick(event) {
  // console.log(event.target);
  // xoa het ta ca class active o cac tab-item
  [...tabItems].forEach((item) => item.classList.remove("active"));
  // sau do add class active vao tab hien tai
  event.target.classList.add("active");
  const tabNumber = event.target.dataset.tab;
  [...tabContents].forEach((item) => {
    item.classList.remove("active");
    if(item.getAttribute("data-tab") === tabNumber) {
      item.classList.add("active");
    }
  });
  // [...tabContents][tabNumber - 1].classList.add("active");
}
