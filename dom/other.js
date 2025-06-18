// document.title
console.log(document.title);
document.title = "welcome to javascript course";
// document.head
console.log(document.head);
//  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
const meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width, initial-scale=1.0");
document.head.appendChild(meta);
const head = document.getElementsByTagName("head");
head[0].appendChild(meta);
console.log(head);


// insertBefore
// parentNode.insertBefore(newnode, existingNode)
const ul = document.querySelector("ul");
// document.body.insertBefore(ul, document.querySelector("h3").nextElementSibling);
// document.body.insertBefore(ul, document.querySelector("h3"));
// insertAdjacentElement
document.querySelector("h3").insertAdjacentElement("beforebegin", ul)


// replaceChild
const span = document.createElement("span");
span.textContent = "abc";
document.body.replaceChild(span, document.querySelector(".boxed"));
// convert HTML collection, NodeList to Array
const li = document.getElementsByTagName("li");
[...li].filter((item) => item);
console.log(li);
// html body head title
// html: document.documentElement
// body: document.body
// head: document.head
// title: document.title