// 1.textContent
const spinner = document.querySelector("#spinner");
// thay doi text content


// 2. innerText
console.log(spinner.textContent);
console.log(spinner.innerText);
// spinner.textContent  = `<div class="demo">hello html</div>`;


// 3. innerHtml -> lay ra noi dung cua selector bao gom ca html
console.log(spinner.innerHTML);
spinner.innerHTML = `<div class="demo">hello html</div>`;


// 4. 