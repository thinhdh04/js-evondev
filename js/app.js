const modal = document.createElement("div");
modal.classList.add("modal");
const modalContent = document.createElement("div");
modalContent.classList.add("modal-content");
modal.appendChild(modalContent);
const modalClose = document.createElement("i");
modalClose.className = "fa fa-times modal-close";
modalContent.appendChild(modalClose);
const modalDesc = document.createElement("div");
modalDesc.classList.add("modal-desc");
modalDesc.textContent =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum quod ducimus, beatae fugiat accusantium ad maiores? Modi quia, dolor deleniti perspiciatis, minus voluptatum aspernatur eligendi nemo, nesciunt mollitia magnam saepe.";
  modalContent.appendChild(modalDesc);
document.body.appendChild(modal);

// const template = `<div class="modal">
//         <div class="modal-content">
//             <i class="fa fa-times modal-close"></i>
//             <div class="modal-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid dolores consequuntur obcaecati ab ut facere repellat sunt ullam tempore vitae aliquam ipsum doloribus voluptatibus velit voluptate architecto, nisi delectus dignissimos.</div>
//             <div class="modal-action">
//                 <button class="modal-submit">Confirm</button>
//                 <button class="modal-cancel">Cancel</button>
//             </div>
//         </div>
//     </div>`;
// const body = document.body;
// body.insertAdjacentHTML("afterbegin", template);

const modalWrapper = document.querySelector(".modal");
if (modalWrapper) {
  setTimeout(function () {
    modal.classList.add("is-show");
  }, 3000);
}
