// 1. selector.getAttribute("attribute") -> lay ra gia tri cua attribute selector
// selector: 1 cai
// attribute -> thuoc tinh: href, id, class, src, style
const link = document.querySeletor(".link");
console.log(link.getAttribute("href"));
const li = document.querySelectorAll(".item");
li.forEach((item) => {
    console.log(item.getAttribute("class"));
});
console.log(li);


// 2. selector.setAttribute("attribute", value) -> set gia tri cho attribute nao cua selector
link.setAttribute("target", "_blank");
const listLinks = document.querySelectorAll("a.link");
listLinks.forEach((item) => item.setAttribute("target", "_blank"));


// 3. selector.removeAttribute("attribute") -> xoa attribute cua selector
const p = document.getElementById("spinner");
p.removeAttribute("style");


// 4. hasAttribute("attribute") -> kiem tra attribute co selector nao khong
console.log(p.hasAttribute("class"));
console.log(p.hasAttribute("id"));
if (p.hasAttribute("id")) {
    
}