// 1. viet 1 functin tao ra thong bao
function createNotification(title = "Welcome to notification") {
  const template = `<div class="noti">
        <img src="https://source.unsplash.com/random/300x200" alt="" class="noti-image">
        <div class="noti-content">
            <h3 class="noti-title">${title}</h3>
            <p class="noti-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, laboriosam!</p>
        </div>
    </div>`;
  // insertAdjacentHTML
  document.body.insertAdjacentHTML("afterbegin", template);
}

const randomData = [
  "welcome to javascript course",
  "welcome to this tutorial",
  "Today is good",
  "My name is evondev",
  "I am frontend dev",
];
let lastTitle;

const timer = setInterval(function () {
  const item = document.querySelector(".noti");
  if (item) item.parentNode.removeChild(item);
  const title = randomData[Math.floor(Math.random() * randomData.length)];
  if (lastTitle !== title) {
    createNotification(title);
  }
  lastTitle = title;
}, 3000);
