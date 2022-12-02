const addForm = document.forms[0];
const addBtn = document.querySelector("button");
const list = document.querySelector(".list");
addBtn.addEventListener("click", generalFunc);
const todos = [];

function generalFunc(e) {
  e.preventDefault();
  let text = addForm[0].value;
  let Result = text.trim();
  if (Result.length <= 0) return;
  var details = {
    text: Result,
  };
  todos.push(details);
  display(details);
  addForm[0].value = " ";
  if (todos.length > 0) {
    document.querySelector("h6").textContent = " ";
  }
  saveToStorage();
}
function saveToStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function display(details) {
  const complete = todos.filter((todo) => todo.text == details.text);
  const completeTodo = complete.map(CreatElement);
  list.append(...completeTodo);
}
function CreatElement(todo) {
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.classList.add("check_box");
  const p = document.createElement("p");
  p.innerHTML = todo.text;
  li.append(div, p);
  return li;
}
window.addEventListener("DOMContentLoaded", (e) => {
  const data = localStorage.getItem("todos");
  if (data) {
    todos.push(...JSON.parse(data));
  }
  display();
});
