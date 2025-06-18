// 2.1 document.querySelector("selector") -> tra ve 1 node neu ton tai selector do, nguoc lai tra ve null
const singleNode = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#spinner");
const singleNode4 = document.querySelector(".container .heading");


// 2.2 document.querySelectorAll("selector") -> tra ve mot NodeList chua danh sach cac node, neu khong co gia tri tra ve empty
const multiNodes = document.querySelectorAll(".items");


// 2.3 document.getElementsByClassName -> tra ve mot HTMLCollection chua danh sach cac node, neu khong co thi tra ve empty
const classNodes = document.getElementsByClassName("header");


// 2.4 document.getElementsByTagName("tagName")
const tagNodes = document.getElementsByTagName("li");


// 2.5 document.getElementById("id")
const idNode = document.querySelector("#spinner");
console.log(idNode);


