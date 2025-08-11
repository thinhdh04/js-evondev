window.addEventListener("load", function () {
  // variable declaration
  const form = document.querySelector(".todo-form");
  const todoList = document.querySelector(".todo-list");
  let todos =
    localStorage.length > 0 ? JSON.parse(localStorage.getItem("todoList")) : [];
//   console.log("localStorage", localStorage);

  // console.log("todos", todos)
  if (Array.isArray(todos) && todos.length > 0) {
    [...todos].forEach((item) => createTodoItem(item));
  }
  function createTodoItem(title) {
    const template = `<div class="todo-item">
          <span class="todo-text">${title}</span>
          <i class="fa fa-trash todo-remove"</i>
        </div>`;
    todoList.insertAdjacentHTML("beforeend", template);
  }
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const todoVal = this.elements["todo"].value;
    if (!todoVal) return;
    // main code
    createTodoItem(todoVal);
    todos.push(todoVal);
    localStorage.length > 0 && localStorage.setItem("todoList", JSON.stringify(todos));
    // save to locoStorage
    this.elements["todo"].value = "";
  });

  //   handle remove todo
  todoList.addEventListener("click", function (e) {
    if (e.target.matches(".todo-remove")) {
      // remove todo in DOM
      const todo = e.target.parentNode;
      todo.parentNode.removeChild(todo);
      // remove todo in localStorage
      const todoText = e.target.previousElementSibling.textContent;
      const newTodos = todos.filter((item) => item !== todoText);
      localStorage.setItem("todoList", JSON.stringify(newTodos))
    }
  });
});
