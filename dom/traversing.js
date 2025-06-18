// 1. parentNode, parentElement, removeChild
// parentNode vs parentElement
const span = document.querySelector("span");
console.log(span.parentNode.parentNode);
console.log(span.parentElement.parentElement);
// selector.parentNode hoac selector.parentElement.removeChild(selector)
// span.parentNode.removeChild(span);


// 2. nextElementSibling vs previousElementSibling
const nextSpan = span.nextElementSibling.nextElementSibling;
console.log(nextSpan);
const previousLink = span.previousElementSibling;
console.log(previousLink);
// 3. childNode vs children
console.log(span.childNodes);
console.log(span.children[1]);
// 4. firstChild vs firstElementChild
console.log(span.firstChild);
console.log(span.firstElementChild);
// 5. lastChild vs lastElementChild
console.log(span.lastChild);
console.log(span.lastElementChild);


// 6. nextSibling vs previousSibling
console.log(span.nextSibling);
console.log(span.previousSibling);