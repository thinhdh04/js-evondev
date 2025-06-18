// them xoa sua node trong js
// 1. tao ra element trong js: document.createElement("tag")
// const div = document.createElement("div");
// 2. selector.appendChild
// document.body -> the body
// document.querySelector("body")
const body = document.body;
// body.appendChild(div);
// div.classList.add("container");
// div.className = "container wrapper";
// div.textContent =
//   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas dolore distinctio ad neque cupiditate nemo quos earum non amet reprehenderit atque in, temporibus eius dolorum dicta iure perspiciatis accusamus. Accusantium?";
// div.innerHTML = `<div class="content"><h3></h3></div>`
// div.setAttribute("data-name", "evondev");

// bai tap tao ra html
const card = document.createElement("div");
card.classList.add("card");
const cardImage = document.createElement("img");
// cardImage.setAttribute("src", "https://source.unsplash.com/random")
cardImage.setAttribute("class", "card-image");
card.appendChild(cardImage);
body.appendChild(card);


// 3. document.createTextNode
const text = document.createTextNode("hello my name is thinh");
const h1 = document.createElement("h1");
body.appendChild(h1);
h1.appendChild(text);


// 4. cloneNode
const h1Clone = h1.cloneNode(true);
body.appendChild(h1Clone);


// 5. element.hasChildNodes -> kiem tra co phan tu con khong
console.log(document.querySelector("h3").hasChildNodes());